import type { Metadata } from "next";
import { BookingsView } from "@/components/booking/BookingsView";
import { paymentsEnabled } from "@/lib/server/config";

export const metadata: Metadata = {
  title: "Book a Consultation",
  description:
    "Book a paid consultation with Registered Migration Agent Kush Kumar Nepal (MARN 2418608). Choose your service, pick a time in Melbourne or your local time, and pay securely online.",
};

export default async function BookingsPage({
  searchParams,
}: {
  searchParams: Promise<{ payment?: string }>;
}) {
  const { payment } = await searchParams;
  return (
    <BookingsView
      paymentsEnabled={paymentsEnabled()}
      paymentCancelled={payment === "cancelled"}
    />
  );
}
