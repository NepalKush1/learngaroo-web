// Checks the interactive explainers (data/visas/explainers) against the
// rules in scripts/sources/EXPLAINER-BRIEF.md. The most important check is
// the fact guard: every figure in an explainer must also appear on the
// verified VisaPage for the same slug (or in its `verifiedExtras`), so the
// plain-language layer can never drift from the sourced content.
// The service explainers (data/service-explainers) follow the same rules,
// with figures checked against every library page the service covers; the
// service's guide (data/visa-guides.ts) is checked against those pages too.
// Run: npm run validate:visas (ONLY=slug,slug limits the report).
import { visaPages, visasForService } from "../data/visas/index";
import type { VisaPage } from "../data/visas/types";
import { visaExplainers } from "../data/visas/explainers/index";
import type { FinderConfig, VisaExplainer } from "../data/visas/explainers/types";
import { serviceExplainers } from "../data/service-explainers/index";
import type { ServiceExplainer } from "../data/service-explainers/types";
import { services } from "../data/services";
import { visaGuides, type VisaGuide } from "../data/visa-guides";
import { occupations } from "../data/occupations";

type AnyExplainer = VisaExplainer | ServiceExplainer;

const only = (process.env.ONLY ?? "")
  .split(",")
  .map((item) => item.trim())
  .filter(Boolean);

const problems: string[] = [];
const warn = (slug: string, message: string) => problems.push(`${slug}: ${message}`);

function textOf(value: unknown): string {
  if (typeof value === "string") return value;
  if (typeof value === "number") return String(value);
  if (Array.isArray(value)) return value.map(textOf).join("\n");
  if (value && typeof value === "object") return Object.values(value as Record<string, unknown>).map(textOf).join("\n");
  return "";
}

// ── Number normalisation shared by page text and explainer text ────────

const WORDS: Record<string, string> = {
  one: "1",
  two: "2",
  three: "3",
  four: "4",
  five: "5",
  six: "6",
  seven: "7",
  eight: "8",
  nine: "9",
  ten: "10",
  eleven: "11",
  twelve: "12",
  fifteen: "15",
  eighteen: "18",
  twenty: "20",
  thirty: "30",
  "forty-five": "45",
  sixty: "60",
  ninety: "90",
};

function normalise(text: string): string {
  let out = text.toLowerCase();
  out = out.replace(/\[\[([a-z0-9-]+)(?:\|([^\]]+))?\]\]/g, (_, id: string, label?: string) => label ?? id);
  out = out.replace(/(\d),(?=\d{3}\b)/g, "$1");
  out = out.replace(/\b(forty-five|one|two|three|four|five|six|seven|eight|nine|ten|eleven|twelve|fifteen|eighteen|twenty|thirty|sixty|ninety)\b/g, (word) => WORDS[word] ?? word);
  out = out.replace(/(\d)-(year|month|week|day|hour|point)/g, "$1 $2");
  out = out.replace(/\s*per cent\b|\s*percent\b/g, "%");
  return out;
}

const UNIT = /^(%|years?|months?|weeks?|days?|hours?|points?)$/;

// Claims a string makes: numbers with their unit where there is one.
function claims(text: string): { value: string; unit?: string }[] {
  const out: { value: string; unit?: string }[] = [];
  const pattern = /(?<![\w.$])(\d+(?:\.\d+)?)(?:\s*(%|years?|months?|weeks?|days?|hours?|points?)\b|%)?/g;
  const normal = normalise(text);
  let match: RegExpExecArray | null;
  while ((match = pattern.exec(normal)) !== null) {
    const unit = match[2] ?? (match[0].endsWith("%") ? "%" : undefined);
    out.push({ value: match[1], unit });
  }
  // Amounts written "A$4015" are caught here (the lookbehind skips "$").
  const money = /a\$(\d+(?:\.\d+)?)/g;
  while ((match = money.exec(normal)) !== null) out.push({ value: match[1] });
  return out;
}

