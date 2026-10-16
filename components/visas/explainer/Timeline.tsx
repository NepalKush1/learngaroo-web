"use client";

import { useState, useSyncExternalStore } from "react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import type { TimelineConfig } from "@/data/visas/explainers/types";
import { RichText } from "./RichText";

// Your own timeline: pick the start date (a grant, a lodgement, the day
// work starts) and every milestone gets a real month, with "you are here"
// on the track. An optional age check flags when an age limit could bite.

const MONTHS = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const SHORT = MONTHS.map((month) => month.slice(0, 3));
const label = (index: number) => `${MONTHS[index % 12]} ${Math.floor(index / 12)}`;
const shortLabel = (index: number) => `${SHORT[index % 12]} ${Math.floor(index / 12)}`;

const KIND = {
  goal: { dot: "bg-brand-green", chip: "bg-brand-mint text-brand-primary-dark", ring: "ring-brand-primary/20" },
  info: { dot: "bg-brand-blue", chip: "bg-sky-50 text-blue-800", ring: "ring-sky-200" },
  end: { dot: "bg-pink-600", chip: "bg-pink-50 text-pink-800", ring: "ring-pink-200" },
} as const;

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

const SELECT =
  "mt-2 w-full rounded-xl border border-gray-200 bg-brand-surface px-3 py-2.5 text-[15px] font-bold text-brand-navy focus:border-brand-primary focus:outline-none focus:ring-2 focus:ring-brand-primary/20";

