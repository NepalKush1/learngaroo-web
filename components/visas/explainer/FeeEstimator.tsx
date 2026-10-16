"use client";

import { useState } from "react";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import type { FeeConfig, SponsorFeeLine } from "@/data/visas/explainers/types";
import { aud, useCountUp } from "./useCountUp";
import { Segmented, Stepper, Switch } from "./controls";
import { StickyTotal } from "./StickyTotal";

// What it costs, recalculated as you change the pathway, who is applying
// and the options that add charges. Figures are the government charges on
// the page; anything a sponsor pays sits in its own column.

const SEGMENT = ["bg-brand-green", "bg-brand-blue", "bg-violet-500", "bg-amber-400", "bg-pink-500", "bg-teal-500", "bg-orange-500"];

interface Row {
  label: string;
  amount: number;
}

function Breakdown({ rows, tone }: { rows: Row[]; tone: "light" | "dark" }) {
  return (
    <ul className="mt-5 space-y-2 text-sm">
      {rows.map((row) => (
        <li
          key={row.label}
          className={`flex justify-between gap-3 border-t pt-2 ${tone === "dark" ? "border-white/15 text-white/85" : "border-gray-100 text-gray-600"}`}
        >
          <span>{row.label}</span>
          <span className={`shrink-0 font-bold ${tone === "dark" ? "text-white" : "text-brand-navy"}`}>{aud(row.amount)}</span>
        </li>
      ))}
    </ul>
  );
}

