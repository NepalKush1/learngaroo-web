"use client";

import { useState } from "react";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import type { OccupationGroup, StreamFinderConfig } from "@/data/visas/explainers/types";
import { Term } from "./Glossary";
import { aud, useCountUp } from "./useCountUp";

// Which 482 stream fits? Slide the salary, pick the kind of job, answer one
// question about the occupation list, and the answer updates instantly with
// the reasons behind it. Uses the thresholds verified for the visa page.

type CsolAnswer = "yes" | "no" | "unsure";
type Kind = "specialist" | "core" | "check-csol" | "agreement" | "no-stream" | "below";

interface Outcome {
  kind: Kind;
  title: string;
  tone: { card: string; chip: string; text: string };
  why: string[];
  means: string;
  extra?: string;
  links: { label: string; href: string; external?: boolean }[];
}

const TONES = {
  violet: { card: "from-violet-600 to-violet-800", chip: "bg-violet-100 text-violet-800", text: "text-violet-700" },
  green: { card: "from-brand-primary-dark to-[#0f4f31]", chip: "bg-emerald-100 text-emerald-800", text: "text-brand-primary-dark" },
  amber: { card: "from-amber-600 to-amber-800", chip: "bg-amber-100 text-amber-800", text: "text-amber-700" },
  blue: { card: "from-blue-600 to-blue-800", chip: "bg-sky-100 text-sky-800", text: "text-blue-700" },
  rose: { card: "from-rose-600 to-rose-800", chip: "bg-rose-100 text-rose-800", text: "text-rose-700" },
};

function decide(salary: number, group: OccupationGroup, csol: CsolAnswer, agreement: boolean, config: StreamFinderConfig): Outcome {
  const pay = aud(salary);
  const csit = aud(config.csit);
  const ssit = aud(config.ssit);
  const agreementLink = { label: "Labour agreements and DAMAs", href: "/visas/employer-sponsored/labour-agreements-and-dama" };
  if (agreement) {
    return {
      kind: "agreement",
      title: "Labour agreement stream",
      tone: TONES.blue,
      why: ["Your employer has a labour agreement that covers this role"],
      means: "The agreement sets the occupation, the salary and any concessions, such as on English, experience or age.",
      links: [agreementLink],
    };
  }
  if (salary >= config.ssit && group.specialist) {
    return {
      kind: "specialist",
      title: "Specialist Skills stream",
      tone: TONES.violet,
      why: [`${pay} is at or above the SSIT (${ssit})`, `${group.label} roles can use this stream`],
      means: "No occupation list applies. Your pay must also be at least the market rate for the job.",
      extra:
        csol === "yes"
          ? "Your occupation is also on the CSOL, so the Core Skills stream is another option. Your employer chooses which stream to nominate under."
          : undefined,
      links: [],
    };
  }
  if (salary >= config.csit && csol === "yes") {
    return {
      kind: "core",
      title: "Core Skills stream",
      tone: TONES.green,
      why: ["Your occupation is on the CSOL", `${pay} is at or above the CSIT (${csit})`],
      means: "The most common 482 stream. Your pay must also be at least the market rate for the job.",
      links: [],
    };
  }
  if (salary >= config.csit && csol === "unsure") {
    return {
      kind: "check-csol",
      title: "Possibly the Core Skills stream",
      tone: TONES.amber,
      why: [`${pay} meets the CSIT (${csit})`, "It depends on whether your occupation is on the CSOL"],
      means: `Check the official list. If your occupation isn't there, the Specialist Skills stream needs at least ${ssit} and a role outside trades, machinery operation and labouring.`,
      links: [
        { label: "Official occupation list", href: config.listUrl, external: true },
        { label: "Our occupation guides", href: "/occupations" },
      ],
    };
  }
  if (salary >= config.csit) {
    return {
      kind: "no-stream",
      title: "No standard stream fits yet",
      tone: TONES.rose,
      why: [
        "Your occupation isn't on the CSOL",
        group.specialist ? `${pay} is below the SSIT (${ssit})` : `${group.label} roles can't use the Specialist Skills stream`,
      ],
      means: "A labour agreement or DAMA, the regional subclass 494, or a points-tested visa may fit instead.",
      links: [
        agreementLink,
        { label: "Subclass 494 (regional)", href: "/visas/employer-sponsored/skilled-employer-sponsored-regional-visa-494" },
        { label: "Points-tested visas", href: "/visas/skilled/skilled-migration-points-test" },
      ],
    };
  }
  return {
    kind: "below",
    title: "Below the minimum salary",
    tone: TONES.rose,
    why: [`${pay} is below the CSIT (${csit})`],
    means: `Both standard streams need at least ${csit}, and the market rate. A labour agreement can sometimes set different terms.`,
    links: [agreementLink],
  };
}

