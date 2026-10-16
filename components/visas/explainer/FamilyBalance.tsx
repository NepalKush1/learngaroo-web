"use client";

import { useState } from "react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Stepper } from "./controls";
import { StickyTotal } from "./StickyTotal";

// The balance of family test (Migration Regulations 1994, reg 1.05) as a
// count you can play with: eligible children on one side, every other
// country on the other. Limb one: at least half are eligible children.
// Limb two: eligible children outnumber the children in every other single
// country. Wording follows the verified balance-of-family-test page.

interface Country {
  id: number;
  name: string;
  count: number;
}

function Dots({ count, tone }: { count: number; tone: string }) {
  return (
    <span className="flex flex-wrap gap-1" aria-hidden="true">
      {Array.from({ length: count }, (_, index) => (
        <span key={index} className={`h-4 w-4 rounded-full ${tone} pop-in`} />
      ))}
    </span>
  );
}

function Verdict({ pass, title, body }: { pass: boolean; title: string; body: string }) {
  return (
    <div className={`rounded-2xl p-4 ring-1 ${pass ? "bg-brand-mint ring-brand-primary/20" : "bg-white ring-gray-200"}`}>
      <p className="flex items-center gap-2 font-heading text-[15px] font-bold text-brand-navy">
        <span className={`flex h-6 w-6 items-center justify-center rounded-full text-xs font-extrabold text-white ${pass ? "bg-brand-green" : "bg-gray-400"}`} aria-hidden="true">
          {pass ? "✓" : "✕"}
        </span>
        {title}
      </p>
      <p className="mt-1.5 text-sm leading-relaxed text-gray-700">{body}</p>
    </div>
  );
}

