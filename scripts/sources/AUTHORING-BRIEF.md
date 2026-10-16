# Visa library research and authoring brief

You are drafting part of a public Australian visa library for Learniiz Migration & Visa Services (Registered Migration Agent Kush Kumar Nepal, MARN 2418608, Melbourne). Work as a senior migration lawyer would: every statement must trace to the Department of Home Affairs, the legislation or the Administrative Review Tribunal, and the legal basis must be cited correctly or not at all.

Project: the project root (Next.js, TypeScript). Helper scripts live in `scripts/sources/` (call this TOOLS).

## Deliverable

One TypeScript file in `data/visas/` (named in your task) exporting an array of `VisaPage` objects. Import the type from `./types` and read `data/visas/types.ts` first: every field is documented there. Replace the stub file completely. Do not edit any other file. When finished run `npx tsc --noEmit -p .` from the project root and fix any type error in your file.

## How to read the sources

- **Home Affairs visa pages** are rendered by JavaScript, so use the decoder: `python3 TOOLS/ha_page.py URL`. It prints the embedded content in sections: `overview` (what you can do, stay, cost note), `aboutVisa` (stay, include family, apply from, obligations, cost blocks), `eligibility` (each criterion with its heading and explanation), `haveThisVisa` (conditions, work, travel, obligations). Add `--sections overview,aboutVisa,eligibility,stepGuide,haveThisVisa` to include `stepGuide` (document checklist, how to apply, after you apply). Add `--part sponsor` for sponsor and nomination requirements on employer, partner and parent visas. Landing pages for multi-stream visas hold only summaries; the stream pages hold the content. `TOOLS/ha_urls.txt` lists every landing page and its stream and topic pages.
- **Other Home Affairs pages, ART pages, state and legislation landing pages**: `python3 TOOLS/fetch_text.py URL` (add `--grep REGEX` to show matching lines with context).
- **Visa application charges** (1 July 2026): `TOOLS/fees-2026.txt`. Quote amounts as "A$4,015". Note the subsequent temporary application charge (A$700) where it applies and that additional applicants pay their own charge.
- **Processing times**: never publish a number. Link to https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-processing-times/global-visa-processing-times instead.
- **Visa conditions**: https://immi.homeaffairs.gov.au/visas/already-have-a-visa/check-visa-details-and-conditions/see-your-visa-conditions (fetch_text) explains each Schedule 8 condition; the `haveThisVisa` section lists which ones apply.
- **Health, character, English**: https://immi.homeaffairs.gov.au/help-support/meeting-our-requirements/health , .../character , .../english-language (fetch_text).
- **Legislation register IDs**: Migration Act 1958 = https://www.legislation.gov.au/C1958A00062/latest/text ; Migration Regulations 1994 = https://www.legislation.gov.au/F1996B03551/latest/text (current compilation F2026C00667, in force 1 July 2026); Administrative Review Tribunal Act 2024 = https://www.legislation.gov.au/C2024A00040/latest/text ; Australian Citizenship Act 2007 = https://www.legislation.gov.au/C2007A00020/latest/text . Legislative instruments (LIN/IMMI) are linked from the Home Affairs pages; keep the URL exactly as found. The register's text view cannot be read by script, so cite provisions from the structure below and from your own knowledge, and only where you are confident.

## Legal basis: how to cite

Migration Regulations 1994 Schedule 2 has one Part per subclass. Within Part NNN: Division NNN.1 interpretation; NNN.2 primary criteria (NNN.21x criteria at time of application, NNN.22x at time of decision); NNN.3 secondary criteria (family members); NNN.4 circumstances applicable to grant (in or outside Australia); NNN.5 when the visa is in effect; NNN.6 conditions. Schedule 1 sets the application requirements (form, charge, where to lodge). Schedule 3 criteria 3001–3005 apply to some onshore applicants without a substantive visa. Schedule 4 holds the public interest criteria (PIC 4001 character, 4002 security, 4003 foreign policy, 4004 debts, 4005 and 4007 health, 4010 and 4011 Pacific/other, 4013 and 4014 exclusion periods, 4019 values statement, 4020 integrity of information, 4021 passport, 4022 debts to Australia). Schedule 8 lists visa conditions (8501 health insurance, 8502 not arrive before sponsor, 8503 no further stay, 8515 not marry, 8516 continue to satisfy criteria, 8531 no overstay, 8533 report to provider, 8534 limited further stay, 8535, 8539 and 8549 regional residence, 8558 limited stay, 8572 undertaking, 8578 report changes, 8579 regional area for 491, 8580 and 8581 for 494/491, 8607 work for sponsor (482), 8608 (494), 8609? verify before use, 8104 and 8105 work limits for students, 8201 study limit, 8202 study requirement, 8203, 8204, 8303 no disruptive activity, 8304 name as recorded, 8502).

