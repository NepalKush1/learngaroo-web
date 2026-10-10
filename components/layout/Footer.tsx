import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/ui/Logo";
import { Button, ArrowIcon } from "@/components/ui/Button";
import { siteConfig, whatsappLink } from "@/lib/site-config";
import { services } from "@/data/services";
import { SocialIcon } from "@/components/icons/SocialIcon";
import { ContactDetails } from "@/components/ui/ContactDetails";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden bg-brand-navy text-white">
      <div className="bg-gradient-brand h-1 w-full" aria-hidden="true" />
      <div
        className="pointer-events-none absolute -left-32 top-10 h-80 w-80 rounded-full bg-brand-green/15 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -right-32 bottom-0 h-80 w-80 rounded-full bg-brand-blue/15 blur-3xl"
        aria-hidden="true"
      />

      <Container className="relative grid gap-12 py-16 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
        <div>
          <Logo tone="light" className="h-14 w-auto" />
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-white/65">
            {siteConfig.description}
          </p>
          <p className="mt-4 text-sm font-semibold text-brand-green-light">
            {siteConfig.values}
          </p>
          <div className="mt-6 flex gap-3">
            {siteConfig.social.filter((item) => item.href).map((item) => (
              <a
                key={item.platform}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${item.label} (opens in a new tab)`}
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white ring-1 ring-white/10 transition-colors hover:bg-brand-green hover:ring-brand-green"
              >
                <SocialIcon platform={item.platform} />
              </a>
            ))}
            {whatsappLink() && (
              <a
                href={whatsappLink()!}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp (opens in a new tab)"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white ring-1 ring-white/10 transition-colors hover:bg-[#25d366] hover:ring-[#25d366]"
              >
                <SocialIcon platform="whatsapp" />
              </a>
            )}
          </div>
        </div>

        <div>
          <h3 className="text-xs font-bold uppercase tracking-[0.16em] text-white/50">
            Explore
          </h3>
          <ul className="mt-4 space-y-2.5">
            {siteConfig.nav.map((item) => (
              <li key={item.href}>
                {item.external ? (
                  <a href={item.href} target="_blank" rel="noopener" className="text-[15px] text-white/80 transition-colors hover:text-brand-green-light">
                    {item.label} ↗
                  </a>
                ) : (
                  <Link href={item.href} className="text-[15px] text-white/80 transition-colors hover:text-brand-green-light">
                    {item.label}
                  </Link>
                )}
              </li>
            ))}
            <li>
              <Link href="/tools/points-calculator" className="text-[15px] text-white/80 transition-colors hover:text-brand-green-light">
                Points Calculator
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-xs font-bold uppercase tracking-[0.16em] text-white/50">
            Services
          </h3>
          <ul className="mt-4 space-y-2.5">
            {services.map((service) => (
              <li key={service.slug}>
                <Link
                  href={`/services/${service.slug}`}
                  className="text-[15px] text-white/80 transition-colors hover:text-brand-green-light"
                >
                  {service.shortLabel}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-xs font-bold uppercase tracking-[0.16em] text-white/50">
            Contact
          </h3>
          <ContactDetails
            className="mt-4 space-y-2.5 text-[15px] text-white/80"
            linkClassName="transition-colors hover:text-brand-green-light"
          />
          <Button href="/bookings" className="mt-6">
            Book a Consultation
            <ArrowIcon />
          </Button>
        </div>
      </Container>

      <div className="relative border-t border-white/10">
        <Container className="flex flex-col gap-2 py-6 text-xs text-white/50 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {siteConfig.fullName}. All rights reserved.
          </p>
          <p className="flex flex-wrap gap-x-4 gap-y-1">
            <Link href="/privacy" className="hover:text-white">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white">Consultation Terms</Link>
            <span>ABN {siteConfig.abn} · Registered Migration Agent — MARN {siteConfig.marn}</span>
          </p>
        </Container>
      </div>
    </footer>
  );
}
