"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Container } from "@/components/ui/Container";
import { Button, ArrowIcon } from "@/components/ui/Button";
import { Logo } from "@/components/ui/Logo";
import { siteConfig } from "@/lib/site-config";
import { headerNav, mobileSubItems } from "@/lib/navigation";
import { NavLinks, ExternalIcon, activeGroup } from "./NavLinks";
import { UpdateStrip } from "./UpdateStrip";
import type { VisaNavCategory } from "@/data/visas";

export function Header({ visaNav = [] }: { visaNav?: VisaNavCategory[] }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [openGroup, setOpenGroup] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 8);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the mobile menu whenever the route changes.
  const [lastPath, setLastPath] = useState(pathname);
  if (pathname !== lastPath) {
    setLastPath(pathname);
    setMenuOpen(false);
    setOpenGroup(null);
  }

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled || menuOpen
          ? "border-b border-gray-200/70 bg-white/95 shadow-raised backdrop-blur-xl"
          : "border-b border-transparent bg-white/60 backdrop-blur"
      }`}
    >
      <div className="scroll-progress bg-gradient-brand absolute inset-x-0 bottom-0 h-0.5" aria-hidden="true" />
      {!scrolled && !menuOpen && <UpdateStrip />}
      <Container className="flex h-20 items-center justify-between gap-4">
        <Logo className="h-11 w-auto sm:h-12 xl:h-10" />

        <NavLinks className="hidden items-center gap-0.5 xl:flex" visaNav={visaNav} />

        <div className="hidden items-center gap-4 xl:flex">
          <a
            href={`tel:${siteConfig.contact.phone.replace(/\s+/g, "")}`}
            className="hidden items-center gap-1.5 text-sm font-semibold text-brand-navy/80 transition-colors hover:text-brand-primary 2xl:flex"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="h-4 w-4 text-brand-primary" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
            </svg>
            {siteConfig.contact.phone}
          </a>
          <Button href="/bookings" track="book_cta" className="whitespace-nowrap">
            Book a Consultation
            <ArrowIcon />
          </Button>
        </div>

        <button
          type="button"
          onClick={() => setMenuOpen((open) => !open)}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-gray-200 bg-white text-brand-navy xl:hidden"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="h-5 w-5" aria-hidden="true">
            {menuOpen ? (
              <path strokeLinecap="round" d="M6 6l12 12M18 6 6 18" />
            ) : (
              <path strokeLinecap="round" d="M4 7h16M4 12h16M4 17h16" />
            )}
          </svg>
        </button>
      </Container>

      {menuOpen && (
        <div id="mobile-menu" className="border-t border-gray-100 bg-white xl:hidden">
          <Container className="flex flex-col gap-1 py-4">
            {headerNav.map((item) => {
              const isActive = activeGroup(pathname) === item.label;
              const linkClass = `flex-1 rounded-xl px-4 py-3 text-base font-semibold ${
                isActive ? "bg-brand-mint text-brand-primary-dark" : "text-brand-navy hover:bg-brand-surface"
              }`;
              const subItems =
                item.kind === "visas"
                  ? visaNav.map((category) => ({ label: category.shortName, href: `/visas/${category.slug}`, external: false }))
                  : mobileSubItems(item);
              if (item.kind === "link" || subItems.length === 0) {
                return (
                  <Link key={item.label} href={item.href} className={linkClass}>
                    {item.label}
                  </Link>
                );
              }
              const expanded = openGroup === item.label;
              const subId = `mobile-sub-${item.label.toLowerCase().replace(/\s+/g, "-")}`;
              return (
                <div key={item.label}>
                  <div className="flex items-center">
                    <Link href={item.href} className={linkClass}>
                      {item.label}
                    </Link>
                    <button
                      type="button"
                      onClick={() => setOpenGroup(expanded ? null : item.label)}
                      aria-expanded={expanded}
                      aria-controls={subId}
                      aria-label={`${expanded ? "Hide" : "Show"} ${item.label} pages`}
                      className="flex h-11 w-11 items-center justify-center rounded-xl text-brand-navy/70 hover:bg-brand-surface"
                    >
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className={`h-4 w-4 transition-transform ${expanded ? "rotate-180" : ""}`} aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 9l6 6 6-6" />
                      </svg>
                    </button>
                  </div>
                  {expanded && (
                    <ul id={subId} className="mb-1 ml-4 border-l-2 border-brand-mint pl-2">
                      {subItems.map((sub) => (
                        <li key={sub.href}>
                          {sub.external ? (
                            <a
                              href={sub.href}
                              target="_blank"
                              rel="noopener"
                              className="flex items-center gap-2 rounded-lg px-3 py-2.5 text-[15px] font-medium text-brand-primary hover:bg-brand-surface"
                            >
                              {sub.label}
                              <ExternalIcon className="h-3 w-3" />
                            </a>
                          ) : (
                            <Link
                              href={sub.href}
                              className={`block rounded-lg px-3 py-2.5 text-[15px] font-medium ${
                                pathname === sub.href ? "bg-brand-mint text-brand-primary-dark" : "text-brand-navy/80 hover:bg-brand-surface hover:text-brand-navy"
                              }`}
                            >
                              {sub.label}
                            </Link>
                          )}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              );
            })}
            <Button href="/bookings" className="mt-3">
              Book a Consultation
              <ArrowIcon />
            </Button>
          </Container>
        </div>
      )}
    </header>
  );
}
