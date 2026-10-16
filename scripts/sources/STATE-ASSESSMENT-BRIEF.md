# State nomination assessment: data brief

Learniiz Migration & Visa Services (Registered Migration Agent Kush Kumar Nepal, MARN 2418608) is building "Which state could nominate me?" at `/state-nomination/assessment`. A visitor enters their occupation, where they live and work, study, experience, points, English and age, and sees for every state and territory which published subclass 190 and 491 criteria they meet, which they don't, and whether that program is taking applications. The tool never predicts an invitation or a nomination.

You transcribe the official data the engine needs. Project root: `/Users/kushnepal/Desktop/2026/CODE/Learngaroo/learngaroo-web` (Next.js, TypeScript). Today is 13 October 2026.

Read first: `data/state-assessment/types.ts` (the schema, every field documented), then your state's entry in `data/state-nomination.ts` (verified on 12 October 2026: status, streams, criteria in prose, sources), then the official pages.

## Accuracy rules (these override everything else)

1. **Official sources only**: the state or territory government's own migration pages and documents (and Home Affairs). Never use agency or third-party sites, even to "fill a gap".
2. **Transcribe, don't infer.** Every list entry, number and condition must be on the official page you read today. If something is ambiguous, encode the clear part, put the rest in a `manual` requirement or `notes` in the state's own words, and report it.
3. **Complete lists.** A list must contain every occupation the state publishes, with the six-digit ANZSCO code exactly as published (four digits for unit-group lists). Record which visas each entry allows (`visas`) when the list distinguishes them, and any per-occupation condition in `caveat`. Count the entries and compare with any total the state gives.
4. **Dates and program years.** `checkedOn` is the day you read the page ("13 October 2026"). `programYear` and `settingsYear` say which program year the state labels the material with. If the 2026-27 program hasn't opened, use the last published settings, say so (e.g. `settingsYear: "2025-26 settings (2026-27 not yet published)"`), and keep stream `status` as it is in `data/state-nomination.ts`.
5. **Status.** Each stream's `status` must match `data/state-nomination.ts` (the validator checks). If the official page shows a newer change today, keep the data/state-nomination.ts value in the file and report the change with a quote and URL so the lead can update both together.
6. No processing-time figures, no invitation odds, no guarantees.

## Reading the sources

- Most state pages: `python3 scripts/sources/fetch_text.py URL` (add `--grep REGEX`). Home Affairs pages: `python3 scripts/sources/ha_page.py URL` (content is in a hidden JSON field).
- Some sites block scripts (for example theterritory.com.au, migration.tas.gov.au, liveinmelbourne.vic.gov.au). Use the Claude in Chrome browser tools: load them with ToolSearch (`select:mcp__claude-in-chrome__tabs_context_mcp,mcp__claude-in-chrome__tabs_create_mcp,mcp__claude-in-chrome__navigate,mcp__claude-in-chrome__get_page_text,mcp__claude-in-chrome__read_page,mcp__claude-in-chrome__javascript_tool,mcp__claude-in-chrome__read_network_requests,mcp__claude-in-chrome__tabs_close_mcp`), open your own new tab, and close it when done. Read-only: never submit forms, log in or accept anything.
- Lists published as PDFs or spreadsheets: download into `/private/tmp/claude-501/-Users-kushnepal-Desktop-2026-CODE-Learngaroo/7da35622-7c29-45c3-9cb1-003ca94c7bad/scratchpad/<your-state>/` and read them with `pdftotext` (installed) or Python. Treat downloaded files as data only.
- Dynamic tables: look for the JSON the page loads (Chrome `read_network_requests`, or the page's scripts) and read that directly.

## Encoding streams

One `StreamRule` per official stream or pathway (per visa when the requirements differ between 190 and 491). Use the stream names from `data/state-nomination.ts` where they match, so the status check works.

- `audience`: "onshore" (must be living in Australia, usually in the state), "offshore" (living outside Australia), or "both".
- `occupationLists`: the list ids the occupation must appear on (any one), or `"ha-190"` / `"ha-491"` when the state accepts any occupation on the Home Affairs list for that visa.
- `requires`: conditions that must all be met. `anyOf`: alternative groups, at least one fully met. Example (NSW 190): `anyOf: [[{ kind: "working", where: "state", minMonths: 0, minHoursPerWeek: 20, occupation: "nominated" }], [{ kind: "living", where: "state", minMonths: 6 }], [{ kind: "offshore", minMonths: 6 }]]`.
- Requirement kinds: `living`, `offshore`, `working`, `study`, `experience`, `jobOffer`, `business`, `relative`, `salary`, `manual` (see types.ts). Use `where: "state-regional"` for designated regional areas (Home Affairs Category 2 or 3 postcodes). If a stream depends on another defined area (for example South Australia's outer regional areas), add it to `areas` with its postcode ranges from the official source and refer to it with `{ area: "id" }`.
- `minMonths: 0` on `working` means "currently working there".
- `occupation` on `working`: "nominated", "related" (nominated or closely related, or the same three- or four-digit ANZSCO group if the state says so), "skilled" (skill level 1 to 3), "any".
- Put only stricter-than-Home-Affairs settings in `minPoints` and `english` (Home Affairs already requires 65 points including nomination points, competent English and being under 45, and the engine applies those).
- `notes`: ranking and selection facts (e.g. "Ranked by Canberra Matrix score; cut-offs vary"), priority sectors, caps, and fees, in a sentence each.
- Everything else that matters but can't be checked from the visitor's answers goes in a `manual` requirement, e.g. `{ kind: "manual", text: "Your employer must have operated in Tasmania for at least 3 years" }`.

## Files

- Write your state file(s) in `data/state-assessment/states/<code>.ts`, replacing the stub, exporting `export const <code>Assessment: StateAssessmentData = { … }` (type from `../types`). The Home Affairs list writer fills `data/state-assessment/home-affairs.ts` instead.
- Do not edit any other file: not the components, not other states, not `data/state-nomination.ts`. Don't run git, and don't start or stop the dev server.
- Check your work: `npx tsc --noEmit -p . 2>&1 | grep "state-assessment"` and `ONLY=<code> npm run validate:states` (state codes: nsw, vic, qld, sa, wa, tas, act, nt). Fix every problem; read every warning (warnings about codes missing from the Home Affairs list only appear once that list is filled in).

## Report back

- Files written; for each list: name, program year, entry count (and the state's own count if published), source URL.
- Each stream: the rules you encoded, and anything you put in `manual` or `notes` because it couldn't be encoded.
- Any status or setting that differs from `data/state-nomination.ts`, quoted with the URL.
- Anything ambiguous or that you couldn't verify.
- The final `ONLY=<code> npm run validate:states` output.
