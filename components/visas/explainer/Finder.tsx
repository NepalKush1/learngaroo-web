"use client";

import { useState } from "react";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Button, ArrowIcon } from "@/components/ui/Button";
import type { FinderConfig } from "@/data/visas/explainers/types";
import { RichText } from "./RichText";

// "Which visa fits?" One question at a time; each tap leads to the next
// question or to the likely starting point, with the main exceptions to
// check. The trail of answers stays visible and any step can be undone.

export function Finder({ config, currentHref }: { config: FinderConfig; currentHref: string }) {
  const [trail, setTrail] = useState<{ question: string; option: number }[]>([]);

  const questions = new Map(config.questions.map((question) => [question.id, question]));
  const outcomes = new Map(config.outcomes.map((outcome) => [outcome.id, outcome]));
  const last = trail[trail.length - 1];
  const currentId = last ? questions.get(last.question)?.options[last.option]?.next ?? config.start : config.start;
  const question = questions.get(currentId);
  const outcome = question ? undefined : outcomes.get(currentId);
  const here = outcome?.href === currentHref;
  const stop = outcome?.tone === "stop";

  const choose = (index: number) => setTrail((current) => [...current, { question: currentId, option: index }]);
  const back = (to: number) => setTrail((current) => current.slice(0, to));

  return (
    <section id="finder" className="relative scroll-mt-32 py-16 sm:py-24">
      <Container>
        <Reveal>
          <SectionHeading eyebrow={config.eyebrow} title={config.title} highlight={config.highlight} subtitle={config.subtitle} align="center" />
        </Reveal>

        <Reveal delay={100}>
          <div className="mx-auto mt-10 max-w-3xl rounded-[2rem] border border-gray-100 bg-white p-6 shadow-float sm:p-10">
            {/* Answers so far */}
            {trail.length > 0 && (
              <ol className="mb-6 flex flex-wrap items-center gap-2 border-b border-gray-100 pb-5" aria-label="Your answers">
                {trail.map((step, index) => {
                  const item = questions.get(step.question);
                  const option = item?.options[step.option];
                  return (
                    <li key={`${step.question}-${index}`}>
                      <button
                        type="button"
                        onClick={() => back(index)}
                        className="group inline-flex items-center gap-1.5 rounded-full bg-brand-mint px-3 py-1.5 text-xs font-bold text-brand-primary-dark transition-colors hover:bg-brand-primary hover:text-white"
                        title="Change this answer"
                      >
                        <span className="flex h-4 w-4 items-center justify-center rounded-full bg-white/70 text-[10px] text-brand-primary-dark">{index + 1}</span>
                        {option?.label}
                        <span className="opacity-50 group-hover:opacity-100" aria-hidden="true">
                          ✎
                        </span>
                        <span className="sr-only">(change)</span>
                      </button>
                    </li>
                  );
                })}
              </ol>
            )}

            {question ? (
              <div key={question.id} className="hero-rise">
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-brand-primary">Question {trail.length + 1}</p>
                <h3 className="font-heading mt-2 text-2xl font-extrabold leading-snug text-brand-navy sm:text-[1.7rem]">{question.question}</h3>
                {question.help && (
                  <p className="mt-2 text-[15px] leading-relaxed text-gray-600">
                    <RichText text={question.help} />
                  </p>
                )}
                <div className={`mt-6 grid gap-3 ${question.options.length > 3 ? "sm:grid-cols-2" : ""}`}>
                  {question.options.map((option, index) => (
                    <button
                      key={option.label}
                      type="button"
                      onClick={() => choose(index)}
                      className="group flex items-center gap-4 rounded-2xl border-2 border-gray-100 bg-white p-4 text-left transition-all duration-200 hover:-translate-y-0.5 hover:border-brand-primary/40 hover:shadow-card focus-visible:border-brand-primary focus-visible:outline-none"
                    >
                      <span className="min-w-0 flex-1">
                        <span className="block text-[15px] font-bold leading-snug text-brand-navy">{option.label}</span>
                        {option.hint && <span className="mt-0.5 block text-xs leading-relaxed text-gray-500">{option.hint}</span>}
                      </span>
                      <span
                        className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-surface text-brand-primary transition-colors group-hover:bg-brand-primary group-hover:text-white"
                        aria-hidden="true"
                      >
                        →
                      </span>
                    </button>
                  ))}
                </div>
                {trail.length > 0 && (
                  <button type="button" onClick={() => back(trail.length - 1)} className="mt-6 text-sm font-semibold text-gray-500 hover:text-brand-navy hover:underline">
                    ← Back
                  </button>
                )}
              </div>
            ) : outcome ? (
              <div key={outcome.id} className="hero-rise" aria-live="polite">
                <div
                  className={`relative overflow-hidden rounded-3xl bg-gradient-to-br p-6 text-white sm:p-8 ${
                    stop ? "from-rose-600 to-rose-800" : "from-brand-primary-dark to-[#0f4f31]"
                  }`}
                >
                  <span className="pointer-events-none absolute -right-8 -top-8 h-32 w-32 rounded-[2rem] bg-white/10" aria-hidden="true" />
                  <p className="text-xs font-bold uppercase tracking-[0.16em] text-white/70">{stop ? "On these answers" : "Your likely starting point"}</p>
                  <p className="font-heading relative mt-2 text-2xl font-extrabold leading-snug sm:text-3xl">{outcome.title}</p>
                  {here && (
                    <span className="mt-3 inline-flex items-center gap-1.5 rounded-full bg-white/20 px-3 py-1 text-xs font-bold ring-1 ring-white/30">
                      <span className="h-2 w-2 rounded-full bg-brand-green-light" aria-hidden="true" />
                      You&apos;re on the right page
                    </span>
                  )}
                  <p className="relative mt-3 text-[15px] leading-relaxed text-white/90">
                    <RichText text={outcome.body} />
                  </p>
                </div>
                {outcome.watch && outcome.watch.length > 0 && (
                  <div className="mt-5 rounded-2xl bg-amber-50 p-5 ring-1 ring-amber-100">
                    <p className="text-xs font-bold uppercase tracking-[0.16em] text-amber-800">Check these first</p>
                    <ul className="mt-3 space-y-2">
                      {outcome.watch.map((item) => (
                        <li key={item} className="flex gap-2.5 text-sm leading-relaxed text-amber-950">
                          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-amber-500" aria-hidden="true" />
                          <span>
                            <RichText text={item} />
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                <div className="mt-6 flex flex-wrap items-center gap-3">
                  {outcome.href && !here && (
                    <Button href={outcome.href}>
                      Read this guide
                      <ArrowIcon />
                    </Button>
                  )}
                  {here && (
                    <Button href="#journey">
                      Keep reading
                      <ArrowIcon />
                    </Button>
                  )}
                  <Link href="/bookings" className="rounded-full border border-brand-navy/15 bg-white px-5 py-2.5 text-sm font-bold text-brand-navy hover:bg-brand-mint">
                    Talk it through with us
                  </Link>
                  <button type="button" onClick={() => back(0)} className="text-sm font-semibold text-gray-500 hover:text-brand-navy hover:underline">
                    Start again
                  </button>
                </div>
              </div>
            ) : null}
            <p className="mt-8 border-t border-gray-100 pt-5 text-xs leading-relaxed text-gray-500">{config.footnote}</p>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
