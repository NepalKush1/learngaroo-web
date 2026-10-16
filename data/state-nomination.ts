// ─────────────────────────────────────────────────────────────────────────
// STATE AND TERRITORY NOMINATION — one page per jurisdiction at
// /state-nomination/[slug], covering subclass 190 and 491 nomination.
//
// Every figure below was checked against the official state or territory
// program pages and the Home Affairs allocations page on `checkedOn`.
// Status changes often, sometimes weekly, so `status`, `statusNote` and
// `latest` are a snapshot; each page links to the pages we used.
// ─────────────────────────────────────────────────────────────────────────

export type ProgramStatus = "open" | "limited" | "closed" | "pending";

export interface StateProgram {
  slug: string;
  name: string;
  short: string;
  // Capital or main city, used in copy.
  capital: string;
  officialName: string;
  officialUrl: string;
  checkedOn: string;
  status: ProgramStatus;
  statusNote: string;
  // Places published for 2026-27, or null when not announced, plus the
  // previous program year for context.
  allocation: {
    year: string;
    sc190: number | null;
    sc491: number | null;
    note?: string;
    prev?: { year: string; sc190: number | null; sc491: number | null; note?: string };
  };
  // Nomination fee, as published.
  fee?: string;
  // How candidates are selected, in one line.
  selection: string;
  // The state's own occupation list and where it is published.
  occupationList: { name: string; note: string };
  // Key points from the official program pages.
  keyPoints: string[];
  // Nomination streams or pathways and who each is for.
  // `status` overrides the program status for a stream that is closed or paused on its own.
  streams: { name: string; forWhom: string; visa: "190" | "491" | "190 & 491"; audience: "Onshore" | "Offshore" | "Onshore & offshore"; status?: ProgramStatus }[];
  // Typical requirements across streams.
  criteria: string[];
  howToApply: string[];
  // Most recent round or program data the state publishes, if any.
  latest?: { title: string; asAt: string; items: { label: string; value: string }[]; note?: string; url?: string };
  // Regional category of the main city under the designated regional area
  // postcodes (matters for 491 and regional points).
  regionalNote: string;
  faqs: { question: string; answer: string }[];
  // Official pages checked for this guide.
  sources: { label: string; url: string }[];
}

export const stateProgramsCheckedOn = "12 October 2026";
export const allocationsSourceUrl = "https://immi.homeaffairs.gov.au/what-we-do/state-and-territory-nomination-allocations";
// What the Home Affairs allocations page showed on `stateProgramsCheckedOn`.
export const allocationsNote =
  "Home Affairs set 2025-26 allocations at 20,350 places on 4 November 2025 and had not published a 2026-27 table when we checked. The 2026-27 figures shown come from each state's own announcement.";

