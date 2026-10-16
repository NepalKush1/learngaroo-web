import type { VisaExplainer } from "../types";
import { ICON } from "../icons";
import { employerFinder } from "./employer-finder";

// Interactive explainer for the guide "Employer sponsorship and nomination".
// Every figure matches data/visas/employer-sponsored.ts (checked against Home
// Affairs, the Migration Act and Regulations and the Administrative Review
// Tribunal on 12 October 2026). The workers' visa charges in the cost
// estimator come from the 482, 186 and 494 pages (see verifiedExtras).

export const employerSponsorshipAndNominationExplainer: VisaExplainer = {
  slug: "employer-sponsorship-and-nomination",
  factsAsAt: "12 October 2026",
  oneLiner:
    "How an Australian business sponsors an overseas worker: become a Standard Business Sponsor, nominate a genuine full-time job at the right salary, pay the levy, and meet your obligations.",
  bigIdeas: [
    {
      title: "Approve the business",
      body: "For a 482 or 494, the business first becomes a Standard Business Sponsor: A$420, approved for 5 years.",
      icon: ICON.buildingOffice2,
    },
    {
      title: "Nominate a genuine job",
      body: "A real, full-time role, advertised in Australia first and paid at least the market rate and the income threshold.",
      icon: ICON.documentText,
    },
    {
      title: "Meet your obligations",
      body: "Pay every sponsorship cost yourself, keep records, report changes within 28 days and co-operate with inspectors.",
      icon: ICON.shieldCheck,
    },
  ],
  heroCard: [
    { label: "Sponsorship", value: "A$420, approved for 5 years", icon: ICON.buildingOffice2 },
    { label: "Nomination charge", value: "A$330 (482), A$540 (186), nil (494)", icon: ICON.documentText },
    { label: "SAF levy", value: "Per year (482) or one-off (186, 494), by turnover", icon: ICON.banknotes },
    { label: "Income thresholds", value: "A$79,423 (CSIT, TSMIT); A$146,576 (SSIT)", icon: ICON.currencyDollar },
    { label: "Advertising", value: "2 ads, 4 weeks each, within 4 months", icon: ICON.megaphone },
    { label: "If you breach", value: "Bars, cancellations, fines and civil penalties", icon: ICON.exclamationTriangle },
  ],
  checkedAgainst: "Home Affairs, the Migration Act and Regulations, and the Administrative Review Tribunal",
  actors: [
    {
      id: "employer",
      name: "The business (the sponsor)",
      short: "Sponsor",
      icon: ICON.buildingOffice2,
      tone: "pink",
      role: "Becomes a sponsor, nominates the role and meets the sponsor obligations.",
      does: [
        "Applies for [[sbs|Standard Business Sponsorship]] (A$420, approved for 5 years)",
        "Advertises the job in Australia ([[lmt|labour market testing]])",
        "Nominates the role at the [[amsr|market rate]] and pays the [[saf|SAF levy]]",
        "Meets its obligations while it sponsors, and for a time afterwards",
      ],
    },
    {
      id: "you",
      name: "You (the worker)",
      short: "You",
      icon: ICON.user,
      tone: "green",
      role: "Apply for the visa with the nomination's reference number.",
      does: [
        "Get the [[trn|TRN]] from your sponsor",
        "Lodge your visa application and pay your visa charge",
        "Start within 90 days (482 and 494) or 6 months (186)",
        "Never pay for, or repay, your sponsor's costs",
      ],
    },
    {
      id: "government",
      name: "Department of Home Affairs",
      short: "Home Affairs",
      icon: ICON.buildingLibrary,
      tone: "blue",
      role: "Approves sponsors and nominations, then monitors compliance.",
      does: [
        "Approves the sponsorship and each [[nomination]]",
        "Must approve the nomination before granting the visa",
        "Monitors sponsors during, and for 5 years after, the sponsorship",
        "Can bar, cancel, fine or seek civil penalties for breaches",
      ],
    },
  ],
  flows: [
    {
      from: "employer",
      to: "government",
      label: "Sponsors + nominates",
      detail: "The business applies to be a [[sbs|Standard Business Sponsor]] (not needed for a 186). It then nominates the role, paying the nomination charge and the [[saf|SAF levy]].",
    },
    {
      from: "employer",
      to: "you",
      label: "Gives you the TRN",
      detail: "The business gives you the nomination's reference number, the [[trn|TRN]], so you can apply.",
    },
    {
      from: "you",
      to: "government",
      label: "You apply",
      detail: "You lodge your visa application with the TRN and pay your visa charge. Home Affairs must approve the nomination before it grants the visa.",
    },
    {
      from: "government",
      to: "you",
      label: "Visa granted",
      detail: "Once the visa is granted, you must start work within 90 days for a 482 or 494, or within 6 months for a 186.",
    },
    {
      from: "you",
      to: "employer",
      label: "You start work",
      detail: "You work in the nominated role. The business's obligations apply while it sponsors you, and some continue afterwards.",
    },
  ],
  journeyTitle: "From sponsor approval to a compliant sponsorship",
  journeyHighlight: "compliant sponsorship",
  stages: [
    {
      id: "sponsor",
      short: "Sponsor",
      title: "The business applies for sponsorship",
      who: ["employer"],
      description: "For a 482 or 494, the business applies in ImmiAccount with evidence it's legally established and operating.",
      points: [
        "A$420, approved for 5 years",
        "Ask for [[accredited|accredited status]] at the same time, at no extra charge",
        "Renew about two months before it expires",
      ],
      youHold: "A business with an approved (or lodged) sponsorship",
      cost: "A$420, paid by the business",
      icon: ICON.buildingOffice2,
    },
    {
      id: "advertise",
      short: "Advertise",
      title: "The business tests the labour market",
      who: ["employer"],
      description: "Before a 482 or 494 nomination, the job is advertised in Australia ([[lmt|labour market testing]]).",
      points: [
        "At least two ads, each running at least four weeks",
        "Within the four months before the nomination",
        "State the salary if earnings are under A$96,400",
        "National recruitment sites count; social media posts don't",
      ],
      youHold: "Copies of every advertisement",
      cost: "Advertising costs, paid by the business",
      icon: ICON.megaphone,
    },
    {
      id: "salary",
      short: "Salary",
      title: "The business sets the salary",
      who: ["employer"],
      description: "If earnings are under A$250,000, it works out the [[amsr|annual market salary rate]] using the instrument method.",
      points: [
        "[[csit|CSIT]] A$79,423 for 482 Core Skills and 186",
        "[[ssit|SSIT]] A$146,576 for 482 Specialist Skills",
        "[[tsmit|TSMIT]] A$79,423 for the 494",
        "Both the market rate and the worker's pay must meet the threshold",
      ],
      youHold: "A market salary determination and a compliant contract",
      icon: ICON.calculator,
    },
    {
      id: "nominate",
      short: "Nominate",
      title: "The business nominates the role",
      who: ["employer", "government"],
      description: "It lodges the [[nomination]] with the position, salary, advertising and genuineness evidence.",
      points: [
        "Nomination charge: A$330 (482), A$540 (186, nil in regional Australia), nil (494)",
        "The [[saf|SAF levy]], paid in full at lodgement",
        "The worker gets the [[trn|TRN]]",
        "A 482 or 494 nomination stays valid for 12 months",
      ],
      youHold: "A nomination approval",
      cost: "Nomination charge and SAF levy, paid by the business",
      icon: ICON.documentText,
    },
    {
      id: "apply",
      short: "Apply",
      title: "You apply for the visa",
      who: ["you", "government"],
      description: "You apply with the TRN and pay your own visa charge.",
      points: [
        "Home Affairs must approve the nomination before granting the visa",
        "A 186 nominee must apply within 6 months of the nomination's approval",
        "Home Affairs may ask the business for more information",
      ],
      youHold: "A visa grant and a start date",
      icon: ICON.paperAirplane,
    },
    {
      id: "comply",
      short: "Comply",
      title: "The business meets its obligations",
      who: ["employer"],
      description: "The obligations apply for as long as it sponsors you, and some continue afterwards.",
      points: [
        "Pay at least the nominated earnings, with conditions no less favourable than an Australian's",
        "Notify Home Affairs within 28 days of events, such as you leaving",
        "Keep records, and never recover costs from you",
        "Pay reasonable return travel costs within 30 days of a written request",
      ],
      youHold: "A compliant sponsorship the business can renew",
      icon: ICON.shieldCheck,
    },
    {
      id: "pr",
      short: "PR",
      title: "Nomination for permanent residence",
      who: ["employer", "you"],
      description: "After two years of sponsored employment, the business can nominate you for the 186 Temporary Residence Transition stream.",
      points: ["It must be your most recent sponsor", "A 186 needs a nomination, but no sponsorship approval"],
      youHold: "A path to permanent residence",
      icon: ICON.home,
    },
  ],
  check: {
    title: "Is your business ready to sponsor?",
    highlight: "ready to sponsor",
    ok: {
      title: "Your business looks ready",
      body: "Nothing in your answers rules it out. The next step is preparing the sponsorship, advertising and nomination evidence.",
    },
    todo: {
      title: "Nearly ready, with things to sort",
      body: "None of these are deal-breakers, but each needs attention before you lodge.",
    },
    stop: {
      title: "Some hurdles to solve first",
      body: "At least one answer means sponsoring isn't possible yet. The notes explain why and what to do.",
    },
    disclaimer: "A general self-check, not advice or a prediction. Home Affairs assesses each sponsorship and nomination on its evidence.",
  },
  quiz: [
    {
      id: "operating",
      topic: "Business status",
      question: "Is the business legally established and currently operating?",
      options: [
        { value: "yes", label: "Yes, with financial records", status: "ok", note: "Keep the ABN, ASIC extracts and financial statements ready." },
        { value: "new", label: "Yes, but it's new", status: "todo", note: "A new business can use a business plan, contracts and its lease as evidence." },
        {
          value: "no",
          label: "Not yet",
          status: "stop",
          note: "The business must be legally established and currently operating to be approved as a sponsor.",
        },
      ],
    },
    {
      id: "role",
      topic: "The role",
      question: "Is the role genuine and full-time?",
      options: [
        {
          value: "yes",
          label: "Yes: a real, full-time role that fits the business",
          status: "ok",
          note: "Full-time means 38 hours a week, or 32 to 45 hours under an award consistent with the [[nes|National Employment Standards]].",
        },
        {
          value: "created",
          label: "It's being created mainly so the worker can migrate",
          status: "stop",
          note: "A position created to help someone stay in or migrate to Australia isn't genuine, and that can lead to refusal.",
        },
        { value: "part", label: "Part-time or casual", status: "stop", note: "Sponsored positions must be full-time." },
      ],
    },
    {
      id: "salary",
      topic: "Salary",
      question: "Can you pay at least the market rate and the income threshold?",
      options: [
        {
          value: "yes",
          label: "Yes: the market rate, and at least A$79,423 (or A$146,576 for Specialist Skills)",
          status: "ok",
          note: "Meets the salary rules. Record how you worked out the [[amsr|market rate]].",
        },
        {
          value: "unsure",
          label: "I'm not sure of the market rate",
          status: "todo",
          note: "Use an equivalent Australian worker's pay, the award or enterprise agreement, or reputable data such as remuneration surveys.",
        },
        { value: "no", label: "No", status: "stop", note: "Paying below the market rate or the threshold leads to refusal." },
      ],
    },
    {
      id: "ads",
      topic: "Advertising",
      question: "Has the role been advertised in Australia?",
      options: [
        { value: "done", label: "Yes: two ads, at least four weeks each, within four months", status: "ok", note: "Keep copies of every ad, with dates and where it ran." },
        {
          value: "weak",
          label: "Some ads, but not to that standard",
          status: "todo",
          note: "Ads that ran under four weeks, are over four months old, left out the salary (if under A$96,400) or were only on social media don't count.",
        },
        {
          value: "exempt",
          label: "An international trade obligation exempts the role (482 only)",
          status: "ok",
          note: "Keep evidence of the [[ito|exemption]]. It doesn't apply to the 494 or to labour agreement nominations.",
        },
        { value: "no", label: "Not yet", status: "todo", note: "Advertise before you nominate a 482 or 494 position." },
      ],
    },
    {
      id: "costs",
      topic: "Who pays",
      question: "Who will pay the sponsorship costs?",
      options: [
        {
          value: "business",
          label: "The business pays all of them",
          status: "ok",
          note: "Right: the sponsor pays the charges, the levy, agent fees and recruitment costs.",
        },
        {
          value: "worker",
          label: "We planned to ask the worker to contribute",
          status: "stop",
          note: "Not allowed. Recovering these costs from the worker breaches your obligations, and asking for or receiving a benefit for sponsorship is a criminal offence.",
        },
      ],
    },
    {
      id: "records",
      topic: "Records and reporting",
      question: "Can you keep records and report changes to Home Affairs within 28 days?",
      options: [
        { value: "yes", label: "Yes", status: "ok", note: "Records must be kept for two years after the sponsorship ends and the last sponsored worker leaves." },
        { value: "unsure", label: "I'm not sure", status: "todo", note: "Set up a process before you sponsor. Missing a notification is a breach that can lead to sanctions." },
      ],
    },
    {
      id: "history",
      topic: "Adverse information",
      question: "Is there any adverse information about the business or anyone associated with it?",
      options: [
        { value: "none", label: "None", status: "ok", note: "Nothing to address." },
        {
          value: "some",
          label: "Yes",
          status: "todo",
          note: "Approval may still be possible if it's reasonable to disregard, but get advice first.",
          link: { label: "Get advice", href: "/bookings" },
        },
      ],
    },
  ],
  myths: [
    {
      myth: "The worker can pay for their own sponsorship.",
      fact: "No. The sponsor must pay the sponsorship and nomination charges, the levy, migration agent fees and recruitment costs, and can't recover them from the worker or their family.",
    },
    {
      myth: "Sponsorship lasts forever once it's approved.",
      fact: "No. Approval lasts 5 years. Lodge a renewal about two months before it expires: if it lapses, you need a completely new application and pending nominations are refused.",
    },
    {
      myth: "Advertising on social media is enough.",
      fact: "No. General classifieds and social media posts don't count. Use a prominent national recruitment website (LinkedIn's recruitment platform counts), an industry site, national print media or national radio.",
    },
    {
      myth: "Changing from a sole trader to a company doesn't affect my sponsorship.",
      fact: "It does. A change of legal entity needs a new sponsorship and new nominations for every sponsored worker.",
    },
    {
      myth: "The SAF levy is never refunded.",
      fact: "Refunds happen only in limited cases. For example, the worker doesn't start, or the visa is refused on health or character grounds. A 482 or 494 holder leaving in the first 12 months of a longer nomination can also mean a refund of the unused full years.",
    },
    {
      myth: "My obligations end when the worker leaves.",
      fact: "Not straight away. Record-keeping and notification duties continue for two years after the sponsorship ends and the last sponsored worker leaves. You must co-operate with inspectors for five years.",
    },
    {
      myth: "Sanctions are just warnings.",
      fact: "No. Breaches can lead to bars and cancelled approvals. A body corporate can face infringement notices of up to A$79,200 per breach, and a corporation civil penalties of up to A$396,000 per failure.",
    },
  ],
  roles: [
    {
      id: "employer",
      label: "I'm the employer",
      tone: "pink",
      intro: "Your part is the sponsorship, a genuine and properly tested [[nomination]], and meeting your obligations for as long as you sponsor.",
      groups: [
        {
          title: "To sponsor",
          items: [
            "Apply for [[sbs|Standard Business Sponsorship]] (A$420, approved for 5 years)",
            "Ask for [[accredited|accreditation]] at the same time, if you meet a category",
            "Renew about two months before the approval expires",
          ],
        },
        {
          title: "To nominate",
          items: [
            "Advertise twice, for four weeks, within four months (482 and 494)",
            "Set the [[amsr|annual market salary rate]] and meet the threshold",
            "Pay the nomination charge and the [[saf|SAF levy]], and give the worker the TRN",
            "If a nomination is refused, you can apply to the [[art|ART]] for review (A$3,727)",
          ],
        },
        {
          title: "While you sponsor",
          items: [
            "Pay at least the nominated earnings, with equal terms and conditions",
            "Notify Home Affairs within 28 days of changes, such as the worker leaving",
            "Never recover costs from the worker",
            "Keep records and co-operate with inspectors",
          ],
        },
      ],
    },
    {
      id: "worker",
      label: "I'm the worker",
      intro: "Your part is checking your sponsorship is genuine, applying with the TRN, and knowing your options if things change.",
      groups: [
        {
          title: "Check your sponsorship",
          items: [
            "Your employer is an approved Standard Business Sponsor (for a 482 or 494)",
            "Your contract matches the nominated role and salary",
            "Never pay for your sponsorship: it's a criminal offence for both of you",
          ],
        },
        {
          title: "When you apply",
          items: [
            "Use the [[trn|TRN]] your sponsor gives you",
            "Pay your own visa application charge",
            "Start within 90 days (482 and 494) or 6 months (186)",
          ],
        },
        {
          title: "If things change",
          items: [
            "If your job ends, you have up to 180 days (365 in total) to find a new sponsor or leave",
            "A new occupation needs a new nomination and, for 482 and 494 holders, a new visa",
            "After 2 years of sponsored work, your sponsor can nominate you for the 186",
          ],
        },
      ],
    },
  ],
  glossary: [
    {
      id: "sbs",
      term: "Standard Business Sponsor",
      definition: "A business approved by Home Affairs to sponsor workers for the 482 or 494. The application costs A$420 and approval lasts five years from the approval date.",
    },
    {
      id: "accredited",
      term: "Accredited sponsor",
      definition: "A Standard Business Sponsor that meets one of six categories. It gets priority processing and streamlined nominations, and can give a character reference instead of overseas police certificates. Requesting it is free.",
    },
    {
      id: "nomination",
      term: "Nomination",
      definition: "The business's application for the specific position: occupation, duties, salary and evidence it's genuine. It costs A$330 (482), A$540 (186, nil in regional Australia) or nil (494).",
    },
    { id: "trn", term: "TRN", full: "Transaction Reference Number", definition: "The nomination's reference number. The worker enters it in their visa application." },
    {
      id: "lmt",
      term: "Labour market testing",
      definition: "Advertising the job in Australia before a 482 or 494 nomination. You need at least two ads, each running at least four weeks, within the four months before the nomination.",
    },
    {
      id: "ito",
      term: "International trade obligation",
      definition: "A treaty commitment that exempts some 482 nominations from labour market testing, such as for citizens of certain countries or some intra-corporate transfers. It doesn't apply to the 494 or labour agreement nominations.",
    },
    {
      id: "amsr",
      term: "AMSR",
      full: "Annual market salary rate",
      definition: "What an Australian would earn for equivalent full-time work at the same workplace and location. The business must work it out if earnings are under A$250,000.",
    },
    {
      id: "csit",
      term: "CSIT",
      full: "Core Skills Income Threshold",
      definition: "A$79,423 for 482 Core Skills and 186 nominations lodged from 1 July 2026 to 30 June 2027. Indexed every 1 July.",
    },
    {
      id: "ssit",
      term: "SSIT",
      full: "Specialist Skills Income Threshold",
      definition: "A$146,576 for 482 Specialist Skills nominations lodged from 1 July 2026 to 30 June 2027.",
    },
    {
      id: "tsmit",
      term: "TSMIT",
      full: "Temporary Skilled Migration Income Threshold",
      definition: "A$79,423 for 494 nominations lodged from 1 July 2026 to 30 June 2027.",
    },
    {
      id: "saf",
      term: "SAF levy",
      full: "Skilling Australians Fund levy",
      definition: "A training levy paid in full when the nomination is lodged. It's A$1,200 or A$1,800 per year for a 482, or a one-off A$3,000 or A$5,000 for a 186 or 494, by turnover. It's tax deductible and can't be recovered from the worker.",
    },
    {
      id: "nes",
      term: "NES",
      full: "National Employment Standards",
      definition: "Australia's minimum employment standards. Sponsored workers need written contracts that meet them, and an award consistent with them can set full-time hours of 32 to 45 a week.",
    },
    {
      id: "art",
      term: "ART",
      full: "Administrative Review Tribunal",
      definition: "Reviews refused sponsorship and nomination applications. The fee is A$3,727, reduced by 50% for financial hardship.",
    },
  ],
  cta: {
    title: "Thinking about sponsoring a worker?",
    subtitle: "We check your business against these rules, prepare the sponsorship and nomination with you, and help you stay compliant while you sponsor.",
  },
  verifiedExtras: [
    { fact: "The subclass 482 base application charge is A$4,015 for the main applicant from 1 July 2026.", source: "/visas/employer-sponsored/skills-in-demand-visa-482" },
    { fact: "The subclass 186 base application charge is A$6,140 for the main applicant from 1 July 2026.", source: "/visas/employer-sponsored/employer-nomination-scheme-visa-186" },
    { fact: "The subclass 494 base application charge is A$6,140 for the main applicant from 1 July 2026.", source: "/visas/employer-sponsored/skilled-employer-sponsored-regional-visa-494" },
    { fact: "A subclass 482 can be granted for up to 4 years, or up to 5 years for Hong Kong passport holders.", source: "/visas/employer-sponsored/skills-in-demand-visa-482" },
  ],
  finder: employerFinder,
  fees: {
    variantLabel: "Which visa are you sponsoring for?",
    variants: [
      {
        id: "482",
        label: "Skills in Demand (subclass 482)",
        hint: "Temporary, up to 4 years",
        primary: [{ label: "Worker's visa charge (the worker pays)", amount: 4015 }],
        sponsor: {
          heading: "Your business pays",
          lines: [
            { label: "Standard Business Sponsorship (approved for 5 years)", amount: 420, per: "once" },
            { label: "Nomination charge", amount: 330, per: "once" },
          ],
          choice: {
            label: "Annual turnover",
            options: [
              { label: "Under A$10 million", lines: [{ label: "SAF levy, per year of the nomination", amount: 1200, per: "year" }] },
              { label: "A$10 million or more", lines: [{ label: "SAF levy, per year of the nomination", amount: 1800, per: "year" }] },
            ],
          },
          years: { label: "Years in the nomination", max: 4 },
          note: "None of these costs can be recovered from the worker.",
        },
      },
      {
        id: "186",
        label: "Employer Nomination Scheme (subclass 186)",
        hint: "Permanent; a nomination, but no sponsorship approval",
        primary: [{ label: "Worker's visa charge (the worker pays)", amount: 6140 }],
        sponsor: {
          heading: "Your business pays",
          lines: [{ label: "Nomination charge", amount: 540, per: "once" }],
          choice: {
            label: "Annual turnover",
            options: [
              { label: "Under A$10 million", lines: [{ label: "SAF levy (one-off)", amount: 3000, per: "once" }] },
              { label: "A$10 million or more", lines: [{ label: "SAF levy (one-off)", amount: 5000, per: "once" }] },
            ],
          },
          note: "There's no nomination charge if the position is in regional Australia (see the Home Affairs 186 regional postcodes page), so the total would be A$540 lower.",
        },
      },
      {
        id: "494",
        label: "Skilled Employer Sponsored Regional (subclass 494)",
        hint: "Provisional, for a position in regional Australia",
        primary: [{ label: "Worker's visa charge (the worker pays)", amount: 6140 }],
        sponsor: {
          heading: "Your business pays",
          lines: [
            { label: "Standard Business Sponsorship (approved for 5 years)", amount: 420, per: "once" },
            { label: "Nomination charge (nil in the Employer Sponsored stream)", amount: 0, per: "once" },
          ],
          choice: {
            label: "Annual turnover",
            options: [
              { label: "Under A$10 million", lines: [{ label: "SAF levy (one-off)", amount: 3000, per: "once" }] },
              { label: "A$10 million or more", lines: [{ label: "SAF levy (one-off)", amount: 5000, per: "once" }] },
            ],
          },
          note: "The levy is reduced if the worker already holds a 494. A regional certifying body must also assess the salary.",
        },
      },
    ],
    maxAdults: 0,
    maxChildren: 0,
    notIncluded: "Not included: advertising, recruitment and migration agent fees. The business pays these too and can't recover them from the worker.",
    notes: [
      "The SAF levy is paid in full when the nomination is lodged, and it's tax deductible.",
      "For a 482, the levy is charged for each year or part year of the nomination. Hong Kong passport holders can be granted up to 5 years.",
      "The A$420 is for the sponsorship application (or a renewal), not for each nomination.",
      "The worker's visa charge is shown for reference only. The worker pays it, and family members pay their own charges.",
    ],
    confirmUrl: "https://immi.homeaffairs.gov.au/visas/employing-and-sponsoring-someone/sponsoring-workers/learn-about-sponsoring/cost-of-sponsoring",
    confirmLabel: "Home Affairs cost of sponsoring page",
    applicantHeading: "The worker pays",
    split: { applicant: "the worker", sponsor: "your business" },
  },
};
