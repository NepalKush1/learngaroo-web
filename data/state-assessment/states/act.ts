import type { ListEntry, Requirement, StateAssessmentData, StreamRule } from "../types";

// Australian Capital Territory: the ACT Nominated Migration Program
// Occupation List and the ACT nomination pathways for subclass 190 and 491,
// transcribed from act.gov.au/migration on 13 October 2026. The ACT's
// 2026-27 allocation hasn't been confirmed, but Canberra Matrix submissions
// are open and invitation rounds are scheduled, so these are the criteria in
// force (status "limited", as in data/state-nomination.ts).
// How to refresh: scripts/sources/STATE-ASSESSMENT-BRIEF.md.

const CHECKED_ON = "13 October 2026";
const MIGRATION = "https://www.act.gov.au/migration";
const NOMINATION_URL = `${MIGRATION}/skilled-migrants/act-government-nomination`;
const PATHWAYS_URL = `${NOMINATION_URL}/act-nomination-pathways`;
const HOW_TO_APPLY_URL = `${NOMINATION_URL}/how-to-apply-for-act-nomination`;
const ONE_PLACE_URL = `${NOMINATION_URL}/one-nomination-place-per-person-policy`;
const LIST_URL = `${MIGRATION}/skilled-migrants/act-nominated-migration-program-occupation-list`;
const RESIDENTS_190_URL = `${MIGRATION}/skilled-migrants/190-nomination-criteria/canberra-resident-applicant-eligibility`;
const OVERSEAS_190_URL = `${MIGRATION}/skilled-migrants/190-nomination-criteria/overseas-applicant-eligibility`;
const RESIDENTS_491_URL = `${MIGRATION}/skilled-migrants/491-nomination-criteria/491-nomination-canberra-resident-applicant-eligibility`;
const OVERSEAS_491_URL = `${MIGRATION}/skilled-migrants/491-nomination-criteria/491-nomination-overseas-applicant-eligibility`;
const MATRIX_URL = `${MIGRATION}/skilled-migrants/canberra-matrix`;
const MATRIX_RESIDENTS_URL = `${MATRIX_URL}/check-your-canberra-matrix-score-canberra-residents`;
const ROUND_URL = `${MIGRATION}/resources/canberra-matrix-invitation-round`;
const FEES_URL = `${MIGRATION}/resources/act-migration-application-fees`;

