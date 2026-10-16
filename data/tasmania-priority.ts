// ─────────────────────────────────────────────────────────────────────────
// TASMANIA PRIORITY ATTRIBUTES — the ranking system Migration Tasmania uses
// to order Registrations of Interest (ROIs) for subclass 190 and 491
// nomination. Used by /tools/tasmania-points-calculator.
//
// Transcribed from the official pathway pages on migration.tas.gov.au on
// `tasmaniaAttributesAsAt` (pages last updated 5 August to 8 September
// 2026). Points are exactly as published. Invitation order is Gold, then
// Green, then Orange Plus holders, then other Orange candidates by points.
//
// `group` marks attributes that cannot be claimed together (the page says
// "Do not select if..."), typically because they describe the same job,
// salary band or length of residence. Only one per group can be selected.
// ─────────────────────────────────────────────────────────────────────────

export const tasmaniaAttributesAsAt = "12 October 2026";
export const tasmaniaOfficialUrl = "https://www.migration.tas.gov.au/skilled_migration";

export const priorityIncomeLevel = { year: 57000, hour: 28.85 };
export const incomeBands = {
  high: { year: 106600, hour: 53.95 },
  tsmit: { year: 79423, hour: 40.19 },
  mid: { year: 71480, hour: 36.17 },
};

export type Tier = "gold" | "green" | "orange-plus" | "orange";

export interface PriorityAttribute {
  id: string;
  tier: Tier;
  points: number;
  text: string;
  // Attributes sharing a group are mutually exclusive.
  group?: string;
}

export interface TasmaniaPathway {
  id: string;
  subclass: "190" | "491";
  code: "TSE" | "TSG" | "TER" | "TBO" | "TOS";
  name: string;
  summary: string;
  officialUrl: string;
  minimumRequirements: string[];
  // Pathways that award every ROI a Gold Pass have no attribute list.
  autoGold?: boolean;
  attributes: PriorityAttribute[];
}

const PIL = "you meet the priority income level (at least $57,000 a year or $28.85 an hour base rate)";

const base = (code: string) => `https://www.migration.tas.gov.au/skilled_migration/skilled-workers-and-graduates-living-in-Tasmania/tasmanian-${code}`;
const TSE_URL = base("skilled-employment-pathways-tse");
const TSG_URL = base("skilled-graduate-pathways-tsg");
const TER_URL = base("established-resident-pathways-ter");
const TBO_URL = base("business-operator-pathway-tbo");

// Attributes shared word-for-word across several pathways.
const common = {
  spouseEmployed: (points: number): PriorityAttribute => ({ id: "spouse-employed", tier: "orange", points, text: "Your spouse has been employed in Tasmania for the last six months in a role that pays at least the priority income level." }),
  english: (points: number): PriorityAttribute => ({ id: "english", tier: "orange", points, text: "You have Proficient or Superior English, or an exemption from the English requirement based on your passport country." }),
  spouseAqf6: (points: number): PriorityAttribute => ({ id: "spouse-aqf6", tier: "orange", points, text: "Your spouse has completed a qualification of at least AQF Level 6 through a Tasmanian education provider, undertaken in Tasmania." }),
  onlyTasmania: (points: number): PriorityAttribute => ({ id: "only-tasmania", tier: "orange", points, text: "You have not lived, worked or studied in any other part of Australia outside Tasmania." }),
  salaryHigh: (tier: Tier, points: number): PriorityAttribute => ({ id: "salary-high", tier, points, group: "salary", text: "Your base salary is $106,600 a year ($53.95 an hour) or more, and you have received this for at least the last 12 weeks." }),
  salaryTsmit: (points: number): PriorityAttribute => ({ id: "salary-tsmit", tier: "orange", points, group: "salary", text: "Your base salary is at least $79,423 a year ($40.19 an hour) but less than $106,600, and you have received this for the last 12 weeks." }),
  salaryMid: (points: number): PriorityAttribute => ({ id: "salary-mid", tier: "orange", points, group: "salary", text: "Your base salary is at least $71,480 a year ($36.17 an hour) but less than $79,423, and you have received this for the last 12 weeks." }),
  lived5: (points: number): PriorityAttribute => ({ id: "lived-5", tier: "orange", points, group: "residence", text: "You have lived in Tasmania continuously for five years or more." }),
  lived4: (points: number): PriorityAttribute => ({ id: "lived-4", tier: "orange", points, group: "residence", text: "You have lived in Tasmania continuously for at least four but less than five years." }),
  lived3: (points: number): PriorityAttribute => ({ id: "lived-3", tier: "orange", points, group: "residence", text: "You have lived in Tasmania continuously for at least three but less than four years." }),
};

