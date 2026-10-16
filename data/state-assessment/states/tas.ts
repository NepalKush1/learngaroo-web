import type { ListEntry, Requirement, StateAssessmentData } from "../types";
import { goldOccupationsUrl, tasmaniaOccupations, tsePriorityRolesUrl } from "../../tasmania-occupations";

// Tasmania: occupation lists and nomination pathways for subclass 190 and
// 491, transcribed from migration.tas.gov.au on 13 October 2026 (2026-27
// program, open since 17 August 2026). The TSE Priority Roles list and the
// Health, Allied Health and Teaching list are reused from
// data/tasmania-occupations.ts after checking both pages again today
// (unchanged: 230 and 102 occupations, pages updated 19 August and
// 12 October 2026). How to refresh: scripts/sources/STATE-ASSESSMENT-BRIEF.md.

const CHECKED_ON = "13 October 2026";
const BASE = "https://www.migration.tas.gov.au/skilled_migration";
const ONSHORE_URL = `${BASE}/skilled-workers-and-graduates-living-in-Tasmania`;
const TSE_URL = `${ONSHORE_URL}/tasmanian-skilled-employment-pathways-tse`;
const TSG_URL = `${ONSHORE_URL}/tasmanian-skilled-graduate-pathways-tsg`;
const TER_URL = `${ONSHORE_URL}/tasmanian-established-resident-pathways-ter`;
const TBO_URL = `${ONSHORE_URL}/tasmanian-business-operator-pathway-tbo`;
const DEFINITIONS_URL = `${ONSHORE_URL}/additional_information,_exclusions_and_definitions`;
const EMPLOYMENT_URL = `${DEFINITIONS_URL}/employment-eligibility`;
const BUSINESS_URL = `${DEFINITIONS_URL}/business-operation`;
const CAVEATS_URL = `${DEFINITIONS_URL}/accordion/occupational_caveats_for_tasmanian_skilled_employment_pathway`;
const OVERSEAS_URL = `${BASE}/skilled-workers-living-overseas`;
const JOB_OFFER_URL = `${OVERSEAS_URL}/subclass-190-overseas-applicant-health-or-education-sector-job-offer-pathway`;
const OSOP_URL = `${OVERSEAS_URL}/overseas-skilled-occupation-profiles-osop-invitation-only-pathway`;
const PROGRAM_URL = "https://www.migration.tas.gov.au/news/2024-25_program_open_to_rois";
const ROUNDS_URL = "https://www.migration.tas.gov.au/news/processing_times_and_allocation_usage";

// ── Lists ───────────────────────────────────────────────────────────────

// "Subclass 190 Tasmanian Skilled Employment (TSE) Priority Roles": the
// first column ("TSE Priority Occupations - eligible skills assessments"),
// 230 occupations, with the "Notes and caveats" column as caveats.
// Tasmania prints a few occupations with ANZSCO 2022 codes; these are the
// Home Affairs (ANZSCO 2013) codes for the same occupations.
const HOME_AFFAIRS_CODE: Record<string, string> = { "224713": "224711" };

const tsePriority: ListEntry[] = tasmaniaOccupations
  .filter((occupation) => occupation.tsePriority)
  .map((occupation) => ({
    code: occupation.code,
    title: occupation.title,
    ...(occupation.priorityCaveat ? { caveat: occupation.priorityCaveat } : {}),
    ...(HOME_AFFAIRS_CODE[occupation.code] ? { alsoMatches: [HOME_AFFAIRS_CODE[occupation.code]] } : {}),
  }));

// "Health, Allied Health, and Teaching Occupations": 102 occupations used for
// the Gold priority attribute; three are marked "only eligible under
// subclass 491".
const healthTeaching: ListEntry[] = tasmaniaOccupations
  .filter((occupation) => occupation.gold)
  .map((occupation) => ({
    code: occupation.code,
    title: occupation.title,
    ...(occupation.goldSubclass ? { visas: [occupation.goldSubclass] } : {}),
    ...(occupation.sector === "teaching" ? { caveat: "Teaching skills assessments count for the Gold attribute only if you are working in a school." } : {}),
  }));

// The 190 TSE Priority Occupation option needs 9 months of matching work, or
// 6 months "if your skills assessment is for a teaching occupation (and you
// are working in a school) or health or allied health occupation"; that text
// links to the health, allied health and teaching list. So the 6-month option
// is open to occupations on both lists (96).
const tsePriorityHealthTeaching: ListEntry[] = tasmaniaOccupations
  .filter((occupation) => occupation.tsePriority && occupation.gold)
  .map((occupation) => {
    const caveats = [occupation.priorityCaveat, occupation.sector === "teaching" ? "You must be working in a school." : undefined].filter(Boolean);
    return { code: occupation.code, title: occupation.title, ...(caveats.length ? { caveat: caveats.join(" ") } : {}) };
  });

