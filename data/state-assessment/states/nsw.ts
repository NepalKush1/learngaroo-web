import type { ListEntry, Requirement, StateAssessmentData } from "../types";

// New South Wales: the NSW Skills List (subclass 190), the NSW Regional
// Skills List (subclass 491 Pathways 2 and 3) and the four NSW nomination
// streams, transcribed from the NSW Government skilled visa pages on
// 13 October 2026. NSW says applications for both visas are closed for the
// current program year because every place has been allocated, and that it
// is reviewing program settings and eligibility for the next program year,
// so these are its last published settings (labelled 2025-26 on the
// Common questions page). How to refresh: scripts/sources/STATE-ASSESSMENT-BRIEF.md.

const CHECKED_ON = "13 October 2026";
const SKILLS_LISTS_URL = "https://www.nsw.gov.au/visas-and-migration/skilled-visas/nsw-skills-lists";
const SKILLED_VISAS_URL = "https://www.nsw.gov.au/visas-and-migration/skilled-visas";
const SC190_URL = "https://www.nsw.gov.au/visas-and-migration/skilled-visas/skilled-nominated-visa-subclass-190";
const SC491_URL = "https://www.nsw.gov.au/visas-and-migration/skilled-visas/skilled-work-regional-visa-subclass-491";
const FAQ_URL = "https://www.nsw.gov.au/visas-and-migration/skilled-visas/common-questions-about-skilled-visas";
const SUPPORTING_URL = "https://www.nsw.gov.au/visas-and-migration/skilled-visas/guide-to-submitting-supporting-information";
// NSW Pathway 1 requires pay of at least the TSMIT/CSIT; Home Affairs publishes the figure.
const HA_SALARY_URL =
  "https://immi.homeaffairs.gov.au/visas/employing-and-sponsoring-someone/sponsoring-workers/nominating-a-position/salary-requirements";

// Both lists are published as ANZSCO unit groups (four digits) with the titles
// below, exactly as NSW prints them. NSW doesn't name an ANZSCO version; the
// codes are matched against the Home Affairs 190/491 lists (ANZSCO 2013).

