# Interactive explainer brief

Every page in the visa library (`/visas/[category]/[slug]`) gets an interactive, plain-language layer above its legal detail, in the same style as the homepage: a hero with three big ideas, a diagram of who does what, an autoplaying step-by-step timeline, a 2-minute self-check, myth-or-fact flip cards, a jargon buster and, where they help, small tools (a finder, a fee estimator, a timeline from your own date, calculators). The goal: someone with no migration knowledge understands the concept **without mental drain**, then reads the full detail if they want it.

The reference implementation is `data/visas/explainers/skills-in-demand-482.ts` (rendered at `/visas/employer-sponsored/skills-in-demand-visa-482`). Read it first, together with `data/visas/explainers/types.ts`, where every field is documented.

Project root: `learngaroo-web` (Next.js, TypeScript). This is Learniiz Migration & Visa Services, Registered Migration Agent Kush Kumar Nepal, MARN 2418608.

## Accuracy rules (these override everything else)

1. **Every fact comes from the verified page data** for the same slug in `data/visas/*.ts` (checked against Home Affairs, the legislation and the ART on 12 October 2026). The explainer re-expresses those facts simply; it never adds new law.
2. If you need a fact that is not on the page, verify it from an official source today and record it in `verifiedExtras` as `{ fact, source }`. `source` is the official URL (gov.au) you read, or the path of another library page that states it (e.g. `/visas/skilled/skilled-nominated-visa-190`; the validator then checks the figures against that page). Read Home Affairs visa pages with `python3 scripts/sources/ha_page.py URL` (see `scripts/sources/AUTHORING-BRIEF.md` for the options) and other pages with `python3 scripts/sources/fetch_text.py URL --grep REGEX`. If you cannot verify a fact, leave it out.
3. **The fact guard**: `npm run validate:visas` checks every number in your explainer against the page text plus `verifiedExtras`. Numbers with a unit ("2 years", "90 days", "48 hours", "50%") must appear with that unit on the page ("two years" and "2-year" count). Amounts and numbers of 10 or more must appear on the page. Fix every failure by correcting the figure, rewording, or adding a verified extra. Never game the check.
4. Never publish processing-time figures (link to the Home Affairs processing-times tool instead), approval or success rates, guarantees, or "easy/fast" claims. No predictions of outcomes. General information only: use "can", "may", "usually", "the likely starting point", never "you will be granted".
5. Do not copy third-party (agency) wording. Do not edit the page data files (`data/visas/*.ts`). If you find an error or inconsistency in the page data (for example two different figures for the same charge), do not work around it silently: leave the figure out of the explainer and report it.

## Writing rules

- Plain English for a reader with no migration knowledge. Short sentences (aim under 20 words). Second person ("you", "your sponsor"). Australian spelling. Name the Department "Home Affairs".
- Explain each piece of jargon the first time with a glossary token: `[[sbs|Standard Business Sponsor]]` or `[[csit]]`. Tokens only work in these fields (the validator enforces it): `actors[].role`, `actors[].does[]`, `flows[].detail`, `stages[].description`, `stages[].points[]`, `quiz[].help`, `quiz[].options[].note`, `roles[].intro`, `roles[].groups[].items[]`, `finder.questions[].help`, `finder.outcomes[].body`, `finder.outcomes[].watch[]`, `evidence.groups[].why`, `meter.bands[].body`, `ruleChecks.checks[].help|pass|fail`, `ruleChecks.allPass.body`, `ruleChecks.someFail.body`, `timeline.milestones[].detail`. Everywhere else write the plain word.
- Money as "A$4,015", dates as "1 July 2026". Straight quotes only (no “ ”); apostrophes inside strings are fine ("can't").
- Every string is complete on its own: no "see above".
- Keep within the limits in `scripts/validate-explainers.ts` (`LIMITS`): e.g. `oneLiner` ≤ 220 characters, flow labels ≤ 24, stage `short` ≤ 12, `heroCard` values ≤ 60, myth facts ≤ 330, quiz notes ≤ 260.

## The parts of an explainer

