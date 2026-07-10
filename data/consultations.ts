export interface ConsultationService {
  id: string;
  slug: string;
  category: string;
  title: string;
  description: string;
  consultantName?: string;
  durationMinutes: number;
  priceInCents: number;
  currency: string;
  gstIncluded: boolean;
  active: boolean;
  bookingNotice?: string;
  displayOrder: number;
}

// Single source of truth for the booking page — one flat list, no
// onshore/offshore/document-review split. `slug` matches the icon keys in
// components/icons/ServiceIcon.tsx and the marketing services in
// data/services.ts so the same icon set can be reused.
export const consultations: ConsultationService[] = [
  {
    id: "skilled-visa",
    slug: "skilled-visas",
    category: "Migration Consultation",
    title: "Skilled Visa Consultation",
    description:
      "For clients seeking guidance on skilled migration pathways, including subclasses 189, 190 and 491, points eligibility and state nomination options.",
    consultantName: "Kush Kumar Nepal",
    durationMinutes: 30,
    priceInCents: 15000,
    currency: "AUD",
    gstIncluded: true,
    active: true,
    displayOrder: 1,
  },
  {
    id: "skills-assessment",
    slug: "skills-assessments",
    category: "Migration Consultation",
    title: "Skills Assessment Consultation",
    description:
      "For clients who need guidance on the appropriate assessing authority, occupation selection, eligibility and skills assessment requirements.",
    consultantName: "Kush Kumar Nepal",
    durationMinutes: 30,
    priceInCents: 15000,
    currency: "AUD",
    gstIncluded: true,
    active: true,
    displayOrder: 2,
  },
  {
    id: "employer-sponsored-ens",
    slug: "employer-sponsored-visas",
    category: "Migration Consultation",
    title: "Employer-Sponsored & ENS",
    description:
      "For employers and skilled workers seeking guidance on employer-sponsored visa pathways, including the Employer Nomination Scheme.",
    consultantName: "Kush Kumar Nepal",
    durationMinutes: 30,
    priceInCents: 18000,
    currency: "AUD",
    gstIncluded: true,
    active: true,
    displayOrder: 3,
  },
  {
    id: "family-partner",
    slug: "family-partner-visas",
    category: "Migration Consultation",
    title: "Family and Partner Visa Consultation",
    description:
      "For partners, spouses and eligible family members seeking guidance on Australian family and partner visa pathways.",
    consultantName: "Kush Kumar Nepal",
    durationMinutes: 30,
    priceInCents: 18000,
    currency: "AUD",
    gstIncluded: true,
    active: true,
    displayOrder: 4,
  },
  {
    id: "visitor-tourist",
    slug: "visitor-tourist-visas",
    category: "Migration Consultation",
    title: "Visitor and Tourist Visa Consultation",
    description:
      "For people planning to visit Australia for tourism, family visits or short-term business purposes.",
    consultantName: "Kush Kumar Nepal",
    durationMinutes: 30,
    priceInCents: 15000,
    currency: "AUD",
    gstIncluded: true,
    active: true,
    displayOrder: 5,
  },
  {
    id: "art-review",
    slug: "art-reviews",
    category: "Migration Consultation",
    title: "ART Review Consultation",
    description:
      "For clients seeking an initial consultation about a visa refusal, visa cancellation or a possible Administrative Review Tribunal matter.",
    consultantName: "Kush Kumar Nepal",
    durationMinutes: 30,
    priceInCents: 20000,
    currency: "AUD",
    gstIncluded: true,
    active: true,
    bookingNotice: "Please have your decision letter and relevant dates available before the consultation.",
    displayOrder: 6,
  },
];

export function getConsultationBySlug(
  slug: string,
): ConsultationService | undefined {
  return consultations.find((c) => c.slug === slug && c.active);
}

export function getActiveConsultations(): ConsultationService[] {
  return consultations
    .filter((c) => c.active)
    .sort((a, b) => a.displayOrder - b.displayOrder);
}

export function formatPrice(priceInCents: number, currency: string): string {
  return new Intl.NumberFormat("en-AU", {
    style: "currency",
    currency,
  }).format(priceInCents / 100);
}
