"use client";

import { useId, useMemo, useRef, useState } from "react";
import type { HomeAffairsOccupation } from "@/data/state-assessment/types";

// Type part of an occupation title or its ANZSCO code and pick from the
// Home Affairs lists. Each match shows whether it can be nominated for a
// 190 and 491 or a 491 only. Keyboard: arrows to move, Enter to choose,
// Escape to close.

const MAX_RESULTS = 8;

function visaBadge(occupation: HomeAffairsOccupation): { text: string; tone: string } {
  return occupation.lists.some((list) => list !== "ROL")
    ? { text: "190 and 491", tone: "bg-brand-mint text-brand-primary-dark" }
    : { text: "491 only", tone: "bg-amber-100 text-amber-800" };
}

function rank(occupation: HomeAffairsOccupation, query: string): number {
  const title = occupation.title.toLowerCase();
  if (/^\d+$/.test(query)) return occupation.code.startsWith(query) ? 0 : Infinity;
  if (title === query) return 0;
  if (title.startsWith(query)) return 1;
  if (title.split(/[\s(/-]+/).some((word) => word.startsWith(query))) return 2;
  if (title.includes(query)) return 3;
  // Every word of the query appears somewhere in the title.
  const words = query.split(/\s+/).filter(Boolean);
  if (words.length > 1 && words.every((word) => title.includes(word))) return 4;
  return Infinity;
}

export function OccupationSearch({
  occupations,
  value,
  onChange,
  badge = visaBadge,
}: {
  occupations: HomeAffairsOccupation[];
  value: string | null;
  onChange: (code: string | null) => void;
  // The tag beside each match; by default which visas it can be nominated for.
  badge?: (occupation: HomeAffairsOccupation) => { text: string; tone: string };
}) {
  const selected = occupations.find((item) => item.code === value);
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(0);
  const input = useRef<HTMLInputElement>(null);
  const listId = useId();

  const results = useMemo(() => {
    const term = query.trim().toLowerCase();
    if (term.length < 2) return [];
    return occupations
      .map((occupation) => ({ occupation, score: rank(occupation, term) }))
      .filter((item) => item.score < Infinity)
      .sort((a, b) => a.score - b.score || a.occupation.title.localeCompare(b.occupation.title))
      .slice(0, MAX_RESULTS)
      .map((item) => item.occupation);
  }, [occupations, query]);

  const choose = (occupation: HomeAffairsOccupation) => {
    onChange(occupation.code);
    setQuery("");
    setOpen(false);
  };

  if (selected) {
    const tag = badge(selected);
    return (
      <div className="hero-rise flex flex-wrap items-center gap-4 rounded-2xl border-2 border-brand-primary bg-brand-mint/60 p-4">
        <div className="min-w-0 flex-1">
          <p className="font-heading text-lg font-bold leading-snug text-brand-navy">{selected.title}</p>
          <p className="mt-0.5 flex flex-wrap items-center gap-2 text-xs text-gray-600">
            <span className="font-bold">ANZSCO {selected.code}</span>
            <span aria-hidden="true">·</span>
            <span>{selected.lists.join(", ")}</span>
            {selected.authority && (
              <>
                <span aria-hidden="true">·</span>
                <span>Assessed by {selected.authority}</span>
              </>
            )}
          </p>
        </div>
        <span className={`rounded-full px-3 py-1 text-xs font-bold ${tag.tone}`}>{tag.text}</span>
        <button
          type="button"
          onClick={() => {
            onChange(null);
            window.setTimeout(() => input.current?.focus(), 0);
          }}
          className="text-sm font-semibold text-brand-primary hover:underline"
        >
          Change
        </button>
      </div>
    );
  }

  return (
    <div className="relative">
      <label htmlFor={`${listId}-input`} className="sr-only">
        Search for your occupation
      </label>
      <div className="relative">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
        </svg>
        <input
          ref={input}
          id={`${listId}-input`}
          type="text"
          role="combobox"
          aria-expanded={open && results.length > 0}
          aria-controls={listId}
          aria-activedescendant={open && results[active] ? `${listId}-${results[active].code}` : undefined}
          aria-autocomplete="list"
          autoComplete="off"
          value={query}
          placeholder="e.g. Software Engineer, Registered Nurse or 261313"
          onChange={(event) => {
            setQuery(event.target.value);
            setActive(0);
            setOpen(true);
          }}
          onFocus={() => setOpen(true)}
          onBlur={() => window.setTimeout(() => setOpen(false), 150)}
          onKeyDown={(event) => {
            if (event.key === "ArrowDown") {
              event.preventDefault();
              setOpen(true);
              setActive((current) => Math.min(results.length - 1, current + 1));
            } else if (event.key === "ArrowUp") {
              event.preventDefault();
              setActive((current) => Math.max(0, current - 1));
            } else if (event.key === "Enter" && results[active]) {
              event.preventDefault();
              choose(results[active]);
            } else if (event.key === "Escape") {
              setOpen(false);
            }
          }}
          className="w-full rounded-2xl border-2 border-gray-200 bg-white py-4 pl-12 pr-4 text-base font-semibold text-brand-navy shadow-sm placeholder:font-normal placeholder:text-gray-400 focus:border-brand-primary focus:outline-none focus:ring-4 focus:ring-brand-primary/15"
        />
      </div>
      {open && query.trim().length >= 2 && (
        <ul id={listId} role="listbox" className="absolute z-30 mt-2 max-h-96 w-full overflow-auto rounded-2xl border border-gray-100 bg-white p-1.5 shadow-deep">
          {results.length === 0 ? (
            <li className="px-4 py-3 text-sm text-gray-500">
              No occupation on the Home Affairs 190 and 491 lists matches &ldquo;{query.trim()}&rdquo;. Try another word or the six-digit code.
            </li>
          ) : (
            results.map((occupation, index) => {
              const tag = badge(occupation);
              return (
                <li
                  key={occupation.code}
                  id={`${listId}-${occupation.code}`}
                  role="option"
                  aria-selected={index === active}
                  onMouseDown={(event) => event.preventDefault()}
                  onClick={() => choose(occupation)}
                  onMouseEnter={() => setActive(index)}
                  className={`flex cursor-pointer items-center gap-3 rounded-xl px-3.5 py-2.5 ${index === active ? "bg-brand-mint" : "hover:bg-brand-surface"}`}
                >
                  <span className="min-w-0 flex-1">
                    <span className="block text-[15px] font-bold leading-snug text-brand-navy">{occupation.title}</span>
                    <span className="block text-xs text-gray-500">
                      {occupation.code} · {occupation.lists.join(", ")}
                    </span>
                  </span>
                  <span className={`shrink-0 rounded-full px-2.5 py-0.5 text-[11px] font-bold ${tag.tone}`}>{tag.text}</span>
                </li>
              );
            })
          )}
        </ul>
      )}
    </div>
  );
}
