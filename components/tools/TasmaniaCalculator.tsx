"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import { Button, ArrowIcon } from "@/components/ui/Button";
import {
  scoreTasmania,
  tasmaniaAttributesAsAt,
  tasmaniaPathways,
  tierLabels,
  type PriorityAttribute,
  type TasmaniaPathway,
  type Tier,
} from "@/data/tasmania-priority";
import {
  NOT_LISTED,
  findTasmaniaOccupation,
  goldOccupationsUrl,
  overseasPathwayGroups,
  tasmaniaOccupations,
  tasmaniaOccupationsAsAt,
  tsePriorityRolesUrl,
  type TasmaniaOccupation,
} from "@/data/tasmania-occupations";
import { WizardChoices, WizardFooter, WizardProgress, WizardQuestion, WizardShell, type WizardChoice } from "./WizardUi";

// A guided version of Tasmania's nomination rules. The user picks a
// pathway and their skills-assessed occupation, then answers plain
// questions. From those we (1) check the pathway's minimum requirements,
// including the occupation-specific employment period, and (2) work out
// the priority attributes they satisfy and their pass tier.

type YesNo = "yes" | "no";
type JobMatch = "match" | "study" | "industry" | "neither";
type Pay = "nmw" | "pil" | "mid" | "tsmit" | "high";
type Months = "0" | "3" | "6" | "9" | "12" | "15" | "18" | "24";

interface Answers {
  pathway?: string;
  occupation?: string;
  working?: YesNo;
  schoolWorkplace?: YesNo;
  jobMatch?: JobMatch;
  months?: Months;
  avgHours?: YesNo;
  hours30?: YesNo;
  pay?: Pay;
  contract?: YesNo;
  employerYears?: "0" | "1" | "3";
  auExp?: YesNo;
  // Graduate pathway
  courseWeeks?: "92" | "40" | "0";
  courseLevel?: "aqf5" | "cert3" | "lower";
  onsite?: YesNo;
  studyResidence?: "2" | "1" | "0";
  phd?: "none" | "started" | "two-years";
  gradOffer?: YesNo;
  placement?: YesNo;
  studyHealth?: YesNo;
  interviews?: YesNo;
  // Established resident
  elsewhereHalf?: YesNo;
  terOption?: "job-pil" | "job-nmw" | "remote" | "business" | "none";
  // Business
  bizMonths?: YesNo;
  bizProfit?: YesNo;
  fwo?: YesNo;
  bizIncome?: "under" | "mid" | "tsmit" | "high";
  bizIncome2y?: YesNo;
  bizTurnover?: YesNo;
  employees?: "0" | "3" | "10";
  bizYears?: "0" | "1.5" | "3";
  bizSkills?: YesNo;
  bizQual?: YesNo;
  // Overseas
  jobOffer30?: YesNo;
  otherStateYear?: YesNo;
  employer12?: YesNo;
  // Residence and family
  livingInTas?: YesNo;
  dependantsInterstate?: YesNo;
  lived?: "0" | "1" | "2" | "3" | "4" | "5";
  onlyTas?: YesNo;
  english?: YesNo;
  spouse?: "none" | "employed" | "aqf6" | "both";
}

const yesNo: WizardChoice<YesNo>[] = [
  { value: "yes", label: "Yes" },
  { value: "no", label: "No" },
];

interface Ctx {
  answers: Answers;
  pathway: TasmaniaPathway;
  occupation: TasmaniaOccupation | undefined;
  requiredMonths: number;
}

interface Step {
  id: keyof Answers;
  title: string | ((ctx: Ctx) => string);
  help?: string | ((ctx: Ctx) => string);
  show: (ctx: Ctx) => boolean;
  options: (ctx: Ctx) => WizardChoice<string>[];
  columns?: 1 | 2 | 3;
}

const code = (ctx: Ctx) => ctx.pathway.code;
const working = (ctx: Ctx) => ctx.answers.working === "yes";
const isTeacher = (ctx: Ctx) => ctx.occupation?.sector === "teaching";
const goldOccupation = (ctx: Ctx) =>
  Boolean(ctx.occupation?.gold) &&
  (ctx.occupation?.goldSubclass !== "491" || ctx.pathway.subclass === "491") &&
  (!isTeacher(ctx) || ctx.answers.schoolWorkplace === "yes");
const employmentPathway = (ctx: Ctx) => code(ctx) !== "TBO" && code(ctx) !== "TOS";
const asksBusiness = (ctx: Ctx) => code(ctx) === "TBO" || (ctx.pathway.id === "190-ter" && ctx.answers.terOption === "business");

// The employment period the TSE pathways demand depends on the occupation
// (190) or the pay level (491).
function requiredMonthsFor(pathway: TasmaniaPathway, occupation: TasmaniaOccupation | undefined, answers: Answers): number {
  if (pathway.id === "190-tse") {
    const caveatNeedsThreeYears = Boolean(occupation?.priorityCaveat?.includes("three years")) && answers.employerYears !== "3";
    const painterCaveat = occupation?.code === "332211" && answers.employerYears !== "3";
    if (!occupation || !occupation.tsePriority || caveatNeedsThreeYears) return 15;
    const healthOrTeaching = occupation.gold && occupation.goldSubclass !== "491" && (occupation.sector !== "teaching" || answers.schoolWorkplace === "yes");
    if (healthOrTeaching) return painterCaveat ? 12 : 6;
    return painterCaveat ? 12 : 9;
  }
  if (pathway.id === "491-tse") return answers.pay === "nmw" ? 12 : 9;
  return 0;
}