export function Timeline({ config }: { config: TimelineConfig }) {
  const [month, setMonth] = useState(6);
  const [year, setYear] = useState(2026);
  const [age, setAge] = useState(30);
  const today = useSyncExternalStore(subscribe, nowIndex, serverIndex);

  const start = year * 12 + month;
  const span = Math.max(...config.milestones.map((milestone) => milestone.months));
  const end = start + span;
  const pos = (index: number) => ((index - start) / span) * 100;
  const showToday = today !== null && today >= start && today <= end;
  const years = Array.from({ length: 13 }, (_, index) => 2020 + index);

  const ageCheck = config.age ? config.milestones[config.age.milestone] : undefined;
  const ageAt = ageCheck ? age + Math.floor(ageCheck.months / 12) : 0;
  const over = config.age ? ageAt >= config.age.limit : false;
  const turnsLimit = config.age ? start + (config.age.limit - age) * 12 : 0;
  const showLimit = Boolean(config.age) && turnsLimit > start && turnsLimit <= end;

  return (
    <section id="timeline" className="relative scroll-mt-32 bg-brand-surface py-16 sm:py-24">
      <Container>
        <Reveal>
          <SectionHeading eyebrow={config.eyebrow} title={config.title} highlight={config.highlight} subtitle={config.subtitle} align="center" />
        </Reveal>

        <Reveal delay={100}>
          <div className="mx-auto mt-12 max-w-5xl rounded-[2rem] border border-gray-100 bg-white p-6 shadow-float sm:p-10">
            <p className="text-sm font-bold text-brand-navy">{config.startPrompt}</p>
            <div className={`mt-2 grid gap-6 ${config.age ? "sm:grid-cols-3" : "sm:grid-cols-2"}`}>
              <label className="block">
                <span className="text-xs font-bold uppercase tracking-[0.14em] text-gray-500">Month</span>
                <select value={month} onChange={(event) => setMonth(Number(event.target.value))} className={SELECT}>
                  {MONTHS.map((name, index) => (
                    <option key={name} value={index}>
                      {name}
                    </option>
                  ))}
                </select>
              </label>
              <label className="block">
                <span className="text-xs font-bold uppercase tracking-[0.14em] text-gray-500">Year</span>
                <select value={year} onChange={(event) => setYear(Number(event.target.value))} className={SELECT}>
                  {years.map((value) => (
                    <option key={value} value={value}>
                      {value}
                    </option>
                  ))}
                </select>
              </label>
              {config.age && (
                <label className="block">
                  <span className="flex items-baseline justify-between text-xs font-bold uppercase tracking-[0.14em] text-gray-500">
                    Your age then
                    <span className="font-heading text-2xl font-extrabold normal-case tracking-normal text-brand-navy">{age}</span>
                  </span>
                  <input
                    type="range"
                    min={18}
                    max={60}
                    value={age}
                    onChange={(event) => setAge(Number(event.target.value))}
                    aria-label="Your age at the start date"
                    className="mt-3 w-full cursor-pointer accent-brand-primary"
                  />
                </label>
              )}
            </div>

            {/* Track */}
            <div className="relative mb-4 mt-16 px-3">
              {[
                ...(showLimit && config.age ? [{ key: "age", at: turnsLimit, text: `You turn ${config.age.limit}`, tone: "bg-rose-500", bob: false }] : []),
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
              <div className="relative h-3 rounded-full bg-gradient-to-r from-brand-navy/25 via-brand-green/50 to-pink-400/50">
                <span className="absolute left-0 top-1/2 h-6 w-6 -translate-x-1/2 -translate-y-1/2 rounded-full border-4 border-white bg-brand-navy shadow" aria-hidden="true" />
                {config.milestones.map((milestone, index) => (
                  <span
                    key={milestone.label}
                    className={`absolute top-1/2 flex h-7 w-7 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-[3px] border-white text-[11px] font-extrabold text-white shadow ${KIND[milestone.kind].dot}`}
                    style={{ left: `${pos(start + milestone.months)}%` }}
                    aria-hidden="true"
                  >
                    {index + 1}
                  </span>
                ))}
                {showLimit && <span className="absolute -top-3 h-9 w-0.5 -translate-x-1/2 bg-rose-500" style={{ left: `${pos(turnsLimit)}%` }} aria-hidden="true" />}
                {showToday && today !== null && <span className="absolute -top-3 h-9 w-0.5 -translate-x-1/2 bg-brand-navy" style={{ left: `${pos(today)}%` }} aria-hidden="true" />}
              </div>
              <div className="mt-4 flex justify-between text-xs">
                <span>
                  <span className="block font-bold text-brand-navy">{config.startLabel}</span>
                  <span className="text-gray-500">{shortLabel(start)}</span>
                </span>
                <span className="text-right">
                  <span className="block font-bold text-brand-navy">{config.milestones[config.milestones.length - 1].label}</span>
                  <span className="text-gray-500">{shortLabel(end)}</span>
                </span>
              </div>
            </div>

            {/* Milestones with real dates */}
            <ol className={`mt-8 grid gap-3 ${config.milestones.length > 2 ? "md:grid-cols-3" : "md:grid-cols-2"}`}>
              {config.milestones.map((milestone, index) => {
                const kind = KIND[milestone.kind];
                return (
                  <li key={milestone.label} className={`rounded-2xl bg-white p-4 ring-1 ${kind.ring}`}>
                    <div className="flex items-center gap-2">
                      <span className={`flex h-6 w-6 items-center justify-center rounded-full text-[11px] font-extrabold text-white ${kind.dot}`}>{index + 1}</span>
                      <span className={`rounded-full px-2 py-0.5 text-[11px] font-bold ${kind.chip}`}>{label(start + milestone.months)}</span>
                    </div>
                    <p className="font-heading mt-2 text-base font-bold leading-snug text-brand-navy">{milestone.label}</p>
                    <p className="mt-1 text-sm leading-relaxed text-gray-600">
                      <RichText text={milestone.detail} />
                    </p>
                  </li>
                );
              })}
            </ol>

            {config.age && ageCheck && (
              <div
                key={String(over)}
                className={`hero-rise mt-6 rounded-2xl p-5 ring-1 ${over ? "bg-rose-50 text-rose-900 ring-rose-200" : "bg-brand-mint text-brand-primary-dark ring-brand-primary/20"}`}
                aria-live="polite"
              >
                <p className="font-heading text-lg font-bold">
                  At &ldquo;{ageCheck.label}&rdquo; you&apos;d be {ageAt}: {over ? `${config.age.limit} or over` : `under ${config.age.limit}`}
                </p>
                <p className="mt-1.5 text-sm leading-relaxed">{over ? config.age.over : config.age.under}</p>
              </div>
            )}

            <p className="mt-6 text-xs leading-relaxed text-gray-500">{config.footnote}</p>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
