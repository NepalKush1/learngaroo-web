// ─────────────────────────────────────────────────────────────────────────
// CANBERRA MATRIX — the ACT Government's own scoring used to rank
// nomination candidates for subclass 190 and 491. One option per category.
// Transcribed from act.gov.au "Check your Canberra Matrix score" pages for
// Canberra residents and overseas applicants on `canberraMatrixAsAt`.
// The same points apply to 190 and 491; only eligibility criteria differ.
// ─────────────────────────────────────────────────────────────────────────

export const canberraMatrixAsAt = "12 October 2026";
export const canberraMatrixUrls = {
  residents: "https://www.act.gov.au/migration/skilled-migrants/canberra-matrix/check-your-canberra-matrix-score-canberra-residents",
  overseas: "https://www.act.gov.au/migration/skilled-migrants/canberra-matrix/check-your-canberra-matrix-score-overseas-applicants",
  program: "https://www.act.gov.au/migration/skilled-migrants/act-government-nomination",
};

export interface MatrixOption {
  value: string;
  label: string;
  points: number;
}

export interface MatrixCategory {
  id: string;
  label: string;
  help?: string;
  options: MatrixOption[];
}

export interface MatrixStream {
  id: "residents" | "overseas";
  name: string;
  summary: string;
  categories: MatrixCategory[];
}

const english: MatrixCategory = {
  id: "english",
  label: "Your English proficiency",
  options: [
    { value: "superior", label: "Superior English", points: 15 },
    { value: "proficient", label: "Proficient English", points: 10 },
    { value: "competent", label: "Competent English", points: 0 },
  ],
};

const spouseEnglish: MatrixCategory = {
  id: "spouse-english",
  label: "Spouse or partner English",
  options: [
    { value: "superior", label: "Superior or Proficient English", points: 5 },
    { value: "competent", label: "Competent English", points: 0 },
    { value: "na", label: "Not applicable (no partner, or partner is a citizen or permanent resident)", points: 0 },
  ],
};

const occupationList: MatrixCategory = {
  id: "occupation",
  label: "Nominated occupation",
  options: [
    { value: "on-list", label: "On the current ACT Nominated Migration Program Occupation List", points: 20 },
    { value: "off-list", label: "Not on the list", points: 0 },
  ],
};

const qualification: MatrixCategory = {
  id: "qualification",
  label: "Highest tertiary qualification",
  options: [
    { value: "phd", label: "Doctoral degree", points: 20 },
    { value: "masters", label: "Master's degree", points: 15 },
    { value: "bachelor", label: "Bachelor's degree or trade certificate", points: 10 },
    { value: "diploma", label: "Diploma", points: 5 },
    { value: "na", label: "Not applicable", points: 0 },
  ],
};

const actStudy = (help: string): MatrixCategory => ({
  id: "act-study",
  label: "Years of study at an ACT tertiary institution",
  help,
  options: [
    { value: "4", label: "Four years or more", points: 20 },
    { value: "3", label: "Three years", points: 15 },
    { value: "2", label: "Two years", points: 10 },
    { value: "1", label: "One year", points: 5 },
    { value: "na", label: "Not applicable", points: 0 },
  ],
});

