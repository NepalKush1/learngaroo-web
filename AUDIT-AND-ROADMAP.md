# Learniiz Migration site: audit and roadmap

Status as at **13 October 2026**. This is a working document: tick items off (`- [x]`) as you finish them, and add the date. It covers the whole system: the calculators and tools, the data, going live at **https://migration.learniiz.com**, and preparing for the mobile app.

How to read it:
- **Section 2** lists the decisions only you can make. Several Phase 0 items depend on them.
- **Phase 0 (section 3)** must be done before go-live. Phases 1 to 3 organise the system and prepare the mobile app.
- File references are relative to the project root (`learngaroo-web/`). Line numbers were correct on 13 October 2026 and will drift as files change.

---

## 1. Where things stand

**What's built:** 32 routes, including:
- the visa library: 67 pages, each with an interactive explainer
- 7 service pages (interactive)
- 8 state nomination guides and the state nomination assessment
- 53 occupation pages
- 8 tools
- bookings with Stripe, contact, and an admin page

**Size:**
- `data/`: 140 files, about 73,500 lines
- `components/`: 117 files, about 17,000 lines
- `app/`: 44 files
- `lib/`: 19 files

**The headline problems:**
1. **Most of the work isn't saved in git.** Branch `learniiz-rebrand` has 4 local commits and no upstream; `origin/main` is still the 10 July 2026 version. 239 new files (about 90,000 lines) and 53 modified files are uncommitted. That covers the whole visa library, services, state nomination, occupations and four tools.
2. **The calculators don't share anything.** The same questions are asked six different ways, the points scoring is written twice, there are three occupation pickers and five different pass/fail vocabularies. Most scoring logic lives inside the screens, so it can't be reused in a mobile app.
3. **The same fact lives in many places.** Fees are stored in 8+ places, occupations in 6 datasets using two ANZSCO versions, and the points rules in about 10 files. There are no automated tests, and many data files aren't covered by any validator.
4. **The site isn't ready to go live.**
   - Every built page contains `http://localhost:3000`.
   - The bookings database is a file on disk, which won't work on serverless hosting.
   - There's a Stripe bug where the client is charged but no booking is created.
   - No backups, no error monitoring, and the legal pages are still drafts.

---

## 2. Decisions needed

Make these first; Phase 0 depends on them.

| # | Decision | Options | Recommendation | Decided |
|---|---|---|---|---|
| D1 | Hosting | (a) One always-on Node server with a persistent disk (keeps SQLite). (b) Vercel plus a managed database. | **(a) for launch, then move to a managed Postgres before the mobile app creates bookings.** The least change now, and the safe path for later. | ☐ |
| D2 | Payments at launch | Stripe online payment, or "request a booking, we arrange payment" | Stripe, once the cancel bug (3.4) is fixed | ☐ |
| D3 | Analytics | Separate GA4 property, or one shared with the PTE product | One property for learniiz.com; subdomains are tracked together automatically | ☐ |
| D4 | AI crawlers | Currently all allowed, including training crawlers (`app/robots.ts:10`) | Allow search and answer crawlers; decide separately on training crawlers (GPTBot, CCBot, Google-Extended) | ☐ |
| D5 | Tool URLs | Keep or rename before launch (section 4.2) | Rename now: there are no external links to break yet | ☐ |
| D6 | Mobile app scope | Migration only, or combined with PTE | Decide before Phase 3; it changes the repository layout | ☐ |
| D7 | Email sending domain | `learniiz.com` or `migration.learniiz.com` | Agree with whoever runs the PTE product's email (shared SPF/DMARC) | ☐ |

---

## 3. Phase 0: before go-live

### 3.1 Save the work
- [ ] Commit the current work in logical commits, for example:
  1. visa library and explainers
  2. service explainers
  3. state nomination and assessment
  4. occupations
  5. tools (Tasmania, Canberra, Victoria, fee, postcode)
  6. analytics, SEO and `llms.txt`
  7. validators and scripts
