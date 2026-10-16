// ─────────────────────────────────────────────────────────────────────────
// DESIGNATED REGIONAL AREA POSTCODES — used by /tools/regional-postcode-checker.
//
// Source: Home Affairs "Designated regional area postcodes" table (the
// Migration (LIN 19/217: Regional Areas) Instrument 2019), checked on
// `regionalPostcodesAsAt`. Category 2 is "Cities and major regional
// centres"; Category 3 is "Regional centres and other regional areas".
// Postcodes outside both categories (Sydney, Melbourne, Brisbane) are not
// regional. Ranges are inclusive. Postcodes marked with * on the Home
// Affairs page were added on 5 March 2022 and do not apply to visas
// granted before that date.
// ─────────────────────────────────────────────────────────────────────────

export const regionalPostcodesAsAt = "12 October 2026";
export const regionalPostcodesSourceUrl =
  "https://immi.homeaffairs.gov.au/visas/working-in-australia/skill-occupation-list/regional-postcodes";

export type RegionalCategory = 2 | 3;

type Range = [number, number];

interface StateRules {
  state: string;
  short: string;
  // Postcode span belonging to this state, used to label results.
  span: Range[];
  category2: Range[];
  // null means "everything in the state not in category 2 is category 3".
  category3: Range[] | null;
  // Which city the category 2 ranges correspond to.
  category2Label: string;
}

const r = (from: number, to: number = from): Range => [from, to];

export const regionalRules: StateRules[] = [
  {
    state: "New South Wales", short: "NSW", span: [r(2000, 2599), r(2619, 2898), r(2921, 2999)],
    category2Label: "Newcastle, Lake Macquarie, Wollongong and the Illawarra",
    category2: [r(2259), r(2264, 2308), r(2500, 2526), r(2528, 2535), r(2574)],
    category3: [r(2250, 2258), r(2260, 2263), r(2311, 2490), r(2527), r(2536, 2551), r(2575, 2739), r(2753, 2754), r(2756, 2758), r(2773, 2898)],
  },
  {
    state: "Victoria", short: "VIC", span: [r(3000, 3999)],
    category2Label: "Geelong",
    category2: [r(3211, 3232), r(3235), r(3240), r(3328), r(3330, 3333), r(3340), r(3342)],
    category3: [r(3097, 3099), r(3139), r(3233, 3234), r(3236, 3239), r(3241, 3325), r(3329), r(3334), r(3341), r(3345, 3424), r(3430, 3799), r(3809, 3909), r(3912, 3971), r(3978, 3996)],
  },
  {
    state: "Queensland", short: "QLD", span: [r(4000, 4999)],
    category2Label: "the Gold Coast and Sunshine Coast",
    category2: [r(4019, 4022), r(4025), r(4037), r(4074), r(4076, 4078), r(4207, 4275), r(4300, 4301), r(4303, 4305), r(4500, 4506), r(4508, 4512), r(4514, 4516), r(4517, 4519), r(4521), r(4550, 4551), r(4553, 4562), r(4564, 4569), r(4571, 4575)],
    category3: [r(4124, 4125), r(4133), r(4183, 4184), r(4280, 4287), r(4306, 4498), r(4507), r(4552), r(4563), r(4570), r(4580, 4895)],
  },
  {
    state: "Western Australia", short: "WA", span: [r(6000, 6797)],
    category2Label: "Perth",
    category2: [r(6000, 6038), r(6050, 6083), r(6090, 6182), r(6208, 6211), r(6214), r(6556, 6558)],
    category3: null,
  },
  {
    state: "South Australia", short: "SA", span: [r(5000, 5799), r(5800, 5999)],
    category2Label: "Adelaide",
    category2: [r(5000, 5171), r(5173, 5174), r(5231, 5235), r(5240, 5252), r(5351), r(5950, 5960)],
    category3: null,
  },
  {
    state: "Tasmania", short: "TAS", span: [r(7000, 7799)],
    category2Label: "Hobart",
    category2: [r(7000), r(7004, 7026), r(7030, 7109), r(7140, 7151), r(7170, 7177)],
    category3: null,
  },
  {
    state: "Australian Capital Territory", short: "ACT", span: [r(200, 299), r(2600, 2618), r(2900, 2920)],
    category2Label: "Canberra",
    category2: [r(200, 299), r(2600, 2618), r(2900, 2920)],
    category3: [],
  },
  {
    state: "Northern Territory", short: "NT", span: [r(800, 999)],
    category2Label: "",
    category2: [],
    category3: null,
  },
  {
    state: "Norfolk Island", short: "Norfolk Island", span: [r(2899)],
    category2Label: "",
    category2: [],
    category3: null,
  },
];

const inRanges = (code: number, ranges: Range[]) => ranges.some(([from, to]) => code >= from && code <= to);

export interface PostcodeResult {
  postcode: string;
  state: string;
  short: string;
  category: RegionalCategory | null;
  categoryLabel: string;
  explanation: string;
}

export function lookupPostcode(input: string): PostcodeResult | { error: string } {
  const digits = input.trim().replace(/\D/g, "");
  if (digits.length < 3 || digits.length > 4) {
    return { error: "Enter a 4-digit Australian postcode." };
  }
  const code = Number(digits);
  const rules = regionalRules.find((state) => inRanges(code, state.span));
  if (!rules) {
    return { error: `${digits.padStart(4, "0")} does not match an Australian postcode range we recognise.` };
  }

  const postcode = digits.padStart(4, "0");
  if (inRanges(code, rules.category2)) {
    return {
      postcode, state: rules.state, short: rules.short, category: 2,
      categoryLabel: "Category 2: Cities and major regional centres",
      explanation: `${postcode} is in ${rules.category2Label}. It counts as a designated regional area for subclass 491 and 494 visas, regional study points and the Second Post-Higher Education Work stream of the subclass 485 visa.`,
    };
  }
  const isCategory3 = rules.category3 === null ? true : inRanges(code, rules.category3);
  if (isCategory3) {
    return {
      postcode, state: rules.state, short: rules.short, category: 3,
      categoryLabel: "Category 3: Regional centres and other regional areas",
      explanation: `${postcode} is a designated regional area in ${rules.state}. It qualifies for subclass 491 and 494 visas, regional study points, the Second Post-Higher Education Work stream of the subclass 485 visa, and priority processing of some regional visas.`,
    };
  }
  const city = rules.short === "NSW" ? "Sydney" : rules.short === "VIC" ? "Melbourne" : rules.short === "QLD" ? "Brisbane" : rules.state;
  return {
    postcode, state: rules.state, short: rules.short, category: null,
    categoryLabel: "Not a designated regional area",
    explanation: `${postcode} is in the ${city} metropolitan area, which is excluded from the designated regional areas. Living or studying here does not count towards regional visa conditions or regional study points.`,
  };
}
