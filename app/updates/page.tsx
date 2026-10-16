import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/sections/PageHero";
import { ConsultationCTA } from "@/components/sections/ConsultationCTA";
import { GeneralInfoNotice } from "@/components/ui/GeneralInfoNotice";
import { Reveal } from "@/components/ui/Reveal";
import { formatUpdateDate, policyUpdates, statusLabels } from "@/data/updates";
import { agent } from "@/data/agent";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Australian Visa Policy Updates & Rule Changes",
  description:
    "Dated summaries of Australian migration rule changes, visa fee increases and processing updates, with the subclasses affected and links to the official source. Reviewed by a Registered Migration Agent.",
};

export default function UpdatesPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: policyUpdates.map((update, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "NewsArticle",
        headline: update.title,
        datePublished: update.date,
        url: `${siteConfig.url}/updates#${update.slug}`,
        author: { "@type": "Person", name: agent.name },
        publisher: { "@type": "Organization", name: siteConfig.fullName },
      },
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }} />
      <PageHero
        eyebrow="Policy updates"
        title="What changed, when it applies, and who it affects"
        subtitle={`Short, dated summaries of migration rule changes with a link to the official source. Reviewed by ${agent.name}, MARN ${agent.marn}.`}
      />
      <section className="py-16 sm:py-20">
        <Container className="max-w-4xl">
          <ol className="space-y-6">
            {policyUpdates.map((update, index) => {
              const status = statusLabels[update.status];
              return (
                <Reveal key={update.slug} as="li" delay={index * 60}>
                  <article id={update.slug} className="scroll-mt-28 rounded-3xl border border-gray-100 bg-white p-6 shadow-sm sm:p-8">
                    <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm">
                      <time dateTime={update.date} className="font-bold text-brand-navy">{formatUpdateDate(update.date)}</time>
                      <span className={`rounded-full px-2.5 py-0.5 text-xs font-bold ring-1 ${status.className}`}>{status.label}</span>
                      <span className="text-gray-500">{update.effective}</span>
                    </div>
                    <h2 className="font-heading mt-3 text-xl font-bold text-brand-navy sm:text-2xl">
                      <a href={`#${update.slug}`} className="hover:underline">{update.title}</a>
                    </h2>
                    <p className="mt-3 text-[15px] leading-relaxed text-gray-700">{update.summary}</p>
                    <ul className="mt-4 space-y-1.5">
                      {update.points.map((point) => (
                        <li key={point} className="flex gap-3 text-[15px] leading-relaxed text-gray-600">
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-primary" />
                          {point}
                        </li>
                      ))}
                    </ul>
                    <div className="mt-5 flex flex-wrap items-center gap-2">
                      <span className="text-xs font-bold uppercase tracking-wider text-gray-500">Affects</span>
                      {update.subclasses.map((subclass) => (
                        <span key={subclass} className="rounded-full bg-brand-mint px-2.5 py-0.5 text-xs font-bold text-brand-primary-dark ring-1 ring-brand-primary/10">
                          {subclass === "ART" ? "ART" : `Subclass ${subclass}`}
                        </span>
                      ))}
                    </div>
                    <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2 border-t border-gray-100 pt-4 text-sm">
                      <a href={update.source.url} target="_blank" rel="noopener noreferrer" className="font-bold text-brand-primary hover:underline">
                        Source: {update.source.label} ↗
                      </a>
                      {update.related?.map((link) => (
                        <Link key={link.href} href={link.href} className="font-semibold text-brand-navy/80 hover:underline">
                          {link.label} →
                        </Link>
                      ))}
                    </div>
                  </article>
                </Reveal>
              );
            })}
          </ol>
          <GeneralInfoNotice className="mt-10" />
        </Container>
      </section>
      <ConsultationCTA
        title="Not sure how a change affects you?"
        subtitle="Rule changes rarely apply to everyone the same way. Book a consultation and we will tell you what it means for your application."
      />
    </>
  );
}
