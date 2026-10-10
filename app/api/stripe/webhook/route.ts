import { confirmPaidBooking, markExpiredBySession } from "@/lib/server/bookings";
import { notifyBookingConfirmed } from "@/lib/server/notifications";
import { verifyWebhookSignature } from "@/lib/server/stripe";

// Stripe webhook — the reliable path for confirming payments, even if the
// client closes the browser before returning to the site. Subscribe to
// checkout.session.completed and checkout.session.expired.
export async function POST(request: Request) {
  const payload = await request.text();
  if (!verifyWebhookSignature(payload, request.headers.get("stripe-signature"))) {
    return new Response("Invalid signature", { status: 400 });
  }

  const event = JSON.parse(payload) as {
    type: string;
    data: { object: { id: string; client_reference_id: string | null; payment_status: string } };
  };
  const session = event.data.object;

  if (event.type === "checkout.session.completed" && session.payment_status === "paid") {
    const result = session.client_reference_id ? confirmPaidBooking(session.client_reference_id) : null;
    if (result?.changed) await notifyBookingConfirmed(result.booking);
  }

  if (event.type === "checkout.session.expired") {
    markExpiredBySession(session.id);
  }

  return Response.json({ received: true });
}
