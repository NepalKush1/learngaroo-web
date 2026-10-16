// ─────────────────────────────────────────────────────────────────────────
// OCCUPATIONS — one page per ANZSCO occupation at /occupations/[slug].
//
// Which visas an occupation can lead to depends on the skilled occupation
// lists it appears on:
//   MLTSSL  Medium and Long-term Strategic Skills List → 189, 190, 491, 485
//   STSOL   Short-term Skilled Occupation List         → 190, 491 (not 189)
//   ROL     Regional Occupation List                   → 491
//   CSOL    Core Skills Occupation List                → 482 Core Skills, 186 Direct Entry, 494
// Lists are checked against the Home Affairs legislative instruments on
// `occupationListsAsAt`. State nomination is handled per state in
// data/state-nomination.ts; link there rather than duplicating.
//
// Add occupations your clients actually ask about. Every entry needs a
// positive answer to "could we advise on this tomorrow?".
// ─────────────────────────────────────────────────────────────────────────

export const occupationListsAsAt = "12 October 2026";

export type AuthorityId =
  | "acs"
  | "cpa"
  | "ea"
  | "anmac"
  | "aitsl"
  | "vetassess"
  | "tra"
  | "aps"
  | "aasw"
  | "otc"
  | "apc"
  | "asmirt"
  | "medical-board"
  | "aaca"
  | "avbc"
  | "apharmc"
  | "acwa"
  | "acecqa";

export interface AssessingAuthority {
  id: AuthorityId;
  name: string;
  short: string;
  url: string;
  // What the assessment generally involves, in one or two sentences.
  pathway: string;
  // Typical indicative turnaround, worded loosely because it changes.
  timing: string;
}

