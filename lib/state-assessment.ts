// ─────────────────────────────────────────────────────────────────────────
// STATE NOMINATION ASSESSMENT ENGINE
//
// Compares a visitor's answers with every state and territory nomination
// stream in data/state-assessment and reports, criterion by criterion,
// what they meet, what they don't, and what the tool can't check. Pure
// functions only: it runs in the browser, so nothing the visitor enters
// leaves their device.
//
// It reports fit with *published criteria*. It never predicts an
// invitation or a nomination: states rank candidates and places are limited.
// ─────────────────────────────────────────────────────────────────────────

import type { HomeAffairsOccupation, Place, Requirement, StateAssessmentData, StateList, StateSlug, StreamRule, Visa } from "@/data/state-assessment/types";
import type { ProgramStatus } from "@/data/state-nomination";
import { lookupPostcode } from "@/data/regional-postcodes";

// ── The visitor's answers ───────────────────────────────────────────────

export type EnglishLevel = "none" | "competent" | "proficient" | "superior";
export type StudyLevel = "none" | "certificate-iii" | "diploma" | "bachelor" | "masters" | "doctorate";
export type WorkStatus = "nominated" | "related" | "skilled" | "other" | "none";

export interface AssessmentProfile {
  visa: Visa | "either";
  occupationCode: string | null;
  skillsAssessment: "positive" | "applied" | "none";
  // Where you live now.
  living: { inAustralia: boolean; state: StateSlug | null; postcode: string; months: number };
  // Your current job in Australia (if any).
  work: { status: WorkStatus; state: StateSlug | null; postcode: string; months: number; hoursPerWeek: number; salary: number | null };
  // Years of skilled work in your nominated occupation, anywhere.
  experience: { last3: number; last5: number; last10: number };
  // Your highest qualification completed in Australia (if any).
  study: { level: StudyLevel; state: StateSlug | null; postcode: string; monthsInState: number; completedMonthsAgo: number };
  jobOffer: { state: StateSlug | null; postcode: string };
  business: { state: StateSlug | null; postcode: string };
  relativeState: StateSlug | null;
  // Points without any nomination points.
  points: number;
  english: EnglishLevel;
  age: number;
}

export const emptyProfile: AssessmentProfile = {
  visa: "either",
  occupationCode: null,
  skillsAssessment: "positive",
  living: { inAustralia: true, state: null, postcode: "", months: 12 },
  work: { status: "nominated", state: null, postcode: "", months: 6, hoursPerWeek: 38, salary: null },
  experience: { last3: 1, last5: 2, last10: 3 },
  study: { level: "none", state: null, postcode: "", monthsInState: 24, completedMonthsAgo: 12 },
  jobOffer: { state: null, postcode: "" },
  business: { state: null, postcode: "" },
  relativeState: null,
  points: 65,
  english: "competent",
  age: 30,
};

// ── Results ─────────────────────────────────────────────────────────────

export type CheckResult = "met" | "unmet" | "check";

export interface CriterionResult {
  label: string;
  result: CheckResult;
  detail: string;
  // For time-based shortfalls: months still needed.
  monthsToGo?: number;
}

export type StreamFit = "fits" | "close" | "no";

export interface StreamResult {
  stream: StreamRule;
  visa: Visa;
  fit: StreamFit;
  // Months until the visitor could fit, when only time-based criteria are short.
  monthsToGo?: number;
  criteria: CriterionResult[];
  occupationNote?: string;
  // Provenance of the list the occupation matched, when the state says something about it.
  listNote?: string;
}

// match: fits an open (or limited) stream. paused: fits the last published
// criteria of a paused program. soon: fits in a few months. closed: fits a
// stream that's closed. no: doesn't fit any stream on these answers.
export type StateVerdict = "match" | "paused" | "soon" | "closed" | "no";

export interface StateResult {
  data: StateAssessmentData;
  verdict: StateVerdict;
  best?: StreamResult;
  streams: StreamResult[];
  // The main reasons, when nothing fits.
  reasons: string[];
}