const steps: Step[] = [
  {
    id: "schoolWorkplace",
    title: "Do you work in a school?",
    help: "Teaching occupations only count for the Gold attribute and the 6-month option when the job is in a school listed on the Australian Schools Directory.",
    show: (ctx) => isTeacher(ctx) && code(ctx) !== "TOS" && code(ctx) !== "TBO",
    options: () => yesNo,
  },
  // ── Overseas pathway ──────────────────────────────────────────────
  {
    id: "jobOffer30",
    title: "Do you have a formal Tasmanian job offer of at least 30 hours a week in a role matching your skills assessment?",
    help: "Same ANZSCO 3-digit group. School teachers must be offered a position in a Tasmanian school.",
    show: (ctx) => code(ctx) === "TOS",
    options: () => yesNo,
  },
  {
    id: "employer12",
    title: "Has the employer been operating in Tasmania for at least the last 12 months?",
    show: (ctx) => code(ctx) === "TOS",
    options: () => yesNo,
  },
  {
    id: "otherStateYear",
    title: "Have you or any dependant lived in another Australian state or territory in the last 12 months?",
    show: (ctx) => code(ctx) === "TOS",
    options: () => yesNo,
  },
  // ── Graduate minimums ─────────────────────────────────────────────
  {
    id: "courseWeeks",
    title: "How long was the Tasmanian course you completed?",
    help: "As registered on CRICOS. Subclass 190 needs at least 92 weeks; subclass 491 needs at least 40 weeks.",
    show: (ctx) => code(ctx) === "TSG",
    options: () => [
      { value: "92", label: "92 weeks or more" },
      { value: "40", label: "40 to 91 weeks" },
      { value: "0", label: "Less than 40 weeks" },
    ],
    columns: 3,
  },
  {
    id: "courseLevel",
    title: "What level was the course?",
    show: (ctx) => code(ctx) === "TSG",
    options: () => [
      { value: "aqf5", label: "Diploma (AQF 5) or higher", hint: "Diploma, advanced diploma, bachelor, master or PhD" },
      { value: "cert3", label: "Certificate III or IV in a trade or technician field", hint: "Related to an OSCA Major Group 3 or 4 occupation" },
      { value: "lower", label: "Something lower, or an English course" },
    ],
    columns: 1,
  },
  {
    id: "onsite",
    title: "Was the study full-time and on site in Tasmania?",
    help: "At least 75% of a full-time load each semester, no online or distance learning. VET courses need 15 contact hours a week.",
    show: (ctx) => code(ctx) === "TSG",
    options: () => yesNo,
  },
  {
    id: "studyResidence",
    title: "How long did you live in Tasmania from the start of the course, through to today?",
    help: "Subclass 190 needs two calendar years; subclass 491 needs one.",
    show: (ctx) => code(ctx) === "TSG",
    options: () => [
      { value: "2", label: "Two years or more" },
      { value: "1", label: "One to two years" },
      { value: "0", label: "Less than one year" },
    ],
    columns: 3,
  },
  // ── Established resident minimums ─────────────────────────────────
  {
    id: "elsewhereHalf",
    title: "Have you spent more than half of your total time in Australia outside Tasmania?",
    help: "The pathway requires no more than 50% of your Australian residence to have been in other states or territories.",
    show: (ctx) => code(ctx) === "TER",
    options: () => yesNo,
  },
  {
    id: "terOption",
    title: "Which of these best describes your work in Tasmania?",
    show: (ctx) => code(ctx) === "TER",
    options: (ctx) =>
      ctx.pathway.subclass === "190"
        ? [
            { value: "job-pil", label: "A Tasmanian job at $57,000+ a year ($28.85+ an hour), with 12 months of work in the last 2 years", hint: "At least 20 hours a week" },
            { value: "job-nmw", label: "A Tasmanian job below that but at least the minimum wage, with 18 months of work in the last 3 years", hint: "At least 20 hours a week" },
            { value: "remote", label: "12 months of remote work from Tasmania for an employer outside the state, at $57,000+", hint: "Subclass 190 only" },
            { value: "business", label: "A Tasmanian business I have run for 2+ years paying me at least $79,423, still in profit" },
            { value: "none", label: "None of these" },
          ]
        : [
            { value: "job-pil", label: "A job at $57,000+ a year ($28.85+ an hour), with 6 months of work in the last year", hint: "At least 20 hours a week" },
            { value: "job-nmw", label: "A job below that but at least the minimum wage, with 12 months of work in the last 18 months", hint: "At least 20 hours a week" },
            { value: "none", label: "None of these" },
          ],
    columns: 1,
  },
  // ── Business operator minimums ────────────────────────────────────
  {
    id: "bizMonths",
    title: "Have you established and operated a Tasmanian business for at least 12 months, owned by you (or with your spouse)?",
    show: (ctx) => code(ctx) === "TBO",
    options: () => yesNo,
  },
  {
    id: "bizProfit",
    title: "Did the business stay in profit after paying you at least $67,509 from genuine business activity?",
    help: "Shown on your ATO business and personal income statements for the most recent financial year, not topped up by savings or loans.",
    show: (ctx) => code(ctx) === "TBO",
    options: () => yesNo,
  },
  {
    id: "fwo",
    title: "Have you completed the Fair Work Ombudsman online learning units on fair employment?",
    show: (ctx) => code(ctx) === "TBO",
    options: () => yesNo,
  },
  // ── Employment ────────────────────────────────────────────────────
  {
    id: "working",
    title: "Are you currently employed in Tasmania?",
    help: (ctx) =>
      code(ctx) === "TSE"
        ? "Paid work with a well-established Tasmanian employer. Self-employed people and contractors need a relevant skills assessment and 12 months of business activity."
        : "Paid work with a well-established Tasmanian employer. Employment is not compulsory for this pathway, but it earns most of the priority attributes.",
    show: employmentPathway,
    options: () => yesNo,
  },
  {
    id: "jobMatch",
    title: "How does your current job relate to your skills assessment?",
    help: (ctx) =>
      ctx.occupation
        ? `A match means a role in ANZSCO group ${ctx.occupation.group} (${ctx.occupation.groupName}).`
        : "A match means a role in the same ANZSCO 3-digit group as your skills assessment.",
    show: (ctx) => employmentPathway(ctx) && working(ctx),
    options: (ctx) => [
      { value: "match", label: "It matches my skills assessment", hint: ctx.occupation ? `Any role in group ${ctx.occupation.group}` : "Same ANZSCO 3-digit group" },
      ...(code(ctx) === "TSG" ? [{ value: "study", label: "It is directly related to my Tasmanian study", hint: "But not my skills assessment" }] : []),
      { value: "industry", label: "Same industry, different role" },
      { value: "neither", label: "Unrelated to my skills assessment or study" },
    ],
  },
  {
    id: "months",
    title: "How long have you been in this job, continuously, up to today?",
    help: (ctx) =>
      ctx.requiredMonths
        ? `Your pathway needs at least ${ctx.requiredMonths} months. Paid leave counts; unpaid leave, gaps over two weeks and breaks between employers are added to the period.`
        : "Paid leave counts; unpaid leave and gaps over two weeks are added to the period.",
    show: (ctx) => employmentPathway(ctx) && working(ctx),
    options: () => [
      { value: "0", label: "Less than 3 months" },
      { value: "3", label: "3 to 6 months" },
      { value: "6", label: "6 to 9 months" },
      { value: "9", label: "9 to 12 months" },
      { value: "12", label: "12 to 15 months" },
      { value: "15", label: "15 to 18 months" },
      { value: "18", label: "18 to 24 months" },
      { value: "24", label: "More than 2 years" },
    ],
    columns: 3,
  },
  {
    id: "avgHours",
    title: "Have you averaged at least 20 hours a week over that period?",
    help: "Concurrent jobs can be combined for the hours, as long as each job meets the claim you make.",
    show: (ctx) => employmentPathway(ctx) && working(ctx),
    options: () => yesNo,
  },
  {
    id: "hours30",
    title: "Does one job on its own give you at least 30 hours every single week?",
    help: "The Gold attribute in this pathway needs a minimum, not an average, in a single job. Weeks under 30 hours must be made up.",
    show: (ctx) => code(ctx) === "TSE" && working(ctx) && goldOccupation(ctx) && ctx.answers.jobMatch === "match",
    options: () => yesNo,
  },
  {
    id: "pay",
    title: "What is your base pay in this job?",
    help: "Base rate only, excluding overtime, penalties, bonuses and casual loading. Salary bands must have applied for at least the last 12 weeks.",
    show: (ctx) => employmentPathway(ctx) && working(ctx),
    options: () => [
      { value: "nmw", label: "Below $57,000 a year ($28.85 an hour)", hint: "But at least the National Minimum Wage" },
      { value: "pil", label: "$57,000 to $71,479 a year", hint: "$28.85 to $36.16 an hour: the priority income level" },
      { value: "mid", label: "$71,480 to $79,422 a year", hint: "$36.17 to $40.18 an hour" },
      { value: "tsmit", label: "$79,423 to $106,599 a year", hint: "$40.19 to $53.94 an hour" },
      { value: "high", label: "$106,600 a year or more", hint: "$53.95 an hour or more" },
    ],
    columns: 1,
  },
  {
    id: "contract",
    title: "Do you have a contract of at least 12 months with at least 3 months still to run?",
    help: "Casual contracts are fine if they meet the National Employment Standards. The employer must have a genuine, ongoing need for the role.",
    show: (ctx) => code(ctx) === "TSE" && working(ctx),
    options: () => yesNo,
  },
  {
    id: "employerYears",
    title: "How long has your employer been operating in Tasmania under the same ownership?",
    help: (ctx) => ctx.occupation?.priorityCaveat ?? "All pathways need a well-established business operating for at least 12 months. Some occupations need three years.",
    show: (ctx) => code(ctx) === "TSE" && working(ctx),
    options: () => [
      { value: "0", label: "Less than 12 months" },
      { value: "1", label: "1 to 3 years" },
      { value: "3", label: "3 years or more" },
    ],
    columns: 3,
  },
  {
    id: "auExp",
    title: "Do you have at least two years of Australian work experience in the same industry as your skills assessment?",
    help: "Anywhere in Australia, across any jobs, as long as the industry matches.",
    show: (ctx) => (code(ctx) === "TSE" || code(ctx) === "TER") && working(ctx),
    options: () => yesNo,
  },
  // ── Graduate extras ───────────────────────────────────────────────
  {
    id: "phd",
    title: "Are you doing a PhD in Tasmania?",
    show: (ctx) => code(ctx) === "TSG",
    options: () => [
      { value: "two-years", label: "Yes, and I have completed two years of it", hint: "Or one year after finishing my undergraduate study in Tasmania" },
      { value: "started", label: "Yes, I have started it after other Tasmanian study" },
      { value: "none", label: "No" },
    ],
    columns: 1,
  },
  {
    id: "gradOffer",
    title: "Have you received a graduate program offer in the last 12 months?",
    help: "Full-time, directly related to your skills assessment, from a Tasmanian business with 20 or more staff that has operated here for over five years.",
    show: (ctx) => code(ctx) === "TSG",
    options: () => yesNo,
  },
  {
    id: "placement",
    title: "Did your Tasmanian course include a work placement of at least 400 hours in health, allied health or teaching?",
    show: (ctx) => code(ctx) === "TSG",
    options: () => yesNo,
  },
  {
    id: "studyHealth",
    title: "Is your Tasmanian study directly related to a health, allied health or teaching occupation?",
    help: "For the Established Resident pathway the qualification must be AQF 5 or above.",
    show: (ctx) => code(ctx) === "TSG" || code(ctx) === "TER",
    options: () => yesNo,
  },
  {
    id: "interviews",
    title: "Do you have evidence of interviews with at least two established Tasmanian businesses for relevant roles?",
    help: "Businesses operating in Tasmania for three or more years. Only counts if you are not already in a relevant job.",
    show: (ctx) => code(ctx) === "TSG" && (ctx.answers.working === "no" || ctx.answers.jobMatch === "neither"),
    options: () => yesNo,
  },
  // ── Business attributes ───────────────────────────────────────────
  {
    id: "bizIncome",
    title: "What personal income did your Tasmanian business pay you in the last year, while staying in profit?",
    show: asksBusiness,
    options: () => [
      { value: "high", label: "$106,600 or more, for over 12 months" },
      { value: "tsmit", label: "$79,423 to $106,599" },
      { value: "mid", label: "$71,480 to $79,422" },
      { value: "under", label: "Less than $71,480" },
    ],
    columns: 1,
  },
  {
    id: "bizIncome2y",
    title: "Has the business paid you more than $79,423 a year for each of the last two years, and is it still in profit?",
    show: asksBusiness,
    options: () => yesNo,
  },
  {
    id: "bizTurnover",
    title: "Was the business turnover above $500,000 in the last financial year?",
    show: asksBusiness,
    options: () => yesNo,
  },
  {
    id: "employees",
    title: "How many Australian citizens, permanent residents or provisional visa holders does the business employ?",
    show: asksBusiness,
    options: (ctx) => [
      { value: "10", label: "More than 10" },
      ...(code(ctx) === "TBO" ? [{ value: "3", label: "At least 3 full-time" }] : []),
      { value: "0", label: "Fewer than that" },
    ],
    columns: 3,
  },
  {
    id: "bizYears",
    title: "How long have you operated the business in Tasmania?",
    show: asksBusiness,
    options: () => [
      { value: "0", label: "12 to 18 months" },
      { value: "1.5", label: "18 months to 3 years" },
      { value: "3", label: "3 years or more" },
    ],
    columns: 3,
  },
  {
    id: "bizSkills",
    title: "Is your skills assessment directly related to the business?",
    show: asksBusiness,
    options: () => yesNo,
  },
  {
    id: "bizQual",
    title: "Do you hold a qualification of at least Certificate III directly relevant to the business?",
    help: "Not online courses or qualifications gained through recognition of prior learning.",
    show: (ctx) => code(ctx) === "TBO",
    options: () => yesNo,
  },
  // ── Residence and family ──────────────────────────────────────────
  {
    id: "livingInTas",
    title: "Do you currently live in Tasmania and intend to stay?",
    show: (ctx) => code(ctx) !== "TOS",
    options: () => yesNo,
  },
  {
    id: "dependantsInterstate",
    title: "Is your partner or any dependant currently living in another Australian state or territory?",
    help: "Dependants may be overseas. If they moved from interstate they must have been in Tasmania for at least three months before you apply.",
    show: (ctx) => code(ctx) !== "TOS",
    options: () => yesNo,
  },
  {
    id: "lived",
    title: "How long have you lived in Tasmania continuously?",
    show: (ctx) => code(ctx) !== "TOS",
    options: () => [
      { value: "0", label: "Less than 1 year" },
      { value: "1", label: "1 to 2 years" },
      { value: "2", label: "2 to 3 years" },
      { value: "3", label: "3 to 4 years" },
      { value: "4", label: "4 to 5 years" },
      { value: "5", label: "5 years or more" },
    ],
    columns: 3,
  },
  {
    id: "onlyTas",
    title: "Is Tasmania the only part of Australia you have ever lived, worked or studied in?",
    show: (ctx) => code(ctx) !== "TSE" && code(ctx) !== "TOS",
    options: () => yesNo,
  },
  {
    id: "english",
    title: "Do you have Proficient or Superior English?",
    help: "For example PTE 65 or IELTS 7 in each band. Passport holders from the UK, Ireland, USA, Canada or New Zealand count as exempt.",
    show: (ctx) => code(ctx) !== "TOS",
    options: () => [
      { value: "yes", label: "Yes, Proficient or Superior (or exempt)" },
      { value: "no", label: "No, Competent only" },
    ],
  },
  {
    id: "spouse",
    title: "Does your spouse or partner have Tasmanian work or study?",
    show: (ctx) => code(ctx) !== "TOS",
    options: () => [
      { value: "employed", label: "Employed in Tasmania for the last 6 months at $57,000+ a year ($28.85+ an hour)", hint: "Averaging more than 15 hours a week" },
      { value: "aqf6", label: "Completed an AQF 6 or higher qualification in Tasmania" },
      { value: "both", label: "Both of the above" },
      { value: "none", label: "Neither, or I have no partner" },
    ],
    columns: 1,
  },
];

