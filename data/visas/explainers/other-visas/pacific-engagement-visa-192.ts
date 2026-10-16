import type { VisaExplainer } from "../types";
import { ICON } from "../icons";

// Interactive explainer for the Pacific Engagement visa (subclass 192). Every
// fact matches data/visas/other-visas-resident.ts (checked against Home Affairs
// on 12 October 2026). No timeline tool: the page's steps are fixed ballot
// dates and a 120-day deadline, not month-based steps.

export const pacificEngagementVisa192Explainer: VisaExplainer = {
  slug: "pacific-engagement-visa-192",
  factsAsAt: "12 October 2026",
  oneLiner:
    "The Pacific Engagement visa is a permanent visa for citizens of participating Pacific countries and Timor-Leste. Places are allocated by random ballot, and selected people then apply, usually with a job offer.",
  bigIdeas: [
    { title: "A ballot, not points", body: "Register for A$25 while your country's ballot is open. Home Affairs then selects registrants at random.", icon: ICON.ticket },
    { title: "Selected? 120 days to apply", body: "Lodge a complete application, with your family, job offer and English evidence, by the date in your letter.", icon: ICON.clock },
    { title: "Permanent from the start", body: "Live, work and study anywhere in Australia with your family, and later apply for citizenship.", icon: ICON.home },
  ],
  heroCard: [
    { label: "Who it's for", value: "Citizens of participating Pacific countries and Timor-Leste", icon: ICON.globeAsiaAustralia },
    { label: "How you're chosen", value: "A random ballot, A$25 to register", icon: ICON.ticket },
    { label: "Age", value: "18 to 45 on the day your country's ballot opens", icon: ICON.calendarDays },
    { label: "Job offer", value: "Ongoing work in Australia, not casual", icon: ICON.briefcase },
    { label: "Result", value: "Permanent residence for you and your family", icon: ICON.home },
    { label: "Visa charge", value: "A$345 (Treaty stream A$205), plus family", icon: ICON.currencyDollar },
  ],
  actors: [
    {
      id: "you",
      name: "You (the ballot registrant)",
      short: "You",
      icon: ICON.user,
      tone: "green",
      role: "A citizen of a participating country who registers in the ballot and, if selected, applies.",
      does: [
        "Register in the [[ballot|ballot]] and pay A$25",
        "If selected, lodge within 120 days",
        "Secure an [[ongoing-offer|ongoing job offer]] (Pacific Engagement stream)",
        "Include every family member who'll migrate",
      ],
    },
    {
      id: "government",
      name: "Department of Home Affairs",
      short: "Home Affairs",
      icon: ICON.buildingLibrary,
      tone: "blue",
      role: "Runs the ballot, selects registrants at random and decides the visa.",
      does: [
        "Opens and closes each country's ballot",
        "Randomly selects registrants and sends a [[nos|Notification of Selection]]",
        "Checks the job offer, English, health and character",
        "Grants permanent residence",
      ],
    },
    {
      id: "employer",
      name: "Your Australian employer",
      short: "Employer",
      icon: ICON.buildingOffice2,
      tone: "teal",
      role: "Offers you, or your partner, ongoing work in Australia.",
      does: [
        "Offers permanent full-time, permanent part-time or fixed-term work",
        "Gives the same entitlements as permanent staff",
        "Sets out the position, salary, conditions and employer in writing",
      ],
    },
  ],
  flows: [
    {
      from: "you",
      to: "government",
      label: "Register in the ballot",
      detail: "You register in [[immiaccount|ImmiAccount]] while your country's ballot is open and pay A$25. You must be 18 to 45 on the day it opens (18 or over in the Treaty stream).",
    },
    {
      from: "government",
      to: "you",
      label: "Selected at random",
      detail: "Home Affairs randomly selects registrants and sends a [[nos|Notification of Selection]] letter. You then have 120 days to lodge.",
    },
    {
      from: "employer",
      to: "you",
      label: "Offers ongoing work",
      detail: "An Australian employer offers you, or your partner in the application, an [[ongoing-offer|ongoing job]]: permanent full-time, permanent part-time or fixed-term, not casual.",
    },
    {
      from: "you",
      to: "government",
      label: "Apply within 120 days",
      detail: "You lodge online with every family member, your job offer and English evidence, and pay A$345 (or A$205 in the [[treaty|Treaty stream]]).",
    },
    {
      from: "government",
      to: "you",
      label: "Permanent visa granted",
      detail: "Home Affairs checks health and character and grants permanent residence. If you're outside Australia, you enter before the date on your grant letter.",
    },
  ],
  journeyTitle: "From the ballot to permanent residence",
  journeyHighlight: "permanent residence",
  stages: [
    {
      id: "ballot",
      short: "Ballot",
      title: "Register in the ballot",
      who: ["you"],
      description: "Create an [[immiaccount|ImmiAccount]] and register while your country's ballot is open. The 2026 Pacific Engagement stream ballot ran from 1 to 29 July 2026.",
      points: [
        "A$25, not refunded if you're not selected",
        "Aged 18 to 45 on the day the ballot opens",
        "Register as a citizen of one country, and later apply as that country's citizen",
      ],
      youHold: "A ballot registration showing 'Received' in ImmiAccount",
      cost: "A$25",
      icon: ICON.ticket,
    },
    {
      id: "selection",
      short: "Selection",
      title: "Random selection",
      who: ["government"],
      description: "Home Affairs randomly selects registrants during the published selection period: 5 August 2026 to 26 February 2027 for the 2026 ballot.",
      points: [
        "Selected people get a [[nos|Notification of Selection]] letter",
        "Your ImmiAccount status changes to 'Selected'",
        "Up to 3,000 places a year, counting partners and children",
      ],
      youHold: "A Notification of Selection letter with an invitation expiry date",
      icon: ICON.sparkles,
    },
    {
      id: "job",
      short: "Job",
      title: "Secure a job offer",
      who: ["you", "employer"],
      description: "In the Pacific Engagement stream, you or your partner in the application need an [[ongoing-offer|ongoing job offer]] in Australia.",
      points: [
        "Permanent full-time, permanent part-time or fixed-term (for example 12 months)",
        "Not casual, and in writing: position, salary, conditions and employer",
        "The free [[support|PEV Support Service]] helps selected people find employers",
        "The Treaty stream doesn't list a job offer requirement",
      ],
      youHold: "A compliant written job offer",
      icon: ICON.briefcase,
    },
    {
      id: "evidence",
      short: "Evidence",
      title: "Gather English and family evidence",
      who: ["you"],
      description: "Collect your English evidence, or sign the [[undertaking|PEV English Language Undertaking]], and documents for every family member who'll migrate.",
      points: [
        "English: schooling in a Pacific island country, 12 months of work or study in a listed country, or a test from the last 3 years",
        "Include every family member now: they can't be added later",
        "Customary adoptions are generally not recognised",
      ],
      youHold: "A complete application pack",
      icon: ICON.documentText,
    },
    {
      id: "apply",
      short: "Apply",
      title: "Apply online within 120 days",
      who: ["you"],
      description: "Use the link in your letter to lodge in ImmiAccount by the date shown. Late applications can't be accepted.",
      points: [
        "A$345, plus A$85 per family member",
        "Treaty stream: A$205, plus A$50 per family member",
        "Paying the wrong charge makes the application invalid",
      ],
      youHold: "A lodged subclass 192 application",
      cost: "A$345 (Treaty stream A$205), plus family charges",
      icon: ICON.paperAirplane,
    },
    {
      id: "checks",
      short: "Checks",
      title: "Health and character checks",
      who: ["you", "government"],
      description: "Arrange health examinations after you lodge, give police certificates when asked and answer any requests for information.",
      points: [
        "Health results are generally valid for 12 months",
        "Tuvalu applicants can use the Falepili Mobility Pathway Hub in Funafuti",
        "Applicants 16 or over meet the character requirement",
      ],
      youHold: "Health and character clearances",
      icon: ICON.shieldCheck,
    },
    {
      id: "grant",
      short: "Arrive",
      title: "Grant and arrival",
      who: ["government", "you"],
      description: "If you're outside Australia, enter before the date on your grant letter. You can then live, work and study anywhere in Australia.",
      points: [
        "A 5-year [[travel-facility|travel facility]] in the Pacific Engagement stream",
        "Unlimited travel in the Treaty stream: don't apply for a Resident Return visa",
        "Citizenship once you meet the residence requirement",
      ],
      youHold: "Permanent residence in Australia",
      icon: ICON.home,
    },
  ],
  check: {
    ok: {
      title: "You look on track",
      body: "Nothing in your answers rules you out. The next step is a complete application, with every family member, lodged by the date in your letter.",
    },
  },
  quiz: [
    {
      id: "country",
      topic: "Citizenship",
      question: "Are you a citizen and passport holder of a participating country?",
      help: "Micronesia, Fiji, Kiribati, Palau, Papua New Guinea, Marshall Islands, Samoa, Solomon Islands, Timor-Leste, Tonga, Tuvalu or Vanuatu.",
      options: [
        { value: "yes", label: "Yes", status: "ok", note: "Apply as a citizen of the same country you declared in the ballot." },
        {
          value: "nz",
          label: "Yes, but I'm also a New Zealand citizen",
          status: "stop",
          note: "New Zealand citizens are excluded. Home Affairs notes they may be able to apply directly for Australian citizenship after 4 years in Australia.",
          link: { label: "Special Category visa", href: "/visas/other-visas/special-category-visa-444" },
        },
        {
          value: "no",
          label: "No",
          status: "stop",
          note: "The Pacific Engagement visa is only for citizens of participating countries.",
          link: { label: "Talk through your options", href: "/bookings" },
        },
      ],
    },
    {
      id: "birth",
      topic: "Place of birth",
      question: "Were you, or one of your parents, born in a listed Pacific country, Australia or New Zealand?",
      options: [
        { value: "yes", label: "Yes", status: "ok", note: "That meets the birthplace rule. Australia and New Zealand are included because some people are born abroad for medical care." },
        {
          value: "no",
          label: "No",
          status: "stop",
          note: "You or a parent must have been born in a listed country. In the Treaty stream: you, a parent or a grandparent born in Tuvalu.",
        },
      ],
    },
    {
      id: "age",
      topic: "Age",
      question: "How old were you on the day your country's ballot opened?",
      options: [
        { value: "range", label: "18 to 45", status: "ok", note: "Within the range. Turning 46 during the application doesn't disqualify you." },
        {
          value: "over",
          label: "Over 45",
          status: "stop",
          note: "The Pacific Engagement stream needs you to be 18 to 45 on the day the ballot opened. The Treaty stream (Tuvalu) only needs 18 or over.",
        },
        { value: "under", label: "Under 18", status: "stop", note: "Applicants must be at least 18 on the day the ballot opens." },
      ],
    },
    {
      id: "selected",
      topic: "Ballot",
      question: "Have you been selected in the ballot?",
      options: [
        { value: "yes", label: "Yes, and I'm within 120 days", status: "ok", note: "Lodge by the date in your Notification of Selection letter. Late applications can't be accepted." },
        { value: "waiting", label: "I registered and I'm waiting", status: "todo", note: "Selections for the 2026 ballot run from 5 August 2026 to 26 February 2027." },
        {
          value: "no",
          label: "I didn't register",
          status: "stop",
          note: "You can only apply if you were selected. The 2026 Pacific Engagement stream ballot closed on 29 July 2026; check your eligibility before the next one.",
        },
      ],
    },
    {
      id: "job",
      topic: "Job offer",
      question: "Do you or your partner have an ongoing job offer in Australia?",
      options: [
        { value: "yes", label: "Yes: permanent or fixed-term, not casual", status: "ok", note: "Make sure it states the position, salary, conditions and employer." },
        { value: "notyet", label: "Not yet", status: "todo", note: "The free PEV Support Service (pev.gov.au) helps selected people find employers." },
        {
          value: "casual",
          label: "Only casual work",
          status: "stop",
          note: "Casual work doesn't count. You need permanent full-time, permanent part-time or fixed-term work with the same entitlements as permanent staff.",
        },
        { value: "treaty", label: "I'm in the Treaty stream", status: "ok", note: "The Treaty stream doesn't list a job offer requirement." },
      ],
    },
    {
      id: "english",
      topic: "English",
      question: "Can you or your partner show English?",
      help: "Schooling in a Pacific island country, 12 months of work or study in Australia, the UK, USA, Canada or New Zealand, or a test from the last 3 years.",
      options: [
        { value: "yes", label: "Yes", status: "ok", note: "Keep the evidence ready to attach when you lodge." },
        {
          value: "no",
          label: "No",
          status: "todo",
          note: "You can sign the [[undertaking|PEV English Language Undertaking]] (Form 1566) and join the Adult Migrant English Program after you arrive.",
          link: { label: "Practise PTE on Learniiz", href: "https://www.learniiz.com", external: true },
        },
        { value: "treaty", label: "I'm in the Treaty stream", status: "ok", note: "No English test is listed for the Treaty stream." },
      ],
    },
    {
      id: "family",
      topic: "Family",
      question: "Will everyone in your family who wants to migrate be in the application?",
      options: [
        { value: "yes", label: "Yes", status: "ok", note: "Good: family members can't be added after you lodge." },
        { value: "later", label: "Someone will join later", status: "todo", note: "Family members can't be added once the application is submitted. Include them when you lodge." },
        {
          value: "customary",
          label: "One child is adopted under custom",
          status: "todo",
          note: "Customary adoptions are generally not recognised. Adopted children need a formal adoption recognised under Australian law.",
        },
      ],
    },
    {
      id: "where",
      topic: "Your visa now",
      question: "If you're in Australia, what visa do you hold?",
      options: [
        { value: "outside", label: "I'm outside Australia", status: "ok", note: "You can apply from outside Australia." },
        { value: "substantive", label: "A substantive visa, or a Bridging visa A, B or C", status: "ok", note: "You can apply in Australia, but not while in immigration clearance." },
        {
          value: "other",
          label: "Another bridging visa, or no visa",
          status: "stop",
          note: "To apply in Australia you must hold a substantive visa or a Bridging visa A, B or C.",
          link: { label: "Book a consultation", href: "/bookings" },
        },
      ],
    },
  ],
  myths: [
    {
      myth: "The Pacific Engagement visa is points-tested.",
      fact: "No. Places are allocated by a random ballot, not by points or skills. Selected people then need to meet the job offer, English, health and character rules.",
    },
    {
      myth: "Once I'm selected, I can apply whenever I'm ready.",
      fact: "You must lodge within 120 days of selection, by the date in your letter. Late applications can't be accepted.",
    },
    {
      myth: "Any job offer will do.",
      fact: "It must be ongoing: permanent full-time, permanent part-time or fixed-term with the same entitlements as permanent staff. Casual work doesn't count.",
    },
    {
      myth: "I can add my family after I'm granted.",
      fact: "Everyone in your family who wants to migrate must be included when you lodge. They can't be added after the application is submitted.",
    },
    {
      myth: "Without an English test score I can't apply.",
      fact: "Schooling in a Pacific island country, or 12 months of work or study in a listed country, also counts. Or you can sign an undertaking to join the Adult Migrant English Program after arrival.",
    },
    {
      myth: "Treaty stream holders need a Resident Return visa after 5 years.",
      fact: "No. The Treaty stream has unlimited travel, and an RRV grant would cease the Treaty stream visa and its unlimited travel facility.",
    },
    {
      myth: "New Zealand citizens from the Pacific can use the PEV.",
      fact: "No. New Zealand citizens are excluded. Home Affairs notes they may be able to apply directly for Australian citizenship after 4 years in Australia.",
    },
    {
      myth: "My ballot fee is refunded if I'm not selected.",
      fact: "No. The A$25 registration fee isn't refunded if you're not selected.",
    },
  ],
  glossary: [
    {
      id: "pev",
      term: "PEV",
      full: "Pacific Engagement visa (subclass 192)",
      definition: "A permanent visa for citizens of participating Pacific countries and Timor-Leste, allocated by random ballot.",
    },
    {
      id: "ballot",
      term: "Ballot",
      definition: "The pre-application lottery. Each participating country has its own. You register for A$25 while it's open, and Home Affairs randomly selects registrants.",
    },
    {
      id: "nos",
      term: "Notification of Selection",
      definition: "The letter you get if you're selected in the ballot. It sets the date by which you must apply, within 120 days of selection.",
    },
    {
      id: "treaty",
      term: "Treaty stream",
      definition: "The stream for Tuvaluan citizens under the Australia-Tuvalu Falepili Union treaty, with its own ballot and up to 280 places a year.",
    },
    {
      id: "ongoing-offer",
      term: "Ongoing job offer",
      definition: "An offer of permanent full-time, permanent part-time or fixed-term work with the same entitlements as permanent staff, stating the position, salary, conditions and employer. Casual work doesn't count.",
    },
    {
      id: "undertaking",
      term: "PEV English Language Undertaking",
      full: "Form 1566",
      definition: "If you or your partner can't show English, signing it lets you join the Adult Migrant English Program after arrival instead.",
    },
    {
      id: "support",
      term: "PEV Support Service",
      definition: "A free service at pev.gov.au that helps people selected in the ballot find Australian employers.",
    },
    {
      id: "travel-facility",
      term: "Travel facility",
      definition: "The period in which you can leave and re-enter Australia as a permanent resident: 5 years from grant in the Pacific Engagement stream, unlimited in the Treaty stream.",
    },
    {
      id: "immiaccount",
      term: "ImmiAccount",
      definition: "The Home Affairs online account you use to register in the ballot and lodge your visa application.",
    },
    {
      id: "family-unit",
      term: "Member of the family unit",
      definition: "Your partner and dependent children, for example. It doesn't include parents, parents-in-law, aunts, uncles or cousins.",
    },
  ],
  fees: {
    variantLabel: "Which stream?",
    variants: [
      {
        id: "pe",
        label: "Pacific Engagement stream",
        hint: "Ballot registration plus the visa charge",
        primary: [
          { label: "Ballot registration", amount: 25 },
          { label: "Base application charge", amount: 345 },
        ],
        adult: [{ label: "Each family member", amount: 85 }],
        child: [{ label: "Each family member", amount: 85 }],
      },
      {
        id: "treaty",
        label: "Treaty stream (Tuvalu)",
        hint: "Ballot registration plus the visa charge",
        primary: [
          { label: "Ballot registration", amount: 25 },
          { label: "Base application charge", amount: 205 },
        ],
        adult: [{ label: "Each family member", amount: 50 }],
        child: [{ label: "Each family member", amount: 50 }],
      },
    ],
    maxAdults: 3,
    maxChildren: 6,
    notIncluded: "Not included: health examinations, police certificates and any English test.",
    notes: [
      "The A$25 ballot fee is paid when you register, and isn't refunded if you're not selected.",
      "Family members cost the same at any age: A$85 each in the Pacific Engagement stream, A$50 in the Treaty stream.",
      "Include every family member who'll migrate when you lodge: they can't be added later. Paying the wrong charge makes the application invalid.",
    ],
    confirmUrl: "https://immi.homeaffairs.gov.au/visas/visa-pricing-estimator",
    confirmLabel: "Home Affairs Visa Pricing Estimator",
  },
};