- [ ] Push `learniiz-rebrand` and set an upstream. Plan the merge to `main`.
- [ ] Move the browser test scripts into the repo (for example `e2e/`), with an `npm run test:e2e` script. They currently exist only in a temporary folder on this machine:
  - `test-all.js`: visa explainers, 932 checks
  - `test-services.js`: service pages, 152 checks
  - `test-assessment.js`: state assessment, 16 checks
  - `test-vpt.js`: Victorian Points Test, 17 checks

### 3.2 Domain and build
- [ ] DNS: point `migration.learniiz.com` (CNAME) at the host and issue TLS.
- [ ] Production build with `NEXT_PUBLIC_SITE_URL=https://migration.learniiz.com`.
  - It's inlined at build time, so it must be set **when building**, not only at runtime (`lib/site-config.ts:11` falls back to localhost).
- [ ] After building, confirm `grep -rl "localhost:3000" .next/server/app` returns nothing.
  - Check the sitemap, robots, canonicals, `og:url`, Stripe return URLs and email links.
- [ ] Staging: `staging.migration.learniiz.com` behind a password, with `noindex`.
- [ ] HSTS (`next.config.ts:7`): remove `preload`, which does nothing on a subdomain. Keep `includeSubDomains`.
- [ ] Search Console: verify the learniiz.com domain property and submit `https://migration.learniiz.com/sitemap.xml`.
- [ ] Link learniiz.com and the PTE app to the migration site and back. Replace the ~18 hard-coded `https://www.learniiz.com` strings in explainer data with `siteConfig.pte.url`.

### 3.3 Hosting and data (per decision D1)
- [ ] One Node ≥ 22.13 process, with `DATABASE_PATH` on a persistent disk. **Run only one instance.**
- [ ] Reverse proxy: it must overwrite `X-Forwarded-For` (the rate limits key on it) and forward `Host` (Server Actions check Origin against it).
- [ ] Nightly off-site database backups using SQLite `.backup` or `VACUUM INTO`. Copying the `.db` file alone loses data still in the WAL. Test a restore.
  - The privacy policy promises 7-year retention (`app/privacy/page.tsx:86-87`).
- [ ] Add a schema version (`PRAGMA user_version`) before the schema next changes (`lib/server/db.ts:14-51`).
- [ ] Error monitoring and uptime alerts, especially for webhook failures. Add `app/error.tsx` and `app/global-error.tsx`.

### 3.4 Bookings, payments and email
- [ ] **Stripe cancel bug.** The cancel URL marks the booking `cancelled` (`lib/server/bookings.ts:212-219`), but the Checkout session stays open. If the client then pays, `confirmPaidBooking` ignores cancelled bookings (`:191-193`): money taken, no booking, no email.
  - Fix by expiring the Checkout session on cancel, or by accepting payment for a cancelled-but-paid booking.
- [ ] Stripe:
  - Set `payment_method_types: ["card"]`, or handle `checkout.session.async_payment_succeeded` (`lib/server/stripe.ts:42-57`).
  - Pin the API version and add idempotency keys.
- [ ] Stripe live: webhook `https://migration.learniiz.com/api/stripe/webhook` with `checkout.session.completed` and `checkout.session.expired`, and the signing secret in `STRIPE_WEBHOOK_SECRET`.
  - If launching without Stripe, change the "pay securely online" copy (`app/bookings/page.tsx:8`).
- [ ] Without Stripe, "requested" bookings hold their slot forever (`lib/server/bookings.ts:74`). Expire them or allow admin release.
- [ ] Email:
  - Set `RESEND_API_KEY`, and set `EMAIL_FROM` on a verified domain (SPF, DKIM, DMARC; decision D7).
  - Set `NOTIFY_EMAIL`. It currently falls back to an empty address, so the practice would get no notifications (`lib/server/config.ts:20`, `lib/site-config.ts:41`).
- [ ] Stop printing full email bodies (client details) to the server log when Resend isn't configured (`lib/server/email.ts:24-28`).
- [ ] Production secrets: a strong `ADMIN_PASSWORD`, and a `SESSION_SECRET` of at least 32 characters (admin stays off without it).
- [ ] Block public holidays in `closedDates` (`data/availability.ts:40`). Melbourne Cup Day (Tue 3 November 2026) is currently bookable.

