"use client";

import { useState } from "react";
import Link from "next/link";
import { hubHref, hubTabs, type HubTab } from "@/data/points-hub";

// Home-page picker: choose which points calculation you need, then open that
// tab of the points hub. Nothing is calculated here.

const pills: Record<HubTab, { code: string; label: string }> = {
  federal: { code: "AUS", label: "Federal" },
  victoria: { code: "VIC", label: "Victoria" },
  tasmania: { code: "TAS", label: "Tasmania" },
  act: { code: "ACT", label: "Canberra" },
  states: { code: "+5", label: "Other states" },
};

export function HeroPointsPicker() {
  const [tab, setTab] = useState<HubTab>("federal");

  return (
    <div className="hero-rise [--rise-delay:640ms] relative mt-8 max-w-xl overflow-hidden rounded-[1.75rem] border border-brand-green/20 bg-gradient-to-br from-brand-mint via-white to-white p-6 text-brand-navy shadow-glow sm:p-7">
      <div className="bg-gradient-brand absolute inset-x-0 top-0 h-1.5" aria-hidden="true" />
      <div className="pointer-events-none absolute -right-16 -top-16 h-52 w-52 rounded-full bg-brand-green-light/35 blur-3xl" aria-hidden="true" />

      <div className="relative">
        <p className="font-heading text-xl font-extrabold leading-tight sm:text-2xl">Check your points, free</p>

        <div role="radiogroup" aria-label="Which points calculator" className="mt-4 flex min-h-[4.75rem] flex-wrap content-start gap-2">
          {hubTabs.map((item) => {
            const pill = pills[item.id];
            const selected = item.id === tab;
            return (
              <button
                key={item.id}
                type="button"
                role="radio"
                aria-checked={selected}
                onClick={() => setTab(item.id)}
                className={`flex items-center gap-2 rounded-full py-1.5 pl-1.5 pr-3.5 text-sm font-semibold transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-primary ${
                  selected
                    ? "bg-brand-primary text-white shadow-[0_0_0_4px_rgba(31,127,83,0.18)]"
                    : "bg-white text-brand-navy ring-1 ring-gray-200 hover:ring-brand-green"
                }`}
              >
                <span
                  className={`flex h-7 min-w-7 items-center justify-center rounded-full px-1.5 text-[11px] font-extrabold tracking-wide ${
                    selected ? "bg-white text-brand-primary" : "bg-brand-mint text-brand-primary-dark"
                  }`}
                >
                  {pill.code}
                </span>
                {pill.label}
              </button>
            );
          })}
        </div>

        <Link
          href={hubHref(tab)}
          data-track="points_cta"
          data-track-label={`hero-${tab}`}
          className="cta-shimmer mt-4 inline-flex items-center gap-2 rounded-full bg-brand-primary px-6 py-3 text-sm font-extrabold text-white shadow-lg shadow-brand-primary/25 transition-colors hover:bg-brand-primary-dark focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-primary"
        >
          Open calculator
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.4} className="h-4 w-4" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14m-6-6 6 6-6 6" />
          </svg>
        </Link>
      </div>
    </div>
  );
}
