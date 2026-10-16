"use client";

import { useId, useMemo, useState } from "react";
import Link from "next/link";
import type { VisaSearchRecord } from "@/data/visas";

// Instant search across every visa page: type a subclass number, a visa
// name or a plain-English phrase ("sponsor my parents") and get the
// matching pages, filtered by category if wanted.

const MAX_RESULTS = 10;

function score(record: VisaSearchRecord, terms: string[]): number {
  const name = record.name.toLowerCase();
  const title = record.title.toLowerCase();
  const subclass = (record.subclass ?? "").toLowerCase();
  const keywords = record.keywords.map((keyword) => keyword.toLowerCase());
  const intro = record.intro.toLowerCase();
  let total = 0;
  for (const term of terms) {
    let best = 0;
    if (subclass && subclass.split("/").includes(term)) best = 100;
    else if (subclass.includes(term)) best = Math.max(best, 60);
    if (name.startsWith(term)) best = Math.max(best, 50);
    if (name.includes(term)) best = Math.max(best, 40);
    if (title.includes(term)) best = Math.max(best, 30);
    if (keywords.some((keyword) => keyword.includes(term))) best = Math.max(best, 25);
    if (intro.includes(term)) best = Math.max(best, 10);
    if (best === 0) return 0;
    total += best;
  }
  return total;
}

export function VisaSearch({ index, categories, compact = false }: { index: VisaSearchRecord[]; categories: { slug: string; shortName: string }[]; compact?: boolean }) {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<string>("all");
  const inputId = useId();

  const results = useMemo(() => {
    const terms = query.toLowerCase().trim().split(/\s+/).filter(Boolean);
    const pool = category === "all" ? index : index.filter((record) => record.category === category);
    if (terms.length === 0) return [];
    return pool
      .map((record) => ({ record, score: score(record, terms) }))
      .filter((item) => item.score > 0)
      .sort((a, b) => b.score - a.score || a.record.name.localeCompare(b.record.name))
      .slice(0, MAX_RESULTS)
      .map((item) => item.record);
  }, [query, category, index]);

  const hasQuery = query.trim().length > 0;

  return (
    <div className={`rounded-[2rem] border border-gray-100 bg-white shadow-card ${compact ? "p-4 sm:p-5" : "p-5 sm:p-7"}`}>
      <label htmlFor={inputId} className="text-xs font-bold uppercase tracking-[0.16em] text-brand-primary">
        Search every visa
      </label>
      <div className="mt-3 flex items-center gap-3 rounded-2xl border border-gray-200 bg-brand-surface px-4 focus-within:border-brand-primary focus-within:ring-2 focus-within:ring-brand-primary/20">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="h-5 w-5 shrink-0 text-brand-navy/50" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-4.35-4.35M11 18a7 7 0 1 1 0-14 7 7 0 0 1 0 14Z" />
        </svg>
        <input
          id={inputId}
          type="search"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Try 482, partner visa, student work hours, visa refused…"
          autoComplete="off"
          className="h-12 w-full bg-transparent text-base text-brand-navy outline-none placeholder:text-gray-400"
        />
        {hasQuery && (
          <button type="button" onClick={() => setQuery("")} className="rounded-full px-2 py-1 text-xs font-bold text-gray-500 hover:text-brand-navy" aria-label="Clear search">
            Clear
          </button>
        )}
      </div>
      {!compact && (
        <ul className="mt-3 flex flex-wrap gap-2" aria-label="Filter by category">
          {[{ slug: "all", shortName: "All" }, ...categories].map((item) => (
            <li key={item.slug}>
              <button
                type="button"
                onClick={() => setCategory(item.slug)}
                aria-pressed={category === item.slug}
                className={`rounded-full px-3 py-1.5 text-xs font-bold transition-colors ${
                  category === item.slug ? "bg-brand-navy text-white" : "bg-brand-surface text-brand-navy/70 hover:bg-brand-mint hover:text-brand-primary-dark"
                }`}
              >
                {item.shortName}
              </button>
            </li>
          ))}
        </ul>
      )}
      <div aria-live="polite">
        {hasQuery && results.length === 0 && (
          <p className="mt-4 text-sm text-gray-600">
            No page matches that yet. Try the subclass number, or <Link href="/tools/visa-finder" className="font-bold text-brand-primary hover:underline">answer three questions</Link> to find your visa.
          </p>
        )}
        {results.length > 0 && (
          <ul className="mt-4 divide-y divide-gray-100 overflow-hidden rounded-2xl border border-gray-100">
            {results.map((record) => (
              <li key={record.href}>
                <Link href={record.href} className="group flex items-start gap-3 bg-white px-4 py-3 transition-colors hover:bg-brand-surface">
                  <span className="mt-0.5 flex h-9 w-14 shrink-0 items-center justify-center rounded-lg bg-brand-navy text-xs font-extrabold text-white">
                    {record.subclass ?? "Guide"}
                  </span>
                  <span className="min-w-0">
                    <span className="block text-[15px] font-bold text-brand-navy group-hover:text-brand-primary">{record.name}</span>
                    <span className="block truncate text-xs text-gray-500">{record.categoryName} · {record.intro}</span>
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
