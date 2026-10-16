// ─────────────────────────────────────────────────────────────────────────
// HEADER NAVIGATION — one source of truth for the desktop menus and the
// mobile menu. Organised around the visitor's question, not content type:
//   Visas             → "Which visa am I eligible for?"
//   Skilled Migration → "Do my points, occupation and state line up?"
//   Services          → "How do I hire you, and what does it cost?"
//   Resources         → "What has changed, and how do I stay current?"
//   About             → "Who are you, and can I trust you?"
// The flat page list used by the footer lives in site-config.ts.
// ─────────────────────────────────────────────────────────────────────────

import { services } from "@/data/services";
import { publishedVideos } from "@/data/videos";
import { siteConfig } from "@/lib/site-config";

export interface NavLink {
  label: string;
  href: string;
  description?: string;
  external?: boolean;
  // Service slug, used to show the matching ServiceIcon in the menu.
  serviceSlug?: string;
}

export interface NavColumn {
  heading: string;
  links: NavLink[];
}

export interface NavGroup {
  label: string;
  href: string;
  // "visas" is the category mega menu built from the visa library at
  // render time; "menu" is a column panel from the data below; "link"
  // is a plain link with no panel.
  kind: "visas" | "menu" | "link";
  columns?: NavColumn[];
  // Links shown in the panel footer, e.g. "View all services".
  footer?: NavLink[];
}

const applicationServices = services.filter((service) => !["skills-assessments", "art-reviews"].includes(service.slug));
// Refusals first: a cancelled or refused visa has a review deadline measured in days.
const specialistServices = ["art-reviews", "skills-assessments"]
  .map((slug) => services.find((service) => service.slug === slug))
  .filter((service): service is (typeof services)[number] => Boolean(service));

export const headerNav: NavGroup[] = [
  { label: "Visas", href: "/visas", kind: "visas" },
  {
    label: "Skilled Migration",
    href: "/tools/points",
    kind: "menu",
    columns: [
      {
        heading: "Check your eligibility",
        links: [
          { label: "Points Calculators", href: "/tools/points", description: "Federal test plus Victoria, Tasmania and ACT, in one place." },
          { label: "State Nomination Assessment", href: "/state-nomination/assessment", description: "Which states' 190 and 491 criteria you meet." },
          { label: "Visa Pathway Finder", href: "/tools/visa-finder", description: "Three questions to find the right pathway." },
          { label: "Occupation Guides", href: "/occupations", description: "Assessing authority, lists and visa options." },
        ],
      },
      {
        heading: "State and territory nomination",
        links: [
          { label: "State Nomination Map", href: "/state-nomination", description: "Who is open, places, streams and guides." },
          { label: "Victorian Points Test", href: "/tools/points?tab=victoria", description: "Score your VPT for 2026-27." },
          { label: "Tasmania Calculator", href: "/tools/points?tab=tasmania", description: "Gold, Green or Orange pass for 190 and 491." },
          { label: "Canberra Matrix", href: "/tools/points?tab=act", description: "ACT nomination score, resident or overseas." },
          { label: "Regional Postcode Checker", href: "/tools/regional-postcode-checker", description: "Is a postcode regional for 491, 494 and study points?" },
        ],
      },
      {
        heading: "Read the rules",
        links: [
          { label: "Skilled and points-tested visas", href: "/visas/skilled", description: "189, 190, 491 and the points test explained." },
          { label: "Employer sponsored visas", href: "/visas/employer-sponsored", description: "482, 494, 186 and sponsorship obligations." },
          { label: "Skilled visa consultation", href: "/services/skilled-visas", description: "Have your pathway and points reviewed by the agent." },
        ],
      },
    ],
    footer: [{ label: "All free tools", href: "/tools" }],
  },
  {
    label: "Services",
    href: "/services",
    kind: "menu",
    columns: [
      {
        heading: "Visa applications",
        links: applicationServices.map((service) => ({
          label: service.shortLabel,
          href: `/services/${service.slug}`,
          serviceSlug: service.slug,
        })),
      },
      {
        heading: "Refusals and assessments",
        links: [
          ...specialistServices.map((service) => ({
            label: service.shortLabel,
            href: `/services/${service.slug}`,
            serviceSlug: service.slug,
            description: service.slug === "art-reviews" ? "Refused or cancelled? Review deadlines are short." : "ACS, Engineers Australia, VETASSESS, TRA and more.",
          })),
          { label: "Fees and what's included", href: "/services#fees", description: "Fixed consultation fees, no surprises." },
        ],
      },
    ],
    footer: [
      { label: "All services", href: "/services" },
      { label: "Book a consultation", href: "/bookings" },
    ],
  },
  {
    label: "Resources",
    href: "/updates",
    kind: "menu",
    columns: [
      {
        heading: "Stay current",
        links: [
          { label: "Policy Updates", href: "/updates", description: "Dated rule, fee and processing changes with sources." },
          { label: "Visa Fee Calculator", href: "/tools/fee-calculator", description: "Government charges at 1 July 2026 prices." },
          { label: "FAQ", href: "/faq", description: "Straight answers to the questions we hear most." },
          ...(publishedVideos.length > 0 ? [{ label: "Videos", href: "/videos", description: "Plain-English explainers from the practice." }] : []),
          { label: "PTE, IELTS & NAATI practice", href: siteConfig.pte.url, external: true, description: "A higher English score can earn you more points." },
        ],
      },
    ],
    footer: [{ label: "Contact us", href: "/contact" }],
  },
  { label: "About", href: "/about", kind: "link" },
];

// Flattened sub-items for the mobile accordion.
export function mobileSubItems(group: NavGroup): NavLink[] {
  return (group.columns ?? []).flatMap((column) => column.links).concat(group.footer ?? []);
}