function supported(claim: { value: string; unit?: string }, corpus: string): boolean {
  const number = claim.value.replace(".", "\\.");
  if (claim.unit && UNIT.test(claim.unit)) {
    const stem = claim.unit === "%" ? "%" : claim.unit.replace(/s$/, "");
    if (new RegExp(`(?<![\\d.])${number}\\s*${stem === "%" ? "%" : stem}`).test(corpus)) return true;
    // "2 years" is also fine when the page says "24 months", and vice versa.
    const n = Number(claim.value);
    if (stem === "year" && new RegExp(`(?<![\\d.])${n * 12}\\s*month`).test(corpus)) return true;
    if (stem === "month" && n % 12 === 0 && new RegExp(`(?<![\\d.])${n / 12}\\s*year`).test(corpus)) return true;
    return false;
  }
  if (Number(claim.value) < 10) return true;
  return new RegExp(`(?<![\\d.])${number}(?![\\d])`).test(corpus);
}

// ── Walk every string with its path ────────────────────────────────────

const SKIP_KEYS = new Set(["icon", "href", "url", "source", "sourceUrl", "confirmUrl", "listUrl", "estimatorUrl", "prVisaHref", "id", "slug", "page", "pages", "next", "start", "termId", "factsAsAt", "verifiedExtras", "tone", "kind", "status", "per", "who", "from", "to", "visa", "condition"]);

function walk(node: unknown, path: string, visit: (path: string, value: string | number) => void) {
  if (typeof node === "string" || typeof node === "number") {
    visit(path, node);
    return;
  }
  if (Array.isArray(node)) {
    node.forEach((item, index) => walk(item, `${path}[${index}]`, visit));
    return;
  }
  if (node && typeof node === "object") {
    for (const [key, value] of Object.entries(node as Record<string, unknown>)) {
      if (SKIP_KEYS.has(key)) continue;
      walk(value, path ? `${path}.${key}` : key, visit);
    }
  }
}

// Fields rendered with <RichText>, where glossary tokens are allowed.
const TOKEN_FIELDS = [
  /^actors\[\d+\]\.(role|does\[\d+\])$/,
  /^flows\[\d+\]\.detail$/,
  /^stages\[\d+\]\.(description|points\[\d+\])$/,
  /^quiz\[\d+\]\.(help|options\[\d+\]\.note)$/,
  /^roles\[\d+\]\.(intro|groups\[\d+\]\.items\[\d+\])$/,
  /^finder\.(questions\[\d+\]\.help|outcomes\[\d+\]\.(body|watch\[\d+\]))$/,
  /^evidence\.groups\[\d+\]\.why$/,
  /^meter\.bands\[\d+\]\.body$/,
  /^ruleChecks\.(checks\[\d+\]\.(help|pass|fail)|allPass\.body|someFail\.body)$/,
  /^timeline\.milestones\[\d+\]\.detail$/,
];

const LIMITS: [RegExp, number][] = [
  [/^oneLiner$/, 220],
  [/^bigIdeas\[\d+\]\.title$/, 40],
  [/^bigIdeas\[\d+\]\.body$/, 130],
  [/^heroCard\[\d+\]\.label$/, 28],
  [/^heroCard\[\d+\]\.value$/, 60],
  [/^actors\[\d+\]\.short$/, 14],
  [/^actors\[\d+\]\.name$/, 40],
  [/^flows\[\d+\]\.label$/, 24],
  [/^stages\[\d+\]\.short$/, 12],
  [/^stages\[\d+\]\.title$/, 60],
  [/^stages\[\d+\]\.youHold$/, 90],
  [/^stages\[\d+\]\.cost$/, 70],
  [/^journeyTitle$/, 60],
  [/^quiz\[\d+\]\.topic$/, 28],
  [/^quiz\[\d+\]\.question$/, 110],
  [/^quiz\[\d+\]\.options\[\d+\]\.label$/, 110],
  [/^quiz\[\d+\]\.options\[\d+\]\.note$/, 260],
  [/^myths\[\d+\]\.myth$/, 110],
  [/^myths\[\d+\]\.fact$/, 330],
  [/^glossary\[\d+\]\.term$/, 40],
  [/^glossary\[\d+\]\.definition$/, 300],
  [/\.navLabel$/, 16],
  [/^finder\.questions\[\d+\]\.options\[\d+\]\.label$/, 90],
  [/^finder\.outcomes\[\d+\]\.body$/, 360],
  // Service explainers only.
  [/^accent$/, 40],
  [/^name$/, 40],
  [/^compare\.rows\[\d+\]\.label$/, 32],
  [/^compare\.columns\[\d+\]\.name$/, 28],
  [/^compare\.columns\[\d+\]\.tagline$/, 50],
  [/^compare\.columns\[\d+\]\.(values\[\d+\]|bestFor)$/, 90],
];

