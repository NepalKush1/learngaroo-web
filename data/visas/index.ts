import type { VisaCategorySlug, VisaPage } from "./types";
import { visaCategories, getVisaCategory } from "./categories";
import { employerSponsoredPages } from "./employer-sponsored";
import { skilledPages } from "./skilled";
import { familyPartnerPages } from "./family-partner";
import { familyParentPages } from "./family-parent";
import { studyPages } from "./study";
import { appealsAndReviewPages } from "./appeals-and-review";
import { otherVisasVisitorPages } from "./other-visas-visitor";
import { otherVisasResidentPages } from "./other-visas-resident";

export type { VisaCategory, VisaCategorySlug, VisaPage } from "./types";
export { visaCategories, getVisaCategory };

// Date the library was last checked end to end against the official sources.
export const visaLibraryCheckedOn = "12 October 2026";

export const visaPages: VisaPage[] = [
  ...employerSponsoredPages,
  ...skilledPages,
  ...familyPartnerPages,
  ...familyParentPages,
  ...studyPages,
  ...appealsAndReviewPages,
  ...otherVisasVisitorPages,
  ...otherVisasResidentPages,
];

export function visaHref(page: Pick<VisaPage, "category" | "slug">): string {
  return `/visas/${page.category}/${page.slug}`;
}

export function pagesForCategory(category: VisaCategorySlug): VisaPage[] {
  return visaPages.filter((page) => page.category === category);
}

export function getVisaPage(category: string, slug: string): VisaPage | undefined {
  return visaPages.find((page) => page.category === category && page.slug === slug);
}

export function findVisaBySubclass(subclass: string): VisaPage | undefined {
  return visaPages.find((page) => page.kind === "visa" && page.subclass?.split("/").includes(subclass));
}

// Compact records for the client-side search box on /visas.
export interface VisaSearchRecord {
  href: string;
  name: string;
  title: string;
  subclass?: string;
  category: VisaCategorySlug;
  categoryName: string;
  kind: "visa" | "guide";
  intro: string;
  keywords: string[];
}

export function visaSearchIndex(): VisaSearchRecord[] {
  return visaPages.map((page) => ({
    href: visaHref(page),
    name: page.name,
    title: page.title,
    subclass: page.subclass,
    category: page.category,
    categoryName: getVisaCategory(page.category)?.shortName ?? page.category,
    kind: page.kind,
    intro: page.intro,
    keywords: [...page.keywords, ...page.tags],
  }));
}

// Which library pages belong with each /services page.
const serviceCategoryMap: Record<string, VisaCategorySlug[]> = {
  "student-visas": ["study"],
  "skilled-visas": ["skilled"],
  "skills-assessments": ["skilled"],
  "employer-sponsored-visas": ["employer-sponsored"],
  "family-partner-visas": ["family"],
  "visitor-tourist-visas": ["other-visas"],
  "art-reviews": ["appeals-and-review"],
};

export function visasForService(serviceSlug: string, limit = 6): VisaPage[] {
  const categories = serviceCategoryMap[serviceSlug] ?? [];
  const pages = visaPages.filter((page) => categories.includes(page.category));
  if (serviceSlug === "skills-assessments") {
    const guide = pages.find((page) => page.slug === "skills-assessment-for-migration");
    return [guide, ...pages.filter((page) => page !== guide)].filter((page): page is VisaPage => Boolean(page)).slice(0, limit);
  }
  return pages.slice(0, limit);
}

// "12 October 2026" → "2026-10-12" for structured data and sitemaps.
export function toIsoDate(humanDate: string): string {
  const parsed = Date.parse(humanDate);
  if (Number.isNaN(parsed)) return new Date().toISOString().slice(0, 10);
  return new Date(parsed).toISOString().slice(0, 10);
}

// The value of a key fact by label prefix, for comparison tables.
export function keyFact(page: VisaPage, labelStartsWith: string): string | undefined {
  const needle = labelStartsWith.toLowerCase();
  return page.keyFacts.find((fact) => fact.label.toLowerCase().startsWith(needle))?.value;
}

// Compact navigation data for the header mega menu and mobile menu.
export interface VisaNavCategory {
  slug: VisaCategorySlug;
  name: string;
  shortName: string;
  tagline: string;
  icon: string;
  items: { label: string; href: string }[];
}

export function visaNavigation(perCategory = 6): VisaNavCategory[] {
  return visaCategories.map((category) => {
    const pages = pagesForCategory(category.slug);
    const ordered = [...pages.filter((page) => page.kind === "visa"), ...pages.filter((page) => page.kind === "guide")];
    return {
      slug: category.slug,
      name: category.name,
      shortName: category.shortName,
      tagline: category.tagline,
      icon: category.icon,
      items: ordered.slice(0, perCategory).map((page) => ({ label: page.subclass ? `${page.name} (${page.subclass})` : page.name, href: visaHref(page) })),
    };
  });
}