// ── Minimum requirement checks ────────────────────────────────────────
interface Check {
  label: string;
  ok: boolean;
  detail?: string;
}

function minimumChecks(ctx: Ctx): Check[] {
  const { answers: a, pathway, occupation: occ, requiredMonths } = ctx;
  const months = Number(a.months ?? -1);
  const lived = Number(a.lived ?? -1);
  const common: Check[] = [
    { label: "Living in Tasmania and intending to stay", ok: a.livingInTas === "yes" },
    { label: "No dependants living in another state or territory", ok: a.dependantsInterstate === "no" },
  ];

  switch (pathway.id) {
    case "190-tse": {
      const option =
        requiredMonths === 15
          ? "long-term option: any skills assessment on the Home Affairs 190 list"
          : requiredMonths === 6
            ? "TSE Priority Occupation in health or teaching: 6-month option"
            : "TSE Priority Occupation: 9-month option";
      const needsThreeYears = Boolean(occ?.priorityCaveat?.includes("three years")) && requiredMonths !== 15;
      return [
        { label: "Currently employed in Tasmania", ok: a.working === "yes" },
        { label: "Job matches your skills assessment (same ANZSCO 3-digit group)", ok: a.jobMatch === "match" },
        { label: `At least ${requiredMonths} months in the role (${option})`, ok: months >= requiredMonths, detail: occ?.priorityCaveat },
        { label: "Average of at least 20 hours a week", ok: a.avgHours === "yes" },
        { label: "Paid at least $57,000 a year or $28.85 an hour", ok: a.pay !== undefined && a.pay !== "nmw" },
        { label: "12-month contract with at least 3 months remaining", ok: a.contract === "yes" },
        { label: needsThreeYears ? "Employer operating in Tasmania for at least 3 years (occupation caveat)" : "Employer operating in Tasmania for at least 12 months", ok: needsThreeYears ? a.employerYears === "3" : a.employerYears !== "0" },
        ...common,
      ];
    }
    case "491-tse":
      return [
        { label: "Currently employed in Tasmania", ok: a.working === "yes" },
        { label: `At least ${requiredMonths} months in the role (${a.pay === "nmw" ? "12 months when paid below the priority income level" : "9 months at the priority income level"})`, ok: months >= requiredMonths },
        { label: "Average of at least 20 hours a week", ok: a.avgHours === "yes" },
        { label: "12-month contract with at least 3 months remaining", ok: a.contract === "yes" },
        { label: "Employer operating in Tasmania for at least 12 months", ok: a.employerYears !== "0" },
        ...(a.pay === "nmw" ? [{ label: "Employer statement on recruitment difficulty and career advancement", ok: true, detail: "Needed in writing from your employer when the role pays below the priority income level." }] : []),
        ...(a.jobMatch !== "match" ? [{ label: "Relevant qualifications or experience aligned with the OSCA definition of the role", ok: true, detail: "Required when the job does not match your skills assessment." }] : []),
        ...common,
      ];
    case "190-tsg":
    case "491-tsg": {
      const is190 = pathway.subclass === "190";
      return [
        { label: is190 ? "CRICOS course of at least 92 weeks" : "CRICOS course of at least 40 weeks", ok: is190 ? a.courseWeeks === "92" : a.courseWeeks !== undefined && a.courseWeeks !== "0" },
        { label: "Diploma (AQF 5) or higher, or a related Certificate III or IV", ok: a.courseLevel !== undefined && a.courseLevel !== "lower" },
        { label: "Full-time, on-site study in Tasmania", ok: a.onsite === "yes" },
        { label: is190 ? "Lived in Tasmania for two years from the start of the course" : "Lived in Tasmania for one year from the start of the course", ok: is190 ? a.studyResidence === "2" : a.studyResidence !== undefined && a.studyResidence !== "0" },
        ...common,
      ];
    }
    case "190-ter":
      return [
        { label: "Lived in Tasmania for at least the last three years", ok: lived >= 3 },
        { label: "No more than half your Australian time outside Tasmania", ok: a.elsewhereHalf === "no" },
        { label: "Qualifying employment, remote work or business", ok: a.terOption !== undefined && a.terOption !== "none" },
        ...common,
      ];
    case "491-ter":
      return [
        { label: "Lived in Tasmania for at least the last two years", ok: lived >= 2 },
        { label: "No more than half your Australian time outside Tasmania", ok: a.elsewhereHalf === "no" },
        { label: "Qualifying employment (6 months at the priority income level, or 12 months below it)", ok: a.terOption !== undefined && a.terOption !== "none" },
        ...common,
      ];
    case "491-tbo":
      return [
        { label: "Business established and operated for at least 12 months, solely or with your spouse", ok: a.bizMonths === "yes" },
        { label: "In profit after paying you at least $67,509 from genuine business activity", ok: a.bizProfit === "yes" },
        { label: "Fair Work Ombudsman learning units completed", ok: a.fwo === "yes" },
        ...common,
      ];
    case "190-tos":
      return [
        { label: "Skills assessment in a health, allied health or teaching group (241, 251, 252, 253, 254)", ok: Boolean(occ && overseasPathwayGroups.includes(occ.group)), detail: occ ? `Your occupation is in group ${occ.group}.` : "Choose your occupation to check this." },
        { label: "Formal Tasmanian job offer of at least 30 hours a week in a matching role", ok: a.jobOffer30 === "yes" },
        { label: "Employer operating in Tasmania for at least 12 months", ok: a.employer12 === "yes" },
        { label: "You and your dependants have not lived in another state in the last 12 months", ok: a.otherStateYear === "no" },
      ];
    default:
      return common;
  }
}

