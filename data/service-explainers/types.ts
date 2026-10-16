// ─────────────────────────────────────────────────────────────────────────
// SERVICE EXPLAINERS — the interactive, plain-language layer on each
// /services/[slug] page, in the same style as the visa library explainers
// (data/visas/explainers): a hero with three big ideas, a diagram of who
// does what, a step-by-step timeline, a 2-minute self-check, myth-or-fact
// cards, a jargon buster and small tools. A service covers several visas,
// so it also compares them side by side.
//
// Every figure must appear on one of the library pages listed in `pages`
// (data/visas/*.ts, each verified on its factsAsAt date) or in
// `verifiedExtras`. `npm run validate:visas` enforces this, and checks the
// service's guide in data/visa-guides.ts the same way.
// How to write one: scripts/sources/SERVICE-EXPLAINER-BRIEF.md.
// ─────────────────────────────────────────────────────────────────────────

import type {
  CheckCopy,
  CostConfig,
  EvidenceConfig,
  ExplainerActor,
  ExplainerFlow,
  ExplainerStage,
  FeeConfig,
  FinderConfig,
  FundsConfig,
  GlossaryTerm,
  JobGapConfig,
  MeterConfig,
  MythFact,
  PointsWidgetConfig,
  PrRoadConfig,
  QuizQuestion,
  RoleGuide,
  RuleChecksConfig,
  SectionCopy,
  StreamFinderConfig,
  TimelineConfig,
  VerifiedExtra,
  WorkHoursConfig,
} from "../visas/explainers/types";

export type * from "../visas/explainers/types";

// ── The visas side by side ──────────────────────────────────────────────

export interface CompareColumn {
  // Slug of the library page this column describes (one of `pages`); the
  // column links to it.
  page: string;
  // Column heading, e.g. "Subclass 190" (at most 28 characters).
  name: string;
  // Short line under the heading, e.g. "Permanent, state nominated" (at most
  // 50 characters).
  tagline: string;
  // One value per row, in the order of `rows` (at most 90 characters each).
  values: string[];
  // Who it tends to suit, e.g. "Strong scores in an MLTSSL occupation" (at
  // most 90 characters).
  bestFor: string;
}

export interface CompareConfig extends SectionCopy {
  // What people compare on, e.g. "Who chooses you", "How long it lasts",
  // "Where you live and work", "Government fee", "Path to permanent
  // residence". 4–7 rows; `label` at most 32 characters.
  rows: { label: string; icon: string }[];
  // 2–4 columns.
  columns: CompareColumn[];
  footnote: string;
}

export interface ServiceExplainer {
  // The /services page slug (data/services.ts).
  slug: string;
  // Date the facts were checked: the latest factsAsAt of the library pages
  // relied on, or the day you verified a `verifiedExtras` fact.
  factsAsAt: string;
  // Library pages this service covers (slugs from data/visas), most
  // important first. The fact guard checks every figure against these pages
  // plus `verifiedExtras`; the first six are shown as "Go deeper" guides.
  pages: string[];
  // Used in headings: "The {name} in one picture", "The {name} in 6
  // stages", "Could the {name} work for you?". E.g. "skilled visa route",
  // "partner visa process".
  name: string;
  // The coloured second line of the hero title, e.g. "Subclasses 189, 190
  // and 491" (at most 40 characters).
  accent: string;
  // The service in one plain sentence: what it is, who it is for, what it
  // leads to (at most 220 characters).
  oneLiner: string;
  // Exactly three ideas that carry the whole service.
  bigIdeas: { title: string; body: string; icon: string }[];
  // Four to six rows for the hero "at a glance" card.
  heroCard: { label: string; value: string; icon: string }[];
  // Completes "Facts checked 13 October 2026 against …". Defaults to Home
  // Affairs and the Migration Act and Regulations.
  checkedAgainst?: string;
  compare: CompareConfig;
  // Two to four players; flows connect them.
  actors: ExplainerActor[];
  flows: ExplainerFlow[];
  journeyTitle: string;
  journeyHighlight?: string;
  stages: ExplainerStage[];
  check?: CheckCopy;
  quiz: QuizQuestion[];
  myths: MythFact[];
  // Two checklists by side (worker / employer, applicant / sponsor). Optional.
  roles?: RoleGuide[];
  glossary: GlossaryTerm[];
  cta?: { title?: string; subtitle?: string };
  verifiedExtras?: VerifiedExtra[];

  // Optional tools, shown in this order. Reuse the config from a covered
  // page's visa explainer where it fits (import it), rather than copying it.
  finder?: FinderConfig;
  streamFinder?: StreamFinderConfig;
  // Search the skilled occupation list for the assessing authority.
  authorityFinder?: boolean;
  points?: PointsWidgetConfig;
  // A banner for the state nomination assessment (/state-nomination/assessment).
  stateAssessment?: boolean;
  balanceOfFamily?: boolean;
  evidence?: EvidenceConfig;
  workHours?: WorkHoursConfig;
  funds?: FundsConfig;
  meter?: MeterConfig;
  ruleChecks?: RuleChecksConfig;
  fees?: FeeConfig;
  costs?: CostConfig;
  jobGap?: JobGapConfig;
  timeline?: TimelineConfig;
  prRoad?: PrRoadConfig;
}
