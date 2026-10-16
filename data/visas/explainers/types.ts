// ─────────────────────────────────────────────────────────────────────────
// VISA EXPLAINERS — the interactive, plain-language layer shown on every
// page of the visa library (/visas/[category]/[slug]).
//
// Every fact here must match the verified VisaPage for the same slug
// (data/visas/*.ts) and carry the same factsAsAt date. A fact that is not
// on the page goes in `verifiedExtras` with its source. `npm run
// validate:visas` checks every number in an explainer against the page.
// Strings may contain glossary tokens: [[id]] or [[id|label]] render as
// tap-to-define terms (the id must exist in `glossary`).
// How to write one: scripts/sources/EXPLAINER-BRIEF.md.
// ─────────────────────────────────────────────────────────────────────────

// Colour of a player everywhere on the page. Conventions: "green" you,
// "blue" Home Affairs, "pink" an employer or family sponsor, "violet" a
// tribunal, court or the Minister, "amber" a state or territory or an
// assessing authority, "orange" an education provider, "teal" anyone else.
export type Tone = "green" | "pink" | "blue" | "violet" | "amber" | "teal" | "orange";

export interface ExplainerActor {
  // Stable id used by flows and stages, e.g. "you", "employer", "partner",
  // "government", "tribunal", "state". Every explainer has a "you".
  id: string;
  // "Your employer (the sponsor)"
  name: string;
  // "Employer" (fits on a small badge)
  short: string;
  icon: string;
  tone: Tone;
  // One sentence on their role.
  role: string;
  // Three or four things they do.
  does: string[];
}

export interface ExplainerFlow {
  from: string;
  to: string;
  // Short arrow label, e.g. "Sponsors + nominates" (at most 24 characters).
  label: string;
  // One or two sentences for the story panel.
  detail: string;
}

export interface ExplainerStage {
  id: string;
  // One word for the timeline, e.g. "Apply".
  short: string;
  title: string;
  // Who acts at this stage (actor ids); the first sets the colour.
  who: string[];
  description: string;
  points: string[];
  // What the applicant holds at the end of the stage.
  youHold: string;
  cost?: string;
  icon: string;
}

export type CheckStatus = "ok" | "todo" | "stop";

export interface QuizOption {
  value: string;
  label: string;
  hint?: string;
  status: CheckStatus;
  // What this answer means, shown in the results.
  note: string;
  link?: { label: string; href: string; external?: boolean };
}

export interface QuizQuestion {
  id: string;
  // Short name for the results list, e.g. "Job offer".
  topic: string;
  question: string;
  help?: string;
  options: QuizOption[];
}

// Wording for the self-check when the defaults don't fit, e.g. on a guide
// ("Does the section 48 bar apply to you?").
export interface CheckCopy {
  title?: string;
  highlight?: string;
  ok?: { title: string; body: string };
  todo?: { title: string; body: string };
  stop?: { title: string; body: string };
  disclaimer?: string;
}

export interface MythFact {
  myth: string;
  fact: string;
}

export interface RoleGuide {
  id: string;
  label: string;
  tone?: Tone;
  intro: string;
  groups: { title: string; items: string[] }[];
  link?: { label: string; href: string };
}

export interface GlossaryTerm {
  id: string;
  // Display label, e.g. "CSIT".
  term: string;
  // Expanded name, e.g. "Core Skills Income Threshold".
  full?: string;
  definition: string;
}

// A fact used in the explainer that is not on the VisaPage. `source` is the
// official URL it was read from on factsAsAt, or the path of another visa
// library page that states it (e.g. "/visas/skilled/skilled-nominated-visa-190").
export interface VerifiedExtra {
  fact: string;
  source: string;
}

export interface SectionCopy {
  // Label in the sticky "On this page" bar (one or two words).
  navLabel: string;
  eyebrow: string;
  title: string;
  // Part of the title to colour, e.g. "one picture".
  highlight?: string;
  subtitle: string;
}

// ── Finder: "Which visa fits?" decision tree ───────────────────────────

