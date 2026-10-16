import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Button, ArrowIcon } from "@/components/ui/Button";
import { FaqItem } from "@/components/sections/FaqItem";
import { GeneralInfoNotice } from "@/components/ui/GeneralInfoNotice";
import { processingTimesUrl } from "@/data/visa-guides";
import type { VisaPage } from "@/data/visas";
import type { Accent } from "@/lib/accents";

// The sections of a visa library page. Each is data-driven and small so a
// page reads as a reference guide: facts first, then eligibility, documents,
// steps, conditions, costs, what follows, risks, FAQ and sources.

function CheckIcon({ className = "h-3.5 w-3.5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} className={className} aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="m5 12.5 4.5 4.5L19 7.5" />
    </svg>
  );
}

export interface PageSection {
  id: string;
  label: string;
}

// Which sections a page has, in order, for the sticky nav.
export function sectionsFor(page: VisaPage): PageSection[] {
  const sections: PageSection[] = [{ id: "glance", label: "At a glance" }];
  if (page.streams && page.streams.length > 0) sections.push({ id: "streams", label: "Streams" });
  sections.push({ id: "eligibility", label: page.kind === "visa" ? "Eligibility" : "Requirements" });
  if (page.documents.length > 0) sections.push({ id: "documents", label: "Documents" });
  if (page.steps.length > 0) sections.push({ id: "steps", label: page.kind === "visa" ? "How to apply" : "Process" });
  if (page.conditions && page.conditions.length > 0) sections.push({ id: "conditions", label: "Conditions" });
  if (page.costs.length > 0) sections.push({ id: "costs", label: "Costs" });
  if (page.afterGrant && page.afterGrant.length > 0) sections.push({ id: "after", label: "After grant" });
  if (page.pathways.length > 0) sections.push({ id: "pathways", label: "What next" });
  if (page.risks && page.risks.length > 0) sections.push({ id: "risks", label: "Risks" });
  if (page.faqs.length > 0) sections.push({ id: "faq", label: "FAQ" });
  sections.push({ id: "sources", label: "Sources" });
  return sections;
}

// ── Sticky in-page navigation ──────────────────────────────────────────
export function VisaSectionNav({ sections, officialUrl }: { sections: PageSection[]; officialUrl?: string }) {
  return (
    <nav aria-label="On this page" className="sticky top-20 z-30 border-y border-gray-100 bg-white/90 backdrop-blur">
      <Container>
        <ul className="-mx-1 flex gap-1 overflow-x-auto py-2 text-sm font-semibold text-brand-navy/70 [scrollbar-width:none]">
          {sections.map((section) => (
            <li key={section.id} className="shrink-0">
              <a href={`#${section.id}`} className="block rounded-full px-3 py-1.5 transition-colors hover:bg-brand-mint hover:text-brand-primary-dark">
                {section.label}
              </a>
            </li>
          ))}
          {officialUrl && (
            <li className="ml-auto shrink-0">
              <a href={officialUrl} target="_blank" rel="noopener noreferrer" className="block rounded-full border border-brand-navy/15 px-4 py-1.5 text-brand-navy hover:bg-brand-mint">
                Home Affairs page ↗
              </a>
            </li>
          )}
        </ul>
      </Container>
    </nav>
  );
}

// ── At a glance ───────────────────────────────────────────────────────
export function KeyFactsGrid({ page, accent }: { page: VisaPage; accent: Accent }) {
  return (
    <section id="glance" className="relative -mt-10 scroll-mt-32 pb-6">
      <Container>
        <Reveal>
          <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {page.keyFacts.map((fact) => (
              <li key={fact.label} className="rounded-2xl border border-gray-100 bg-white p-5 shadow-float transition-transform duration-300 hover:-translate-y-1">
                <span className={`text-xs font-bold uppercase tracking-[0.14em] ${accent.text}`}>{fact.label}</span>
                <span className="font-heading mt-2 block text-xl font-extrabold leading-tight text-brand-navy sm:text-2xl">{fact.value}</span>
                {fact.note && <span className="mt-1.5 block text-xs leading-relaxed text-gray-500">{fact.note}</span>}
              </li>
            ))}
          </ul>
          <p className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-gray-500">
            <span>
              Figures checked on {page.factsAsAt} against the Department of Home Affairs and the legislation listed under Sources. Government charges are per applicant and separate from any professional fee.
            </span>
            {page.kind === "visa" && (
              <a href={processingTimesUrl} target="_blank" rel="noopener noreferrer" className="font-semibold text-brand-primary hover:underline">
                Check current processing times ↗
              </a>
            )}
          </p>
        </Reveal>
      </Container>
    </section>
  );
}

