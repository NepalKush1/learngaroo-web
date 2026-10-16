"use client";

import { useEffect } from "react";
import { Button } from "@/components/ui/Button";
import { track } from "@/lib/analytics";
import type { ConsultationService } from "@/data/consultations";
import type { SelectedSlot } from "./StepDateTime";
import type { BookingResult } from "./StepReview";

// Shown when a booking is saved without online payment ("requested").
// Paid bookings finish on /bookings/success after Stripe instead.
export function StepConfirmation({
  service,
  slot,
  result,
  email,
}: {
  service: ConsultationService;
  slot: SelectedSlot;
  result: BookingResult;
  email: string;
}) {
  useEffect(() => {
    track("booking_requested", { service: service.id });
  }, [service.id]);

  return (
    <div className="rounded-2xl border border-brand-primary/15 bg-brand-surface p-8 text-center">
      <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-brand-primary text-white">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="h-7 w-7" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" d="m5 12.5 4.5 4.5L19 7.5" />
        </svg>
      </div>

      <h2 className="font-heading mt-4 text-2xl font-extrabold text-brand-navy">
        Booking request received
      </h2>

      <p className="mx-auto mt-3 max-w-lg text-gray-600">
        We&apos;ve reserved <strong>{slot.label}</strong> for your{" "}
        <strong>{service.title}</strong>
        {slot.localLabel && <> ({slot.localLabel} your time)</>}. We&apos;ll
        contact you shortly to confirm and arrange payment. A copy has been sent
        to <strong>{email}</strong>.
      </p>

      <p className="mt-5 inline-flex rounded-full bg-white px-4 py-2 text-sm text-gray-600 ring-1 ring-gray-200">
        Booking reference:&nbsp;<span className="font-mono font-bold text-brand-navy">{result.reference}</span>
      </p>

      <div className="mt-6">
        <Button href="/">Return to Home</Button>
      </div>
    </div>
  );
}
