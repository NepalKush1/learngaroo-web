"use client";

import { useEffect, useMemo, useRef, useState, type ReactNode } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { WizardChoices, WizardProgress, WizardShell } from "@/components/tools/WizardUi";
import { homeAffairsListMeta, homeAffairsOccupation, homeAffairsOccupations, stateAssessments } from "@/data/state-assessment";
import type { StateSlug, Visa } from "@/data/state-assessment/types";
import { lookupPostcode } from "@/data/regional-postcodes";
import {
  assessAll,
  emptyProfile,
  homeAffairsEligibility,
  postcodeState,
  stateNames,
  summaryText,
  type AssessmentProfile,
  type EnglishLevel,
  type StudyLevel,
  type WorkStatus,
} from "@/lib/state-assessment";
import { OccupationSearch } from "./OccupationSearch";
import { ResultsMap, VERDICT_STYLE } from "./ResultsMap";
import { StateResultCard } from "./StateResultCard";

// "Which state could nominate me?" A short set of questions, then every
// state and territory checked against its published 190 and 491 criteria.
// Everything runs in the browser: nothing is stored or sent unless the
// visitor chooses to book a consultation.

export const BOOKING_NOTE_KEY = "learniiz:booking-note";

type StepId = "occupation" | "visa" | "living" | "work" | "experience" | "study" | "extras" | "points";

const STEP_LABEL: Record<StepId, string> = {
  occupation: "Your occupation",
  visa: "The visa",
  living: "Where you live",
  work: "Your work",
  experience: "Your experience",
  study: "Study in Australia",
  extras: "Anything else",
  points: "Points, English and age",
};

const STATES = Object.keys(stateNames) as StateSlug[];

// ── Small fields ────────────────────────────────────────────────────────

function Label({ children, hint }: { children: ReactNode; hint?: ReactNode }) {
  return (
    <span className="block">
      <span className="block text-sm font-bold text-brand-navy">{children}</span>
      {hint && <span className="mt-0.5 block text-xs leading-relaxed text-gray-500">{hint}</span>}
    </span>
  );
}

function StatePicker({ value, onChange, label }: { value: StateSlug | null; onChange: (value: StateSlug) => void; label: string }) {
  return (
    <div role="radiogroup" aria-label={label} className="mt-2 grid grid-cols-4 gap-2 sm:grid-cols-8">
      {STATES.map((slug) => {
        const selected = value === slug;
        return (
          <button
            key={slug}
            type="button"
            role="radio"
            aria-checked={selected}
            title={stateNames[slug].name}
            onClick={() => onChange(slug)}
            className={`rounded-xl border-2 px-2 py-2.5 text-sm font-extrabold transition-all ${
              selected ? "border-brand-primary bg-brand-primary text-white shadow-md" : "border-gray-200 bg-white text-brand-navy hover:border-brand-primary/40"
            }`}
          >
            {stateNames[slug].short}
          </button>
        );
      })}
    </div>
  );
}

function PostcodeField({ value, onChange, label, hint, expectState }: { value: string; onChange: (value: string) => void; label: string; hint?: string; expectState: StateSlug | null }) {
  const result = /^\d{4}$/.test(value.trim()) ? lookupPostcode(value.trim()) : null;
  const inState = result && !("error" in result) ? postcodeState(value) : null;
  return (
    <label className="block">
      <Label hint={hint}>{label}</Label>
      <span className="mt-2 flex flex-wrap items-center gap-3">
        <input
          type="text"
          inputMode="numeric"
          maxLength={4}
          value={value}
          onChange={(event) => onChange(event.target.value.replace(/\D/g, "").slice(0, 4))}
          placeholder="e.g. 7000"
          className="w-32 rounded-xl border-2 border-gray-200 bg-white px-3 py-2.5 text-base font-bold tracking-widest text-brand-navy focus:border-brand-primary focus:outline-none focus:ring-4 focus:ring-brand-primary/15"
        />
        {result && "error" in result && <span className="text-xs font-semibold text-rose-700">{result.error}</span>}
        {result && !("error" in result) && (
          <span
            className={`rounded-full px-3 py-1 text-xs font-bold ${
              expectState && inState !== expectState ? "bg-rose-100 text-rose-800" : result.category ? "bg-brand-mint text-brand-primary-dark" : "bg-gray-100 text-gray-700"
            }`}
          >
            {expectState && inState !== expectState ? `That postcode is in ${result.state}` : `${result.short} · ${result.category ? `Regional (Category ${result.category})` : "Not a designated regional area"}`}
          </span>
        )}
      </span>
    </label>
  );
}

