import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Button, ArrowIcon } from "@/components/ui/Button";
import { FaqItem } from "@/components/sections/FaqItem";
import { GeneralInfoNotice } from "@/components/ui/GeneralInfoNotice";
import { processingTimesUrl, type VisaGuide } from "@/data/visa-guides";
import type { Accent } from "@/lib/accents";
import { serviceTitleInSentence } from "@/data/services";

// The in-depth sections of a service page. Each one is small and
// data-driven so the page reads as a guide, not a brochure.

function CheckIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} className={className} aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="m5 12.5 4.5 4.5L19 7.5" />
    </svg>
  );
}

// ── Key facts ─────────────────────────────────────────────────────────
// Government fee, stay, work rights: the four numbers people search for,
// shown with the date they were checked and a link to the source.
export function KeyFactsStrip({ guide, accent }: { guide: VisaGuide; accent: Accent }) {
  return (
    <section className="relative -mt-10 pb-4">
      <Container>
        <Reveal>
          <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {guide.keyFacts.map((fact) => (
              <li
                key={fact.label}
                className="rounded-2xl border border-gray-100 bg-white p-5 shadow-float transition-transform duration-300 hover:-translate-y-1"
              >
                <span className={`text-xs font-bold uppercase tracking-[0.14em] ${accent.text}`}>{fact.label}</span>
                <span className="font-heading mt-2 block text-2xl font-extrabold leading-tight text-brand-navy">{fact.value}</span>
                {fact.note && <span className="mt-1.5 block text-xs leading-relaxed text-gray-500">{fact.note}</span>}
              </li>
            ))}
          </ul>
          <p className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-gray-500">
            <span>
              Figures checked on {guide.factsAsAt} against{" "}
              <a href={guide.sourceUrl} target="_blank" rel="noopener noreferrer" className="font-semibold text-brand-primary hover:underline">
                {guide.sourceLabel} ↗
              </a>
              . Government fees are per applicant and separate from our consultation fee.
            </span>
            <a href={processingTimesUrl} target="_blank" rel="noopener noreferrer" className="font-semibold text-brand-primary hover:underline">
              Check current processing times ↗
            </a>
          </p>
        </Reveal>
      </Container>
    </section>
  );
}