const VERDICT_ORDER: StateVerdict[] = ["match", "paused", "soon", "closed", "no"];
const STUDY_ORDER: StudyLevel[] = ["none", "certificate-iii", "diploma", "bachelor", "masters", "doctorate"];
const ENGLISH_ORDER: EnglishLevel[] = ["none", "competent", "proficient", "superior"];
const STUDY_LABEL: Record<Exclude<StudyLevel, "none">, string> = {
  "certificate-iii": "Certificate III or higher",
  diploma: "a diploma or higher",
  bachelor: "a bachelor degree or higher",
  masters: "a master's degree or higher",
  doctorate: "a doctorate",
};
const WORK_LABEL: Record<"nominated" | "related" | "skilled" | "any", string> = {
  nominated: "in your nominated occupation",
  related: "in your nominated or a closely related occupation",
  skilled: "in a skilled job",
  any: "",
};
// Within this many months, a time-based shortfall counts as "soon".
const SOON_MONTHS = 12;

export const stateNames: Record<StateSlug, { name: string; short: string }> = {
  "new-south-wales": { name: "New South Wales", short: "NSW" },
  victoria: { name: "Victoria", short: "VIC" },
  queensland: { name: "Queensland", short: "QLD" },
  "south-australia": { name: "South Australia", short: "SA" },
  "western-australia": { name: "Western Australia", short: "WA" },
  tasmania: { name: "Tasmania", short: "TAS" },
  "australian-capital-territory": { name: "Australian Capital Territory", short: "ACT" },
  "northern-territory": { name: "Northern Territory", short: "NT" },
};

// ── Places ──────────────────────────────────────────────────────────────

// Regional category of a postcode in a state: 2 or 3 if designated
// regional, 0 if not, null if unknown (no postcode, or a postcode in another state).
export function regionalCategory(postcode: string, state: StateSlug): 0 | 2 | 3 | null {
  if (!/^\d{4}$/.test(postcode.trim())) return null;
  const result = lookupPostcode(postcode.trim());
  if ("error" in result) return null;
  if (result.state !== stateNames[state].name) return null;
  return result.category ?? 0;
}

export function postcodeState(postcode: string): StateSlug | null {
  if (!/^\d{4}$/.test(postcode.trim())) return null;
  const result = lookupPostcode(postcode.trim());
  if ("error" in result) return null;
  const entry = (Object.entries(stateNames) as [StateSlug, { name: string }][]).find(([, value]) => value.name === result.state);
  return entry ? entry[0] : null;
}

function inPlace(place: Place, state: StateSlug, data: StateAssessmentData, actualState: StateSlug | null, postcode: string): CheckResult {
  if (actualState !== state) return "unmet";
  if (place === "state") return "met";
  if (place === "state-regional") {
    const category = regionalCategory(postcode, state);
    if (category === null) return "check";
    return category > 0 ? "met" : "unmet";
  }
  const area = data.areas?.find((item) => item.id === place.area);
  if (!area) return "check";
  if (!/^\d{4}$/.test(postcode.trim())) return "check";
  const code = Number(postcode);
  return area.postcodes.some(([from, to]) => code >= from && code <= to) ? "met" : "unmet";
}

function placeLabel(place: Place, state: StateSlug, data: StateAssessmentData): string {
  const name = stateNames[state].name;
  if (place === "state") return name;
  if (place === "state-regional") return `regional ${name}`;
  return data.areas?.find((item) => item.id === place.area)?.name ?? name;
}

// ── Occupation lists ────────────────────────────────────────────────────

export interface OccupationMatch {
  onList: boolean;
  listName?: string;
  caveat?: string;
  publicNote?: string;
}

