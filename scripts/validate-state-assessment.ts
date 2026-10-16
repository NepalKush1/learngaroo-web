// Checks the state nomination assessment data (data/state-assessment) for
// the rules in scripts/sources/STATE-ASSESSMENT-BRIEF.md: well-formed
// ANZSCO codes, no duplicates, lists and areas that streams refer to,
// statuses that agree with data/state-nomination.ts, and occupations that
// match the Home Affairs lists. Run: npm run validate:states
// (ONLY=nsw,vic limits the report to those state codes).
import { homeAffairsListMeta, homeAffairsOccupations, stateAssessments } from "../data/state-assessment/index";
import type { Place, StateAssessmentData } from "../data/state-assessment/types";
import { statePrograms } from "../data/state-nomination";

const only = (process.env.ONLY ?? "")
  .split(",")
  .map((item) => item.trim())
  .filter(Boolean);

const problems: string[] = [];
const warnings: string[] = [];
const fail = (where: string, message: string) => problems.push(`${where}: ${message}`);
const warn = (where: string, message: string) => warnings.push(`${where}: ${message}`);

const DATE = /^\d{1,2} (January|February|March|April|May|June|July|August|September|October|November|December) 20\d\d$/;
const STATE_CODES: Record<string, string> = {
  "new-south-wales": "nsw",
  victoria: "vic",
  queensland: "qld",
  "south-australia": "sa",
  "western-australia": "wa",
  tasmania: "tas",
  "australian-capital-territory": "act",
  "northern-territory": "nt",
};

// ── Home Affairs list ───────────────────────────────────────────────────