// ── Attribute derivation ──────────────────────────────────────────────
function candidateIds(ctx: Ctx): Set<string> {
  const { answers, pathway } = ctx;
  const ids = new Set<string>();
  const months = Number(answers.months ?? -1);
  const payRank: Record<Pay, number> = { nmw: 0, pil: 1, mid: 2, tsmit: 3, high: 4 };
  const pay = answers.pay ? payRank[answers.pay] : -1;
  const atPil = pay >= 1;
  const match = answers.jobMatch;
  const isWorking = working(ctx) && months >= 0 && pay >= 0;

  if (isWorking) {
    const goldMonths = pathway.code === "TSE" ? months >= 6 && answers.hours30 === "yes" : months >= 3;
    if (goldOccupation(ctx) && match === "match" && atPil && goldMonths) ids.add("gold");

    if (match === "match" && atPil) {
      if (months >= 24) ids.add("match-24");
      if (months >= 18) ids.add("match-18");
      if (months >= 15) ids.add("match-15");
      if (months >= 12) ids.add("match-12");
      if (months >= 9) ids.add("match-9");
      if (months >= 3) {
        ids.add("match-3");
        ids.add("related-3");
      }
    }
    if (match === "study" && atPil) {
      if (months >= 18) ids.add("study-18");
      if (months >= 12) ids.add("study-12");
      if (months >= 9) ids.add("study-9");
      if (months >= 3) ids.add("related-3");
    }
    if (match !== "match" && atPil && months >= 18) ids.add("nonmatch-18");
    if (match === "industry" && atPil && months >= 12) ids.add("industry-12");
    if ((match === "neither" || match === "industry") && atPil) {
      if (months >= 18) ids.add("neither-18");
      if (months >= 9) ids.add("neither-9");
      if (months >= 3) ids.add("neither-3");
    }
    if (!atPil) {
      if (match === "match" || match === "study") {
        if (months >= 12) ids.add("low-12");
        if (months >= 6) ids.add("low-6");
      }
      if (match === "match" || match === "industry") ids.add("low-skills");
      if (match === "study") ids.add("low-qual");
      if (match !== "neither") {
        ids.add("industry-nmw");
        if (months >= 3) ids.add("industry-3");
      }
    }
    if (answers.pay === "high") ids.add("salary-high");
    if (answers.pay === "tsmit") ids.add("salary-tsmit");
    if (answers.pay === "mid") ids.add("salary-mid");
    if (answers.auExp === "yes") ids.add(atPil ? "au-exp-2" : "au-exp-2-low");
  }

  if (answers.phd === "two-years") ids.add("phd-2");
  if (answers.phd === "started") ids.add("phd-started");
  if (answers.gradOffer === "yes") ids.add("grad-program");
  if (answers.placement === "yes") ids.add("placement");
  if (answers.studyHealth === "yes") {
    ids.add("study-health");
    ids.add("tas-qual-health");
  }
  if (answers.interviews === "yes") ids.add("interviews");

  if (answers.bizIncome) {
    if (answers.bizIncome === "high") ids.add("biz-income-high");
    if (answers.bizIncome === "tsmit") ids.add("biz-income-tsmit");
    if (answers.bizIncome === "mid") ids.add("biz-income-mid");
    if (answers.bizIncome2y === "yes") ids.add("biz-income-2y");
    if (answers.bizTurnover === "yes") ids.add("biz-turnover");
    if (answers.employees === "10") {
      ids.add("biz-employs-10");
      ids.add("biz-employs-3");
    }
    if (answers.employees === "3") ids.add("biz-employs-3");
    if (answers.bizYears === "3") {
      ids.add("biz-3y");
      ids.add("biz-18m");
    }
    if (answers.bizYears === "1.5") ids.add("biz-18m");
    if (answers.bizSkills === "yes") ids.add("biz-skills");
    if (answers.bizQual === "yes") ids.add("biz-qual");
  }

  const lived = Number(answers.lived ?? -1);
  if (lived >= 5) ids.add("lived-5");
  if (lived === 4) ids.add("lived-4");
  if (lived === 3) ids.add("lived-3");
  if (lived >= 3) ids.add("lived-3plus");
  if (lived === 2) ids.add("lived-2");
  if (answers.onlyTas === "yes") ids.add("only-tasmania");
  if (answers.english === "yes") ids.add("english");
  if (answers.spouse === "employed" || answers.spouse === "both") ids.add("spouse-employed");
  if (answers.spouse === "aqf6" || answers.spouse === "both") ids.add("spouse-aqf6");
  return ids;
}