const FORBIDDEN: [RegExp, string][] = [
  [/processing (time|times)[^.]*\b\d+\s*(to|-|–)?\s*\d*\s*(day|week|month)s?\b/i, "processing-time figure"],
  [/(approval|success) rate/i, "approval or success rate"],
  [/\b(easy|easily|hassle-free|fast-track(ed)?|quick approval)\b/i, "ease or speed claim"],
  [/[“”]/, "smart double quotes"],
];

function guaranteeWording(line: string): boolean {
  if (!/\bguarantee[ds]?\b/i.test(line)) return false;
  const allowed =
    /bank guarantee|assurance of support|guarantee of|\b(no|not|cannot|can't|does not|doesn't|do not|don't|never|without|isn't|nor)\s+(a\s+|an\s+)?guarantee/i;
  return !allowed.test(line);
}

const knownSections = (explainer: AnyExplainer): Set<string> => {
  const ids = ["picture", "journey", "self-check", "myths", "jargon", "detail", "faq"];
  if ("compare" in explainer) {
    ids.push("compare", "help");
    if (explainer.authorityFinder) ids.push("authorities");
    if (explainer.stateAssessment) ids.push("state-assessment");
  }
  if (explainer.finder) ids.push("finder");
  if (explainer.streamFinder) ids.push("stream");
  if (explainer.points) ids.push("points");
  if (explainer.balanceOfFamily) ids.push("family-test");
  if (explainer.evidence) ids.push("evidence");
  if (explainer.workHours) ids.push("work-hours");
  if (explainer.funds) ids.push("funds");
  if (explainer.meter) ids.push("meter");
  if (explainer.ruleChecks) ids.push("rules");
  if (explainer.fees) ids.push("fees");
  if (explainer.costs) ids.push("cost-estimator");
  if (explainer.jobGap) ids.push("job-gap");
  if (explainer.timeline) ids.push("timeline");
  if (explainer.prRoad) ids.push("pr-road");
  if (explainer.roles && explainer.roles.length > 1) ids.push("roles");
  return new Set(ids);
};

const pageRoutes = new Set(visaPages.map((page) => `/visas/${page.category}/${page.slug}`));
const staticRoutes = new Set([
  "/",
  "/visas",
  "/occupations",
  "/state-nomination",
  "/state-nomination/assessment",
  "/updates",
  "/bookings",
  "/faq",
  "/contact",
  "/about",
  "/services",
  "/tools",
  "/tools/points-calculator",
  "/tools/visa-finder",
  "/tools/fee-calculator",
  "/tools/regional-postcode-checker",
  "/tools/tasmania-points-calculator",
  "/tools/canberra-matrix-calculator",
  "/tools/victoria-points-calculator",
  "/services/student-visas",
  "/services/skilled-visas",
  "/services/skills-assessments",
  "/services/employer-sponsored-visas",
  "/services/family-partner-visas",
  "/services/visitor-tourist-visas",
  "/services/art-reviews",
  "/visas/employer-sponsored",
  "/visas/skilled",
  "/visas/family",
  "/visas/study",
  "/visas/appeals-and-review",
  "/visas/other-visas",
]);
for (const occupation of occupations) staticRoutes.add(`/occupations/${occupation.slug}`);
for (const state of ["new-south-wales", "victoria", "queensland", "south-australia", "western-australia", "tasmania", "australian-capital-territory", "northern-territory"]) {
  staticRoutes.add(`/state-nomination/${state}`);
}

