"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { track } from "@/lib/analytics";
import { saveFederalPoints } from "@/lib/points-store";
import { Button, ArrowIcon } from "@/components/ui/Button";
import {
  employmentCap,
  passMark,
  pointsBonuses,
  pointsQuestions,
  pointsTableAsAt,
  visaNominationPoints,
} from "@/data/points";
import { siteConfig } from "@/lib/site-config";
import { WizardChoices, WizardFooter, WizardProgress, WizardQuestion, WizardShell, type WizardChoice } from "./WizardUi";

// Step-by-step federal points test (Schedule 6D), in the same wizard layout
// as the state calculators: one question per step, then a results screen.

type Visa = (typeof visaNominationPoints)[number]["value"];
type Answers = Record<string, string>;
type StepId = "visa" | "age" | "english" | "overseasWork" | "australianWork" | "education" | "partner" | "bonuses";

const STEPS: StepId[] = ["visa", "age", "english", "overseasWork", "australianWork", "education", "partner", "bonuses"];

const stepTitles: Record<StepId, { title: string; label: string }> = {
  visa: { title: "Which visa are you aiming for?", label: "Visa" },
  age: { title: "How old will you be when invited?", label: "Age" },
  english: { title: "What is your English level?", label: "English" },
  overseasWork: { title: "Skilled work outside Australia", label: "Overseas work" },
  australianWork: { title: "Skilled work in Australia", label: "Australian work" },
  education: { title: "What is your highest qualification?", label: "Qualification" },
  partner: { title: "What is your partner's situation?", label: "Partner" },
  bonuses: { title: "Anything else that earns points?", label: "Other points" },
};

function question(id: string) {
  return pointsQuestions.find((item) => item.id === id)!;
}

function pointsFor(questionId: string, value: string): number {
  return question(questionId).options.find((option) => option.value === value)?.points ?? 0;
}

function labelFor(questionId: string, value: string): string {
  return question(questionId).options.find((option) => option.value === value)?.label ?? "";
}

