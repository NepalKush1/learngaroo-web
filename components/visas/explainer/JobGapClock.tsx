"use client";

import { useState } from "react";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import type { JobGapConfig } from "@/data/visas/explainers/types";
import { Term } from "./Glossary";
import { useCountUp } from "./useCountUp";

// "What if I lose my job?" The work condition (8607 on a 482, 8608 on a
// 494) gives up to 180 days in one gap and 365 days in total across the
// visa. Two sliders show how much time is left and which limit runs out first.

const RADIUS = 84;
const CIRC = 2 * Math.PI * RADIUS;

const STATUS = {
  ok: { ring: "stroke-brand-green", text: "text-brand-primary-dark", panel: "bg-brand-mint text-brand-primary-dark", title: "You have time. Use it well." },
  soon: { ring: "stroke-amber-500", text: "text-amber-700", panel: "bg-amber-50 text-amber-900", title: "Act now: less than a month left." },
  over: { ring: "stroke-rose-500", text: "text-rose-700", panel: "bg-rose-50 text-rose-900", title: "You've reached the limit." },
} as const;

export function JobGapClock({ config }: { config: JobGapConfig }) {
  const [gap, setGap] = useState(30);
  const [earlier, setEarlier] = useState(0);

  const gapLeft = config.perGap - gap;
  const totalUsed = earlier + gap;
  const totalLeft = config.total - totalUsed;
  const left = Math.min(gapLeft, totalLeft);
  const binding = gapLeft <= totalLeft ? "gap" : "total";
  const status: keyof typeof STATUS = left <= 0 ? "over" : left <= 30 ? "soon" : "ok";
  const style = STATUS[status];
  const shownLeft = useCountUp(Math.max(0, left), 300);
  // The ring shows the days left, so it shrinks like a countdown.
  const leftFraction = Math.max(0, Math.min(1, left / config.perGap));
  const totalFraction = Math.min(1, totalUsed / config.total);

  return (
    <section id="job-gap" className="relative scroll-mt-32 bg-brand-surface py-16 sm:py-24">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Lost your job?"
            title="Your clock if the job ends"
            highlight="Your clock"
            subtitle={`It happens. Condition ${config.condition} gives you time to find a new sponsor, change visas or leave. See how much time you'd have.`}
            align="center"
          />
        </Reveal>

        <Reveal delay={100}>
          <div className="mx-auto mt-12 grid max-w-5xl gap-8 rounded-[2rem] border border-gray-100 bg-white p-6 shadow-float sm:p-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            {/* Gauge */}
            <div className="flex flex-col items-center">
              <div className="relative h-56 w-56">
                <svg viewBox="0 0 200 200" className="h-full w-full -rotate-90" aria-hidden="true">
                  <circle cx="100" cy="100" r={RADIUS} fill="none" strokeWidth="16" className="stroke-gray-100" />
                  <circle
                    cx="100"
                    cy="100"
                    r={RADIUS}
                    fill="none"
                    strokeWidth="16"
                    strokeLinecap="round"
                    strokeDasharray={CIRC}
                    strokeDashoffset={CIRC * (1 - leftFraction)}
                    className={`transition-all duration-500 ${style.ring}`}
                  />
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center" aria-live="polite">
                  <span className={`font-heading text-5xl font-extrabold ${style.text}`}>{shownLeft}</span>
                  <span className="text-sm font-bold text-brand-navy">days left</span>
                  <span className="mt-1 max-w-[9rem] text-xs leading-snug text-gray-500">
                    {binding === "gap" ? `before this ${config.perGap}-day gap ends` : `of your ${config.total}-day total`}
                  </span>
                </div>
              </div>
              <div className="mt-6 w-full max-w-xs">
                <div className="flex justify-between text-xs font-bold text-gray-500">
                  <span>Used across your visa</span>
                  <span>
                    {Math.min(totalUsed, config.total)} / {config.total} days
                  </span>
                </div>
                <div className="mt-1.5 h-2.5 overflow-hidden rounded-full bg-gray-100">
                  <div
                    className={`h-full rounded-full transition-all duration-500 ${totalFraction >= 1 ? "bg-rose-500" : totalFraction > 0.8 ? "bg-amber-500" : "bg-brand-blue"}`}
                    style={{ width: `${totalFraction * 100}%` }}
                  />
                </div>
              </div>
            </div>

            {/* Controls and guidance */}
            <div>
              <label className="block">
                <span className="flex items-baseline justify-between text-sm font-bold text-brand-navy">
                  Days since the job ended
                  <span className="font-heading text-2xl font-extrabold">{gap}</span>
                </span>
                <input
                  type="range"
                  min={0}
                  max={200}
                  value={gap}
                  onChange={(event) => setGap(Number(event.target.value))}
                  className="mt-2 w-full cursor-pointer accent-brand-primary"
                />
              </label>
              <label className="mt-6 block">
                <span className="flex items-baseline justify-between text-sm font-bold text-brand-navy">
                  Days used in earlier gaps on this visa
                  <span className="font-heading text-2xl font-extrabold">{earlier}</span>
                </span>
                <input
                  type="range"
                  min={0}
                  max={config.total}
                  value={earlier}
                  onChange={(event) => setEarlier(Number(event.target.value))}
                  className="mt-2 w-full cursor-pointer accent-blue-700"
                />
                <span className="mt-1 block text-xs text-gray-500">Only gaps since {config.countedFrom} count.</span>
              </label>

              <div key={status} className={`hero-rise mt-6 rounded-2xl p-5 ${style.panel}`}>
                <p className="font-heading text-lg font-bold">{style.title}</p>
                {status === "over" ? (
                  <p className="mt-1.5 text-sm leading-relaxed">
                    Staying past the limit without a new sponsor or another visa breaches{" "}
                    {config.termId ? <Term id={config.termId}>condition {config.condition}</Term> : <>condition {config.condition}</>}, and the visa can be cancelled. Get advice straight away.
                  </p>
                ) : (
                  <>
                    <p className="mt-1.5 text-sm leading-relaxed">During this time you can stop working, or work for another business. Before the days run out, do one of these:</p>
                    <ol className="mt-3 space-y-1.5 text-sm">
                      <li className="flex gap-2"><span className="font-extrabold">1.</span> Find a new sponsor: its nomination must be approved before you start work for it.</li>
                      <li className="flex gap-2"><span className="font-extrabold">2.</span> Apply for a different visa you&apos;re eligible for.</li>
                      <li className="flex gap-2"><span className="font-extrabold">3.</span> Arrange to leave Australia.</li>
                    </ol>
                  </>
                )}
                <Link href="/bookings" className="mt-4 inline-block text-sm font-bold underline-offset-2 hover:underline">
                  Talk to an agent about your options →
                </Link>
              </div>
              <p className="mt-4 text-xs leading-relaxed text-gray-500">
                Limits: up to {config.perGap} days in a single period and {config.total}{" "}days in total across the visa. Your visa&apos;s end date doesn&apos;t change. Illustration only; check your conditions in VEVO.
              </p>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