export const authorities: Record<AuthorityId, AssessingAuthority> = {
  acecqa: {
    id: "acecqa",
    name: "Australian Children's Education & Care Quality Authority",
    short: "ACECQA",
    url: "https://www.acecqa.gov.au/qualifications-0/apply-migration-skills-assessment",
    pathway: "Assesses your early childhood education and care qualification, and may assess your employment experience, against the standard for the nominated occupation. It took over early childhood teacher assessments from AITSL for applications from 7 December 2024.",
    timing: "Aims for 80 calendar days from a complete application, but says recent volumes mean it is taking much longer.",
  },
  acs: {
    id: "acs",
    name: "Australian Computer Society",
    short: "ACS",
    url: "https://www.acs.org.au/msa/information-for-applicants.html",
    pathway: "Compares your ICT qualification and employment against the ANZSCO occupation. Non-ICT qualifications and no-qualification applicants can use the RPL pathway with more years of experience. Temporary Graduate applicants use the dedicated 485 skills assessment.",
    timing: "Usually several weeks; priority processing available for a fee.",
  },
  cpa: {
    id: "cpa",
    name: "CPA Australia, Chartered Accountants ANZ or the Institute of Public Accountants",
    short: "CPA / CA ANZ / IPA",
    url: "https://www.cpaaustralia.com.au/become-a-cpa/migration-assessment",
    pathway: "A qualification assessment maps your degree to the required competency areas; an optional skilled employment assessment counts experience for points. English evidence is required.",
    timing: "Typically a few weeks once documents are complete.",
  },
  ea: {
    id: "ea",
    name: "Engineers Australia",
    short: "Engineers Australia",
    url: "https://www.engineersaustralia.org.au/credentials/migration-skills-assessment",
    pathway: "Accredited degrees (Washington, Sydney or Dublin Accord) are assessed on the qualification; all others submit a Competency Demonstration Report (CDR) with three career episodes.",
    timing: "Several weeks to a few months; fast-track available.",
  },
  anmac: {
    id: "anmac",
    name: "Australian Nursing and Midwifery Accreditation Council",
    short: "ANMAC",
    url: "https://www.anmac.org.au/skilled-migration-services",
    pathway: "Requires current AHPRA registration (or evidence you have applied) plus qualification and employment evidence. Modified streams exist for nurses already registered in Australia.",
    timing: "Full assessments can take a few months; modified streams are quicker.",
  },
  aitsl: {
    id: "aitsl",
    name: "Australian Institute for Teaching and School Leadership",
    short: "AITSL",
    url: "https://www.aitsl.edu.au/migrate-to-australia",
    pathway: "Assesses a teaching qualification of at least four years' study with supervised teaching practice, plus English at the required level unless exempt.",
    timing: "Around 10 weeks from a complete application.",
  },
  vetassess: {
    id: "vetassess",
    name: "VETASSESS",
    short: "VETASSESS",
    url: "https://www.vetassess.com.au/skills-assessment-for-migration",
    pathway: "Groups occupations by the qualification level and years of highly relevant post-qualification employment required. Employment must match the ANZSCO tasks closely.",
    timing: "Standard processing is several weeks; priority processing is available.",
  },
  tra: {
    id: "tra",
    name: "Trades Recognition Australia",
    short: "TRA",
    url: "https://www.dewr.gov.au/trades-recognition-australia",
    pathway: "The pathway depends on where you trained and your visa: Migration Skills Assessment for offshore tradespeople, Job Ready Program for Australian graduates, and OSAP for some countries with a practical assessment.",
    timing: "Varies widely by pathway; the Job Ready Program runs over 12 months of employment.",
  },
  aps: {
    id: "aps",
    name: "Australian Psychological Society",
    short: "APS",
    url: "https://psychology.org.au/membership/migration-assessment",
    pathway: "Assesses whether your psychology qualifications are comparable to Australian accredited standards; AHPRA registration is a separate step.",
    timing: "Several weeks once complete.",
  },
  aasw: {
    id: "aasw",
    name: "Australian Association of Social Workers",
    short: "AASW",
    url: "https://www.aasw.asn.au/careers-study/migration-assessment",
    pathway: "Assesses the social work qualification for equivalence to an Australian accredited degree, including field placement hours, plus English.",
    timing: "Around two to three months.",
  },
  otc: {
    id: "otc",
    name: "Occupational Therapy Council",
    short: "OTC",
    url: "https://www.otcouncil.com.au/",
    pathway: "Desktop audit of qualifications and, where needed, a written assessment and supervised practice. Leads to AHPRA registration.",
    timing: "Several months for the full process.",
  },
  apc: {
    id: "apc",
    name: "Australian Physiotherapy Council",
    short: "APC",
    url: "https://physiocouncil.com.au/",
    pathway: "Eligibility assessment, then written and clinical assessments unless your qualification is substantially equivalent. Leads to AHPRA registration.",
    timing: "Often a year or more including the clinical stage.",
  },
  asmirt: {
    id: "asmirt",
    name: "Australian Society of Medical Imaging and Radiation Therapy",
    short: "ASMIRT",
    url: "https://www.asmirt.org/",
    pathway: "Assesses the qualification and clinical experience against the Australian professional capabilities; AHPRA registration follows.",
    timing: "Several weeks to a few months.",
  },
  "medical-board": {
    id: "medical-board",
    name: "Medical Board of Australia",
    short: "Medical Board",
    url: "https://www.medicalboard.gov.au/registration/international-medical-graduates.aspx",
    pathway: "International medical graduates follow the competent authority, standard or specialist pathway depending on where they qualified, leading to registration with AHPRA.",
    timing: "Depends on the pathway; the standard pathway includes AMC examinations.",
  },
  aaca: {
    id: "aaca",
    name: "Architects Accreditation Council of Australia",
    short: "AACA",
    url: "https://www.aaca.org.au/",
    pathway: "Overseas qualifications assessment for migration, separate from the registration pathway.",
    timing: "Several weeks.",
  },
  avbc: {
    id: "avbc",
    name: "Australasian Veterinary Boards Council",
    short: "AVBC",
    url: "https://avbc.asn.au/",
    pathway: "Assesses the veterinary degree; graduates of non-accredited programs sit the AVE examinations.",
    timing: "Varies; examinations run on fixed dates.",
  },
  apharmc: {
    id: "apharmc",
    name: "Australian Pharmacy Council",
    short: "APharmC",
    url: "https://www.pharmacycouncil.org.au/",
    pathway: "Skills assessment for migration plus eligibility checks and examinations for registration.",
    timing: "Several weeks for the migration assessment.",
  },
  acwa: {
    id: "acwa",
    // The name Home Affairs uses for this assessing authority on its skilled occupation list.
    name: "Community Work Australia",
    short: "Community Work Australia",
    url: "https://www.acwa.org.au/",
    pathway: "Assesses the community services qualification and relevant employment.",
    timing: "A few weeks once complete.",
  },
};

