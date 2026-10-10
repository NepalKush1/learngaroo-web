import "server-only";
import { createHmac, timingSafeEqual } from "node:crypto";
import type { Booking } from "./bookings";
import { serverConfig } from "./config";

// Minimal Stripe Checkout client over the REST API (no SDK needed).
// Card details are entered on Stripe's hosted page — they never touch
// this site.

const STRIPE_API = "https://api.stripe.com/v1";

export interface CheckoutSession {
  id: string;
  url: string | null;
  payment_status: "paid" | "unpaid" | "no_payment_required";
  status: "open" | "complete" | "expired";
  client_reference_id: string | null;
}

async function stripeRequest<T>(method: "GET" | "POST", path: string, body?: URLSearchParams) {
  const response = await fetch(`${STRIPE_API}${path}`, {
    method,
    headers: {
      Authorization: `Bearer ${serverConfig.stripe.secretKey}`,
      ...(body && { "Content-Type": "application/x-www-form-urlencoded" }),
    },
    body,
    cache: "no-store",
  });
  const json = await response.json();
  if (!response.ok) {
    throw new Error(`Stripe ${method} ${path} failed: ${json?.error?.message ?? response.status}`);
  }
  return json as T;
}

export async function createCheckoutSession(booking: Booking, appointmentLabel: string) {
  const site = serverConfig.siteUrl;
  // Stripe requires a session to stay open for at least 30 minutes.
  const expiresAt = Math.floor(Date.parse(booking.hold_expires_at!) / 1000) + 60;

  const params = new URLSearchParams({
    mode: "payment",
    client_reference_id: booking.id,
    customer_email: booking.email ?? "",
    success_url: `${site}/bookings/success?session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: `${site}/api/bookings/cancel?booking=${booking.id}`,
    expires_at: String(expiresAt),
    "metadata[booking_id]": booking.id,
    "metadata[reference]": booking.reference,
    "payment_intent_data[description]": `${booking.service_title} — ${booking.reference}`,
    "line_items[0][quantity]": "1",
    "line_items[0][price_data][currency]": (booking.currency ?? "AUD").toLowerCase(),
    "line_items[0][price_data][unit_amount]": String(booking.price_cents ?? 0),
    "line_items[0][price_data][product_data][name]": booking.service_title ?? "Consultation",
    "line_items[0][price_data][product_data][description]": appointmentLabel,
  });

  return stripeRequest<CheckoutSession>("POST", "/checkout/sessions", params);
}

export function retrieveCheckoutSession(sessionId: string) {
  return stripeRequest<CheckoutSession>(
    "GET",
    `/checkout/sessions/${encodeURIComponent(sessionId)}`,
  );
}

// Verifies the `Stripe-Signature` header on webhook requests.
// https://docs.stripe.com/webhooks#verify-manually
export function verifyWebhookSignature(payload: string, header: string | null): boolean {
  const secret = serverConfig.stripe.webhookSecret;
  if (!secret || !header) return false;

  const parts = Object.fromEntries(
    header.split(",").map((part) => part.split("=", 2) as [string, string]),
  );
  const timestamp = Number(parts.t);
  const signatures = header
    .split(",")
    .filter((part) => part.startsWith("v1="))
    .map((part) => part.slice(3));
  if (!timestamp || signatures.length === 0) return false;
  if (Math.abs(Date.now() / 1000 - timestamp) > 300) return false;

  const expected = createHmac("sha256", secret).update(`${timestamp}.${payload}`).digest("hex");
  return signatures.some((signature) => {
    const a = Buffer.from(signature, "hex");
    const b = Buffer.from(expected, "hex");
    return a.length === b.length && timingSafeEqual(a, b);
  });
}
