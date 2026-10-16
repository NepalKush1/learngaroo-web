"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { Button, ArrowIcon } from "@/components/ui/Button";
import { OccupationSearch } from "@/components/state-assessment/OccupationSearch";
import { homeAffairsOccupations } from "@/data/state-assessment/home-affairs";
import type { HomeAffairsOccupation } from "@/data/state-assessment/types";
import { anzscoSkillLevelNotes, anzscoSkillLevels, anzscoSkillLevelsSource } from "@/data/anzsco-skill-levels";
import {
  victoriaFees,
  victoriaPointsAsAt,
  victoriaPointsUrls,
  vptAgePoints,
  vptEarningsPoints,
  vptEducation,
  vptEnglish,
  vptExperience,
  vptGroupLabel,
  vptMaximum,
  vptMaximumTotal,
  vptPartnerPoints,
  vptPriorityGroup,
  vptSkillLevelPoints,
  type VptEducation,
  type VptEnglish,
  type VptExperience,
} from "@/data/victoria-points";
import { WizardChoices, WizardFooter, WizardProgress, WizardQuestion, WizardShell, type WizardChoice } from "./WizardUi";

// The Victorian Points Test, one question at a time: the visa, the
// occupation (with its ANZSCO skill level and whether it is a 2026-27
// priority occupation), then each weighted factor, with the running total in
// view. The result shows where every point came from, the two ways Victoria
// invites, the Home Affairs minimums and the 2026-27 fees.

type Visa = "190" | "491";
type YesNo = "yes" | "no";
type English = VptEnglish | "below";
type Partner = "none" | "included" | "not-included";

interface Answers {
  visa?: Visa;
  occupation: string | null;
  // Set only when the visitor corrects the skill level we show.
  skillLevel?: number;
  age: number;
  english?: English;
  experience?: VptExperience;
  education?: VptEducation;
  partner?: Partner;
  partnerPoints?: YesNo;
  partnerOccupation: string | null;
  employed?: YesNo;
  earnings: string;
}

const START: Answers = { occupation: null, age: 30, partnerOccupation: null, earnings: "" };
const STEPS = ["visa", "occupation", "age", "english", "experience", "education", "partner", "earnings"] as const;
type StepId = (typeof STEPS)[number];
const STEP_LABEL: Record<StepId, string> = {
  visa: "Visa",
  occupation: "Occupation",
  age: "Age",
  english: "English",
  experience: "Experience",
  education: "Education",
  partner: "Partner",
  earnings: "Earnings",
};

const money = (value: number) => `A$${value.toLocaleString("en-AU")}`;
const amountOf = (raw: string) => Number(raw.replace(/[^\d.]/g, "")) || 0;
const findOccupation = (code: string | null) => (code ? homeAffairsOccupations.find((occupation) => occupation.code === code) : undefined);

// MLTSSL and STSOL occupations can be nominated for both visas; ROL ones for
// the 491 only.
const onListFor = (occupation: HomeAffairsOccupation, visa: Visa) => visa === "491" || occupation.lists.some((list) => list !== "ROL");

function priorityBadge(occupation: HomeAffairsOccupation): { text: string; tone: string } {
  const group = vptPriorityGroup(occupation.code);
  if (group) return { text: `Priority: ${group.industry}`, tone: "bg-emerald-100 text-emerald-800" };
  return occupation.lists.some((list) => list !== "ROL") ? { text: "190 and 491", tone: "bg-brand-mint text-brand-primary-dark" } : { text: "491 only", tone: "bg-amber-100 text-amber-800" };
}

interface Row {
  id: StepId;
  factor: string;
  answer: string;
  points: number;
  max: number;
}

