import type { ServiceExplainer } from "./types";
import { ICON } from "../visas/explainers/icons";
import { employerFinder } from "../visas/explainers/employer-sponsored/employer-finder";
import { skillsInDemand482Explainer } from "../visas/explainers/skills-in-demand-482";

// Interactive explainer for /services/employer-sponsored-visas: the 482, 186
// and 494 for workers and employers. Every figure is on the library pages in
// `pages` (data/visas/employer-sponsored.ts, and the subclass 191 page in
// data/visas/skilled.ts), checked against Home Affairs on 12 October 2026.
// That the Visa Pricing Estimator leaves out the second instalment was read
// on the Home Affairs 494 pages on 13 October 2026 (see verifiedExtras).
// Reused tools: the shared employer finder, and the 482 stream finder and
// road to PR. The tools hard-code the glossary ids csit, ssit, anzsco,
// labour-agreement, amsr and trt, so keep those terms below.

const PAGE_SPONSOR = "/visas/employer-sponsored/employer-sponsorship-and-nomination";
const PAGE_AGREEMENTS = "/visas/employer-sponsored/labour-agreements-and-dama";

export const employerSponsoredVisasServiceExplainer: ServiceExplainer = {
  slug: "employer-sponsored-visas",
  factsAsAt: "13 October 2026",
  pages: [
    "skills-in-demand-visa-482",
    "employer-nomination-scheme-visa-186",
    "skilled-employer-sponsored-regional-visa-494",
    "employer-sponsorship-and-nomination",
    "permanent-residence-skilled-regional-visa-191",
    "labour-agreements-and-dama",
  ],
  name: "employer-sponsored visa route",
  accent: "Subclasses 482, 186 and 494",
  oneLiner:
    "An Australian employer sponsors a skilled worker for a genuine job: the 482 for up to 4 years, the regional 494 for 5 years, or the permanent 186. The 482 and 494 can lead to permanent residence.",
  bigIdeas: [
    {
      title: "The employer comes first",
      body: "No employer, no visa. The business nominates a genuine job, pays at least the market rate and pays its own sponsorship costs.",
      icon: ICON.buildingOffice2,
    },
    {
      title: "Three visas, three shapes",
      body: "The 482 lasts up to 4 years, the 494 lasts 5 years in regional Australia, and the 186 is permanent from the start.",
      icon: ICON.arrowsRightLeft,
    },
    {
      title: "A road to permanent residence",
      body: "After 2 years of sponsored work on a 482, your employer can nominate you for the 186. On a 494, apply for the 191 after 3 years.",
      icon: ICON.home,
    },
  ],
  heroCard: [
    { label: "Who sponsors you", value: "An Australian employer, for a genuine job", icon: ICON.buildingOffice2 },
    { label: "How long", value: "Up to 4 years (482), 5 years (494), permanent (186)", icon: ICON.clock },
    { label: "Salary floor", value: "At least A$79,423 and the market rate", icon: ICON.currencyDollar },
    { label: "Path to PR", value: "186 after 2 years on a 482; 191 after 3 years on a 494", icon: ICON.home },
    { label: "Visa charge", value: "From A$4,015 (482); A$6,140 (186 and 494)", icon: ICON.banknotes },
    { label: "Employer's costs", value: "Charges and the SAF levy, never passed on to the worker", icon: ICON.shieldCheck },
  ],
  compare: {
    navLabel: "Compare",
    eyebrow: "Side by side",
    title: "482, 186 or 494: how they compare",
    highlight: "how they compare",
    subtitle: "The three main employer-sponsored visas, on the questions people ask first. Each column links to the full guide.",
    rows: [
      { label: "Who sponsors you", icon: ICON.buildingOffice2 },
      { label: "How long it lasts", icon: ICON.clock },
      { label: "Salary floor", icon: ICON.currencyDollar },
      { label: "Experience and age", icon: ICON.briefcase },
      { label: "Where you work", icon: ICON.mapPin },
      { label: "Government fee", icon: ICON.banknotes },
      { label: "Path to permanent residence", icon: ICON.home },
    ],
    columns: [
      {
        page: "skills-in-demand-visa-482",
        name: "Subclass 482",
        tagline: "Skills in Demand, temporary",
        values: [
          "A Standard Business Sponsor (or a business that has applied to be one)",
          "Up to 4 years (5 for Hong Kong passport holders)",
          "A$79,423 (Core Skills) or A$146,576 (Specialist Skills), and the market rate",
          "At least 1 year in the last 5 years; no age limit",
          "For your sponsor, in the nominated occupation; no regional rule",
          "A$4,015 for you; A$4,015 per adult and A$1,005 per child",
          "Subclass 186 after 2 years of full-time sponsored work",
        ],
        bestFor: "The usual starting point: a skilled job and at least 1 year of experience",
      },
      {
        page: "employer-nomination-scheme-visa-186",
        name: "Subclass 186",
        tagline: "Employer Nomination Scheme, permanent",
        values: [
          "An Australian business nominates you; no sponsor approval needed",
          "Permanent, with a 5-year travel facility",
          "A$79,423 (CSIT), and the market rate if you earn under A$250,000",
          "2 years on a 482 (TRT), or 3 years plus a skills assessment; under 45 unless exempt",
          "Unrestricted; you're expected to stay with your employer for 2 years",
          "A$6,140 for you; A$3,070 per adult and A$1,535 per child",
          "Already permanent; citizenship after 4 years' lawful residence",
        ],
        bestFor: "482 holders with 2 years' sponsored work, or experienced workers with a skills assessment",
      },
      {
        page: "skilled-employer-sponsored-regional-visa-494",
        name: "Subclass 494",
        tagline: "Skilled Employer Sponsored Regional, 5 years",
        values: [
          "A Standard Business Sponsor with a job in a designated regional area",
          "5 years from grant; it can't be extended",
          "A$79,423 (TSMIT) and the market rate, assessed by a regional body",
          "3 years full-time plus a skills assessment; under 45 unless exempt",
          "Regional Australia only: everywhere except Sydney, Melbourne and Brisbane",
          "A$6,140 for you; A$3,070 per adult and A$1,535 per child",
          "Subclass 191 after holding the 494 for 3 years",
        ],
        bestFor: "Experienced workers under 45 with a regional employer, ready to live regionally",
      },
    ],
    footnote:
      "Government charges from 1 July 2026. A labour agreement can change the occupation, salary, English, experience or age rules for each visa.",
  },
  actors: [
    {
      id: "employer",
      name: "Your employer (the sponsor)",
      short: "Employer",
      icon: ICON.buildingOffice2,
      tone: "pink",
      role: "Sponsors you and nominates a genuine job it needs filled.",
      does: [
        "Becomes a [[sbs|Standard Business Sponsor]] for a 482 or 494 (A$420, approved for 5 years)",
        "Advertises a 482 or 494 job in Australia first ([[lmt|labour market testing]])",
        "Lodges the [[nomination]] and pays the charge and the [[saf|SAF levy]]",
        "Pays at least the [[amsr|market rate]] and meets its sponsor obligations",
      ],
    },
    {
      id: "you",
      name: "You (the worker)",
      short: "You",
      icon: ICON.user,
      tone: "green",
      role: "Apply for the visa with the nomination's [[trn|TRN]], then work in the nominated job.",
      does: [
        "Show the experience your visa needs: 1 year (482) or 3 years (494, 186 [[direct-entry|Direct Entry]])",
        "Meet the English, health and character rules, with a [[skills-assessment|skills assessment]] if needed",
        "Lodge your application and pay your own visa charge",
        "Keep to your visa conditions, such as working only for your sponsor",
      ],
    },
    {
      id: "government",
      name: "Department of Home Affairs",
      short: "Home Affairs",
      icon: ICON.buildingLibrary,
      tone: "blue",
      role: "Approves sponsors and nominations, decides visas and monitors compliance.",
      does: [
        "Approves the sponsorship and the [[nomination]]",
        "Assesses the visa application and grants it with its conditions",
        "Monitors sponsors during, and for 5 years after, the sponsorship",
        "Can bar, cancel or fine a sponsor that breaks the rules",
      ],
    },
  ],
  flows: [
    {
      from: "employer",
      to: "government",
      label: "Sponsors + nominates",
      detail: "Your employer becomes a [[sbs|Standard Business Sponsor]] (not needed for a 186) and nominates the job: the occupation, the duties and the salary.",
    },
    {
      from: "employer",
      to: "you",
      label: "Gives you the TRN",
      detail: "Your employer gives you the nomination's reference number, the [[trn|TRN]], which links your application to the job.",
    },
    {
      from: "you",
      to: "government",
      label: "You apply",
      detail: "You apply with the TRN and your own evidence: experience, English and, where needed, a [[skills-assessment|skills assessment]]. You pay your own visa charge.",
    },
    {
      from: "government",
      to: "you",
      label: "Visa granted",
      detail: "Home Affairs approves the nomination, then grants your visa. A 482 or 494 comes with conditions, such as working only for your sponsor.",
    },
    {
      from: "you",
      to: "employer",
      label: "You start work",
      detail: "You start within 90 days (482 and 494) or 6 months (186), and build the time that can lead to permanent residence.",
    },
    {
      from: "employer",
      to: "government",
      label: "Nominates you for PR",
      detail: "After 2 years of sponsored work on a 482, your employer can nominate you for the permanent 186. On a 494, you apply for the [[subclass-191|subclass 191]] yourself after 3 years.",
    },
  ],
  journeyTitle: "From job offer to permanent residence",
  journeyHighlight: "permanent residence",
  stages: [
    {
      id: "fit",
      short: "Fit",
      title: "Work out which visa fits",
      who: ["you", "employer"],
      description: "It depends on where the job is, the occupation and salary, and the worker's experience, age and English.",
      points: [
        "At least 1 year of experience: usually the 482",
        "3 years, a [[skills-assessment|skills assessment]] and under 45: the regional 494, or the 186 [[direct-entry|Direct Entry stream]]",
        "Occupation not on a list, or concessions needed: a [[labour-agreement|labour agreement]] may help",
      ],
      youHold: "A plan: the visa, the stream and what each side needs to do",
      icon: ICON.map,
    },
    {
      id: "sponsor",
      short: "Sponsor",
      title: "The employer becomes a sponsor",
      who: ["employer"],
      description: "For a 482 or 494, the business applies to Home Affairs to be a [[sbs|Standard Business Sponsor]]. A 186 needs only a nomination.",
      points: [
        "A$420, approved for 5 years",
        "It can be lodged at the same time as the nomination",
        "It brings legal obligations, such as paying the nominated salary and keeping records",
      ],
      youHold: "A sponsor with an approved (or lodged) sponsorship",
      cost: "A$420, paid by the employer",
      icon: ICON.buildingOffice2,
    },
    {
      id: "advertise",
      short: "Advertise",
      title: "The job is advertised in Australia",
      who: ["employer"],
      description: "Before a 482 or 494 nomination, the business shows it looked for local workers. This is [[lmt|labour market testing]].",
      points: [
        "At least two ads, each running at least four weeks",
        "Within the four months before the nomination",
        "The ads show the salary if it's under A$96,400",
        "Trade-agreement exemptions cover some 482 roles, never the 494",
      ],
      youHold: "Evidence the job was offered locally first",
      cost: "Advertising costs, paid by the employer",
      icon: ICON.megaphone,
    },
    {
      id: "nominate",
      short: "Nominate",
      title: "The employer nominates the job",
      who: ["employer", "government"],
      description: "The [[nomination]] sets out the occupation, duties and salary. The worker gets its [[trn|TRN]] to apply with.",
      points: [
        "Salary at least the [[amsr|market rate]] and A$79,423 ([[csit|CSIT]] or [[tsmit|TSMIT]]), or A$146,576 ([[ssit|SSIT]]) for 482 Specialist Skills",
        "Nomination charge: A$330 (482), A$540 (186, nil in regional Australia), nil (494)",
        "[[saf|SAF levy]]: A$1,200 or A$1,800 a year (482), or A$3,000 or A$5,000 once (186, 494)",
        "For a 494, a [[rcb|regional certifying body]] assesses the salary",
      ],
      youHold: "A nomination TRN, then an approval",
      cost: "Nomination charge and SAF levy, paid by the employer",
      icon: ICON.documentText,
    },
    {
      id: "prepare",
      short: "Prepare",
      title: "The worker gathers evidence",
      who: ["you"],
      description: "While the employer handles its part, you get your own documents ready.",
      points: [
        "References showing 1 year (482) or 3 years (494, 186 Direct Entry) of relevant work",
        "English: IELTS 5.0 in each band (482) or [[competent-english|Competent English]], IELTS 6 (186, 494), unless exempt",
        "A [[skills-assessment|skills assessment]] for the 494 and 186 Direct Entry, and for some 482s",
        "Health insurance (482) and police certificates",
      ],
      youHold: "References, an English result and any skills assessment you need",
      cost: "Tests and assessments, paid by you",
      icon: ICON.clipboardDocumentCheck,
    },
    {
      id: "apply",
      short: "Apply",
      title: "The worker applies and Home Affairs decides",
      who: ["you", "government"],
      description: "You apply online, in or outside Australia, with the TRN. Home Affairs must approve the nomination before it grants the visa.",
      points: [
        "A$4,015 (482) or A$6,140 (186, 494) for you, plus a charge for each family member",
        "In Australia you need a visa, or a Bridging visa A, B or C",
        "For a 186, apply within 6 months of the nomination's approval",
        "Check current processing times on the Home Affairs tool",
      ],
      youHold: "A grant letter that lists your conditions",
      cost: "From A$4,015, paid by you",
      icon: ICON.paperAirplane,
    },
    {
      id: "work",
      short: "Work",
      title: "Start work and keep to the conditions",
      who: ["you", "employer"],
      description: "Start within 90 days (482, 494) or 6 months (186). On a 186, Home Affairs expects you to stay with your employer for at least 2 years.",
      points: [
        "On a 482 or 494, work only for your sponsor in the nominated occupation ([[work-condition|conditions 8607 and 8608]])",
        "On a 494, live, work and study only in a [[dra|designated regional area]]",
        "If a 482 or 494 job ends: up to 180 days at a time, and 365 in total, to find a new sponsor or another visa",
        "Your sponsor tells Home Affairs about changes, such as you leaving, within 28 days",
      ],
      youHold: "Sponsored work time that counts towards permanent residence",
      icon: ICON.briefcase,
    },
    {
      id: "pr",
      short: "PR",
      title: "Permanent residence",
      who: ["you", "employer"],
      description: "From a 482, your employer can nominate you for the 186 [[trt|TRT stream]] after 2 years. From a 494, you apply for the [[subclass-191|subclass 191]] after 3 years.",
      points: [
        "186 TRT: 2 years full-time in the last 3, under 45 unless exempt, and Competent English",
        "191: hold the 494 for 3 years, keep to its conditions, and have ATO notices of assessment for 3 of the 5 income years",
        "Home Affairs states there's no minimum income for the 191",
      ],
      youHold: "Permanent residence",
      cost: "A$6,140 (186) or A$630 (191), paid by you",
      icon: ICON.home,
    },
  ],
  check: {
    ok: {
      title: "Nothing here rules it out",
      body: "The next step is checking the details on both sides: the right visa, the nomination and the worker's evidence.",
    },
    todo: {
      title: "Workable, with things to sort",
      body: "None of these are deal-breakers, but each needs attention before the nomination or the visa application is lodged.",
    },
    stop: {
      title: "Some hurdles to solve first",
      body: "At least one answer means a standard employer-sponsored visa isn't possible yet. The notes explain why and what might work instead.",
    },
    disclaimer: "A general self-check, not advice or a prediction. Home Affairs assesses each nomination and visa application on its evidence.",
  },
  quiz: [
    {
      id: "sponsor",
      topic: "Sponsoring employer",
      question: "Is there an Australian employer ready to sponsor the worker?",
      help: "Answer as the worker or as the employer: every question works for both sides.",
      options: [
        {
          value: "approved",
          label: "Yes, and it's already an approved sponsor",
          status: "ok",
          note: "One step done. The business still lodges a [[nomination]] for the specific job.",
        },
        {
          value: "willing",
          label: "Yes, and it's willing to apply",
          status: "todo",
          note: "For a 482 or 494, the business applies to be a [[sbs|Standard Business Sponsor]] (A$420, approved for 5 years), and can lodge this with the nomination. A 186 needs only a nomination.",
          link: { label: "What employers need to do", href: PAGE_SPONSOR },
        },
        {
          value: "talking",
          label: "We're still discussing it",
          status: "todo",
          note: "Talk early about the costs and obligations. Sponsoring is a legal commitment for the business.",
          link: { label: "See who does what", href: "#roles" },
        },
        {
          value: "no",
          label: "No employer will sponsor",
          status: "stop",
          note: "Every visa here needs an employer. The points-tested visas (subclasses 189, 190 and 491) don't depend on one.",
          link: { label: "Points-tested visas", href: "/visas/skilled/skilled-migration-points-test" },
        },
      ],
    },
    {
      id: "where",
      topic: "Where the job is",
      question: "Where is the job?",
      help: "The work address decides, not the head office.",
      options: [
        {
          value: "regional",
          label: "Regional Australia, such as Perth, Adelaide, Hobart or a country town",
          status: "ok",
          note: "The 482, 186 and regional 494 are all possible. Regional means everywhere except Sydney, Melbourne and Brisbane.",
        },
        {
          value: "city",
          label: "Sydney, Melbourne or Brisbane",
          status: "ok",
          note: "The 482 and 186 are open. The 494 isn't: it needs a job in a [[dra|designated regional area]].",
        },
        {
          value: "unsure",
          label: "I'm not sure the location counts as regional",
          status: "todo",
          note: "Check the work address postcode before the nomination is lodged.",
          link: { label: "Regional postcode checker", href: "/tools/regional-postcode-checker" },
        },
      ],
    },
    {
      id: "salary",
      topic: "Salary",
      question: "What will the job pay a year?",
      help: "The pay must also be at least the [[amsr|market rate]]: what an Australian earns for the same job in the same place.",
      options: [
        {
          value: "high",
          label: "A$146,576 or more",
          status: "ok",
          note: "Meets every standard threshold. The 482 Specialist Skills stream may fit, unless the job is a trade, machinery operator or labourer role.",
        },
        {
          value: "standard",
          label: "A$79,423 or more, but under A$146,576",
          status: "ok",
          note: "Meets the [[csit|CSIT]] and [[tsmit|TSMIT]] of A$79,423. For a 482, the occupation must also be on the [[csol|Core Skills Occupation List]].",
        },
        {
          value: "low",
          label: "Under A$79,423",
          status: "stop",
          note: "Below the minimum for the standard 482, 186 and 494. A [[labour-agreement|labour agreement]] can allow a lower salary only in Category 3 regional areas, and never below what an equivalent Australian worker receives.",
          link: { label: "Labour agreements explained", href: PAGE_AGREEMENTS },
        },
        {
          value: "unsure",
          label: "Not settled yet",
          status: "todo",
          note: "The salary decides which 482 stream the job can use. Try the stream finder.",
          link: { label: "Open the stream finder", href: "#stream" },
        },
      ],
    },
    {
      id: "experience",
      topic: "Work experience",
      question: "How much relevant work experience does the worker have?",
      help: "For the 482, part-time and casual work counts if it adds up to 12 months full-time. For the 494, casual work isn't counted.",
      options: [
        {
          value: "under1",
          label: "Less than 1 year",
          status: "stop",
          note: "The 482 needs at least 1 year in the last 5 years, and the 494 and 186 Direct Entry need 3. For the 482, a labour agreement can set a different rule.",
          link: { label: "Labour agreements explained", href: PAGE_AGREEMENTS },
        },
        {
          value: "mid",
          label: "1 year or more, but under 3",
          status: "ok",
          note: "Enough for the 482. After 2 years of full-time sponsored work, the 186 [[trt|TRT stream]] can follow.",
        },
        {
          value: "three",
          label: "3 years or more, full-time",
          status: "ok",
          note: "The 494 or the 186 [[direct-entry|Direct Entry stream]] may also fit, with a positive [[skills-assessment|skills assessment]] and an age under 45.",
          link: { label: "Compare the three visas", href: "#compare" },
        },
      ],
    },
    {
      id: "age",
      topic: "Age",
      question: "How old will the worker be when applying?",
      options: [
        {
          value: "under",
          label: "Under 45",
          status: "ok",
          note: "Meets the age rule for all three. Starting on a 482? Check you'll still be under 45 when the 186 application goes in.",
          link: { label: "Plan your road to PR", href: "#pr-road" },
        },
        {
          value: "over",
          label: "45 or over",
          status: "todo",
          note: "The 482 has no age limit, but the 186 and 494 need you to be under 45 unless exempt, such as some academics, scientists, regional doctors and high earners on a 482.",
          link: { label: "Get advice", href: "/bookings" },
        },
      ],
    },
    {
      id: "english",
      topic: "English",
      question: "What English result does the worker have?",
      options: [
        {
          value: "competent",
          label: "IELTS 6 in each band (or equivalent), or a UK, Irish, US, Canadian or NZ passport",
          status: "ok",
          note: "Meets [[competent-english|Competent English]], the level for the 186 and 494, and more than the 482 needs.",
        },
        {
          value: "five",
          label: "IELTS 5.0 in each band (or equivalent)",
          status: "todo",
          note: "Enough for the 482. The 186 and 494 need Competent English: IELTS 6 in each band, or equivalent.",
        },
        {
          value: "none",
          label: "Not tested yet, or below 5.0 in a band",
          status: "todo",
          note: "Book an approved test; results must be from the last 3 years, and fully online tests aren't accepted for the 482. A labour agreement may set a different standard.",
          link: { label: "Practise PTE on Learniiz", href: "https://www.learniiz.com", external: true },
        },
      ],
    },
    {
      id: "costs",
      topic: "Who pays",
      question: "Who will pay the sponsorship costs?",
      options: [
        {
          value: "employer",
          label: "The employer pays all of them",
          status: "ok",
          note: "Right. The sponsor pays the sponsorship and nomination charges, the [[saf|SAF levy]], and its recruitment and migration agent costs. The worker pays their own visa charge.",
        },
        {
          value: "worker",
          label: "The worker is expected to pay some of them",
          status: "stop",
          note: "Not allowed. The employer can't recover these costs from the worker or their family, and asking for or receiving a benefit for sponsorship is a criminal offence for both sides.",
        },
      ],
    },
    {
      id: "status",
      topic: "Where the worker is",
      question: "Where is the worker now?",
      options: [
        { value: "outside", label: "Outside Australia", status: "ok", note: "All three visas can be applied for from overseas." },
        {
          value: "onshore",
          label: "In Australia, holding a visa (or a Bridging visa A, B or C)",
          status: "ok",
          note: "All three can be applied for in Australia. For a 482, an extra A$700 charge may apply.",
        },
        {
          value: "unlawful",
          label: "In Australia without a visa, or on a Bridging visa E",
          status: "stop",
          note: "None of these visas can be lodged in Australia in this situation. Get advice before you do anything else.",
          link: { label: "Book urgent advice", href: "/bookings" },
        },
      ],
    },
  ],
  myths: [
    {
      myth: "The worker can pay for their own sponsorship.",
      fact: "No. The employer must pay the sponsorship and nomination charges, the SAF levy, and its recruitment and migration agent costs, and can't recover them from the worker. Asking for or receiving a benefit for sponsorship is a criminal offence for both sides.",
    },
    {
      myth: "Regional means the countryside only.",
      fact: "No. For the 494, designated regional areas are all of Australia except Sydney, Melbourne and Brisbane. Perth, Adelaide, the Gold Coast, Canberra and Hobart all count. The work address decides, not the head office.",
    },
    {
      myth: "I need 4 years on a 482 before I can get permanent residence.",
      fact: "No. The 186 Temporary Residence Transition stream needs 2 years of full-time sponsored work in the 3 years before you apply. With a skills assessment and 3 years' experience, the 186 Direct Entry stream doesn't need a 482 at all.",
    },
    {
      myth: "If I lose my job, I have to leave straight away.",
      fact: "No. On a 482 or 494 you have up to 180 days in a single period, and 365 days in total across the visa, to have a new nomination approved, get another visa or leave.",
    },
    {
      myth: "The 482, 186 and 494 all have an age limit.",
      fact: "Not the 482. The 186 and 494 need you to be under 45 when you apply, unless you're exempt. If you start on a 482, check how old you'll be after 2 years, when you could apply for the 186.",
    },
    {
      myth: "A 494 holder can switch to a 186 at any time.",
      fact: "Not until they've held the 494 for 3 years. Until then a 186, 189 or 190 visa can't be granted. The 494's own road to permanent residence is the subclass 191.",
    },
    {
      myth: "The 191 needs a minimum income.",
      fact: "Home Affairs states there's no minimum income. You need ATO notices of assessment for 3 of the 5 income years of your 494, and to have kept to its conditions.",
    },
    {
      myth: "Family members can't work on a 482 or 494.",
      fact: "They can. On a 482, partners and children can live, work and study with no limit on hours. On a 494 they can too, but only in a designated regional area. A 186 is permanent for the whole family.",
    },
  ],
  roles: [
    {
      id: "worker",
      label: "I'm the worker",
      intro: "Your part is your own evidence, a valid application with the [[trn|TRN]], and keeping to your conditions once you're here.",
      groups: [
        {
          title: "Before you apply",
          items: [
            "Check which visa fits: 1 year of experience for a 482, or 3 years and a [[skills-assessment|skills assessment]] for a 494 or 186 [[direct-entry|Direct Entry]]",
            "Collect references, payslips and a CV that show your experience",
            "Get an English result: IELTS 5.0 in each band (482) or [[competent-english|Competent English]] (186, 494), unless exempt",
            "Arrange health insurance (482) and police certificates",
          ],
        },
        {
          title: "When you apply",
          items: [
            "Lodge in ImmiAccount with your employer's nomination TRN",
            "Pay your own visa charge: A$4,015 (482) or A$6,140 (186, 494), plus family charges",
            "Lodge a 186 within 6 months of the nomination's approval",
            "Never pay your employer for the sponsorship",
          ],
        },
        {
          title: "Once it's granted",
          items: [
            "Start work within 90 days (482, 494) or 6 months (186)",
            "On a 482 or 494, work only for your sponsor in the nominated occupation",
            "On a 494, live, work and study only in a [[dra|designated regional area]], and keep your tax records for the [[subclass-191|191]]",
            "Plan permanent residence early: 2 years for the 186, 3 years for the 191",
          ],
        },
      ],
      link: { label: "Compare the three visas", href: "#compare" },
    },
    {
      id: "employer",
      label: "I'm the employer",
      tone: "pink",
      intro: "Your part is the sponsorship, a genuine and properly tested [[nomination]], and meeting your obligations for as long as you sponsor.",
      groups: [
        {
          title: "To sponsor",
          items: [
            "Apply for [[sbs|Standard Business Sponsorship]] (A$420, approved for 5 years) for a 482 or 494",
            "For a 482 or 494, advertise in Australia: two ads, four weeks each, within four months",
            "Work out the [[amsr|annual market salary rate]] and pay at least the income threshold",
          ],
        },
        {
          title: "To nominate",
          items: [
            "Pay the nomination charge: A$330 (482), A$540 (186, nil in regional Australia) or nil (494)",
            "Pay the [[saf|SAF levy]] in full when you lodge the nomination",
            "For a 494, get the [[rcb|regional certifying body's]] salary assessment",
            "Give the worker the TRN for their visa application",
          ],
        },
        {
          title: "While you sponsor",
          items: [
            "Pay at least the nominated earnings, on terms no less favourable than an Australian's",
            "Tell Home Affairs within 28 days about changes, such as the worker leaving",
            "Never recover your sponsorship costs from the worker",
            "Keep records and co-operate with inspectors",
          ],
        },
      ],
      link: { label: "Read the full employer guide", href: PAGE_SPONSOR },
    },
  ],
  glossary: [
    {
      id: "sbs",
      term: "Standard Business Sponsor",
      definition: "A business approved by Home Affairs to sponsor workers for a 482 or 494. The application costs A$420 and approval lasts five years. A 186 needs only a nomination, not this approval.",
    },
    {
      id: "nomination",
      term: "Nomination",
      definition: "The employer's application for the specific job: occupation, duties, salary and evidence it's genuine. It costs A$330 (482), A$540 (186, nil in regional Australia) or nil (494 Employer Sponsored stream), and must be approved before the visa is granted.",
    },
    { id: "trn", term: "TRN", full: "Transaction Reference Number", definition: "The nomination's reference number. The worker enters it in the visa application so Home Affairs can link the two." },
    {
      id: "lmt",
      term: "Labour market testing",
      definition: "Advertising the job in Australia before a 482 or 494 nomination: at least two ads, each running four weeks, within the four months before the nomination. Trade-agreement exemptions cover some 482 roles, never the 494.",
    },
    {
      id: "saf",
      term: "SAF levy",
      full: "Skilling Australians Fund levy",
      definition: "A training levy the employer pays in full when it nominates: A$1,200 or A$1,800 a year for a 482, or a one-off A$3,000 or A$5,000 for a 186 or 494, depending on turnover. It can't be recovered from the worker.",
    },
    {
      id: "amsr",
      term: "AMSR",
      full: "Annual market salary rate",
      definition: "What an Australian worker earns for the same job in the same place. If the worker will earn under A$250,000, the pay must be at least this, as well as the income threshold.",
    },
    {
      id: "csit",
      term: "CSIT",
      full: "Core Skills Income Threshold",
      definition: "The minimum salary for the 482 Core Skills stream and the 186: A$79,423 for nominations lodged from 1 July 2026 to 30 June 2027. It's indexed every 1 July.",
    },
    {
      id: "ssit",
      term: "SSIT",
      full: "Specialist Skills Income Threshold",
      definition: "The minimum salary for the 482 Specialist Skills stream: A$146,576 for nominations lodged from 1 July 2026 to 30 June 2027.",
    },
    {
      id: "tsmit",
      term: "TSMIT",
      full: "Temporary Skilled Migration Income Threshold",
      definition: "The minimum salary for a 494 nomination: A$79,423 for nominations lodged from 1 July 2026 to 30 June 2027.",
    },
    {
      id: "csol",
      term: "CSOL",
      full: "Core Skills Occupation List",
      definition: "The list of occupations open to the 482 Core Skills stream and the 186 Direct Entry stream.",
    },
    {
      id: "anzsco",
      term: "ANZSCO",
      full: "Australian and New Zealand Standard Classification of Occupations",
      definition: "The national list of occupation codes. The first digit (the Major Group) decides whether a job can use the 482 Specialist Skills stream.",
    },
    {
      id: "labour-agreement",
      term: "Labour agreement",
      definition: "A formal agreement between an employer and the Australian Government that lets it sponsor workers outside the standard rules, such as for an occupation that isn't on a list. A DAMA is a regional version.",
    },
    {
      id: "trt",
      term: "TRT stream",
      full: "Temporary Residence Transition stream",
      definition: "The 186 stream for 457 and 482 holders with 2 years of full-time sponsored work in the last 3 years. The nominating employer must be your most recent sponsor.",
    },
    {
      id: "direct-entry",
      term: "Direct Entry stream",
      definition: "The 186 stream for workers with a positive skills assessment and at least 3 years of relevant experience in an occupation on the Core Skills Occupation List. You don't need to have held a 482.",
    },
    {
      id: "competent-english",
      term: "Competent English",
      definition: "The English level for the 186 and 494: at least IELTS 6 in each component, or the equivalent in another approved test, taken within 3 years. UK, Irish, US, Canadian and New Zealand passport holders are exempt.",
    },
    {
      id: "skills-assessment",
      term: "Skills assessment",
      definition: "An assessing authority's decision that your skills suit the occupation. The 494 and the 186 Direct Entry stream usually need one, and some 482 applicants do, depending on their occupation and passport.",
    },
    {
      id: "dra",
      term: "Designated regional area",
      definition: "All of Australia except Sydney, Melbourne and Brisbane, listed by postcode by Home Affairs. Perth, Adelaide, the Gold Coast, Canberra and Hobart all count.",
    },
    {
      id: "rcb",
      term: "Regional certifying body",
      definition: "A body that assesses the salary for 494 Employer Sponsored stream nominations. If it doesn't support the salary, the nomination can be refused.",
    },
    {
      id: "subclass-191",
      term: "Subclass 191",
      full: "Permanent Residence (Skilled Regional) visa",
      definition: "The permanent visa that follows the 494. You apply yourself after holding the 494 for 3 years, if you've kept to its conditions and have ATO notices of assessment for 3 of the 5 income years. It costs A$630 for the main applicant.",
    },
    {
      id: "work-condition",
      term: "Conditions 8607 and 8608",
      definition: "The work conditions on the 482 (8607) and the 494 (8608): work only for your sponsor, in the nominated occupation. If the job ends, you may stop work for up to 180 days in a single period and 365 days in total across the visa.",
    },
  ],
  cta: {
    title: "Employer or worker, talk it through with us",
    subtitle: "We check both sides against these rules, tell you honestly where you stand, and prepare the sponsorship, nomination and visa application with you.",
  },
  verifiedExtras: [
    {
      fact: "The Home Affairs Visa Pricing Estimator does not include the second instalment of the visa application charge.",
      source: "https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/skilled-employer-sponsored-regional-494/employer-sponsored-stream",
    },
  ],
  finder: employerFinder,
  streamFinder: skillsInDemand482Explainer.streamFinder,
  fees: {
    variantLabel: "Which visa?",
    variants: [
      {
        id: "482",
        label: "Skills in Demand (subclass 482)",
        hint: "Temporary, up to 4 years",
        primary: [{ label: "Base application charge (main applicant)", amount: 4015 }],
        adult: [{ label: "Each additional applicant aged 18 or over", amount: 4015 }],
        child: [{ label: "Each additional applicant under 18", amount: 1005 }],
        sponsor: {
          heading: "The employer pays",
          lines: [
            { label: "Standard Business Sponsorship (approved for 5 years)", amount: 420, per: "once" },
            { label: "Nomination charge", amount: 330, per: "once" },
          ],
          choice: {
            label: "Business turnover",
            options: [
              { label: "Under A$10 million", lines: [{ label: "SAF levy, per year of the nomination", amount: 1200, per: "year" }] },
              { label: "A$10 million or more", lines: [{ label: "SAF levy, per year of the nomination", amount: 1800, per: "year" }] },
            ],
          },
          years: { label: "Years in the nomination", max: 4 },
          note: "None of the employer's costs can be recovered from the worker. The A$420 is for the sponsorship (approved for 5 years), not for each nomination.",
        },
      },
      {
        id: "186",
        label: "Employer Nomination Scheme (subclass 186)",
        hint: "Permanent",
        primary: [{ label: "Base application charge (main applicant)", amount: 6140 }],
        adult: [{ label: "Each additional applicant aged 18 or over", amount: 3070 }],
        child: [{ label: "Each additional applicant under 18", amount: 1535 }],
        sponsor: {
          heading: "The employer pays",
          lines: [{ label: "Nomination charge", amount: 540, per: "once" }],
          choice: {
            label: "Business turnover",
            options: [
              { label: "Under A$10 million", lines: [{ label: "SAF levy (one-off)", amount: 3000, per: "once" }] },
              { label: "A$10 million or more", lines: [{ label: "SAF levy (one-off)", amount: 5000, per: "once" }] },
            ],
          },
          note: "A 186 needs no sponsorship approval. A position in regional Australia (Category 2 or 3 areas on the Home Affairs 186 regional postcodes page) has no nomination charge, so the total is A$540 lower. None of these costs can be recovered from the worker.",
        },
      },
      {
        id: "494",
        label: "Skilled Employer Sponsored Regional (subclass 494)",
        hint: "5 years, in regional Australia",
        primary: [{ label: "Base application charge (main applicant)", amount: 6140 }],
        adult: [{ label: "Each additional applicant aged 18 or over", amount: 3070 }],
        child: [{ label: "Each additional applicant under 18", amount: 1535 }],
        sponsor: {
          heading: "The employer pays",
          lines: [
            { label: "Standard Business Sponsorship (approved for 5 years)", amount: 420, per: "once" },
            { label: "Nomination charge (nil in the Employer Sponsored stream)", amount: 0, per: "once" },
          ],
          choice: {
            label: "Business turnover",
            options: [
              { label: "Under A$10 million", lines: [{ label: "SAF levy (one-off)", amount: 3000, per: "once" }] },
              { label: "A$10 million or more", lines: [{ label: "SAF levy (one-off)", amount: 5000, per: "once" }] },
            ],
          },
          note: "The levy is reduced if the worker already holds a 494. None of these costs can be recovered from the worker.",
        },
      },
    ],
    maxAdults: 3,
    maxChildren: 6,
    notIncluded: "Not included: skills assessments, English tests, health examinations, police certificates, translations, advertising and agent fees.",
    notes: [
      "482: applicants in Australia who hold or last held certain temporary visas also pay a A$700 subsequent temporary application charge.",
      "186 and 494: a A$4,890 second instalment is charged for each family member aged 18 or over who applies without Functional English, invoiced before grant. The Home Affairs Visa Pricing Estimator doesn't include it.",
      "The SAF levy is paid in full when the nomination is lodged. For a 482 it's charged for each year or part year of the nomination.",
      "A lower charge applies to eligible Pacific Island and Timor-Leste passport holders.",
    ],
    confirmUrl: "https://immi.homeaffairs.gov.au/visas/visa-pricing-estimator",
    confirmLabel: "Home Affairs Visa Pricing Estimator",
    applicantHeading: "The worker pays",
    split: { applicant: "the worker", sponsor: "the employer" },
  },
  jobGap: {
    perGap: 180,
    total: 365,
    countedFrom: "1 July 2024",
    condition: "8607 (482) or 8608 (494)",
    termId: "work-condition",
  },
  prRoad: skillsInDemand482Explainer.prRoad,
};
