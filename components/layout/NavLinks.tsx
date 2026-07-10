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
            className={`rounded-2xl border px-4 py-2.5 text-lg font-medium transition-all duration-200 ${
              isActive
                ? "border-brand-blue text-brand-blue"
                : "border-transparent text-brand-navy hover:border-brand-blue hover:text-brand-blue"
            }`}
          >
            {item.label}
          </Link>
        );
      })}
    </nav>
  );
}
