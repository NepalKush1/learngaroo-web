import type { VisaExplainer } from "../types";
import { ICON } from "../icons";
import { employerFinder } from "./employer-finder";

// Interactive explainer for the Temporary Work (Short Stay Specialist) visa
// (subclass 400). Every figure matches data/visas/employer-sponsored.ts
// (checked against Home Affairs and the Migration Regulations on
// 12 October 2026).

export const temporaryWorkShortStaySpecialist400Explainer: VisaExplainer = {
  slug: "temporary-work-short-stay-specialist-visa-400",
  factsAsAt: "12 October 2026",
  oneLiner:
    "A short-stay visa for highly specialised, non-ongoing work in Australia, usually up to 3 months and at most 6. You apply from outside Australia, and no sponsor or nomination is needed.",
  bigIdeas: [
    {
      title: "Specialist skills, short job",
      body: "Your skills can't reasonably be found in Australia, and the work is non-ongoing: done within 6 months, with no plan to stay on.",
      icon: ICON.wrenchScrewdriver,
    },
    {
      title: "No sponsor needed",
      body: "The Australian business gives you a contract, letter of offer or invitation. There's no sponsorship or nomination.",
      icon: ICON.documentText,
    },
    {
      title: "In, do the job, out",
      body: "Usually up to 3 months, at most 6. It can't be extended and doesn't lead to permanent residence.",
      icon: ICON.paperAirplane,
    },
  ],
  heroCard: [
    { label: "Who invites you", value: "An Australian business, with a contract or invitation", icon: ICON.buildingOffice2 },
    { label: "How long", value: "Usually up to 3 months, at most 6", icon: ICON.clock },
    { label: "Your work", value: "Only the specified work (condition 8107)", icon: ICON.briefcase },
    { label: "Where you apply", value: "Outside Australia, and stay there until it's decided", icon: ICON.globeAsiaAustralia },
    { label: "Family", value: "Can come, but can't work or study", icon: ICON.users },
    { label: "Visa charge", value: "A$535 (nil for foreign government representatives)", icon: ICON.currencyDollar },
  ],
  actors: [
    {
      id: "business",
      name: "The Australian business",
      short: "Business",
      icon: ICON.buildingOffice2,
      tone: "pink",
      role: "Engages you for specialised work it can't reasonably fill locally.",
      does: [
        "Gives you a contract, letter of offer or invitation",
        "Uses you for non-ongoing work, not to fill a vacancy",
        "May need to show it tried to find Australian workers",
        "Must follow Australian workplace law",
      ],
    },
    {
      id: "overseas",
      name: "Your overseas employer",
      short: "Your employer",
      icon: ICON.briefcase,
      tone: "teal",
      role: "If you're employed overseas, explains why it's sending you.",
      does: [
        "Writes a letter describing your position and duties",
        "Explains why you're being sent",
        "May need to show it tried to find Australian workers",
      ],
    },
    {
      id: "you",
      name: "You (the specialist)",
      short: "You",
      icon: ICON.user,
      tone: "green",
      role: "Apply from outside Australia and do only the specified work.",
      does: [
        "Show highly specialised skills, knowledge or experience",
        "Apply online while outside Australia and pay A$535",
        "Enter Australia within 6 months of the grant",
        "Do only the specified work, then leave",
      ],
    },
    {
      id: "government",
      name: "Department of Home Affairs",
      short: "Home Affairs",
      icon: ICON.buildingLibrary,
      tone: "blue",
      role: "Checks the work is genuine, specialised and non-ongoing, then decides.",
      does: [
        "Assesses whether the skills are available in Australia",
        "Checks you're a [[gte|genuine temporary entrant]]",
        "Sets your stay period, up to 6 months",
        "Grants the visa with its conditions",
      ],
    },
  ],
  flows: [
    {
      from: "business",
      to: "you",
      label: "Contract or invitation",
      detail: "The Australian business gives you a contract, letter of offer or invitation setting out the work, the dates and who will pay you.",
    },
    {
      from: "overseas",
      to: "you",
      label: "Employer letter",
      detail: "If you're employed overseas, your employer writes a letter about your position, your duties and why you're being sent.",
    },
    {
      from: "you",
      to: "government",
      label: "You apply offshore",
      detail: "You apply online while outside Australia, with your contract, skills evidence and, for stays over 3 months, a [[business-case|business case]].",
    },
    {
      from: "government",
      to: "you",
      label: "Visa granted",
      detail: "If it's granted, you must arrive within 6 months. Your stay period starts on your first entry.",
    },
    {
      from: "you",
      to: "business",
      label: "You do the job",
      detail: "You do only the specified work ([[c8107|condition 8107]]), then leave before your stay period ends.",
    },
  ],
  journeyTitle: "From invitation to a finished job",
  journeyHighlight: "finished job",
  stages: [
    {
      id: "engage",
      short: "Engage",
      title: "Get the engagement documents",
      who: ["business", "overseas"],
      description: "The Australian business confirms the work, and your overseas employer explains the assignment.",
      points: [
        "A contract, letter of offer or invitation describing the work, the dates and who pays you",
        "A letter from your overseas employer about your role and duties",
        "The business must follow Australian workplace law",
      ],
      youHold: "A signed contract or invitation, and an employer letter",
      icon: ICON.documentText,
    },
    {
      id: "evidence",
      short: "Evidence",
      title: "Show your specialised skills",
      who: ["you"],
      description: "Show why your skills are needed and can't reasonably be found in Australia.",
      points: [
        "Your CV, qualifications, licences or certificates",
        "Evidence the work is [[non-ongoing|non-ongoing]] and couldn't be done by an Australian worker",
        "A [[business-case|business case]] if you need more than 3 months",
      ],
      youHold: "A skills and business-case bundle",
      icon: ICON.academicCap,
    },
    {
      id: "apply",
      short: "Apply",
      title: "Apply from outside Australia",
      who: ["you", "government"],
      description: "Apply online in ImmiAccount while you're outside Australia. You must also be outside when it's decided.",
      points: [
        "A$535 for you, A$535 per adult and A$135 per child",
        "Foreign government representatives pay nothing",
        "Allow time before your travel date, and don't book travel until it's granted",
      ],
      youHold: "A lodged application",
      cost: "A$535, paid by you",
      icon: ICON.paperAirplane,
    },
    {
      id: "checks",
      short: "Checks",
      title: "Respond to requests",
      who: ["government", "you"],
      description: "Home Affairs may ask for more before it decides.",
      points: ["Health examinations", "Police certificates", "Biometrics"],
      youHold: "Completed checks",
      icon: ICON.shieldCheck,
    },
    {
      id: "arrive",
      short: "Arrive",
      title: "Enter within 6 months and do the work",
      who: ["you", "business"],
      description: "Arrive within 6 months of the grant, or the shorter period on your grant letter.",
      points: [
        "Your stay starts on first entry and doesn't restart on later trips",
        "Do only the work the visa was granted for ([[c8107|condition 8107]])",
        "Leave before your stay period ends",
      ],
      youHold: "A subclass 400 visa with a stay of up to 6 months",
      icon: ICON.briefcase,
    },
  ],
  check: {
    ok: {
      title: "You look on track",
      body: "Nothing in your answers rules you out. The next step is checking the details: your contract, your skills evidence and how long you need.",
    },
    disclaimer: "A general self-check, not advice or a prediction. Your evidence and full circumstances decide the outcome.",
  },
  quiz: [
    {
      id: "work",
      topic: "Type of work",
      question: "What kind of work is it?",
      options: [
        {
          value: "specialist",
          label: "Highly specialised, short-term work no one in Australia can reasonably do",
          status: "ok",
          note: "That's what the 400 is for: [[non-ongoing|non-ongoing]] work that assists an Australian business.",
        },
        {
          value: "ongoing",
          label: "Filling a job, or ongoing or routine work",
          status: "stop",
          note: "The 400 is only for non-ongoing work. If the role is ongoing, the business may be able to sponsor you on a Skills in Demand visa (subclass 482).",
          link: { label: "Skills in Demand visa (482)", href: "/visas/employer-sponsored/skills-in-demand-visa-482" },
        },
        {
          value: "entertainment",
          label: "Performing, supporting performers, or a production shown in Australia",
          status: "stop",
          note: "That needs the Temporary Activity visa (subclass 408) Entertainment stream.",
          link: { label: "Temporary Activity visa (408)", href: "/visas/employer-sponsored/temporary-activity-visa-408" },
        },
        {
          value: "promo",
          label: "A promotional appearance without performing, or a production for overseas release only",
          status: "ok",
          note: "Allowed on a 400. A production for overseas release needs a distribution contract or similar evidence.",
        },
      ],
    },
    {
      id: "length",
      topic: "Length of stay",
      question: "How long do you need to stay?",
      options: [
        { value: "short", label: "Up to 3 months", status: "ok", note: "The usual length of a 400." },
        {
          value: "longer",
          label: "Between 3 and 6 months",
          status: "todo",
          note: "Stays over 3 months need a strong [[business-case|business case]] with the application, or you may be granted a shorter stay.",
        },
        {
          value: "over",
          label: "More than 6 months",
          status: "stop",
          note: "The 400 allows 6 months at most and can't be extended. Another visa may fit better.",
          link: { label: "Talk through your options", href: "/bookings" },
        },
      ],
    },
    {
      id: "docs",
      topic: "Engagement documents",
      question: "Do you have a contract, letter of offer or invitation from the Australian business?",
      options: [
        { value: "yes", label: "Yes", status: "ok", note: "Make sure it sets out the work, the dates and who will pay you." },
        { value: "notyet", label: "Not yet", status: "todo", note: "Ask the business for one. It's the main evidence of the work you'll do." },
      ],
    },
    {
      id: "location",
      topic: "Where you apply",
      question: "Where are you now?",
      options: [
        { value: "outside", label: "Outside Australia", status: "ok", note: "You can apply. Stay outside Australia until the visa is decided." },
        {
          value: "inside",
          label: "In Australia",
          status: "stop",
          note: "You can't apply for a 400 from inside Australia. You must be outside when you apply and when it's decided.",
          link: { label: "Talk through your options", href: "/bookings" },
        },
      ],
    },
    {
      id: "family",
      topic: "Family",
      question: "Is anyone coming with you?",
      options: [
        { value: "alone", label: "Just me", status: "ok", note: "Nothing more to arrange." },
        {
          value: "family",
          label: "My partner or children",
          status: "ok",
          note: "Include them when you apply; they can't be added later. They can't work or study (other than a language course), and you must show you can support them.",
        },
      ],
    },
    {
      id: "history",
      topic: "Previous 400 visas",
      question: "Have you held several 400 visas recently?",
      options: [
        { value: "no", label: "No", status: "ok", note: "Nothing extra to explain." },
        {
          value: "yes",
          label: "Yes",
          status: "todo",
          note: "Repeated 400 visas can suggest ongoing work, which weakens the [[gte|genuine temporary entrant]] assessment. Show why each job is separate and short.",
        },
      ],
    },
    {
      id: "health",
      topic: "Health and character",
      question: "Any health or character concerns?",
      options: [
        { value: "clear", label: "No concerns", status: "ok", note: "Home Affairs may still ask for health examinations or police certificates." },
        {
          value: "concern",
          label: "I have a significant health condition or a criminal record",
          status: "todo",
          note: "It doesn't automatically rule you out, but it needs careful preparation and advice.",
          link: { label: "Get advice", href: "/bookings" },
        },
      ],
    },
  ],
  myths: [
    {
      myth: "The business must be an approved sponsor.",
      fact: "No. The 400 needs no sponsorship or nomination, only a contract, letter of offer or invitation. The business must still follow Australian workplace law.",
    },
    {
      myth: "I can extend my stay if the job runs over.",
      fact: "No. The 400 can't be extended, and you can't apply for it from inside Australia. If condition 8503 is on your visa, you can't apply for most other visas onshore either.",
    },
    {
      myth: "Each trip restarts my stay period.",
      fact: "No. Your stay period starts when you first enter Australia and doesn't restart when you travel in and out.",
    },
    {
      myth: "Musicians can perform on a 400.",
      fact: "Not for Australian audiences. Performing, supporting performers or working on a production shown in Australia needs the 408 Entertainment stream. Promotional appearances without performances are fine on a 400.",
    },
    {
      myth: "My family can work while I'm on the job.",
      fact: "No. Family members can come with you, but they can't work or study, apart from a language training program.",
    },
    {
      myth: "A 400 can lead to permanent residence.",
      fact: "It can't. It's for short, non-ongoing work. If the work becomes ongoing, the business may be able to sponsor you on a Skills in Demand visa (subclass 482).",
    },
  ],
  glossary: [
    {
      id: "non-ongoing",
      term: "Non-ongoing work",
      definition: "Work that's likely to be finished within 6 months, with no arrangement for you to stay on afterwards.",
    },
    {
      id: "business-case",
      term: "Business case",
      definition: "A written explanation of why the work needs you in Australia for more than 3 months. Without a strong one, you may be granted a shorter stay.",
    },
    {
      id: "gte",
      term: "Genuine temporary entrant",
      definition: "Someone who intends to stay temporarily and do only what the visa allows. Home Affairs looks at your circumstances, immigration history and past compliance with visa conditions.",
    },
    {
      id: "c8107",
      term: "Condition 8107",
      definition: "Work only for the employer, and in the position or activity, the visa was granted for. Don't work for yourself or anyone else, or do unrelated activities.",
    },
    {
      id: "c8503",
      term: "Condition 8503",
      definition: "If it's imposed, you can't apply for another substantive visa while in Australia, other than a protection visa, unless it's waived.",
    },
    {
      id: "c8101",
      term: "Condition 8101",
      definition: "Imposed on family members: no work in Australia.",
    },
    {
      id: "immiaccount",
      term: "ImmiAccount",
      definition: "The Home Affairs online account you use to lodge the application while you're outside Australia.",
    },
  ],
  finder: employerFinder,
  fees: {
    variantLabel: "Who is applying?",
    variants: [
      {
        id: "standard",
        label: "Standard application",
        primary: [{ label: "Base application charge (you)", amount: 535 }],
        adult: [{ label: "Each additional applicant aged 18 or over", amount: 535 }],
        child: [{ label: "Each additional applicant under 18", amount: 135 }],
      },
      {
        id: "nil",
        label: "Foreign government representative",
        hint: "Or invited by an organisation listed in a legislative instrument",
        primary: [{ label: "Base application charge (you)", amount: 0 }],
      },
    ],
    maxAdults: 3,
    maxChildren: 6,
    notIncluded: "Not included: health examinations, police certificates, biometrics, and health insurance (recommended, because you're liable for your own health costs).",
    notes: [
      "A lower charge applies to eligible Pacific Island and Timor-Leste passport holders.",
      "For a foreign government representative, this page doesn't state the family charges, so they aren't added.",
    ],
    confirmUrl: "https://immi.homeaffairs.gov.au/visas/visa-pricing-estimator",
    confirmLabel: "Home Affairs Visa Pricing Estimator",
  },
};
