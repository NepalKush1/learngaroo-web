import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { ArrowIcon } from "@/components/ui/Button";
import { VisaCard } from "@/components/visas/VisaCards";
import { visaPages, visasForService, type VisaPage } from "@/data/visas";

// On a /services page: the library pages that go deeper on the visas the
// service covers. `slugs` (the service explainer's pages) picks them in
// order; otherwise they come from the service's categories.
export function RelatedVisaGuides({ serviceSlug, slugs }: { serviceSlug: string; slugs?: string[] }) {
  const pages = slugs
    ? slugs
        .map((slug) => visaPages.find((page) => page.slug === slug))
        .filter((page): page is VisaPage => Boolean(page))
        .slice(0, 6)
    : visasForService(serviceSlug);
  if (pages.length === 0) return null;
  const category = pages[0].category;
  return (
    <section className="bg-brand-surface py-16 sm:py-20">
      <Container>
        <Reveal>
          <div className="flex flex-wrap items-end justify-between gap-4">
            <SectionHeading eyebrow="Go deeper" title="Visa guides from the legislation" subtitle="Criteria, documents, conditions, costs and the legal basis for each visa this service covers." />
            <Link href={`/visas/${category}`} className="inline-flex items-center gap-1.5 text-sm font-bold text-brand-primary hover:underline">
              All guides in this category <ArrowIcon />
            </Link>
          </div>
        </Reveal>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {pages.map((page, index) => (
            <Reveal key={page.slug} delay={index * 50}>
              <VisaCard page={page} />
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
