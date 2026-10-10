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
