import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { faqs } from "@/data/faqs";
import { FaqItem } from "./FaqItem";
import { Button, ArrowIcon } from "@/components/ui/Button";

export function FaqSection() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };

  return (
    <section className="bg-brand-surface py-16 sm:py-24">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
      />
      <Container className="grid gap-12 lg:grid-cols-[1fr_1.5fr]">
        <Reveal>
          <SectionHeading
            eyebrow="FAQ"
            title="Questions we hear every week"
            highlight="every week"
            subtitle="Straight answers to the most common questions about visas and consultations."
          />
          <div className="mt-8">
            <Button href="/faq" variant="outline">
              See all questions
              <ArrowIcon />
            </Button>
          </div>
        </Reveal>
        <Reveal delay={100}>
          <div className="space-y-3">
            {faqs.map((faq) => (
              <FaqItem key={faq.question} question={faq.question} answer={faq.answer} />
            ))}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