// ACT Nominated Migration Program Occupation List - October 2025 ("last
// updated on 10 October 2025", applies to every Canberra Matrix): 279
// occupations in 105 unit groups (the ACT publishes no total), with codes and
// titles exactly as printed. The 20 marked "(491 Only)" carry visas: ["491"].
// The same list applies to Canberra residents and overseas applicants.
const occupationList: ListEntry[] = [
  { code: "133111", title: "construction project manager" },
  { code: "133112", title: "project builder", visas: ["491"] },
  { code: "133211", title: "engineering manager" },
  { code: "133611", title: "supply and distribution manager" },
  { code: "133612", title: "procurement manager", visas: ["491"] },
  { code: "134111", title: "child care centre manager" },
  { code: "134211", title: "medical administrator" },
  { code: "134212", title: "nursing clinical director" },
  { code: "134213", title: "primary health organisation manager" },
  { code: "134214", title: "welfare centre manager" },
  { code: "134299", title: "health and welfare services managers (nec)" },
  { code: "135112", title: "ICT project manager" },
  { code: "135199", title: "ICT managers (nec)" },
  { code: "139911", title: "arts administrator or manager" },
  { code: "139912", title: "environmental manager" },
  { code: "139913", title: "laboratory manager" },
  { code: "139914", title: "quality assurance manager" },
  { code: "139915", title: "sports administrator", visas: ["491"] },
  { code: "139999", title: "specialist managers (nec)" },
  { code: "141111", title: "cafe or restaurant manager" },
  { code: "141311", title: "hotel or motel manager" },
  { code: "221111", title: "accountant (general)" },
  { code: "221112", title: "management accountant" },
  { code: "221113", title: "taxation accountant" },
  { code: "221211", title: "company secretary" },
  { code: "221213", title: "external auditor" },
  { code: "221214", title: "internal auditor" },
  { code: "224213", title: "health information manager" },
  { code: "232111", title: "architect" },
  { code: "232112", title: "landscape architect" },
  { code: "232212", title: "surveyor" },
  { code: "232611", title: "urban and regional planner" },
  { code: "233211", title: "civil engineer" },
  { code: "233212", title: "geotechnical engineer" },
  { code: "233213", title: "quantity surveyor" },
  { code: "233214", title: "structural engineer" },
  { code: "233215", title: "transport engineer" },
  { code: "233311", title: "electrical engineer" },
  { code: "233411", title: "electronics engineer" },
  { code: "233511", title: "industrial engineer" },
  { code: "233512", title: "mechanical engineer" },
  { code: "233513", title: "production or plant engineer" },
  { code: "233911", title: "aeronautical engineer" },
  { code: "233912", title: "agricultural engineer" },
  { code: "233913", title: "biomedical engineer" },
  { code: "233914", title: "engineering technologist" },
  { code: "233915", title: "environmental engineer" },
  { code: "233916", title: "naval architect" },
  { code: "233999", title: "engineering professionals (nec)" },
  { code: "234311", title: "conservation officer", visas: ["491"] },
  { code: "234312", title: "environmental consultant" },
  { code: "234313", title: "environmental research scientist" },
  { code: "234399", title: "environmental scientist (nec)" },
  { code: "234511", title: "life scientist (general)" },
  { code: "234599", title: "life scientists (nec)" },
  { code: "234611", title: "medical laboratory scientist" },
  { code: "234711", title: "veterinarian" },
  { code: "234914", title: "physicist" },
  { code: "234999", title: "natural and physical science professionals (nec)" },
  { code: "241111", title: "early childhood (pre-primary school) teacher" },
  { code: "241213", title: "primary school teacher" },
  { code: "241311", title: "middle school teacher (Aus) / intermediate school teacher (NZ)" },
  { code: "241411", title: "secondary school teacher" },
  { code: "242211", title: "vocational education teacher", visas: ["491"] },
  { code: "241511", title: "special needs teacher" },
  { code: "241512", title: "teacher of the hearing impaired" },
  { code: "241513", title: "teacher of the sight impaired" },
  { code: "241599", title: "special education teachers (nec)" },
  { code: "251111", title: "dietitian" },
  { code: "251112", title: "nutritionist" },
  { code: "251211", title: "medical diagnostic radiographer" },
  { code: "251212", title: "medical radiation therapist" },
  { code: "251213", title: "nuclear medicine technologist" },
  { code: "251214", title: "sonographer" },
  { code: "251311", title: "environmental health officer", visas: ["491"] },
  { code: "251312", title: "occupational health and safety adviser" },
  { code: "251411", title: "optometrist" },
  { code: "251412", title: "orthoptist" },
  { code: "251511", title: "hospital pharmacist" },
  { code: "251512", title: "industrial pharmacist" },
  { code: "251513", title: "retail pharmacist" },
  { code: "251911", title: "health promotion officer" },
  { code: "251912", title: "orthotist or prosthetist" },
  { code: "251999", title: "health diagnostic and promotion professionals (nec)" },
  { code: "252111", title: "chiropractor" },
  { code: "252112", title: "osteopath" },
  { code: "252211", title: "acupuncturist" },
  { code: "252213", title: "naturopath" },
  { code: "252214", title: "traditional Chinese medicine practitioner" },
  { code: "252299", title: "complementary health therapists (nec)" },
  { code: "252311", title: "dental specialist" },
  { code: "252312", title: "dentist", visas: ["491"] },
  { code: "252411", title: "occupational therapist" },
  { code: "252511", title: "physiotherapist" },
  { code: "252611", title: "podiatrist" },
  { code: "252711", title: "audiologist" },
  { code: "252712", title: "speech pathologist" },
  { code: "253111", title: "general practitioner" },
  { code: "253112", title: "resident medical officer" },
  { code: "253211", title: "anaesthetist", visas: ["491"] },
  { code: "253311", title: "specialist physician (general medicine)" },
  { code: "253312", title: "cardiologist" },
  { code: "253313", title: "clinical haematologist" },
  { code: "253314", title: "medical oncologist" },
  { code: "253315", title: "endocrinologist" },
  { code: "253316", title: "gastroenterologist" },
  { code: "253317", title: "intensive care specialist" },
  { code: "253318", title: "neurologist" },
  { code: "253321", title: "paediatrician" },
  { code: "253322", title: "renal medicine specialist" },
  { code: "253323", title: "rheumatologist" },
  { code: "253324", title: "thoracic medicine specialist" },
  { code: "253399", title: "specialist physicians (nec)" },
  { code: "253411", title: "psychiatrist" },
  { code: "253511", title: "surgeon (general)" },
  { code: "253512", title: "cardiothoracic surgeon" },
  { code: "253513", title: "neurosurgeon" },
  { code: "253514", title: "orthopaedic surgeon" },
  { code: "253515", title: "otorhinolaryngologist" },
  { code: "253516", title: "paediatric surgeon" },
  { code: "253517", title: "plastic and reconstructive surgeon" },
  { code: "253518", title: "urologist" },
  { code: "253521", title: "vascular surgeon" },
  { code: "253911", title: "dermatologist" },
  { code: "253912", title: "emergency medicine specialist" },
  { code: "253913", title: "obstetrician and gynaecologist" },
  { code: "253914", title: "ophthalmologist" },
  { code: "253915", title: "pathologist" },
  { code: "253917", title: "diagnostic and interventional radiologist" },
  { code: "253918", title: "radiation oncologist" },
  { code: "253999", title: "medical practitioners (nec)" },
  { code: "254111", title: "midwife" },
  { code: "254211", title: "nurse educator" },
  { code: "254212", title: "nurse researcher" },
  { code: "254311", title: "nurse manager" },
  { code: "254411", title: "nurse practitioner" },
  { code: "254412", title: "registered nurse (aged care)" },
  { code: "254413", title: "registered nurse (child and family health)" },
  { code: "254414", title: "registered nurse (community health)" },
  { code: "254415", title: "registered nurse (critical care and emergency)" },
  { code: "254416", title: "registered nurse (developmental disability)" },
  { code: "254417", title: "registered nurse (disability and rehabilitation)" },
  { code: "254418", title: "registered nurse (medical)" },
  { code: "254421", title: "registered nurse (medical practice)" },
  { code: "254422", title: "registered nurse (mental health)" },
  { code: "254423", title: "registered nurse (perioperative)" },
  { code: "254424", title: "registered nurse (surgical)" },
  { code: "254425", title: "registered nurse (paediatrics)" },
  { code: "254499", title: "registered nurses (nec)" },
  { code: "261111", title: "ICT business analyst" },
  { code: "261112", title: "systems analyst" },
  { code: "261311", title: "analyst programmer" },
  { code: "261312", title: "developer programmer" },
  { code: "261313", title: "software engineer" },
  { code: "261314", title: "software tester" },
  { code: "261399", title: "software and applications programmers (nec)" },
  { code: "262111", title: "database administrator" },
  { code: "262112", title: "ICT security specialist" },
  { code: "262113", title: "systems administrator" },
  { code: "263111", title: "computer network and systems engineer" },
  { code: "263112", title: "network administrator" },
  { code: "263113", title: "network analyst" },
  { code: "263211", title: "ICT quality assurance engineer" },
  { code: "263212", title: "ICT support engineer" },
  { code: "263213", title: "ICT systems test engineer" },
  { code: "263299", title: "ICT support and test engineers (nec)" },
  { code: "263311", title: "telecommunications engineer" },
  { code: "263312", title: "telecommunications network engineer" },
  { code: "271311", title: "solicitor" },
  { code: "272111", title: "careers counsellor" },
  { code: "272112", title: "drug and alcohol counsellor" },
  { code: "272113", title: "family and marriage counsellor" },
  { code: "272114", title: "rehabilitation counsellor" },
  { code: "272115", title: "student counsellor" },
  { code: "272199", title: "counsellors (nec)" },
  { code: "272311", title: "clinical psychologist" },
  { code: "272312", title: "educational psychologist" },
  { code: "272313", title: "organisational psychologist" },
  { code: "272314", title: "psychotherapist" },
  { code: "272399", title: "psychologists (nec)" },
  { code: "272511", title: "social worker" },
  { code: "272611", title: "community arts worker", visas: ["491"] },
  { code: "272612", title: "recreation officer" },
  { code: "272613", title: "welfare worker" },
  { code: "311211", title: "anaesthetic technician" },
  { code: "311212", title: "cardiac technician" },
  { code: "311213", title: "medical laboratory technician" },
  { code: "311214", title: "operating theatre technician", visas: ["491"] },
  { code: "311215", title: "pharmacy technician" },
  { code: "311216", title: "pathology collector", visas: ["491"] },
  { code: "311299", title: "medical technicians (nec)" },
  { code: "311411", title: "chemistry technician" },
  { code: "311412", title: "earth science technician" },
  { code: "311413", title: "life science technician" },
  { code: "311499", title: "science technicians (nec)" },
  { code: "312111", title: "architectural draftsperson" },
  { code: "312113", title: "building inspector" },
  { code: "312114", title: "construction estimator", visas: ["491"] },
  { code: "312116", title: "surveying or spatial science technician", visas: ["491"] },
  { code: "312199", title: "architectural, building and surveying technicians (nec)" },
  { code: "312211", title: "civil engineering draftsperson" },
  { code: "312212", title: "civil engineering technician" },
  { code: "312311", title: "electrical engineering draftsperson" },
  { code: "312312", title: "electrical engineering technician" },
  { code: "312511", title: "mechanical engineering draftsperson" },
  { code: "312512", title: "mechanical engineering technician" },
  { code: "312911", title: "maintenance planner", visas: ["491"] },
  { code: "312912", title: "metallurgical or materials technician" },
  { code: "312999", title: "building and engineering technicians (nec)", visas: ["491"] },
  { code: "313111", title: "hardware technician" },
  { code: "313112", title: "ICT customer support officer" },
  { code: "313113", title: "web administrator" },
  { code: "313199", title: "ICT support technicians (nec)" },
  { code: "313211", title: "radio communications technician" },
  { code: "313212", title: "telecommunications field engineer" },
  { code: "313213", title: "telecommunications network planner" },
  { code: "313214", title: "telecommunications technical officer or technologist" },
  { code: "321111", title: "automotive electrician" },
  { code: "321211", title: "motor mechanic (general)" },
  { code: "321212", title: "diesel motor mechanic" },
  { code: "321213", title: "motorcycle mechanic" },
  { code: "321214", title: "small engine mechanic" },
  { code: "323111", title: "aircraft maintenance engineer (avionics)" },
  { code: "323112", title: "aircraft maintenance engineer (mechanical)" },
  { code: "323113", title: "aircraft maintenance engineer" },
  { code: "323211", title: "fitter (general)" },
  { code: "323212", title: "fitter and turner" },
  { code: "323213", title: "fitter-welder" },
  { code: "323214", title: "metal machinist (first class)" },
  { code: "323299", title: "metal fitters and machinists (nec)" },
  { code: "323313", title: "locksmith" },
  { code: "323314", title: "precision instrument maker and repairer" },
  { code: "324111", title: "panelbeater" },
  { code: "324211", title: "vehicle body builder" },
  { code: "324212", title: "vehicle trimmer" },
  { code: "324311", title: "vehicle painter", visas: ["491"] },
  { code: "331111", title: "bricklayer" },
  { code: "331112", title: "stonemason" },
  { code: "331211", title: "carpenter and joiner" },
  { code: "331212", title: "carpenter" },
  { code: "331213", title: "joiner" },
  { code: "332111", title: "floor finisher", visas: ["491"] },
  { code: "332211", title: "painting trades worker" },
  { code: "333111", title: "glazier" },
  { code: "333211", title: "fibrous plasterer" },
  { code: "333212", title: "solid plasterer" },
  { code: "333311", title: "roof tiler" },
  { code: "333411", title: "wall and floor tiler" },
  { code: "334111", title: "plumber (general)" },
  { code: "334112", title: "airconditioning and mechanical services plumber" },
  { code: "334113", title: "drainer" },
  { code: "334114", title: "gasfitter" },
  { code: "334115", title: "roof plumber" },
  { code: "341111", title: "electrician (general)" },
  { code: "341112", title: "electrician (special class)" },
  { code: "341113", title: "lift mechanic" },
  { code: "342111", title: "airconditioning and refrigeration mechanic" },
  { code: "342211", title: "electrical linesworker", visas: ["491"] },
  { code: "342212", title: "technical cable jointer" },
  { code: "342411", title: "cabler (data and telecommunications)" },
  { code: "342413", title: "telecommunications linesworker" },
  { code: "351211", title: "butcher or smallgoods maker" },
  { code: "351311", title: "chef" },
  { code: "351411", title: "cook" },
  { code: "361311", title: "veterinary nurse" },
  { code: "411111", title: "ambulance officer" },
  { code: "411112", title: "intensive care ambulance paramedic" },
  { code: "411211", title: "dental hygienist", visas: ["491"] },
  { code: "411213", title: "dental technician" },
  { code: "411214", title: "dental therapist", visas: ["491"] },
  { code: "411311", title: "diversional therapist" },
  { code: "411411", title: "enrolled nurse" },
  { code: "411711", title: "community worker" },
  { code: "411712", title: "disabilities services officer" },
  { code: "411713", title: "family support worker" },
  { code: "411715", title: "residential care officer" },
  { code: "411716", title: "youth worker" },
  { code: "511111", title: "contract administrator" },
  { code: "511112", title: "program or project administrator" },
];

