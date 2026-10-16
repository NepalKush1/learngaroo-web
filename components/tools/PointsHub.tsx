"use client";

import { useCallback } from "react";
import Link from "next/link";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { PointsCalculator } from "./PointsCalculator";
import { VictoriaPointsCalculator } from "./VictoriaPointsCalculator";
import { TasmaniaCalculator } from "./TasmaniaCalculator";
import { CanberraMatrixCalculator } from "./CanberraMatrixCalculator";
import { useFederalPoints } from "@/lib/points-store";
import { passMark } from "@/data/points";
import { hubTabs, type HubTab } from "@/data/points-hub";

// Every points calculation in one place: the federal test first, then each
// state or territory that ranks candidates with its own score. The active tab
// is kept in ?tab= so each one stays linkable.

function isTab(value: string | null): value is HubTab {
  return hubTabs.some((tab) => tab.id === value);
}

export function PointsHub() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  const federal = useFederalPoints();
  const param = searchParams.get("tab");
  const active: HubTab = isTab(param) ? param : "federal";

  const select = useCallback(
    (tab: HubTab) => {
      const next = new URLSearchParams(searchParams.toString());
      if (tab === "federal") next.delete("tab");
      else next.set("tab", tab);
      const query = next.toString();
      router.replace(query ? `${pathname}?${query}` : pathname, { scroll: false });
    },
    [pathname, router, searchParams],
  );

  const current = hubTabs.find((tab) => tab.id === active)!;

  return (
    <div>
      <p className="mb-2 text-[11px] font-bold uppercase tracking-[0.14em] text-gray-500">Choose a calculator</p>
      <div role="tablist" aria-label="Points calculators" className="flex gap-1 overflow-x-auto rounded-2xl border border-gray-100 bg-white p-1.5 shadow-sm">
        {hubTabs.map((tab) => {
          const selected = tab.id === active;
          return (
            <button
              key={tab.id}
              type="button"
              role="tab"
              id={`tab-${tab.id}`}
              aria-selected={selected}
              aria-controls={`panel-${tab.id}`}
              onClick={() => select(tab.id)}
              className={`shrink-0 rounded-xl px-4 py-2.5 text-sm font-semibold transition-colors ${
                selected ? "bg-brand-primary text-white shadow" : "text-brand-navy/75 hover:bg-brand-surface hover:text-brand-navy"
              }`}
            >
              <span className="sm:hidden">{tab.short}</span>
              <span className="hidden sm:inline">{tab.label}</span>
            </button>
          );
        })}
      </div>

      <p className="mt-4 text-sm text-gray-600">
        <span className="font-semibold text-brand-navy">Who needs this:</span> {current.required}
      </p>

      {/* Federal score carried across every tab. */}
      <div className="mt-5 flex flex-wrap items-center justify-between gap-3 rounded-2xl bg-brand-navy px-5 py-3.5 text-white">
        <div className="flex items-center gap-4">
          <span className="font-heading text-3xl font-extrabold leading-none">{federal ?? "—"}</span>
          <span className="text-sm leading-snug text-white/75">
            <span className="block font-semibold text-white">Your federal points{federal !== null ? (federal >= passMark ? " · meets the pass mark" : ` · ${passMark - federal} short`) : ""}</span>
            {federal === null ? "Complete the federal test first. Your total then shows on every state tab." : "Each state ranks you with its own score on top of this."}
          </span>
        </div>
        {active !== "federal" && (
          <button type="button" onClick={() => select("federal")} className="rounded-full bg-white/10 px-3.5 py-1.5 text-sm font-semibold hover:bg-white/20">
            {federal === null ? "Start with the federal test →" : "Edit federal answers"}
          </button>
        )}
      </div>


      <div id={`panel-${active}`} role="tabpanel" aria-labelledby={`tab-${active}`} className="mt-6">
        {active === "federal" && <PointsCalculator />}
        {active === "victoria" && <VictoriaPointsCalculator />}
        {active === "tasmania" && <TasmaniaCalculator />}
        {active === "act" && <CanberraMatrixCalculator />}
        {active === "states" && <OtherStates federal={federal} />}
      </div>
    </div>
  );
}

function OtherStates({ federal }: { federal: number | null }) {
  const states = [
    { name: "New South Wales", slug: "new-south-wales" },
    { name: "Queensland", slug: "queensland" },
    { name: "South Australia", slug: "south-australia" },
    { name: "Western Australia", slug: "western-australia" },
    { name: "Northern Territory", slug: "northern-territory" },
  ];
  return (
    <div className="grid gap-6 lg:grid-cols-[1.4fr_1fr]">
      <div className="rounded-3xl border border-gray-100 bg-white p-7 shadow-sm">
        <h2 className="font-heading text-2xl font-extrabold text-brand-navy">States without a published score</h2>
        <p className="mt-3 text-[15px] leading-relaxed text-gray-600">
          These states invite from their own criteria: occupation list, time living and working in the state, English level and your federal points. The State Nomination Assessment checks all of them against each state&apos;s current settings in one pass
          {federal !== null ? `, and your federal total of ${federal} is one of the inputs.` : "."}
        </p>
        <Link
          href="/state-nomination/assessment"
          className="mt-6 inline-flex items-center gap-2 rounded-full bg-brand-primary px-5 py-2.5 text-sm font-bold text-white transition-colors hover:bg-brand-primary-dark"
        >
          Run the State Nomination Assessment →
        </Link>
        <ul className="mt-6 grid gap-2 sm:grid-cols-2">
          {states.map((state) => (
            <li key={state.slug}>
              <Link href={`/state-nomination/${state.slug}`} className="block rounded-xl border border-gray-200 px-4 py-3 text-sm font-semibold text-brand-navy transition-colors hover:border-brand-primary hover:text-brand-primary">
                {state.name} criteria →
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="space-y-4">
        <Link href="/tools/regional-postcode-checker" className="block rounded-3xl border border-gray-100 bg-white p-6 shadow-sm transition-colors hover:border-brand-primary">
          <span className="font-heading block text-lg font-bold text-brand-navy">Regional Postcode Checker</span>
          <span className="mt-1 block text-sm text-gray-600">Decides whether a 491 or regional study claim applies to where you live.</span>
        </Link>
        <Link href="/occupations" className="block rounded-3xl border border-gray-100 bg-white p-6 shadow-sm transition-colors hover:border-brand-primary">
          <span className="font-heading block text-lg font-bold text-brand-navy">Occupation Guides</span>
          <span className="mt-1 block text-sm text-gray-600">Which lists your occupation is on, and which states will consider it.</span>
        </Link>
      </div>
    </div>
  );
}
