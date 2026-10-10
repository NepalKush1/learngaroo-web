import { publishedVideos } from "@/data/videos";

export interface NavItem {
  label: string;
  href: string;
  external?: boolean;
}

export const siteConfig = {
  // Public address of the live site — set NEXT_PUBLIC_SITE_URL when deploying.
  url: (process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000").replace(/\/$/, ""),
  name: "Learniiz",
  fullName: "Learniiz Migration & Visa Services",
  tagline: "Your journey. Our guidance.",
  values: "Professional. Transparent. Trusted.",
  description:
    "Learniiz Migration & Visa Services provides guidance on Australian visas and migration pathways — from skilled visas and skills assessments to employer sponsorship, family and partner visas, and visitor visas.",
  marn: "2418608",
  abn: "29 634 374 913",
  // Sister product — Learniiz PTE / IELTS / NAATI CCL practice platform.
  pte: {
    name: "Learniiz PTE Practice",
    url: "https://www.learniiz.com",
    signupUrl: "https://app.learniiz.com/auth/signup",
  },
  nav: [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "Free Tools", href: "/tools" },
    ...(publishedVideos.length > 0 ? [{ label: "Videos", href: "/videos" }] : []),
    { label: "PTE Practice", href: "https://www.learniiz.com", external: true },
    // "News & Updates" (/news) is hidden until the first articles are ready.
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ] as NavItem[],
  contact: {
    phone: "+61 3 7065 1628",
    // Leave a value empty ("") to hide it on the site until it's confirmed.
    email: "",
    address: "",
    hours: "Mon–Fri, 9am–5pm (Melbourne time)",
    // Mobile number with country code, digits only (e.g. "61400000000").
    // When set, WhatsApp buttons appear on the site.
    whatsapp: "",
  },
  // Add each profile URL to show its icon in the footer; empty ones are hidden.
  social: [
    { label: "LinkedIn", platform: "linkedin", href: "" },
    { label: "Instagram", platform: "instagram", href: "" },
    { label: "Facebook", platform: "facebook", href: "" },
  ],
};