export function StreamFinder({ config }: { config: StreamFinderConfig }) {
  const [salary, setSalary] = useState(config.defaultSalary);
  const [groupId, setGroupId] = useState<number>(2);
  const [csol, setCsol] = useState<CsolAnswer>("yes");
  const [agreement, setAgreement] = useState(false);
  const shown = useCountUp(salary, 350);

  const group = config.groups.find((item) => item.id === groupId) ?? config.groups[0];
  const outcome = decide(salary, group, csol, agreement, config);
  const span = config.sliderMax - config.sliderMin;
  const pct = (value: number) => Math.min(100, Math.max(0, ((value - config.sliderMin) / span) * 100));

  return (
    <section id="stream" className="relative scroll-mt-32 py-16 sm:py-24">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Stream finder"
            title="Which 482 stream fits your job?"
            highlight="fits your job"
            subtitle="Move the salary, pick the kind of job and answer one question. The answer updates as you go."
            align="center"
          />
        </Reveal>

        {/* On small screens the answer rides along at the top while you change the inputs. */}
        <div className="sticky top-[8.25rem] z-20 mt-8 lg:hidden">
          <a
            href="#stream-result"
            className={`flex items-center gap-3 rounded-2xl bg-gradient-to-r ${outcome.tone.card} px-4 py-3 text-white shadow-lg transition-colors`}
          >
            <span className="text-[11px] font-bold uppercase tracking-wider text-white/70">Likely</span>
            <span className="font-heading flex-1 text-sm font-bold leading-snug">{outcome.title}</span>
            <span className="shrink-0 text-xs font-bold text-white/90">{aud(salary)} ↓</span>
          </a>
        </div>

        <div className="mt-6 grid gap-6 lg:mt-12 lg:grid-cols-[1.15fr_0.85fr] lg:items-start">
          <Reveal>
            <div className="rounded-[2rem] border border-gray-100 bg-white p-6 shadow-card sm:p-8">
              {/* 1. Salary */}
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-brand-primary">1 · What will the job pay a year?</p>
                <p className="font-heading mt-2 text-4xl font-extrabold text-brand-navy sm:text-5xl" aria-live="polite">
                  {aud(shown)}
                </p>
                <div className="relative mt-6 h-8">
                  <div className="absolute inset-x-0 top-1/2 flex h-4 -translate-y-1/2 overflow-hidden rounded-full" aria-hidden="true">
                    <div className="bg-rose-200" style={{ width: `${pct(config.csit)}%` }} />
                    <div className="bg-emerald-300" style={{ width: `${pct(config.ssit) - pct(config.csit)}%` }} />
                    <div className="flex-1 bg-violet-300" />
                  </div>
                  <input
                    type="range"
                    min={config.sliderMin}
                    max={config.sliderMax}
                    step={1000}
                    value={salary}
                    onChange={(event) => setSalary(Number(event.target.value))}
                    aria-label="Annual salary in Australian dollars"
                    aria-valuetext={aud(salary)}
                    className="peer absolute inset-0 z-10 h-full w-full cursor-grab opacity-0 active:cursor-grabbing"
                  />
                  <span
                    className="pointer-events-none absolute top-1/2 h-8 w-8 -translate-x-1/2 -translate-y-1/2 rounded-full border-4 border-white bg-brand-navy shadow-lg transition-[left] duration-150 peer-focus-visible:ring-4 peer-focus-visible:ring-brand-primary/40"
                    style={{ left: `${pct(salary)}%` }}
                    aria-hidden="true"
                  >
                    <span className="absolute inset-0 m-auto h-2 w-2 rounded-full bg-white" />
                  </span>
                </div>
                <p className="mt-1 text-center text-[11px] font-semibold text-gray-400">Drag along the bar</p>
                <div className="relative mt-1 h-10 text-[11px] font-bold text-gray-500" aria-hidden="true">
                  <span className="absolute -translate-x-1/2 text-center" style={{ left: `${pct(config.csit)}%` }}>
                    <span className="mx-auto block h-2 w-px bg-gray-400" />
                    CSIT {aud(config.csit)}
                  </span>
                  <span className="absolute -translate-x-1/2 text-center" style={{ left: `${pct(config.ssit)}%` }}>
                    <span className="mx-auto block h-2 w-px bg-gray-400" />
                    SSIT {aud(config.ssit)}
                  </span>
                </div>
                <div className="flex flex-wrap gap-2 text-xs">
                  <span className="font-semibold text-gray-500">Jump to:</span>
                  {[
                    { label: `the CSIT (${aud(config.csit)})`, value: config.csit },
                    { label: `the SSIT (${aud(config.ssit)})`, value: config.ssit },
                  ].map((item) => (
                    <button
                      key={item.value}
                      type="button"
                      onClick={() => setSalary(item.value)}
                      className="rounded-full bg-brand-surface px-3 py-1 font-bold text-brand-navy transition-colors hover:bg-brand-mint"
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
                <ul className="mt-3 flex flex-wrap gap-x-4 gap-y-1 text-xs leading-relaxed text-gray-500">
                  <li className="flex items-center gap-1.5">
                    <span className="h-2 w-2 rounded-full bg-rose-300" aria-hidden="true" />
                    <span>
                      Below the <Term id="csit" />
                    </span>
                  </li>
                  <li className="flex items-center gap-1.5">
                    <span className="h-2 w-2 rounded-full bg-emerald-400" aria-hidden="true" />
                    <span>Core Skills range</span>
                  </li>
                  <li className="flex items-center gap-1.5">
                    <span className="h-2 w-2 rounded-full bg-violet-400" aria-hidden="true" />
                    <span>
                      Specialist Skills range (from the <Term id="ssit" />)
                    </span>
                  </li>
                </ul>
              </div>

              {/* 2. Kind of job */}
              <fieldset className="mt-8 border-t border-gray-100 pt-6">
                <legend className="float-left w-full text-xs font-bold uppercase tracking-[0.16em] text-brand-primary">2 · What kind of job is it?</legend>
                <p className="clear-both pt-1 text-xs text-gray-500">
                  These are the <Term id="anzsco">ANZSCO</Term>{" "}Major Groups. Your occupation code&apos;s first digit tells you which.
                </p>
                <div className="mt-4 grid grid-cols-2 gap-2">
                  {config.groups.map((item) => {
                    const selected = item.id === groupId;
                    return (
                      <label
                        key={item.id}
                        className={`flex cursor-pointer items-start gap-3 rounded-2xl border-2 p-2.5 transition-all duration-200 hover:-translate-y-0.5 sm:p-3 ${
                          selected ? "border-brand-primary bg-brand-mint shadow-sm" : "border-gray-200 bg-white hover:border-brand-primary/40"
                        }`}
                      >
                        <input type="radio" name="occupation-group" value={item.id} checked={selected} onChange={() => setGroupId(item.id)} className="sr-only" />
                        <span
                          className={`hidden h-7 w-7 shrink-0 items-center justify-center rounded-lg text-xs font-extrabold sm:flex ${selected ? "bg-brand-primary text-white" : "bg-gray-100 text-gray-500"}`}
                          aria-hidden="true"
                        >
                          {item.id}
                        </span>
                        <span className="min-w-0">
                          <span className="block text-sm font-bold leading-snug text-brand-navy">{item.label}</span>
                          <span className="block text-[11px] leading-snug text-gray-500 sm:text-xs sm:leading-relaxed">{item.examples}</span>
                        </span>
                      </label>
                    );
                  })}
                </div>
              </fieldset>

              {/* 3. CSOL */}
              <fieldset className="mt-8 border-t border-gray-100 pt-6">
                <legend className="float-left w-full text-xs font-bold uppercase tracking-[0.16em] text-brand-primary">3 · Is the occupation on the Core Skills Occupation List?</legend>
                <div className="clear-both" />
                <div className="mt-4 inline-flex rounded-full bg-brand-surface p-1" role="radiogroup" aria-label="Occupation on the Core Skills Occupation List">
                  {([
                    { value: "yes", label: "Yes" },
                    { value: "no", label: "No" },
                    { value: "unsure", label: "Not sure" },
                  ] as const).map((item) => (
                    <button
                      key={item.value}
                      type="button"
                      role="radio"
                      aria-checked={csol === item.value}
                      onClick={() => setCsol(item.value)}
                      className={`rounded-full px-5 py-2 text-sm font-bold transition-all ${
                        csol === item.value ? "bg-brand-navy text-white shadow" : "text-brand-navy/70 hover:text-brand-navy"
                      }`}
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
                <a href={config.listUrl} target="_blank" rel="noopener noreferrer" className="ml-3 text-sm font-semibold text-brand-primary hover:underline">
                  Check the official list ↗
                </a>
              </fieldset>

              {/* 4. Labour agreement */}
              <div className="mt-8 flex items-center justify-between gap-4 border-t border-gray-100 pt-6">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.16em] text-brand-primary">4 · Does your employer have a labour agreement for this role?</p>
                  <p className="mt-1 text-xs text-gray-500">
                    Most don&apos;t. A <Term id="labour-agreement">labour agreement</Term> is a special deal with the Government.
                  </p>
                </div>
                <button
                  type="button"
                  role="switch"
                  aria-checked={agreement}
                  aria-label="Employer has a labour agreement for this role"
                  onClick={() => setAgreement((value) => !value)}
                  className={`relative h-8 w-14 shrink-0 rounded-full transition-colors ${agreement ? "bg-brand-primary" : "bg-gray-300"}`}
                >
                  <span className={`absolute top-1 h-6 w-6 rounded-full bg-white shadow transition-all ${agreement ? "left-7" : "left-1"}`} />
                </button>
              </div>
            </div>
          </Reveal>

          {/* Result */}
          <Reveal delay={100} className="lg:sticky lg:top-36">
            <div id="stream-result" aria-live="polite" className="scroll-mt-48 overflow-hidden rounded-[2rem] bg-white shadow-float">
              <div key={outcome.kind} className={`hero-rise bg-gradient-to-br ${outcome.tone.card} p-7 text-white sm:p-8`}>
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-white/70">Your likely stream</p>
                <p className="font-heading mt-2 text-3xl font-extrabold leading-tight">{outcome.title}</p>
                <ul className="mt-5 space-y-2">
                  {outcome.why.map((reason) => (
                    <li key={reason} className="flex gap-2.5 text-sm leading-relaxed text-white/90">
                      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-white/20" aria-hidden="true">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} className="h-3 w-3">
                          <path strokeLinecap="round" strokeLinejoin="round" d="m5 12.5 4.5 4.5L19 7.5" />
                        </svg>
                      </span>
                      {reason}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="p-7 sm:p-8">
                <p className="text-[15px] leading-relaxed text-gray-700">{outcome.means}</p>
                {outcome.extra && <p className={`mt-3 rounded-2xl p-3 text-sm leading-relaxed ${outcome.tone.chip}`}>{outcome.extra}</p>}
                {outcome.links.length > 0 && (
                  <div className="mt-5 flex flex-wrap gap-2">
                    {outcome.links.map((link) =>
                      link.external ? (
                        <a
                          key={link.href}
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="rounded-full border border-brand-navy/15 px-4 py-2 text-sm font-bold text-brand-navy hover:bg-brand-mint"
                        >
                          {link.label} ↗
                        </a>
                      ) : (
                        <Link key={link.href} href={link.href} className="rounded-full border border-brand-navy/15 px-4 py-2 text-sm font-bold text-brand-navy hover:bg-brand-mint">
                          {link.label} →
                        </Link>
                      ),
                    )}
                  </div>
                )}
                <p className="mt-5 border-t border-gray-100 pt-4 text-xs leading-relaxed text-gray-500">
                  Thresholds apply to {config.validFor} and are indexed every 1 July. Pay must also be at least the{" "}
                  <Term id="amsr">annual market salary rate</Term>. General information only: your employer&apos;s nomination decides the stream.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
