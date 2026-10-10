"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Container } from "@/components/ui/Container";
import { Button, ArrowIcon } from "@/components/ui/Button";
import { Logo } from "@/components/ui/Logo";
import { siteConfig } from "@/lib/site-config";
import { NavLinks, ExternalIcon } from "./NavLinks";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
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
  }

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled || menuOpen
          ? "border-b border-gray-200/70 bg-white/85 shadow-[0_8px_30px_-12px_rgba(11,26,46,0.15)] backdrop-blur-xl"
          : "border-b border-transparent bg-white/60 backdrop-blur"
      }`}
    >
      <Container className="flex h-20 items-center justify-between gap-6">
        <Logo className="h-11 w-auto sm:h-12" />

        <NavLinks className="hidden items-center gap-1 lg:flex" />

        <div className="hidden lg:block">
          <Button href="/bookings">
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
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-gray-200 bg-white text-brand-navy lg:hidden"
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
        <div id="mobile-menu" className="border-t border-gray-100 bg-white lg:hidden">
          <Container className="flex flex-col gap-1 py-4">
            {siteConfig.nav.map((item) => {
              if (item.external) {
                return (
                  <a
                    key={item.href}
                    href={item.href}
                    target="_blank"
                    rel="noopener"
                    className="flex items-center gap-2 rounded-xl px-4 py-3 text-base font-semibold text-brand-primary hover:bg-brand-surface"
                  >
                    {item.label}
                    <ExternalIcon />
                  </a>
                );
              }
              const isActive =
                item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`rounded-xl px-4 py-3 text-base font-semibold ${
                    isActive ? "bg-brand-mint text-brand-primary" : "text-brand-navy hover:bg-brand-surface"
                  }`}
                >
                  {item.label}
                </Link>
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
