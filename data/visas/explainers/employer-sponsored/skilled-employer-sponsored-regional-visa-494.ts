import type { VisaExplainer } from "../types";
import { ICON } from "../icons";
import { employerFinder } from "./employer-finder";

// Interactive explainer for the Skilled Employer Sponsored Regional
// (Provisional) visa (subclass 494). Every figure matches
// data/visas/employer-sponsored.ts (checked against Home Affairs and the
// Migration Regulations on 12 October 2026). The second-instalment note was
// read on the Home Affairs 494 stream pages on 13 October 2026.

export const skilledEmployerSponsoredRegional494Explainer: VisaExplainer = {
  slug: "skilled-employer-sponsored-regional-visa-494",
  factsAsAt: "12 October 2026",
  oneLiner:
    "A 5-year visa for skilled workers sponsored by an employer in regional Australia. You live and work in a regional area, and after 3 years you can apply for permanent residence (subclass 191).",
  bigIdeas: [
    {
      title: "A regional employer sponsors you",
      body: "An approved business in a designated regional area (everywhere except Sydney, Melbourne and Brisbane) nominates your job.",
      icon: ICON.buildingOffice2,
    },
    {
      title: "You live and work regionally",
      body: "For up to 5 years you work for your sponsor in the nominated job, and live, work and study in a regional area.",
      icon: ICON.mapPin,
    },
    {
      title: "PR after 3 years",
      body: "Hold the 494 for 3 years, keep to its conditions and keep your tax records, then apply for the subclass 191.",
      icon: ICON.home,
    },
  ],
  heroCard: [
    { label: "Who sponsors you", value: "An approved employer in regional Australia", icon: ICON.buildingOffice2 },
    { label: "How long", value: "5 years from grant; it can't be extended", icon: ICON.clock },
    { label: "Where you live and work", value: "A designated regional area", icon: ICON.mapPin },
    { label: "Experience and age", value: "3 years' experience; under 45 unless exempt", icon: ICON.briefcase },
    { label: "Next step", value: "Permanent residence (191) after 3 years", icon: ICON.home },
    { label: "Visa charge", value: "From A$6,140", icon: ICON.currencyDollar },
  ],
  actors: [
    {
      id: "employer",
      name: "Your employer (the sponsor)",
      short: "Employer",
      icon: ICON.buildingOffice2,
      tone: "pink",
      role: "Sponsors you and nominates a full-time regional job that's likely to exist for 5 years.",
      does: [
        "Becomes a [[sbs|Standard Business Sponsor]] (A$420, valid five years)",
        "Advertises the job in Australia first ([[lmt|labour market testing]])",
        "Pays at least the [[amsr|market rate]] and the [[tsmit|TSMIT]] of A$79,423",
        "Pays the [[saf|SAF levy]]; there's no nomination charge",
      ],
    },
    {
      id: "rcb",
      name: "Regional certifying body",
      short: "Certifier",
      icon: ICON.scale,
      tone: "amber",
      role: "Assesses the salary for Employer Sponsored stream nominations.",
      does: [
        "Looks at the salary your employer offers for the job",
        "Advises whether it supports the salary",
        "Its advice goes with the nomination",
      ],
    },
    {
      id: "you",
      name: "You (the worker)",
      short: "You",
      icon: ICON.user,
      tone: "green",
      role: "Apply for the visa, then live and work in regional Australia.",
      does: [
        "Show 3 years of full-time experience and a positive [[skills-assessment|skills assessment]]",
        "Be under 45 and show [[competent-english|Competent English]], unless exempt",
        "Lodge the application and pay from A$6,140",
        "Work for your sponsor and live regionally ([[c8608|condition 8608]], [[c8579|condition 8579]])",
      ],
    },
    {
      id: "government",
      name: "Department of Home Affairs",
      short: "Home Affairs",
      icon: ICON.buildingLibrary,
      tone: "blue",
      role: "Approves the sponsor and nomination, decides the visa and monitors the conditions.",
      does: [
        "Approves the sponsorship and the [[nomination]]",
        "Assesses your skills, experience, age, English, health and character",
        "Grants the visa with its conditions",
        "May ask where you live and work, or call you to an interview",
      ],
    },
  ],
  flows: [
    {
      from: "employer",
      to: "rcb",
      label: "Salary assessed",
      detail: "Your employer asks a [[rcb|regional certifying body]] to assess the salary for the job.",
    },
    {
      from: "employer",
      to: "government",
      label: "Sponsors + nominates",
      detail: "The employer becomes a sponsor and nominates the job, with the certifying body's advice, advertising evidence and a signed contract.",
    },
    {
      from: "you",
      to: "government",
      label: "You apply",
      detail: "You apply with the nomination's reference number, your [[skills-assessment|skills assessment]], [[competent-english|Competent English]] and evidence of 3 years' experience.",
    },
    {
      from: "government",
      to: "you",
      label: "Visa granted",
      detail: "Home Affairs grants a 5-year visa with conditions: work for your sponsor and live in a [[dra|designated regional area]].",
    },
    {
      from: "you",
      to: "employer",
      label: "You start work",
      detail: "You start the nominated job within 90 days and build the 3 years towards permanent residence through the [[subclass-191|subclass 191]].",
    },
  ],
  journeyTitle: "From regional job offer to permanent residence",
  journeyHighlight: "permanent residence",
  stages: [
    {
      id: "sponsor",
      short: "Sponsor",
      title: "The employer becomes a sponsor",
      who: ["employer"],
      description: "A regional employer applies to be a [[sbs|Standard Business Sponsor]], or lodges this with the nomination.",
      points: ["A$420, valid for five years", "The business must be lawfully operating in Australia"],
      youHold: "A sponsor with an approved or lodged sponsorship",
      cost: "A$420, paid by the employer",
      icon: ICON.buildingOffice2,
    },
    {
      id: "test",
      short: "Advertise",
      title: "Advertising and the salary check",
      who: ["employer", "rcb"],
      description: "The employer advertises the job in Australia and has a [[rcb|regional certifying body]] assess the salary.",
      points: [
        "At least two ads, each running four weeks, within the four months before nominating",
        "The trade-agreement exemptions don't apply to the 494",
        "Salary at least the [[amsr|market rate]] (if under A$250,000) and the [[tsmit|TSMIT]] of A$79,423",
      ],
      youHold: "Advertising evidence and the certifying body's advice",
      cost: "Advertising costs, paid by the employer",
      icon: ICON.megaphone,
    },
    {
      id: "nominate",
      short: "Nominate",
      title: "The employer nominates the position",
      who: ["employer"],
      description: "The [[nomination]] is for a full-time job in a [[dra|designated regional area]] that's likely to exist for 5 years.",
      points: [
        "No nomination charge in the Employer Sponsored stream",
        "[[saf|SAF levy]]: A$3,000 (turnover under A$10 million) or A$5,000, paid once",
        "A signed contract that doesn't rule out an extension",
        "An approved nomination lasts 12 months",
      ],
      youHold: "A nomination reference number (TRN) for your visa application",
      cost: "SAF levy of A$3,000 or A$5,000, paid by the employer",
      icon: ICON.documentText,
    },
    {
      id: "prepare",
      short: "Prepare",
      title: "You get your skills assessment and English",
      who: ["you"],
      description: "You need these before you lodge your visa application.",
      points: [
        "A positive [[skills-assessment|skills assessment]] (a subclass 485 assessment doesn't count)",
        "3 years of full-time experience at the skill level of the job; casual work isn't counted",
        "[[competent-english|Competent English]]: IELTS 6 in each band, or an exempt passport",
        "Under 45 when you apply, unless exempt",
      ],
      youHold: "A skills assessment, a Competent English result and work references",
      cost: "Assessment and tests, paid by you",
      icon: ICON.clipboardDocumentCheck,
    },
    {
      id: "apply",
      short: "Apply",
      title: "You apply and Home Affairs decides",
      who: ["you", "government"],
      description: "Apply online, in or outside Australia, with the nomination's reference number.",
      points: [
        "A$6,140 for you, A$3,070 per adult and A$1,535 per child",
        "In Australia you need a visa, or a Bridging visa A, B or C",
        "Home Affairs may ask for health checks, an interview or evidence of your address",
      ],
      youHold: "A grant letter that lists your conditions",
      cost: "From A$6,140, paid by you",
      icon: ICON.paperAirplane,
    },
    {
      id: "work",
      short: "Work",
      title: "Start work and live regionally",
      who: ["you", "employer"],
      description: "Start the nominated job within 90 days of arriving, or of the grant if you're already in Australia.",
      points: [
        "Work only for your sponsor, in the nominated occupation ([[c8608|condition 8608]])",
        "Live, work and study in a designated regional area ([[c8579|condition 8579]])",
        "Tell Home Affairs about changes within 14 days ([[c8578|condition 8578]])",
        "If the job ends: up to 180 days to find a new sponsor",
      ],
      youHold: "A 494 in effect and the start of your 3 years",
      icon: ICON.briefcase,
    },
    {
      id: "pr",
      short: "PR",
      title: "Permanent residence through the 191",
      who: ["you", "government"],
      description: "After holding the 494 for 3 years, you can apply for the Permanent Residence (Skilled Regional) visa, [[subclass-191|subclass 191]].",
      points: [
        "You must have kept to your visa conditions",
        "ATO notices of assessment for 3 of the 5 income years",
        "Home Affairs states there's no minimum income",
      ],
      youHold: "Permanent residence",
      cost: "A$630 for the 191 visa",
      icon: ICON.home,
    },
  ],
  check: {
    disclaimer: "A general self-check, not advice or a prediction. The employer's nomination and your full circumstances decide the outcome.",
  },
  quiz: [
    {
      id: "offer",
      topic: "Regional job offer",
      question: "Do you have a job offer from an employer in regional Australia?",
      help: "Regional means everywhere except Sydney, Melbourne and Brisbane. The work address decides, not the head office.",
      options: [
        { value: "yes", label: "Yes, in a regional area", status: "ok", note: "The 494 starts with an employer in a [[dra|designated regional area]] who wants to sponsor you." },
        {
          value: "city",
          label: "Yes, but in Sydney, Melbourne or Brisbane",
          status: "stop",
          note: "The 494 needs a job in a designated regional area. A Skills in Demand visa (subclass 482) may fit instead.",
          link: { label: "Skills in Demand visa (482)", href: "/visas/employer-sponsored/skills-in-demand-visa-482" },
        },
        {
          value: "unsure",
          label: "I'm not sure the location counts",
          status: "todo",
          note: "Check the work address postcode before the nomination is lodged.",
          link: { label: "Regional postcode checker", href: "/tools/regional-postcode-checker" },
        },
        {
          value: "no",
          label: "No job offer yet",
          status: "stop",
          note: "There's no 494 without a sponsoring employer. The points-tested subclass 491 doesn't need one.",
          link: { label: "Skilled Work Regional visa (491)", href: "/visas/skilled/skilled-work-regional-visa-491" },
        },
      ],
    },
    {
      id: "experience",
      topic: "Work experience",
      question: "How much full-time experience do you have in the occupation?",
      help: "Casual work isn't counted. Equivalent part-time work may be considered.",
      options: [
        {
          value: "enough",
          label: "3 years or more, at the skill level of the job",
          status: "ok",
          note: "Meets the minimum. It's generally counted within the last 5 years and doesn't need to be continuous.",
        },
        {
          value: "less",
          label: "Less than 3 years",
          status: "stop",
          note: "The 494 needs at least 3 years. A Skills in Demand visa (subclass 482) needs 1 year, if the job fits one of its streams.",
          link: { label: "Skills in Demand visa (482)", href: "/visas/employer-sponsored/skills-in-demand-visa-482" },
        },
      ],
    },
    {
      id: "skills",
      topic: "Skills assessment",
      question: "Do you have a positive skills assessment for the occupation?",
      options: [
        { value: "yes", label: "Yes, for the nominated occupation", status: "ok", note: "Good. It must be obtained before you apply." },
        {
          value: "held",
          label: "I gave one to get a 457 or 482 for this same occupation",
          status: "ok",
          note: "You don't need a new [[skills-assessment|skills assessment]].",
        },
        {
          value: "notyet",
          label: "Not yet",
          status: "todo",
          note: "Apply to the assessing authority now: you need the result before you lodge the visa.",
          link: { label: "Skills assessments explained", href: "/visas/skilled/skills-assessment-for-migration" },
        },
        {
          value: "graduate",
          label: "Only a subclass 485 skills assessment",
          status: "todo",
          note: "A Temporary Graduate (subclass 485) assessment doesn't count. You need a full assessment for the occupation.",
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
          hint: "Some academics, scientists, regional doctors and high earners",
          status: "todo",
          note: "Exemptions cover university academics, government or university scientists, regional medical practitioners, some 444 and 461 holders, and high-earning 457 or 482 holders. A labour agreement can also set a different age.",
        },
        {
          value: "over",
          label: "45 or over, and not exempt",
          status: "stop",
          note: "You must be under 45 when you apply, unless you're exempt or a labour agreement sets a different age.",
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
        { value: "below", label: "Tested, but below 6 in a band", status: "todo", note: "Plan a retest. A labour agreement may set a different English standard." },
      ],
    },
    {
      id: "regional",
      topic: "Living regionally",
      question: "Are you ready to live, work and study only in regional Australia?",
      options: [
        { value: "yes", label: "Yes, for the whole stay", status: "ok", note: "That's [[c8579|condition 8579]]. Keeping to it matters for the subclass 191." },
        {
          value: "city",
          label: "I might want to move to Sydney, Melbourne or Brisbane",
          status: "todo",
          note: "Those cities are outside the designated regional area. Living or working there breaches condition 8579 and puts the subclass 191 at risk.",
        },
      ],
    },
    {
      id: "location",
      topic: "Where you apply",
      question: "Where are you now?",
      options: [
        { value: "outside", label: "Outside Australia", status: "ok", note: "You can apply from overseas." },
        { value: "onshore", label: "In Australia, holding a visa (or a Bridging visa A, B or C)", status: "ok", note: "You can apply in Australia, though not in immigration clearance." },
        {
          value: "unlawful",
          label: "In Australia without a visa, or on a Bridging visa E",
          status: "stop",
          note: "You can't lodge a 494 in Australia in this situation. Get advice before you do anything else.",
          link: { label: "Book urgent advice", href: "/bookings" },
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
          note: "There's no health waiver for this provisional visa, and family members who aren't applying may also need to meet the requirements. Get advice early.",
          link: { label: "Get advice", href: "/bookings" },
        },
      ],
    },
  ],
  myths: [
    {
      myth: "Regional means the countryside only.",
      fact: "No. Designated regional areas include all of Australia except Sydney, Melbourne and Brisbane. Perth, Adelaide, the Gold Coast, Canberra, Hobart and Newcastle all count. The work address decides, not the head office.",
    },
    {
      myth: "I can switch to a 186 or 190 as soon as I arrive.",
      fact: "Not until you've held the 494 for 3 years. Until then you can't be granted a 186, 189 or 190 visa, or make a valid onshore partner (subclass 820) application.",
    },
    {
      myth: "The 191 needs a minimum income.",
      fact: "Home Affairs states there's no minimum income for the 191. You do need ATO notices of assessment for 3 of the 5 income years, and to have kept to your visa conditions.",
    },
    {
      myth: "My employer pays nothing to sponsor me.",
      fact: "There's no nomination charge in the Employer Sponsored stream, but your employer pays A$420 to become a sponsor and a one-off SAF levy of A$3,000 or A$5,000. The levy can't be recovered from you.",
    },
    {
      myth: "If I lose my job I must leave straight away.",
      fact: "Condition 8608 gives you up to 180 days in a single period, and 365 days in total across the visa. In that time, have a new nomination approved, arrange another visa or leave.",
    },
    {
      myth: "I can extend my 494 if I need more time.",
      fact: "No. The 494 can't be extended. A further 494 needs a new nomination.",
    },
    {
      myth: "Casual work counts towards my 3 years.",
      fact: "No. You need 3 years of full-time work at the skill level of the occupation. Equivalent part-time work may be considered, but casual work isn't counted.",
    },
  ],
  roles: [
    {
      id: "worker",
      label: "I'm the worker",
      intro: "Your part is your skills evidence, a valid application, and keeping to the regional conditions for 3 years.",
      groups: [
        {
          title: "Before you apply",
          items: [
            "Get a positive [[skills-assessment|skills assessment]] (not a subclass 485 assessment)",
            "Collect references and payslips showing 3 years of full-time work",
            "Get a [[competent-english|Competent English]] result, unless you hold an exempt passport",
            "Keep age exemption evidence ready if you're 45 or over",
          ],
        },
        {
          title: "When you apply",
          items: [
            "Lodge with the nomination's reference number",
            "Pay A$6,140, plus A$3,070 per adult and A$1,535 per child",
            "Complete health examinations when asked",
          ],
        },
        {
          title: "Once it's granted",
          items: [
            "Start work within 90 days",
            "Live, work and study only in a [[dra|designated regional area]]",
            "Tell Home Affairs about address, passport or employer changes within 14 days",
            "Keep your tax records: the subclass 191 needs them",
          ],
        },
      ],
    },
    {
      id: "employer",
      label: "I'm the employer",
      tone: "pink",
      intro: "Your part is the sponsorship, a properly tested and assessed [[nomination]], and the levy.",
      groups: [
        {
          title: "To sponsor",
          items: [
            "Apply for [[sbs|Standard Business Sponsorship]] (A$420, valid five years), or lodge it with the nomination",
            "Check the work address is in a designated regional area",
            "Offer a full-time role that's likely to exist for five years",
          ],
        },
        {
          title: "To nominate",
          items: [
            "Advertise in Australia: two ads, four weeks each, within four months (no trade-agreement exemptions)",
            "Get the [[rcb|regional certifying body's]] salary assessment",
            "Pay at least the market rate and the [[tsmit|TSMIT]] of A$79,423",
            "Attach a signed contract that doesn't rule out an extension",
          ],
        },
        {
          title: "Costs",
          items: [
            "No nomination charge in the Employer Sponsored stream",
            "Pay the [[saf|SAF levy]] at lodgement: A$3,000 or A$5,000, by turnover",
            "A reduced levy applies if the worker already holds a 494",
          ],
        },
      ],
      link: { label: "Read the full employer guide", href: "/visas/employer-sponsored/employer-sponsorship-and-nomination" },
    },
  ],
  glossary: [
    { id: "sbs", term: "Standard Business Sponsor", definition: "A business approved by Home Affairs to sponsor overseas workers. The application costs A$420 and approval lasts five years." },
    {
      id: "nomination",
      term: "Nomination",
      definition: "Your employer's application for a full-time job in a designated regional area that's likely to exist for 5 years. There's no charge in the Employer Sponsored stream, and an approved nomination lasts 12 months.",
    },
    {
      id: "rcb",
      term: "Regional certifying body",
      definition: "A body that assesses the salary for Employer Sponsored stream nominations. If it doesn't support the salary, the nomination can be refused.",
    },
    {
      id: "lmt",
      term: "Labour market testing",
      definition: "Advertising the job in Australia before nominating: at least two ads, each running four weeks, in the four months before the nomination. The trade-agreement exemptions don't apply to the 494.",
    },
    {
      id: "amsr",
      term: "AMSR",
      full: "Annual market salary rate",
      definition: "What an Australian worker is paid for the same job in the same place. If you'll earn under A$250,000, your employer must pay you at least this.",
    },
    {
      id: "tsmit",
      term: "TSMIT",
      full: "Temporary Skilled Migration Income Threshold",
      definition: "The minimum salary for a 494 nomination: A$79,423 for nominations lodged from 1 July 2026 to 30 June 2027. Both the market rate and your pay, without non-monetary benefits, must meet it.",
    },
    {
      id: "saf",
      term: "SAF levy",
      full: "Skilling Australians Fund levy",
      definition: "A training levy your employer pays when it nominates you: a one-off A$3,000 if turnover is under A$10 million, otherwise A$5,000. It's reduced if you already hold a 494.",
    },
    {
      id: "skills-assessment",
      term: "Skills assessment",
      definition: "An assessing authority's decision that your skills suit the occupation. You need it before you apply; a Temporary Graduate (subclass 485) assessment doesn't count.",
    },
    {
      id: "competent-english",
      term: "Competent English",
      definition: "At least IELTS 6 in each component, or the equivalent in another approved test, taken within 3 years. UK, Irish, US, Canadian and New Zealand passport holders are exempt.",
    },
    {
      id: "dra",
      term: "Designated regional area",
      definition: "All of Australia except Sydney, Melbourne and Brisbane, listed by postcode by Home Affairs. Perth, Adelaide, the Gold Coast, Canberra and Hobart all count.",
    },
    {
      id: "c8608",
      term: "Condition 8608",
      definition: "Work only in your nominated occupation, for the business that nominated you (or an associated entity). If the job ends you can stop work for up to 180 days at a time and 365 days in total across the visa.",
    },
    {
      id: "c8579",
      term: "Condition 8579",
      definition: "Live, study and work only in an area that was a designated regional area when your employer lodged its most recent approved nomination.",
    },
    {
      id: "c8578",
      term: "Condition 8578",
      definition: "Tell Home Affairs within 14 days about changes to your address, email, phone number, passport, your employer's address or where you work.",
    },
    {
      id: "subclass-191",
      term: "Subclass 191",
      full: "Permanent Residence (Skilled Regional) visa",
      definition: "The permanent visa that follows the 494. You can apply after holding the 494 for 3 years. You need to have kept to its conditions, with ATO notices of assessment for 3 of the 5 income years. It costs A$630.",
    },
  ],
  cta: {
    subtitle: "We check your facts against these rules, tell you honestly where you stand, and prepare the nomination and visa application with you and your regional employer.",
  },
  verifiedExtras: [
    {
      fact: "The subclass 482 needs at least 1 year of relevant work experience, gained in the last 5 years.",
      source: "/visas/employer-sponsored/skills-in-demand-visa-482",
    },
    {
      fact: "The Skilling Australians Fund levy is paid at nomination and can't be recovered from the worker.",
      source: "/visas/employer-sponsored/employer-sponsorship-and-nomination",
    },
    {
      fact: "For the subclass 494, Home Affairs charges a second instalment for each family member aged 18 or over who applies with you and can't show functional English, invoiced after all other requirements are met.",
      source: "https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/skilled-employer-sponsored-regional-494/employer-sponsored-stream",
    },
  ],
  finder: employerFinder,
  fees: {
    variants: [
      {
        id: "employer-sponsored",
        label: "Employer Sponsored stream",
        primary: [{ label: "Base application charge (you)", amount: 6140 }],
        adult: [{ label: "Each additional applicant aged 18 or over", amount: 3070 }],
        child: [{ label: "Each additional applicant under 18", amount: 1535 }],
      },
    ],
    maxAdults: 3,
    maxChildren: 6,
    sponsor: {
      heading: "Your employer pays",
      lines: [
        { label: "Standard Business Sponsorship (valid 5 years)", amount: 420, per: "once" },
        { label: "Nomination charge (nil in this stream)", amount: 0, per: "once" },
      ],
      choice: {
        label: "Business turnover",
        options: [
          { label: "Under A$10 million", lines: [{ label: "SAF levy (one-off)", amount: 3000, per: "once" }] },
          { label: "A$10 million or more", lines: [{ label: "SAF levy (one-off)", amount: 5000, per: "once" }] },
        ],
      },
      note: "The SAF levy is paid when the nomination is lodged and can't be recovered from you.",
    },
    notIncluded: "Not included: skills assessment, English tests, health examinations, police certificates, and the A$630 charge for the subclass 191 later.",
    notes: [
      "Labour agreement stream applicants and subsequent entrants pay the same visa charges.",
      "Each family member aged 18 or over who applies without functional English also pays a A$4,890 second instalment, invoiced before grant (the amount Home Affairs states on its Labour agreement and subsequent entrant stream pages).",
      "Already hold a 494? The levy for a new nomination drops to 80, 60, 40 or 20% of the full amount, with 4, 3, 2 or 1 years remaining.",
      "A lower charge applies to eligible Pacific Island and Timor-Leste passport holders.",
    ],
    confirmUrl: "https://immi.homeaffairs.gov.au/visas/visa-pricing-estimator",
    confirmLabel: "Home Affairs Visa Pricing Estimator",
  },
  jobGap: {
    perGap: 180,
    total: 365,
    countedFrom: "1 July 2024",
    condition: "8608",
    termId: "c8608",
  },
  timeline: {
    navLabel: "Your 494 dates",
    eyebrow: "Plan your dates",
    title: "Your road from 494 to permanent residence",
    highlight: "permanent residence",
    subtitle: "Pick the month your 494 was granted, or might be, to see when you could apply for the subclass 191 and when the visa ends.",
    startLabel: "494 granted",
    startPrompt: "When was your 494 granted (or when do you expect it)?",
    milestones: [
      {
        months: 36,
        label: "Earliest subclass 191 application",
        detail: "After holding the 494 for 3 years you can apply for the [[subclass-191|subclass 191]]. You need to have kept to your conditions, with ATO notices of assessment for 3 of the 5 income years.",
        kind: "goal",
      },
      {
        months: 60,
        label: "Your 494 ends",
        detail: "The 494 lasts 5 years from the grant date and can't be extended. Plan your next step well before this date.",
        kind: "end",
      },
    ],
    footnote: "An illustration, not advice. Until you've held the 494 for 3 years you can't be granted a 186, 189 or 190 visa.",
  },
};
