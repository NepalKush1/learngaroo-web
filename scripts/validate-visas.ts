// Checks the visa library data for the rules in the authoring brief:
// field completeness, SEO lengths, dated facts, forbidden claims, broken
// internal links and duplicate slugs. Run: npm run validate:visas
import { visaPages, visaCategories } from "../data/visas/index";

const serviceSlugs = ["student-visas", "skilled-visas", "skills-assessments", "employer-sponsored-visas", "family-partner-visas", "visitor-tourist-visas", "art-reviews"];
const toolRoutes = ["/tools/points-calculator", "/tools/visa-finder", "/tools/fee-calculator", "/tools/regional-postcode-checker", "/tools/tasmania-points-calculator", "/tools/canberra-matrix-calculator", "/tools/victoria-points-calculator"];

const EXPECTED_DATE = "12 October 2026";
const masterSlugs: Record<string, string[]> = {
  "employer-sponsored": ["skills-in-demand-visa-482", "employer-nomination-scheme-visa-186", "skilled-employer-sponsored-regional-visa-494", "temporary-work-short-stay-specialist-visa-400", "training-visa-407", "temporary-activity-visa-408", "temporary-work-international-relations-visa-403", "labour-agreements-and-dama", "employer-sponsorship-and-nomination"],
  skilled: ["skilled-independent-visa-189", "skilled-nominated-visa-190", "skilled-work-regional-visa-491", "permanent-residence-skilled-regional-visa-191", "temporary-graduate-visa-485", "national-innovation-visa-858", "skilled-migration-points-test", "skillselect-expression-of-interest", "skills-assessment-for-migration"],
  family: ["partner-visa-onshore-820-801", "partner-visa-offshore-309-100", "prospective-marriage-visa-300", "child-visa-101-802", "adoption-visa-102", "orphan-relative-visa-117-837", "dependent-child-visa-445", "new-zealand-citizen-family-relationship-visa-461", "contributory-parent-visa-143-173", "contributory-aged-parent-visa-864-884", "parent-visa-103", "aged-parent-visa-804", "sponsored-parent-temporary-visa-870", "remaining-relative-visa-115-835", "carer-visa-116-836", "aged-dependent-relative-visa-114-838", "balance-of-family-test"],
  study: ["student-visa-500", "student-guardian-visa-590", "genuine-student-requirement", "student-visa-financial-capacity", "student-visa-conditions-and-work-rights", "study-to-permanent-residence"],
  "appeals-and-review": ["art-review-of-visa-refusal", "art-review-of-visa-cancellation", "visa-cancellation-and-notice-of-intention", "character-test-section-501", "pic-4020-fraud-and-false-information", "section-48-bar", "schedule-3-criteria", "condition-8503-no-further-stay-waiver", "ministerial-intervention", "judicial-review-of-migration-decisions", "health-requirement-and-health-waiver", "exclusion-periods-pic-4013-4014", "natural-justice-and-adverse-information"],
  "other-visas": ["visitor-visa-600", "electronic-travel-authority-601", "evisitor-visa-651", "working-holiday-visa-417", "work-and-holiday-visa-462", "medical-treatment-visa-602", "bridging-visas-a-b-c-e", "resident-return-visa-155-157", "special-category-visa-444", "business-innovation-and-investment-visa-188-888", "former-resident-visa-151", "pacific-engagement-visa-192", "australian-citizenship-by-conferral"],
};
const knownRoutes = new Set<string>([
  "/", "/visas", "/occupations", "/state-nomination", "/state-nomination/assessment", "/updates", "/bookings", "/faq", "/contact", "/about", "/services", "/tools",
  ...serviceSlugs.map((s) => `/services/${s}`),
  ...toolRoutes,
  ...visaCategories.map((c) => `/visas/${c.slug}`),
  ...Object.entries(masterSlugs).flatMap(([cat, slugs]) => slugs.map((s) => `/visas/${cat}/${s}`)),
]);
const stateSlugs = ["new-south-wales", "victoria", "queensland", "south-australia", "western-australia", "tasmania", "australian-capital-territory", "northern-territory"];
for (const s of stateSlugs) knownRoutes.add(`/state-nomination/${s}`);

const problems: string[] = [];
const warn = (page: string, msg: string) => problems.push(`${page}: ${msg}`);
const seen = new Set<string>();