function checkLink(slug: string, href: string, sections: Set<string>, where: string) {
  if (href.startsWith("#")) {
    if (!sections.has(href.slice(1))) warn(slug, `${where}: anchor ${href} is not a section on this page`);
    return;
  }
  if (href.startsWith("/")) {
    const path = href.split("#")[0];
    if (!pageRoutes.has(path) && !staticRoutes.has(path)) warn(slug, `${where}: unknown internal link ${href}`);
    return;
  }
  if (!/^https:\/\//.test(href)) warn(slug, `${where}: link must be https or internal (${href})`);
}

function checkFinder(slug: string, finder: FinderConfig, sections: Set<string>) {
  const questions = new Map(finder.questions.map((question) => [question.id, question]));
  const outcomes = new Map(finder.outcomes.map((outcome) => [outcome.id, outcome]));
  if (questions.size !== finder.questions.length) warn(slug, "finder: duplicate question ids");
  if (outcomes.size !== finder.outcomes.length) warn(slug, "finder: duplicate outcome ids");
  if (!questions.has(finder.start)) warn(slug, `finder: start "${finder.start}" is not a question`);
  const reached = new Set<string>();
  const visit = (id: string, trail: string[]) => {
    if (trail.includes(id)) {
      warn(slug, `finder: loop through ${[...trail, id].join(" → ")}`);
      return;
    }
    reached.add(id);
    const question = questions.get(id);
    if (!question) {
      if (!outcomes.has(id)) warn(slug, `finder: "${id}" is neither a question nor an outcome`);
      return;
    }
    if (question.options.length < 2 || question.options.length > 6) warn(slug, `finder: question "${id}" has ${question.options.length} options`);
    for (const option of question.options) visit(option.next, [...trail, id]);
  };
  visit(finder.start, []);
  for (const id of [...questions.keys(), ...outcomes.keys()]) if (!reached.has(id)) warn(slug, `finder: "${id}" can never be reached`);
  for (const outcome of finder.outcomes) if (outcome.href) checkLink(slug, outcome.href, sections, `finder outcome "${outcome.id}"`);
}

const libraryCorpus = normalise(visaPages.map(textOf).join("\n"));
const extrasText = (explainer: AnyExplainer) => (explainer.verifiedExtras ?? []).map((extra) => extra.fact).join("\n");

// The rules shared by visa and service explainers. Figures must appear in
// `corpus` (the page text plus verifiedExtras); finder text may also rely on
// any library page.
function checkExplainer(slug: string, explainer: AnyExplainer, corpus: string, sections: Set<string>) {
  // Structure.
  const count = (label: string, length: number, min: number, max: number) => {
    if (length < min || length > max) warn(slug, `${label}: ${length} (expected ${min}–${max})`);
  };
  count("bigIdeas", explainer.bigIdeas.length, 3, 3);
  count("heroCard", explainer.heroCard.length, 4, 6);
  count("actors", explainer.actors.length, 2, 4);
  count("flows", explainer.flows.length, 2, 6);
  count("stages", explainer.stages.length, 4, 8);
  count("quiz", explainer.quiz.length, 4, 8);
  count("myths", explainer.myths.length, 4, 8);
  count("glossary", explainer.glossary.length, 5, 20);
  if (explainer.roles) count("roles", explainer.roles.length, 2, 3);
  const actorIds = new Set(explainer.actors.map((actor) => actor.id));
  if (actorIds.size !== explainer.actors.length) warn(slug, "duplicate actor ids");
  if (!actorIds.has("you")) warn(slug, 'no actor with id "you"');
  for (const flow of explainer.flows) {
    if (!actorIds.has(flow.from) || !actorIds.has(flow.to)) warn(slug, `flow "${flow.label}" uses an unknown actor`);
    if (flow.from === flow.to) warn(slug, `flow "${flow.label}" goes from an actor to itself`);
  }
  const stageIds = new Set<string>();
  for (const stage of explainer.stages) {
    if (stageIds.has(stage.id)) warn(slug, `duplicate stage id "${stage.id}"`);
    stageIds.add(stage.id);
    if (stage.who.length === 0 || stage.who.some((who) => !actorIds.has(who))) warn(slug, `stage "${stage.id}" has an unknown or missing actor`);
  }
  for (const question of explainer.quiz) {
    if (question.options.length < 2 || question.options.length > 5) warn(slug, `quiz "${question.id}" has ${question.options.length} options`);
    if (new Set(question.options.map((option) => option.value)).size !== question.options.length) warn(slug, `quiz "${question.id}" has duplicate values`);
  }
  if (new Set(explainer.quiz.map((question) => question.id)).size !== explainer.quiz.length) warn(slug, "duplicate quiz ids");
  const glossaryIds = new Set(explainer.glossary.map((term) => term.id));
  if (glossaryIds.size !== explainer.glossary.length) warn(slug, "duplicate glossary ids");

  // Links.
  for (const question of explainer.quiz) for (const option of question.options) if (option.link) checkLink(slug, option.link.href, sections, `quiz "${question.id}"`);
  for (const role of explainer.roles ?? []) if (role.link) checkLink(slug, role.link.href, sections, `role "${role.id}"`);
  if (explainer.meter?.link) checkLink(slug, explainer.meter.link.href, sections, "meter");
  if (explainer.ruleChecks?.link) checkLink(slug, explainer.ruleChecks.link.href, sections, "rule checks");
  if (explainer.finder) checkFinder(slug, explainer.finder, sections);
  for (const extra of explainer.verifiedExtras ?? []) {
    if (extra.source.startsWith("/")) {
      const other = visaPages.find((item) => `/visas/${item.category}/${item.slug}` === extra.source);
      if (!other) warn(slug, `verifiedExtras source ${extra.source} is not a library page`);
      else {
        const otherCorpus = normalise(textOf(other));
        for (const claim of claims(extra.fact)) if (!supported(claim, otherCorpus)) warn(slug, `verifiedExtras: "${claim.value}${claim.unit ? " " + claim.unit : ""}" is not on ${extra.source}`);
      }
    } else if (!/^https:\/\/([a-z0-9-]+\.)*(gov\.au|naati\.com\.au)\//.test(extra.source)) {
      warn(slug, `verifiedExtras source must be an official (gov.au) page or a library path (${extra.source})`);
    }
  }

  // Specific widgets.
  if (explainer.fees) {
    const fees = explainer.fees;
    if (fees.variants.length === 0) warn(slug, "fees: no variants");
    if (new Set(fees.variants.map((variant) => variant.id)).size !== fees.variants.length) warn(slug, "fees: duplicate variant ids");
    for (const variant of fees.variants) if (variant.primary.length === 0) warn(slug, `fees: variant "${variant.id}" has no primary charge`);
    if (!/^https:\/\//.test(fees.confirmUrl)) warn(slug, "fees: confirmUrl must be https");
    // It completes "Confirm the exact total for your situation in the …".
    if (/^(confirm|check|see|use|visit)\b/i.test(fees.confirmLabel)) warn(slug, `fees: confirmLabel should name the page, not start with a verb ("${fees.confirmLabel}")`);
  }
  if (explainer.timeline) {
    const months = explainer.timeline.milestones.map((milestone) => milestone.months);
    if (months.some((value, index) => value <= 0 || (index > 0 && value < months[index - 1]))) warn(slug, "timeline: milestones must be after the start and in order");
    if (explainer.timeline.age && !explainer.timeline.milestones[explainer.timeline.age.milestone]) warn(slug, "timeline: age.milestone is out of range");
  }
  if (explainer.meter) {
    const meter = explainer.meter;
    if (meter.bands.length === 0 || meter.bands[0].from !== meter.min) warn(slug, "meter: the first band must start at min");
    if (meter.bands.some((band, index) => index > 0 && band.from <= meter.bands[index - 1].from)) warn(slug, "meter: bands must rise");
    if (meter.initial < meter.min || meter.initial > meter.max) warn(slug, "meter: initial out of range");
  }
  if (explainer.ruleChecks) {
    for (const check of explainer.ruleChecks.checks) {
      if (check.atLeast === undefined && check.atMost === undefined) warn(slug, `rule "${check.id}" needs atLeast or atMost`);
      if (check.initial < check.min || check.initial > check.max) warn(slug, `rule "${check.id}" initial out of range`);
    }
  }
  if (explainer.evidence) {
    count("evidence groups", explainer.evidence.groups.length, 2, 6);
    for (const group of explainer.evidence.groups) count(`evidence "${group.id}" items`, group.items.length, 2, 8);
  }

  // Strings: tokens, limits, forbidden wording, and the fact guard.
  const finderCorpus = libraryCorpus + "\n" + corpus;
  walk(explainer, "", (path, value) => {
    if (typeof value === "number") return;
    // Option values are internal ids, not copy.
    if (/options\[\d+\]\.value$/.test(path)) return;
    const tokens = [...value.matchAll(/\[\[([a-z0-9-]+)(?:\|[^\]]+)?\]\]/g)];
    if (tokens.length > 0 && !TOKEN_FIELDS.some((pattern) => pattern.test(path))) warn(slug, `${path}: glossary tokens are not rendered in this field`);
    for (const token of tokens) if (!glossaryIds.has(token[1])) warn(slug, `${path}: unknown glossary id "${token[1]}"`);
    if (/\[\[|\]\]/.test(value.replace(/\[\[([a-z0-9-]+)(?:\|[^\]]+)?\]\]/g, ""))) warn(slug, `${path}: malformed glossary token`);
    for (const [limitPath, max] of LIMITS) if (limitPath.test(path) && value.length > max) warn(slug, `${path}: ${value.length} characters (max ${max})`);
    for (const [pattern, label] of FORBIDDEN) if (pattern.test(value)) warn(slug, `${path}: ${label}: "${value.slice(0, 80)}"`);
    if (guaranteeWording(value)) warn(slug, `${path}: guarantee wording: "${value.slice(0, 80)}"`);
    const against = path.startsWith("finder.") ? finderCorpus : corpus;
    for (const claim of claims(value)) {
      if (!supported(claim, against)) warn(slug, `${path}: "${claim.value}${claim.unit ? " " + claim.unit : ""}" is not on the page or in verifiedExtras`);
    }
  });

  // Figures held as numbers in widget configs.
  const amount = (value: number, where: string) => {
    if (value >= 10 && !supported({ value: String(value) }, corpus)) warn(slug, `${where}: ${value} is not on the page or in verifiedExtras`);
  };
  for (const variant of explainer.fees?.variants ?? []) {
    for (const line of [...variant.primary, ...(variant.adult ?? []), ...(variant.child ?? [])]) amount(line.amount, `fees "${variant.id}" ${line.label}`);
    for (const sponsor of [variant.sponsor].filter(Boolean)) {
      for (const line of [...(sponsor?.lines ?? []), ...(sponsor?.choice?.options.flatMap((option) => option.lines) ?? [])]) amount(line.amount, `fees "${variant.id}" sponsor ${line.label}`);
    }
  }
  for (const addOn of explainer.fees?.addOns ?? []) amount(addOn.amount, `fees add-on ${addOn.label}`);
  for (const line of [...(explainer.fees?.sponsor?.lines ?? []), ...(explainer.fees?.sponsor?.choice?.options.flatMap((option) => option.lines) ?? [])]) amount(line.amount, `fees sponsor ${line.label}`);
  if (explainer.funds) {
    const funds = explainer.funds;
    [funds.living.you, funds.living.partner, funds.living.child, funds.schooling, ...funds.travel.map((item) => item.amount)].forEach((value) => amount(value, "funds"));
  }
  for (const band of explainer.meter?.bands ?? []) if (band.from !== explainer.meter?.min) amount(band.from, `meter band "${band.title}"`);
  for (const check of explainer.ruleChecks?.checks ?? []) {
    for (const value of [check.atLeast, check.atMost]) {
      if (value !== undefined && !supported({ value: String(value), unit: check.unit }, corpus) && !supported({ value: String(value) }, corpus)) warn(slug, `rule "${check.id}": ${value} ${check.unit} is not on the page`);
    }
  }
  for (const milestone of explainer.timeline?.milestones ?? []) {
    const ok = supported({ value: String(milestone.months), unit: "months" }, corpus) || (milestone.months % 12 === 0 && supported({ value: String(milestone.months / 12), unit: "years" }, corpus));
    if (!ok) warn(slug, `timeline "${milestone.label}": ${milestone.months} months is not on the page`);
  }
  if (explainer.timeline?.age) amount(explainer.timeline.age.limit, "timeline age limit");
  if (explainer.workHours && !supported({ value: String(explainer.workHours.limit), unit: "hours" }, corpus)) warn(slug, `workHours: ${explainer.workHours.limit} hours is not on the page`);
  if (explainer.jobGap) {
    amount(explainer.jobGap.perGap, "jobGap perGap");
    amount(explainer.jobGap.total, "jobGap total");
  }
}

