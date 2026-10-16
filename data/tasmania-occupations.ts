// ─────────────────────────────────────────────────────────────────────────
// TASMANIA OCCUPATION LISTS — used by the Tasmania nomination calculator.
//
// Two official lists from migration.tas.gov.au, transcribed on
// `tasmaniaOccupationsAsAt`:
//
//  tsePriority  "Subclass 190 TSE Priority Roles" (page updated 19 Aug 2026):
//               a skills assessment in one of these occupations unlocks the
//               TSE Priority Occupation option for subclass 190 (9 months of
//               matching work, or 6 months for health and teaching). Some
//               carry caveats, usually that the employer must have operated
//               in Tasmania for 3 years.
//  gold         "Health, Allied Health and Teaching Occupations" (page updated
//               12 Oct 2026): a skills assessment in one of these occupations,
//               with matching work, is what the Gold priority attribute
//               requires in the TSE, TSG and TER pathways. A few are eligible
//               under subclass 491 only. Teachers must work in a school.
//
// "Matching" work means a role in the same ANZSCO 3-digit `group`.
// Occupations not listed here can still use the 190 TSE long-term option
// (15 months) if on the Home Affairs list, and every 491 pathway.
// ─────────────────────────────────────────────────────────────────────────

export const tasmaniaOccupationsAsAt = "12 October 2026";
export const tsePriorityRolesUrl = "https://www.migration.tas.gov.au/skilled_migration/subclass-190-tasmanian-skilled-employment-tse-priority-roles";
export const goldOccupationsUrl = "https://www.migration.tas.gov.au/skilled_migration/health,-allied-health-and-teaching-occupations";

export interface TasmaniaOccupation {
  code: string;
  title: string;
  // ANZSCO 3-digit group; matching work must be in this group.
  group: string;
  groupName: string;
  tsePriority?: boolean;
  priorityCaveat?: string;
  gold?: boolean;
  // Set when the Gold attribute is available for subclass 491 only.
  goldSubclass?: "491";
  sector?: "health" | "teaching";
}

