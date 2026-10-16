"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { headerNav } from "@/lib/navigation";
import { NavMenu } from "./NavMenu";
import { VisasMegaMenu } from "./VisasMegaMenu";
import type { VisaNavCategory } from "@/data/visas";

// Which header group a path belongs to, so the right label is highlighted
// even when the page lives under a different URL prefix.
export function activeGroup(pathname: string): string | null {
  if (pathname.startsWith("/visas")) return "Visas";
  if (
    pathname.startsWith("/state-nomination") ||
    pathname.startsWith("/occupations") ||
    (pathname.startsWith("/tools") && !pathname.startsWith("/tools/fee-calculator"))
  ) {
    return "Skilled Migration";
  }
  if (pathname.startsWith("/services")) return "Services";
  if (["/updates", "/news", "/faq", "/videos", "/tools/fee-calculator", "/contact"].some((p) => pathname.startsWith(p))) return "Resources";
  if (pathname.startsWith("/about")) return "About";
  return null;
}

export function NavLinks({ className = "", visaNav = [] }: { className?: string; visaNav?: VisaNavCategory[] }) {
  const pathname = usePathname();
  const current = activeGroup(pathname);

  return (
    <nav className={`h-full ${className}`} aria-label="Main">
      {headerNav.map((group) => {
        const isActive = current === group.label;
        if (group.kind === "visas") {
          return <VisasMegaMenu key={group.label} categories={visaNav} active={isActive} />;
        }
        if (group.kind === "menu") {
          return <NavMenu key={group.label} group={group} active={isActive} />;
        }
        return (
          <Link
            key={group.label}
            href={group.href}
            className={`relative rounded-full whitespace-nowrap px-2.5 py-2 text-sm font-semibold transition-colors duration-200 ${
              isActive
                ? "bg-brand-mint text-brand-primary-dark"
                : "text-brand-navy/80 hover:bg-brand-surface hover:text-brand-navy"
            }`}
          >
            {group.label}
          </Link>
        );
      })}
    </nav>
  );
}

export function ExternalIcon({ className = "h-3.5 w-3.5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className={className} aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M14 4h6v6m0-6-9 9M18 14v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h5" />
    </svg>
  );
}
