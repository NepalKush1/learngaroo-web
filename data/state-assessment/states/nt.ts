import type { Requirement, StateAssessmentData } from "../types";

// Northern Territory (MigrationNT): the NT Offshore Migration Occupation List
// and the five General Skilled Migration nomination streams as checkable rules.
// Read on 13 October 2026 from australiasnorthernterritory.com.au
// (theterritory.com.au redirects there; the site blocks scripts, so the pages
// were read in Chrome). For 2026-27 MigrationNT accepts new applications only
// by exception and the offshore streams are closed. Onshore streams accept any
// occupation on the Home Affairs list. How to refresh:
// scripts/sources/STATE-ASSESSMENT-BRIEF.md.

const checkedOn = "13 October 2026";

const src = {
  overview: "https://australiasnorthernterritory.com.au/move/migrate-to-work/nt-government-visa-nomination",
  eligibility: "https://australiasnorthernterritory.com.au/move/migrate-to-work/nt-government-visa-nomination/eligibility",
  list: "https://australiasnorthernterritory.com.au/move/migrate-to-work/nt-government-visa-nomination/nt-offshore-migration-occupation-list",
  howToApply: "https://australiasnorthernterritory.com.au/move/migrate-to-work/nt-government-visa-nomination/how-to-apply",
  questions: "https://australiasnorthernterritory.com.au/move/migrate-to-work/common-questions-for-nt-government-visa-nominations",
};

// ── Conditions the tool can't check from a visitor's answers ────────────

// The 2026-27 exception rule (overview page, updated 7 October 2026).
const exceptionRule: Requirement = {
  kind: "manual",
  text: "2026-27: 'New nomination applications will only be accepted by exception' for onshore NT Graduate or NT Resident applicants with one of these deadlines on or before 30 September 2027: a substantive visa expiring (and not eligible for a Temporary Graduate subclass 485 visa), turning 45, or a birthday that takes their subclass 491 points below 65.",
};
const generalBars: Requirement = {
  kind: "manual",
  text: "You are not eligible if you or any migrating dependant currently lives interstate, or is on a student visa and hasn't completed the studies for it.",
};
const no190AfterNt491: Requirement = {
  kind: "manual",
  text: "You are not eligible for subclass 190 if the NT Government has previously nominated you for a subclass 489 or 491 visa.",
};
const employerRules: Requirement = {
  kind: "manual",
  text: "Claimed NT employment must be with an employer that has traded in the NT for at least 12 months, at market salary, with the employer's letter of support (subclass 457 or 482 holders need their sponsor's). Remote work for employers based outside the NT generally doesn't count unless the duties involve servicing NT clients.",
};
const ntStudy: Requirement = {
  kind: "manual",
  text: "You completed one or more qualifications after studying full-time at an NT-based institution for two academic years (4 semesters), in a single tertiary course or a set of nested tertiary courses.",
};
const after485: Requirement = {
  kind: "manual",
  text: "You have lived in the NT for at least 6 continuous months immediately after completing your last qualification, holding a subclass 485 visa or a bridging visa for a 485 application. Graduates aged over 35 who are not eligible for a 485 don't need this.",
};
const criticalSectors = "energy, defence, agriculture, mining, health, aged or disabled care, education, tourism and construction";
const greaterDarwin = "outside Greater Darwin (the City of Darwin, City of Palmerston and Litchfield Shire)";
const jobContinues: Requirement = { kind: "manual", text: "Your NT employment must be available for at least a further 12 months." };
const offshoreExperience: Requirement = {
  kind: "manual",
  text: "Your 2 years of experience in your nominated occupation must be full-time, after you qualified, and verifiable.",
};
const offshoreCommitment: Requirement = {
  kind: "manual",
  text: "You must show a genuine commitment to live and work in the NT long-term and declare that you have the financial capacity to settle there.",
};

// ── Notes ───────────────────────────────────────────────────────────────

const noPoints =
  "MigrationNT does not prioritise applicants by points score: it looks for strong NT employment outcomes and a long-term commitment to the NT, and nominations are at its discretion.";