### 3.5 Legal and privacy
- [ ] Legal review of the Terms and Privacy pages; they are marked as drafts (`data/legal.ts:4-6`).
- [ ] The privacy policy must mention:
  - Google Analytics and cookies, YouTube embeds and WhatsApp
  - what's stored about clients (bookings: names, up to 5 emails, phone, address, enquiry, dates)
  - retention, and a public contact email
- [ ] If GA is switched on, add a short analytics notice (consent mode optional) and widen the CSP for GA4. `connect-src`/`img-src` are missing `*.analytics.google.com` and `*.googletagmanager.com` (`next.config.ts:19-21`); test with GA on.

### 3.6 Errors found in the audit (fix before launch)
- [ ] **No share image on 80 pages.** Visa category, visa and service pages set their own `openGraph`, which drops the site image and `og:locale`.
  - Files: `app/visas/[category]/page.tsx:29`, `app/visas/[category]/[slug]/page.tsx:43`, `app/services/[slug]/page.tsx:48`.
  - The root `openGraph` also lacks `url` and `siteName` (`app/layout.tsx:23-28`).
- [ ] **Wrong regional category.** The Victoria guide says the Mornington Peninsula is Category 2 (`data/state-nomination.ts:216`). The site's postcode data puts it in Category 3; Category 2 is Geelong only (`data/regional-postcodes.ts:45-47`).
- [ ] **Outdated English example.** The Tasmania calculator says Proficient English is "PTE 65 or IELTS 7" (`components/tools/TasmaniaCalculator.tsx:489`). That's the pre-7 August 2025 standard; use the current scores from `data/points.ts:49`.
- [ ] **Dates shown a day early.**
  - The updates feed hard-codes a +11:00 offset, so 1 July shows as 30 June (`data/updates.ts:172-179`).
  - `toIsoDate("12 October 2026")` returns 2026-10-11 on Melbourne time (`data/visas/index.ts:94-98`). This feeds the sitemap and page metadata.
- [ ] **Spam protection can't work.** The hidden "honeypot" field uses `.max(0)`, so a filled one fails validation and the "drop bots" branch never runs (`lib/booking-schema.ts:44`, `app/api/contact/route.ts:13,32`, `app/api/bookings/route.ts:31`). The booking form has no honeypot at all.
  - Add Turnstile or another CAPTCHA.
  - Cap the number of booking email addresses.
- [ ] **Assessing authority details disagree.** The TRA and Community Work Australia websites and the ACECQA name differ between `data/occupations.ts:54,112,193` and `data/assessing-authorities.ts:28,49,63`. Use the Home Affairs table (`assessing-authorities.ts`).
- [ ] **State assessment copy.** It says "Nothing you enter is stored or sent" (`components/state-assessment/StateAssessment.tsx:325,654`), but "Book a consultation" passes a summary to the booking form via sessionStorage. Reword it, for example: "Nothing is sent unless you choose to book".
- [ ] **Out-of-date `/tools` copy.** The description mentions only the points calculator and pathway finder (`app/tools/page.tsx:10`, `components/sections/ToolsSection.tsx:156`).
- [ ] **Service mapping.**
  - The 485 is listed under Student Visas, but its page category is skilled, and `visasForService` maps students to "study" only (`data/visas/index.ts:73-81`).
  - The 590 is covered by the student guide but not listed in `data/services.ts`.
- [ ] **Small cleanups.**
  - Remove the unused Facebook PNGs in `public/` (1.9 MB).
  - Remove unused exports: `searchTasmaniaOccupations`, `getTasmaniaPathway`, `tasmaniaOfficialUrl`, `priorityIncomeLevel`, `incomeBands`.
  - Fix the broken path in `scripts/sources/AUTHORING-BRIEF.md:15` (`TOOLS/fees-2026.txt`).

---

## 4. Phase 1: organise the tools

