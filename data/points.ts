// ─────────────────────────────────────────────────────────────────────────
// SKILLED MIGRATION POINTS TABLE (subclass 189, 190 and 491)
//
// Used by the free points calculator at /tools/points. Based on the points
// test in Schedule 6D of the Migration Regulations 1994 (regulation 2.26AC).
// Each option names its Schedule item (e.g. 6D12) so it can be checked
// line by line. Points and conditions re-checked on 16 October 2026 against
// the Schedule 6D text, the Home Affairs points table
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
    help: "Points are set by your age on the day the invitation is issued, not when you lodge your expression of interest (Part 6D.1).",
    options: [
      { value: "18-24", label: "18 – 24", points: 25 }, // 6D11
      { value: "25-32", label: "25 – 32", points: 30 }, // 6D12
      { value: "33-39", label: "33 – 39", points: 25 }, // 6D13
      { value: "40-44", label: "40 – 44", points: 15 }, // 6D14
      { value: "45+", label: "45 or older", points: 0, hint: "You must be under 45 when invited to apply" },
    ],
  },
  {
    id: "english",
    label: "English language ability",
    help: "Minimum PTE Academic score in each part, shown as Speaking / Writing / Reading / Listening (tests taken on or after 7 August 2025). Competent English is required to apply but earns no points (Part 6D.2).",
    options: [
      { value: "competent", label: "Competent", points: 0, hint: "PTE 54 / 51 / 48 / 47" },
      { value: "proficient", label: "Proficient", points: 10, hint: "PTE 76 / 69 / 59 / 58" }, // 6D22
      { value: "superior", label: "Superior", points: 20, hint: "PTE 88 / 85 / 70 / 69" }, // 6D21
    ],
  },
  {
    id: "overseasWork",
    label: "Skilled employment outside Australia (last 10 years)",
    help: "Months employed in your nominated skilled occupation or a closely related one, added up across the 10 years before invitation (Part 6D.3).",
    options: [
      { value: "0", label: "Less than 3 years", points: 0, hint: "Under 36 months" },
      { value: "3", label: "3 – 4 years", points: 5, hint: "At least 36 months" }, // 6D31
      { value: "5", label: "5 – 7 years", points: 10, hint: "At least 60 months" }, // 6D32
      { value: "8", label: "8 years or more", points: 15, hint: "At least 96 months" }, // 6D33
    ],
  },
  {
    id: "australianWork",
    label: "Skilled employment in Australia (last 10 years)",
    help: "Months employed in Australia in your nominated skilled occupation or a closely related one, in the 10 years before invitation (Part 6D.4). Overseas and Australian employment together are capped at 20 points (Part 6D.5).",
    options: [
      { value: "0", label: "Less than 1 year", points: 0, hint: "Under 12 months" },
      { value: "1", label: "1 – 2 years", points: 5, hint: "At least 12 months" }, // 6D41
      { value: "3", label: "3 – 4 years", points: 10, hint: "At least 36 months" }, // 6D42
      { value: "5", label: "5 – 7 years", points: 15, hint: "At least 60 months" }, // 6D43
      { value: "8", label: "8 years or more", points: 20, hint: "At least 96 months" }, // 6D44
    ],
  },
  {
    id: "education",
    label: "Highest qualification",
    help: "Only your highest qualification counts (Part 6D.7). Degrees from overseas count if they are of a recognised standard; diplomas and trade qualifications count only if awarded in Australia.",
    options: [
      { value: "none", label: "None of the below", points: 0 },
      { value: "recognised", label: "Award or qualification recognised by your assessing authority", points: 10, hint: "Recognised as suitable for your nominated occupation" }, // 6D75
      { value: "diploma", label: "Diploma or trade qualification completed in Australia", points: 10, hint: "Awarded by an Australian educational institution" }, // 6D73, 6D74
      { value: "bachelor", label: "Bachelor's or Master's degree", points: 15, hint: "Australian, or overseas of a recognised standard" }, // 6D72
      { value: "doctorate", label: "Doctorate (PhD)", points: 20, hint: "Australian, or overseas of a recognised standard" }, // 6D71
    ],
  },
  {
    id: "partner",
    label: "Partner status",
    help: "Partner points (Part 6D.11) apply to a spouse or de facto partner who is included in your application and is not an Australian citizen or permanent resident.",
    options: [
      { value: "single", label: "Single, or your partner is an Australian citizen or permanent resident", points: 10 }, // 6D112
      {
        value: "skilled",
        label: "Partner is under 45, nominated an occupation on the skilled list, has a suitable skills assessment and Competent English",
        points: 10,
        hint: "The skills assessment can't be one obtained for a subclass 485 visa",
      }, // 6D111
      { value: "english", label: "Partner has Competent English only", points: 5, hint: "Included in your application, no skills assessment" }, // 6D113
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
    help: "At least 2 academic years of study in Australia in CRICOS-registered courses (6D81).",
    points: 5,
  },
  {
    id: "specialist",
    label: "Specialist education qualification",
    help: "Master's by research or doctorate from an Australian institution in a specified STEM or ICT field, at least 2 academic years (6D7A1).",
    points: 10,
  },
  {
    id: "regional",
    label: "Study in regional Australia",
    help: "Met the Australian study requirement at a campus in a designated regional area while living in a designated regional area, with no distance education (6D101). Tick the Australian study requirement as well.",
    points: 5,
  },
  {
    id: "professionalYear",
    label: "Professional Year in Australia",
    help: "An approved Professional Year of at least 12 months in your nominated or a closely related occupation (accounting, ICT or engineering), completed in the 4 years before you are invited (6D61).",
    points: 5,
  },
  {
    id: "ccl",
    label: "Credentialled community language (NAATI CCL)",
    help: "A NAATI CCL credential, or another accredited community language qualification at the specified standard (6D91).",
    points: 5,
    learniiz: "ccl",
  },
];

export const visaNominationPoints = [
  { value: "189", label: "Skilled Independent (subclass 189)", points: 0 },
  { value: "190", label: "Skilled Nominated (subclass 190) — state or territory nomination", points: 5 }, // 6D121
  { value: "491", label: "Skilled Work Regional (subclass 491) — regional nomination or family sponsorship", points: 15 }, // 6D131
] as const;

// Combined Australian + overseas skilled employment is capped at 20 points (Part 6D.5).
export const employmentCap = 20;