export function occupationOnLists(
  code: string,
  visa: Visa,
  listIds: string[],
  data: StateAssessmentData,
  homeAffairs: (code: string) => HomeAffairsOccupation | undefined,
): OccupationMatch {
  for (const id of listIds) {
    if (id === "ha-190" || id === "ha-491") {
      // ha-190: MLTSSL or STSOL. ha-491: also the ROL, but only for a 491.
      const occupation = homeAffairs(code);
      if (!occupation) continue;
      const regionalOnlyAllowed = id === "ha-491" && visa === "491";
      const ok = occupation.lists.some((list) => list !== "ROL") || (regionalOnlyAllowed && occupation.lists.includes("ROL"));
      if (ok) return { onList: true, listName: `the Home Affairs list for subclass ${visa}` };
      continue;
    }
    const list: StateList | undefined = data.lists.find((item) => item.id === id);
    if (!list || !list.visas.includes(visa)) continue;
    const entry = list.entries.find(
      (item) => (list.granularity === "unit-group" ? code.slice(0, 4) === item.code : code === item.code || Boolean(item.alsoMatches?.includes(code))) && (!item.visas || item.visas.includes(visa)),
    );
    if (entry) return { onList: true, listName: `${list.name} (${list.programYear})`, caveat: entry.caveat, publicNote: list.publicNote };
  }
  const names = listIds
    .map((id) => (id.startsWith("ha-") ? "the Home Affairs list" : data.lists.find((item) => item.id === id)?.name))
    .filter(Boolean)
    .join(" or ");
  return { onList: false, listName: names };
}

// ── Requirements ────────────────────────────────────────────────────────

