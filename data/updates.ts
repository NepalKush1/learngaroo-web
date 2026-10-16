// ─────────────────────────────────────────────────────────────────────────
// POLICY UPDATES — the dated feed at /updates. Each entry is a change to
// Australian migration rules, fees or processing, with the subclasses it
// affects, when it applies, and a link to the official source.
//
// Newest first. Keep summaries factual and short; the detail belongs on
// the linked source and in the relevant service page.
// ─────────────────────────────────────────────────────────────────────────

export type UpdateStatus = "in-effect" | "announced" | "consultation";

export interface PolicyUpdate {
  slug: string;
  // ISO date of publication on this site.
  date: string;
  // When the change applies, in words.
  effective: string;
  status: UpdateStatus;
  title: string;
  summary: string;
  points: string[];
  subclasses: string[];
  source: { label: string; url: string };
  // Internal pages that explain the practical effect.
  related?: { label: string; href: string }[];
}

export const policyUpdates: PolicyUpdate[] = [
  {
    slug: "victoria-2026-27-points-test-priority-occupations-and-fees",
    date: "2026-10-13",
    effective: "For the 2026-27 program (opening date not yet announced)",
    status: "announced",
    title: "Victoria publishes its 2026-27 points test, priority occupations and new nomination fees",
    summary:
      "Victoria will rank every Registration of Interest for subclass 190 and 491 nomination with the Victorian Points Test, and will charge for ROIs and nomination applications from 2026-27. The opening date and nomination requirements haven't been published yet.",
    points: [
      "Seven weighted factors, up to 950 points: age (up to 300), English (up to 200), experience in the nominated occupation (up to 100), education (up to 100), occupation skill level (50 for skill level 1), partner's skill (50) and annual earnings from skilled employment in Victoria (up to 150)",
      "No pass mark: in each round the highest totals are invited across all eligible occupations, and within each priority industry",
      "101 priority occupations in healthcare, social assistance, education (teachers and early childhood) and construction (professionals and trades)",
      "Fees: A$60 for an ROI (A$66 with GST) and A$180 for a 190 or 491 nomination application (A$198 with GST), with GST if you're in Australia when you pay",
      "ROIs from earlier program years don't carry over: submit a new one when the program opens",
    ],
    subclasses: ["190", "491"],
    source: {
      label: "Live in Melbourne: Update - Victoria's skilled visa nomination program 2026-27",
      url: "https://liveinmelbourne.vic.gov.au/news-events/news/2026/update-victorias-skilled-visa-nomination-program-2026-27",
    },
    related: [
      { label: "Victorian Points Test calculator", href: "/tools/victoria-points-calculator" },
      { label: "Victoria nomination guide", href: "/state-nomination/victoria" },
    ],
  },
  {
    slug: "student-visa-onshore-and-family-rules-2-october-2026",
    date: "2026-10-02",
    effective: "From 2 October 2026",
    status: "in-effect",
    title: "Most Student visa applicants in Australia must now apply offshore, and family members generally cannot be included",
    summary:
      "New rules for subclass 500 and 590 change who can lodge a Student visa while in Australia and whether partners and children can be included or added later. Applications lodged before 2 October 2026 are assessed under the old rules.",
    points: [
      "Most temporary visa holders in Australia, including Working Holiday, Visitor, subclass 485 and 482 holders, can no longer lodge a subclass 500 application onshore",
      "Current Student visa holders applying for a further Student visa are also caught unless an exemption applies, such as school students, PhD candidates, provider closure, or progression to a single higher-level course",
      "Where the restriction applies you must be outside Australia when you lodge and when the visa is granted",
      "New applications generally cannot include family members, and family cannot be added after grant",
      "A separate Transfer stream for students changing providers has been flagged but details were not published",
    ],
    subclasses: ["500", "590", "485", "417", "462", "600"],
    source: { label: "Home Affairs: Changes to Student visa application rules", url: "https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/changes-to-student-visa-application-rules-500-590" },
    related: [
      { label: "Student visas", href: "/services/student-visas" },
      { label: "Visitor visas", href: "/services/visitor-tourist-visas" },
    ],
  },
  {
    slug: "reformed-points-test-announced-september-2026",
    date: "2026-09-17",
    effective: "Not yet in force; commencement date to be announced",
    status: "announced",
    title: "Government announces a reformed skilled migration points test",
    summary:
      "The Government announced changes to the points test used for subclass 189, 190 and 491. Until the new regulations commence, the current points table continues to apply to invitations.",
    points: [
      "The current points test (Schedule 6D) still applies to every invitation until the reform commences",
      "Applicants should keep their EOI accurate under the current rules and watch for the commencement instrument",
      "We will update the free points calculator on the day the new table takes effect",
    ],
    subclasses: ["189", "190", "491"],
    source: { label: "Home Affairs: skilled migration points test", url: "https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/skilled-independent-189/points-table" },
    related: [{ label: "Points calculator", href: "/tools/points-calculator" }],
  },
  {
    slug: "tasmania-2026-27-nomination-program-opens",
    date: "2026-08-17",
    effective: "From 17 August 2026",
    status: "in-effect",
    title: "Tasmania opens its 2026-27 state nomination program with 2,050 places",
    summary:
      "Tasmania was the first state to open for 2026-27, with 1,250 subclass 190 and 800 subclass 491 places, free Registrations of Interest and weekly invitation rounds from 20 August.",
    points: [
      "Nomination fee rose to A$425.70 including GST",
      "A 190 candidate who falls short on visa requirements may be nominated for 491 instead",
      "Pending 491 nominations are not automatically reassessed for 190; withdraw and re-register to switch",
    ],
    subclasses: ["190", "491"],
    source: { label: "Migration Tasmania: Program Update, August 2026 (2026-27 program opening)", url: "https://www.migration.tas.gov.au/news/2024-25_program_open_to_rois" },
    related: [{ label: "Tasmania nomination guide", href: "/state-nomination/tasmania" }],
  },
  {
    slug: "visa-application-charges-increase-1-july-2026",
    date: "2026-07-01",
    effective: "Applications lodged on or after 1 July 2026",
    status: "in-effect",
    title: "Visa application charges increased across student, graduate, skilled, employer-sponsored and partner visas",
    summary:
      "Annual fee changes took effect on 1 July 2026, with larger than usual increases for several subclasses. The charge is set by the date a valid application is received.",
    points: [
      "Student (500): A$2,000 to A$2,500",
      "Temporary Graduate (485): A$4,600 to A$5,750",
      "Skilled 189: A$6,135; 190 and 491: A$6,140",
      "Skills in Demand (482): A$3,210 to A$4,015; 186 and 494: A$6,140",
      "Partner and Prospective Marriage visas: A$9,365 to A$11,710",
      "Visitor (600) Tourist stream from outside Australia: A$250",
    ],
    subclasses: ["500", "485", "189", "190", "491", "482", "186", "494", "820", "309", "300", "600"],
    source: { label: "Home Affairs: current visa pricing", url: "https://immi.homeaffairs.gov.au/visas/getting-a-visa/fees-and-charges/current-visa-pricing" },
    related: [{ label: "Visa fee calculator", href: "/tools/fee-calculator" }],
  },
  {
    slug: "skilled-visa-income-thresholds-indexed-1-july-2026",
    date: "2026-07-01",
    effective: "Nominations lodged on or after 1 July 2026",
    status: "in-effect",
    title: "Skilled visa income thresholds indexed for 2026-27",
    summary:
      "The Core Skills Income Threshold, Specialist Skills Income Threshold and TSMIT were indexed in line with average weekly earnings. Employer nominations must meet the new floor and the market salary rate.",
    points: [
      "Applies to new subclass 482, 186 and 494 nominations; existing visa holders are not re-tested",
      "Salary must also match what an Australian worker would be paid for the same role",
      "Regional concessions exist under some labour agreements and DAMAs",
    ],
    subclasses: ["482", "186", "494"],
    source: { label: "Home Affairs: annual indexation of skilled visa income thresholds", url: "https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/skills-in-demand-visa-subclass-482" },
    related: [{ label: "Employer-sponsored visas", href: "/services/employer-sponsored-visas" }],
  },
  {
    slug: "art-review-fee-increase-1-july-2026",
    date: "2026-07-01",
    effective: "Fees paid on or after 1 July 2026",
    status: "in-effect",
    title: "ART application fee for migration reviews rises to A$3,727",
    summary:
      "The Administrative Review Tribunal's standard fee for reviewing most migration decisions increased from A$3,580 to A$3,727. The new fee applies to any fee paid on or after 1 July 2026, even for reviews lodged earlier.",
    points: [
      "A 50% fee reduction may be available where paying would cause financial hardship",
      "Half the fee is refunded if the Tribunal sets aside or remits the decision",
      "Time limits to apply are unchanged and cannot be extended",
    ],
    subclasses: ["ART"],
    source: { label: "ART: immigration and citizenship reviews", url: "https://www.art.gov.au/applying-review/immigration-and-citizenship" },
    related: [{ label: "ART Reviews", href: "/services/art-reviews" }],
  },
];

export const statusLabels: Record<UpdateStatus, { label: string; className: string }> = {
  "in-effect": { label: "In effect", className: "bg-emerald-100 text-emerald-800 ring-emerald-200" },
  announced: { label: "Announced, not yet in effect", className: "bg-amber-100 text-amber-800 ring-amber-200" },
  consultation: { label: "Under consultation", className: "bg-gray-100 text-gray-700 ring-gray-200" },
};

export function formatUpdateDate(iso: string): string {
  return new Date(`${iso}T00:00:00+11:00`).toLocaleDateString("en-AU", {
    day: "numeric",
    month: "short",
    year: "numeric",
    timeZone: "Australia/Melbourne",
  });
}
