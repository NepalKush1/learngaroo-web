// ─────────────────────────────────────────────────────────────────────────
// VISA LIBRARY — types shared by every category file in data/visas/.
//
// One VisaPage per visa subclass (kind "visa") or explainer topic (kind
// "guide"), rendered at /visas/[category]/[slug]. Content rules:
//   • General information only, never advice for one person.
//   • Every figure comes from the Department of Home Affairs, the
//     legislation (Migration Act 1958, Migration Regulations 1994 and the
//     legislative instruments) or the Administrative Review Tribunal, and
//     is dated with `factsAsAt`.
//   • Never publish processing-time numbers (link to the Home Affairs tool)
//     and never claim approval rates or guarantee outcomes.
// ─────────────────────────────────────────────────────────────────────────

export type VisaCategorySlug =
  | "employer-sponsored"
  | "skilled"
  | "family"
  | "study"
  | "appeals-and-review"
  | "other-visas";

export interface VisaKeyFact {
  label: string;
  value: string;
  // Small print under the value, e.g. "primary applicant, 1 July 2026 charge".
  note?: string;
}

export interface VisaStream {
  name: string;
  // One sentence on what the stream is.
  summary: string;
  // Who it suits.
  forWhom: string;
  stay?: string;
  cost?: string;
  prPathway?: string;
}

export interface VisaCriterion {
  title: string;
  detail: string;
  // The provision it comes from, e.g. "Migration Regulations 1994, Sch 2 cl 482.221" or "PIC 4020".
  legal?: string;
}

export interface VisaDocumentGroup {
  group: string;
  items: string[];
}

export interface VisaStep {
  title: string;
  description: string;
  // What you hold at the end of the step.
  output: string;
}

export interface VisaCondition {
  // Schedule 8 code, e.g. "8501".
  code: string;
  meaning: string;
}

export interface VisaCost {
  item: string;
  amount: string;
  note?: string;
}

export interface VisaPathway {
  title: string;
  description: string;
  href?: string;
}

export interface VisaFaq {
  question: string;
  answer: string;
}

export interface VisaLink {
  label: string;
  url: string;
}

export interface VisaRelated {
  label: string;
  href: string;
}

export interface VisaAlert {
  title: string;
  body: string;
  href?: string;
  linkLabel?: string;
}

export interface VisaPage {
  // URL segment under /visas/[category]/, e.g. "skills-in-demand-visa-482".
  slug: string;
  category: VisaCategorySlug;
  // "visa" for a subclass page, "guide" for an explainer (points test, s48 bar, …).
  kind: "visa" | "guide";
  // "482", "820/801", "155/157"; omit for guides.
  subclass?: string;
  // Short name used in cards and navigation, e.g. "Skills in Demand visa".
  name: string;
  // Page heading, e.g. "Skills in Demand visa (subclass 482)".
  title: string;
  // <title> tag, at most 60 characters.
  seoTitle: string;
  // Meta description, at most 160 characters.
  seoDescription: string;
  // Direct answer in two or three sentences: what the visa is, who it is for, what it leads to.
  intro: string;
  // Date the figures were checked, e.g. "12 October 2026".
  factsAsAt: string;
  // true = permanent visa, false = temporary or provisional, null = guide.
  permanent: boolean | null;
  // Short tags shown as chips, e.g. ["Apply in or outside Australia", "Employer sponsor required", "Points tested"].
  tags: string[];
  // Four to six at-a-glance facts: government fee, stay, work rights, pathway to PR, where to apply, sponsor/nomination.
  keyFacts: VisaKeyFact[];
  // A dated rule change worth flagging at the top of the page.
  alert?: VisaAlert;
  streams?: VisaStream[];
  // Situations this visa suits, one line each.
  whoFor: string[];
  // Eligibility criteria with the legal basis where known.
  eligibility: VisaCriterion[];
  // Who can be included (partner, children) and how.
  familyNote?: string;
  documents: VisaDocumentGroup[];
  steps: VisaStep[];
  // Schedule 8 conditions usually imposed.
  conditions?: VisaCondition[];
  // Government charges and typical third-party costs.
  costs: VisaCost[];
  // Obligations and what changes once the visa is granted.
  afterGrant?: string[];
  pathways: VisaPathway[];
  // Common refusal reasons and pitfalls.
  risks?: string[];
  faqs: VisaFaq[];
  // Provisions and instruments, linking to legislation.gov.au where possible.
  legislation: VisaLink[];
  // Official pages checked on factsAsAt.
  sources: VisaLink[];
  // Internal links: tools, services, other visas, state pages.
  related: VisaRelated[];
  // Search phrases the page should rank for.
  keywords: string[];
}

export interface VisaCategory {
  slug: VisaCategorySlug;
  name: string;
  shortName: string;
  tagline: string;
  description: string;
  seoTitle: string;
  seoDescription: string;
  // SVG path (24×24, stroke) for the category icon.
  icon: string;
  // "If you… → start with" helper rows.
  situations: { situation: string; label: string; href: string }[];
  faqs: VisaFaq[];
}
