"use client";

import { useState, useSyncExternalStore } from "react";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import type { PrRoadConfig } from "@/data/visas/explainers/types";
import { Term } from "./Glossary";

// Road to permanent residence. Pick when sponsored work starts and your age
// then; the timeline shows the earliest 186 point, when you turn the age
// limit, and when a full-length visa would end, with "you are here".

const MONTHS = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const SHORT = MONTHS.map((month) => month.slice(0, 3));

// Months since year 0, so dates compare as plain numbers.
const label = (index: number) => `${MONTHS[index % 12]} ${Math.floor(index / 12)}`;
const shortLabel = (index: number) => `${SHORT[index % 12]} ${Math.floor(index / 12)}`;

function subscribe() {
  return () => {};
}
function nowIndex() {
  const date = new Date();
  return date.getFullYear() * 12 + date.getMonth();
}
function serverIndex() {
  return null;
}

export function PrRoad({ config }: { config: PrRoadConfig }) {
  const [month, setMonth] = useState(6);
  const [year, setYear] = useState(2026);
  const [age, setAge] = useState(32);
  const today = useSyncExternalStore(subscribe, nowIndex, serverIndex);

  const start = year * 12 + month;
  const pr = start + config.yearsToPr * 12;
  const end = start + config.maxStayYears * 12;
  const ageAtPr = age + config.yearsToPr;
  const turnsLimit = start + (config.ageLimit - age) * 12;
  const span = end - start;
  const pos = (index: number) => ((index - start) / span) * 100;

  const verdict =
    ageAtPr >= config.ageLimit
      ? { tone: "bg-rose-50 text-rose-900 ring-rose-200", chip: "bg-rose-500 text-white", title: `You'd be ${ageAtPr}: an exemption is needed`, body: `The ${config.prVisaName} needs you to be under ${config.ageLimit} when you apply, unless an exemption applies. ${config.exemptionsNote} Other visas may suit you better, so plan this before you start.` }
      : ageAtPr >= config.ageLimit - 2
        ? { tone: "bg-amber-50 text-amber-900 ring-amber-200", chip: "bg-amber-400 text-brand-navy", title: `You'd be ${ageAtPr}: tight but possible`, body: `You'd be under ${config.ageLimit}, with little room for delay. Keep your employment continuous and agree the timing of the 186 nomination with your employer early.` }
        : { tone: "bg-brand-mint text-brand-primary-dark ring-brand-primary/20", chip: "bg-brand-green text-white", title: `You'd be ${ageAtPr}: comfortably under ${config.ageLimit}`, body: "Age isn't a barrier on this timeline. The other 186 requirements, such as competent English, still apply." };

  const markers = [
    { at: start, title: "Work starts", sub: shortLabel(start), tone: "bg-brand-navy" },
    { at: pr, title: "Earliest 186", sub: shortLabel(pr), tone: "bg-brand-green" },
    { at: end, title: "4-year 482 ends", sub: shortLabel(end), tone: "bg-pink-600" },
  ];
  const showAgeMarker = turnsLimit > start && turnsLimit < end;
  const showToday = today !== null && today >= start && today <= end;

  const years = Array.from({ length: 9 }, (_, index) => 2022 + index);

  return (
    <section id="pr-road" className="relative scroll-mt-32 py-16 sm:py-24">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Road to PR"
            title="When could you apply for permanent residence?"
            highlight="permanent residence"
            subtitle="Enter when your sponsored work starts and how old you'll be. The timeline shows the earliest point for the 186 and whether age could get in the way."
            align="center"
          />
        </Reveal>

        <Reveal delay={100}>
          <div className="mx-auto mt-12 max-w-5xl rounded-[2rem] border border-gray-100 bg-white p-6 shadow-float sm:p-10">
            <div className="grid gap-6 sm:grid-cols-3">
              <label className="block">
                <span className="text-xs font-bold uppercase tracking-[0.14em] text-gray-500">Work starts (month)</span>
                <select
                  value={month}
                  onChange={(event) => setMonth(Number(event.target.value))}
                  className="mt-2 w-full rounded-xl border border-gray-200 bg-brand-surface px-3 py-2.5 text-[15px] font-bold text-brand-navy focus:border-brand-primary focus:outline-none focus:ring-2 focus:ring-brand-primary/20"
                >
                  {MONTHS.map((name, index) => (
                    <option key={name} value={index}>
                      {name}
                    </option>
                  ))}
                </select>
              </label>
              <label className="block">
                <span className="text-xs font-bold uppercase tracking-[0.14em] text-gray-500">Work starts (year)</span>
                <select
                  value={year}
                  onChange={(event) => setYear(Number(event.target.value))}
                  className="mt-2 w-full rounded-xl border border-gray-200 bg-brand-surface px-3 py-2.5 text-[15px] font-bold text-brand-navy focus:border-brand-primary focus:outline-none focus:ring-2 focus:ring-brand-primary/20"
                >
                  {years.map((value) => (
                    <option key={value} value={value}>
                      {value}
                    </option>
                  ))}
                </select>
              </label>
              <label className="block">
                <span className="flex items-baseline justify-between text-xs font-bold uppercase tracking-[0.14em] text-gray-500">
                  Your age then
                  <span className="font-heading text-2xl font-extrabold normal-case tracking-normal text-brand-navy">{age}</span>
                </span>
                <input
                  type="range"
                  min={18}
                  max={55}
                  value={age}
                  onChange={(event) => setAge(Number(event.target.value))}
                  aria-label="Your age when sponsored work starts"
                  className="mt-3 w-full cursor-pointer accent-brand-primary"
                />
              </label>
            </div>

            {/* Timeline */}
            <div className="relative mb-6 mt-16 px-3">
              {/* Flags above the track: when you turn the age limit, and today. */}
              {[
                ...(showAgeMarker ? [{ key: "age", at: turnsLimit, text: `You turn ${config.ageLimit}`, tone: "bg-rose-500", bob: false }] : []),
                ...(showToday && today !== null ? [{ key: "today", at: today, text: "You are here", tone: "bg-brand-navy", bob: true }] : []),
              ].map((flag) => {
                const p = pos(flag.at);
                const shift = p < 12 ? "translate-x-0" : p > 88 ? "-translate-x-full" : "-translate-x-1/2";
                return (
                  <div key={flag.key} className={`absolute bottom-full mb-1 ${shift} ${flag.bob ? "bob" : ""}`} style={{ left: `calc(0.75rem + (100% - 1.5rem) * ${p / 100})` }}>
                    <span className={`block whitespace-nowrap rounded-full px-2 py-0.5 text-[11px] font-bold text-white ${flag.tone}`}>{flag.text}</span>
                  </div>
                );
              })}
              <div className="relative h-3 rounded-full bg-gray-100">
                <div className="absolute inset-y-0 left-0 rounded-full bg-gradient-to-r from-brand-navy/30 to-brand-green/60" style={{ width: `${pos(pr)}%` }} />
                <div className="absolute inset-y-0 rounded-full bg-gradient-to-r from-brand-green/40 to-pink-400/50" style={{ left: `${pos(pr)}%`, right: 0 }} />
                {markers.map((marker) => (
                  <span
                    key={marker.title}
                    className={`absolute top-1/2 h-6 w-6 -translate-x-1/2 -translate-y-1/2 rounded-full border-4 border-white shadow ${marker.tone}`}
                    style={{ left: `${pos(marker.at)}%` }}
                    aria-hidden="true"
                  />
                ))}
                {showAgeMarker && <span className="absolute -top-3 h-9 w-0.5 -translate-x-1/2 bg-rose-500" style={{ left: `${pos(turnsLimit)}%` }} aria-hidden="true" />}
                {showToday && today !== null && <span className="absolute -top-3 h-9 w-0.5 -translate-x-1/2 bg-brand-navy" style={{ left: `${pos(today)}%` }} aria-hidden="true" />}
              </div>
              <div className="relative mt-4 h-10 text-xs">
                <div className="absolute left-0 text-left">
                  <span className="block font-bold text-brand-navy">{markers[0].title}</span>
                  <span className="text-gray-500">{markers[0].sub}</span>
                </div>
                <div className="absolute -translate-x-1/2 text-center" style={{ left: `${pos(pr)}%` }}>
                  <span className="block whitespace-nowrap font-bold text-brand-primary-dark">{markers[1].title}</span>
                  <span className="text-gray-500">{markers[1].sub}</span>
                </div>
                <div className="absolute right-0 text-right">
                  <span className="block font-bold text-brand-navy">{markers[2].title}</span>
                  <span className="text-gray-500">{markers[2].sub}</span>
                </div>
              </div>
            </div>

            <div className="grid gap-3 sm:grid-cols-3">
              <div className="rounded-2xl bg-brand-surface p-4">
                <p className="text-[11px] font-bold uppercase tracking-wider text-gray-500">Earliest 186 application</p>
                <p className="font-heading mt-1 text-xl font-extrabold text-brand-navy">From {label(pr)}</p>
                <p className="text-xs text-gray-500">After {config.yearsToPr} years of full-time sponsored work</p>
              </div>
              <div className="rounded-2xl bg-brand-surface p-4">
                <p className="text-[11px] font-bold uppercase tracking-wider text-gray-500">Your age then</p>
                <p className="font-heading mt-1 flex items-center gap-2 text-xl font-extrabold text-brand-navy">
                  {ageAtPr}
                  <span className={`rounded-full px-2 py-0.5 text-[11px] font-bold ${verdict.chip}`}>{ageAtPr < config.ageLimit ? `under ${config.ageLimit}` : `${config.ageLimit} or over`}</span>
                </p>
                <p className="text-xs text-gray-500">The 186 age limit is tested when you apply</p>
              </div>
              <div className="rounded-2xl bg-brand-surface p-4">
                <p className="text-[11px] font-bold uppercase tracking-wider text-gray-500">A 4-year 482 would end</p>
                <p className="font-heading mt-1 text-xl font-extrabold text-brand-navy">{label(end)}</p>
                <p className="text-xs text-gray-500">Your grant letter shows the exact date</p>
              </div>
            </div>

            <div key={verdict.title} className={`hero-rise mt-6 rounded-2xl p-5 ring-1 ${verdict.tone}`} aria-live="polite">
              <p className="font-heading text-lg font-bold">{verdict.title}</p>
              <p className="mt-1.5 text-sm leading-relaxed">{verdict.body}</p>
            </div>

            <p className="mt-6 text-xs leading-relaxed text-gray-500">
              Assumes continuous full-time work in the nominated occupation for your sponsor(s) on a 482 (or 457). Time with more than one sponsor counts, but the employer that nominates you must be your most recent sponsor, and you apply within six months of that nomination being approved. This is the{" "}
              <Term id="trt">TRT stream</Term>.{" "}
              <Link href={config.prVisaHref} className="font-semibold text-brand-primary hover:underline">
                Read the 186 guide →
              </Link>
            </p>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
