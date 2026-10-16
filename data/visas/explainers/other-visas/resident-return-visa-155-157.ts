import type { VisaExplainer } from "../types";
import { ICON } from "../icons";

// Interactive explainer for the Resident Return visa (subclasses 155 and 157).
// Every fact matches data/visas/other-visas-resident.ts (checked against Home
// Affairs on 12 October 2026). The meter bands follow the page exactly: 730
// days in the 5 years before lodgement for the 5-year facility; below that,
// 12 months (ties or family unit) or 3 months (subclass 157).

export const residentReturnVisa155157Explainer: VisaExplainer = {
  slug: "resident-return-visa-155-157",
  factsAsAt: "12 October 2026",
  oneLiner:
    "A Resident Return visa renews your travel facility so you can leave Australia and come back as a permanent resident. How long it lasts depends on your days here in the last 5 years.",
  bigIdeas: [
    { title: "Your PR doesn't expire", body: "Only your travel facility does. While you stay in Australia, you remain a permanent resident.", icon: ICON.home },
    { title: "730 days sets the length", body: "730 days here in the last 5 years gets you 5 years of travel. Fewer can mean 12 months or 3 months.", icon: ICON.calendarDays },
    { title: "Timing matters", body: "Days count back from the day you lodge. Lodge too early and you get a shorter facility, with no refund.", icon: ICON.clock },
  ],
  heroCard: [
    { label: "What it does", value: "Renews your travel facility as a permanent resident", icon: ICON.paperAirplane },
    { label: "Travel facility", value: "5 years, 12 months or 3 months from grant", icon: ICON.calendarDays },
    { label: "The 730-day rule", value: "730 days here in the last 5 years: a 5-year facility", icon: ICON.clock },
    { label: "Where you apply", value: "In or outside Australia", icon: ICON.globeAsiaAustralia },
    { label: "Family", value: "Each person applies and pays separately", icon: ICON.userGroup },
    { label: "Cost", value: "A$1,475 per applicant, online", icon: ICON.currencyDollar },
  ],
  actors: [
    {
      id: "you",
      name: "You (the permanent resident)",
      short: "You",
      icon: ICON.user,
      tone: "green",
      role: "A permanent resident, former permanent resident or former citizen who wants to travel and return as a permanent resident.",
      does: [
        "Check your [[travel-facility|travel facility]] in [[vevo|VEVO]]",
        "Count your days in Australia in the last 5 years",
        "Apply and pay A$1,475, with evidence where needed",
        "Travel within your new facility",
      ],
    },
    {
      id: "government",
      name: "Department of Home Affairs",
      short: "Home Affairs",
      icon: ICON.buildingLibrary,
      tone: "blue",
      role: "Decides your application and the length of your new travel facility.",
      does: [
        "Assesses you for [[sc155|subclass 155]] first, then [[sc157|subclass 157]]",
        "Looks at your days here, or your [[ties|ties]] and reasons for being away",
        "May grant without documents if you meet the residence test and your details haven't changed",
        "Emails a reminder 60 days before your facility expires, if it has your email and no RRV is pending",
      ],
    },
    {
      id: "family",
      name: "Your family members",
      short: "Family",
      icon: ICON.userGroup,
      tone: "teal",
      role: "Each family member needs their own RRV application.",
      does: [
        "Apply and pay A$1,475 each",
        "Can be processed with you if you declare the applications",
        "May get 12 months as a [[family-unit|member of your family unit]]",
      ],
    },
  ],
  flows: [
    {
      from: "you",
      to: "government",
      label: "You apply",
      detail: "You apply online, in or outside Australia, and pay A$1,475. Home Affairs looks at your days here as a permanent resident or citizen in the 5 years before you lodge.",
    },
    {
      from: "family",
      to: "government",
      label: "Family apply separately",
      detail: "Family members can't be included in your [[rrv|RRV]] application. Each lodges and pays separately; declare the applications so they can be processed together.",
    },
    {
      from: "government",
      to: "you",
      label: "New travel facility",
      detail: "Home Affairs grants a new [[travel-facility|travel facility]] of 5 years, 12 months or 3 months, starting on the grant date.",
    },
    {
      from: "government",
      to: "family",
      label: "12 months as family",
      detail: "A family member who can't meet the residence or ties tests may get a 12-month facility as a [[family-unit|member of your family unit]].",
    },
  ],
  journeyTitle: "From an expiring facility to travelling again",
  journeyHighlight: "travelling again",
  stages: [
    {
      id: "check",
      short: "Check",
      title: "Check your travel facility",
      who: ["you"],
      description: "Your permanent visa shows a 'must not arrive after' date in [[vevo|VEVO]]. That's when your [[travel-facility|travel facility]] ends.",
      points: [
        "If it covers your trip, you don't need an RRV yet",
        "Home Affairs emails a reminder 60 days before it expires, if it has your email",
        "In Australia when it expires? You're still a permanent resident",
      ],
      youHold: "The expiry date of your current travel facility",
      icon: ICON.calendarDays,
    },
    {
      id: "count",
      short: "Count",
      title: "Count your days in Australia",
      who: ["you"],
      description: "Count your days in Australia as a permanent resident or citizen in the 5 years before the day you'll lodge.",
      points: [
        "730 days or more: the 5-year facility",
        "Arrival and departure days both count; a part day counts as a full day",
        "Close to 730? Lodging later may get you 5 years instead of 12 months",
        "Not sure? Request your [[movement|international movement records]]",
      ],
      youHold: "A day count and the option you'll rely on",
      icon: ICON.calculator,
    },
    {
      id: "evidence",
      short: "Evidence",
      title: "Gather your evidence",
      who: ["you"],
      description: "If you meet the residence test, your name and date of birth haven't changed and you meet character, you may be granted without documents. Everyone else should attach evidence when they lodge.",
      points: [
        "[[ties|Substantial ties]]: business, cultural, employment or personal, with documents",
        "A statement and documents for any absence of 5 years or more",
        "Relationship documents if you rely on a family member's RRV",
      ],
      youHold: "A complete document set",
      icon: ICON.documentText,
    },
    {
      id: "apply",
      short: "Apply",
      title: "Apply online and pay",
      who: ["you"],
      description: "Apply in ImmiAccount, in or outside Australia, but not in [[clearance|immigration clearance]]. Don't buy tickets until the visa is granted.",
      points: [
        "A$1,475 per applicant",
        "Paper only if Home Affairs authorises it, for A$80 more",
        "Family members lodge their own applications",
      ],
      youHold: "A lodged application and a transaction reference number",
      cost: "A$1,475 per applicant",
      icon: ICON.paperAirplane,
    },
    {
      id: "decide",
      short: "Decision",
      title: "Home Affairs decides",
      who: ["government"],
      description: "Home Affairs assesses you against [[sc155|subclass 155]] first and then [[sc157|subclass 157]]. Keep your passport details up to date.",
      points: [
        "5 years: you meet the residence test",
        "12 months: substantial ties, or family of an RRV holder",
        "3 months: subclass 157, for compelling and compassionate reasons",
        "Must travel urgently before a decision? Contact Home Affairs",
      ],
      youHold: "A grant letter stating your new travel facility",
      icon: ICON.checkBadge,
    },
    {
      id: "travel",
      short: "Travel",
      title: "Travel within your new facility",
      who: ["you"],
      description: "Your new facility starts on the grant date and replaces any time left on the old one. Travel in and out as often as you like until it ends.",
      points: [
        "It can't be extended or carried over",
        "Travelling after it ends needs another RRV",
        "Once you meet the residence requirement, citizenship ends the need for RRVs",
      ],
      youHold: "A permanent visa with a travel facility of 5 years, 12 months or 3 months",
      icon: ICON.globeAsiaAustralia,
    },
  ],
  check: {
    ok: {
      title: "You look on track",
      body: "Nothing in your answers rules you out. The next step is counting your days exactly and choosing the right day to lodge.",
    },
  },
  quiz: [
    {
      id: "status",
      topic: "Your status",
      question: "Which describes you?",
      options: [
        { value: "pr", label: "I hold a permanent visa", status: "ok", note: "You can apply. An RRV renews your travel facility so you can return as a permanent resident." },
        {
          value: "former-pr",
          label: "I'm a former permanent resident and my last permanent visa wasn't cancelled",
          status: "ok",
          note: "You can apply. Former permanent residents are covered if their most recent permanent visa wasn't cancelled.",
        },
        { value: "former-citizen", label: "I'm a former Australian citizen", status: "ok", note: "Former citizens who lost or renounced citizenship can apply." },
        { value: "citizen", label: "I'm an Australian citizen", status: "stop", note: "Current Australian citizens can't apply for an RRV and don't need one." },
        {
          value: "cancelled",
          label: "My last permanent visa was cancelled",
          status: "stop",
          note: "A former permanent resident whose most recent permanent visa was cancelled isn't eligible.",
          link: { label: "Talk through your options", href: "/bookings" },
        },
      ],
    },
    {
      id: "days",
      topic: "Days in Australia",
      question: "In the 5 years before you'll lodge, how long were you in Australia as a permanent resident or citizen?",
      options: [
        { value: "enough", label: "730 days or more", status: "ok", note: "You meet the residence test for the 5-year travel facility." },
        {
          value: "under",
          label: "Fewer than 730 days",
          status: "todo",
          note: "You may get 12 months through [[ties|substantial ties]] or as a family member of an RRV holder, or 3 months on [[sc157|subclass 157]].",
          link: { label: "Try the 730-day meter", href: "#meter" },
        },
        {
          value: "unsure",
          label: "I'm not sure",
          status: "todo",
          note: "Request your international movement records and count carefully. Lodging too early can cost you the 5-year facility, with no refund.",
          link: { label: "Try the 730-day meter", href: "#meter" },
        },
      ],
    },
    {
      id: "ties",
      topic: "Ties to Australia",
      question: "If you have fewer than 730 days, do you have substantial ties of benefit to Australia?",
      help: "Business, cultural, employment or personal ties, such as an Australian job or business, or Australian citizen children living here.",
      options: [
        { value: "na", label: "I have 730 days, so this doesn't apply", status: "ok", note: "Ties only matter if you don't meet the residence test." },
        { value: "yes", label: "Yes, and I can document them", status: "ok", note: "Ties must be both substantial and of benefit to Australia. Attach documents when you lodge, not just a statement." },
        {
          value: "family",
          label: "Only family relationships",
          status: "todo",
          note: "Family relationships alone may not be enough. Show other ties if you can, or check whether you qualify as a member of an RRV holder's family unit.",
        },
        {
          value: "none",
          label: "No real ties",
          status: "stop",
          note: "Without the residence test or ties, you'd need the family unit option, or compelling and compassionate reasons for a 3-month subclass 157.",
          link: { label: "Talk through your options", href: "/bookings" },
        },
      ],
    },
    {
      id: "absence",
      topic: "Long absences",
      question: "Have you been away from Australia for 5 continuous years or more?",
      options: [
        { value: "no", label: "No", status: "ok", note: "No long-absence test to worry about." },
        {
          value: "compelling",
          label: "Yes, for reasons such as illness, work, study or legal proceedings",
          status: "todo",
          note: "You'll need compelling reasons, with a statement and documents explaining the absence.",
        },
        {
          value: "no-reason",
          label: "Yes, without a compelling reason",
          status: "stop",
          note: "Absences of 5 continuous years need compelling reasons. Get advice before you lodge; a Former Resident visa may be worth checking.",
          link: { label: "Former Resident visa", href: "/visas/other-visas/former-resident-visa-151" },
        },
      ],
    },
    {
      id: "business",
      topic: "Business visa history",
      question: "Have you held a business skills visa that was cancelled or under a notice of intention to cancel?",
      help: "For example a subclass 188 or 888 visa, whether you held it yourself or as a family member.",
      options: [
        { value: "no", label: "No", status: "ok", note: "Nothing to check here." },
        {
          value: "yes",
          label: "Yes",
          status: "stop",
          note: "You can't make a valid RRV application in that situation. Get advice first.",
          link: { label: "Book a consultation", href: "/bookings" },
        },
      ],
    },
    {
      id: "nz",
      topic: "New Zealand citizens",
      question: "Are you a New Zealand citizen?",
      options: [
        { value: "no", label: "No", status: "ok", note: "Nothing extra to check." },
        {
          value: "pr",
          label: "Yes, and I hold an Australian permanent visa",
          status: "todo",
          note: "At the border, say you hold a permanent visa and don't want a [[scv|Special Category visa]]: an SCV grant would cease your permanent visa.",
        },
        {
          value: "pre-1994",
          label: "Yes, I arrived before 1 September 1994 and usually lived here",
          status: "todo",
          note: "You may be treated as a former permanent resident and able to apply for an RRV.",
        },
        {
          value: "scv",
          label: "Yes, I arrived later and have never held a permanent visa",
          status: "stop",
          note: "You don't need an RRV. You can use the Special Category visa, and since 1 July 2023 you may be able to apply directly for citizenship.",
          link: { label: "Special Category visa", href: "/visas/other-visas/special-category-visa-444" },
        },
      ],
    },
    {
      id: "timing",
      topic: "Timing",
      question: "When do you need to travel?",
      options: [
        {
          value: "covered",
          label: "My current facility still covers the trip",
          status: "ok",
          note: "You may not need an RRV yet. If you lodged one you don't need, you may wish to withdraw it.",
        },
        {
          value: "soon",
          label: "Soon, and my facility has expired or will expire",
          status: "todo",
          note: "Apply now and don't buy tickets until it's granted. If you must travel urgently before a decision, contact Home Affairs.",
        },
        {
          value: "overseas",
          label: "I'm overseas and my facility has expired",
          status: "todo",
          note: "Get the RRV before you board a flight to Australia. Coming back on a visitor visa or ETA instead can affect Medicare, work rights and your residence for citizenship.",
        },
      ],
    },
  ],
  myths: [
    {
      myth: "My permanent residence expires after 5 years.",
      fact: "No. Your permanent visa stays valid while you remain in Australia and it isn't cancelled. Only the travel facility expires; you need an RRV if you want to travel and return as a permanent resident.",
    },
    {
      myth: "I should apply as early as I can.",
      fact: "Not if you're close to 730 days. The 5 years count back from the day you lodge. Lodge early with fewer than 730 days and you only get 12 months, with no refund.",
    },
    {
      myth: "I can add my family to my RRV application.",
      fact: "No. Each family member applies and pays separately. Applications lodged at the same time can be processed together if you declare them.",
    },
    {
      myth: "An RRV adds time to my current travel facility.",
      fact: "It doesn't. The new facility starts on the grant date and replaces what was left; the unused balance is lost and not refunded. It also can't be extended.",
    },
    {
      myth: "Coming back on a visitor visa or ETA is just as good.",
      fact: "It can affect Medicare, work rights and your ability to meet the residence requirements for citizenship or a later RRV. Get the RRV before you fly.",
    },
    {
      myth: "Family ties alone are enough for the 12-month facility.",
      fact: "Ties must be both substantial and of benefit to Australia. Family relationships alone may not be enough, and documents count for more than a statement.",
    },
    {
      myth: "There's a limit on how many RRVs I can get.",
      fact: "There's no limit, but each one is assessed afresh against the residence or ties tests.",
    },
    {
      myth: "New Zealand citizens with PR can just take an SCV at the border.",
      fact: "An SCV grant would cease the permanent visa. Tell the border officer you hold a permanent visa and don't want a Special Category visa.",
    },
  ],
  glossary: [
    {
      id: "rrv",
      term: "RRV",
      full: "Resident Return visa",
      definition: "A permanent visa (subclass 155 or 157) that gives you a new travel facility. It lets permanent residents, former permanent residents and former citizens return to Australia as permanent residents.",
    },
    {
      id: "travel-facility",
      term: "Travel facility",
      definition: "The period in which you can leave and re-enter Australia as a permanent resident. VEVO shows its end as your 'must not arrive after' date.",
    },
    {
      id: "sc155",
      term: "Subclass 155",
      full: "Five Year Resident Return visa",
      definition: "Gives a 5-year facility if you meet the residence test, or 12 months if you rely on substantial ties or on a family member's RRV.",
    },
    {
      id: "sc157",
      term: "Subclass 157",
      full: "Three Month Resident Return visa",
      definition: "For people who were in Australia as a permanent resident at some point in the last 5 years, but for less than 2 years. You need compelling and compassionate reasons for your absence. The facility is 3 months.",
    },
    {
      id: "ties",
      term: "Substantial ties",
      definition: "Business, cultural, employment or personal ties that are both substantial and of benefit to Australia. Examples include an Australian job or business, or Australian citizen children living here.",
    },
    {
      id: "family-unit",
      term: "Member of the family unit",
      definition: "For example your partner or child. A member of the family unit of an RRV holder (or of someone who has lodged an RRV application) may get a 12-month facility.",
    },
    {
      id: "vevo",
      term: "VEVO",
      full: "Visa Entitlement Verification Online",
      definition: "The Home Affairs online check that shows your visa and its 'must not arrive after' date.",
    },
    {
      id: "clearance",
      term: "Immigration clearance",
      definition: "The border check when you arrive in Australia. You can't apply for an RRV while you're in it.",
    },
    {
      id: "movement",
      term: "International movement records",
      definition: "The record of your arrivals in and departures from Australia. Request them if you're unsure how many days you've spent here.",
    },
    {
      id: "scv",
      term: "SCV",
      full: "Special Category visa (subclass 444)",
      definition: "The temporary visa most New Zealand citizens get on arrival. If you hold a permanent visa, an SCV grant would cease it.",
    },
  ],
  cta: {
    title: "Ready to talk about your Resident Return visa?",
  },
  meter: {
    navLabel: "730-day check",
    eyebrow: "Residence meter",
    title: "How many days have you spent here in the last 5 years?",
    highlight: "in the last 5 years",
    subtitle: "Slide to your days in Australia as a permanent resident or citizen. The count decides how long your new travel facility can be.",
    question: "Days in Australia as a permanent resident or citizen in the 5 years before the day you'll lodge",
    unit: "days",
    min: 0,
    max: 1826,
    step: 1,
    initial: 365,
    marks: [
      { at: 0, label: "0" },
      { at: 730, label: "730 days" },
      { at: 1826, label: "All 5 years" },
    ],
    bands: [
      {
        from: 0,
        status: "stop",
        title: "No days here as a permanent resident or citizen",
        body: "The 5-year facility and the 3-month [[sc157|subclass 157]] both need time in Australia as a permanent resident in the last 5 years. You may still get 12 months through [[ties|substantial ties]] of benefit to Australia, or as a [[family-unit|member of the family unit]] of an RRV holder. Absences of 5 continuous years need compelling reasons.",
      },
      {
        from: 1,
        status: "todo",
        title: "Under 730 days: a shorter facility",
        body: "Below 730 days you can't get the 5-year facility. You may get 12 months through [[ties|substantial ties]] of benefit to Australia, or as a family member of an RRV holder. Or you may get 3 months on [[sc157|subclass 157]], with compelling and compassionate reasons for your absence. Close to 730? Lodging later may get you 5 years, and there's no refund if you lodge too early.",
      },
      {
        from: 730,
        status: "ok",
        title: "730 days or more: the 5-year facility",
        body: "You meet the residence test, so the likely result is a 5-year [[travel-facility|travel facility]] from the grant date, if you meet the other requirements. The 5 years count back from the day you lodge, not the decision.",
      },
    ],
    footnote: "Only days as a permanent resident or citizen count. Arrival and departure days both count, and a part day counts as a full day. Not sure? Request your international movement records.",
    link: { label: "Home Affairs: Resident Return visa", href: "https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/resident-return-visa-155-157", external: true },
  },
  fees: {
    variants: [
      {
        id: "rrv",
        label: "Resident Return visa (155 or 157)",
        hint: "Per applicant, applying online",
        primary: [{ label: "Base application charge", amount: 1475 }],
      },
    ],
    maxAdults: 0,
    maxChildren: 0,
    addOns: [
      {
        id: "paper",
        label: "Paper application",
        hint: "Only if Home Affairs authorises it, for example after an ImmiAccount technical problem",
        amount: 80,
        per: "application",
      },
    ],
    notIncluded: "Not included: police certificates, which you only need if Home Affairs asks for them.",
    notes: [
      "You can't include family members: each person applies and pays A$1,475 separately.",
      "No refund if you're refused, lose time left on your old facility, don't use the new one, or lodge before meeting the residence test and get 12 months.",
      "A lower charge applies from 1 July 2026 to holders of a passport from a listed Pacific Island country or Timor-Leste. Check the Visa Pricing Estimator.",
    ],
    confirmUrl: "https://immi.homeaffairs.gov.au/visas/visa-pricing-estimator",
    confirmLabel: "Home Affairs Visa Pricing Estimator",
  },
};
