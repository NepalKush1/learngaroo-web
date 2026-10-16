"use client";

import { useState } from "react";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import type { CostConfig } from "@/data/visas/explainers/types";
import { Term } from "./Glossary";
import { aud, useCountUp } from "./useCountUp";
import { Segmented, Stepper, Switch } from "./controls";

// Who pays what. The worker's government charges and the employer's
// sponsorship charges side by side, recalculated as the family and the
// nomination change. Figures are the 1 July 2026 charges for this visa.

export function CostEstimator({ config, factsAsAt }: { config: CostConfig; factsAsAt: string }) {
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);
  const [onshore, setOnshore] = useState(false);
  const [approved, setApproved] = useState(false);
  const [large, setLarge] = useState(false);
  const [years, setYears] = useState(config.maxYears);

  const worker = [
    { label: "Main applicant (you)", amount: config.primary },
    ...(adults > 1 ? [{ label: `${adults - 1} more adult${adults > 2 ? "s" : ""} × ${aud(config.adult)}`, amount: (adults - 1) * config.adult }] : []),
    ...(children > 0 ? [{ label: `${children} child${children > 1 ? "ren" : ""} × ${aud(config.child)}`, amount: children * config.child }] : []),
    ...(onshore ? [{ label: "Subsequent temporary application charge", amount: config.stac }] : []),
  ];
  const safRate = large ? config.safLarge : config.safSmall;
  const employer = [
    ...(approved ? [] : [{ label: "Standard Business Sponsorship", amount: config.sponsorship }]),
    { label: "Nomination charge", amount: config.nomination },
    { label: `SAF levy: ${years} year${years > 1 ? "s" : ""} × ${aud(safRate)}`, amount: years * safRate },
  ];
  const workerTotal = worker.reduce((sum, row) => sum + row.amount, 0);
  const employerTotal = employer.reduce((sum, row) => sum + row.amount, 0);
  const workerShown = useCountUp(workerTotal);
  const employerShown = useCountUp(employerTotal);
  const workerShare = Math.round((workerTotal / (workerTotal + employerTotal)) * 100);

  return (
    <section id="cost-estimator" className="relative scroll-mt-32 py-16 sm:py-24">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Costs"
            title="What it costs, and who pays"
            highlight="who pays"
            subtitle={`Government charges as at ${factsAsAt}. Change the family or the nomination and the totals update.`}
            align="center"
          />
        </Reveal>

        <div className="mt-12 grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <Reveal>
            <div className="space-y-6 rounded-[2rem] border border-gray-100 bg-white p-6 shadow-card sm:p-8">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-brand-primary">Your application</p>
              <Stepper label="Adults applying" hint="Including you" value={adults} min={1} max={6} onChange={setAdults} />
              <Stepper label="Children under 18" value={children} min={0} max={8} onChange={setChildren} />
              <Switch
                label="Applying in Australia after holding certain temporary visas"
                hint={<>Adds the <Term id="stac">subsequent temporary application charge</Term></>}
                checked={onshore}
                onChange={setOnshore}
              />
              <div className="border-t border-gray-100 pt-6">
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-pink-700">Your employer</p>
              </div>
              <Switch label="Already an approved sponsor" hint="Sponsorship lasts five years" checked={approved} onChange={setApproved} />
              <Segmented
                label="Business turnover"
                value={large ? "large" : "small"}
                options={[
                  { value: "small", label: "Under A$10 million" },
                  { value: "large", label: "A$10 million or more" },
                ]}
                onChange={(value) => setLarge(value === "large")}
              />
              <Segmented
                label="Years nominated"
                value={years}
                options={Array.from({ length: config.maxYears }, (_, index) => ({ value: index + 1, label: `${index + 1}` }))}
                onChange={setYears}
              />
            </div>
          </Reveal>

          <Reveal delay={100}>
            <div className="overflow-hidden rounded-[2rem] bg-white shadow-float">
              <div className="grid sm:grid-cols-2">
                <div className="bg-gradient-to-br from-brand-primary-dark to-[#0f4f31] p-7 text-white">
                  <p className="text-xs font-bold uppercase tracking-[0.16em] text-white/70">You pay</p>
                  <p className="font-heading mt-2 text-4xl font-extrabold" aria-live="polite">
                    {aud(workerShown)}
                  </p>
                  <ul className="mt-5 space-y-2 text-sm">
                    {worker.map((row) => (
                      <li key={row.label} className="flex justify-between gap-3 border-t border-white/15 pt-2 text-white/85">
                        <span>{row.label}</span>
                        <span className="font-bold text-white">{aud(row.amount)}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-gradient-to-br from-pink-700 to-pink-800 p-7 text-white">
                  <p className="text-xs font-bold uppercase tracking-[0.16em] text-white/70">Your employer pays</p>
                  <p className="font-heading mt-2 text-4xl font-extrabold" aria-live="polite">
                    {aud(employerShown)}
                  </p>
                  <ul className="mt-5 space-y-2 text-sm">
                    {employer.map((row) => (
                      <li key={row.label} className="flex justify-between gap-3 border-t border-white/15 pt-2 text-white/85">
                        <span>{row.label}</span>
                        <span className="font-bold text-white">{aud(row.amount)}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="p-7">
                <div className="flex h-3 overflow-hidden rounded-full bg-gray-100" aria-hidden="true">
                  <div className="bg-brand-green transition-all duration-500" style={{ width: `${workerShare}%` }} />
                  <div className="flex-1 bg-pink-500" />
                </div>
                <p className="mt-2 text-xs text-gray-500">
                  Government charges in this example: {workerShare}% paid by you, {100 - workerShare}% by your employer.
                </p>
                <div className="mt-5 rounded-2xl bg-brand-mint p-4 text-sm leading-relaxed text-brand-primary-dark">
                  <span className="font-bold">The law protects you:</span> your employer can&apos;t pass the sponsorship, nomination or{" "}
                  <Term id="saf">SAF levy</Term> costs on to you, directly or through your pay.
                </div>
                <ul className="mt-5 space-y-1.5 text-xs leading-relaxed text-gray-500">
                  <li>Not included: skills assessment, English test, health checks, police certificates, translations and advertising.</li>
                  <li>A lower charge applies to eligible Pacific Island and Timor-Leste passport holders.</li>
                  <li>
                    Confirm the exact total for your family in the{" "}
                    <a href={config.estimatorUrl} target="_blank" rel="noopener noreferrer" className="font-semibold text-brand-primary hover:underline">
                      Home Affairs Visa Pricing Estimator ↗
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
