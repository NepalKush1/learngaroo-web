"use client";

import { useState } from "react";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { ArrowIcon } from "@/components/ui/Button";
import type { CompareConfig } from "@/data/service-explainers/types";

// The visas a service covers, side by side. Tap one to highlight its column
// (on a phone, to read it); every column links to the full guide.

function Icon({ path, className = "h-4 w-4" }: { path: string; className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className={className} aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d={path} />
    </svg>
  );
}

export function VisaCompare({ config, hrefs, hasFinder }: { config: CompareConfig; hrefs: Record<string, string>; hasFinder: boolean }) {
  const [selected, setSelected] = useState(0);
  const columns = config.columns;
  const chosen = columns[selected];

  return (
    <section id="compare" className="relative scroll-mt-32 bg-brand-surface py-16 sm:py-24">
      <Container>
        <Reveal>
          <SectionHeading eyebrow={config.eyebrow} title={config.title} highlight={config.highlight} subtitle={config.subtitle} align="center" />
        </Reveal>

        {/* Desktop: the table, with each visa's header as a button that highlights its column. */}
        <Reveal delay={100}>
          <div className="mt-10 hidden overflow-hidden rounded-[2rem] border border-gray-100 bg-white shadow-card md:block">
            <table className="w-full table-fixed text-left text-sm">
              <caption className="sr-only">{config.title}</caption>
              <thead>
                <tr>
                  <th scope="col" className="w-[22%] px-5 pb-5 pt-6 align-bottom">
                    <span className="text-xs font-semibold text-gray-400">Tap one to highlight it</span>
                  </th>
                  {columns.map((column, index) => {
                    const on = index === selected;
                    return (
                      <th key={column.page} scope="col" className={`p-3 align-top font-normal transition-colors duration-300 ${on ? "bg-brand-mint" : ""}`}>
                        <button
                          type="button"
                          aria-pressed={on}
                          onClick={() => setSelected(index)}
                          className={`flex h-full w-full flex-col rounded-2xl p-3 text-left transition-all duration-300 ${on ? "bg-white shadow-card ring-2 ring-brand-primary" : "hover:bg-brand-surface"}`}
                        >
                          <span className="flex items-center justify-between gap-3">
                            <span className="font-heading text-lg font-extrabold text-brand-navy">{column.name}</span>
                            <span
                              className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full transition-colors ${on ? "bg-brand-primary text-white" : "bg-gray-100 text-transparent"}`}
                              aria-hidden="true"
                            >
                              <Icon path="m5 12.5 4.5 4.5L19 7.5" className="h-3.5 w-3.5" />
                            </span>
                          </span>
                          <span className="mt-0.5 text-sm font-semibold text-brand-primary-dark">{column.tagline}</span>
                          <span className="mt-2 text-xs leading-relaxed text-gray-600">
                            <span className="font-bold text-brand-navy">Best for:</span> {column.bestFor}
                          </span>
                        </button>
                      </th>
                    );
                  })}
                </tr>
              </thead>
              <tbody>
                {config.rows.map((row, rowIndex) => (
                  <tr key={row.label} className="border-t border-gray-100">
                    <th scope="row" className="px-5 py-4 align-top font-semibold text-brand-navy">
                      <span className="flex items-start gap-2.5">
                        <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-brand-surface text-brand-primary">
                          <Icon path={row.icon} />
                        </span>
                        <span className="pt-1 leading-snug">{row.label}</span>
                      </span>
                    </th>
                    {columns.map((column, index) => (
                      <td
                        key={column.page}
                        className={`px-6 py-4 align-top leading-relaxed transition-colors duration-300 ${
                          index === selected ? "bg-brand-mint/60 font-semibold text-brand-navy" : "text-gray-600"
                        }`}
                      >
                        {column.values[rowIndex]}
                      </td>
                    ))}
                  </tr>
                ))}
                <tr className="border-t border-gray-100">
                  <td className="px-5 py-4" />
                  {columns.map((column, index) => (
                    <td key={column.page} className={`px-6 py-4 transition-colors duration-300 ${index === selected ? "bg-brand-mint/60" : ""}`}>
                      {hrefs[column.page] && (
                        <Link href={hrefs[column.page]} className="inline-flex items-center gap-1.5 text-sm font-bold text-brand-primary hover:underline">
                          Full guide <ArrowIcon />
                        </Link>
                      )}
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>
        </Reveal>

        {/* Phone: pick a visa and read its column. */}
        <div className="mt-8 md:hidden">
          <div className="-mx-6 overflow-x-auto px-6 pb-1 [scrollbar-width:none]">
            <div className="flex w-max gap-2 rounded-full bg-white p-1.5 shadow-sm ring-1 ring-gray-100">
              {columns.map((column, index) => (
                <button
                  key={column.page}
                  type="button"
                  aria-pressed={index === selected}
                  onClick={() => setSelected(index)}
                  className={`whitespace-nowrap rounded-full px-4 py-2 text-sm font-bold transition-all ${
                    index === selected ? "bg-brand-navy text-white shadow" : "text-brand-navy/70"
                  }`}
                >
                  {column.name}
                </button>
              ))}
            </div>
          </div>
          <div key={chosen.page} className="hero-rise mt-4 rounded-[2rem] border border-gray-100 bg-white p-5 shadow-card" aria-live="polite">
            <p className="font-heading text-xl font-extrabold text-brand-navy">{chosen.name}</p>
            <p className="mt-0.5 text-sm font-semibold text-brand-primary-dark">{chosen.tagline}</p>
            <p className="mt-2 text-sm leading-relaxed text-gray-600">
              <span className="font-bold text-brand-navy">Best for:</span> {chosen.bestFor}
            </p>
            <dl className="mt-4 space-y-2.5">
              {config.rows.map((row, rowIndex) => (
                <div key={row.label} className="flex gap-3 rounded-2xl bg-brand-surface p-3">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-white text-brand-primary shadow-sm">
                    <Icon path={row.icon} />
                  </span>
                  <div className="min-w-0">
                    <dt className="text-[11px] font-bold uppercase tracking-wider text-gray-500">{row.label}</dt>
                    <dd className="text-[15px] font-semibold leading-snug text-brand-navy">{chosen.values[rowIndex]}</dd>
                  </div>
                </div>
              ))}
            </dl>
            {hrefs[chosen.page] && (
              <Link href={hrefs[chosen.page]} className="mt-4 inline-flex items-center gap-1.5 text-sm font-bold text-brand-primary hover:underline">
                Read the full {chosen.name} guide <ArrowIcon />
              </Link>
            )}
          </div>
        </div>

        <p className="mx-auto mt-6 max-w-3xl text-center text-xs leading-relaxed text-gray-500">
          {config.footnote}
          {hasFinder && (
            <>
              {" "}
              <a href="#finder" className="font-semibold text-brand-primary hover:underline">
                Not sure which fits? Try the finder.
              </a>
            </>
          )}
        </p>
      </Container>
    </section>
  );
}
