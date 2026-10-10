"use client";

import { useEffect, useRef, useState } from "react";
import type { ConsultationService } from "@/data/consultations";
import { StepDateTime, type SelectedSlot } from "./steps/StepDateTime";
import { StepDetails, type ClientDetails } from "./steps/StepDetails";
import { StepReview, type BookingResult } from "./steps/StepReview";
import { StepConfirmation } from "./steps/StepConfirmation";

type WizardStep = "service" | "datetime" | "details" | "review" | "confirmation";

const STEP_LABELS: { key: WizardStep; label: string }[] = [
  { key: "service", label: "Choose Service" },
  { key: "datetime", label: "Date & Time" },
  { key: "details", label: "Your Details" },
  { key: "review", label: "Review & Confirm" },
  { key: "confirmation", label: "Confirmation" },
];

export function BookingWizard({
  service,
  onChangeService,
  paymentsEnabled,
}: {
  service: ConsultationService;
  onChangeService: () => void;
  paymentsEnabled: boolean;
}) {
  const [step, setStep] = useState<WizardStep>("datetime");
  const [slot, setSlot] = useState<SelectedSlot | null>(null);
  const [details, setDetails] = useState<ClientDetails | null>(null);
  const [result, setResult] = useState<BookingResult | null>(null);
  const [slotNotice, setSlotNotice] = useState<string | null>(null);

  const stepIndex = STEP_LABELS.findIndex((s) => s.key === step);
  const containerRef = useRef<HTMLDivElement>(null);
  const firstRender = useRef(true);

  // Bring the wizard back into view on every step change, so the next step
  // doesn't start scrolled down at the footer.
  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
      return;
    }
    containerRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  }, [step]);

  return (
    <div ref={containerRef} className="scroll-mt-28 rounded-3xl border border-gray-100 bg-white p-7 shadow-md sm:p-10">
      <div className="mb-2 flex items-center justify-between">
        <p className="text-sm text-gray-500">
          Booking: <span className="font-semibold text-brand-navy">{service.title}</span>
        </p>
        <button
          type="button"
          onClick={onChangeService}
          className="text-sm font-semibold text-brand-primary hover:underline"
        >
          Change service
        </button>
      </div>

      {/* Progress indicator */}
      <ol
        className="mt-6 flex flex-wrap items-center gap-x-8 gap-y-4 border-b border-gray-100 pb-6"
        aria-label="Booking progress"
      >
        {STEP_LABELS.map((item, index) => {
          const isActive = index === stepIndex;
          const isDone = index < stepIndex;
          return (
            <li
              key={item.key}
              aria-current={isActive ? "step" : undefined}
              className={`flex items-center gap-2.5 text-base font-semibold transition-colors ${
                isActive
                  ? "text-brand-primary"
                  : isDone
                    ? "text-brand-primary"
                    : "text-gray-400"
              }`}
            >
              <span
                className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-sm font-bold transition-all ${
                  isActive
                    ? "bg-brand-primary text-white shadow-md ring-4 ring-brand-primary/15"
                    : isDone
                      ? "bg-brand-green text-white"
                      : "bg-gray-100 text-gray-400"
                }`}
              >
                {isDone ? (
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2.5}
                    className="h-4 w-4"
                    aria-hidden="true"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                ) : (
                  index + 1
                )}
              </span>
              {item.label}
            </li>
          );
        })}
      </ol>

      <div className="mt-8">
        {step === "datetime" && (
          <StepDateTime
            service={service}
            notice={slotNotice}
            onSelect={(selected) => {
              setSlotNotice(null);
              setSlot(selected);
              setStep("details");
            }}
          />
        )}

        {step === "details" && (
          <StepDetails
            service={service}
            initialValues={details ?? undefined}
            onSubmit={(values) => {
              setDetails(values);
              setStep("review");
            }}
          />
        )}

        {step === "review" && slot && details && (
          <StepReview
            service={service}
            slot={slot}
            details={details}
            onEditService={onChangeService}
            onEditSlot={() => setStep("datetime")}
            onEditDetails={() => setStep("details")}
            paymentsEnabled={paymentsEnabled}
            onBooked={(booked) => {
              setResult(booked);
              setStep("confirmation");
            }}
            onSlotTaken={(message) => {
              setSlot(null);
              setSlotNotice(message);
              setStep("datetime");
            }}
          />
        )}

        {step === "confirmation" && slot && result && details && (
          <StepConfirmation service={service} slot={slot} result={result} email={details.emails[0]} />
        )}
      </div>
    </div>
  );
}
