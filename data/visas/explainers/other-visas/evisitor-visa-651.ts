import type { VisaExplainer } from "../types";
import { ICON } from "../icons";
import { visitorFinder } from "./visitor-finder";

// Interactive explainer for the eVisitor (subclass 651). Every figure matches
// data/visas/other-visas-visitor.ts (checked against Home Affairs and the
// Migration Regulations on 12 October 2026). No fee estimator: the visa is free.

export const evisitorVisa651Explainer: VisaExplainer = {
  slug: "evisitor-visa-651",
  factsAsAt: "12 October 2026",
  oneLiner:
    "A free visa for EU and other European passport holders, including UK British Citizens. Visit as often as you like for 12 months, up to 3 months at a time, for tourism, family or business visits. No work.",
  bigIdeas: [
    {
      title: "Free for European passports",
      body: "Citizens of all 27 EU countries and nine other European countries, including UK British Citizens, apply at no cost.",
      icon: ICON.globeAlt,
    },
    {
      title: "Apply online, from overseas",
      body: "You apply in ImmiAccount while you're outside Australia, and wait for the grant in writing before you travel.",
      icon: ICON.paperAirplane,
    },
    {
      title: "12 months, 3 months per visit",
      body: "Come and go for 12 months, staying up to 3 months each time. Holidays, family visits and business visits only, with no work.",
      icon: ICON.calendarDays,
    },
  ],
  heroCard: [
    { label: "Who it's for", value: "EU and other European citizen passport holders", icon: ICON.identification },
    { label: "How long", value: "12 months; up to 3 months each visit", icon: ICON.clock },
    { label: "Work", value: "No work; business visitor activities only", icon: ICON.briefcase },
    { label: "Where you apply", value: "Outside Australia, in ImmiAccount", icon: ICON.mapPin },
    { label: "Permanent residence", value: "No pathway: it's a temporary visa", icon: ICON.home },
    { label: "Cost", value: "Free: no visa charge and no service fee", icon: ICON.currencyDollar },
  ],
  actors: [
    {
      id: "government",
      name: "Department of Home Affairs",
      short: "Home Affairs",
      icon: ICON.buildingLibrary,
      tone: "blue",
      role: "Decides your eVisitor and confirms the grant in writing.",
      does: [
        "Emails you when it receives your application",
        "Checks your passport details and your answers on character",
        "Sends a grant letter with your visa grant number, start date and conditions",
        "May ask for a police certificate",
      ],
    },
    {
      id: "you",
      name: "You (the traveller)",
      short: "You",
      icon: ICON.user,
      tone: "green",
      role: "Apply online with your eligible passport, and travel once it's granted.",
      does: [
        "Enter your details exactly as they appear in your passport",
        "Declare any criminal conduct truthfully",
        "Wait outside Australia for the grant",
        "Stay up to 3 months each visit, without working",
      ],
    },
    {
      id: "border",
      name: "Border officers on arrival",
      short: "Border",
      icon: ICON.shieldCheck,
      tone: "teal",
      role: "Check you when you arrive, and can ask about your visit.",
      does: [
        "Check your passport and visa when you arrive",
        "May ask about regular or long visits",
        "Can refuse entry, for example over an undeclared conviction",
      ],
    },
  ],
  flows: [
    {
      from: "you",
      to: "government",
      label: "Apply online",
      detail: "From outside Australia, you lodge the free application in [[immiaccount|ImmiAccount]], with your name and details exactly as they appear in your passport.",
    },
    {
      from: "government",
      to: "you",
      label: "eVisitor granted",
      detail: "Home Affairs emails a grant letter with your visa grant number, start date and conditions. Don't travel before it arrives.",
    },
    {
      from: "you",
      to: "border",
      label: "You arrive",
      detail: "You enter Australia and complete the [[ipc|Incoming Passenger Card]]. Carry evidence of your plans, funds and onward ticket in case you're asked.",
    },
    {
      from: "border",
      to: "you",
      label: "Up to 3 months",
      detail: "Each visit can last up to 3 months, as often as you like for 12 months, while you remain a [[genuine|genuine visitor]].",
    },
  ],
  journeyTitle: "From your application to your arrival",
  journeyHighlight: "your arrival",
  stages: [
    {
      id: "passport",
      short: "Passport",
      title: "Confirm your passport is eligible",
      who: ["you"],
      description: "You must be a citizen of, and hold a passport from, an EU country or one of nine other European countries, including the UK (British Citizen).",
      points: [
        "The nine: the UK, Norway, Iceland, Switzerland, Liechtenstein, Monaco, Andorra, San Marino and Vatican City",
        "[[bno|British National (Overseas)]] and other British passports that aren't British Citizen can't be used",
        "Non-citizen passports and other travel documents don't qualify",
      ],
      youHold: "Confirmation the eVisitor is the right visa for your passport",
      icon: ICON.identification,
    },
    {
      id: "apply",
      short: "Apply",
      title: "Apply online in ImmiAccount",
      who: ["you"],
      description: "Lodge the free application in [[immiaccount|ImmiAccount]]. Enter your name exactly as it appears in your passport, including middle names.",
      points: [
        "Check your device hasn't auto-corrected your name",
        "Enter your date of birth in day/month/year order",
        "Use an email address you check",
      ],
      youHold: "A lodged eVisitor application",
      cost: "Free",
      icon: ICON.paperAirplane,
    },
    {
      id: "declare",
      short: "Declare",
      title: "Declare any character matters",
      who: ["you"],
      description: "Answer every question truthfully. If you have a criminal conviction, Home Affairs says to apply for a Visitor visa (600) instead.",
      points: [
        "Declare all criminal conduct, offences, fines and sentences",
        "A police certificate may be requested",
        "Translate any documents that aren't in English",
      ],
      youHold: "A complete and accurate declaration",
      icon: ICON.shieldCheck,
    },
    {
      id: "wait",
      short: "Wait",
      title: "Wait for the decision outside Australia",
      who: ["government", "you"],
      description: "Home Affairs emails you when it receives your application. No email within 12 hours? Check the status in [[immiaccount|ImmiAccount]].",
      points: ["Don't travel until the grant letter arrives", "Check current processing times on the Home Affairs tool"],
      youHold: "A grant letter with your visa grant number, start date and conditions",
      icon: ICON.envelope,
    },
    {
      id: "travel",
      short: "Travel",
      title: "Travel and check your conditions",
      who: ["you", "border"],
      description: "Enter Australia, complete the [[ipc|Incoming Passenger Card]], and check your conditions and the date you must leave in [[vevo|VEVO]].",
      points: ["Carry evidence of your plans, funds and onward ticket", "Border officers may ask about regular or long visits"],
      youHold: "Entry to Australia for a stay of up to 3 months",
      icon: ICON.globeAsiaAustralia,
    },
    {
      id: "stay",
      short: "Stay",
      title: "Stay up to 3 months, then leave or apply",
      who: ["you"],
      description: "Come and go for 12 months, staying up to 3 months each visit. Time outside Australia doesn't extend the visa.",
      points: [
        "No work: business visitor activities only ([[c8115|condition 8115]])",
        "Study or training for up to 3 months in total ([[c8201|condition 8201]])",
        "The eVisitor has no [[c8503|condition 8503]], so you can apply in Australia for a Visitor visa (600) to stay longer",
      ],
      youHold: "Up to 12 months of visits, or a new visa",
      icon: ICON.calendarDays,
    },
  ],
  check: {
    title: "Could the eVisitor work for you?",
    highlight: "work for you",
    ok: {
      title: "The eVisitor looks like a fit",
      body: "Nothing in your answers rules you out. Enter your details exactly as they appear in your passport, and wait for the grant before you travel.",
    },
    disclaimer: "A general self-check, not advice or a prediction. Home Affairs decides each application on your answers and records.",
  },
  quiz: [
    {
      id: "passport",
      topic: "Passport",
      question: "Do you hold a citizen passport from an EU country or another eligible European country?",
      help: "The UK (British Citizen), Norway, Iceland, Switzerland, Liechtenstein, Monaco, Andorra, San Marino and Vatican City also count.",
      options: [
        { value: "yes", label: "Yes", status: "ok", note: "You can apply for the free eVisitor in ImmiAccount." },
        {
          value: "british-other",
          label: "A British passport that isn't British Citizen, such as British National (Overseas)",
          status: "stop",
          note: "These passports can't use the eVisitor. British National (Overseas) holders use the ETA (601) instead.",
          link: { label: "ETA (601)", href: "/visas/other-visas/electronic-travel-authority-601" },
        },
        {
          value: "no",
          label: "No, another passport",
          status: "stop",
          note: "The eVisitor isn't available on this passport. The ETA (601) or a Visitor visa (600) may fit.",
          link: { label: "Try the visa finder", href: "#finder" },
        },
      ],
    },
    {
      id: "location",
      topic: "Where you are",
      question: "Where are you now?",
      options: [
        { value: "outside", label: "Outside Australia", status: "ok", note: "You must be outside Australia when you apply and when the visa is granted." },
        {
          value: "inside",
          label: "In Australia",
          status: "stop",
          note: "You can't apply for an eVisitor in Australia. To stay longer, look at the Visitor visa (600) Tourist stream, applied for in Australia.",
          link: { label: "Visitor visa (600)", href: "/visas/other-visas/visitor-visa-600" },
        },
      ],
    },
    {
      id: "purpose",
      topic: "Purpose",
      question: "What will you do in Australia?",
      options: [
        { value: "tourism", label: "A holiday, or visiting family or friends", status: "ok", note: "That's what the eVisitor is for." },
        {
          value: "business",
          label: "Business meetings, conferences or negotiations",
          status: "ok",
          note: "Business visitor activities are allowed, as long as conference, trade fair or seminar organisers don't pay you.",
        },
        {
          value: "work",
          label: "Paid work, including remote work for an Australian business",
          status: "stop",
          note: "Not allowed. Working breaches condition 8115 and can lead to cancellation and removal. A working holiday or work visa is needed.",
          link: { label: "Working Holiday visa (417)", href: "/visas/other-visas/working-holiday-visa-417" },
        },
        {
          value: "study",
          label: "A course longer than 3 months",
          status: "stop",
          note: "Study or training is limited to 3 months in total. A longer course needs a Student visa.",
          link: { label: "Student visa (500)", href: "/visas/study/student-visa-500" },
        },
      ],
    },
    {
      id: "length",
      topic: "Length of stay",
      question: "How long do you want to stay at a time?",
      options: [
        { value: "short", label: "Up to 3 months", status: "ok", note: "Each visit can last up to 3 months, as often as you like for 12 months." },
        {
          value: "long",
          label: "Longer than 3 months",
          status: "todo",
          note: "The eVisitor allows 3 months per visit. For a longer stay you need another visa, such as a Visitor visa (600) applied for in Australia before your 3 months end.",
          link: { label: "Visitor visa (600)", href: "/visas/other-visas/visitor-visa-600" },
        },
      ],
    },
    {
      id: "character",
      topic: "Convictions",
      question: "Do you have a criminal conviction in any country?",
      options: [
        { value: "no", label: "No", status: "ok", note: "Answer every question truthfully." },
        {
          value: "yes",
          label: "Yes",
          status: "todo",
          note: "Home Affairs says to apply for a Visitor visa (600) instead. Arriving on an eVisitor with a conviction can mean being refused entry.",
          link: { label: "Visitor visa (600)", href: "/visas/other-visas/visitor-visa-600" },
        },
      ],
    },
    {
      id: "health",
      topic: "Health settings",
      question: "Will you train or study in a hospital, health care or childcare setting?",
      help: "For example, studying to be a doctor, dentist, nurse or paramedic.",
      options: [
        { value: "no", label: "No", status: "ok", note: "Nothing extra here, but you must still meet the health requirement." },
        {
          value: "yes",
          label: "Yes, or I've failed the health requirement before",
          status: "todo",
          note: "Apply for a Visitor visa (600) instead and complete the health checks.",
          link: { label: "Visitor visa (600)", href: "/visas/other-visas/visitor-visa-600" },
        },
      ],
    },
    {
      id: "whm",
      topic: "Working holiday visa",
      question: "Do you already hold a Working Holiday (417) or Work and Holiday (462) visa?",
      options: [
        { value: "no", label: "No", status: "ok", note: "Nothing to plan around." },
        {
          value: "yes",
          label: "Yes",
          status: "stop",
          note: "Don't apply for an eVisitor. If one is granted after your working holiday visa, the working holiday visa ceases, with its work rights.",
        },
      ],
    },
  ],
  myths: [
    {
      myth: "I have to pay a website for an eVisitor.",
      fact: "No. The eVisitor is free: there's no visa application charge and no service fee in ImmiAccount. Websites that charge for an eVisitor are not Home Affairs.",
    },
    {
      myth: "The eVisitor lets me stay in Australia for 12 months.",
      fact: "No. It's valid for 12 months, but each visit is limited to 3 months. Time outside Australia doesn't extend the visa.",
    },
    {
      myth: "Any British passport can use the eVisitor.",
      fact: "No. Only British Citizen passports. British National (Overseas), British Overseas Citizen and other British passports can't; British National (Overseas) holders use the ETA (601).",
    },
    {
      myth: "I can extend my eVisitor.",
      fact: "No. For a longer holiday or family visit, apply in Australia for a Visitor visa (600) in the Tourist stream (A$630) before your 3-month stay ends. The eVisitor has no condition 8503, so that's possible.",
    },
    {
      myth: "An eVisitor is a handy backup to my working holiday visa.",
      fact: "No. If an eVisitor is granted after your Working Holiday (417) or Work and Holiday (462) visa, the working holiday visa ceases, along with its work rights.",
    },
    {
      myth: "Remote work for an Australian company is fine on an eVisitor.",
      fact: "No. Working, including remote work for an Australian business, breaches condition 8115 and can lead to cancellation and removal.",
    },
    {
      myth: "An old conviction doesn't need declaring.",
      fact: "Declare all criminal conduct. Home Affairs recommends a Visitor visa (600) if you have a conviction, and condition 8528 is breached if your sentences total 12 months or more.",
    },
  ],
  glossary: [
    { id: "immiaccount", term: "ImmiAccount", definition: "Home Affairs' online account, where you lodge your free eVisitor application and can check its status." },
    {
      id: "genuine",
      term: "Genuine visitor",
      definition: "Someone who intends only to stay temporarily and to obey the visa's conditions and 3-month stay period. Regular or long visits can lead to questions at the border.",
    },
    {
      id: "bno",
      term: "British National (Overseas)",
      definition: "A type of British passport that can't be used for the eVisitor. Holders can apply for the ETA (601) instead.",
    },
    {
      id: "c8115",
      term: "Condition 8115",
      definition: "No work other than business visitor activities: enquiries, negotiations, official visits, conferences, trade fairs and seminars, without payment from the organisers.",
    },
    { id: "c8201", term: "Condition 8201", definition: "You must not study or train for more than 3 months in total." },
    { id: "c8503", term: "Condition 8503", full: "No Further Stay", definition: "A condition on some visas that blocks most visa applications while you're in Australia. The eVisitor doesn't carry it." },
    { id: "c8527", term: "Condition 8527", definition: "You must be free from tuberculosis when you travel to and enter Australia." },
    { id: "c8528", term: "Condition 8528", definition: "You must not have criminal convictions with sentences totalling 12 months or more, served or not, when you travel to and enter Australia." },
    { id: "ipc", term: "Incoming Passenger Card", definition: "The card you complete when you arrive in Australia." },
    {
      id: "vevo",
      term: "VEVO",
      full: "Visa Entitlement Verification Online",
      definition: "Home Affairs' online service where you can check your visa's conditions and the date you must leave.",
    },
    {
      id: "eta",
      term: "ETA (subclass 601)",
      full: "Electronic Travel Authority",
      definition: "A similar visa for other passports, such as the US, Canada, Japan and British National (Overseas). It costs A$20 through the Australian ETA app.",
    },
  ],
  cta: {
    subtitle: "Have a conviction or a health matter, or need more than 3 months? We check whether a Visitor visa (600) is the better route, tell you honestly where you stand, and prepare it with you.",
  },
  finder: visitorFinder,
};
