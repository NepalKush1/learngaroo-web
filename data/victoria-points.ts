// ─────────────────────────────────────────────────────────────────────────
// VICTORIAN POINTS TEST (VPT): how Victoria ranks Registrations of Interest
// (ROIs) for subclass 190 and 491 nomination in the 2026-27 program.
//
// Transcribed from Live in Melbourne (Victorian Government) on
// `victoriaPointsAsAt`: the Victorian Points Test page (the seven weighted
// factors and the 2026-27 priority industries and occupations), the Fees
// page, and the 13 October 2026 program update. There is no pass mark: in
// each invitation round the highest VPT totals are invited, across all
// eligible occupations ("most competitive") and within each priority
// industry or subgroup ("priority industry").
//
// On the same day Victoria's subclass 190, 491, Registration of Interest,
// FAQ and Annual earnings estimation guide pages returned "Page not found",
// and the 2026-27 opening date and nomination requirements weren't
// published. Re-check all of this when the 2026-27 program opens.
// ─────────────────────────────────────────────────────────────────────────

export const victoriaPointsAsAt = "13 October 2026";

export const victoriaPointsUrls = {
  vpt: "https://liveinmelbourne.vic.gov.au/migrate/skilled-migration-visas/vpt",
  fees: "https://liveinmelbourne.vic.gov.au/migrate/skilled-migration-visas/fees",
  update: "https://liveinmelbourne.vic.gov.au/news-events/news/2026/update-victorias-skilled-visa-nomination-program-2026-27",
  hub: "https://liveinmelbourne.vic.gov.au/migrate/skilled-migration-visas",
};

// Age at the time of ranking (VPT totals use the SkillSelect EOI).
export const vptAge: { from: number; to: number; points: number }[] = [
  { from: 18, to: 18, points: 265 },
  { from: 19, to: 19, points: 282 },
  { from: 20, to: 29, points: 300 },
  { from: 30, to: 30, points: 286 },
  { from: 31, to: 31, points: 270 },
  { from: 32, to: 32, points: 256 },
  { from: 33, to: 33, points: 240 },
  { from: 34, to: 34, points: 226 },
  { from: 35, to: 35, points: 210 },
  { from: 36, to: 36, points: 196 },
  { from: 37, to: 37, points: 180 },
  { from: 38, to: 38, points: 166 },
  { from: 39, to: 39, points: 150 },
  { from: 40, to: 40, points: 136 },
  { from: 41, to: 41, points: 106 },
  { from: 42, to: 42, points: 76 },
  { from: 43, to: 43, points: 46 },
  { from: 44, to: 44, points: 16 },
];

export interface VptOption<T extends string = string> {
  value: T;
  // As Victoria publishes it.
  label: string;
  points: number;
  hint?: string;
}

export type VptEnglish = "competent" | "proficient" | "superior";
export const vptEnglish: VptOption<VptEnglish>[] = [
  { value: "competent", label: "Competent", points: 0, hint: "For example IELTS 6 in each band" },
  { value: "proficient", label: "Proficient", points: 100, hint: "For example IELTS 7 in each band" },
  { value: "superior", label: "Superior", points: 200, hint: "For example IELTS 8 in each band" },
];

// Years of experience in the nominated occupation, in Victoria's ranges.
export type VptExperience = "0" | "1" | "1-3" | "3-5" | "6-8" | "8+";
export const vptExperience: VptOption<VptExperience>[] = [
  { value: "0", label: "0 years", points: 0 },
  { value: "1", label: "1 year", points: 20 },
  { value: "1-3", label: "1-3 years", points: 40 },
  { value: "3-5", label: "3-5 years", points: 60 },
  { value: "6-8", label: "6-8 years", points: 80 },
  { value: "8+", label: "More than 8 years", points: 100 },
];

export type VptEducation = "other" | "bachelor" | "masters" | "phd";
export const vptEducation: VptOption<VptEducation>[] = [
  { value: "other", label: "Other", points: 25, hint: "Any other qualification level" },
  { value: "bachelor", label: "Bachelors and Honours", points: 50 },
  { value: "masters", label: "Masters", points: 75 },
  { value: "phd", label: "PhD", points: 100 },
];