export const statePrograms: StateProgram[] = [
  {
    slug: "new-south-wales",
    name: "New South Wales",
    short: "NSW",
    capital: "Sydney",
    officialName: "NSW Government skilled visas (Investment NSW)",
    officialUrl: "https://www.nsw.gov.au/visas-and-migration/skilled-visas",
    checkedOn: stateProgramsCheckedOn,
    status: "pending",
    statusNote:
      "NSW states that nomination applications are closed for the current program year because all available places were fully allocated, and that it is reviewing program settings and eligibility for the next program year. Applications already lodged will be finalised once Home Affairs allocates new places. No 2026-27 allocation or reopening date had been published when we checked.",
    allocation: {
      year: "2026-27",
      sc190: null,
      sc491: null,
      prev: { year: "2025-26", sc190: 2100, sc491: 1500, note: "Set by Home Affairs on 4 November 2025. NSW reports every place was allocated." },
    },
    fee: "Not published on the NSW skilled visa pages we checked. Invitations are valid for 14 days and nomination assessments usually take about six weeks.",
    selection: "Invitation only from SkillSelect: the highest-ranked EOIs in each ANZSCO unit group on age, English, education, points and skilled experience",
    occupationList: {
      name: "NSW Skills List (190) and NSW Regional Skills List (491 Pathways 2 and 3)",
      note: "Both lists are published at ANZSCO unit-group level on the NSW skilled visa pages. Only occupations that are eligible for the visa and fall within a listed unit group are considered, and NSW reviews the lists each program year.",
    },
    keyPoints: [
      "You cannot apply directly: NSW invites EOIs from SkillSelect in rounds through the year, with no published dates",
      "Pathways 1 and 3 for subclass 491 are closed to new applications, and Pathway 2 invitations stopped when places ran out",
      "NSW selects on the residency status recorded in your EOI (onshore or offshore), so keep it accurate",
      "The TSMIT/CSIT salary concession for Pathway 1 employers is currently closed",
    ],
    streams: [
      {
        name: "Subclass 190 Skilled Nominated",
        visa: "190",
        audience: "Onshore & offshore",
        forWhom: "Skilled workers in NSW or overseas with a skills assessment in a unit group on the NSW Skills List, invited directly from SkillSelect.",
      },
      {
        name: "Subclass 491 Pathway 1: employed with a regional NSW employer",
        visa: "491",
        audience: "Onshore",
        status: "closed",
        forWhom: "People who have worked continuously for at least 6 months with the same employer in a designated regional area of NSW, in their nominated or a closely related occupation, paid at least the TSMIT or CSIT rate.",
      },
      {
        name: "Subclass 491 Pathway 2: invited by Investment NSW",
        visa: "491",
        audience: "Onshore & offshore",
        forWhom: "Applicants with an occupation on the NSW Regional Skills List who are working in NSW in that occupation, or have lived in NSW or offshore for at least 3 continuous months, invited from SkillSelect.",
      },
      {
        name: "Subclass 491 Pathway 3: recent regional NSW graduate",
        visa: "491",
        audience: "Onshore & offshore",
        status: "closed",
        forWhom: "Graduates with a bachelor, master or PhD from a regional NSW institution completed in the last 2 years, related to their occupation and earning regional study points in SkillSelect.",
      },
    ],
    criteria: [
      "Meet all Home Affairs requirements for the visa, including a valid skills assessment in an occupation within a listed ANZSCO unit group",
      "Subclass 190: be working in NSW in your nominated occupation for at least 20 hours a week, or have lived continuously in NSW for at least 6 months, or continuously offshore for at least 6 months",
      "Subclass 491 Pathway 1: 6 months of continuous work with the same regional NSW employer in your nominated or a closely related occupation, paid at least the TSMIT or CSIT rate",
      "Subclass 491 Pathways 2 and 3: working in NSW in the occupation, or at least 3 continuous months living in NSW or offshore",
      "Be invited: NSW ranks EOIs within each unit group on age, English, education, points and years of skilled experience, at its discretion",
      "Lodge within 14 days of invitation. The window is not extended and missed invitations are not reissued",
    ],
    howToApply: [
      "Lodge or update an EOI in SkillSelect selecting NSW, with a current skills assessment and English result",
      "Wait for an invitation: NSW invites the highest-ranked EOIs in each ANZSCO unit group during the year, without announced round dates",
      "Lodge the nomination application with evidence within 14 days of the invitation",
      "If nominated, apply for the visa within 60 days of the Home Affairs invitation",
    ],
    regionalNote: "Sydney and surrounds are not regional. Newcastle, Lake Macquarie, Wollongong and the Illawarra are Category 2 (cities and major regional centres); the rest of NSW is Category 3.",
    faqs: [
      {
        question: "Can I be nominated by NSW from overseas?",
        answer: "Yes for subclass 190 and for 491 Pathway 2, if you have lived offshore (or in NSW) for the required period and are invited. Pathways 1 and 3 require regional NSW employment or study.",
      },
      {
        question: "Do I need a job offer?",
        answer: "Not for subclass 190 or 491 Pathways 2 and 3. Pathway 1 requires 6 months of current employment with the same regional NSW employer.",
      },
      {
        question: "When will NSW reopen?",
        answer: "NSW has not published a date. It says it is reviewing settings and eligibility for the next program year and will publish updates in due course, and that applications already lodged will be finalised once Home Affairs allocates new places.",
      },
    ],
    sources: [
      { label: "NSW Skilled Nominated visa (subclass 190)", url: "https://www.nsw.gov.au/visas-and-migration/skilled-visas/skilled-nominated-visa-subclass-190" },
      { label: "NSW Skilled Work Regional visa (subclass 491)", url: "https://www.nsw.gov.au/visas-and-migration/skilled-visas/skilled-work-regional-visa-subclass-491" },
      { label: "NSW skills lists", url: "https://www.nsw.gov.au/visas-and-migration/skilled-visas/nsw-skills-lists" },
      { label: "Common questions about skilled visas", url: "https://www.nsw.gov.au/visas-and-migration/skilled-visas/common-questions-about-skilled-visas" },
    ],
  },
  {
    slug: "victoria",
    name: "Victoria",
    short: "VIC",
    capital: "Melbourne",
    officialName: "Live in Melbourne (Victorian Government)",
    officialUrl: "https://liveinmelbourne.vic.gov.au/migrate/skilled-migration-visas",
    checkedOn: "13 October 2026",
    status: "pending",
    statusNote:
      "On 13 October 2026 Victoria published how it will select ROIs in 2026-27 (the Victorian Points Test weightings and its priority industries and occupations) and new fees, but not the opening date, allocation or nomination requirements. ROIs from earlier years don't carry over: you'll need to submit a new one when the program opens. The 2025-26 program closed to new ROIs on 28 April 2026 with all places filled; the criteria below are the 2025-26 ones until Victoria publishes the 2026-27 requirements.",
    allocation: {
      year: "2026-27",
      sc190: null,
      sc491: null,
      prev: { year: "2025-26", sc190: 2700, sc491: 700, note: "Set by Home Affairs on 4 November 2025." },
    },
    fee: "From 2026-27: A$60 to submit an ROI (A$66 with GST) and, if invited, A$180 for the nomination application (A$198 with GST); GST applies if you are in Australia when you pay",
    selection: "Every ROI is ranked by the Victorian Points Test (up to 950 points for age, English, experience, education, occupation skill level, partner's skill and earnings in Victoria). The highest totals are invited across all occupations and within each 2026-27 priority industry; there is no pass mark",
    occupationList: {
      name: "Home Affairs skilled occupation list for the visa, with 101 Victorian priority occupations for 2026-27",
      note: "Any occupation on the Home Affairs list for the visa can register. For 2026-27 Victoria prioritises 101 occupations in healthcare, social assistance, education (teachers and early childhood) and construction (professionals and trades); ROIs in those occupations are also ranked within their industry or subgroup.",
    },
    keyPoints: [
      "You must lodge a Registration of Interest with Victoria as well as an EOI in SkillSelect; an ROI is not an application and has no processing time",
      "Victoria ranks ROIs with its own Victorian Points Test: no pass mark, the highest totals in each round are invited, overall and within each priority industry",
      "From 2026-27 an ROI costs A$60 and a nomination application A$180 (plus GST if you are in Australia), and every applicant needs a new ROI when the program opens",
      "Onshore applicants must live in Victoria (border communities excepted); offshore applicants are eligible for both visas",
      "There is no minimum earnings requirement, but onshore salary from skilled employment in Victoria is a ranking factor",
      "If nominated you have 60 days to lodge the visa, and the two-year commitment to Victoria starts at visa grant (onshore) or arrival (offshore)",
    ],
    streams: [
      {
        name: "Subclass 190 Skilled Nominated",
        visa: "190",
        audience: "Onshore & offshore",
        forWhom: "Skilled workers living in Victoria or overseas with a skills assessment on the Home Affairs list. No employment or work experience is required for 190 nomination.",
      },
      {
        name: "Subclass 491 Skilled Work Regional",
        visa: "491",
        audience: "Onshore & offshore",
        forWhom: "Onshore temporary visa holders living and working in skilled employment (ANZSCO skill level 1 to 3) in regional Victoria, or offshore applicants with a skills assessment in an eligible occupation.",
      },
    ],
    criteria: [
      "Live in Victoria or overseas: Victoria does not select ROIs from onshore applicants living in other states, apart from case-by-case border-community exceptions",
      "Be under 45, have at least Competent English and a valid skills assessment in an occupation on the Home Affairs list for the visa",
      "At least 65 points in SkillSelect including the nomination points",
      "Subclass 190: no employment requirement; earnings claimed in the ROI must come from skilled employment with an employer physically located in Victoria",
      "Subclass 491 onshore: living and working in skilled employment in regional Victoria at the time of nomination",
      "Commit to living and working in Victoria (regional Victoria for 491) for two years, and complete surveys every six months during that period",
    ],
    howToApply: [
      "Lodge or update an EOI in SkillSelect selecting Victoria",
      "Create an account in the Live in Melbourne portal and submit a Registration of Interest using your EOI number",
      "If selected, lodge the nomination application and all documents through the portal (Victoria does not accept applications by email)",
      "If nominated, Home Affairs invites you to apply and you have 60 days to lodge the visa",
    ],
    regionalNote: "Melbourne is not regional. Geelong and the Mornington Peninsula are Category 2; the rest of Victoria, including Ballarat, Bendigo and the Latrobe Valley, is Category 3.",
    faqs: [
      {
        question: "Is a Victorian ROI the same as an EOI?",
        answer: "No. The EOI is lodged with Home Affairs in SkillSelect; the ROI is lodged with Victoria and tells the state you want to be considered. You need both, and Victoria reads your EOI when ranking the ROI.",
      },
      {
        question: "How does Victoria choose who to invite?",
        answer: "With the Victorian Points Test (VPT). Your total, out of 950, comes from your age (up to 300 points), English (up to 200), years of experience in your nominated occupation (up to 100), education (up to 100), occupation skill level (50 for skill level 1), partner's skill (50) and annual earnings from skilled employment in Victoria (up to 150). In each round the highest totals are invited across all eligible occupations, and within each 2026-27 priority industry. There is no pass mark.",
      },
      {
        question: "Is Victoria open for 2026-27?",
        answer: "Not yet. On 13 October 2026 Victoria published its 2026-27 ranking factors, priority occupations and fees, but not the opening date, allocation or nomination requirements. Earlier ROIs don't carry over: submit a new one when the program opens.",
      },
      {
        question: "What does a Victorian nomination cost?",
        answer: "From 2026-27, A$60 to submit a Registration of Interest (A$66 with GST), charged once per program year, and A$180 (A$198 with GST) for the subclass 190 or 491 nomination application if you are invited. GST applies if you are in Australia when you pay. The fees are generally non-refundable, including when an ROI isn't invited.",
      },
    ],
    // Victoria's subclass 190, 491, Registration of Interest and FAQ pages
    // (the source of the 2025-26 criteria above) returned "Page not found"
    // on 13 October 2026.
    sources: [
      { label: "Update: Victoria's skilled visa nomination program 2026-27 (13 October 2026)", url: "https://liveinmelbourne.vic.gov.au/news-events/news/2026/update-victorias-skilled-visa-nomination-program-2026-27" },
      { label: "Victorian Points Test", url: "https://liveinmelbourne.vic.gov.au/migrate/skilled-migration-visas/vpt" },
      { label: "Fees", url: "https://liveinmelbourne.vic.gov.au/migrate/skilled-migration-visas/fees" },
      { label: "Skilled migration visas", url: "https://liveinmelbourne.vic.gov.au/migrate/skilled-migration-visas" },
    ],
  },
  {
    slug: "queensland",
    name: "Queensland",
    short: "QLD",
    capital: "Brisbane",
    officialName: "Migration Queensland",
    officialUrl: "https://migration.qld.gov.au/",
    checkedOn: stateProgramsCheckedOn,
    status: "pending",
    statusNote:
      "Migration Queensland states that Registrations of Interest for the 2025-26 program are closed because all nomination places were filled, and that it is awaiting advice from the Australian Government on future program settings and allocations. Updated eligibility and the opening date will be published in due course, and 2026-27 nomination fees are listed as 'to be advised'.",
    allocation: {
      year: "2026-27",
      sc190: null,
      sc491: null,
      prev: { year: "2025-26", sc190: 1850, sc491: 750, note: "Set by Home Affairs on 4 November 2025. Queensland reports all places were filled." },
    },
    fee: "Listed as 'to be advised' for 2026-27 on the Migration Queensland fees page. Fees are not refunded under any circumstances.",
    selection: "Registrations of Interest selected on skills, experience, salary and employability, work location, age, English and partner skills",
    occupationList: {
      name: "Queensland Onshore Skilled Occupation List and Queensland Offshore Skilled Occupation List (QSOL)",
      note: "Separate lists for onshore and offshore candidates, published by Migration Queensland. Some occupations are eligible for subclass 491 only, and the lists flag which occupations qualify for the building and construction pathway.",
    },
    keyPoints: [
      "ROIs are only accepted while the program is open, and Migration Queensland reads both your EOI and your ROI when selecting",
      "Onshore streams require current Queensland work of at least 20 hours a week: 9 months for subclass 190 or 6 months in regional Queensland for subclass 491",
      "Casual work counts, several jobs can be combined, and working from home is accepted if the employer has a physical presence in Queensland",
      "If you hold or have applied for a subclass 491 (or 489) visa, Queensland will not nominate you for subclass 190",
    ],
    streams: [
      {
        name: "Skilled workers living in Queensland",
        visa: "190 & 491",
        audience: "Onshore",
        forWhom: "People working in Queensland in their nominated occupation (same first three ANZSCO digits) for the past 9 months (190) or in regional Queensland for the past 6 months (491), at least 20 hours a week.",
      },
      {
        name: "Queensland university graduates",
        visa: "190 & 491",
        audience: "Onshore",
        forWhom: "Graduates with a bachelor, master or PhD completed entirely in Queensland after 1 July 2021, working in their nominated or any Skill Level 1 occupation for the past 9 months (190) or 6 months in regional Queensland (491).",
      },
      {
        name: "Building and construction workers",
        visa: "190 & 491",
        audience: "Onshore",
        forWhom: "Tradespeople and construction professionals in flagged occupations working in Queensland for the past 3 months. Nominated for subclass 190 by default, or 491 if the 190 requirements are not met.",
      },
      {
        name: "Small business owners in regional Queensland",
        visa: "491",
        audience: "Onshore",
        forWhom: "People who bought a regional Queensland business (at least A$100,000, operated for 6 months with a local employee) or built a profitable start-up over 2 years with A$200,000 turnover, owning 100% of it.",
      },
      {
        name: "Skilled workers living outside Australia",
        visa: "190 & 491",
        audience: "Offshore",
        forWhom: "Offshore applicants with an occupation on the Queensland Offshore Skills List, at least one year of skilled employment in it, and still employed in that occupation when invited and nominated.",
      },
    ],
    criteria: [
      "Occupation on the Queensland Onshore or Offshore Skilled Occupation List for your stream, with a valid skills assessment",
      "At least 65 points in the Home Affairs points test and at least Competent English",
      "Onshore streams: work after completing your qualification, at least 20 hours a week, in an occupation sharing the first three ANZSCO digits with your nominated occupation",
      "Keep meeting the requirements when you register, when you are selected and when you are nominated",
      "Commit to living and working in Queensland for at least 2 years after a 190 grant, or in regional Queensland for at least 3 years after a 491 grant",
    ],
    howToApply: [
      "Lodge an EOI in SkillSelect selecting Queensland",
      "Submit a Registration of Interest with Migration Queensland when the program is open; ROIs that do not meet the criteria are not considered",
      "If invited, lodge the nomination application with the fee and evidence within the stated period",
    ],
    regionalNote: "Brisbane is not regional. The Gold Coast and Sunshine Coast are Category 2; most of the rest of Queensland, including Cairns, Townsville and Toowoomba, is Category 3.",
    faqs: [
      {
        question: "Can Queensland nominate me if I live interstate?",
        answer: "No. Queensland's onshore streams require you to be living and working in Queensland (regional Queensland for 491). The offshore stream is for people outside Australia.",
      },
      {
        question: "When will Queensland reopen?",
        answer: "Migration Queensland says it is awaiting advice from the Australian Government on 2026-27 settings and allocations, and will publish eligibility and the opening date in due course. Small business owners who started a business before 19 September 2025 can register when the program opens.",
      },
    ],
    sources: [
      { label: "Registration of Interest", url: "https://migration.qld.gov.au/nomination-process/registration-of-interest" },
      { label: "Skilled workers living in Queensland", url: "https://migration.qld.gov.au/visa-options/skilled-visas/skilled-workers-living-in-queensland" },
      { label: "Queensland university graduates", url: "https://migration.qld.gov.au/visa-options/skilled-visas/graduates-of-a-queensland-university" },
      { label: "Building and construction workers", url: "https://migration.qld.gov.au/visa-options/skilled-visas/building-and-construction-workers" },
      { label: "Small business owners in regional Queensland", url: "https://migration.qld.gov.au/visa-options/skilled-visas/small-business-owners-operating-in-regional-queensland" },
      { label: "Skilled workers living offshore", url: "https://migration.qld.gov.au/visa-options/skilled-visas/skilled-workers-living-offshore" },
      { label: "Application fees", url: "https://migration.qld.gov.au/nomination-process/application-process/application-fees" },
    ],
  },
  {
    slug: "south-australia",
    name: "South Australia",
    short: "SA",
    capital: "Adelaide",
    officialName: "Skilled & Business Migration South Australia",
    officialUrl: "https://migration.sa.gov.au/",
    checkedOn: stateProgramsCheckedOn,
    status: "pending",
    statusNote:
      "South Australia closed Registrations of Interest for 2025-26 at 9am on 2 June 2026 after its final scheduled round on 21 May 2026. Its occupation list page states that skilled ROI and nomination applications are currently unavailable and that ROIs will reopen to all eligible candidates when the 2026-27 program commences. No 2026-27 opening date or allocation had been published when we checked.",
    allocation: {
      year: "2026-27",
      sc190: null,
      sc491: null,
      prev: { year: "2025-26", sc190: 1350, sc491: 900, note: "Announced by South Australia on 24 November 2025 (2,250 places including interim allocations) and confirmed by Home Affairs." },
    },
    fee: "A$394 for a subclass 190 or 491 nomination application; no charge for a Registration of Interest. Fees are not refundable.",
    selection: "Registrations of Interest (onshore) or EOIs (offshore) ranked on English, skilled experience, qualifications, salary and employer, with priority sectors first",
    occupationList: {
      name: "South Australia's Skilled Occupation List",
      note: "Shows which streams and visa subclasses each occupation is eligible for, with occupation-specific conditions such as minimum qualifications for graduates, teacher-registration English and some employment rules. South Australia has taken the list offline until the 2026-27 program commences.",
    },
    keyPoints: [
      "All of South Australia, including Adelaide, is a designated regional area, so Adelaide qualifies for subclass 491 and regional study points",
      "Onshore streams require current full-time work of at least 30 hours a week in SA, from 6 months (graduates) to 12 months (skilled employment)",
      "Priority sectors (building and construction, defence, education, engineering, health and manufacturing) are routed to subclass 190; other sectors to 491",
      "Offshore candidates do not lodge an ROI: SA selects them directly from SkillSelect EOIs with SA as first preference",
      "Rounds ran monthly through 2025-26 (December 2025 to late May 2026)",
    ],
    streams: [
      {
        name: "South Australian Graduates",
        visa: "190 & 491",
        audience: "Onshore",
        forWhom: "International graduates of an SA provider (CRICOS course of at least 46 weeks, 75% completed in SA, one year living in SA during study) who have lived and worked in SA for the last 6 months, full-time at 30 hours a week in the same ANZSCO sub-major group.",
      },
      {
        name: "Skilled Employment in South Australia",
        visa: "190 & 491",
        audience: "Onshore",
        forWhom: "Temporary visa holders who have lived in SA for at least 12 months, worked for the last 12 months and are employed full-time (30 hours a week) in a role at the same skill level as their nominated occupation.",
      },
      {
        name: "Outer Regional Skilled Employment",
        visa: "190 & 491",
        audience: "Onshore",
        forWhom: "People who have lived and worked in outer regional South Australia for the past 9 months and are employed full-time (30 hours a week) in a related role.",
      },
      {
        name: "Offshore",
        visa: "190 & 491",
        audience: "Offshore",
        forWhom: "Applicants outside Australia with 3 years of skilled experience in the last 5 (trades: 1 year in the last 3), selected from their SkillSelect EOI. Invitees have 14 days to apply.",
      },
    ],
    criteria: [
      "Occupation eligible under your stream on South Australia's Skilled Occupation List, with a valid skills assessment",
      "At least 65 points including the nomination points, Competent English (UK, Irish, NZ, US and Canadian passport holders exempt) and under 45 when nomination is approved",
      "An active SkillSelect EOI with South Australia as first preferred state",
      "Onshore streams: currently living and working in SA full-time (30 hours a week) for the period required by the stream, in a role within the same ANZSCO sub-major group",
      "Commit to living and working in South Australia for at least 2 years after the visa is granted",
    ],
    howToApply: [
      "Lodge an EOI in SkillSelect selecting South Australia as your first preference",
      "Onshore: submit a Registration of Interest in the Skilled & Business Migration portal when the program is open. Offshore: no ROI, SA selects from your EOI",
      "If invited, lodge the nomination application with the A$394 fee and the documents on the checklist (offshore invitees have 14 days)",
      "Nomination assessments took two to eight weeks when we checked",
    ],
    latest: {
      title: "2025-26 program wrap-up",
      asAt: "2 June 2026",
      items: [
        { label: "Last scheduled round", value: "21 May 2026" },
        { label: "ROIs closed", value: "9am, 2 June 2026" },
        { label: "2025-26 places", value: "1,350 (190) and 900 (491)" },
      ],
      note: "Applications approved after the places ran out are nominated once the 2026-27 allocation arrives.",
      url: "https://migration.sa.gov.au/news/registrations-of-interest-closing-2-june-2026",
    },
    regionalNote: "Adelaide is Category 2 (cities and major regional centres); the rest of South Australia is Category 3. The whole state qualifies for subclass 491 and regional study points.",
    faqs: [
      {
        question: "Does Adelaide count as regional?",
        answer: "Yes. Adelaide is a Category 2 designated regional area, so subclass 491 and 494 holders can live there and graduates who studied in Adelaide can claim regional study points.",
      },
      {
        question: "Which visa will South Australia nominate me for?",
        answer: "If your occupation is in a priority sector (building and construction, defence, education, engineering, health, manufacturing) and is eligible for 190, you may be invited for 190. Other sectors, or occupations not eligible for 190, are invited for 491, although high-ranking candidates in other sectors can be considered.",
      },
    ],
    sources: [
      { label: "Registrations of Interest closing 2 June 2026", url: "https://migration.sa.gov.au/news/registrations-of-interest-closing-2-june-2026" },
      { label: "2025-26 allocations (24 November 2025)", url: "https://migration.sa.gov.au/news/more-than-2000-places-available-for-south-australias-2025-2026-allocations" },
      { label: "Skilled migrants: streams", url: "https://migration.sa.gov.au/before-applying/visa-options-and-pathways/skilled-migrants" },
      { label: "South Australian Graduates", url: "https://migration.sa.gov.au/before-applying/visa-options-and-pathways/skilled-migrants/south-australian-graduates" },
      { label: "Skilled Employment in South Australia", url: "https://migration.sa.gov.au/before-applying/visa-options-and-pathways/skilled-migrants/skilled-employment-in-south-australia" },
      { label: "Outer Regional Skilled Employment", url: "https://migration.sa.gov.au/before-applying/visa-options-and-pathways/skilled-migrants/outer-regional-skilled-employment" },
      { label: "Moving to South Australia from overseas", url: "https://migration.sa.gov.au/before-applying/visa-options-and-pathways/skilled-migrants/moving-to-south-australia-from-overseas" },
      { label: "Skilled Occupation List", url: "https://migration.sa.gov.au/before-applying/work-in-sa/occupation-lists/occupations-list" },
      { label: "Processing times", url: "https://migration.sa.gov.au/processing-times" },
    ],
  },
  {
    slug: "western-australia",
    name: "Western Australia",
    short: "WA",
    capital: "Perth",
    officialName: "WA Migration Services (State Nominated Migration Program)",
    officialUrl: "https://migration.wa.gov.au/our-services-support/state-nominated-migration-program",
    checkedOn: stateProgramsCheckedOn,
    status: "pending",
    statusNote:
      "WA's program page still shows the 2025-26 settings. Monthly invitation rounds ran through the year, the last we found being 20 May 2026 for priority trade occupations, and WA had issued 8,162 invitations for 2025-26 by then. No 2026-27 criteria, opening date or allocation had been published when we checked.",
    allocation: {
      year: "2026-27",
      sc190: null,
      sc491: null,
      prev: { year: "2025-26", sc190: 2000, sc491: 1400, note: "Set by Home Affairs on 4 November 2025, after interim allocations in September and November 2025." },
    },
    fee: "A$200, non-refundable, paid in the WA Migration Portal. Lodge within 28 days of invitation and apply for the visa within 60 days of nomination.",
    selection: "Invitation rounds ranking EOIs by points within each occupation and stream, WA residents first; the last-invited score is published after each round",
    occupationList: {
      name: "WA Skilled Migration Occupation Lists (WASMOL Schedule 1 and Schedule 2) and the Graduate Occupation List",
      note: "Narrower than the federal lists. Being on the Home Affairs list is not enough if the occupation is not on WASMOL or the Graduate list. The 2025-26 lists are downloadable from the program page.",
    },
    keyPoints: [
      "Applications are lodged through the WA Migration Portal and ranked by EOI score within occupation; WA issues one invitation per EOI and nominates once per program year",
      "Subclass 190 General stream applicants need a full-time WA employment contract (35 hours a week, which may be two part-time roles) of at least 6 months, unless invited in a building and construction occupation",
      "Living in WA is not required, but WA residents with 3 continuous months of residence are prioritised",
      "WA publishes the score and date of the last invitee for each stream after every round, and processes decision-ready applications in about 28 working days",
    ],
    streams: [
      {
        name: "General stream, WASMOL Schedule 1",
        visa: "190 & 491",
        audience: "Onshore & offshore",
        forWhom: "Skilled workers with an occupation on Schedule 1 and at least one year of paid work (20 hours a week) in the occupation in the last 10 years. Subclass 190 also needs a 6-month full-time WA contract.",
      },
      {
        name: "General stream, WASMOL Schedule 2",
        visa: "190 & 491",
        audience: "Onshore & offshore",
        forWhom: "Skilled workers with an occupation on Schedule 2. Subclass 190 needs a WA employment contract (not casual); subclass 491 and building and construction occupations do not.",
      },
      {
        name: "Graduate stream (higher education and VET)",
        visa: "190 & 491",
        audience: "Onshore & offshore",
        forWhom: "Graduates of a WA institution (bachelor or higher, or Certificate III or above) with at least 87 weeks of full-time, face-to-face study in WA and an occupation on the Graduate Occupation List. Up to 75% of places go to higher education graduates and 25% to VET.",
      },
    ],
    criteria: [
      "Occupation on WASMOL Schedule 1 or 2, or the Graduate Occupation List, with a skills assessment that matches your EOI and the invited occupation (provisional 485 assessments are not accepted)",
      "At least 65 points and under 45 in your EOI",
      "English: the minimum score in all four components of one approved test sitting, unless you hold a UK, Canadian, NZ, US or Irish passport",
      "Schedule 1: at least one year of paid work (20 hours a week) in the nominated or a closely related occupation in the last 10 years; Australian and overseas experience cannot be combined",
      "Subclass 190 General stream: a full-time WA contract of at least 6 months from your application date, starting within 3 months (not needed for 491 or building and construction occupations)",
      "Commit to living and working in WA for 2 years after the visa is granted, and complete settlement surveys for 24 months",
    ],
    howToApply: [
      "Lodge an EOI in SkillSelect selecting Western Australia",
      "Wait for an invitation: WA issues invitations in rounds expected each month, ranked by EOI score within occupation and stream",
      "If invited, create a profile in the WA Migration Portal and lodge the nomination with the A$200 fee within 28 days",
      "If nominated, apply for the visa within 60 days",
    ],
    latest: {
      title: "2025-26 invitation data",
      asAt: "20 May 2026",
      items: [
        { label: "Invitations issued in 2025-26", value: "8,162 (4,335 subclass 190, 3,827 subclass 491)" },
        { label: "Last round found", value: "20 May 2026, priority trade occupations" },
        { label: "Last invited scores", value: "WASMOL 2 at 65 points (16 May 2026); Graduate higher education 75 (18 March 2026); Graduate VET 65 (7 May 2026)" },
      ],
      note: "WA notes its invitation tables do not take occupation or visa subclass caps into account, so invitations exceed nomination places.",
      url: "https://migration.wa.gov.au/our-services-support/state-nominated-migration-program",
    },
    regionalNote: "Perth is Category 2 (cities and major regional centres); all of WA outside Perth is Category 3. The whole state qualifies for subclass 491 and regional study points.",
    faqs: [
      {
        question: "Is being on the federal skilled list enough for WA?",
        answer: "No. WA nominates only occupations on its own WASMOL schedules or Graduate Occupation List, which are narrower than the federal lists.",
      },
      {
        question: "Do I need a job in WA?",
        answer: "For subclass 190 in the General stream, yes: a full-time WA contract of at least 6 months. Subclass 491, the Graduate stream and building and construction occupations do not need a contract, though Schedule 1 requires a year of work experience.",
      },
    ],
    sources: [
      { label: "State Nominated Migration Program (criteria, lists and rounds)", url: "https://migration.wa.gov.au/our-services-support/state-nominated-migration-program" },
      { label: "WA Migration Services news", url: "https://migration.wa.gov.au/news" },
    ],
  },
  {
    slug: "tasmania",
    name: "Tasmania",
    short: "TAS",
    capital: "Hobart",
    officialName: "Migration Tasmania",
    officialUrl: "https://www.migration.tas.gov.au/",
    checkedOn: stateProgramsCheckedOn,
    status: "open",
    statusNote:
      "Tasmania's 2026-27 program opened to new Registrations of Interest on 17 August 2026 with 2,050 places (1,250 subclass 190 and 800 subclass 491), and weekly invitation rounds have run since Thursday 20 August 2026. In the round of 8 October 2026 Tasmania invited 37 subclass 190 and 24 subclass 491 ROIs, with 954 and 691 places still available. No invitations will be issued in the 491 Overseas Skilled Occupation Profiles pathway this year.",
    allocation: {
      year: "2026-27",
      sc190: 1250,
      sc491: 800,
      note: "Announced by Migration Tasmania on 5 August 2026; not yet on the Home Affairs page.",
      prev: { year: "2025-26", sc190: 1200, sc491: 650, note: "Set by Home Affairs on 4 November 2025." },
    },
    fee: "A$387 (A$425.70 including GST) for the nomination application from 2026-27; no charge to submit a Registration of Interest.",
    selection: "Priority attributes (Gold, Green, Orange Plus and Orange passes), then ROI points within the tier, in weekly rounds",
    occupationList: {
      name: "190 TSE Priority Occupations list and the Health, Allied Health and Teaching (Gold) list",
      note: "The Skilled Graduate and Established Resident pathways accept any skills assessment. The Skilled Employment pathway uses a priority occupation list with caveats, and health, allied health and school teaching roles with matching work can earn a Gold Pass.",
    },
    keyPoints: [
      "Registrations of Interest are free and ranked by priority attributes, not the SkillSelect points test; Gold Pass holders are invited first",
      "From 2026-27 the TSE Gold attribute needs at least 30 hours a week in one job, and only one current job can be used to claim attributes",
      "Tasmania publishes a rolling three-month minimum score (440 for 190 and 81 for 491 at 8 October 2026); if a claimed attribute fails at assessment and your score is below it, nomination is refused",
      "The Priority Income Level stays at A$57,000 a year or A$28.85 an hour; income bands now follow Australian median and average earnings and the TSMIT",
      "The application gateway moved to apply.migration.tas.gov.au, and Tasmania suggests candidates with ROIs older than six months withdraw and resubmit under the new scoring",
    ],
    streams: [
      {
        name: "Tasmanian Skilled Employment",
        visa: "190 & 491",
        audience: "Onshore",
        forWhom: "People working in Tasmania in a skilled role in their nominated or a related occupation. The minimum employment period depends on whether the occupation is on the priority list (6, 9 or 15 months for 190; 9 or 12 months for 491).",
      },
      {
        name: "Tasmanian Skilled Graduate",
        visa: "190 & 491",
        audience: "Onshore",
        forWhom: "Graduates of Tasmanian institutions who lived in Tasmania during their study and are now living and working there.",
      },
      {
        name: "Tasmanian Established Resident",
        visa: "190 & 491",
        audience: "Onshore",
        forWhom: "People who have lived in Tasmania for an extended period in skilled or semi-skilled work and are committed to staying.",
      },
      {
        name: "Tasmanian Business Operator",
        visa: "491",
        audience: "Onshore",
        forWhom: "People who have operated a Tasmanian business for the required period with the required profit, under Fair Work rules.",
      },
      {
        name: "Overseas Applicant: Health or Education Sector Job Offer",
        visa: "190",
        audience: "Offshore",
        forWhom: "Health and teaching professionals overseas who have gained employment with a Tasmanian health provider or school. Treated as Gold Pass.",
      },
      {
        name: "Overseas Skilled Occupation Profiles (invitation only)",
        visa: "491",
        audience: "Offshore",
        status: "closed",
        forWhom: "Overseas candidates without a Tasmanian job in key areas of need. Migration Tasmania will not issue any invitations in this pathway in 2026-27 because Home Affairs is prioritising onshore applicants.",
      },
    ],
    criteria: [
      "Occupation on the 190 TSE Priority Occupations list where the pathway requires it; graduate and established resident pathways accept any valid skills assessment",
      "A valid skills assessment and at least 65 points in SkillSelect including the nomination points",
      "Living in Tasmania for the period your pathway requires, and intending to stay",
      "Employment that meets the Priority Income Level (A$57,000 or A$28.85 an hour) and the hours rule for your pathway, with at least 30 hours a week in one job for TSE Gold",
      "Every attribute claimed in the ROI must still be met when you lodge the nomination application",
    ],
    howToApply: [
      "Lodge an EOI in SkillSelect selecting Tasmania",
      "Submit a free Registration of Interest at apply.migration.tas.gov.au",
      "ROIs are ranked by priority attributes (Gold, Green, Orange Plus and Orange passes, then points) and invited every Thursday. Use our Tasmania nomination calculator to see where you stand",
      "If invited, lodge the nomination application with the A$425.70 fee (including GST) within the stated period",
    ],
    latest: {
      title: "Invitation round of 8 October 2026",
      asAt: "8 October 2026",
      items: [
        { label: "Invitations issued", value: "37 subclass 190 (13 Gold, 24 Green); 24 subclass 491 (2 Gold, 22 further)" },
        { label: "Lowest scores invited", value: "323 (190); 89 (491)" },
        { label: "Places still available", value: "954 (190); 691 (491)" },
        { label: "ROIs on hand", value: "897 (190); 605 (491)" },
        { label: "Minimum score at assessment (3-month average)", value: "440 (190); 81 (491)" },
      ],
      note: "Migration Tasmania updates these figures after each weekly round.",
      url: "https://www.migration.tas.gov.au/news/processing_times_and_allocation_usage",
    },
    regionalNote: "Hobart is Category 2 (cities and major regional centres); the rest of Tasmania, including Launceston, is Category 3. The whole state qualifies for subclass 491 and regional study points.",
    faqs: [
      {
        question: "What is a Gold Pass?",
        answer: "Tasmania's marker for ROIs that meet its highest-priority attributes, such as skilled employment of at least 30 hours a week in a priority health, allied health or teaching role. Gold Pass candidates are invited first; a Gold claim that fails verification is refused regardless of score.",
      },
      {
        question: "Can I be nominated from overseas in 2026-27?",
        answer: "Only through the Health or Education Sector Job Offer pathway for subclass 190, which needs a job with a Tasmanian health provider or school. The 491 Overseas Skilled Occupation Profiles pathway will not issue invitations this program year.",
      },
      {
        question: "If I register for 190 but fall short, can I still be nominated for 491?",
        answer: "A candidate who meets the 190 pathway requirements but not the visa requirements (for example points) can be nominated for subclass 491 instead if approved.",
      },
    ],
    sources: [
      { label: "Program update: 2026-27 program opening (5 August 2026)", url: "https://www.migration.tas.gov.au/news/2024-25_program_open_to_rois" },
      { label: "Processing times and invitations issued (updated weekly)", url: "https://www.migration.tas.gov.au/news/processing_times_and_allocation_usage" },
      { label: "How to apply", url: "https://www.migration.tas.gov.au/skilled_migration/skilled-workers-and-graduates-living-in-Tasmania/how-to-apply" },
    ],
  },
  {
    slug: "australian-capital-territory",
    name: "Australian Capital Territory",
    short: "ACT",
    capital: "Canberra",
    officialName: "ACT Government skilled migration (Canberra Matrix)",
    officialUrl: "https://www.act.gov.au/migration/skilled-migrants/act-government-nomination",
    checkedOn: stateProgramsCheckedOn,
    status: "limited",
    statusNote:
      "The ACT used all 800 subclass 190 and 800 subclass 491 places for 2025-26 by 30 June 2026 (1,600 approvals, 89% to ACT residents). Its 2026-27 allocation had not been confirmed by the Australian Government when we checked. Canberra Matrix submissions remain open in the ACT Migration Application Portal, and the ACT has pencilled in a subclass 190-only round for the week starting 12 October 2026, followed by rounds in January, March and May 2027, all subject to change.",
    allocation: {
      year: "2026-27",
      sc190: null,
      sc491: null,
      prev: { year: "2025-26", sc190: 800, sc491: 800, note: "All places used by 30 June 2026: 1,600 approvals and 229 refusals." },
    },
    fee: "A$27.50 (including GST) to submit a Canberra Matrix, due within 7 days, and A$357.50 (including GST) for the nomination application. Both are non-refundable service fees.",
    selection: "Canberra Matrix score, ranked within occupation and by residency, with subclass 491 submissions selected first; cut-offs depend on demand and places",
    occupationList: {
      name: "ACT Nominated Migration Program Occupation List (formerly the ACT Critical Skills List)",
      note: "Last updated 10 October 2025 and applied to every Canberra Matrix regardless of submission date. Some occupations are marked 491 only, occupations may be capped when demand far exceeds places, and the list is reviewed around the start of each program year.",
    },
    keyPoints: [
      "The Canberra Matrix is a points matrix separate from the SkillSelect test, and every point claimed must be evidenced",
      "Pay the Matrix fee within 7 days or the submission lapses; a Matrix also lapses after 6 months unless updated, to a maximum of 12 months",
      "Updating a Matrix replaces it and re-ranks it as a new submission; visa expiry or age do not earn priority",
      "Demand for ACT 190 nomination far exceeds the places, so meeting the criteria does not guarantee an invitation",
    ],
    streams: [
      {
        name: "Occupation List pathway: Canberra residents",
        visa: "190 & 491",
        audience: "Onshore",
        forWhom: "People living in Canberra (or within a 30-minute commute in NSW) for 6 months (190) or 3 months (491) who have worked in Canberra for 26 weeks at 30 hours a week (190) or 13 weeks at 15 hours a week (491) in an occupation on the ACT list.",
      },
      {
        name: "Occupation List pathway: overseas residents",
        visa: "190 & 491",
        audience: "Offshore",
        forWhom: "People living overseas who have not lived in Australia in the last 12 months, with 3 years (190) or 1 year (491) of full-time post-qualification experience in the last 5 years in a listed occupation, plus an ACT employability statement.",
      },
      {
        name: "Doctorate Streamlined",
        visa: "190 & 491",
        audience: "Onshore & offshore",
        forWhom: "Holders of a research or professional doctorate from an ACT university (residents with 12 months in the ACT, or others awarded in the last 2 years). No Matrix points or ACT list needed; fee free and invited automatically each round.",
      },
      {
        name: "Small Business Owner",
        visa: "190 & 491",
        audience: "Onshore",
        forWhom: "Majority owners of an eligible registered ACT business who claim Matrix points in the Small Business Owner category.",
      },
      {
        name: "Significant Economic Benefit",
        visa: "190 & 491",
        audience: "Onshore & offshore",
        forWhom: "People whose employment the ACT Government considers of significant economic benefit. Initiated by the ACT only; you cannot apply for it.",
      },
    ],
    criteria: [
      "Meet the Home Affairs criteria for the visa from Matrix submission until nomination, including 65 points, a valid skills assessment and English result",
      "Nominated occupation on the ACT Nominated Migration Program Occupation List, unless you use the Doctorate Streamlined or Small Business Owner pathway",
      "Canberra residents: 6 months in Canberra and 26 weeks of work at 30 hours a week (190), or 3 months and 13 weeks at 15 hours a week (491), with bank records showing ACT activity",
      "English: Proficient or Superior for subclass 190 (Competent for Chef and ANZSCO skill level 3 to 5 occupations); Competent for subclass 491",
      "Unpaid work, internships and remote work for interstate employers do not count",
      "Commit to living and working in Canberra for at least 2 years from visa grant (or arrival, for overseas applicants)",
    ],
    howToApply: [
      "Lodge an EOI in SkillSelect selecting the ACT",
      "Submit a Canberra Matrix in the ACT Migration Application Portal and pay the A$27.50 fee within 7 days",
      "The Matrix is ranked by score within occupation and invitations are issued in scheduled rounds (491 first). Use our Canberra Matrix calculator to estimate your score",
      "If invited, lodge the nomination application with the A$357.50 fee and evidence of every point claimed",
    ],
    latest: {
      title: "Last invitation round: 11 June 2026",
      asAt: "11 June 2026",
      items: [
        { label: "Doctorate Streamlined", value: "8 (190), 5 (491)" },
        { label: "Canberra residents, Small Business Owners", value: "3 (190), minimum score 110" },
        { label: "Canberra residents, Occupation List", value: "66 (190), 0 (491)" },
        { label: "Overseas applicants", value: "0" },
        { label: "Tentative 2026-27 rounds", value: "Week of 12 October 2026 (190 only), 25 January 2027, 22 March 2027, 24 May 2027" },
      ],
      note: "Round dates are tentative and subject to change without notice.",
      url: "https://www.act.gov.au/migration/resources/canberra-matrix-invitation-round",
    },
    regionalNote: "All ACT postcodes are Category 2 (cities and major regional centres), so Canberra qualifies for subclass 491 and regional study points.",
    faqs: [
      {
        question: "How long does a Canberra Matrix stay valid?",
        answer: "Six months from submission. Updating it extends validity by six months, up to a maximum of 12 months from the original date, and each update is ranked as a new submission.",
      },
      {
        question: "Can I apply from overseas?",
        answer: "Yes, through the Occupation List pathway if you have not lived in Australia in the last 12 months and hold no visa other than a visitor visa. You need 3 years (190) or 1 year (491) of full-time experience in the last 5 years and an employability statement. No overseas applicants were invited in the June 2026 round.",
      },
    ],
    sources: [
      { label: "ACT Government nomination", url: "https://www.act.gov.au/migration/skilled-migrants/act-government-nomination" },
      { label: "Canberra Matrix invitation round", url: "https://www.act.gov.au/migration/resources/canberra-matrix-invitation-round" },
      { label: "ACT nomination pathways", url: "https://www.act.gov.au/migration/skilled-migrants/act-government-nomination/act-nomination-pathways" },
      { label: "ACT Nominated Migration Program Occupation List", url: "https://www.act.gov.au/migration/skilled-migrants/act-nominated-migration-program-occupation-list" },
      { label: "190 criteria: Canberra residents", url: "https://www.act.gov.au/migration/skilled-migrants/190-nomination-criteria/canberra-resident-applicant-eligibility" },
      { label: "190 criteria: overseas applicants", url: "https://www.act.gov.au/migration/skilled-migrants/190-nomination-criteria/overseas-applicant-eligibility" },
      { label: "491 criteria: Canberra residents", url: "https://www.act.gov.au/migration/skilled-migrants/491-nomination-criteria/491-nomination-canberra-resident-applicant-eligibility" },
      { label: "491 criteria: overseas applicants", url: "https://www.act.gov.au/migration/skilled-migrants/491-nomination-criteria/491-nomination-overseas-applicant-eligibility" },
      { label: "Canberra Matrix", url: "https://www.act.gov.au/migration/skilled-migrants/canberra-matrix" },
      { label: "Application fees", url: "https://www.act.gov.au/migration/resources/act-migration-application-fees" },
    ],
  },
  {
    slug: "northern-territory",
    name: "Northern Territory",
    short: "NT",
    capital: "Darwin",
    officialName: "MigrationNT (NT Government visa nomination)",
    officialUrl: "https://australiasnorthernterritory.com.au/move/migrate-to-work/nt-government-visa-nomination",
    checkedOn: stateProgramsCheckedOn,
    status: "limited",
    statusNote:
      "MigrationNT states it has received sufficient applications for 2026-27 after reopening on 21 August 2026. New nomination applications are accepted only by exception for onshore NT Graduate or NT Resident applicants whose substantive visa expires on or before 30 September 2027 (and who cannot get a subclass 485), who turn 45 by that date, or whose birthday before that date drops their subclass 491 points below 65. No applications are being accepted under the offshore streams.",
    allocation: {
      year: "2026-27",
      sc190: 850,
      sc491: 1000,
      note: "Reported from MigrationNT's 20 August 2026 announcement of 1,850 places. The split is not shown on the NT nomination pages, and Home Affairs had not published 2026-27 figures when we checked.",
      prev: { year: "2025-26", sc190: 850, sc491: 800, note: "Set by Home Affairs on 4 November 2025." },
    },
    fee: "A$300 (plus GST where applicable) for each nomination application.",
    selection: "Direct application assessed on NT employment outcomes and long-term commitment; MigrationNT does not rank applicants by points score",
    occupationList: {
      name: "Northern Territory Offshore Migration Occupation List (NTOMOL) for the offshore priority stream; onshore streams use the Home Affairs list",
      note: "Onshore NT Graduate and NT Resident applicants need an occupation on the Home Affairs list and NT employment in it (or a closely related occupation). Offshore Job Offer and Family stream applicants can nominate any occupation on the national list; the Priority Occupation stream uses the NTOMOL and is closed to new applications.",
    },
    keyPoints: [
      "The NT has enough applications for 2026-27 and accepts new onshore applications only where a visa, age or points deadline falls on or before 30 September 2027",
      "All onshore employment must be with an NT employer trading for at least 12 months, full-time (35 hours a week), at market salary, with an employer letter of support",
      "NT Residents need 2 years of residence and full-time work for 190, or 12 months of residence and 6 months of work for 491, with 12 months of employment still available",
      "Applicants living interstate, students who have not finished their course, and previous NT 489 or 491 nominees seeking 190 are not eligible",
      "You must show settlement funds (A$35,000 for a single applicant up to A$65,000 for a family of four) and commit to the NT for at least 3 years",
    ],
    streams: [
      {
        name: "Onshore NT Graduates",
        visa: "190 & 491",
        audience: "Onshore",
        forWhom: "Graduates of two academic years of full-time study at an NT institution. For 190: 6 months living in the NT after completion on a subclass 485 with a job or offer in the occupation (or 12 months with sustained job-search evidence). For 491: sustained efforts to find NT work in the occupation.",
      },
      {
        name: "Onshore NT Residents",
        visa: "190 & 491",
        audience: "Onshore",
        forWhom: "People who have lived in the NT for 2 years with 2 years of full-time NT employment (190), or lived there 12 months with 6 months of full-time employment (491), in their nominated or a closely related occupation, with 12 months of work still available.",
      },
      {
        name: "Offshore NT Priority Occupation",
        visa: "491",
        audience: "Offshore",
        status: "closed",
        forWhom: "Overseas applicants with a full skills assessment in an NTOMOL occupation and 2 years of post-qualification experience in the last 5. Closed to new applications when we checked.",
      },
      {
        name: "Offshore Job Offer",
        visa: "491",
        audience: "Offshore",
        status: "closed",
        forWhom: "Overseas applicants with a verifiable job offer in their occupation from an NT business that has operated in the NT for at least 12 months. Closed to new applications when we checked.",
      },
      {
        name: "Offshore Family",
        visa: "491",
        audience: "Offshore",
        status: "closed",
        forWhom: "Overseas applicants with an eligible relative who has lived in the NT for 12 months and declares settlement support, plus evidence of sustained NT job search. Closed to new applications when we checked.",
      },
    ],
    criteria: [
      "Under 45, a valid skills assessment for the visa, at least Competent English and at least 65 points",
      "Onshore employment: NT employer trading for 12 months, full-time at 35 hours a week, market salary, duties matching the nominated occupation, and a letter of support (subclass 482 and 457 holders need their sponsor's support)",
      "NT Residents: 2 years of residence and full-time work (190) or 12 months of residence and 6 months of work (491), with the job available for a further 12 months",
      "NT Graduates: two academic years of full-time NT study, then NT residence and employment or sustained job search as the stream requires",
      "Offshore: 2 years of post-qualification experience in the last 5 and financial capacity to settle; generally considered for subclass 491 only",
      "Commit to living and working in the NT in your skilled occupation for at least 3 years from visa grant, and respond to NT surveys",
    ],
    howToApply: [
      "Lodge an EOI in SkillSelect selecting the Northern Territory",
      "Apply directly to MigrationNT with the A$300 fee (plus GST where applicable) and the documents for your stream",
      "While the exception rule applies, show the visa, age or points deadline that falls on or before 30 September 2027",
      "If you apply for 190 and are found ineligible, MigrationNT considers you for 491 instead",
    ],
    regionalNote: "The entire Northern Territory, including Darwin, is Category 3 (regional centres and other regional areas).",
    faqs: [
      {
        question: "Can I still apply for NT nomination this year?",
        answer: "Only by exception for onshore NT Graduate or NT Resident applicants whose substantive visa expires on or before 30 September 2027 (and who cannot get a subclass 485), who turn 45 by that date, or whose birthday before that date takes their 491 points below 65. Offshore streams are closed, and MigrationNT cannot guarantee a decision before a visa deadline.",
      },
      {
        question: "Does the NT rank on points?",
        answer: "No. MigrationNT says it does not prioritise applicants by points score. It assesses NT employment outcomes, residence and commitment, and nominations are at its discretion.",
      },
    ],
    sources: [
      { label: "NT Government visa nomination (2026-27 update)", url: "https://australiasnorthernterritory.com.au/move/migrate-to-work/nt-government-visa-nomination" },
      { label: "Eligibility (updated 5 October 2026)", url: "https://australiasnorthernterritory.com.au/move/migrate-to-work/nt-government-visa-nomination/eligibility" },
      { label: "Common questions (updated 20 August 2026)", url: "https://australiasnorthernterritory.com.au/move/migrate-to-work/common-questions-for-nt-government-visa-nominations" },
    ],
  },
];

export function getStateProgram(slug: string): StateProgram | undefined {
  return statePrograms.find((program) => program.slug === slug);
}

export const statusLabels: Record<ProgramStatus, { label: string; className: string }> = {
  open: { label: "Open", className: "bg-emerald-100 text-emerald-800 ring-emerald-200" },
  limited: { label: "Limited", className: "bg-amber-100 text-amber-800 ring-amber-200" },
  closed: { label: "Closed", className: "bg-rose-100 text-rose-800 ring-rose-200" },
  pending: { label: "Awaiting 2026-27", className: "bg-gray-100 text-gray-700 ring-gray-200" },
};
