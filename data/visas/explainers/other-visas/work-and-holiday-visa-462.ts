import type { VisaExplainer } from "../types";
import { ICON } from "../icons";
import { visitorFinder } from "./visitor-finder";

// Interactive explainer for the Work and Holiday visa (subclass 462). Every
// figure matches data/visas/other-visas-visitor.ts (checked against Home
// Affairs and the Migration Regulations on 12 October 2026). The specified
// work counting rules and the bridging visa rule were read on the Home
// Affairs specified 462 work page on 13 October 2026 (see verifiedExtras).

export const workAndHolidayVisa462Explainer: VisaExplainer = {
  slug: "work-and-holiday-visa-462",
  factsAsAt: "12 October 2026",
  oneLiner:
    "A 12-month visa for people aged 18 to 30 from 30 partner countries to work and travel in Australia. First visas have education and English rules and, for most countries, an annual cap. Up to three visas are possible.",
  bigIdeas: [
    {
      title: "Work and travel for 12 months",
      body: "Ages 18 to 30, from 30 partner countries including the US, China, India and Spain. Any work, usually 6 months per employer.",
      icon: ICON.sun,
    },
    {
      title: "Extra rules for a first visa",
      body: "First visas need functional English, most need an education level, and some need a letter of support from your government.",
      icon: ICON.academicCap,
    },
    {
      title: "Caps, a ballot, and up to three visas",
      body: "First visas are capped, except for the US. China, India and Vietnam use a ballot. Specified work can lead to two more years.",
      icon: ICON.ticket,
    },
  ],
  heroCard: [
    { label: "Who it's for", value: "18 to 30, with a passport from a partner country", icon: ICON.cake },
    { label: "How long", value: "12 months per visa; up to three visas", icon: ICON.clock },
    { label: "Work", value: "Any work, usually 6 months per employer", icon: ICON.briefcase },
    { label: "First visa", value: "Education and English rules; a cap or ballot", icon: ICON.academicCap },
    { label: "Family", value: "No one can be included", icon: ICON.users },
    { label: "Visa charge", value: "A$840 first; A$1,000 second or third", icon: ICON.currencyDollar },
  ],
  actors: [
    {
      id: "homegov",
      name: "Your government (some countries)",
      short: "Your country",
      icon: ICON.flag,
      tone: "teal",
      role: "Issues a [[letter|letter of support]] for a first visa, where your country requires one.",
      does: [
        "Ecuador, Greece, Indonesia, Mongolia, Peru, Poland, San Marino, Slovenia, Thailand and Türkiye: a letter of support",
        "Malaysia: a Good Conduct Certificate from the Ministry of Foreign Affairs",
        "Many partner countries, such as the US, China, India and Spain, need no letter",
      ],
    },
    {
      id: "government",
      name: "Department of Home Affairs",
      short: "Home Affairs",
      icon: ICON.buildingLibrary,
      tone: "blue",
      role: "Runs the caps and the ballot, and decides each visa.",
      does: [
        "Sets an [[cap|annual cap]] on first visas for each country except the United States",
        "Runs the [[ballot|ballot]] for China, India and Vietnam",
        "Checks your funds, health and character, and for a first visa your education and English",
        "Checks your [[specified|specified work]] claims for a second or third visa",
      ],
    },
    {
      id: "you",
      name: "You (the working holiday maker)",
      short: "You",
      icon: ICON.user,
      tone: "green",
      role: "Meet your country's rules, apply, then work and travel within your conditions.",
      does: [
        "For a first visa, get your education, English and any support letter ready",
        "Apply for your first visa from outside Australia",
        "Keep to the 6-month limit with each employer ([[c8547|condition 8547]])",
        "Keep pay slips for any [[specified|specified work]]",
      ],
    },
    {
      id: "employer",
      name: "Your employers in Australia",
      short: "Employers",
      icon: ICON.buildingOffice2,
      tone: "pink",
      role: "Give you work, and pay you under Australian workplace law.",
      does: [
        "Pay you under the relevant Australian laws and awards, with pay slips",
        "Put any piece-rate or deduction agreement in writing",
        "May be contacted by Home Affairs to check your specified work",
      ],
    },
  ],
  flows: [
    {
      from: "homegov",
      to: "you",
      label: "Letter of support",
      detail: "If your country requires it, you get a [[letter|letter of support]] from your government before you apply for your first visa. Malaysia issues a Good Conduct Certificate instead.",
    },
    {
      from: "you",
      to: "government",
      label: "You apply",
      detail: "You apply from outside Australia for A$840, within your country's [[cap|annual cap]] (the United States has none). China, India and Vietnam passport holders must first be selected in the A$25 [[ballot|ballot]].",
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
      detail: "Any kind of work, usually for up to 6 months with each employer. [[specified|Specified work]] in northern or regional Australia can count towards another visa.",
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
      detail: "After 88 calendar days of specified work on your first visa, you can apply for a second (A$1,000), with no cap. A third needs 179 calendar days on the second.",
    },
  ],
  journeyTitle: "From the cap or ballot to a third year",
  journeyHighlight: "a third year",
  stages: [
    {
      id: "cap",
      short: "Cap",
      title: "Check your country's cap, or register in the ballot",
      who: ["you", "government"],
      description:
        "Each program year, first visas are capped for every country except the United States. Applications open on 2 July, and a country's [[cap|cap]] can be paused or closed.",
      points: [
        "China, India and Vietnam: register in the [[ballot|ballot]] for A$25 and wait to be selected",
        "Selection is random and can't be requested",
        "If you're selected, you have 28 days to apply from outside Australia",
        "Home Affairs has announced that Indonesian first visas will move to a ballot",
      ],
      youHold: "An open cap for your country, or a ballot selection letter",
      cost: "A$25 ballot registration (China, India and Vietnam)",
      icon: ICON.ticket,
    },
    {
      id: "rules",
      short: "Rules",
      title: "First visa: meet the education, English and letter rules",
      who: ["you", "homegov"],
      description:
        "Most partner countries need a tertiary qualification or 2 years of undergraduate university study, plus [[functional|functional English]].",
      points: [
        "United States: a senior secondary certificate is enough",
        "An English test taken within 12 months of applying: IELTS average 4.5, PTE Academic 30 or Cambridge C1 Advanced 147",
        "Ten countries need a [[letter|letter of support]]; Malaysia needs a Good Conduct Certificate",
      ],
      youHold: "Qualification, English and support documents dated within the required periods",
      icon: ICON.academicCap,
    },
    {
      id: "apply",
      short: "Apply",
      title: "Apply online from outside Australia",
      who: ["you", "government"],
      description: "Lodge your first visa in [[immiaccount|ImmiAccount]] while you're outside Australia, declare your correct location, and stay outside until it's granted.",
      points: [
        "A$840 for a first visa",
        "Show about A$5,000, plus the fare to your next destination",
        "Ballot applicants attach the national identity card they registered with",
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
      description: "Your 12-month stay starts the day you enter Australia, even for a transit.",
      points: [
        "Enter on the passport linked to the visa",
        "Don't apply for an eVisitor or Transit visa now: its grant ends your 462",
        "Time outside Australia doesn't extend your stay",
      ],
      youHold: "A 12-month work and holiday stay",
      icon: ICON.globeAsiaAustralia,
    },
    {
      id: "work",
      short: "Work",
      title: "Work and travel within your conditions",
      who: ["you", "employer"],
      description: "Any kind of work, usually up to 6 months with each employer ([[c8547|condition 8547]]), and study for up to 4 months ([[c8548|condition 8548]]).",
      points: [
        "No permission is needed for exempt work, such as plant and animal cultivation anywhere in Australia",
        "You pay tax at working holiday maker rates and can claim your superannuation when you leave",
      ],
      youHold: "Income and travel, within your conditions",
      icon: ICON.briefcase,
    },
    {
      id: "specified",
      short: "Regional",
      title: "Do specified 462 work early",
      who: ["you", "employer"],
      description: "The 462 list is narrower than the 417 list. Check the industry and the postcode before you start, and keep every pay slip.",
      points: [
        "Tourism and hospitality: Northern, Remote or Very Remote Australia",
        "Plant and animal cultivation and construction: Northern Australia or specified regional areas",
        "Fishing, pearling and tree farming: [[northern|Northern Australia]] only",
        "Disaster recovery and critical COVID-19 health work count as for the 417",
      ],
      youHold: "Evidence of every day of specified work",
      icon: ICON.mapPin,
    },
    {
      id: "next",
      short: "Next visa",
      title: "Apply for the next visa before this one ends",
      who: ["you", "government"],
      description: "Second and third visas have no cap. Lodge in Australia, where a [[bridging|bridging visa]] keeps you lawful while it's decided, or from outside.",
      points: [
        "88 calendar days on your first visa for a second; 179 on your second visa for a third",
        "A$1,000 for a second or third visa",
        "There's no fourth Work and Holiday visa",
      ],
      youHold: "A further 12 months, or a planned departure",
      cost: "A$1,000, paid by you",
      icon: ICON.arrowPath,
    },
  ],
  check: {
    title: "Could a Work and Holiday visa work for you?",
    highlight: "work for you",
    ok: {
      title: "You look on track",
      body: "Nothing in your answers rules you out. For a first visa, check your country's cap or ballot status and get your education, English and any support letter ready.",
    },
    disclaimer: "A general self-check, not advice or a prediction. Home Affairs decides each application on your full circumstances.",
  },
  quiz: [
    {
      id: "passport",
      topic: "Passport",
      question: "Do you hold a passport from a Work and Holiday (462) partner country?",
      help: "Argentina, Austria, Brazil, Chile, China, the Czech Republic, Ecuador, Greece, Hungary, India, Indonesia, Israel, Luxembourg, Malaysia, Mongolia, Papua New Guinea, Peru, Poland, Portugal, San Marino, Singapore, the Slovak Republic, Slovenia, Spain, Switzerland, Thailand, Türkiye, Uruguay, the United States or Vietnam.",
      options: [
        { value: "yes", label: "Yes", status: "ok", note: "You must also be a citizen of that country, and enter Australia on the passport linked to the visa." },
        {
          value: "417",
          label: "No, but my country is on the Working Holiday (417) list",
          status: "stop",
          note: "The 462 isn't available on your passport, but the 417 may be.",
          link: { label: "Working Holiday visa (417)", href: "/visas/other-visas/working-holiday-visa-417" },
        },
        {
          value: "no",
          label: "No",
          status: "stop",
          note: "The 462 isn't available on your passport. Other visas may suit you.",
          link: { label: "Try the visa finder", href: "#finder" },
        },
      ],
    },
    {
      id: "age",
      topic: "Age",
      question: "How old will you be when you lodge?",
      options: [
        { value: "18to30", label: "18 to 30", status: "ok", note: "Lodge before midnight Australian Eastern time on the day before your 31st birthday. Ballot registrations expire when you turn 31." },
        { value: "31plus", label: "31 or over", status: "stop", note: "The age limit is 18 to 30 for every 462 country, so a Work and Holiday visa isn't possible." },
        { value: "under18", label: "Under 18", status: "stop", note: "You must be at least 18 when you apply." },
      ],
    },
    {
      id: "history",
      topic: "Which visa",
      question: "Which Work and Holiday visa would this be?",
      options: [
        {
          value: "first",
          label: "My first: I've never entered Australia on a 462 or 417",
          status: "ok",
          note: "Apply from outside Australia, within your country's cap or after ballot selection, and stay outside until it's granted.",
        },
        {
          value: "second",
          label: "My second or third",
          status: "todo",
          note: "You need 88 calendar days of specified 462 work on your first visa for a second, or 179 calendar days on your second for a third. No cap applies.",
          link: { label: "Count your days", href: "#meter" },
        },
        {
          value: "fourth",
          label: "I've already had three",
          status: "stop",
          note: "There's no fourth Work and Holiday visa. An employer-sponsored, student or skilled visa may suit you.",
          link: { label: "Talk through your options", href: "/bookings" },
        },
      ],
    },
    {
      id: "access",
      topic: "Cap or ballot",
      question: "First visa: which applies to your passport?",
      options: [
        { value: "usa", label: "United States", status: "ok", note: "No cap applies to the United States." },
        {
          value: "ballot",
          label: "China, India or Vietnam",
          status: "todo",
          note: "You can only apply if you registered in the A$25 ballot and were selected. The 2026-27 registrations have closed; unselected registrations stay in the pool until they expire on 30 April 2027.",
        },
        {
          value: "indonesia",
          label: "Indonesia",
          status: "todo",
          note: "Home Affairs has announced that first-visa applications will move to a ballot, with registrations expected to open later in 2026. Check the latest before you apply.",
        },
        {
          value: "cap",
          label: "Another partner country",
          status: "todo",
          note: "Check your country's cap status. Applications open on 2 July each program year, and a cap can be paused or closed during the year.",
          link: { label: "Home Affairs: status of country caps", href: "https://immi.homeaffairs.gov.au/what-we-do/whm-program/status-of-country-caps", external: true },
        },
      ],
    },
    {
      id: "education",
      topic: "Education",
      question: "First visa: do you meet the education requirement for your country?",
      help: "Most countries: a degree, graduate certificate or diploma, or 2 years of undergraduate university study. United States: a senior secondary certificate.",
      options: [
        { value: "yes", label: "Yes", status: "ok", note: "Keep your certificate or academic transcripts ready to upload." },
        {
          value: "not-yet",
          label: "Not yet, or I only have a certificate I to IV",
          status: "stop",
          note: "For most countries, Certificates I to IV and a senior secondary certificate aren't enough. Check the exact rule for your country.",
          link: { label: "See the rule for each country", href: "#detail" },
        },
        {
          value: "unsure",
          label: "I'm not sure",
          status: "todo",
          note: "The rule differs by country: for example Brazil and India need 2 years of post-secondary study, and Malaysia a degree, graduate diploma or graduate certificate.",
          link: { label: "See the rule for each country", href: "#detail" },
        },
      ],
    },
    {
      id: "english",
      topic: "Functional English",
      question: "First visa: how will you show functional English?",
      options: [
        { value: "passport", label: "A UK, US, Canadian, New Zealand or Irish passport", status: "ok", note: "That passport meets the requirement." },
        {
          value: "study",
          label: "Study taught in English",
          status: "ok",
          note: "For example all of primary school and at least 3 years of secondary school, or 5 years of secondary school, taught in English.",
        },
        {
          value: "test",
          label: "A test taken in the 12 months before I apply",
          status: "ok",
          note: "IELTS average 4.5, PTE Academic 30 or Cambridge C1 Advanced 147. A TOEFL iBT result counts only if taken on or before 25 July 2023.",
        },
        {
          value: "old",
          label: "An older test, or no test yet",
          status: "todo",
          note: "Home Affairs doesn't accept a test older than 12 months, even with a higher score. Book a new test.",
          link: { label: "Practise PTE on Learniiz", href: "https://www.learniiz.com", external: true },
        },
      ],
    },
    {
      id: "letter",
      topic: "Letter of support",
      question: "First visa: does your country require a letter of support?",
      help: "Ecuador, Greece, Indonesia, Mongolia, Peru, Poland, San Marino, Slovenia, Thailand and Türkiye need one. Malaysia needs a Good Conduct Certificate.",
      options: [
        { value: "none", label: "No, my country doesn't need one", status: "ok", note: "Nothing to arrange here." },
        { value: "have", label: "Yes, and I have it", status: "ok", note: "Attach it to your application." },
        {
          value: "need",
          label: "Yes, and I don't have it yet",
          status: "todo",
          note: "You must have the letter (or Malaysia's Good Conduct Certificate) before you apply, so ask your government for it early.",
        },
      ],
    },
    {
      id: "children",
      topic: "Children",
      question: "Would dependent children come to Australia with you?",
      options: [
        { value: "no", label: "No", status: "ok", note: "Nothing to sort here. A parent of a child under 18 can't apply online, though." },
        { value: "yes", label: "Yes", status: "stop", note: "Dependent children can't join you in Australia at any time while you hold the visa, even for a day." },
      ],
    },
  ],
  myths: [
    {
      myth: "Every 462 country has a ballot.",
      fact: "No. Only China, India and Vietnam use the ballot, and Home Affairs has announced that Indonesia will move to one. Every country except the United States has an annual cap on first visas.",
    },
    {
      myth: "An old English test with a high score is fine.",
      fact: "No. The test must be taken within the 12 months before you apply. Home Affairs doesn't accept an older test, even with a higher score.",
    },
    {
      myth: "Specified work for the 462 is the same as for the 417.",
      fact: "No. The 462 list is narrower: fishing, pearling and tree farming count only in Northern Australia, and mining isn't on the 462 list. The 88-day and 179-day counting rules are the same.",
    },
    {
      myth: "If I'm not selected in the ballot, I get my A$25 back.",
      fact: "No. The registration fee isn't refunded if you're not selected or if you withdraw. Unselected registrations stay in the pool until they expire on 30 April 2027.",
    },
    {
      myth: "Second and third visas are capped too.",
      fact: "No. Caps apply only to first visas. Second and third Work and Holiday visas have no cap.",
    },
    {
      myth: "A certificate IV counts as a tertiary qualification.",
      fact: "Not for most countries. Certificates I to IV and a senior secondary certificate aren't enough; you need a degree, graduate certificate or diploma, or 2 years of undergraduate university study.",
    },
    {
      myth: "An eVisitor is a handy backup to my Work and Holiday visa.",
      fact: "No. An eVisitor or Transit visa granted after your 462 ends it, along with its work rights. An ETA doesn't end it, but only takes effect after the 462 ends.",
    },
    {
      myth: "My children can visit me for a short holiday.",
      fact: "No. Dependent children can't join you in Australia at any time while you hold the visa, even for a day.",
    },
  ],
  roles: [
    {
      id: "worker",
      label: "I'm the working holiday maker",
      intro: "Your part is meeting your country's rules, a valid application, keeping to your conditions, and proving any specified work.",
      groups: [
        {
          title: "Before you apply",
          items: [
            "Check your country's cap, or register in the [[ballot|ballot]] if you hold a Chinese, Indian or Vietnamese passport",
            "For a first visa: your qualification, an English result from the last 12 months and any [[letter|letter of support]]",
            "Show about A$5,000, plus the fare out",
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
            "Do 88 calendar days of [[specified|specified 462 work]] on your first visa, or 179 on your second",
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
            "Pay under the relevant Australian laws and awards",
            "Give pay slips for every period worked",
            "Put any piece-rate or deduction agreement in writing, signed",
            "Home Affairs may contact you to check specified work claims",
          ],
        },
        {
          title: "The 6-month limit",
          items: [
            "Check whether an exemption applies, such as plant and animal cultivation anywhere in Australia",
            "Otherwise the worker can ask Home Affairs for permission through its online form",
          ],
        },
      ],
    },
  ],
  glossary: [
    {
      id: "ballot",
      term: "Ballot",
      full: "Visa pre-application process",
      definition: "For China, India and Vietnam passport holders: you register in ImmiAccount for A$25 with a national identity card, and only people randomly selected can apply. The fee isn't refunded.",
    },
    {
      id: "cap",
      term: "Annual cap",
      definition: "The limit on first Work and Holiday visas each country gets in a program year (1 July to 30 June). Applications open on 2 July, and a cap can be paused or closed. The United States has no cap.",
    },
    {
      id: "functional",
      term: "Functional English",
      definition: "The English level a first 462 needs: shown by a UK, US, Canadian, New Zealand or Irish passport, by study taught in English, or by a recent test such as IELTS average 4.5.",
    },
    {
      id: "letter",
      term: "Letter of support",
      definition: "A letter from your government that applicants from some countries must get before applying for a first visa: Ecuador, Greece, Indonesia, Mongolia, Peru, Poland, San Marino, Slovenia, Thailand and Türkiye. Malaysia uses a Good Conduct Certificate.",
    },
    {
      id: "specified",
      term: "Specified 462 work",
      definition: "Work in an eligible industry and area that counts towards a second or third 462, such as tourism and hospitality in northern or remote Australia, or farm work and construction in Northern Australia and specified regional areas.",
    },
    {
      id: "northern",
      term: "Northern Australia",
      definition: "The northern areas listed in Home Affairs' postcode tables. For the 462, fishing, pearling and tree farming count as specified work only there.",
    },
    {
      id: "c8547",
      term: "Condition 8547",
      definition: "No more than 6 months with the same employer without written permission, unless an exemption applies. The 6 months restart with each new Working Holiday Maker visa or bridging visa.",
    },
    { id: "c8548", term: "Condition 8548", definition: "You must not study or train for more than 4 months (17 weeks)." },
    {
      id: "bridging",
      term: "Bridging visa",
      definition: "A visa that keeps you lawful in Australia while your next visa is decided, when you apply in Australia.",
    },
    { id: "immiaccount", term: "ImmiAccount", definition: "Home Affairs' online account, where you register for the ballot, lodge your application and pay." },
    {
      id: "program-year",
      term: "Program year",
      definition: "The Work and Holiday visa year, from 1 July to 30 June. Caps reset each program year, and applications open on 2 July.",
    },
  ],
  verifiedExtras: [
    {
      fact: "The education, functional English and letter of support requirements are first Work and Holiday visa criteria: Home Affairs' second Work and Holiday visa page does not list them.",
      source: "https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/work-holiday-462/second-work-holiday-462",
    },
    {
      fact: "Home Affairs' third Work and Holiday visa page does not list the education, functional English or letter of support requirements either.",
      source: "https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/work-holiday-462/third-work-and-holiday-462",
    },
    {
      fact: "All specified subclass 462 work must be paid in accordance with the relevant Australian legislation and awards, and working holiday makers are protected by Australian workplace law.",
      source: "https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/work-holiday-462/specified-462-work",
    },
    {
      fact: "Specified 462 work is counted as full-time equivalent: part-time work counts proportionately, paid public holidays and paid sick days count, unpaid days don't, and work on one calendar day counts as one day at most.",
      source: "https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/work-holiday-462/specified-462-work",
    },
    {
      fact: "If you apply for a second 462 while your first is in effect, and a bridging visa comes into effect while it is decided, specified work on that bridging visa counts towards a third visa.",
      source: "https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/work-holiday-462/specified-462-work",
    },
  ],
  finder: visitorFinder,
  meter: {
    navLabel: "Specified work",
    eyebrow: "Specified work counter",
    title: "Have you done enough specified 462 work?",
    highlight: "enough specified 462 work",
    subtitle: "Count full-time-equivalent calendar days of specified 462 work on your current visa.",
    question: "How many calendar days of full-time-equivalent specified 462 work have you done on this visa?",
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
        body: "A second visa needs at least 88 calendar days of full-time-equivalent [[specified|specified 462 work]] on your first visa. Do it early in the year, and keep every pay slip.",
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
        body: "If this is your second visa, 179 calendar days meets the minimum for a third. If it's your first, you're past the 88 calendar days a second visa needs. There's no fourth Work and Holiday visa.",
      },
    ],
    footnote:
      "Part-time work counts proportionately, paid public holidays and sick days count, unpaid days don't, and work on one calendar day counts as one day at most. The work must be in an eligible industry and area for the 462. Specified work done on a bridging visa while your second visa is decided can count towards a third.",
    link: { label: "Check a postcode", href: "/tools/regional-postcode-checker" },
  },
  fees: {
    variantLabel: "Which visa?",
    variants: [
      { id: "first", label: "First Work and Holiday visa", hint: "Applied for from outside Australia", primary: [{ label: "Visa application charge", amount: 840 }] },
      {
        id: "ballot",
        label: "First visa through the ballot (China, India or Vietnam)",
        hint: "The registration fee is paid even if you're not selected",
        primary: [
          { label: "Ballot registration fee", amount: 25 },
          { label: "Visa application charge, if you're selected", amount: 840 },
        ],
      },
      { id: "later", label: "Second or third Work and Holiday visa", hint: "Applied for in or outside Australia; no cap", primary: [{ label: "Visa application charge", amount: 1000 }] },
    ],
    maxAdults: 0,
    maxChildren: 0,
    notIncluded: "Not included: English tests, health examinations, police certificates, biometrics, translations and health insurance.",
    notes: [
      "Charges from 1 July 2026. You pay for yourself only: no one can be included in a Work and Holiday visa application.",
      "The A$25 ballot fee isn't refunded if you're not selected or if you withdraw.",
      "A paper application for a second or third visa adds a A$80 non-internet charge.",
      "Eligible Papua New Guinea passport holders pay a lower charge from 1 July 2026 (not shown here).",
      "The second or third visa charge is payable again if an eVisitor or Transit visa grant cancelled your visa and you must reapply.",
    ],
    confirmUrl: "https://immi.homeaffairs.gov.au/visas/visa-pricing-estimator",
    confirmLabel: "Home Affairs Visa Pricing Estimator",
  },
  timeline: {
    navLabel: "Your dates",
    eyebrow: "Plan your first year",
    title: "Your first work and holiday, in dates",
    highlight: "in dates",
    subtitle:
      "Pick the month you enter Australia on your first 462. You must enter within 12 months of the grant, and your 12-month stay starts the day you arrive.",
    startLabel: "You enter on your first 462",
    startPrompt: "When do (or did) you enter Australia on your first 462?",
    milestones: [
      {
        months: 3,
        label: "Earliest you could finish 3 months of specified work",
        detail: "If you start full-time [[specified|specified 462 work]] when you arrive, 88 calendar days takes you to about here. Part-time work takes longer.",
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
