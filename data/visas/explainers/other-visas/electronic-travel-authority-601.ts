import type { VisaExplainer } from "../types";
import { ICON } from "../icons";
import { visitorFinder } from "./visitor-finder";

// Interactive explainer for the Electronic Travel Authority (subclass 601).
// Every figure matches data/visas/other-visas-visitor.ts (checked against
// Home Affairs and the Migration Regulations on 12 October 2026). No fee
// estimator: the only cost is the single A$20 app service charge.

export const electronicTravelAuthority601Explainer: VisaExplainer = {
  slug: "electronic-travel-authority-601",
  factsAsAt: "12 October 2026",
  oneLiner:
    "A visa linked to an eligible passport, applied for in the Australian ETA app for A$20. Visit as often as you like for 12 months, up to 3 months at a time, for tourism, family or business visits. No work.",
  bigIdeas: [
    {
      title: "Linked to your passport",
      body: "The ETA is stored electronically against one eligible passport. Travel on that passport; a new passport needs a new ETA.",
      icon: ICON.identification,
    },
    {
      title: "Apply in the app, from overseas",
      body: "Only the official Australian ETA app can lodge it, for a A$20 service charge, while you're outside Australia.",
      icon: ICON.paperAirplane,
    },
    {
      title: "12 months, 3 months per visit",
      body: "Come and go for 12 months, staying up to 3 months each time. Holidays, family visits and business visits only, with no work.",
      icon: ICON.calendarDays,
    },
  ],
  heroCard: [
    { label: "Who it's for", value: "Holders of an eligible passport", icon: ICON.identification },
    { label: "How long", value: "12 months; up to 3 months each visit", icon: ICON.clock },
    { label: "Work", value: "No work; business visitor activities only", icon: ICON.briefcase },
    { label: "Where you apply", value: "Outside Australia, in the Australian ETA app", icon: ICON.mapPin },
    { label: "Permanent residence", value: "No pathway: it's a temporary visa", icon: ICON.home },
    { label: "Cost", value: "A$20 app service charge; no visa charge", icon: ICON.currencyDollar },
  ],
  actors: [
    {
      id: "government",
      name: "Department of Home Affairs",
      short: "Home Affairs",
      icon: ICON.buildingLibrary,
      tone: "blue",
      role: "Decides your ETA and links it to your passport.",
      does: [
        "Checks your answers on other passports, other names and convictions",
        "Emails the decision, with your visa grant number and conditions",
        "Asks for more information through [[form1554|Form 1554]] when needed",
        "Can cancel an ETA granted on incorrect information",
      ],
    },
    {
      id: "you",
      name: "You (the traveller)",
      short: "You",
      icon: ICON.user,
      tone: "green",
      role: "Apply in the app with your eligible passport, then travel on that passport.",
      does: [
        "Scan your passport and take a live photo in the [[app|Australian ETA app]]",
        "Answer every question truthfully, including on convictions",
        "Pay the A$20 service charge",
        "Stay up to 3 months each visit, without working",
      ],
    },
    {
      id: "border",
      name: "Border officers on arrival",
      short: "Border",
      icon: ICON.shieldCheck,
      tone: "teal",
      role: "Check you when you arrive, and can ask about the purpose of your visit.",
      does: [
        "Check your passport and visa when you arrive",
        "May ask about your purpose if you make long or frequent visits",
        "Can refuse entry, for example over an undeclared conviction",
      ],
    },
  ],
  flows: [
    {
      from: "you",
      to: "government",
      label: "Apply in the app",
      detail: "From outside Australia, you scan your passport, take a live photo, answer the questions and pay the A$20 service charge in the [[app|Australian ETA app]].",
    },
    {
      from: "government",
      to: "you",
      label: "ETA granted",
      detail: "Home Affairs emails the decision. The ETA is linked electronically to the passport you applied with.",
    },
    {
      from: "you",
      to: "border",
      label: "You arrive",
      detail: "You travel on the same passport and complete the [[ipc|Incoming Passenger Card]]. Carry evidence of your plans, funds and return ticket in case you're asked.",
    },
    {
      from: "border",
      to: "you",
      label: "Up to 3 months",
      detail: "You can stay up to 3 months each visit, and come back as often as you like for 12 months, while you remain a [[genuine|genuine visitor]].",
    },
  ],
  journeyTitle: "From the app to your arrival",
  journeyHighlight: "your arrival",
  stages: [
    {
      id: "passport",
      short: "Passport",
      title: "Check your passport is eligible",
      who: ["you"],
      description:
        "The ETA is for citizen passports from a set list, including the UK, the US, Canada, Japan, South Korea, Singapore, Malaysia, Hong Kong and most Western European countries.",
      points: [
        "Non-citizen passports and other travel documents don't qualify",
        "Dual nationals: apply with an eligible passport and travel on that same passport",
        "The ETA ceases when your passport expires, so renew first if you need to",
      ],
      youHold: "A valid eligible passport to link the ETA to",
      icon: ICON.identification,
    },
    {
      id: "app",
      short: "App",
      title: "Download the official Australian ETA app",
      who: ["you"],
      description: "Only the official [[app|Australian ETA app]] can lodge an ETA. Third-party websites charge extra and aren't needed.",
      points: [
        "A phone with a camera, [[nfc|NFC]] and location services",
        "A valid email address and a payment method",
        "You must be there for the live photo, even if someone helps you apply",
      ],
      youHold: "The official app, installed and ready",
      icon: ICON.computerDesktop,
    },
    {
      id: "apply",
      short: "Apply",
      title: "Scan, photograph, answer and pay",
      who: ["you", "government"],
      description: "Scan your passport, take a live photo and answer the questions. Check every detail against your passport: an ETA can't be changed after it's issued.",
      points: [
        "Declare every other passport you hold and any other names you've used",
        "Answer the questions on convictions and domestic violence history truthfully",
        "The A$20 service charge isn't refunded if the ETA is refused",
      ],
      youHold: "A submitted application and a payment receipt",
      cost: "A$20, paid by you",
      icon: ICON.paperAirplane,
    },
    {
      id: "decision",
      short: "Decision",
      title: "Home Affairs decides",
      who: ["government"],
      description:
        "The result is emailed to you, so check your junk folder. If Home Affairs needs more, it writes with a link to lodge [[form1554|Form 1554]] in [[immiaccount|ImmiAccount]].",
      points: [
        "Don't book travel until the ETA is granted",
        "Don't lodge repeat ETA applications: they give the same result",
        "If the ETA can't be granted, apply for a Visitor visa (600)",
      ],
      youHold: "An ETA grant with your visa grant number, start date and conditions",
      icon: ICON.envelope,
    },
    {
      id: "travel",
      short: "Travel",
      title: "Travel on the same passport",
      who: ["you", "border"],
      description: "Enter Australia on the passport linked to your ETA and complete the [[ipc|Incoming Passenger Card]]. Check your conditions in [[vevo|VEVO]] or in the app.",
      points: ["Carry evidence of your plans, funds and return ticket", "Border officers may ask about long or frequent visits"],
      youHold: "Entry to Australia for a stay of up to 3 months",
      icon: ICON.globeAsiaAustralia,
    },
    {
      id: "stay",
      short: "Stay",
      title: "Stay up to 3 months, then leave or apply",
      who: ["you"],
      description: "Come and go for 12 months, staying up to 3 months each visit. To stay longer, apply for another visa in Australia before the 3 months end.",
      points: [
        "No work: business visitor activities only ([[c8115|condition 8115]])",
        "Study or training for up to 3 months in total ([[c8201|condition 8201]])",
        "An ETA has no [[c8503|condition 8503]], so you can apply in Australia for a Visitor visa (600)",
      ],
      youHold: "Up to 12 months of visits, or a new visa",
      icon: ICON.calendarDays,
    },
  ],
  check: {
    title: "Could the ETA work for you?",
    highlight: "work for you",
    ok: {
      title: "The ETA looks like a fit",
      body: "Nothing in your answers rules you out. Check your passport details carefully and apply in the official app.",
    },
    disclaimer: "A general self-check, not advice or a prediction. Home Affairs decides each ETA on your answers and records.",
  },
  quiz: [
    {
      id: "passport",
      topic: "Passport",
      question: "Is your passport on the ETA list?",
      help: "It includes the UK (British Citizen or British National (Overseas)), the US, Canada, Japan, South Korea, Singapore, Malaysia, Brunei, Hong Kong, Taiwan and most Western European countries.",
      options: [
        { value: "yes", label: "Yes, a citizen passport from an eligible country", status: "ok", note: "You can apply in the app. Travel on the same passport you apply with." },
        {
          value: "europe",
          label: "I have an EU or other European passport",
          status: "ok",
          note: "Check the eVisitor (651) too: it's free for EU passports and some other European passports, including UK British Citizens.",
          link: { label: "eVisitor (651)", href: "/visas/other-visas/evisitor-visa-651" },
        },
        {
          value: "no",
          label: "No, or it isn't a citizen passport",
          status: "stop",
          note: "The ETA isn't available on this passport. A Visitor visa (600) is the usual alternative.",
          link: { label: "Visitor visa (600)", href: "/visas/other-visas/visitor-visa-600" },
        },
      ],
    },
    {
      id: "location",
      topic: "Where you are",
      question: "Where are you now?",
      options: [
        { value: "outside", label: "Outside Australia", status: "ok", note: "You must be outside Australia when you apply and when the ETA is granted." },
        {
          value: "inside",
          label: "In Australia",
          status: "stop",
          note: "You can't apply for an ETA in Australia. To stay longer, look at the Visitor visa (600) Tourist stream, applied for in Australia.",
          link: { label: "Visitor visa (600)", href: "/visas/other-visas/visitor-visa-600" },
        },
      ],
    },
    {
      id: "purpose",
      topic: "Purpose",
      question: "What will you do in Australia?",
      options: [
        { value: "tourism", label: "A holiday, a cruise, or visiting family or friends", status: "ok", note: "That's what the ETA is for." },
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
          note: "Not allowed. Working breaches condition 8115 and can lead to cancellation or removal. A working holiday or work visa is needed.",
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
          note: "The ETA allows 3 months per visit. For a longer stay you need a Visitor visa (600), for example applied for in Australia before your 3 months end.",
          link: { label: "Visitor visa (600)", href: "/visas/other-visas/visitor-visa-600" },
        },
      ],
    },
    {
      id: "character",
      topic: "Convictions",
      question: "Do you have a criminal conviction in any country?",
      options: [
        { value: "no", label: "No", status: "ok", note: "Answer the app's questions truthfully." },
        {
          value: "yes",
          label: "Yes",
          status: "todo",
          note: "Declare it. Home Affairs will need more information and recommends a Visitor visa (600), with evidence of the conviction and sentence, instead.",
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
          note: "Home Affairs says to apply for a Visitor visa (600) instead and complete the health checks.",
          link: { label: "Visitor visa (600)", href: "/visas/other-visas/visitor-visa-600" },
        },
      ],
    },
    {
      id: "whm",
      topic: "Working holiday visa",
      question: "Do you also hold a Working Holiday (417) or Work and Holiday (462) visa?",
      options: [
        { value: "no", label: "No", status: "ok", note: "Nothing to plan around." },
        {
          value: "yes",
          label: "Yes",
          status: "todo",
          note: "Your working holiday visa starts when you enter Australia, even for a transit. The ETA only takes effect after it ends. An ETA grant doesn't cancel it.",
        },
      ],
    },
  ],
  myths: [
    {
      myth: "I need a travel website to get an ETA.",
      fact: "No. Apply in the official Australian ETA app for A$20. Third-party websites charge extra, aren't needed, and may enter wrong details.",
    },
    {
      myth: "The ETA lets me stay in Australia for 12 months.",
      fact: "No. It's valid for travel for 12 months, but each visit is limited to 3 months.",
    },
    {
      myth: "If I get a new passport, my ETA carries over.",
      fact: "No. The ETA is linked to the passport you applied with. If that passport expires or you get a new one, the ETA ceases and you need a new ETA.",
    },
    {
      myth: "I can fix a typo in my ETA later.",
      fact: "No. An ETA can't be amended. A wrong name, date of birth or passport number means a new application, and you may be refused boarding or entry.",
    },
    {
      myth: "I can extend my ETA.",
      fact: "No. To stay longer than 3 months, apply in Australia for another visa before the 3 months end, usually a Visitor visa (600) in the Tourist stream for A$630. An ETA has no condition 8503, so that's possible.",
    },
    {
      myth: "Leaving and coming back always gives me another 3 months.",
      fact: "Only while you remain a genuine visitor. Back-to-back stays that make you look like a resident can lead to questions at the border and cancellation.",
    },
    {
      myth: "An old conviction doesn't matter for an ETA.",
      fact: "You must declare every conviction. Home Affairs recommends a Visitor visa (600) with evidence instead, and entering with convictions whose sentences total 12 months or more breaches condition 8528.",
    },
  ],
  glossary: [
    {
      id: "app",
      term: "Australian ETA app",
      definition: "The official app for ETA applications, free from the Apple App Store and Google Play. It scans your passport, takes a live photo and collects the A$20 service charge.",
    },
    {
      id: "genuine",
      term: "Genuine visitor",
      definition: "Someone who intends only to stay temporarily and to obey the visa's conditions and 3-month stay period. Long or frequent visits can lead to questions at the border.",
    },
    {
      id: "c8115",
      term: "Condition 8115",
      definition: "No work other than business visitor activities: enquiries, negotiations, official visits, conferences, trade fairs and seminars, without payment from the organisers.",
    },
    { id: "c8201", term: "Condition 8201", definition: "You must not study or train for more than 3 months in total." },
    { id: "c8503", term: "Condition 8503", full: "No Further Stay", definition: "A condition on some visas that blocks most visa applications while you're in Australia. An ETA doesn't carry it." },
    { id: "c8528", term: "Condition 8528", definition: "You must not have criminal convictions with sentences totalling 12 months or more, served or not, when you travel to and enter Australia." },
    { id: "c8527", term: "Condition 8527", definition: "You must be free from tuberculosis when you travel to and enter Australia." },
    {
      id: "form1554",
      term: "Form 1554",
      full: "ETA Request for further processing",
      definition: "The form you lodge in ImmiAccount, with the documents requested, if Home Affairs writes asking for more information about your ETA.",
    },
    { id: "ipc", term: "Incoming Passenger Card", definition: "The card you complete when you arrive in Australia." },
    {
      id: "vevo",
      term: "VEVO",
      full: "Visa Entitlement Verification Online",
      definition: "Home Affairs' online service for checking your visa's conditions. The ETA app also has a visa check function.",
    },
    { id: "immiaccount", term: "ImmiAccount", definition: "Home Affairs' online account. For an ETA, you only use it if Home Affairs asks you to lodge Form 1554." },
    {
      id: "nfc",
      term: "NFC",
      full: "Near-field communication",
      definition: "The phone feature the app uses to scan your passport and pre-fill your name, date of birth and passport number.",
    },
  ],
  cta: {
    subtitle: "Have a conviction or a health matter, or did the app say it can't process your ETA? We check whether a Visitor visa (600) is the better route, tell you honestly where you stand, and prepare it with you.",
  },
  finder: visitorFinder,
};
