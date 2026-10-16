import type { VisaExplainer } from "../types";
import { ICON } from "../icons";
import { employerFinder } from "./employer-finder";

// Interactive explainer for the Employer Nomination Scheme visa (subclass 186).
// Every figure matches data/visas/employer-sponsored.ts (checked against Home
// Affairs and the Migration Regulations on 12 October 2026). The A$4,890
// second instalment was re-read on the Home Affairs 186 stream pages on
// 13 October 2026.

export const employerNominationScheme186Explainer: VisaExplainer = {
  slug: "employer-nomination-scheme-visa-186",
  factsAsAt: "12 October 2026",
  oneLiner:
    "A permanent visa for skilled workers nominated by an Australian employer: after 2 years on a 482 with your sponsor, or straight away with a skills assessment and 3 years of experience.",
  bigIdeas: [
    {
      title: "An employer nominates you",
      body: "Your employer nominates you for a genuine full-time role that's ongoing for at least 2 years. No nomination, no 186.",
      icon: ICON.buildingOffice2,
    },
    {
      title: "Three ways in",
      body: "After 2 years on a 482 (TRT), with a skills assessment and 3 years' experience (Direct Entry), or under a labour agreement.",
      icon: ICON.arrowsRightLeft,
    },
    {
      title: "Permanent from the start",
      body: "You're a permanent resident from grant, or from first entry if you're overseas, with a path to Australian citizenship.",
      icon: ICON.home,
    },
  ],
  heroCard: [
    { label: "Who nominates you", value: "An Australian employer, for a full-time role", icon: ICON.buildingOffice2 },
    { label: "How long", value: "Permanent (travel facility for 5 years)", icon: ICON.clock },
    { label: "Age", value: "Under 45 when you apply, unless exempt", icon: ICON.cake },
    { label: "English", value: "Competent: IELTS 6 in each band, or equivalent", icon: ICON.chatBubbleLeftRight },
    { label: "Next step", value: "Citizenship after 4 years' lawful residence", icon: ICON.flag },
    { label: "Visa charge", value: "From A$6,140", icon: ICON.currencyDollar },
  ],
  actors: [
    {
      id: "employer",
      name: "Your employer (the nominator)",
      short: "Employer",
      icon: ICON.buildingOffice2,
      tone: "pink",
      role: "Nominates you for a genuine, full-time position and pays the nomination costs.",
      does: [
        "Lodges the [[nomination]] for a full-time role that's ongoing for at least 2 years",
        "Pays at least the [[amsr|market rate]] and the [[csit|CSIT]] of A$79,423",
        "Pays A$540 to nominate (nil in [[regional|regional Australia]]) plus the [[saf|SAF levy]]",
        "Must be your most recent sponsor in the [[trt|TRT stream]]",
      ],
    },
    {
      id: "you",
      name: "You (the worker)",
      short: "You",
      icon: ICON.user,
      tone: "green",
      role: "Apply for permanent residence within 6 months of the nomination being approved.",
      does: [
        "Qualify through a stream: [[trt|TRT]], [[direct-entry|Direct Entry]] or a labour agreement",
        "Be under 45 when you apply, unless you're exempt",
        "Show [[competent-english|Competent English]]",
        "Lodge the application and pay from A$6,140",
      ],
    },
    {
      id: "government",
      name: "Department of Home Affairs",
      short: "Home Affairs",
      icon: ICON.buildingLibrary,
      tone: "blue",
      role: "Checks the nomination and your application, then decides the visa.",
      does: [
        "Approves the employer's [[nomination]]",
        "Assesses your stream, age, English, health and character",
        "Invoices any [[second-instalment|second instalment]] before grant",
        "Grants permanent residence",
      ],
    },
  ],
  flows: [
    {
      from: "employer",
      to: "government",
      label: "Nominates the role",
      detail: "Your employer lodges the [[nomination]]: a genuine full-time role, ongoing for at least 2 years, paid at least the market rate. It pays the nomination charge and the [[saf|SAF levy]].",
    },
    {
      from: "you",
      to: "government",
      label: "You apply",
      detail: "Within 6 months of the nomination's approval, you apply with your stream evidence, [[competent-english|Competent English]] and the nomination's reference number.",
    },
    {
      from: "government",
      to: "you",
      label: "PR granted",
      detail: "Home Affairs checks your stream, age, English, health and character, invoices any [[second-instalment|second instalment]], then grants permanent residence.",
    },
    {
      from: "you",
      to: "employer",
      label: "You start work",
      detail: "You start work within 6 months of grant or entry. Home Affairs expects you to stay with your employer for at least 2 years.",
    },
  ],
  journeyTitle: "From nomination to permanent residence",
  journeyHighlight: "permanent residence",
  stages: [
    {
      id: "stream",
      short: "Stream",
      title: "Work out your stream",
      who: ["you", "employer"],
      description: "The 186 has three streams. Which one fits depends on your work history, your skills and your employer.",
      points: [
        "[[trt|TRT]]: 2 years of full-time sponsored work on a 482 or 457 in the last 3 years",
        "[[direct-entry|Direct Entry]]: a positive skills assessment and 3 years of experience in a [[csol|Core Skills]] occupation",
        "Labour agreement: the terms of your employer's agreement",
      ],
      youHold: "A clear idea of your stream and what it needs",
      icon: ICON.map,
    },
    {
      id: "nominate",
      short: "Nominate",
      title: "Your employer lodges the nomination",
      who: ["employer"],
      description: "The employer shows the business is operating and the role is genuine, full-time and ongoing for at least 2 years.",
      points: [
        "Salary at least the [[amsr|market rate]] (if under A$250,000) and the [[csit|CSIT]] of A$79,423",
        "A$540 nomination charge, or nil for a position in [[regional|regional Australia]]",
        "[[saf|SAF levy]]: a one-off A$3,000 or A$5,000, by turnover",
        "The SAF levy can't be passed on to you",
      ],
      youHold: "A nomination reference number (TRN), then an approval letter",
      cost: "A$540 (nil if regional) plus the SAF levy, paid by the employer",
      icon: ICON.documentText,
    },
    {
      id: "prepare",
      short: "Prepare",
      title: "You gather your evidence",
      who: ["you"],
      description: "While the nomination is assessed, you get the evidence for your stream ready.",
      points: [
        "TRT: payslips, PAYG summaries and leave records covering the 2 years",
        "Direct Entry: a positive skills assessment and references for 3 years of experience",
        "[[competent-english|Competent English]]: IELTS 6 in each band (or equivalent) within 3 years, or an exempt passport",
        "Evidence of an [[lin19216|age exemption]] if you're 45 or over",
      ],
      youHold: "Stream evidence and a Competent English result",
      cost: "Tests and assessments, paid by you",
      icon: ICON.clipboardDocumentCheck,
    },
    {
      id: "apply",
      short: "Apply",
      title: "You apply within 6 months",
      who: ["you", "government"],
      description: "Apply online, in or outside Australia, within 6 months of the nomination being approved.",
      points: [
        "A$6,140 for you, A$3,070 per adult and A$1,535 per child",
        "In Australia you need a visa, or a Bridging visa A, B or C",
        "Home Affairs may ask for health checks, police certificates or, in the TRT stream, a skills assessment",
      ],
      youHold: "A lodged application, and a bridging visa if you're in Australia",
      cost: "From A$6,140, paid by you",
      icon: ICON.paperAirplane,
    },
    {
      id: "instalment",
      short: "Instalment",
      title: "Pay the second instalment, if it applies",
      who: ["government", "you"],
      description: "If an adult family member can't show [[functional-english|Functional English]], Home Affairs invoices a [[second-instalment|second instalment]] after the other criteria are met.",
      points: [
        "A$4,890 for each family member aged 18 or over without Functional English",
        "It's invoiced before grant: pay it when the invoice arrives",
        "Showing Functional English for that family member avoids it",
      ],
      youHold: "A paid invoice, where it applies",
      cost: "A$4,890 per adult, where it applies",
      icon: ICON.banknotes,
    },
    {
      id: "grant",
      short: "PR",
      title: "Permanent residence",
      who: ["government", "you"],
      description: "Permanent residence starts on grant if you're in Australia, or on first entry if you're outside.",
      points: [
        "Start work with your employer within 6 months",
        "Home Affairs expects you to stay at least 2 years",
        "Travel in and out for 5 years under your [[travel-facility|travel facility]]; after that you need a Resident Return visa",
        "Citizenship after 4 years of lawful residence, including 12 months as a permanent resident",
      ],
      youHold: "A permanent subclass 186 visa and Medicare eligibility",
      icon: ICON.home,
    },
  ],
  check: {
    disclaimer: "A general self-check, not advice or a prediction. The employer's nomination and your full circumstances decide the outcome.",
  },
  quiz: [
    {
      id: "employer",
      topic: "Employer nomination",
      question: "Will an Australian employer nominate you for a full-time, ongoing role?",
      options: [
        {
          value: "yes",
          label: "Yes, my employer will nominate me",
          status: "ok",
          note: "The 186 always starts with an employer's [[nomination]] for a genuine full-time role, ongoing for at least 2 years.",
        },
        {
          value: "talking",
          label: "We're discussing it",
          status: "todo",
          note: "The business must be actively and lawfully operating and pay at least the market rate. Show your employer what's involved.",
          link: { label: "What employers need to do", href: "/visas/employer-sponsored/employer-sponsorship-and-nomination" },
        },
        {
          value: "no",
          label: "No employer will nominate me",
          status: "stop",
          note: "There's no 186 without a nomination. Points-tested visas don't need an employer.",
          link: { label: "Points-tested visas", href: "/visas/skilled/skilled-migration-points-test" },
        },
      ],
    },
    {
      id: "route",
      topic: "Your stream",
      question: "Which best describes your work history?",
      options: [
        {
          value: "trt",
          label: "I've worked full-time for my sponsor on a 482 or 457 for 2 of the last 3 years",
          status: "ok",
          note: "Likely the [[trt|Temporary Residence Transition stream]]. The employer nominating you must be your most recent sponsor.",
        },
        {
          value: "direct",
          label: "I have a positive skills assessment and 3 years' experience in a Core Skills occupation",
          status: "ok",
          note: "Likely the [[direct-entry|Direct Entry stream]].",
        },
        {
          value: "agreement",
          label: "My employer has a labour agreement with a 186 pathway",
          status: "ok",
          note: "The Labour agreement stream: the agreement sets the age, skills and English standards.",
          link: { label: "Labour agreements explained", href: "/visas/employer-sponsored/labour-agreements-and-dama" },
        },
        {
          value: "short",
          label: "I'm on a 482, but with less than 2 years of full-time sponsored work",
          status: "todo",
          note: "Keep building your time: you need 2 years of full-time work in the 3 years before you apply, and unpaid leave doesn't count. The timeline shows your earliest date.",
          link: { label: "Plan your TRT dates", href: "#timeline" },
        },
        {
          value: "none",
          label: "None of these",
          status: "stop",
          note: "You need one of these routes. A 482 first, or a points-tested visa, may suit you better.",
          link: { label: "Talk through your options", href: "/bookings" },
        },
      ],
    },
    {
      id: "age",
      topic: "Age",
      question: "How old will you be when you apply?",
      options: [
        { value: "under", label: "Under 45", status: "ok", note: "Meets the age requirement." },
        {
          value: "exempt",
          label: "45 or over, but I may be exempt",
          hint: "Some academics, scientists, regional doctors and high earners on a 482",
          status: "todo",
          note: "[[lin19216|Exemptions]] cover some university academics, government or university scientists, regional medical practitioners, and 482 holders earning at least the [[high-income|Fair Work high income threshold]]. Keep your evidence ready.",
        },
        {
          value: "over",
          label: "45 or over, and not exempt",
          status: "stop",
          note: "You must be under 45 when you apply, unless an exemption applies. A labour agreement can set a different age, and people who held or applied for a 457 on 18 April 2017 can apply under 50.",
          link: { label: "Get advice", href: "/bookings" },
        },
      ],
    },
    {
      id: "english",
      topic: "English",
      question: "Can you show Competent English?",
      options: [
        { value: "met", label: "Yes: IELTS 6 in each band, or equivalent, in the last 3 years", status: "ok", note: "Meets the [[competent-english|Competent English]] requirement." },
        { value: "passport", label: "I hold a UK, Irish, US, Canadian or NZ passport", status: "ok", note: "You're exempt from the English test." },
        {
          value: "notyet",
          label: "Not tested yet",
          status: "todo",
          note: "Book an approved test. Results more than 3 years old don't count.",
          link: { label: "Practise PTE on Learniiz", href: "https://www.learniiz.com", external: true },
        },
        {
          value: "below",
          label: "Tested, but below 6 in a band",
          status: "todo",
          note: "There has been no other English exemption in the TRT stream since 16 November 2019, so plan a retest. A labour agreement may set a different standard.",
        },
      ],
    },
    {
      id: "timing",
      topic: "Nomination timing",
      question: "Has your employer's nomination been approved?",
      options: [
        { value: "pending", label: "Not yet: it's being prepared or assessed", status: "ok", note: "Once it's approved, you have 6 months to lodge your visa application." },
        { value: "recent", label: "Yes, in the last 6 months", status: "ok", note: "Lodge before the 6 months run out." },
        {
          value: "late",
          label: "Yes, more than 6 months ago",
          status: "stop",
          note: "You must apply within 6 months of the nomination being approved. Get advice about a new nomination before you lodge anything.",
          link: { label: "Get advice", href: "/bookings" },
        },
      ],
    },
    {
      id: "location",
      topic: "Where you apply",
      question: "Where are you now?",
      options: [
        { value: "outside", label: "Outside Australia", status: "ok", note: "You can apply from overseas. Permanent residence starts when you first enter Australia." },
        { value: "onshore", label: "In Australia, holding a visa (or a Bridging visa A, B or C)", status: "ok", note: "You can apply in Australia." },
        {
          value: "unlawful",
          label: "In Australia without a visa, or on a Bridging visa E",
          status: "stop",
          note: "You can't lodge a 186 in Australia in this situation. Get advice before you do anything else.",
          link: { label: "Book urgent advice", href: "/bookings" },
        },
      ],
    },
    {
      id: "family",
      topic: "Family English",
      question: "Will any family member aged 18 or over apply with you?",
      options: [
        { value: "none", label: "No adults besides me", status: "ok", note: "No second instalment applies." },
        { value: "fe", label: "Yes, and they can show Functional English", status: "ok", note: "Keep their evidence ready: a passport, study in English or a test result." },
        {
          value: "nofe",
          label: "Yes, but they can't show Functional English",
          status: "todo",
          note: "Budget A$4,890 each for the [[second-instalment|second instalment]], invoiced before grant.",
          link: { label: "Estimate your fees", href: "#fees" },
        },
      ],
    },
    {
      id: "health",
      topic: "Health and character",
      question: "Any health or character concerns in your family?",
      options: [
        { value: "clear", label: "No concerns", status: "ok", note: "You'll still need health examinations and police certificates." },
        {
          value: "concern",
          label: "Someone has a significant health condition or a criminal record",
          status: "todo",
          note: "Every family member must meet the health requirement, even those not migrating. A health waiver is available for this visa, but it needs careful preparation.",
          link: { label: "Health waivers explained", href: "/visas/appeals-and-review/health-requirement-and-health-waiver" },
        },
      ],
    },
  ],
  myths: [
    {
      myth: "I have to stay on a 482 for 4 years before I can apply.",
      fact: "No. The TRT stream needs 2 years of full-time sponsored work in the 3 years before you apply. With a skills assessment and 3 years' experience in a Core Skills occupation, Direct Entry doesn't need a 482 at all.",
    },
    {
      myth: "Only time with my current employer counts.",
      fact: "Time with more than one sponsor counts, as long as the employer nominating you is your most recent sponsor. If you started with a new employer before its nomination was approved, that time counts from the date it lodged the nomination.",
    },
    {
      myth: "The 186 ties me to my employer for 2 years.",
      fact: "There's no visa condition tying you to the employer. But you must start work within 6 months, and Home Affairs expects you to stay at least 2 years. Leaving early without a genuine reason may raise questions about whether the position was genuine.",
    },
    {
      myth: "Turning 45 rules me out, whatever my job.",
      fact: "Usually you must be under 45 when you apply, but exemptions exist for some academics, scientists, regional medical practitioners and high-earning 482 holders. People who held or applied for a 457 on 18 April 2017 can apply under 50.",
    },
    {
      myth: "My partner needs Competent English too.",
      fact: "No. Family members aged 18 or over need Functional English. If they can't show it, a A$4,890 second instalment is charged for each of them before grant.",
    },
    {
      myth: "The TRT stream needs a skills assessment.",
      fact: "Not usually. There's no occupation list for the TRT stream: it's the occupation on your most recent 457 or 482. Home Affairs can still ask for a skills assessment if it doubts your skills.",
    },
    {
      myth: "I can move to a 186 any time while on a 494.",
      fact: "Not until you've held the 494 for 3 years. Until then a 186 can't be granted, and the 494's own path to permanent residence is the subclass 191.",
    },
  ],
  roles: [
    {
      id: "worker",
      label: "I'm the worker",
      intro: "Your part is your own evidence, a valid application within 6 months, and starting work once you're granted.",
      groups: [
        {
          title: "Before you apply",
          items: [
            "Confirm your stream: [[trt|TRT]], [[direct-entry|Direct Entry]] or Labour agreement",
            "Collect payslips, PAYG summaries and leave records (TRT), or a skills assessment and references (Direct Entry)",
            "Get a [[competent-english|Competent English]] result, unless you hold an exempt passport",
            "Gather [[lin19216|age exemption]] evidence if you're 45 or over",
          ],
        },
        {
          title: "When you apply",
          items: [
            "Lodge within 6 months of the nomination's approval",
            "Pay A$6,140, plus A$3,070 per adult and A$1,535 per child",
            "Show [[functional-english|Functional English]] for each adult family member, or budget for the [[second-instalment|second instalment]]",
          ],
        },
        {
          title: "Once it's granted",
          items: [
            "Start work with your employer within 6 months",
            "Plan to stay with your employer for at least 2 years",
            "Use your 5-year [[travel-facility|travel facility]]; after that you need a Resident Return visa",
          ],
        },
      ],
    },
    {
      id: "employer",
      label: "I'm the employer",
      tone: "pink",
      intro: "Your part is the [[nomination]]: a genuine role, the right salary and the levy.",
      groups: [
        {
          title: "Before you nominate",
          items: [
            "Make sure the business is actively and lawfully operating",
            "Offer a full-time role that's ongoing for at least 2 years, with no contract limit of 2 years",
            "Work out the [[amsr|annual market salary rate]] and pay at least the [[csit|CSIT]] of A$79,423",
          ],
        },
        {
          title: "When you nominate",
          items: [
            "Pay the A$540 nomination charge (nil for a position in [[regional|regional Australia]])",
            "Pay the [[saf|SAF levy]]: A$3,000 if turnover is under A$10 million, otherwise A$5,000",
            "Give the worker the nomination reference number so they can apply within 6 months",
          ],
        },
        {
          title: "For a TRT nomination",
          items: [
            "Be the worker's most recent sponsor",
            "Check the worker has 2 years of full-time sponsored work in the last 3",
          ],
        },
      ],
      link: { label: "Read the full employer guide", href: "/visas/employer-sponsored/employer-sponsorship-and-nomination" },
    },
  ],
  glossary: [
    {
      id: "nomination",
      term: "Nomination",
      definition: "Your employer's application describing the full-time role it wants you in. For a 186 it costs A$540 (nil for positions in regional Australia), and you must apply within 6 months of its approval.",
    },
    {
      id: "trt",
      term: "TRT stream",
      full: "Temporary Residence Transition stream",
      definition: "The 186 stream for 457 and 482 holders who have worked full-time for their sponsor for 2 of the last 3 years. The nominating employer must be your most recent sponsor, and there's no occupation list.",
    },
    {
      id: "direct-entry",
      term: "Direct Entry stream",
      definition: "The 186 stream for workers with a positive skills assessment and at least 3 years of relevant experience in an occupation on the Core Skills Occupation List. You don't need to have held a 482.",
    },
    {
      id: "csol",
      term: "CSOL",
      full: "Core Skills Occupation List",
      definition: "The list of occupations that can be nominated in the 186 Direct Entry stream.",
    },
    {
      id: "amsr",
      term: "AMSR",
      full: "Annual market salary rate",
      definition: "What an Australian worker is paid for the same job in the same place. If you'll earn under A$250,000, your employer must pay you at least this.",
    },
    {
      id: "csit",
      term: "CSIT",
      full: "Core Skills Income Threshold",
      definition: "The minimum salary for a 186 nomination: A$79,423 from 1 July 2026. Both the market rate for the role and your pay must meet it.",
    },
    {
      id: "saf",
      term: "SAF levy",
      full: "Skilling Australians Fund levy",
      definition: "A training levy your employer pays when it nominates you for a 186: a one-off A$3,000 if its turnover is under A$10 million, otherwise A$5,000. It can't be passed on to you.",
    },
    {
      id: "regional",
      term: "Regional Australia (186)",
      definition: "For the 186 nomination charge, positions in Category 2 or 3 areas on the Home Affairs 186 regional postcodes page. No nomination charge applies there.",
    },
    {
      id: "competent-english",
      term: "Competent English",
      definition: "The English level the main applicant needs: at least IELTS 6 in each component, or the equivalent in another approved test, taken within 3 years. UK, Irish, US, Canadian and New Zealand passport holders are exempt.",
    },
    {
      id: "functional-english",
      term: "Functional English",
      definition: "A basic level of English. Family members aged 18 or over who apply with you need it, or a second instalment is charged for each of them.",
    },
    {
      id: "second-instalment",
      term: "Second instalment",
      definition: "An extra A$4,890 for each family member aged 18 or over who applies with you without Functional English. Home Affairs invoices it after the other criteria are met, before grant.",
    },
    {
      id: "lin19216",
      term: "LIN 19/216",
      definition: "The legal instrument listing who is exempt from the 186 age, skills and English rules. It covers some academics, scientists, regional medical practitioners and high-earning 457 or 482 holders.",
    },
    {
      id: "high-income",
      term: "Fair Work high income threshold",
      definition: "A salary level that can exempt you from the age limit in the TRT stream. You must have earned at least this on a 457 or 482 in each of 2 of the last 3 years.",
    },
    {
      id: "travel-facility",
      term: "Travel facility",
      definition: "The 5 years after grant when you can leave and re-enter Australia as a permanent resident. After that you need a Resident Return visa (subclass 155 or 157) to come back.",
    },
  ],
  cta: {
    subtitle: "We check your stream, dates and evidence against these rules, tell you honestly where you stand, and prepare the nomination and visa application with you and your employer.",
  },
  verifiedExtras: [
    {
      fact: "The Home Affairs Visa Pricing Estimator does not include the second instalment.",
      source: "https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/employer-nomination-scheme-186/temporary-residence-transition-stream",
    },
  ],
  finder: employerFinder,
  fees: {
    variantLabel: "Where is the job?",
    variants: [
      {
        id: "standard",
        label: "Outside regional Australia",
        hint: "For example Sydney, Melbourne or Brisbane",
        primary: [{ label: "Base application charge (you)", amount: 6140 }],
        adult: [{ label: "Each additional applicant aged 18 or over", amount: 3070 }],
        child: [{ label: "Each additional applicant under 18", amount: 1535 }],
        sponsor: {
          heading: "Your employer pays",
          lines: [{ label: "Nomination charge", amount: 540, per: "once" }],
          choice: {
            label: "Business turnover",
            options: [
              { label: "Under A$10 million", lines: [{ label: "SAF levy (one-off)", amount: 3000, per: "once" }] },
              { label: "A$10 million or more", lines: [{ label: "SAF levy (one-off)", amount: 5000, per: "once" }] },
            ],
          },
          note: "The SAF levy can't be passed on to you.",
        },
      },
      {
        id: "regional",
        label: "In regional Australia",
        hint: "Category 2 or 3 areas on the Home Affairs 186 regional postcodes page",
        primary: [{ label: "Base application charge (you)", amount: 6140 }],
        adult: [{ label: "Each additional applicant aged 18 or over", amount: 3070 }],
        child: [{ label: "Each additional applicant under 18", amount: 1535 }],
        sponsor: {
          heading: "Your employer pays",
          lines: [{ label: "Nomination charge (nil in regional Australia)", amount: 0, per: "once" }],
          choice: {
            label: "Business turnover",
            options: [
              { label: "Under A$10 million", lines: [{ label: "SAF levy (one-off)", amount: 3000, per: "once" }] },
              { label: "A$10 million or more", lines: [{ label: "SAF levy (one-off)", amount: 5000, per: "once" }] },
            ],
          },
          note: "The SAF levy can't be passed on to you.",
        },
      },
    ],
    maxAdults: 3,
    maxChildren: 6,
    addOns: [
      {
        id: "second-instalment",
        label: "Second instalment for each adult without Functional English",
        hint: "Invoiced before grant",
        amount: 4890,
        per: "adult",
      },
    ],
    notIncluded: "Not included: skills assessment, English tests, health examinations, police certificates and translations.",
    notes: [
      "The same charges apply in every stream: TRT, Direct Entry and Labour agreement.",
      "The Home Affairs Visa Pricing Estimator doesn't include the second instalment.",
      "A lower charge applies to eligible Pacific Island and Timor-Leste passport holders.",
    ],
    confirmUrl: "https://immi.homeaffairs.gov.au/visas/visa-pricing-estimator",
    confirmLabel: "Home Affairs Visa Pricing Estimator",
  },
  timeline: {
    navLabel: "Your TRT dates",
    eyebrow: "Plan your dates",
    title: "When could you apply in the TRT stream?",
    highlight: "TRT stream",
    subtitle: "Pick the month your full-time sponsored work on a 482 (or 457) started. See when you'd reach 2 years, and whether you'd still be under 45.",
    startLabel: "Sponsored work started",
    startPrompt: "When did your full-time sponsored work on a 482 or 457 start?",
    milestones: [
      {
        months: 24,
        label: "2 years of sponsored work",
        detail: "The earliest you could apply in the [[trt|TRT stream]], if every month was full-time, paid work in your nominated occupation. Unpaid leave doesn't count and pushes this date later.",
        kind: "goal",
      },
      {
        months: 36,
        label: "3 years after you started",
        detail: "The 2 years must fall within the 3 years before you apply. From here, your earliest months of sponsored work start to fall outside that window.",
        kind: "info",
      },
    ],
    age: {
      milestone: 0,
      limit: 45,
      under: "You'd be under 45 at this point, which meets the age requirement.",
      over: "You'd be 45 or over at this point, so you'd need an exemption, such as for some academics, scientists, regional medical practitioners or high-earning 482 holders. Get advice early.",
    },
    footnote: "An illustration, not advice. Only full-time work in your nominated occupation while holding a 457, 482 or eligible bridging visa counts, and your nominating employer must be your most recent sponsor.",
  },
};