function evaluateRequirement(requirement: Requirement, state: StateSlug, data: StateAssessmentData, profile: AssessmentProfile): CriterionResult {
  switch (requirement.kind) {
    case "living": {
      const where = placeLabel(requirement.where, state, data);
      const label = requirement.minMonths > 0 ? `Living in ${where} for ${requirement.minMonths}+ months` : `Living in ${where}`;
      if (!profile.living.inAustralia) return { label, result: "unmet", detail: "You live outside Australia." };
      const place = inPlace(requirement.where, state, data, profile.living.state, profile.living.postcode);
      if (place === "unmet") return { label, result: "unmet", detail: profile.living.state === state ? `Your postcode isn't in ${where}.` : `You live in ${profile.living.state ? stateNames[profile.living.state].name : "another state"}.` };
      if (profile.living.months < requirement.minMonths) {
        const toGo = requirement.minMonths - profile.living.months;
        return { label, result: "unmet", detail: `You've lived there ${profile.living.months} months: ${toGo} to go.`, monthsToGo: toGo };
      }
      if (place === "check") return { label, result: "check", detail: "Add your postcode to confirm it's a designated regional area." };
      return { label, result: "met", detail: `You've lived there ${profile.living.months} months.` };
    }
    case "offshore": {
      const label = requirement.minMonths ? `Living outside Australia for ${requirement.minMonths}+ months` : "Living outside Australia";
      if (profile.living.inAustralia) return { label, result: "unmet", detail: "You live in Australia." };
      if (requirement.minMonths && profile.living.months < requirement.minMonths) {
        const toGo = requirement.minMonths - profile.living.months;
        return { label, result: "unmet", detail: `${profile.living.months} months so far: ${toGo} to go.`, monthsToGo: toGo };
      }
      return { label, result: "met", detail: "You live outside Australia." };
    }
    case "working": {
      const where = placeLabel(requirement.where, state, data);
      const kind = WORK_LABEL[requirement.occupation];
      const hours = requirement.minHoursPerWeek ? `, ${requirement.minHoursPerWeek}+ hours a week` : "";
      const length = requirement.minMonths > 0 ? ` for ${requirement.minMonths}+ months` : "";
      const label = `Working in ${where}${kind ? ` ${kind}` : ""}${length}${hours}`;
      const status = profile.work.status;
      if (!profile.living.inAustralia || status === "none") return { label, result: "unmet", detail: "You aren't working in Australia." };
      const acceptable: Record<typeof requirement.occupation, WorkStatus[]> = {
        nominated: ["nominated"],
        related: ["nominated", "related"],
        skilled: ["nominated", "related", "skilled"],
        any: ["nominated", "related", "skilled", "other"],
      };
      if (!acceptable[requirement.occupation].includes(status)) return { label, result: "unmet", detail: `Your job isn't ${kind || "the kind required"}.` };
      const workPostcode = profile.work.postcode || (profile.work.state === profile.living.state ? profile.living.postcode : "");
      const place = inPlace(requirement.where, state, data, profile.work.state, workPostcode);
      if (place === "unmet") return { label, result: "unmet", detail: profile.work.state === state ? `Your workplace isn't in ${where}.` : `You work in ${profile.work.state ? stateNames[profile.work.state].name : "another state"}.` };
      if (requirement.minHoursPerWeek && profile.work.hoursPerWeek < requirement.minHoursPerWeek) return { label, result: "unmet", detail: `You work ${profile.work.hoursPerWeek} hours a week.` };
      if (profile.work.months < requirement.minMonths) {
        const toGo = requirement.minMonths - profile.work.months;
        return { label, result: "unmet", detail: `${profile.work.months} months so far: ${toGo} to go.`, monthsToGo: toGo };
      }
      if (place === "check") return { label, result: "check", detail: "Add your workplace postcode to confirm it's a designated regional area." };
      return { label, result: "met", detail: `${profile.work.months} months, ${profile.work.hoursPerWeek} hours a week.` };
    }
    case "study": {
      const where = placeLabel(requirement.where, state, data);
      const parts = [STUDY_LABEL[requirement.minLevel]];
      if (requirement.minMonthsInState) parts.push(`${requirement.minMonthsInState}+ months studying there`);
      if (requirement.completedWithinMonths) parts.push(`completed in the last ${requirement.completedWithinMonths} months`);
      const label = `Studied in ${where}: ${parts.join(", ")}`;
      const study = profile.study;
      if (study.level === "none") return { label, result: "unmet", detail: "You haven't completed a qualification in Australia." };
      if (STUDY_ORDER.indexOf(study.level) < STUDY_ORDER.indexOf(requirement.minLevel)) return { label, result: "unmet", detail: `Needs ${STUDY_LABEL[requirement.minLevel]}.` };
      const place = inPlace(requirement.where, state, data, study.state, study.postcode);
      if (place === "unmet") return { label, result: "unmet", detail: study.state === state ? `Your institution isn't in ${where}.` : `You studied in ${study.state ? stateNames[study.state].name : "another state"}.` };
      if (requirement.minMonthsInState && study.monthsInState < requirement.minMonthsInState) return { label, result: "unmet", detail: `You studied there for ${study.monthsInState} months.` };
      if (requirement.completedWithinMonths && study.completedMonthsAgo > requirement.completedWithinMonths) return { label, result: "unmet", detail: `You finished ${study.completedMonthsAgo} months ago.` };
      if (place === "check") return { label, result: "check", detail: "Add your campus postcode to confirm it's regional." };
      return { label, result: "met", detail: "Your qualification fits." };
    }
    case "experience": {
      const label = `${requirement.minYears}+ year${requirement.minYears === 1 ? "" : "s"} of skilled work in the last ${requirement.withinYears} years`;
      const have = requirement.withinYears === 3 ? profile.experience.last3 : requirement.withinYears === 5 ? profile.experience.last5 : profile.experience.last10;
      if (have >= requirement.minYears) return { label, result: "met", detail: `You have ${have} year${have === 1 ? "" : "s"}.` };
      const toGo = Math.ceil((requirement.minYears - have) * 12);
      return { label, result: "unmet", detail: `You have ${have} year${have === 1 ? "" : "s"}.`, monthsToGo: toGo };
    }
    case "jobOffer": {
      const where = placeLabel(requirement.where, state, data);
      const label = `A job offer or contract with an employer in ${where}`;
      const place = inPlace(requirement.where, state, data, profile.jobOffer.state, profile.jobOffer.postcode);
      if (place === "met") return { label, result: "met", detail: "You have one." };
      if (place === "check") return { label, result: "check", detail: "Add the workplace postcode to confirm it's regional." };
      return { label, result: "unmet", detail: profile.jobOffer.state ? `Your offer is in ${stateNames[profile.jobOffer.state].name}.` : "You don't have one." };
    }
    case "business": {
      const where = placeLabel(requirement.where, state, data);
      const label = `Owning and running a business in ${where}`;
      const place = inPlace(requirement.where, state, data, profile.business.state, profile.business.postcode);
      if (place === "met") return { label, result: "check", detail: "The business must also meet the state's investment, turnover or employment rules." };
      if (place === "check") return { label, result: "check", detail: "Add the business postcode to confirm it's regional." };
      return { label, result: "unmet", detail: "You don't own a business there." };
    }
    case "relative": {
      const where = placeLabel(requirement.where, state, data);
      const label = `A relative living in ${where}`;
      return profile.relativeState === state
        ? { label, result: "check", detail: "The relative must also meet the state's residence and support rules." }
        : { label, result: "unmet", detail: "You don't have a relative there." };
    }
    case "salary": {
      const label = `Salary of at least A$${requirement.min.toLocaleString("en-AU")}`;
      if (profile.work.salary === null) return { label, result: "check", detail: "Add your salary to check this." };
      return profile.work.salary >= requirement.min
        ? { label, result: "met", detail: `Your salary is A$${profile.work.salary.toLocaleString("en-AU")}.` }
        : { label, result: "unmet", detail: `Your salary is A$${profile.work.salary.toLocaleString("en-AU")}.` };
    }
    case "manual":
      return { label: requirement.text, result: "check", detail: "The tool can't check this from your answers." };
    case "stateInitiated":
      return { label: requirement.text, result: "unmet", detail: "Only the state can start this pathway." };
  }
}

