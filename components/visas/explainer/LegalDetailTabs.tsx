"use client";

import type { ReactNode } from "react";
import Link from "next/link";
import type { VisaPage } from "@/data/visas";
import { DetailTabs, DocumentChecklist } from "./DetailTabs";

// The full legal detail behind the explainer, one topic at a time. Every
// panel is rendered (inactive ones are hidden), so search engines and
// assistants still read the whole page.

function Check() {
  return (
    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-mint text-brand-primary" aria-hidden="true">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={3} className="h-3 w-3">
        <path strokeLinecap="round" strokeLinejoin="round" d="m5 12.5 4.5 4.5L19 7.5" />
      </svg>
    </span>
  );
}

export function LegalDetailTabs({ page }: { page: VisaPage }) {
  const tabs: { id: string; label: string; count: number; content: ReactNode }[] = [];

  if (page.streams && page.streams.length > 0) {
    tabs.push({
      id: "streams",
      label: "Streams",
      count: page.streams.length,
      content: (
        <div className="grid gap-4 md:grid-cols-3">
          {page.streams.map((stream) => (
            <div key={stream.name} className="rounded-2xl border border-gray-100 bg-white p-5">
              <h4 className="font-heading text-lg font-bold text-brand-navy">{stream.name}</h4>
              <p className="mt-2 text-sm leading-relaxed text-gray-700">{stream.summary}</p>
              <p className="mt-2 text-sm leading-relaxed text-gray-600">
                <span className="font-bold text-brand-navy">For:</span> {stream.forWhom}
              </p>
              {stream.prPathway && (
                <p className="mt-2 text-sm leading-relaxed text-gray-600">
                  <span className="font-bold text-brand-navy">Pathway to PR:</span> {stream.prPathway}
                </p>
              )}
            </div>
          ))}
        </div>
      ),
    });
  }

  tabs.push({
    id: "eligibility",
    label: "Eligibility",
    count: page.eligibility.length,
    content: (
      <ol className="grid gap-3 md:grid-cols-2">
        {page.eligibility.map((criterion, index) => (
          <li key={criterion.title} className="rounded-2xl border border-gray-100 bg-white p-5">
            <div className="flex items-start gap-3">
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-brand-primary text-xs font-extrabold text-white">{index + 1}</span>
              <div>
                <h4 className="font-heading text-base font-bold text-brand-navy">{criterion.title}</h4>
                <p className="mt-1.5 text-sm leading-relaxed text-gray-700">{criterion.detail}</p>
                {criterion.legal && <p className="mt-2 text-xs font-semibold text-gray-500">Legal basis: {criterion.legal}</p>}
              </div>
            </div>
          </li>
        ))}
      </ol>
    ),
  });

  if (page.documents.length > 0) {
    tabs.push({
      id: "documents",
      label: "Documents",
      count: page.documents.reduce((sum, group) => sum + group.items.length, 0),
      content: <DocumentChecklist groups={page.documents} />,
    });
  }

  if (page.conditions && page.conditions.length > 0) {
    tabs.push({
      id: "conditions",
      label: "Conditions",
      count: page.conditions.length,
      content: (
        <div className="overflow-hidden rounded-2xl border border-gray-100 bg-white">
          <table className="w-full text-left text-sm">
            <tbody>
              {page.conditions.map((condition) => (
                <tr key={condition.code} className="border-b border-gray-100 last:border-0">
                  <th scope="row" className="whitespace-nowrap px-5 py-4 align-top font-heading text-base font-extrabold text-brand-navy">
                    {condition.code}
                  </th>
                  <td className="px-5 py-4 leading-relaxed text-gray-700">{condition.meaning}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ),
    });
  }

  if (page.costs.length > 0) {
    tabs.push({
      id: "costs",
      label: "Cost table",
      count: page.costs.length,
      content: (
        <div className="overflow-hidden rounded-2xl border border-gray-100 bg-white">
          <table className="w-full text-left text-sm">
            <tbody>
              {page.costs.map((cost) => (
                <tr key={cost.item} className="border-b border-gray-100 last:border-0">
                  <td className="px-5 py-4 align-top">
                    <span className="font-semibold text-brand-navy">{cost.item}</span>
                    {cost.note && <span className="mt-1 block text-xs leading-relaxed text-gray-500">{cost.note}</span>}
                  </td>
                  <td className="whitespace-nowrap px-5 py-4 align-top font-heading font-extrabold text-brand-navy">{cost.amount}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ),
    });
  }

  if (page.afterGrant && page.afterGrant.length > 0) {
    tabs.push({
      id: "after",
      label: "After grant",
      count: page.afterGrant.length,
      content: (
        <ul className="grid gap-3 md:grid-cols-2">
          {page.afterGrant.map((item) => (
            <li key={item} className="flex gap-3 rounded-2xl border border-gray-100 bg-white p-4 text-sm leading-relaxed text-gray-700">
              <Check />
              {item}
            </li>
          ))}
        </ul>
      ),
    });
  }

  if (page.pathways.length > 0) {
    tabs.push({
      id: "pathways",
      label: "Pathways",
      count: page.pathways.length,
      content: (
        <div className="grid gap-4 md:grid-cols-2">
          {page.pathways.map((pathway) => {
            const body = (
              <>
                <h4 className="font-heading text-base font-bold text-brand-navy">{pathway.title}</h4>
                <p className="mt-1.5 text-sm leading-relaxed text-gray-600">{pathway.description}</p>
              </>
            );
            return pathway.href ? (
              <Link key={pathway.title} href={pathway.href} className="block rounded-2xl border border-gray-100 bg-white p-5 transition-all hover:-translate-y-0.5 hover:shadow-float">
                {body}
                <span className="mt-3 inline-block text-sm font-bold text-brand-primary">Read more →</span>
              </Link>
            ) : (
              <div key={pathway.title} className="rounded-2xl border border-gray-100 bg-white p-5">
                {body}
              </div>
            );
          })}
        </div>
      ),
    });
  }

  if (page.risks && page.risks.length > 0) {
    tabs.push({
      id: "risks",
      label: "Refusal risks",
      count: page.risks.length,
      content: (
        <ul className="grid gap-3 md:grid-cols-2">
          {page.risks.map((risk) => (
            <li key={risk} className="flex gap-3 rounded-2xl border border-rose-100 bg-white p-4 text-sm leading-relaxed text-gray-700">
              <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-rose-100 text-xs font-extrabold text-rose-700" aria-hidden="true">
                !
              </span>
              {risk}
            </li>
          ))}
        </ul>
      ),
    });
  }

  tabs.push({
    id: "law",
    label: "Law and sources",
    count: page.legislation.length + page.sources.length,
    content: (
      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <h4 className="font-heading text-base font-bold text-brand-navy">Legislation and instruments</h4>
          <ul className="mt-3 space-y-2">
            {page.legislation.map((item) => (
              <li key={`${item.label}-${item.url}`}>
                <a href={item.url} target="_blank" rel="noopener noreferrer" className="flex gap-2 rounded-xl border border-gray-100 bg-white px-4 py-3 text-sm font-semibold text-brand-navy hover:border-brand-primary/30 hover:text-brand-primary">
                  <span className="text-brand-primary" aria-hidden="true">§</span>
                  <span>{item.label} ↗</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="font-heading text-base font-bold text-brand-navy">Official pages checked on {page.factsAsAt}</h4>
          <ul className="mt-3 space-y-2">
            {page.sources.map((source) => (
              <li key={`${source.label}-${source.url}`}>
                <a href={source.url} target="_blank" rel="noopener noreferrer" className="block rounded-xl border border-gray-100 bg-white px-4 py-3 text-sm font-semibold text-brand-navy hover:border-brand-primary/30 hover:text-brand-primary">
                  {source.label} ↗
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    ),
  });

  return (
    <DetailTabs
      tabs={tabs}
      label="Legal detail topics"
      eyebrow="Full legal detail"
      title="The rules, in the Department's terms"
      highlight="Department's terms"
      subtitle={`Everything above, with the legal basis for each rule. Choose a topic. Checked ${page.factsAsAt}.`}
    />
  );
}