export function FamilyBalance() {
  const [eligible, setEligible] = useState(1);
  const [countries, setCountries] = useState<Country[]>([{ id: 1, name: "", count: 2 }]);
  const [nextId, setNextId] = useState(2);

  const others = countries.reduce((sum, country) => sum + country.count, 0);
  const total = eligible + others;
  const largest = countries.reduce((max, country) => Math.max(max, country.count), 0);
  const largestName = countries.find((country) => country.count === largest)?.name || "another country";
  const limbOne = total > 0 && eligible * 2 >= total;
  const limbTwo = total > 0 && eligible > largest;
  const pass = limbOne || limbTwo;

  const update = (id: number, patch: Partial<Country>) => setCountries((current) => current.map((country) => (country.id === id ? { ...country, ...patch } : country)));
  const add = () => {
    setCountries((current) => [...current, { id: nextId, name: "", count: 1 }]);
    setNextId((id) => id + 1);
  };
  const remove = (id: number) => setCountries((current) => current.filter((country) => country.id !== id));

  return (
    <section id="family-test" className="relative scroll-mt-32 bg-brand-surface py-16 sm:py-24">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Balance of family test"
            title="Do you pass the balance of family test?"
            highlight="balance of family"
            subtitle="Count your children and step-children by where they live. You pass if at least half are eligible children, or if eligible children outnumber the children in every other single country."
            align="center"
          />
        </Reveal>

        <StickyTotal
          label={total === 0 ? "Add your children" : pass ? "You pass" : "You don't pass yet"}
          value={`${eligible} of ${total} eligible`}
          href="#family-result"
          tone={total === 0 ? "amber" : pass ? "green" : "rose"}
        />

        <div className="mt-6 grid gap-6 lg:mt-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <Reveal>
            <div className="space-y-5 rounded-[2rem] border border-gray-100 bg-white p-6 shadow-card sm:p-8">
              <div className="rounded-2xl bg-brand-mint/60 p-5 ring-1 ring-brand-primary/15">
                <Stepper label="Eligible children" hint="Australian citizens (wherever they live), or permanent residents or eligible New Zealand citizens usually resident in Australia" value={eligible} min={0} max={12} onChange={setEligible} />
                <div className="mt-3">
                  <Dots count={eligible} tone="bg-brand-green" />
                </div>
              </div>

              <div>
                <p className="text-sm font-bold text-brand-navy">All your other children, by the country where they live</p>
                <p className="text-xs leading-relaxed text-gray-500">
                  Include children in Australia on a temporary visa (they aren&apos;t usually resident here) and permanent resident children living abroad.
                </p>
                <ul className="mt-3 space-y-3">
                  {countries.map((country, index) => (
                    <li key={country.id} className="rounded-2xl border border-gray-100 p-4">
                      <div className="flex items-center gap-3">
                        <input
                          type="text"
                          value={country.name}
                          onChange={(event) => update(country.id, { name: event.target.value })}
                          placeholder={`Country ${index + 1}`}
                          aria-label={`Name of country ${index + 1}`}
                          className="min-w-0 flex-1 rounded-xl border border-gray-200 bg-brand-surface px-3 py-2 text-sm font-semibold text-brand-navy placeholder:text-gray-400 focus:border-brand-primary focus:outline-none focus:ring-2 focus:ring-brand-primary/20"
                        />
                        {countries.length > 1 && (
                          <button type="button" onClick={() => remove(country.id)} className="text-xs font-semibold text-gray-400 hover:text-rose-600" aria-label={`Remove country ${index + 1}`}>
                            Remove
                          </button>
                        )}
                      </div>
                      <div className="mt-3">
                        <Stepper label="Children living there" value={country.count} min={0} max={12} onChange={(value) => update(country.id, { count: value })} />
                      </div>
                      <div className="mt-2">
                        <Dots count={country.count} tone="bg-gray-300" />
                      </div>
                    </li>
                  ))}
                </ul>
                {countries.length < 6 && (
                  <button type="button" onClick={add} className="mt-3 rounded-full border border-dashed border-brand-primary/40 px-4 py-2 text-sm font-bold text-brand-primary hover:bg-brand-mint">
                    + Add another country
                  </button>
                )}
              </div>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <div className="lg:sticky lg:top-40">
              <div id="family-result" className={`scroll-mt-48 overflow-hidden rounded-[2rem] shadow-float ${total === 0 ? "bg-white" : pass ? "bg-gradient-to-br from-brand-primary-dark to-[#0f4f31]" : "bg-gradient-to-br from-rose-600 to-rose-800"}`}>
                <div className="p-7 text-white" aria-live="polite">
                  {total === 0 ? (
                    <p className="font-heading text-xl font-bold text-brand-navy">Add your children to see the result.</p>
                  ) : (
                    <>
                      <p className="text-xs font-bold uppercase tracking-[0.16em] text-white/70">
                        {total} {total === 1 ? "child" : "children"} counted
                      </p>
                      <p className="font-heading mt-2 text-3xl font-extrabold">{pass ? "You pass" : "You don't pass yet"}</p>
                      <p className="mt-2 text-[15px] leading-relaxed text-white/85">
                        {pass
                          ? limbOne
                            ? "At least half of your children are eligible children."
                            : `Your eligible children outnumber the children in ${largestName}, the largest other group.`
                          : "Fewer than half are eligible children, and another country has at least as many children as the eligible group."}
                      </p>
                    </>
                  )}
                </div>
                {total > 0 && (
                  <div className="space-y-3 bg-white p-6">
                    <Verdict
                      pass={limbOne}
                      title={`Limb one: ${eligible} of ${total} are eligible`}
                      body={limbOne ? "That is at least half, so limb one is met." : `You'd need at least ${Math.ceil(total / 2)} eligible children out of ${total}.`}
                    />
                    <Verdict
                      pass={limbTwo}
                      title={`Limb two: ${eligible} eligible vs ${largest} in ${largestName}`}
                      body={limbTwo ? "Eligible children outnumber the children in every other single country." : "Eligible children must outnumber the children in every other single country; a tie isn't enough."}
                    />
                  </div>
                )}
              </div>
              <div className="mt-4 rounded-2xl bg-white p-5 text-xs leading-relaxed text-gray-600 shadow-sm ring-1 ring-gray-100">
                <p>
                  <span className="font-bold text-brand-navy">Count:</span>{" "}all children and step-children of you and your partner, including adopted children. A former partner&apos;s child counts if
                  they are under 18 and in your custody or guardianship under a Family Law Act 1975 order.
                </p>
                <p className="mt-2">
                  <span className="font-bold text-brand-navy">Leave out:</span>{" "}children who have died, were adopted out or removed from your custody by court order or operation of law, are
                  UNHCR-registered refugees living in a UNHCR camp, or live in a country where they suffer persecution and can&apos;t be reunited with you elsewhere.
                </p>
                <p className="mt-2">
                  Home Affairs won&apos;t waive the test. It isn&apos;t required for the subclass 870, or for a 143 or 864 lodged while you hold a 173 or 884 (or within 28 days after). General
                  information only.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