export interface Occupation {
  slug: string;
  anzsco: string;
  title: string;
  // Short plain-English description of the work.
  description: string;
  // Field used for grouping and search.
  field: "ICT" | "Engineering" | "Accounting & finance" | "Health" | "Teaching" | "Trades" | "Hospitality" | "Business & management" | "Community services" | "Design & construction";
  authority: AuthorityId;
  lists: { mltssl?: boolean; stsol?: boolean; rol?: boolean; csol?: boolean };
  // Skill level under ANZSCO (1 = bachelor degree or higher).
  skillLevel: 1 | 2 | 3 | 4;
  // True when the occupation sits in a sector prioritised under Ministerial
  // Direction 122 (healthcare, teaching, construction, agriculture, resources).
  prioritySector?: boolean;
  // Registration or licensing needed to work in Australia.
  registration?: string;
  // Anything a client would want to know before relying on this occupation.
  notes?: string[];
}

export const occupations: Occupation[] = [
  // ── ICT ────────────────────────────────────────────────────────────
  { slug: "software-engineer-261313", anzsco: "261313", title: "Software Engineer", field: "ICT", authority: "acs", skillLevel: 1, lists: { mltssl: true, csol: true },
    description: "Designs, develops, tests and maintains software systems and applications.",
    notes: ["One of the largest EOI queues in SkillSelect, so 189 invitations have gone to high scores. State nomination and employer sponsorship are the realistic routes for many applicants."] },
  { slug: "developer-programmer-261312", anzsco: "261312", title: "Developer Programmer", field: "ICT", authority: "acs", skillLevel: 1, lists: { mltssl: true, csol: true },
    description: "Writes, tests and documents program code to meet specifications." },
  { slug: "analyst-programmer-261311", anzsco: "261311", title: "Analyst Programmer", field: "ICT", authority: "acs", skillLevel: 1, lists: { mltssl: true, csol: true },
    description: "Analyses requirements and designs, writes and tests programs." },
  { slug: "ict-business-analyst-261111", anzsco: "261111", title: "ICT Business Analyst", field: "ICT", authority: "acs", skillLevel: 1, lists: { mltssl: true, csol: true },
    description: "Identifies business needs and designs ICT solutions and processes to meet them." },
  { slug: "systems-analyst-261112", anzsco: "261112", title: "Systems Analyst", field: "ICT", authority: "acs", skillLevel: 1, lists: { mltssl: true, csol: true },
    description: "Evaluates and designs information systems to improve business processes." },
  { slug: "ict-security-specialist-262112", anzsco: "262112", title: "ICT Security Specialist", field: "ICT", authority: "acs", skillLevel: 1, lists: { mltssl: true, csol: true },
    description: "Designs and manages information security controls, policies and incident response." },
  { slug: "computer-network-and-systems-engineer-263111", anzsco: "263111", title: "Computer Network and Systems Engineer", field: "ICT", authority: "acs", skillLevel: 1, lists: { mltssl: true, csol: true },
    description: "Plans, develops and maintains network and systems infrastructure." },
  { slug: "ict-project-manager-135112", anzsco: "135112", title: "ICT Project Manager", field: "ICT", authority: "acs", skillLevel: 1, lists: { stsol: true, csol: true },
    description: "Plans and directs ICT projects, resources and delivery.",
    notes: ["On the STSOL, so not available for subclass 189 or the 485 Post-Vocational stream. State nomination (190, 491) and employer sponsorship remain open."] },
  { slug: "ict-support-engineer-263212", anzsco: "263212", title: "ICT Support Engineer", field: "ICT", authority: "acs", skillLevel: 1, lists: { stsol: true, csol: true },
    description: "Provides technical support, maintenance and troubleshooting for ICT systems." },

  // ── Engineering ────────────────────────────────────────────────────
  { slug: "civil-engineer-233211", anzsco: "233211", title: "Civil Engineer", field: "Engineering", authority: "ea", skillLevel: 1, prioritySector: true, lists: { mltssl: true, csol: true },
    description: "Plans, designs and oversees construction of infrastructure such as roads, bridges and water systems.",
    notes: ["Construction is a priority sector under Ministerial Direction 122, which can mean faster visa processing once invited."] },
  { slug: "structural-engineer-233214", anzsco: "233214", title: "Structural Engineer", field: "Engineering", authority: "ea", skillLevel: 1, prioritySector: true, lists: { mltssl: true, csol: true },
    description: "Analyses and designs structures to withstand loads and environmental conditions." },
  { slug: "mechanical-engineer-233512", anzsco: "233512", title: "Mechanical Engineer", field: "Engineering", authority: "ea", skillLevel: 1, lists: { mltssl: true, csol: true },
    description: "Designs, develops and maintains mechanical systems, machines and plant." },
  { slug: "electrical-engineer-233311", anzsco: "233311", title: "Electrical Engineer", field: "Engineering", authority: "ea", skillLevel: 1, lists: { mltssl: true, csol: true },
    description: "Designs and develops electrical systems, equipment and power distribution." },
  { slug: "production-or-plant-engineer-233513", anzsco: "233513", title: "Production or Plant Engineer", field: "Engineering", authority: "ea", skillLevel: 1, lists: { mltssl: true, csol: true },
    description: "Plans and manages production processes, plant layout and efficiency." },
  { slug: "engineering-technologist-233914", anzsco: "233914", title: "Engineering Technologist", field: "Engineering", authority: "ea", skillLevel: 1, lists: { mltssl: true, csol: true },
    description: "Applies engineering technology to design, development and operations.",
    notes: ["A common nominated occupation for engineering graduates whose work spans several disciplines; Engineers Australia assesses against the technologist competency level."] },
  { slug: "telecommunications-network-engineer-263312", anzsco: "263312", title: "Telecommunications Network Engineer", field: "Engineering", authority: "ea", skillLevel: 1, lists: { mltssl: true, csol: true },
    description: "Designs and maintains telecommunications networks and systems." },
  { slug: "civil-engineering-draftsperson-312211", anzsco: "312211", title: "Civil Engineering Draftsperson", field: "Engineering", authority: "ea", skillLevel: 2, prioritySector: true, lists: { mltssl: true, csol: true },
    description: "Prepares detailed drawings and plans for civil engineering projects.",
    notes: ["Home Affairs lists Engineers Australia or VETASSESS as the assessing authority for this occupation."] },

  // ── Accounting & finance ───────────────────────────────────────────
  { slug: "accountant-general-221111", anzsco: "221111", title: "Accountant (General)", field: "Accounting & finance", authority: "cpa", skillLevel: 1, lists: { mltssl: true, csol: true },
    description: "Prepares and analyses financial records, budgets, tax and compliance reporting.",
    notes: ["Very large EOI queue; 189 invitations have been rare in recent rounds. Most successful applicants rely on state nomination, a Professional Year, higher English or employer sponsorship."] },
  { slug: "management-accountant-221112", anzsco: "221112", title: "Management Accountant", field: "Accounting & finance", authority: "cpa", skillLevel: 1, lists: { mltssl: true, csol: true },
    description: "Provides financial analysis, costing and planning to support management decisions." },
  { slug: "external-auditor-221213", anzsco: "221213", title: "External Auditor", field: "Accounting & finance", authority: "cpa", skillLevel: 1, lists: { mltssl: true, csol: true },
    description: "Examines financial statements and controls for compliance and accuracy." },
  { slug: "financial-investment-adviser-222311", anzsco: "222311", title: "Financial Investment Adviser", field: "Accounting & finance", authority: "vetassess", skillLevel: 1, lists: { stsol: true, csol: true },
    description: "Advises clients on investments, superannuation and financial planning." },

  // ── Health ─────────────────────────────────────────────────────────
  { slug: "registered-nurse-aged-care-254412", anzsco: "254412", title: "Registered Nurse (Aged Care)", field: "Health", authority: "anmac", skillLevel: 1, prioritySector: true, lists: { mltssl: true, csol: true }, registration: "AHPRA registration as a Registered Nurse",
    description: "Provides nursing care to older people in residential and community settings.",
    notes: ["Healthcare is a priority sector under Ministerial Direction 122 and nursing occupations have consistently been invited at the 65 to 70 point range in recent 189 rounds."] },
  { slug: "registered-nurse-mental-health-254422", anzsco: "254422", title: "Registered Nurse (Mental Health)", field: "Health", authority: "anmac", skillLevel: 1, prioritySector: true, lists: { mltssl: true, csol: true }, registration: "AHPRA registration as a Registered Nurse",
    description: "Provides nursing care to people with mental health conditions." },
  { slug: "registered-nurse-medical-254418", anzsco: "254418", title: "Registered Nurse (Medical)", field: "Health", authority: "anmac", skillLevel: 1, prioritySector: true, lists: { mltssl: true, csol: true }, registration: "AHPRA registration as a Registered Nurse",
    description: "Provides nursing care to patients in medical wards and units." },
  { slug: "registered-nurses-nec-254499", anzsco: "254499", title: "Registered Nurses nec", field: "Health", authority: "anmac", skillLevel: 1, prioritySector: true, lists: { mltssl: true, csol: true }, registration: "AHPRA registration as a Registered Nurse",
    description: "Registered nurses working in specialties not elsewhere classified." },
  { slug: "enrolled-nurse-411411", anzsco: "411411", title: "Enrolled Nurse", field: "Health", authority: "anmac", skillLevel: 2, prioritySector: true, lists: { stsol: true, csol: true }, registration: "AHPRA registration as an Enrolled Nurse",
    description: "Provides nursing care under the supervision of registered nurses." },
  { slug: "general-practitioner-253111", anzsco: "253111", title: "General Practitioner", field: "Health", authority: "medical-board", skillLevel: 1, prioritySector: true, lists: { mltssl: true, csol: true }, registration: "AHPRA medical registration",
    description: "Diagnoses and treats patients in general practice settings." },
  { slug: "physiotherapist-252511", anzsco: "252511", title: "Physiotherapist", field: "Health", authority: "apc", skillLevel: 1, prioritySector: true, lists: { mltssl: true, csol: true }, registration: "AHPRA registration as a Physiotherapist",
    description: "Assesses and treats movement disorders and physical conditions." },
  { slug: "occupational-therapist-252411", anzsco: "252411", title: "Occupational Therapist", field: "Health", authority: "otc", skillLevel: 1, prioritySector: true, lists: { mltssl: true, csol: true }, registration: "AHPRA registration as an Occupational Therapist",
    description: "Helps people participate in daily activities after injury, illness or disability." },
  { slug: "medical-diagnostic-radiographer-251211", anzsco: "251211", title: "Medical Diagnostic Radiographer", field: "Health", authority: "asmirt", skillLevel: 1, prioritySector: true, lists: { mltssl: true, csol: true }, registration: "AHPRA registration",
    description: "Operates imaging equipment to produce diagnostic images." },
  { slug: "clinical-psychologist-272311", anzsco: "272311", title: "Clinical Psychologist", field: "Health", authority: "aps", skillLevel: 1, prioritySector: true, lists: { mltssl: true, csol: true }, registration: "AHPRA registration with clinical endorsement",
    description: "Assesses and treats psychological and mental health conditions." },
  { slug: "hospital-pharmacist-251511", anzsco: "251511", title: "Hospital Pharmacist", field: "Health", authority: "apharmc", skillLevel: 1, prioritySector: true, lists: { stsol: true, csol: true }, registration: "AHPRA registration as a Pharmacist",
    description: "Prepares and dispenses medicines and advises on their use in hospitals." },
  { slug: "veterinarian-234711", anzsco: "234711", title: "Veterinarian", field: "Health", authority: "avbc", skillLevel: 1, lists: { mltssl: true, csol: true }, registration: "State or territory veterinary board registration",
    description: "Diagnoses and treats animal diseases and injuries." },

  // ── Teaching ───────────────────────────────────────────────────────
  { slug: "early-childhood-pre-primary-school-teacher-241111", anzsco: "241111", title: "Early Childhood (Pre-primary School) Teacher", field: "Teaching", authority: "acecqa", skillLevel: 1, prioritySector: true, lists: { mltssl: true, csol: true }, registration: "Teacher registration in the state or territory where you work",
    description: "Teaches children aged three to five in early learning settings.",
    notes: ["Among the most-invited occupations for subclass 189 in recent rounds, reflecting national shortages."] },
  { slug: "secondary-school-teacher-241411", anzsco: "241411", title: "Secondary School Teacher", field: "Teaching", authority: "aitsl", skillLevel: 1, prioritySector: true, lists: { mltssl: true, csol: true }, registration: "Teacher registration in the state or territory where you work",
    description: "Teaches one or more subjects to secondary students." },
  { slug: "primary-school-teacher-241213", anzsco: "241213", title: "Primary School Teacher", field: "Teaching", authority: "aitsl", skillLevel: 1, prioritySector: true, lists: { stsol: true, csol: true }, registration: "Teacher registration in the state or territory where you work",
    description: "Teaches the primary curriculum to children aged five to twelve.",
    notes: ["On the STSOL, so subclass 189 is not available; state nomination and employer sponsorship are the usual routes."] },
  { slug: "special-education-teachers-nec-241599", anzsco: "241599", title: "Special Education Teachers nec", field: "Teaching", authority: "aitsl", skillLevel: 1, prioritySector: true, lists: { mltssl: true, csol: true }, registration: "Teacher registration in the state or territory where you work",
    description: "Teaches students with learning difficulties, disabilities or special needs." },

  // ── Trades ─────────────────────────────────────────────────────────
  { slug: "electrician-general-341111", anzsco: "341111", title: "Electrician (General)", field: "Trades", authority: "tra", skillLevel: 3, prioritySector: true, lists: { mltssl: true, csol: true }, registration: "State or territory electrical licence (an Offshore Technical Skills Record may be needed first)",
    description: "Installs, tests and maintains electrical wiring, equipment and systems." },
  { slug: "plumber-general-334111", anzsco: "334111", title: "Plumber (General)", field: "Trades", authority: "tra", skillLevel: 3, prioritySector: true, lists: { mltssl: true, csol: true }, registration: "State or territory plumbing licence",
    description: "Installs and maintains water, drainage, gas and sanitary systems." },
  { slug: "carpenter-331212", anzsco: "331212", title: "Carpenter", field: "Trades", authority: "tra", skillLevel: 3, prioritySector: true, lists: { mltssl: true, csol: true },
    description: "Constructs, erects and repairs timber structures and fixtures." },
  { slug: "motor-mechanic-general-321211", anzsco: "321211", title: "Motor Mechanic (General)", field: "Trades", authority: "tra", skillLevel: 3, lists: { mltssl: true, csol: true },
    description: "Services and repairs the mechanical parts of motor vehicles." },
  { slug: "welder-first-class-322313", anzsco: "322313", title: "Welder (First Class)", field: "Trades", authority: "tra", skillLevel: 3, prioritySector: true, lists: { mltssl: true, csol: true },
    description: "Joins metal parts using welding techniques to specification." },
  { slug: "chef-351311", anzsco: "351311", title: "Chef", field: "Hospitality", authority: "tra", skillLevel: 2, lists: { mltssl: true, csol: true },
    description: "Plans menus, prepares and cooks food and supervises kitchen staff.",
    notes: ["A large EOI queue and strong employer demand: subclass 482 sponsorship and regional 494 nominations are common for chefs."] },
  { slug: "cook-351411", anzsco: "351411", title: "Cook", field: "Hospitality", authority: "tra", skillLevel: 3, lists: { stsol: true, csol: true },
    description: "Prepares, seasons and cooks food in restaurants and other establishments.",
    notes: ["On the STSOL and CSOL but not the MLTSSL, so subclass 189 is not available."] },
  { slug: "baker-351111", anzsco: "351111", title: "Baker", field: "Hospitality", authority: "tra", skillLevel: 3, lists: { stsol: true, csol: true },
    description: "Prepares and bakes bread, pastries and other baked goods." },
  { slug: "hairdresser-391111", anzsco: "391111", title: "Hairdresser", field: "Trades", authority: "tra", skillLevel: 3, lists: { stsol: true, csol: true },
    description: "Cuts, styles, colours and treats hair." },

  // ── Business, design and community ─────────────────────────────────
  { slug: "construction-project-manager-133111", anzsco: "133111", title: "Construction Project Manager", field: "Design & construction", authority: "vetassess", skillLevel: 1, prioritySector: true, lists: { mltssl: true, csol: true },
    description: "Plans, organises and controls construction projects from start to finish." },
  { slug: "architect-232111", anzsco: "232111", title: "Architect", field: "Design & construction", authority: "aaca", skillLevel: 1, lists: { mltssl: true, csol: true }, registration: "State or territory architect registration to use the title",
    description: "Designs buildings and oversees their construction." },
  { slug: "management-consultant-224711", anzsco: "224711", title: "Management Consultant", field: "Business & management", authority: "vetassess", skillLevel: 1, lists: { mltssl: true, csol: true },
    description: "Advises organisations on strategy, structure, operations and efficiency." },
  { slug: "marketing-specialist-225113", anzsco: "225113", title: "Marketing Specialist", field: "Business & management", authority: "vetassess", skillLevel: 1, lists: { stsol: true, csol: true },
    description: "Develops and implements marketing strategies and campaigns.",
    notes: ["VETASSESS requires closely matching employment; generic marketing roles are often assessed as a different occupation."] },
  { slug: "cafe-or-restaurant-manager-141111", anzsco: "141111", title: "Cafe or Restaurant Manager", field: "Hospitality", authority: "vetassess", skillLevel: 2, lists: { stsol: true, csol: true },
    description: "Organises and controls the operations of cafes and restaurants." },
  { slug: "social-worker-272511", anzsco: "272511", title: "Social Worker", field: "Community services", authority: "aasw", skillLevel: 1, prioritySector: true, lists: { mltssl: true, csol: true },
    description: "Supports individuals, families and communities facing social challenges." },
  { slug: "community-worker-411711", anzsco: "411711", title: "Community Worker", field: "Community services", authority: "acwa", skillLevel: 2, lists: { stsol: true, csol: true },
    description: "Facilitates community programs and supports people to access services." },
];

