# Service explainer brief

Each `/services/[slug]` page (data/services.ts) is getting the same interactive, plain-language treatment as the visa library pages: a hero with three big ideas, a diagram of who does what, an autoplaying step-by-step timeline, a "which visa fits?" finder, a side-by-side comparison of the visas the service covers, a 2-minute self-check, small tools, myth-or-fact cards and a jargon buster. The goal is the same: someone with no migration knowledge understands their options **without mental drain**, sees how Learniiz helps, and books a consultation if they want one.

Read first:

1. `scripts/sources/EXPLAINER-BRIEF.md`: the visa explainer brief. **All of its accuracy and writing rules apply here unchanged** (plain English, glossary tokens only in the listed fields, money as "A$4,015", straight quotes, no processing-time figures, approval rates, guarantees or "easy/fast" claims, never edit `data/visas/*.ts`).
2. `data/service-explainers/types.ts`: the `ServiceExplainer` type, every field documented. Most parts reuse the visa explainer types in `data/visas/explainers/types.ts`.
3. `data/visas/explainers/skills-in-demand-482.ts`: the reference visa explainer, for tone and depth.
4. The visa explainers for the pages your service covers (in `data/visas/explainers/<group>/`), and those pages' data in `data/visas/*.ts`.
5. Your service's entries in `data/services.ts` and `data/visa-guides.ts` (the guide: key facts, eligibility, documents, the four steps of the service, what comes next, FAQs).

Project root: `learngaroo-web`. Learniiz Migration & Visa Services, Registered Migration Agent Kush Kumar Nepal, MARN 2418608. Facts are checked as at **13 October 2026**.

## How the page is put together

The page renders these sections in order (ids in brackets are the anchors you can link to from quiz options as `#id`):

1. Hero: `accent`, `oneLiner`, `bigIdeas`, `heroCard`, and the consultation price (added automatically).
2. How it works [`picture`]: `actors` and `flows`.
3. Step by step [`journey`]: `stages`.
4. Which visa? [`finder`]: optional `finder`.
5. Side by side [`compare`]: `compare`, the visas the service covers in columns, with a link to each library page.
6. 2-minute check [`self-check`]: `quiz` (and `check` wording).
7. Tools, each optional: `streamFinder` [`stream`], `authorityFinder` [`authorities`], `points` [`points`], `stateAssessment` [`state-assessment`], `balanceOfFamily` [`family-test`], `evidence` [`evidence`], `workHours` [`work-hours`], `funds` [`funds`], `meter` [`meter`], `ruleChecks` [`rules`], `fees` [`fees`], `costs` [`cost-estimator`], `jobGap` [`job-gap`], `timeline` [`timeline`], `prRoad` [`pr-road`].
8. How we help [`help`]: who the service is for and the four steps of the service with what you hold after each (from `data/services.ts` and the guide; you don't write this).
9. The detail [`detail`]: requirements, a tick-off document checklist and what comes next (from the guide).
10. Myth or fact [`myths`], Who does what [`roles`] (optional), Jargon buster [`jargon`], videos, FAQ [`faq`] (from the guide), "Go deeper" cards for the first six `pages`, related services, consultation banner (`cta`).

## What a service explainer adds to a visa explainer

- **`pages`**: the library pages the service covers (slugs from `data/visas`), most important first. **The fact guard checks every figure in your explainer, and in your service's guide, against the text of these pages plus your `verifiedExtras`.** Start from the list in your task; add a page only if the service genuinely covers it.
- **`name`**: used in headings ("The skilled visa route in one picture", "Could the skilled visa route work for you?"). Lower case unless it starts with a proper noun ("ART review process").
- **`accent`**: the coloured second line of the hero title, e.g. "Subclasses 189, 190 and 491" (≤ 40 characters).
- **`compare`**: 2–4 columns (one per visa or option, each `page` must be in `pages`) and 4–7 rows asked from the reader's side ("Who chooses you", "How long it lasts", "Where you can live", "Work rights", "Government fee", "Next step"). Values are short and concrete (≤ 90 characters), parallel across columns, and taken from each page's key facts and costs. `bestFor` is one honest line on who each option tends to suit. `rows[].icon` uses `ICON`.
- **Actors, stages, quiz and myths are about the whole service**, not one visa: e.g. for skilled visas the players are you, the assessing authority, the state or territory and Home Affairs; the journey runs from points check to permanent residence; the quiz covers the deal-breakers across 189, 190 and 491, and options can link to `#finder`, `#compare`, `#points` or a library page.
- **Reuse, don't copy, the visa explainers' tools**: import a config from a covered page's explainer and use it (`workHours: studentVisa500Explainer.workHours`), or import a shared finder (`skilledFinder`, `employerFinder`, `partnerFinder`, `childFinder`, `parentFinder`, `studyFinder`, `visitorFinder`, `reviewFinder`). To combine finders, build a new `FinderConfig` in your file whose first question routes into the others; prefix the reused question and outcome ids so they stay unique, and keep every path at 2–4 questions. Finder outcomes link to library pages (`/visas/<category>/<slug>`).
- **`fees`**: one estimator for the service, with one variant per visa or pathway, built from the cost tables of the covered pages (or by mapping the variants of the covered pages' explainers). Every amount must be on a covered page.
- **`authorityFinder: true`** (skills assessments only): renders a search of the 504 occupations on the Home Affairs lists for the 189/190/491 with the assessing authority Home Affairs names for each, the authority's full name and website from Home Affairs' "Assessing authorities" table (`data/assessing-authorities.ts`), and links to our occupation pages. You only switch it on; write the surrounding content (quiz, myths) to fit it.
- **`stateAssessment: true`** (skilled visas only): renders the state nomination assessment banner.

## Checking your service's guide

The fact guard also checks your service's entry in `data/visa-guides.ts` against your `pages`. Read the whole entry against the covered pages too, not just the numbers: eligibility, documents, steps, what comes next, FAQs. **Do not edit `data/visa-guides.ts`** (other writers share it). Report each problem with the exact current text and your proposed replacement, and the page that supports it. A problem the guard flags that is right but sourced elsewhere (e.g. a subclass number from another category) can be covered by a `verifiedExtras` entry whose `source` is the library path that states it.

## Files and workflow

1. Your file already exists as a placeholder: `data/service-explainers/<slug>.ts`. Keep the export name, change its type to `ServiceExplainer` and fill it in (`import type { ServiceExplainer } from "./types";`, icons from `../visas/explainers/icons`). Imports must be relative (no `@/`), because the validator compiles these files with plain `tsc`.
2. Typecheck: `npx tsc --noEmit -p . 2>&1 | grep "service-explainers/<slug>"` (others are writing other files at the same time; ignore their errors).
3. Validate: `ONLY=<slug> npm run validate:visas` and fix every problem listed for `services/<slug>` and `services/<slug> (guide)` that you can fix in your file. Problems for other slugs are not yours.
4. The page is at `http://localhost:3000/services/<slug>` once the page components land (the dev server is already running; don't start or stop it).
5. Don't edit any other file: not the components, not the registry (it already imports your file), not other explainers, not the page data or the guides. Don't run git commands.

## Report back

- The file you wrote, the `pages` list, and the tools and finder it uses.
- Every `verifiedExtras` fact you added, with its source.
- Every problem in your service's guide (`data/visa-guides.ts`) with the current text, the proposed replacement and the supporting page.
- Anything in the page data that looked wrong or inconsistent, quoted exactly with its file.
- The final output of `ONLY=<slug> npm run validate:visas` for your slug.