// Best result across alternative groups: met beats check beats unmet.
function evaluateAnyOf(groups: Requirement[][], state: StateSlug, data: StateAssessmentData, profile: AssessmentProfile): CriterionResult[] {
  const scored = groups.map((group) => {
    const results = group.map((requirement) => evaluateRequirement(requirement, state, data, profile));
    const unmet = results.filter((item) => item.result === "unmet");
    const checks = results.filter((item) => item.result === "check").length;
    const toGo = unmet.every((item) => item.monthsToGo !== undefined) ? Math.max(0, ...unmet.map((item) => item.monthsToGo ?? 0)) : Infinity;
    return { results, unmet: unmet.length, checks, toGo };
  });
  scored.sort((a, b) => a.unmet - b.unmet || a.toGo - b.toGo || a.checks - b.checks);
  const best = scored[0];
  if (!best) return [];
  if (groups.length === 1) return best.results;
  // Present the closest alternative, labelled as one of several options.
  return best.results.map((item) => ({ ...item, label: `${item.label} (one of ${groups.length} options)` }));
}

// ── Streams and states ──────────────────────────────────────────────────

function statusResult(status: ProgramStatus): CriterionResult {
  switch (status) {
    case "open":
      return { label: "Taking applications", result: "met", detail: "This stream is open." };
    case "limited":
      return { label: "Taking applications", result: "check", detail: "Places are limited or applications are restricted: check the state's page." };
    case "pending":
      return { label: "Taking applications", result: "check", detail: "Paused: the state hasn't opened its 2026-27 program yet." };
    case "closed":
      return { label: "Taking applications", result: "unmet", detail: "This stream is closed." };
  }
}

