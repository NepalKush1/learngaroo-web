// The skills assessing authorities Home Affairs recognises, as its
// "Assessing authorities" table lists them (name, full name and website).
//
// Source: https://immi.homeaffairs.gov.au/visas/working-in-australia/skills-assessment/assessing-authorities
// (the table loads from POST /_layouts/15/api/Data.aspx/GetAssessingAuthorities
// with {"webUrl": "/work-in-australia"}), read on `assessingAuthoritiesCheckedOn`.
// Websites are the ones Home Affairs links to, opened over https. The table
// also has qualified rows ("ACS (Data Scientist only)", "TRA (trades)",
// "VETASSESS (non-trades)") for the same bodies; those are left out here.
// Which authority assesses which occupation comes from the skilled occupation
// list (data/state-assessment/home-affairs.ts).

export const assessingAuthoritiesCheckedOn = "13 October 2026";

export const assessingAuthoritiesSource = "https://immi.homeaffairs.gov.au/visas/working-in-australia/skills-assessment/assessing-authorities";

export interface HomeAffairsAuthority {
  // Short name as Home Affairs uses it in the occupation list, e.g. "VETASSESS".
  name: string;
  fullName: string;
  url?: string;
}

export const homeAffairsAuthorities: HomeAffairsAuthority[] = [
  { name: "AACA", fullName: "Architects Accreditation Council of Australia", url: "https://www.aaca.org.au/" },
  { name: "AASW", fullName: "Australian Association of Social Workers Limited", url: "https://www.aasw.asn.au/" },
  // Home Affairs' table cuts this name short ("... Care Quality"); the full name is ACECQA's own.
  { name: "ACECQA", fullName: "Australian Children's Education and Care Quality Authority", url: "https://www.acecqa.gov.au/" },
  { name: "ACPSEM", fullName: "Australasian College of Physical Scientists and Engineers in Medicine", url: "https://www.acpsem.org.au/" },
  { name: "ACS", fullName: "Australian Computer Society Incorporated", url: "https://www.acs.org.au/" },
  { name: "ADC", fullName: "Australian Dental Council Limited", url: "https://www.adc.org.au/" },
  { name: "AIMS", fullName: "Australian Institute of Medical Scientists", url: "https://www.aims.org.au/" },
  { name: "AIQS", fullName: "The Australian Institute of Quantity Surveyors", url: "https://www.aiqs.com.au/" },
  { name: "AITSL", fullName: "Australian Institute for Teaching and School Leadership Limited", url: "https://www.aitsl.edu.au/" },
  { name: "AMSA", fullName: "Australian Maritime Safety Authority", url: "https://www.amsa.gov.au/" },
  { name: "ANMAC", fullName: "Australian Nursing & Midwifery Accreditation Council Limited", url: "https://www.anmac.org.au/" },
  { name: "ANZSNM", fullName: "Australian and New Zealand Society of Nuclear Medicine", url: "https://www.anzsnm.org.au/" },
  { name: "AOAC", fullName: "Australasian Osteopathic Accreditation Council Limited", url: "https://www.osteopathiccouncil.org.au/" },
  { name: "AOPA", fullName: "Australian Orthotic Prosthetic Association Limited", url: "https://www.aopa.org.au/" },
  { name: "APC", fullName: "Australian Physiotherapy Council Limited", url: "https://www.physiocouncil.com.au/" },
  { name: "APharmC", fullName: "Australian Pharmacy Council Limited", url: "https://www.pharmacycouncil.org.au/" },
  { name: "APS", fullName: "Australian Psychological Society Limited", url: "https://www.psychology.org.au/" },
  { name: "ASMIRT", fullName: "Australian Society of Medical Imagery and Radiation Therapy", url: "https://www.asmirt.org/" },
  { name: "AVBC", fullName: "Australasian Veterinary Boards Council Incorporated", url: "https://www.avbc.asn.au/" },
  { name: "CAANZ", fullName: "Chartered Accountants Australia and New Zealand", url: "https://www.charteredaccountantsanz.com/" },
  { name: "CASA", fullName: "Civil Aviation Safety Authority", url: "https://www.casa.gov.au/" },
  { name: "CCEA", fullName: "Council on Chiropractic Education Australasia Limited", url: "https://www.ccea.com.au/" },
  { name: "CMBA", fullName: "Chinese Medicine Board of Australia", url: "https://www.chinesemedicineboard.gov.au/" },
  { name: "Community Work Australia", fullName: "Community Work Australia Limited", url: "https://communitywork.org.au/" },
  { name: "CPAA", fullName: "CPA Australia Ltd", url: "https://www.cpaaustralia.com.au/" },
  { name: "DAA", fullName: "Dietitians Association of Australia", url: "https://daa.asn.au/" },
  { name: "Engineers Australia", fullName: "The Institution of Engineers Australia", url: "https://www.engineersaustralia.org.au/" },
  { name: "IML", fullName: "Institute of Managers and Leaders National", url: "https://managersandleaders.com.au/" },
  { name: "IPA", fullName: "Institute of Public Accountants Ltd", url: "https://www.publicaccountants.org.au/" },
  { name: "ISNSW", fullName: "Institution of Surveyors New South Wales", url: "https://www.surveyors.org.au/" },
  { name: "Legal admissions authority of a state or territory", fullName: "Legal admissions authority of a state or territory" },
  { name: "MedBA", fullName: "Medical Board of Australia", url: "https://www.ahpra.gov.au/" },
  { name: "NAATI", fullName: "National Accreditation Authority for Translators and Interpreters Ltd", url: "https://www.naati.com.au/" },
  { name: "OCANZ", fullName: "Optometry Council of Australia and New Zealand Limited", url: "https://www.ocanz.org/" },
  { name: "OTC", fullName: "Occupational Therapy Council of Australia Limited", url: "https://www.otcouncil.com.au/" },
  { name: "PodBA", fullName: "Podiatry Board of Australia", url: "https://www.podiatryboard.gov.au/" },
  { name: "SPA", fullName: "The Speech Pathology Association of Australia Limited", url: "https://www.speechpathologyaustralia.org.au/" },
  { name: "TRA", fullName: "Trades Recognition Australia", url: "https://tradesrecognitionaustralia.gov.au/" },
  { name: "VETASSESS", fullName: "Vocational Education and Training Assessment Services", url: "https://www.vetassess.com.au/" },
];

const byName = new Map(homeAffairsAuthorities.map((authority) => [authority.name.toLowerCase(), authority]));

// One entry of the occupation list's "Assessing authority" column split into
// the bodies it names: "VETASSESS (non-trades) / TRA (trades)" gives
// VETASSESS with the note "non-trades" and TRA with "trades"; "CAANZ / CPAA /
// IPA" gives all three.
export function authoritiesFor(column: string): { authority?: HomeAffairsAuthority; label: string; note?: string }[] {
  return column
    .split("/")
    .map((part) => part.trim())
    .filter(Boolean)
    .map((part) => {
      const match = part.match(/^(.*?)\s*\(([^)]+)\)$/);
      const name = match ? match[1] : part;
      return { authority: byName.get(name.toLowerCase()), label: name, ...(match ? { note: match[2] } : {}) };
    });
}