export interface FinderOption {
  label: string;
  hint?: string;
  // Id of the next question, or of an outcome.
  next: string;
}

export interface FinderQuestion {
  id: string;
  question: string;
  help?: string;
  options: FinderOption[];
}

export interface FinderOutcome {
  id: string;
  // "Partner visa (subclass 820/801)"
  title: string;
  // Two or three sentences: why this is the likely starting point.
  body: string;
  // Things to check before relying on it (the main exceptions).
  watch?: string[];
  // Internal page to read next. When it is the current page the finder says
  // "You're on the right page".
  href?: string;
  // "stop": nothing in this group fits on these answers.
  tone?: "match" | "stop";
}

export interface FinderConfig extends SectionCopy {
  id: string;
  // Id of the first question.
  start: string;
  questions: FinderQuestion[];
  outcomes: FinderOutcome[];
  footnote: string;
}

// ── Fee estimator ───────────────────────────────────────────────────────

export interface FeeLine {
  label: string;
  amount: number;
}

export interface FeeVariant {
  id: string;
  // "Subclass 143 straight away"
  label: string;
  hint?: string;
  // Charges for the main applicant, e.g. first and second instalments.
  primary: FeeLine[];
  // Charges for each additional applicant aged 18 or over, and under 18.
  // Omit when the page gives no figure.
  adult?: FeeLine[];
  child?: FeeLine[];
  // Sponsor charges for this variant only (overrides FeeConfig.sponsor).
  sponsor?: SponsorFees;
}

export interface FeeAddOn {
  id: string;
  label: string;
  hint?: string;
  amount: number;
  // "application": a switch, charged once. "adult": a counter from 0 to the
  // number of adults applying (e.g. a second instalment for each adult
  // without functional English).
  per: "application" | "adult";
}

export interface SponsorFeeLine {
  label: string;
  amount: number;
  // "year" multiplies by the years chosen in `years`.
  per?: "once" | "year";
}

export interface SponsorFees {
  // "Your employer pays", "Your sponsor pays"
  heading: string;
  lines: SponsorFeeLine[];
  // A choice that adds different lines, e.g. business turnover for the SAF levy.
  choice?: { label: string; options: { label: string; lines: SponsorFeeLine[] }[] };
  years?: { label: string; max: number };
  // Shown under the totals, e.g. that these costs can't be passed on.
  note?: string;
}

export interface FeeConfig {
  // Heading above the variant choice, e.g. "Which pathway?"
  variantLabel?: string;
  variants: FeeVariant[];
  // Highest number of additional adults / children the counters allow
  // (0 hides the counter).
  maxAdults: number;
  maxChildren: number;
  addOns?: FeeAddOn[];
  sponsor?: SponsorFees;
  // "Not included: health examinations, police certificates, …"
  notIncluded: string;
  notes?: string[];
  // Official page to confirm the total.
  confirmUrl: string;
  confirmLabel: string;
  // Who the first column is for, when the reader isn't the applicant (e.g.
  // an employer guide): heading "The worker pays", split "the worker".
  applicantHeading?: string;
  split?: { applicant: string; sponsor: string };
}

// ── Timeline from a date you choose ─────────────────────────────────────

export interface TimelineMilestone {
  // Months after the start date.
  months: number;
  label: string;
  detail: string;
  kind: "goal" | "info" | "end";
}

export interface TimelineConfig extends SectionCopy {
  // Name of the start point, e.g. "491 granted".
  startLabel: string;
  // Prompt above the month and year pickers.
  startPrompt: string;
  milestones: TimelineMilestone[];
  // Optional age check at one milestone (index into `milestones`).
  age?: { milestone: number; limit: number; under: string; over: string };
  footnote: string;
}

// ── Single slider with result bands ─────────────────────────────────────

export interface MeterBand {
  // Applies from this value up to the next band.
  from: number;
  status: CheckStatus;
  title: string;
  body: string;
}

