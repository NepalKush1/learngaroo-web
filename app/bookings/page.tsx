"use client";

import { useState, useSyncExternalStore } from "react";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { BookingNoticeModal } from "@/components/booking/BookingNoticeModal";
import { ServiceList } from "@/components/booking/ServiceList";
import { BookingWizard } from "@/components/booking/BookingWizard";
import { PersonaliseJourneyCTA } from "@/components/sections/PersonaliseJourneyCTA";
import { bookingNotice } from "@/lib/booking-notice";
import { agent } from "@/data/agent";
import type { ConsultationService } from "@/data/consultations";

const NOTICE_SESSION_KEY = "learniiz-booking-notice-seen";

function noSubscription() {
  return () => {};
}

export default function BookingsPage() {
  // SSR-safe one-time read of sessionStorage (server always assumes the
  // notice hasn't been seen yet, matching the pre-hydration client render).
  // Avoids calling setState from inside an effect.
  const shouldShowByDefault = useSyncExternalStore(
    noSubscription,
    () => !window.sessionStorage.getItem(NOTICE_SESSION_KEY),
    () => false,
  );
  const [manualNoticeOpen, setManualNoticeOpen] = useState<boolean | null>(null);
  const noticeOpen = manualNoticeOpen ?? shouldShowByDefault;

  const [selectedService, setSelectedService] = useState<ConsultationService | null>(
    null,
  );
  const [showWizard, setShowWizard] = useState(false);

  function handleSelect(service: ConsultationService) {
    setSelectedService(service);
    setShowWizard(true);
  }

  function closeNotice() {
    window.sessionStorage.setItem(NOTICE_SESSION_KEY, "1");
    setManualNoticeOpen(false);
  }

  return (
    <>
      <BookingNoticeModal open={noticeOpen} onClose={closeNotice} />

      {/* Compact hero */}
      <section className="bg-gradient-to-br from-brand-navy to-brand-navy-light py-14 text-white">
        <Container className="text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-primary">
            Book a Consultation
          </p>
          <h1 className="font-heading mx-auto mt-2 max-w-2xl text-3xl font-semibold sm:text-4xl">
            Choose the Migration Service You Need
          </h1>
          <p className="mx-auto mt-3 max-w-xl text-white/70">
            Select the service that best matches your situation, then choose
            a convenient date and time to speak with a Registered Migration
            Agent.
          </p>
          <div className="mt-6 flex flex-col items-center justify-center gap-3">
            {agent.photoSrc ? (
              <Image
                src={agent.photoSrc}
                alt={agent.name}
                width={128}
                height={128}
                className="h-32 w-32 rounded-full object-cover object-top ring-4 ring-white/30"
              />
            ) : (
              <div className="flex h-32 w-32 items-center justify-center rounded-full bg-white/10 ring-4 ring-white/30">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="h-14 w-14 text-brand-primary" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.5 20.25a7.5 7.5 0 0115 0" />
                </svg>
              </div>
            )}
            <p className="text-sm font-medium text-brand-primary">
              Consultations with {agent.name} — {agent.title}, MARN{" "}
              {agent.marn}
            </p>
          </div>
        </Container>
      </section>

      <section className="py-16">
        <Container>
          {/* Booking information notice */}
          <div className="mx-auto max-w-2xl space-y-4 rounded-2xl bg-brand-surface p-7 text-center text-base leading-relaxed text-gray-600">
            <p>
              A consultation provides an initial assessment of your
              circumstances, available options and recommended next steps.
              It does not include preparation or lodgement of an application
              unless separately agreed.
            </p>
            <p>
              Not sure which service to choose? Select the option that most
              closely matches your enquiry.
            </p>
            <button
              type="button"
              onClick={() => setManualNoticeOpen(true)}
              className="text-base font-semibold text-brand-primary hover:underline"
            >
              {bookingNotice.reopenLabel}
            </button>
          </div>

          <div className="mt-12">
            {showWizard && selectedService ? (
              <BookingWizard
                service={selectedService}
                onChangeService={() => setShowWizard(false)}
              />
            ) : (
              <>
                <h2 className="font-heading mx-auto max-w-3xl text-center text-2xl font-semibold text-brand-navy sm:text-3xl">
                  Consultation Options
                </h2>
                <div className="mt-8">
                  <ServiceList
                    selectedId={selectedService?.id}
                    onSelect={handleSelect}
                  />
                </div>
              </>
            )}
          </div>
        </Container>
      </section>

      <PersonaliseJourneyCTA />
    </>
  );
}