// ── Rules shared by several pathways ────────────────────────────────────

// Canberra residence: 6 months (190) or 3 months (491). The ACT also accepts
// living within a 30-minute commute in NSW, which the tool can't check. That
// alternative also carries the pathway's own Canberra work or business
// requirement (already in `requires`, so it changes no outcome), so that a
// Canberra resident who is short on residence sees that shortfall rather than
// the NSW check.
const canberraResidence = (months: number, canberraActivity: Requirement): Requirement[][] => [
  [{ kind: "living", where: "state", minMonths: months }],
  [
    canberraActivity,
    {
      kind: "manual",
      text: `You have lived for at least ${months} months in Canberra or within a 30-minute commute of it in NSW (for example Queanbeyan, Jerrabomberra or Googong), and your bank statements show ACT banking activity for that period`,
    },
  ],
];

const homeAffairsCriteria: Requirement = {
  kind: "manual",
  text: "You meet the Home Affairs criteria for the visa from the day you submit the Canberra Matrix until you are nominated, with an English test and skills assessment that are valid on both dates",
};
const onePlace: Requirement = {
  kind: "manual",
  text: "You haven't received ACT nomination before: the ACT offers one nomination place per person, and it won't invite you while you have an active ACT application",
};
// Subclass 190 only (residents and overseas applicants).
const english190: Requirement = {
  kind: "manual",
  text: "Proficient or Superior English (Home Affairs definitions), unless your nominated occupation is Chef (351311) or has an ANZSCO skill level of 3 to 5",
};
const residentCommitment: Requirement = {
  kind: "manual",
  text: "You sign a declaration committing to live and work in Canberra while your visa is processed and for at least two years from visa grant",
};
const overseasResidency: Requirement = {
  kind: "manual",
  text: "You and any migrating dependants (except children enrolled at school in the ACT) live overseas, haven't lived in Australia in the last 12 months, and hold no Australian visa or bridging visa other than a visitor visa",
};
const overseasExperience: Requirement = {
  kind: "manual",
  text: "Your experience is full-time work in your nominated occupation after you graduated, assessed as relevant by your assessing authority if it gives a points advice; your skills and experience are relevant to the ACT economy, and you hold any Australian registration or licence your occupation requires",
};
const employability: Requirement = {
  kind: "manual",
  text: "You attach an employment statement showing your research into the ACT labour market and that you are employable in Canberra, including recent job vacancies you are eligible for",
};
const overseasCommitment: Requirement = {
  kind: "manual",
  text: "You attach a commitment statement, in your own words, on why you want to live in Canberra, and sign a declaration to live and work in Canberra for at least two years from your arrival in Australia",
};
const settlementFunds: Requirement = {
  kind: "manual",
  text: "You have access to enough money to fund your migration and settlement in Canberra",
};
const smallBusinessOwner = (income: string): Requirement => ({
  kind: "manual",
  text: `You own at least 51% of a registered, profitable business actively operating in the ACT that has paid you a taxable income of at least ${income}, and you employ at least one Australian citizen, permanent resident or New Zealand citizen who lives in Canberra, one of whom has worked for you for at least 13 weeks at 20 hours a week or more`,
});
const smallBusinessTrading: Requirement = {
  kind: "manual",
  text: "To claim Small Business Owner points, the business has traded in Canberra for at least 6 months with at least $100,000 turnover in the last 6 months (10 points), or for at least 12 months with at least $200,000 turnover in the last 12 months (20 points). Sub-tenancy, ride-share, taxi, delivery and courier businesses, and an on-sold business previously used to qualify for ACT nomination, aren't eligible",
};