### 4.1 One tools registry
Today tool URLs are typed out by hand 117 times, and `app/sitemap.ts:16-27` keeps its own list.
- [ ] Create `data/tools.ts`, one entry per tool: `id`, `name`, `shortName`, `url`, `question`, `description`, `category`, `icon`, `states?`, `updatedOn`.
- [ ] Use it for:
  - the header menu, the Tools dropdown and the `/tools` page
  - the sitemap and `llms.txt`
  - the state guide calculator button (`app/state-nomination/[slug]/page.tsx:44-51`) and the assessment cards (`StateResultCard.tsx`)
  - visa page related links, and the validators' route lists

### 4.2 One calculators hub, organised by question
Rename before launch (decision D5); add redirects from the old URLs anyway.

| Question people ask | Tool | Current URL | Proposed URL |
|---|---|---|---|
| Do I have 65 SkillSelect points? | SkillSelect points calculator | `/tools/points-calculator` | `/tools/skillselect-points` |
| Which state could nominate me? | State nomination check | `/state-nomination/assessment` | keep |
| How would Victoria rank me? | Victorian Points Test | `/tools/victoria-points-calculator` | `/tools/victoria-points-test` |
| How would Tasmania rank me? | Tasmania priority attributes | `/tools/tasmania-points-calculator` | `/tools/tasmania-priority` |
| How would the ACT rank me? | Canberra Matrix | `/tools/canberra-matrix-calculator` | `/tools/canberra-matrix` |
| What will my visa cost? | Visa fee calculator | `/tools/fee-calculator` | `/tools/visa-fees` |
| Which visa fits me? | Visa finder | `/tools/visa-finder` | keep |
| Is my postcode regional? | Regional postcode checker | `/tools/regional-postcode-checker` | keep |
| Who assesses my occupation? | Assessing authority finder (now only on the skills assessment service page) | none | `/tools/assessing-authority` |

Only Victoria, Tasmania and the ACT publish their own scoring. NSW, QLD, SA, WA and the NT rank on SkillSelect points plus their own criteria, and the hub should say so.

### 4.3 Naming rules
- One name per tool, used everywhere. The Tasmania tool currently has six names, and card titles differ from page headings, for example "Visa Fee Calculator" vs "Visa application fee calculator".
- Component names to match: `SkillSelectPointsCalculator`, `VictoriaPointsTest`, `TasmaniaPriorityCalculator`, `CanberraMatrixCalculator`.
- Rename one of the two components both called `OccupationSearch` (`components/state-assessment/` and `components/occupations/`).
- Canonical URLs on every page, consistently relative, resolved through `metadataBase`.

### 4.4 One calculator toolkit (shared UI)
- [ ] **Steps:** a `useWizard` hook for step, next, back, finished and reset (written by hand 5 times today). Use the existing `components/tools/WizardUi.tsx` everywhere, including `StateAssessment`, `PointsCalculator`, `VisaFinder` and `FeeCalculator`.
- [ ] **Occupation search:** one `OccupationSearch` over the occupation master (5.3), replacing the Tasmania `OccupationPicker` (`TasmaniaCalculator.tsx:757-926`) and the second `OccupationSearch`.
- [ ] **Result components:** `ScoreHeader`, `PointsBreakdown`, `ChecksList`, `LiftPanel`, `ResultActions`.
  - These are repeated today in the Victoria, Canberra, Tasmania and SkillSelect points calculators, and in PointsWidget.
- [ ] **One status vocabulary:** `met | unmet | check`. There are five today: `ok`, `ok|fail|check`, `met|unmet|check`, `ok|todo|stop`, `pass`.
- [ ] **Shared helpers:**
  - one `Stepper`/`Segmented` (FeeCalculator duplicates `components/visas/explainer/controls.tsx:8-40`)
  - one month/date helper (`Timeline.tsx:14-34` and `PrRoad.tsx:15-31` are copies)

### 4.5 One profile, every calculator
- [ ] A `CandidateProfile` type:
  - date of birth or age, English level, occupation code, skills assessment
  - experience (overseas, Australian, in occupation), qualification, Australian study
  - partner, where you live (state, postcode), current job and earnings, visa of interest
- [ ] Stored on the device only, with a "remember my answers on this device" switch. Each calculator pre-fills from it and only asks what's missing.
- [ ] A "your snapshot" page: SkillSelect points, state fit, and VIC/TAS/ACT rankings together, with the existing "book a consultation" hand-off.
- [ ] Keep the privacy promise: nothing is sent unless the person books.