export interface MeterConfig extends SectionCopy {
  question: string;
  unit: string;
  min: number;
  max: number;
  step: number;
  initial: number;
  marks: { at: number; label: string }[];
  bands: MeterBand[];
  footnote: string;
  link?: { label: string; href: string; external?: boolean };
}

// ── Several sliders, each a rule that passes or fails ──────────────────

export interface RuleCheck {
  id: string;
  label: string;
  help?: string;
  unit: string;
  min: number;
  max: number;
  step: number;
  initial: number;
  // Passes when the value is at least / at most this.
  atLeast?: number;
  atMost?: number;
  pass: string;
  fail: string;
}

export interface RuleChecksConfig extends SectionCopy {
  checks: RuleCheck[];
  allPass: { title: string; body: string };
  someFail: { title: string; body: string };
  footnote: string;
  link?: { label: string; href: string; external?: boolean };
}

// ── Evidence builder (tick what you have) ───────────────────────────────

export interface EvidenceGroup {
  id: string;
  title: string;
  icon: string;
  // Why the decision-maker looks at this.
  why: string;
  items: string[];
}

export interface EvidenceConfig extends SectionCopy {
  groups: EvidenceGroup[];
  footnote: string;
}

// ── Student tools ───────────────────────────────────────────────────────

export interface WorkHoursConfig {
  // Hours allowed in any fortnight while the course is in session.
  limit: number;
  // "Condition 8105"
  condition: string;
  breakNote: string;
  footnote: string;
}

export interface FundsConfig {
  // Annual living costs.
  living: { you: number; partner: number; child: number };
  // Annual school costs for each school-age child.
  schooling: number;
  // Travel amounts by where you travel from; the first is the default.
  travel: { label: string; amount: number }[];
  footnote: string;
  // Another way to show capacity, e.g. annual income.
  alternative?: string;
}

// ── 482-specific widgets ────────────────────────────────────────────────

export interface OccupationGroup {
  // ANZSCO Major Group number.
  id: number;
  label: string;
  examples: string;
  // Can use the 482 Specialist Skills stream.
  specialist: boolean;
}

export interface StreamFinderConfig {
  csit: number;
  ssit: number;
  // e.g. "nominations lodged from 1 July 2026 to 30 June 2027"
  validFor: string;
  sliderMin: number;
  sliderMax: number;
  defaultSalary: number;
  groups: OccupationGroup[];
  listUrl: string;
}

export interface CostConfig {
  primary: number;
  adult: number;
  child: number;
  stac: number;
  sponsorship: number;
  nomination: number;
  safSmall: number;
  safLarge: number;
  maxYears: number;
  estimatorUrl: string;
}

export interface JobGapConfig {
  perGap: number;
  total: number;
  countedFrom: string;
  // The work condition, e.g. "8607" (482) or "8608" (494).
  condition: string;
  // Glossary id for the condition, if defined.
  termId?: string;
}

export interface PrRoadConfig {
  yearsToPr: number;
  maxStayYears: number;
  ageLimit: number;
  prVisaName: string;
  prVisaHref: string;
  exemptionsNote: string;
}

export interface PointsWidgetConfig {
  // Pre-selects the nomination points for this visa.
  visa: "189" | "190" | "491";
}

export interface VisaExplainer {
  slug: string;
  factsAsAt: string;
  // The visa (or topic) in one plain sentence, at most 220 characters.
  oneLiner: string;
  // Exactly three ideas that carry the whole concept.
  bigIdeas: { title: string; body: string; icon: string }[];
  // Four to six rows for the hero "at a glance" card.
  heroCard: { label: string; value: string; icon: string }[];
  // What the facts were checked against, completing "Facts checked 12
  // October 2026 against …". Defaults to Home Affairs and the Migration Act
  // and Regulations.
  checkedAgainst?: string;
  // Two to four players; flows connect them.
  actors: ExplainerActor[];
  flows: ExplainerFlow[];
  // Heading of the step-by-step timeline, e.g. "From job offer to permanent residence".
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

  // Optional tools, shown in this order.
  finder?: FinderConfig;
  streamFinder?: StreamFinderConfig;
  points?: PointsWidgetConfig;
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