// "Occupational Caveats - Long-term employment option" (page updated
// 9 October 2026): the caveats that apply to the 190 TSE long-term option,
// which is otherwise open to every occupation on the Home Affairs 190 list.
// 41 occupations or roles, as published (two titles carry an unexplained
// asterisk on the page, left out here). The table mixes in ANZSCO 2022 codes
// (for example 261315 to 261317), so it is marked as ANZSCO 2022.
const EMPLOYER_3_YEARS = "Employer must have operated in Tasmania for at least three years.";
const MOTOR_MECHANICS =
  "Employer must have operated in Tasmania for at least three years. From 1 December 2026 the employer's main business must be repairing vehicles and it must not routinely buy and sell used vehicles, unless it is a currently authorised dealer for a recognised vehicle manufacturer and your work mainly involves diagnosing and repairing that manufacturer's vehicles for customers; service technician roles won't be accepted as matching occupations from that date.";
const longTermCaveats: ListEntry[] = [
  { code: "131112", title: "Sales and Marketing Manager", caveat: EMPLOYER_3_YEARS },
  { code: "131113", title: "Advertising Manager", caveat: EMPLOYER_3_YEARS },
  { code: "131114", title: "Public Relations Manager", caveat: EMPLOYER_3_YEARS },
  { code: "221111", title: "Accountant (General)", caveat: EMPLOYER_3_YEARS },
  { code: "221112", title: "Management Accountant", caveat: EMPLOYER_3_YEARS },
  { code: "221113", title: "Taxation Accountant", caveat: EMPLOYER_3_YEARS },
  { code: "221211", title: "Company Secretary", caveat: EMPLOYER_3_YEARS },
  { code: "221212", title: "Corporate Treasurer", caveat: EMPLOYER_3_YEARS },
  { code: "221213", title: "External Auditor", caveat: EMPLOYER_3_YEARS },
  { code: "221214", title: "Internal Auditor", caveat: EMPLOYER_3_YEARS },
  { code: "225111", title: "Advertising Specialist", caveat: EMPLOYER_3_YEARS },
  { code: "225112", title: "Market Research Analyst", caveat: EMPLOYER_3_YEARS },
  { code: "225113", title: "Marketing Specialist", caveat: EMPLOYER_3_YEARS },
  { code: "225114", title: "Content Creator (Marketing)", caveat: EMPLOYER_3_YEARS },
  { code: "225115", title: "Digital Marketing Analyst", caveat: EMPLOYER_3_YEARS },
  { code: "261111", title: "ICT Business Analyst", caveat: EMPLOYER_3_YEARS },
  { code: "261112", title: "Systems Analyst", caveat: EMPLOYER_3_YEARS },
  { code: "261113", title: "User Experience Designer (ICT)", caveat: EMPLOYER_3_YEARS },
  { code: "261211", title: "Multimedia Specialist", caveat: EMPLOYER_3_YEARS },
  { code: "261212", title: "Web Developer", caveat: EMPLOYER_3_YEARS },
  { code: "261311", title: "Analyst Programmer", caveat: EMPLOYER_3_YEARS },
  { code: "261312", title: "Developer Programmer", caveat: EMPLOYER_3_YEARS },
  { code: "261313", title: "Software Engineer", caveat: EMPLOYER_3_YEARS },
  { code: "261314", title: "Software Tester", caveat: EMPLOYER_3_YEARS },
  { code: "261315", title: "Cyber Security Engineer", caveat: EMPLOYER_3_YEARS },
  { code: "261316", title: "DevOps Engineer", caveat: EMPLOYER_3_YEARS },
  { code: "261317", title: "Penetration Tester", caveat: EMPLOYER_3_YEARS },
  { code: "261399", title: "Software and Applications Programmers nec", caveat: EMPLOYER_3_YEARS },
  { code: "263111", title: "Computer Network and Systems Engineer", caveat: EMPLOYER_3_YEARS },
  { code: "263112", title: "Network Administrator", caveat: EMPLOYER_3_YEARS },
  { code: "263113", title: "Network Analyst", caveat: EMPLOYER_3_YEARS },
  { code: "263211", title: "ICT Quality Assurance Engineer", caveat: EMPLOYER_3_YEARS },
  { code: "263212", title: "ICT Support Engineer", caveat: EMPLOYER_3_YEARS },
  { code: "263213", title: "ICT Systems Test Engineer", caveat: EMPLOYER_3_YEARS },
  { code: "263299", title: "ICT Support and Test Engineers nec", caveat: EMPLOYER_3_YEARS },
  { code: "321211", title: "Motor Mechanic (General)", caveat: MOTOR_MECHANICS },
  { code: "321212", title: "Diesel Motor Mechanic", caveat: MOTOR_MECHANICS },
  { code: "321213", title: "Motorcycle Mechanic", caveat: MOTOR_MECHANICS },
  { code: "321214", title: "Small Engine Mechanic", caveat: MOTOR_MECHANICS },
  { code: "332211", title: "Painting Trades Worker", caveat: EMPLOYER_3_YEARS },
  { code: "411611", title: "Massage Therapist", caveat: "From 1 December 2026 the work must be in a health, allied health or aged or disability care setting." },
];

