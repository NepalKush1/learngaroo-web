import { formatPrice, type ConsultationService } from "@/data/consultations";
import type { ClientDetails } from "./StepDetails";
import type { SelectedSlot } from "./StepDateTime";

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
  onConfirm,
}: {
  service: ConsultationService;
  slot: SelectedSlot;
  details: ClientDetails;
  onEditService: () => void;
  onEditSlot: () => void;
  onEditDetails: () => void;
  onConfirm: () => void;
}) {
  return (
    <div className="space-y-6">
      <div className="rounded-2xl border border-gray-100 p-5">
        <div className="flex items-center justify-between">
          <p className="font-heading font-semibold text-brand-navy">Service</p>
          <button
            type="button"
            onClick={onEditService}
            className="text-sm font-semibold text-brand-blue hover:underline"
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
            className="text-sm font-semibold text-brand-blue hover:underline"
          >
            Edit
          </button>
        </div>
        <ReviewRow label="Date and time" value={slot.label} />
        <ReviewRow label="Timezone" value="Australia/Sydney (AEST/AEDT)" />
      </div>

      <div className="rounded-2xl border border-gray-100 p-5">
        <div className="flex items-center justify-between">
          <p className="font-heading font-semibold text-brand-navy">Your details</p>
          <button
            type="button"
            onClick={onEditDetails}
            className="text-sm font-semibold text-brand-blue hover:underline"
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
        Payment processing isn&apos;t connected yet. Submitting this form will
        record your booking request only — no payment will be taken, and no
        confirmation email will be sent, until payment is set up.
      </div>

      <button
        type="button"
        onClick={onConfirm}
        className="inline-flex w-full items-center justify-center rounded-full bg-brand-blue px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-blue-dark"
      >
        Submit Booking Request
      </button>
    </div>
  );
}
