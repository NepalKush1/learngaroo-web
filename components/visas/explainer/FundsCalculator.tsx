"use client";

import { useState } from "react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import type { FundsConfig } from "@/data/visas/explainers/types";
import { aud, useCountUp } from "./useCountUp";
import { Stepper, Switch } from "./controls";
import { StickyTotal } from "./StickyTotal";

// How much money a Student visa applicant shows: course fees for the first
// 12 months, living costs for everyone applying (pro rata for shorter
// stays), school costs and travel, using the figures on the page.

const FIELD =
  "mt-1.5 w-full rounded-xl border border-gray-200 bg-brand-surface px-3 py-2.5 text-[15px] font-bold text-brand-navy focus:border-brand-primary focus:outline-none focus:ring-2 focus:ring-brand-primary/20";

function Money({ label, hint, value, onChange }: { label: string; hint?: string; value: number; onChange: (value: number) => void }) {
  return (
    <label className="block">
      <span className="text-sm font-bold text-brand-navy">{label}</span>
      {hint && <span className="block text-xs text-gray-500">{hint}</span>}
      <span className="relative block">
        <span className="pointer-events-none absolute left-3 top-1/2 mt-[3px] -translate-y-1/2 text-sm font-bold text-gray-400">A$</span>
        <input
          type="number"
          inputMode="numeric"
          min={0}
          step={100}
          value={value === 0 ? "" : value}
          placeholder="0"
          onChange={(event) => onChange(Math.max(0, Number(event.target.value) || 0))}
          className={`${FIELD} pl-10`}
        />
      </span>
    </label>
  );
}