// Occupation skill level (ANZSCO): only skill level 1 scores. Victoria
// publishes levels 1 to 3.
export const vptSkillLevelPoints: Record<number, number> = { 1: 50, 2: 0, 3: 0 };

// 50 points when all three are true: 10 Partner Skills points claimed in the
// SkillSelect EOI, the partner is included in the state-nominated visa
// application, and the partner's occupation is a current priority industry
// occupation. Otherwise (single, Australian partner, or not all three) 0.
export const vptPartnerPoints = 50;

// Annual earnings from current skilled employment in Victoria (if
// applicable), in A$. Below A$80,000 scores nothing.
export const vptEarnings: { from: number; points: number }[] = [
  { from: 80000, points: 8 },
  { from: 85000, points: 16 },
  { from: 90000, points: 24 },
  { from: 95000, points: 32 },
  { from: 100000, points: 39 },
  { from: 105000, points: 47 },
  { from: 110000, points: 55 },
  { from: 115000, points: 63 },
  { from: 120000, points: 71 },
  { from: 125000, points: 79 },
  { from: 130000, points: 87 },
  { from: 135000, points: 95 },
  { from: 140000, points: 103 },
  { from: 145000, points: 111 },
  { from: 150000, points: 118 },
  { from: 155000, points: 126 },
  { from: 160000, points: 134 },
  { from: 165000, points: 142 },
  { from: 170000, points: 150 },
];

export const vptMaximum = {
  age: 300,
  english: 200,
  experience: 100,
  education: 100,
  skillLevel: 50,
  partner: vptPartnerPoints,
  earnings: 150,
};
export const vptMaximumTotal = Object.values(vptMaximum).reduce((sum, value) => sum + value, 0);

export function vptAgePoints(age: number): number {
  return vptAge.find((band) => age >= band.from && age <= band.to)?.points ?? 0;
}

export function vptEarningsPoints(amount: number): number {
  let points = 0;
  for (const band of vptEarnings) if (amount >= band.from) points = band.points;
  return points;
}

// ── 2026-27 priority industries and occupations ─────────────────────────

export interface VptPriorityGroup {
  id: string;
  industry: "Healthcare" | "Social assistance" | "Education" | "Construction";
  // Victoria ranks some industries by subgroup.
  subgroup?: string;
  occupations: { code: string; title: string }[];
}

const list = (rows: string) =>
  rows
    .trim()
    .split("\n")
    .map((row) => row.trim())
    .filter(Boolean)
    .map((row) => ({ code: row.slice(0, 6), title: row.slice(7) }));