function textOf(value: unknown): string {
  if (typeof value === "string") return value;
  if (Array.isArray(value)) return value.map(textOf).join("\n");
  if (value && typeof value === "object") return Object.values(value as Record<string, unknown>).map(textOf).join("\n");
  return "";
}

for (const page of visaPages) {
  const id = `${page.category}/${page.slug}`;
  if (seen.has(id)) warn(id, "duplicate slug");
  seen.add(id);
  if (!masterSlugs[page.category]?.includes(page.slug)) warn(id, "slug not in the master list");
  if (page.factsAsAt !== EXPECTED_DATE) warn(id, `factsAsAt is "${page.factsAsAt}"`);
  if (page.seoTitle.length > 60) warn(id, `seoTitle ${page.seoTitle.length} chars`);
  if (page.seoDescription.length > 160) warn(id, `seoDescription ${page.seoDescription.length} chars`);
  if (page.intro.length < 80) warn(id, "intro too short");
  if (page.tags.length < 1 || page.tags.length > 5) warn(id, `${page.tags.length} tags`);
  if (page.keyFacts.length < 4) warn(id, `${page.keyFacts.length} key facts`);
  if (page.kind === "visa" && !page.keyFacts.some((f) => /government fee/i.test(f.label))) warn(id, "no Government fee key fact");
  if (page.kind === "visa" && !page.subclass) warn(id, "visa without subclass");
  if (page.kind === "guide" && page.permanent !== null) warn(id, "guide should have permanent: null");
  if (page.whoFor.length < 2) warn(id, "whoFor < 2");
  if (page.eligibility.length < 4) warn(id, `eligibility ${page.eligibility.length}`);
  if (page.steps.length < 3) warn(id, `steps ${page.steps.length}`);
  if (page.kind === "visa" && page.costs.length < 1) warn(id, "no costs");
  if (page.faqs.length < 3) warn(id, `faqs ${page.faqs.length}`);
  if (page.legislation.length < 1) warn(id, "no legislation");
  if (page.sources.length < 1) warn(id, "no sources");
  if (page.related.length < 2) warn(id, `related ${page.related.length}`);
  if (page.keywords.length < 4) warn(id, `keywords ${page.keywords.length}`);
  for (const link of [...page.related, ...page.pathways.filter((p) => p.href).map((p) => ({ label: p.title, href: p.href as string }))]) {
    if (link.href.startsWith("/") && !knownRoutes.has(link.href.split("#")[0])) warn(id, `unknown internal link ${link.href}`);
  }
  for (const link of [...page.legislation, ...page.sources]) {
    if (!/^https?:\/\//.test(link.url)) warn(id, `bad URL ${link.url}`);
  }
  const text = textOf(page);
  const lines = text.split("\n");
  for (const line of lines) {
    if (/processing (time|times) (of|is|are|take|takes|around|about|approximately|usually|typically)\b/i.test(line) && /\b\d+\s*(to|-|–)?\s*\d*\s*(day|week|month)s?\b/i.test(line) && !/within \d+ (calendar )?days|\d+ days (of|after|from) (an |the )?(invitation|notification|decision)|decided within \d+ days|must be decided/i.test(line)) warn(id, `processing-time figure: "${line.slice(0, 90)}"`);
    const guaranteeFalsePositive = /bank guarantee|bank-guarantee|guaranteed (annual )?earnings|assurance of support|guarantee of|guarantees? (that|a )?(visa|grant|invitation|nomination)|\?\s*$/i.test(line) || /\b(no|not|cannot|does not|do not|never|without|is not|isn't|nor)\s+(a\s+|an\s+)?guarantee/i.test(line);
    if (/\bguarantee[ds]?\b/i.test(line) && !guaranteeFalsePositive) warn(id, `guarantee wording: "${line.slice(0, 90)}"`);
    if (/(approval|success) rate/i.test(line) && !/accredit|sponsor/i.test(line)) warn(id, `rate claim: "${line.slice(0, 90)}"`);
    if (/[“”]/.test(line)) warn(id, "smart quotes present");
  }
}

for (const [cat, slugs] of Object.entries(masterSlugs)) {
  for (const slug of slugs) {
    if (!visaPages.some((p) => p.category === cat && p.slug === slug)) problems.push(`${cat}/${slug}: MISSING page`);
  }
}

console.log(`${visaPages.length} pages checked.`);
if (problems.length === 0) console.log("No problems found.");
else {
  console.log(`${problems.length} problems:`);
  for (const p of problems) console.log(" - " + p);
  process.exitCode = 1;
}
