"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { siteConfig } from "@/lib/site-config";
import { ServicesDropdown } from "./ServicesDropdown";

export function NavLinks({ className = "" }: { className?: string }) {
  const pathname = usePathname();

  return (
    <nav className={`h-full ${className}`}>
      {siteConfig.nav.map((item) => {
        const isActive =
          item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);

        if (item.external) {
          return (
            <a
              key={item.href}
              href={item.href}
              target="_blank"
              rel="noopener"
              className="inline-flex items-center gap-1.5 rounded-full px-3.5 py-2 text-[15px] font-semibold text-brand-primary transition-colors hover:bg-brand-mint"
            >
              {item.label}
              <ExternalIcon />
              <span className="sr-only">(opens in a new tab)</span>
            </a>
          );
        }

        if (item.href === "/services") {
          return <ServicesDropdown key={item.href} active={isActive} />;
        }

        return (
          <Link
            key={item.href}
            href={item.href}
            className={`relative rounded-full px-3.5 py-2 text-[15px] font-semibold transition-colors duration-200 ${
              isActive
                ? "bg-brand-mint text-brand-primary"
                : "text-brand-navy/80 hover:bg-brand-surface hover:text-brand-navy"
            }`}
          >
            {item.label}
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