| Field | What it is | Size |
|---|---|---|
| `oneLiner` | The visa or topic in one plain sentence (what it is, who it is for, what it leads to). | ≤ 220 chars |
| `bigIdeas` | Exactly three ideas that carry the whole concept, each a title and one sentence. | 3 |
| `heroCard` | "At a glance" rows: who sponsors, how long, work, family, next step, cost. Use `ICON` paths. | 4–6 |
| `checkedAgainst` | Optional: completes "Facts checked 12 October 2026 against …" (e.g. "the Administrative Review Tribunal, Home Affairs and the Migration Act" for review pages, "Home Affairs and the Australian Citizenship Act 2007" for citizenship). | |
| `actors` | The 2–4 players. Always include `id: "you"`. Tones: green you, blue Home Affairs, pink employer or family sponsor, violet tribunal/court/Minister, amber state or territory or assessing authority, orange education provider, teal anyone else. `short` fits a badge ("Home Affairs"). `does`: 3–4 items. | 2–4 |
| `flows` | The moves between players in story order, as arrows on the diagram: `from`, `to`, a short `label` ("Sponsors + nominates") and a 1–2 sentence `detail`. | 2–6 |
| `journeyTitle` / `journeyHighlight` | Heading for the timeline, e.g. "From EOI to permanent residence" with highlight "permanent residence". | ≤ 60 |
| `stages` | The process in order. Each: `short` (one word), `title`, `who` (actor ids, first sets the colour), `description`, 2–4 `points`, `youHold` (what you hold at the end), optional `cost` ("A$4,015, paid by you"), `icon`. | 4–8 |
| `quiz` | The 2-minute self-check: one question per topic, 2–5 one-tap options, each with `status` (`ok` fine, `todo` something to sort, `stop` a hurdle), a `note` explaining what the answer means and optional `link`. Cover the deal-breakers first. | 4–8 |
| `check` | Optional wording overrides for the self-check (title, the three result panels, disclaimer). Guides need a title such as "Does the section 48 bar apply to you?". | |
| `myths` | Real misconceptions, each answered with the rule from the page. No glossary tokens (the cards are buttons). | 4–8 |
| `roles` | Optional: two checklists by side (worker/employer, applicant/sponsor, parent/child), each 2–3 groups of items. Only when both sides have real work to do. | 2–3 |
| `glossary` | Every term used in tokens, plus other jargon on the page. `definition` ≤ 300 chars, no tokens inside. | 5–20 |
| `cta` | Optional: the closing consultation banner's title and subtitle, if the default ("We check your facts against these rules, tell you honestly where you stand, and prepare the application with you.") doesn't fit. | |
| `verifiedExtras` | Facts not on the page, with their source. | |

Icons: `import { ICON } from "../icons";` (77 Heroicons, e.g. `ICON.user`, `ICON.buildingLibrary`, `ICON.buildingOffice2`, `ICON.heart`, `ICON.scale`, `ICON.academicCap`, `ICON.paperAirplane`, `ICON.clock`, `ICON.currencyDollar`, `ICON.home`, `ICON.mapPin`, `ICON.documentText`, `ICON.checkBadge`, `ICON.shieldCheck`, `ICON.exclamationTriangle`). See `data/visas/explainers/icons.ts` for the full list.

## Optional tools (use the ones that genuinely help this page)

Each tool renders as its own section with an anchor you can link to from quiz options (`#finder`, `#points`, `#family-test`, `#evidence`, `#work-hours`, `#funds`, `#meter`, `#rules`, `#fees`, `#timeline`, plus the standard `#picture`, `#journey`, `#self-check`, `#myths`, `#roles`, `#jargon`, `#detail`, `#faq`). Tools with a `navLabel` show it in the sticky "On this page" bar (≤ 16 chars).

