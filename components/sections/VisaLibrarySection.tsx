import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Button, ArrowIcon } from "@/components/ui/Button";
import { CategoryCard } from "@/components/visas/VisaCards";
import { VisaSearch } from "@/components/visas/VisaSearch";
import { pagesForCategory, visaCategories, visaLibraryCheckedOn, visaPages, visaSearchIndex } from "@/data/visas";

// Homepage entry to the visa library: a search box and the six categories.
export function VisaLibrarySection() {
  const visaCount = visaPages.filter((page) => page.kind === "visa").length;
  return (
    <section className="bg-brand-surface py-20 sm:py-24">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Visa library"
            title="Every visa explained from the legislation"
            highlight="from the legislation"
            subtitle={`${visaCount} visas and the rules around them, written from the Migration Act, the Regulations and Home Affairs, dated and cited. Checked ${visaLibraryCheckedOn}.`}
            align="center"
          />
        </Reveal>
        <Reveal delay={80}>
          <div className="mx-auto mt-10 max-w-3xl">
            <VisaSearch index={visaSearchIndex()} categories={visaCategories.map((category) => ({ slug: category.slug, shortName: category.shortName }))} compact />
          </div>
        </Reveal>
        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {visaCategories.map((category, index) => (
            <Reveal key={category.slug} delay={index * 60}>
              <CategoryCard category={category} pages={pagesForCategory(category.slug)} compact />
            </Reveal>
          ))}
        </div>
        <Reveal delay={120}>
          <div className="mt-10 flex justify-center">
            <Button href="/visas" variant="outline">
              Browse the whole library
              <ArrowIcon />
            </Button>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