export function FeeEstimator({ config, factsAsAt }: { config: FeeConfig; factsAsAt: string }) {
  const [variantId, setVariantId] = useState(config.variants[0].id);
  const [adults, setAdults] = useState(0);
  const [children, setChildren] = useState(0);
  const [addOns, setAddOns] = useState<Record<string, number>>({});
  const [choice, setChoice] = useState(0);
  const [years, setYears] = useState(1);

  const variant = config.variants.find((item) => item.id === variantId) ?? config.variants[0];
  const sponsor = variant.sponsor ?? config.sponsor;
  const canAddAdults = config.maxAdults > 0 && Boolean(variant.adult?.length);
  const canAddChildren = config.maxChildren > 0 && Boolean(variant.child?.length);
  const extraAdults = canAddAdults ? adults : 0;
  const extraChildren = canAddChildren ? children : 0;

  const yours: Row[] = [...variant.primary.map((line) => ({ label: line.label, amount: line.amount }))];
  if (extraAdults > 0) for (const line of variant.adult ?? []) yours.push({ label: `${line.label}: ${extraAdults} × ${aud(line.amount)}`, amount: extraAdults * line.amount });
  if (extraChildren > 0) for (const line of variant.child ?? []) yours.push({ label: `${line.label}: ${extraChildren} × ${aud(line.amount)}`, amount: extraChildren * line.amount });
  for (const addOn of config.addOns ?? []) {
    const count = Math.min(addOns[addOn.id] ?? 0, addOn.per === "adult" ? extraAdults + 1 : 1);
    if (count <= 0) continue;
    yours.push({ label: addOn.per === "adult" ? `${addOn.label}: ${count} × ${aud(addOn.amount)}` : addOn.label, amount: count * addOn.amount });
  }

  const sponsorLines: SponsorFeeLine[] = sponsor ? [...sponsor.lines, ...(sponsor.choice?.options[Math.min(choice, sponsor.choice.options.length - 1)]?.lines ?? [])] : [];
  const yearCount = sponsor?.years ? Math.min(years, sponsor.years.max) : 1;
  const theirs: Row[] = sponsorLines.map((line) =>
    line.per === "year" ? { label: `${line.label}: ${yearCount} year${yearCount > 1 ? "s" : ""} × ${aud(line.amount)}`, amount: yearCount * line.amount } : { label: line.label, amount: line.amount },
  );

  const yourTotal = yours.reduce((sum, row) => sum + row.amount, 0);
  const theirTotal = theirs.reduce((sum, row) => sum + row.amount, 0);
  const yourShown = useCountUp(yourTotal);
  const theirShown = useCountUp(theirTotal);
  const grand = yourTotal + theirTotal;
  const yourShare = grand > 0 ? Math.round((yourTotal / grand) * 100) : 100;

  const applicantHeading = config.applicantHeading ?? (theirs.length > 0 ? "You pay" : "Total government charges");
  const split = config.split ?? { applicant: "you", sponsor: "your sponsor" };
  const hasInputs = config.variants.length > 1 || canAddAdults || canAddChildren || (config.addOns?.length ?? 0) > 0 || Boolean(sponsor?.choice || sponsor?.years);

  return (
    <section id="fees" className="relative scroll-mt-32 py-16 sm:py-24">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Costs"
            title="What it costs"
            highlight="costs"
            subtitle={`Government charges as at ${factsAsAt}.${hasInputs ? " Change the options and the total updates." : ""}`}
            align="center"
          />
        </Reveal>

        {hasInputs && <StickyTotal label={theirs.length > 0 ? applicantHeading : "Total charges"} value={aud(yourTotal)} href="#fees-result" />}

        <div className={`grid gap-6 ${hasInputs ? "mt-6 lg:mt-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start" : "mx-auto mt-12 max-w-2xl"}`}>
          {hasInputs && (
            <Reveal>
              <div className="space-y-6 rounded-[2rem] border border-gray-100 bg-white p-6 shadow-card sm:p-8">
                {config.variants.length > 1 && (
                  <fieldset>
                    <legend className="text-sm font-bold text-brand-navy">{config.variantLabel ?? "Which option?"}</legend>
                    <div className="mt-3 grid gap-2">
                      {config.variants.map((item) => {
                        const selected = item.id === variant.id;
                        return (
                          <label
                            key={item.id}
                            className={`flex cursor-pointer items-start gap-3 rounded-2xl border-2 p-3.5 transition-colors ${
                              selected ? "border-brand-primary bg-brand-mint/60" : "border-gray-100 hover:border-brand-primary/40"
                            }`}
                          >
                            <input type="radio" name="fee-variant" checked={selected} onChange={() => setVariantId(item.id)} className="mt-1 accent-brand-primary" />
                            <span>
                              <span className="block text-sm font-bold text-brand-navy">{item.label}</span>
                              {item.hint && <span className="block text-xs leading-relaxed text-gray-500">{item.hint}</span>}
                            </span>
                          </label>
                        );
                      })}
                    </div>
                  </fieldset>
                )}
                {(canAddAdults || canAddChildren) && (
                  <div className="space-y-5 border-t border-gray-100 pt-6 first:border-t-0 first:pt-0">
                    {canAddAdults && <Stepper label="Other adults applying with you" hint="Aged 18 or over" value={adults} min={0} max={config.maxAdults} onChange={setAdults} />}
                    {canAddChildren && <Stepper label="Children applying with you" hint="Under 18" value={children} min={0} max={config.maxChildren} onChange={setChildren} />}
                  </div>
                )}
                {(config.addOns?.length ?? 0) > 0 && (
                  <div className="space-y-5 border-t border-gray-100 pt-6 first:border-t-0 first:pt-0">
                    {config.addOns?.map((addOn) =>
                      addOn.per === "adult" ? (
                        <Stepper
                          key={addOn.id}
                          label={addOn.label}
                          hint={addOn.hint}
                          value={Math.min(addOns[addOn.id] ?? 0, extraAdults + 1)}
                          min={0}
                          max={extraAdults + 1}
                          onChange={(value) => setAddOns((current) => ({ ...current, [addOn.id]: value }))}
                        />
                      ) : (
                        <Switch
                          key={addOn.id}
                          label={addOn.label}
                          hint={addOn.hint}
                          checked={(addOns[addOn.id] ?? 0) > 0}
                          onChange={(on) => setAddOns((current) => ({ ...current, [addOn.id]: on ? 1 : 0 }))}
                        />
                      ),
                    )}
                  </div>
                )}
                {sponsor && (sponsor.choice || sponsor.years) && (
                  <div className="space-y-5 border-t border-gray-100 pt-6">
                    <p className="text-xs font-bold uppercase tracking-[0.16em] text-pink-700">{sponsor.heading}</p>
                    {sponsor.choice && (
                      <Segmented
                        label={sponsor.choice.label}
                        value={Math.min(choice, sponsor.choice.options.length - 1)}
                        options={sponsor.choice.options.map((option, index) => ({ value: index, label: option.label }))}
                        onChange={setChoice}
                      />
                    )}
                    {sponsor.years && (
                      <Segmented
                        label={sponsor.years.label}
                        value={yearCount}
                        options={Array.from({ length: sponsor.years.max }, (_, index) => ({ value: index + 1, label: `${index + 1}` }))}
                        onChange={setYears}
                      />
                    )}
                  </div>
                )}
              </div>
            </Reveal>
          )}

          <Reveal delay={100}>
            <div id="fees-result" className="scroll-mt-48 overflow-hidden rounded-[2rem] bg-white shadow-float">
              <div className={`grid ${theirs.length > 0 ? "sm:grid-cols-2" : ""}`}>
                <div className="bg-gradient-to-br from-brand-primary-dark to-[#0f4f31] p-7 text-white">
                  <p className="text-xs font-bold uppercase tracking-[0.16em] text-white/70">{applicantHeading}</p>
                  <p className="font-heading mt-2 text-4xl font-extrabold" aria-live="polite">
                    {aud(yourShown)}
                  </p>
                  <Breakdown rows={yours} tone="dark" />
                </div>
                {theirs.length > 0 && sponsor && (
                  <div className="bg-gradient-to-br from-pink-700 to-pink-800 p-7 text-white">
                    <p className="text-xs font-bold uppercase tracking-[0.16em] text-white/70">{sponsor.heading}</p>
                    <p className="font-heading mt-2 text-4xl font-extrabold" aria-live="polite">
                      {aud(theirShown)}
                    </p>
                    <Breakdown rows={theirs} tone="dark" />
                  </div>
                )}
              </div>
              <div className="p-7">
                {theirs.length > 0 ? (
                  <>
                    <div className="flex h-3 overflow-hidden rounded-full bg-gray-100" aria-hidden="true">
                      <div className="bg-brand-green transition-all duration-500" style={{ width: `${yourShare}%` }} />
                      <div className="flex-1 bg-pink-500" />
                    </div>
                    <p className="mt-2 text-xs text-gray-500">
                      In this example: {yourShare}% paid by {split.applicant}, {100 - yourShare}% by {split.sponsor}.
                    </p>
                  </>
                ) : (
                  yours.length > 1 && (
                    <>
                      <div className="flex h-3 overflow-hidden rounded-full bg-gray-100" aria-hidden="true">
                        {yours.map((row, index) => (
                          <div key={row.label} className={`${SEGMENT[index % SEGMENT.length]} transition-all duration-500`} style={{ width: `${(row.amount / Math.max(1, yourTotal)) * 100}%` }} />
                        ))}
                      </div>
                      <ul className="mt-3 flex flex-wrap gap-x-4 gap-y-1 text-xs text-gray-500">
                        {yours.map((row, index) => (
                          <li key={row.label} className="flex items-center gap-1.5">
                            <span className={`h-2 w-2 rounded-full ${SEGMENT[index % SEGMENT.length]}`} aria-hidden="true" />
                            {row.label.split(":")[0]}
                          </li>
                        ))}
                      </ul>
                    </>
                  )
                )}
                {sponsor?.note && <div className="mt-5 rounded-2xl bg-brand-mint p-4 text-sm leading-relaxed text-brand-primary-dark">{sponsor.note}</div>}
                <ul className="mt-5 space-y-1.5 text-xs leading-relaxed text-gray-500">
                  {(config.notes ?? []).map((note) => (
                    <li key={note}>{note}</li>
                  ))}
                  <li>{config.notIncluded}</li>
                  <li>
                    Confirm the exact total for your situation in the{" "}
                    <a href={config.confirmUrl} target="_blank" rel="noopener noreferrer" className="font-semibold text-brand-primary hover:underline">
                      {config.confirmLabel} ↗
                    </a>{" "}
                    or our{" "}
                    <Link href="/tools/fee-calculator" className="font-semibold text-brand-primary hover:underline">
                      fee calculator
                    </Link>
                    .
                  </li>
                </ul>
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