// ── Alert ─────────────────────────────────────────────────────────────
export function VisaAlertBanner({ alert }: { alert: NonNullable<VisaPage["alert"]> }) {
  return (
    <section className="py-4">
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

// ── Streams ───────────────────────────────────────────────────────────
export function VisaStreams({ page, accent }: { page: VisaPage; accent: Accent }) {
  if (!page.streams || page.streams.length === 0) return null;
  return (
    <section id="streams" className="scroll-mt-32 bg-brand-surface py-16 sm:py-20">
      <Container>
        <Reveal>
          <SectionHeading eyebrow="Streams" title={`The ${page.streams.length} streams of the ${page.name}`} subtitle="Each stream has its own criteria. Pick the one that matches your situation before you read the eligibility rules." align="center" />
        </Reveal>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {page.streams.map((stream, index) => (
            <Reveal key={stream.name} delay={index * 60}>
              <div className="flex h-full flex-col rounded-3xl border border-gray-100 bg-white p-6 shadow-sm">
                <span className={`block h-1.5 w-12 rounded-full ${accent.tile}`} aria-hidden="true" />
                <h3 className="font-heading mt-4 text-lg font-bold text-brand-navy">{stream.name}</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-gray-700">{stream.summary}</p>
                <p className="mt-3 text-sm leading-relaxed text-gray-600"><span className="font-bold text-brand-navy">For:</span> {stream.forWhom}</p>
                {(stream.stay || stream.cost || stream.prPathway) && (
                  <dl className="mt-4 grid gap-2 border-t border-gray-100 pt-4 text-sm">
                    {stream.stay && <div><dt className="text-xs font-bold uppercase tracking-wider text-gray-500">Stay</dt><dd className="text-gray-700">{stream.stay}</dd></div>}
                    {stream.cost && <div><dt className="text-xs font-bold uppercase tracking-wider text-gray-500">Cost</dt><dd className="text-gray-700">{stream.cost}</dd></div>}
                    {stream.prPathway && <div><dt className="text-xs font-bold uppercase tracking-wider text-gray-500">Pathway to PR</dt><dd className="text-gray-700">{stream.prPathway}</dd></div>}
                  </dl>
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

// ── Who it suits + eligibility ────────────────────────────────────────
export function VisaEligibility({ page, accent }: { page: VisaPage; accent: Accent }) {
  const isVisa = page.kind === "visa";
  return (
    <section id="eligibility" className="scroll-mt-32 py-16 sm:py-20">
      <Container className="grid gap-12 lg:grid-cols-[0.9fr_1.3fr]">
        <Reveal>
          <SectionHeading eyebrow={isVisa ? "Who it suits" : "Who this applies to"} title={isVisa ? "Is this the right visa for you?" : "When this matters"} />
          <ul className="mt-8 space-y-3">
            {page.whoFor.map((item) => (
              <li key={item} className="flex gap-3 rounded-2xl border border-gray-100 bg-white p-4 shadow-sm">
                <span className={`mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-white ${accent.tile}`}>
                  <CheckIcon />
                </span>
                <span className="text-[15px] leading-relaxed text-gray-700">{item}</span>
              </li>
            ))}
          </ul>
          {page.familyNote && (
            <div className="mt-6 rounded-2xl border border-brand-primary/20 bg-brand-mint/60 p-5">
              <p className="text-xs font-bold uppercase tracking-wider text-brand-primary-dark">Including family</p>
              <p className="mt-1.5 text-[15px] leading-relaxed text-gray-700">{page.familyNote}</p>
            </div>
          )}
        </Reveal>
        <Reveal delay={100}>
          <SectionHeading
            eyebrow={isVisa ? "Eligibility" : "Requirements"}
            title={isVisa ? "What the Department assesses" : "What the law requires"}
            subtitle={isVisa ? "Each criterion needs evidence, not just a tick. The provision it comes from is shown where it helps." : "The rules as set out in the Migration Act, the Regulations and Home Affairs policy."}
          />
          <ol className="mt-8 space-y-3">
            {page.eligibility.map((criterion, index) => (
              <li key={criterion.title} className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm">
                <div className="flex items-start gap-3">
                  <span className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-sm font-extrabold text-white ${accent.tile}`}>{index + 1}</span>
                  <div className="min-w-0 flex-1">
                    <h3 className="font-heading text-lg font-bold text-brand-navy">{criterion.title}</h3>
                    <p className="mt-1.5 text-[15px] leading-relaxed text-gray-700">{criterion.detail}</p>
                    {criterion.legal && <p className="mt-2 text-xs font-semibold text-gray-500">Legal basis: {criterion.legal}</p>}
                  </div>
                </div>
              </li>
            ))}
          </ol>
        </Reveal>
      </Container>
    </section>
  );
}

// ── Documents ─────────────────────────────────────────────────────────
export function VisaDocuments({ page, accent }: { page: VisaPage; accent: Accent }) {
  if (page.documents.length === 0) return null;
  return (
    <section id="documents" className="scroll-mt-32 bg-brand-surface py-16 sm:py-20">
      <Container className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
        <Reveal>
          <SectionHeading eyebrow="Document checklist" title="What you will need to show" subtitle="A typical list from the Home Affairs checklist. The exact documents depend on your passport country, history and who you include." />
          <div className="mt-8 flex flex-wrap gap-3">
            <Button href="/bookings" size="sm">
              Get a personalised checklist
              <ArrowIcon />
            </Button>
          </div>
        </Reveal>
        <Reveal delay={100}>
          <div className="space-y-3">
            {page.documents.map((group, index) => (
              <details key={group.group} open={index === 0} className="group rounded-2xl border border-gray-100 bg-white p-5 shadow-sm open:ring-1 open:ring-brand-primary/20">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-heading text-lg font-bold text-brand-navy [&::-webkit-details-marker]:hidden">
                  <span className="flex items-center gap-3">
                    <span className={`flex h-8 w-8 items-center justify-center rounded-lg text-sm font-extrabold text-white ${accent.tile}`}>{index + 1}</span>
                    {group.group}
                  </span>
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-mint text-brand-primary transition-transform duration-200 group-open:rotate-45" aria-hidden="true">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} className="h-4 w-4"><path strokeLinecap="round" d="M12 5v14M5 12h14" /></svg>
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

// ── Steps ─────────────────────────────────────────────────────────────
export function VisaSteps({ page }: { page: VisaPage }) {
  if (page.steps.length === 0) return null;
  return (
    <section id="steps" className="scroll-mt-32 py-16 sm:py-20">
      <Container>
        <Reveal>
          <SectionHeading eyebrow={page.kind === "visa" ? "How to apply" : "The process"} title="Step by step, with what you hold at each stage" highlight="what you hold" align="center" />
        </Reveal>
        <ol className="mt-12 space-y-4">
          {page.steps.map((step, index) => (
            <Reveal key={step.title} as="li" delay={index * 80}>
              <div className="grid gap-4 rounded-3xl border border-gray-100 bg-white p-6 shadow-card sm:grid-cols-[auto_1fr_minmax(0,0.9fr)] sm:items-start">
                <span className="bg-gradient-brand-deep flex h-12 w-12 items-center justify-center rounded-2xl text-base font-extrabold text-white shadow-lg shadow-brand-primary/25">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="font-heading text-lg font-bold text-brand-navy">{step.title}</h3>
                  <p className="mt-1.5 text-[15px] leading-relaxed text-gray-600">{step.description}</p>
                </div>
                <p className="rounded-xl bg-brand-mint p-3 text-sm leading-relaxed text-brand-primary-dark">
                  <span className="font-bold">You hold:</span> {step.output}
                </p>
              </div>
            </Reveal>
          ))}
        </ol>
      </Container>
    </section>
  );
}

// ── Conditions ────────────────────────────────────────────────────────
export function VisaConditions({ page }: { page: VisaPage }) {
  if (!page.conditions || page.conditions.length === 0) return null;
  return (
    <section id="conditions" className="scroll-mt-32 bg-brand-surface py-16 sm:py-20">
      <Container>
        <Reveal>
          <SectionHeading eyebrow="Visa conditions" title="Conditions usually attached" subtitle="Schedule 8 of the Migration Regulations sets the conditions. Breaching one can lead to cancellation under section 116 of the Migration Act, so check your grant letter and VEVO." />
        </Reveal>
        <Reveal delay={100}>
          <div className="mt-8 overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-card">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b border-gray-100 text-xs uppercase tracking-[0.12em] text-gray-500">
                  <th scope="col" className="px-5 py-4 font-bold">Condition</th>
                  <th scope="col" className="px-5 py-4 font-bold">What it means</th>
                </tr>
              </thead>
              <tbody>
                {page.conditions.map((condition) => (
                  <tr key={condition.code} className="border-b border-gray-100 last:border-0">
                    <th scope="row" className="whitespace-nowrap px-5 py-4 align-top font-heading text-base font-extrabold text-brand-navy">{condition.code}</th>
                    <td className="px-5 py-4 leading-relaxed text-gray-700">{condition.meaning}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}

// ── Costs ─────────────────────────────────────────────────────────────
export function VisaCosts({ page }: { page: VisaPage }) {
  if (page.costs.length === 0) return null;
  return (
    <section id="costs" className="scroll-mt-32 py-16 sm:py-20">
      <Container className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
        <Reveal>
          <SectionHeading eyebrow="Costs" title="What it costs" subtitle={`Government charges as at ${page.factsAsAt}. Third-party costs vary, so they are shown as typical ranges or named without a figure.`} />
          <div className="mt-8 flex flex-wrap gap-3">
            <Button href="/tools/fee-calculator" variant="outline" size="sm">
              Fee calculator
              <ArrowIcon />
            </Button>
          </div>
        </Reveal>
        <Reveal delay={100}>
          <div className="overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-card">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b border-gray-100 text-xs uppercase tracking-[0.12em] text-gray-500">
                  <th scope="col" className="px-5 py-4 font-bold">Item</th>
                  <th scope="col" className="px-5 py-4 font-bold">Amount</th>
                </tr>
              </thead>
              <tbody>
                {page.costs.map((cost) => (
                  <tr key={cost.item} className="border-b border-gray-100 last:border-0">
                    <td className="px-5 py-4 align-top">
                      <span className="font-semibold text-brand-navy">{cost.item}</span>
                      {cost.note && <span className="mt-1 block text-xs leading-relaxed text-gray-500">{cost.note}</span>}
                    </td>
                    <td className="whitespace-nowrap px-5 py-4 align-top font-heading text-base font-extrabold text-brand-navy">{cost.amount}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}

// ── After grant ───────────────────────────────────────────────────────
export function VisaAfterGrant({ page, accent }: { page: VisaPage; accent: Accent }) {
  if (!page.afterGrant || page.afterGrant.length === 0) return null;
  return (
    <section id="after" className="scroll-mt-32 bg-brand-surface py-16 sm:py-20">
      <Container>
        <Reveal>
          <SectionHeading eyebrow="After grant" title="Your obligations and what changes" />
        </Reveal>
        <ul className="mt-8 grid gap-3 sm:grid-cols-2">
          {page.afterGrant.map((item, index) => (
            <Reveal key={item} as="li" delay={index * 50}>
              <div className="flex h-full gap-3 rounded-2xl border border-gray-100 bg-white p-4 shadow-sm">
                <span className={`mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-white ${accent.tile}`}>
                  <CheckIcon />
                </span>
                <span className="text-[15px] leading-relaxed text-gray-700">{item}</span>
              </div>
            </Reveal>
          ))}
        </ul>
      </Container>
    </section>
  );
}

// ── Pathways ──────────────────────────────────────────────────────────
export function VisaPathways({ page, accent }: { page: VisaPage; accent: Accent }) {
  if (page.pathways.length === 0) return null;
  return (
    <section id="pathways" className="scroll-mt-32 py-16 sm:py-20">
      <Container>
        <Reveal>
          <SectionHeading eyebrow="What next" title="Where it can lead" subtitle="Most visas are one step in a longer journey. These are the usual next moves and the rules that decide them." />
        </Reveal>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {page.pathways.map((pathway, index) => {
            const inner = (
              <>
                <span className={`block h-1.5 w-12 rounded-full ${accent.tile}`} aria-hidden="true" />
                <h3 className="font-heading mt-4 text-lg font-bold text-brand-navy">{pathway.title}</h3>
                <p className="mt-2 flex-1 text-[15px] leading-relaxed text-gray-600">{pathway.description}</p>
                {pathway.href && (
                  <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-bold text-brand-primary">
                    Read more <ArrowIcon />
                  </span>
                )}
              </>
            );
            const className = "flex h-full flex-col rounded-3xl border border-gray-100 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-float";
            return (
              <Reveal key={pathway.title} delay={index * 80}>
                {pathway.href ? (
                  pathway.href.startsWith("/") ? (
                    <Link href={pathway.href} className={className}>{inner}</Link>
                  ) : (
                    <a href={pathway.href} target="_blank" rel="noopener noreferrer" className={className}>{inner}</a>
                  )
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

// ── Risks ─────────────────────────────────────────────────────────────
export function VisaRisks({ page }: { page: VisaPage }) {
  if (!page.risks || page.risks.length === 0) return null;
  return (
    <section id="risks" className="scroll-mt-32 bg-brand-surface py-16 sm:py-20">
      <Container className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
        <Reveal>
          <SectionHeading eyebrow="Common refusal reasons" title="Where applications go wrong" subtitle="The problems that lead to refusals, delays or later cancellation. Most are avoidable with the right evidence lodged the first time." />
        </Reveal>
        <Reveal delay={100}>
          <ul className="space-y-3">
            {page.risks.map((risk) => (
              <li key={risk} className="flex gap-3 rounded-2xl border border-rose-100 bg-white p-4 shadow-sm">
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-rose-100 text-rose-700" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} className="h-3.5 w-3.5"><path strokeLinecap="round" d="M12 8v4m0 4h.01" /></svg>
                </span>
                <span className="text-[15px] leading-relaxed text-gray-700">{risk}</span>
              </li>
            ))}
          </ul>
        </Reveal>
      </Container>
    </section>
  );
}

// ── FAQ ───────────────────────────────────────────────────────────────
export function VisaFaqs({ page }: { page: VisaPage }) {
  if (page.faqs.length === 0) return null;
  return (
    <section id="faq" className="scroll-mt-32 py-16 sm:py-20">
      <Container className="grid gap-12 lg:grid-cols-[1fr_1.5fr]">
        <Reveal>
          <SectionHeading eyebrow="FAQ" title={`Questions about the ${page.name}`} subtitle="General answers from the official rules. Your situation may differ, so book a consultation for advice on your case." />
          <div className="mt-8 flex flex-wrap gap-3">
            <Button href="/bookings">
              Book a consultation
              <ArrowIcon />
            </Button>
          </div>
          <GeneralInfoNotice className="mt-8 max-w-sm" />
        </Reveal>
        <Reveal delay={100}>
          <div className="space-y-3">
            {page.faqs.map((faq) => (
              <FaqItem key={faq.question} question={faq.question} answer={faq.answer} />
            ))}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}

// ── Sources and legislation ───────────────────────────────────────────
export function VisaSources({ page }: { page: VisaPage }) {
  return (
    <section id="sources" className="scroll-mt-32 bg-brand-surface py-16 sm:py-20">
      <Container className="grid gap-10 lg:grid-cols-2">
        <Reveal>
          <SectionHeading eyebrow="Legal basis" title="Legislation and instruments" subtitle="The provisions this page relies on. Legislation changes; the register always shows the current compilation." />
          <ul className="mt-6 space-y-2">
            {page.legislation.map((item) => (
              <li key={`${item.label}-${item.url}`}>
                <a href={item.url} target="_blank" rel="noopener noreferrer" className="flex items-start gap-2 rounded-xl border border-gray-100 bg-white px-4 py-3 text-sm font-semibold text-brand-navy transition-colors hover:border-brand-primary/30 hover:text-brand-primary">
                  <span className="mt-0.5 shrink-0 text-brand-primary" aria-hidden="true">§</span>
                  <span>{item.label} ↗</span>
                </a>
              </li>
            ))}
          </ul>
        </Reveal>
        <Reveal delay={100}>
          <SectionHeading eyebrow="Sources" title={`Official pages checked on ${page.factsAsAt}`} subtitle="Every figure on this page was read from these pages on that date." />
          <ul className="mt-6 space-y-2">
            {page.sources.map((source) => (
              <li key={`${source.label}-${source.url}`}>
                <a href={source.url} target="_blank" rel="noopener noreferrer" className="block rounded-xl border border-gray-100 bg-white px-4 py-3 text-sm font-semibold text-brand-navy transition-colors hover:border-brand-primary/30 hover:text-brand-primary">
                  {source.label} ↗
                </a>
              </li>
            ))}
          </ul>
        </Reveal>
      </Container>
    </section>
  );
}

// ── Related ───────────────────────────────────────────────────────────
export function VisaRelated({ page }: { page: VisaPage }) {
  if (page.related.length === 0) return null;
  return (
    <section className="py-12">
      <Container>
        <Reveal>
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-brand-primary">Related</p>
          <ul className="mt-4 flex flex-wrap gap-2">
            {page.related.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="inline-flex items-center gap-1.5 rounded-full border border-brand-navy/15 bg-white px-4 py-2 text-sm font-semibold text-brand-navy transition-colors hover:border-brand-primary/40 hover:bg-brand-mint">
                  {item.label}
                  <ArrowIcon />
                </Link>
              </li>
            ))}
          </ul>
        </Reveal>
      </Container>
    </section>
  );
}