// NSW Skills List, subclass 190: 79 unit groups (NSW publishes no total).
const skillsList: ListEntry[] = [
  { code: "1325", title: "Research and Development Managers" },
  { code: "1331", title: "Construction Managers" },
  { code: "1332", title: "Engineering Managers" },
  { code: "1334", title: "Manufacturers" },
  { code: "1335", title: "Production Managers" },
  { code: "1341", title: "Child Care Centre Managers" },
  { code: "1342", title: "Health and Welfare Services Managers" },
  { code: "1343", title: "School Principals" },
  { code: "1351", title: "ICT Managers" },
  { code: "2245", title: "Land Economists and Valuers" },
  { code: "2321", title: "Architects and Landscape Architects" },
  { code: "2322", title: "Surveyors and Spatial Scientists" },
  { code: "2326", title: "Urban and Regional Planners" },
  { code: "2331", title: "Chemical and Materials Engineers" },
  { code: "2332", title: "Civil Engineering Professionals" },
  { code: "2333", title: "Electrical Engineers" },
  { code: "2334", title: "Electronics Engineers" },
  { code: "2335", title: "Industrial, Mechanical and Production Engineers" },
  { code: "2336", title: "Mining Engineers" },
  { code: "2339", title: "Other Engineering Professionals" },
  { code: "2341", title: "Agricultural and Forestry Scientists" },
  { code: "2342", title: "Chemists, and Food and Wine Scientists" },
  { code: "2343", title: "Environmental Scientists" },
  { code: "2344", title: "Geologists, Geophysicists and Hydrogeologists" },
  { code: "2347", title: "Veterinarians" },
  { code: "2411", title: "Early Childhood (Pre-primary School) Teachers" },
  { code: "2412", title: "Primary School Teachers" },
  { code: "2414", title: "Secondary School Teachers" },
  { code: "2421", title: "University Lecturers and Tutors" },
  { code: "2512", title: "Medical Imaging Professionals" },
  { code: "2513", title: "Occupational and Environmental Health Professionals" },
  { code: "2515", title: "Pharmacists" },
  { code: "2521", title: "Chiropractors and Osteopaths" },
  { code: "2524", title: "Occupational Therapists" },
  { code: "2525", title: "Physiotherapist" },
  { code: "2527", title: "Audiologist and Speech Pathologists/Therapist" },
  { code: "2531", title: "Generalist Medical Practitioners" },
  { code: "2533", title: "Specialist Physicians" },
  { code: "2534", title: "Psychiatrists" },
  { code: "2535", title: "Surgeons" },
  { code: "2539", title: "Other Medical Practitioners" },
  { code: "2541", title: "Midwives" },
  { code: "2543", title: "Nurse Managers" },
  { code: "2544", title: "Registered Nurses" },
  { code: "2611", title: "ICT Business and Systems Analysts" },
  { code: "2613", title: "Software and Applications Programmers" },
  { code: "2621", title: "Database and Systems Administrators, and ICT Security Specialists" },
  { code: "2631", title: "Computer Network Professionals" },
  { code: "2723", title: "Psychologists" },
  { code: "2725", title: "Social Workers" },
  { code: "3112", title: "Medical Technicians" },
  { code: "3121", title: "Architectural, Building and Surveying Technicians" },
  { code: "3122", title: "Civil Engineering Draftspersons and Technicians" },
  { code: "3123", title: "Electrical Engineering Draftspersons and Technicians" },
  { code: "3125", title: "Mechanical Engineering Draftspersons and Technicians" },
  { code: "3129", title: "Other Building and Engineering Technicians" },
  { code: "3211", title: "Automotive Electricians" },
  { code: "3212", title: "Motor Mechanics" },
  { code: "3222", title: "Sheetmetal Trades Workers" },
  { code: "3223", title: "Structural Steel and Welding Trades Workers" },
  { code: "3231", title: "Aircraft Maintenance Engineers" },
  { code: "3232", title: "Metal Fitters and Machinists" },
  { code: "3234", title: "Toolmakers and Engineering Patternmakers" },
  { code: "3311", title: "Bricklayers and Stonemasons" },
  { code: "3312", title: "Carpenters and Joiners" },
  { code: "3322", title: "Painting Trades Workers" },
  { code: "3331", title: "Glaziers" },
  { code: "3332", title: "Plasterers" },
  { code: "3333", title: "Roof Tilers" },
  { code: "3334", title: "Wall and Floor Tilers" },
  { code: "3341", title: "Plumbers" },
  { code: "3411", title: "Electricians" },
  { code: "3421", title: "Airconditioning and Refrigeration Mechanics" },
  { code: "3422", title: "Electrical Distribution Trades Workers" },
  { code: "3423", title: "Electronics Trades Workers" },
  { code: "3424", title: "Telecommunications Trades Workers" },
  { code: "3613", title: "Veterinary Nurses" },
  { code: "3941", title: "Cabinetmakers" },
  { code: "4117", title: "Welfare Support Workers" },
];