export function evaluateStream(
  stream: StreamRule,
  visa: Visa,
  data: StateAssessmentData,
  profile: AssessmentProfile,
  homeAffairs: (code: string) => HomeAffairsOccupation | undefined,
): StreamResult {
  const criteria: CriterionResult[] = [];
  const state = data.state;

  // Occupation: on the Home Affairs list for the visa, then on the state's list.
  let occupationNote: string | undefined;
  let listNote: string | undefined;
  if (!profile.occupationCode) {
    criteria.push({ label: "Occupation on the list", result: "check", detail: "Choose your occupation to check the lists." });
  } else if (!homeAffairsEligibility(homeAffairs(profile.occupationCode))[visa === "190" ? "sc190" : "sc491"]) {
    criteria.push({
      label: "Occupation on the list",
      result: "unmet",
      detail: visa === "190" ? "Not on the Home Affairs lists for subclass 190 (Regional Occupation List occupations can only use a 491)." : "Not on the Home Affairs lists for subclass 491.",
    });
  } else {
    const match = occupationOnLists(profile.occupationCode, visa, stream.occupationLists, data, homeAffairs);
    if (match.onList) {
      criteria.push({ label: "Occupation on the list", result: match.caveat ? "check" : "met", detail: match.caveat ? `On ${match.listName}, with a condition: ${match.caveat}` : `On ${match.listName}.` });
      occupationNote = match.caveat;
      listNote = match.publicNote;
    } else {
      criteria.push({ label: "Occupation on the list", result: "unmet", detail: `Not on ${match.listName || "the state's list"} for subclass ${visa}.` });
    }
  }

  // Who it's for.
  if (stream.audience === "onshore" && !profile.living.inAustralia) criteria.push({ label: "Living in Australia", result: "unmet", detail: "This stream is for people already in Australia." });
  if (stream.audience === "offshore" && profile.living.inAustralia) criteria.push({ label: "Living outside Australia", result: "unmet", detail: "This stream is for people outside Australia." });

  for (const requirement of stream.requires) criteria.push(evaluateRequirement(requirement, state, data, profile));
  if (stream.anyOf?.length) criteria.push(...evaluateAnyOf(stream.anyOf, state, data, profile));

  // Home Affairs basics, and anything stricter the state sets.
  const nominationPoints = visa === "190" ? 5 : 15;
  const total = profile.points + nominationPoints;
  const pointsNeeded = Math.max(65, stream.minPoints ?? 65);
  criteria.push(
    total >= pointsNeeded
      ? { label: `${pointsNeeded}+ points with nomination`, result: "met", detail: `${profile.points} + ${nominationPoints} for nomination = ${total}.` }
      : { label: `${pointsNeeded}+ points with nomination`, result: "unmet", detail: `${profile.points} + ${nominationPoints} for nomination = ${total}: ${pointsNeeded - total} short.` },
  );
  const englishNeeded = stream.english ?? "competent";
  criteria.push(
    ENGLISH_ORDER.indexOf(profile.english) >= ENGLISH_ORDER.indexOf(englishNeeded)
      ? { label: `${englishNeeded[0].toUpperCase()}${englishNeeded.slice(1)} English or better`, result: "met", detail: "Your English level is enough." }
      : { label: `${englishNeeded[0].toUpperCase()}${englishNeeded.slice(1)} English or better`, result: "unmet", detail: profile.english === "none" ? "You haven't got a test result yet." : "Your English level is below this." },
  );
  criteria.push(profile.age < 45 ? { label: "Under 45", result: "met", detail: `You're ${profile.age}.` } : { label: "Under 45", result: "unmet", detail: "Subclass 190 and 491 need you to be under 45 when invited." });
  criteria.push(
    profile.skillsAssessment === "positive"
      ? { label: "Positive skills assessment", result: "met", detail: "You have one." }
      : { label: "Positive skills assessment", result: "check", detail: profile.skillsAssessment === "applied" ? "Needed before you lodge an EOI or ROI." : "You'll need one before you lodge an EOI or ROI." },
  );
  criteria.unshift(statusResult(stream.status));

  const unmet = criteria.filter((item) => item.result === "unmet" && item.label !== "Taking applications");
  let fit: StreamFit = "no";
  let monthsToGo: number | undefined;
  if (unmet.length === 0) fit = "fits";
  else if (unmet.every((item) => item.monthsToGo !== undefined)) {
    monthsToGo = Math.max(...unmet.map((item) => item.monthsToGo ?? 0));
    if (monthsToGo <= SOON_MONTHS) fit = "close";
  }
  return { stream, visa, fit, monthsToGo, criteria, occupationNote, listNote };
}

function verdictFor(result: StreamResult): StateVerdict {
  if (result.fit === "fits") {
    if (result.stream.status === "open" || result.stream.status === "limited") return "match";
    if (result.stream.status === "pending") return "paused";
    return "closed";
  }
  if (result.fit === "close" && result.stream.status !== "closed") return "soon";
  return "no";
}

function score(result: StreamResult): number {
  const unmet = result.criteria.filter((item) => item.result === "unmet").length;
  const checks = result.criteria.filter((item) => item.result === "check").length;
  // A stream for people somewhere else (onshore vs offshore) or one only the
  // state can start is never the "closest" option.
  const wrongPlace = result.criteria.some((item) => item.result === "unmet" && (item.label === "Living in Australia" || item.label === "Living outside Australia"));
  const stateOnly = result.stream.requires.some((requirement) => requirement.kind === "stateInitiated");
  const closed = result.stream.status === "closed";
  // Between otherwise equal options, lead with the permanent 190.
  const provisional = result.visa === "491" ? 3 : 0;
  return VERDICT_ORDER.indexOf(verdictFor(result)) * 1000 + (wrongPlace ? 400 : 0) + (stateOnly ? 300 : 0) + (closed ? 200 : 0) + unmet * 10 + provisional + checks + (result.monthsToGo ?? 0) / 100;
}