// ── Alert ─────────────────────────────────────────────────────────────
// A dated rule change or deadline warning, shown once near the top.
export function GuideAlert({ alert }: { alert: NonNullable<VisaGuide["alert"]> }) {
  return (
    <section className="py-6">
      <Container>
        <Reveal>
          <div className="flex gap-4 rounded-2xl border border-amber-200 bg-amber-50 p-5 sm:p-6">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-amber-400 text-brand-navy" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="h-5 w-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z" />
              </svg>
            </span>
            <div>
              <h2 className="font-heading text-lg font-bold text-brand-navy">{alert.title}</h2>
              <p className="mt-1.5 text-[15px] leading-relaxed text-gray-700">{alert.body}</p>
              {alert.href && (
                <a href={alert.href} target="_blank" rel="noopener noreferrer" className="mt-3 inline-block text-sm font-bold text-brand-primary hover:underline">
                  {alert.linkLabel ?? "Read more"} ↗
                </a>
              )}
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}

// ── Eligibility + documents ───────────────────────────────────────────
export function EligibilityAndDocuments({ guide, accent }: { guide: VisaGuide; accent: Accent }) {
  return (
    <section className="py-16 sm:py-20">
      <Container className="grid gap-12 lg:grid-cols-[1fr_1.1fr]">
        <Reveal>
          <SectionHeading
            eyebrow="Eligibility"
            title="Can you apply?"
            subtitle="The main requirements the Department assesses. Each one needs evidence, not just a tick."
          />
          <ul className="mt-8 space-y-3">
            {guide.eligibility.map((item) => (
              <li key={item} className="flex gap-3 rounded-2xl border border-gray-100 bg-white p-4 shadow-sm">
                <span className={`mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-white ${accent.tile}`}>
                  <CheckIcon className="h-3.5 w-3.5" />
                </span>
                <span className="text-[15px] leading-relaxed text-gray-700">{item}</span>
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={100}>
          <SectionHeading
            eyebrow="Document checklist"
            title="What you will need to show"
            subtitle="A typical list. The exact documents depend on your passport country, history and who you include."
          />
          <div className="mt-8 space-y-3">
            {guide.documents.map((group, index) => (
              <details key={group.group} open={index === 0} className="group rounded-2xl border border-gray-100 bg-white p-5 shadow-sm open:ring-1 open:ring-brand-primary/20">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-heading text-lg font-bold text-brand-navy [&::-webkit-details-marker]:hidden">
                  <span className="flex items-center gap-3">
                    <span className={`flex h-8 w-8 items-center justify-center rounded-lg text-sm font-extrabold text-white ${accent.tile}`}>
                      {index + 1}
                    </span>
                    {group.group}
                  </span>
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-mint text-brand-primary transition-transform duration-200 group-open:rotate-45" aria-hidden="true">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} className="h-4 w-4">
                      <path strokeLinecap="round" d="M12 5v14M5 12h14" />
                    </svg>
                  </span>
                </summary>
                <ul className="mt-4 space-y-2 border-t border-gray-100 pt-4">
                  {group.items.map((item) => (
                    <li key={item} className="flex gap-3 text-[15px] leading-relaxed text-gray-600">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-primary" />
                      {item}
                    </li>
                  ))}
                </ul>
              </details>
            ))}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}

// ── Process with visible outputs ──────────────────────────────────────
export function ProcessSteps({ guide, serviceTitle }: { guide: VisaGuide; serviceTitle: string }) {
  return (
    <section className="bg-brand-surface py-16 sm:py-20">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="How the application works"
            title="Every step has a visible output"
            highlight="visible output"
            subtitle={`What happens, in order, when we work on ${serviceTitleInSentence(serviceTitle)} with you, and what you hold at the end of each step.`}
            align="center"
          />
        </Reveal>
        <ol className="relative mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <Reveal className="absolute left-[12.5%] right-[12.5%] top-7 hidden lg:block">
            <div className="bg-gradient-brand draw-line h-0.5 opacity-50" aria-hidden="true" />
          </Reveal>
          {guide.steps.map((step, index) => (
            <Reveal key={step.title} as="li" delay={index * 160}>
              <div className="relative flex h-full flex-col rounded-3xl border border-gray-100 bg-white p-6 shadow-card">
                <span className="bg-gradient-brand-deep step-pop flex h-14 w-14 items-center justify-center rounded-2xl text-lg font-extrabold text-white shadow-lg shadow-brand-primary/25">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="font-heading mt-5 text-xl font-bold text-brand-navy">{step.title}</h3>
                <p className="mt-2 flex-1 text-[15px] leading-relaxed text-gray-600">{step.description}</p>
                <p className="mt-4 rounded-xl bg-brand-mint p-3 text-sm leading-relaxed text-brand-primary-dark">
                  <span className="font-bold">You get:</span> {step.output}
                </p>
              </div>
            </Reveal>
          ))}
        </ol>
      </Container>
    </section>
  );
}

// ── What comes next ───────────────────────────────────────────────────
export function Pathways({ guide, accent }: { guide: VisaGuide; accent: Accent }) {
  return (
    <section className="py-16 sm:py-20">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="After this visa"
            title="Where it can lead"
            subtitle="Most visas are one step in a longer journey. These are the usual next steps."
          />
        </Reveal>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {guide.pathways.map((pathway, index) => {
            const inner = (
              <>
                <span className={`block h-1.5 w-12 rounded-full ${accent.tile}`} aria-hidden="true" />
                <h3 className="font-heading mt-4 text-lg font-bold text-brand-navy">{pathway.title}</h3>
                <p className="mt-2 flex-1 text-[15px] leading-relaxed text-gray-600">{pathway.description}</p>
                {pathway.href && (
                  <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-bold text-brand-primary">
                    Learn more <ArrowIcon />
                  </span>
                )}
              </>
            );
            const className =
              "flex h-full flex-col rounded-3xl border border-gray-100 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-float";
            return (
              <Reveal key={pathway.title} delay={index * 80}>
                {pathway.href ? (
                  <a href={pathway.href} className={className}>{inner}</a>
                ) : (
                  <div className={className}>{inner}</div>
                )}
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

// ── Service FAQ ───────────────────────────────────────────────────────
export function GuideFaqSection({ guide, serviceTitle }: { guide: VisaGuide; serviceTitle: string }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: guide.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };

  return (
    <section className="bg-brand-surface py-16 sm:py-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
      />
      <Container className="grid gap-12 lg:grid-cols-[1fr_1.5fr]">
        <Reveal>
          <SectionHeading
            eyebrow="FAQ"
            title={`Common questions about ${serviceTitleInSentence(serviceTitle)}`}
            subtitle="General answers to what clients ask most. Your situation may differ, so book a consultation for advice on your case."
          />
          <div className="mt-8 flex flex-wrap gap-3">
            <Button href="/bookings">
              Book a consultation
              <ArrowIcon />
            </Button>
            <Button href="/faq" variant="outline">
              All questions
            </Button>
          </div>
          <GeneralInfoNotice className="mt-8 max-w-sm" />
        </Reveal>
        <Reveal delay={100}>
          <div className="space-y-3">
            {guide.faqs.map((faq) => (
              <FaqItem key={faq.question} question={faq.question} answer={faq.answer} />
            ))}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
