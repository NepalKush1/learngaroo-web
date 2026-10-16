"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { track } from "@/lib/analytics";
import { saveFederalPoints } from "@/lib/points-store";
import { Button } from "@/components/ui/Button";
import {
  employmentCap,
  passMark,
  pointsBonuses,
  pointsQuestions,
  pointsTableAsAt,
  visaNominationPoints,
} from "@/data/points";
import { siteConfig } from "@/lib/site-config";

type Answers = Record<string, string>;

const DEFAULT_ANSWERS: Answers = Object.fromEntries(
  pointsQuestions.map((question) => [question.id, ""]),
);

function pointsFor(questionId: string, value: string): number {
  const question = pointsQuestions.find((item) => item.id === questionId);
  return question?.options.find((option) => option.value === value)?.points ?? 0;
}

function OptionGroup({
  questionId,
  value,
  onChange,
}: {
  questionId: string;
  value: string;
  onChange: (value: string) => void;
}) {
  const question = pointsQuestions.find((item) => item.id === questionId)!;
  return (
    <fieldset className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm">
      <legend className="sr-only">{question.label}</legend>
      <p className="font-heading font-bold text-brand-navy" aria-hidden="true">
        {question.label}
      </p>
      {question.help && <p className="mt-1 text-xs text-gray-500">{question.help}</p>}
      <div className="mt-3 grid gap-2 sm:grid-cols-2">
        {question.options.map((option) => {
          const selected = value === option.value;
          return (
            <label
              key={option.value}
              className={`flex cursor-pointer items-center justify-between gap-3 rounded-xl border px-3.5 py-2.5 text-sm transition-colors ${
                selected
                  ? "border-brand-primary bg-brand-mint text-brand-navy ring-1 ring-brand-primary"
                  : "border-gray-200 text-gray-700 hover:border-brand-primary/40"
              }`}
            >
              <input
                type="radio"
                name={question.id}
                value={option.value}
                checked={selected}
                onChange={() => onChange(option.value)}
                className="sr-only"
              />
              <span>
                <span className="font-semibold">{option.label}</span>
                {option.hint && <span className="block text-xs text-gray-500">{option.hint}</span>}
              </span>
              <span
                className={`shrink-0 rounded-full px-2 py-0.5 text-xs font-bold ${
                  selected ? "bg-brand-primary text-white" : "bg-gray-100 text-gray-600"
                }`}
              >
                +{option.points}
              </span>
            </label>
          );
        })}
      </div>
    </fieldset>
  );
}

