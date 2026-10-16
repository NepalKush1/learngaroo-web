import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/sections/PageHero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ConsultationCTA } from "@/components/sections/ConsultationCTA";
import { GeneralInfoNotice } from "@/components/ui/GeneralInfoNotice";
import { Reveal } from "@/components/ui/Reveal";
import { AustraliaMap } from "@/components/state-nomination/AustraliaMap";
import { AssessmentCta } from "@/components/state-assessment/AssessmentCta";
import { allocationsNote, allocationsSourceUrl, statePrograms, stateProgramsCheckedOn, statusLabels } from "@/data/state-nomination";

export const metadata: Metadata = {
  title: "State Nomination Map 2026-27: Subclass 190 & 491 by State",
  description:
    "Interactive map and comparison of skilled nomination (subclass 190 and 491) across NSW, Victoria, Queensland, SA, WA, Tasmania, the ACT and NT: current status, 2026-27 allocations, streams and how each state selects.",
};

export default function StateNominationPage() {
  const counts = statePrograms.reduce<Record<string, number>>((acc, program) => {
    acc[program.status] = (acc[program.status] ?? 0) + 1;
    return acc;
  }, {});
  const total190 = statePrograms.reduce((sum, program) => sum + (program.allocation.sc190 ?? 0), 0);
  const total491 = statePrograms.reduce((sum, program) => sum + (program.allocation.sc491 ?? 0), 0);
  const announced = statePrograms.filter((program) => program.allocation.sc190 !== null).length;

  return (
    <>
      <PageHero
        eyebrow="State and territory nomination"
        title="Subclass 190 and 491 nomination, state by state"
        subtitle="Nomination adds 5 points (190) or 15 points (491) and is the realistic route for many occupations. Each state runs its own program with its own list, criteria and timing. Tap the map to compare."
      />

      {/* Map */}
      <section className="relative -mt-10 pb-6">
        <Container>
          <Reveal>
            <AustraliaMap />
          </Reveal>
          <p className="mt-4 text-xs text-gray-500">
            Status checked on {stateProgramsCheckedOn} against each official state program site and the{" "}
            <a href={allocationsSourceUrl} target="_blank" rel="noopener noreferrer" className="font-semibold text-brand-primary hover:underline">Home Affairs allocations page ↗</a>. {allocationsNote} Programs change often, sometimes weekly.
          </p>
        </Container>
      </section>

      {/* Assessment */}
      <section className="pt-6">
        <Container>
          <Reveal>
            <AssessmentCta />
          </Reveal>
        </Container>
      </section>

      {/* Summary strip */}
      <section className="py-10">
        <Container>
          <ul className="grid grid-cols-2 gap-3 sm:grid-cols-4">
            {[
              { label: "Programs open or limited", value: `${(counts.open ?? 0) + (counts.limited ?? 0)} of 8` },
              { label: "Awaiting 2026-27 settings", value: `${counts.pending ?? 0}` },
              { label: "190 places announced so far", value: total190.toLocaleString("en-AU"), note: `${announced} of 8 states` },
              { label: "491 places announced so far", value: total491.toLocaleString("en-AU"), note: `${announced} of 8 states` },
            ].map((stat) => (
              <li key={stat.label} className="rounded-2xl border border-gray-100 bg-white p-4 shadow-sm">
                <span className="text-[11px] font-bold uppercase tracking-wider text-gray-500">{stat.label}</span>
                <span className="font-heading mt-1 block text-2xl font-extrabold text-brand-navy">{stat.value}</span>
                {stat.note && <span className="text-xs text-gray-500">{stat.note}</span>}
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* Comparison table */}
      <section className="bg-brand-surface py-16 sm:py-20">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="Compare"
              title="Nomination policy by state and territory"
              subtitle="Status, places, streams and how each program selects candidates. Open a guide for criteria, how to apply and FAQs."
              align="center"
            />
          </Reveal>
          <Reveal delay={100}>
            <div className="mt-12 overflow-x-auto rounded-3xl border border-gray-100 bg-white shadow-card">
              <table className="w-full min-w-[900px] text-left text-sm">
                <thead>
                  <tr className="border-b border-gray-100 text-xs uppercase tracking-[0.12em] text-gray-500">
                    <th scope="col" className="px-5 py-4 font-bold">State or territory</th>
                    <th scope="col" className="px-5 py-4 font-bold">Status</th>
                    <th scope="col" className="px-5 py-4 font-bold">190 places</th>
                    <th scope="col" className="px-5 py-4 font-bold">491 places</th>
                    <th scope="col" className="px-5 py-4 font-bold">Streams</th>
                    <th scope="col" className="px-5 py-4 font-bold">How it selects</th>
                  </tr>
                </thead>
                <tbody>
                  {statePrograms.map((program) => {
                    const status = statusLabels[program.status];
                    return (
                      <tr key={program.slug} className="border-b border-gray-100 last:border-0 hover:bg-brand-surface/60">
                        <th scope="row" className="px-5 py-4 font-normal">
                          <Link href={`/state-nomination/${program.slug}`} className="group flex items-center gap-3">
                            <span className="flex h-9 w-12 shrink-0 items-center justify-center rounded-lg bg-brand-navy text-xs font-extrabold text-white">{program.short}</span>
                            <span className="font-bold text-brand-navy group-hover:underline">{program.name}</span>
                          </Link>
                        </th>
                        <td className="px-5 py-4"><span className={`rounded-full px-2.5 py-0.5 text-xs font-bold ring-1 ${status.className}`}>{status.label}</span></td>
                        <td className="px-5 py-4 font-bold text-brand-navy">{program.allocation.sc190?.toLocaleString("en-AU") ?? "TBA"}</td>
                        <td className="px-5 py-4 font-bold text-brand-navy">{program.allocation.sc491?.toLocaleString("en-AU") ?? "TBA"}</td>
                        <td className="px-5 py-4 text-gray-600">{program.streams.length}</td>
                        <td className="px-5 py-4 text-gray-600">{program.selection}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </Reveal>
          <GeneralInfoNotice className="mt-8" />
        </Container>
      </section>

      {/* Guides grid */}
      <section className="py-16 sm:py-20">
        <Container>
          <Reveal>
            <SectionHeading eyebrow="Guides" title="Read the guide for your state" align="center" />
          </Reveal>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {statePrograms.map((program, index) => {
              const status = statusLabels[program.status];
              return (
                <Reveal key={program.slug} delay={index * 60}>
                  <Link href={`/state-nomination/${program.slug}`} className="flex h-full flex-col rounded-3xl border border-gray-100 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-float">
                    <div className="flex items-start justify-between gap-3">
                      <span className="font-heading text-2xl font-extrabold text-brand-navy">{program.short}</span>
                      <span className={`rounded-full px-2.5 py-0.5 text-xs font-bold ring-1 ${status.className}`}>{status.label}</span>
                    </div>
                    <span className="mt-1 text-sm font-semibold text-brand-navy/80">{program.name}</span>
                    <p className="mt-3 flex-1 text-sm leading-relaxed text-gray-600 line-clamp-3">{program.statusNote}</p>
                    <span className="mt-4 text-sm font-bold text-brand-primary">Read the {program.short} guide →</span>
                  </Link>
                </Reveal>
              );
            })}
          </div>
        </Container>
      </section>

      <ConsultationCTA
        title="Which state should you target?"
        subtitle="It depends on your occupation, where you live and work, and how each state ranks candidates. We compare your options before you lodge."
      />
    </>
  );
}