export function PointsCalculator() {
  // Prefill from a link (?age=25-32&english=proficient&…), accepting only
  // values that exist in the points table.
  const searchParams = useSearchParams();
  const [answers, setAnswers] = useState<Answers>(() => {
    const prefilled: Answers = {};
    for (const item of pointsQuestions) {
      const value = searchParams.get(item.id);
      if (value && item.options.some((option) => option.value === value)) prefilled[item.id] = value;
    }
    return prefilled;
  });
  const [visa, setVisa] = useState<Visa | undefined>(undefined);
  const [bonuses, setBonuses] = useState<Record<string, boolean>>({});
  const [stepIndex, setStepIndex] = useState(0);
  const [finished, setFinished] = useState(false);

  const result = useMemo(() => {
    const age = pointsFor("age", answers.age ?? "");
    const english = pointsFor("english", answers.english ?? "");
    const rawEmployment = pointsFor("overseasWork", answers.overseasWork ?? "") + pointsFor("australianWork", answers.australianWork ?? "");
    const employment = Math.min(employmentCap, rawEmployment);
    const education = pointsFor("education", answers.education ?? "");
    const partner = pointsFor("partner", answers.partner ?? "");
    // Regional study (6D101) only counts when the Australian study requirement (6D81) is met.
    const extra = pointsBonuses
      .filter((bonus) => bonuses[bonus.id] && (bonus.id !== "regional" || bonuses.australianStudy))
      .reduce((sum, bonus) => sum + bonus.points, 0);
    const base = age + english + employment + education + partner + extra;
    return {
      base,
      employmentCapped: rawEmployment > employmentCap,
      ineligibleAge: answers.age === "45+",
      rows: [
        { id: "age", factor: "Age", answer: labelFor("age", answers.age ?? ""), points: age, max: 30 },
        { id: "english", factor: "English", answer: labelFor("english", answers.english ?? ""), points: english, max: 20 },
        {
          id: "employment",
          factor: "Skilled employment",
          answer: `${labelFor("overseasWork", answers.overseasWork ?? "")} overseas · ${labelFor("australianWork", answers.australianWork ?? "")} in Australia`,
          points: employment,
          max: employmentCap,
        },
        { id: "education", factor: "Qualification", answer: labelFor("education", answers.education ?? ""), points: education, max: 20 },
        { id: "partner", factor: "Partner", answer: labelFor("partner", answers.partner ?? ""), points: partner, max: 10 },
        {
          id: "other",
          factor: "Other points",
          answer: pointsBonuses.filter((bonus) => bonuses[bonus.id]).map((bonus) => bonus.label).join(", ") || "None",
          points: extra,
          max: 30,
        },
      ],
    };
  }, [answers, bonuses]);

  // Record once when the result is shown (no personal data sent).
  useEffect(() => {
    if (!finished) return;
    track("points_calculated", { points: result.base });
    saveFederalPoints(result.base);
  }, [finished, result.base]);

  const set = (id: string, value: string) => setAnswers((prev) => ({ ...prev, [id]: value }));
  const step = STEPS[stepIndex];
  const reset = () => {
    setAnswers({});
    setVisa(undefined);
    setBonuses({});
    setStepIndex(0);
    setFinished(false);
  };
  const next = () => (stepIndex >= STEPS.length - 1 ? setFinished(true) : setStepIndex((index) => index + 1));
  const back = () => (finished ? setFinished(false) : setStepIndex((index) => Math.max(0, index - 1)));
  const canNext = step === "visa" ? Boolean(visa) : step === "bonuses" ? true : Boolean(answers[step]);

  // ── Result ────────────────────────────────────────────────────────
  if (finished && visa) {
    const nomination = visaNominationPoints.find((item) => item.value === visa)!;
    const total = result.base + nomination.points;
    const meets = total >= passMark && !result.ineligibleAge;
    const englishUpgrade =
      answers.english === "competent"
        ? { to: "Proficient", gain: 10, next: "Superior", total: 20 }
        : answers.english === "proficient"
          ? { to: "Superior", gain: 10, next: null, total: 10 }
          : null;
    const lifts = [
      englishUpgrade && { text: `${englishUpgrade.to} English adds ${englishUpgrade.gain} points${englishUpgrade.next ? `; ${englishUpgrade.next} adds ${englishUpgrade.total}` : ""}. Often the fastest gain.`, points: englishUpgrade.total },
      visa === "189" && { text: "State nomination adds 5 (subclass 190) or 15 (subclass 491) on top of this score.", points: 15 },
      visa === "190" && { text: "A regional nomination for the subclass 491 adds 15 instead of 5.", points: 10 },
      !bonuses.ccl && { text: "A NAATI credentialled community language test adds 5.", points: 5 },
      !bonuses.professionalYear && { text: "A Professional Year in accounting, ICT or engineering adds 5.", points: 5 },
      !result.employmentCapped && { text: "Each extra band of skilled work adds points, up to the 20-point cap.", points: employmentCap - result.rows[2].points },
    ]
      .filter((item): item is { text: string; points: number } => Boolean(item) && (item as { points: number }).points > 0)
      .sort((a, b) => b.points - a.points)
      .slice(0, 4);

    return (
      <WizardShell>
        <div className="hero-rise text-center">
          <span className="text-xs font-bold uppercase tracking-[0.16em] text-gray-500">Your estimated points for the subclass {visa}</span>
          <p className="font-heading mt-4 text-7xl font-extrabold text-brand-navy">
            {total}
            <span className="ml-2 text-lg font-semibold text-gray-500">pass mark {passMark}</span>
          </p>
          <div className="mx-auto mt-4 h-3 max-w-md overflow-hidden rounded-full bg-gray-200" aria-hidden="true">
            <div className="h-full rounded-full bg-gradient-brand transition-all duration-700" style={{ width: `${Math.min(100, total)}%` }} />
          </div>
          <p className="mt-3 text-sm text-gray-600">
            {result.base} from your answers{nomination.points > 0 ? ` + ${nomination.points} nomination points` : ""}
          </p>
          <div className="mt-4 flex justify-center">
            <span className={`inline-flex rounded-full px-5 py-1.5 text-sm font-extrabold ${result.ineligibleAge ? "bg-rose-100 text-rose-800" : meets ? "bg-emerald-500 text-white" : "bg-amber-100 text-amber-900"}`}>
              {result.ineligibleAge ? "Not eligible: you must be under 45 when invited" : meets ? "Meets the pass mark" : `${passMark - total} points short of the pass mark`}
            </span>
          </div>
        </div>

        <ul className="mt-8 space-y-2">
          {result.rows.map((row, index) => (
            <li key={row.id} className="hero-rise rounded-2xl border border-gray-100 bg-white p-3.5" style={{ ["--rise-delay" as string]: `${index * 50}ms` }}>
              <div className="flex items-center gap-3">
                <span className="min-w-0 flex-1">
                  <span className="block text-sm font-bold text-brand-navy">{row.factor}</span>
                  <span className="block truncate text-xs text-gray-500">{row.answer}</span>
                </span>
                <span className="shrink-0 text-right text-sm">
                  <span className="font-heading text-lg font-extrabold text-brand-navy">{row.points}</span>
                  <span className="text-gray-400"> / {row.max}</span>
                </span>
              </div>
              <span className="mt-2 block h-1.5 overflow-hidden rounded-full bg-gray-100" aria-hidden="true">
                <span className="block h-full rounded-full bg-brand-primary transition-all duration-700" style={{ width: `${(row.points / row.max) * 100}%` }} />
              </span>
            </li>
          ))}
          {result.employmentCapped && <li className="px-1 text-xs text-gray-500">Overseas and Australian skilled employment together are capped at {employmentCap} points (Part 6D.5).</li>}
        </ul>

        <div className="mt-8 rounded-[1.5rem] bg-brand-navy p-6 text-white">
          <span className="text-xs font-bold uppercase tracking-[0.16em] text-brand-green-light">The same answers on each visa</span>
          <ul className="mt-4 grid gap-3 sm:grid-cols-3">
            {visaNominationPoints.map((item) => {
              const itemTotal = result.base + item.points;
              const ok = itemTotal >= passMark && !result.ineligibleAge;
              return (
                <li key={item.value} className={`rounded-2xl p-4 ring-1 ${item.value === visa ? "bg-emerald-500/20 ring-emerald-300/40" : "bg-white/5 ring-white/10"}`}>
                  <span className="block text-xs font-bold uppercase tracking-wider text-brand-green-light">Subclass {item.value}</span>
                  <span className="font-heading mt-1 block text-3xl font-extrabold">{itemTotal}</span>
                  <span className="block text-xs text-white/70">{item.points > 0 ? `includes +${item.points} nomination` : "no nomination points"}</span>
                  <span className={`mt-2 inline-block rounded-full px-2 py-0.5 text-[11px] font-bold ${ok ? "bg-brand-green text-white" : "bg-white/10 text-white/70"}`}>
                    {result.ineligibleAge ? "Not eligible" : ok ? "Meets pass mark" : `${passMark - itemTotal} short`}
                  </span>
                </li>
              );
            })}
          </ul>
          <p className="mt-4 text-sm leading-relaxed text-white/80">
            {passMark} is the floor for lodging an expression of interest, not the score that gets invited. Invitations often go to people well above it. Check competition for your occupation on its{" "}
            <Link href="/occupations" className="font-semibold text-brand-green-light hover:underline">occupation guide</Link>.
          </p>
        </div>

        {lifts.length > 0 && !result.ineligibleAge && (
          <div className="mt-8 rounded-2xl border border-amber-200 bg-amber-50 p-5">
            <h3 className="font-heading text-lg font-bold text-brand-navy">What could lift your total</h3>
            <ul className="mt-3 space-y-2">
              {lifts.map((lift) => (
                <li key={lift.text} className="flex items-start gap-3 text-sm leading-relaxed text-gray-700">
                  <span className="shrink-0 rounded-full bg-amber-200 px-2 py-0.5 text-[11px] font-extrabold text-amber-900">up to +{lift.points}</span>
                  {lift.text}
                </li>
              ))}
            </ul>
            {englishUpgrade && (
              <Button href={siteConfig.pte.signupUrl} external size="sm" track="pte_signup" className="mt-4">
                Practise PTE free on Learniiz ↗
              </Button>
            )}
          </div>
        )}

        {result.ineligibleAge && (
          <p className="mt-8 rounded-2xl border border-rose-200 bg-rose-50 p-4 text-sm text-rose-900">
            Applicants aged 45 or over can&apos;t be invited for points-tested visas, but employer-sponsored and other pathways may still be open. Ask us about them.
          </p>
        )}

        <div className="mt-8 grid gap-3 sm:grid-cols-2">
          <Link href="/tools/points?tab=states" className="rounded-2xl border border-gray-100 p-4 transition-colors hover:border-brand-primary">
            <p className="text-[11px] font-bold uppercase tracking-wider text-gray-500">Next step</p>
            <p className="mt-1 text-sm font-bold text-brand-navy">See which states would nominate you →</p>
            <p className="mt-1 text-xs text-gray-500">Victoria, Tasmania and the ACT rank with their own scores. Your {result.base} points are carried across.</p>
          </Link>
          <div className="rounded-2xl border border-gray-100 p-4">
            <p className="text-[11px] font-bold uppercase tracking-wider text-gray-500">Get it checked</p>
            <p className="mt-1 text-sm text-gray-700">Points depend on how your skills assessment, work and study are recognised. An agent can confirm each claim before you lodge.</p>
          </div>
        </div>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Button href="/bookings" track="book_cta">
            Book a Skilled Visa Consultation
            <ArrowIcon />
          </Button>
          <Button href="/visas/skilled" variant="outline">
            Skilled visa guides
          </Button>
          <button type="button" onClick={back} className="text-sm font-semibold text-gray-500 hover:text-brand-navy hover:underline">
            Change an answer
          </button>
          <button type="button" onClick={reset} className="text-sm font-semibold text-gray-500 hover:text-brand-navy hover:underline">
            Start over
          </button>
        </div>
        <p className="mt-6 text-center text-xs leading-relaxed text-gray-500">
          An estimate only, based on Schedule 6D of the Migration Regulations as we understand it at {pointsTableAsAt}. It isn&apos;t migration advice. Check the latest rules on the{" "}
          <a href="https://immi.homeaffairs.gov.au/help-support/tools/points-calculator" target="_blank" rel="noopener noreferrer" className="underline">
            Department of Home Affairs
          </a>{" "}
          website. Meeting the pass mark doesn&apos;t guarantee an invitation.
        </p>
      </WizardShell>
    );
  }

  // ── Questions ─────────────────────────────────────────────────────
  let body: React.ReactNode = null;
  if (step === "visa") {
    const visaOptions: WizardChoice<Visa>[] = [
      { value: "189", label: "Skilled Independent (subclass 189)", hint: "Permanent. No nomination needed, so no nomination points.", badge: "Permanent" },
      { value: "190", label: "Skilled Nominated (subclass 190)", hint: "Permanent. A state or territory nominates you.", badge: "+5" },
      { value: "491", label: "Skilled Work Regional (subclass 491)", hint: "5-year provisional visa with a path to permanent residence. Regional nomination or family sponsorship.", badge: "+15" },
    ];
    body = (
      <WizardQuestion title={stepTitles.visa.title} help="All three visas use the same points test. Nomination adds points for the 190 and 491, and the result screen shows all three.">
        <WizardChoices name="visa" value={visa} options={visaOptions} onChange={setVisa} columns={1} />
      </WizardQuestion>
    );
  } else if (step === "bonuses") {
    body = (
      <WizardQuestion title={stepTitles.bonuses.title} help="Tick everything that applies. Skip this step if none do.">
        <div className="grid gap-3">
          {pointsBonuses.map((bonus, index) => {
            const checked = Boolean(bonuses[bonus.id]);
            return (
              <label
                key={bonus.id}
                className={`hero-rise flex cursor-pointer items-start gap-3 rounded-2xl border-2 p-4 transition-all duration-200 hover:-translate-y-0.5 ${
                  checked ? "border-brand-primary bg-brand-mint shadow-md" : "border-gray-200 bg-white hover:border-brand-primary/40"
                }`}
                style={{ ["--rise-delay" as string]: `${index * 50}ms` }}
              >
                <input
                  type="checkbox"
                  checked={checked}
                  onChange={(event) => setBonuses((prev) => ({ ...prev, [bonus.id]: event.target.checked }))}
                  className="sr-only"
                />
                <span
                  className={`mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-md border-2 transition-colors ${
                    checked ? "border-brand-primary bg-brand-primary text-white" : "border-gray-300 bg-white text-transparent"
                  }`}
                  aria-hidden="true"
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={3} className="h-3.5 w-3.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m5 12.5 4.5 4.5L19 7.5" />
                  </svg>
                </span>
                <span className="flex-1">
                  <span className="block text-[15px] font-bold leading-snug text-brand-navy">{bonus.label}</span>
                  {bonus.help && <span className="mt-0.5 block text-xs leading-relaxed text-gray-500">{bonus.help}</span>}
                  {bonus.id === "regional" && checked && !bonuses.australianStudy && (
                    <span className="mt-1 block text-xs font-semibold text-amber-700">Not counted yet: regional study points need the Australian study requirement ticked above.</span>
                  )}
                  {bonus.learniiz === "ccl" && !checked && (
                    <a href={siteConfig.pte.url} target="_blank" rel="noopener" className="mt-1 inline-block text-xs font-semibold text-brand-primary underline">
                      Prepare for NAATI CCL with Learniiz ↗
                    </a>
                  )}
                </span>
                <span className={`shrink-0 rounded-full px-2 py-0.5 text-xs font-bold ${checked ? "bg-brand-primary text-white" : "bg-gray-100 text-gray-600"}`}>+{bonus.points}</span>
              </label>
            );
          })}
        </div>
      </WizardQuestion>
    );
  } else {
    const item = question(step);
    const options: WizardChoice<string>[] = item.options.map((option) => ({
      value: option.value,
      label: option.label,
      hint: option.hint,
      badge: `+${option.points}`,
    }));
    body = (
      <WizardQuestion title={stepTitles[step].title} help={item.help}>
        <WizardChoices name={step} value={answers[step]} options={options} onChange={(value) => set(step, value)} columns={step === "partner" || step === "education" ? 1 : 2} />
        {step === "age" && answers.age === "45+" && (
          <p className="hero-rise mt-4 rounded-2xl border border-rose-200 bg-rose-50 p-4 text-sm text-rose-900">
            Home Affairs can&apos;t invite you for a points-tested visa at 45 or over. You can continue to see the numbers, or ask us about employer-sponsored pathways.
          </p>
        )}
      </WizardQuestion>
    );
  }

  return (
    <WizardShell>
      <WizardProgress step={stepIndex} total={STEPS.length} label={`Federal points test · ${stepTitles[step].label}`} />
      <div className="mt-8">{body}</div>
      <WizardFooter
        canBack={stepIndex > 0}
        canNext={canNext}
        onBack={back}
        onNext={next}
        nextLabel={stepIndex === STEPS.length - 1 ? "See my points" : "Next"}
        onReset={stepIndex > 0 ? reset : undefined}
      />
    </WizardShell>
  );
}