// ── Notes ───────────────────────────────────────────────────────────────

const matrixNote =
  "The ACT ranks Canberra Matrix submissions by score within each occupation, separately by visa subclass and residency status, and selects subclass 491 submissions first; the cut-off depends on demand, the places available and the number of invitations. Estimate your score with our Canberra Matrix calculator (/tools/canberra-matrix-calculator).";
const sectorsNote =
  "Submissions with a nominated occupation in a critical sector (the ACT names care, education, construction, renewables, experience and advanced technology) may be prioritised, and an occupation may be capped if nominations in a year far outstrip demand.";
const scheduleNote =
  "The ACT's 2026-27 allocation hasn't been confirmed. Its tentative schedule has a subclass 190-only round in the week starting 12 October 2026, then rounds in the weeks starting 25 January, 22 March and 24 May 2027, all subject to change.";
const feesNote =
  "Fees: A$27.50 (including GST) to submit a Canberra Matrix, paid within 7 days or the submission lapses, and A$357.50 (including GST) for the nomination application.";
const validityNote =
  "A Canberra Matrix lapses after six months without an invitation; updating it extends it by six months (up to 12 months from first submission) but ranks it as a new submission.";
const evidenceNote =
  "Every Matrix point you claim must be true on the day you submit or update the Matrix and backed by documents, or the nomination application is refused.";

