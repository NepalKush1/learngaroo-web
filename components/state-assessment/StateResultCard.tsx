"use client";

import { useState } from "react";
import Link from "next/link";
import { statePrograms, statusLabels } from "@/data/state-nomination";
import { stateNames, type CheckResult, type StateResult, type StreamResult } from "@/lib/state-assessment";
import { VERDICT_STYLE } from "./ResultsMap";

// One state's result: the closest stream with every criterion ticked,
// crossed or flagged for checking, then the other pathways in that state.

const ICON: Record<CheckResult, { path: string; tone: string; label: string }> = {
  met: { path: "m5 12.5 4.5 4.5L19 7.5", tone: "bg-emerald-500 text-white", label: "Met" },
  unmet: { path: "M6 6l12 12M18 6 6 18", tone: "bg-rose-500 text-white", label: "Not met" },
  check: { path: "M12 8v4m0 4h.01", tone: "bg-amber-400 text-brand-navy", label: "Check" },
};

function Mark({ result }: { result: CheckResult }) {
  return (
    <span className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${ICON[result].tone}`} aria-label={ICON[result].label} role="img">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={3} className="h-3 w-3" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d={ICON[result].path} />
      </svg>
    </span>
  );
}

// States that rank with their own published points, and our calculator for each.
const CALCULATORS: Partial<Record<string, { href: string; label: string }>> = {
  victoria: { href: "/tools/victoria-points-calculator", label: "Work out your Victorian Points Test total" },
  tasmania: { href: "/tools/tasmania-points-calculator", label: "Check your Tasmania priority attributes" },
  "australian-capital-territory": { href: "/tools/canberra-matrix-calculator", label: "Score your Canberra Matrix" },
};

function streamHeadline(result: StateResult): string {
  const best = result.best;
  const name = stateNames[result.data.state].name;
  if (!best) return `No ${name} stream matches the visa you chose.`;
  const stream = best.stream.name.includes(best.visa) ? best.stream.name : `${best.stream.name} (subclass ${best.visa})`;
  switch (result.verdict) {
    case "match":
      return `You meet the published criteria we can check for ${stream}.`;
    case "paused":
      return `You meet the last published criteria we can check for ${stream}, but ${name} hasn't opened its 2026-27 program yet.`;
    case "soon":
      return `You could meet ${stream} in about ${best.monthsToGo} month${best.monthsToGo === 1 ? "" : "s"}, if nothing else changes.`;
    case "closed":
      return `You fit ${stream}, but that stream is closed to new applications.`;
    case "no":
      return result.reasons.length ? `No ${name} pathway fits on these answers. Main gaps: ${result.reasons.join("; ")}.` : `No ${name} pathway fits on these answers.`;
  }
}

function firstGap(result: StreamResult): string {
  const gap = result.criteria.find((item) => item.result === "unmet" && item.label !== "Taking applications");
  if (gap) return gap.label;
  const status = result.criteria.find((item) => item.label === "Taking applications" && item.result !== "met");
  return status ? status.detail : "Meets the criteria we can check";
}

