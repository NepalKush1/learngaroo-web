import { redirect } from "next/navigation";
import { releaseHold } from "@/lib/server/bookings";

// Stripe sends clients here when they leave the payment page without
// paying. Free the held slot straight away rather than waiting for expiry.
export async function GET(request: Request) {
  const bookingId = new URL(request.url).searchParams.get("booking");
  if (bookingId) releaseHold(bookingId);
  redirect("/bookings?payment=cancelled");
}