const goldThreeMonths: PriorityAttribute = {
  id: "gold", tier: "gold", points: 1000, group: "employment",
  text: `You have a skills assessment for a teaching occupation (and work in a school) or a health or allied health occupation, have worked in Tasmania for the last three months in a job that matches your skills assessment, and ${PIL}.`,
};

export const tasmaniaPathways: TasmaniaPathway[] = [
  // ── Tasmanian Skilled Employment ────────────────────────────────────
  {
    id: "190-tse", subclass: "190", code: "TSE", name: "Tasmanian Skilled Employment", officialUrl: TSE_URL,
    summary: "For people already working in Tasmania in a job that matches their skills assessment.",
    minimumRequirements: [
      "Priority Occupation option: at least 9 months working in Tasmania in a role in the same ANZSCO 3-digit group as your skills assessment (6 months for school teaching, health or allied health), with your occupation listed as a TSE Priority Occupation",
      "Long-term option: at least 15 months in a matching role immediately before applying, with any skills assessment eligible for subclass 190",
      "Average of at least 20 hours a week over the qualifying period; salary at least $57,000 a year or $28.85 an hour excluding overtime, penalties, bonuses and casual loading",
      "Employer actively operating in Tasmania for 12 months, a genuine ongoing need with a 12-month contract and at least 3 months remaining",
      "You live in Tasmania and intend to stay; dependants are not living in another state or territory",
      "Self-employed or contractors: a relevant skills assessment and 12 months of business activity in Tasmania",
    ],
    attributes: [
      { id: "gold", tier: "gold", points: 1000, group: "employment", text: `You have a skills assessment for a teaching occupation (and work in a school) or a health or allied health occupation, your work matches your skills assessment, ${PIL}, and you have worked in Tasmania for the last six months with at least one job providing a minimum (not average) 30 hours every week.` },
      { id: "match-24", tier: "green", points: 500, group: "employment", text: `You have worked in Tasmania for more than the last two years in a role that matches your skills assessment, and ${PIL}.` },
      { id: "match-18", tier: "green", points: 300, group: "employment", text: `You have worked in Tasmania for the last 18 to 24 months in a role that matches your skills assessment, and ${PIL}.` },
      common.salaryHigh("orange-plus", 40),
      { id: "match-15", tier: "orange-plus", points: 40, group: "employment", text: `You have worked in Tasmania for the last 15 to 18 months in a role that matches your skills assessment, and ${PIL}.` },
      { id: "match-12", tier: "orange-plus", points: 30, group: "employment", text: `You have worked in Tasmania for the last 12 to 15 months in a role that matches your skills assessment, and ${PIL}.` },
      { id: "match-9", tier: "orange", points: 25, group: "employment", text: `You have worked in Tasmania for the last 9 to 12 months in a role that matches your skills assessment, and ${PIL}.` },
      { id: "au-exp-2", tier: "orange", points: 15, text: `You have at least two years of Australian work experience in the same industry as your skills assessment, and ${PIL}.` },
      common.salaryTsmit(15),
      common.salaryMid(10),
      common.spouseEmployed(4),
      { id: "lived-3plus", tier: "orange", points: 2, text: "You have lived in Tasmania continuously for more than three years." },
      common.english(1),
      common.spouseAqf6(1),
    ],
  },
  {
    id: "491-tse", subclass: "491", code: "TSE", name: "Tasmanian Skilled Employment", officialUrl: TSE_URL,
    summary: "For people working in Tasmania for at least 9 months. The job does not have to match your skills assessment.",
    minimumRequirements: [
      "At least 9 months working in Tasmania immediately before applying, averaging 20 hours a week, if the role pays at least $57,000 a year or $28.85 an hour",
      "At least 12 months (20 hours a week) if the role pays less than that but at least the National Minimum Wage, with an employer statement on recruitment difficulty and career advancement",
      "If the job does not match your skills assessment, you need relevant qualifications or experience aligned with the OSCA definition of the role",
      "Employer actively operating in Tasmania for 12 months, a genuine ongoing need with a 12-month contract and at least 3 months remaining",
      "You live in Tasmania and intend to stay; dependants are not living in another state or territory",
      "Self-employed or contractors: a relevant skills assessment and 12 months of business activity in Tasmania",
    ],
    attributes: [
      { id: "gold", tier: "gold", points: 1000, group: "employment", text: `You have a skills assessment for a teaching occupation (and work in a school) or a health or allied health occupation, your work matches your skills assessment, ${PIL}, and you have worked in Tasmania for the last six months with at least one job providing a minimum (not average) 30 hours every week.` },
      { id: "match-24", tier: "green", points: 500, group: "employment", text: `You have worked in Tasmania for more than the last two years in a role that matches your skills assessment, and ${PIL}.` },
      { id: "match-18", tier: "green", points: 300, group: "employment", text: `You have worked in Tasmania for the last 18 to 24 months in a role that matches your skills assessment, and ${PIL}.` },
      common.salaryHigh("orange-plus", 40),
      { id: "match-15", tier: "orange-plus", points: 40, group: "employment", text: `You have worked in Tasmania for the last 15 to 18 months in a role that matches your skills assessment, and ${PIL}.` },
      { id: "match-12", tier: "orange-plus", points: 30, group: "employment", text: `You have worked in Tasmania for the last 12 to 15 months in a role that matches your skills assessment, and ${PIL}.` },
      { id: "match-9", tier: "orange", points: 25, group: "employment", text: `You have worked in Tasmania for the last 9 to 12 months in a role that matches your skills assessment, and ${PIL}.` },
      { id: "au-exp-2", tier: "orange", points: 15, group: "au-experience", text: `You have at least two years of Australian work experience in the same industry as your skills assessment, and ${PIL}.` },
      { id: "nonmatch-18", tier: "orange", points: 15, group: "employment", text: `You have worked in Tasmania for at least the last 18 months in a role that does not match your skills assessment, and ${PIL}.` },
      common.salaryTsmit(15),
      common.salaryMid(10),
      { id: "au-exp-2-low", tier: "orange", points: 6, group: "au-experience", text: "You have two years of relevant prior Australian experience in the same industry as your skills assessment, and your current base salary is above the National Minimum Wage but below the priority income level." },
      { id: "industry-12", tier: "orange", points: 6, group: "employment", text: `You have been employed in Tasmania for the last 12 months in a role in the same industry area as your skills assessment, and ${PIL}.` },
      { id: "low-skills", tier: "orange", points: 4, group: "employment", text: "You are employed in a role that pays more than the National Minimum Wage but less than the priority income level, and you hold a skills assessment related to this role." },
      common.spouseEmployed(4),
      { id: "low-qual", tier: "orange", points: 2, group: "employment", text: "You are employed in a role that pays more than the National Minimum Wage but less than the priority income level, and you hold a related qualification (at least Certificate III, not online or RPL-based)." },
      { id: "lived-3plus", tier: "orange", points: 2, text: "You have lived in Tasmania continuously for more than three years." },
      common.english(1),
      common.spouseAqf6(1),
    ],
  },

  // ── Tasmanian Skilled Graduate ──────────────────────────────────────
  {
    id: "190-tsg", subclass: "190", code: "TSG", name: "Tasmanian Skilled Graduate", officialUrl: TSG_URL,
    summary: "For graduates of Tasmanian CRICOS institutions who studied full-time on site for at least two years.",
    minimumRequirements: [
      "Completed a CRICOS-registered course with a Tasmanian institution of at least 92 weeks, at AQF 5 or higher (or at least Certificate III related to an OSCA Major Group 3 or 4 occupation)",
      "Full-time, on-site study in Tasmania (at least 75% of a full-time load each semester, no online or distance learning; VET courses at least 15 contact hours a week)",
      "Lived in Tasmania for at least two calendar years from the start of the course and throughout the study",
      "You live in Tasmania and intend to stay; dependants are not living in another state or territory",
    ],
    attributes: [
      goldThreeMonths,
      { id: "match-18", tier: "green", points: 500, group: "employment", text: `You have worked in Tasmania for more than the last 18 months in a role that matches your skills assessment, and ${PIL}.` },
      { id: "match-9", tier: "green", points: 300, group: "employment", text: `You have worked in Tasmania for the last 9 to 18 months in a role that matches your skills assessment, and ${PIL}.` },
      { id: "phd-2", tier: "green", points: 250, group: "phd", text: "You have completed two years of your PhD in Tasmania, or one year after completing your undergraduate study in Tasmania." },
      { id: "study-18", tier: "orange-plus", points: 100, group: "employment", text: `You have worked in Tasmania for more than the last 18 months in a role directly related to the study you use for this pathway (but not matching your skills assessment), and ${PIL}.` },
      { id: "study-12", tier: "orange-plus", points: 75, group: "employment", text: `You have worked in Tasmania for the last 12 to 18 months in a role directly related to your Tasmanian study (not matching your skills assessment), and ${PIL}.` },
      { id: "study-9", tier: "orange-plus", points: 50, group: "employment", text: `You have worked in Tasmania for the last 9 to 12 months in a role directly related to your Tasmanian study (not matching your skills assessment), and ${PIL}.` },
      common.salaryHigh("orange-plus", 45),
      { id: "grad-program", tier: "orange-plus", points: 35, text: "You have an offer, within the last 12 months, for a full-time graduate employment program directly related to your skills assessment from a Tasmanian business with at least 20 employees operating in Tasmania for more than five years." },
      { id: "related-3", tier: "orange-plus", points: 35, group: "employment", text: `You have worked in Tasmania for the last three to nine months in a role that matches your skills assessment or is directly related to your Tasmanian study, and ${PIL}.` },
      common.salaryTsmit(25),
      common.salaryMid(20),
      { id: "neither-18", tier: "orange", points: 20, group: "employment", text: `You have worked in Tasmania for more than the last 18 months in a role that matches neither your skills assessment nor your Tasmanian study, and ${PIL}.` },
      common.onlyTasmania(15),
      { id: "placement", tier: "orange", points: 10, text: "You completed an in-course work placement of at least 400 hours as part of your Tasmanian study in a health, allied health or teaching field." },
      { id: "neither-9", tier: "orange", points: 9, group: "employment", text: `You have worked in Tasmania for the last 9 to 18 months in a role that matches neither your skills assessment nor your Tasmanian study, and ${PIL}.` },
      { id: "phd-started", tier: "orange", points: 8, group: "phd", text: "You have commenced PhD studies in Tasmania after completing undergraduate or postgraduate studies in Tasmania." },
      { id: "neither-3", tier: "orange", points: 7, group: "employment", text: `You have worked in Tasmania for the last three to nine months in a role that matches neither your skills assessment nor your Tasmanian study, and ${PIL}.` },
      { id: "low-12", tier: "orange", points: 7, group: "employment", text: "You have worked in Tasmania for more than the last 12 months in a role matching your skills assessment or Tasmanian study (minimum Certificate III), paid above the National Minimum Wage but below the priority income level." },
      common.lived5(4),
      { id: "low-6", tier: "orange", points: 4, group: "employment", text: "You have worked in Tasmania for more than six but less than 12 months in a role directly related to your skills assessment or Tasmanian study (minimum Certificate III), paid above the National Minimum Wage but below the priority income level." },
      common.lived4(3),
      { id: "industry-3", tier: "orange", points: 3, group: "employment", text: "You have worked in Tasmania for three to six months in the same industry as your skills assessment or Certificate III-plus Tasmanian study, paid at least the National Minimum Wage." },
      { id: "study-health", tier: "orange", points: 3, text: "Your Tasmanian study is directly related to an occupation in health, allied health or teaching." },
      common.spouseEmployed(3),
      common.lived3(2),
      { id: "interviews", tier: "orange", points: 1, text: "You have evidence of job interviews with at least two well-established Tasmanian businesses (operating 3+ years) for roles related to your skills assessment or study, if not already employed in a relevant role." },
      common.spouseAqf6(1),
      common.english(1),
    ],
  },
  {
    id: "491-tsg", subclass: "491", code: "TSG", name: "Tasmanian Skilled Graduate", officialUrl: TSG_URL,
    summary: "For graduates of Tasmanian CRICOS institutions who studied full-time on site for at least one year.",
    minimumRequirements: [
      "Completed a CRICOS-registered course with a Tasmanian institution of at least 40 weeks, at AQF 5 or higher (or at least Certificate III related to an OSCA Major Group 3 or 4 occupation)",
      "Full-time, on-site study in Tasmania (at least 75% of a full-time load each semester, no online or distance learning; VET courses at least 15 contact hours a week)",
      "Lived in Tasmania for at least one calendar year from the start of the course and throughout the study",
      "You live in Tasmania and intend to stay; dependants are not living in another state or territory",
    ],
    attributes: [
      goldThreeMonths,
      { id: "match-18", tier: "green", points: 500, group: "employment", text: `You have worked in Tasmania for more than the last 18 months in a role that matches your skills assessment, and ${PIL}.` },
      { id: "match-9", tier: "green", points: 300, group: "employment", text: `You have worked in Tasmania for the last 9 to 18 months in a role that matches your skills assessment, and ${PIL}.` },
      { id: "phd-2", tier: "green", points: 250, group: "phd", text: "You have completed two years of your PhD in Tasmania, or one year after completing your undergraduate study in Tasmania." },
      { id: "study-18", tier: "orange-plus", points: 95, group: "employment", text: `You have worked in Tasmania for more than the last 18 months in a role directly related to the study you use for this pathway (but not matching your skills assessment), and ${PIL}.` },
      { id: "study-12", tier: "orange-plus", points: 70, group: "employment", text: `You have worked in Tasmania for the last 12 to 18 months in a role directly related to your Tasmanian study (not matching your skills assessment), and ${PIL}.` },
      { id: "study-9", tier: "orange-plus", points: 45, group: "employment", text: `You have worked in Tasmania for the last 9 to 12 months in a role directly related to your Tasmanian study (not matching your skills assessment), and ${PIL}.` },
      common.salaryHigh("orange-plus", 40),
      { id: "grad-program", tier: "orange-plus", points: 30, text: "You have an offer, within the last 12 months, for a full-time graduate employment program directly related to your skills assessment from a Tasmanian business with at least 20 employees operating in Tasmania for more than five years." },
      { id: "related-3", tier: "orange-plus", points: 30, group: "employment", text: `You have worked in Tasmania for the last three to nine months in a role that matches your skills assessment or is directly related to your Tasmanian study, and ${PIL}.` },
      common.salaryTsmit(23),
      common.salaryMid(18),
      { id: "neither-18", tier: "orange", points: 17, group: "employment", text: `You have worked in Tasmania for more than the last 18 months in a role that matches neither your skills assessment nor your Tasmanian study, and ${PIL}.` },
      common.onlyTasmania(15),
      { id: "placement", tier: "orange", points: 9, text: "You completed an in-course work placement of at least 400 hours as part of your Tasmanian study in a health, allied health or teaching field." },
      { id: "phd-started", tier: "orange", points: 8, group: "phd", text: "You have commenced PhD studies in Tasmania after completing undergraduate or postgraduate studies in Tasmania." },
      { id: "neither-9", tier: "orange", points: 8, group: "employment", text: `You have worked in Tasmania for the last 9 to 18 months in a role that matches neither your skills assessment nor your Tasmanian study, and ${PIL}.` },
      { id: "neither-3", tier: "orange", points: 6, group: "employment", text: `You have worked in Tasmania for the last three to nine months in a role that matches neither your skills assessment nor your Tasmanian study, and ${PIL}.` },
      { id: "low-12", tier: "orange", points: 6, group: "employment", text: "You have worked in Tasmania for more than the last 12 months in a role matching your skills assessment or Tasmanian study (minimum Certificate III), paid above the National Minimum Wage but below the priority income level." },
      common.lived5(4),
      { id: "low-6", tier: "orange", points: 4, group: "employment", text: "You have worked in Tasmania for more than six but less than 12 months in a role directly related to your skills assessment or Tasmanian study (minimum Certificate III), paid above the National Minimum Wage but below the priority income level." },
      common.lived4(3),
      common.lived3(2),
      { id: "industry-3", tier: "orange", points: 2, group: "employment", text: "You have worked in Tasmania for the last three to six months in the same industry as your skills assessment or Certificate III-plus Tasmanian study, paid at least the National Minimum Wage." },
      { id: "study-health", tier: "orange", points: 2, text: "Your Tasmanian study is directly related to an occupation in health, allied health or teaching." },
      common.spouseEmployed(2),
      common.english(1),
      { id: "interviews", tier: "orange", points: 1, text: "You have evidence of job interviews with at least two well-established Tasmanian businesses (operating 3+ years) for roles related to your skills assessment or study, if not already employed in a relevant role." },
      common.spouseAqf6(1),
    ],
  },

  // ── Tasmanian Established Resident ──────────────────────────────────
  {
    id: "190-ter", subclass: "190", code: "TER", name: "Tasmanian Established Resident", officialUrl: TER_URL,
    summary: "For people who have lived in Tasmania for at least three years and are working, working remotely or running a business.",
    minimumRequirements: [
      "Lived in Tasmania for at least the last three years, with no more than 50% of your total Australian residence spent in other states or territories",
      "Either: a Tasmanian-based job paying at least $57,000 a year or $28.85 an hour with 12 months of work in the last two years (20 hours a week); or a job paying at least the National Minimum Wage with 18 months of work in the last three years; or 12 months of remote work from Tasmania for an employer outside the state at the priority income level; or a Tasmanian business operated for two years paying you at least the TSMIT ($79,423) and still in profit",
      "You intend to keep living in Tasmania; dependants are not living in another state or territory",
    ],
    attributes: [
      goldThreeMonths,
      { id: "match-18", tier: "green", points: 500, group: "employment", text: `You have worked in Tasmania for more than the last 18 months in a role that matches your skills assessment, and ${PIL}.` },
      { id: "match-9", tier: "green", points: 300, group: "employment", text: `You have worked in Tasmania for the last 9 to 18 months in a role that matches your skills assessment, and ${PIL}.` },
      common.salaryHigh("orange-plus", 45),
      { id: "biz-income-high", tier: "orange-plus", points: 45, group: "business-income", text: "You have received a personal income from your business of at least $106,600 for over 12 months and the business is still in profit." },
      { id: "biz-skills", tier: "orange-plus", points: 35, text: "You have a skills assessment directly related to your business operation." },
      { id: "biz-turnover", tier: "orange-plus", points: 30, text: "Your business had a turnover of more than $500,000 in the last financial year." },
      { id: "biz-employs-10", tier: "orange-plus", points: 30, text: "Your business employs more than 10 local Australian citizens, permanent residents or provisional visa holders." },
      common.salaryTsmit(25),
      { id: "match-3", tier: "orange", points: 25, group: "employment", text: `You have worked in Tasmania for the last three to nine months in a role that matches your skills assessment, and ${PIL}.` },
      { id: "biz-income-2y", tier: "orange", points: 25, group: "business-income", text: "You received a personal income from your business of more than $79,423 a year for the last two years, and it is still in profit." },
      { id: "au-exp-2", tier: "orange", points: 23, text: `You have at least two years of Australian work experience in the same industry as your skills assessment, and ${PIL}.` },
      { id: "neither-18", tier: "orange", points: 20, group: "employment", text: `You have worked in Tasmania for more than the last 18 months in a role that matches neither your skills assessment nor your Tasmanian study, and ${PIL}.` },
      common.salaryMid(20),
      { id: "neither-9", tier: "orange", points: 15, group: "employment", text: `You have worked in Tasmania for the last 9 to 18 months in a role that matches neither your skills assessment nor your Tasmanian study, and ${PIL}.` },
      common.onlyTasmania(15),
      { id: "neither-3", tier: "orange", points: 8, group: "employment", text: `You have worked in Tasmania for the last three to nine months in a role that matches neither your skills assessment nor your Tasmanian study, and ${PIL}.` },
      { id: "low-12", tier: "orange", points: 7, group: "employment", text: "You have worked in Tasmania for more than the last 12 months in a role matching your skills assessment or Tasmanian study (minimum Certificate III), paid above the National Minimum Wage but below the priority income level." },
      { id: "low-6", tier: "orange", points: 5, group: "employment", text: "You have worked in Tasmania for the last 6 to 12 months in a role matching your skills assessment or Tasmanian study (minimum Certificate III), paid above the National Minimum Wage but below the priority income level." },
      common.lived5(4),
      common.spouseEmployed(4),
      { id: "tas-qual-health", tier: "orange", points: 3, text: "Your Tasmanian qualification at AQF Level 5 or above is directly related to an occupation in health, allied health or education." },
      common.lived4(3),
      { id: "biz-3y", tier: "orange", points: 3, text: "You have operated your business in Tasmania for at least the last three years." },
      { id: "industry-nmw", tier: "orange", points: 2, group: "employment", text: "You are employed in the same industry as your skills assessment or Certificate III-plus Tasmanian study and paid at least the National Minimum Wage." },
      common.lived3(2),
      common.english(1),
      common.spouseAqf6(1),
    ],
  },
  {
    id: "491-ter", subclass: "491", code: "TER", name: "Tasmanian Established Resident", officialUrl: TER_URL,
    summary: "For people who have lived in Tasmania for at least two years and are working.",
    minimumRequirements: [
      "Lived in Tasmania for at least the last two years, with no more than 50% of your total Australian residence spent in other states or territories",
      "Either: a job paying at least $57,000 a year or $28.85 an hour with 6 months of work in the last year (20 hours a week); or a job paying at least the National Minimum Wage with 12 months of work in the last 18 months",
      "Remote work is not eligible for this pathway",
      "Dependants are not living in another state or territory",
    ],
    attributes: [
      goldThreeMonths,
      { id: "match-18", tier: "green", points: 500, group: "employment", text: `You have worked in Tasmania for more than the last 18 months in a role that matches your skills assessment, and ${PIL}.` },
      { id: "match-9", tier: "green", points: 300, group: "employment", text: `You have worked in Tasmania for the last 9 to 18 months in a role that matches your skills assessment, and ${PIL}.` },
      common.salaryHigh("orange-plus", 40),
      common.salaryTsmit(25),
      { id: "au-exp-2", tier: "orange", points: 20, text: `You have at least two years of Australian work experience in the same industry as your skills assessment, and ${PIL}.` },
      { id: "match-3", tier: "orange", points: 20, group: "employment", text: `You have worked in Tasmania for the last three to nine months in a role that matches your skills assessment, and ${PIL}.` },
      { id: "neither-18", tier: "orange", points: 18, group: "employment", text: `You have worked in Tasmania for more than the last 18 months in a role that matches neither your skills assessment nor your Tasmanian study, and ${PIL}.` },
      common.salaryMid(15),
      common.onlyTasmania(15),
      { id: "neither-9", tier: "orange", points: 9, group: "employment", text: `You have worked in Tasmania for the last 9 to 18 months in a role that matches neither your skills assessment nor your Tasmanian study, and ${PIL}.` },
      { id: "neither-3", tier: "orange", points: 8, group: "employment", text: `You have worked in Tasmania for the last three to nine months in a role that matches neither your skills assessment nor your Tasmanian study, and ${PIL}.` },
      { id: "low-12", tier: "orange", points: 6, group: "employment", text: "You have worked in Tasmania for more than the last 12 months in a role matching your skills assessment or Tasmanian study (minimum Certificate III), paid above the National Minimum Wage but below the priority income level." },
      common.lived5(4),
      { id: "low-6", tier: "orange", points: 4, group: "employment", text: "You have worked in Tasmania for the last 6 to 12 months in a role matching your skills assessment or Tasmanian study (minimum Certificate III), paid above the National Minimum Wage but below the priority income level." },
      { id: "tas-qual-health", tier: "orange", points: 3, text: "Your Tasmanian qualification at AQF Level 5 or above is directly related to an occupation in health, allied health or education." },
      common.lived4(3),
      common.spouseEmployed(3),
      { id: "industry-nmw", tier: "orange", points: 2, group: "employment", text: "You are employed in the same industry as your skills assessment or Certificate III-plus Tasmanian study and paid at least the National Minimum Wage." },
      common.lived3(2),
      common.english(1),
      common.spouseAqf6(1),
    ],
  },

  // ── Tasmanian Business Operator ─────────────────────────────────────
  {
    id: "491-tbo", subclass: "491", code: "TBO", name: "Tasmanian Business Operator", officialUrl: TBO_URL,
    summary: "For people who have established and run a Tasmanian business for at least 12 months. Subclass 491 only.",
    minimumRequirements: [
      "Established and operated a Tasmanian business for at least 12 months, solely owned or co-owned with your spouse",
      "The business remained in profit after paying you at least 85% of the TSMIT (currently $67,509) from genuine business activity, shown on ATO business and personal income statements",
      "Completed key Fair Work Ombudsman online learning units on fair employment practices",
      "Massage therapy businesses need a related skills assessment and a health fund provider number; subcontractors and independent contractors are not eligible",
      "Dependants are not living in another state or territory",
    ],
    attributes: [
      { id: "biz-income-high", tier: "orange-plus", points: 40, group: "business-income", text: "You have received a personal income from your business of at least $106,600 for over 12 months and the business is still in profit." },
      { id: "biz-turnover", tier: "orange-plus", points: 30, text: "Your business had a turnover of more than $500,000 in the last financial year." },
      { id: "biz-employs-10", tier: "orange-plus", points: 30, group: "employees", text: "Your business employs more than 10 local Australian citizens, permanent residents or provisional visa holders." },
      { id: "biz-income-tsmit", tier: "orange", points: 20, group: "business-income", text: "You received a personal income from your business of more than $79,423 but less than $106,600 in the last year, and it is still in profit." },
      { id: "biz-income-2y", tier: "orange", points: 20, text: "You received a personal income from your business of more than $79,423 a year for the last two years, and it is still in profit." },
      common.onlyTasmania(15),
      { id: "biz-skills", tier: "orange", points: 12, text: "You have a skills assessment directly related to your current business operation." },
      { id: "biz-income-mid", tier: "orange", points: 12, group: "business-income", text: "You received a personal income from your business of more than $71,480 but less than $79,423 in the last year, and it is still in profit." },
      { id: "biz-qual", tier: "orange", points: 5, text: "You hold a qualification directly relevant to your business (at least Certificate III), excluding online courses and RPL-based qualifications." },
      common.spouseEmployed(4),
      { id: "biz-18m", tier: "orange", points: 3, text: "You have operated your business in Tasmania for more than 18 consecutive months." },
      { id: "biz-employs-3", tier: "orange", points: 3, group: "employees", text: "You employ at least three full-time employees who are Australian citizens, permanent residents or provisional visa holders." },
      { id: "lived-3plus", tier: "orange", points: 3, group: "residence", text: "You have lived in Tasmania continuously for three years or more." },
      common.english(2),
      { id: "lived-2", tier: "orange", points: 2, group: "residence", text: "You have lived in Tasmania continuously for two but less than three years." },
    ],
  },

  // ── Overseas applicants ─────────────────────────────────────────────
  {
    id: "190-tos", subclass: "190", code: "TOS", name: "Overseas Applicant (Health or Education Job Offer)", autoGold: true,
    officialUrl: "https://www.migration.tas.gov.au/skilled_migration/skilled-workers-living-overseas/subclass-190-overseas-applicant-health-or-education-sector-job-offer-pathway",
    summary: "For applicants outside Australia with a Tasmanian job offer in health, allied health or teaching. Every ROI receives a Gold Pass.",
    minimumRequirements: [
      "A health, allied health or education skills assessment in ANZSCO group 241 (School Teachers), 251, 252, 253 or 254 (health and nursing professionals)",
      "A formal job offer in Tasmania in the same ANZSCO 3-digit group as your skills assessment, for at least 30 hours a week (school teachers must be offered a position in a Tasmanian school)",
      "Neither you nor your dependants have lived in another Australian state or territory in the last 12 months",
      "Employer operating in Tasmania for at least 12 months, wages at or above local market rates, and a genuine ongoing need",
      "If you fall short on the 190 points test or your occupation is 491-only, you may be nominated for subclass 491 instead",
    ],
    attributes: [],
  },
];

