import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/sections/PageHero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Button, ArrowIcon } from "@/components/ui/Button";
import { ConsultationCTA } from "@/components/sections/ConsultationCTA";
import { GeneralInfoNotice } from "@/components/ui/GeneralInfoNotice";
import { FaqItem } from "@/components/sections/FaqItem";
import { allocationsNote, allocationsSourceUrl, getStateProgram, statePrograms, statusLabels, type ProgramStatus } from "@/data/state-nomination";
import { siteConfig } from "@/lib/site-config";
import { AssessmentCta } from "@/components/state-assessment/AssessmentCta";

export async function generateStaticParams() {
  return statePrograms.map((program) => ({ slug: program.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const program = getStateProgram(slug);
  if (!program) return {};
  return {
    title: `${program.name} State Nomination 2026-27: Subclass 190 & 491 Guide`,
    description: `${program.short} skilled nomination for subclass 190 and 491: current status, 2026-27 allocation, streams, selection method, occupation list, eligibility criteria and how to apply, checked on ${program.checkedOn}.`,
  };
}

const switcherGroups: { label: string; statuses: ProgramStatus[] }[] = [
  { label: "Open or limited", statuses: ["open", "limited"] },
  { label: "Closed", statuses: ["closed"] },
  { label: "Awaiting 2026-27 settings", statuses: ["pending"] },
];

const num = (value: number | null) => (value === null ? "TBA" : value.toLocaleString("en-AU"));

export default async function StateProgramPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const program = getStateProgram(slug);
  if (!program) notFound();

  const status = statusLabels[program.status];
  const calculator =
    program.slug === "tasmania"
      ? { href: "/tools/tasmania-points-calculator", label: "Tasmania nomination calculator" }
      : program.slug === "australian-capital-territory"
        ? { href: "/tools/canberra-matrix-calculator", label: "Canberra Matrix calculator" }
        : program.slug === "victoria"
          ? { href: "/tools/victoria-points-calculator", label: "Victorian Points Test calculator" }
          : null;

  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: program.faqs.map((faq) => ({ "@type": "Question", name: faq.question, acceptedAnswer: { "@type": "Answer", text: faq.answer } })),
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.url },
        { "@type": "ListItem", position: 2, name: "State nomination", item: `${siteConfig.url}/state-nomination` },
        { "@type": "ListItem", position: 3, name: program.name },
      ],
    },
  ];

  const sections = [
    { id: "allocation", label: "Allocation" },
    { id: "streams", label: "Streams" },
    { id: "summary", label: "Official summary" },
    { id: "criteria", label: "Criteria" },
    { id: "apply", label: "How to apply" },
    { id: "faq", label: "FAQ" },
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }} />
      <PageHero
        eyebrow="State nomination · subclass 190 and 491"
        title={`${program.name} state nomination guide`}
        subtitle={`How ${program.short} nominates skilled migrants for the Skilled Nominated (190) and Skilled Work Regional (491) visas, and where the program stands for ${program.allocation.year}.`}
      />

      {/* Header stats */}
      <section className="relative -mt-10 pb-4">
        <Container>
          <Reveal>
            <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              <li className="rounded-2xl border border-gray-100 bg-white p-5 shadow-float">
                <span className="text-xs font-bold uppercase tracking-[0.14em] text-brand-primary">Program status</span>
                <span className={`mt-2 inline-flex rounded-full px-3 py-1 text-sm font-bold ring-1 ${status.className}`}>{status.label}</span>
                <span className="mt-1.5 block text-xs text-gray-500">Checked {program.checkedOn}</span>
              </li>
              <li className="rounded-2xl border border-gray-100 bg-white p-5 shadow-float">
                <span className="text-xs font-bold uppercase tracking-[0.14em] text-brand-primary">Streams</span>
                <span className="font-heading mt-2 block text-2xl font-extrabold text-brand-navy">{program.streams.length}</span>
                <span className="mt-1.5 block text-xs text-gray-500">{program.streams.filter((s) => s.audience !== "Onshore").length} open to offshore applicants</span>
              </li>
              <li className="rounded-2xl border border-gray-100 bg-white p-5 shadow-float">
                <span className="text-xs font-bold uppercase tracking-[0.14em] text-brand-primary">Occupation list</span>
                <span className="font-heading mt-2 block text-base font-extrabold leading-snug text-brand-navy">{program.occupationList.name}</span>
              </li>
              <li className="rounded-2xl border border-gray-100 bg-white p-5 shadow-float">
                <span className="text-xs font-bold uppercase tracking-[0.14em] text-brand-primary">Selection</span>
                <span className="mt-2 block text-sm font-semibold leading-snug text-brand-navy">{program.selection}</span>
              </li>
            </ul>
          </Reveal>
        </Container>
      </section>

      <section className="pb-6 pt-2">
        <Container>
          <AssessmentCta stateShort={program.short} />
        </Container>
      </section>

      {/* Sticky in-page nav */}
      <nav aria-label="On this page" className="sticky top-20 z-30 border-y border-gray-100 bg-white/90 backdrop-blur">
        <Container>
          <ul className="-mx-1 flex gap-1 overflow-x-auto py-2 text-sm font-semibold text-brand-navy/70 [scrollbar-width:none]">
            {sections.map((section) => (
              <li key={section.id} className="shrink-0">
                <a href={`#${section.id}`} className="block rounded-full px-3 py-1.5 transition-colors hover:bg-brand-mint hover:text-brand-primary-dark">{section.label}</a>
              </li>
            ))}
            <li className="ml-auto shrink-0">
              <a href={program.officialUrl} target="_blank" rel="noopener noreferrer" className="block rounded-full border border-brand-navy/15 px-4 py-1.5 text-brand-navy hover:bg-brand-mint">Official site ↗</a>
            </li>
          </ul>
        </Container>
      </nav>

      {/* State switcher */}
      <section className="py-8">
        <Container>
          <div className="rounded-2xl border border-gray-100 bg-brand-surface p-4">
            <p className="text-xs font-bold uppercase tracking-[0.14em] text-gray-500">Switch state or territory</p>
            <div className="mt-3 grid gap-3 md:grid-cols-3">
              {switcherGroups.map((group) => {
                const items = statePrograms.filter((item) => group.statuses.includes(item.status));
                return (
                  <div key={group.label}>
                    <p className="text-xs font-semibold text-gray-500">{group.label} ({items.length})</p>
                    <ul className="mt-1.5 flex flex-wrap gap-1.5">
                      {items.map((item) => (
                        <li key={item.slug}>
                          <Link
                            href={`/state-nomination/${item.slug}`}
                            aria-current={item.slug === program.slug ? "page" : undefined}
                            className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-sm font-bold transition-colors ${
                              item.slug === program.slug ? "border-brand-primary bg-brand-primary text-white" : "border-gray-200 bg-white text-brand-navy hover:border-brand-primary/40 hover:bg-brand-mint"
                            }`}
                          >
                            {item.short}
                            <span className={`h-2 w-2 rounded-full ${statusLabels[item.status].className.split(" ")[0].replace("bg-", "bg-").replace("-100", "-400")}`} aria-hidden="true" />
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>
          </div>
        </Container>
      </section>

      {/* Allocation */}
      <section id="allocation" className="scroll-mt-32 py-10">
        <Container className="grid gap-8 lg:grid-cols-[1.2fr_1fr]">
          <Reveal>
            <SectionHeading eyebrow="Allocation" title={`${program.name} nomination places`} />
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              <div className="rounded-2xl border border-brand-primary/20 bg-brand-mint/60 p-5">
                <p className="text-xs font-bold uppercase tracking-wider text-brand-primary-dark">This program year · {program.allocation.year}</p>
                <dl className="mt-3 grid grid-cols-2 gap-3">
                  <div><dt className="text-xs text-gray-600">Subclass 190</dt><dd className="font-heading text-3xl font-extrabold text-brand-navy">{num(program.allocation.sc190)}</dd></div>
                  <div><dt className="text-xs text-gray-600">Subclass 491</dt><dd className="font-heading text-3xl font-extrabold text-brand-navy">{num(program.allocation.sc491)}</dd></div>
                </dl>
                <p className="mt-2 text-xs text-gray-600">{program.allocation.sc190 === null ? "Not announced when we checked." : "Allocations are ceilings, not guarantees. Invitations are issued progressively."}{program.allocation.note ? ` ${program.allocation.note}` : ""}</p>
              </div>
              <div className="rounded-2xl border border-gray-100 bg-white p-5">
                <p className="text-xs font-bold uppercase tracking-wider text-gray-500">Last program year · {program.allocation.prev?.year ?? "2025-26"}</p>
                {program.allocation.prev ? (
                  <>
                    <dl className="mt-3 grid grid-cols-2 gap-3">
                      <div><dt className="text-xs text-gray-600">Subclass 190</dt><dd className="font-heading text-3xl font-extrabold text-brand-navy">{num(program.allocation.prev.sc190)}</dd></div>
                      <div><dt className="text-xs text-gray-600">Subclass 491</dt><dd className="font-heading text-3xl font-extrabold text-brand-navy">{num(program.allocation.prev.sc491)}</dd></div>
                    </dl>
                    {program.allocation.prev.note && <p className="mt-2 text-xs text-gray-600">{program.allocation.prev.note}</p>}
                  </>
                ) : (
                  <p className="mt-3 text-sm text-gray-600">Figures for the previous year were not confirmed from an official source when we checked.</p>
                )}
              </div>
            </div>
            {program.fee && (
              <p className="mt-4 rounded-2xl border border-gray-100 bg-brand-surface px-4 py-3 text-sm text-gray-700">
                <span className="font-bold text-brand-navy">Nomination fee:</span> {program.fee}
              </p>
            )}
            <p className="mt-3 text-xs text-gray-500">
              Source: <a href={allocationsSourceUrl} target="_blank" rel="noopener noreferrer" className="font-semibold text-brand-primary hover:underline">Home Affairs, state and territory nomination allocations ↗</a> and {program.officialName}. {allocationsNote} Checked {program.checkedOn}.
            </p>
          </Reveal>
          <Reveal delay={100}>
            <div className="flex h-full flex-col gap-4">
              <div className="rounded-2xl border border-amber-200 bg-amber-50 p-5 sm:p-6">
                <p className="font-heading text-lg font-bold text-brand-navy">Where the program stands</p>
                <p className="mt-1.5 text-[15px] leading-relaxed text-gray-700">{program.statusNote}</p>
                <a href={program.officialUrl} target="_blank" rel="noopener noreferrer" className="mt-3 inline-block text-sm font-bold text-brand-primary hover:underline">Check the latest on {program.officialName} ↗</a>
              </div>
              {program.latest && (
                <div className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm sm:p-6">
                  <p className="text-xs font-bold uppercase tracking-wider text-brand-primary">Latest published data · {program.latest.asAt}</p>
                  <p className="font-heading mt-1 text-lg font-bold text-brand-navy">{program.latest.title}</p>
                  <dl className="mt-3 divide-y divide-gray-100 text-sm">
                    {program.latest.items.map((item) => (
                      <div key={item.label} className="grid gap-0.5 py-2 sm:grid-cols-[minmax(0,1fr)_minmax(0,1.3fr)] sm:gap-3">
                        <dt className="text-gray-500">{item.label}</dt>
                        <dd className="font-semibold text-brand-navy">{item.value}</dd>
                      </div>
                    ))}
                  </dl>
                  {program.latest.note && <p className="mt-2 text-xs text-gray-500">{program.latest.note}</p>}
                  {program.latest.url && (
                    <a href={program.latest.url} target="_blank" rel="noopener noreferrer" className="mt-2 inline-block text-sm font-bold text-brand-primary hover:underline">Source page ↗</a>
                  )}
                </div>
              )}
            </div>
          </Reveal>
        </Container>
      </section>

      {/* Streams */}
      <section id="streams" className="scroll-mt-32 bg-brand-surface py-16 sm:py-20">
        <Container>
          <Reveal>
            <SectionHeading eyebrow="Streams" title={`How ${program.short} nominates`} subtitle="The pathways, which visa each leads to, and who can use them." align="center" />
          </Reveal>
          <div className="mt-10 grid gap-5 sm:grid-cols-2">
            {program.streams.map((stream, index) => {
              const streamStatus = statusLabels[stream.status ?? program.status];
              return (
              <Reveal key={stream.name} delay={index * 60}>
                <div className="flex h-full flex-col rounded-3xl border border-gray-100 bg-white p-6 shadow-sm">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className={`rounded-full px-2.5 py-0.5 text-xs font-bold ring-1 ${streamStatus.className}`}>{streamStatus.label}</span>
                    <span className="rounded-full bg-brand-navy px-2.5 py-0.5 text-xs font-bold text-white">Visa {stream.visa}</span>
                    <span className="rounded-full bg-brand-mint px-2.5 py-0.5 text-xs font-bold text-brand-primary-dark ring-1 ring-brand-primary/10">{stream.audience}</span>
                  </div>
                  <h3 className="font-heading mt-4 text-lg font-bold text-brand-navy">{stream.name}</h3>
                  <p className="mt-2 flex-1 text-[15px] leading-relaxed text-gray-600">{stream.forWhom}</p>
                  <dl className="mt-4 grid grid-cols-2 gap-2 border-t border-gray-100 pt-4 text-xs">
                    <div><dt className="font-bold uppercase tracking-wider text-gray-500">Selection</dt><dd className="mt-0.5 text-gray-700">{program.selection}</dd></div>
                    <div><dt className="font-bold uppercase tracking-wider text-gray-500">Occupation list</dt><dd className="mt-0.5 text-gray-700">{program.occupationList.name}</dd></div>
                  </dl>
                </div>
              </Reveal>
              );
            })}
          </div>
        </Container>
      </section>

      {/* Official summary */}
      <section id="summary" className="scroll-mt-32 py-16 sm:py-20">
        <Container className="grid gap-12 lg:grid-cols-[1fr_1fr]">
          <Reveal>
            <SectionHeading eyebrow="Official summary" title="Key points from the program" />
            <p className="mt-4 text-sm font-bold text-brand-navy">Status (checked {program.checkedOn}): <span className={`rounded-full px-2.5 py-0.5 text-xs ring-1 ${status.className}`}>{status.label}</span></p>
            <ul className="mt-6 space-y-3">
              {program.keyPoints.map((point) => (
                <li key={point} className="flex gap-3 rounded-2xl border border-gray-100 bg-white p-4 shadow-sm">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-primary text-white" aria-hidden="true">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} className="h-3.5 w-3.5"><path strokeLinecap="round" strokeLinejoin="round" d="m5 12.5 4.5 4.5L19 7.5" /></svg>
                  </span>
                  <span className="text-[15px] leading-relaxed text-gray-700">{point}</span>
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={100}>
            <SectionHeading eyebrow="Occupation list" title={program.occupationList.name} />
            <p className="mt-4 text-[15px] leading-relaxed text-gray-700">{program.occupationList.note}</p>
            <div className="mt-5 rounded-2xl border border-gray-100 bg-brand-surface p-5">
              <p className="font-heading font-bold text-brand-navy">Check your occupation</p>
              <p className="mt-1 text-sm text-gray-600">State lists are narrower than the Home Affairs lists and change each year. Start with our occupation guides for the assessing authority and federal lists, then confirm the state list on the official site.</p>
              <div className="mt-4 flex flex-wrap gap-2">
                <Button href="/occupations" size="sm">Occupation guides</Button>
                <Button href={program.officialUrl} external variant="outline" size="sm">Official {program.short} list</Button>
              </div>
            </div>
            <p className="mt-6 text-[15px] leading-relaxed text-gray-700">{program.regionalNote} <Link href="/tools/regional-postcode-checker" className="font-bold text-brand-primary hover:underline">Check any postcode →</Link></p>
          </Reveal>
        </Container>
      </section>

      {/* Criteria */}
      <section id="criteria" className="scroll-mt-32 bg-brand-surface py-16 sm:py-20">
        <Container>
          <Reveal>
            <SectionHeading eyebrow="Criteria" title="What you usually need" subtitle="Typical requirements across streams. The exact rules are in the state's current nomination guidelines." align="center" />
          </Reveal>
          <ul className="mx-auto mt-10 grid max-w-4xl gap-3 sm:grid-cols-2">
            {program.criteria.map((item, index) => (
              <Reveal key={item} as="li" delay={index * 50}>
                <div className="flex h-full gap-3 rounded-2xl border border-gray-100 bg-white p-4 shadow-sm">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-brand-navy text-xs font-extrabold text-white">{index + 1}</span>
                  <span className="text-[15px] leading-relaxed text-gray-700">{item}</span>
                </div>
              </Reveal>
            ))}
          </ul>
        </Container>
      </section>

      {/* How to apply + FAQ */}
      <section id="apply" className="scroll-mt-32 py-16 sm:py-20">
        <Container className="grid gap-12 lg:grid-cols-[1.2fr_1fr]">
          <Reveal>
            <SectionHeading eyebrow="How to apply" title="Step by step" />
            <ol className="mt-8 space-y-4">
              {program.howToApply.map((step, index) => (
                <li key={step} className="flex gap-4">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-primary text-sm font-extrabold text-white">{index + 1}</span>
                  <span className="text-[15px] leading-relaxed text-gray-700">{step}</span>
                </li>
              ))}
            </ol>
            <div className="mt-8 flex flex-wrap gap-3">
              {calculator && (
                <Button href={calculator.href}>
                  {calculator.label}
                  <ArrowIcon />
                </Button>
              )}
              <Button href="/tools/points-calculator" variant={calculator ? "outline" : "primary"}>
                Check your points
                <ArrowIcon />
              </Button>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <div id="faq" className="scroll-mt-32">
              <SectionHeading eyebrow="FAQ" title={`${program.short} questions`} />
              <div className="mt-8 space-y-3">
                {program.faqs.map((faq) => (
                  <FaqItem key={faq.question} question={faq.question} answer={faq.answer} />
                ))}
              </div>
              <GeneralInfoNotice className="mt-6" />
              <div className="mt-8 rounded-2xl border border-gray-100 bg-brand-surface p-5">
                <p className="text-xs font-bold uppercase tracking-wider text-brand-primary">Official pages we checked · {program.checkedOn}</p>
                <ul className="mt-3 space-y-1.5 text-sm">
                  {program.sources.map((source) => (
                    <li key={source.url}>
                      <a href={source.url} target="_blank" rel="noopener noreferrer" className="font-semibold text-brand-navy hover:text-brand-primary hover:underline">{source.label} ↗</a>
                    </li>
                  ))}
                  <li>
                    <a href={allocationsSourceUrl} target="_blank" rel="noopener noreferrer" className="font-semibold text-brand-navy hover:text-brand-primary hover:underline">Home Affairs: state and territory nomination allocations ↗</a>
                  </li>
                </ul>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      <ConsultationCTA
        title={`Thinking about ${program.short} nomination?`}
        subtitle="We check your occupation against the state list, your points and your residence history, and tell you honestly whether it is the right target."
      />
    </>
  );
}
