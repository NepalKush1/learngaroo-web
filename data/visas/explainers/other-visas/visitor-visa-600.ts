import type { VisaExplainer } from "../types";
import { ICON } from "../icons";
import { visitorFinder } from "./visitor-finder";

// Interactive explainer for the Visitor visa (subclass 600). Every figure
// matches data/visas/other-visas-visitor.ts (checked against Home Affairs and
// the Migration Regulations on 12 October 2026).

export const visitorVisa600Explainer: VisaExplainer = {
  slug: "visitor-visa-600",
  factsAsAt: "12 October 2026",
  oneLiner:
    "A temporary visa to holiday in Australia, see family or friends, or attend business meetings, usually for 3 months and up to 12 months. You can't work on it, and it doesn't lead to permanent residence.",
  bigIdeas: [
    {
      title: "A visit, not a move",
      body: "You must genuinely intend a temporary stay. Home Affairs looks at your money, your travel history and your reasons to go home.",
      icon: ICON.globeAsiaAustralia,
    },
    {
      title: "Six streams to choose from",
      body: "Tourist (outside or in Australia), Sponsored Family, Business Visitor, Approved Destination Status and Frequent Traveller.",
      icon: ICON.listBullet,
    },
    {
      title: "No work, and no extensions",
      body: "You can't work, and study is limited to 3 months. To stay longer you need a new visa: a Visitor visa can't be extended.",
      icon: ICON.noSymbol,
    },
  ],
  heroCard: [
    { label: "Who it's for", value: "Tourists, family visitors and business visitors", icon: ICON.sun },
    { label: "How long", value: "Usually 3 months, up to 12 months", icon: ICON.clock },
    { label: "Work", value: "No work; study up to 3 months", icon: ICON.noSymbol },
    { label: "Sponsor", value: "Only in the Sponsored Family stream", icon: ICON.users },
    { label: "Permanent residence", value: "No pathway: it's a temporary visa", icon: ICON.home },
    { label: "Visa charge", value: "A$250 outside Australia; A$630 in Australia", icon: ICON.currencyDollar },
  ],
  actors: [
    {
      id: "family",
      name: "Your family or friends in Australia",
      short: "Family",
      icon: ICON.users,
      tone: "pink",
      role: "Invite you, host you, or sponsor you in the [[sfs|Sponsored Family stream]].",
      does: [
        "Write an invitation letter: your relationship, the purpose and the length of the visit",
        "Show their funds if they'll pay for your stay",
        "As a sponsor: complete [[form1149|Form 1149]], with no fee to pay",
        "As a sponsor: pay a [[bond|security bond]] if Home Affairs asks for one",
      ],
    },
    {
      id: "you",
      name: "You (the visitor)",
      short: "You",
      icon: ICON.user,
      tone: "green",
      role: "Apply in the stream that matches your trip, and keep to the visa's conditions.",
      does: [
        "Show you're a [[genuine|genuine visitor]] with enough money for your stay",
        "Apply online in [[immiaccount|ImmiAccount]] and pay the charge",
        "Don't work, and study for no more than 3 months",
        "Leave before your stay period ends",
      ],
    },
    {
      id: "government",
      name: "Department of Home Affairs",
      short: "Home Affairs",
      icon: ICON.buildingLibrary,
      tone: "blue",
      role: "Decides whether you're a genuine visitor and sets the terms of your stay.",
      does: [
        "Checks your funds, ties to home, health and character",
        "Decides your stay: usually 3 months, up to 12 months",
        "Sets single or multiple entry and any conditions, such as [[c8503|condition 8503]]",
        "May ask a sponsor for a [[bond|security bond]]",
      ],
    },
  ],
  flows: [
    {
      from: "family",
      to: "you",
      label: "Invites or sponsors",
      detail: "A relative or friend in Australia can write you an invitation letter. In the [[sfs|Sponsored Family stream]], a settled relative sponsors you instead.",
    },
    {
      from: "you",
      to: "government",
      label: "You apply online",
      detail: "You lodge in [[immiaccount|ImmiAccount]] with evidence of your funds, plans and reasons to return home, and pay the charge. Each person, including a child, applies separately.",
    },
    {
      from: "family",
      to: "government",
      label: "Bond, if asked",
      detail: "A sponsor pays no fee, but must pay a [[bond|security bond]] before the decision if Home Affairs asks. It's refunded if you comply and leave on time.",
    },
    {
      from: "government",
      to: "you",
      label: "Visa granted",
      detail: "Your grant letter shows your stay period, whether you have single, multiple or no travel entry, the date you must enter by and your conditions.",
    },
    {
      from: "you",
      to: "family",
      label: "You visit",
      detail: "You holiday or see family without working, and leave before your stay period ends.",
    },
  ],
  journeyTitle: "From planning your trip to heading home",
  journeyHighlight: "heading home",
  stages: [
    {
      id: "choose",
      short: "Choose",
      title: "Rule out the ETA and eVisitor, then pick a stream",
      who: ["you"],
      description:
        "If your passport qualifies for the free [[evisitor|eVisitor]] or the A$20 [[eta|ETA]] and 3 months is enough, you may not need this visa. With a conviction or a health matter to assess, this is the visa to use.",
      points: [
        "Tourist stream: a holiday or family visit, applied for outside or in Australia",
        "Sponsored Family stream: a relative in Australia sponsors you",
        "Business Visitor stream: meetings, conferences and negotiations",
        "Frequent Traveller and [[ads|Approved Destination Status]] streams: set passports or group tours",
      ],
      youHold: "The stream that fits your trip, and where you must be when you apply",
      icon: ICON.listBullet,
    },
    {
      id: "evidence",
      short: "Gather",
      title: "Gather evidence of money, purpose and ties to home",
      who: ["you", "family"],
      description: "Home Affairs needs to see you're a [[genuine|genuine visitor]] who can pay for the trip and will go home.",
      points: [
        "Bank statements for the last 3 months, pay slips, tax records or similar",
        "An invitation letter from family or friends, if you're visiting them",
        "Proof of your job, study, family or property at home",
        "Your travel plans while you're in Australia",
      ],
      youHold: "A document set that shows your funds and a genuine reason to visit",
      icon: ICON.documentText,
    },
    {
      id: "sponsor",
      short: "Sponsor",
      title: "Sponsored Family stream: your relative sponsors you",
      who: ["family"],
      description: "Only in this stream. Your sponsor completes and signs [[form1149|Form 1149]] and sends you a scan with evidence of your relationship.",
      points: [
        "A settled Australian citizen or permanent resident, aged 18 or over",
        "An eligible relative who has usually lived in Australia for the last 2 years",
        "No fee, but may have to pay a [[bond|security bond]] before the decision",
      ],
      youHold: "Form 1149 and relationship evidence to attach to your application",
      cost: "No fee for the sponsor; a bond only if asked",
      icon: ICON.users,
    },
    {
      id: "apply",
      short: "Apply",
      title: "Apply online and pay the charge",
      who: ["you", "government"],
      description:
        "Lodge in [[immiaccount|ImmiAccount]] and pay: Home Affairs doesn't process an unpaid application. Every person, including a child, lodges their own application.",
      points: [
        "A$250 in most streams; A$630 for the Tourist stream in Australia",
        "Plus A$700 ([[stac|subsequent temporary application charge]]) if the visa you hold or last held was also applied for in Australia",
        "A$1,845 for the Frequent Traveller stream",
        "In Australia, applying before your visa ends gives you a [[bva|Bridging visa A]]",
      ],
      youHold: "A lodged application with a transaction reference number",
      cost: "From A$250, paid by you",
      icon: ICON.paperAirplane,
    },
    {
      id: "checks",
      short: "Checks",
      title: "Biometrics, health checks and requests",
      who: ["government", "you"],
      description: "Home Affairs may ask for biometrics, health examinations or more documents. It may decide without asking, so attach everything up front.",
      points: [
        "Frequent Traveller applicants give biometrics at an Australian Biometric Collection Centre",
        "Health examinations depend on your country, your stay and what you'll do here",
        "Report a new passport, new contact details or the birth of a child",
        "Check current processing times on the Home Affairs tool",
      ],
      youHold: "A complete, up-to-date application",
      icon: ICON.fingerPrint,
    },
    {
      id: "grant",
      short: "Grant",
      title: "Read your grant letter",
      who: ["government", "you"],
      description: "Your grant letter and [[vevo|VEVO]] show your stay period, your entry type, the date you must enter by and your conditions.",
      points: [
        "If you applied outside Australia, don't book travel until the visa is granted",
        "A Sponsored Family visa always carries [[c8503|condition 8503]]",
        "Parents of Australian citizens or permanent residents may get a multiple-entry visa valid for more than 12 months",
      ],
      youHold: "A visa with a known stay period, entry type and conditions",
      icon: ICON.checkBadge,
    },
    {
      id: "visit",
      short: "Visit",
      title: "Visit, keep to your conditions, and leave on time",
      who: ["you"],
      description: "Enjoy your stay without working, and leave before your stay period ends. To stay longer, apply for a new visa before this one ends.",
      points: [
        "No work ([[c8101|condition 8101]]); study up to 3 months",
        "A round-trip cruise from an Australian port doesn't reset your stay",
        "With [[c8503|condition 8503]] you can't apply in Australia unless it's waived",
        "On visitor, working holiday or bridging visas, a further visa taking you past 12 months in a row needs exceptional circumstances",
      ],
      youHold: "A completed visit and a good record for future applications",
      icon: ICON.sun,
    },
  ],
  check: {
    title: "Could a Visitor visa work for you?",
    highlight: "work for you",
    ok: {
      title: "You look on track",
      body: "Nothing in your answers rules you out. The next step is choosing the right stream and gathering evidence of your funds and ties to home.",
    },
    disclaimer: "A general self-check, not advice or a prediction. Home Affairs decides each application on its own merits.",
  },
  quiz: [
    {
      id: "purpose",
      topic: "Purpose",
      question: "What's the main purpose of your trip?",
      options: [
        { value: "tourism", label: "A holiday, or visiting family or friends", status: "ok", note: "That's what the Tourist and Sponsored Family streams are for." },
        {
          value: "business",
          label: "Business meetings, a conference or negotiations",
          status: "ok",
          note: "The Business Visitor stream covers this, as long as you don't work for an Australian business or sell to the public.",
        },
        {
          value: "work",
          label: "Paid work in Australia",
          status: "stop",
          note: "You can't work on a Visitor visa. Short-term paid work needs a work visa such as the subclass 400. A working holiday may suit people aged 18 to 30 (or 35).",
          link: { label: "Working Holiday visa (417)", href: "/visas/other-visas/working-holiday-visa-417" },
        },
        {
          value: "study",
          label: "Study for more than 3 months",
          status: "stop",
          note: "Study or training is limited to 3 months on a Visitor visa. A longer course needs a Student visa.",
          link: { label: "Student visa (500)", href: "/visas/study/student-visa-500" },
        },
      ],
    },
    {
      id: "ties",
      topic: "Reasons to return",
      question: "Do you have strong reasons to return home?",
      help: "For example a job, study, close family, a home or other assets.",
      options: [
        {
          value: "strong",
          label: "Yes: a job, study, family or property at home",
          status: "ok",
          note: "Home Affairs weighs these ties when it decides whether you're a genuine visitor. Include evidence of each.",
        },
        {
          value: "some",
          label: "Some, but they're hard to show",
          status: "todo",
          note: "Gather what you can, such as an employer letter, proof of enrolment or property records. A relative's sponsorship in the Sponsored Family stream can add weight.",
        },
        {
          value: "few",
          label: "Not really",
          status: "todo",
          note: "Weak ties to home can lead to refusal. Get advice on how to present your circumstances before you apply.",
          link: { label: "Get advice", href: "/bookings" },
        },
      ],
    },
    {
      id: "funds",
      topic: "Funds",
      question: "Can you show enough money for your stay and your trip home?",
      options: [
        { value: "own", label: "Yes, with 3 months of bank statements or similar", status: "ok", note: "Pay slips, tax records, term deposits or credit card statements also help." },
        { value: "host", label: "My family or friends in Australia will pay", status: "ok", note: "Include their invitation letter and proof of their funds." },
        {
          value: "no",
          label: "Not yet",
          status: "todo",
          note: "You must have, or have access to, enough money to support yourself in Australia and to leave at the end of your stay.",
        },
      ],
    },
    {
      id: "length",
      topic: "Length of stay",
      question: "How long do you want to stay?",
      options: [
        {
          value: "short",
          label: "Up to 3 months",
          status: "ok",
          note: "The usual stay. If your passport qualifies, the free eVisitor or the A$20 ETA may suit you better.",
          link: { label: "Compare in the visa finder", href: "#finder" },
        },
        {
          value: "long",
          label: "More than 3 months, up to 12 months",
          status: "todo",
          note: "Possible in certain circumstances. Explain why you need the longer stay, with evidence.",
        },
        {
          value: "parent",
          label: "Longer, as the parent of an Australian citizen or permanent resident",
          status: "todo",
          note: "You may get a multiple-entry visa valid for more than 12 months, but you can't spend more than 12 months in Australia in any 18-month period.",
          link: { label: "Sponsored Parent (Temporary) visa", href: "/visas/family/sponsored-parent-temporary-visa-870" },
        },
      ],
    },
    {
      id: "location",
      topic: "Where you apply",
      question: "Where are you now?",
      options: [
        {
          value: "outside",
          label: "Outside Australia",
          status: "ok",
          note: "You apply from outside Australia and must still be outside when the visa is granted. Don't book travel until it is.",
        },
        {
          value: "inside",
          label: "In Australia, on a visa without condition 8503",
          status: "ok",
          note: "You can apply for the Tourist stream in Australia if you hold a substantive visa, or held one in the last 28 days. It costs A$630, plus A$700 if the visa you hold or last held was also applied for in Australia.",
        },
        {
          value: "c8503",
          label: "In Australia, and my visa has condition 8503",
          status: "stop",
          note: "You can't apply in Australia unless the condition is waived. A waiver is only possible for a major change beyond your control that happened after grant.",
          link: { label: "The 8503 waiver", href: "/visas/appeals-and-review/condition-8503-no-further-stay-waiver" },
        },
        {
          value: "expired",
          label: "In Australia, and my last visa ended more than 28 days ago",
          status: "stop",
          note: "Applying online needs a substantive visa, or one that ended within the last 28 days. Otherwise Home Affairs looks for reasons beyond your control and compelling reasons. Get advice first.",
          link: { label: "Book urgent advice", href: "/bookings" },
        },
      ],
    },
    {
      id: "character",
      topic: "Health and character",
      question: "Any criminal convictions or significant health matters?",
      options: [
        { value: "clear", label: "No", status: "ok", note: "You may still be asked for health examinations or police certificates." },
        {
          value: "concern",
          label: "Yes, a conviction or a health matter",
          status: "todo",
          note: "Declare every conviction: this visa, rather than an ETA or eVisitor, is the one to use, with evidence of the offence and sentence. Health examinations may be needed.",
          link: { label: "Get advice", href: "/bookings" },
        },
      ],
    },
    {
      id: "children",
      topic: "Children",
      question: "Is anyone under 18 travelling?",
      options: [
        { value: "no", label: "No", status: "ok", note: "Nothing extra needed." },
        { value: "parents", label: "Yes, with both parents", status: "ok", note: "Each child lodges their own application and pays their own charge." },
        {
          value: "without",
          label: "Yes, without one or both parents",
          status: "todo",
          note: "You need consent from each non-travelling parent or guardian (Form 1229 or a statutory declaration), and Form 1257 if the child stays with someone who isn't a relative or guardian.",
        },
      ],
    },
  ],
  myths: [
    {
      myth: "I can extend my Visitor visa.",
      fact: "No. You apply for a new visa before your current one ends. In Australia that's the Tourist stream (A$630, plus A$700 in some cases), and only if your visa has no condition 8503 or the condition is waived.",
    },
    {
      myth: "A little cash-in-hand work, or volunteering that's really a job, is fine.",
      fact: "No. Working breaches condition 8101 and can lead to cancellation under section 116 and an exclusion period. Unpaid volunteer tourism may be allowed only where it isn't a job.",
    },
    {
      myth: "A cruise around Australia resets my stay.",
      fact: "No. A round-trip cruise that starts and ends in Australia counts as time in Australia and doesn't reset your stay period.",
    },
    {
      myth: "My family can all go on one application.",
      fact: "No. Every person, including a child listed on your passport, lodges their own application and pays their own charge. You can group the applications in ImmiAccount so they're processed together, but each is decided on its own merits.",
    },
    {
      myth: "Being sponsored by a relative is always better than an invitation letter.",
      fact: "Not necessarily. The Tourist stream with an invitation letter is usually simpler: no bond, often multiple entry and no automatic condition 8503. The Sponsored Family stream suits people who need the extra weight of a relative's undertaking.",
    },
    {
      myth: "As the parent of an Australian, I can stay as long as I like.",
      fact: "No. Parents of Australian citizens or permanent residents may get a multiple-entry visa valid for more than 12 months, but can't spend more than 12 months in Australia in any 18-month period.",
    },
    {
      myth: "As a business visitor I can do short paid jobs.",
      fact: "No. You can make enquiries, negotiate contracts and attend conferences, but not work for an Australian business or sell to the public. Short-term paid work needs a work visa such as the subclass 400.",
    },
  ],
  roles: [
    {
      id: "visitor",
      label: "I'm the visitor",
      intro: "Your part is a complete application that shows a genuine, temporary visit, and keeping to your conditions once you're here.",
      groups: [
        {
          title: "Before you apply",
          items: [
            "Check whether the [[evisitor|eVisitor]] or the [[eta|ETA]] fits first",
            "Collect 3 months of bank statements and proof of your ties to home",
            "Get an invitation letter if you're visiting family or friends",
            "Declare every conviction",
          ],
        },
        {
          title: "When you apply",
          items: [
            "Lodge in [[immiaccount|ImmiAccount]]: one application per person, including children",
            "Pay the charge: A$250 in most streams",
            "Give biometrics or have health examinations if asked",
          ],
        },
        {
          title: "Once it's granted",
          items: ["Check [[vevo|VEVO]] for your stay period, entry type and conditions", "Don't work; study no more than 3 months", "Leave before your stay period ends"],
        },
      ],
    },
    {
      id: "family",
      label: "I'm the family member in Australia",
      tone: "pink",
      intro: "You can support a visit with an invitation letter, or sponsor a relative in the [[sfs|Sponsored Family stream]].",
      groups: [
        {
          title: "Inviting a visitor",
          items: [
            "Write a letter stating your relationship and the purpose and length of the visit",
            "Say whether you'll host them or pay for them, with proof of your funds if you'll pay",
          ],
        },
        {
          title: "Sponsoring a relative",
          items: [
            "Be a settled Australian citizen or permanent resident aged 18 or over who has usually lived here for the last 2 years",
            "Complete and sign [[form1149|Form 1149]] and send it with evidence of your relationship",
            "Pay a [[bond|security bond]] if Home Affairs asks for one",
          ],
        },
        {
          title: "While they're here",
          items: [
            "As a sponsor, you're responsible for their compliance while the visa is valid",
            "If they overstay or breach a condition, the bond is forfeited and you can't sponsor anyone for 5 years",
          ],
        },
      ],
    },
  ],
  glossary: [
    {
      id: "genuine",
      term: "Genuine visitor",
      definition: "Someone who genuinely intends a temporary stay for the visa's purpose. Home Affairs looks at your past visa compliance, your reasons to return home, your travel history and conditions in your home country.",
    },
    {
      id: "sfs",
      term: "Sponsored Family stream",
      definition: "A Visitor visa stream where a settled relative in Australia sponsors you, takes responsibility for your compliance and may have to pay a security bond. The visa always carries condition 8503.",
    },
    {
      id: "bond",
      term: "Security bond",
      definition: "Money a sponsor may be asked to pay before the visa is decided, in an amount Home Affairs sets. It's refunded if the visitor complies and leaves on time, and forfeited if they don't.",
    },
    {
      id: "form1149",
      term: "Form 1149",
      full: "Application for sponsorship for Sponsored Family Visitors",
      definition: "The sponsorship form for the Sponsored Family stream. Your sponsor completes and signs it, and you attach it to your online application.",
    },
    { id: "c8101", term: "Condition 8101", definition: "No work in Australia. It applies in every Visitor visa stream except Business Visitor, which has condition 8115 instead." },
    {
      id: "c8115",
      term: "Condition 8115",
      definition: "Business Visitor stream only: business visitor activities such as meetings and conferences, with no work for an Australian business and no selling to the public.",
    },
    { id: "c8201", term: "Condition 8201", definition: "You must not study or train for more than 3 months." },
    {
      id: "c8503",
      term: "Condition 8503",
      full: "No Further Stay",
      definition: "You can't be granted most other visas while you're in Australia. Always imposed in the Sponsored Family stream and sometimes in others. A waiver is only possible for a major change beyond your control after grant.",
    },
    {
      id: "stac",
      term: "Subsequent temporary application charge",
      definition: "An extra A$700 on an onshore Tourist stream application when the visa you hold, or last held, was also applied for in Australia. It isn't charged on your first temporary visa applied for in Australia.",
    },
    { id: "immiaccount", term: "ImmiAccount", definition: "Home Affairs' online account, where you lodge visa applications, attach documents and pay." },
    {
      id: "vevo",
      term: "VEVO",
      full: "Visa Entitlement Verification Online",
      definition: "Home Affairs' online service that shows your visa's stay period, entry details and conditions.",
    },
    {
      id: "bva",
      term: "Bridging visa A",
      definition: "A visa granted when you apply in Australia before your current visa ends, so you can stay while you wait. To travel before the decision you need a Bridging visa B.",
    },
    { id: "evisitor", term: "eVisitor (subclass 651)", definition: "A free visa for European passport holders, including UK British Citizens, for stays of up to 3 months each visit." },
    { id: "eta", term: "ETA (subclass 601)", full: "Electronic Travel Authority", definition: "A visa for eligible passports, such as the US, Canada and Japan, applied for in an app for A$20, for stays of up to 3 months each visit." },
    {
      id: "ads",
      term: "Approved Destination Status",
      definition: "A Visitor visa stream for citizens of the People's Republic of China on a group tour arranged by an approved travel agent, who lodges the application for them.",
    },
  ],
  cta: {
    subtitle: "We check your facts against these rules, tell you honestly where you stand, and prepare the application with you and, where needed, your family in Australia.",
  },
  finder: visitorFinder,
  fees: {
    variantLabel: "Which stream?",
    variants: [
      { id: "tourist-outside", label: "Tourist stream, applying outside Australia", primary: [{ label: "Visa application charge", amount: 250 }] },
      {
        id: "tourist-inside",
        label: "Tourist stream, applying in Australia",
        hint: "When the visa you hold, or last held, was applied for outside Australia (for example an ETA or eVisitor)",
        primary: [{ label: "Visa application charge", amount: 630 }],
      },
      {
        id: "tourist-inside-stac",
        label: "Tourist stream in Australia, after a visa you also applied for in Australia",
        hint: "Adds the subsequent temporary application charge",
        primary: [
          { label: "Visa application charge", amount: 630 },
          { label: "Subsequent temporary application charge", amount: 700 },
        ],
      },
      { id: "sponsored-family", label: "Sponsored Family stream", primary: [{ label: "Visa application charge", amount: 250 }] },
      { id: "business", label: "Business Visitor stream", primary: [{ label: "Visa application charge", amount: 250 }] },
      { id: "ads", label: "Approved Destination Status stream", primary: [{ label: "Visa application charge", amount: 250 }] },
      { id: "frequent", label: "Frequent Traveller stream", primary: [{ label: "Visa application charge", amount: 1845 }] },
    ],
    maxAdults: 0,
    maxChildren: 0,
    notIncluded: "Not included: health examinations, police certificates, biometrics, translations, health insurance and any security bond.",
    notes: [
      "Charges from 1 July 2026, for one applicant. Family members can't be included: each person, including a child, lodges their own application and pays their own charge.",
      "The subsequent temporary application charge isn't charged on your first temporary visa applied for in Australia, or on applications made outside Australia.",
      "Eligible Pacific Island and Timor-Leste passport holders pay a reduced charge from 1 July 2026. ImmiAccount applies it from the passport used, and it isn't shown here.",
      "In the Sponsored Family stream the sponsor pays no fee, but Home Affairs may ask for a security bond in an amount it sets.",
    ],
    confirmUrl: "https://immi.homeaffairs.gov.au/visas/visa-pricing-estimator",
    confirmLabel: "Home Affairs Visa Pricing Estimator",
  },
};
