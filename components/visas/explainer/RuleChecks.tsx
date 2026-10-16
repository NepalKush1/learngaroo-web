"use client";

import { useState } from "react";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import type { RuleChecksConfig } from "@/data/visas/explainers/types";
import { RichText } from "./RichText";

// A requirement made of several rules (e.g. the citizenship residence
// requirement). Each rule has its own slider and a tick or cross, and the
// panel at the end says whether every rule is met.

export function RuleChecks({ config }: { config: RuleChecksConfig }) {
  const [values, setValues] = useState<Record<string, number>>(() => Object.fromEntries(config.checks.map((check) => [check.id, check.initial])));

  const results = config.checks.map((check) => {
    const value = values[check.id] ?? check.initial;
    const pass = (check.atLeast === undefined || value >= check.atLeast) && (check.atMost === undefined || value <= check.atMost);
    return { check, value, pass };
  });
  const passed = results.filter((result) => result.pass).length;
  const allPass = passed === results.length;
  const verdict = allPass ? config.allPass : config.someFail;

  return (
    <section id="rules" className="relative scroll-mt-32 bg-brand-surface py-16 sm:py-24">
      <Container>
        <Reveal>
          <SectionHeading eyebrow={config.eyebrow} title={config.title} highlight={config.highlight} subtitle={config.subtitle} align="center" />
        </Reveal>

        <Reveal delay={100}>
          <div className="mx-auto mt-12 grid max-w-5xl gap-6 lg:grid-cols-[1.2fr_0.8fr] lg:items-start">
            <ol className="space-y-4">
              {results.map(({ check, value, pass }, index) => {
                const limit = check.atLeast ?? check.atMost ?? 0;
                const limitPct = ((limit - check.min) / (check.max - check.min)) * 100;
                return (
                  <li key={check.id} className={`rounded-3xl border bg-white p-5 shadow-sm transition-colors sm:p-6 ${pass ? "border-brand-primary/20" : "border-rose-200"}`}>
                    <div className="flex items-start gap-3">
                      <span
                        className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-sm font-extrabold text-white transition-colors ${pass ? "bg-brand-green" : "bg-rose-500"}`}
                        aria-hidden="true"
                      >
                        {pass ? "✓" : index + 1}
                      </span>
                      <div className="min-w-0 flex-1">
                        <label htmlFor={`rule-${check.id}`} className="flex flex-wrap items-baseline justify-between gap-2">
                          <span className="font-heading text-[15px] font-bold leading-snug text-brand-navy">{check.label}</span>
                          <span className="font-heading text-2xl font-extrabold text-brand-navy">
                            {value.toLocaleString("en-AU")} <span className="text-sm font-bold text-gray-500">{check.unit}</span>
                          </span>
                        </label>
                        {check.help && (
                          <p className="mt-1 text-xs leading-relaxed text-gray-500">
                            <RichText text={check.help} />
                          </p>
                        )}
                        <div className="relative mt-3">
                          <input
                            id={`rule-${check.id}`}
                            type="range"
                            min={check.min}
                            max={check.max}
                            step={check.step}
                            value={value}
                            onChange={(event) => setValues((current) => ({ ...current, [check.id]: Number(event.target.value) }))}
                            aria-valuetext={`${value} ${check.unit}`}
                            className={`w-full cursor-pointer ${pass ? "accent-brand-primary" : "accent-rose-500"}`}
                          />
                          <span
                            className="pointer-events-none absolute -bottom-4 -translate-x-1/2 whitespace-nowrap text-[10px] font-bold text-gray-400"
                            style={{ left: `${Math.min(96, Math.max(4, limitPct))}%` }}
                            aria-hidden="true"
                          >
                            {check.atLeast !== undefined ? "min" : "max"} {limit.toLocaleString("en-AU")}
                          </span>
                        </div>
                        <p className={`mt-5 text-sm leading-relaxed ${pass ? "text-brand-primary-dark" : "text-rose-800"}`}>
                          <RichText text={pass ? check.pass : check.fail} />
                        </p>
                      </div>
                    </div>
                  </li>
                );
              })}
            </ol>

            <div className="lg:sticky lg:top-40">
              <div
                key={String(allPass)}
                className={`hero-rise overflow-hidden rounded-[2rem] bg-gradient-to-br p-7 text-white shadow-float ${allPass ? "from-brand-primary-dark to-[#0f4f31]" : "from-rose-600 to-rose-800"}`}
                aria-live="polite"
              >
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-white/70">
                  {passed} of {results.length} rules met
                </p>
                <div className="mt-3 flex gap-1.5" aria-hidden="true">
                  {results.map(({ check, pass }) => (
                    <span key={check.id} className={`h-2 flex-1 rounded-full ${pass ? "bg-white" : "bg-white/25"}`} />
                  ))}
                </div>
                <p className="font-heading mt-5 text-2xl font-extrabold leading-snug">{verdict.title}</p>
                <p className="mt-2 text-[15px] leading-relaxed text-white/90">
                  <RichText text={verdict.body} />
                </p>
              </div>
              <p className="mt-4 text-xs leading-relaxed text-gray-500">
                {config.footnote}
                {config.link && (
                  <>
                    {" "}
                    {config.link.external ? (
                      <a href={config.link.href} target="_blank" rel="noopener noreferrer" className="font-semibold text-brand-primary hover:underline">
                        {config.link.label} ↗
                      </a>
                    ) : (
                      <Link href={config.link.href} className="font-semibold text-brand-primary hover:underline">
                        {config.link.label} →
                      </Link>
                    )}
                  </>
                )}
              </p>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