// Overseas Applicant (Health or Education Sector Job Offer): Tasmania lists
// the eligible occupations as five ANZSCO 3-digit groups (241 School
// Teachers, 251 Health Diagnostic and Promotion Professionals, 252 Health
// Therapy Professionals, 253 Medical Practitioners, 254 Midwifery and Nursing
// Professionals). They are written here as the 28 unit groups in those
// groups, so any occupation in them matches.
const overseasGroups: ListEntry[] = [
  { code: "2411", title: "Early Childhood (Pre-primary School) Teachers" },
  { code: "2412", title: "Primary School Teachers" },
  { code: "2413", title: "Middle School Teachers / Intermediate School Teachers" },
  { code: "2414", title: "Secondary School Teachers" },
  { code: "2415", title: "Special Education Teachers" },
  { code: "2511", title: "Nutrition Professionals" },
  { code: "2512", title: "Medical Imaging Professionals" },
  { code: "2513", title: "Occupational and Environmental Health Professionals" },
  { code: "2514", title: "Optometrists and Orthoptists" },
  { code: "2515", title: "Pharmacists" },
  { code: "2519", title: "Other Health Diagnostic and Promotion Professionals" },
  { code: "2521", title: "Chiropractors and Osteopaths" },
  { code: "2522", title: "Complementary Health Therapists" },
  { code: "2523", title: "Dental Practitioners" },
  { code: "2524", title: "Occupational Therapists" },
  { code: "2525", title: "Physiotherapists" },
  { code: "2526", title: "Podiatrists" },
  { code: "2527", title: "Audiologists and Speech Pathologists / Therapists" },
  { code: "2531", title: "General Practitioners and Resident Medical Officers" },
  { code: "2532", title: "Anaesthetists" },
  { code: "2533", title: "Specialist Physicians" },
  { code: "2534", title: "Psychiatrists" },
  { code: "2535", title: "Surgeons" },
  { code: "2539", title: "Other Medical Practitioners" },
  { code: "2541", title: "Midwives" },
  { code: "2542", title: "Nurse Educators and Researchers" },
  { code: "2543", title: "Nurse Managers" },
  { code: "2544", title: "Registered Nurses" },
];

// ── Rules shared by several pathways ────────────────────────────────────

const livingInTasmania: Requirement = { kind: "living", where: "state", minMonths: 0 };
const priorityIncome: Requirement = {
  kind: "manual",
  text: "Your pay is at least $57,000 a year or $28.85 an hour, excluding overtime, penalties, bonuses and casual loading",
};
const dependants: Requirement = {
  kind: "manual",
  text: "Your dependants don't live in another Australian state or territory: they can be overseas, and any who moved from another state must have settled in Tasmania at least three months before you apply for nomination",
};
const commitment: Requirement = {
  kind: "manual",
  text: "You intend to keep living in Tasmania: nominees undertake to live in Tasmania for at least two years after their nomination is approved",
};
const debts: Requirement = {
  kind: "manual",
  text: "Any debt that you or your family owe a Tasmanian Government agency (for example for education or health) has been paid, or a payment plan has been accepted",
};
const excludedWork: Requirement = {
  kind: "manual",
  text: "The work you rely on isn't excluded: unpaid internships, scholarships, stipends, volunteer work, taxi, ride-share and food or alcohol delivery driving, and massage therapy without a recognised skills assessment and a health fund provider number don't count",
};
const matchingJob: Requirement = {
  kind: "manual",
  text: "Your job matches your skills assessment: it is in the same ANZSCO 3-digit group (at least a 70% match of duties) and meets any caveat listed for your occupation",
};
const tseEmployer: Requirement = {
  kind: "manual",
  text: "Your employer is a well-established business actively operating in Tasmania for at least the last 12 months, your pay and conditions are no less favourable than an Australian worker's, and there is a genuine, ongoing need for your role, with a contract of at least 12 months and at least three months left when you apply. Subclass 482 holders who have worked for their Tasmanian sponsor for less than 12 months also need the sponsor's letter of support",
};
const tseWorkThatCounts: Requirement = {
  kind: "manual",
  text: "Excluded work doesn't count (unpaid internships, scholarships, stipends, volunteer work, taxi, ride-share and food or alcohol delivery driving, and massage therapy without a recognised skills assessment and a health fund provider number). If you are self-employed or a contractor, you need a relevant skills assessment and at least 12 months of business activity in Tasmania (contractors also need ongoing contracts of at least three months)",
};
const tseCommitment: Requirement = {
  kind: "manual",
  text: "You intend to keep living in Tasmania (nominees undertake to live here for at least two years after nomination is approved) and to stay employed in Tasmania in your current industry for at least two years after nomination",
};
const residenceShare: Requirement = {
  kind: "manual",
  text: "No more than half of your total time living in Australia has been spent in other states or territories",
};
const overseasNoInterstate: Requirement = {
  kind: "manual",
  text: "Neither you nor your dependants have lived in another Australian state or territory in the last 12 months",
};

