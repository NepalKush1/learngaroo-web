import Link from "next/link";
import { ArrowIcon } from "@/components/ui/Button";
import { DetailTabs, DocumentChecklist, type DetailTab } from "@/components/visas/explainer/DetailTabs";
import { processingTimesUrl, type VisaGuide } from "@/data/visa-guides";

// The detail behind a service page, one topic at a time: the main
// requirements, a document checklist to tick off, where each visa leads, and
// the pages the facts were checked against.

function Check() {
  return (
    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-mint text-brand-primary" aria-hidden="true">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={3} className="h-3 w-3">
        <path strokeLinecap="round" strokeLinejoin="round" d="m5 12.5 4.5 4.5L19 7.5" />
      </svg>
    </span>
  );
}

export interface CoveredPage {
  title: string;
  href: string;
  factsAsAt: string;
}

export function ServiceDetail({ guide, pages }: { guide: VisaGuide; pages: CoveredPage[] }) {
  const documentCount = guide.documents.reduce((sum, group) => sum + group.items.length, 0);
  const tabs: DetailTab[] = [
    {
      id: "requirements",
      label: "Requirements",
      count: guide.eligibility.length,
      content: (
        <div className="mx-auto max-w-4xl">
          <p className="mb-5 text-center text-sm text-gray-600">The main requirements. Each one needs evidence, not just a tick.</p>
          <ul className="grid gap-3 md:grid-cols-2">
            {guide.eligibility.map((item) => (
              <li key={item} className="flex gap-3 rounded-2xl border border-gray-100 bg-white p-4 text-[15px] leading-relaxed text-gray-700 shadow-sm">
                <Check />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      ),
    },
    {
      id: "documents",
      label: "Documents",
      count: documentCount,
      content: (
        <div>
          <p className="mb-5 text-center text-sm text-gray-600">A typical list: tick things off as you gather them (nothing is saved). The exact documents depend on your passport, history and who you include.</p>
          <DocumentChecklist groups={guide.documents} />
        </div>
      ),
    },
    {
      id: "next",
      label: "What comes next",
      count: guide.pathways.length,
      content: (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {guide.pathways.map((pathway) => {
            const inner = (
              <>
                <span className="bg-gradient-brand block h-1.5 w-12 rounded-full" aria-hidden="true" />
                <span className="font-heading mt-4 block text-lg font-bold text-brand-navy">{pathway.title}</span>
                <span className="mt-2 block flex-1 text-[15px] leading-relaxed text-gray-600">{pathway.description}</span>
                {pathway.href && (
                  <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-bold text-brand-primary">
                    Learn more <ArrowIcon />
                  </span>
                )}
              </>
            );
            const className = "flex h-full flex-col rounded-3xl border border-gray-100 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-float";
            return pathway.href ? (
              <Link key={pathway.title} href={pathway.href} className={className}>
                {inner}
              </Link>
            ) : (
              <div key={pathway.title} className={className}>
                {inner}
              </div>
            );
          })}
        </div>
      ),
    },
    {
      id: "sources",
      label: "Sources",
      count: pages.length + 1,
      content: (
        <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-2">
          <div>
            <h4 className="font-heading text-base font-bold text-brand-navy">Official source, checked {guide.factsAsAt}</h4>
            <a
              href={guide.sourceUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 block rounded-xl border border-gray-100 bg-white px-4 py-3 text-sm font-semibold text-brand-navy hover:border-brand-primary/30 hover:text-brand-primary"
            >
              {guide.sourceLabel} ↗
            </a>
            <a
              href={processingTimesUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 block rounded-xl border border-gray-100 bg-white px-4 py-3 text-sm font-semibold text-brand-navy hover:border-brand-primary/30 hover:text-brand-primary"
            >
              Home Affairs processing times ↗
            </a>
            <p className="mt-4 text-xs leading-relaxed text-gray-500">
              Every figure on this page comes from the visa guides listed here or from an official page, and each guide was checked against Home Affairs, the legislation or the Tribunal on the date shown. Fees usually change on 1 July.
            </p>
          </div>
          <div>
            <h4 className="font-heading text-base font-bold text-brand-navy">Our visa guides behind this page</h4>
            <ul className="mt-3 space-y-2">
              {pages.map((page) => (
                <li key={page.href}>
                  <Link
                    href={page.href}
                    className="flex items-center justify-between gap-3 rounded-xl border border-gray-100 bg-white px-4 py-3 text-sm font-semibold text-brand-navy hover:border-brand-primary/30 hover:text-brand-primary"
                  >
                    <span>{page.title}</span>
                    <span className="shrink-0 text-xs font-normal text-gray-500">checked {page.factsAsAt}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ),
    },
  ];

  return (
    <DetailTabs
      tabs={tabs}
      label="Detail topics"
      eyebrow="The detail"
      title="Requirements, documents and next steps"
      highlight="documents"
      subtitle={`The main requirements, a document checklist you can tick off, where each visa leads and our sources. Checked ${guide.factsAsAt}.`}
    />
  );
}