---

## 5. Phase 2: shared core and single sources of truth

### 5.1 Folder layout (in this repo first, a package later)
```
core/
  profile/      CandidateProfile type, normalisers
  reference/    occupations master, assessing authorities, states, services, tools, postcodes
  rules/        dated, sourced rule packs
    skillselect/2026-07-01.ts
    states/vic-2026-27.ts  tas-2026-27.ts  act-2025-26.ts ...
    fees/2026-07-01.ts
  engines/      pure functions: skillselectPoints(), victoriaPoints(), tasmaniaPriority(),
                canberraMatrix(), stateFit(), visaFees(), visaFinder()
  tests/        unit tests using worked examples from the official pages
```
Rules for `core/`:
- No React, Next, `@/` aliases, `process.env` or Tailwind classes.
- Relative imports only, so the validators, plain Node and the mobile app can all use it.

### 5.2 Engines to extract

| Engine | Lives in today | Notes |
|---|---|---|
| State fit | `lib/state-assessment.ts` (already pure) | Move as is; replace its `@/` imports |
| SkillSelect points | `PointsCalculator.tsx:23,88-119` **and** `PointsWidget.tsx:34-61` | Written twice; one engine over `data/points.ts` |
| Tasmania priority | `TasmaniaCalculator.tsx` (1,140 lines; rules at `:121`, `:134-508`, `:517`, `:602`, `:701`) | Biggest job; `scoreTasmania` (`data/tasmania-priority.ts:357`) is only the final sum |
| Victoria VPT | `VictoriaPointsCalculator.tsx` (`score`, checks and "lifts" built inside render) | Helpers already in `data/victoria-points.ts` |
| Canberra Matrix | `CanberraMatrixCalculator.tsx:22-31` | Use the ACT occupation list (`data/state-assessment/states/act.ts:415`) instead of asking people whether they're on it |
| Visa fees | `FeeCalculator.tsx:39-46` plus 46 explainer fee configs | One fee schedule (5.3) |
| Visa finder | `VisaFinder.tsx:33` | |
| Explainer widgets | StreamFinder, FamilyBalance (hard-coded, `:51-57`), Timeline, JobGapClock, Meter, RuleChecks | Lower priority; mostly config-driven already |

The rule "which list allows which visa" is written 7 times: `lib/state-assessment.ts:190-196,485-489`, `VictoriaPointsCalculator.tsx:78-84`, `OccupationSearch.tsx:13-17`, `AuthorityFinder.tsx:20-26` and `data/occupations.ts:361-373`. Write it once in `core/reference`.

### 5.3 One source of truth per fact
- [ ] **Occupation master.** One record per ANZSCO code: titles in 2013 and 2022, Home Affairs lists, assessing authority (from the Home Affairs table), skill level, state memberships (VIC priority group, TAS lists, ACT list), our page slug.
  - It replaces `home-affairs.ts`, the occupation fields of `occupations.ts`, `tasmania-occupations.ts`, `anzsco-skill-levels.ts`, the VIC priority codes and the authority registry in `occupations.ts`.
  - **Add the Core Skills Occupation List**, which is missing from the repo; the 482 and 186 depend on it.
  - Generate it with the scripts in `scripts/sources/` and validate it.
- [ ] **Fee schedule.** One typed schedule (from `scripts/sources/fees-2026.txt`) that pages, explainers and the fee calculator reference by key.
  - The copies agree today, but nothing keeps them in step: `visa-fees.ts`, 413 page cost rows, 46 explainer fee widgets, the guides, `categories.ts`, `JourneySection.tsx:64`.
  - Add the 36 concession, second-instalment and sponsor charges that are not in the snapshot.
- [ ] **SkillSelect rules.** One rule pack used by both points calculators and the state assessment (65 pass mark, 5/15 nomination points, under 45).
  - Replace the hand-typed copies in `PteSection.tsx:13-15`, `JourneySection.tsx:53,100`, `PointsCalculator.tsx:128,295-299` and `StateAssessment.tsx:374-375`.
  - Ready for the announced points-test reform (`data/updates.ts`).
