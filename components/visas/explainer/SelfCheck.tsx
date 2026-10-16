"use client";

import { useState } from "react";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Button, ArrowIcon } from "@/components/ui/Button";
import { WizardChoices, WizardFooter, WizardProgress, WizardQuestion, WizardShell } from "@/components/tools/WizardUi";
import { usePrefersReducedMotion } from "@/lib/usePrefersReducedMotion";
import type { CheckCopy, CheckStatus, QuizQuestion } from "@/data/visas/explainers/types";
import { RichText } from "./RichText";

// One question at a time, one tap each, then a traffic-light answer with
// the reason for every item and the next thing to do. Nothing is stored.

const STATUS_STYLE: Record<CheckStatus, { icon: string; badge: string; ring: string; label: string }> = {
  ok: { icon: "m5 12.5 4.5 4.5L19 7.5", badge: "bg-emerald-500 text-white", ring: "ring-emerald-100", label: "Looks fine" },
  todo: { icon: "M12 8v4m0 4h.01", badge: "bg-amber-400 text-brand-navy", ring: "ring-amber-100", label: "To sort" },
  stop: { icon: "M6 6l12 12M18 6 6 18", badge: "bg-rose-500 text-white", ring: "ring-rose-100", label: "Hurdle" },
};

const OVERALL = {
  ok: {
    title: "You look on track",
    body: "Nothing in your answers rules you out. The next step is checking the details against the full requirements below.",
    panel: "from-brand-primary-dark to-[#0f4f31]",
  },
  todo: {
    title: "You're on your way, with a few things to sort",
    body: "None of these are deal-breakers, but each needs attention before you apply.",
    panel: "from-amber-600 to-amber-800",
  },
  stop: {
    title: "Some hurdles to solve first",
    body: "At least one answer means this isn't possible yet. The notes below explain why and what might work instead.",
    panel: "from-rose-600 to-rose-800",
  },
} as const;

const DISCLAIMER = "A general self-check, not advice or a prediction. Your full circumstances decide the outcome.";

// Fixed burst vectors so server and client render the same markup.
const BURST = [
  [-120, -70, 200, "bg-amber-300"],
  [-80, -110, -140, "bg-pink-300"],
  [-20, -125, 90, "bg-sky-300"],
  [40, -120, -60, "bg-emerald-300"],
  [95, -95, 160, "bg-violet-300"],
  [130, -40, -200, "bg-amber-200"],
  [-135, -10, 120, "bg-emerald-200"],
  [120, 20, 80, "bg-pink-200"],
  [-100, 40, -90, "bg-sky-200"],
  [70, 55, 210, "bg-violet-200"],
] as const;

