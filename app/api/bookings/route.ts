import { availability } from "@/data/availability";
import { getActiveConsultations } from "@/data/consultations";
import { bookingRequestSchema } from "@/lib/booking-schema";
import { formatAppointment, isValidTimeZone } from "@/lib/timezone";
import {
  attachStripeSession,
  createBooking,
  releaseHold,
  SlotUnavailableError,
} from "@/lib/server/bookings";
import { paymentsEnabled } from "@/lib/server/config";
import { notifyBookingRequested } from "@/lib/server/notifications";
import { clientIp, rateLimit } from "@/lib/server/rate-limit";
import { createCheckoutSession } from "@/lib/server/stripe";

// POST /api/bookings — validates the request, re-checks the slot is still
// free, saves the booking and (when Stripe is configured) starts checkout.
export async function POST(request: Request) {
  if (!rateLimit(`booking:${clientIp(request)}`, 10, 10 * 60_000)) {
    return Response.json(
      { error: "Too many booking attempts. Please wait a few minutes and try again." },
      { status: 429 },
    );
  }

  const parsed = bookingRequestSchema.safeParse(await request.json().catch(() => null));
  if (!parsed.success) {
    return Response.json({ error: "Please check your details and try again." }, { status: 400 });
  }
  const { serviceId, startsAt, details, clientTimeZone, website } = parsed.data;
  if (website) return Response.json({ error: "Unable to process booking." }, { status: 400 });

  const service = getActiveConsultations().find((item) => item.id === serviceId);
  if (!service) return Response.json({ error: "Unknown service." }, { status: 404 });

  const withPayment = paymentsEnabled();
  let booking;
  try {
    booking = createBooking({
      service,
      startsAt,
      details,
      clientTimeZone: isValidTimeZone(clientTimeZone) ? clientTimeZone : undefined,
      awaitingPayment: withPayment,
    });
  } catch (error) {
    if (error instanceof SlotUnavailableError) {
      return Response.json(
        { error: "Sorry — that time has just been taken. Please choose another time.", code: "slot_taken" },
        { status: 409 },
      );
    }
    throw error;
  }

  if (!withPayment) {
    await notifyBookingRequested(booking);
    return Response.json({ reference: booking.reference, status: booking.status });
  }

  try {
    const session = await createCheckoutSession(
      booking,
      formatAppointment(booking.starts_at, availability.timeZone),
    );
    attachStripeSession(booking.id, session.id);
    return Response.json({ reference: booking.reference, status: booking.status, checkoutUrl: session.url });
  } catch (error) {
    console.error("[bookings] Could not start Stripe checkout", error);
    releaseHold(booking.id);
    return Response.json(
      { error: "We couldn't start the payment step. Please try again, or contact us to book." },
      { status: 502 },
    );
  }
}