export function PointsCalculator() {
  // Prefill from the home-page estimate (?age=25-32&english=proficient&…),
  // accepting only values that exist in the points table.
  const searchParams = useSearchParams();
  const [answers, setAnswers] = useState<Answers>(() => {
    const prefilled = { ...DEFAULT_ANSWERS };
    for (const question of pointsQuestions) {
      const value = searchParams.get(question.id);
      if (value && question.options.some((option) => option.value === value)) prefilled[question.id] = value;
    }
    return prefilled;
  });
  const [bonuses, setBonuses] = useState<Record<string, boolean>>({});

  const result = useMemo(() => {
    const age = pointsFor("age", answers.age);
    const english = pointsFor("english", answers.english);
    const rawEmployment =
      pointsFor("overseasWork", answers.overseasWork) +
      pointsFor("australianWork", answers.australianWork);
    const employment = Math.min(employmentCap, rawEmployment);
    const education = pointsFor("education", answers.education);
    const partner = pointsFor("partner", answers.partner);
    // Regional study (6D101) only counts when the Australian study requirement (6D81) is met.
    const extra = pointsBonuses
      .filter((bonus) => bonuses[bonus.id] && (bonus.id !== "regional" || bonuses.australianStudy))
      .reduce((sum, bonus) => sum + bonus.points, 0);

    const base = age + english + employment + education + partner + extra;
    const answered = pointsQuestions.filter((question) => answers[question.id]).length;

    return {
      base,
      employmentCapped: rawEmployment > employmentCap,
      breakdown: [
        ["Age", age],
        ["English", english],
        ["Employment", employment],
        ["Qualification", education],
        ["Partner", partner],
        ["Other", extra],
      ] as [string, number][],
      ineligibleAge: answers.age === "45+",
      complete: answered === pointsQuestions.length,
      answered,
    };
  }, [answers, bonuses]);

  // Record once when all questions are answered (no personal data sent).
  useEffect(() => {
    if (!result.complete) return;
    track("points_calculated", { points: result.base });
    saveFederalPoints(result.base);
  }, [result.complete, result.base]);

  const englishUpgrade =
    answers.english === "competent"
      ? { to: "Proficient", gain: 10, next: "Superior", total: 20 }
      : answers.english === "proficient"
        ? { to: "Superior", gain: 10, next: null, total: 10 }
        : null;

  function update(id: string, value: string) {
    setAnswers((previous) => ({ ...previous, [id]: value }));
  }

  return (
    <div className="grid gap-8 lg:grid-cols-[1.4fr_1fr] lg:items-start">
      <div className="space-y-4">
        {/* Running total that stays in view on phones, where the full
            result panel sits below the questions. */}
        <div className="sticky top-20 z-10 flex items-center justify-between rounded-2xl bg-brand-navy px-5 py-3 text-white shadow-lg lg:hidden">
          <span className="text-sm text-white/70">Estimated points</span>
          <span className="font-heading text-2xl font-extrabold">{result.base}</span>
        </div>
        {pointsQuestions.map((question) => (
          <OptionGroup
            key={question.id}
            questionId={question.id}
            value={answers[question.id]}
            onChange={(value) => update(question.id, value)}
          />
        ))}

        <fieldset className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm">
          <legend className="sr-only">Other points</legend>
          <p className="font-heading font-bold text-brand-navy" aria-hidden="true">
            Other points (tick all that apply)
          </p>
          <div className="mt-3 space-y-2">
            {pointsBonuses.map((bonus) => (
              <label
                key={bonus.id}
                className={`flex cursor-pointer items-start justify-between gap-3 rounded-xl border px-3.5 py-2.5 text-sm transition-colors ${
                  bonuses[bonus.id]
                    ? "border-brand-primary bg-brand-mint ring-1 ring-brand-primary"
                    : "border-gray-200 hover:border-brand-primary/40"
                }`}
              >
                <span className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    checked={Boolean(bonuses[bonus.id])}
                    onChange={(event) =>
                      setBonuses((previous) => ({ ...previous, [bonus.id]: event.target.checked }))
                    }
                    className="mt-0.5 h-4 w-4 rounded border-gray-300 accent-[var(--brand-primary)]"
                  />
                  <span>
                    <span className="font-semibold text-brand-navy">{bonus.label}</span>
                    {bonus.help && <span className="block text-xs text-gray-500">{bonus.help}</span>}
                    {bonus.id === "regional" && bonuses.regional && !bonuses.australianStudy && (
                      <span className="mt-1 block text-xs font-semibold text-amber-700">
                        Not counted yet: regional study points need the Australian study requirement ticked above.
                      </span>
                    )}
                    {bonus.learniiz === "ccl" && !bonuses[bonus.id] && (
                      <a
                        href={siteConfig.pte.url}
                        target="_blank"
                        rel="noopener"
                        className="mt-1 inline-block text-xs font-semibold text-brand-primary underline"
                      >
                        Prepare for NAATI CCL with Learniiz ↗
                      </a>
                    )}
                  </span>
                </span>
                <span className="shrink-0 rounded-full bg-gray-100 px-2 py-0.5 text-xs font-bold text-gray-600">
                  +{bonus.points}
                </span>
              </label>
            ))}
          </div>
        </fieldset>
      </div>

      <aside className="space-y-4 lg:sticky lg:top-28" aria-live="polite">
        <div className="overflow-hidden rounded-3xl bg-brand-navy text-white shadow-deep">
          <div className="bg-gradient-brand h-1.5" aria-hidden="true" />
          <div className="p-6">
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-brand-green-light">
              Your estimated points
            </p>
            <p className="font-heading mt-2 text-6xl font-extrabold">{result.base}</p>
            <p className="mt-1 text-sm text-white/60">
              {result.complete
                ? `Pass mark is ${passMark} points`
                : `${result.answered} of ${pointsQuestions.length} questions answered`}
            </p>

            <div className="mt-5 h-2.5 overflow-hidden rounded-full bg-white/10" aria-hidden="true">
              <div
                className="bg-gradient-brand h-full rounded-full transition-all duration-500"
                style={{ width: `${Math.min(100, (result.base / 100) * 100)}%` }}
              />
            </div>

            <ul className="mt-6 space-y-2">
              {visaNominationPoints.map((visa) => {
                const total = result.base + visa.points;
                const meets = total >= passMark && !result.ineligibleAge;
                return (
                  <li key={visa.value} className="flex items-center justify-between gap-3 rounded-xl bg-white/5 px-3.5 py-2.5 ring-1 ring-white/10">
                    <span className="text-sm">
                      {visa.label}
                      {visa.points > 0 && <span className="text-white/50"> (+{visa.points})</span>}
                    </span>
                    <span className="flex items-center gap-2">
                      <span className="font-heading text-lg font-extrabold">{total}</span>
                      <span
                        className={`whitespace-nowrap rounded-full px-2 py-0.5 text-[11px] font-bold ${
                          meets ? "bg-brand-green text-white" : "bg-white/10 text-white/60"
                        }`}
                      >
                        {result.ineligibleAge
                          ? "Not eligible"
                          : meets
                            ? "Meets pass mark"
                            : `${passMark - total} short`}
                      </span>
                    </span>
                  </li>
                );
              })}
            </ul>

            {result.ineligibleAge && (
              <p className="mt-4 rounded-xl bg-amber-400/15 p-3 text-sm text-amber-200">
                Applicants aged 45 or over can&apos;t apply for points-tested visas, but
                employer-sponsored or other pathways may still be open to you.
              </p>
            )}
            {result.employmentCapped && (
              <p className="mt-4 text-xs text-white/60">
                Combined skilled employment is capped at {employmentCap} points.
              </p>
            )}

            <dl className="mt-6 grid grid-cols-3 gap-2 text-center">
              {result.breakdown.map(([label, value]) => (
                <div key={label} className="rounded-xl bg-white/5 py-2">
                  <dt className="text-[11px] text-white/50">{label}</dt>
                  <dd className="font-bold">{value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>

        {englishUpgrade && (
          <div className="rounded-3xl border border-brand-primary/20 bg-brand-mint p-5">
            <p className="font-heading font-bold text-brand-navy">
              +{englishUpgrade.gain} points with a better PTE score
            </p>
            <p className="mt-1 text-sm text-gray-700">
              Moving to {englishUpgrade.to} English adds {englishUpgrade.gain} points
              {englishUpgrade.next && <> — reaching {englishUpgrade.next} adds {englishUpgrade.total}</>}.
              Improving your English is often one of the quickest ways to raise your score.
            </p>
            <Button href={siteConfig.pte.signupUrl} external size="sm" track="pte_signup" className="mt-3">
              Practise PTE free on Learniiz ↗
            </Button>
          </div>
        )}

        <div className="rounded-3xl border border-gray-100 bg-white p-5 shadow-sm">
          <p className="font-heading font-bold text-brand-navy">A few points short? Ways to gain more</p>
          <ul className="mt-2 space-y-1.5 text-sm text-gray-600">
            <li><span className="font-semibold text-brand-navy">English:</span> Proficient adds 10, Superior adds 20. Often the fastest gain.</li>
            <li><span className="font-semibold text-brand-navy">State or regional nomination:</span> +5 for subclass 190, +15 for subclass 491. <Link href="/state-nomination" className="font-semibold text-brand-primary hover:underline">See which states are open →</Link> Tasmania and the ACT rank with their own scoring: try the <Link href="/tools/tasmania-points-calculator" className="font-semibold text-brand-primary hover:underline">Tasmania</Link> and <Link href="/tools/canberra-matrix-calculator" className="font-semibold text-brand-primary hover:underline">Canberra Matrix</Link> calculators.</li>
            <li><span className="font-semibold text-brand-navy">NAATI CCL:</span> +5 for a credentialled community language test.</li>
            <li><span className="font-semibold text-brand-navy">Professional Year:</span> +5 for accounting, ICT or engineering graduates.</li>
            <li><span className="font-semibold text-brand-navy">Regional study:</span> +5 on top of the Australian study requirement. <Link href="/tools/regional-postcode-checker" className="font-semibold text-brand-primary hover:underline">Check a postcode →</Link></li>
            <li><span className="font-semibold text-brand-navy">Work experience:</span> each extra band of skilled work adds points, up to the cap.</li>
          </ul>
          <p className="mt-3 text-xs text-gray-500">
            Remember that {passMark} is the floor for lodging an EOI, not the score that gets invited. Check your occupation&apos;s lists and competition on its{" "}
            <Link href="/occupations" className="font-semibold text-brand-primary hover:underline">occupation guide</Link>.
          </p>
        </div>

        <div className="rounded-3xl border border-gray-100 bg-white p-5 shadow-sm">
          <p className="font-heading font-bold text-brand-navy">Get your score checked by an agent</p>
          <p className="mt-1 text-sm text-gray-600">
            Points depend on how your skills assessment, work experience and study are
            recognised. Meeting the pass mark doesn&apos;t guarantee an invitation: invitations
            often go to people with well above {passMark} points.
          </p>
          <Button href="/bookings" variant="secondary" size="sm" track="book_cta" className="mt-3">
            Book a Skilled Visa Consultation →
          </Button>
        </div>

        <p className="text-xs leading-relaxed text-gray-500">
          This is an estimate only, based on the points test as we understand it at{" "}
          {pointsTableAsAt}. It isn&apos;t migration advice. Check the latest rules on the{" "}
          <a
            href="https://immi.homeaffairs.gov.au/help-support/tools/points-calculator"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            Department of Home Affairs
          </a>{" "}
          website.
        </p>
      </aside>
    </div>
  );
}