const haCodes = new Map<string, (typeof homeAffairsOccupations)[number]>();
if (homeAffairsOccupations.length === 0) fail("home-affairs", "list is empty");
else {
  if (!DATE.test(homeAffairsListMeta.checkedOn)) fail("home-affairs", `checkedOn "${homeAffairsListMeta.checkedOn}"`);
  if (!/^https:\/\//.test(homeAffairsListMeta.source)) fail("home-affairs", "source must be an https URL");
  if (homeAffairsOccupations.length < 400) warn("home-affairs", `only ${homeAffairsOccupations.length} occupations (expected several hundred)`);
  for (const occupation of homeAffairsOccupations) {
    if (!/^\d{6}$/.test(occupation.code)) fail("home-affairs", `bad code "${occupation.code}"`);
    if (haCodes.has(occupation.code)) fail("home-affairs", `duplicate code ${occupation.code}`);
    haCodes.set(occupation.code, occupation);
    if (!occupation.title.trim()) fail("home-affairs", `${occupation.code} has no title`);
    if (occupation.lists.length === 0) fail("home-affairs", `${occupation.code} is on no list`);
    if (occupation.lists.includes("ROL") && occupation.lists.length > 1) warn("home-affairs", `${occupation.code} is on ROL and another list`);
  }
}

// Codes where a state prints an accepted alternative title or a code from
// another ANZSCO version; checked by hand, so not reported again.
const KNOWN_VARIANTS = new Set([
  "332211", // "Painter" for Home Affairs' "Painting Trades Worker"
  "333212", // "Renderer (Solid Plaster)" for "Solid Plasterer"
  "351112", // "Pastry Cook" for "Pastrycook"
  "311217", // Tasmania's ANZSCO 2022 "Respiratory Technician" (Gold list only), no 2013 equivalent on the lists
]);

// Loose title comparison to catch transposed codes.
const words = (title: string) =>
  new Set(
    title
      .toLowerCase()
      .replace(/\(.*?\)/g, " ")
      .split(/[^a-z]+/)
      .filter((word) => word.length > 3 && !["other", "general", "specialist", "nec", "officer", "worker", "manager"].includes(word)),
  );
function similar(a: string, b: string): boolean {
  const left = words(a);
  const right = words(b);
  if (left.size === 0 || right.size === 0) return true;
  for (const word of left) if (right.has(word)) return true;
  return false;
}

// ── States ──────────────────────────────────────────────────────────────

function checkPlace(where: string, place: Place, data: StateAssessmentData) {
  if (typeof place === "object" && place && "area" in place) {
    if (!(data.areas ?? []).some((area) => area.id === place.area)) fail(where, `unknown area "${place.area}"`);
  }
}

const covered = new Set<string>();
for (const data of stateAssessments) {
  const code = STATE_CODES[data.state];
  covered.add(data.state);
  if (only.length > 0 && !only.includes(code)) continue;
  const program = statePrograms.find((item) => item.slug === data.state);
  if (!program) {
    fail(code, `no statePrograms entry for ${data.state}`);
    continue;
  }
  if (!DATE.test(data.checkedOn)) fail(code, `checkedOn "${data.checkedOn}"`);
  if (!data.settingsYear.trim()) fail(code, "settingsYear is empty");
  if (!data.summary.trim()) fail(code, "summary is empty");
  if (data.sources.length === 0) fail(code, "no sources");
  for (const source of data.sources) if (!/^https:\/\//.test(source.url)) fail(code, `source not https: ${source.url}`);

  const listIds = new Set<string>();
  for (const list of data.lists) {
    const where = `${code}/${list.id}`;
    if (!list.id.startsWith(`${code}-`)) fail(where, `list id must start with "${code}-"`);
    if (listIds.has(list.id)) fail(where, "duplicate list id");
    listIds.add(list.id);
    if (!DATE.test(list.checkedOn)) fail(where, `checkedOn "${list.checkedOn}"`);
    if (!/^https:\/\//.test(list.source)) fail(where, "source must be https");
    if (list.entries.length === 0) fail(where, "list has no entries");
    const seen = new Set<string>();
    const digits = list.granularity === "unit-group" ? 4 : 6;
    for (const entry of list.entries) {
      if (!new RegExp(`^\\d{${digits}}$`).test(entry.code)) fail(where, `bad code "${entry.code}" (expected ${digits} digits)`);
      const key = `${entry.code}|${(entry.visas ?? []).join(",")}`;
      if (seen.has(key)) fail(where, `duplicate entry ${entry.code}`);
      seen.add(key);
      for (const visa of entry.visas ?? []) if (!list.visas.includes(visa)) fail(where, `${entry.code} lists visa ${visa} the list doesn't cover`);
      for (const alias of entry.alsoMatches ?? []) if (!/^\d{6}$/.test(alias)) fail(where, `bad alsoMatches code "${alias}"`);
      if (digits === 6 && haCodes.size > 0 && list.anzsco === "2013" && !KNOWN_VARIANTS.has(entry.code)) {
        const ha = haCodes.get(entry.code) ?? (entry.alsoMatches ?? []).map((alias) => haCodes.get(alias)).find(Boolean);
        if (!ha) warn(where, `${entry.code} ${entry.title} is not on the Home Affairs 190/491 lists`);
        else if (!similar(ha.title, entry.title)) warn(where, `${entry.code}: "${entry.title}" vs Home Affairs "${ha.title}"`);
      }
    }
  }

  const areaIds = new Set((data.areas ?? []).map((area) => area.id));
  if (areaIds.size !== (data.areas ?? []).length) fail(code, "duplicate area ids");
  for (const area of data.areas ?? []) {
    if (area.postcodes.length === 0) fail(`${code}/${area.id}`, "area has no postcodes");
    for (const [from, to] of area.postcodes) if (!(from >= 200 && to >= from && to <= 9999)) fail(`${code}/${area.id}`, `bad range ${from}-${to}`);
  }

  const streamIds = new Set<string>();
  for (const stream of data.streams) {
    const where = `${code}/${stream.id}`;
    if (!stream.id.startsWith(`${code}-`)) fail(where, `stream id must start with "${code}-"`);
    if (streamIds.has(stream.id)) fail(where, "duplicate stream id");
    streamIds.add(stream.id);
    if (stream.visas.length === 0) fail(where, "no visas");
    if (!/^https:\/\//.test(stream.source)) fail(where, "source must be https");
    if (stream.occupationLists.length === 0) fail(where, "no occupation lists");
    for (const id of stream.occupationLists) {
      if (id === "ha-190" || id === "ha-491") continue;
      if (!listIds.has(id)) fail(where, `unknown list "${id}"`);
    }
    if (stream.minPoints !== undefined && stream.minPoints < 65) fail(where, "minPoints below the 65 pass mark");
    const requirements = [...stream.requires, ...(stream.anyOf ?? []).flat()];
    if (stream.anyOf && stream.anyOf.some((group) => group.length === 0)) fail(where, "empty anyOf group");
    for (const requirement of requirements) {
      if ("where" in requirement) checkPlace(where, requirement.where, data);
      if (requirement.kind === "living" && requirement.minMonths < 0) fail(where, "negative months");
      if (requirement.kind === "working" && requirement.minMonths < 0) fail(where, "negative months");
      if ((requirement.kind === "manual" || requirement.kind === "stateInitiated") && !requirement.text.trim()) fail(where, `empty ${requirement.kind} requirement`);
    }
    if (stream.audience === "offshore" && requirements.some((requirement) => requirement.kind === "living" || requirement.kind === "working")) {
      warn(where, "offshore stream requires living or working in the state");
    }
    // Status should agree with the published state guide.
    const named = program.streams.find((item) => item.name === stream.name);
    const expected = named?.status ?? program.status;
    if (named && stream.status !== expected) fail(where, `status "${stream.status}" but data/state-nomination.ts says "${expected}"`);
    if (!named && stream.status !== program.status && stream.status !== "closed") warn(where, `status "${stream.status}" differs from the program status "${program.status}" (no stream with this exact name in state-nomination.ts)`);
  }
  if (data.streams.length === 0) fail(code, "no streams");
}

const missing = statePrograms.filter((program) => !covered.has(program.slug)).map((program) => STATE_CODES[program.slug]);

console.log(
  `Home Affairs list: ${homeAffairsOccupations.length} occupations. States with data: ${stateAssessments.length} of 8${missing.length ? ` (missing ${missing.join(", ")})` : ""}.`,
);
for (const data of stateAssessments) {
  const code = STATE_CODES[data.state];
  if (only.length > 0 && !only.includes(code)) continue;
  console.log(`  ${code}: ${data.lists.length} lists (${data.lists.reduce((sum, list) => sum + list.entries.length, 0)} entries), ${data.streams.length} streams`);
}
if (warnings.length) {
  console.log(`${warnings.length} warnings:`);
  for (const item of warnings.slice(0, 80)) console.log(" ! " + item);
  if (warnings.length > 80) console.log(` ! …and ${warnings.length - 80} more`);
}
if (problems.length === 0) console.log("No problems found.");
else {
  console.log(`${problems.length} problems:`);
  for (const item of problems) console.log(" - " + item);
  process.exitCode = 1;
}