function resolveAttributes(ctx: Ctx): Set<string> {
  const candidates = candidateIds(ctx);
  const eligible = ctx.pathway.attributes.filter((attribute) => candidates.has(attribute.id));
  const bestPerGroup = new Map<string, PriorityAttribute>();
  const chosen = new Set<string>();
  for (const attribute of eligible) {
    if (!attribute.group) {
      chosen.add(attribute.id);
      continue;
    }
    const current = bestPerGroup.get(attribute.group);
    if (!current || attribute.points > current.points) bestPerGroup.set(attribute.group, attribute);
  }
  bestPerGroup.forEach((attribute) => chosen.add(attribute.id));
  return chosen;
}

const tierOrder: Tier[] = ["gold", "green", "orange-plus", "orange"];

// ── Occupation picker ─────────────────────────────────────────────────
type Tone = "good" | "note" | "warn";
const toneClass: Record<Tone, string> = {
  good: "bg-emerald-50 text-emerald-800 ring-emerald-200",
  note: "bg-sky-50 text-sky-800 ring-sky-200",
  warn: "bg-amber-50 text-amber-800 ring-amber-200",
};

function occupationStatus(occ: TasmaniaOccupation | undefined, pathway: TasmaniaPathway): { tone: Tone; text: string }[] {
  const items: { tone: Tone; text: string }[] = [];
  const scored = pathway.code !== "TOS" && pathway.code !== "TBO";
  if (!occ) {
    if (pathway.id === "190-tse") items.push({ tone: "warn", text: "Long-term option applies: 15 months of matching work, and the occupation must be on the Home Affairs subclass 190 list." });
    if (pathway.id === "190-tos") items.push({ tone: "warn", text: "This pathway needs a health, allied health or teaching skills assessment." });
    if (scored) items.push({ tone: "note", text: "Gold attribute not available. Green and Orange attributes still apply." });
    return items;
  }
  if (pathway.id === "190-tse") {
    if (occ.tsePriority) {
      const healthOrTeaching = occ.gold && occ.goldSubclass !== "491";
      items.push({ tone: "good", text: healthOrTeaching ? `TSE Priority Occupation in health or teaching: 6 months of matching work needed${occ.sector === "teaching" ? " (in a school)" : ""}.` : "TSE Priority Occupation: 9 months of matching work needed." });
    } else {
      items.push({ tone: "warn", text: "Not a TSE Priority Occupation: the long-term option applies (15 months of matching work, and the occupation must be on the Home Affairs 190 list)." });
    }
    if (occ.priorityCaveat) items.push({ tone: "note", text: `Caveat: ${occ.priorityCaveat}` });
  }
  if (pathway.id === "190-tos") {
    items.push(overseasPathwayGroups.includes(occ.group) ? { tone: "good", text: "Eligible occupation group for the overseas health and education pathway." } : { tone: "warn", text: "Not in groups 241, 251, 252, 253 or 254, so this pathway is not available." });
  }
  if (scored) {
    if (occ.gold && occ.goldSubclass === "491" && pathway.subclass === "190") items.push({ tone: "note", text: "The Gold attribute for this occupation is available under subclass 491 only." });
    else if (occ.gold) items.push({ tone: "good", text: `Gold Pass occupation${occ.sector === "teaching" ? " when working in a school" : ""}.` });
    else items.push({ tone: "note", text: "Not a health, allied health or teaching occupation, so the Gold attribute does not apply. Green and Orange attributes still do." });
  }
  return items;
}