function score(answers: Answers) {
  const occupation = findOccupation(answers.occupation);
  const listedLevel = occupation ? anzscoSkillLevels[occupation.code] : undefined;
  const level = answers.skillLevel ?? listedLevel;
  const english = vptEnglish.find((item) => item.value === answers.english);
  const experience = vptExperience.find((item) => item.value === answers.experience);
  const education = vptEducation.find((item) => item.value === answers.education);
  const partnerOccupation = findOccupation(answers.partnerOccupation);
  const partnerGroup = partnerOccupation ? vptPriorityGroup(partnerOccupation.code) : undefined;
  const partnerScores = answers.partner === "included" && answers.partnerPoints === "yes" && Boolean(partnerGroup);
  const amount = answers.employed === "yes" ? amountOf(answers.earnings) : 0;

  const rows: Row[] = [
    { id: "age", factor: "Age", answer: answers.age >= 45 ? `${answers.age} (45 or over)` : String(answers.age), points: answers.age < 45 ? vptAgePoints(answers.age) : 0, max: vptMaximum.age },
    { id: "english", factor: "English", answer: english?.label ?? (answers.english === "below" ? "Below Competent" : "Not answered"), points: english?.points ?? 0, max: vptMaximum.english },
    { id: "experience", factor: "Experience in your occupation", answer: experience?.label ?? "Not answered", points: experience?.points ?? 0, max: vptMaximum.experience },
    { id: "education", factor: "Education", answer: education?.label ?? "Not answered", points: education?.points ?? 0, max: vptMaximum.education },
    { id: "occupation", factor: "Occupation skill level", answer: level ? `Skill level ${level}` : "Not known", points: level ? (vptSkillLevelPoints[level] ?? 0) : 0, max: vptMaximum.skillLevel },
    {
      id: "partner",
      factor: "Partner's skill",
      answer: partnerScores ? `${partnerOccupation?.title} (${partnerGroup ? vptGroupLabel(partnerGroup) : ""})` : answers.partner === "included" ? "Doesn't meet all three conditions" : "Doesn't apply",
      points: partnerScores ? vptPartnerPoints : 0,
      max: vptMaximum.partner,
    },
    { id: "earnings", factor: "Earnings in Victoria", answer: amount ? `${money(amount)} a year` : "Doesn't apply", points: vptEarningsPoints(amount), max: vptMaximum.earnings },
  ];
  const total = rows.reduce((sum, row) => sum + row.points, 0);
  return { rows, total, occupation, level, listedLevel, partnerOccupation, partnerGroup, amount };
}

function Points({ value, className = "" }: { value: number; className?: string }) {
  return <span className={`shrink-0 rounded-full px-2.5 py-0.5 text-xs font-bold ${value > 0 ? "bg-emerald-100 text-emerald-800" : "bg-gray-100 text-gray-500"} ${className}`}>{value > 0 ? `+${value}` : "0"}</span>;
}

function Running({ total }: { total: number }) {
  return (
    <p className="mt-3 flex items-center justify-end gap-2 text-sm text-gray-500" aria-live="polite">
      Your VPT so far
      <span className="font-heading rounded-full bg-brand-navy px-3 py-0.5 text-base font-extrabold text-white">{total}</span>
    </p>
  );
}