export const tasmaniaOccupations: TasmaniaOccupation[] = [
  { code: "121311", title: "Apiarist", group: "121", groupName: "Farmers and Farm Managers", tsePriority: true },
  { code: "121321", title: "Poultry Farmer", group: "121", groupName: "Farmers and Farm Managers", tsePriority: true },
  { code: "131112", title: "Sales and Marketing Manager", group: "131", groupName: "Advertising, Public Relations and Sales Managers", tsePriority: true, priorityCaveat: "Employer must have operated in Tasmania for at least three years." },
  { code: "131113", title: "Advertising Manager", group: "131", groupName: "Advertising, Public Relations and Sales Managers", tsePriority: true, priorityCaveat: "Employer must have operated in Tasmania for at least three years." },
  { code: "132111", title: "Corporate Services Managers", group: "132", groupName: "Business Administration Managers", tsePriority: true },
  { code: "132211", title: "Finance Managers", group: "132", groupName: "Business Administration Managers", tsePriority: true },
  { code: "132311", title: "Human Resource Managers", group: "132", groupName: "Business Administration Managers", tsePriority: true },
  { code: "132511", title: "Research and Development Managers", group: "132", groupName: "Business Administration Managers", tsePriority: true },
  { code: "133111", title: "Construction Project Manager", group: "133", groupName: "Construction, Distribution and Production Managers", tsePriority: true },
  { code: "133211", title: "Engineering Manager", group: "133", groupName: "Construction, Distribution and Production Managers", tsePriority: true },
  { code: "134212", title: "Nursing Clinical Director", group: "134", groupName: "Education, Health and Welfare Services Managers", tsePriority: true },
  { code: "134213", title: "Primary Health Organisation Manager", group: "134", groupName: "Education, Health and Welfare Services Managers", tsePriority: true },
  { code: "134214", title: "Welfare Centre Manager", group: "134", groupName: "Education, Health and Welfare Services Managers", tsePriority: true },
  { code: "134299", title: "Health and Welfare Services Managers nec", group: "134", groupName: "Education, Health and Welfare Services Managers", tsePriority: true },
  { code: "134311", title: "School Principal", group: "134", groupName: "Education, Health and Welfare Services Managers", tsePriority: true },
  { code: "135112", title: "ICT Project Manager", group: "135", groupName: "ICT Managers", tsePriority: true },
  { code: "135199", title: "ICT Managers nec", group: "135", groupName: "ICT Managers", tsePriority: true },
  { code: "139911", title: "Arts Administrator or Manager", group: "139", groupName: "Miscellaneous Specialist Managers", tsePriority: true },
  { code: "139912", title: "Environmental Manager", group: "139", groupName: "Miscellaneous Specialist Managers", tsePriority: true },
  { code: "139913", title: "Laboratory Manager", group: "139", groupName: "Miscellaneous Specialist Managers", tsePriority: true },
  { code: "139914", title: "Quality Assurance Manager", group: "139", groupName: "Miscellaneous Specialist Managers", tsePriority: true },
  { code: "139999", title: "Specialist Managers nec", group: "139", groupName: "Miscellaneous Specialist Managers", tsePriority: true },
  { code: "141111", title: "Cafe or Restaurant Manager", group: "141", groupName: "Accommodation and Hospitality Managers", tsePriority: true },
  { code: "141311", title: "Hotel or Motel Manager", group: "141", groupName: "Accommodation and Hospitality Managers", tsePriority: true },
  { code: "149913", title: "Facilities Manager", group: "149", groupName: "Miscellaneous Hospitality, Retail and Service Managers", tsePriority: true },
  { code: "221111", title: "Accountant (General)", group: "221", groupName: "Accountants, Auditors and Company Secretaries", tsePriority: true, priorityCaveat: "Must have full membership of CPA, CA ANZ, IPA, ACCA, CFA or CIMA." },
  { code: "221112", title: "Management Accountant", group: "221", groupName: "Accountants, Auditors and Company Secretaries", tsePriority: true, priorityCaveat: "Must have full membership of CPA, CA ANZ, IPA, ACCA, CFA or CIMA." },
  { code: "221113", title: "Taxation Accountant", group: "221", groupName: "Accountants, Auditors and Company Secretaries", tsePriority: true, priorityCaveat: "Must have full membership of CPA, CA ANZ, IPA, ACCA, CFA or CIMA." },
  { code: "221211", title: "Company Secretary", group: "221", groupName: "Accountants, Auditors and Company Secretaries", tsePriority: true, priorityCaveat: "Must have full membership of CPA, CA ANZ, IPA, ACCA, CFA or CIMA." },
  { code: "221213", title: "External Auditor", group: "221", groupName: "Accountants, Auditors and Company Secretaries", tsePriority: true, priorityCaveat: "Must have full membership of CPA, CA ANZ, IPA, ACCA, CFA or CIMA." },
  { code: "221214", title: "Internal Auditor", group: "221", groupName: "Accountants, Auditors and Company Secretaries", tsePriority: true, priorityCaveat: "Must have full membership of CPA, CA ANZ, IPA, ACCA, CFA or CIMA." },
  { code: "223112", title: "Recruitment Consultant", group: "223", groupName: "Human Resource and Training Professionals", tsePriority: true },
  { code: "224712", title: "Organisation and Methods Analyst", group: "224", groupName: "Information and Organisation Professionals", tsePriority: true },
  { code: "224713", title: "Management Consultant", group: "224", groupName: "Information and Organisation Professionals", tsePriority: true },
  { code: "224914", title: "Patents Examiner", group: "224", groupName: "Information and Organisation Professionals", tsePriority: true },
  { code: "224999", title: "Information and Organisation Professionals nec", group: "224", groupName: "Information and Organisation Professionals", tsePriority: true },
  { code: "225111", title: "Advertising Specialist", group: "225", groupName: "Sales, Marketing and Public Relations Professionals", tsePriority: true, priorityCaveat: "Employer must have operated in Tasmania for at least three years." },
  { code: "225113", title: "Marketing Specialist", group: "225", groupName: "Sales, Marketing and Public Relations Professionals", tsePriority: true, priorityCaveat: "Employer must have operated in Tasmania for at least three years." },
  { code: "225311", title: "Public Relations Professional", group: "225", groupName: "Sales, Marketing and Public Relations Professionals", tsePriority: true, priorityCaveat: "Employer must have operated in Tasmania for at least three years." },
  { code: "225499", title: "Technical Sales Representatives nec", group: "225", groupName: "Sales, Marketing and Public Relations Professionals", tsePriority: true, priorityCaveat: "Employer must have operated in Tasmania for at least three years." },
  { code: "232111", title: "Architect", group: "232", groupName: "Architects, Designers, Planners and Surveyors", tsePriority: true },
  { code: "232112", title: "Landscape Architect", group: "232", groupName: "Architects, Designers, Planners and Surveyors", tsePriority: true },
  { code: "232212", title: "Surveyor", group: "232", groupName: "Architects, Designers, Planners and Surveyors", tsePriority: true },
  { code: "232213", title: "Cartographer", group: "232", groupName: "Architects, Designers, Planners and Surveyors", tsePriority: true },
  { code: "232214", title: "Other Spatial Scientist", group: "232", groupName: "Architects, Designers, Planners and Surveyors", tsePriority: true },
  { code: "232411", title: "Graphic Designer", group: "232", groupName: "Architects, Designers, Planners and Surveyors", tsePriority: true },
  { code: "232412", title: "Illustrator", group: "232", groupName: "Architects, Designers, Planners and Surveyors", tsePriority: true },
  { code: "232414", title: "Web Designer", group: "232", groupName: "Architects, Designers, Planners and Surveyors", tsePriority: true },
  { code: "233211", title: "Civil Engineer", group: "233", groupName: "Engineering Professionals", tsePriority: true },
  { code: "233212", title: "Geotechnical Engineer", group: "233", groupName: "Engineering Professionals", tsePriority: true },
  { code: "233213", title: "Quantity Surveyor", group: "233", groupName: "Engineering Professionals", tsePriority: true },
  { code: "233214", title: "Structural Engineer", group: "233", groupName: "Engineering Professionals", tsePriority: true },
  { code: "233215", title: "Transport Engineer", group: "233", groupName: "Engineering Professionals", tsePriority: true },
  { code: "233311", title: "Electrical Engineer", group: "233", groupName: "Engineering Professionals", tsePriority: true },
  { code: "233511", title: "Industrial Engineer", group: "233", groupName: "Engineering Professionals", tsePriority: true },
  { code: "233512", title: "Mechanical Engineer", group: "233", groupName: "Engineering Professionals", tsePriority: true },
  { code: "233513", title: "Production or Plant Engineer", group: "233", groupName: "Engineering Professionals", tsePriority: true },
  { code: "234111", title: "Agricultural Consultant", group: "234", groupName: "Natural and Physical Science Professionals", tsePriority: true },
  { code: "234112", title: "Agricultural Scientist", group: "234", groupName: "Natural and Physical Science Professionals", tsePriority: true },
  { code: "234113", title: "Forester / Forest Scientist", group: "234", groupName: "Natural and Physical Science Professionals", tsePriority: true },
  { code: "234211", title: "Chemist", group: "234", groupName: "Natural and Physical Science Professionals", tsePriority: true },
  { code: "234212", title: "Food Technologist", group: "234", groupName: "Natural and Physical Science Professionals", tsePriority: true },
  { code: "234312", title: "Environmental Consultant", group: "234", groupName: "Natural and Physical Science Professionals", tsePriority: true },
  { code: "234313", title: "Environmental Research Scientist", group: "234", groupName: "Natural and Physical Science Professionals", tsePriority: true },
  { code: "234399", title: "Environmental Scientists nec", group: "234", groupName: "Natural and Physical Science Professionals", tsePriority: true },
  { code: "234411", title: "Geologist", group: "234", groupName: "Natural and Physical Science Professionals", tsePriority: true },
  { code: "234412", title: "Geophysicist", group: "234", groupName: "Natural and Physical Science Professionals", tsePriority: true },
  { code: "234413", title: "Hydrogeologist", group: "234", groupName: "Natural and Physical Science Professionals", tsePriority: true },
  { code: "234711", title: "Veterinarian", group: "234", groupName: "Natural and Physical Science Professionals", tsePriority: true },
  { code: "241111", title: "Early Childhood (Pre-primary School) Teacher", group: "241", groupName: "School Teachers", tsePriority: true, gold: true, sector: "teaching" },
  { code: "241213", title: "Primary School Teacher", group: "241", groupName: "School Teachers", tsePriority: true, gold: true, sector: "teaching" },
  { code: "241311", title: "Middle School Teacher / Intermediate School Teacher", group: "241", groupName: "School Teachers", tsePriority: true, gold: true, sector: "teaching" },
  { code: "241411", title: "Secondary School Teacher", group: "241", groupName: "School Teachers", tsePriority: true, gold: true, sector: "teaching" },
  { code: "241511", title: "Special Needs Teacher", group: "241", groupName: "School Teachers", tsePriority: true, gold: true, sector: "teaching" },
  { code: "241512", title: "Teacher of the Hearing Impaired", group: "241", groupName: "School Teachers", tsePriority: true, gold: true, sector: "teaching" },
  { code: "241513", title: "Teacher of the Sight Impaired", group: "241", groupName: "School Teachers", tsePriority: true, gold: true, sector: "teaching" },
  { code: "241599", title: "Special Education Teachers nec", group: "241", groupName: "School Teachers", tsePriority: true, gold: true, sector: "teaching" },
  { code: "251111", title: "Dietitian", group: "251", groupName: "Health Diagnostic and Promotion Professionals", tsePriority: true, gold: true, sector: "health" },
  { code: "251112", title: "Nutritionist", group: "251", groupName: "Health Diagnostic and Promotion Professionals", tsePriority: true, gold: true, sector: "health" },
  { code: "251211", title: "Medical Diagnostic Radiographer", group: "251", groupName: "Health Diagnostic and Promotion Professionals", tsePriority: true, gold: true, sector: "health" },
  { code: "251212", title: "Medical Radiation Therapist", group: "251", groupName: "Health Diagnostic and Promotion Professionals", tsePriority: true, gold: true, sector: "health" },
  { code: "251213", title: "Nuclear Medicine Technologist", group: "251", groupName: "Health Diagnostic and Promotion Professionals", tsePriority: true, gold: true, sector: "health" },
  { code: "251214", title: "Sonographer", group: "251", groupName: "Health Diagnostic and Promotion Professionals", tsePriority: true, gold: true, sector: "health" },
  { code: "251311", title: "Environmental Health Officer", group: "251", groupName: "Health Diagnostic and Promotion Professionals", gold: true, goldSubclass: "491", sector: "health" },
  { code: "251312", title: "Occupational Health and Safety Adviser", group: "251", groupName: "Health Diagnostic and Promotion Professionals", tsePriority: true, gold: true, sector: "health" },
  { code: "251411", title: "Optometrist", group: "251", groupName: "Health Diagnostic and Promotion Professionals", tsePriority: true, gold: true, sector: "health" },
  { code: "251412", title: "Orthoptist", group: "251", groupName: "Health Diagnostic and Promotion Professionals", tsePriority: true, gold: true, sector: "health" },
  { code: "251511", title: "Hospital Pharmacist", group: "251", groupName: "Health Diagnostic and Promotion Professionals", tsePriority: true, gold: true, sector: "health" },
  { code: "251512", title: "Industrial Pharmacist", group: "251", groupName: "Health Diagnostic and Promotion Professionals", tsePriority: true, gold: true, sector: "health" },
  { code: "251513", title: "Retail Pharmacist", group: "251", groupName: "Health Diagnostic and Promotion Professionals", tsePriority: true, gold: true, sector: "health" },
  { code: "251911", title: "Health Promotion Officer", group: "251", groupName: "Health Diagnostic and Promotion Professionals", tsePriority: true, gold: true, sector: "health" },
  { code: "251912", title: "Orthotist or Prosthetist", group: "251", groupName: "Health Diagnostic and Promotion Professionals", tsePriority: true, gold: true, sector: "health" },
  { code: "251999", title: "Health Diagnostic and Promotion Professionals nec", group: "251", groupName: "Health Diagnostic and Promotion Professionals", tsePriority: true, gold: true, sector: "health" },
  { code: "252311", title: "Dental Specialist", group: "252", groupName: "Health Therapy Professionals", tsePriority: true, gold: true, sector: "health" },
  { code: "252312", title: "Dentist", group: "252", groupName: "Health Therapy Professionals", gold: true, goldSubclass: "491", sector: "health" },
  { code: "252411", title: "Occupational Therapist", group: "252", groupName: "Health Therapy Professionals", tsePriority: true, gold: true, sector: "health" },
  { code: "252511", title: "Physiotherapist", group: "252", groupName: "Health Therapy Professionals", tsePriority: true, gold: true, sector: "health" },
  { code: "252611", title: "Podiatrist", group: "252", groupName: "Health Therapy Professionals", tsePriority: true, gold: true, sector: "health" },
  { code: "252711", title: "Audiologist", group: "252", groupName: "Health Therapy Professionals", tsePriority: true, gold: true, sector: "health" },
  { code: "252712", title: "Speech Pathologist / Speech Language Therapist", group: "252", groupName: "Health Therapy Professionals", tsePriority: true, gold: true, sector: "health" },
  { code: "253111", title: "General Practitioner", group: "253", groupName: "Medical Practitioners", tsePriority: true, gold: true, sector: "health" },
  { code: "253112", title: "Resident Medical Officer", group: "253", groupName: "Medical Practitioners", tsePriority: true, gold: true, sector: "health" },
  { code: "253211", title: "Anaesthetist", group: "253", groupName: "Medical Practitioners", gold: true, goldSubclass: "491", sector: "health" },
  { code: "253311", title: "Specialist Physician (General Medicine)", group: "253", groupName: "Medical Practitioners", tsePriority: true, gold: true, sector: "health" },
  { code: "253312", title: "Cardiologist", group: "253", groupName: "Medical Practitioners", tsePriority: true, gold: true, sector: "health" },
  { code: "253313", title: "Clinical Haematologist", group: "253", groupName: "Medical Practitioners", tsePriority: true, gold: true, sector: "health" },
  { code: "253314", title: "Medical Oncologist", group: "253", groupName: "Medical Practitioners", tsePriority: true, gold: true, sector: "health" },
  { code: "253315", title: "Endocrinologist", group: "253", groupName: "Medical Practitioners", tsePriority: true, gold: true, sector: "health" },
  { code: "253316", title: "Gastroenterologist", group: "253", groupName: "Medical Practitioners", tsePriority: true, gold: true, sector: "health" },
  { code: "253317", title: "Intensive Care Specialist", group: "253", groupName: "Medical Practitioners", tsePriority: true, gold: true, sector: "health" },
  { code: "253318", title: "Neurologist", group: "253", groupName: "Medical Practitioners", tsePriority: true, gold: true, sector: "health" },
  { code: "253321", title: "Paediatrician", group: "253", groupName: "Medical Practitioners", tsePriority: true, gold: true, sector: "health" },
  { code: "253322", title: "Renal Medicine Specialist", group: "253", groupName: "Medical Practitioners", tsePriority: true, gold: true, sector: "health" },
  { code: "253323", title: "Rheumatologist", group: "253", groupName: "Medical Practitioners", tsePriority: true, gold: true, sector: "health" },
  { code: "253324", title: "Thoracic Medicine Specialist", group: "253", groupName: "Medical Practitioners", tsePriority: true, gold: true, sector: "health" },
  { code: "253399", title: "Specialist Physicians nec", group: "253", groupName: "Medical Practitioners", tsePriority: true, gold: true, sector: "health" },
  { code: "253411", title: "Psychiatrist", group: "253", groupName: "Medical Practitioners", tsePriority: true, gold: true, sector: "health" },
  { code: "253511", title: "Surgeon (General)", group: "253", groupName: "Medical Practitioners", tsePriority: true, gold: true, sector: "health" },
  { code: "253512", title: "Cardiothoracic Surgeon", group: "253", groupName: "Medical Practitioners", tsePriority: true, gold: true, sector: "health" },
  { code: "253513", title: "Neurosurgeon", group: "253", groupName: "Medical Practitioners", tsePriority: true, gold: true, sector: "health" },
  { code: "253514", title: "Orthopaedic Surgeon", group: "253", groupName: "Medical Practitioners", tsePriority: true, gold: true, sector: "health" },
  { code: "253515", title: "Otorhinolaryngologist", group: "253", groupName: "Medical Practitioners", tsePriority: true, gold: true, sector: "health" },
  { code: "253516", title: "Paediatric Surgeon", group: "253", groupName: "Medical Practitioners", tsePriority: true, gold: true, sector: "health" },
  { code: "253517", title: "Plastic and Reconstructive Surgeon", group: "253", groupName: "Medical Practitioners", tsePriority: true, gold: true, sector: "health" },
  { code: "253518", title: "Urologist", group: "253", groupName: "Medical Practitioners", tsePriority: true, gold: true, sector: "health" },
  { code: "253521", title: "Vascular Surgeon", group: "253", groupName: "Medical Practitioners", tsePriority: true, gold: true, sector: "health" },
  { code: "253911", title: "Dermatologist", group: "253", groupName: "Medical Practitioners", tsePriority: true, gold: true, sector: "health" },
  { code: "253912", title: "Emergency Medicine Specialist", group: "253", groupName: "Medical Practitioners", tsePriority: true, gold: true, sector: "health" },
  { code: "253913", title: "Obstetrician and Gynaecologist", group: "253", groupName: "Medical Practitioners", tsePriority: true, gold: true, sector: "health" },
  { code: "253914", title: "Ophthalmologist", group: "253", groupName: "Medical Practitioners", tsePriority: true, gold: true, sector: "health" },
  { code: "253915", title: "Pathologist", group: "253", groupName: "Medical Practitioners", tsePriority: true, gold: true, sector: "health" },
  { code: "253917", title: "Diagnostic and Interventional Radiologist", group: "253", groupName: "Medical Practitioners", tsePriority: true, gold: true, sector: "health" },
  { code: "253918", title: "Radiation Oncologist", group: "253", groupName: "Medical Practitioners", tsePriority: true, gold: true, sector: "health" },
  { code: "253999", title: "Medical Practitioners nec", group: "253", groupName: "Medical Practitioners", tsePriority: true, gold: true, sector: "health" },
  { code: "254111", title: "Midwife", group: "254", groupName: "Midwifery and Nursing Professionals", tsePriority: true, gold: true, sector: "health" },
  { code: "254211", title: "Nurse Educator", group: "254", groupName: "Midwifery and Nursing Professionals", tsePriority: true, gold: true, sector: "health" },
  { code: "254212", title: "Nurse Researcher", group: "254", groupName: "Midwifery and Nursing Professionals", tsePriority: true, gold: true, sector: "health" },
  { code: "254311", title: "Nurse Manager", group: "254", groupName: "Midwifery and Nursing Professionals", tsePriority: true, gold: true, sector: "health" },
  { code: "254411", title: "Nurse Practitioner", group: "254", groupName: "Midwifery and Nursing Professionals", tsePriority: true, gold: true, sector: "health" },
  { code: "254412", title: "Registered Nurse (Aged Care)", group: "254", groupName: "Midwifery and Nursing Professionals", tsePriority: true, gold: true, sector: "health" },
  { code: "254413", title: "Registered Nurse (Child and Family Health)", group: "254", groupName: "Midwifery and Nursing Professionals", tsePriority: true, gold: true, sector: "health" },
  { code: "254414", title: "Registered Nurse (Community Health)", group: "254", groupName: "Midwifery and Nursing Professionals", tsePriority: true, gold: true, sector: "health" },
  { code: "254415", title: "Registered Nurse (Critical Care and Emergency)", group: "254", groupName: "Midwifery and Nursing Professionals", tsePriority: true, gold: true, sector: "health" },
  { code: "254416", title: "Registered Nurse (Developmental Disability)", group: "254", groupName: "Midwifery and Nursing Professionals", tsePriority: true, gold: true, sector: "health" },
  { code: "254417", title: "Registered Nurse (Disability and Rehabilitation)", group: "254", groupName: "Midwifery and Nursing Professionals", tsePriority: true, gold: true, sector: "health" },
  { code: "254418", title: "Registered Nurse (Medical)", group: "254", groupName: "Midwifery and Nursing Professionals", tsePriority: true, gold: true, sector: "health" },
  { code: "254421", title: "Registered Nurse (Medical Practice)", group: "254", groupName: "Midwifery and Nursing Professionals", tsePriority: true, gold: true, sector: "health" },
  { code: "254422", title: "Registered Nurse (Mental Health)", group: "254", groupName: "Midwifery and Nursing Professionals", tsePriority: true, gold: true, sector: "health" },
  { code: "254423", title: "Registered Nurse (Perioperative)", group: "254", groupName: "Midwifery and Nursing Professionals", tsePriority: true, gold: true, sector: "health" },
  { code: "254424", title: "Registered Nurse (Surgical)", group: "254", groupName: "Midwifery and Nursing Professionals", tsePriority: true, gold: true, sector: "health" },
  { code: "254425", title: "Registered Nurse (Paediatrics)", group: "254", groupName: "Midwifery and Nursing Professionals", tsePriority: true, gold: true, sector: "health" },
  { code: "254499", title: "Registered Nurses nec", group: "254", groupName: "Midwifery and Nursing Professionals", tsePriority: true, gold: true, sector: "health" },
  { code: "261311", title: "Analyst Programmer", group: "261", groupName: "Business and Systems Analysts, and Programmers", tsePriority: true, priorityCaveat: "Employer must have operated in Tasmania for at least three years." },
  { code: "261312", title: "Developer Programmer", group: "261", groupName: "Business and Systems Analysts, and Programmers", tsePriority: true, priorityCaveat: "Employer must have operated in Tasmania for at least three years." },
  { code: "261313", title: "Software Engineer", group: "261", groupName: "Business and Systems Analysts, and Programmers", tsePriority: true, priorityCaveat: "Employer must have operated in Tasmania for at least three years." },
  { code: "261314", title: "Software Tester", group: "261", groupName: "Business and Systems Analysts, and Programmers", tsePriority: true, priorityCaveat: "Employer must have operated in Tasmania for at least three years." },
  { code: "261399", title: "Software and Applications Programmers nec", group: "261", groupName: "Business and Systems Analysts, and Programmers", tsePriority: true, priorityCaveat: "Employer must have operated in Tasmania for at least three years." },
  { code: "262111", title: "Database Administrator", group: "262", groupName: "Database and Systems Administrators, and ICT Security Specialists", tsePriority: true, priorityCaveat: "Employer must have operated in Tasmania for at least three years." },
  { code: "262113", title: "Systems Administrator", group: "262", groupName: "Database and Systems Administrators, and ICT Security Specialists", tsePriority: true, priorityCaveat: "Employer must have operated in Tasmania for at least three years." },
  { code: "263111", title: "Computer Network and Systems Engineer", group: "263", groupName: "ICT Network and Support Professionals", tsePriority: true, priorityCaveat: "Employer must have operated in Tasmania for at least three years." },
  { code: "263112", title: "Network Administrator", group: "263", groupName: "ICT Network and Support Professionals", tsePriority: true, priorityCaveat: "Employer must have operated in Tasmania for at least three years." },
  { code: "263113", title: "Network Analyst", group: "263", groupName: "ICT Network and Support Professionals", tsePriority: true, priorityCaveat: "Employer must have operated in Tasmania for at least three years." },
  { code: "271311", title: "Solicitor", group: "271", groupName: "Legal Professionals", tsePriority: true },
  { code: "272311", title: "Clinical Psychologist", group: "272", groupName: "Social and Welfare Professionals", tsePriority: true, gold: true, sector: "health" },
  { code: "272312", title: "Educational Psychologist", group: "272", groupName: "Social and Welfare Professionals", tsePriority: true, gold: true, sector: "health" },
  { code: "272313", title: "Organisational Psychologist", group: "272", groupName: "Social and Welfare Professionals", tsePriority: true, gold: true, sector: "health" },
  { code: "272314", title: "Psychotherapist", group: "272", groupName: "Social and Welfare Professionals", tsePriority: true, gold: true, sector: "health" },
  { code: "272399", title: "Psychologists nec", group: "272", groupName: "Social and Welfare Professionals", tsePriority: true, gold: true, sector: "health" },
  { code: "272511", title: "Social Worker", group: "272", groupName: "Social and Welfare Professionals", tsePriority: true, gold: true, sector: "health" },
  { code: "272612", title: "Recreation Officer / Recreation Coordinator", group: "272", groupName: "Social and Welfare Professionals", tsePriority: true },
  { code: "272613", title: "Welfare Worker", group: "272", groupName: "Social and Welfare Professionals", tsePriority: true, gold: true, sector: "health" },
  { code: "311211", title: "Anaesthetic Technician", group: "311", groupName: "Medical Technicians", tsePriority: true, gold: true, sector: "health" },
  { code: "311212", title: "Cardiac Technician", group: "311", groupName: "Medical Technicians", tsePriority: true, gold: true, sector: "health" },
  { code: "311213", title: "Medical Laboratory Technician", group: "311", groupName: "Medical Technicians", tsePriority: true, gold: true, sector: "health" },
  { code: "311214", title: "Operating Theatre Technician", group: "311", groupName: "Medical Technicians", gold: true, sector: "health" },
  { code: "311215", title: "Pharmacy Technician", group: "311", groupName: "Medical Technicians", tsePriority: true, gold: true, sector: "health" },
  { code: "311216", title: "Pathology Collector / Phlebotomist", group: "311", groupName: "Medical Technicians", gold: true, sector: "health" },
  { code: "311217", title: "Respiratory Technician", group: "311", groupName: "Medical Technicians", gold: true, sector: "health" },
  { code: "311299", title: "Medical Technicians nec", group: "311", groupName: "Medical Technicians", tsePriority: true, gold: true, sector: "health" },
  { code: "311411", title: "Chemistry Technician", group: "311", groupName: "Agricultural, Medical and Science Technicians", tsePriority: true },
  { code: "311412", title: "Earth Science Technician", group: "311", groupName: "Agricultural, Medical and Science Technicians", tsePriority: true },
  { code: "311413", title: "Life Science Technician", group: "311", groupName: "Agricultural, Medical and Science Technicians", tsePriority: true },
  { code: "311499", title: "Science Technicians nec", group: "311", groupName: "Medical Technicians", tsePriority: true, gold: true, sector: "health" },
  { code: "312111", title: "Architectural Draftsperson", group: "312", groupName: "Building and Engineering Technicians", tsePriority: true },
  { code: "312113", title: "Building Inspector", group: "312", groupName: "Building and Engineering Technicians", tsePriority: true },
  { code: "312199", title: "Architectural, Building and Surveying Technicians nec", group: "312", groupName: "Building and Engineering Technicians", tsePriority: true },
  { code: "313111", title: "Hardware Technician", group: "313", groupName: "ICT and Telecommunications Technicians", tsePriority: true },
  { code: "313112", title: "ICT Customer Support Officer", group: "313", groupName: "ICT and Telecommunications Technicians", tsePriority: true },
  { code: "313113", title: "Web Administrator", group: "313", groupName: "ICT and Telecommunications Technicians", tsePriority: true },
  { code: "313199", title: "ICT Support Technicians nec", group: "313", groupName: "ICT and Telecommunications Technicians", tsePriority: true },
  { code: "321211", title: "Motor Mechanic (General)", group: "321", groupName: "Automotive Electricians and Mechanics", tsePriority: true, priorityCaveat: "Employer must have operated in Tasmania for at least three years. From 1 December 2026 the employer's main business must be repairing vehicles, and service technician roles are not accepted unless the employer is an authorised manufacturer dealer." },
  { code: "321212", title: "Diesel Motor Mechanic", group: "321", groupName: "Automotive Electricians and Mechanics", tsePriority: true, priorityCaveat: "Employer must have operated in Tasmania for at least three years. From 1 December 2026 the employer's main business must be repairing vehicles, and service technician roles are not accepted unless the employer is an authorised manufacturer dealer." },
  { code: "321213", title: "Motorcycle Mechanic", group: "321", groupName: "Automotive Electricians and Mechanics", tsePriority: true, priorityCaveat: "Employer must have operated in Tasmania for at least three years. From 1 December 2026 the employer's main business must be repairing vehicles, and service technician roles are not accepted unless the employer is an authorised manufacturer dealer." },
  { code: "321214", title: "Small Engine Mechanic", group: "321", groupName: "Automotive Electricians and Mechanics", tsePriority: true, priorityCaveat: "Employer must have operated in Tasmania for at least three years. From 1 December 2026 the employer's main business must be repairing vehicles, and service technician roles are not accepted unless the employer is an authorised manufacturer dealer." },
  { code: "323211", title: "Fitter (General)", group: "323", groupName: "Mechanical Engineering Trades Workers", tsePriority: true },
  { code: "323212", title: "Fitter and Turner", group: "323", groupName: "Mechanical Engineering Trades Workers", tsePriority: true },
  { code: "323213", title: "Fitter-Welder", group: "323", groupName: "Mechanical Engineering Trades Workers", tsePriority: true },
  { code: "323214", title: "Metal Machinist (First Class)", group: "323", groupName: "Mechanical Engineering Trades Workers", tsePriority: true },
  { code: "323299", title: "Metal Fitters and Machinists nec", group: "323", groupName: "Mechanical Engineering Trades Workers", tsePriority: true },
  { code: "331211", title: "Carpenter and Joiner", group: "331", groupName: "Bricklayers, and Carpenters and Joiners", tsePriority: true },
  { code: "331212", title: "Carpenter", group: "331", groupName: "Bricklayers, and Carpenters and Joiners", tsePriority: true },
  { code: "331213", title: "Joiner", group: "331", groupName: "Bricklayers, and Carpenters and Joiners", tsePriority: true },
  { code: "332211", title: "Painter", group: "332", groupName: "Floor Finishers and Painters", tsePriority: true, priorityCaveat: "Must have worked in the role for at least 12 months if the employer has not operated in Tasmania for at least three years." },
  { code: "334111", title: "Plumber (General)", group: "334", groupName: "Plumbers", tsePriority: true },
  { code: "334112", title: "Airconditioning and Mechanical Services Plumber", group: "334", groupName: "Plumbers", tsePriority: true },
  { code: "334113", title: "Drainer / Drainlayer", group: "334", groupName: "Plumbers", tsePriority: true },
  { code: "334114", title: "Gasfitter", group: "334", groupName: "Plumbers", tsePriority: true },
  { code: "334115", title: "Roof Plumber", group: "334", groupName: "Plumbers", tsePriority: true },
  { code: "341111", title: "Electrician (General)", group: "341", groupName: "Electricians", tsePriority: true },
  { code: "341112", title: "Electrician (Special Class)", group: "341", groupName: "Electricians", tsePriority: true },
  { code: "341113", title: "Lift Mechanic", group: "341", groupName: "Electricians", tsePriority: true },
  { code: "342311", title: "Business Machine Mechanic", group: "342", groupName: "Telecommunications Trades Workers", tsePriority: true },
  { code: "342313", title: "Electronic Equipment Trades Worker", group: "342", groupName: "Telecommunications Trades Workers", tsePriority: true },
  { code: "342314", title: "Electronic Instrument Trades Worker (General)", group: "342", groupName: "Telecommunications Trades Workers", tsePriority: true },
  { code: "342315", title: "Electronic Instrument Trades Worker (Special Class)", group: "342", groupName: "Telecommunications Trades Workers", tsePriority: true },
  { code: "351111", title: "Baker", group: "351", groupName: "Foods Trades Workers", tsePriority: true },
  { code: "351112", title: "Pastrycook", group: "351", groupName: "Foods Trades Workers", tsePriority: true },
  { code: "351211", title: "Butcher or Smallgoods Maker", group: "351", groupName: "Foods Trades Workers", tsePriority: true },
  { code: "351311", title: "Chef", group: "351", groupName: "Foods Trades Workers", tsePriority: true },
  { code: "351411", title: "Cook", group: "351", groupName: "Foods Trades Workers", tsePriority: true },
  { code: "362211", title: "Gardener (General)", group: "362", groupName: "Horticultural Trades Workers", tsePriority: true, priorityCaveat: "A Gardener (General) skills assessment is accepted for these roles." },
  { code: "362212", title: "Arborist", group: "362", groupName: "Horticultural Trades Workers", tsePriority: true, priorityCaveat: "A Gardener (General) skills assessment is accepted for these roles." },
  { code: "362213", title: "Landscape Gardener", group: "362", groupName: "Horticultural Trades Workers", tsePriority: true, priorityCaveat: "A Gardener (General) skills assessment is accepted for these roles." },
  { code: "362311", title: "Greenkeeper", group: "362", groupName: "Horticultural Trades Workers", tsePriority: true, priorityCaveat: "A Gardener (General) skills assessment is accepted for these roles." },
  { code: "391111", title: "Hairdresser", group: "391", groupName: "Hairdressers", tsePriority: true },
  { code: "411111", title: "Ambulance Officer", group: "411", groupName: "Health and Welfare Support Officers", tsePriority: true, gold: true, sector: "health" },
  { code: "411112", title: "Intensive Care Ambulance Paramedic (Aus)", group: "411", groupName: "Health and Welfare Support Officers", tsePriority: true, gold: true, sector: "health" },
  { code: "411213", title: "Dental Technician", group: "411", groupName: "Health and Welfare Support Workers", tsePriority: true },
  { code: "411411", title: "Enrolled Nurse", group: "411", groupName: "Health and Welfare Support Officers", tsePriority: true, gold: true, sector: "health" },
  { code: "411711", title: "Community Worker", group: "411", groupName: "Health and Welfare Support Workers", tsePriority: true },
  { code: "411712", title: "Disabilities Services Officer", group: "411", groupName: "Health and Welfare Support Workers", tsePriority: true },
  { code: "411713", title: "Family Support Worker", group: "411", groupName: "Health and Welfare Support Workers", tsePriority: true },
  { code: "411715", title: "Residential Care Officer", group: "411", groupName: "Health and Welfare Support Workers", tsePriority: true },
  { code: "411716", title: "Youth Worker", group: "411", groupName: "Health and Welfare Support Workers", tsePriority: true },
  { code: "511111", title: "Contract Administrator", group: "511", groupName: "Contract, Program and Project Administrators", tsePriority: true },
  { code: "511112", title: "Program or Project Administrator", group: "511", groupName: "Contract, Program and Project Administrators", tsePriority: true },
];

export const NOT_LISTED = "not-listed";

export function findTasmaniaOccupation(code: string): TasmaniaOccupation | undefined {
  return tasmaniaOccupations.find((occupation) => occupation.code === code);
}

export function searchTasmaniaOccupations(query: string, limit = 12): TasmaniaOccupation[] {
  const q = query.trim().toLowerCase();
  if (!q) return [];
  const words = q.split(/\s+/);
  return tasmaniaOccupations
    .filter((occupation) => {
      const hay = `${occupation.code} ${occupation.title} ${occupation.groupName}`.toLowerCase();
      return words.every((word) => hay.includes(word));
    })
    .slice(0, limit);
}

// Groups the overseas health/education job-offer pathway accepts.
export const overseasPathwayGroups = ["241", "251", "252", "253", "254"];