- **`finder`** (`FinderConfig`): a "Which visa fits?" decision tree. Questions with one-tap options; each option's `next` is another question id or an outcome id. Outcomes give a title, a 2–3 sentence `body` saying why this is the likely starting point, `watch` (the main exceptions to check) and an internal `href`. When the outcome is the current page the UI says "You're on the right page". Keep trees shallow (2–4 questions on any path), make every question and outcome reachable, no loops. One finder can be shared by several pages: write it once in your folder (e.g. `family-partner/partner-finder.ts`) and reference it from each page. Finder text is fact-checked against the whole library.
- **`fees`** (`FeeConfig`): a fee estimator. `variants` are alternatives (streams, pathways, onshore/offshore) each with `primary` charges and optional per-person `adult` and `child` lines; `addOns` are switches (`per: "application"`) or per-adult counters (`per: "adult"`, e.g. a second instalment for each adult without functional English); `sponsor` adds a second column for what an employer or sponsor pays (with an optional `choice`, such as business turnover, and `years` for per-year charges). `variant.sponsor` overrides it for one variant. Only model what the page states exactly: if the page doesn't say whether additional applicants pay a charge, leave that line out and say so in `notes`. `confirmUrl` is the Home Affairs Visa Pricing Estimator (`https://immi.homeaffairs.gov.au/visas/visa-pricing-estimator`) or the official fee page.
- **`timeline`** (`TimelineConfig`): pick a start date (e.g. when the visa is granted or when you lodge) and see dated milestones (`months` after the start): the earliest next step, when the visa ends. Optional `age` check at one milestone (e.g. under 45 for a 186). Never use it for legal deadlines on review pages: a wrong date there could make someone miss a deadline.
- **`meter`** (`MeterConfig`): one slider with result bands, e.g. days in Australia in the last 5 years for a resident return visa (730 days), days of specified work for a second working holiday visa.
- **`ruleChecks`** (`RuleChecksConfig`): several sliders, each a rule that passes or fails (`atLeast` / `atMost`), e.g. the citizenship residence requirement.
- **`evidence`** (`EvidenceConfig`): tick-what-you-have groups, e.g. the four aspects of a relationship (financial, household, social, commitment) or genuine student factors. Items are short and concrete; the UI counts ticks per group without judging strength.
- **`points`** (`{ visa: "189" | "190" | "491" }`): the skilled points calculator, preset to the visa's nomination points (uses `data/points.ts`).
- **`balanceOfFamily: true`**: the balance of family test calculator (parent visas and the balance of family test guide).
- **`workHours`** (`WorkHoursConfig`): the student fortnight work-hours planner (condition 8105, 48 hours a fortnight in session).
- **`funds`** (`FundsConfig`): the student visa financial capacity calculator (living costs, school costs, travel).
- **`jobGap`** (`JobGapConfig`): the "lost your job" clock for employer-sponsored visas with a 180/365-day rule (`condition` "8607" or "8608").

## Files and workflow

1. Your task names your folder (e.g. `data/visas/explainers/family-partner/`) and your registry file (that folder's `index.ts`, or `part-a.ts` / `part-b.ts`). Write one file per page, named after the slug: `data/visas/explainers/<folder>/<slug>.ts`, exporting `export const <camelCaseName>Explainer: VisaExplainer = { … }`. Shared finders go in the same folder.
2. For each page: read its entry in the page data (`data/visas/<file>.ts`: intro, keyFacts, eligibility, steps, conditions, costs, pathways, risks, faqs), then write the explainer from it. `slug` and `factsAsAt` must match the page.
3. Typecheck only your files: `npx tsc --noEmit -p . 2>&1 | grep "explainers/<folder>"` (other people are writing other folders at the same time, so ignore their errors).
4. When a file compiles, add it to your registry array. Then run `ONLY=<slug>,<slug> npm run validate:visas` and fix every explainer problem for your slugs. (Problems listed for other slugs are not yours.)
5. Don't edit any other file: not the components, not other folders, not the page data. Don't run git commands, and don't start or stop the dev server.

## Report back

- The files you wrote and the tools each page uses.
- Every `verifiedExtras` fact you added, with its source.
- Anything in the page data that looked wrong or inconsistent, or that you couldn't verify, quoted exactly with its file.
- The final output of `ONLY=… npm run validate:visas` for your slugs.