export function SelfCheck({ quiz, visaName, copy }: { quiz: QuizQuestion[]; visaName: string; copy?: CheckCopy }) {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  // True when the reader came back from the results to change one answer.
  const [editing, setEditing] = useState(false);
  const reduced = usePrefersReducedMotion();
  const done = step >= quiz.length;
  const question = quiz[Math.min(step, quiz.length - 1)];

  const choose = (questionId: string, value: string) => {
    setAnswers((current) => ({ ...current, [questionId]: value }));
    const from = step;
    const next = editing ? quiz.length : from + 1;
    window.setTimeout(() => {
      setStep((current) => (current === from ? next : current));
      if (editing) setEditing(false);
    }, reduced ? 0 : 320);
  };

  const results = quiz.map((item) => ({ question: item, option: item.options.find((option) => option.value === answers[item.id]) }));
  const statuses = results.map((result) => result.option?.status ?? "todo");
  const overall: CheckStatus = statuses.includes("stop") ? "stop" : statuses.includes("todo") ? "todo" : "ok";
  const counts = { ok: statuses.filter((s) => s === "ok").length, todo: statuses.filter((s) => s === "todo").length, stop: statuses.filter((s) => s === "stop").length };
  const verdict = { ...OVERALL[overall], ...(copy?.[overall] ?? {}) };

  const reset = () => {
    setAnswers({});
    setEditing(false);
    setStep(0);
  };

  return (
    <section id="self-check" className="relative scroll-mt-32 bg-brand-surface py-16 sm:py-24">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="2-minute check"
            title={copy?.title ?? `Could the ${visaName} work for you?`}
            highlight={copy?.title ? copy.highlight : "work for you"}
            subtitle={`${quiz.length} quick questions, one tap each. Nothing is saved or sent anywhere.`}
            align="center"
          />
        </Reveal>

        <Reveal delay={100}>
          <div className="mt-10">
            <WizardShell>
              {!done ? (
                <>
                  <WizardProgress step={step} total={quiz.length} label={question.topic} />
                  <div className="mt-8">
                    <WizardQuestion title={question.question} help={question.help ? <RichText text={question.help} /> : undefined}>
                      <WizardChoices
                        name={question.id}
                        value={answers[question.id]}
                        options={question.options.map((option) => ({ value: option.value, label: option.label, hint: option.hint }))}
                        onChange={(value) => choose(question.id, value)}
                        columns={question.options.length > 3 ? 1 : question.options.length === 2 ? 2 : 1}
                      />
                    </WizardQuestion>
                  </div>
                  <WizardFooter
                    canBack={step > 0}
                    canNext={Boolean(answers[question.id])}
                    onBack={() => setStep((current) => Math.max(0, current - 1))}
                    onNext={() => setStep((current) => current + 1)}
                    nextLabel={step === quiz.length - 1 ? "See my result" : "Next"}
                    onReset={Object.keys(answers).length > 0 ? reset : undefined}
                  />
                </>
              ) : (
                <div aria-live="polite">
                  <div className={`hero-rise relative overflow-hidden rounded-3xl bg-gradient-to-br ${verdict.panel} p-6 text-white sm:p-8`}>
                    {overall === "ok" && !reduced && (
                      <div className="burst" aria-hidden="true">
                        {BURST.map(([x, y, r, color], index) => (
                          <span
                            key={index}
                            className={color}
                            style={{ ["--bx" as string]: `${x}px`, ["--by" as string]: `${y}px`, ["--br" as string]: `${r}deg`, animationDelay: `${index * 25}ms` }}
                          />
                        ))}
                      </div>
                    )}
                    <p className="text-xs font-bold uppercase tracking-[0.16em] text-white/70">Your result</p>
                    <p className="font-heading mt-2 text-2xl font-extrabold sm:text-3xl">{verdict.title}</p>
                    <p className="mt-2 max-w-xl text-[15px] leading-relaxed text-white/85">{verdict.body}</p>
                    <div className="mt-5 flex flex-wrap gap-2 text-xs font-bold">
                      <span className="rounded-full bg-white/15 px-3 py-1">{counts.ok} looking fine</span>
                      <span className="rounded-full bg-white/15 px-3 py-1">{counts.todo} to sort</span>
                      <span className="rounded-full bg-white/15 px-3 py-1">{counts.stop} hurdles</span>
                    </div>
                  </div>

                  <ul className="mt-6 space-y-3">
                    {results.map(({ question: item, option }, index) => {
                      const status = option?.status ?? "todo";
                      const style = STATUS_STYLE[status];
                      return (
                        <li
                          key={item.id}
                          className={`hero-rise flex gap-4 rounded-2xl bg-white p-4 ring-4 ${style.ring} border border-gray-100`}
                          style={{ ["--rise-delay" as string]: `${120 + index * 70}ms` }}
                        >
                          <span className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full ${style.badge}`} aria-hidden="true">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={3} className="h-4 w-4">
                              <path strokeLinecap="round" strokeLinejoin="round" d={style.icon} />
                            </svg>
                          </span>
                          <div className="min-w-0 flex-1">
                            <p className="flex flex-wrap items-baseline gap-x-2">
                              <span className="font-heading text-[15px] font-bold text-brand-navy">{item.topic}</span>
                              <span className="text-xs font-bold uppercase tracking-wider text-gray-400">{style.label}</span>
                            </p>
                            {option && <p className="text-xs text-gray-500">You said: {option.label}</p>}
                            <p className="mt-1 text-sm leading-relaxed text-gray-700">{option ? <RichText text={option.note} /> : "Not answered."}</p>
                            {option?.link &&
                              (option.link.external ? (
                                <a href={option.link.href} target="_blank" rel="noopener noreferrer" className="mt-1.5 inline-block text-sm font-bold text-brand-primary hover:underline">
                                  {option.link.label} ↗
                                </a>
                              ) : option.link.href.startsWith("#") ? (
                                <a href={option.link.href} className="mt-1.5 inline-block text-sm font-bold text-brand-primary hover:underline">
                                  {option.link.label} →
                                </a>
                              ) : (
                                <Link href={option.link.href} className="mt-1.5 inline-block text-sm font-bold text-brand-primary hover:underline">
                                  {option.link.label} →
                                </Link>
                              ))}
                          </div>
                          <button
                            type="button"
                            onClick={() => {
                              setEditing(true);
                              setStep(index);
                            }}
                            className="shrink-0 self-start text-xs font-semibold text-gray-400 hover:text-brand-navy hover:underline"
                          >
                            Change
                          </button>
                        </li>
                      );
                    })}
                  </ul>

                  <div className="mt-8 flex flex-wrap items-center gap-3 border-t border-gray-100 pt-6">
                    <Button href="/bookings" track="book_cta">
                      Confirm it with an agent
                      <ArrowIcon />
                    </Button>
                    <button type="button" onClick={reset} className="rounded-full border border-brand-navy/15 bg-white px-5 py-2.5 text-sm font-bold text-brand-navy hover:bg-brand-mint">
                      Start again
                    </button>
                  </div>
                  <p className="mt-4 text-xs leading-relaxed text-gray-500">{copy?.disclaimer ?? DISCLAIMER}</p>
                </div>
              )}
            </WizardShell>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