// NSW Regional Skills List, subclass 491 Pathways 2 and 3: 78 unit groups
// (NSW publishes no total).
const regionalSkillsList: ListEntry[] = [
  { code: "1212", title: "Crop Farmer" },
  { code: "1214", title: "Mixed Crop and Livestock Farmers" },
  { code: "1324", title: "Policy and Planning Managers" },
  { code: "1325", title: "Research and Development Managers" },
  { code: "1331", title: "Construction Managers" },
  { code: "1332", title: "Engineering Managers" },
  { code: "1334", title: "Manufacturers" },
  { code: "1335", title: "Production Managers" },
  { code: "1341", title: "Child Care Centre Managers" },
  { code: "1342", title: "Health and Welfare Services Managers" },
  { code: "1351", title: "ICT Managers" },
  { code: "2245", title: "Land Economists and Valuers" },
  { code: "2312", title: "Marine Transport Professionals" },
  { code: "2321", title: "Architects and Landscape Architects" },
  { code: "2322", title: "Surveyors and Spatial Scientists" },
  { code: "2326", title: "Urban and Regional Planners" },
  { code: "2331", title: "Chemical and Materials Engineers" },
  { code: "2332", title: "Civil Engineering Professionals" },
  { code: "2333", title: "Electrical Engineers" },
  { code: "2335", title: "Industrial, Mechanical and Production Engineers" },
  { code: "2336", title: "Mining Engineers" },
  { code: "2339", title: "Other Engineering Professionals" },
  { code: "2342", title: "Chemists, and Food and Wine Scientists" },
  { code: "2343", title: "Environmental Scientists" },
  { code: "2344", title: "Geologists, Geophysicists and Hydrogeologists" },
  { code: "2347", title: "Veterinarians" },
  { code: "2411", title: "Early Childhood (Pre-primary School) Teachers" },
  { code: "2412", title: "Primary School Teachers" },
  { code: "2414", title: "Secondary School Teachers" },
  { code: "2421", title: "University Lecturers and Tutors" },
  { code: "2512", title: "Medical Imaging Professionals" },
  { code: "2513", title: "Occupational and Environmental Health Professionals" },
  { code: "2515", title: "Pharmacists" },
  { code: "2523", title: "Dental Practitioners" },
  { code: "2524", title: "Occupational Therapists" },
  { code: "2525", title: "Physiotherapists" },
  { code: "2527", title: "Audiologists and Speech Pathologists / Therapists" },
  { code: "2531", title: "Generalist Medical Practitioners" },
  { code: "2533", title: "Specialist Physicians" },
  { code: "2539", title: "Other Medical Practitioners" },
  { code: "2544", title: "Registered Nurses" },
  { code: "2611", title: "ICT Business and Systems Analysts" },
  { code: "2613", title: "Software and Applications Programmers" },
  { code: "2621", title: "Database and Systems Administrators, and ICT Security Specialists" },
  { code: "2631", title: "Computer Network Professionals" },
  { code: "2723", title: "Psychologists" },
  { code: "2725", title: "Social Workers" },
  { code: "3111", title: "Agricultural Technicians" },
  { code: "3112", title: "Medical Technicians" },
  { code: "3121", title: "Architectural, Building and Surveying Technicians" },
  { code: "3122", title: "Civil Engineering Draftspersons and Technicians" },
  { code: "3123", title: "Electrical Engineering Draftspersons and Technicians" },
  { code: "3125", title: "Mechanical Engineering Draftspersons and Technicians" },
  { code: "3129", title: "Other Building and Engineering Technicians" },
  { code: "3211", title: "Automotive Electricians" },
  { code: "3212", title: "Motor Mechanics" },
  { code: "3222", title: "Sheetmetal Trades Workers" },
  { code: "3223", title: "Structural Steel and Welding Trades Workers" },
  { code: "3231", title: "Aircraft Maintenance Engineers" },
  { code: "3232", title: "Metal Fitters and Machinists" },
  { code: "3311", title: "Bricklayers and Stonemasons" },
  { code: "3312", title: "Carpenters and Joiners" },
  { code: "3322", title: "Painting Trades Workers" },
  { code: "3331", title: "Glaziers" },
  { code: "3332", title: "Plasterers" },
  { code: "3333", title: "Roof Tilers" },
  { code: "3334", title: "Wall and Floor Tilers" },
  { code: "3341", title: "Plumbers" },
  { code: "3411", title: "Electricians" },
  { code: "3421", title: "Airconditioning and Refrigeration Mechanics" },
  { code: "3422", title: "Electrical Distribution Trades Workers" },
  { code: "3423", title: "Electronics Trades Workers" },
  { code: "3424", title: "Telecommunications Trades Workers" },
  { code: "3613", title: "Veterinary Nurses" },
  { code: "3941", title: "Cabinetmakers" },
  { code: "3942", title: "Wood Machinists and Other Wood Trades Workers" },
  { code: "3992", title: "Chemical, Gas, Petroleum and Power Generation Plant Operators" },
  { code: "4117", title: "Welfare Support Workers" },
];

// ── Rules shared by every stream ────────────────────────────────────────

const evidence: Requirement = {
  kind: "manual",
  text: "Every claim in your SkillSelect EOI must be supported by documents that are valid when you apply for nomination and for at least five days after",
};
const notNominatedBefore: Requirement = {
  kind: "manual",
  text: "You can't have been nominated by NSW before: once NSW nominates you and Home Affairs invites you to apply for a visa, NSW can't nominate you again for any visa",
};

// Subclass 491 Pathways 2 and 3: working in NSW in the nominated occupation,
// or 3 months' continuous residence in NSW or offshore.
const residency491: Requirement[][] = [
  [{ kind: "working", where: "state", minMonths: 0, occupation: "nominated" }],
  [{ kind: "living", where: "state", minMonths: 3 }],
  [{ kind: "offshore", minMonths: 3 }],
];

