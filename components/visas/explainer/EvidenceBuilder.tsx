"use client";

import { useState } from "react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import type { EvidenceConfig } from "@/data/visas/explainers/types";
import { RichText } from "./RichText";

// Tick what you already have, group by group. Each group shows how many
// items you've ticked, and empty groups are flagged so nothing is forgotten.
// It counts; it doesn't judge strength (the decision-maker weighs it all).

function Icon({ path }: { path: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7} className="h-5 w-5" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d={path} />
    </svg>
  );
}

export function EvidenceBuilder({ config }: { config: EvidenceConfig }) {
  const [ticked, setTicked] = useState<Record<string, boolean>>({});
  const toggle = (key: string) => setTicked((current) => ({ ...current, [key]: !current[key] }));

  const groups = config.groups.map((group) => {
    const count = group.items.filter((_, index) => ticked[`${group.id}:${index}`]).length;
    return { group, count };
  });
  const covered = groups.filter((item) => item.count > 0).length;
  const total = groups.reduce((sum, item) => sum + item.count, 0);
  const empty = groups.filter((item) => item.count === 0).map((item) => item.group.title);

  return (
    <section id="evidence" className="relative scroll-mt-32 bg-brand-surface py-16 sm:py-24">
      <Container>
        <Reveal>
          <SectionHeading eyebrow={config.eyebrow} title={config.title} highlight={config.highlight} subtitle={config.subtitle} align="center" />
        </Reveal>

        <Reveal delay={80}>
          <div className="mx-auto mt-8 flex max-w-xl flex-wrap items-center justify-center gap-x-5 gap-y-2 rounded-full bg-white px-6 py-3 text-sm font-bold text-brand-navy shadow-sm ring-1 ring-gray-100" aria-live="polite">
            <span>
              {covered} of {groups.length} areas covered
            </span>
            <span className="flex gap-1" aria-hidden="true">
              {groups.map(({ group, count }) => (
                <span key={group.id} className={`h-2.5 w-8 rounded-full transition-colors ${count > 0 ? "bg-brand-green" : "bg-gray-200"}`} />
              ))}
            </span>
            <span className="text-gray-500">
              {total} {total === 1 ? "item" : "items"} ticked
            </span>
          </div>
        </Reveal>

        <div className={`mt-10 grid gap-5 ${config.groups.length === 4 ? "md:grid-cols-2 xl:grid-cols-4" : config.groups.length === 3 ? "md:grid-cols-3" : "md:grid-cols-2"}`}>
          {groups.map(({ group, count }, groupIndex) => (
            <Reveal key={group.id} delay={groupIndex * 70}>
              <fieldset className={`flex h-full flex-col rounded-3xl border bg-white p-6 shadow-sm transition-colors ${count > 0 ? "border-brand-primary/25" : "border-gray-100"}`}>
                <legend className="sr-only">{group.title}</legend>
                <div className="flex items-center gap-3">
                  <span className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl transition-colors ${count > 0 ? "bg-brand-green text-white" : "bg-brand-mint text-brand-primary"}`}>
                    <Icon path={group.icon} />
                  </span>
                  <div className="min-w-0 flex-1">
                    <p className="font-heading text-lg font-bold leading-snug text-brand-navy" aria-hidden="true">
                      {group.title}
                    </p>
                    <p className={`text-xs font-bold ${count > 0 ? "text-brand-primary" : "text-amber-700"}`}>{count > 0 ? `${count} ticked` : "Nothing ticked yet"}</p>
                  </div>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-gray-600">
                  <RichText text={group.why} />
                </p>
                <ul className="mt-4 space-y-2 border-t border-gray-100 pt-4">
                  {group.items.map((item, index) => {
                    const key = `${group.id}:${index}`;
                    const on = Boolean(ticked[key]);
                    return (
                      <li key={key}>
                        <label className={`flex cursor-pointer items-start gap-3 rounded-xl p-2 text-sm leading-relaxed transition-colors ${on ? "bg-brand-mint/70 text-brand-navy" : "text-gray-700 hover:bg-brand-surface"}`}>
                          <input type="checkbox" checked={on} onChange={() => toggle(key)} className="mt-1 h-4 w-4 shrink-0 cursor-pointer accent-brand-primary" />
                          <span>{item}</span>
                        </label>
                      </li>
                    );
                  })}
                </ul>
              </fieldset>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div className="mx-auto mt-8 max-w-3xl rounded-2xl bg-white p-5 text-center text-sm leading-relaxed text-gray-700 shadow-sm ring-1 ring-gray-100" aria-live="polite">
            {empty.length === 0 ? (
              <span className="font-bold text-brand-primary-dark">Every area has something. Keep collecting as your situation changes.</span>
            ) : (
              <>
                <span className="font-bold text-brand-navy">Still empty:</span> {empty.join(", ")}.
              </>
            )}
            <span className="mt-2 block text-xs text-gray-500">{config.footnote}</span>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