function MonthsField({ value, onChange, label, hint, max = 60 }: { value: number; onChange: (value: number) => void; label: string; hint?: string; max?: number }) {
  const shown = value >= max ? `${Math.floor(max / 12)}+ years` : value >= 12 ? `${Math.floor(value / 12)} yr${value >= 24 ? "s" : ""}${value % 12 ? ` ${value % 12} mo` : ""}` : `${value} month${value === 1 ? "" : "s"}`;
  return (
    <label className="block">
      <span className="flex items-baseline justify-between gap-3">
        <Label hint={hint}>{label}</Label>
        <span className="font-heading shrink-0 text-xl font-extrabold text-brand-navy">{shown}</span>
      </span>
      <input type="range" min={0} max={max} value={value} onChange={(event) => onChange(Number(event.target.value))} aria-valuetext={shown} className="mt-2 w-full cursor-pointer accent-brand-primary" />
    </label>
  );
}

function NumberField({ value, onChange, label, hint, min, max, step = 1, suffix }: { value: number; onChange: (value: number) => void; label: string; hint?: ReactNode; min: number; max: number; step?: number; suffix?: string }) {
  return (
    <label className="block">
      <span className="flex items-baseline justify-between gap-3">
        <Label hint={hint}>{label}</Label>
        <span className="font-heading shrink-0 text-xl font-extrabold text-brand-navy">
          {value}
          {suffix && <span className="ml-1 text-sm font-bold text-gray-500">{suffix}</span>}
        </span>
      </span>
      <input type="range" min={min} max={max} step={step} value={value} onChange={(event) => onChange(Number(event.target.value))} className="mt-2 w-full cursor-pointer accent-brand-primary" />
    </label>
  );
}

function Chips<T extends string>({ value, options, onChange, label }: { value: T; options: { value: T; label: string }[]; onChange: (value: T) => void; label: string }) {
  return (
    <div role="radiogroup" aria-label={label} className="mt-2 flex flex-wrap gap-2">
      {options.map((option) => (
        <button
          key={option.value}
          type="button"
          role="radio"
          aria-checked={value === option.value}
          onClick={() => onChange(option.value)}
          className={`rounded-full px-4 py-2 text-sm font-bold transition-all ${value === option.value ? "bg-brand-navy text-white shadow" : "bg-brand-surface text-brand-navy/70 hover:text-brand-navy"}`}
        >
          {option.label}
        </button>
      ))}
    </div>
  );
}

// ── The assessment ──────────────────────────────────────────────────────