export const actSignificantEconomicBenefit: StreamRule = {
  id: "act-significant-economic-benefit",
  name: "Significant Economic Benefit",
  visas: ["190", "491"],
  audience: "both",
  status: "limited",
  occupationLists: ["ha-190", "ha-491"],
  requires: [
    {
      kind: "stateInitiated",
      text: "The ACT Government initiates this pathway: it may invite you if it considers your employment of significant economic benefit to the Territory and you don't meet the current eligibility criteria. You can't request or apply for it",
    },
  ],
  notes: ["Invitations in this pathway can only be initiated by the ACT Government."],
  source: PATHWAYS_URL,
};

export const actAssessment: StateAssessmentData = {
  state: "australian-capital-territory",
  checkedOn: CHECKED_ON,
  settingsYear: "Current ACT criteria (2026-27 allocation not yet confirmed)",
  lists: [
    {
      id: "act-occupation-list",
      name: "ACT Nominated Migration Program Occupation List",
      visas: ["190", "491"],
      granularity: "occupation",
      entries: occupationList,
      programYear: "2025-26",
      anzsco: "2013",
      checkedOn: CHECKED_ON,
      source: LIST_URL,
      note: "Published as \"ACT Nominated Migration Program Occupation List - October 2025\" (formerly the ACT Critical Skills List), last updated 10 October 2025 and applied to every Canberra Matrix regardless of when it was submitted. One list for Canberra residents and overseas applicants; 20 occupations are marked 491 Only. The ACT reviews it around the start of each program year.",
    },
  ],
  streams: [
    {
      id: "act-190-residents",
      name: "Occupation List pathway: Canberra residents",
      visas: ["190"],
      audience: "onshore",
      status: "limited",
      occupationLists: ["act-occupation-list"],
      requires: [
        // 26 weeks of work in Canberra (about 6 months) at 30 hours a week.
        { kind: "working", where: "state", minMonths: 6, minHoursPerWeek: 30, occupation: "any" },
        {
          kind: "manual",
          text: "As an employee, you worked at least 30 hours a week in at least 26 of the 30 weeks before you submit the Matrix, in a genuine position paid at least the award or market rate and confirmed by your employer's statutory declaration. Unpaid internships, stipends, scholarships and volunteering don't count, and you can't work online or from a home office for an interstate employer",
        },
        {
          kind: "manual",
          text: "If you are self-employed (and not claiming Small Business Owner points), the test is income instead of hours: a taxable income of at least $1,175 a week in each of the 26 weeks before you submit the Matrix, and at least 12 months of ACT business activity on your ABN",
        },
        english190,
        { kind: "manual", text: "Your spouse or partner, if you have one, has lived in Canberra for at least six months or lives overseas" },
        residentCommitment,
        homeAffairsCriteria,
        onePlace,
      ],
      anyOf: canberraResidence(6, { kind: "working", where: "state", minMonths: 6, occupation: "any" }),
      notes: [matrixNote, sectorsNote, scheduleNote, evidenceNote, validityNote, feesNote],
      source: RESIDENTS_190_URL,
    },
    {
      id: "act-491-residents",
      name: "Occupation List pathway: Canberra residents",
      visas: ["491"],
      audience: "onshore",
      status: "limited",
      occupationLists: ["act-occupation-list"],
      requires: [
        // 13 weeks of work in Canberra (about 3 months) at 15 hours a week.
        { kind: "working", where: "state", minMonths: 3, minHoursPerWeek: 15, occupation: "any" },
        {
          kind: "manual",
          text: "As an employee, you worked at least 15 hours a week in at least 13 of the 15 weeks before you submit the Matrix, in a genuine position paid at least the award or market rate and confirmed by your employer's statutory declaration. Unpaid internships, stipends, scholarships and volunteering don't count, and you can't work online or from a home office for an interstate employer",
        },
        {
          kind: "manual",
          text: "If you are self-employed (and not claiming Small Business Owner points), the test is income instead of hours: a taxable income of at least $610 a week in at least 13 of the 15 weeks before you submit the Matrix, and at least 12 months of ACT business activity on your ABN",
        },
        { kind: "manual", text: "Your spouse or partner, if you have one, has lived in Canberra for at least three months or lives overseas" },
        residentCommitment,
        homeAffairsCriteria,
        onePlace,
      ],
      anyOf: canberraResidence(3, { kind: "working", where: "state", minMonths: 3, occupation: "any" }),
      notes: [matrixNote, sectorsNote, scheduleNote, evidenceNote, validityNote, feesNote],
      source: RESIDENTS_491_URL,
    },
    {
      id: "act-190-overseas",
      name: "Occupation List pathway: overseas residents",
      visas: ["190"],
      audience: "offshore",
      status: "limited",
      occupationLists: ["act-occupation-list"],
      requires: [
        { kind: "offshore", minMonths: 12 },
        { kind: "experience", minYears: 3, withinYears: 5 },
        overseasExperience,
        overseasResidency,
        employability,
        english190,
        overseasCommitment,
        settlementFunds,
        homeAffairsCriteria,
        onePlace,
      ],
      notes: [matrixNote, sectorsNote, scheduleNote, evidenceNote, validityNote, feesNote],
      source: OVERSEAS_190_URL,
    },
    {
      id: "act-491-overseas",
      name: "Occupation List pathway: overseas residents",
      visas: ["491"],
      audience: "offshore",
      status: "limited",
      occupationLists: ["act-occupation-list"],
      requires: [
        { kind: "offshore", minMonths: 12 },
        { kind: "experience", minYears: 1, withinYears: 5 },
        overseasExperience,
        overseasResidency,
        employability,
        overseasCommitment,
        settlementFunds,
        homeAffairsCriteria,
        onePlace,
      ],
      notes: [matrixNote, sectorsNote, scheduleNote, evidenceNote, validityNote, feesNote],
      source: OVERSEAS_491_URL,
    },
    {
      // Same criteria for both visas; the occupation only has to be on the
      // Home Affairs list for the visa.
      id: "act-doctorate-streamlined",
      name: "Doctorate Streamlined",
      visas: ["190", "491"],
      audience: "both",
      status: "limited",
      occupationLists: ["ha-190", "ha-491"],
      requires: [onePlace],
      anyOf: [
        // Canberra residents: living in Canberra, a research or professional
        // doctorate from an ACT university, and 12 months living in the ACT.
        [
          { kind: "living", where: "state", minMonths: 12 },
          { kind: "study", where: "state", minLevel: "doctorate" },
        ],
        // Interstate and overseas applicants: awarded in the last two years.
        [{ kind: "study", where: "state", minLevel: "doctorate", completedWithinMonths: 24 }],
      ],
      notes: [
        "For holders of a research or professional doctorate from an ACT university: Canberra residents who have lived in the ACT for at least 12 months, or interstate and overseas applicants awarded the doctorate in the last two years.",
        "No Canberra Matrix points, ACT list occupation or other ACT criteria (including the higher English requirement) are needed, the application is fee free, and invitations are issued automatically in every round.",
        "Your skills assessment, doctorate completion letter or award and SkillSelect EOI must be valid on the day you submit the Matrix.",
        scheduleNote,
      ],
      source: PATHWAYS_URL,
    },
    {
      id: "act-190-small-business-owner",
      name: "Small Business Owner",
      visas: ["190"],
      audience: "onshore",
      status: "limited",
      occupationLists: ["ha-190"],
      requires: [
        { kind: "business", where: "state" },
        smallBusinessOwner("$32,000 in the last six months"),
        smallBusinessTrading,
        english190,
        { kind: "manual", text: "Your spouse or partner, if you have one, has lived in Canberra for at least six months or lives overseas" },
        residentCommitment,
        homeAffairsCriteria,
        onePlace,
      ],
      anyOf: canberraResidence(6, { kind: "business", where: "state" }),
      notes: [
        "Your nominated occupation doesn't need to be on the ACT list if it is on the Home Affairs list for the visa, but you must meet every other ACT criterion for Canberra residents and claim Matrix points in the Small Business Owner category.",
        "The highest-ranked Small Business Owner Matrix submissions are invited; the cut-off depends on overall demand, the places available and the number of invitations, and subclass 491 submissions are selected first. Estimate your score with our Canberra Matrix calculator (/tools/canberra-matrix-calculator).",
        scheduleNote,
        evidenceNote,
        feesNote,
      ],
      source: PATHWAYS_URL,
    },
    {
      id: "act-491-small-business-owner",
      name: "Small Business Owner",
      visas: ["491"],
      audience: "onshore",
      status: "limited",
      occupationLists: ["ha-491"],
      requires: [
        { kind: "business", where: "state" },
        smallBusinessOwner("$16,000 in the last three months"),
        smallBusinessTrading,
        { kind: "manual", text: "Your spouse or partner, if you have one, has lived in Canberra for at least three months or lives overseas" },
        residentCommitment,
        homeAffairsCriteria,
        onePlace,
      ],
      anyOf: canberraResidence(3, { kind: "business", where: "state" }),
      notes: [
        "Your nominated occupation doesn't need to be on the ACT list if it is on the Home Affairs list for the visa, but you must meet every other ACT criterion for Canberra residents and claim Matrix points in the Small Business Owner category.",
        "The highest-ranked Small Business Owner Matrix submissions are invited; the cut-off depends on overall demand, the places available and the number of invitations, and subclass 491 submissions are selected first. Estimate your score with our Canberra Matrix calculator (/tools/canberra-matrix-calculator).",
        scheduleNote,
        evidenceNote,
        feesNote,
      ],
      source: PATHWAYS_URL,
    },
    actSignificantEconomicBenefit,
  ],
  summary:
    "The ACT's 2026-27 allocation hasn't been confirmed, but Canberra Matrix submissions are open and a subclass 190-only invitation round is scheduled for the week starting 12 October 2026. Apart from Doctorate Streamlined (and the ACT-initiated Significant Economic Benefit pathway, which you can't apply for), candidates are ranked by Canberra Matrix score, so meeting the criteria doesn't guarantee an invitation.",
  sources: [
    { label: "ACT Government nomination", url: NOMINATION_URL },
    { label: "ACT nomination pathways", url: PATHWAYS_URL },
    { label: "ACT Nominated Migration Program Occupation List", url: LIST_URL },
    { label: "190 nomination: Canberra resident applicant eligibility", url: RESIDENTS_190_URL },
    { label: "190 nomination: overseas applicant eligibility", url: OVERSEAS_190_URL },
    { label: "491 nomination: Canberra resident applicant eligibility", url: RESIDENTS_491_URL },
    { label: "491 nomination: overseas applicant eligibility", url: OVERSEAS_491_URL },
    { label: "Canberra Matrix", url: MATRIX_URL },
    { label: "Check your Canberra Matrix score (Canberra residents): Small Business Owner category", url: MATRIX_RESIDENTS_URL },
    { label: "How to apply for ACT nomination", url: HOW_TO_APPLY_URL },
    { label: "One Nomination Place per Person Policy", url: ONE_PLACE_URL },
    { label: "Canberra Matrix invitation round", url: ROUND_URL },
    { label: "ACT Migration application fees", url: FEES_URL },
  ],
};

// Significant Economic Benefit: the ACT may invite people whose employment it
// considers of significant economic benefit and who don't meet the current
// criteria; it can only be initiated by the ACT Government. It is kept out of
// actAssessment.streams on purpose: the engine treats a "manual" requirement
// as "check", which never stops a stream from fitting, so this stream would
// show as a match for every visitor who meets the Home Affairs basics. Add it
// to the streams once the engine can mark a stream as state-initiated (never
// met from the answers).