// 190 TSG and 491 TSG differ only in course length and years lived in Tasmania.
const graduateCourse = (weeks: number, years: string): Requirement[] => [
  {
    kind: "manual",
    text: `Your course is CRICOS-registered with a minimum duration of ${weeks} weeks, completed (with a completion letter) full-time and on-site in Tasmania: at least 75% of a full-time load each semester, no online or distance learning, VET courses at least 15 contact hours a week, and credit transfers don't count`,
  },
  { kind: "manual", text: `You lived in Tasmania for at least ${years} from the start of your course and throughout your studies` },
];
// AQF 5 (Diploma) or higher, or at least Certificate III related to an OSCA
// Major Group 3 or 4 occupation. Course length: 92 weeks is about 21 months,
// 40 weeks about 9 months.
const graduateLevel = (months: number): Requirement[][] => [
  [{ kind: "study", where: "state", minLevel: "diploma", minMonthsInState: months }],
  [
    { kind: "study", where: "state", minLevel: "certificate-iii", minMonthsInState: months },
    { kind: "manual", text: "A Certificate III or IV counts only if it relates to an OSCA Major Group 3 or 4 occupation" },
  ],
];

// ── Notes ───────────────────────────────────────────────────────────────

const rankingNote =
  "Tasmania ranks Registrations of Interest (free to submit) by priority attributes in weekly rounds: Gold Pass holders are invited first, then Green, then Orange Plus, then other Orange candidates by points. Estimate yours with our Tasmania nomination calculator (/tools/tasmania-points-calculator).";
const goldEmploymentNote =
  "Gold priority attribute (TSE): a skills assessment on Tasmania's Health, Allied Health and Teaching Occupations list (teachers must work in a school), matching work paid at least $57,000 a year or $28.85 an hour, and the last six months in Tasmania with at least 30 hours every week in a single job.";
const goldOtherNote =
  "Gold priority attribute: a skills assessment on Tasmania's Health, Allied Health and Teaching Occupations list (teachers must work in a school), and the last three months working in Tasmania in a matching job paid at least $57,000 a year or $28.85 an hour.";
const thresholdNote =
  "Every attribute claimed is checked at assessment: if one isn't verified and your score falls below Tasmania's rolling three-month minimum (440 for subclass 190 and 81 for subclass 491 on 8 October 2026), the application is declined, and a Gold Pass holder who doesn't meet the Gold attribute is declined whatever the score.";
const fallback491Note =
  "If you meet this subclass 190 pathway's requirements but aren't eligible for the 190 visa because of your skills assessment or SkillSelect points, you can still apply and may be nominated for subclass 491 instead.";
const renominationNote = "Candidates nominated for subclass 491 won't be renominated for subclass 190 later; the 491 leads to permanent residence through the subclass 191 visa.";
const placesNote = "Tasmania has 2,050 nomination places for 2026-27: 1,250 for subclass 190 and 800 for subclass 491.";
const feeNote = "There's no charge to submit a Registration of Interest; the nomination application fee is A$387 (A$425.70 including GST).";
const goldPassNote = "Every Registration of Interest in this pathway receives a Gold Pass and can lodge a nomination application immediately.";