export function assessState(data: StateAssessmentData, profile: AssessmentProfile, homeAffairs: (code: string) => HomeAffairsOccupation | undefined): StateResult {
  const visas: Visa[] = profile.visa === "either" ? ["190", "491"] : [profile.visa];
  const streams: StreamResult[] = [];
  for (const stream of data.streams) {
    for (const visa of stream.visas) {
      if (!visas.includes(visa)) continue;
      streams.push(evaluateStream(stream, visa, data, profile, homeAffairs));
    }
  }
  streams.sort((a, b) => score(a) - score(b));
  const best = streams[0];
  const verdict = best ? verdictFor(best) : "no";

  // The most common reasons nothing fits, for the summary line.
  const reasons: string[] = [];
  if (verdict === "no") {
    const counts = new Map<string, number>();
    for (const result of streams) {
      for (const item of result.criteria) if (item.result === "unmet") counts.set(item.label.replace(/ \(one of \d+ options\)$/, ""), (counts.get(item.label.replace(/ \(one of \d+ options\)$/, "")) ?? 0) + 1);
    }
    reasons.push(...[...counts.entries()].sort((a, b) => b[1] - a[1]).slice(0, 2).map(([label]) => label));
  }
  return { data, verdict, best, streams, reasons };
}

export function assessAll(states: StateAssessmentData[], profile: AssessmentProfile, homeAffairs: (code: string) => HomeAffairsOccupation | undefined): StateResult[] {
  return states
    .map((data) => assessState(data, profile, homeAffairs))
    .sort((a, b) => VERDICT_ORDER.indexOf(a.verdict) - VERDICT_ORDER.indexOf(b.verdict) || (a.best && b.best ? score(a.best) - score(b.best) : 0));
}

// Home Affairs baseline: can this occupation be nominated for the visa at all?
export function homeAffairsEligibility(occupation: HomeAffairsOccupation | undefined): { sc190: boolean; sc491: boolean } {
  if (!occupation) return { sc190: false, sc491: false };
  const nonRegional = occupation.lists.some((list) => list !== "ROL");
  return { sc190: nonRegional, sc491: occupation.lists.length > 0 };
}

// A plain-text summary for the booking form ("How can we help you?").
export function summaryText(profile: AssessmentProfile, results: StateResult[], occupation: HomeAffairsOccupation | undefined): string {
  const lines: string[] = ["State nomination assessment (from the Learniiz website):"];
  lines.push(`Occupation: ${occupation ? `${occupation.title} (${occupation.code})` : "not chosen"}; skills assessment: ${profile.skillsAssessment}.`);
  lines.push(
    `Living ${profile.living.inAustralia ? `in ${profile.living.state ? stateNames[profile.living.state].name : "Australia"}${profile.living.postcode ? ` (${profile.living.postcode})` : ""}` : "outside Australia"} for ${profile.living.months} months.`,
  );
  if (profile.living.inAustralia && profile.work.status !== "none") {
    lines.push(`Working (${profile.work.status}) in ${profile.work.state ? stateNames[profile.work.state].name : "Australia"} for ${profile.work.months} months, ${profile.work.hoursPerWeek} hours a week.`);
  }
  lines.push(`Points without nomination: ${profile.points}; English: ${profile.english}; age: ${profile.age}; visa: ${profile.visa === "either" ? "190 or 491" : profile.visa}.`);
  const fits = results.filter((item) => item.verdict === "match" || item.verdict === "paused" || item.verdict === "soon");
  lines.push(`Possible states: ${fits.length ? fits.map((item) => `${stateNames[item.data.state].short} (${item.verdict})`).join(", ") : "none on these answers"}.`);
  return lines.join("\n");
}
