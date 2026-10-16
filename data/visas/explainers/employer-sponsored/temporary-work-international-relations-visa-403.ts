import type { VisaExplainer } from "../types";
import { ICON } from "../icons";

// Interactive explainer for the Temporary Work (International Relations) visa
// (subclass 403). Every figure matches data/visas/employer-sponsored.ts
// (checked against Home Affairs and the Migration Regulations on
// 12 October 2026).

const PAGE = "/visas/employer-sponsored/temporary-work-international-relations-visa-403";

export const temporaryWorkInternationalRelations403Explainer: VisaExplainer = {
  slug: "temporary-work-international-relations-visa-403",
  factsAsAt: "12 October 2026",
  oneLiner:
    "A temporary visa for work that supports Australia's international relations. Its main stream, PALM, lets approved employers recruit workers from Pacific island countries and Timor-Leste.",
  bigIdeas: [
    {
      title: "PALM is the main stream",
      body: "Approved employers recruit workers from Pacific island countries and Timor-Leste, for up to 9 months or up to 4 years.",
      icon: ICON.globeAsiaAustralia,
    },
    {
      title: "Two approvals for employers",
      body: "A PALM employer needs approval from DEWR under the PALM scheme, and temporary activities sponsorship from Home Affairs.",
      icon: ICON.buildingOffice2,
    },
    {
      title: "Other streams are government-backed",
      body: "Government agreements, foreign government agencies, diplomats' domestic workers and international representatives.",
      icon: ICON.flag,
    },
  ],
  heroCard: [
    { label: "Who sponsors you", value: "A PALM approved employer (PALM stream)", icon: ICON.buildingOffice2 },
    { label: "How long", value: "Up to 9 months, or 1 to 4 years (PALM)", icon: ICON.clock },
    { label: "Your work", value: "Only for your approved employer and purpose", icon: ICON.briefcase },
    { label: "Where you apply", value: "Outside Australia, with some exceptions", icon: ICON.globeAsiaAustralia },
    { label: "Visa charge", value: "A$365 (PALM); A$470 or nil in other streams", icon: ICON.currencyDollar },
    { label: "Next step", value: "No PR; PALM workers may enter a ballot", icon: ICON.ticket },
  ],
  actors: [
    {
      id: "employer",
      name: "Your PALM employer (the sponsor)",
      short: "Employer",
      icon: ICON.buildingOffice2,
      tone: "pink",
      role: "An Australian employer approved under the PALM scheme that recruits and sponsors you.",
      does: [
        "Gets PALM approved employer status from [[dewr|DEWR]]",
        "Becomes a [[tas|temporary activities sponsor]] (A$420, valid 5 years)",
        "Gets recruitment approval and gives you a [[ral|recruitment approval letter]]",
        "Meets its sponsorship obligations; there's no charge per worker",
      ],
    },
    {
      id: "dewr",
      name: "Employment department (DEWR)",
      short: "DEWR",
      icon: ICON.buildingLibrary,
      tone: "teal",
      role: "Runs the [[palm|PALM scheme]] and approves PALM employers.",
      does: [
        "Approves employers under the PALM scheme",
        "Must approve any change of employer after grant",
        "Takes reports of exploitation, as does the Fair Work Ombudsman",
      ],
    },
    {
      id: "you",
      name: "You (the worker)",
      short: "You",
      icon: ICON.user,
      tone: "green",
      role: "Apply with your recruitment approval letter, then work for your approved employer.",
      does: [
        "Be a citizen and resident of a participating PALM country",
        "Apply from outside Australia with the endorsement number",
        "Hold health insurance for your whole stay",
        "Work only for your approved employer ([[c8611|condition 8611]])",
      ],
    },
    {
      id: "government",
      name: "Department of Home Affairs",
      short: "Home Affairs",
      icon: ICON.shieldCheck,
      tone: "blue",
      role: "Approves the sponsorship and decides your visa.",
      does: [
        "Approves the employer as a [[tas|temporary activities sponsor]]",
        "Assesses your application, health and character",
        "Grants the visa with its conditions",
        "Can cancel a visa for work outside the approved position",
      ],
    },
  ],
  flows: [
    {
      from: "employer",
      to: "dewr",
      label: "PALM approval",
      detail: "The employer applies to [[dewr|DEWR]] to become a PALM approved employer.",
    },
    {
      from: "employer",
      to: "government",
      label: "Becomes a sponsor",
      detail: "Separately, the employer applies to Home Affairs for [[tas|temporary activities sponsorship]]: A$420, valid five years.",
    },
    {
      from: "employer",
      to: "you",
      label: "Offer + letter",
      detail: "For each placement, the employer gets recruitment approval and gives you a [[ral|recruitment approval letter]] with the PALM endorsement number and an offer.",
    },
    {
      from: "you",
      to: "government",
      label: "You apply",
      detail: "You apply online from outside Australia with the sponsor's application ID and the endorsement number.",
    },
    {
      from: "government",
      to: "you",
      label: "Visa granted",
      detail: "Home Affairs grants the visa for your contract, with conditions such as [[c8611|condition 8611]].",
    },
    {
      from: "you",
      to: "employer",
      label: "You work",
      detail: "You work only for your approved employer, then return home when the contract ends.",
    },
  ],
  journeyTitle: "From PALM job offer to the end of your contract",
  journeyHighlight: "end of your contract",
  stages: [
    {
      id: "approve",
      short: "Approve",
      title: "The employer gets both approvals",
      who: ["employer", "dewr"],
      description: "A PALM employer needs two separate approvals before it can recruit you.",
      points: [
        "PALM approved employer status from [[dewr|DEWR]]",
        "[[tas|Temporary activities sponsorship]] from Home Affairs: A$420, valid 5 years",
        "No charge to sponsor each worker after that",
      ],
      youHold: "An employer approved under both the PALM scheme and the Migration Regulations",
      cost: "A$420, paid by the employer",
      icon: ICON.buildingOffice2,
    },
    {
      id: "recruit",
      short: "Recruit",
      title: "Recruitment approval and your offer",
      who: ["employer", "you"],
      description: "Each placement needs its own recruitment approval.",
      points: [
        "The employer gets PALM recruitment approval for the placement",
        "You get a [[ral|recruitment approval letter]] with the PALM endorsement number",
        "You must meet the scheme's minimum age, skills, English and character requirements",
      ],
      youHold: "A recruitment approval letter and an offer of placement",
      icon: ICON.envelopeOpen,
    },
    {
      id: "apply",
      short: "Apply",
      title: "Apply from outside Australia",
      who: ["you", "government"],
      description: "Apply online in ImmiAccount and pay the visa application charge.",
      points: [
        "Use the sponsor's application ID and the endorsement number",
        "Attach health insurance and identity documents",
        "PALM holders offered a long-term contract or an extension can apply in Australia",
      ],
      youHold: "A lodged application",
      cost: "A$365 for the PALM stream",
      icon: ICON.paperAirplane,
    },
    {
      id: "checks",
      short: "Checks",
      title: "Health and character checks",
      who: ["government", "you"],
      description: "Provide what Home Affairs asks for, then wait for the decision.",
      points: ["Health examinations as requested", "Police certificates as requested", "Don't travel until the visa is granted"],
      youHold: "A grant letter with your stay period and conditions",
      icon: ICON.shieldCheck,
    },
    {
      id: "work",
      short: "Work",
      title: "Work for your approved employer",
      who: ["you", "employer"],
      description: "Do the approved job in the approved industry.",
      points: [
        "Work only for your sponsor, or another employer under a DEWR arrangement ([[c8611|condition 8611]])",
        "Short-term contracts: up to 9 months, then at least 3 months outside Australia",
        "Long-term contracts: up to 4 years in total, then 6 months outside Australia",
        "Tell Home Affairs about changes within 14 days ([[c8578|condition 8578]])",
      ],
      youHold: "A subclass 403 visa for your contract",
      icon: ICON.briefcase,
    },
    {
      id: "next",
      short: "Next",
      title: "Go home, or start a new contract",
      who: ["you", "employer"],
      description: "Return home when your contract ends, whatever the visa's length.",
      points: [
        "A new PALM visa is needed to move to a long-term contract, or to extend one",
        "This visa can't be extended",
        "Citizens of participating countries may enter the [[pev|Pacific Engagement visa]] ballot",
      ],
      youHold: "A finished contract and options for what's next",
      icon: ICON.home,
    },
  ],
  check: {
    ok: {
      title: "You look on track",
      body: "Nothing in your answers rules you out. The next step is checking the details: your stream, your letter and your documents.",
    },
    disclaimer: "A general self-check, not advice or a prediction. Your stream's criteria and your full circumstances decide the outcome.",
  },
  quiz: [
    {
      id: "stream",
      topic: "Your stream",
      question: "Which describes you?",
      options: [
        {
          value: "palm",
          label: "A citizen of a participating Pacific country or Timor-Leste, with a PALM job offer",
          status: "ok",
          note: "Likely the [[palm|PALM stream]].",
        },
        {
          value: "gov",
          label: "Working under an agreement between governments, or for a foreign government agency",
          status: "ok",
          note: "Likely the Government Agreement or Foreign Government Agency stream.",
          link: { label: "Check with the stream finder", href: "#finder" },
        },
        { value: "domestic", label: "Doing domestic work for a diplomat", status: "ok", note: "Likely the Domestic Worker (Diplomatic or Consular) stream." },
        { value: "immunities", label: "An international representative recommended by DFAT", status: "ok", note: "Likely the Privileges and Immunities stream." },
        {
          value: "none",
          label: "None of these",
          status: "stop",
          note: "The 403 only covers these situations. Another visa may fit better.",
          link: { label: "Try the visa finder", href: "/tools/visa-finder" },
        },
      ],
    },
    {
      id: "letter",
      topic: "Your letter",
      question: "Do you have the letter your stream needs?",
      help: "PALM: a [[ral|recruitment approval letter]] with the PALM endorsement number. Other streams: a support letter from the agency, school, DFAT or the agreement's signatories.",
      options: [
        { value: "yes", label: "Yes", status: "ok", note: "Include it in your application." },
        { value: "notyet", label: "Not yet", status: "todo", note: "Ask your employer or the supporting agency for it before you apply." },
      ],
    },
    {
      id: "location",
      topic: "Where you apply",
      question: "Where are you now?",
      options: [
        { value: "outside", label: "Outside Australia", status: "ok", note: "You can apply. Stay outside Australia until the visa is decided." },
        {
          value: "palm-onshore",
          label: "In Australia on a PALM, Seasonal Worker Program or Pacific Labour Scheme visa, offered a new contract",
          status: "ok",
          note: "You can apply in Australia while you hold the visa, or within 28 days of it ending. The offer must be a long-term contract, or an extension that keeps your total stay under 4 years.",
        },
        {
          value: "other",
          label: "In Australia on another visa",
          status: "stop",
          note: "You generally must be outside Australia when you apply and when the visa is decided.",
          link: { label: "Get advice", href: "/bookings" },
        },
      ],
    },
    {
      id: "stay",
      topic: "Total time on PALM",
      question: "How long have you already spent in Australia on PALM contracts?",
      options: [
        { value: "first", label: "This is my first contract", status: "ok", note: "Nothing to count yet." },
        { value: "under", label: "Some time, but a new contract keeps my total under 4 years", status: "ok", note: "Long-term workers can't go past 4 years in total." },
        { value: "over", label: "A new contract would take me past 4 years", status: "stop", note: "Long-term PALM workers can't exceed 4 years in total." },
      ],
    },
    {
      id: "break",
      topic: "Break between contracts",
      question: "Since your last PALM contract, have you spent the required time outside Australia?",
      options: [
        { value: "na", label: "Not applicable: this is my first contract", status: "ok", note: "Nothing to check." },
        { value: "yes", label: "Yes: 3 months after a short-term contract, or 6 months after a long-term one", status: "ok", note: "Meets the break rule." },
        {
          value: "no",
          label: "No",
          status: "stop",
          note: "Short-term workers must spend at least 3 months outside Australia, and long-term workers 6 months, before another PALM contract.",
        },
      ],
    },
    {
      id: "insurance",
      topic: "Health insurance",
      question: "Will you hold health insurance for your whole stay?",
      options: [
        { value: "yes", label: "Yes", status: "ok", note: "Keeping it is [[c8501|condition 8501]] on your visa." },
        { value: "notyet", label: "Not arranged yet", status: "todo", note: "Arrange adequate cover before you apply, and keep it for your whole stay." },
      ],
    },
    {
      id: "family",
      topic: "Family",
      question: "Do you want your family to come with you?",
      options: [
        { value: "no", label: "No", status: "ok", note: "Nothing more to arrange." },
        { value: "short", label: "Yes, and I'm on a short-term contract", status: "todo", note: "Short-term PALM workers can't bring family." },
        {
          value: "long",
          label: "Yes, and I'm on a long-term contract",
          status: "todo",
          note: "Only long-term workers selected for the [[family-pilot|family accompaniment pilot]] can have their partner and children apply as subsequent entrants.",
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
      myth: "PALM is a type of labour agreement.",
      fact: "No. PALM is a separate program under the subclass 403, run by the Department of Employment and Workplace Relations. Employers become PALM approved employers and temporary activities sponsors, not parties to a labour agreement.",
    },
    {
      myth: "PALM workers can switch employers freely.",
      fact: "No. Under condition 8611 you must stay with your approved sponsor, or another employer under an arrangement with DEWR. Changing employers without DEWR approval breaches the visa.",
    },
    {
      myth: "If my visa is longer than my contract, I can stay on.",
      fact: "No. You return home when your contract ends, whatever the visa's length. Short-term contracts last up to 9 months.",
    },
    {
      myth: "Every PALM worker can bring their family.",
      fact: "No. Short-term workers can't. Long-term workers selected for the family accompaniment pilot can have their partner and children apply as subsequent entrants.",
    },
    {
      myth: "The 403 leads to permanent residence.",
      fact: "It doesn't. Citizens of participating countries may enter the ballot for the permanent Pacific Engagement visa (subclass 192), and workers in skilled occupations may be nominated for a 482.",
    },
    {
      myth: "Employers pay a charge for each PALM worker.",
      fact: "No. After the A$420 temporary activities sponsorship, there's no charge to sponsor each worker. The employer must still meet its sponsorship obligations.",
    },
  ],
  glossary: [
    {
      id: "palm",
      term: "PALM scheme",
      full: "Pacific Australia Labour Mobility scheme",
      definition: "Lets approved Australian employers recruit workers from participating Pacific island countries and Timor-Leste. Contracts are short-term (up to 9 months) or long-term (1 to 4 years).",
    },
    {
      id: "dewr",
      term: "DEWR",
      full: "Department of Employment and Workplace Relations",
      definition: "The department that runs the PALM scheme. It approves PALM employers, and any change of employer after grant needs its approval.",
    },
    {
      id: "tas",
      term: "Temporary activities sponsor",
      definition: "An organisation approved by Home Affairs to sponsor temporary workers. A PALM employer needs this as well as DEWR approval. It costs A$420 and lasts five years, with no charge per worker.",
    },
    {
      id: "ral",
      term: "Recruitment approval letter",
      definition: "The letter your PALM employer gives you with the PALM endorsement number and your offer of placement. You need it to apply.",
    },
    {
      id: "c8611",
      term: "Condition 8611",
      definition: "PALM: stay employed by your approved sponsor, or another employer under an arrangement with DEWR. Don't work for another sponsor, change employers without DEWR approval, work for yourself or work outside the visa's purpose.",
    },
    {
      id: "c8576",
      term: "Condition 8576",
      definition: "May apply to PALM workers: don't stay in Australia for more than 10 months in any 12-month period.",
    },
    {
      id: "c8578",
      term: "Condition 8578",
      definition: "Tell Home Affairs within 14 days of changes to your address, email, phone, passport details, your employer's address or where you work.",
    },
    { id: "c8501", term: "Condition 8501", definition: "Keep adequate health insurance for your whole stay." },
    {
      id: "family-pilot",
      term: "Family accompaniment pilot",
      definition: "Lets selected long-term PALM workers have their partner and children join them as subsequent entrants. They need the selection notification letter, health and character checks and the visa charge.",
    },
    {
      id: "pev",
      term: "Pacific Engagement visa",
      full: "Subclass 192",
      definition: "A permanent visa allocated by ballot to citizens of participating Pacific countries and Timor-Leste who have a job offer in Australia.",
    },
    {
      id: "dfat",
      term: "DFAT",
      full: "Department of Foreign Affairs and Trade",
      definition: "Supports applications in the Domestic Worker and Privileges and Immunities streams with a letter.",
    },
  ],
  verifiedExtras: [
    {
      fact: "The PALM scheme is a separate program under the subclass 403 visa, run by the Department of Employment and Workplace Relations. Employers become PALM approved employers and temporary activities sponsors rather than parties to a labour agreement.",
      source: "/visas/employer-sponsored/labour-agreements-and-dama",
    },
  ],
  finder: {
    id: "403-streams",
    navLabel: "Your stream",
    eyebrow: "Stream finder",
    title: "Which 403 stream fits?",
    highlight: "403 stream",
    subtitle: "Two taps to the likely stream, and what to check before you rely on it.",
    start: "who",
    questions: [
      {
        id: "who",
        question: "Who is behind your work in Australia?",
        options: [
          { label: "An Australian employer under the PALM scheme", next: "palm" },
          { label: "A government: under an agreement, or a foreign government agency", next: "gov" },
          { label: "A diplomat, an executive or an international organisation", next: "dip" },
        ],
      },
      {
        id: "palm",
        question: "Which fits you?",
        options: [
          { label: "Seasonal work: a short-term contract of up to 9 months", next: "palm-short" },
          { label: "A long-term contract of 1 to 4 years", next: "palm-long" },
          { label: "I'm in Australia on a PALM visa and have been offered a new contract", next: "palm-onshore" },
          { label: "I'm not a citizen of a participating PALM country", next: "not-palm" },
        ],
      },
      {
        id: "gov",
        question: "Which fits you?",
        options: [
          { label: "Work under a bilateral agreement between governments", next: "agreement" },
          { label: "Representing a foreign government agency, such as a trade office or tourist bureau", next: "agency" },
          { label: "Teaching a language in an Australian school for a foreign government", next: "agency" },
        ],
      },
      {
        id: "dip",
        question: "Which fits you?",
        options: [
          { label: "Full-time domestic work in a diplomat's household", next: "domestic" },
          { label: "Domestic work for a senior foreign executive who isn't a diplomat", next: "to408" },
          { label: "Representing an international organisation or overseas mission, with DFAT support", next: "immunities" },
        ],
      },
    ],
    outcomes: [
      {
        id: "palm-short",
        title: "PALM stream: short-term contract",
        body: "For seasonal work of up to 9 months with a PALM approved employer. You leave when the contract ends, and spend at least 3 months outside Australia before another PALM contract.",
        watch: [
          "You need a [[ral|recruitment approval letter]] with the PALM endorsement number",
          "Short-term workers can't bring family",
          "[[c8576|Condition 8576]] may limit you to 10 months in any 12-month period",
        ],
        href: PAGE,
      },
      {
        id: "palm-long",
        title: "PALM stream: long-term contract",
        body: "For contracts of 1 to 4 years with a PALM approved employer. Your total stay can't go past 4 years, and you spend 6 months outside Australia after each long-term contract.",
        watch: [
          "Family can come only if you're selected for the [[family-pilot|family accompaniment pilot]]",
          "Changing employer needs DEWR approval",
        ],
        href: PAGE,
      },
      {
        id: "palm-onshore",
        title: "PALM stream: applying in Australia",
        body: "You can apply in Australia if you hold, or held in the last 28 days, a PALM, Seasonal Worker Program or Pacific Labour Scheme visa. You need an offer of a long-term contract or an extension, and your total stay must stay under 4 years.",
        watch: ["You still need a recruitment approval letter for the new placement"],
        href: PAGE,
      },
      {
        id: "not-palm",
        title: "The PALM stream isn't open to you",
        body: "The PALM stream is only for citizens and residents of participating Pacific island countries and Timor-Leste. If an Australian employer wants to sponsor you for a skilled job, a Skills in Demand visa (subclass 482) may fit.",
        href: "/visas/employer-sponsored/skills-in-demand-visa-482",
        tone: "stop",
      },
      {
        id: "agreement",
        title: "Government Agreement stream",
        body: "For work under a bilateral agreement between the Australian Government, or a state or territory government, and a foreign government. The agreement's signatories support you, and stays are up to 4 years.",
        watch: ["You must meet any licensing or registration requirements", "Confirm the charge in the Visa Pricing Estimator"],
        href: PAGE,
      },
      {
        id: "agency",
        title: "Foreign Government Agency stream",
        body: "For representatives of a foreign government agency without official status in Australia, such as a tourist bureau, trade office or cultural institute. It also covers language teachers a foreign government employs in an Australian school. Stays are up to 4 years.",
        watch: ["The agency must support you; for language teaching, an Australian school must too"],
        href: PAGE,
      },
      {
        id: "domestic",
        title: "Domestic Worker (Diplomatic or Consular) stream",
        body: "For full-time domestic work in the household of a Diplomatic (subclass 995) visa holder, with the support of DFAT. The first visa is for up to 12 months.",
        watch: ["You must be 18 or over, with a contract that meets Australian workplace law", "Apply from outside Australia for your first visa"],
        href: PAGE,
      },
      {
        id: "immunities",
        title: "Privileges and Immunities stream",
        body: "For international representatives who have, or expect to have, privileges and immunities under the 1963 or 1995 Acts, with a DFAT letter recommending the visa. There's no visa charge.",
        watch: ["The stay is the period DFAT supports"],
        href: PAGE,
      },
      {
        id: "to408",
        title: "Temporary Activity visa (subclass 408), Domestic work for executives stream",
        body: "Domestic work for a senior foreign executive uses the 408 instead. The executive must hold a 403 Privileges and Immunities visa, or a 482 as national managing director or state manager.",
        watch: ["You must be an experienced domestic worker aged 18 or over"],
        href: "/visas/employer-sponsored/temporary-activity-visa-408",
      },
    ],
    footnote: "A general guide, not advice. The supporting letters and the full stream criteria decide which stream fits.",
  },
  fees: {
    variantLabel: "Which stream?",
    variants: [
      {
        id: "palm",
        label: "PALM stream",
        hint: "A lower charge applies to eligible Pacific Island and Timor-Leste passport holders",
        primary: [{ label: "Base application charge (you)", amount: 365 }],
        sponsor: {
          heading: "Your employer pays",
          lines: [{ label: "Temporary activities sponsorship (valid 5 years)", amount: 420, per: "once" }],
          note: "There's no charge to sponsor each worker.",
        },
      },
      {
        id: "agreement",
        label: "Government Agreement stream",
        primary: [{ label: "Base application charge (you)", amount: 470 }],
      },
      {
        id: "agency",
        label: "Foreign Government Agency stream",
        primary: [{ label: "Base application charge (you)", amount: 470 }],
        adult: [{ label: "Each additional applicant aged 18 or over", amount: 470 }],
        child: [{ label: "Each additional applicant under 18", amount: 120 }],
      },
      {
        id: "domestic",
        label: "Domestic Worker (Diplomatic or Consular) stream",
        primary: [{ label: "Base application charge (you)", amount: 470 }],
      },
      {
        id: "immunities",
        label: "Privileges and Immunities stream",
        primary: [{ label: "Base application charge (you)", amount: 0 }],
      },
    ],
    maxAdults: 3,
    maxChildren: 6,
    notIncluded: "Not included: health insurance, health examinations and police certificates.",
    notes: [
      "Family charges are stated only for the Foreign Government Agency stream (A$470 per adult, A$120 per child), so the other streams show the main applicant only.",
      "Confirm the PALM and Government Agreement charges in the Visa Pricing Estimator.",
      "A lower charge applies to eligible Pacific Island and Timor-Leste passport holders.",
    ],
    confirmUrl: "https://immi.homeaffairs.gov.au/visas/visa-pricing-estimator",
    confirmLabel: "Home Affairs Visa Pricing Estimator",
  },
};