function OccupationPicker({ value, onChange, pathway }: { value?: string; onChange: (value: string) => void; pathway: TasmaniaPathway }) {
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState(false);
  const [highlight, setHighlight] = useState(0);
  const listRef = useRef<HTMLUListElement>(null);

  const selected = value && value !== NOT_LISTED ? findTasmaniaOccupation(value) : undefined;
  const status = value ? occupationStatus(selected, pathway) : [];

  // No query: the full list grouped by ANZSCO 3-digit group. With a query:
  // one ranked list, names that start with the typed letters first, then
  // names with a word starting with them, then any other match.
  const groups = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) {
      const map = new Map<string, { name: string; items: TasmaniaOccupation[] }>();
      for (const occ of tasmaniaOccupations) {
        const entry = map.get(occ.group) ?? { name: occ.groupName, items: [] };
        entry.items.push(occ);
        map.set(occ.group, entry);
      }
      return [...map.entries()]
        .sort(([a], [b]) => a.localeCompare(b))
        .map(([group, entry]) => ({ group, name: entry.name, items: [...entry.items].sort((a, b) => a.title.localeCompare(b.title)) }));
    }
    const rank = (occ: TasmaniaOccupation) => {
      const title = occ.title.toLowerCase();
      if (title.startsWith(q) || occ.code.startsWith(q)) return 0;
      if (title.split(/[^a-z0-9]+/).some((word) => word.startsWith(q))) return 1;
      if (title.includes(q) || occ.code.includes(q) || occ.groupName.toLowerCase().includes(q)) return 2;
      return -1;
    };
    const ranked = tasmaniaOccupations
      .map((occ) => ({ occ, rank: rank(occ) }))
      .filter((item) => item.rank >= 0)
      .sort((a, b) => a.rank - b.rank || a.occ.title.localeCompare(b.occ.title))
      .map((item) => item.occ);
    return ranked.length ? [{ group: "", name: `Matches for “${query.trim()}”`, items: ranked }] : [];
  }, [query]);
  const flat = useMemo(() => groups.flatMap((group) => group.items), [groups]);

  const choose = (code: string) => {
    onChange(code);
    setQuery("");
    setOpen(false);
  };

  const onKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (!open && (event.key === "ArrowDown" || event.key === "Enter")) {
      setOpen(true);
      return;
    }
    if (event.key === "ArrowDown") {
      event.preventDefault();
      setHighlight((index) => Math.min(flat.length - 1, index + 1));
    } else if (event.key === "ArrowUp") {
      event.preventDefault();
      setHighlight((index) => Math.max(0, index - 1));
    } else if (event.key === "Enter") {
      event.preventDefault();
      if (flat[highlight]) choose(flat[highlight].code);
    } else if (event.key === "Escape") {
      setOpen(false);
    }
  };

  // Keep the highlighted row in view as the user arrows through the list.
  useEffect(() => {
    const row = listRef.current?.querySelector<HTMLElement>(`[data-index="${highlight}"]`);
    row?.scrollIntoView({ block: "nearest" });
  }, [highlight, open]);

  return (
    <div>
      <div className="relative">
        <label className="relative block">
          <span className="sr-only">Choose your occupation</span>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-4.35-4.35M17 10.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0Z" />
          </svg>
          <input
            type="text"
            role="combobox"
            aria-expanded={open}
            aria-controls="occupation-listbox"
            aria-autocomplete="list"
            autoComplete="off"
            value={query}
            placeholder={selected ? `${selected.title} (${selected.code})` : value === NOT_LISTED ? "My occupation is not on these lists" : "Choose from the list, or start typing to jump to your occupation"}
            onChange={(event) => { setQuery(event.target.value); setHighlight(0); setOpen(true); }}
            onFocus={() => setOpen(true)}
            onBlur={() => window.setTimeout(() => setOpen(false), 150)}
            onKeyDown={onKeyDown}
            className={`w-full rounded-2xl border border-gray-200 bg-white py-3.5 pl-12 pr-12 text-[15px] shadow-sm outline-none focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20 ${value ? "placeholder:text-brand-navy placeholder:font-semibold" : "text-brand-navy"}`}
          />
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className={`pointer-events-none absolute right-4 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400 transition-transform ${open ? "rotate-180" : ""}`} aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" d="m6 9 6 6 6-6" />
          </svg>
        </label>

        {open && (
          <ul
            id="occupation-listbox"
            ref={listRef}
            role="listbox"
            className="absolute z-20 mt-2 max-h-80 w-full overflow-y-auto rounded-2xl border border-gray-100 bg-white py-1 shadow-float"
          >
            {groups.map((group) => (
              <li key={group.group} role="presentation">
                <div className="sticky top-0 bg-brand-surface px-4 py-1.5 text-[11px] font-bold uppercase tracking-wider text-gray-500">
                  {group.group} {group.name}
                </div>
                <ul role="group" aria-label={group.name}>
                  {group.items.map((occ) => {
                    const index = flat.indexOf(occ);
                    const active = index === highlight;
                    return (
                      <li
                        key={occ.code}
                        role="option"
                        aria-selected={value === occ.code}
                        data-index={index}
                        onMouseDown={(event) => { event.preventDefault(); choose(occ.code); }}
                        onMouseEnter={() => setHighlight(index)}
                        className={`flex cursor-pointer items-center justify-between gap-3 px-4 py-2 text-sm ${active ? "bg-brand-mint" : ""} ${value === occ.code ? "font-bold" : ""}`}
                      >
                        <span className="text-brand-navy">{occ.title} <span className="font-normal text-gray-500">({occ.code})</span></span>
                        <span className="flex shrink-0 gap-1">
                          {occ.gold && <span className="rounded-full bg-amber-400 px-2 py-0.5 text-[10px] font-extrabold text-brand-navy">Gold</span>}
                          {occ.tsePriority && <span className="rounded-full bg-brand-mint px-2 py-0.5 text-[10px] font-extrabold text-brand-primary-dark ring-1 ring-brand-primary/20">Priority</span>}
                        </span>
                      </li>
                    );
                  })}
                </ul>
              </li>
            ))}
            {flat.length === 0 && <li className="px-4 py-3 text-sm text-gray-500">No occupation matches &ldquo;{query}&rdquo;.</li>}
            <li
              role="option"
              aria-selected={value === NOT_LISTED}
              onMouseDown={(event) => { event.preventDefault(); choose(NOT_LISTED); }}
              className="mt-1 cursor-pointer border-t border-gray-100 px-4 py-2.5 text-sm font-semibold text-brand-navy hover:bg-brand-mint"
            >
              My occupation is not on these lists
            </li>
          </ul>
        )}
      </div>
      <p className="mt-2 text-xs text-gray-500">
        Type the first letters of your occupation to jump to it, or scroll the list. Grouped by ANZSCO 3-digit group. &ldquo;Gold&rdquo; marks health, allied health and teaching occupations; &ldquo;Priority&rdquo; marks subclass 190 TSE Priority Occupations.
      </p>

      {value && (
        <div className="hero-rise mt-5 rounded-2xl border border-gray-100 bg-brand-surface p-4">
          <p className="font-heading font-bold text-brand-navy">
            {selected ? `${selected.title} (${selected.code})` : "Occupation not on Tasmania's lists"}
          </p>
          {selected && <p className="text-xs text-gray-500">ANZSCO group {selected.group}: {selected.groupName}</p>}
          {!selected && <p className="text-xs text-gray-500">Still eligible for the subclass 491 pathways and the 190 long-term employment option, but not for Gold or the priority occupation option.</p>}
          <ul className="mt-3 space-y-1.5">
            {status.map((item) => (
              <li key={item.text} className={`rounded-xl px-3 py-2 text-sm ring-1 ${toneClass[item.tone]}`}>{item.text}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

// ── Main component ────────────────────────────────────────────────────
export function TasmaniaCalculator() {
  const [answers, setAnswers] = useState<Answers>({});
  const [stepIndex, setStepIndex] = useState(0); // 0 pathway, 1 occupation, 2+ questions
  const [finished, setFinished] = useState(false);

  const pathway = tasmaniaPathways.find((item) => item.id === answers.pathway);
  const occupation = answers.occupation && answers.occupation !== NOT_LISTED ? findTasmaniaOccupation(answers.occupation) : undefined;
  const ctx = useMemo<Ctx | null>(
    () => (pathway ? { answers, pathway, occupation, requiredMonths: requiredMonthsFor(pathway, occupation, answers) } : null),
    [answers, pathway, occupation],
  );
  const visibleSteps = useMemo(() => (ctx ? steps.filter((step) => step.show(ctx)) : []), [ctx]);
  const totalSteps = 2 + visibleSteps.length + 1;
  const current = stepIndex >= 2 ? visibleSteps[stepIndex - 2] : null;

  const result = useMemo(() => {
    if (!ctx) return null;
    const chosen = resolveAttributes(ctx);
    return { ...scoreTasmania(ctx.pathway, chosen), chosen, checks: minimumChecks(ctx) };
  }, [ctx]);

  const set = <K extends keyof Answers>(key: K, value: Answers[K]) => setAnswers((prev) => ({ ...prev, [key]: value }));
  const reset = () => { setAnswers({}); setStepIndex(0); setFinished(false); };
  const next = () => (stepIndex >= visibleSteps.length + 1 ? setFinished(true) : setStepIndex((index) => index + 1));
  const back = () => (finished ? setFinished(false) : setStepIndex((index) => Math.max(0, index - 1)));
  const resolve = <T,>(value: T | ((ctx: Ctx) => T)): T => (typeof value === "function" ? (value as (ctx: Ctx) => T)(ctx as Ctx) : value);

  // ── Result ────────────────────────────────────────────────────────
  if (finished && pathway && ctx && result) {
    const tier = tierLabels[result.tier];
    const eligible = result.checks.every((check) => check.ok);
    const nothing = !pathway.autoGold && result.claimed.length === 0;
    const missed = pathway.attributes.filter((attribute) => !result.chosen.has(attribute.id) && attribute.points >= 25).slice(0, 3);
    return (
      <WizardShell>
        <div className="hero-rise text-center">
          <span className="text-xs font-bold uppercase tracking-[0.16em] text-gray-500">Your Tasmania nomination check</span>
          <div className="mt-4 flex justify-center">
            <span className={`hero-rise inline-flex rounded-full px-6 py-2 text-lg font-extrabold ${eligible ? "bg-emerald-500 text-white" : "bg-rose-100 text-rose-800"}`}>
              {eligible ? "Meets the minimum requirements" : "Not yet eligible to register"}
            </span>
          </div>
          <p className="mt-2 text-sm text-gray-600">
            Subclass {pathway.subclass} · {pathway.name}{occupation ? ` · ${occupation.title}` : ""}
          </p>
        </div>

        <ul className="mt-8 space-y-2">
          {result.checks.map((check, index) => (
            <li
              key={check.label}
              className={`hero-rise flex items-start gap-3 rounded-2xl border p-3 text-sm ${check.ok ? "border-emerald-100 bg-emerald-50/60" : "border-rose-200 bg-rose-50"}`}
              style={{ ["--rise-delay" as string]: `${100 + index * 50}ms` }}
            >
              <span className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-white ${check.ok ? "bg-emerald-500" : "bg-rose-500"}`} aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={3} className="h-3 w-3">
                  {check.ok ? <path strokeLinecap="round" strokeLinejoin="round" d="m5 12.5 4.5 4.5L19 7.5" /> : <path strokeLinecap="round" d="M6 6l12 12M18 6 6 18" />}
                </svg>
              </span>
              <span>
                <span className="block font-semibold text-brand-navy">{check.label}</span>
                {check.detail && <span className="block text-xs text-gray-600">{check.detail}</span>}
              </span>
            </li>
          ))}
        </ul>

        <div className="mt-10 rounded-[1.5rem] bg-brand-navy p-6 text-center text-white">
          <span className="text-xs font-bold uppercase tracking-[0.16em] text-brand-green-light">
            {eligible ? "Your ROI ranking" : "Your ranking once you meet the minimums"}
          </span>
          <div className="mt-3 flex justify-center">
            <span className={`inline-flex rounded-full px-5 py-1.5 text-base font-extrabold ${nothing ? "bg-white/10 text-white/60" : tier.className}`}>
              {nothing ? "No priority attributes yet" : tier.label}
            </span>
          </div>
          {!pathway.autoGold && (
            <p className="font-heading mt-3 text-5xl font-extrabold">
              {result.total}
              <span className="ml-2 text-base font-semibold text-white/60">points</span>
            </p>
          )}
          <p className="mx-auto mt-3 max-w-lg text-sm leading-relaxed text-white/75">
            {pathway.autoGold
              ? "Every ROI in this pathway receives a Gold Pass and can apply for nomination immediately."
              : nothing
                ? "You meet none of the priority attributes yet. Invitations go to Gold, Green and Orange Plus candidates first."
                : tier.description}
          </p>
          <ol className="mt-5 grid gap-2 sm:grid-cols-4">
            {tierOrder.map((key, index) => (
              <li key={key} className={`rounded-xl p-2 text-center ${key === result.tier && !nothing ? "bg-white/15 ring-1 ring-white/30" : "bg-white/5"}`}>
                <span className={`inline-flex rounded-full px-2 py-0.5 text-[11px] font-extrabold ${tierLabels[key].className}`}>{tierLabels[key].label}</span>
                <span className="mt-1 block text-[11px] text-white/60">Invited {["first", "second", "third", "last"][index]}</span>
              </li>
            ))}
          </ol>
        </div>

        {result.claimed.length > 0 && (
          <div className="mt-8">
            <h3 className="font-heading text-lg font-bold text-brand-navy">What counted for you</h3>
            <ul className="mt-3 space-y-2">
              {result.claimed.map((attribute) => (
                <li key={attribute.id} className="flex items-start gap-3 rounded-2xl border border-gray-100 bg-white p-3 text-sm">
                  <span className={`shrink-0 rounded-full px-2 py-0.5 text-[11px] font-extrabold ${tierLabels[attribute.tier].className}`}>{tierLabels[attribute.tier].label}</span>
                  <span className="flex-1 leading-relaxed text-gray-700">{attribute.text}</span>
                  <span className="shrink-0 font-bold text-brand-navy">+{attribute.points}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {!pathway.autoGold && result.tier !== "gold" && missed.length > 0 && (
          <div className="mt-8 rounded-2xl border border-amber-200 bg-amber-50 p-5">
            <h3 className="font-heading text-lg font-bold text-brand-navy">What would lift your ranking</h3>
            <ul className="mt-3 space-y-2">
              {missed.map((attribute) => (
                <li key={attribute.id} className="flex items-start gap-3 text-sm leading-relaxed text-gray-700">
                  <span className={`shrink-0 rounded-full px-2 py-0.5 text-[11px] font-extrabold ${tierLabels[attribute.tier].className}`}>+{attribute.points}</span>
                  {attribute.text}
                </li>
              ))}
            </ul>
          </div>
        )}

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Button href="/bookings" track="book_cta">
            Check my eligibility with an agent
            <ArrowIcon />
          </Button>
          <Button href="/state-nomination/tasmania" variant="outline">Tasmania nomination guide</Button>
          <button type="button" onClick={reset} className="text-sm font-semibold text-gray-500 hover:text-brand-navy hover:underline">Start over</button>
        </div>
        <p className="mt-6 text-center text-xs leading-relaxed text-gray-500">
          Rules, occupation lists and points from Migration Tasmania, checked on {tasmaniaAttributesAsAt} (occupation lists {tasmaniaOccupationsAsAt}). Every claim must be fully met and evidenced before you lodge your ROI, and only one current job can be used. Confirm on the{" "}
          <a href={pathway.officialUrl} target="_blank" rel="noopener noreferrer" className="underline">official {pathway.code} page</a>, the{" "}
          <a href={tsePriorityRolesUrl} target="_blank" rel="noopener noreferrer" className="underline">priority roles list</a> and the{" "}
          <a href={goldOccupationsUrl} target="_blank" rel="noopener noreferrer" className="underline">health and teaching list</a>. General information only, separate from the{" "}
          <Link href="/tools/points-calculator" className="underline">SkillSelect points test</Link>.
        </p>
      </WizardShell>
    );
  }

  // ── Step 0: pathway ───────────────────────────────────────────────
  if (stepIndex === 0) {
    return (
      <WizardShell>
        <WizardProgress step={0} total={totalSteps} label="Tasmania nomination" />
        <div className="mt-8">
          <WizardQuestion title="Which pathway describes you?" help="Tasmania has different pathways for workers, graduates, long-term residents, business owners and overseas applicants. Pick the one you would register under.">
            <WizardChoices
              name="pathway"
              value={answers.pathway}
              onChange={(value) => setAnswers({ pathway: value })}
              options={tasmaniaPathways.map((item) => ({ value: item.id, label: item.name, hint: item.summary, badge: `Subclass ${item.subclass}` }))}
            />
          </WizardQuestion>
        </div>
        <WizardFooter canBack={false} canNext={Boolean(pathway)} onBack={back} onNext={next} nextLabel="Next" />
      </WizardShell>
    );
  }

  // ── Step 1: occupation ────────────────────────────────────────────
  if (stepIndex === 1 && pathway) {
    return (
      <WizardShell>
        <WizardProgress step={1} total={totalSteps} label={`${pathway.subclass} ${pathway.name}`} />
        <div className="mt-8">
          <WizardQuestion
            title="What occupation is your skills assessment for?"
            help={
              pathway.id === "190-tse"
                ? "This decides whether you qualify for the 6, 9 or 15-month employment option, and whether the Gold attribute is available."
                : "This tells us whether the Gold attribute is available to you and which ANZSCO group counts as matching work."
            }
          >
            <OccupationPicker value={answers.occupation} onChange={(value) => set("occupation", value)} pathway={pathway} />
          </WizardQuestion>
        </div>
        <WizardFooter canBack onBack={back} canNext={Boolean(answers.occupation)} onNext={next} nextLabel={visibleSteps.length === 0 ? "See my result" : "Next"} onReset={reset} />
      </WizardShell>
    );
  }

  // ── Question steps ────────────────────────────────────────────────
  if (!current || !pathway || !ctx) return null;
  const value = answers[current.id] as string | undefined;
  const isLast = stepIndex === visibleSteps.length + 1;

  return (
    <WizardShell>
      <WizardProgress step={stepIndex} total={totalSteps} label={`${pathway.subclass} ${pathway.name}${occupation ? ` · ${occupation.title}` : ""}`} />
      <div className="mt-8">
        <WizardQuestion key={current.id} title={resolve(current.title)} help={current.help ? resolve(current.help) : undefined}>
          <WizardChoices
            name={current.id}
            value={value}
            columns={current.columns ?? 2}
            options={current.options(ctx)}
            onChange={(choice) => set(current.id, choice as never)}
          />
        </WizardQuestion>
      </div>
      <WizardFooter canBack onBack={back} canNext={Boolean(value)} onNext={next} nextLabel={isLast ? "See my result" : "Next"} onReset={reset} />
    </WizardShell>
  );
}
