"use client";

import { useId, useState } from "react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import type { GlossaryTerm } from "@/data/visas/explainers/types";

// Every acronym on the page in plain English, searchable. The same
// definitions appear when you tap an underlined term anywhere above.

export function JargonBuster({ terms }: { terms: GlossaryTerm[] }) {
  const [query, setQuery] = useState("");
  const inputId = useId();
  const needle = query.trim().toLowerCase();
  const shown = needle ? terms.filter((term) => `${term.term} ${term.full ?? ""} ${term.definition}`.toLowerCase().includes(needle)) : terms;

  return (
    <section id="jargon" className="relative scroll-mt-32 bg-brand-surface py-16 sm:py-24">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Jargon buster"
            title="Every acronym, in plain English"
            highlight="plain English"
            subtitle="Tap any underlined word on this page for a quick definition, or search them all here."
            align="center"
          />
        </Reveal>
        <Reveal delay={80}>
          <div className="mx-auto mt-8 max-w-xl">
            <label htmlFor={inputId} className="sr-only">
              Search the jargon buster
            </label>
            <div className="flex items-center gap-3 rounded-2xl border border-gray-200 bg-white px-4 shadow-sm focus-within:border-brand-primary focus-within:ring-2 focus-within:ring-brand-primary/20">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="h-5 w-5 text-brand-navy/40" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-4.35-4.35M11 18a7 7 0 1 1 0-14 7 7 0 0 1 0 14Z" />
              </svg>
              <input
                id={inputId}
                type="search"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Try SAF, nomination, 8607…"
                className="h-12 w-full bg-transparent text-base text-brand-navy outline-none placeholder:text-gray-400"
              />
            </div>
            <p className="mt-2 text-center text-xs text-gray-500" aria-live="polite">
              {shown.length} of {terms.length} terms
            </p>
          </div>
        </Reveal>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {shown.map((term) => (
            <div key={term.id} id={`term-${term.id}`} className="hero-rise rounded-3xl border border-gray-100 bg-white p-5 shadow-sm">
              <p className="font-heading text-lg font-extrabold text-brand-navy">{term.term}</p>
              {term.full && <p className="text-xs font-semibold text-brand-primary">{term.full}</p>}
              <p className="mt-2 text-sm leading-relaxed text-gray-600">{term.definition}</p>
            </div>
          ))}
          {shown.length === 0 && <p className="col-span-full text-center text-sm text-gray-500">No term matches that. Try a shorter word.</p>}
        </div>
      </Container>
    </section>
  );
}
