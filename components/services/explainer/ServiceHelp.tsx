import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import Link from "next/link";
import { ArrowIcon } from "@/components/ui/Button";
import { serviceTitleInSentence, type Service } from "@/data/services";
import type { VisaGuide } from "@/data/visa-guides";
import type { ConsultationService } from "@/data/consultations";
import { siteConfig } from "@/lib/site-config";
import { consultationPrice } from "./ServiceHero";

// How we help: who the service is for, the consultation that starts it, and
// each step of the work with what you hold at the end of it.

function Check() {
  return (
    <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-mint text-brand-primary" aria-hidden="true">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={3} className="h-3.5 w-3.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="m5 12.5 4.5 4.5L19 7.5" />
      </svg>
    </span>
  );
}

export function ServiceHelp({ service, guide, consultation }: { service: Service; guide: VisaGuide; consultation?: ConsultationService }) {
  return (
    <section id="help" className="relative scroll-mt-32 overflow-hidden py-16 sm:py-24">
      <div className="bg-dots pointer-events-none absolute inset-0 opacity-40" aria-hidden="true" />
      <Container className="relative">
        <Reveal>
          <SectionHeading
            eyebrow="Working with us"
            title={`How we help with ${serviceTitleInSentence(service.title)}`}
            highlight="we help"
            subtitle="What happens, in order, when we work on it with you, and what you hold at the end of each step."
            align="center"
          />
        </Reveal>

        <div className="mt-12 grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div className="space-y-6">
            <Reveal>
              <div className="rounded-[2rem] border border-gray-100 bg-white p-6 shadow-card sm:p-8">
                <h3 className="font-heading text-xl font-bold text-brand-navy">Who this is for</h3>
                <ul className="mt-5 space-y-3.5">
                  {service.whoItsFor.map((item) => (
                    <li key={item} className="flex gap-3 text-[15px] leading-relaxed text-gray-700">
                      <Check />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>

            {consultation && (
              <Reveal delay={80}>
                <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-brand-primary-dark to-[#0f4f31] p-6 text-white shadow-float sm:p-8">
                  <span className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-[2.5rem] bg-white/10" aria-hidden="true" />
                  <p className="relative text-xs font-bold uppercase tracking-[0.16em] text-brand-green-light">Start with a consultation</p>
                  <p className="font-heading relative mt-2 text-4xl font-extrabold">
                    {consultationPrice(consultation)}
                    {consultation.gstIncluded && <span className="ml-2 text-base font-semibold text-white/70">incl. GST</span>}
                  </p>
                  <p className="relative mt-2 text-[15px] leading-relaxed text-white/85">
                    A {consultation.durationMinutes}-minute {serviceTitleInSentence(consultation.title)}
                    {consultation.consultantName ? ` with ${consultation.consultantName}` : ""}, Registered Migration Agent (MARN {siteConfig.marn}). We look at your situation against these rules and tell you honestly where you stand.
                  </p>
                  <div className="relative mt-6 flex flex-wrap items-center gap-3">
                    <Link
                      href="/bookings"
                      data-track="book_cta"
                      className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-bold text-brand-primary-dark shadow-lg transition-transform hover:-translate-y-0.5 hover:bg-brand-mint"
                    >
                      Book a consultation
                      <ArrowIcon />
                    </Link>
                  </div>
                  <p className="relative mt-4 text-xs leading-relaxed text-white/60">Government visa charges are separate and are paid to Home Affairs, not to us.</p>
                </div>
              </Reveal>
            )}
          </div>

          <ol className="relative space-y-5">
            <span className="absolute bottom-6 left-6 top-6 w-0.5 bg-gradient-to-b from-brand-primary/50 via-brand-blue/30 to-transparent" aria-hidden="true" />
            {guide.steps.map((step, index) => (
              <Reveal key={step.title} as="li" delay={index * 120} className="relative">
                <div className="flex gap-4 sm:gap-5">
                  <span className="bg-gradient-brand-deep step-pop relative flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl text-base font-extrabold text-white shadow-lg shadow-brand-primary/25">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div className="min-w-0 flex-1 rounded-3xl border border-gray-100 bg-white p-5 shadow-card transition-transform duration-300 hover:-translate-y-0.5 sm:p-6">
                    <h3 className="font-heading text-lg font-bold text-brand-navy">{step.title}</h3>
                    <p className="mt-1.5 text-[15px] leading-relaxed text-gray-600">{step.description}</p>
                    <p className="mt-3 rounded-xl bg-brand-mint p-3 text-sm leading-relaxed text-brand-primary-dark">
                      <span className="font-bold">You get:</span> {step.output}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </Container>
    </section>
  );
}
