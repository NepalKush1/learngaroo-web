import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ConsultationCTA } from "@/components/sections/ConsultationCTA";
import { VisaHero } from "@/components/visas/VisaHero";
import {
  KeyFactsGrid,
  VisaAlertBanner,
  VisaSectionNav,
  VisaStreams,
  VisaEligibility,
  VisaDocuments,
  VisaSteps,
  VisaConditions,
  VisaCosts,
  VisaAfterGrant,
  VisaPathways,
  VisaRisks,
  VisaFaqs,
  VisaSources,
  VisaRelated,
  sectionsFor,
} from "@/components/visas/VisaSections";
import { getVisaCategory, getVisaPage, toIsoDate, visaHref, visaPages } from "@/data/visas";
import { getExplainer } from "@/data/visas/explainers";
import { ExplainerPage } from "@/components/visas/explainer/ExplainerPage";
import { categoryAccent } from "@/lib/accents";
import { siteConfig } from "@/lib/site-config";

export async function generateStaticParams() {
  return visaPages.map((page) => ({ category: page.category, slug: page.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ category: string; slug: string }> }): Promise<Metadata> {
  const { category, slug } = await params;
  const page = getVisaPage(category, slug);
  if (!page) return {};
  const url = `${siteConfig.url}${visaHref(page)}`;
  return {
    title: page.seoTitle,
    description: page.seoDescription,
    keywords: page.keywords,
    alternates: { canonical: url },
    openGraph: { title: page.seoTitle, description: page.seoDescription, url, type: "article", modifiedTime: toIsoDate(page.factsAsAt) },
  };
}

// The tool most useful for this page, shown in the hero.
function toolFor(page: { category: string; slug: string; related: { label: string; href: string }[] }): { href: string; label: string } | undefined {
  const tool = page.related.find((item) => item.href.startsWith("/tools/"));
  if (tool) return { href: tool.href, label: tool.label };
  if (page.category === "skilled") return { href: "/tools/points-calculator", label: "Check your points" };
  if (page.category === "appeals-and-review") return undefined;
  return { href: "/tools/visa-finder", label: "Find your visa" };
}

export default async function VisaPage({ params }: { params: Promise<{ category: string; slug: string }> }) {
  const { category: categorySlug, slug } = await params;
  const page = getVisaPage(categorySlug, slug);
  const category = getVisaCategory(categorySlug);
  if (!page || !category) notFound();

  const accent = categoryAccent(category.slug);
  const sections = sectionsFor(page);
  const url = `${siteConfig.url}${visaHref(page)}`;
  const homeAffairsSource = page.sources.find((source) => source.url.includes("homeaffairs.gov.au")) ?? page.sources[0];

  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.url },
        { "@type": "ListItem", position: 2, name: "Visas", item: `${siteConfig.url}/visas` },
        { "@type": "ListItem", position: 3, name: category.shortName, item: `${siteConfig.url}/visas/${category.slug}` },
        { "@type": "ListItem", position: 4, name: page.title, item: url },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: page.title,
      description: page.seoDescription,
      url,
      mainEntityOfPage: url,
      dateModified: toIsoDate(page.factsAsAt),
      inLanguage: "en-AU",
      keywords: page.keywords.join(", "),
      author: { "@type": "Organization", name: siteConfig.fullName, url: siteConfig.url },
      publisher: { "@type": "Organization", name: siteConfig.fullName, url: siteConfig.url },
      about: page.subclass ? { "@type": "Thing", name: `Australian visa subclass ${page.subclass}` } : undefined,
      citation: page.legislation.map((item) => ({ "@type": "Legislation", name: item.label, url: item.url })),
    },
    ...(page.faqs.length > 0
      ? [{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: page.faqs.map((faq) => ({ "@type": "Question", name: faq.question, acceptedAnswer: { "@type": "Answer", text: faq.answer } })),
        }]
      : []),
  ];

  const explainer = getExplainer(page.slug);
  if (explainer) {
    return (
      <>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }} />
        <ExplainerPage page={page} category={category} explainer={explainer} />
      </>
    );
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }} />
      <VisaHero page={page} category={category} tool={toolFor(page)} />
      <KeyFactsGrid page={page} accent={accent} />
      <VisaSectionNav sections={sections} officialUrl={homeAffairsSource?.url} />
      {page.alert && <VisaAlertBanner alert={page.alert} />}
      <VisaStreams page={page} accent={accent} />
      <VisaEligibility page={page} accent={accent} />
      <VisaDocuments page={page} accent={accent} />
      <VisaSteps page={page} />
      <VisaConditions page={page} />
      <VisaCosts page={page} />
      <VisaAfterGrant page={page} accent={accent} />
      <VisaPathways page={page} accent={accent} />
      <VisaRisks page={page} />
      <VisaFaqs page={page} />
      <VisaSources page={page} />
      <VisaRelated page={page} />
      <ConsultationCTA
        title={page.kind === "visa" ? `Thinking about the ${page.name}?` : "Need help with this?"}
        subtitle="We check your facts against these criteria, tell you honestly where you stand, and prepare the application or response with you."
      />
    </>
  );
}
