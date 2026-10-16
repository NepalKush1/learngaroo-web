import type { VisaExplainer } from "../types";
import { ICON } from "../icons";
import { visitorFinder } from "./visitor-finder";

// Interactive explainer for the Working Holiday visa (subclass 417). Every
// figure matches data/visas/other-visas-visitor.ts (checked against Home
// Affairs and the Migration Regulations on 12 October 2026). Specified work
// for a second visa must be done on the first visa: Home Affairs' specified
// work page (read 13 October 2026) says bridging visa work after an onshore
// second-visa application counts towards a third visa, as the page's FAQ says.

export const workingHolidayVisa417Explainer: VisaExplainer = {
  slug: "working-holiday-visa-417",
  factsAsAt: "12 October 2026",
  oneLiner:
    "A 12-month visa for people aged 18 to 30 (up to 35 for some passports) from 19 countries and jurisdictions to travel Australia and work to fund the trip. Up to three visas are possible.",
  bigIdeas: [
    {
      title: "Travel first, work to fund it",
      body: "12 months in Australia if you're aged 18 to 30 (35 for ten countries). Any work, usually up to 6 months per employer.",
      icon: ICON.sun,
    },
    {
      title: "Up to three visas",
      body: "3 months of specified work can lead to a second visa, and 6 months on the second to a third. UK passport holders are exempt.",
      icon: ICON.arrowPath,
    },
    {
      title: "Just you, and temporary",
      body: "No one can be included, and dependent children can't come. It doesn't lead to permanent residence by itself.",
      icon: ICON.user,
    },
  ],
  heroCard: [
    { label: "Who it's for", value: "18 to 30 (or 35) with an eligible passport", icon: ICON.cake },
    { label: "How long", value: "12 months per visa; up to three visas", icon: ICON.clock },
    { label: "Work", value: "Any work, usually 6 months per employer", icon: ICON.briefcase },
    { label: "Family", value: "No one can be included", icon: ICON.users },
    { label: "Next visa", value: "A second and third, usually after specified work", icon: ICON.arrowPath },
    { label: "Visa charge", value: "A$840 first; A$1,000 second or third", icon: ICON.currencyDollar },
  ],
  actors: [
    {
      id: "employer",
      name: "Your employers in Australia",
      short: "Employers",
      icon: ICON.buildingOffice2,
      tone: "pink",
      role: "Give you work, and pay you under Australian workplace law.",
      does: [
        "Pay you under the relevant award, with pay slips",
        "Put any piece-rate or deduction agreement in writing",
        "Can usually employ you for up to 6 months, unless an exemption applies",
        "May be contacted by Home Affairs to check your [[specified|specified work]]",
      ],
    },
    {
      id: "you",
      name: "You (the working holiday maker)",
      short: "You",
      icon: ICON.user,
      tone: "green",
      role: "Travel, work to fund the trip, and keep to your conditions.",
      does: [
        "Apply for your first visa from outside Australia",
        "Keep to the 6-month limit with each employer ([[c8547|condition 8547]])",
        "Study for no more than 4 months ([[c8548|condition 8548]])",
        "Keep pay slips for any [[specified|specified work]]",
      ],
    },
    {
      id: "government",
      name: "Department of Home Affairs",
      short: "Home Affairs",
      icon: ICON.buildingLibrary,
      tone: "blue",
      role: "Decides each visa and checks your specified work claims.",
      does: [
        "Checks your passport, age, funds, health and character",
        "Grants a first visa only while you're outside Australia",
        "Checks specified work against its industry and postcode tables",
        "Can give written permission to stay longer with one employer",
      ],
    },
  ],
  flows: [
    {
      from: "you",
      to: "government",
      label: "First visa",
      detail: "From outside Australia, before your 31st birthday (36th for ten countries), you apply and pay A$840. You must not have entered Australia on a 417 or 462 before.",
    },
    {
      from: "government",
      to: "you",
      label: "12 months from entry",
      detail: "Once it's granted, you enter Australia within 12 months. Your 12-month stay starts the day you arrive.",
    },
    {
      from: "you",
      to: "employer",
      label: "You find work",
      detail: "You can do any kind of work, usually for up to 6 months with each employer. [[specified|Specified work]] in regional, northern or disaster-affected Australia can count towards another visa.",
    },
    {
      from: "employer",
      to: "you",
      label: "Pay + pay slips",
      detail: "Your employer pays you under Australian workplace law. Keep every pay slip: Home Affairs may contact employers to check your specified work.",
    },
    {
      from: "you",
      to: "government",
      label: "Next visa",
      detail: "After 88 calendar days of specified work on your first visa, you can apply for a second (A$1,000). A third needs 179 calendar days on the second. UK passport holders are exempt.",
    },
  ],
  journeyTitle: "From first visa to a third year",
  journeyHighlight: "a third year",
  stages: [
    {
      id: "check",
      short: "Check",
      title: "Check your passport, age and visa history",
      who: ["you"],
      description: "The 417 is for citizens of 19 countries and jurisdictions. Your age limit depends on your passport.",
      points: [
        "18 to 30: Belgium, Estonia, Hong Kong, Japan, Malta, the Netherlands, Norway, Sweden and Taiwan",
        "18 to 35: Canada, Cyprus, Denmark, Finland, France, Germany, Ireland, Italy, the Republic of Korea and the UK",
        "Lodge before midnight [[aet|Australian Eastern time]] on the day before your 31st (or 36th) birthday",
      ],
      youHold: "The visa you're applying for, and the date you must lodge by",
      icon: ICON.cake,
    },
    {
      id: "gather",
      short: "Gather",
      title: "Gather identity, funds and character evidence",
      who: ["you"],
      description: "Scan your passport and birth certificate, and show you can support yourself at the start of your stay.",
      points: [
        "About A$5,000 for your initial stay, plus the fare to your next destination",
        "Police certificates from each country where you spent 12 months or more in the last 10 years since turning 16",
        "No one can be included, and dependent children can't come with you",
      ],
      youHold: "Identity, funds and character documents ready to upload",
      icon: ICON.documentText,
    },
    {
      id: "apply",
      short: "Apply",
      title: "Apply online from outside Australia",
      who: ["you", "government"],
      description: "Lodge your first visa in [[immiaccount|ImmiAccount]] while you're outside Australia, and stay outside until it's granted.",
      points: [
        "A$840 for a first visa",
        "If you come to Australia on another visa while it's being decided, it can't be granted until you leave",
        "Don't book flights, work or study until the visa is granted",
      ],
      youHold: "A lodged application, then a grant",
      cost: "A$840, paid by you",
      icon: ICON.paperAirplane,
    },
    {
      id: "arrive",
      short: "Arrive",
      title: "Enter within 12 months of the grant",
      who: ["you"],
      description: "Your 12-month stay starts the day you enter Australia, even if you only transit or also hold an [[eta|ETA]].",
      points: [
        "Enter on the passport linked to the grant",
        "Don't apply for an eVisitor or Transit visa now: its grant ends your 417",
        "Time outside Australia doesn't extend your stay",
      ],
      youHold: "A 12-month working holiday in Australia",
      icon: ICON.globeAsiaAustralia,
    },
    {
      id: "work",
      short: "Work",
      title: "Work and travel within your conditions",
      who: ["you", "employer"],
      description: "You can do any kind of work, usually for up to 6 months with each employer ([[c8547|condition 8547]]), and study for up to 4 months.",
      points: [
        "No permission is needed for exempt work, such as plant and animal cultivation anywhere in Australia",
        "Otherwise Home Affairs may give permission through its online form",
        "You pay tax at working holiday maker rates and can claim your [[super|superannuation]] when you leave",
      ],
      youHold: "Income and travel, within your conditions",
      icon: ICON.briefcase,
    },
    {
      id: "specified",
      short: "Regional",
      title: "Do specified work early, and keep records",
      who: ["you", "employer"],
      description: "For a second or third visa, do [[specified|specified work]] in an eligible industry and postcode. UK passport holders don't need it.",
      points: [
        "88 calendar days on your first visa for a second; 179 on your second visa for a third",
        "Paid under the award, except volunteer bushfire and disaster recovery work",
        "Bad weather, illness or a lack of work aren't accepted as excuses",
        "Keep pay slips, contracts and any signed [[piece|piece-rate agreement]]",
      ],
      youHold: "Evidence of every day of specified work",
      icon: ICON.mapPin,
    },
    {
      id: "next",
      short: "Next visa",
      title: "Apply for the next visa before this one ends",
      who: ["you", "government"],
      description: "Lodge a second or third visa while your current visa is in effect. In Australia, a [[bridging|bridging visa]] keeps you lawful while it's decided.",
      points: [
        "A$1,000 for a second or third visa",
        "Granted in Australia while you're on your first 417 or its bridging visa, a second visa runs from the date the first expired or would have expired",
        "There's no fourth Working Holiday visa",
      ],
      youHold: "A further 12 months, or a planned departure",
      cost: "A$1,000, paid by you",
      icon: ICON.arrowPath,
    },
  ],
  check: {
    title: "Could a Working Holiday visa work for you?",
    highlight: "work for you",
    ok: {
      title: "You look on track",
      body: "Nothing in your answers rules you out. Next, check your lodging deadline and gather your identity, funds and any specified work evidence.",
    },
    disclaimer: "A general self-check, not advice or a prediction. Home Affairs decides each application on your full circumstances.",
  },
  quiz: [
    {
      id: "passport",
      topic: "Passport",
      question: "Do you hold a passport from a Working Holiday (417) country?",
      help: "Belgium, Canada, Cyprus, Denmark, Estonia, Finland, France, Germany, Hong Kong, Ireland, Italy, Japan, the Republic of Korea, Malta, the Netherlands, Norway, Sweden, Taiwan (not official or diplomatic passports) or the UK, including British National (Overseas).",
      options: [
        { value: "yes", label: "Yes", status: "ok", note: "You must also be a citizen of that country, and enter Australia on the passport linked to the grant." },
        {
          value: "462",
          label: "No, but my country is on the Work and Holiday (462) list",
          status: "stop",
          note: "The 417 isn't available on your passport, but the 462 may be.",
          link: { label: "Work and Holiday visa (462)", href: "/visas/other-visas/work-and-holiday-visa-462" },
        },
        {
          value: "no",
          label: "No",
          status: "stop",
          note: "The 417 isn't available on your passport. Other visas may suit you.",
          link: { label: "Try the visa finder", href: "#finder" },
        },
      ],
    },
    {
      id: "age",
      topic: "Age",
      question: "How old will you be when you lodge?",
      options: [
        { value: "18to30", label: "18 to 30", status: "ok", note: "Within the limit for every 417 country. Lodge before midnight Australian Eastern time on the day before your 31st birthday." },
        {
          value: "31to35",
          label: "31 to 35, with a passport from a country that allows up to 35",
          hint: "Canada, Cyprus, Denmark, Finland, France, Germany, Ireland, Italy, the Republic of Korea or the UK",
          status: "ok",
          note: "Within the limit. Lodge before midnight Australian Eastern time on the day before your 36th birthday.",
        },
        { value: "31other", label: "31 or over, with another 417 passport", status: "stop", note: "The age limit for your passport is 18 to 30, so a Working Holiday visa isn't possible." },
        { value: "36plus", label: "36 or over", status: "stop", note: "Over the age limit for every 417 country." },
        { value: "under18", label: "Under 18", status: "stop", note: "You must be at least 18 when you apply." },
      ],
    },
    {
      id: "history",
      topic: "Which visa",
      question: "Which Working Holiday visa would this be?",
      options: [
        {
          value: "first",
          label: "My first: I've never entered Australia on a 417 or 462",
          status: "ok",
          note: "Apply from outside Australia, and stay outside until it's granted.",
        },
        {
          value: "second",
          label: "My second",
          status: "todo",
          note: "You need 88 calendar days of specified work done on your first visa, unless you apply with a UK passport.",
          link: { label: "Count your days", href: "#meter" },
        },
        {
          value: "third",
          label: "My third",
          status: "todo",
          note: "You need 179 calendar days of specified work on your second visa, unless you apply with a UK passport. Work on your first visa doesn't count.",
          link: { label: "Count your days", href: "#meter" },
        },
        {
          value: "fourth",
          label: "I've already had three",
          status: "stop",
          note: "There's no fourth Working Holiday visa. An employer-sponsored, student or skilled visa may suit you.",
          link: { label: "Talk through your options", href: "/bookings" },
        },
      ],
    },
    {
      id: "location",
      topic: "Where you apply",
      question: "Where will you be when you apply?",
      options: [
        { value: "outside", label: "Outside Australia", status: "ok", note: "Any Working Holiday visa can be lodged from outside Australia. Stay outside until it's granted." },
        {
          value: "inside",
          label: "In Australia on a visa, applying for a second or third 417",
          status: "ok",
          note: "You can lodge in Australia. Stay in Australia until it's granted; a bridging visa usually keeps you lawful if your visa ends while you wait.",
        },
        { value: "first-inside", label: "In Australia, applying for a first 417", status: "stop", note: "A first visa must be lodged, and granted, while you're outside Australia." },
        {
          value: "lapsed",
          label: "In Australia, and my last visa ended more than 28 days ago",
          status: "stop",
          note: "You need a substantive visa, or one that ended within the last 28 days. A refusal or cancellation while you were in Australia may also bring in [[s48|section 48]]. Get advice first.",
          link: { label: "Book urgent advice", href: "/bookings" },
        },
      ],
    },
    {
      id: "funds",
      topic: "Funds",
      question: "Can you show about A$5,000, plus the fare out of Australia?",
      options: [
        { value: "yes", label: "Yes", status: "ok", note: "Attach bank evidence if you apply outside Australia. Onshore applicants for a second or third visa don't need to." },
        { value: "no", label: "Not yet", status: "todo", note: "You need enough money to support yourself at the start of your stay and to leave Australia." },
      ],
    },
    {
      id: "children",
      topic: "Children",
      question: "Do you have dependent children?",
      options: [
        { value: "no", label: "No", status: "ok", note: "Nothing to sort here." },
        {
          value: "staying",
          label: "Yes, but they won't come to Australia",
          status: "todo",
          note: "A parent of a child under 18 can't apply online, so a paper application is needed (with an A$80 charge). Your children can't join you at any time while you hold the visa.",
        },
        { value: "coming", label: "Yes, and they would come with me", status: "stop", note: "Dependent children can't accompany you at any time while you hold the visa, not even for a day." },
      ],
    },
    {
      id: "character",
      topic: "Health and character",
      question: "Any health or character concerns, or an earlier refusal or cancellation?",
      options: [
        { value: "clear", label: "No", status: "ok", note: "You may still be asked for health examinations or police certificates." },
        {
          value: "concern",
          label: "Yes",
          status: "todo",
          note: "Health, character and earlier refusals or cancellations are all taken into account. Get advice before you apply.",
          link: { label: "Get advice", href: "/bookings" },
        },
      ],
    },
  ],
  myths: [
    {
      myth: "Any job in a country town counts as specified work.",
      fact: "No. It must be in an eligible industry and postcode, and paid under the award. Secondary processing such as winemaking, brewing, milling or retail butchery doesn't count.",
    },
    {
      myth: "Three months of specified work just means three months living in the region.",
      fact: "No. It's the equivalent of full-time work over 88 calendar days. Part-time work counts pro rata, paid public holidays and sick days count, unpaid days don't, and a long shift on one day still counts as one day.",
    },
    {
      myth: "UK passport holders still need regional work for a second visa.",
      fact: "Not if they apply on or after 1 July 2024 using a UK passport, including a British National (Overseas) passport. The 6-month work limit and 4-month study limit still apply.",
    },
    {
      myth: "Days lost to bad weather still count.",
      fact: "Not if they're unpaid. Bad weather, illness or a lack of work aren't accepted as excuses. Paid public holidays and paid sick days count; unpaid days don't.",
    },
    {
      myth: "My children can visit me for a short holiday.",
      fact: "No. Dependent children can't accompany you at any time while you hold the visa, not even for a day.",
    },
    {
      myth: "An eVisitor is a handy backup to my Working Holiday visa.",
      fact: "No. An eVisitor or Transit visa granted after your 417 ends it, along with its work rights. An ETA doesn't end it, but only takes effect after the Working Holiday visa ends.",
    },
    {
      myth: "I can work for one employer for the whole year.",
      fact: "Usually only for 6 months, unless an exemption applies (such as plant and animal cultivation, or tourism and hospitality, anywhere in Australia) or Home Affairs gives written permission.",
    },
    {
      myth: "My birthday deadline is in my local time.",
      fact: "No. Lodge before midnight Australian Eastern time on the day before your 31st (or 36th) birthday. The visa can still be granted if you turn 31 or 36 after lodging.",
    },
  ],
  roles: [
    {
      id: "worker",
      label: "I'm the working holiday maker",
      intro: "Your part is a valid application, keeping to your conditions, and proving any specified work.",
      groups: [
        {
          title: "Before you apply",
          items: [
            "Check your passport, age and lodging deadline in [[aet|Australian Eastern time]]",
            "Show about A$5,000, plus the fare out",
            "Get police certificates where they're needed",
          ],
        },
        {
          title: "While you're here",
          items: [
            "Usually no more than 6 months with each employer ([[c8547|condition 8547]])",
            "Study for no more than 4 months",
            "Keep every pay slip, contract and written agreement",
          ],
        },
        {
          title: "For another visa",
          items: [
            "Do 88 calendar days of [[specified|specified work]] on your first visa, or 179 on your second",
            "Check the industry and postcode before you start",
            "Lodge before your current visa ends",
          ],
        },
      ],
    },
    {
      id: "employer",
      label: "I'm an employer",
      tone: "pink",
      intro: "You don't sponsor a working holiday maker, but your pay slips and records are the evidence for any specified work they claim.",
      groups: [
        {
          title: "Pay and records",
          items: [
            "Pay under the relevant award and Australian workplace law",
            "Give pay slips for every period worked",
            "Put any [[piece|piece-rate]] or deduction agreement in writing, signed",
          ],
        },
        {
          title: "The 6-month limit",
          items: [
            "Check whether an exemption applies, such as plant and animal cultivation anywhere in Australia",
            "Otherwise the worker can ask Home Affairs for permission through its online form",
          ],
        },
        {
          title: "If Home Affairs asks",
          items: ["Home Affairs may contact you to check specified work claims", "Work paid below the award doesn't count as specified work"],
        },
      ],
    },
  ],
  glossary: [
    {
      id: "specified",
      term: "Specified work",
      definition: "Work in an eligible industry and postcode that counts towards a second or third visa, such as farm work, fishing, forestry, mining or construction in regional Australia, or tourism and hospitality in northern or remote Australia.",
    },
    {
      id: "c8547",
      term: "Condition 8547",
      definition: "No more than 6 months with the same employer without written permission, unless an exemption applies. The 6 months restart with each new Working Holiday Maker visa or bridging visa.",
    },
    { id: "c8548", term: "Condition 8548", definition: "You must not study or train for more than 4 months (17 weeks)." },
    {
      id: "aet",
      term: "Australian Eastern time",
      definition: "The time zone your birthday deadline is measured in, not your local time. Lodge before midnight on the day before your 31st (or 36th) birthday.",
    },
    {
      id: "piece",
      term: "Piece-rate agreement",
      definition: "A signed agreement for pay per piece picked or packed, showing the rate per piece and how it's measured. Keep it as evidence of specified work.",
    },
    {
      id: "bridging",
      term: "Bridging visa",
      definition: "A visa that keeps you lawful in Australia while your next visa is decided. It's only granted if you were in Australia when you applied.",
    },
    {
      id: "whm",
      term: "Working Holiday Maker visas",
      definition: "The Working Holiday (417) and Work and Holiday (462) visas. You can't get a first visa of either kind if you've already entered Australia on one.",
    },
    {
      id: "uk",
      term: "Australia-UK Free Trade Agreement",
      definition: "The arrangement behind the rule that UK passport holders who apply on or after 1 July 2024 with a UK passport can be granted up to three 417s without specified work.",
    },
    {
      id: "super",
      term: "Superannuation",
      definition: "Compulsory retirement savings paid by your employer. Working holiday makers can claim it when they leave Australia.",
    },
    {
      id: "eta",
      term: "ETA",
      full: "Electronic Travel Authority",
      definition: "A visitor visa for eligible passports. If you also hold a 417, the ETA only takes effect after the 417 ends.",
    },
    { id: "immiaccount", term: "ImmiAccount", definition: "Home Affairs' online account, where you lodge your application, attach documents and pay." },
    {
      id: "s48",
      term: "Section 48",
      definition: "A rule that can stop you applying for most visas in Australia after a visa was refused or cancelled while you were here.",
    },
  ],
  verifiedExtras: [
    {
      fact: "A second Working Holiday visa granted while you are in Australia on your first 417, or the bridging visa granted after it expired, lets you stay up to 12 months from the date the first visa expired or would have expired. If you were in Australia on a different visa, you can stay 12 months from the grant date.",
      source: "https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/work-holiday-417/second-working-holiday-417",
    },
  ],
  finder: visitorFinder,
  meter: {
    navLabel: "Specified work",
    eyebrow: "Specified work counter",
    title: "Have you done enough specified work?",
    highlight: "enough specified work",
    subtitle:
      "Count full-time-equivalent calendar days of specified work on your current visa. UK passport holders who apply on or after 1 July 2024 with a UK passport don't need any.",
    question: "How many calendar days of full-time-equivalent specified work have you done on this visa?",
    unit: "days",
    min: 0,
    max: 220,
    step: 1,
    initial: 45,
    marks: [
      { at: 0, label: "0" },
      { at: 88, label: "88: second visa" },
      { at: 179, label: "179: third visa" },
    ],
    bands: [
      {
        from: 0,
        status: "todo",
        title: "Not enough yet for a second visa",
        body: "A second visa needs at least 88 calendar days of full-time-equivalent [[specified|specified work]] on your first visa. Do it early in the year, and keep every pay slip.",
      },
      {
        from: 88,
        status: "ok",
        title: "Enough for a second visa, not yet a third",
        body: "88 calendar days on your first visa meets the minimum for a second visa. A third visa needs 179 calendar days on your second visa; work on your first visa doesn't count towards it.",
      },
      {
        from: 179,
        status: "ok",
        title: "Enough for a second or a third visa",
        body: "If this is your second visa, 179 calendar days meets the minimum for a third. If it's your first, you're past the 88 calendar days a second visa needs. There's no fourth Working Holiday visa.",
      },
    ],
    footnote:
      "Part-time work counts pro rata, paid public holidays and sick days count, unpaid days don't, and a long shift on one day still counts as one day. The work must be in an eligible industry and postcode, and paid under the award. Specified work done on a bridging visa while your second visa is decided can count towards a third.",
    link: { label: "Check a postcode", href: "/tools/regional-postcode-checker" },
  },
  fees: {
    variantLabel: "Which visa?",
    variants: [
      { id: "first", label: "First Working Holiday visa", hint: "Applied for from outside Australia", primary: [{ label: "Visa application charge", amount: 840 }] },
      { id: "later", label: "Second or third Working Holiday visa", hint: "Applied for in or outside Australia", primary: [{ label: "Visa application charge", amount: 1000 }] },
    ],
    maxAdults: 0,
    maxChildren: 0,
    addOns: [
      {
        id: "paper",
        label: "Paper application",
        hint: "The non-internet charge, for example if you're the parent of a child under 18 and can't apply online",
        amount: 80,
        per: "application",
      },
    ],
    notIncluded: "Not included: health examinations, police certificates, biometrics, translations and health insurance.",
    notes: [
      "Charges from 1 July 2026. You pay for yourself only: no one can be included in a Working Holiday visa application.",
      "The second or third visa charge is payable again if an eVisitor or Transit visa grant cancelled your visa and you must reapply.",
    ],
    confirmUrl: "https://immi.homeaffairs.gov.au/visas/visa-pricing-estimator",
    confirmLabel: "Home Affairs Visa Pricing Estimator",
  },
  timeline: {
    navLabel: "Your dates",
    eyebrow: "Plan your first year",
    title: "Your first working holiday, in dates",
    highlight: "in dates",
    subtitle:
      "Pick the month you enter Australia on your first 417. You must enter within 12 months of the grant, and your 12-month stay starts the day you arrive.",
    startLabel: "You enter on your first 417",
    startPrompt: "When do (or did) you enter Australia on your first 417?",
    milestones: [
      {
        months: 3,
        label: "Earliest you could finish 3 months of specified work",
        detail:
          "If you start full-time [[specified|specified work]] when you arrive, 88 calendar days takes you to about here. Part-time work takes longer. UK passport holders don't need it.",
        kind: "goal",
      },
      {
        months: 12,
        label: "Your first visa ends",
        detail:
          "Lodge your second visa before this date if you want to stay on. In Australia, a [[bridging|bridging visa]] keeps you lawful while it's decided, and a second visa granted there runs from this date.",
        kind: "end",
      },
    ],
    footnote: "Month and year only: check your exact dates in VEVO or your grant letter. Time outside Australia doesn't extend your stay.",
  },
};
