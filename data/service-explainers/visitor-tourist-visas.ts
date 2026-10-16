import type { ServiceExplainer } from "./types";
import { ICON } from "../visas/explainers/icons";
import { visitorFinder } from "../visas/explainers/other-visas/visitor-finder";

// Interactive explainer for /services/visitor-tourist-visas. Every figure
// comes from the library pages in `pages` (data/visas/other-visas-visitor.ts
// and the condition 8503 guide in data/visas/appeals-and-review.ts, checked
// against Home Affairs and the Migration Regulations on 12 October 2026, with
// the 1 July 2026 charges). The rule that visitor and working holiday visa
// holders can't apply for a Student visa in Australia comes from the
// Student visa (500) library page (verifiedExtras). The finder is shared
// with the visitor visa explainers.

export const visitorTouristVisasServiceExplainer: ServiceExplainer = {
  slug: "visitor-tourist-visas",
  factsAsAt: "12 October 2026",
  pages: [
    "visitor-visa-600",
    "electronic-travel-authority-601",
    "evisitor-visa-651",
    "condition-8503-no-further-stay-waiver",
    "medical-treatment-visa-602",
    "working-holiday-visa-417",
    "work-and-holiday-visa-462",
  ],
  name: "visitor visa route",
  accent: "Subclasses 600, 601 and 651",
  oneLiner:
    "Visit Australia for a holiday, to see family or friends, or for business meetings, on the visa that fits your passport and your trip. You can't work on these visas, and they don't lead to permanent residence.",
  bigIdeas: [
    {
      title: "Your passport points the way",
      body: "Many passports can use the free eVisitor or the A$20 ETA for up to 3 months a visit. Otherwise you need a Visitor visa (600).",
      icon: ICON.identification,
    },
    {
      title: "A visit, not a move",
      body: "You must genuinely intend a temporary stay, with enough money and reasons to go home. No work, and study of up to 3 months.",
      icon: ICON.globeAsiaAustralia,
    },
    {
      title: "No extensions",
      body: "None of these visas can be extended. To stay longer, apply for a new visa in time; condition 8503 can block that in Australia.",
      icon: ICON.noSymbol,
    },
  ],
  heroCard: [
    { label: "Who it's for", value: "Tourists, family visitors and business visitors", icon: ICON.sun },
    { label: "How long", value: "Up to 3 months a visit, or up to 12 months on a 600", icon: ICON.clock },
    { label: "Work", value: "No work; business visits only where the visa allows", icon: ICON.briefcase },
    { label: "Where you apply", value: "ETA and eVisitor: outside Australia. 600: in or outside", icon: ICON.mapPin },
    { label: "Permanent residence", value: "No pathway: these are temporary visas", icon: ICON.home },
    { label: "What it costs", value: "eVisitor free, ETA A$20, Visitor visa from A$250", icon: ICON.currencyDollar },
  ],
  compare: {
    navLabel: "Compare",
    eyebrow: "Side by side",
    title: "Three ways to visit, side by side",
    highlight: "side by side",
    subtitle: "The Visitor visa, the ETA and the eVisitor, compared on the questions people ask first.",
    rows: [
      { label: "Who can use it", icon: ICON.identification },
      { label: "How you apply", icon: ICON.computerDesktop },
      { label: "How long you can stay", icon: ICON.clock },
      { label: "Where you must be", icon: ICON.mapPin },
      { label: "Work and study", icon: ICON.briefcase },
      { label: "Cost", icon: ICON.currencyDollar },
      { label: "Staying longer", icon: ICON.arrowPath },
    ],
    columns: [
      {
        page: "visitor-visa-600",
        name: "Visitor visa (600)",
        tagline: "Any passport, six streams",
        values: [
          "Any passport, including people with a conviction or a health matter to assess",
          "Online in ImmiAccount, with evidence of your funds, purpose and ties to home",
          "Usually 3 months, up to 12 months, decided case by case",
          "Tourist stream: in or outside Australia. Other streams: outside",
          "No work (business visitor activities in that stream); study up to 3 months",
          "A$250 outside Australia; A$630 for the Tourist stream in Australia",
          "Can't be extended; condition 8503 may block a new visa in Australia",
        ],
        bestFor: "Longer stays, sponsored family visits, or passports without the ETA or eVisitor",
      },
      {
        page: "electronic-travel-authority-601",
        name: "ETA (601)",
        tagline: "Eligible passports, through the app",
        values: [
          "Listed passports, such as the US, Canada, Japan, Singapore and Malaysia",
          "In the Australian ETA app, with a passport scan and a live photo",
          "Up to 3 months each visit, for 12 months from grant",
          "Outside Australia when you apply and when it's granted",
          "No work; business visitor activities; study up to 3 months",
          "No visa charge; an A$20 app service charge",
          "Can't be extended; with no condition 8503, you can apply in Australia for a 600",
        ],
        bestFor: "Short holidays and business trips on an ETA-eligible passport",
      },
      {
        page: "evisitor-visa-651",
        name: "eVisitor (651)",
        tagline: "Free for European passports",
        values: [
          "All 27 EU countries, plus the UK (British Citizen), Norway, Iceland, Switzerland and more",
          "Online in ImmiAccount; no scan is normally needed",
          "Up to 3 months each visit, for 12 months from grant",
          "Outside Australia when you apply and when it's granted",
          "No work; business visitor activities; study up to 3 months",
          "Free: no visa charge and no service fee",
          "Can't be extended; with no condition 8503, you can apply in Australia for a 600",
        ],
        bestFor: "Short holidays and business trips on an eligible European passport",
      },
    ],
    footnote:
      "Charges from 1 July 2026, for one person: each traveller, including a child, applies separately. With a conviction or a health matter to assess, Home Affairs points you to a Visitor visa (600) rather than an ETA or eVisitor.",
  },
  actors: [
    {
      id: "host",
      name: "Your host in Australia",
      short: "Host",
      icon: ICON.users,
      tone: "pink",
      role: "Family, friends or a business that invites you, or a relative who sponsors you in the [[sfs|Sponsored Family stream]].",
      does: [
        "Writes an invitation letter: your relationship, the purpose and the length of the visit",
        "Shows their funds if they'll pay for your stay",
        "As a sponsor: completes [[form1149|Form 1149]], with no fee to pay",
        "As a sponsor: pays a [[bond|security bond]] if Home Affairs asks for one",
      ],
    },
    {
      id: "you",
      name: "You (the visitor)",
      short: "You",
      icon: ICON.user,
      tone: "green",
      role: "Choose the visa that fits your passport and trip, apply honestly and keep to its conditions.",
      does: [
        "Check whether the free [[evisitor|eVisitor]] or the A$20 [[eta|ETA]] fits first",
        "Show you're a [[genuine|genuine visitor]] with enough money for your stay",
        "Declare every conviction and answer every question truthfully",
        "Don't work, and leave before your stay period ends",
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
        "Sets your stay period, entry type and conditions, such as [[c8503|condition 8503]]",
        "May ask a sponsor for a [[bond|security bond]]",
        "Decides any request to waive [[c8503|condition 8503]]",
      ],
    },
  ],
  flows: [
    {
      from: "host",
      to: "you",
      label: "Invites or sponsors",
      detail: "Family or friends can write you an invitation letter, and a business can invite you to a meeting or conference. In the [[sfs|Sponsored Family stream]], a settled relative sponsors you instead.",
    },
    {
      from: "you",
      to: "government",
      label: "You apply",
      detail: "You apply in the official [[eta|ETA]] app or in [[immiaccount|ImmiAccount]]. For a Visitor visa (600) you attach evidence of your funds, plans and reasons to return home.",
    },
    {
      from: "host",
      to: "government",
      label: "Bond, if asked",
      detail: "A sponsor pays no fee, but must pay a [[bond|security bond]] before the decision if Home Affairs asks for one. It's refunded if you comply and leave on time.",
    },
    {
      from: "government",
      to: "you",
      label: "Visa granted",
      detail: "Your grant shows your stay period, your entry type and your conditions. You can check them any time in [[vevo|VEVO]].",
    },
    {
      from: "you",
      to: "host",
      label: "You visit",
      detail: "You holiday, see family or attend meetings without working, and leave before your stay period ends.",
    },
  ],
  journeyTitle: "From choosing a visa to heading home",
  journeyHighlight: "heading home",
  stages: [
    {
      id: "choose",
      short: "Choose",
      title: "Find the visa that fits your passport and trip",
      who: ["you"],
      description:
        "Your passport, how long you want to stay and why you're coming decide the visa. Start with the free [[evisitor|eVisitor]] or the A$20 [[eta|ETA]] if your passport qualifies.",
      points: [
        "Up to 3 months a visit for a holiday or business: an ETA or eVisitor",
        "A longer stay, a sponsor, or a conviction or health matter to assess: a Visitor visa (600)",
        "Working while you travel, aged 18 to 30 (or 35 for some passports): a [[whm|working holiday visa]]",
        "Medical treatment: a [[mt602|Medical Treatment visa]]",
      ],
      youHold: "The visa that matches your trip",
      icon: ICON.listBullet,
    },
    {
      id: "evidence",
      short: "Gather",
      title: "Gather evidence of money, purpose and ties to home",
      who: ["you", "host"],
      description: "For a Visitor visa (600), Home Affairs needs to see you're a [[genuine|genuine visitor]] who can pay for the trip and will go home.",
      points: [
        "Bank statements for the last 3 months, pay slips or tax records",
        "An invitation letter from your family, friends or business host, if you have one",
        "Proof of your job, study, family or property at home",
        "Your travel plans while you're in Australia",
      ],
      youHold: "A document set that answers the genuine visitor and funds tests",
      icon: ICON.documentText,
    },
    {
      id: "sponsor",
      short: "Sponsor",
      title: "Sponsored Family stream: your relative signs on",
      who: ["host"],
      description: "Only in this stream. Your relative completes and signs [[form1149|Form 1149]] and sends you a scan, with evidence of how you're related.",
      points: [
        "A settled Australian citizen or permanent resident aged 18 or over",
        "An eligible relative who has usually lived in Australia for the last 2 years",
        "No fee, but they may have to pay a [[bond|security bond]] before the decision",
      ],
      youHold: "Form 1149 and relationship evidence to attach",
      cost: "No fee for the sponsor; a bond only if asked",
      icon: ICON.users,
    },
    {
      id: "apply",
      short: "Apply",
      title: "Apply and pay",
      who: ["you", "government"],
      description: "Each person, including a child, applies separately. Home Affairs doesn't process a Visitor visa application until it's paid.",
      points: [
        "eVisitor: free, in [[immiaccount|ImmiAccount]]",
        "ETA: an A$20 service charge in the app, with a live photo",
        "Visitor visa: A$250 in most streams, A$630 for the Tourist stream in Australia",
        "Applying in Australia before your visa ends gives you a [[bva|Bridging visa A]]",
      ],
      youHold: "A lodged application and a receipt",
      cost: "Free to A$1,845, depending on the visa",
      icon: ICON.paperAirplane,
    },
    {
      id: "checks",
      short: "Checks",
      title: "Biometrics, health checks and requests",
      who: ["government", "you"],
      description: "Home Affairs may ask for biometrics, health examinations, police certificates or more documents, and may decide without asking.",
      points: [
        "Attach everything up front",
        "Health examinations depend on your country, your stay and what you'll do here",
        "If the ETA app can't process you, follow the letter: Form 1554, or a Visitor visa (600)",
        "Check current processing times on the Home Affairs tool",
      ],
      youHold: "A complete application",
      icon: ICON.fingerPrint,
    },
    {
      id: "grant",
      short: "Grant",
      title: "Read your grant and check VEVO",
      who: ["government", "you"],
      description: "Your grant and [[vevo|VEVO]] show your stay period, your entry type, the date you must enter by and your conditions.",
      points: [
        "Don't book travel until the visa is granted",
        "An ETA is linked to one passport: travel on that passport",
        "A Sponsored Family visa always carries [[c8503|condition 8503]]",
      ],
      youHold: "A visa with a known stay period, entry type and conditions",
      icon: ICON.checkBadge,
    },
    {
      id: "visit",
      short: "Visit",
      title: "Visit, keep to your conditions and leave on time",
      who: ["you", "host"],
      description: "Enjoy your stay without working, and leave before your stay period ends.",
      points: [
        "No work: business visitor activities only, where your visa allows them",
        "Study or training for no more than 3 months",
        "To stay longer, apply for a new visa before yours ends, unless [[c8503|condition 8503]] stops you",
      ],
      youHold: "A completed visit and a clean record for future trips",
      icon: ICON.sun,
    },
  ],
  check: {
    ok: {
      title: "You look on track",
      body: "Nothing in your answers rules you out. Next, pick the right visa, then gather evidence of your funds and ties to home.",
    },
    disclaimer: "A general self-check, not advice or a prediction. Home Affairs decides each application on its own merits.",
  },
  quiz: [
    {
      id: "purpose",
      topic: "Purpose",
      question: "What's the main purpose of your trip?",
      options: [
        {
          value: "tourism",
          label: "A holiday, or visiting family or friends",
          status: "ok",
          note: "That's what visitor visas are for. The finder shows which one fits your passport.",
          link: { label: "Open the visa finder", href: "#finder" },
        },
        {
          value: "business",
          label: "Business meetings, a conference or negotiations",
          status: "ok",
          note: "Business visitor activities are allowed on an ETA, an eVisitor and the Business Visitor stream, as long as you don't work for an Australian business or sell to the public, and conference organisers don't pay you.",
        },
        {
          value: "work",
          label: "Paid work in Australia",
          status: "stop",
          note: "You can't work on a visitor visa. If you're 18 to 30 (or 35 for some passports), a [[whm|working holiday visa]] may fit. Short-term paid work needs a work visa such as the subclass 400.",
          link: { label: "Working Holiday visa (417)", href: "/visas/other-visas/working-holiday-visa-417" },
        },
        {
          value: "study",
          label: "Study for more than 3 months",
          status: "stop",
          note: "Visitors can study for up to 3 months. A longer course needs a Student visa, which visitor visa holders must apply for from outside Australia.",
          link: { label: "Student visa (500)", href: "/visas/study/student-visa-500" },
        },
        {
          value: "medical",
          label: "Medical treatment, or supporting a patient",
          status: "ok",
          note: "The [[mt602|Medical Treatment visa]] covers treatment, organ donation and support persons. It's free outside Australia and A$480 in Australia.",
          link: { label: "Medical Treatment visa (602)", href: "/visas/other-visas/medical-treatment-visa-602" },
        },
      ],
    },
    {
      id: "passport",
      topic: "Passport",
      question: "Which passport will you travel on?",
      options: [
        {
          value: "europe",
          label: "An EU passport, or UK (British Citizen), Norway, Iceland or Switzerland",
          status: "ok",
          note: "The free [[evisitor|eVisitor]] may suit you for visits of up to 3 months, unless you have a conviction or a health matter to assess.",
        },
        {
          value: "eta",
          label: "US, Canada, Japan, South Korea, Singapore, Malaysia, Hong Kong or another ETA passport",
          status: "ok",
          note: "The [[eta|ETA]] may suit you for visits of up to 3 months, for an A$20 service charge in the app, unless you have a conviction or a health matter to assess.",
        },
        {
          value: "other",
          label: "Another passport",
          status: "ok",
          note: "You'll apply for a Visitor visa (600), with evidence of your funds, your purpose and your ties to home.",
          link: { label: "Build your evidence list", href: "#evidence" },
        },
      ],
    },
    {
      id: "length",
      topic: "Length of stay",
      question: "How long do you want to stay at a time?",
      options: [
        {
          value: "short",
          label: "Up to 3 months",
          status: "ok",
          note: "An ETA or eVisitor covers this if your passport qualifies. A Visitor visa is usually granted for 3 months.",
        },
        {
          value: "long",
          label: "More than 3 months, up to 12 months",
          status: "todo",
          note: "You need a Visitor visa (600). Longer stays are possible in certain circumstances: explain why you need the time, with evidence.",
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
      id: "ties",
      topic: "Reasons to return",
      question: "Can you show strong reasons to return home?",
      help: "For example a job, study, close family, a home or other assets.",
      options: [
        {
          value: "strong",
          label: "Yes: a job, study, family or property at home",
          status: "ok",
          note: "Home Affairs weighs these when it decides whether you're a [[genuine|genuine visitor]]. Include evidence of each.",
        },
        {
          value: "some",
          label: "Some, but they're hard to prove",
          status: "todo",
          note: "Gather what you can, such as an employer letter, proof of enrolment or property records. A relative's sponsorship in the [[sfs|Sponsored Family stream]] can add weight.",
        },
        {
          value: "few",
          label: "Not really",
          status: "todo",
          note: "Weak ties to home can lead to refusal. Get advice on presenting your circumstances before you apply.",
          link: { label: "Get advice", href: "/bookings" },
        },
      ],
    },
    {
      id: "funds",
      topic: "Money",
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
      id: "location",
      topic: "Where you are",
      question: "Where are you now?",
      options: [
        {
          value: "outside",
          label: "Outside Australia",
          status: "ok",
          note: "Apply from outside Australia and stay outside until the visa is granted. Don't book travel before then.",
        },
        {
          value: "inside",
          label: "In Australia, on a visa without condition 8503",
          status: "ok",
          note: "You can apply for the Tourist stream in Australia if you hold a substantive visa, or held one in the last 28 days. It costs A$630, plus A$700 ([[stac|subsequent temporary application charge]]) in some cases.",
        },
        {
          value: "c8503",
          label: "In Australia, and my visa has condition 8503",
          status: "stop",
          note: "You can't be granted most visas in Australia unless [[c8503|condition 8503]] is waived. A waiver needs a major change beyond your control after grant.",
          link: { label: "How the 8503 waiver works", href: "/visas/appeals-and-review/condition-8503-no-further-stay-waiver" },
        },
        {
          value: "expired",
          label: "In Australia, and my visa ended more than 28 days ago",
          status: "stop",
          note: "Applying online needs a substantive visa, or one that ended within the last 28 days. Otherwise Home Affairs looks for reasons beyond your control and compelling reasons to grant it. Get advice now.",
          link: { label: "Book urgent advice", href: "/bookings" },
        },
      ],
    },
    {
      id: "history",
      topic: "History, health, character",
      question: "Any convictions, health matters or problems with earlier visas?",
      options: [
        { value: "clear", label: "None of these", status: "ok", note: "You may still be asked for health examinations or police certificates." },
        {
          value: "conviction",
          label: "A criminal conviction",
          status: "todo",
          note: "Declare it. Home Affairs recommends a Visitor visa (600) rather than an ETA or eVisitor, with evidence of the offence and sentence.",
        },
        {
          value: "health",
          label: "A health matter, or I'll be in a hospital, health care or childcare setting",
          status: "todo",
          note: "Apply for a Visitor visa (600) rather than an ETA or eVisitor, and complete any health examinations Home Affairs asks for.",
        },
        {
          value: "record",
          label: "An overstay, a refusal or a cancellation before",
          status: "todo",
          note: "Declare it. Home Affairs considers whether you complied with earlier visas, so explain what happened and get advice before you apply.",
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
        { value: "parents", label: "Yes, with both parents", status: "ok", note: "Each child needs their own visa: their own ETA, eVisitor or Visitor visa application." },
        {
          value: "without",
          label: "Yes, without one or both parents",
          status: "todo",
          note: "For a Visitor visa (600) you need consent from each parent or guardian who isn't travelling (Form 1229 or a statutory declaration), and Form 1257 if the child stays with someone who isn't a relative or guardian.",
        },
      ],
    },
  ],
  myths: [
    {
      myth: "I can extend my Visitor visa, ETA or eVisitor.",
      fact: "No. None of them can be extended. You apply for a new visa before yours ends, usually the Tourist stream in Australia (A$630, plus A$700 in some cases), and only if your visa has no condition 8503 or it's waived.",
    },
    {
      myth: "A little cash-in-hand work, or volunteering that's really a job, is fine.",
      fact: "No. Working breaches your visa conditions and can lead to cancellation, removal or an exclusion period. Unpaid volunteer tourism may be allowed only where it isn't a job.",
    },
    {
      myth: "I can come as a visitor and switch to a Student visa once I'm here.",
      fact: "Not since 2 October 2026. Visitor (600), ETA, eVisitor, Medical Treatment and working holiday visa holders can't apply for a Student visa in Australia, and there are no exemptions. You'd apply from outside Australia.",
    },
    {
      myth: "If my visa has condition 8503, marrying an Australian lets me stay.",
      fact: "No. Home Affairs says marriage or a de facto relationship, pregnancy and failing a course aren't reasons for a waiver. A waiver needs a major change beyond your control after grant, such as being unable to travel for a medical reason.",
    },
    {
      myth: "Being sponsored by a relative is always stronger than an invitation letter.",
      fact: "Not necessarily. The Tourist stream with an invitation letter is usually simpler: no bond, often multiple entry and no automatic condition 8503. Sponsorship suits people who need the extra weight of a relative's undertaking.",
    },
    {
      myth: "As the parent of an Australian, I can stay as long as I like.",
      fact: "No. Parents of Australian citizens or permanent residents may get a multiple-entry visa valid for more than 12 months, but can't spend more than 12 months in Australia in any 18-month period.",
    },
    {
      myth: "A round-trip cruise resets my Visitor visa stay.",
      fact: "No. A cruise that starts and ends in Australia counts as time in Australia and doesn't reset your stay period. Ask your cruise operator how Home Affairs treats your itinerary.",
    },
    {
      myth: "My whole family can go on one application.",
      fact: "No. Each person, including a child on your passport, needs their own visa: their own ETA or eVisitor, or their own Visitor visa application and charge. You can group Visitor visa applications in ImmiAccount so they're processed together.",
    },
  ],
  roles: [
    {
      id: "visitor",
      label: "I'm the visitor",
      intro: "Your part is choosing the right visa, an honest application and keeping to your conditions once you're here.",
      groups: [
        {
          title: "Before you apply",
          items: [
            "Check whether the [[evisitor|eVisitor]] or the [[eta|ETA]] fits your passport and trip",
            "Collect 3 months of bank statements and proof of your ties to home",
            "Get an invitation letter if you're visiting family, friends or a business",
            "Declare every conviction",
          ],
        },
        {
          title: "When you apply",
          items: [
            "One application per person, including each child",
            "Apply only through the official ETA app or [[immiaccount|ImmiAccount]]",
            "Give biometrics or have health examinations if asked",
          ],
        },
        {
          title: "Once you're here",
          items: [
            "Check [[vevo|VEVO]] for your stay period, entry type and conditions",
            "Don't work, and study for no more than 3 months",
            "Leave before your stay period ends, or apply for a new visa in time",
          ],
        },
      ],
    },
    {
      id: "host",
      label: "I'm the host in Australia",
      tone: "pink",
      intro: "You can support a visit with an invitation letter, or sponsor a relative in the [[sfs|Sponsored Family stream]].",
      groups: [
        {
          title: "Inviting a visitor",
          items: [
            "Write a letter stating your relationship and the purpose and length of the visit",
            "Say whether you'll host them or pay for them, with proof of your funds if you'll pay",
            "A business host: send an invitation for the meeting, negotiation or conference",
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
      link: { label: "Read about the Visitor visa streams", href: "/visas/other-visas/visitor-visa-600" },
    },
  ],
  glossary: [
    {
      id: "genuine",
      term: "Genuine visitor",
      definition: "Someone who genuinely intends a temporary stay for the visa's purpose. Home Affairs looks at your past visa compliance, your reasons to return home, your travel history and conditions in your home country.",
    },
    {
      id: "evisitor",
      term: "eVisitor",
      full: "Subclass 651",
      definition: "A free visa for citizens of EU countries, the UK (British Citizens) and some other European countries, applied for in ImmiAccount. Stays of up to 3 months each visit, for 12 months.",
    },
    {
      id: "eta",
      term: "ETA",
      full: "Electronic Travel Authority (subclass 601)",
      definition: "A visa linked to an eligible passport, such as the US, Canada or Japan, applied for in the Australian ETA app for an A$20 service charge. Stays of up to 3 months each visit, for 12 months.",
    },
    {
      id: "sfs",
      term: "Sponsored Family stream",
      definition: "A Visitor visa stream where a settled relative in Australia sponsors you and may have to pay a security bond. The visa always carries condition 8503 and is generally single entry.",
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
    {
      id: "c8503",
      term: "Condition 8503",
      full: "No Further Stay",
      definition: "While you're in Australia you can't be granted a substantive visa other than a protection visa. A waiver is possible only for a major change beyond your control after grant.",
    },
    {
      id: "stac",
      term: "Subsequent temporary application charge",
      definition: "An extra A$700 on an onshore Tourist stream application when the visa you hold, or last held, was also applied for in Australia.",
    },
    {
      id: "immiaccount",
      term: "ImmiAccount",
      definition: "Home Affairs' online account, where you lodge most visa applications, attach documents and pay.",
    },
    {
      id: "vevo",
      term: "VEVO",
      definition: "Home Affairs' online service that shows your visa's stay period, entry details and conditions.",
    },
    {
      id: "bva",
      term: "Bridging visa A",
      definition: "A visa granted when you apply in Australia before your current visa ends, so you can stay while you wait. To travel before the decision you need a Bridging visa B.",
    },
    {
      id: "mt602",
      term: "Medical Treatment visa",
      full: "Subclass 602",
      definition: "A visa for medical treatment or a consultation, organ donation, or supporting a patient or donor. It's free outside Australia and A$480 in Australia.",
    },
    {
      id: "whm",
      term: "Working holiday visa",
      definition: "The Working Holiday (subclass 417) and Work and Holiday (subclass 462) visas: 12 months of travel and work for people aged 18 to 30, or up to 35 for some passports. A first visa is applied for from outside Australia.",
    },
  ],
  cta: {
    subtitle: "We check your trip, passport and evidence against these rules, tell you honestly where you stand, and prepare the application with you and, where needed, your host in Australia.",
  },
  verifiedExtras: [
    {
      fact: "Since 2 October 2026, a person holding a subclass 417, 462, 600, 601, 602 or 651 visa cannot apply for a Student visa in Australia, and there are no exemptions for these visas.",
      source: "/visas/study/student-visa-500",
    },
  ],
  finder: visitorFinder,
  evidence: {
    navLabel: "Your evidence",
    eyebrow: "Evidence builder",
    title: "What can you show Home Affairs?",
    highlight: "show Home Affairs",
    subtitle: "For a Visitor visa (600): tick what you already have. It counts what you have; it doesn't judge your case. Nothing is saved or sent.",
    groups: [
      {
        id: "purpose",
        title: "Your purpose and plans",
        icon: ICON.map,
        why: "Home Affairs checks that you're coming for the purpose of your stream, such as a holiday, a family visit or business.",
        items: [
          "Your travel plans while you're in Australia",
          "An invitation letter from family or friends: your relationship, the purpose and the length of the visit",
          "For business: an invitation from the host organisation, or conference registration details",
          "For business: a letter from your employer saying why you're visiting",
          "For business: evidence your company is an active business, such as an annual report",
        ],
      },
      {
        id: "funds",
        title: "Your money",
        icon: ICON.banknotes,
        why: "You must have, or have access to, enough money to support yourself in Australia and to leave at the end of your stay.",
        items: [
          "Itemised personal bank statements for the last 3 months",
          "Pay slips or tax records",
          "Term deposits or credit card statements",
          "Audited accounts, if you run a business",
          "If your host will pay: their invitation letter and proof of their funds",
        ],
      },
      {
        id: "ties",
        title: "Your reasons to return home",
        icon: ICON.home,
        why: "Home Affairs weighs your reasons to return home when it decides whether you're a [[genuine|genuine visitor]].",
        items: [
          "An employer letter confirming your job",
          "Proof of enrolment at a school or university",
          "Evidence of immediate family in your home country",
          "Ownership of a house or other major assets",
          "Evidence of your right to return home",
        ],
      },
      {
        id: "history",
        title: "Your travel history",
        icon: ICON.globeAlt,
        why: "Home Affairs considers whether you complied with earlier visas, and your travel history.",
        items: [
          "Details of any earlier Australian visas",
          "Evidence you kept to their conditions and left on time",
          "Your recent travel to other countries",
        ],
      },
    ],
    footnote:
      "Home Affairs weighs your circumstances as a whole, not as a checklist. ETA and eVisitor applications don't usually need these documents uploaded, but carry evidence of your plans, funds and return or onward ticket in case you're questioned at the border.",
  },
  fees: {
    variantLabel: "Which visa?",
    variants: [
      {
        id: "visitor-outside",
        label: "Visitor visa (600), applying outside Australia",
        hint: "Tourist, Sponsored Family, Business Visitor or Approved Destination Status stream",
        primary: [{ label: "Visa application charge", amount: 250 }],
      },
      {
        id: "visitor-inside",
        label: "Visitor visa (600), Tourist stream in Australia",
        hint: "When the visa you hold, or last held, was applied for outside Australia, such as an ETA or eVisitor",
        primary: [{ label: "Visa application charge", amount: 630 }],
      },
      {
        id: "visitor-inside-stac",
        label: "Visitor visa (600), Tourist stream in Australia, after a visa you also applied for in Australia",
        hint: "Adds the subsequent temporary application charge",
        primary: [
          { label: "Visa application charge", amount: 630 },
          { label: "Subsequent temporary application charge", amount: 700 },
        ],
      },
      {
        id: "frequent",
        label: "Visitor visa (600), Frequent Traveller stream",
        hint: "A multiple-entry visa that can be valid for up to 10 years",
        primary: [{ label: "Visa application charge", amount: 1845 }],
      },
      {
        id: "eta",
        label: "Electronic Travel Authority (601)",
        hint: "No visa charge: a service charge paid in the Australian ETA app",
        primary: [{ label: "App service charge", amount: 20 }],
      },
      {
        id: "evisitor",
        label: "eVisitor (651)",
        hint: "For eligible European passports",
        primary: [{ label: "Visa application charge (free)", amount: 0 }],
      },
      {
        id: "medical",
        label: "Medical Treatment visa (602), applying in Australia",
        hint: "Free if you apply outside Australia",
        primary: [{ label: "Visa application charge", amount: 480 }],
      },
      {
        id: "whm-first",
        label: "First Working Holiday (417) or Work and Holiday (462) visa",
        hint: "Applied for from outside Australia",
        primary: [{ label: "Visa application charge", amount: 840 }],
      },
      {
        id: "whm-ballot",
        label: "First Work and Holiday visa (462) through the ballot",
        hint: "China, India and Vietnam passports: register in the ballot and be selected first",
        primary: [
          { label: "Ballot registration fee", amount: 25 },
          { label: "Visa application charge", amount: 840 },
        ],
      },
      {
        id: "whm-later",
        label: "Second or third Working Holiday or Work and Holiday visa",
        hint: "Applied for in or outside Australia",
        primary: [{ label: "Visa application charge", amount: 1000 }],
      },
    ],
    maxAdults: 0,
    maxChildren: 0,
    notIncluded: "Not included: health examinations, police certificates, biometrics, translations, health insurance, medical treatment costs and any security bond.",
    notes: [
      "Charges from 1 July 2026, for one person. Each traveller, including a child, applies separately and pays their own charge.",
      "The subsequent temporary application charge applies only when the visa you hold, or last held, was also applied for in Australia.",
      "The Medical Treatment visa is free outside Australia. In Australia, someone who shares your passport can be included for A$240 (18 or over) or A$120 (under 18).",
      "Reduced charges for eligible Pacific Island and Timor-Leste passport holders (Visitor and Medical Treatment visas) and Papua New Guinea passport holders (Work and Holiday visa) aren't shown here.",
      "The A$25 ballot fee isn't refunded if you aren't selected. A Sponsored Family sponsor pays no fee, but may be asked for a security bond.",
    ],
    confirmUrl: "https://immi.homeaffairs.gov.au/visas/visa-pricing-estimator",
    confirmLabel: "Home Affairs Visa Pricing Estimator",
  },
};
