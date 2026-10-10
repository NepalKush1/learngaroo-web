import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/sections/PageHero";
import { ConsultationCTA } from "@/components/sections/ConsultationCTA";

export const metadata: Metadata = {
  title: "News & Updates",
  description:
    "The latest news and updates from Learniiz on Australian visa and migration pathways.",
};

export default function NewsPage() {
  return (
    <>
      <PageHero
        eyebrow="News & Updates"
        title="Latest Australian Visa & Migration News"
        subtitle="Migration rule changes, visa processing updates and Learniiz news — coming soon."
      />

      <section className="py-20">
        <Container>
          <div className="mx-auto max-w-xl rounded-2xl border border-dashed border-gray-300 bg-brand-surface p-10 text-center">
            <p className="font-heading text-xl font-semibold text-brand-navy">
              Articles are on the way
            </p>
            <p className="mt-3 text-gray-600">
              We&apos;re building out this space to share visa and migration
              updates, policy changes and guidance. Check back soon, or book
              a consultation if you need advice right now.
            </p>
          </div>
        </Container>
      </section>

      <ConsultationCTA />
    </>
  );
}
