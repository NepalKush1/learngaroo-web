// ─────────────────────────────────────────────────────────────────────────
// STATE NOMINATION ASSESSMENT — the data behind "Which state could nominate
// me?" (/state-nomination/assessment).
//
// For each state and territory: its published occupation lists and its
// nomination streams written as checkable rules. The engine
// (lib/state-assessment.ts) compares a visitor's answers with every stream
// and reports which published criteria they meet, which they don't, and
// what the tool can't check. It never predicts an invitation.
//
// Every list and rule is transcribed from the official state or territory
// pages (or Home Affairs) on `checkedOn`, with the source URL. When a
// program is paused, the rules are its last published settings and say so.
// How to add or refresh data: scripts/sources/STATE-ASSESSMENT-BRIEF.md.
// ─────────────────────────────────────────────────────────────────────────

import type { ProgramStatus } from "../state-nomination";

export type StateSlug =
  | "new-south-wales"
  | "victoria"
  | "queensland"
  | "south-australia"
  | "western-australia"
  | "tasmania"
  | "australian-capital-territory"
  | "northern-territory";

export type Visa = "190" | "491";

// ── Occupations ─────────────────────────────────────────────────────────

// One occupation on the Home Affairs skilled occupation lists that apply to
// subclasses 190 and 491 (ANZSCO 2013 codes, as Home Affairs uses for them).
export interface HomeAffairsOccupation {
  // Six-digit ANZSCO code, e.g. "261313".
  code: string;
  title: string;
  // MLTSSL and STSOL occupations can be nominated for 190 and 491; ROL
  // occupations for 491 only.
  lists: ("MLTSSL" | "STSOL" | "ROL")[];
  // Assessing authority as Home Affairs lists it, e.g. "ACS".
  authority?: string;
}

export interface ListEntry {
  // Six-digit ANZSCO code (or four digits when `granularity` is "unit-group").
  code: string;
  title: string;
  // Visas this entry can be nominated for under this list. Omit when the
  // list applies to every visa named in `StateList.visas`.
  visas?: Visa[];
  // Conditions the state attaches to this entry, in its words (e.g. "Must
  // have 3 years of experience", "Employer must have operated for 3 years").
  caveat?: string;
  // The same occupation under another ANZSCO version's code, e.g. a state
  // that prints the 2022 code 224713 for Home Affairs' 224711.
  alsoMatches?: string[];
}

export interface StateList {
  // Unique id, prefixed with the state code, e.g. "wa-schedule-1".
  id: string;
  name: string;
  visas: Visa[];
  // "occupation": entries are six-digit codes. "unit-group": four-digit
  // ANZSCO unit groups; any occupation in the group matches.
  granularity: "occupation" | "unit-group";
  entries: ListEntry[];
  // The program year the state labels the list with, e.g. "2025-26".
  programYear: string;
  // ANZSCO version the list uses.
  anzsco: "2013" | "2022";
  checkedOn: string;
  source: string;
  note?: string;
  // One short sentence shown to visitors whose result relies on this list,
  // e.g. where it came from when the state has taken it offline.
  publicNote?: string;
}

// ── Places ──────────────────────────────────────────────────────────────

// A named part of a state defined by postcodes, when a stream depends on
// one (for example South Australia's outer regional areas).
export interface StateArea {
  id: string;
  name: string;
  // Inclusive postcode ranges.
  postcodes: [number, number][];
  source: string;
}

// Where a requirement must be met. "state" is anywhere in the stream's
// state; "state-regional" is a designated regional area of that state
// (Home Affairs Category 2 or 3 postcodes); `{ area }` is a StateArea id.
export type Place = "state" | "state-regional" | { area: string };

// ── Rules ───────────────────────────────────────────────────────────────

export type Requirement =
  // Living in the state (or regional part) for at least this long, up to now.
  | { kind: "living"; where: Place; minMonths: number }
  // Living outside Australia now (offshore streams), optionally for at least this long.
  | { kind: "offshore"; minMonths?: number }
  // Working in the state now, for at least this long, at these hours.
  // `occupation`: "nominated" = in your nominated occupation; "related" =
  // nominated or closely related; "skilled" = any skilled role at ANZSCO
  // skill level 1–3; "any" = any job.
  | { kind: "working"; where: Place; minMonths: number; minHoursPerWeek?: number; occupation: "nominated" | "related" | "skilled" | "any" }
  // A qualification from an institution in the state.
  | {
      kind: "study";
      where: Place;
      minLevel: "certificate-iii" | "diploma" | "bachelor" | "masters" | "doctorate";
      // Time studying in the state.
      minMonthsInState?: number;
      // Completed within this many months before applying.
      completedWithinMonths?: number;
    }
  // Skilled employment in the nominated (or closely related) occupation,
  // anywhere, within the last 3, 5 or 10 years.
  | { kind: "experience"; minYears: number; withinYears: 3 | 5 | 10 }
  // A current job offer or employment contract with an employer in the state.
  | { kind: "jobOffer"; where: Place }
  // Owning and operating a business in the state.
  | { kind: "business"; where: Place }
  // A relative living in the state.
  | { kind: "relative"; where: Place }
  // Annual salary of at least this much in the current role.
  | { kind: "salary"; min: number }
  // A requirement the tool can't check from the answers; shown as "check".
  | { kind: "manual"; text: string }
  // A pathway only the state can start (e.g. it invites you); never met
  // from the visitor's answers.
  | { kind: "stateInitiated"; text: string };

export interface StreamRule {
  // Unique id, prefixed with the state code, e.g. "nsw-190".
  id: string;
  // As named on the official page (matches statePrograms[].streams[].name
  // where possible).
  name: string;
  visas: Visa[];
  // Who the stream is for: people in Australia, outside Australia, or both.
  audience: "onshore" | "offshore" | "both";
  // Current status of this stream (from data/state-nomination.ts or the
  // official page on `checkedOn`).
  status: ProgramStatus;
  // The occupation must be on at least one of these lists. Use the special
  // ids "ha-190" (MLTSSL or STSOL) or "ha-491" (MLTSSL, STSOL or ROL) when
  // the stream accepts any occupation Home Affairs lists for the visa.
  occupationLists: string[];
  // Every requirement here must be met.
  requires: Requirement[];
  // At least one group must be fully met (alternatives, e.g. "work in the
  // state OR live in the state for 6 months OR live offshore for 6 months").
  anyOf?: Requirement[][];
  // Only when the state publishes something stricter than Home Affairs
  // (pass mark 65 including nomination points, competent English, under 45).
  minPoints?: number;
  english?: "competent" | "proficient" | "superior";
  // Things that matter but aren't pass/fail (ranking, caps, priority sectors).
  notes: string[];
  source: string;
}

export interface StateAssessmentData {
  state: StateSlug;
  checkedOn: string;
  // The program year the rules come from, e.g. "2025-26 settings" when the
  // 2026-27 program hasn't been published.
  settingsYear: string;
  lists: StateList[];
  areas?: StateArea[];
  streams: StreamRule[];
  // One or two sentences shown above this state's results.
  summary: string;
  sources: { label: string; url: string }[];
}