export const vptPriorityGroups: VptPriorityGroup[] = [
  {
    id: "healthcare",
    industry: "Healthcare",
    occupations: list(`
      251211 Medical Diagnostic Radiographer
      251212 Medical Radiation Therapist
      251213 Nuclear Medicine Technologist
      251214 Sonographer
      251411 Optometrist
      251511 Hospital Pharmacist
      251912 Orthotist or Prosthetist
      252411 Occupational Therapist
      252511 Physiotherapist
      252611 Podiatrist
      252711 Audiologist
      252712 Speech Pathologist
      253311 Specialist Physician (General Medicine)
      253314 Medical Oncologist
      253317 Intensive Care Specialist
      253318 Neurologist
      253321 Paediatrician
      253399 Specialist Physicians nec
      253312 Cardiologist
      253313 Clinical Haematologist
      253315 Endocrinologist
      253316 Gastroenterologist
      253322 Renal Medicine Specialist
      253323 Rheumatologist
      253324 Thoracic Medicine Specialist
      253411 Psychiatrist
      253512 Cardiothoracic Surgeon
      253511 Surgeon
      253513 Neurosurgeon
      253514 Orthopaedic Surgeon
      253515 Otorhinolaryngologist
      253516 Paediatric Surgeon
      253517 Plastic and Reconstructive Surgeon
      253518 Urologist
      253521 Vascular Surgeon
      253912 Emergency Medicine Specialist
      253913 Obstetrician and Gynaecologist
      253917 Diagnostic and Interventional Radiologist
      253914 Ophthalmologist
      253915 Pathologist
      254111 Midwife
      254211 Nurse Educator
      254212 Nurse Researcher
      254311 Nurse Manager
      254411 Nurse Practitioner
      254412 Registered Nurse (Aged Care)
      254413 Registered Nurse (Child and Family Health)
      254414 Registered Nurse (Community Health)
      254415 Registered Nurse (Critical Care and Emergency)
      254416 Registered Nurse (Developmental Disability)
      254417 Registered Nurse (Disability and Rehabilitation)
      254418 Registered Nurse (Medical)
      254421 Registered Nurse (Medical Practice)
      254422 Registered Nurse (Mental Health)
      254423 Registered Nurse (Perioperative)
      254424 Registered Nurse (Surgical)
      254425 Registered Nurse (Paediatrics)
      254499 Registered Nurses nec
      411213 Dental Technician
    `),
  },
  {
    id: "social-assistance",
    industry: "Social assistance",
    occupations: list(`
      272311 Clinical Psychologist
      272313 Organisational Psychologist
      272312 Educational Psychologist
      272399 Psychologists nec
      272511 Social Worker
      272613 Welfare Worker
    `),
  },
  {
    id: "education-teachers",
    industry: "Education",
    subgroup: "Teachers",
    occupations: list(`
      241311 Middle School Teacher
      241411 Secondary School Teacher
      241511 Special Needs Teacher
      241599 Special Education Teachers nec
    `),
  },
  {
    id: "education-early-childhood",
    industry: "Education",
    subgroup: "Early Childhood Education",
    occupations: list(`
      241111 Early Childhood (Pre-primary School) Teacher
    `),
  },
  {
    id: "construction-professionals",
    industry: "Construction",
    subgroup: "Construction Professionals",
    occupations: list(`
      233212 Geotechnical Engineer
      234412 Geophysicist
      234413 Hydrogeologist
      133111 Construction Project Manager
      232212 Surveyor
      232214 Other Spatial Scientist
    `),
  },
  {
    id: "construction-trades",
    industry: "Construction",
    subgroup: "Construction Trades",
    occupations: list(`
      333111 Glazier
      331111 Bricklayer
      331112 Stonemason
      334111 Plumber (General)
      334112 Airconditioning and Mechanical Services Plumber
      334113 Drainer
      334114 Gasfitter
      334115 Roof Plumber
      331211 Carpenter and Joiner
      331212 Carpenter
      331213 Joiner
      312113 Building Inspector
      341111 Electrician (General)
      341112 Electrician (Special Class)
      342111 Airconditioning and Refrigeration Mechanic
      322211 Sheet Metal Worker
      323214 Metal Machinist
      312312 Electrical Engineering Technician
      333212 Solid Plasterer
      333411 Wall and Floor Tiler
      333311 Roof Tiler
      323412 Toolmaker
      322311 Metal Fabricator
      321211 Motor Mechanic (General)
      321111 Automotive Electrician
    `),
  },
];

export function vptPriorityGroup(code: string): VptPriorityGroup | undefined {
  return vptPriorityGroups.find((group) => group.occupations.some((occupation) => occupation.code === code));
}

export function vptGroupLabel(group: VptPriorityGroup): string {
  return group.subgroup ? `${group.industry}: ${group.subgroup}` : group.industry;
}

// ── 2026-27 fees for service (A$) ────────────────────────────────────────
// GST of 10% applies if you are in Australia when you pay. The nomination
// fee is payable only if you are invited and submit a nomination
// application; the ROI fee is charged once per program year.
export const victoriaFees = {
  roi: { excludingGst: 60, includingGst: 66 },
  nomination190: { excludingGst: 180, includingGst: 198 },
  nomination491: { excludingGst: 180, includingGst: 198 },
};
