import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/sections/PageHero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Button, ArrowIcon } from "@/components/ui/Button";
import { ConsultationCTA } from "@/components/sections/ConsultationCTA";
import { FaqItem } from "@/components/sections/FaqItem";
import { GeneralInfoNotice } from "@/components/ui/GeneralInfoNotice";
import { VisaCard, VisaCompareTable, CategoryIcon } from "@/components/visas/VisaCards";
import { getVisaCategory, pagesForCategory, visaCategories, visaHref, visaLibraryCheckedOn } from "@/data/visas";
import { categoryAccent } from "@/lib/accents";
import { siteConfig } from "@/lib/site-config";

export async function generateStaticParams() {
  return visaCategories.map((category) => ({ category: category.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ category: string }> }): Promise<Metadata> {
  const { category: slug } = await params;
  const category = getVisaCategory(slug);
  if (!category) return {};
  return {
    title: category.seoTitle,
    description: category.seoDescription,
    alternates: { canonical: `${siteConfig.url}/visas/${category.slug}` },
    openGraph: { title: category.seoTitle, description: category.seoDescription, url: `${siteConfig.url}/visas/${category.slug}`, type: "website" },
  };
}

export default async function VisaCategoryPage({ params }: { params: Promise<{ category: string }> }) {
  const { category: slug } = await params;
  const category = getVisaCategory(slug);
  if (!category) notFound();

  const pages = pagesForCategory(category.slug);
  const visas = pages.filter((page) => page.kind === "visa");
  const guides = pages.filter((page) => page.kind === "guide");
  const accent = categoryAccent(category.slug);
  const others = visaCategories.filter((item) => item.slug !== category.slug);

  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.url },
        { "@type": "ListItem", position: 2, name: "Visas", item: `${siteConfig.url}/visas` },
        { "@type": "ListItem", position: 3, name: category.shortName, item: `${siteConfig.url}/visas/${category.slug}` },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "ItemList",
      name: category.name,
      itemListElement: pages.map((page, index) => ({ "@type": "ListItem", position: index + 1, name: page.title, url: `${siteConfig.url}${visaHref(page)}` })),
    },
    ...(category.faqs.length > 0
      ? [{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: category.faqs.map((faq) => ({ "@type": "Question", name: faq.question, acceptedAnswer: { "@type": "Answer", text: faq.answer } })),
        }]
      : []),
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }} />
      <PageHero eyebrow={`Visa library · ${category.shortName}`} title={category.name} subtitle={category.description} />

      {/* Start here */}
      <section className="relative -mt-10 pb-6">
        <Container>
          <Reveal>
            <div className="rounded-[2rem] border border-gray-100 bg-white p-6 shadow-card sm:p-8">
              <div className="flex items-center gap-3">
                <span className={`flex h-11 w-11 items-center justify-center rounded-2xl text-white ${accent.tile}`}>
                  <CategoryIcon path={category.icon} className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.16em] text-brand-primary">Start here</p>
                  <h2 className="font-heading text-xl font-bold text-brand-navy">Which page answers your situation?</h2>
                </div>
              </div>
              <ul className="mt-6 grid gap-3 md:grid-cols-2">
                {category.situations.map((item) => (
                  <li key={item.href + item.situation}>
                    <Link href={item.href} className="group flex h-full items-start gap-3 rounded-2xl border border-gray-100 bg-brand-surface/70 p-4 transition-all hover:-translate-y-0.5 hover:border-brand-primary/30 hover:bg-white hover:shadow-sm">
                      <span className={`mt-1 h-2 w-2 shrink-0 rounded-full ${accent.tile}`} aria-hidden="true" />
                      <span>
                        <span className="block text-[15px] text-gray-700">{item.situation}</span>
                        <span className="mt-1 inline-flex items-center gap-1 text-sm font-bold text-brand-primary">{item.label} <ArrowIcon /></span>
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* Compare */}
      {visas.length > 1 && (
        <section className="py-14 sm:py-16">
          <Container>
            <Reveal>
              <SectionHeading eyebrow="Compare" title={`${category.shortName} side by side`} subtitle={`Type, government charge, stay and the route to permanent residence for each visa, as at ${visaLibraryCheckedOn}. Open a page for the full criteria.`} align="center" />
            </Reveal>
            <Reveal delay={100}>
              <div className="mt-10">
                <VisaCompareTable pages={pages} />
              </div>
            </Reveal>
          </Container>
        </section>
      )}

      {/* Visa pages */}
      <section className="bg-brand-surface py-16 sm:py-20">
        <Container>
          <Reveal>
            <SectionHeading eyebrow={visas.length > 0 ? "Visas" : "Guides"} title={visas.length > 0 ? `${visas.length} ${visas.length === 1 ? "visa" : "visas"} in this group` : `${guides.length} guides`} align="center" />
          </Reveal>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {(visas.length > 0 ? visas : guides).map((page, index) => (
              <Reveal key={page.slug} delay={index * 50}>
                <VisaCard page={page} />
              </Reveal>
            ))}
          </div>
          {pages.length === 0 && <p className="mt-8 text-center text-gray-600">Pages for this category are being written. Check back soon or book a consultation.</p>}
          {visas.length > 0 && guides.length > 0 && (
            <>
              <Reveal>
                <div className="mt-16">
                  <SectionHeading eyebrow="Guides" title="Rules that cut across these visas" align="center" />
                </div>
              </Reveal>
              <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {guides.map((page, index) => (
                  <Reveal key={page.slug} delay={index * 50}>
                    <VisaCard page={page} />
                  </Reveal>
                ))}
              </div>
            </>
          )}
        </Container>
      </section>

      {/* FAQ */}
      {category.faqs.length > 0 && (
        <section className="py-16 sm:py-20">
          <Container className="grid gap-12 lg:grid-cols-[1fr_1.5fr]">
            <Reveal>
              <SectionHeading eyebrow="FAQ" title={`Common questions about ${category.shortName.toLowerCase()}`} subtitle="General answers from the official rules. Book a consultation for advice on your own case." />
              <div className="mt-8 flex flex-wrap gap-3">
                <Button href="/bookings">
                  Book a consultation
                  <ArrowIcon />
                </Button>
                <Button href="/tools/visa-finder" variant="outline">
                  Find my visa
                </Button>
              </div>
              <GeneralInfoNotice className="mt-8 max-w-sm" />
            </Reveal>
            <Reveal delay={100}>
              <div className="space-y-3">
                {category.faqs.map((faq) => (
                  <FaqItem key={faq.question} question={faq.question} answer={faq.answer} />
                ))}
              </div>
            </Reveal>
          </Container>
        </section>
      )}

      {/* Other categories */}
      <section className="border-t border-gray-100 py-12">
        <Container>
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-brand-primary">Other categories</p>
          <ul className="mt-4 flex flex-wrap gap-2">
            {others.map((item) => (
              <li key={item.slug}>
                <Link href={`/visas/${item.slug}`} className="inline-flex items-center gap-1.5 rounded-full border border-brand-navy/15 bg-white px-4 py-2 text-sm font-semibold text-brand-navy transition-colors hover:border-brand-primary/40 hover:bg-brand-mint">
                  {item.shortName}
                  <ArrowIcon />
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <ConsultationCTA
        title={`Not sure which ${category.shortName.toLowerCase().replace(/ visas?$/, "")} visa fits?`}
        subtitle="We check your facts against the criteria on these pages and tell you honestly which option is realistic."
      />
    </>
  );
}
