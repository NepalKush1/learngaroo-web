import type { VisaExplainer } from "../types";
import { ICON } from "../icons";

// Interactive explainer for the Permanent Residence (Skilled Regional) visa
// (subclass 191). Every figure matches data/visas/skilled.ts (checked
// against Home Affairs on 12 October 2026). The Hong Kong stream second
// instalment is "Set by the Regulations" on the page (the Home Affairs page
// leaves the amount blank), so it is left out of the fee estimator.

export const permanentResidenceSkilledRegional191Explainer: VisaExplainer = {
  slug: "permanent-residence-skilled-regional-visa-191",
  factsAsAt: "12 October 2026",
  oneLiner:
    "The permanent visa for people who have held a 491 or 494 for at least 3 years, kept to its regional conditions and lodged tax returns. Once granted, you can live and work anywhere in Australia.",
  bigIdeas: [
    { title: "3 years on a 491 or 494", body: "You must still hold the 491 or 494 when you apply, and have held it for at least 3 years.", icon: ICON.calendarDays },
    { title: "Tax returns, not a salary", body: "Provide ATO notices of assessment for 3 of the 5 income years. Home Affairs states there's no minimum income.", icon: ICON.banknotes },
    { title: "Proof you lived regionally", body: "Show you kept to your visa conditions, including living, working and studying in a regional area.", icon: ICON.mapPin },
  ],
  heroCard: [
    { label: "Who can apply", value: "491 or 494 holders, after 3 years", icon: ICON.user },
    { label: "Sponsor", value: "None needed", icon: ICON.checkBadge },
    { label: "Income", value: "No minimum; ATO notices of assessment needed", icon: ICON.banknotes },
    { label: "How long", value: "Permanent, with a 5-year travel facility", icon: ICON.clock },
    { label: "Family", value: "Partner and children can apply with you", icon: ICON.users },
    { label: "Visa charge", value: "A$630 (Regional Provisional stream)", icon: ICON.currencyDollar },
  ],
  actors: [
    {
      id: "you",
      name: "You (the 491 or 494 holder)",
      short: "You",
      icon: ICON.user,
      tone: "green",
      role: "Show you held your visa for 3 years, kept to its conditions and lodged tax returns.",
      does: [
        "Hold the 491 or 494 for at least 3 years, and still hold it when you apply",
        "Keep to [[c8579|condition 8579]] and report changes within 14 days",
        "Lodge a tax return for each income year",
        "Apply online and pay A$630",
      ],
    },
    {
      id: "ato",
      name: "Australian Taxation Office",
      short: "ATO",
      icon: ICON.calculator,
      tone: "teal",
      role: "Issues the [[noa|notices of assessment]] that prove your income years.",
      does: [
        "Assesses each tax return you lodge",
        "Issues a notice of assessment for each income year",
        "Can approve a payment plan for any money you owe",
      ],
    },
    {
      id: "government",
      name: "Department of Home Affairs",
      short: "Home Affairs",
      icon: ICON.buildingLibrary,
      tone: "blue",
      role: "Checks your visa history, compliance, health and character, and decides the visa.",
      does: [
        "Checks you held an eligible visa for 3 years",
        "Assesses whether you kept to your visa conditions",
        "Can check reported changes against ATO and employer records",
        "Grants or refuses the visa in writing",
      ],
    },
  ],
  flows: [
    {
      from: "you",
      to: "ato",
      label: "You lodge tax returns",
      detail: "You lodge a return every income year (1 July to 30 June) while you hold the 491 or 494.",
    },
    {
      from: "ato",
      to: "you",
      label: "Notices of assessment",
      detail: "The ATO issues a [[noa|notice of assessment]] for each year. You need them for 3 income years out of the 5 years of your visa.",
    },
    {
      from: "you",
      to: "government",
      label: "You apply",
      detail: "After 3 years holding the visa, you lodge in ImmiAccount with your notices and proof of where you lived, worked and studied, and pay A$630.",
    },
    {
      from: "government",
      to: "you",
      label: "PR granted",
      detail: "Home Affairs checks your compliance, health and character. Once granted, the regional condition ends.",
    },
  ],
  journeyTitle: "From your 491 or 494 to permanent residence",
  journeyHighlight: "permanent residence",
  stages: [
    {
      id: "count",
      short: "Count",
      title: "Count 3 years from your 491 or 494 grant",
      who: ["you"],
      description: "You can apply once you've held the eligible visa for at least 3 years, and only while you still hold it.",
      points: [
        "Applying earlier, or after the visa has ceased, makes the application invalid",
        "Lodge well before the 5-year expiry",
        "If you applied in Australia, a bridging visa keeps you lawful if your visa ends during processing",
      ],
      youHold: "An eligible visa held for 3 years, and a lodgement date before it expires",
      icon: ICON.calendarDays,
    },
    {
      id: "tax",
      short: "Tax",
      title: "Lodge tax returns and collect your notices",
      who: ["you", "ato"],
      description: "You need ATO [[noa|notices of assessment]] for 3 income years out of the 5 years of your eligible visa.",
      points: [
        "Home Affairs states there is no minimum income requirement",
        "Lodge every return on time so the notices exist when you apply",
        "Repay any ATO debt, or set up an approved payment plan",
      ],
      youHold: "3 notices of assessment and no unmanaged ATO debt",
      icon: ICON.banknotes,
    },
    {
      id: "evidence",
      short: "Evidence",
      title: "Gather your compliance evidence",
      who: ["you"],
      description: "Collect proof that you and your family lived, worked and studied only in [[dra|designated regional areas]] for the whole visa period.",
      points: [
        "Leases, utility bills, rates notices or title deeds",
        "Payslips, employment references, transcripts and school reports",
        "That you reported changes within 14 days ([[c8578|condition 8578]])",
      ],
      youHold: "A record of regional residence, work and study for the whole visa period",
      icon: ICON.documentText,
    },
    {
      id: "apply",
      short: "Apply",
      title: "Apply online in ImmiAccount",
      who: ["you", "government"],
      description: "Lodge from in or outside Australia, but not in immigration clearance. The application isn't processed until the first instalment is paid.",
      points: [
        "A$630 for you, A$315 for each adult and A$160 for each child",
        "Family who held your 491 or 494 don't need their own 3-year history",
        "Before you lodge, tell Home Affairs about any child born in Australia since your 491 or 494 grant",
      ],
      youHold: "A lodged application and, if you're in Australia, a bridging visa in reserve",
      cost: "A$630 (Regional Provisional stream), paid by you",
      icon: ICON.paperAirplane,
    },
    {
      id: "checks",
      short: "Checks",
      title: "Health, character and requests",
      who: ["government", "you"],
      description: "Home Affairs tells you if health examinations or biometrics are needed. Answer any request within the time given.",
      points: [
        "Police certificates for each country where you spent 12 months or more in the last 10 years since turning 16",
        "Removing the application from ImmiAccount doesn't withdraw it",
        "Check current processing times on the Home Affairs tool",
      ],
      youHold: "A complete file",
      icon: ICON.shieldCheck,
    },
    {
      id: "pr",
      short: "PR",
      title: "Permanent residence",
      who: ["government", "you"],
      description: "If the visa is granted while you're in Australia, permanent residence starts that day and the regional condition ends.",
      points: [
        "Live, work and study anywhere in Australia",
        "Travel freely for 5 years, then use a Resident Return visa",
        "Time on your provisional visa counts towards citizenship residence",
      ],
      youHold: "Permanent residence with no regional condition",
      icon: ICON.home,
    },
  ],
  check: {
    ok: {
      title: "You look on track",
      body: "Nothing in your answers rules you out. Next: line up your notices of assessment and the evidence of where you lived, worked and studied.",
    },
    disclaimer: "A general self-check, not advice or a prediction. Your full visa history and circumstances decide the outcome.",
  },
  quiz: [
    {
      id: "visa",
      topic: "Your visa",
      question: "Which visa do you hold now?",
      options: [
        { value: "491", label: "A 491 or 494", status: "ok", note: "A 491 or 494 is the eligible visa for the Regional Provisional stream." },
        {
          value: "ended",
          label: "I held a 491 or 494, but it has ended",
          status: "stop",
          note: "You must hold the eligible visa when you apply. Get advice about other options.",
          link: { label: "Talk through your options", href: "/bookings" },
        },
        {
          value: "489",
          label: "A 489",
          status: "stop",
          note: "The 191 isn't for you. Subclass 489 holders apply for the Skilled Regional (subclass 887) visa, which also costs A$630.",
        },
        {
          value: "hk",
          label: "A Hong Kong or BNO passport, and a 457, 482 or 485 visa",
          status: "todo",
          note: "You may fit the Hong Kong stream: 3 years on that visa and 3 years' continuous residence in a designated regional area.",
        },
      ],
    },
    {
      id: "years",
      topic: "Time held",
      question: "How long have you held your 491 or 494?",
      options: [
        { value: "enough", label: "At least 3 years", status: "ok", note: "You meet the time rule, as long as you still hold the visa when you apply." },
        {
          value: "short",
          label: "Less than 3 years",
          status: "todo",
          note: "Wait until you reach 3 years. Applying earlier makes the application invalid.",
          link: { label: "Check your dates", href: "#rules" },
        },
      ],
    },
    {
      id: "tax",
      topic: "Tax returns",
      question: "Do you have ATO notices of assessment for 3 income years of your visa?",
      options: [
        { value: "yes", label: "Yes, at least 3", status: "ok", note: "You meet the income requirement. Home Affairs states there's no minimum income amount." },
        {
          value: "notyet",
          label: "Not yet",
          status: "todo",
          note: "Lodge every return on time. The notices must be for income years within the 5 years of your visa.",
        },
        {
          value: "debt",
          label: "I owe the ATO money",
          status: "todo",
          note: "It must be repaid or under an approved payment plan, and you'll need evidence of it.",
        },
      ],
    },
    {
      id: "regional",
      topic: "Regional conditions",
      question: "Have you and your family lived, worked and studied only in designated regional areas?",
      options: [
        { value: "yes", label: "Yes, the whole time", status: "ok", note: "Keep the leases, bills, payslips and transcripts that prove it." },
        {
          value: "city",
          label: "Some time in Sydney, Melbourne or Brisbane",
          status: "stop",
          note: "A breach of condition 8579 fails the compliance criterion and can lead to cancellation. Get advice before you apply.",
          link: { label: "Get advice", href: "/bookings" },
        },
        {
          value: "unsure",
          label: "I'm not sure an area counted",
          status: "todo",
          note: "The regional list that applied on your grant date is the one that counts for you.",
          link: { label: "Regional postcode checker", href: "/tools/regional-postcode-checker" },
        },
      ],
    },
    {
      id: "reporting",
      topic: "Reporting changes",
      question: "Did you tell Home Affairs about address and employer changes within 14 days?",
      options: [
        { value: "yes", label: "Yes, every time", status: "ok", note: "Reporting changes within 14 days meets condition 8578." },
        {
          value: "no",
          label: "Not always",
          status: "todo",
          note: "Home Affairs can check changes against ATO and employer records. Get advice on how to deal with it before you apply.",
          link: { label: "Get advice", href: "/bookings" },
        },
      ],
    },
    {
      id: "family",
      topic: "Family",
      question: "Who's applying with you?",
      options: [
        { value: "alone", label: "Just me", status: "ok", note: "Nothing extra to plan for." },
        { value: "held", label: "Family members who held my 491 or 494", status: "ok", note: "Family members who held your 491 or 494 don't need their own 3-year history." },
        {
          value: "over23",
          label: "A child who has turned 23",
          status: "todo",
          note: "A child who has turned 23 can only be included if they hold an eligible visa granted as a member of your family unit.",
        },
      ],
    },
    {
      id: "health",
      topic: "Health and character",
      question: "Any health or character concerns for you or your family?",
      options: [
        { value: "clear", label: "No concerns", status: "ok", note: "You'll still need police certificates, and health examinations if Home Affairs asks." },
        {
          value: "concern",
          label: "A significant health condition, or a criminal record",
          status: "todo",
          note: "It needs careful preparation and advice before you apply.",
          link: { label: "Get advice", href: "/bookings" },
        },
      ],
    },
  ],
  myths: [
    {
      myth: "I need to earn a minimum salary for the 191.",
      fact: "On 12 October 2026 Home Affairs stated there is no minimum income requirement. You must still provide ATO notices of assessment for 3 income years out of the 5 years of your visa.",
    },
    {
      myth: "Any 3 tax years will do.",
      fact: "The notices must be for income years within the 5 years of your 491 or 494. An income year runs from 1 July to 30 June, so lodge every return on time.",
    },
    {
      myth: "I can apply before 3 years if my tax returns are in.",
      fact: "No. You must have held the 491 or 494 for at least 3 years. Applying earlier, or after the visa has ended, makes the application invalid.",
    },
    {
      myth: "Once I've lodged the 191, I can move to Sydney.",
      fact: "Not until the 191 is granted. Compliance is assessed for the whole time you held the provisional visa, so keep to condition 8579 until then.",
    },
    {
      myth: "My 489 visa leads to the 191.",
      fact: "No. Subclass 489 holders apply for the Skilled Regional (subclass 887) visa, which also has an A$630 base charge.",
    },
    {
      myth: "Only the main visa holder can lead the application.",
      fact: "Home Affairs notes that either the primary holder or the partner who met the work and residence requirements can lead the application.",
    },
    {
      myth: "As a New Zealand citizen, a Special Category visa at the border won't matter.",
      fact: "It does. A Special Category visa (subclass 444) grant ceases the 191, so tell border officers you hold a 191 and don't want a 444.",
    },
  ],
  glossary: [
    {
      id: "noa",
      term: "Notice of assessment",
      definition: "The ATO's assessment of the tax return you lodge for an income year (1 July to 30 June). The 191 needs notices for 3 income years out of the 5 years of your eligible visa.",
    },
    {
      id: "dra",
      term: "Designated regional area",
      definition: "The areas where 491 and 494 holders must live, work and study. The list that applied on your grant date is the one that counts for you.",
    },
    {
      id: "c8579",
      term: "Condition 8579",
      definition: "The 491 and 494 condition to live, work and study only in a designated regional area. You must have kept to it for the whole time you held the visa.",
    },
    {
      id: "c8578",
      term: "Condition 8578",
      definition: "The condition to tell Home Affairs within 14 days about changes such as your address or employer.",
    },
    {
      id: "regional-provisional",
      term: "Regional Provisional stream",
      definition: "The 191 stream for subclass 491 and 494 holders who have held their visa for at least 3 years. The base charge is A$630.",
    },
    {
      id: "hong-kong-stream",
      term: "Hong Kong stream",
      definition: "A 191 stream for Hong Kong or BNO passport holders. You need 3 years on a 457, 482 or 485 visa, and a continuous 3 years living in a designated regional area.",
    },
    {
      id: "family-unit",
      term: "Member of the family unit",
      definition: "Broadly, your partner and your dependent children. A child who has turned 23 usually no longer fits. They can be included only if they hold an eligible visa granted as a member of your family unit.",
    },
    {
      id: "immigration-clearance",
      term: "Immigration clearance",
      definition: "The border check when you arrive in Australia. You can't apply for the 191 while you're in it.",
    },
    {
      id: "travel-facility",
      term: "Travel facility",
      definition: "The right to leave and re-enter Australia as a permanent resident, for 5 years from grant. After that you need a Resident Return visa (subclass 155 or 157).",
    },
    {
      id: "887",
      term: "Subclass 887",
      full: "Skilled Regional visa",
      definition: "The equivalent permanent visa for people who hold or held a subclass 489. Its base charge is also A$630.",
    },
  ],
  cta: {
    subtitle: "We check your visa history, notices of assessment and regional evidence against these rules, tell you honestly where you stand, and prepare your 191 application with you.",
  },
  ruleChecks: {
    navLabel: "Ready to apply?",
    eyebrow: "Two key rules",
    title: "Can you apply for the 191 yet?",
    highlight: "191",
    subtitle: "Move each slider to match your situation. Both rules must pass before you lodge in the Regional Provisional stream.",
    checks: [
      {
        id: "years",
        label: "Years you've held your 491 or 494",
        help: "Count from the grant date. You must still hold the visa when you apply.",
        unit: "years",
        min: 0,
        max: 5,
        step: 0.5,
        initial: 2,
        atLeast: 3,
        pass: "You've held it for at least 3 years.",
        fail: "You need to have held it for at least 3 years. Applying earlier makes the application invalid.",
      },
      {
        id: "notices",
        label: "ATO notices of assessment for income years within your visa",
        help: "Only income years within the 5 years of your 491 or 494 count.",
        unit: "notices",
        min: 0,
        max: 5,
        step: 1,
        initial: 1,
        atLeast: 3,
        pass: "You have the 3 [[noa|notices of assessment]] you need.",
        fail: "You need [[noa|notices of assessment]] for 3 income years. Lodge every return on time.",
      },
    ],
    allPass: {
      title: "Both rules are met",
      body: "You meet the time and income-year rules. You still need to show you kept to [[c8579|condition 8579]] and your other conditions, and meet health and character requirements.",
    },
    someFail: {
      title: "Not yet",
      body: "At least one rule isn't met yet. Keep to your conditions, lodge your tax returns, and apply while you still hold the 491 or 494.",
    },
    footnote: "On 12 October 2026 Home Affairs stated there is no minimum income requirement. This check covers the Regional Provisional stream only, not the Hong Kong stream.",
    link: {
      label: "Home Affairs: Regional Provisional stream",
      href: "https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/skilled-regional-191/regional-provisional",
      external: true,
    },
  },
  fees: {
    variantLabel: "Which stream?",
    variants: [
      {
        id: "regional",
        label: "Regional Provisional stream",
        hint: "For subclass 491 and 494 holders",
        primary: [{ label: "Base application charge", amount: 630 }],
        adult: [{ label: "Each additional applicant 18 or over", amount: 315 }],
        child: [{ label: "Each additional applicant under 18", amount: 160 }],
      },
      {
        id: "hongkong",
        label: "Hong Kong stream",
        hint: "Hong Kong or BNO passport holders",
        primary: [{ label: "Base application charge", amount: 6135 }],
        adult: [{ label: "Each additional applicant 18 or over", amount: 3065 }],
        child: [{ label: "Each additional applicant under 18", amount: 1535 }],
      },
    ],
    maxAdults: 4,
    maxChildren: 6,
    notIncluded: "Not included: health examinations, police certificates, biometrics and translations, and any Hong Kong stream second instalment.",
    notes: [
      "In the Hong Kong stream, a second instalment applies to each applicant 18 or over without functional English. It's set by the Regulations, and the Home Affairs page didn't display the amount on 12 October 2026, so it isn't in this total.",
      "A lower charge applies automatically in ImmiAccount when the main applicant holds a passport from a listed Pacific Island country or Timor-Leste.",
      "The charge isn't refunded if the visa is refused.",
    ],
    confirmUrl: "https://immi.homeaffairs.gov.au/visas/visa-pricing-estimator",
    confirmLabel: "Home Affairs Visa Pricing Estimator",
  },
};