- [ ] **States registry.** Slug, name, short code, postcode state, colours, official URLs and calculator link, defined once.
  - Today states are listed separately in the `StateSlug` type, `statePrograms`, `lib/state-assessment.ts:120-129` (matched by display name), `regional-postcodes.ts`, `australia-map.ts` and three validators.
  - Official URLs are duplicated in `tasmania-priority.ts:52-56` / `states/tas.ts:15-18` and `canberra-matrix.ts:10-14` / `states/act.ts:22-23`.
- [ ] **Services registry.** One slug list shared by `services.ts`, `consultations.ts`, `visa-guides.ts`, the service explainers, `visas/index.ts:73-81`, `visa-fees.ts` and `videos.ts`.
- [ ] **Practice details.** MARN, name and contacts only in `lib/site-config.ts`. The MARN is also typed in `data/agent.ts:39`, `data/faqs.ts:86`, `app/bookings/page.tsx:8` and `app/about/page.tsx:12`.
- [ ] **Computed values stay computed.** The VPT maximum (950) is calculated in `victoria-points.ts`, but typed by hand in `vic.ts`, `state-nomination.ts`, `updates.ts` and the tool page.
- [ ] **No content in components.**
  - Move the wage figures out of `TasmaniaCalculator.tsx` (18 copies; constants exist unused in `tasmania-priority.ts:19-24`).
  - Also move `JourneySection` stages, the `PteSection` figures, the VPT earnings bands copied in `VictoriaPointsCalculator.tsx:196,528`, and the FAQ arrays in app pages.

### 5.4 Tests and CI
- [ ] Add Vitest. Every engine gets tests using worked examples from the official pages (for example the VPT example in `test-vpt.js`: 628 of 950).
- [ ] Make the validators fail on type errors; both `.sh` wrappers end with `|| true` (`scripts/validate-visas.sh:6`, `scripts/validate-state-assessment.sh:5`).
- [ ] `validate-visas.ts:9` requires `factsAsAt` to be exactly "12 October 2026". Replace that with a "not older than" rule.
- [ ] Extend validation to the data no validator covers today:
  - `visa-fees.ts`, `points.ts`, `consultations.ts`, `regional-postcodes.ts`
  - `victoria-points.ts`, `canberra-matrix.ts`, `tasmania-priority.ts`
  - `anzsco-skill-levels.ts`, `assessing-authorities.ts`
  - the content of `occupations.ts`, `updates.ts`, `faqs.ts`
  - `state-nomination.ts` beyond stream status
- [ ] CI (for example GitHub Actions) on every push: lint, type check, validators, unit tests, build, then the browser tests against the build.

### 5.5 Freshness
- [ ] Every rule pack and dataset carries `checkedOn`, `effectiveFrom`, `source` and `nextReview`.
- [ ] A validator warning when data is past `nextReview`, for example fees after 1 July, or a state's status older than 14 days while its program is open.
- [ ] See the refresh calendar in 8.2.

---

## 6. Phase 3: mobile app

### 6.1 Repository layout (pnpm workspaces + Turborepo)
```
apps/web        this Next.js site
apps/mobile     Expo (React Native) app
packages/core   section 5 (engines, rules, reference data, profile)
packages/content visa library, explainers and services as data (generated JSON for the app)
packages/tokens brand colours, type and spacing for Tailwind (web) and NativeWind (app)
```
Web components can't run in React Native, but the engines, rules, data and tokens can. That's why Phase 2 comes first.

### 6.2 Data API v1, served from migration.learniiz.com
- [ ] Read-only, versioned JSON, for example:
  - `/api/v1/rules/{state|skillselect|fees}`
  - `/api/v1/occupations`
  - `/api/v1/visas/{slug}`
  - `/api/v1/updates`

  Generate them at build time as static files, with ETag and a `version` field.
- [ ] The app bundles the engines and works offline. It downloads newer rule packs and content when the version changes, so data updates don't need an app-store release.
- [ ] Bookings from the app: reuse the existing booking API with authentication and server-side rate limits. Use the managed database (decision D1).