const invitationNote =
  "Invitation only: you can't apply directly. NSW invites the highest-ranking EOIs within each ANZSCO unit group, considering age, English, education, points score and total years of skilled work experience among other factors, at its sole discretion.";
const roundsNote =
  "Invitation rounds run through the financial year with no published dates, and the date you lodge or update your EOI doesn't affect selection.";
const residencyNote =
  "NSW selects on the onshore or offshore residency status in your EOI. Moving between NSW and offshore restarts the residency period, and time in NSW on a tourist visa doesn't count.";
const fourteenDaysNote = "If invited, you have 14 days to apply. The window isn't extended and invitations aren't reissued.";
const closedNote =
  "NSW says applications are closed for the current program year because all nomination places have been allocated, and that it is reviewing program settings and eligibility criteria for the next program year.";
const restrictedNote = "NSW says places for Pathways 1 and 3 are restricted because of limited allocation, and it may close them once they are filled.";
const reapplyNote = "If NSW refuses a Pathway 1 or Pathway 3 application, you can reapply six months after the refusal.";
const sectors491Note = "Key industry sectors for subclass 491: health, education, ICT, infrastructure and agriculture.";

export const nswAssessment: StateAssessmentData = {
  state: "new-south-wales",
  checkedOn: CHECKED_ON,
  settingsYear: "2025-26 settings (2026-27 not yet published)",
  lists: [
    {
      id: "nsw-skills-list",
      name: "NSW Skills List",
      visas: ["190"],
      granularity: "unit-group",
      entries: skillsList,
      programYear: "2025-26",
      anzsco: "2013",
      checkedOn: CHECKED_ON,
      source: SKILLS_LISTS_URL,
      note: "Published as ANZSCO unit groups. NSW considers only occupations that fall within a listed unit group and are also eligible for subclass 190 on the Home Affairs list.",
    },
    {
      id: "nsw-regional-skills-list",
      name: "NSW Regional Skills List",
      visas: ["491"],
      granularity: "unit-group",
      entries: regionalSkillsList,
      programYear: "2025-26",
      anzsco: "2013",
      checkedOn: CHECKED_ON,
      source: SKILLS_LISTS_URL,
      note: "Applies to subclass 491 Pathways 2 and 3 (Pathway 1 is open to every occupation eligible for subclass 491). Published as ANZSCO unit groups; NSW considers only occupations that fall within a listed unit group and are also eligible for subclass 491 on the Home Affairs list.",
    },
  ],
  streams: [
    {
      id: "nsw-190",
      name: "Subclass 190 Skilled Nominated",
      visas: ["190"],
      audience: "both",
      status: "pending",
      occupationLists: ["nsw-skills-list"],
      requires: [evidence, notNominatedBefore],
      // Working in NSW in the nominated occupation for at least 20 hours a
      // week, or 6 months' continuous residence in NSW or offshore.
      anyOf: [
        [{ kind: "working", where: "state", minMonths: 0, minHoursPerWeek: 20, occupation: "nominated" }],
        [{ kind: "living", where: "state", minMonths: 6 }],
        [{ kind: "offshore", minMonths: 6 }],
      ],
      notes: [
        invitationNote,
        roundsNote,
        residencyNote,
        "Key industry sectors for subclass 190: health, education, ICT and infrastructure.",
        fourteenDaysNote,
        closedNote,
      ],
      source: SC190_URL,
    },
    {
      id: "nsw-491-pathway-1",
      name: "Subclass 491 Pathway 1: employed with a regional NSW employer",
      visas: ["491"],
      audience: "onshore",
      status: "closed",
      occupationLists: ["ha-491"],
      requires: [
        // FAQ: at least six months at a minimum of 20 hours per week; the 491
        // page: in the nominated (or closely related) occupation.
        { kind: "working", where: "state-regional", minMonths: 6, minHoursPerWeek: 20, occupation: "related" },
        // The TSMIT/CSIT (Home Affairs, applications lodged 1 July 2026 to 30 June 2027).
        { kind: "salary", min: 79423 },
        {
          kind: "manual",
          text: "Your six months of qualifying employment must be continuous, with the same regional NSW-based employer, and listed in your EOI. Approved unpaid leave doesn't break continuity but doesn't count towards the six months",
        },
        {
          kind: "manual",
          text: "You must work from an established business premises in a designated regional area of NSW. Your home, someone else's home (including your employer's) and co-working or shared offices aren't accepted",
        },
        {
          kind: "manual",
          text: "The employer must be independent and unrelated to you: self-employment and employment by your spouse or a close family member aren't eligible",
        },
        evidence,
        notNominatedBefore,
      ],
      notes: [
        "NSW lists Pathway 1 as closed to new applications.",
        restrictedNote,
        "You apply directly (no invitation), and every occupation eligible for subclass 491 qualifies: Pathway 1 isn't limited to the NSW Regional Skills List.",
        "There is no residency requirement: NSW looks at where you work, not where you live (for example, living in Wodonga VIC and working in Albury NSW is eligible).",
        "You must be paid at least the TSMIT/CSIT at the time of applying, counting income as Home Affairs does (base salary and guaranteed allowances or benefits; not bonuses, overtime, reimbursements or superannuation). The $79,423 used here is the Home Affairs TSMIT/CSIT for applications lodged from 1 July 2026 to 30 June 2027; it was $76,515 in 2025-26.",
        "TSMIT/CSIT concession (employer applications currently closed): with a concession approved before you apply, earnings of at least 90% of the TSMIT/CSIT are accepted for 13 occupations: Cafe or Restaurant Manager (141111), Medical Laboratory Scientist (234611), Agricultural Technician (311111), Pharmacy Technician (311215), Motor Mechanic (General) (321211), Panel Beater (324111), Vehicle Painter (324311), Stonemason (331112), Pastry Cook (351112), Butcher or Smallgoods Maker (351211), Cook (351411), Veterinary Nurse (361311) and Residential Care Officer (411715).",
        reapplyNote,
      ],
      source: SC491_URL,
    },
    {
      id: "nsw-491-pathway-2",
      name: "Subclass 491 Pathway 2: invited by Investment NSW",
      visas: ["491"],
      audience: "both",
      status: "pending",
      occupationLists: ["nsw-regional-skills-list"],
      requires: [evidence, notNominatedBefore],
      anyOf: residency491,
      notes: [invitationNote, roundsNote, residencyNote, sectors491Note, fourteenDaysNote, closedNote],
      source: SC491_URL,
    },
    {
      id: "nsw-491-pathway-3",
      name: "Subclass 491 Pathway 3: recent regional NSW graduate",
      visas: ["491"],
      audience: "both",
      status: "closed",
      occupationLists: ["nsw-regional-skills-list"],
      requires: [
        // A bachelor's, master's (coursework or research) or PhD from an
        // institution in a designated regional area of NSW, completed in the
        // 2 years immediately before applying.
        { kind: "study", where: "state-regional", minLevel: "bachelor", completedWithinMonths: 24 },
        {
          kind: "manual",
          text: "Your degree must be related to your nominated (or a closely related) occupation, completed entirely at an institution in a designated regional area of NSW, and qualify you for the 'Study in regional Australia' points, claimed from that single course in your EOI",
        },
        evidence,
        notNominatedBefore,
      ],
      anyOf: residency491,
      notes: [
        "NSW lists Pathway 3 as closed to new applications.",
        restrictedNote,
        "You apply directly (no invitation) once you meet the criteria.",
        "NSW applies the Home Affairs definition of 'Study in regional Australia'. If your arrival in regional NSW was delayed because your Student visa (subclass 500) was granted after your course started, you may be exempt from that requirement; don't claim the points in that case.",
        residencyNote,
        sectors491Note,
        reapplyNote,
      ],
      source: SC491_URL,
    },
  ],
  summary:
    "NSW nominates for subclass 190 from the NSW Skills List and for subclass 491 through three pathways, two of them limited to the NSW Regional Skills List. Both visas are closed for the current program year because every place was allocated, and NSW is reviewing its settings, so these are its last published (2025-26) settings.",
  sources: [
    { label: "NSW skills lists", url: SKILLS_LISTS_URL },
    { label: "NSW skilled visas", url: SKILLED_VISAS_URL },
    { label: "Skilled Nominated visa (subclass 190)", url: SC190_URL },
    { label: "Skilled Work Regional visa (subclass 491)", url: SC491_URL },
    { label: "Common questions about skilled visas", url: FAQ_URL },
    { label: "Guide to submitting supporting information", url: SUPPORTING_URL },
    { label: "Home Affairs: salary requirements (TSMIT and CSIT)", url: HA_SALARY_URL },
  ],
};