export function getOccupationBySlug(slug: string): Occupation | undefined {
  return occupations.find((occupation) => occupation.slug === slug);
}

export const occupationFields = [...new Set(occupations.map((o) => o.field))];

// Which of our visa services an occupation can lead to, derived from its lists.
export function visaOptionsFor(occupation: Occupation) {
  const { mltssl, stsol, rol, csol } = occupation.lists;
  const pointsTested = mltssl || stsol || rol;
  return [
    { subclass: "189", name: "Skilled Independent", eligible: Boolean(mltssl), note: mltssl ? "Points-tested, no nomination needed" : "Only MLTSSL occupations", href: "/services/skilled-visas" },
    { subclass: "190", name: "Skilled Nominated", eligible: Boolean(mltssl || stsol), note: "Needs state or territory nomination", href: "/state-nomination" },
    { subclass: "491", name: "Skilled Work Regional", eligible: Boolean(pointsTested), note: "Regional nomination or family sponsorship", href: "/state-nomination" },
    { subclass: "485", name: "Temporary Graduate", eligible: Boolean(mltssl), note: mltssl ? "Post-Vocational stream needs an MLTSSL occupation" : "Post-Higher Education stream does not use the lists", href: "/services/student-visas" },
    { subclass: "482", name: "Skills in Demand (Core Skills)", eligible: Boolean(csol), note: "Employer sponsorship, CSOL occupation", href: "/services/employer-sponsored-visas" },
    { subclass: "186", name: "Employer Nomination (Direct Entry)", eligible: Boolean(csol), note: "Employer nomination, 3 years' experience", href: "/services/employer-sponsored-visas" },
    { subclass: "494", name: "Skilled Employer Sponsored Regional", eligible: Boolean(csol), note: "Regional employer sponsorship", href: "/services/employer-sponsored-visas" },
  ];
}