export const canberraMatrix: MatrixStream[] = [
  {
    id: "residents",
    name: "Canberra residents",
    summary: "For people currently living in the ACT. Residence and employment in Canberra carry the most weight.",
    categories: [
      {
        id: "residence",
        label: "Length of current ACT residence (last 8 years)",
        help: "Continuous residence proven by bank statements. Periods living, studying or working interstate generally break the period.",
        options: [
          { value: "5", label: "Five years or more", points: 25 },
          { value: "4", label: "Four to five years", points: 20 },
          { value: "3", label: "Three to four years", points: 15 },
          { value: "2", label: "Two to three years", points: 10 },
          { value: "1", label: "One to two years", points: 5 },
          { value: "0", label: "Less than one year", points: 0 },
        ],
      },
      english,
      spouseEnglish,
      occupationList,
      {
        id: "business",
        label: "Small business owner in Canberra",
        help: "Majority owner of a trading ACT business. Taxable income thresholds differ for 190 and 491.",
        options: [
          { value: "12m", label: "At least 12 months trading with at least $200,000 turnover in the last 12 months", points: 20 },
          { value: "6m", label: "At least 6 months trading with at least $100,000 turnover in the last 6 months", points: 10 },
          { value: "na", label: "Not applicable", points: 0 },
        ],
      },
      {
        id: "employment-length",
        label: "Length of current ACT employment (last 2 years)",
        help: "At least 20 hours a week for each week claimed.",
        options: [
          { value: "12", label: "12 months or more", points: 10 },
          { value: "6", label: "Six to 12 months", points: 5 },
          { value: "na", label: "Not applicable", points: 0 },
        ],
      },
      {
        id: "employment-skill",
        label: "Your current ACT employment",
        options: [
          { value: "nominated-on-list", label: "Working in your nominated occupation, which is on the ACT Occupation List", points: 20 },
          { value: "482", label: "Primary holder of a subclass 457 or 482 visa", points: 15 },
          { value: "on-list", label: "Working in an occupation on the ACT Occupation List", points: 10 },
          { value: "skill-1-3", label: "Working in an occupation at ANZSCO skill level 1 to 3", points: 5 },
          { value: "na", label: "Not applicable", points: 0 },
        ],
      },
      {
        id: "spouse-employment",
        label: "Spouse or partner employment in Canberra",
        options: [
          { value: "on-list", label: "Working in an occupation on the ACT Occupation List", points: 15 },
          { value: "skills-assessment", label: "Has a valid skills assessment relevant to their current employment", points: 10 },
          { value: "income", label: "Taxable income of at least $31 an hour excluding casual loading", points: 5 },
          { value: "any", label: "Working in any occupation at any skill level in Canberra", points: 5 },
          { value: "na", label: "Not applicable", points: 0 },
        ],
      },
      {
        id: "spouse-employability",
        label: "Spouse or partner employability",
        options: [
          { value: "yes", label: "Meets the criterion through qualification and English", points: 5 },
          { value: "na", label: "Not applicable", points: 0 },
        ],
      },
      qualification,
      actStudy("Full-time, in person, CRICOS-registered study and/or a Professional Year."),
      {
        id: "family",
        label: "Close family ties in Canberra",
        help: "A family member who is an Australian citizen or permanent resident and has lived in Canberra for at least two years.",
        options: [
          { value: "spouse-child", label: "Spouse, partner or child", points: 20 },
          { value: "relative", label: "Parent, grandparent, brother, sister, aunt or uncle", points: 10 },
          { value: "na", label: "Not applicable", points: 0 },
        ],
      },
      {
        id: "assets",
        label: "Assets in Canberra",
        options: [
          { value: "property", label: "At least $250,000 cash invested in ACT residential or commercial property", points: 5 },
          { value: "na", label: "Not applicable", points: 0 },
        ],
      },
    ],
  },
  {
    id: "overseas",
    name: "Overseas applicants",
    summary: "For people outside Australia. A job offer, work experience and ties to Canberra carry the most weight.",
    categories: [
      {
        id: "residence",
        label: "Previous time in the ACT (last 8 years)",
        options: [
          { value: "5", label: "More than five years", points: 20 },
          { value: "3", label: "Three to five years", points: 15 },
          { value: "1", label: "One to three years", points: 10 },
          { value: "visited", label: "Visited Canberra", points: 5 },
          { value: "na", label: "Not applicable", points: 0 },
        ],
      },
      occupationList,
      english,
      spouseEnglish,
      {
        id: "job-offer",
        label: "ACT job offer",
        options: [
          { value: "yes", label: "Genuine full-time job offer in your nominated occupation", points: 20 },
          { value: "na", label: "Not applicable", points: 0 },
        ],
      },
      {
        id: "experience",
        label: "Relevant work experience in your nominated occupation",
        options: [
          { value: "8", label: "Eight to ten years", points: 20 },
          { value: "5", label: "Five to eight years", points: 15 },
          { value: "3", label: "Three to five years", points: 10 },
          { value: "0", label: "Less than three years", points: 0 },
        ],
      },
      {
        id: "spouse-employment",
        label: "Spouse or partner employment",
        options: [
          { value: "on-list", label: "Works full-time in an occupation on the ACT list, with a relevant skills assessment", points: 15 },
          { value: "skills-assessment", label: "ANZSCO skill level 1 to 3 occupation with a relevant skills assessment", points: 10 },
          { value: "qualification", label: "ANZSCO skill level 1 to 3 occupation with a relevant tertiary qualification", points: 5 },
          { value: "na", label: "Not applicable", points: 0 },
        ],
      },
      qualification,
      actStudy("Study at an ACT tertiary institution in the last 8 years."),
      {
        id: "family",
        label: "Close family ties in Canberra",
        help: "A family member who has lived in Canberra for at least two years.",
        options: [
          { value: "citizen", label: "Australian citizen or permanent resident", points: 20 },
          { value: "temporary", label: "Temporary visa holder", points: 5 },
          { value: "na", label: "Not applicable", points: 0 },
        ],
      },
      {
        id: "assets",
        label: "Assets in Canberra",
        options: [
          { value: "property", label: "At least $250,000 cash invested in ACT property", points: 10 },
          { value: "business", label: "Majority owner of a profitable ACT business with at least $100,000 turnover in the last six months", points: 10 },
          { value: "na", label: "Not applicable", points: 0 },
        ],
      },
    ],
  },
];