export const tierLabels: Record<Tier, { label: string; className: string; order: number; description: string }> = {
  gold: { label: "Gold Pass", className: "bg-amber-400 text-brand-navy", order: 0, description: "Invited first, usually in the next weekly round." },
  green: { label: "Green Pass", className: "bg-emerald-500 text-white", order: 1, description: "Invited after Gold Pass holders, ranked by points." },
  "orange-plus": { label: "Orange Plus", className: "bg-orange-500 text-white", order: 2, description: "The first Orange candidates invited, after Gold and Green." },
  orange: { label: "Orange Pass", className: "bg-orange-200 text-orange-900", order: 3, description: "Invited as places allow, ranked by points. Competitive in 2026-27." },
};

export function getTasmaniaPathway(id: string): TasmaniaPathway | undefined {
  return tasmaniaPathways.find((pathway) => pathway.id === id);
}

export function scoreTasmania(pathway: TasmaniaPathway, selected: Set<string>) {
  if (pathway.autoGold) return { total: 0, tier: "gold" as Tier, claimed: [] as PriorityAttribute[] };
  const claimed = pathway.attributes.filter((attribute) => selected.has(attribute.id));
  const total = claimed.reduce((sum, attribute) => sum + attribute.points, 0);
  const best = claimed.reduce<Tier>((tier, attribute) => (tierLabels[attribute.tier].order < tierLabels[tier].order ? attribute.tier : tier), "orange");
  return { total, tier: best, claimed };
}
