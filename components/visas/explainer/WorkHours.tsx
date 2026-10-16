"use client";

import { useState } from "react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import type { WorkHoursConfig } from "@/data/visas/explainers/types";
import { Switch } from "./controls";

// Student work hours, fortnight by fortnight. A fortnight is any 14 days
// starting on a Monday, so every pair of consecutive weeks is checked: the
// Home Affairs example (15, 30, 30, 10) breaches in weeks two and three.

const WEEKS = 4;
const MAX = 50;
const EXAMPLE = [15, 30, 30, 10];

export function WorkHours({ config }: { config: WorkHoursConfig }) {
  const [hours, setHours] = useState<number[]>([20, 24, 20, 16]);
  const [inSession, setInSession] = useState(true);

  const pairs = Array.from({ length: WEEKS - 1 }, (_, index) => ({ from: index, total: hours[index] + hours[index + 1] }));
  const breaches = inSession ? pairs.filter((pair) => pair.total > config.limit) : [];
  const worst = pairs.reduce((max, pair) => Math.max(max, pair.total), 0);
  const ok = breaches.length === 0;

  return (
    <section id="work-hours" className="relative scroll-mt-32 py-16 sm:py-24">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Work hours"
            title="Plan your hours, fortnight by fortnight"
            highlight="fortnight by fortnight"
            subtitle={`${config.condition} limits work to ${config.limit} hours in any fortnight while your course is in session. Set your hours for four weeks: every pair of weeks is checked.`}
            align="center"
          />
        </Reveal>

        <Reveal delay={100}>
          <div className="mx-auto mt-12 max-w-5xl rounded-[2rem] border border-gray-100 bg-white p-6 shadow-float sm:p-10">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div className="min-w-[16rem] flex-1">
                <Switch label="My course is in session" hint={inSession ? "Semesters, including exam periods" : config.breakNote} checked={inSession} onChange={setInSession} />
              </div>
              <button
                type="button"
                onClick={() => {
                  setHours(EXAMPLE);
                  setInSession(true);
                }}
                className="rounded-full bg-brand-surface px-4 py-2 text-xs font-bold text-brand-navy hover:bg-brand-mint"
              >
                Try the Home Affairs example (15, 30, 30, 10)
              </button>
            </div>

            {/* Weekly bars with sliders */}
            <div className="mt-8 grid grid-cols-4 gap-3 sm:gap-6">
              {hours.map((value, index) => {
                const inBreach = breaches.some((pair) => pair.from === index || pair.from + 1 === index);
                return (
                  <div key={index} className="flex flex-col items-center">
                    <div className="relative flex h-44 w-full max-w-[5.5rem] items-end overflow-hidden rounded-2xl bg-brand-surface">
                      <div
                        className={`w-full rounded-2xl transition-all duration-300 ${inBreach ? "bg-rose-400" : "bg-gradient-to-t from-brand-primary to-brand-green"}`}
                        style={{ height: `${(value / MAX) * 100}%` }}
                      />
                      <span className="font-heading absolute inset-x-0 top-2 text-center text-xl font-extrabold text-brand-navy">{value}</span>
                    </div>
                    <label className="mt-3 w-full text-center">
                      <span className="block text-xs font-bold text-gray-500">Week {index + 1}</span>
                      <input
                        type="range"
                        min={0}
                        max={MAX}
                        value={value}
                        onChange={(event) => setHours((current) => current.map((item, i) => (i === index ? Number(event.target.value) : item)))}
                        aria-label={`Hours worked in week ${index + 1}`}
                        className="mt-1 w-full cursor-pointer accent-brand-primary"
                      />
                    </label>
                  </div>
                );
              })}
            </div>

            {/* Fortnights */}
            <ul className="mt-8 grid gap-3 sm:grid-cols-3">
              {pairs.map((pair) => {
                const over = inSession && pair.total > config.limit;
                return (
                  <li
                    key={pair.from}
                    className={`rounded-2xl p-4 ring-1 transition-colors ${over ? "bg-rose-50 text-rose-900 ring-rose-200" : "bg-brand-mint/60 text-brand-primary-dark ring-brand-primary/15"}`}
                  >
                    <p className="text-[11px] font-bold uppercase tracking-wider opacity-80">
                      Weeks {pair.from + 1} + {pair.from + 2}
                    </p>
                    <p className="font-heading mt-1 text-2xl font-extrabold">
                      {pair.total} <span className="text-sm font-bold opacity-70">/ {inSession ? config.limit : "no limit"}</span>
                    </p>
                    <div className="mt-2 h-2 overflow-hidden rounded-full bg-white/80" aria-hidden="true">
                      <div className={`h-full rounded-full transition-all duration-300 ${over ? "bg-rose-500" : "bg-brand-green"}`} style={{ width: `${Math.min(100, (pair.total / (config.limit * 1.5)) * 100)}%` }} />
                    </div>
                  </li>
                );
              })}
            </ul>

            <div
              key={`${ok}-${inSession}`}
              className={`hero-rise mt-6 rounded-2xl p-5 ring-1 ${ok ? "bg-brand-mint text-brand-primary-dark ring-brand-primary/20" : "bg-rose-50 text-rose-900 ring-rose-200"}`}
              aria-live="polite"
            >
              <p className="font-heading text-lg font-bold">
                {!inSession
                  ? "Out of session: no fortnightly limit"
                  : ok
                    ? `Within the limit: your busiest fortnight is ${worst} hours`
                    : `Over the limit in ${breaches.length === 1 ? "one fortnight" : `${breaches.length} fortnights`}`}
              </p>
              <p className="mt-1.5 text-sm leading-relaxed">
                {!inSession
                  ? config.breakNote
                  : ok
                    ? `Every pair of consecutive weeks is at or under ${config.limit} hours, counted across all your jobs.`
                    : `Weeks ${breaches.map((pair) => `${pair.from + 1} and ${pair.from + 2}`).join(", ")} add up to more than ${config.limit} hours. Each week on its own can look fine: it's the pair that counts.`}
              </p>
            </div>
            <p className="mt-6 text-xs leading-relaxed text-gray-500">{config.footnote}</p>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