### 6.3 Installable site and deep links
- [ ] `app/manifest.ts`, an apple-touch icon, `favicon.ico` and `theme-color`. Today there is only `app/icon.png` at 256×256.
- [ ] Make the calculators work offline (service worker) as a first, installable version.
- [ ] Once the app exists, serve `/.well-known/apple-app-site-association` and `/.well-known/assetlinks.json` from the subdomain, so site links open in the app.
- [ ] Push notifications from the updates feed, for example "Victoria's 2026-27 program has opened".

### 6.4 Content portability fixes
- [ ] Remove Tailwind classes from data (`tasmania-priority.ts:347-350`, `state-nomination.ts:865-868`, `updates.ts:167-169`). Data should say *what* (for example `status: "open"`) and the UI decides how it looks.
- [ ] Keep the `[[id|label]]` glossary tokens, but document them so the app renders them too.
- [ ] Remove the `@/` imports in `data/agent.ts:1` and `data/faqs.ts:5`.

---

## 7. Should-fix after launch

**Security**
- [ ] Protect `/admin` with an IP allowlist or Cloudflare Access. It currently has one shared password and stateless 12-hour sessions that can't be revoked.
- [ ] Use a shared or durable rate limiter if you ever run more than one instance (the current one is in memory).
- [ ] Add `object-src 'none'` and `poweredByHeader: false`.

**SEO**
- [ ] Add `/accessibility` and `/complaints` to the sitemap, and add `lastModified` beyond the visa pages.
- [ ] Add `lang="en-AU"` and a `summary_large_image` Twitter card.
- [ ] Add Person JSON-LD on `/about`.

**Analytics**
- [ ] Track:
  - paid bookings on `/bookings/success`
  - successful (not just clicked) enquiries
  - `tel:` clicks
  - the 7 tools that send no events
- [ ] Add UTM tags on PTE links. They use `noreferrer` (`components/ui/Button.tsx:53`), which hides the source.

**Performance**
- [ ] The state assessment page sends all 8 states' data and the Home Affairs list to the browser (251 KB gzipped). Filter it on the server.
- [ ] Pre-compute the world map path on the home page (216 KB gzipped).
- [ ] Use `zod/mini` in the browser.
- [ ] Replace the deprecated `priority` image prop with `preload` (`app/page.tsx:137`, `components/ui/Logo.tsx:23`).

---

## 8. Reference

### 8.1 Tools and widgets today

| Tool | Route | Component (lines) | Logic lives in | Data |
|---|---|---|---|---|
| SkillSelect points | `/tools/points-calculator` | `PointsCalculator` (336) | component | `points.ts` |
| PointsWidget | visa explainers (6 pages) | `PointsWidget` (327) | component (copy of the above) | `points.ts` |
| State nomination check | `/state-nomination/assessment` | `StateAssessment` (658) + 3 parts | `lib/state-assessment.ts` | `state-assessment/*`, `regional-postcodes.ts`, `state-nomination.ts` |
| Tasmania | `/tools/tasmania-points-calculator` | `TasmaniaCalculator` (1,140) | component | `tasmania-priority.ts`, `tasmania-occupations.ts` |
| Victoria VPT | `/tools/victoria-points-calculator` | `VictoriaPointsCalculator` (564) | component + data helpers | `victoria-points.ts`, `home-affairs.ts`, `anzsco-skill-levels.ts` |
| Canberra Matrix | `/tools/canberra-matrix-calculator` | `CanberraMatrixCalculator` (144) | component | `canberra-matrix.ts` |
| Visa finder | `/tools/visa-finder` | `VisaFinder` (253) | component | `services.ts` |
| Fee calculator | `/tools/fee-calculator` | `FeeCalculator` (130) | component | `visa-fees.ts` |
| Postcode checker | `/tools/regional-postcode-checker` | `RegionalChecker` (83) | `lookupPostcode` | `regional-postcodes.ts` |
| Authority finder | `/services/skills-assessments` | `AuthorityFinder` (163) | component + data | `home-affairs.ts`, `assessing-authorities.ts` |
| Explainer widgets | visa and service pages | FeeEstimator, CostEstimator, FundsCalculator, WorkHours, Meter, RuleChecks, FamilyBalance, Timeline, PrRoad, JobGapClock, StreamFinder, Finder, SelfCheck, EvidenceBuilder | mostly config-driven | `data/visas/explainers/**`, `data/service-explainers/*` |