Migration Act 1958 provisions often needed: s 29 (grant of visa), s 31 (classes), s 41 (conditions), s 46 (valid application), s 48 (bar after refusal or cancellation onshore), s 48A (protection), s 48B (minister may lift bar), s 55 (further information), s 56 (further information may be sought), s 57 (adverse information must be put to applicant), s 65 (decision to grant or refuse), s 82 (when visas cease), s 109 (cancellation for incorrect information), s 116 (general cancellation power), s 119 (notice of intention to consider cancellation), s 128 (cancellation outside Australia), s 133A–133F (minister's personal cancellation powers), s 134 (business visas), s 137J (student visa automatic cancellation, now repealed; do not cite), s 140 (consequential cancellation), s 140K–140M (sponsor obligations and bars), s 195A (minister may grant visa to detainee), s 338 (reviewable migration decisions), s 347 (application for review), s 348 (tribunal must review), s 351 (minister may substitute more favourable decision), s 359A and 360 (information and hearing), s 417 (protection equivalent), s 476 and 476A (judicial review jurisdiction), s 486A (time limits for judicial review), s 501 (character test), s 501(3A) (mandatory cancellation), s 501CA (revocation of mandatory cancellation), s 501E (bar), s 503A (protected information).

Cite like this: "Migration Regulations 1994, Sch 2 cl 482.221" or "Migration Act 1958, s 48" or "PIC 4020 (Sch 4)". If you are not sure of a clause number, cite the Part or Division ("Migration Regulations 1994, Sch 2 Part 482") rather than guessing. Never invent instrument numbers; take them from the Home Affairs page links.

## Writing rules

- Original wording from the official sources only. Do not copy or paraphrase third-party agency sites.
- Plain English, Australian spelling, short sentences. Explain jargon the first time (TSMIT, CSOL, EOI).
- General information, not advice. No approval rates, no guarantees, no "fast" or "easy" claims. The page template already shows a general-information notice and the agent's details, so do not add disclaimers in the content.
- Dates: "1 July 2026". Money: "A$2,500". `factsAsAt`: "12 October 2026" on every page.
- SEO: `seoTitle` at most 60 characters, pattern "Subclass 482 Skills in Demand visa: eligibility, cost, PR"; `seoDescription` at most 160 characters with the main fact and the year; `keywords` 6–10 phrases people search (include the subclass number variants: "482 visa", "subclass 482", "skills in demand visa requirements").
- `intro`: two or three sentences that directly answer "what is this visa, who is it for, what does it lead to", so it reads well as a search snippet or an AI answer.
- `tags`: 2–4 chips from: "Permanent", "Temporary", "Provisional", "Points tested", "Employer sponsor required", "Family sponsor required", "State nomination required", "Apply in Australia", "Apply outside Australia", "Apply in or outside Australia", "Pathway to PR", "No pathway to PR", "Invitation only".
- `keyFacts`: 5–6 items. Always include Government fee (base charge, note "primary applicant, 1 July 2026 charge"), Length of stay, Work rights, Pathway to permanent residence, Where you must be when you apply and when it is granted, and (where relevant) Sponsor or nomination.
- `whoFor`: 3–6 situations in the second person ("You hold a 482 visa and have worked for your sponsor for two years").
- `eligibility`: 6–12 criteria, each with `title`, `detail` (what the Department actually requires, with thresholds and dates), and `legal` where confident.
- `familyNote`: who can be included and whether they can be added later.
- `documents`: 3–5 groups (Identity, Relationship or Employment, Skills and English, Health and character, Sponsor or nominator) with concrete items from the Home Affairs checklist.
- `steps`: 5–8 steps in order, each with an `output` ("You hold: a positive skills assessment valid for three years").
- `conditions`: the Schedule 8 conditions the Department says usually apply, with plain meanings.
- `costs`: base charge, additional applicant charges, subsequent temporary application charge where applicable, second instalment where applicable, and typical other costs (health examination, police certificates, English test, skills assessment, translations, employer nomination fees and Skilling Australians Fund levy for employer visas, ART fee for review pages). Mark third-party costs as "typical" and do not quote numbers you cannot source.
- `afterGrant`: obligations and what changes (notify changes, condition compliance, travel facility, when PR or citizenship can be applied for).
- `pathways`: 2–5 next steps with internal `href` where one exists.
- `risks`: 4–6 common refusal reasons and pitfalls for this visa (for example "Nomination refused because the position is not genuine", "PIC 4020 for an inconsistent employment reference", "Schedule 3 for applicants without a substantive visa").
- `faqs`: 5–8 real questions people ask, each answered in 2–4 sentences with the figure or rule.
- `legislation`: the Part of Schedule 2, the relevant Act sections, the PICs and every instrument the page relies on, each with a URL.
- `sources`: every Home Affairs or ART page you read, with the exact URL.
- `related`: 3–6 internal links (see the slug list). Use `/bookings` for a consultation only once.
- For `kind: "guide"` pages (points test, section 48, ART review and similar) keep the same shape: `eligibility` becomes "requirements or who it applies to", `documents` may be a single group or `[]`, `steps` is the process, `conditions` is omitted, `permanent` is null, `subclass` is omitted, `costs` lists fees that apply (for example the ART fee) or `[]`.

## Internal link slugs (use these exactly)

Visa pages live at `/visas/<category>/<slug>`:

employer-sponsored: skills-in-demand-visa-482, employer-nomination-scheme-visa-186, skilled-employer-sponsored-regional-visa-494, temporary-work-short-stay-specialist-visa-400, training-visa-407, temporary-activity-visa-408, temporary-work-international-relations-visa-403, labour-agreements-and-dama, employer-sponsorship-and-nomination

skilled: skilled-independent-visa-189, skilled-nominated-visa-190, skilled-work-regional-visa-491, permanent-residence-skilled-regional-visa-191, temporary-graduate-visa-485, national-innovation-visa-858, skilled-migration-points-test, skillselect-expression-of-interest, skills-assessment-for-migration

family: partner-visa-onshore-820-801, partner-visa-offshore-309-100, prospective-marriage-visa-300, child-visa-101-802, adoption-visa-102, orphan-relative-visa-117-837, dependent-child-visa-445, new-zealand-citizen-family-relationship-visa-461, contributory-parent-visa-143-173, contributory-aged-parent-visa-864-884, parent-visa-103, aged-parent-visa-804, sponsored-parent-temporary-visa-870, remaining-relative-visa-115-835, carer-visa-116-836, aged-dependent-relative-visa-114-838, balance-of-family-test

study: student-visa-500, student-guardian-visa-590, genuine-student-requirement, student-visa-financial-capacity, student-visa-conditions-and-work-rights, study-to-permanent-residence

appeals-and-review: art-review-of-visa-refusal, art-review-of-visa-cancellation, visa-cancellation-and-notice-of-intention, character-test-section-501, pic-4020-fraud-and-false-information, section-48-bar, schedule-3-criteria, condition-8503-no-further-stay-waiver, ministerial-intervention, judicial-review-of-migration-decisions, health-requirement-and-health-waiver, exclusion-periods-pic-4013-4014, natural-justice-and-adverse-information

other-visas: visitor-visa-600, electronic-travel-authority-601, evisitor-visa-651, working-holiday-visa-417, work-and-holiday-visa-462, medical-treatment-visa-602, bridging-visas-a-b-c-e, resident-return-visa-155-157, special-category-visa-444, business-innovation-and-investment-visa-188-888, former-resident-visa-151, pacific-engagement-visa-192, australian-citizenship-by-conferral

Other internal pages: /services/student-visas, /services/skilled-visas, /services/skills-assessments, /services/employer-sponsored-visas, /services/family-partner-visas, /services/visitor-tourist-visas, /services/art-reviews, /tools/points-calculator, /tools/visa-finder, /tools/fee-calculator, /tools/regional-postcode-checker, /tools/tasmania-points-calculator, /tools/canberra-matrix-calculator, /occupations, /state-nomination, /updates, /bookings.

## Shape of one entry (abridged)

```ts
{
  slug: "skilled-nominated-visa-190",
  category: "skilled",
  kind: "visa",
  subclass: "190",
  name: "Skilled Nominated visa",
  title: "Skilled Nominated visa (subclass 190)",
  seoTitle: "Subclass 190 Skilled Nominated visa: points, nomination, cost",
  seoDescription: "...",
  intro: "...",
  factsAsAt: "12 October 2026",
  permanent: true,
  tags: ["Permanent", "Points tested", "State nomination required", "Apply in or outside Australia"],
  keyFacts: [{ label: "Government fee", value: "A$6,140", note: "Primary applicant, 1 July 2026 charge" }, ...],
  streams: undefined,
  whoFor: ["..."],
  eligibility: [{ title: "Nominated by a state or territory", detail: "...", legal: "Migration Regulations 1994, Sch 2 cl 190.212" }, ...],
  familyNote: "...",
  documents: [{ group: "Identity", items: ["..."] }, ...],
  steps: [{ title: "Skills assessment", description: "...", output: "A positive skills assessment" }, ...],
  conditions: [],
  costs: [{ item: "Base application charge", amount: "A$6,140", note: "Primary applicant" }, ...],
  afterGrant: ["..."],
  pathways: [{ title: "Australian citizenship", description: "...", href: "/visas/other-visas/australian-citizenship-by-conferral" }],
  risks: ["..."],
  faqs: [{ question: "...", answer: "..." }],
  legislation: [{ label: "Migration Regulations 1994, Sch 2 Part 190", url: "https://www.legislation.gov.au/F1996B03551/latest/text" }, ...],
  sources: [{ label: "Home Affairs: Skilled Nominated visa (subclass 190)", url: "https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/skilled-nominated-190" }],
  related: [{ label: "Points calculator", href: "/tools/points-calculator" }, ...],
  keywords: ["190 visa", "subclass 190", "skilled nominated visa requirements", ...],
}
```

## Quality checklist before you finish

1. Every number has a source page you read today, and `factsAsAt` is "12 October 2026".
2. No processing-time figures, approval rates, guarantees or third-party wording.
3. Legal citations are correct or deliberately broad. Every PIC and Schedule 8 code you mention is real.
4. Strings use double quotes and escape any inner double quotes; no smart quotes needed. Keep each page roughly 150–260 lines.
5. `npx tsc --noEmit -p .` passes.
6. Report back: the pages written, any fact you could not verify (say exactly which), and anything in the official pages that looked recently changed (dates), so the reviewer can double-check.
