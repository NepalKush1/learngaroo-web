import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { availability } from "@/data/availability";
import { formatAppointment } from "@/lib/timezone";
import {
  confirmPaidBooking,
  getBookingById,
  getBookingByStripeSession,
  type Booking,
} from "@/lib/server/bookings";
import { paymentsEnabled } from "@/lib/server/config";
import { notifyBookingConfirmed } from "@/lib/server/notifications";
import { retrieveCheckoutSession } from "@/lib/server/stripe";

export const metadata: Metadata = {
  title: "Booking confirmed",
  robots: { index: false },
};

// Stripe redirects here after payment. We confirm with Stripe directly
// (never trusting the URL alone) and send confirmation emails once.
async function resolveBooking(sessionId: string): Promise<{ booking?: Booking; paid: boolean }> {
  if (!paymentsEnabled()) return { paid: false };
  const booking = getBookingByStripeSession(sessionId);
  if (!booking) return { paid: false };
  if (booking.status === "confirmed") return { booking, paid: true };

  try {
    const session = await retrieveCheckoutSession(sessionId);
    if (session.payment_status === "paid" && session.client_reference_id === booking.id) {
      const result = confirmPaidBooking(booking.id);
      if (result?.changed) await notifyBookingConfirmed(result.booking);
      return { booking: result?.booking ?? getBookingById(booking.id), paid: true };
    }
  } catch (error) {
    console.error("[bookings] Could not verify Stripe session", error);
  }
  return { booking, paid: false };
}

export default async function BookingSuccessPage({
  searchParams,
}: {
  searchParams: Promise<{ session_id?: string }>;
}) {
  const { session_id: sessionId } = await searchParams;
  const { booking, paid } = sessionId ? await resolveBooking(sessionId) : { paid: false };

  return (
    <section className="bg-brand-surface py-24">
      <Container className="max-w-2xl">
        <div className="rounded-[2rem] bg-white p-10 text-center shadow-[0_30px_60px_-30px_rgba(11,26,46,0.3)]">
          <div
            className={`mx-auto flex h-16 w-16 items-center justify-center rounded-full ${
              paid ? "bg-brand-primary text-white" : "bg-amber-100 text-amber-700"
            }`}
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="h-8 w-8" aria-hidden="true">
              {paid ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="m5 12.5 4.5 4.5L19 7.5" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4m0 4h.01M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
              )}
            </svg>
          </div>

          {paid && booking ? (
            <>
              <h1 className="font-heading mt-6 text-3xl font-extrabold text-brand-navy">
                Your consultation is confirmed
              </h1>
              <p className="mt-3 text-gray-600">
                Thank you, {booking.first_name}. Your payment was received and a
                confirmation email with a calendar invite is on its way.
              </p>
              <dl className="mx-auto mt-8 max-w-sm divide-y divide-gray-100 rounded-2xl border border-gray-100 text-left text-sm">
                <div className="flex justify-between gap-4 p-4">
                  <dt className="text-gray-500">Consultation</dt>
                  <dd className="text-right font-semibold text-brand-navy">{booking.service_title}</dd>
                </div>
                <div className="flex justify-between gap-4 p-4">
                  <dt className="text-gray-500">When (Melbourne)</dt>
                  <dd className="text-right font-semibold text-brand-navy">
                    {formatAppointment(booking.starts_at, availability.timeZone)}
                  </dd>
                </div>
                <div className="flex justify-between gap-4 p-4">
                  <dt className="text-gray-500">Reference</dt>
                  <dd className="font-mono font-semibold text-brand-navy">{booking.reference}</dd>
                </div>
              </dl>
            </>
          ) : (
            <>
              <h1 className="font-heading mt-6 text-3xl font-extrabold text-brand-navy">
                We&apos;re confirming your payment
              </h1>
              <p className="mt-3 text-gray-600">
                We couldn&apos;t confirm your payment just yet. If you completed
                payment, you&apos;ll receive a confirmation email shortly. If
                nothing arrives within 15 minutes, please contact us and quote
                your booking reference.
              </p>
            </>
          )}

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Button href="/">Back to home</Button>
            <Button href="/contact" variant="outline">
              Contact us
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