export function VictoriaPointsCalculator() {
  const [answers, setAnswers] = useState<Answers>(START);
  const [stepIndex, setStepIndex] = useState(0);
  const [finished, setFinished] = useState(false);
  const [editLevel, setEditLevel] = useState(false);

  const result = useMemo(() => score(answers), [answers]);
  const set = <K extends keyof Answers>(key: K, value: Answers[K]) => setAnswers((prev) => ({ ...prev, [key]: value }));
  const step = STEPS[stepIndex];
  const reset = () => {
    setAnswers(START);
    setStepIndex(0);
    setFinished(false);
    setEditLevel(false);
  };
  const next = () => (stepIndex >= STEPS.length - 1 ? setFinished(true) : setStepIndex((index) => index + 1));
  const back = () => (finished ? setFinished(false) : setStepIndex((index) => Math.max(0, index - 1)));

  const canNext: Record<StepId, boolean> = {
    visa: Boolean(answers.visa),
    occupation: Boolean(result.occupation),
    age: true,
    english: Boolean(answers.english),
    experience: Boolean(answers.experience),
    education: Boolean(answers.education),
    partner: answers.partner === "none" || answers.partner === "not-included" || (answers.partner === "included" && Boolean(answers.partnerPoints) && (answers.partnerPoints === "no" || Boolean(answers.partnerOccupation))),
    earnings: answers.employed === "no" || (answers.employed === "yes" && amountOf(answers.earnings) > 0),
  };

  // ── Result ────────────────────────────────────────────────────────
  if (finished && answers.visa && result.occupation) {
    const visa = answers.visa;
    const occupation = result.occupation;
    const group = vptPriorityGroup(occupation.code);
    const checks: { label: string; detail: string; state: "ok" | "fail" | "check"; link?: { href: string; label: string } }[] = [
      onListFor(occupation, visa)
        ? { label: `Occupation on the Home Affairs list for subclass ${visa}`, detail: `${occupation.title} (${occupation.code}) is on the ${occupation.lists.join(", ")}.`, state: "ok" }
        : { label: `Occupation on the Home Affairs list for subclass ${visa}`, detail: `${occupation.title} is on the Regional Occupation List only, which can be nominated for the 491 but not the 190.`, state: "fail" },
      answers.age < 45
        ? { label: "Under 45", detail: "Home Affairs requires you to be under 45 when you're invited to apply.", state: "ok" }
        : { label: "Under 45", detail: "Home Affairs requires you to be under 45 when you're invited to apply, so you can't be invited for a 190 or 491.", state: "fail" },
      answers.english !== "below"
        ? { label: "At least Competent English", detail: "Competent English is the minimum for both visas.", state: "ok" }
        : { label: "At least Competent English", detail: "Both visas need at least Competent English, for example IELTS 6 in each band.", state: "fail" },
      { label: "A positive skills assessment for this occupation", detail: "From the assessing authority Home Affairs lists for the occupation, valid when you're invited.", state: "check", link: { href: "/services/skills-assessments", label: "About skills assessments" } },
      {
        label: `At least 65 SkillSelect points, including ${visa === "190" ? "5" : "15"} nomination points`,
        detail: "The SkillSelect points test is separate from the VPT: Home Affairs requires 65 to invite you.",
        state: "check",
        link: { href: "/tools/points-calculator", label: "Check your SkillSelect points" },
      },
    ];
    const blocked = checks.some((check) => check.state === "fail");
    const lifts = [
      answers.english === "competent" && { text: "Proficient English adds 100 points; Superior adds 200.", points: 200 },
      answers.english === "proficient" && { text: "Superior English adds another 100 points.", points: 100 },
      answers.education && answers.education !== "phd" && { text: `A higher qualification: Masters scores 75 and a PhD 100 (you have ${vptEducation.find((item) => item.value === answers.education)?.points}).`, points: 100 - (vptEducation.find((item) => item.value === answers.education)?.points ?? 0) },
      answers.experience && answers.experience !== "8+" && { text: "More years in your nominated occupation move you up the experience ranges, to 100 points for more than 8 years.", points: 100 - (vptExperience.find((item) => item.value === answers.experience)?.points ?? 0) },
      result.amount < 170000 && answers.employed === "yes" && { text: "Higher earnings from skilled employment in Victoria score more, up to 150 points at A$170,000 or more.", points: 150 - vptEarningsPoints(result.amount) },
    ]
      .filter((item): item is { text: string; points: number } => Boolean(item))
      .sort((a, b) => b.points - a.points)
      .slice(0, 3);
    const fee = visa === "190" ? victoriaFees.nomination190 : victoriaFees.nomination491;

    return (
      <WizardShell>
        <div className="hero-rise text-center">
          <span className="text-xs font-bold uppercase tracking-[0.16em] text-gray-500">Your Victorian Points Test total</span>
          <p className="font-heading mt-4 text-7xl font-extrabold text-brand-navy">
            {result.total}
            <span className="ml-2 text-lg font-semibold text-gray-500">of {vptMaximumTotal}</span>
          </p>
          <div className="mx-auto mt-4 h-3 max-w-md overflow-hidden rounded-full bg-gray-200" aria-hidden="true">
            <div className="h-full rounded-full bg-gradient-brand transition-all duration-700" style={{ width: `${(result.total / vptMaximumTotal) * 100}%` }} />
          </div>
          <p className="mt-3 text-sm text-gray-600">
            Subclass {visa} · {occupation.title}
            {group ? ` · ${vptGroupLabel(group)} priority` : ""}
          </p>
          <div className="mt-4 flex justify-center">
            <span className={`inline-flex rounded-full px-5 py-1.5 text-sm font-extrabold ${blocked ? "bg-rose-100 text-rose-800" : "bg-emerald-500 text-white"}`}>
              {blocked ? "You don't meet a Home Affairs minimum yet" : "Meets the Home Affairs minimums we can check"}
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
        </ul>

        <div className="mt-8 rounded-[1.5rem] bg-brand-navy p-6 text-white">
          <span className="text-xs font-bold uppercase tracking-[0.16em] text-brand-green-light">How Victoria would rank you</span>
          <p className="mt-2 text-[15px] leading-relaxed text-white/80">
            There is no pass mark. In each invitation round Victoria invites the highest VPT totals in the pool at that time, so the score you need depends on who else has registered and how many places are left. Victoria doesn&apos;t publish cut-off scores.
          </p>
          <ol className="mt-5 grid gap-3 sm:grid-cols-2">
            <li className="rounded-2xl bg-white/10 p-4 ring-1 ring-white/15">
              <span className="text-xs font-bold uppercase tracking-wider text-brand-green-light">1 · Most competitive</span>
              <span className="mt-1 block text-sm leading-relaxed text-white/85">Ranked against every eligible occupation in the pool.</span>
            </li>
            <li className={`rounded-2xl p-4 ring-1 ${group ? "bg-emerald-500/20 ring-emerald-300/40" : "bg-white/5 ring-white/10"}`}>
              <span className="text-xs font-bold uppercase tracking-wider text-brand-green-light">2 · Priority industry</span>
              <span className="mt-1 block text-sm leading-relaxed text-white/85">
                {group
                  ? `Also ranked within ${vptGroupLabel(group)}, against other ROIs in that priority group.`
                  : "Your occupation isn't on the 2026-27 priority list, so this route doesn't apply to you."}
              </span>
            </li>
          </ol>
        </div>

        {lifts.length > 0 && (
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
          </div>
        )}

        <div className="mt-8">
          <h3 className="font-heading text-lg font-bold text-brand-navy">Minimum requirements</h3>
          <ul className="mt-3 space-y-2">
            {checks.map((check) => (
              <li
                key={check.label}
                className={`flex items-start gap-3 rounded-2xl border p-3 text-sm ${
                  check.state === "ok" ? "border-emerald-100 bg-emerald-50/60" : check.state === "fail" ? "border-rose-200 bg-rose-50" : "border-amber-100 bg-amber-50/60"
                }`}
              >
                <span
                  className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${check.state === "ok" ? "bg-emerald-500 text-white" : check.state === "fail" ? "bg-rose-500 text-white" : "bg-amber-400 text-brand-navy"}`}
                  aria-label={check.state === "ok" ? "Met" : check.state === "fail" ? "Not met" : "Check"}
                  role="img"
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={3} className="h-3 w-3" aria-hidden="true">
                    {check.state === "ok" ? <path strokeLinecap="round" strokeLinejoin="round" d="m5 12.5 4.5 4.5L19 7.5" /> : check.state === "fail" ? <path strokeLinecap="round" d="M6 6l12 12M18 6 6 18" /> : <path strokeLinecap="round" d="M12 8v4m0 4h.01" />}
                  </svg>
                </span>
                <span>
                  <span className="block font-semibold text-brand-navy">{check.label}</span>
                  <span className="block text-xs leading-relaxed text-gray-600">
                    {check.detail}
                    {check.link && (
                      <>
                        {" "}
                        <Link href={check.link.href} className="font-semibold text-brand-primary hover:underline">
                          {check.link.label} →
                        </Link>
                      </>
                    )}
                  </span>
                </span>
              </li>
            ))}
          </ul>
          <p className="mt-3 rounded-2xl bg-brand-surface p-4 text-xs leading-relaxed text-gray-600">
            Victoria also has its own nomination requirements, which it hadn&apos;t published for 2026-27 when we checked ({victoriaPointsAsAt}). In 2025-26 you had to live in Victoria or overseas for the 190, and live and work in regional Victoria (or be overseas) for the 491.
          </p>
        </div>

        <div className="mt-8 grid gap-3 sm:grid-cols-2">
          <div className="rounded-2xl border border-gray-100 p-4">
            <p className="text-[11px] font-bold uppercase tracking-wider text-gray-500">2026-27 fees (Victoria)</p>
            <p className="mt-1 text-sm text-gray-700">
              Registration of Interest {money(victoriaFees.roi.excludingGst)} ({money(victoriaFees.roi.includingGst)} with GST), then {money(fee.excludingGst)} ({money(fee.includingGst)} with GST) for the subclass {visa}{" "}nomination application if you&apos;re invited.
            </p>
            <p className="mt-1 text-xs text-gray-500">GST applies if you&apos;re in Australia when you pay. Home Affairs visa charges are separate.</p>
          </div>
          <div className="rounded-2xl border border-gray-100 p-4">
            <p className="text-[11px] font-bold uppercase tracking-wider text-gray-500">Program status</p>
            <p className="mt-1 text-sm text-gray-700">
              The 2026-27 program hadn&apos;t opened when we checked. ROIs from earlier years don&apos;t carry over: submit a new one when it opens.
            </p>
          </div>
        </div>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Button href="/bookings" track="book_cta">
            Talk through your Victorian ROI
            <ArrowIcon />
          </Button>
          <Button href="/state-nomination/victoria" variant="outline">
            Victoria nomination guide
          </Button>
          <button type="button" onClick={back} className="text-sm font-semibold text-gray-500 hover:text-brand-navy hover:underline">
            Change an answer
          </button>
          <button type="button" onClick={reset} className="text-sm font-semibold text-gray-500 hover:text-brand-navy hover:underline">
            Start over
          </button>
        </div>
        <p className="mt-6 text-center text-xs leading-relaxed text-gray-500">
          Points, priority occupations and fees from the{" "}
          <a href={victoriaPointsUrls.vpt} target="_blank" rel="noopener noreferrer" className="underline">
            Victorian Points Test
          </a>{" "}
          and{" "}
          <a href={victoriaPointsUrls.fees} target="_blank" rel="noopener noreferrer" className="underline">
            fees
          </a>{" "}
          pages on Live in Melbourne, checked {victoriaPointsAsAt}. Skill levels from the{" "}
          <a href={anzscoSkillLevelsSource} target="_blank" rel="noopener noreferrer" className="underline">
            ABS ANZSCO classification
          </a>
          . Victoria calculates your total from your SkillSelect EOI and your ROI, so your official total can differ. An invitation or nomination is never guaranteed. General information only.
        </p>
      </WizardShell>
    );
  }

  // ── Questions ─────────────────────────────────────────────────────
  const occupation = result.occupation;
  const group = occupation ? vptPriorityGroup(occupation.code) : undefined;
  const visaOptions: WizardChoice<Visa>[] = [
    { value: "190", label: "Skilled Nominated (subclass 190)", hint: "Permanent. Victoria nominates you; 5 SkillSelect nomination points.", badge: "Permanent" },
    { value: "491", label: "Skilled Work Regional (subclass 491)", hint: "5-year provisional visa for regional Victoria; 15 SkillSelect nomination points.", badge: "Regional" },
  ];

  let body: React.ReactNode = null;
  if (step === "visa") {
    body = (
      <WizardQuestion title="Which visa would you register for?" help="Victoria ranks Registrations of Interest for both visas with the same Victorian Points Test (VPT).">
        <WizardChoices name="visa" value={answers.visa} options={visaOptions} onChange={(value) => set("visa", value)} />
      </WizardQuestion>
    );
  } else if (step === "occupation") {
    const levelShown = answers.skillLevel ?? result.listedLevel;
    body = (
      <WizardQuestion title="What occupation is your skills assessment for?" help="Search the occupations on the Home Affairs lists for the 190 and 491. Priority occupations for 2026-27 are tagged.">
        <OccupationSearch
          occupations={homeAffairsOccupations}
          value={answers.occupation}
          onChange={(code) => {
            setAnswers((prev) => ({ ...prev, occupation: code, skillLevel: undefined }));
            setEditLevel(false);
          }}
          badge={priorityBadge}
        />
        {occupation && (
          <div className="hero-rise mt-5 space-y-3">
            {answers.visa && !onListFor(occupation, answers.visa) && (
              <p className="rounded-2xl border border-rose-200 bg-rose-50 p-4 text-sm text-rose-900">
                {occupation.title} is on the Regional Occupation List only, so it can be nominated for the 491 but not the 190. You can go back and choose the 491.
              </p>
            )}
            <div className="flex flex-wrap items-center gap-3 rounded-2xl bg-brand-surface p-4">
              <span className="min-w-0 flex-1">
                <span className="block text-[11px] font-bold uppercase tracking-wider text-gray-500">Occupation skill level</span>
                <span className="block text-[15px] font-bold text-brand-navy">
                  {levelShown ? `ANZSCO skill level ${levelShown}` : "Not known"}
                  {levelShown && answers.skillLevel === undefined && <span className="ml-2 text-xs font-normal text-gray-500">from the ABS classification{anzscoSkillLevelNotes[occupation.code] ? ` (${anzscoSkillLevelNotes[occupation.code]})` : ""}</span>}
                </span>
                <span className="block text-xs text-gray-500">Victoria gives 50 points for skill level 1 and none for levels 2 and 3.</span>
              </span>
              <Points value={levelShown ? (vptSkillLevelPoints[levelShown] ?? 0) : 0} />
              <button type="button" onClick={() => setEditLevel((open) => !open)} className="text-sm font-semibold text-brand-primary hover:underline" aria-expanded={editLevel}>
                {levelShown ? "Not right?" : "Set it"}
              </button>
            </div>
            {(editLevel || !levelShown) && (
              <WizardChoices
                name="skill-level"
                columns={3}
                value={answers.skillLevel ? String(answers.skillLevel) : undefined}
                onChange={(value) => set("skillLevel", Number(value))}
                options={[1, 2, 3].map((level) => ({ value: String(level), label: `Skill level ${level}`, badge: `${vptSkillLevelPoints[level]} pts` }))}
              />
            )}
            <p className={`rounded-2xl p-4 text-sm leading-relaxed ${group ? "bg-emerald-50 text-emerald-900 ring-1 ring-emerald-100" : "bg-white text-gray-600 ring-1 ring-gray-100"}`}>
              {group
                ? `A 2026-27 priority occupation (${vptGroupLabel(group)}): you'd be ranked against everyone and also within this priority group.`
                : "Not on the 2026-27 priority list. Every eligible occupation can still register and is ranked in the most competitive group."}
            </p>
          </div>
        )}
      </WizardQuestion>
    );
  } else if (step === "age") {
    const points = answers.age < 45 ? vptAgePoints(answers.age) : 0;
    body = (
      <WizardQuestion title="How old are you?" help="The VPT gives the most points from 20 to 29. Victoria uses the age in your SkillSelect EOI, so it can change before an invitation round.">
        <div className="rounded-2xl bg-brand-surface p-5">
          <div className="flex items-center justify-center gap-4">
            <button type="button" onClick={() => set("age", Math.max(18, answers.age - 1))} className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-xl font-bold text-brand-navy shadow-sm ring-1 ring-gray-200 hover:bg-brand-mint" aria-label="One year younger">
              −
            </button>
            <span className="font-heading w-24 text-center text-5xl font-extrabold text-brand-navy" aria-live="polite">
              {answers.age}
            </span>
            <button type="button" onClick={() => set("age", Math.min(50, answers.age + 1))} className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-xl font-bold text-brand-navy shadow-sm ring-1 ring-gray-200 hover:bg-brand-mint" aria-label="One year older">
              +
            </button>
          </div>
          <input type="range" min={18} max={50} value={answers.age} onChange={(event) => set("age", Number(event.target.value))} className="mt-5 w-full accent-brand-primary" aria-label="Your age" />
          <p className="mt-3 flex items-center justify-center gap-2 text-sm text-gray-600">
            {answers.age >= 45 ? <span className="font-semibold text-rose-700">45 or over: Home Affairs can&apos;t invite you for a 190 or 491.</span> : <>Age points <Points value={points} /></>}
          </p>
        </div>
      </WizardQuestion>
    );
  } else if (step === "english") {
    body = (
      <WizardQuestion title="What's your English level?" help="Use the level your test results meet in every band, as you've claimed it in SkillSelect.">
        <WizardChoices
          name="english"
          value={answers.english}
          onChange={(value) => set("english", value)}
          options={[...vptEnglish.map((item) => ({ value: item.value as English, label: item.label, hint: item.hint, badge: `${item.points} pts` })), { value: "below" as English, label: "Below Competent", hint: "Not enough for a 190 or 491" }]}
        />
      </WizardQuestion>
    );
  } else if (step === "experience") {
    body = (
      <WizardQuestion title="How many years have you worked in your nominated occupation?" help="Pick the range that fits, as Victoria publishes them.">
        <WizardChoices name="experience" columns={3} value={answers.experience} onChange={(value) => set("experience", value)} options={vptExperience.map((item) => ({ value: item.value, label: item.label, badge: `${item.points} pts` }))} />
      </WizardQuestion>
    );
  } else if (step === "education") {
    body = (
      <WizardQuestion title="What's your highest qualification?">
        <WizardChoices name="education" value={answers.education} onChange={(value) => set("education", value)} options={vptEducation.map((item) => ({ value: item.value, label: item.label, hint: item.hint, badge: `${item.points} pts` }))} />
      </WizardQuestion>
    );
  } else if (step === "partner") {
    body = (
      <WizardQuestion title="Will your partner be included in your visa application?" help="Partner's skill is worth 50 points, but only when all three conditions are met.">
        <WizardChoices
          name="partner"
          columns={1}
          value={answers.partner}
          onChange={(value) => set("partner", value)}
          options={[
            { value: "included", label: "Yes, my partner will be included" },
            { value: "none", label: "No: I'm single, or my partner is an Australian citizen or permanent resident" },
            { value: "not-included", label: "No, my partner won't be included" },
          ]}
        />
        {answers.partner === "included" && (
          <div className="hero-rise mt-6 space-y-5 rounded-2xl bg-brand-surface p-5">
            <div>
              <p className="text-sm font-bold text-brand-navy">Did you claim 10 points for Partner Skills in your SkillSelect EOI?</p>
              <div className="mt-3">
                <WizardChoices name="partner-points" value={answers.partnerPoints} onChange={(value) => set("partnerPoints", value)} options={[{ value: "yes", label: "Yes" }, { value: "no", label: "No" }]} />
              </div>
            </div>
            {answers.partnerPoints === "yes" && (
              <div>
                <p className="text-sm font-bold text-brand-navy">What is your partner&apos;s nominated occupation?</p>
                <p className="text-xs text-gray-500">It must be a 2026-27 priority industry occupation to score.</p>
                <div className="mt-3">
                  <OccupationSearch occupations={homeAffairsOccupations} value={answers.partnerOccupation} onChange={(code) => set("partnerOccupation", code)} badge={priorityBadge} />
                </div>
                {result.partnerOccupation && (
                  <p className={`mt-3 flex items-center gap-2 text-sm ${result.partnerGroup ? "text-emerald-800" : "text-gray-600"}`}>
                    <Points value={result.partnerGroup ? vptPartnerPoints : 0} />
                    {result.partnerGroup ? `A priority occupation (${vptGroupLabel(result.partnerGroup)}).` : "Not a 2026-27 priority occupation, so this factor scores 0."}
                  </p>
                )}
              </div>
            )}
          </div>
        )}
      </WizardQuestion>
    );
  } else if (step === "earnings") {
    const amount = amountOf(answers.earnings);
    body = (
      <WizardQuestion title="Are you in skilled employment in Victoria now?" help="Annual earnings from your current skilled employment in Victoria score from A$80,000 (8 points) to A$170,000 or more (150 points).">
        <WizardChoices name="employed" value={answers.employed} onChange={(value) => set("employed", value)} options={[{ value: "yes", label: "Yes" }, { value: "no", label: "No, or I live overseas" }]} />
        {answers.employed === "yes" && (
          <div className="hero-rise mt-6 rounded-2xl bg-brand-surface p-5">
            <label htmlFor="vpt-earnings" className="text-sm font-bold text-brand-navy">
              Your annual earnings from that job (A$)
            </label>
            <div className="mt-3 flex flex-wrap items-center gap-3">
              <input
                id="vpt-earnings"
                inputMode="numeric"
                placeholder="e.g. 95000"
                value={answers.earnings}
                onChange={(event) => set("earnings", event.target.value)}
                className="w-48 rounded-xl border-2 border-gray-200 bg-white px-4 py-3 text-lg font-bold text-brand-navy focus:border-brand-primary focus:outline-none focus:ring-4 focus:ring-brand-primary/15"
              />
              {amount > 0 && <Points value={vptEarningsPoints(amount)} />}
            </div>
            <p className="mt-3 text-xs leading-relaxed text-gray-500">
              Use your current annual earnings from skilled employment with a Victorian employer, as you would estimate them in your ROI. Below A$80,000 scores nothing. Victoria&apos;s Annual earnings estimation guide explains what counts; it was offline when we checked.
            </p>
          </div>
        )}
      </WizardQuestion>
    );
  }

  const isLast = stepIndex === STEPS.length - 1;
  return (
    <WizardShell>
      <WizardProgress step={stepIndex} total={STEPS.length + 1} label={`${STEP_LABEL[step]}${answers.visa ? ` · subclass ${answers.visa}` : ""}`} />
      {stepIndex > 0 && <Running total={result.rows.filter((row) => STEPS.indexOf(row.id) <= stepIndex).reduce((sum, row) => sum + row.points, 0)} />}
      <div className="mt-6">{body}</div>
      <WizardFooter canBack={stepIndex > 0} canNext={canNext[step]} onBack={back} onNext={next} nextLabel={isLast ? "See my VPT total" : "Next"} onReset={stepIndex > 0 ? reset : undefined} />
    </WizardShell>
  );
}
