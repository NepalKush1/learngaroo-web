import type { ReactNode } from "react";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/sections/PageHero";
import { legal } from "@/data/legal";

// Shared layout for long-form policy pages (terms, privacy).
export function LegalPage({
  title,
  subtitle,
  children,
}: {
  title: string;
  subtitle: string;
  children: ReactNode;
}) {
  return (
    <>
      <PageHero eyebrow="Legal" title={title} subtitle={subtitle} />
      <section className="py-16 sm:py-20">
        <Container>
          <article className="mx-auto max-w-3xl space-y-10 text-[15px] leading-relaxed text-gray-700 [&_a]:font-semibold [&_a]:text-brand-primary [&_a]:underline [&_h2]:font-heading [&_h2]:text-xl [&_h2]:font-bold [&_h2]:text-brand-navy [&_li]:mt-1.5 [&_p]:mt-3 [&_ul]:mt-3 [&_ul]:list-disc [&_ul]:pl-5">
            <p className="text-sm text-gray-500">Last updated: {legal.lastUpdated}</p>
            {children}
          </article>
        </Container>
      </section>
    </>
  );
}
