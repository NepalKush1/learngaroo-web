"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/lib/site-config";
import { NavLinks } from "./NavLinks";

export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 8);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 border-b border-gray-200 bg-white/95 backdrop-blur transition-shadow duration-200 ${
        scrolled ? "shadow-sm" : ""
      }`}
    >
      <Container className="flex h-24 items-center justify-between gap-6">
        <Link href="/" className="flex items-center gap-3">
          <span className="relative block h-20 w-20 shrink-0">
            <Image
              src="/logo-mark.png"
              alt=""
              fill
              priority
              className="object-contain"
            />
          </span>
          <span className="flex flex-col leading-tight">
            <span className="text-xl font-bold text-brand-navy">
              {siteConfig.name}
            </span>
            <span className="hidden text-sm font-medium text-gray-500 sm:block">
              {siteConfig.tagline}
            </span>
          </span>
        </Link>

        <NavLinks className="hidden items-center gap-1 lg:flex" />

        <Button
          href="/bookings"
          className="group hidden text-xl shadow-md shadow-brand-blue/30 lg:inline-flex"
        >
          <span className="relative inline-block">
            Book a Consultation
            <span className="absolute inset-x-0 -bottom-1 h-0.5 origin-left scale-x-0 bg-white transition-transform duration-300 ease-out group-hover:scale-x-100 group-focus-visible:scale-x-100" />
          </span>
        </Button>

        <Link
          href="/bookings"
          className="inline-flex items-center justify-center rounded-full bg-brand-blue px-4 py-2 text-sm font-semibold text-white lg:hidden"
        >
          Book
        </Link>
      </Container>
    </header>
  );
}