const seen = new Set<string>();

for (const explainer of visaExplainers) {
  const slug = explainer.slug;
  if (seen.has(slug)) warn(slug, "duplicate explainer");
  seen.add(slug);
  if (only.length > 0 && !only.includes(slug)) continue;
  const page = visaPages.find((item) => item.slug === slug);
  if (!page) {
    warn(slug, "no visa page with this slug");
    continue;
  }
  if (explainer.factsAsAt !== page.factsAsAt) warn(slug, `factsAsAt "${explainer.factsAsAt}" differs from the page ("${page.factsAsAt}")`);
  checkExplainer(slug, explainer, normalise(textOf(page) + "\n" + extrasText(explainer)), knownSections(explainer));
}

// ── Service explainers and guides ───────────────────────────────────────

// A service's guide: no forbidden wording, and every figure on the pages
// the service covers (or in the explainer's verifiedExtras).
function checkGuide(label: string, guide: VisaGuide, corpus: string) {
  walk(guide, "", (path, value) => {
    if (typeof value === "number") return;
    for (const [pattern, name] of FORBIDDEN) if (pattern.test(value)) warn(label, `${path}: ${name}: "${value.slice(0, 80)}"`);
    if (guaranteeWording(value)) warn(label, `${path}: guarantee wording: "${value.slice(0, 80)}"`);
    for (const claim of claims(value)) {
      if (!supported(claim, corpus)) warn(label, `${path}: "${claim.value}${claim.unit ? " " + claim.unit : ""}" is not on the covered pages or in verifiedExtras`);
    }
  });
}