export function StateResultCard({ result, index }: { result: StateResult; index: number }) {
  const [showAll, setShowAll] = useState(false);
  const program = statePrograms.find((item) => item.slug === result.data.state);
  const name = stateNames[result.data.state];
  const style = VERDICT_STYLE[result.verdict];
  const best = result.best;
  // Other pathways worth showing: those whose list includes the occupation.
  const onList = (item: StreamResult) => item.criteria.find((criterion) => criterion.label === "Occupation on the list")?.result !== "unmet";
  const allOthers = result.streams.filter((item) => item !== best);
  const others = allOthers.filter(onList);
  const hidden = allOthers.length - others.length;
  const occupationList = best?.criteria.find((item) => item.label === "Occupation on the list");
  const listSources = result.data.lists.filter((list) => best?.stream.occupationLists.includes(list.id));

  return (
    <article
      id={`state-${result.data.state}`}
      className="hero-rise scroll-mt-40 overflow-hidden rounded-[2rem] border border-gray-100 bg-white shadow-card"
      style={{ ["--rise-delay" as string]: `${Math.min(index, 6) * 60}ms` }}
    >
      <header className="flex flex-wrap items-start gap-4 border-b border-gray-100 p-6 sm:p-7">
        <span className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl font-heading text-lg font-extrabold ${style.badge}`}>{name.short}</span>
        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-center gap-2">
            <h3 className="font-heading text-xl font-extrabold text-brand-navy">{name.name}</h3>
            {program && <span className={`rounded-full px-2.5 py-0.5 text-[11px] font-bold ring-1 ${statusLabels[program.status].className}`}>{statusLabels[program.status].label}</span>}
          </div>
          <p className={`mt-1 inline-flex rounded-full px-2.5 py-0.5 text-xs font-bold ${style.badge}`}>{style.label}</p>
          <p className="mt-3 text-[15px] leading-relaxed text-gray-700">{streamHeadline(result)}</p>
        </div>
      </header>

      {best && (
        <div className="p-6 sm:p-7">
          <p className="text-xs font-bold uppercase tracking-[0.14em] text-gray-500">
            Closest pathway: {best.stream.name}
            {best.stream.name.includes(best.visa) ? "" : ` · subclass ${best.visa}`} · {best.stream.audience === "both" ? "in or outside Australia" : best.stream.audience === "onshore" ? "living in Australia" : "living outside Australia"}
          </p>
          <ul className="mt-4 grid gap-2.5 md:grid-cols-2">
            {best.criteria.map((item) => (
              <li key={item.label} className="flex gap-2.5 rounded-xl bg-brand-surface/70 p-3">
                <Mark result={item.result} />
                <span className="min-w-0">
                  <span className="block text-sm font-bold leading-snug text-brand-navy">{item.label}</span>
                  {item.detail && <span className="block text-xs leading-relaxed text-gray-600">{item.detail}</span>}
                </span>
              </li>
            ))}
          </ul>
          {best.listNote && <p className="mt-3 rounded-xl bg-amber-50 px-3.5 py-2.5 text-xs leading-relaxed text-amber-900 ring-1 ring-amber-100">{best.listNote}</p>}
          {best.stream.notes.length > 0 && (
            <details className="mt-4 rounded-xl border border-gray-100 p-4 text-sm text-gray-700">
              <summary className="cursor-pointer font-bold text-brand-navy">How {name.short} selects and other notes</summary>
              <ul className="mt-2 list-disc space-y-1 pl-5">
                {best.stream.notes.map((note) => (
                  <li key={note}>{note}</li>
                ))}
              </ul>
            </details>
          )}

          {hidden > 0 && others.length === 0 && (
            <p className="mt-5 text-xs text-gray-500">
              {hidden} other {name.short} pathway{hidden === 1 ? " doesn't" : "s don't"} include your occupation.
            </p>
          )}
          {others.length > 0 && (
            <div className="mt-5">
              <button type="button" onClick={() => setShowAll((value) => !value)} className="text-sm font-bold text-brand-primary hover:underline" aria-expanded={showAll}>
                {showAll ? "Hide" : "Show"} {others.length} other {name.short} pathway{others.length === 1 ? "" : "s"} for your occupation
              </button>
              {hidden > 0 && (
                <span className="ml-2 text-xs text-gray-500">
                  ({hidden} more {hidden === 1 ? "doesn't" : "don't"} include it)
                </span>
              )}
              {showAll && (
                <ul className="mt-3 space-y-2">
                  {others.map((item) => (
                    <li key={`${item.stream.id}-${item.visa}`} className="flex flex-wrap items-center gap-2 rounded-xl border border-gray-100 p-3 text-sm">
                      <span className="font-bold text-brand-navy">{item.stream.name}</span>
                      <span className="text-gray-500">subclass {item.visa}</span>
                      <span className={`ml-auto rounded-full px-2 py-0.5 text-[11px] font-bold ${item.fit === "fits" ? "bg-emerald-100 text-emerald-800" : item.fit === "close" ? "bg-sky-100 text-sky-800" : "bg-gray-100 text-gray-600"}`}>
                        {item.fit === "fits" ? "Fits" : item.fit === "close" ? `In ${item.monthsToGo} months` : "Doesn't fit"}
                      </span>
                      <span className="basis-full text-xs text-gray-500">{firstGap(item)}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          )}

          <div className="mt-6 flex flex-wrap gap-x-5 gap-y-2 border-t border-gray-100 pt-4 text-sm font-semibold">
            <Link href={`/state-nomination/${result.data.state}`} className="text-brand-primary hover:underline">
              Read the {name.short} nomination guide →
            </Link>
            {CALCULATORS[result.data.state] && (
              <Link href={CALCULATORS[result.data.state]!.href} className="text-brand-primary hover:underline">
                {CALCULATORS[result.data.state]!.label} →
              </Link>
            )}
            {occupationList?.result !== "met" &&
              listSources.slice(0, 2).map((list) => (
                <a key={list.id} href={list.source} target="_blank" rel="noopener noreferrer" className="text-brand-primary hover:underline">
                  {list.name} ↗
                </a>
              ))}
            <a href={best.stream.source} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-brand-primary hover:underline">
              Official criteria ↗
            </a>
          </div>
          <p className="mt-2 text-xs text-gray-400">
            {result.data.settingsYear} · checked {result.data.checkedOn}
          </p>
        </div>
      )}
    </article>
  );
}
