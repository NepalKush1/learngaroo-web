import type { Requirement, StateAssessmentData } from "../types";

// Victoria: subclass 190 and 491 nomination as checkable rules, transcribed
// from Live in Melbourne (Victorian Government) on 13 October 2026.
// Any occupation on the Home Affairs list for the visa can register. Every
// ROI is ranked by the Victorian Points Test (data/victoria-points.ts and
// /tools/victoria-points-calculator), across all occupations and within each
// 2026-27 priority industry.
//
// On 13 October 2026 Victoria published its 2026-27 ranking factors,
// priority occupations and fees, but not the opening date or nomination
// requirements, and took its 190, 491, ROI and FAQ pages offline. The
// eligibility rules below are the 2025-26 ones, read from those pages
// earlier the same day (the 491 page was already offline, so its rules came
// from the FAQs, the Annual earnings estimation guide and the ROI page).
// How to refresh: scripts/sources/STATE-ASSESSMENT-BRIEF.md.

const CHECKED_ON = "13 October 2026";
const HUB_URL = "https://liveinmelbourne.vic.gov.au/migrate/skilled-migration-visas";
const VPT_URL = "https://liveinmelbourne.vic.gov.au/migrate/skilled-migration-visas/vpt";
const FEES_URL = "https://liveinmelbourne.vic.gov.au/migrate/skilled-migration-visas/fees";
const UPDATE_URL = "https://liveinmelbourne.vic.gov.au/news-events/news/2026/update-victorias-skilled-visa-nomination-program-2026-27";
const CLOSED_NEWS_URL = "https://liveinmelbourne.vic.gov.au/news-events/news/2026/update-victorias-skilled-visa-nomination-program-2025-26";

const fullSkillsAssessment =
  "A full skills assessment in your nominated occupation (a provisional skills assessment issued for a Temporary Graduate visa, subclass 485, isn't enough)";

const roiNote =
  "You must lodge a Registration of Interest (ROI) with Victoria as well as an EOI in SkillSelect. An ROI isn't an application: only applicants whose ROI is selected are invited to apply.";
const rankingNote =
  "Every ROI is ranked by the Victorian Points Test (up to 950 points for age, English, experience, education, occupation skill level, partner's skill and earnings in Victoria). There is no pass mark: the highest totals are invited across all occupations, and within each 2026-27 priority industry (healthcare, social assistance, education and construction). Work out yours with our Victorian Points Test calculator.";
const statusNote =
  "Victoria's 2025-26 program closed to new ROIs on 28 April 2026 with all places filled. On 13 October 2026 it published its 2026-27 ranking factors, priority occupations and fees, but not the opening date or nomination requirements; ROIs from earlier years don't carry over.";
const feeNote = "From 2026-27 an ROI costs A$60 and, if invited, the nomination application A$180 (plus GST if you're in Australia when you pay).";

const commitment190: Requirement = {
  kind: "manual",
  text: "You must be committed to living and working in Victoria: if nominated, for at least two years (from visa grant, or from arrival if you were offshore), completing surveys on arrival and every six months in that period",
};
const commitment491: Requirement = {
  kind: "manual",
  text: "You must be committed to living and working in regional Victoria: if nominated, for at least two years (from visa grant, or from arrival if you were offshore), completing surveys on arrival and every six months in that period",
};

export const vicAssessment: StateAssessmentData = {
  state: "victoria",
  checkedOn: CHECKED_ON,
  settingsYear: "2026-27 ranking and fees; 2025-26 eligibility (2026-27 not yet published)",
  // Victoria uses the Home Affairs lists ("ha-190" / "ha-491" below).
  lists: [],
  streams: [
    {
      id: "vic-190",
      name: "Subclass 190 Skilled Nominated",
      visas: ["190"],
      audience: "both",
      status: "pending",
      occupationLists: ["ha-190"],
      requires: [
        {
          kind: "manual",
          text: `${fullSkillsAssessment}, and an English test result, each with at least 12 weeks of validity left when you lodge the nomination application`,
        },
        { kind: "manual", text: "Health professionals: your nominated occupation must be consistent with your AHPRA registration" },
        commitment190,
      ],
      // Onshore applicants must live in Victoria (no minimum period); offshore
      // applicants are eligible.
      anyOf: [[{ kind: "living", where: "state", minMonths: 0 }], [{ kind: "offshore" }]],
      notes: [
        roiNote,
        rankingNote,
        "For 2026-27, 101 occupations in healthcare, social assistance, education (teachers and early childhood) and construction (professionals and trades) are priority occupations; every other occupation with a valid skills assessment can still register.",
        "Onshore applicants must live in Victoria. Victoria makes case-by-case exceptions for people in border communities who can clearly show they work in Victoria.",
        "No employment or work experience is required. Onshore applicants in skilled employment (ANZSCO skill level 1 to 3) with an employer physically located in Victoria can claim their annual earnings in the ROI as a ranking factor; there is no minimum, and virtual offices don't count.",
        statusNote,
        feeNote,
      ],
      source: VPT_URL,
    },
    {
      id: "vic-491",
      name: "Subclass 491 Skilled Work Regional",
      visas: ["491"],
      audience: "both",
      status: "pending",
      occupationLists: ["ha-491"],
      requires: [{ kind: "manual", text: fullSkillsAssessment }, commitment491],
      // Onshore: living and working in skilled employment (ANZSCO skill level
      // 1 to 3, any occupation) in regional Victoria at the time of
      // nomination. Offshore: no employment required.
      anyOf: [
        [
          { kind: "living", where: "state-regional", minMonths: 0 },
          { kind: "working", where: "state-regional", minMonths: 0, occupation: "skilled" },
        ],
        [{ kind: "offshore" }],
      ],
      notes: [
        roiNote,
        rankingNote,
        "For 2026-27, 101 occupations in healthcare, social assistance, education (teachers and early childhood) and construction (professionals and trades) are priority occupations; every other eligible occupation can still register. (In 2025-26, hospitality and tourism were also priorities for onshore 491 candidates.)",
        "Onshore, your job doesn't have to be in your nominated occupation, but it must be skilled employment (ANZSCO skill level 1 to 3) for an employer physically located in regional Victoria; virtual offices aren't accepted. There is no minimum earnings or hours requirement.",
        "People living in other states and territories can't apply, apart from case-by-case exceptions for border communities where the applicant clearly works in regional Victoria.",
        "Regional Victoria is all of Victoria outside Melbourne and some outer areas of Melbourne, including Geelong and the Mornington Peninsula, as defined by the Home Affairs designated regional postcodes.",
        statusNote,
        feeNote,
      ],
      source: VPT_URL,
    },
  ],
  summary:
    "Victoria accepts any occupation on the Home Affairs list for the visa and ranks every Registration of Interest with its Victorian Points Test, inviting the highest totals overall and within each 2026-27 priority industry. It has published its 2026-27 ranking, priority occupations and fees but not its opening date or nomination requirements, so the eligibility rules here are the 2025-26 ones.",
  sources: [
    { label: "Update: Victoria's skilled visa nomination program 2026-27 (13 October 2026)", url: UPDATE_URL },
    { label: "Victorian Points Test", url: VPT_URL },
    { label: "Fees", url: FEES_URL },
    { label: "Skilled migration visas", url: HUB_URL },
    { label: "Update: Victoria's skilled visa nomination program 2025-26 (28 April 2026)", url: CLOSED_NEWS_URL },
  ],
};