const connection190 =
  "For subclass 190 you must show a greater connection to the NT than to any other state or territory; generally only long-term NT residents are considered, and MigrationNT considers ineligible 190 applicants for 491 if their EOI includes it.";
const commitment =
  "You must commit to living and working in the NT in your skilled (or a closely related) occupation for at least 3 years from visa grant, keep the NT Government informed of your visa status and contact details, and take part in its surveys.";
const settlement =
  "MigrationNT's settlement guidance is net assets of at least A$35,000 for a single applicant, A$50,000 with a spouse, A$60,000 with a spouse and one child, and A$65,000 with a spouse and two children.";
const fee = "The nomination application fee is A$300 (plus GST where applicable) and is not refundable.";
const noGuarantee = "MigrationNT cannot guarantee a nomination before a visa deadline.";
const offshoreClosed = "MigrationNT is not accepting new applications under the offshore streams.";
const offshore491 = "Offshore applicants are generally only considered for subclass 491.";

export const ntAssessment: StateAssessmentData = {
  state: "northern-territory",
  checkedOn,
  settingsYear: "2026-27 (eligibility page updated 5 October 2026)",
  summary:
    "MigrationNT has received enough applications for 2026-27: it accepts new applications only by exception from onshore NT Graduates and NT Residents with a visa, age or points deadline on or before 30 September 2027, and its offshore streams are closed. It assesses NT employment and long-term commitment rather than ranking on points.",
  sources: [
    { label: "NT Government visa nomination (2026-27 update, page updated 7 October 2026)", url: src.overview },
    { label: "Eligibility (updated 5 October 2026)", url: src.eligibility },
    { label: "NT Offshore Migration Occupation List (updated 26 November 2025)", url: src.list },
    { label: "How to apply (updated 20 August 2026)", url: src.howToApply },
    { label: "Common questions (updated 20 August 2026)", url: src.questions },
  ],
  streams: [
    {
      id: "nt-graduates-190",
      name: "Onshore NT Graduates",
      visas: ["190"],
      audience: "onshore",
      status: "limited",
      occupationLists: ["ha-190"],
      requires: [
        { kind: "living", where: "state", minMonths: 0 },
        { kind: "study", where: "state", minLevel: "certificate-iii" },
        ntStudy,
        exceptionRule,
        generalBars,
        no190AfterNt491,
      ],
      anyOf: [
        [{ kind: "working", where: "state", minMonths: 0, minHoursPerWeek: 35, occupation: "related" }, after485, employerRules],
        [
          { kind: "jobOffer", where: "state" },
          after485,
          {
            kind: "manual",
            text: `Your job offer must be recent and in your nominated or a closely related skilled occupation, or, in exceptional circumstances, in a designated critical sector (${criticalSectors}).`,
          },
          employerRules,
        ],
        [
          { kind: "working", where: "state", minMonths: 0, minHoursPerWeek: 35, occupation: "any" },
          after485,
          {
            kind: "manual",
            text: `Exceptional circumstances only: you have worked for at least 3 months immediately before applying in a regional or remote area ${greaterDarwin}, or you work in a designated critical sector (${criticalSectors}).`,
          },
          employerRules,
        ],
        [
          { kind: "living", where: "state", minMonths: 12 },
          {
            kind: "manual",
            text: "You have lived in the NT for at least 12 continuous months immediately after completing your last qualification, holding a subclass 485 visa or a bridging visa for a 485 application, and made genuine and sustained efforts to get work with an NT employer in your nominated or a closely related skilled occupation.",
          },
        ],
      ],
      notes: [noPoints, connection190, commitment, settlement, fee, noGuarantee],
      source: src.eligibility,
    },
    {
      id: "nt-graduates-491",
      name: "Onshore NT Graduates",
      visas: ["491"],
      audience: "onshore",
      status: "limited",
      occupationLists: ["ha-491"],
      requires: [
        { kind: "living", where: "state", minMonths: 0 },
        { kind: "study", where: "state", minLevel: "certificate-iii" },
        ntStudy,
        {
          kind: "manual",
          text: "You have made genuine and sustained efforts and progress towards work with an NT employer in your nominated or a closely related skilled occupation, during and after your studies (for example job applications over time, relevant employment, professional association membership, or positive feedback from NT industry contacts).",
        },
        exceptionRule,
        generalBars,
      ],
      notes: [noPoints, commitment, settlement, fee, noGuarantee],
      source: src.eligibility,
    },
    {
      id: "nt-residents-190",
      name: "Onshore NT Residents",
      visas: ["190"],
      audience: "onshore",
      status: "limited",
      occupationLists: ["ha-190"],
      requires: [{ kind: "living", where: "state", minMonths: 24 }, jobContinues, employerRules, exceptionRule, generalBars, no190AfterNt491],
      anyOf: [
        [{ kind: "working", where: "state", minMonths: 24, minHoursPerWeek: 35, occupation: "related" }],
        [
          { kind: "working", where: "state", minMonths: 24, minHoursPerWeek: 35, occupation: "any" },
          {
            kind: "manual",
            text: `Exceptional circumstances only: work outside your nominated or a closely related occupation counts if it is in a regional or remote area ${greaterDarwin}.`,
          },
        ],
      ],
      notes: [noPoints, connection190, commitment, settlement, fee, noGuarantee],
      source: src.eligibility,
    },
    {
      id: "nt-residents-491",
      name: "Onshore NT Residents",
      visas: ["491"],
      audience: "onshore",
      status: "limited",
      occupationLists: ["ha-491"],
      requires: [{ kind: "living", where: "state", minMonths: 12 }, jobContinues, employerRules, exceptionRule, generalBars],
      anyOf: [
        [{ kind: "working", where: "state", minMonths: 6, minHoursPerWeek: 35, occupation: "related" }],
        [
          { kind: "working", where: "state", minMonths: 6, minHoursPerWeek: 35, occupation: "any" },
          {
            kind: "manual",
            text: `Exceptional circumstances only: work outside your nominated or a closely related occupation counts if it is in a regional or remote area ${greaterDarwin}, or in a designated critical sector (${criticalSectors}).`,
          },
        ],
      ],
      notes: [noPoints, commitment, settlement, fee, noGuarantee],
      source: src.eligibility,
    },
    {
      id: "nt-offshore-priority",
      name: "Offshore NT Priority Occupation",
      visas: ["491"],
      audience: "offshore",
      status: "closed",
      occupationLists: ["nt-ntomol"],
      requires: [
        { kind: "offshore" },
        { kind: "experience", minYears: 2, withinYears: 5 },
        offshoreExperience,
        {
          kind: "manual",
          text: "You need a full migration skills assessment in an NTOMOL occupation, and any additional work experience the NTOMOL specifies for it.",
        },
        offshoreCommitment,
        generalBars,
      ],
      notes: [offshoreClosed, offshore491, noPoints, commitment, settlement, fee],
      source: src.eligibility,
    },
    {
      id: "nt-offshore-job-offer",
      name: "Offshore Job Offer",
      visas: ["491"],
      audience: "offshore",
      status: "closed",
      occupationLists: ["ha-491"],
      requires: [
        { kind: "offshore" },
        { kind: "experience", minYears: 2, withinYears: 5 },
        offshoreExperience,
        { kind: "jobOffer", where: "state" },
        {
          kind: "manual",
          text: "Your verifiable job offer must be full-time (at least 35 hours a week) in your nominated occupation, based in the NT, for at least 12 months, with an NT business or organisation that has actively operated in the NT for at least 12 months.",
        },
        offshoreCommitment,
        generalBars,
      ],
      notes: [offshoreClosed, offshore491, noPoints, commitment, settlement, fee],
      source: src.eligibility,
    },
    {
      id: "nt-offshore-family",
      name: "Offshore Family",
      visas: ["491"],
      audience: "offshore",
      status: "closed",
      occupationLists: ["ha-491"],
      requires: [
        { kind: "offshore" },
        { kind: "experience", minYears: 2, withinYears: 5 },
        offshoreExperience,
        { kind: "relative", where: "state" },
        {
          kind: "manual",
          text: "Your relative (or your partner's, if your partner is applying for the same visa) must be your parent, child or step-child, sibling (including adoptive or step), aunt or uncle, nephew or niece, first cousin or grandparent; an Australian citizen, permanent resident or eligible New Zealand citizen, or hold a subclass 491, 494, 489 or 309 visa (or a bridging visa for a subclass 887 or 191 application); usually resident in the NT for at least 12 months; and willing to provide settlement support in a statutory declaration.",
        },
        {
          kind: "manual",
          text: "You need evidence of sustained efforts to find work in the NT (research into the NT job market and records of applying for NT jobs or contacting NT employers), and a statement or family tree showing the relationship.",
        },
        offshoreCommitment,
        generalBars,
      ],
      notes: [offshoreClosed, offshore491, noPoints, commitment, settlement, fee],
      source: src.eligibility,
    },
  ],
  lists: [
    {
      id: "nt-ntomol",
      name: "NT Offshore Migration Occupation List (NTOMOL)",
      visas: ["491"],
      granularity: "occupation",
      programYear: "updated 26 November 2025",
      anzsco: "2013",
      checkedOn,
      source: src.list,
      note: "Only for applicants outside Australia under the Offshore NT Priority Occupation stream, which is closed to new applications; offshore applicants are generally only considered for subclass 491. The page has no program-year label, and its 'Comments' column is recorded as conditions.",
      entries: [
        { code: "233911", title: "Aeronautical Engineer" },
        { code: "141999", title: "Accommodation and Hospitality Managers nec" },
        { code: "231111", title: "Aeroplane Pilot", caveat: "Must provide evidence of Australian licence/registration or a statement outlining eligibility to obtain registration of licence to work in Australia" },
        { code: "334112", title: "Airconditioning and Mechanical Services Plumber", caveat: "Must provide evidence of Australian licence/registration or a statement outlining eligibility to obtain registration of licence to work in Australia" },
        { code: "342111", title: "Airconditioning and Refrigeration Mechanic" },
        { code: "323111", title: "Aircraft Maintenance Engineer (Avionics)" },
        { code: "323112", title: "Aircraft Maintenance Engineer (Mechanical)" },
        { code: "121111", title: "Aquaculture Farmer" },
        { code: "351111", title: "Baker" },
        { code: "121312", title: "Beef Cattle Farmer" },
        { code: "331111", title: "Bricklayer" },
        { code: "312999", title: "Building and Engineering Technicians nec" },
        { code: "342311", title: "Business Machine Mechanic" },
        { code: "141111", title: "Cafe or Restaurant Manager" },
        { code: "331212", title: "Carpenter" },
        { code: "331211", title: "Carpenter and Joiner" },
        { code: "351311", title: "Chef" },
        { code: "134111", title: "Child Care Centre Manager" },
        { code: "252111", title: "Chiropractor", caveat: "Must provide evidence of Australian licence/registration or a statement outlining eligibility to obtain registration of licence to work in Australia" },
        { code: "272311", title: "Clinical Psychologist", caveat: "Must provide evidence of Australian licence/registration or a statement outlining eligibility to obtain registration of licence to work in Australia" },
        { code: "411711", title: "Community Worker" },
        { code: "312114", title: "Construction Estimator" },
        { code: "351411", title: "Cook" },
        { code: "272199", title: "Counsellors nec" },
        { code: "411214", title: "Dental Therapist", caveat: "Must provide evidence of Australian licence/registration or a statement outlining eligibility to obtain registration of licence to work in Australia" },
        { code: "252312", title: "Dentist", caveat: "Must provide evidence of Australian licence/registration or a statement outlining eligibility to obtain registration of licence to work in Australia" },
        { code: "253917", title: "Diagnostic and Interventional Radiologist", caveat: "Must provide evidence of Australian licence/registration or a statement outlining eligibility to obtain registration of licence to work in Australia" },
        { code: "321212", title: "Diesel Motor Mechanic" },
        { code: "251111", title: "Dietitian" },
        { code: "411712", title: "Disabilities Services Officer" },
        { code: "272112", title: "Drug and Alcohol Counsellor" },
        { code: "241111", title: "Early Childhood (Pre-primary School) Teacher", caveat: "Must provide evidence of Australian licence/registration or a statement outlining eligibility to obtain registration of licence to work in Australia" },
        { code: "134499", title: "Education Managers nec" },
        { code: "272312", title: "Educational Psychologist" },
        { code: "341111", title: "Electrician (General)", caveat: "Must provide evidence of Australian licence/registration or a statement outlining eligibility to obtain registration of licence to work in Australia" },
        { code: "341112", title: "Electrician (Special Class)", caveat: "Must provide evidence of Australian licence/registration or a statement outlining eligibility to obtain registration of licence to work in Australia" },
        { code: "342313", title: "Electronic Equipment Trades Worker" },
        { code: "253912", title: "Emergency Medicine Specialist", caveat: "Must provide evidence of Australian licence/registration or a statement outlining eligibility to obtain registration of licence to work in Australia" },
        { code: "133211", title: "Engineering Manager" },
        { code: "411411", title: "Enrolled Nurse", caveat: "Must provide evidence of Australian licence/registration or a statement outlining eligibility to obtain registration of licence to work in Australia" },
        { code: "234915", title: "Exercise Physiologist" },
        { code: "411713", title: "Family Support Worker" },
        { code: "323211", title: "Fitter (General)" },
        { code: "323212", title: "Fitter and Turner" },
        { code: "323213", title: "Fitter-Welder" },
        { code: "332111", title: "Floor Finisher" },
        { code: "362211", title: "Gardener (General)" },
        { code: "253111", title: "General Practitioner", caveat: "Must provide evidence of Australian licence/registration or a statement outlining eligibility to obtain registration of licence to work in Australia" },
        { code: "234411", title: "Geologist" },
        { code: "233212", title: "Geotechnical Engineer" },
        { code: "333111", title: "Glazier" },
        { code: "391111", title: "Hairdresser" },
        { code: "134299", title: "Health and Welfare Services Managers nec" },
        { code: "251999", title: "Health Diagnostic and Promotion Professionals nec" },
        { code: "251911", title: "Health Promotion Officer" },
        { code: "231114", title: "Helicopter Pilot", caveat: "Must provide evidence of Australian licence/registration or a statement outlining eligibility to obtain registration of licence to work in Australia" },
        { code: "141311", title: "Hotel or Motel Manager" },
        { code: "233511", title: "Industrial Engineer" },
        { code: "271299", title: "Judicial and Other Legal Professionals nec" },
        { code: "232112", title: "Landscape Architect" },
        { code: "362213", title: "Landscape Gardener" },
        { code: "312511", title: "Mechanical Engineering Draftsperson" },
        { code: "312512", title: "Mechanical Engineering Technician" },
        { code: "134211", title: "Medical Administrator / Medical Superintendent" },
        { code: "251211", title: "Medical Diagnostic Radiographer", caveat: "Must provide evidence of Australian licence/registration or a statement outlining eligibility to obtain registration of licence to work in Australia" },
        { code: "234611", title: "Medical Laboratory Scientist", caveat: "Must provide evidence of Australian licence/registration or a statement outlining eligibility to obtain registration of licence to work in Australia" },
        { code: "253999", title: "Medical Practitioners nec", caveat: "Must provide evidence of Australian licence/registration or a statement outlining eligibility to obtain registration of licence to work in Australia" },
        { code: "322311", title: "Metal Fabricator" },
        { code: "241311", title: "Middle School Teacher / Intermediate School Teacher", caveat: "Must provide evidence of Australian licence/registration or a statement outlining eligibility to obtain registration of licence to work in Australia" },
        { code: "254111", title: "Midwife", caveat: "Must provide evidence of Australian licence/registration or a statement outlining eligibility to obtain registration of licence to work in Australia" },
        { code: "233611", title: "Mining Engineer (excluding Petroleum)" },
        { code: "321211", title: "Motor Mechanic (General)" },
        { code: "321213", title: "Motorcycle Mechanic" },
        { code: "263112", title: "Network Administrator" },
        { code: "254211", title: "Nurse Educator", caveat: "Must provide evidence of Australian licence/registration or a statement outlining eligibility to obtain registration of licence to work in Australia" },
        { code: "254311", title: "Nurse Manager", caveat: "Must provide evidence of Australian licence/registration or a statement outlining eligibility to obtain registration of licence to work in Australia" },
        { code: "254411", title: "Nurse Practitioner", caveat: "Must provide evidence of Australian licence/registration or a statement outlining eligibility to obtain registration of licence to work in Australia" },
        { code: "254212", title: "Nurse Researcher" },
        { code: "134212", title: "Nursing Clinical Director" },
        { code: "251312", title: "Occupational Health and Safety Adviser" },
        { code: "252411", title: "Occupational Therapist", caveat: "Must provide evidence of Australian licence/registration or a statement outlining eligibility to obtain registration of licence to work in Australia" },
        { code: "251411", title: "Optometrist", caveat: "Must provide evidence of Australian licence/registration or a statement outlining eligibility to obtain registration of licence to work in Australia" },
        { code: "253514", title: "Orthopaedic Surgeon", caveat: "Must provide evidence of Australian licence/registration or a statement outlining eligibility to obtain registration of licence to work in Australia" },
        { code: "253321", title: "Paediatrician", caveat: "Must provide evidence of Australian licence/registration or a statement outlining eligibility to obtain registration of licence to work in Australia" },
        { code: "324111", title: "Panelbeater" },
        { code: "351112", title: "Pastrycook" },
        { code: "253915", title: "Pathologist", caveat: "Must provide evidence of Australian licence/registration or a statement outlining eligibility to obtain registration of licence to work in Australia" },
        { code: "252511", title: "Physiotherapist", caveat: "Must provide evidence of Australian licence/registration or a statement outlining eligibility to obtain registration of licence to work in Australia" },
        { code: "334111", title: "Plumber (General)" },
        { code: "252611", title: "Podiatrist", caveat: "Must provide evidence of Australian licence/registration or a statement outlining eligibility to obtain registration of licence to work in Australia" },
        { code: "224412", title: "Policy Analyst" },
        { code: "132411", title: "Policy and Planning Manager" },
        { code: "399213", title: "Power Generation Plant Operator" },
        { code: "241213", title: "Primary School Teacher", caveat: "Must provide evidence of Australian licence/registration or a statement outlining eligibility to obtain registration of licence to work in Australia" },
        { code: "133513", title: "Production Manager (Mining)" },
        { code: "133112", title: "Project Builder" },
        { code: "612112", title: "Property Manager" },
        { code: "253411", title: "Psychiatrist", caveat: "Must provide evidence of Australian licence/registration or a statement outlining eligibility to obtain registration of licence to work in Australia" },
        { code: "272399", title: "Psychologists nec", caveat: "Must provide evidence of Australian licence/registration or a statement outlining eligibility to obtain registration of licence to work in Australia" },
        { code: "254412", title: "Registered Nurse (Aged Care)", caveat: "Must provide evidence of Australian licence/registration or a statement outlining eligibility to obtain registration of licence to work in Australia" },
        { code: "254413", title: "Registered Nurse (Child and Family Health)", caveat: "Must provide evidence of Australian licence/registration or a statement outlining eligibility to obtain registration of licence to work in Australia" },
        { code: "254414", title: "Registered Nurse (Community Health)", caveat: "Must provide evidence of Australian licence/registration or a statement outlining eligibility to obtain registration of licence to work in Australia" },
        { code: "254415", title: "Registered Nurse (Critical Care and Emergency)", caveat: "Must provide evidence of Australian licence/registration or a statement outlining eligibility to obtain registration of licence to work in Australia" },
        { code: "254416", title: "Registered Nurse (Developmental Disability)", caveat: "Must provide evidence of Australian licence/registration or a statement outlining eligibility to obtain registration of licence to work in Australia" },
        { code: "254417", title: "Registered Nurse (Disability and Rehabilitation)", caveat: "Must provide evidence of Australian licence/registration or a statement outlining eligibility to obtain registration of licence to work in Australia" },
        { code: "254421", title: "Registered Nurse (Medical Practice)", caveat: "Must provide evidence of Australian licence/registration or a statement outlining eligibility to obtain registration of licence to work in Australia" },
        { code: "254418", title: "Registered Nurse (Medical)", caveat: "Must provide evidence of Australian licence/registration or a statement outlining eligibility to obtain registration of licence to work in Australia" },
        { code: "254422", title: "Registered Nurse (Mental Health)", caveat: "Must provide evidence of Australian licence/registration or a statement outlining eligibility to obtain registration of licence to work in Australia" },
        { code: "254425", title: "Registered Nurse (Paediatrics)", caveat: "Must provide evidence of Australian licence/registration or a statement outlining eligibility to obtain registration of licence to work in Australia" },
        { code: "254423", title: "Registered Nurse (Perioperative)", caveat: "Must provide evidence of Australian licence/registration or a statement outlining eligibility to obtain registration of licence to work in Australia" },
        { code: "254424", title: "Registered Nurse (Surgical)", caveat: "Must provide evidence of Australian licence/registration or a statement outlining eligibility to obtain registration of licence to work in Australia" },
        { code: "254499", title: "Registered Nurses nec", caveat: "Must provide evidence of Australian licence/registration or a statement outlining eligibility to obtain registration of licence to work in Australia" },
        { code: "253112", title: "Resident Medical Officer", caveat: "Must provide evidence of Australian licence/registration or a statement outlining eligibility to obtain registration of licence to work in Australia" },
        { code: "411715", title: "Residential Care Officer" },
        { code: "333311", title: "Roof Tiler" },
        { code: "134311", title: "School Principal" },
        { code: "241411", title: "Secondary School Teacher", caveat: "Must provide evidence of Australian licence/registration or a statement outlining eligibility to obtain registration of licence to work in Australia" },
        { code: "231213", title: "Ship's Master", caveat: "Must provide evidence of Australian licence/registration or a statement outlining eligibility to obtain registration of licence to work in Australia" },
        { code: "321214", title: "Small Engine Mechanic" },
        { code: "272499", title: "Social Professionals nec" },
        { code: "272511", title: "Social Worker" },
        { code: "271311", title: "Solicitor", caveat: "Must provide evidence of Australian licence/registration or a statement outlining eligibility to obtain registration of licence to work in Australia" },
        { code: "251214", title: "Sonographer" },
        { code: "241599", title: "Special Education Teachers nec", caveat: "Must provide evidence of Australian licence/registration or a statement outlining eligibility to obtain registration of licence to work in Australia" },
        { code: "241511", title: "Special Needs Teacher", caveat: "Must provide evidence of Australian licence/registration or a statement outlining eligibility to obtain registration of licence to work in Australia" },
        { code: "139999", title: "Specialist Managers nec" },
        { code: "253311", title: "Specialist Physician (General Medicine)", caveat: "Must provide evidence of Australian licence/registration or a statement outlining eligibility to obtain registration of licence to work in Australia" },
        { code: "252712", title: "Speech Pathologist / Speech Language Therapist" },
        { code: "233214", title: "Structural Engineer" },
        { code: "272115", title: "Student Counsellor" },
        { code: "133611", title: "Supply and Distribution Manager" },
        { code: "312116", title: "Surveying or Spatial Science Technician" },
        { code: "232212", title: "Surveyor" },
        { code: "121221", title: "Vegetable Grower" },
        { code: "333411", title: "Wall and Floor Tiler" },
        { code: "322313", title: "Welder (First Class)" },
        { code: "134214", title: "Welfare Centre Manager" },
        { code: "272613", title: "Welfare Worker" },
        { code: "411716", title: "Youth Worker" },
      ],
    },
  ],
};
