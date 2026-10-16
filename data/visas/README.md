# Visa library data

One file per group of pages, each exporting `VisaPage[]` typed by `types.ts`; `index.ts` joins them and provides the helpers used by `/visas`.

How the content was written and how to refresh it:

- `scripts/sources/AUTHORING-BRIEF.md` is the brief every page follows (sources, legal citation rules, writing rules, field limits).
- `python3 scripts/sources/ha_page.py URL` reads a Department of Home Affairs visa page (the content sits in an embedded JSON field, so plain HTML tools show only navigation). `scripts/sources/ha_urls.txt` lists every landing and stream page.
- `python3 scripts/sources/fetch_text.py URL` reads any other page (ART, legislation register landing pages, state sites that allow it).
- `scripts/sources/fees-2026.txt` is the 1 July 2026 visa pricing table as read from the Home Affairs table on 12 October 2026. Refresh it each July and update `factsAsAt` on every page.
- `npm run validate:visas` checks field completeness, SEO lengths, the `factsAsAt` date, forbidden claims (processing-time figures, guarantees, approval rates), internal links and duplicate slugs.

Rules that must not be broken: no processing-time numbers (link to the Home Affairs tool), no approval rates or guarantees, every figure dated and sourced, legal citations only where certain (otherwise cite the Part).
