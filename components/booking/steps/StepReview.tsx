"use client";

import { useState } from "react";
import { formatPrice, type ConsultationService } from "@/data/consultations";
import type { ClientDetails } from "./StepDetails";
import { visitorTimeZone, type SelectedSlot } from "./StepDateTime";

export interface BookingResult {
  reference: string;
  status: "requested" | "pending_payment";
}

function ReviewRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex justify-between gap-4 py-2 text-sm">
      <span className="text-gray-500">{label}</span>
      <span className="text-right font-medium text-brand-navy">{value}</span>
    </div>
  );
}

export function StepReview({
  service,
  slot,
  details,
  onEditService,
  onEditSlot,
  onEditDetails,
  onBooked,
  onSlotTaken,
  paymentsEnabled,
}: {
  service: ConsultationService;
  slot: SelectedSlot;
  details: ClientDetails;
  onEditService: () => void;
  onEditSlot: () => void;
  onEditDetails: () => void;
  onBooked: (result: BookingResult) => void;
  onSlotTaken: (message: string) => void;
  paymentsEnabled: boolean;
}) {
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function submit() {
    setSubmitting(true);
    setError(null);
    try {
      const response = await fetch("/api/bookings", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          serviceId: service.id,
          startsAt: slot.startsAt,
          clientTimeZone: visitorTimeZone(),
          details,
        }),
      });
      const result = await response.json().catch(() => ({}));

      if (response.status === 409) {
        onSlotTaken(result.error ?? "That time is no longer available.");
        return;
      }
      if (!response.ok) {
        setError(result.error ?? "Something went wrong. Please try again.");
        return;
      }
      if (result.checkoutUrl) {
        // Hand over to Stripe's secure payment page.
        window.location.assign(result.checkoutUrl);
        return;
      }
      onBooked({ reference: result.reference, status: result.status });
    } catch {
      setError("We couldn't reach the server. Check your connection and try again.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <div className="space-y-6">
      <div className="rounded-2xl border border-gray-100 p-5">
        <div className="flex items-center justify-between">
          <p className="font-heading font-semibold text-brand-navy">Service</p>
          <button
            type="button"
            onClick={onEditService}
            className="text-sm font-semibold text-brand-primary hover:underline"
          >
            Edit
          </button>
        </div>
        <ReviewRow label="Consultation" value={service.title} />
        {service.consultantName && (
          <ReviewRow label="Consultant" value={service.consultantName} />
        )}
        <ReviewRow label="Duration" value={`${service.durationMinutes} minutes`} />
        <ReviewRow
          label="Fee"
          value={`${formatPrice(service.priceInCents, service.currency)} ${
            service.gstIncluded ? "(GST included)" : "(GST not applicable)"
          }`}
        />
      </div>

      <div className="rounded-2xl border border-gray-100 p-5">
        <div className="flex items-center justify-between">
          <p className="font-heading font-semibold text-brand-navy">Appointment</p>
          <button
            type="button"
            onClick={onEditSlot}
            className="text-sm font-semibold text-brand-primary hover:underline"
          >
            Edit
          </button>
        </div>
        <ReviewRow label="Date and time (Melbourne)" value={slot.label} />
        {slot.localLabel && <ReviewRow label="Your local time" value={slot.localLabel} />}
      </div>

      <div className="rounded-2xl border border-gray-100 p-5">
        <div className="flex items-center justify-between">
          <p className="font-heading font-semibold text-brand-navy">Your details</p>
          <button
            type="button"
            onClick={onEditDetails}
            className="text-sm font-semibold text-brand-primary hover:underline"
          >
            Edit
          </button>
        </div>
        <ReviewRow
          label="Name"
          value={`${details.firstName} ${details.lastName}`}
        />
        <ReviewRow label="Email" value={details.emails.join(", ")} />
        <ReviewRow
          label="Phone"
          value={`${details.phoneCountryCode} ${details.phone}`}
        />
        <ReviewRow
          label="Address"
          value={[
            details.addressLine1,
            details.addressLine2,
            details.city,
            details.state,
            details.postcode,
            details.country,
          ]
            .filter(Boolean)
            .join(", ")}
        />
        <ReviewRow label="Enquiry" value={details.enquiryDescription} />
        {details.decisionDate && (
          <ReviewRow label="Date of decision" value={details.decisionDate} />
        )}
        {details.reviewDeadline && (
          <ReviewRow label="Review deadline" value={details.reviewDeadline} />
        )}
      </div>

      <div className="rounded-xl bg-brand-surface p-4 text-sm text-gray-600">
        {paymentsEnabled
          ? "Your time is held while you complete payment on our secure payment page (powered by Stripe). Card details are entered with Stripe and are never seen or stored by us."
          : "We'll reserve this time and contact you to confirm and arrange payment of the consultation fee."}
      </div>

      {error && (
        <p className="rounded-xl bg-red-50 p-4 text-sm font-medium text-red-700" role="alert">
          {error}
        </p>
      )}

      <button
        type="button"
        onClick={submit}
        disabled={submitting}
        className="inline-flex w-full items-center justify-center rounded-full bg-brand-primary px-6 py-3.5 text-base font-semibold text-white transition-colors hover:bg-brand-primary-dark disabled:cursor-wait disabled:opacity-70"
      >
        {submitting
          ? "Securing your time…"
          : paymentsEnabled
            ? `Confirm & pay ${formatPrice(service.priceInCents, service.currency)}`
            : "Send booking request"}
      </button>
    </div>
  );
}