export function StateAssessment() {
  const router = useRouter();
  const [profile, setProfile] = useState<AssessmentProfile>(emptyProfile);
  const [step, setStep] = useState(0);
  const [done, setDone] = useState(false);
  const top = useRef<HTMLDivElement>(null);

  const set = <K extends keyof AssessmentProfile>(key: K, value: AssessmentProfile[K]) => setProfile((current) => ({ ...current, [key]: value }));
  const patch = <K extends "living" | "work" | "experience" | "study" | "jobOffer" | "business">(key: K, value: Partial<AssessmentProfile[K]>) =>
    setProfile((current) => ({ ...current, [key]: { ...current[key], ...value } }));

  const steps: StepId[] = useMemo(
    () => ["occupation", "visa", "living", ...(profile.living.inAustralia ? (["work"] as StepId[]) : []), "experience", "study", "extras", "points"],
    [profile.living.inAustralia],
  );
  const current = steps[Math.min(step, steps.length - 1)];
  const occupation = profile.occupationCode ? homeAffairsOccupation(profile.occupationCode) : undefined;
  const eligibility = homeAffairsEligibility(occupation);

  const canNext =
    current === "occupation"
      ? Boolean(profile.occupationCode)
      : current === "living"
        ? !profile.living.inAustralia || Boolean(profile.living.state)
        : current === "work"
          ? profile.work.status === "none" || Boolean(profile.work.state)
          : current === "study"
            ? profile.study.level === "none" || Boolean(profile.study.state)
            : true;

  const results = useMemo(() => (done ? assessAll(stateAssessments, profile, homeAffairsOccupation) : []), [done, profile]);

  // Bring the next question (or the results) into view, but not on first load.
  const moved = useRef(false);
  useEffect(() => {
    if (!moved.current) {
      moved.current = true;
      return;
    }
    top.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  }, [step, done]);

  const next = () => (step >= steps.length - 1 ? setDone(true) : setStep((value) => value + 1));
  const back = () => setStep((value) => Math.max(0, value - 1));
  const restart = () => {
    setProfile(emptyProfile);
    setStep(0);
    setDone(false);
  };

  const book = () => {
    try {
      window.sessionStorage.setItem(BOOKING_NOTE_KEY, summaryText(profile, results, occupation));
    } catch {
      // Storage can be unavailable (private mode); booking still works.
    }
    router.push("/bookings");
  };

  const print = () => {
    document.documentElement.classList.add("print-assessment");
    const clear = () => {
      document.documentElement.classList.remove("print-assessment");
      window.removeEventListener("afterprint", clear);
    };
    window.addEventListener("afterprint", clear);
    window.print();
  };

  if (stateAssessments.length === 0 || homeAffairsOccupations.length === 0) {
    return (
      <WizardShell>
        <p className="text-center text-gray-600">The assessment is being updated. Please check back shortly or book a consultation.</p>
      </WizardShell>
    );
  }

  // ── Results ───────────────────────────────────────────────────────────
  if (done) {
    const counts = {
      match: results.filter((item) => item.verdict === "match").length,
      paused: results.filter((item) => item.verdict === "paused").length,
      soon: results.filter((item) => item.verdict === "soon").length,
    };
    const any = counts.match + counts.paused + counts.soon > 0;
    return (
      <div ref={top} className="scroll-mt-28" aria-live="polite">
        <div className="rounded-[2rem] bg-gradient-to-br from-brand-primary-dark to-[#0f4f31] p-7 text-white shadow-float sm:p-10">
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-white/70">Your results{occupation ? ` · ${occupation.title}` : ""}</p>
          <h2 className="font-heading mt-2 text-3xl font-extrabold leading-tight sm:text-4xl">
            {counts.match > 0
              ? `${counts.match} ${counts.match === 1 ? "state is" : "states are"} worth a closer look now`
              : any
                ? "No program is open to you right now, but some could be"
                : "No state pathway fits on these answers yet"}
          </h2>
          <ul className="mt-5 flex flex-wrap gap-2 text-xs font-bold">
            <li className="rounded-full bg-white/15 px-3 py-1">{counts.match} fit and taking applications</li>
            <li className="rounded-full bg-white/15 px-3 py-1">{counts.paused} fit last criteria, paused</li>
            <li className="rounded-full bg-white/15 px-3 py-1">{counts.soon} could fit within 12 months</li>
          </ul>
          <p className="mt-5 max-w-3xl text-sm leading-relaxed text-white/80">
            This compares your answers with each state&apos;s published criteria. It isn&apos;t advice and doesn&apos;t predict an invitation: states rank candidates, places are
            limited, and criteria change, often when a new program year opens.
          </p>
          <div className="no-print mt-6 flex flex-wrap gap-3">
            <button type="button" onClick={book} className="rounded-full bg-white px-5 py-2.5 text-sm font-bold text-brand-primary-dark shadow-lg hover:bg-brand-mint">
              Book a consultation about these results →
            </button>
            <button type="button" onClick={print} className="rounded-full border border-white/40 px-5 py-2.5 text-sm font-bold text-white hover:bg-white/10">
              Print or save as PDF
            </button>
            <button
              type="button"
              onClick={() => {
                setDone(false);
                setStep(0);
              }}
              className="rounded-full border border-white/40 px-5 py-2.5 text-sm font-bold text-white hover:bg-white/10"
            >
              Change my answers
            </button>
          </div>
        </div>

        {!eligibility.sc190 && eligibility.sc491 && (
          <div className="mt-6 rounded-2xl bg-amber-50 p-5 text-sm leading-relaxed text-amber-900 ring-1 ring-amber-200">
            <span className="font-bold">Your occupation is on the Regional Occupation List only,</span> so it can be nominated for a subclass 491, not a 190.
          </div>
        )}

        <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-2 lg:items-start">
          <ResultsMap results={results} />
          <div className="space-y-3">
            {results.map((result) => (
              <a
                key={result.data.state}
                href={`#state-${result.data.state}`}
                className="flex items-center gap-3 rounded-2xl border border-gray-100 bg-white p-3.5 shadow-sm transition-colors hover:border-brand-primary/30"
              >
                <span className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl text-sm font-extrabold ${VERDICT_STYLE[result.verdict].badge}`}>{stateNames[result.data.state].short}</span>
                <span className="min-w-0 flex-1">
                  <span className="block text-sm font-bold text-brand-navy">{stateNames[result.data.state].name}</span>
                  <span className="block truncate text-xs text-gray-500">
                    {result.best ? `${result.best.stream.name}${result.best.stream.name.includes(result.best.visa) ? "" : ` · ${result.best.visa}`}` : "No stream for the visa you chose"}
                  </span>
                </span>
                <span className="shrink-0 text-xs font-bold text-gray-500">{VERDICT_STYLE[result.verdict].label.split(";")[0]}</span>
              </a>
            ))}
          </div>
        </div>

        <div className="mt-10 space-y-6">
          {results.map((result, index) => (
            <StateResultCard key={result.data.state} result={result} index={index} />
          ))}
        </div>

        <p className="mt-8 text-xs leading-relaxed text-gray-500">
          Occupations: the Home Affairs skilled occupation lists for subclass 190 and 491 (checked {homeAffairsListMeta.checkedOn}) and each state&apos;s published lists, dated on each card. Nothing you
          entered was stored or sent. General information only, not migration advice: Learniiz Migration &amp; Visa Services, Registered Migration Agent MARN 2418608.
        </p>
      </div>
    );
  }

  // ── Questions ─────────────────────────────────────────────────────────
  return (
    <div ref={top} className="scroll-mt-28">
      <WizardShell>
        <WizardProgress step={step} total={steps.length} label={STEP_LABEL[current]} />
        {/* Above the footer, so the occupation suggestions open over the Back and Next buttons. */}
        <div key={current} className="hero-rise relative z-20 mt-8 space-y-7">
          {current === "occupation" && (
            <>
              <div>
                <h2 className="font-heading text-2xl font-extrabold text-brand-navy sm:text-3xl">What&apos;s your occupation?</h2>
                <p className="mt-2 text-[15px] leading-relaxed text-gray-600">The occupation you&apos;d be nominated in: search by title or six-digit ANZSCO code.</p>
              </div>
              <OccupationSearch occupations={homeAffairsOccupations} value={profile.occupationCode} onChange={(code) => set("occupationCode", code)} />
              <div>
                <Label>Your skills assessment for this occupation</Label>
                <Chips
                  label="Skills assessment"
                  value={profile.skillsAssessment}
                  onChange={(value) => set("skillsAssessment", value)}
                  options={[
                    { value: "positive", label: "Positive" },
                    { value: "applied", label: "Applied, waiting" },
                    { value: "none", label: "Not yet" },
                  ]}
                />
              </div>
            </>
          )}

          {current === "visa" && (
            <>
              <div>
                <h2 className="font-heading text-2xl font-extrabold text-brand-navy sm:text-3xl">Which visa are you aiming for?</h2>
                <p className="mt-2 text-[15px] leading-relaxed text-gray-600">Not sure? Choose either and we&apos;ll check both.</p>
              </div>
              <WizardChoices<Visa | "either">
                name="Visa"
                value={profile.visa}
                columns={1}
                onChange={(value) => set("visa", value)}
                options={[
                  { value: "either", label: "Either: show me both", hint: "We check every 190 and 491 pathway" },
                  { value: "190", label: "Subclass 190 Skilled Nominated", hint: "Permanent from the start; nomination adds 5 points", badge: "+5" },
                  { value: "491", label: "Subclass 491 Skilled Work Regional", hint: "5-year regional visa with a path to permanent residence; nomination adds 15 points", badge: "+15" },
                ]}
              />
              {occupation && !eligibility.sc190 && (
                <p className="rounded-2xl bg-amber-50 p-4 text-sm text-amber-900 ring-1 ring-amber-200">
                  {occupation.title} is on the Regional Occupation List only, so it can be nominated for a 491 but not a 190.
                </p>
              )}
            </>
          )}

          {current === "living" && (
            <>
              <h2 className="font-heading text-2xl font-extrabold text-brand-navy sm:text-3xl">Where do you live now?</h2>
              <Chips
                label="Where you live"
                value={profile.living.inAustralia ? "in" : "out"}
                onChange={(value) => patch("living", { inAustralia: value === "in" })}
                options={[
                  { value: "in", label: "In Australia" },
                  { value: "out", label: "Outside Australia" },
                ]}
              />
              {profile.living.inAustralia ? (
                <>
                  <div>
                    <Label>Which state or territory?</Label>
                    <StatePicker
                      label="State you live in"
                      value={profile.living.state}
                      onChange={(value) =>
                        setProfile((current) => ({
                          ...current,
                          living: { ...current.living, state: value },
                          // Most people work where they live: follow the living state until they choose otherwise.
                          work: !current.work.state || current.work.state === current.living.state ? { ...current.work, state: value } : current.work,
                        }))
                      }
                    />
                  </div>
                  <PostcodeField
                    label="Your postcode (optional)"
                    hint="Tells us whether you live in a designated regional area, which several 491 pathways need."
                    value={profile.living.postcode}
                    expectState={profile.living.state}
                    onChange={(value) => {
                      const state = postcodeState(value);
                      setProfile((current) => {
                        const living = { ...current.living, postcode: value, ...(state && !current.living.state ? { state } : {}) };
                        const work = !current.work.state && living.state ? { ...current.work, state: living.state } : current.work;
                        return { ...current, living, work };
                      });
                    }}
                  />
                  <MonthsField label="How long have you lived in that state?" hint="Continuously, up to today." value={profile.living.months} onChange={(value) => patch("living", { months: value })} />
                </>
              ) : (
                <MonthsField label="How long have you lived outside Australia?" hint="Some offshore pathways need a minimum time outside Australia." value={profile.living.months} onChange={(value) => patch("living", { months: value })} />
              )}
            </>
          )}

          {current === "work" && (
            <>
              <h2 className="font-heading text-2xl font-extrabold text-brand-navy sm:text-3xl">Are you working in Australia now?</h2>
              <WizardChoices<WorkStatus>
                name="Your work"
                value={profile.work.status}
                columns={1}
                onChange={(value) => patch("work", { status: value, ...(value !== "none" && !profile.work.state ? { state: profile.living.state } : {}) })}
                options={[
                  { value: "nominated", label: "Yes, in my nominated occupation" },
                  { value: "related", label: "Yes, in a closely related occupation" },
                  { value: "skilled", label: "Yes, in another skilled job", hint: "ANZSCO skill level 1 to 3" },
                  { value: "other", label: "Yes, in another job" },
                  { value: "none", label: "No, not working" },
                ]}
              />
              {profile.work.status !== "none" && (
                <>
                  <div>
                    <Label>Which state do you work in?</Label>
                    <StatePicker label="State you work in" value={profile.work.state} onChange={(value) => patch("work", { state: value })} />
                  </div>
                  <PostcodeField
                    label="Workplace postcode (optional)"
                    hint="If it's different from where you live. We use it to check regional work."
                    value={profile.work.postcode}
                    expectState={profile.work.state}
                    onChange={(value) => patch("work", { postcode: value })}
                  />
                  <MonthsField label="How long have you worked there continuously?" value={profile.work.months} onChange={(value) => patch("work", { months: value })} />
                  <NumberField label="Hours a week" min={0} max={60} value={profile.work.hoursPerWeek} onChange={(value) => patch("work", { hoursPerWeek: value })} />
                  <label className="block">
                    <Label hint="Optional. Some pathways set a minimum salary.">Annual salary before tax</Label>
                    <span className="relative mt-2 block w-48">
                      <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-sm font-bold text-gray-400">A$</span>
                      <input
                        type="number"
                        inputMode="numeric"
                        min={0}
                        step={1000}
                        value={profile.work.salary ?? ""}
                        placeholder="e.g. 85000"
                        onChange={(event) => patch("work", { salary: event.target.value === "" ? null : Math.max(0, Number(event.target.value)) })}
                        className="w-full rounded-xl border-2 border-gray-200 bg-white py-2.5 pl-10 pr-3 text-base font-bold text-brand-navy focus:border-brand-primary focus:outline-none focus:ring-4 focus:ring-brand-primary/15"
                      />
                    </span>
                  </label>
                </>
              )}
            </>
          )}

          {current === "experience" && (
            <>
              <div>
                <h2 className="font-heading text-2xl font-extrabold text-brand-navy sm:text-3xl">How much skilled experience do you have?</h2>
                <p className="mt-2 text-[15px] leading-relaxed text-gray-600">Paid work in your nominated occupation (or closely related), in or outside Australia, after you qualified.</p>
              </div>
              <NumberField
                label="In the last 10 years"
                min={0}
                max={10}
                step={0.5}
                suffix="years"
                value={profile.experience.last10}
                onChange={(value) => patch("experience", { last10: value, last5: Math.min(profile.experience.last5, value), last3: Math.min(profile.experience.last3, value) })}
              />
              <NumberField
                label="Of which, in the last 5 years"
                min={0}
                max={5}
                step={0.5}
                suffix="years"
                value={profile.experience.last5}
                onChange={(value) => patch("experience", { last5: value, last10: Math.max(profile.experience.last10, value), last3: Math.min(profile.experience.last3, value) })}
              />
              <NumberField
                label="Of which, in the last 3 years"
                min={0}
                max={3}
                step={0.5}
                suffix="years"
                value={profile.experience.last3}
                onChange={(value) => patch("experience", { last3: value, last5: Math.max(profile.experience.last5, value), last10: Math.max(profile.experience.last10, value) })}
              />
            </>
          )}

          {current === "study" && (
            <>
              <h2 className="font-heading text-2xl font-extrabold text-brand-navy sm:text-3xl">Have you completed a qualification in Australia?</h2>
              <WizardChoices<StudyLevel>
                name="Study in Australia"
                value={profile.study.level}
                onChange={(value) => patch("study", { level: value })}
                options={[
                  { value: "none", label: "No" },
                  { value: "certificate-iii", label: "Certificate III or IV" },
                  { value: "diploma", label: "Diploma or advanced diploma" },
                  { value: "bachelor", label: "Bachelor degree" },
                  { value: "masters", label: "Master's degree" },
                  { value: "doctorate", label: "Doctorate (PhD)" },
                ]}
              />
              {profile.study.level !== "none" && (
                <>
                  <div>
                    <Label>Which state was the institution in?</Label>
                    <StatePicker label="State you studied in" value={profile.study.state} onChange={(value) => patch("study", { state: value })} />
                  </div>
                  <PostcodeField label="Campus postcode (optional)" hint="Some pathways need regional study." value={profile.study.postcode} expectState={profile.study.state} onChange={(value) => patch("study", { postcode: value })} />
                  <MonthsField label="How long did you study in that state?" max={72} value={profile.study.monthsInState} onChange={(value) => patch("study", { monthsInState: value })} />
                  <MonthsField label="How long ago did you finish?" hint="Some graduate pathways need a recent qualification." value={profile.study.completedMonthsAgo} onChange={(value) => patch("study", { completedMonthsAgo: value })} />
                </>
              )}
            </>
          )}

          {current === "extras" && (
            <>
              <div>
                <h2 className="font-heading text-2xl font-extrabold text-brand-navy sm:text-3xl">Anything else that could count?</h2>
                <p className="mt-2 text-[15px] leading-relaxed text-gray-600">Some pathways are built around a job offer, a business or family. Skip anything that doesn&apos;t apply.</p>
              </div>
              <div>
                <Label hint="A current offer or employment contract in your nominated occupation.">A job offer from an employer in…</Label>
                <Chips
                  label="Job offer"
                  value={profile.jobOffer.state ?? "none"}
                  onChange={(value) => patch("jobOffer", { state: value === "none" ? null : (value as StateSlug) })}
                  options={[{ value: "none", label: "No offer" }, ...STATES.map((slug) => ({ value: slug, label: stateNames[slug].short }))]}
                />
              </div>
              <div>
                <Label>You own and run a business in…</Label>
                <Chips
                  label="Business"
                  value={profile.business.state ?? "none"}
                  onChange={(value) => patch("business", { state: value === "none" ? null : (value as StateSlug) })}
                  options={[{ value: "none", label: "No business" }, ...STATES.map((slug) => ({ value: slug, label: stateNames[slug].short }))]}
                />
              </div>
              <div>
                <Label>A close relative lives in…</Label>
                <Chips
                  label="Relative"
                  value={profile.relativeState ?? "none"}
                  onChange={(value) => set("relativeState", value === "none" ? null : (value as StateSlug))}
                  options={[{ value: "none", label: "No relative" }, ...STATES.map((slug) => ({ value: slug, label: stateNames[slug].short }))]}
                />
              </div>
            </>
          )}

          {current === "points" && (
            <>
              <h2 className="font-heading text-2xl font-extrabold text-brand-navy sm:text-3xl">Points, English and age</h2>
              <NumberField
                label="Your points, without nomination points"
                hint={
                  <>
                    Not sure?{" "}
                    <Link href="/tools/points" target="_blank" className="font-semibold text-brand-primary hover:underline">
                      Work it out with the points calculator ↗
                    </Link>
                  </>
                }
                min={40}
                max={130}
                step={5}
                value={profile.points}
                onChange={(value) => set("points", value)}
              />
              <div>
                <Label>English test result</Label>
                <Chips<EnglishLevel>
                  label="English"
                  value={profile.english}
                  onChange={(value) => set("english", value)}
                  options={[
                    { value: "competent", label: "Competent" },
                    { value: "proficient", label: "Proficient" },
                    { value: "superior", label: "Superior" },
                    { value: "none", label: "Not tested yet" },
                  ]}
                />
              </div>
              <NumberField label="Your age" min={18} max={55} value={profile.age} suffix="years" onChange={(value) => set("age", value)} />
            </>
          )}
        </div>

        <div className="mt-8 flex flex-wrap items-center justify-between gap-3 border-t border-gray-100 pt-6">
          <button
            type="button"
            onClick={back}
            disabled={step === 0}
            className="rounded-full border border-brand-navy/15 bg-white px-5 py-2.5 text-sm font-bold text-brand-navy transition-colors hover:bg-brand-mint disabled:opacity-40"
          >
            ← Back
          </button>
          <div className="flex items-center gap-3">
            {step > 0 && (
              <button type="button" onClick={restart} className="text-sm font-semibold text-gray-500 hover:text-brand-navy hover:underline">
                Start over
              </button>
            )}
            <button
              type="button"
              onClick={next}
              disabled={!canNext}
              className="rounded-full bg-brand-primary px-6 py-2.5 text-sm font-bold text-white shadow-lg shadow-brand-primary/25 transition-all hover:-translate-y-0.5 hover:bg-brand-primary-dark disabled:translate-y-0 disabled:opacity-40"
            >
              {step >= steps.length - 1 ? "See my states" : "Next"} →
            </button>
          </div>
        </div>
        <p className="mt-4 text-center text-xs text-gray-400">About 3 minutes. Nothing you enter is stored or sent.</p>
      </WizardShell>
    </div>
  );
}
