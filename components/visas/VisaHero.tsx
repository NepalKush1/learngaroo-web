import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/SectionHeading";
import { Button, ArrowIcon } from "@/components/ui/Button";
import type { VisaCategory, VisaPage } from "@/data/visas";
import { siteConfig } from "@/lib/site-config";

// Hero for a visa library page: breadcrumb, subclass badge, direct-answer
// intro, tag chips and the two actions people take next.

export function VisaHero({ page, category, tool }: { page: VisaPage; category: VisaCategory; tool?: { href: string; label: string } }) {
  return (
    <section className="relative overflow-hidden bg-brand-navy py-16 text-white sm:py-20">
      <div className="bg-dots pointer-events-none absolute inset-0 opacity-30 invert" aria-hidden="true" />
      <div className="hero-blob pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full bg-brand-green/25 blur-3xl" aria-hidden="true" />
      <div className="hero-blob pointer-events-none absolute -bottom-32 left-1/3 h-80 w-80 rounded-full bg-brand-blue/20 blur-3xl" aria-hidden="true" />
      <Container className="relative">
        <nav aria-label="Breadcrumb" className="text-sm text-white/60">
          <ol className="flex flex-wrap items-center gap-1.5">
            <li><Link href="/visas" className="hover:text-white">Visas</Link></li>
            <li aria-hidden="true">/</li>
            <li><Link href={`/visas/${category.slug}`} className="hover:text-white">{category.shortName}</Link></li>
            <li aria-hidden="true">/</li>
            <li className="text-white/80">{page.name}</li>
          </ol>
        </nav>
        <div className="mt-6 flex flex-wrap items-center gap-3">
          {page.subclass && (
            <span className="rounded-full bg-white/10 px-3.5 py-1.5 text-xs font-bold uppercase tracking-[0.16em] text-brand-green-light ring-1 ring-white/15">
              Subclass {page.subclass}
            </span>
          )}
          <Eyebrow tone="light">{page.kind === "visa" ? (page.permanent ? "Permanent visa" : "Temporary visa") : "Guide"}</Eyebrow>
        </div>
        <h1 className="font-heading mt-5 max-w-4xl text-4xl font-extrabold sm:text-5xl lg:text-[3.4rem] lg:leading-[1.1]">{page.title}</h1>
        <p className="mt-5 max-w-3xl text-lg leading-relaxed text-white/75">{page.intro}</p>
        {page.tags.length > 0 && (
          <ul className="mt-6 flex flex-wrap gap-2" aria-label="Key features">
            {page.tags.map((tag) => (
              <li key={tag} className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-semibold text-white/85">{tag}</li>
            ))}
          </ul>
        )}
        <div className="mt-8 flex flex-wrap gap-3">
          <Button href="/bookings" track="book_cta">
            Book a consultation
            <ArrowIcon />
          </Button>
          {tool && (
            <Button href={tool.href} variant="ghost-light">
              {tool.label}
              <ArrowIcon />
            </Button>
          )}
        </div>
        <p className="mt-8 text-xs text-white/50">
          Facts checked {page.factsAsAt} against the Department of Home Affairs and the Migration Act and Regulations · {siteConfig.fullName}, Registered Migration Agent MARN {siteConfig.marn} · General information, not advice for your circumstances.
        </p>
      </Container>
    </section>
  );
}
