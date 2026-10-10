// ─────────────────────────────────────────────────────────────────────────
// SKILLED MIGRATION POINTS TABLE (subclass 189, 190 and 491)
//
// Used by the free points calculator at /tools/points-calculator. Based on
// the points test in Schedule 6D of the Migration Regulations 1994. Values
// re-checked on 10 October 2026 against the Home Affairs points table
// (https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/skilled-independent-189/points-table)
// and the English language pages (PTE Academic scores for tests taken on or
// after 7 August 2025). The Government announced a reformed points test on
// 17 September 2026, but it is not yet in force: re-check this table when
// the new rules commence, and update `pointsTableAsAt` below.
// ─────────────────────────────────────────────────────────────────────────

export const pointsTableAsAt = "October 2026";
export const passMark = 65;

export interface PointsOption {
  value: string;
  label: string;
  points: number;
  hint?: string;
}

export interface PointsQuestion {
  id: string;
  label: string;
  help?: string;
  options: PointsOption[];
}

export const pointsQuestions: PointsQuestion[] = [
  {
    id: "age",
    label: "Your age when invited to apply",
    options: [
      { value: "18-24", label: "18 – 24", points: 25 },
      { value: "25-32", label: "25 – 32", points: 30 },
      { value: "33-39", label: "33 – 39", points: 25 },
      { value: "40-44", label: "40 – 44", points: 15 },
      { value: "45+", label: "45 or older", points: 0, hint: "You must be under 45 when invited to apply" },
    ],
  },
  {
    id: "english",
    label: "English language ability",
    help: "Minimum PTE Academic score in each part, shown as Speaking / Writing / Reading / Listening (tests taken on or after 7 August 2025).",
    options: [
      { value: "competent", label: "Competent", points: 0, hint: "PTE 54 / 51 / 48 / 47" },
      { value: "proficient", label: "Proficient", points: 10, hint: "PTE 76 / 69 / 59 / 58" },
      { value: "superior", label: "Superior", points: 20, hint: "PTE 88 / 85 / 70 / 69" },
    ],
  },
  {
    id: "overseasWork",
    label: "Skilled employment outside Australia (last 10 years)",
    options: [
      { value: "0", label: "Less than 3 years", points: 0 },
      { value: "3", label: "3 – 4 years", points: 5 },
      { value: "5", label: "5 – 7 years", points: 10 },
      { value: "8", label: "8 years or more", points: 15 },
    ],
  },
  {
    id: "australianWork",
    label: "Skilled employment in Australia (last 10 years)",
    options: [
      { value: "0", label: "Less than 1 year", points: 0 },
      { value: "1", label: "1 – 2 years", points: 5 },
      { value: "3", label: "3 – 4 years", points: 10 },
      { value: "5", label: "5 – 7 years", points: 15 },
      { value: "8", label: "8 years or more", points: 20 },
    ],
  },
  {
    id: "education",
    label: "Highest qualification",
    options: [
      { value: "none", label: "None of the below", points: 0 },
      { value: "recognised", label: "Award or qualification recognised by your assessing authority", points: 10 },
      { value: "diploma", label: "Diploma or trade qualification completed in Australia", points: 10 },
      { value: "bachelor", label: "Bachelor's or Master's degree", points: 15 },
      { value: "doctorate", label: "Doctorate (PhD)", points: 20 },
    ],
  },
  {
    id: "partner",
    label: "Partner status",
    options: [
      { value: "single", label: "Single, or your partner is an Australian citizen or permanent resident", points: 10 },
      { value: "skilled", label: "Partner is under 45, with Competent English and a suitable skills assessment", points: 10 },
      { value: "english", label: "Partner has Competent English (no skills assessment)", points: 5 },
      { value: "none", label: "Partner meets none of the above", points: 0 },
    ],
  },
];

export interface PointsBonus {
  id: string;
  label: string;
  points: number;
  help?: string;
  // Practice on Learniiz can help earn this one.
  learniiz?: "pte" | "ccl";
}

export const pointsBonuses: PointsBonus[] = [
  {
    id: "australianStudy",
    label: "Australian study requirement",
    help: "At least 2 academic years of study in Australia in CRICOS-registered courses.",
    points: 5,
  },
  {
    id: "specialist",
    label: "Specialist education qualification",
    help: "Master's by research or doctorate from an Australian institution in a specified STEM or ICT field (at least 2 academic years).",
    points: 10,
  },
  {
    id: "regional",
    label: "Study in regional Australia",
    help: "Met the Australian study requirement while living and studying in a designated regional area.",
    points: 5,
  },
  {
    id: "professionalYear",
    label: "Professional Year in Australia",
    help: "An approved Professional Year in accounting, ICT or engineering, completed in the 4 years before you are invited.",
    points: 5,
  },
  {
    id: "ccl",
    label: "Credentialled community language (NAATI CCL)",
    points: 5,
    learniiz: "ccl",
  },
];

export const visaNominationPoints = [
  { value: "189", label: "Skilled Independent (subclass 189)", points: 0 },
  { value: "190", label: "Skilled Nominated (subclass 190) — state or territory nomination", points: 5 },
  { value: "491", label: "Skilled Work Regional (subclass 491) — regional nomination or family sponsorship", points: 15 },
] as const;

// Combined Australian + overseas skilled employment is capped at 20 points.
export const employmentCap = 20;