const DATE = /^\d{1,2} (January|February|March|April|May|June|July|August|September|October|November|December) 20\d\d$/;
const serviceSlugs = new Set(services.map((service) => service.slug));
const seenServices = new Set<string>();

for (const explainer of serviceExplainers) {
  const slug = explainer.slug;
  const label = `services/${slug}`;
  if (seenServices.has(slug)) warn(label, "duplicate service explainer");
  seenServices.add(slug);
  if (only.length > 0 && !only.includes(slug)) continue;
  if (!serviceSlugs.has(slug)) warn(label, "no service with this slug in data/services.ts");
  if (!DATE.test(explainer.factsAsAt)) warn(label, `factsAsAt "${explainer.factsAsAt}" should read like "13 October 2026"`);
  if (new Set(explainer.pages).size !== explainer.pages.length) warn(label, "pages: duplicates");
  if (explainer.pages.length < 2 || explainer.pages.length > 12) warn(label, `pages: ${explainer.pages.length} (expected 2–12)`);
  const pages: VisaPage[] = [];
  for (const pageSlug of explainer.pages) {
    const page = visaPages.find((item) => item.slug === pageSlug);
    if (page) pages.push(page);
    else warn(label, `pages: "${pageSlug}" is not a library page`);
  }
  const compare = explainer.compare;
  if (compare.rows.length < 4 || compare.rows.length > 7) warn(label, `compare rows: ${compare.rows.length} (expected 4–7)`);
  if (compare.columns.length < 2 || compare.columns.length > 4) warn(label, `compare columns: ${compare.columns.length} (expected 2–4)`);
  for (const column of compare.columns) {
    if (!explainer.pages.includes(column.page)) warn(label, `compare column "${column.name}": page "${column.page}" is not in pages`);
    if (column.values.length !== compare.rows.length) warn(label, `compare column "${column.name}": ${column.values.length} values for ${compare.rows.length} rows`);
  }
  const corpus = normalise(pages.map(textOf).join("\n") + "\n" + extrasText(explainer));
  checkExplainer(label, explainer, corpus, knownSections(explainer));
  const guide = visaGuides[slug];
  if (guide) checkGuide(`${label} (guide)`, guide, corpus);
  else warn(label, "no guide for this service in data/visa-guides.ts");
}

const covered = new Set(visaExplainers.map((explainer) => explainer.slug));
const missing = visaPages.filter((page) => !covered.has(page.slug));

const servicesWithout = services.filter((service) => !seenServices.has(service.slug));
// Guides of services without an explainer yet: checked against every library
// page in the service's categories.
for (const service of servicesWithout) {
  if (only.length > 0 && !only.includes(service.slug)) continue;
  const guide = visaGuides[service.slug];
  if (guide) checkGuide(`services/${service.slug} (guide)`, guide, normalise(visasForService(service.slug, 100).map(textOf).join("\n")));
}

console.log(`${visaExplainers.length} explainers checked${only.length ? ` (report limited to ${only.join(", ")})` : ""}; ${missing.length} pages still use the standard layout.`);
console.log(`${serviceExplainers.length} service explainers checked; ${servicesWithout.length} services still use the standard layout${servicesWithout.length ? ` (${servicesWithout.map((service) => service.slug).join(", ")})` : ""}.`);
if (problems.length === 0) console.log("No explainer problems found.");
else {
  console.log(`${problems.length} explainer problems:`);
  for (const problem of problems) console.log(" - " + problem);
  process.exitCode = 1;
}
