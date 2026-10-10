import { Button } from "@/components/ui/Button";
import type { ConsultationService } from "@/data/consultations";
import type { SelectedSlot } from "./StepDateTime";

export function StepConfirmation({
  service,
  slot,
}: {
  service: ConsultationService;
  slot: SelectedSlot;
}) {
  return (
    <div className="rounded-2xl border border-dashed border-brand-green/40 bg-brand-surface p-8 text-center">
      <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-brand-green/15 text-brand-primary">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="h-7 w-7" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75l1.5 1.5L15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      </div>

      <h2 className="font-heading mt-4 text-2xl font-semibold text-brand-navy">
        Booking request received
      </h2>

      <p className="mt-3 text-gray-600">
        We&apos;ve noted your request for <strong>{service.title}</strong> on{" "}
        <strong>{slot.label}</strong>. This is a placeholder confirmation —{" "}
        <strong>no payment has been taken</strong> and no email has been sent
        yet, since payment and email delivery aren&apos;t connected in this
        version of the site.
      </p>

      <p className="mt-3 text-sm text-gray-500">
        Once payment processing is set up, this step will collect your
        consultation fee and send you a real confirmation email with your
        booking reference and meeting details.
      </p>

      <div className="mt-6">
        <Button href="/">Return to Home</Button>
      </div>
    </div>
  );
}