### 8.2 Refresh calendar

| What | When | Where |
|---|---|---|
| Visa application charges | Every 1 July | `scripts/sources/fees-2026.txt`, `data/visa-fees.ts`, page cost tables, explainer fee configs |
| SkillSelect points test | When the announced reform commences | `data/points.ts` and its copies (5.3) |
| State programs: status, allocations, rounds | Weekly while open; each program year (July–June) | `data/state-nomination.ts`, `data/state-assessment/states/*.ts` |
| **Victoria 2026-27 requirements and opening date** | When Victoria publishes them | `data/state-nomination.ts`, `states/vic.ts`, `data/victoria-points.ts` |
| Tasmania priority attributes | Each August | `data/tasmania-priority.ts`, `data/tasmania-occupations.ts` |
| NSW, QLD, SA, WA settings; ACT list | 2026-27 not yet published (13 October 2026) | `states/*.ts` |
| Home Affairs occupation lists and authorities | When LIN 19/051 changes | `data/state-assessment/home-affairs.ts`, `data/assessing-authorities.ts` |
| ANZSCO skill levels | When the ABS file changes | `scripts/sources/anzsco_skill_levels.py` |
| Designated regional postcodes | When the instrument changes | `data/regional-postcodes.ts` |
| Practice availability and holidays | Each year | `data/availability.ts` |

### 8.3 Open content questions

These were flagged earlier and are awaiting your confirmation.
- [ ] **Condition 8534 conflict.** The study page says that after the course you can apply onshore for a 189/190/186/482 or business visa without a waiver; the ART pages list only 485, 590 and protection visas. Check against Schedule 8 or Home Affairs.
- [ ] **Lodging a 485 while holding 8534/8503:** the pages disagree (contact ImmiAccount support vs use the paper form).
- [ ] **Small fee differences:**
  - The 190 second instalment is A$4,885, vs A$4,890 for the 491 and 186; Home Affairs' own pages differ.
  - The 189 child charge is A$1,540, vs A$1,535 for the 190 and 491.
  - The 820/801 page gives no Pacific or Timor-Leste concession amount.
- [ ] **South Australia's occupation lists** come from the Internet Archive copy of SA's page (20 May 2026). Replace them when SA publishes its 2026-27 list.
- [ ] **Earlier visa-library items:**
  - 143/864 second instalments for under-18s
  - Schedule 3 criterion 3005 for the 820
  - the section 48 bridging visa statement
  - the protected SCV date (2001 vs 2004)
  - whether Switzerland needs a 462 letter of support
- [ ] **Victoria's experience ranges** overlap ("1 year" and "1-3 years") and leave a gap (5 to 6 years). Ask Victoria how they're applied.

### 8.4 Checks to run before every release
```
npx tsc --noEmit -p .
npx eslint .
npm run validate:visas      # 67 visa pages, 67 explainers, 7 service explainers and guides
npm run validate:states     # Home Affairs list and the 8 state datasets
npm run build               # with NEXT_PUBLIC_SITE_URL set for production builds
```
After Phase 0, add the browser tests (`npm run test:e2e`), and after Phase 2 the unit tests.

### 8.5 Content rules (unchanged)
- Every fact is dated and sourced: Home Affairs, the legislation, the ART, or the state government's own site.
- Never publish processing times, approval rates or guarantees (OMARA Code of Conduct). Link to the Home Affairs processing-time tool instead.
- Calculators never promise an invitation or nomination.
- Nothing a visitor enters is stored or sent unless they choose to book.
- Authoring briefs live in `scripts/sources/`: `AUTHORING-BRIEF.md`, `EXPLAINER-BRIEF.md`, `SERVICE-EXPLAINER-BRIEF.md` and `STATE-ASSESSMENT-BRIEF.md`.