// The three 190 TSE options share everything except the occupation list and
// the months of matching work.
const tse190 = (months: number): Requirement[] => [
  livingInTasmania,
  { kind: "working", where: "state", minMonths: months, minHoursPerWeek: 20, occupation: "related" },
  priorityIncome,
  matchingJob,
  tseEmployer,
  tseWorkThatCounts,
  tseCommitment,
  dependants,
  debts,
];
const tse190Notes = [rankingNote, goldEmploymentNote, thresholdNote, fallback491Note, placesNote, feeNote];

export const tasAssessment: StateAssessmentData = {
  state: "tasmania",
  checkedOn: CHECKED_ON,
  settingsYear: "2026-27",
  lists: [
    {
      id: "tas-tse-priority",
      name: "Subclass 190 TSE Priority Occupations",
      visas: ["190"],
      granularity: "occupation",
      entries: tsePriority,
      programYear: "2026-27",
      anzsco: "2013",
      checkedOn: CHECKED_ON,
      source: tsePriorityRolesUrl,
      note: "The first column of Tasmania's \"Subclass 190 Tasmanian Skilled Employment (TSE) Priority Roles\" page (updated 19 August 2026): a skills assessment in one of these occupations is needed for the 190 TSE Priority Occupation option, and the job must be in the same ANZSCO 3-digit group. Tasmania lists Management Consultant as 224713; the Home Affairs (ANZSCO 2013) code is 224711.",
    },
    {
      id: "tas-tse-priority-health-teaching",
      name: "TSE Priority Occupations in health, allied health or teaching (6-month option)",
      visas: ["190"],
      granularity: "occupation",
      entries: tsePriorityHealthTeaching,
      programYear: "2026-27",
      anzsco: "2013",
      checkedOn: CHECKED_ON,
      source: tsePriorityRolesUrl,
      note: "Occupations on both the TSE Priority Roles list and the Health, Allied Health and Teaching Occupations list, which the 190 TSE minimum requirements link to for the 6-month option (teachers must be working in a school).",
    },
    {
      id: "tas-tse-long-term-caveats",
      name: "Occupational caveats for the 190 TSE long-term employment option",
      visas: ["190"],
      granularity: "occupation",
      entries: longTermCaveats,
      programYear: "2026-27",
      anzsco: "2022",
      checkedOn: CHECKED_ON,
      source: CAVEATS_URL,
      note: "Not a list of eligible occupations: the long-term option accepts any occupation on the Home Affairs subclass 190 list, and these caveats apply to employment claims in the occupations or roles shown (minimum requirements and priority attributes). Includes ANZSCO 2022 codes as Tasmania prints them.",
    },
    {
      id: "tas-health-teaching",
      name: "Health, Allied Health and Teaching Occupations",
      visas: ["190", "491"],
      granularity: "occupation",
      entries: healthTeaching,
      programYear: "2026-27",
      anzsco: "2013",
      checkedOn: CHECKED_ON,
      source: goldOccupationsUrl,
      note: "Used for the Gold priority attribute in the TSE, TSG and TER pathways (page updated 12 October 2026): you need a skills assessment for one of these occupations and work in Tasmania in the same ANZSCO 3-digit group. Environmental Health Officer, Dentist and Anaesthetist are eligible under subclass 491 only. Tasmania lists 311217 Respiratory Technician, which isn't on the Home Affairs (ANZSCO 2013) lists.",
    },
    {
      id: "tas-overseas-health-education",
      name: "Overseas Applicant pathway: health and education occupation groups",
      visas: ["190", "491"],
      granularity: "unit-group",
      entries: overseasGroups,
      programYear: "2026-27",
      anzsco: "2013",
      checkedOn: CHECKED_ON,
      source: JOB_OFFER_URL,
      note: "Tasmania publishes this pathway's occupations as ANZSCO 3-digit groups 241, 251, 252, 253 and 254; they are listed here as the unit groups within those groups. The skills assessment must be health, allied health or education related.",
    },
  ],
  streams: [
    {
      id: "tas-190-tse-priority",
      name: "Tasmanian Skilled Employment: TSE Priority Occupation option",
      visas: ["190"],
      audience: "onshore",
      status: "open",
      occupationLists: ["tas-tse-priority"],
      requires: tse190(9),
      notes: tse190Notes,
      source: TSE_URL,
    },
    {
      id: "tas-190-tse-priority-health-teaching",
      name: "Tasmanian Skilled Employment: TSE Priority Occupation option (health, allied health or teaching)",
      visas: ["190"],
      audience: "onshore",
      status: "open",
      occupationLists: ["tas-tse-priority-health-teaching"],
      requires: tse190(6),
      notes: tse190Notes,
      source: TSE_URL,
    },
    {
      // Any occupation on the Home Affairs 190 list; the caveat list only
      // adds Tasmania's per-occupation conditions where they apply.
      id: "tas-190-tse-long-term",
      name: "Tasmanian Skilled Employment: TSE long-term employment option",
      visas: ["190"],
      audience: "onshore",
      status: "open",
      occupationLists: ["tas-tse-long-term-caveats", "ha-190"],
      requires: tse190(15),
      notes: tse190Notes,
      source: TSE_URL,
    },
    {
      id: "tas-491-tse",
      name: "Tasmanian Skilled Employment",
      visas: ["491"],
      audience: "onshore",
      status: "open",
      occupationLists: ["ha-491"],
      requires: [
        livingInTasmania,
        {
          kind: "manual",
          text: "Your job doesn't need to match your skills assessment unless you are self-employed or a contractor, but if it doesn't, you have qualifications or experience matching the OSCA definition of the role",
        },
        {
          kind: "manual",
          text: "Your employer is a well-established business actively operating in Tasmania for at least the last 12 months, your pay and conditions are no less favourable than an Australian worker's and at least the market rate, and there is a genuine, ongoing need for your role, with a contract of at least 12 months (casual is allowed) and at least three months left when you apply",
        },
        {
          kind: "manual",
          text: "Excluded work doesn't count (unpaid internships, scholarships, stipends, volunteer work, taxi, ride-share and food or alcohol delivery driving, and massage therapy without a recognised skills assessment and a health fund provider number). If you are self-employed or a contractor, you need a relevant skills assessment (directly related to the role or industry you work in, if you are paid below $57,000 a year or $28.85 an hour) and at least 12 months of business activity in Tasmania",
        },
        tseCommitment,
        dependants,
        debts,
      ],
      // 9 months at the priority income level, or 12 months below it (but at
      // least the National Minimum Wage), both averaging 20 hours a week.
      anyOf: [
        [{ kind: "working", where: "state", minMonths: 9, minHoursPerWeek: 20, occupation: "any" }, priorityIncome],
        [
          { kind: "working", where: "state", minMonths: 12, minHoursPerWeek: 20, occupation: "any" },
          {
            kind: "manual",
            text: "Your pay is at least the National Minimum Wage (below $57,000 a year or $28.85 an hour), and your employer gives a statement confirming severe recruitment difficulty, including efforts to fill the role locally, and confirms in writing that you have genuine career advancement opportunities",
          },
        ],
      ],
      notes: [rankingNote, goldEmploymentNote, thresholdNote, renominationNote, placesNote, feeNote],
      source: TSE_URL,
    },
    {
      id: "tas-190-tsg",
      name: "Tasmanian Skilled Graduate",
      visas: ["190"],
      audience: "onshore",
      status: "open",
      occupationLists: ["ha-190"],
      requires: [livingInTasmania, ...graduateCourse(92, "two calendar years"), dependants, commitment, debts],
      anyOf: graduateLevel(21),
      notes: [
        rankingNote,
        goldOtherNote,
        "Employment isn't needed to meet the minimum requirements, but it counts towards priority attributes (averaging at least 9 hours a week during study and 20 hours after).",
        "PhD candidates who did not complete their undergraduate studies in Tasmania are eligible after living in Tasmania for two years and completing two years of their PhD (not checked here).",
        thresholdNote,
        fallback491Note,
        placesNote,
        feeNote,
      ],
      source: TSG_URL,
    },
    {
      id: "tas-491-tsg",
      name: "Tasmanian Skilled Graduate",
      visas: ["491"],
      audience: "onshore",
      status: "open",
      occupationLists: ["ha-491"],
      requires: [livingInTasmania, ...graduateCourse(40, "one calendar year"), dependants, commitment, debts],
      anyOf: graduateLevel(9),
      notes: [
        rankingNote,
        goldOtherNote,
        "Employment isn't needed to meet the minimum requirements, but it counts towards priority attributes (averaging at least 9 hours a week during study and 20 hours after).",
        thresholdNote,
        renominationNote,
        placesNote,
        feeNote,
      ],
      source: TSG_URL,
    },
    {
      id: "tas-190-ter",
      name: "Tasmanian Established Resident",
      visas: ["190"],
      audience: "onshore",
      status: "open",
      occupationLists: ["ha-190"],
      requires: [{ kind: "living", where: "state", minMonths: 36 }, residenceShare, dependants, commitment, debts],
      anyOf: [
        // Work time can be cumulative, so the tool checks that you are working
        // now and leaves the months in the last two or three years to you.
        [
          { kind: "working", where: "state", minMonths: 0, minHoursPerWeek: 20, occupation: "any" },
          {
            kind: "manual",
            text: "Either your job with a Tasmanian-based employer pays at least $57,000 a year or $28.85 an hour (excluding overtime, penalties, bonuses and casual loading) and you have at least 12 months of work in the last two years, or it pays at least the National Minimum Wage and you have at least 18 months of work in the last three years, at a minimum of 20 hours a week. Unpaid internships, scholarships, stipends, volunteer work, taxi, ride-share and food or alcohol delivery driving, and massage therapy without a recognised skills assessment and a health fund provider number don't count",
          },
        ],
        [
          { kind: "working", where: "state", minMonths: 12, minHoursPerWeek: 20, occupation: "any" },
          {
            kind: "manual",
            text: "Remote work: for the immediate past 12 months you have worked from Tasmania for an employer or clients located outside the state, earning at least $57,000 a year or $28.85 an hour",
          },
        ],
        [
          { kind: "business", where: "state" },
          {
            kind: "manual",
            text: "You have operated a business in Tasmania for at least the past two years, earning a personal income of at least the TSMIT (currently $79,423), and the business made a net profit after paying it",
          },
          {
            kind: "manual",
            text: "You own the business alone or with your spouse, and it isn't an excluded type: massage therapy without a health fund provider number and related skills assessment, taxi, ride-share or food delivery, service stations, convenience stores, franchises (including post offices and newsagents), passive investments or subcontracting",
          },
        ],
      ],
      notes: [rankingNote, goldOtherNote, thresholdNote, fallback491Note, placesNote, feeNote],
      source: TER_URL,
    },
    {
      id: "tas-491-ter",
      name: "Tasmanian Established Resident",
      visas: ["491"],
      audience: "onshore",
      status: "open",
      occupationLists: ["ha-491"],
      requires: [
        { kind: "living", where: "state", minMonths: 24 },
        residenceShare,
        // Work time can be cumulative (see the 190 pathway).
        { kind: "working", where: "state", minMonths: 0, minHoursPerWeek: 20, occupation: "any" },
        {
          kind: "manual",
          text: "Either your job pays at least $57,000 a year or $28.85 an hour (excluding overtime, penalties, bonuses and casual loading) and you have at least 6 months of work in the last year, or it pays at least the National Minimum Wage and you have at least 12 months of work in the last 18 months, at a minimum of 20 hours a week. Remote work isn't eligible for this pathway",
        },
        excludedWork,
        dependants,
        commitment,
        debts,
      ],
      notes: [rankingNote, goldOtherNote, thresholdNote, renominationNote, placesNote, feeNote],
      source: TER_URL,
    },
    {
      id: "tas-491-tbo",
      name: "Tasmanian Business Operator",
      visas: ["491"],
      audience: "onshore",
      status: "open",
      occupationLists: ["ha-491"],
      requires: [
        livingInTasmania,
        { kind: "business", where: "state" },
        {
          kind: "manual",
          text: "You established and have operated the business in Tasmania for at least 12 months, as sole owner or co-owner with your spouse",
        },
        {
          kind: "manual",
          text: "Your ATO business and personal income statements for the most recent financial year show the business still in profit after paying you at least 85% of the TSMIT (currently $67,509), from genuine business activity rather than savings, family loans or other outside support",
        },
        { kind: "manual", text: "You have completed key units of the Fair Work Ombudsman's online learning on fair employment practices" },
        {
          kind: "manual",
          text: "The business isn't an excluded type: massage therapy needs a related skills assessment and a verifiable health fund provider number, and subcontractors, independent contractors, taxi, ride-share or food delivery, service stations, convenience stores, franchises (including post offices and newsagents) and passive investments aren't eligible",
        },
        dependants,
        commitment,
        debts,
      ],
      notes: [
        "Tasmania ranks Registrations of Interest (free to submit) by priority attributes in weekly rounds; this pathway's attributes are Orange Plus and Orange, ranked by points. Estimate yours with our Tasmania nomination calculator (/tools/tasmania-points-calculator).",
        thresholdNote,
        renominationNote,
        placesNote,
        feeNote,
      ],
      source: TBO_URL,
    },
    {
      id: "tas-190-overseas-job-offer",
      name: "Overseas Applicant: Health or Education Sector Job Offer",
      visas: ["190"],
      audience: "offshore",
      status: "open",
      occupationLists: ["tas-overseas-health-education"],
      requires: [
        { kind: "jobOffer", where: "state" },
        {
          kind: "manual",
          text: "The job offer is formal, in the same ANZSCO 3-digit group as your skills assessment and for at least 30 hours a week; school teachers need an offer of a position in a Tasmanian school",
        },
        {
          kind: "manual",
          text: "Your employer is a well-established business that has operated in Tasmania for at least the past 12 months, your wages and conditions are no less than an Australian worker's and at least local market rates, and there is a genuine, ongoing need for your role that the business can sustain",
        },
        overseasNoInterstate,
        commitment,
      ],
      notes: [
        goldPassNote,
        "If you don't meet the subclass 190 points test, or your occupation is eligible only for subclass 491, Tasmania may nominate you for subclass 491 in this pathway.",
        placesNote,
        feeNote,
      ],
      source: JOB_OFFER_URL,
    },
    {
      // The page says applicants who miss the 190 points test, or whose
      // occupation is 491-only, may be nominated for subclass 491 instead.
      id: "tas-491-overseas-job-offer",
      name: "Overseas Applicant: Health or Education Sector Job Offer",
      visas: ["491"],
      audience: "offshore",
      status: "open",
      occupationLists: ["tas-overseas-health-education"],
      requires: [
        { kind: "jobOffer", where: "state" },
        {
          kind: "manual",
          text: "Tasmania nominates for subclass 491 in this pathway only if you don't meet the subclass 190 points test or your occupation is eligible only for subclass 491",
        },
        {
          kind: "manual",
          text: "The job offer is formal, in the same ANZSCO 3-digit group as your skills assessment and for at least 30 hours a week; school teachers need an offer of a position in a Tasmanian school",
        },
        {
          kind: "manual",
          text: "Your employer is a well-established business that has operated in Tasmania for at least the past 12 months, your wages and conditions are no less than an Australian worker's and at least local market rates, and there is a genuine, ongoing need for your role that the business can sustain",
        },
        overseasNoInterstate,
        commitment,
      ],
      notes: [goldPassNote, renominationNote, placesNote, feeNote],
      source: JOB_OFFER_URL,
    },
    {
      id: "tas-491-osop",
      name: "Overseas Skilled Occupation Profiles (invitation only)",
      visas: ["491"],
      audience: "offshore",
      status: "closed",
      occupationLists: ["ha-491"],
      requires: [
        { kind: "manual", text: "Migration Tasmania must first contact you and invite you to submit a Registration of Interest" },
        overseasNoInterstate,
        {
          kind: "manual",
          text: "If invited to apply, you show research into the Tasmanian job market, including at least two relevant Tasmanian job vacancies advertised in the six months before you apply, with a statement on how you meet each",
        },
        { kind: "manual", text: "You can support yourself and your dependants for at least six months while you look for work in Tasmania" },
      ],
      notes: [
        "Migration Tasmania won't issue invitations in this pathway in 2026-27 because the Australian Government is prioritising visa processing for applicants in Australia.",
        "The pathway page lists no occupation profiles at the moment.",
        goldPassNote,
      ],
      source: OSOP_URL,
    },
  ],
  summary:
    "Tasmania's 2026-27 program is open, with weekly invitation rounds. Registrations of Interest are free and ranked by priority attributes, so meeting a pathway's minimum requirements doesn't guarantee an invitation, and from overseas only health and education professionals with a Tasmanian job offer can be nominated this year.",
  sources: [
    { label: "Skilled workers and graduates living in Tasmania", url: ONSHORE_URL },
    { label: "Tasmanian Skilled Employment pathways (TSE)", url: TSE_URL },
    { label: "Subclass 190 TSE Priority Roles", url: tsePriorityRolesUrl },
    { label: "Health, Allied Health and Teaching Occupations", url: goldOccupationsUrl },
    { label: "Occupational caveats: TSE long-term employment option", url: CAVEATS_URL },
    { label: "Tasmanian Skilled Graduate pathways (TSG)", url: TSG_URL },
    { label: "Tasmanian Established Resident pathways (TER)", url: TER_URL },
    { label: "Tasmanian Business Operator pathway (TBO)", url: TBO_URL },
    { label: "Additional information: employment eligibility", url: EMPLOYMENT_URL },
    { label: "Additional information: business operation", url: BUSINESS_URL },
    { label: "Skilled workers living overseas", url: OVERSEAS_URL },
    { label: "Subclass 190 Overseas Applicant (Health or Education Sector Job Offer)", url: JOB_OFFER_URL },
    { label: "Subclass 491 Overseas Skilled Occupation Profiles (invitation only)", url: OSOP_URL },
    { label: "Program update: 2026-27 program opening", url: PROGRAM_URL },
    { label: "Processing times and invitations issued (updated weekly)", url: ROUNDS_URL },
  ],
};
