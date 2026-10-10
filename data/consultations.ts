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
    id: "student-visa",
    slug: "student-visas",
    category: "Migration Consultation",
    title: "Student Visa Consultation",
    description:
      "For international students seeking guidance on the Student visa (subclass 500), changing course, applying for a further Student visa and post-study options.",
    consultantName: "Kush Kumar Nepal",
    durationMinutes: 30,
    priceInCents: 15000,
    currency: "AUD",
    gstIncluded: true,
    active: true,
    displayOrder: 0,
  },
  {
    id: "skilled-visa",
    slug: "skilled-visas",
    category: "Migration Consultation",
    title: "Skilled Visa Consultation",
    description:
      "For clients seeking guidance on points-tested skilled visas (subclasses 189, 190 and 491), points eligibility and state or territory nomination options.",
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
      "For clients who need guidance on choosing the right assessing authority and occupation, eligibility and skills assessment requirements.",
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
    title: "Employer-Sponsored Visa Consultation",
    description:
      "For employers and skilled workers seeking guidance on employer sponsorship, including the Skills in Demand (subclass 482), Employer Nomination Scheme (subclass 186) and subclass 494 visas.",
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
      "For partners, spouses and fiancé(e)s seeking guidance on Australian partner visas (subclasses 820/801 and 309/100) and the Prospective Marriage visa (subclass 300).",
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
      "For people planning to visit Australia on a Visitor visa (subclass 600) for a holiday, a family visit or business visitor activities.",
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
      "For clients seeking an initial consultation about a visa refusal, a visa cancellation or a possible application to the Administrative Review Tribunal (ART).",
    consultantName: "Kush Kumar Nepal",
    durationMinutes: 30,
    priceInCents: 20000,
    currency: "AUD",
    gstIncluded: true,
    active: true,
    bookingNotice: "Please have your decision letter, the date you received it and any review deadline ready before the consultation.",
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
