"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { ArrowIcon } from "@/components/ui/Button";
import { OccupationSearch } from "@/components/state-assessment/OccupationSearch";
import { homeAffairsListMeta, homeAffairsOccupations } from "@/data/state-assessment/home-affairs";
import { assessingAuthoritiesCheckedOn, assessingAuthoritiesSource, authoritiesFor } from "@/data/assessing-authorities";

// "Who assesses my occupation?" Search the occupations on the Home Affairs
// lists for the 189, 190 and 491 and see the assessing authority Home
// Affairs names, with its full name and website from Home Affairs'
// "Assessing authorities" table.

// Which points-tested visas an occupation's lists open: 189 needs the MLTSSL,
// 190 the MLTSSL or STSOL, and 491 any of the three.
function visasFor(lists: string[]): string[] {
  const visas: string[] = [];
  if (lists.includes("MLTSSL")) visas.push("189");
  if (lists.includes("MLTSSL") || lists.includes("STSOL")) visas.push("190");
  visas.push("491");
  return visas;
}

export function AuthorityFinder({ occupationPages }: { occupationPages: Record<string, string> }) {
  const [code, setCode] = useState<string | null>(null);
  const selected = homeAffairsOccupations.find((occupation) => occupation.code === code);
  const assessors = selected?.authority ? authoritiesFor(selected.authority) : [];

  // Which authorities assess the most occupations on these lists.
  const leaders = useMemo(() => {
    const counts = new Map<string, number>();
    for (const occupation of homeAffairsOccupations) {
      for (const item of authoritiesFor(occupation.authority ?? "")) counts.set(item.label, (counts.get(item.label) ?? 0) + 1);
    }
    return [...counts.entries()].sort((a, b) => b[1] - a[1]).slice(0, 6);
  }, []);
  const top = leaders[0]?.[1] ?? 1;

  return (
    <section id="authorities" className="relative scroll-mt-32 py-16 sm:py-24">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Authority finder"
            title="Who assesses your occupation?"
            highlight="your occupation"
            subtitle={`Search the ${homeAffairsOccupations.length} occupations on the Home Affairs skilled lists for subclasses 189, 190 and 491 to see the assessing authority Home Affairs names for each.`}
            align="center"
          />
        </Reveal>

        <Reveal delay={80}>
          <div className="mx-auto mt-10 max-w-3xl rounded-[2rem] border border-gray-100 bg-white p-6 shadow-float sm:p-8">
            <OccupationSearch
              occupations={homeAffairsOccupations}
              value={code}
              onChange={setCode}
              badge={(occupation) => ({ text: occupation.authority ?? "Not listed", tone: "bg-violet-100 text-violet-800" })}
            />

            {selected ? (
              <div key={selected.code} className="hero-rise mt-6 space-y-4">
                <div className="rounded-2xl bg-brand-surface p-5">
                  <p className="text-[11px] font-bold uppercase tracking-wider text-gray-500">Assessed by</p>
                  {assessors.length === 0 ? (
                    <p className="mt-1 text-[15px] font-semibold text-brand-navy">Home Affairs doesn&apos;t name an authority for this occupation on the list.</p>
                  ) : (
                    <ul className="mt-2 space-y-3">
                      {assessors.map((item) => (
                        <li key={item.label} className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                          <span className="font-heading text-lg font-extrabold text-brand-navy">{item.authority?.fullName ?? item.label}</span>
                          <span className="text-sm font-semibold text-violet-700">
                            {item.label}
                            {item.note ? ` (${item.note})` : ""}
                          </span>
                          {item.authority?.url && (
                            <a href={item.authority.url} target="_blank" rel="noopener noreferrer" className="text-sm font-bold text-brand-primary hover:underline">
                              Website ↗
                            </a>
                          )}
                        </li>
                      ))}
                    </ul>
                  )}
                  {assessors.length > 1 && <p className="mt-3 text-xs leading-relaxed text-gray-500">More than one authority is listed: which one applies depends on your role or qualification, so check the notes on each authority&apos;s website.</p>}
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="rounded-2xl border border-gray-100 p-4">
                    <p className="text-[11px] font-bold uppercase tracking-wider text-gray-500">On the lists</p>
                    <p className="mt-2 flex flex-wrap gap-1.5">
                      {selected.lists.map((list) => (
                        <span key={list} className="rounded-full bg-brand-mint px-2.5 py-0.5 text-xs font-bold text-brand-primary-dark">
                          {list}
                        </span>
                      ))}
                    </p>
                  </div>
                  <div className="rounded-2xl border border-gray-100 p-4">
                    <p className="text-[11px] font-bold uppercase tracking-wider text-gray-500">Points-tested visas it can be used for</p>
                    <p className="mt-2 flex flex-wrap gap-1.5">
                      {visasFor(selected.lists).map((visa) => (
                        <span key={visa} className="rounded-full bg-brand-navy px-2.5 py-0.5 text-xs font-bold text-white">
                          {visa}
                        </span>
                      ))}
                    </p>
                    <p className="mt-2 text-xs leading-relaxed text-gray-500">The 190 and 491 also need a nomination (or, for the 491, an eligible relative&apos;s sponsorship).</p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-x-5 gap-y-2 border-t border-gray-100 pt-4 text-sm font-semibold">
                  {occupationPages[selected.code] && (
                    <Link href={`/occupations/${occupationPages[selected.code]}`} className="inline-flex items-center gap-1.5 text-brand-primary hover:underline">
                      Our {selected.title} guide <ArrowIcon />
                    </Link>
                  )}
                  <Link href="/state-nomination/assessment" className="inline-flex items-center gap-1.5 text-brand-primary hover:underline">
                    Which states could nominate you? <ArrowIcon />
                  </Link>
                  <Link href="/tools/points-calculator" className="inline-flex items-center gap-1.5 text-brand-primary hover:underline">
                    Check your points <ArrowIcon />
                  </Link>
                </div>
              </div>
            ) : (
              <div className="mt-6">
                <p className="text-[11px] font-bold uppercase tracking-wider text-gray-500">Who assesses the most occupations on these lists</p>
                <ul className="mt-3 space-y-2">
                  {leaders.map(([label, count]) => (
                    <li key={label} className="flex items-center gap-3 text-sm">
                      <span className="w-40 shrink-0 truncate font-semibold text-brand-navy sm:w-48">{label}</span>
                      <span className="h-2.5 flex-1 overflow-hidden rounded-full bg-gray-100" aria-hidden="true">
                        <span className="block h-full rounded-full bg-violet-500" style={{ width: `${(count / top) * 100}%` }} />
                      </span>
                      <span className="w-10 shrink-0 text-right font-bold text-gray-600">{count}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </Reveal>

        <p className="mx-auto mt-6 max-w-3xl text-center text-xs leading-relaxed text-gray-500">
          From the{" "}
          <a href={homeAffairsListMeta.source} target="_blank" rel="noopener noreferrer" className="font-semibold text-brand-primary hover:underline">
            Home Affairs skilled occupation list ↗
          </a>{" "}
          (checked {homeAffairsListMeta.checkedOn}) and its{" "}
          <a href={assessingAuthoritiesSource} target="_blank" rel="noopener noreferrer" className="font-semibold text-brand-primary hover:underline">
            assessing authorities table ↗
          </a>{" "}
          (checked {assessingAuthoritiesCheckedOn}). Each authority sets its own criteria, fees and timeframes, so check its website before you apply. Occupations used only for employer-sponsored visas (for example, those only on the Core Skills Occupation List) aren&apos;t in this search.
        </p>
      </Container>
    </section>
  );
}
