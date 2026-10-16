import type { VisaExplainer } from "../types";
import { ICON } from "../icons";

// Interactive explainer for the Medical Treatment visa (subclass 602). Every
// figure matches data/visas/other-visas-visitor.ts (checked against Home
// Affairs and the Migration Regulations on 12 October 2026). Home Affairs'
// 602 page, re-read on 13 October 2026, confirms that representatives of a
// foreign government pay no charge wherever they apply.

export const medicalTreatmentVisa602Explainer: VisaExplainer = {
  slug: "medical-treatment-visa-602",
  factsAsAt: "12 October 2026",
  oneLiner:
    "A temporary visa to come to, or stay in, Australia for medical treatment, to donate an organ or to support a patient. Free if you apply outside Australia, A$480 in Australia. No pathway to permanent residence.",
  bigIdeas: [
    {
      title: "For patients, donors and supporters",
      body: "Patients, organ donors and recipients, and the family or friends who support them. Support persons apply for their own visa.",
      icon: ICON.heart,
    },
    {
      title: "Paid for, at no cost to the public",
      body: "Your treatment must be arranged and paid for so that no Australian government or public authority pays.",
      icon: ICON.banknotes,
    },
    {
      title: "Matched to your treatment plan",
      body: "Home Affairs sets your stay from your treatment plan. No work, except in limited circumstances, and no extensions.",
      icon: ICON.calendarDays,
    },
  ],
  heroCard: [
    { label: "Who it's for", value: "Patients, organ donors and their support persons", icon: ICON.heart },
    { label: "How long", value: "Set case by case, to match your treatment", icon: ICON.clock },
    { label: "Work", value: "No work, except in limited circumstances", icon: ICON.noSymbol },
    { label: "Where you apply", value: "In or outside Australia", icon: ICON.mapPin },
    { label: "Permanent residence", value: "No pathway: it's a temporary visa", icon: ICON.home },
    { label: "Visa charge", value: "Free outside Australia; A$480 in Australia", icon: ICON.currencyDollar },
  ],
  actors: [
    {
      id: "hospital",
      name: "Your doctor or hospital in Australia",
      short: "Hospital",
      icon: ICON.buildingOffice,
      tone: "teal",
      role: "Plans your treatment and confirms in writing how it will be paid for.",
      does: [
        "Describes your condition, the treatment, the timeframe and the estimated cost",
        "Confirms it has approved the treatment and the arrangements to pay",
        "For a public hospital: its financial officer or administration confirms no Australian will be disadvantaged",
      ],
    },
    {
      id: "government",
      name: "Department of Home Affairs",
      short: "Home Affairs",
      icon: ICON.buildingLibrary,
      tone: "blue",
      role: "Decides the visa and sets your stay to match your treatment.",
      does: [
        "Checks the treatment, payment and funds evidence",
        "May ask for health examinations, biometrics or a police certificate",
        "Grants the patient's or donor's visa before any support person's",
        "Sets the visa period, single or multiple entry, and conditions",
      ],
    },
    {
      id: "you",
      name: "You (the patient or donor)",
      short: "You",
      icon: ICON.user,
      tone: "green",
      role: "Arrange the treatment and the payment, then apply.",
      does: [
        "Get letters from your doctor or hospital before you apply",
        "Show funds for your treatment, travel and stay, and for anyone with you",
        "Apply in or outside Australia",
        "Don't work unless [[vevo|VEVO]] shows you can",
      ],
    },
    {
      id: "support",
      name: "Your support person",
      short: "Support",
      icon: ICON.lifebuoy,
      tone: "teal",
      role: "A family member or friend who comes to support you, on their own [[support|support person]] visa.",
      does: [
        "Lodges their own application, unless they're listed on your passport",
        "Asks for the applications to be processed together",
        "Meets the health, character and funds requirements",
        "Can only be granted a visa after yours",
      ],
    },
  ],
  flows: [
    {
      from: "hospital",
      to: "you",
      label: "Treatment + cost letter",
      detail: "Your Australian doctor or hospital confirms your condition, the treatment, the timeframe and the cost, and that payment is arranged.",
    },
    {
      from: "you",
      to: "government",
      label: "You apply",
      detail: "You apply in [[immiaccount|ImmiAccount]], free outside Australia or A$480 in Australia, with your treatment, payment and funds evidence.",
    },
    {
      from: "support",
      to: "government",
      label: "Applies separately",
      detail: "A [[support|support person]] lodges their own 602 and asks for it to be processed with yours. It can only be granted after your visa.",
    },
    {
      from: "government",
      to: "you",
      label: "Visa granted",
      detail: "Home Affairs grants a visa matched to your treatment plan. The grant letter states the visa period, the entry type and your conditions.",
    },
    {
      from: "you",
      to: "hospital",
      label: "You have treatment",
      detail: "You have the treatment and pay as arranged. You remain liable for all your health care costs.",
    },
  ],
  journeyTitle: "From treatment plan to a granted visa",
  journeyHighlight: "a granted visa",
  stages: [
    {
      id: "plan",
      short: "Plan",
      title: "Confirm the treatment and how it's paid for",
      who: ["hospital", "you"],
      description: "Settle the treatment plan with the Australian doctor or hospital, and get the letters before you apply.",
      points: [
        "Your condition, the treatment, the expected timeframe and the estimated cost",
        "Written confirmation that the hospital approved the treatment and the payment arrangements",
        "For a public hospital, the letter comes from its financial officer or administration department",
      ],
      youHold: "Treatment and payment letters that meet Home Affairs' requirements",
      icon: ICON.documentText,
    },
    {
      id: "funds",
      short: "Funds",
      title: "Gather financial and identity evidence",
      who: ["you"],
      description: "Show you can pay for your treatment, travel and stay, and the costs of anyone who comes with you, including a donor.",
      points: [
        "Evidence of your funds",
        "Letters from any Australians who will support you",
        "Your passport, identity documents and English translations",
      ],
      youHold: "A complete document set",
      icon: ICON.banknotes,
    },
    {
      id: "apply",
      short: "Apply",
      title: "Apply online in ImmiAccount",
      who: ["you", "government"],
      description: "Apply in or outside Australia. You must be in the same place when the visa is granted as when you applied.",
      points: [
        "Free outside Australia; A$480 in Australia",
        "In Australia, apply before your visa ends to be granted a [[bva|Bridging visa A]]",
        "No [[substantive|substantive visa]]? Complete [[form1507|Form 1507]]; the [[sch3|Schedule 3]] criteria usually apply",
      ],
      youHold: "A lodged application (and in Australia, usually a Bridging visa A)",
      cost: "Free outside Australia; A$480 in Australia",
      icon: ICON.paperAirplane,
    },
    {
      id: "support",
      short: "Support",
      title: "Support persons apply separately",
      who: ["support"],
      description: "Each [[support|support person]] lodges their own 602, unless they're listed on your passport, and asks for the applications to be processed together.",
      points: ["They must meet the health, character and funds requirements", "Their visa can only be granted after yours"],
      youHold: "Linked applications for you and your support persons",
      icon: ICON.users,
    },
    {
      id: "checks",
      short: "Checks",
      title: "Health examinations, biometrics and requests",
      who: ["government", "you"],
      description: "Home Affairs may ask for health examinations, biometrics or more information. It may decide without asking, so attach everything up front.",
      points: [
        "You must not have a condition that could threaten public health",
        "A police certificate may be requested",
        "Check current processing times on the Home Affairs tool",
      ],
      youHold: "An application ready for decision",
      icon: ICON.fingerPrint,
    },
    {
      id: "grant",
      short: "Grant",
      title: "Grant: check your entry type and stay",
      who: ["government", "you"],
      description: "Your grant letter states the visa period, whether you have single or multiple entry, and your conditions.",
      points: [
        "Single entry, granted in Australia: you can leave and return once",
        "Single entry, granted outside Australia: you can enter once",
        "No work unless VEVO shows you can ([[c8101|condition 8101]]); study up to 3 months unless exempt",
      ],
      youHold: "A visa matched to your treatment plan",
      icon: ICON.checkBadge,
    },
    {
      id: "treatment",
      short: "Treatment",
      title: "Have your treatment, and plan ahead",
      who: ["you", "hospital"],
      description: "Keep paying for your treatment as arranged, and leave before the visa ends. It can't be extended.",
      points: [
        "If treatment continues, apply for another visa before this one ends",
        "Tell Home Affairs about a new passport, a change of address or relationship, or a birth",
        "You remain liable for all your health care costs",
      ],
      youHold: "Treatment completed, or a new visa application lodged in time",
      icon: ICON.heart,
    },
  ],
  check: {
    title: "Could a Medical Treatment visa work for you?",
    highlight: "work for you",
    ok: {
      title: "You look on track",
      body: "Nothing in your answers rules you out. The next step is getting the treatment and payment letters right, and showing your funds.",
    },
    disclaimer: "A general self-check, not medical or legal advice, and not a prediction. Home Affairs decides each application on its full circumstances.",
  },
  quiz: [
    {
      id: "reason",
      topic: "Reason",
      question: "Why do you need to be in Australia?",
      options: [
        {
          value: "treatment",
          label: "For medical treatment or a consultation",
          status: "ok",
          note: "One of the qualifying situations. You'll need letters from your Australian doctor or hospital.",
        },
        {
          value: "organ",
          label: "To donate an organ, or to receive one from a donor travelling with me",
          status: "ok",
          note: "Both qualify. The transplant hospital provides the treatment evidence.",
        },
        {
          value: "support",
          label: "To support a patient or organ donor who holds, or is applying for, this visa",
          status: "ok",
          note: "You apply for your own 602 as a support person. It can only be granted after the patient's or donor's visa.",
        },
        {
          value: "over50",
          label: "I'm 50 or over, in Australia, and was refused a permanent visa only on health grounds",
          status: "ok",
          note: "If you're also unfit to depart, you can apply, even without a substantive visa (using Form 1507). The genuine temporary stay requirement doesn't apply to you.",
          link: { label: "Health requirement and waiver", href: "/visas/appeals-and-review/health-requirement-and-health-waiver" },
        },
        {
          value: "other",
          label: "A holiday, with a short consultation while I'm there",
          status: "todo",
          note: "A short consultation that doesn't need a Medical Treatment visa may fit a Visitor visa (600).",
          link: { label: "Visitor visa (600)", href: "/visas/other-visas/visitor-visa-600" },
        },
      ],
    },
    {
      id: "payment",
      topic: "Payment",
      question: "Is your treatment arranged and paid for?",
      help: "In most cases no Australian government or public authority can pay for it.",
      options: [
        {
          value: "confirmed",
          label: "Yes, and the hospital has confirmed it in writing",
          status: "ok",
          note: "That letter is the key evidence. A public hospital's letter must come from its financial officer or administration department.",
        },
        {
          value: "arranging",
          label: "We're still arranging it",
          status: "todo",
          note: "Get written confirmation that the hospital has approved the treatment and the arrangements to pay before you apply.",
        },
        {
          value: "public",
          label: "I was hoping Medicare or a public authority would pay",
          status: "stop",
          note: "In most cases you must pre-arrange payment so that no Australian government or public authority pays for your treatment.",
        },
      ],
    },
    {
      id: "funds",
      topic: "Funds",
      question: "Can you pay for your treatment, travel and stay, and for anyone who comes with you?",
      options: [
        { value: "yes", label: "Yes", status: "ok", note: "Include evidence of your funds, and letters from any Australians who will support you." },
        {
          value: "partly",
          label: "Partly, with help from family or friends in Australia",
          status: "todo",
          note: "Letters from Australians who will support you can be included. Together, the money must cover your travel, treatment and other expenses.",
        },
        {
          value: "no",
          label: "Not yet",
          status: "stop",
          note: "You need adequate means of support for your travel, your treatment, your other expenses and anyone who comes with you, including a donor.",
        },
      ],
    },
    {
      id: "location",
      topic: "Where you apply",
      question: "Where are you now?",
      options: [
        { value: "outside", label: "Outside Australia", status: "ok", note: "The visa is free if you apply outside Australia. Stay outside until it's granted." },
        {
          value: "inside",
          label: "In Australia, and my visa hasn't ended",
          status: "ok",
          note: "You can apply in Australia for A$480. Lodging before your visa ends gives you a Bridging visa A. If your visa has condition 8503, you need a waiver first.",
          link: { label: "The 8503 waiver", href: "/visas/appeals-and-review/condition-8503-no-further-stay-waiver" },
        },
        {
          value: "no-visa",
          label: "In Australia, without a substantive visa",
          status: "todo",
          note: "You must usually meet the Schedule 3 criteria, unless you're 50 or over and unfit to depart after a health-based refusal, and complete Form 1507. Get advice first.",
          link: { label: "Schedule 3 criteria", href: "/visas/appeals-and-review/schedule-3-criteria" },
        },
      ],
    },
    {
      id: "health",
      topic: "Public health",
      question: "Could your condition be a threat to public health?",
      options: [
        { value: "no", label: "No", status: "ok", note: "You still need to meet the health requirement, including any examinations Home Affairs asks for." },
        {
          value: "unsure",
          label: "I'm not sure",
          status: "todo",
          note: "You must not have a condition that could threaten public health or endanger the Australian community. Ask your doctor, and get advice.",
          link: { label: "The health requirement", href: "/visas/appeals-and-review/health-requirement-and-health-waiver" },
        },
      ],
    },
    {
      id: "work",
      topic: "Work",
      question: "Will you need to work while you're here?",
      options: [
        { value: "no", label: "No", status: "ok", note: "Good: work isn't allowed, except in limited circumstances." },
        {
          value: "yes",
          label: "Yes",
          status: "todo",
          note: "Work isn't allowed except in limited circumstances, so plan your funds without work income. Once granted, check VEVO for your own entitlements.",
        },
      ],
    },
    {
      id: "children",
      topic: "Children",
      question: "Is the patient, or a support person, under 18?",
      options: [
        { value: "no", label: "No", status: "ok", note: "Nothing extra needed." },
        {
          value: "yes",
          label: "Yes",
          status: "todo",
          note: "There's no age limit, but a child needs consent from any parent or guardian not travelling (Form 1229 or a statutory declaration), and Form 1257 if staying with someone other than a relative or guardian.",
        },
      ],
    },
  ],
  myths: [
    {
      myth: "Medicare or a public hospital will cover my treatment.",
      fact: "No. In most cases you must pre-arrange payment so that no Australian government or public authority pays, with written confirmation from the hospital.",
    },
    {
      myth: "My support person can apply first, so they're ready.",
      fact: "Their application can be processed with yours, but the patient's or donor's visa must be granted first. A support person applying before then can't succeed.",
    },
    {
      myth: "It costs the same wherever I apply.",
      fact: "No. It's free if you apply outside Australia and A$480 if you apply in Australia. The subsequent temporary application charge doesn't apply to this visa.",
    },
    {
      myth: "I can extend my Medical Treatment visa if treatment runs over.",
      fact: "No. It can't be extended. If your treatment continues, apply for another visa before it ends.",
    },
    {
      myth: "I can work part-time to cover my costs.",
      fact: "No. Work isn't allowed except in limited circumstances, so check VEVO for your own entitlements. Working on the visa breaches condition 8101 and can lead to cancellation.",
    },
    {
      myth: "It's only for people coming from overseas.",
      fact: "No. You can apply in Australia, for example when your visitor visa is ending and treatment isn't finished. People aged 50 or over refused a permanent visa only on health grounds, and unfit to depart, can also apply.",
    },
    {
      myth: "My whole family can be included in my application.",
      fact: "Only family members listed on your passport. Other relatives or friends apply separately as support persons, with their own charge.",
    },
  ],
  roles: [
    {
      id: "patient",
      label: "I'm the patient or donor",
      intro: "Your part is the treatment evidence, the money, and a valid application at the right time.",
      groups: [
        {
          title: "Before you apply",
          items: [
            "Get the doctor's letter: condition, treatment, timeframe and estimated cost",
            "Get the hospital's written confirmation of the payment arrangements",
            "Collect evidence of funds, and letters from any Australians supporting you",
          ],
        },
        {
          title: "When you apply",
          items: [
            "Apply in [[immiaccount|ImmiAccount]]: free outside Australia, A$480 in Australia",
            "In Australia, apply before your visa ends, or complete [[form1507|Form 1507]] if you have no substantive visa",
            "Have health examinations or give biometrics if asked",
          ],
        },
        {
          title: "Once it's granted",
          items: ["Check [[vevo|VEVO]] for your entry type, stay and work entitlements", "Keep paying for treatment as arranged", "Apply for another visa in time if treatment continues"],
        },
      ],
    },
    {
      id: "supporter",
      label: "I'm the support person",
      tone: "teal",
      intro: "You come to support a patient or organ donor, on your own [[support|support person]] visa.",
      groups: [
        {
          title: "Your application",
          items: [
            "Lodge your own 602, unless you're listed on the patient's passport",
            "Ask for it to be processed together with the patient's",
            "Meet the health, character and funds requirements",
          ],
        },
        {
          title: "Timing and your stay",
          items: [
            "Your visa can only be granted after the patient's or donor's visa",
            "You hold your own visa, with your own conditions and stay period",
            "If you don't qualify as a support person, a Visitor visa (600) may suit you",
          ],
        },
      ],
    },
  ],
  glossary: [
    {
      id: "support",
      term: "Support person",
      definition: "A family member or friend who comes to support a patient or organ donor. They hold their own Medical Treatment visa, which can only be granted after the patient's or donor's visa.",
    },
    {
      id: "form1507",
      term: "Form 1507",
      full: "Evidence of intended medical treatment (includes consultation)",
      definition: "The form you complete if you apply in Australia without a substantive visa.",
    },
    {
      id: "sch3",
      term: "Schedule 3 criteria",
      definition: "Extra criteria for people who apply in Australia without a substantive visa. People aged 50 or over who are unfit to depart after a health-based refusal can apply without meeting them.",
    },
    {
      id: "substantive",
      term: "Substantive visa",
      definition: "A full visa, such as a visitor, student or work visa, rather than a bridging visa.",
    },
    {
      id: "bva",
      term: "Bridging visa A",
      definition: "A visa you're granted when you apply in Australia while holding a substantive visa, so you can stay while your application is decided. To travel while you wait, you need a Bridging visa B.",
    },
    {
      id: "vevo",
      term: "VEVO",
      full: "Visa Entitlement Verification Online",
      definition: "Home Affairs' online service where you check your entry type, stay period and work entitlements.",
    },
    { id: "c8101", term: "Condition 8101", definition: "No work in Australia. For this visa Home Affairs says work isn't allowed except in limited circumstances; check VEVO for your own entitlements." },
    { id: "c8201", term: "Condition 8201", definition: "You must not study or train for more than 3 months, unless an exemption applies to you." },
    { id: "c8501", term: "Condition 8501", definition: "Where it's imposed, you must keep adequate health insurance while you're in Australia." },
    {
      id: "c8503",
      term: "Condition 8503",
      full: "No Further Stay",
      definition: "A condition on some visas, including some visitor visas, that blocks most applications in Australia. If your current visa has it, you need a waiver before you apply.",
    },
    {
      id: "gts",
      term: "Genuine temporary stay",
      definition: "You must intend only to stay temporarily and to do what the visa allows. It doesn't apply to applicants aged 50 or over who were refused a permanent visa on health grounds and are unfit to depart.",
    },
    { id: "immiaccount", term: "ImmiAccount", definition: "Home Affairs' online account, where you lodge your application, attach documents and pay." },
  ],
  cta: {
    subtitle: "We check your treatment, payment and funds evidence against these rules, tell you honestly where you stand, and prepare the application with you and any support person.",
  },
  fees: {
    variantLabel: "Where will you apply?",
    variants: [
      { id: "outside", label: "Outside Australia", primary: [{ label: "Visa application charge (free outside Australia)", amount: 0 }] },
      {
        id: "inside",
        label: "In Australia",
        primary: [{ label: "Visa application charge", amount: 480 }],
        adult: [{ label: "Each additional applicant aged 18 or over (listed on your passport)", amount: 240 }],
        child: [{ label: "Each additional applicant under 18 (listed on your passport)", amount: 120 }],
      },
    ],
    maxAdults: 2,
    maxChildren: 4,
    notIncluded: "Not included: medical treatment and hospital costs, health examinations, police certificates, biometrics, translations and health insurance.",
    notes: [
      "Charges from 1 July 2026. Only people who share your passport can be included in your application. Every other support person lodges their own application and pays their own charge.",
      "The visa is free if you apply outside Australia, and free for representatives of a foreign government.",
      "No subsequent temporary application charge applies to this visa.",
      "Eligible Pacific Island and Timor-Leste passport holders pay a reduced charge in Australia from 1 July 2026 (not shown here).",
    ],
    confirmUrl: "https://immi.homeaffairs.gov.au/visas/visa-pricing-estimator",
    confirmLabel: "Home Affairs Visa Pricing Estimator",
  },
};