export function FundsCalculator({ config }: { config: FundsConfig }) {
  const [totalFees, setTotalFees] = useState(60000);
  const [courseMonths, setCourseMonths] = useState(24);
  const [paid, setPaid] = useState(0);
  const [stay, setStay] = useState(12);
  const [partner, setPartner] = useState(false);
  const [children, setChildren] = useState(0);
  const [schoolAge, setSchoolAge] = useState(0);
  const [travel, setTravel] = useState(0);

  const school = Math.min(schoolAge, children);
  const share = Math.min(12, stay) / 12;
  const people = 1 + (partner ? 1 : 0) + children;
  // Home Affairs truncates: A$50,000 over 36 months gives A$16,666.
  const firstYearFees = courseMonths > 12 ? Math.floor((totalFees / courseMonths) * 12) : totalFees;
  const fees = Math.max(0, firstYearFees - paid);
  const rows = [
    { label: courseMonths > 12 ? `Course fees for the first 12 months (${aud(firstYearFees)}${paid > 0 ? ` less ${aud(paid)} paid` : ""})` : `Course fees${paid > 0 ? ` less ${aud(paid)} paid` : ""}`, amount: fees },
    { label: `Living costs for you${stay < 12 ? `, ${stay} of 12 months` : ""}`, amount: Math.round(config.living.you * share) },
    ...(partner ? [{ label: "Living costs for your partner", amount: Math.round(config.living.partner * share) }] : []),
    ...(children > 0 ? [{ label: `Living costs: ${children} child${children > 1 ? "ren" : ""} × ${aud(config.living.child)}`, amount: Math.round(children * config.living.child * share) }] : []),
    ...(school > 0 ? [{ label: `School costs: ${school} school-age child${school > 1 ? "ren" : ""} × ${aud(config.schooling)}`, amount: Math.round(school * config.schooling * share) }] : []),
    { label: `Travel: ${people} ${people > 1 ? "people" : "person"} × ${aud(config.travel[travel].amount)}`, amount: people * config.travel[travel].amount },
  ];
  const total = rows.reduce((sum, row) => sum + row.amount, 0);
  const shown = useCountUp(total);

  return (
    <section id="funds" className="relative scroll-mt-32 bg-brand-surface py-16 sm:py-24">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Funds"
            title="How much money do you need to show?"
            highlight="money"
            subtitle="Enter your course fees and who is coming with you. The total uses the Home Affairs figures for 12 months of costs. Nothing is saved or sent."
            align="center"
          />
        </Reveal>

        <StickyTotal label="Funds to show" value={aud(total)} href="#funds-result" tone="orange" />

        <div className="mt-6 grid gap-6 lg:mt-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <Reveal>
            <div className="space-y-6 rounded-[2rem] border border-gray-100 bg-white p-6 shadow-card sm:p-8">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-brand-primary">Your course</p>
              <div className="grid gap-4 sm:grid-cols-2">
                <Money label="Total course fees" value={totalFees} onChange={setTotalFees} />
                <label className="block">
                  <span className="text-sm font-bold text-brand-navy">Course length (months)</span>
                  <input
                    type="number"
                    inputMode="numeric"
                    min={1}
                    max={72}
                    value={courseMonths}
                    onChange={(event) => setCourseMonths(Math.min(72, Math.max(1, Number(event.target.value) || 1)))}
                    className={FIELD}
                  />
                </label>
              </div>
              <Money label="Fees already paid" hint="Deducted from the first 12 months" value={paid} onChange={setPaid} />
              <label className="block">
                <span className="flex items-baseline justify-between text-sm font-bold text-brand-navy">
                  How long you&apos;ll stay
                  <span className="font-heading text-xl font-extrabold">{stay >= 12 ? "12+ months" : `${stay} month${stay > 1 ? "s" : ""}`}</span>
                </span>
                <input type="range" min={1} max={12} value={stay} onChange={(event) => setStay(Number(event.target.value))} aria-label="Months you will stay" className="mt-2 w-full cursor-pointer accent-brand-primary" />
                <span className="text-xs text-gray-500">Under 12 months, living and school costs are worked out pro rata.</span>
              </label>

              <div className="space-y-5 border-t border-gray-100 pt-6">
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-brand-primary">Coming with you</p>
                <Switch label="Partner" checked={partner} onChange={setPartner} />
                <Stepper
                  label="Children"
                  value={children}
                  min={0}
                  max={6}
                  onChange={(value) => {
                    setChildren(value);
                    setSchoolAge((current) => Math.min(current, value));
                  }}
                />
                {children > 0 && <Stepper label="Of those, school-age" hint="School costs apply to each" value={school} min={0} max={children} onChange={setSchoolAge} />}
              </div>

              <div className="border-t border-gray-100 pt-6">
                <label className="block">
                  <span className="text-sm font-bold text-brand-navy">Travelling from</span>
                  <select value={travel} onChange={(event) => setTravel(Number(event.target.value))} className={FIELD}>
                    {config.travel.map((option, index) => (
                      <option key={option.label} value={index}>
                        {option.label} ({aud(option.amount)} per person)
                      </option>
                    ))}
                  </select>
                </label>
              </div>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <div className="lg:sticky lg:top-40">
              <div id="funds-result" className="scroll-mt-48 overflow-hidden rounded-[2rem] bg-white shadow-float">
                <div className="bg-gradient-to-br from-orange-700 to-orange-800 p-7 text-white">
                  <p className="text-xs font-bold uppercase tracking-[0.16em] text-white/70">Funds to show</p>
                  <p className="font-heading mt-2 text-4xl font-extrabold sm:text-5xl" aria-live="polite">
                    {aud(shown)}
                  </p>
                  <ul className="mt-5 space-y-2 text-sm">
                    {rows.map((row) => (
                      <li key={row.label} className="flex justify-between gap-3 border-t border-white/15 pt-2 text-white/85">
                        <span>{row.label}</span>
                        <span className="shrink-0 font-bold text-white">{aud(row.amount)}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="space-y-4 p-7 text-sm leading-relaxed text-gray-600">
                  {config.alternative && (
                    <div className="rounded-2xl bg-brand-mint p-4 text-brand-primary-dark">
                      <span className="font-bold">Or the income option:</span> {config.alternative}
                    </div>
                  )}
                  <p className="text-xs text-gray-500">{config.footnote}</p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
