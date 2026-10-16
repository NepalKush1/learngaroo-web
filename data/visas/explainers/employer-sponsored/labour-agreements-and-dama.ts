import type { VisaExplainer } from "../types";
import { ICON } from "../icons";

// Interactive explainer for the guide "Labour agreements and Designated Area
// Migration Agreements (DAMA)". Every figure matches
// data/visas/employer-sponsored.ts (checked against Home Affairs, including
// the Labour Agreement program information guide, on 12 October 2026).

const PAGE = "/visas/employer-sponsored/labour-agreements-and-dama";

export const labourAgreementsAndDamaExplainer: VisaExplainer = {
  slug: "labour-agreements-and-dama",
  factsAsAt: "12 October 2026",
  oneLiner:
    "A labour agreement is a contract between an employer and the Australian Government that lets the employer sponsor overseas workers when the standard 482, 186 and 494 rules don't fit the need.",
  bigIdeas: [
    {
      title: "When the standard rules don't fit",
      body: "For occupations that aren't on a list, or where a business needs concessions to English, salary, experience or age.",
      icon: ICON.puzzlePiece,
    },
    {
      title: "Five kinds of agreement",
      body: "Company-specific, industry, DAMA, project and Global Talent Employer Sponsored (GTES) agreements.",
      icon: ICON.documentText,
    },
    {
      title: "Workers still need a visa",
      body: "Workers apply for a 482, 186 or 494 in the Labour agreement stream, under the agreement's terms.",
      icon: ICON.user,
    },
  ],
  heroCard: [
    { label: "Who applies", value: "The employer, in ImmiAccount", icon: ICON.buildingOffice2 },
    { label: "Cost to request", value: "No charge", icon: ICON.currencyDollar },
    { label: "How long it lasts", value: "Generally 5 years", icon: ICON.clock },
    { label: "Visas available", value: "482, 186 and 494 Labour agreement streams", icon: ICON.identification },
    { label: "Concessions possible", value: "English, salary, skills, experience, age, advertising", icon: ICON.scale },
    { label: "Permanent residence", value: "Through the 186 or 494, if the agreement allows", icon: ICON.home },
  ],
  checkedAgainst: "Home Affairs (including its Labour Agreement program information guide) and the Migration Act and Regulations",
  actors: [
    {
      id: "employer",
      name: "Your business (the employer)",
      short: "Employer",
      icon: ICON.buildingOffice2,
      tone: "pink",
      role: "Requests the agreement, then nominates workers under it.",
      does: [
        "Shows a genuine shortage that Australian workers can't fill",
        "Consults unions and industry, and builds a business case",
        "Lodges the request in ImmiAccount, with no charge",
        "Nominates workers within its yearly [[ceiling|nomination ceiling]]",
      ],
    },
    {
      id: "dar",
      name: "Designated Area Representative",
      short: "DAMA rep",
      icon: ICON.mapPin,
      tone: "amber",
      role: "The regional body that holds a [[dama|DAMA]] head agreement and endorses local employers.",
      does: [
        "Signs the five-year head agreement with the Australian Government",
        "Lists the region's occupations, including semi-skilled ones, and concessions",
        "Endorses employers before they lodge a DAMA request",
      ],
    },
    {
      id: "you",
      name: "You (the worker)",
      short: "You",
      icon: ICON.user,
      tone: "green",
      role: "Apply for your visa under the agreement's terms.",
      does: [
        "Get nominated in an occupation the agreement lists",
        "Meet the visa criteria as the agreement modifies them",
        "Work only for the party to the agreement",
      ],
    },
    {
      id: "government",
      name: "Department of Home Affairs",
      short: "Home Affairs",
      icon: ICON.buildingLibrary,
      tone: "blue",
      role: "Decides whether to enter an agreement, then assesses nominations and visas.",
      does: [
        "Assesses the request and may consult Jobs and Skills Australia",
        "Executes the agreement, generally for 5 years",
        "Approves nominations within the yearly ceiling",
        "Can suspend or end the agreement for breaches",
      ],
    },
  ],
  flows: [
    {
      from: "dar",
      to: "employer",
      label: "Endorses (DAMA)",
      detail: "For a [[dama|DAMA]], the Designated Area Representative endorses the business before it lodges a request.",
    },
    {
      from: "employer",
      to: "government",
      label: "Requests agreement",
      detail: "The employer lodges the request in ImmiAccount with its business case, stakeholder consultation and any [[concession|concessions]] it seeks. There's no charge.",
    },
    {
      from: "government",
      to: "employer",
      label: "Agreement signed",
      detail: "If it's approved, the employer gets an executed agreement, generally for 5 years, with yearly [[ceiling|nomination ceilings]].",
    },
    {
      from: "employer",
      to: "you",
      label: "Nominates you",
      detail: "The employer nominates workers in the agreement's occupations, paying the nomination charge and the [[saf|SAF levy]].",
    },
    {
      from: "you",
      to: "government",
      label: "Worker applies",
      detail: "The worker applies for a 482, 186 or 494 in the Labour agreement stream, meeting the criteria as the agreement modifies them.",
    },
  ],
  journeyTitle: "From skills shortage to a signed labour agreement",
  journeyHighlight: "labour agreement",
  stages: [
    {
      id: "check",
      short: "Check",
      title: "The employer checks the standard visas first",
      who: ["employer"],
      description: "A labour agreement is only for needs the standard visas can't meet.",
      points: [
        "If the occupation is on the [[csol|Core Skills Occupation List]] and the standard rules can be met, an agreement isn't available",
        "Check whether an [[industry-agreement|industry agreement]] or a [[dama|DAMA]] already covers the business",
      ],
      youHold: "The right agreement type for the business",
      icon: ICON.magnifyingGlass,
    },
    {
      id: "endorse",
      short: "Endorse",
      title: "Get endorsement where it's needed",
      who: ["dar", "employer"],
      description: "Some agreement types need a third party's backing before you lodge.",
      points: [
        "DAMA: the Designated Area Representative's endorsement",
        "[[project-agreement|Project agreement]]: the project company's endorsement",
        "A new industry agreement: industry bodies write to the Department first",
      ],
      youHold: "An endorsement letter",
      icon: ICON.checkBadge,
    },
    {
      id: "prepare",
      short: "Prepare",
      title: "Consult and build the business case",
      who: ["employer"],
      description: "The request must be evidence-based.",
      points: [
        "Consult unions and industry stakeholders",
        "Show the shortage and the efforts to recruit in Australia",
        "Set out each [[concession]] with strong reasons",
        "Include an accountant's statement of financial viability",
      ],
      youHold: "A complete, evidence-based request",
      icon: ICON.clipboardDocumentCheck,
    },
    {
      id: "lodge",
      short: "Lodge",
      title: "Lodge the request",
      who: ["employer", "government"],
      description: "Lodge in ImmiAccount. There's no charge to request an agreement.",
      points: [
        "Home Affairs may ask for more information, usually with 7 or 14 days to reply",
        "Incomplete requests are returned without assessment",
        "It may consult Jobs and Skills Australia",
      ],
      youHold: "An executed agreement, generally for 5 years",
      cost: "No charge",
      icon: ICON.paperAirplane,
    },
    {
      id: "nominate",
      short: "Nominate",
      title: "Nominate workers",
      who: ["employer", "you"],
      description: "Nominate only within the agreement's terms.",
      points: [
        "Only occupations in the agreement, within the yearly [[ceiling|nomination ceiling]]",
        "Pay the nomination charge and the [[saf|SAF levy]]",
        "Advertise first where the agreement requires it",
        "Workers apply in the 482, 186 or 494 Labour agreement stream",
      ],
      youHold: "Approved nominations and sponsored workers",
      cost: "Nomination charge and SAF levy, paid by the employer",
      icon: ICON.userPlus,
    },
    {
      id: "comply",
      short: "Comply",
      title: "Comply, report and renew",
      who: ["employer", "government"],
      description: "Keep the agreement in good standing for its whole term.",
      points: [
        "Meet the same obligations as a standard business sponsor, unless the agreement says otherwise",
        "Report as the agreement requires, and stay within the ceiling",
        "Request a new agreement before the 5 years end, if the need continues",
      ],
      youHold: "An agreement in good standing",
      icon: ICON.shieldCheck,
    },
  ],
  check: {
    title: "Is a labour agreement the right route?",
    highlight: "right route",
    ok: {
      title: "A labour agreement could fit",
      body: "Nothing in your answers rules it out. The next step is building a strong, evidence-based request.",
    },
    todo: {
      title: "Possible, with work to do first",
      body: "None of these are deal-breakers, but each needs attention before you lodge a request.",
    },
    stop: {
      title: "A labour agreement may not be the answer",
      body: "At least one answer suggests an agreement isn't available yet. The notes explain why and what might work instead.",
    },
    disclaimer: "A general self-check, not advice or a prediction. Home Affairs doesn't have to enter into an agreement, and each request is assessed on its merits.",
  },
  quiz: [
    {
      id: "standard",
      topic: "Standard visas",
      question: "Can the role be filled through a standard 482, 494 or 186?",
      options: [
        {
          value: "nolist",
          label: "No: the occupation isn't on a list, or isn't in ANZSCO",
          status: "ok",
          note: "That's one of the main reasons labour agreements exist.",
        },
        {
          value: "concessions",
          label: "No: we need concessions to English, salary, experience or age",
          status: "ok",
          note: "Possible, but each [[concession]] needs strong reasons.",
        },
        {
          value: "yes",
          label: "Yes: it's on the list and we can meet the standard rules",
          status: "stop",
          note: "Then a labour agreement isn't available. Use the standard sponsorship program.",
          link: { label: "Employer sponsorship guide", href: "/visas/employer-sponsored/employer-sponsorship-and-nomination" },
        },
      ],
    },
    {
      id: "shortage",
      topic: "Genuine shortage",
      question: "Can you show a genuine shortage that Australian workers can't fill?",
      options: [
        { value: "yes", label: "Yes, with evidence of recruiting in Australia", status: "ok", note: "Keep that evidence: the business case relies on it." },
        {
          value: "thin",
          label: "We've tried, but our evidence is thin",
          status: "todo",
          note: "Build it up first. You must show Australians can't fill the roles, and the Department doesn't have to enter into an agreement.",
        },
        {
          value: "no",
          label: "Not really",
          status: "stop",
          note: "A genuine labour market need that Australian workers can't fill is a basic requirement for every agreement.",
        },
      ],
    },
    {
      id: "operating",
      topic: "Time operating",
      question: "How long has the business been operating in Australia?",
      options: [
        { value: "long", label: "12 months or more", status: "ok", note: "Meets the minimum for a [[company-specific|company-specific agreement]]." },
        {
          value: "short",
          label: "Less than 12 months",
          status: "todo",
          note: "A company-specific agreement needs at least 12 months of lawful, active operation. Get advice on the other agreement types.",
          link: { label: "Get advice", href: "/bookings" },
        },
      ],
    },
    {
      id: "region",
      topic: "Region or industry",
      question: "Is the business in a DAMA region, or in an industry with a template agreement?",
      options: [
        { value: "dama", label: "In a DAMA region", status: "ok", note: "Get the [[dar|Designated Area Representative's]] endorsement before you lodge." },
        {
          value: "industry",
          label: "In an industry with a template agreement",
          status: "ok",
          note: "Use that [[industry-agreement|industry agreement]]. Its terms are fixed, and no further concessions can be requested.",
        },
        { value: "neither", label: "Neither", status: "ok", note: "A [[company-specific|company-specific agreement]] may be the route." },
      ],
    },
    {
      id: "salary",
      topic: "Salary concession",
      question: "Will you ask for a salary concession?",
      options: [
        { value: "no", label: "No", status: "ok", note: "Nothing more to justify on salary." },
        {
          value: "cat3",
          label: "Yes, and we're in a Category 3 regional area",
          status: "todo",
          note: "Possible, but never below what an equivalent Australian worker receives.",
        },
        {
          value: "elsewhere",
          label: "Yes, but we're not in a Category 3 regional area",
          status: "stop",
          note: "Salary concessions are only available in [[category-3|Category 3]] regional areas.",
        },
      ],
    },
    {
      id: "consult",
      topic: "Consultation",
      question: "Have you consulted unions and industry stakeholders?",
      options: [
        { value: "yes", label: "Yes", status: "ok", note: "Include the evidence in your request." },
        { value: "notyet", label: "Not yet", status: "todo", note: "Consultation is part of the request, so do it before you lodge." },
      ],
    },
    {
      id: "training",
      topic: "Training Australians",
      question: "Do you have a plan to train Australians for these roles?",
      options: [
        { value: "yes", label: "Yes", status: "ok", note: "Agreements are a temporary solution, so a training plan supports your case." },
        { value: "no", label: "Not yet", status: "todo", note: "Employers are expected to plan to train Australians. Build this into your request." },
      ],
    },
    {
      id: "history",
      topic: "Compliance history",
      question: "Any adverse information about the business, such as past sponsor breaches?",
      options: [
        { value: "none", label: "None", status: "ok", note: "A company-specific agreement needs no adverse information about the business." },
        {
          value: "some",
          label: "Yes",
          status: "todo",
          note: "It needs to be addressed before you lodge. Get advice first.",
          link: { label: "Get advice", href: "/bookings" },
        },
      ],
    },
  ],
  myths: [
    {
      myth: "A labour agreement is a shortcut around the standard visas.",
      fact: "No. It's only for needs the standard visas can't meet. If the occupation is on the Core Skills Occupation List and you can meet the standard criteria, an agreement isn't available.",
    },
    {
      myth: "Requesting a labour agreement is expensive.",
      fact: "The request itself is free. Costs arise later: the nomination charge and the SAF levy when you nominate, and the visa charges the worker pays.",
    },
    {
      myth: "PALM workers need a labour agreement.",
      fact: "No. PALM is a separate program under the subclass 403 visa, run by the Department of Employment and Workplace Relations.",
    },
    {
      myth: "Any business in a DAMA region can use it straight away.",
      fact: "No. The Designated Area Representative must endorse your business first, you must show you tried to recruit Australians, and you then enter your own labour agreement.",
    },
    {
      myth: "A concession means I can pay less than Australians.",
      fact: "No. Salary concessions are only possible in Category 3 regional areas, and never below what an equivalent Australian worker receives.",
    },
    {
      myth: "Workers under an agreement can work for related businesses.",
      fact: "No. They can work only for the party to the agreement, not an associated entity.",
    },
    {
      myth: "An English concession covers my licence too.",
      fact: "No. Concessions don't override registration or licensing requirements, and English concessions don't apply to licensing bodies.",
    },
  ],
  roles: [
    {
      id: "employer",
      label: "I'm the employer",
      tone: "pink",
      intro: "Your part is proving the need, asking only for [[concession|concessions]] you can justify, and staying compliant.",
      groups: [
        {
          title: "Before you request",
          items: [
            "Confirm the standard visas can't meet the need",
            "Check for an [[industry-agreement|industry agreement]] or a [[dama|DAMA]] that covers you",
            "Consult unions and industry stakeholders",
          ],
        },
        {
          title: "In your request",
          items: [
            "The occupations, with six-digit ANZSCO codes and duties",
            "Evidence of the shortage and of recruiting in Australia",
            "How many nominations you need each year",
            "Each concession, with strong reasons",
          ],
        },
        {
          title: "Once you have an agreement",
          items: [
            "Nominate only listed occupations, within the yearly [[ceiling|nomination ceiling]]",
            "Pay the [[saf|SAF levy]] on each nomination (except ministers of religion and religious assistants under the 482 or 186)",
            "Meet your sponsorship obligations and report as the agreement requires",
          ],
        },
      ],
      link: { label: "Read the employer sponsorship guide", href: "/visas/employer-sponsored/employer-sponsorship-and-nomination" },
    },
    {
      id: "worker",
      label: "I'm the worker",
      intro: "Your part is meeting the visa criteria as the agreement modifies them, and working only for the party to it.",
      groups: [
        {
          title: "Check the agreement's terms",
          items: [
            "Which visa it offers: the 482, 186 or 494 Labour agreement stream",
            "Any concessions to English, experience, skills or age",
            "Whether it includes a permanent residence pathway",
          ],
        },
        {
          title: "When you apply",
          items: [
            "482: 12 months of full-time equivalent experience in the last five years, unless the agreement says otherwise",
            "494: three years of experience, and under 45 unless the agreement states otherwise",
            "Hold any licence or registration your occupation needs",
          ],
        },
        {
          title: "Once you're working",
          items: [
            "Work only for the party to the agreement, not an associated entity",
            "Keep to your visa's work condition (8607 for a 482, 8608 for a 494)",
          ],
        },
      ],
    },
  ],
  glossary: [
    {
      id: "labour-agreement",
      term: "Labour agreement",
      definition: "A formal contract between an employer and the Australian Government that lets it sponsor overseas workers outside the standard rules. Agreements are generally in effect for five years.",
    },
    {
      id: "dama",
      term: "DAMA",
      full: "Designated Area Migration Agreement",
      definition: "A two-tier agreement for a region. A five-year head agreement with a Designated Area Representative comes first, then an individual labour agreement with each endorsed employer. There are currently 13 DAMAs.",
    },
    {
      id: "dar",
      term: "Designated Area Representative",
      definition: "The regional body that holds a DAMA head agreement, usually a state or territory government, council, chamber of commerce or regional development body. It endorses employers before they lodge a request.",
    },
    {
      id: "industry-agreement",
      term: "Industry labour agreement",
      definition: "A template agreement with fixed terms and concessions for a whole industry: dairy, fishing, meat, pork, horticulture, advertising, on-hire, fine dining restaurants, aged care and ministers of religion.",
    },
    {
      id: "company-specific",
      term: "Company-specific agreement",
      definition: "An agreement negotiated case by case with one employer. The business must have operated lawfully and actively in Australia for at least 12 months, and no industry, DAMA or project agreement can cover the occupation.",
    },
    {
      id: "project-agreement",
      term: "Project agreement",
      definition: "A two-tier agreement for the construction phase of a large resources or infrastructure project: a deed with the project company, then labour agreements with endorsed direct employers.",
    },
    {
      id: "gtes",
      term: "GTES agreement",
      full: "Global Talent Employer Sponsored agreement",
      definition: "A streamlined labour agreement for highly skilled niche roles that the 482 Core Skills or Specialist Skills streams can't fill. It has a start-up stream and an established business stream.",
    },
    {
      id: "concession",
      term: "Concession",
      definition: "A change to a standard visa rule that an agreement allows. Examples are lower English scores, a lower salary in Category 3 areas, less experience or an older age limit. Each must be justified.",
    },
    {
      id: "ceiling",
      term: "Nomination ceiling",
      definition: "The most nominations an employer can lodge in each year of its agreement. Nominations above the ceiling fail, though the SAF levy can be refunded.",
    },
    {
      id: "category-3",
      term: "Category 3 regional area",
      definition: "The regional areas where an agreement can include a salary concession. Even there, pay can never be below what an equivalent Australian worker receives.",
    },
    {
      id: "saf",
      term: "SAF levy",
      full: "Skilling Australians Fund levy",
      definition: "A training levy paid on every nomination: A$1,200 or A$1,800 a year for a 482, or a one-off A$3,000 or A$5,000 for a 186 or 494, by turnover. Ministers of religion and religious assistants under the 482 or 186 are exempt.",
    },
    {
      id: "csol",
      term: "CSOL",
      full: "Core Skills Occupation List",
      definition: "The list of occupations open to the standard 482 Core Skills stream. If an occupation is on it and the standard rules can be met, a labour agreement isn't available.",
    },
  ],
  cta: {
    title: "Thinking about a labour agreement?",
    subtitle: "We check whether the standard program fits first, then help you build an evidence-based request and nominate workers under the agreement.",
  },
  finder: {
    id: "agreement-finder",
    navLabel: "Right route?",
    eyebrow: "Agreement finder",
    title: "Is a labour agreement the right route?",
    highlight: "right route",
    subtitle: "Two or three taps to the likely agreement type, or to the standard program if that fits better.",
    start: "who",
    questions: [
      {
        id: "who",
        question: "Who are you?",
        options: [
          { label: "An employer with a skills shortage", next: "fit" },
          { label: "A worker whose employer has, or may get, an agreement", next: "worker" },
        ],
      },
      {
        id: "fit",
        question: "Could the standard visas fill the role?",
        help: "Standard visas need an occupation on the relevant list (or the Specialist Skills salary for a 482) and the usual English, experience and age rules.",
        options: [
          { label: "Yes: the occupation is on the list and the standard rules can be met", next: "standard" },
          { label: "No: the occupation isn't on a list, or isn't in ANZSCO", next: "type" },
          { label: "No: we'd need concessions to English, salary, experience or age", next: "type" },
        ],
      },
      {
        id: "type",
        question: "Which describes the business?",
        options: [
          { label: "In a DAMA region, such as the Northern Territory or Far North Queensland", next: "dama" },
          { label: "In an industry with a template, such as dairy, meat, aged care or fine dining", next: "industry" },
          { label: "Building a large resources or infrastructure project", next: "project" },
          { label: "Hiring for highly skilled niche roles the standard 482 streams can't fill", next: "gtes" },
          { label: "None of these", next: "company" },
        ],
      },
      {
        id: "worker",
        question: "What do you want to know?",
        options: [
          { label: "Which visa I'd apply for", next: "worker-visa" },
          { label: "Whether it can lead to permanent residence", next: "worker-pr" },
        ],
      },
    ],
    outcomes: [
      {
        id: "standard",
        title: "Use the standard program",
        body: "If the occupation is on the Core Skills Occupation List and the business can meet the standard criteria, a labour agreement isn't available. Sponsor through the standard 482, 494 or 186 instead.",
        href: "/visas/employer-sponsored/employer-sponsorship-and-nomination",
        tone: "stop",
      },
      {
        id: "dama",
        title: "A Designated Area Migration Agreement (DAMA)",
        body: "A DAMA is a five-year head agreement for a region, giving access to extra occupations, including semi-skilled ones, and agreed concessions. Once the Designated Area Representative endorses you, you enter your own labour agreement under it.",
        watch: [
          "Get the endorsement before you lodge in ImmiAccount",
          "Show you tried to recruit Australians first",
          "A DAMA can't be used for an industry covered by an industry agreement",
        ],
        href: PAGE,
      },
      {
        id: "industry",
        title: "An industry labour agreement",
        body: "Template agreements with fixed terms and concessions cover dairy, fishing, meat, pork, horticulture, advertising, on-hire, fine dining restaurants, aged care and ministers of religion. No further concessions can be requested.",
        watch: [
          "A Minister of Religion agreement doesn't need labour market testing",
          "The aged care agreement can meet labour market testing through a memorandum of understanding with the relevant union",
        ],
        href: PAGE,
      },
      {
        id: "project",
        title: "A project agreement",
        body: "For the construction phase of a large resources or infrastructure project. The project company signs an overarching deed, then endorsed direct employers enter their own labour agreements to sponsor 482 workers for peak demand.",
        watch: ["Direct employers need the project company's endorsement"],
        href: PAGE,
      },
      {
        id: "gtes",
        title: "A Global Talent Employer Sponsored (GTES) agreement",
        body: "A streamlined agreement for highly skilled niche roles that the 482 Core Skills or Specialist Skills streams can't fill. It has a start-up stream, and an established business stream for accredited sponsors.",
        watch: [
          "Check the current Global Talent Scheme page for position limits and salary thresholds",
          "Age and occupation concessions, and a permanent residence pathway after 3 years, can be requested",
        ],
        href: PAGE,
      },
      {
        id: "company",
        title: "A company-specific labour agreement",
        body: "Negotiated case by case with one employer when no industry, DAMA or project agreement covers the occupation. The business needs at least 12 months of operation, an accountant's statement of financial viability and stakeholder consultation.",
        watch: [
          "A trust can't be a party, but the trustee can",
          "Each concession needs strong reasons",
          "The Department doesn't have to enter into an agreement",
        ],
        href: PAGE,
      },
      {
        id: "worker-visa",
        title: "Your visa under an agreement",
        body: "You apply for a 482, 186 or 494 in the Labour agreement stream, meeting the criteria as the agreement modifies them. You can work only for the party to the agreement.",
        watch: [
          "482: 12 months of full-time equivalent experience unless the agreement says otherwise",
          "494: 3 years of experience, and work only in a designated regional area",
          "Concessions don't override licensing or registration requirements",
        ],
        href: PAGE,
      },
      {
        id: "worker-pr",
        title: "Permanent residence under an agreement",
        body: "It's possible where the agreement includes the 186 or 494 Labour agreement stream. Most company-specific and DAMA agreements do, often with an age concession, after a period on the 482 that the agreement sets.",
        watch: [
          "Under 45 for the 186, unless the agreement provides otherwise",
          "Applying for the 186 in Australia needs a 457 or 482 granted under a labour agreement",
        ],
        href: "/visas/employer-sponsored/employer-nomination-scheme-visa-186",
      },
    ],
    footnote: "A general guide, not advice. Home Affairs doesn't have to enter into an agreement, and the right type depends on your full circumstances.",
  },
};
