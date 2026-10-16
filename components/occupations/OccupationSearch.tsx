"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { authorities, occupationFields, occupations, type Occupation } from "@/data/occupations";

// Searchable, filterable occupation index. Works without JS as a plain
// list; with JS it filters as you type.

const listBadges = (occupation: Occupation) => {
  const out: string[] = [];
  if (occupation.lists.mltssl) out.push("MLTSSL");
  if (occupation.lists.stsol) out.push("STSOL");
  if (occupation.lists.rol) out.push("ROL");
  if (occupation.lists.csol) out.push("CSOL");
  return out;
};

export function OccupationSearch() {
  const [query, setQuery] = useState("");
  const [field, setField] = useState<string>("all");

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    return occupations
      .filter((occupation) => field === "all" || occupation.field === field)
      .filter(
        (occupation) =>
          !q ||
          occupation.title.toLowerCase().includes(q) ||
          occupation.anzsco.includes(q) ||
          authorities[occupation.authority].short.toLowerCase().includes(q),
      )
      .sort((a, b) => a.title.localeCompare(b.title));
  }, [query, field]);

  return (
    <div>
      <div className="flex flex-col gap-3 sm:flex-row">
        <label className="relative flex-1">
          <span className="sr-only">Search by occupation or ANZSCO code</span>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-4.35-4.35M17 10.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0Z" />
          </svg>
          <input
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search by occupation or ANZSCO code, e.g. nurse or 261313"
            className="w-full rounded-full border border-gray-200 bg-white py-3.5 pl-12 pr-4 text-[15px] text-brand-navy shadow-sm outline-none transition-colors focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20"
          />
        </label>
        <label className="sm:w-64">
          <span className="sr-only">Filter by field</span>
          <select
            value={field}
            onChange={(event) => setField(event.target.value)}
            className="w-full rounded-full border border-gray-200 bg-white px-4 py-3.5 text-[15px] text-brand-navy shadow-sm outline-none focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20"
          >
            <option value="all">All fields</option>
            {occupationFields.map((item) => (
              <option key={item} value={item}>{item}</option>
            ))}
          </select>
        </label>
      </div>

      <p className="mt-4 text-sm text-gray-500" aria-live="polite">
        {results.length} of {occupations.length} occupations
      </p>

      {results.length === 0 ? (
        <div className="mt-6 rounded-2xl border border-dashed border-gray-300 bg-brand-surface p-8 text-center">
          <p className="font-heading text-lg font-bold text-brand-navy">We have not written up that occupation yet</p>
          <p className="mt-2 text-sm text-gray-600">
            We add occupations as clients ask about them. Book a consultation and we will assess your occupation, lists and assessing authority directly.
          </p>
          <Link href="/bookings" className="mt-4 inline-flex rounded-full bg-brand-primary px-5 py-2.5 text-sm font-bold text-white hover:bg-brand-primary-dark">
            Book a consultation
          </Link>
        </div>
      ) : (
        <ul className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {results.map((occupation) => (
            <li key={occupation.slug}>
              <Link
                href={`/occupations/${occupation.slug}`}
                className="group flex h-full flex-col rounded-2xl border border-gray-100 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-float"
              >
                <span className="text-xs font-bold uppercase tracking-[0.14em] text-brand-primary">ANZSCO {occupation.anzsco}</span>
                <span className="font-heading mt-1 text-lg font-bold text-brand-navy group-hover:underline">{occupation.title}</span>
                <span className="mt-1 text-xs text-gray-500">{occupation.field} · Assessed by {authorities[occupation.authority].short}</span>
                <span className="mt-3 flex flex-wrap gap-1.5">
                  {listBadges(occupation).map((badge) => (
                    <span key={badge} className="rounded-full bg-brand-mint px-2 py-0.5 text-[11px] font-bold text-brand-primary-dark ring-1 ring-brand-primary/10">{badge}</span>
                  ))}
                  {occupation.prioritySector && (
                    <span className="rounded-full bg-amber-100 px-2 py-0.5 text-[11px] font-bold text-amber-800 ring-1 ring-amber-200">Priority sector</span>
                  )}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
