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
    "Melbourne-based Registered Migration Agent helping with student, skilled, employer-sponsored, partner and visitor visas, skills assessments and ART reviews.",
  marn: "2418608",
  abn: "29 634 374 913",
  // Sister product — Learniiz PTE / IELTS / NAATI CCL practice platform.
  pte: {
    name: "Learniiz PTE Practice",
    url: "https://www.learniiz.com",
    signupUrl: "https://app.learniiz.com/auth/signup",
  },
  // Flat page list for the footer "Explore" column. The header menus are
  // defined in lib/navigation.ts.
  nav: [
    { label: "Visas", href: "/visas" },
    { label: "Skilled Migration Tools", href: "/tools" },
    { label: "State Nomination", href: "/state-nomination" },
    { label: "Occupations", href: "/occupations" },
    { label: "Services", href: "/services" },
    { label: "Policy Updates", href: "/updates" },
    ...(publishedVideos.length > 0 ? [{ label: "Videos", href: "/videos" }] : []),
    { label: "PTE Practice", href: "https://www.learniiz.com", external: true },
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
    whatsapp: "61433252946",
    whatsappDisplay: "+61 433 252 946",
  },
  // Add each profile URL to show it on the site; empty ones are hidden.
  social: [
    {
      label: "Facebook",
      platform: "facebook",
      handle: "Learniiz Migration",
      href: "https://www.facebook.com/profile.php?id=61593540567576",
      blurb: "Visa updates, announcements and community news.",
    },
    {
      label: "Instagram",
      platform: "instagram",
      handle: "@learniiz_migration",
      href: "https://www.instagram.com/learniiz_migration",
      blurb: "Visa tips, reels and behind-the-scenes from the practice.",
    },
    {
      label: "TikTok",
      platform: "tiktok",
      handle: "@learniiz_visa",
      href: "https://www.tiktok.com/@learniiz_visa",
      blurb: "Quick, plain-English explainers on Australian visas.",
    },
    { label: "LinkedIn", platform: "linkedin", handle: "", href: "", blurb: "" },
  ],
};

const DEFAULT_WHATSAPP_MESSAGE =
  "Hi Learniiz, I found you through your website and would like to ask about a visa.";

// wa.me chat link with a prefilled message, or null until a number is set.
export function whatsappLink(message = DEFAULT_WHATSAPP_MESSAGE): string | null {
  const { whatsapp } = siteConfig.contact;
  return whatsapp ? `https://wa.me/${whatsapp}?text=${encodeURIComponent(message)}` : null;
}
