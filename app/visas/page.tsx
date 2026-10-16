import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/sections/PageHero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Button, ArrowIcon } from "@/components/ui/Button";
import { ConsultationCTA } from "@/components/sections/ConsultationCTA";
import { GeneralInfoNotice } from "@/components/ui/GeneralInfoNotice";
import { VisaSearch } from "@/components/visas/VisaSearch";
import { CategoryCard } from "@/components/visas/VisaCards";
import { pagesForCategory, visaCategories, visaLibraryCheckedOn, visaPages, visaSearchIndex } from "@/data/visas";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Australian Visa Library: Every Visa Explained From the Source",
  description:
    "Plain-English guides to every Australian visa, written from the Migration Act, the Regulations and Home Affairs: employer sponsored, skilled, partner and family, student, visitor, bridging, appeals and review. Checked October 2026.",
  alternates: { canonical: `${siteConfig.url}/visas` },
};

export default function VisaLibraryPage() {
  const visaCount = visaPages.filter((page) => page.kind === "visa").length;
  const guideCount = visaPages.length - visaCount;
  const index = visaSearchIndex();

  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      name: "Australian visa library",
      description: metadata.description,
      url: `${siteConfig.url}/visas`,
      dateModified: new Date(Date.parse(visaLibraryCheckedOn)).toISOString().slice(0, 10),
      hasPart: visaCategories.map((category) => ({ "@type": "WebPage", name: category.name, url: `${siteConfig.url}/visas/${category.slug}` })),
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.url },
        { "@type": "ListItem", position: 2, name: "Visas", item: `${siteConfig.url}/visas` },
      ],
    },
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }} />
      <PageHero
        eyebrow="Visa library"
        title="Every Australian visa, explained from the source"
        subtitle={`${visaCount} visas and ${guideCount} guides written from the Migration Act, the Migration Regulations and the Department of Home Affairs, with the legal basis for each rule, the current charges and what to do when things go wrong. Checked ${visaLibraryCheckedOn}.`}
      />

      {/* Search */}
      <section className="relative -mt-10 pb-6">
        <Container>
          <Reveal>
            <VisaSearch index={index} categories={visaCategories.map((category) => ({ slug: category.slug, shortName: category.shortName }))} />
          </Reveal>
          <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-gray-600">
            <span>Not sure where to start?</span>
            <Link href="/tools/visa-finder" className="font-bold text-brand-primary hover:underline">Answer three questions to find your visa →</Link>
            <Link href="/tools/points-calculator" className="font-bold text-brand-primary hover:underline">Check your points →</Link>
          </div>
        </Container>
      </section>

      {/* Categories */}
      <section className="py-14 sm:py-16">
        <Container>
          <Reveal>
            <SectionHeading eyebrow="Browse" title="Six ways into Australia" subtitle="Pick the group that matches your situation. Each category page compares its visas side by side and tells you where to start." align="center" />
          </Reveal>
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {visaCategories.map((category, index) => (
              <Reveal key={category.slug} delay={index * 60}>
                <CategoryCard category={category} pages={pagesForCategory(category.slug)} />
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* How the library is kept accurate */}
      <section className="bg-brand-surface py-16 sm:py-20">
        <Container className="grid gap-10 lg:grid-cols-[1fr_1.2fr]">
          <Reveal>
            <SectionHeading eyebrow="How it is written" title="Legislation first, then the Department's own words" subtitle="Migration rules change several times a year. Every page in this library states the date its facts were checked and links to the pages they came from." />
            <div className="mt-8 flex flex-wrap gap-3">
              <Button href="/updates" variant="outline">
                See recent rule changes
                <ArrowIcon />
              </Button>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <ul className="grid gap-4 sm:grid-cols-2">
              {[
                { title: "Primary sources only", body: "The Migration Act 1958, the Migration Regulations 1994, the legislative instruments and the Department of Home Affairs pages. No second-hand summaries." },
                { title: "Dated and cited", body: `Each page shows the date its figures were checked (currently ${visaLibraryCheckedOn}) and lists the provisions and official pages behind it.` },
                { title: "Charges from the official table", body: "Visa application charges are the 1 July 2026 figures from the Home Affairs pricing table, per applicant, with the extra charges that catch people out." },
                { title: "No promises", body: "We do not publish processing-time estimates or approval rates. Those change weekly and the Department's own tools are the only reliable source." },
              ].map((item) => (
                <li key={item.title} className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm">
                  <h3 className="font-heading text-lg font-bold text-brand-navy">{item.title}</h3>
                  <p className="mt-2 text-[15px] leading-relaxed text-gray-600">{item.body}</p>
                </li>
              ))}
            </ul>
          </Reveal>
        </Container>
      </section>

      {/* All pages, grouped, for crawlers and for people who like lists */}
      <section className="py-16 sm:py-20">
        <Container>
          <Reveal>
            <SectionHeading eyebrow="Index" title="All pages in the library" align="center" />
          </Reveal>
          <div className="mt-10 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {visaCategories.map((category) => {
              const pages = pagesForCategory(category.slug);
              return (
                <Reveal key={category.slug}>
                  <h3 className="font-heading text-lg font-bold text-brand-navy">
                    <Link href={`/visas/${category.slug}`} className="hover:text-brand-primary">{category.name}</Link>
                  </h3>
                  <ul className="mt-3 space-y-1.5 text-sm">
                    {pages.map((page) => (
                      <li key={page.slug}>
                        <Link href={`/visas/${page.category}/${page.slug}`} className="text-gray-700 hover:text-brand-primary hover:underline">
                          {page.subclass ? `${page.name} (subclass ${page.subclass})` : page.name}
                        </Link>
                      </li>
                    ))}
                    {pages.length === 0 && <li className="text-gray-500">Coming soon.</li>}
                  </ul>
                </Reveal>
              );
            })}
          </div>
          <GeneralInfoNotice className="mt-10" />
        </Container>
      </section>

      <ConsultationCTA
        title="Know which visa fits, but not whether you qualify?"
        subtitle="A consultation checks your facts against the criteria on these pages and gives you a written plan."
      />
    </>
  );
}
