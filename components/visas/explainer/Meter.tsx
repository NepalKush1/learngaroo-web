"use client";

import { useState } from "react";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import type { CheckStatus, MeterConfig } from "@/data/visas/explainers/types";
import { RichText } from "./RichText";
import { useCountUp } from "./useCountUp";

// One number, one slider: drag to your figure (days in Australia, days of
// specified work) and the result band under it explains what that means.

const STATUS: Record<CheckStatus, { bar: string; panel: string; badge: string; label: string }> = {
  ok: { bar: "bg-brand-green", panel: "bg-brand-mint text-brand-primary-dark ring-brand-primary/20", badge: "bg-brand-green text-white", label: "✓" },
  todo: { bar: "bg-amber-400", panel: "bg-amber-50 text-amber-950 ring-amber-200", badge: "bg-amber-400 text-brand-navy", label: "!" },
  stop: { bar: "bg-rose-400", panel: "bg-rose-50 text-rose-950 ring-rose-200", badge: "bg-rose-500 text-white", label: "✕" },
};

export function Meter({ config }: { config: MeterConfig }) {
  const [value, setValue] = useState(config.initial);
  const shown = useCountUp(value, 300);
  const range = config.max - config.min;
  const pct = (at: number) => ((at - config.min) / range) * 100;
  const bandIndex = config.bands.reduce((found, band, index) => (value >= band.from ? index : found), 0);
  const band = config.bands[bandIndex];
  const style = STATUS[band.status];
  const next = config.bands[bandIndex + 1];

  return (
    <section id="meter" className="relative scroll-mt-32 py-16 sm:py-24">
      <Container>
        <Reveal>
          <SectionHeading eyebrow={config.eyebrow} title={config.title} highlight={config.highlight} subtitle={config.subtitle} align="center" />
        </Reveal>

        <Reveal delay={100}>
          <div className="mx-auto mt-12 max-w-4xl rounded-[2rem] border border-gray-100 bg-white p-6 shadow-float sm:p-10">
            <div className="flex flex-wrap items-end justify-between gap-4">
              <p className="max-w-lg text-[15px] font-bold leading-snug text-brand-navy">{config.question}</p>
              <p className="font-heading text-5xl font-extrabold text-brand-navy" aria-live="polite">
                {shown.toLocaleString("en-AU")}
                <span className="ml-2 text-lg font-bold text-gray-500">{config.unit}</span>
              </p>
            </div>

            {/* Bands behind a single slider */}
            <div className="relative mt-8 h-8">
              <div className="absolute inset-x-0 top-1/2 flex h-4 -translate-y-1/2 overflow-hidden rounded-full" aria-hidden="true">
                {config.bands.map((item, index) => {
                  const to = config.bands[index + 1]?.from ?? config.max;
                  return <div key={item.from} className={`${STATUS[item.status].bar} ${index === bandIndex ? "" : "opacity-40"} transition-opacity`} style={{ width: `${pct(to) - pct(item.from)}%` }} />;
                })}
              </div>
              <input
                type="range"
                min={config.min}
                max={config.max}
                step={config.step}
                value={value}
                onChange={(event) => setValue(Number(event.target.value))}
                aria-label={config.question}
                aria-valuetext={`${value} ${config.unit}`}
                className="peer absolute inset-0 z-10 h-full w-full cursor-grab opacity-0 active:cursor-grabbing"
              />
              <span
                className="pointer-events-none absolute top-1/2 h-8 w-8 -translate-x-1/2 -translate-y-1/2 rounded-full border-4 border-white bg-brand-navy shadow-lg transition-[left] duration-150 peer-focus-visible:ring-4 peer-focus-visible:ring-brand-primary/40"
                style={{ left: `${pct(value)}%` }}
                aria-hidden="true"
              >
                <span className="absolute inset-0 m-auto h-2 w-2 rounded-full bg-white" />
              </span>
            </div>
            <div className="relative mt-2 h-9 text-[11px] font-bold text-gray-500" aria-hidden="true">
              {config.marks.map((mark) => {
                const p = pct(mark.at);
                const shift = p < 8 ? "translate-x-0 text-left" : p > 92 ? "-translate-x-full text-right" : "-translate-x-1/2 text-center";
                return (
                  <span key={mark.at} className={`absolute top-0 ${shift}`} style={{ left: `${p}%` }}>
                    <span className="mx-auto block h-2 w-px bg-gray-300" />
                    <span className="mt-0.5 block whitespace-nowrap">{mark.label}</span>
                  </span>
                );
              })}
            </div>
            <div className="mt-2 flex flex-wrap gap-2">
              {config.marks.map((mark) => (
                <button
                  key={`jump-${mark.at}`}
                  type="button"
                  onClick={() => setValue(mark.at)}
                  className="rounded-full bg-brand-surface px-3 py-1 text-xs font-bold text-brand-navy hover:bg-brand-mint"
                >
                  Try {mark.label}
                </button>
              ))}
            </div>

            <div key={bandIndex} className={`hero-rise mt-8 rounded-2xl p-5 ring-1 ${style.panel}`} aria-live="polite">
              <div className="flex flex-wrap items-center gap-2">
                <span className={`flex h-6 w-6 items-center justify-center rounded-full text-xs font-extrabold ${style.badge}`} aria-hidden="true">
                  {style.label}
                </span>
                <p className="font-heading text-lg font-bold">{band.title}</p>
              </div>
              <p className="mt-2 text-sm leading-relaxed">
                <RichText text={band.body} />
              </p>
              {next && (
                <p className="mt-3 text-xs font-bold opacity-80">
                  {(next.from - value).toLocaleString("en-AU")} more {config.unit} to reach &ldquo;{next.title}&rdquo;
                </p>
              )}
            </div>

            <p className="mt-6 text-xs leading-relaxed text-gray-500">
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
        </Reveal>
      </Container>
    </section>
  );
}
