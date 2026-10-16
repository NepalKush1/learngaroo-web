"use client";

import { useState } from "react";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import {
  employmentCap,
  passMark,
  pointsBonuses,
  pointsQuestions,
  pointsTableAsAt,
  visaNominationPoints,
} from "@/data/points";
import type { PointsWidgetConfig } from "@/data/visas/explainers/types";
import { useCountUp } from "./useCountUp";
import { StickyTotal } from "./StickyTotal";

// The points test as a set of one-tap chips and a live gauge, preset to this
// page's visa. Same table and rules as /tools/points-calculator
// (data/points.ts): combined employment points are capped.

const RADIUS = 80;
const CIRC = 2 * Math.PI * RADIUS;
// The gauge fills to the pass mark and keeps going: the full ring is twice it.
const GAUGE_MAX = passMark * 2;

export function PointsWidget({ config }: { config: PointsWidgetConfig }) {
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [bonuses, setBonuses] = useState<Record<string, boolean>>({});
  const [visa, setVisa] = useState<string>(config.visa);

  const pointsFor = (id: string) =>
    pointsQuestions
      .find((question) => question.id === id)
      ?.options.find((option) => option.value === answers[id])?.points ?? 0;
  const rawEmployment = pointsFor("overseasWork") + pointsFor("australianWork");
  const employment = Math.min(employmentCap, rawEmployment);
  const nomination =
    visaNominationPoints.find((item) => item.value === visa)?.points ?? 0;
  const extra = pointsBonuses
    .filter((bonus) => bonuses[bonus.id])
    .reduce((sum, bonus) => sum + bonus.points, 0);
  const parts = [
    { label: "Age", value: pointsFor("age") },
    { label: "English", value: pointsFor("english") },
    { label: "Employment", value: employment },
    { label: "Qualification", value: pointsFor("education") },
    { label: "Partner", value: pointsFor("partner") },
    { label: "Other", value: extra },
    { label: "Nomination", value: nomination },
  ];
  const total = parts.reduce((sum, part) => sum + part.value, 0);
  const shown = useCountUp(total, 400);
  const answered = pointsQuestions.filter(
    (question) => answers[question.id],
  ).length;
  const tooOld = answers.age === "45+";
  const reached = total >= passMark && !tooOld;
  const fill = Math.min(1, total / GAUGE_MAX);

  return (
    <section
      id="points"
      className="relative scroll-mt-32 bg-brand-surface py-16 sm:py-24"
    >
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Points test"
            title="Count your points"
            highlight="points"
            subtitle={`The pass mark is ${passMark}. Tap one answer in each row and watch the gauge. Nothing is saved or sent.`}
            align="center"
          />
        </Reveal>

        <StickyTotal
          label={
            tooOld
              ? "Under 45 when invited"
              : reached
                ? "Above the pass mark"
                : `Pass mark ${passMark}`
          }
          value={`${total} points`}
          href="#points-result"
          tone={tooOld ? "rose" : reached ? "green" : "amber"}
        />

        <div className="mt-6 grid gap-6 lg:mt-12 lg:grid-cols-[1.35fr_0.65fr] lg:items-start">
          <Reveal>
            <div className="space-y-5 rounded-[2rem] border border-gray-100 bg-white p-5 shadow-card sm:p-8">
              <fieldset>
                <legend className="text-sm font-bold text-brand-navy">
                  Which visa?
                </legend>
                <div className="mt-2 flex flex-wrap gap-2">
                  {visaNominationPoints.map((item) => (
                    <button
                      key={item.value}
                      type="button"
                      onClick={() => setVisa(item.value)}
                      aria-pressed={visa === item.value}
                      className={`rounded-full px-4 py-2 text-sm font-bold transition-all ${visa === item.value ? "bg-brand-navy text-white shadow" : "bg-brand-surface text-brand-navy/70 hover:text-brand-navy"}`}
                    >
                      {item.value}{" "}
                      <span className="opacity-70">+{item.points}</span>
                    </button>
                  ))}
                </div>
              </fieldset>
              {pointsQuestions.map((question) => (
                <div
                  key={question.id}
                  className="border-t border-gray-100 pt-5"
                >
                  <fieldset>
                    <legend className="flex w-full items-baseline justify-between gap-3 text-sm font-bold text-brand-navy">
                      <span>{question.label}</span>
                      {answers[question.id] && (
                        <span className="shrink-0 text-xs text-brand-primary">
                          +{pointsFor(question.id)}
                        </span>
                      )}
                    </legend>
                    {question.help && (
                      <p className="mt-1 text-xs leading-relaxed text-gray-500">
                        {question.help}
                      </p>
                    )}
                    <div className="mt-2.5 flex flex-wrap gap-2">
                      {question.options.map((option) => {
                        const selected = answers[question.id] === option.value;
                        return (
                          <button
                            key={option.value}
                            type="button"
                            onClick={() =>
                              setAnswers((current) => ({
                                ...current,
                                [question.id]: option.value,
                              }))
                            }
                            aria-pressed={selected}
                            title={option.hint}
                            className={`rounded-xl border px-3 py-2 text-left text-[13px] font-semibold leading-snug transition-all ${
                              selected
                                ? "border-brand-primary bg-brand-mint text-brand-navy ring-1 ring-brand-primary"
                                : "border-gray-200 text-gray-700 hover:border-brand-primary/40"
                            }`}
                          >
                            {option.label}{" "}
                            <span
                              className={`ml-1 font-extrabold ${selected ? "text-brand-primary" : "text-gray-400"}`}
                            >
                              +{option.points}
                            </span>
                          </button>
                        );
                      })}
                    </div>
                  </fieldset>
                </div>
              ))}
              <div className="border-t border-gray-100 pt-5">
                <fieldset>
                  <legend className="text-sm font-bold text-brand-navy">
                    Extra points (tick any that apply)
                  </legend>
                  <div className="mt-2.5 flex flex-wrap gap-2">
                    {pointsBonuses.map((bonus) => {
                      const on = Boolean(bonuses[bonus.id]);
                      return (
                        <button
                          key={bonus.id}
                          type="button"
                          onClick={() =>
                            setBonuses((current) => ({
                              ...current,
                              [bonus.id]: !current[bonus.id],
                            }))
                          }
                          aria-pressed={on}
                          title={bonus.help}
                          className={`rounded-xl border px-3 py-2 text-left text-[13px] font-semibold leading-snug transition-all ${
                            on
                              ? "border-brand-primary bg-brand-mint text-brand-navy ring-1 ring-brand-primary"
                              : "border-gray-200 text-gray-700 hover:border-brand-primary/40"
                          }`}
                        >
                          {on ? "✓ " : ""}
                          {bonus.label}{" "}
                          <span
                            className={`ml-1 font-extrabold ${on ? "text-brand-primary" : "text-gray-400"}`}
                          >
                            +{bonus.points}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </fieldset>
              </div>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <div className="lg:sticky lg:top-40">
              <div
                id="points-result"
                className="scroll-mt-48 rounded-[2rem] bg-white p-6 text-center shadow-float sm:p-8"
              >
                <div className="relative mx-auto h-52 w-52">
                  <svg
                    viewBox="0 0 200 200"
                    className="h-full w-full -rotate-90"
                    aria-hidden="true"
                  >
                    <circle
                      cx="100"
                      cy="100"
                      r={RADIUS}
                      fill="none"
                      strokeWidth="16"
                      className="stroke-gray-100"
                    />
                    <circle
                      cx="100"
                      cy="100"
                      r={RADIUS}
                      fill="none"
                      strokeWidth="16"
                      strokeLinecap="round"
                      strokeDasharray={CIRC}
                      strokeDashoffset={CIRC * (1 - fill)}
                      className={`transition-all duration-500 ${tooOld ? "stroke-rose-500" : reached ? "stroke-brand-green" : "stroke-amber-400"}`}
                    />
                    {/* Pass mark tick half way round (the bottom once the ring is rotated). */}
                    <line
                      x1="8"
                      y1="100"
                      x2="34"
                      y2="100"
                      className="stroke-brand-navy"
                      strokeWidth="3"
                      strokeLinecap="round"
                    />
                  </svg>
                  <div
                    className="absolute inset-0 flex flex-col items-center justify-center"
                    aria-live="polite"
                  >
                    <span className="font-heading text-5xl font-extrabold text-brand-navy">
                      {shown}
                    </span>
                    <span className="text-sm font-bold text-gray-500">
                      points
                    </span>
                    <span className="mt-1 text-[11px] font-bold text-gray-400">
                      pass mark {passMark}
                    </span>
                  </div>
                </div>
                <p
                  className={`font-heading mt-4 text-lg font-bold ${tooOld ? "text-rose-700" : reached ? "text-brand-primary-dark" : "text-amber-700"}`}
                >
                  {tooOld
                    ? "You must be under 45 when invited"
                    : reached
                      ? `${total - passMark} above the pass mark`
                      : answered === 0
                        ? "Start with your age"
                        : `${passMark - total} to go`}
                </p>
                <p className="mt-1 text-xs text-gray-500">
                  {answered} of {pointsQuestions.length} rows answered
                </p>
                <ul className="mt-5 space-y-1.5 text-left text-sm">
                  {parts.map((part) => (
                    <li key={part.label} className="flex items-center gap-3">
                      <span className="w-24 shrink-0 text-xs font-bold text-gray-500">
                        {part.label}
                      </span>
                      <span
                        className="h-2 flex-1 overflow-hidden rounded-full bg-gray-100"
                        aria-hidden="true"
                      >
                        <span
                          className="bg-gradient-brand block h-full rounded-full transition-all duration-500"
                          style={{
                            width: `${Math.min(100, (part.value / 30) * 100)}%`,
                          }}
                        />
                      </span>
                      <span className="w-8 text-right text-xs font-extrabold text-brand-navy">
                        {part.value}
                      </span>
                    </li>
                  ))}
                </ul>
                {rawEmployment > employmentCap && (
                  <p className="mt-3 text-xs font-semibold text-amber-700">
                    Employment points are capped at {employmentCap} in total.
                  </p>
                )}
              </div>
              <p className="mt-4 text-xs leading-relaxed text-gray-500">
                Invitations go to the highest-ranked expressions of interest, so
                the score that gets invited is usually well above {passMark}.
                Points table as at {pointsTableAsAt}; some points need evidence
                such as a skills assessment or an English test.{" "}
                <Link
                  href="/tools/points-calculator"
                  className="font-semibold text-brand-primary hover:underline"
                >
                  Full calculator with explanations →
                </Link>
              </p>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
