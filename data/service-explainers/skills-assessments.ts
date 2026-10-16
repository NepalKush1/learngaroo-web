import type { ServiceExplainer } from "./types";
import { ICON } from "../visas/explainers/icons";
import { skillsAssessmentExplainer } from "../visas/explainers/skilled/skills-assessment-for-migration";

// Interactive explainer for /services/skills-assessments: what a skills
// assessment is, which visas need one and when, and how to prepare the
// evidence. Every figure is on the library pages in `pages` (data/visas/
// skilled.ts and employer-sponsored.ts, checked against Home Affairs on 12
// October 2026) or in `verifiedExtras` (re-read on the Home Affairs skills
// assessment page on 13 October 2026). The occupation search
// (`authorityFinder`) uses the Home Affairs occupation list and its
// "Assessing authorities" table. The document checklist and the expiry-date
// timeline reuse the skills assessment guide's tools.

const HA_SKILLS_ASSESSMENT = "https://immi.homeaffairs.gov.au/visas/working-in-australia/skills-assessment";
const guideEvidence = skillsAssessmentExplainer.evidence;

export const skillsAssessmentsServiceExplainer: ServiceExplainer = {
  slug: "skills-assessments",
  factsAsAt: "13 October 2026",
  pages: [
    "skills-assessment-for-migration",
    "skilled-migration-points-test",
    "skilled-independent-visa-189",
    "skilled-nominated-visa-190",
    "skilled-work-regional-visa-491",
    "employer-nomination-scheme-visa-186",
    "skilled-employer-sponsored-regional-visa-494",
    "skills-in-demand-visa-482",
    "temporary-graduate-visa-485",
  ],
  name: "skills assessment process",
  accent: "For skilled and employer-sponsored visas",
  oneLiner:
    "A skills assessment is the listed authority's decision that your skills meet the standard for your occupation. Points-tested visas need one when you're invited, and some employer and graduate visas do too.",
  bigIdeas: [
    {
      title: "One authority per occupation",
      body: "Home Affairs names the assessing authority for your occupation, and only accepts an assessment from that one.",
      icon: ICON.clipboardDocumentCheck,
    },
    {
      title: "Valid for 3 years at most",
      body: "With no period stated, it lasts 3 years from issue. A shorter stated period applies; a longer one is cut to 3 years.",
      icon: ICON.calendarDays,
    },
    {
      title: "The right type, at the right time",
      body: "A provisional 485 assessment won't do for the 189, 190, 491, 494 or 186. Each visa sets when you must hold it.",
      icon: ICON.shieldExclamation,
    },
  ],
  heroCard: [
    { label: "Who assesses", value: "The authority Home Affairs lists for your occupation", icon: ICON.clipboardDocumentCheck },
    { label: "Needed for", value: "189, 190, 491, 494 and 186 Direct Entry", icon: ICON.documentText },
    { label: "Sometimes needed", value: "Some 482s; 485 Post-Vocational (applied for)", icon: ICON.questionMarkCircle },
    { label: "How long it lasts", value: "3 years from issue, or a shorter stated period", icon: ICON.calendarDays },
    { label: "Cost", value: "Set by each authority, not Home Affairs", icon: ICON.currencyDollar },
    { label: "Where you apply", value: "Directly to the authority, usually online", icon: ICON.computerDesktop },
  ],
  checkedAgainst: "Home Affairs, the Migration Regulations and LIN 19/051",
  compare: {
    navLabel: "Compare",
    eyebrow: "Visa by visa",
    title: "What each visa asks of your assessment",
    highlight: "each visa",
    subtitle: "One assessment, different rules. Check whether you need it, when you must have it, how long it lasts and what to watch out for.",
    rows: [
      { label: "Is one needed?", icon: ICON.questionMarkCircle },
      { label: "When you must have it", icon: ICON.calendarDays },
      { label: "How long it stays valid", icon: ICON.clock },
      { label: "Work experience asked for", icon: ICON.briefcase },
      { label: "What doesn't count", icon: ICON.noSymbol },
    ],
    columns: [
      {
        page: "skilled-migration-points-test",
        name: "Points-tested",
        tagline: "Subclasses 189, 190 and 491",
        values: [
          "Yes, a suitable one for your nominated occupation",
          "By the invitation, or within the 60 days after it",
          "Valid on the invitation date: 3 years, or a shorter stated period",
          "Set by the authority; skilled work also earns points",
          "A provisional assessment issued for a 485 visa",
        ],
        bestFor: "Skilled workers seeking an invitation without an employer sponsor",
      },
      {
        page: "employer-nomination-scheme-visa-186",
        name: "186 Direct Entry",
        tagline: "Permanent, employer nominated",
        values: [
          "Yes, unless you're exempt",
          "Outcome issued before you lodge; you can submit it later",
          "Not expired; 3 years from assessment if no expiry date",
          "At least 3 years full-time in the occupation",
          "An assessment obtained for a 485 visa",
        ],
        bestFor: "Experienced workers an employer nominates straight for permanent residence",
      },
      {
        page: "skills-in-demand-visa-482",
        name: "Subclass 482",
        tagline: "Skills in Demand, employer sponsored",
        values: [
          "Only for some occupation and passport combinations, or if asked",
          "Started before you lodge, or the application is invalid",
          "Begun or completed in the 3 years before you apply",
          "At least 1 year in the last 5 years",
          "One from a body other than TRA or VETASSESS, where it's mandatory",
        ],
        bestFor: "Workers with a sponsoring employer and at least 1 year of experience",
      },
      {
        page: "temporary-graduate-visa-485",
        name: "485 Post-Vocational",
        tagline: "Temporary Graduate visa, 18 months",
        values: [
          "Yes: at least applied for, in an MLTSSL occupation",
          "Proof you've applied, when you lodge",
          "Valid at decision; issued in the last 3 years if no period is set",
          "Whatever the authority requires for its assessment",
          "An occupation off the MLTSSL, or a qualification not closely related",
        ],
        bestFor: "Recent diploma or trade graduates in an MLTSSL occupation",
      },
    ],
    footnote:
      "The 494 also needs an assessment obtained before you apply, unless you're exempt or got a 457 or 482 for the same occupation with one; a 485 assessment doesn't count. The 186 TRT and Labour Agreement streams don't need one at lodgement, but Home Affairs can ask.",
  },
  actors: [
    {
      id: "you",
      name: "You (the applicant)",
      short: "You",
      icon: ICON.user,
      tone: "green",
      role: "Choose the occupation that matches your real duties, and give evidence that stays consistent.",
      does: [
        "Find your occupation and the [[assessing-authority|assessing authority]] listed for it",
        "Apply with certified documents and pay the authority's charge",
        "Use the assessment in your [[eoi|EOI]] or visa application",
        "Keep track of when it expires",
      ],
    },
    {
      id: "referees",
      name: "Your employers (referees)",
      short: "Referees",
      icon: ICON.briefcase,
      tone: "teal",
      role: "Confirm your work history in writing.",
      does: [
        "Write references on letterhead showing dates, hours, duties and position",
        "Include the business address and contact details",
        "Describe the same work you'll later claim with Home Affairs",
      ],
    },
    {
      id: "authority",
      name: "The assessing authority",
      short: "Assessor",
      icon: ICON.clipboardDocumentCheck,
      tone: "amber",
      role: "Checks your skills against the standard it sets for your occupation.",
      does: [
        "Sets its own procedures, evidence rules, timeframes and charges",
        "May hold a skills interview or a practical test",
        "Issues a positive or negative outcome, sometimes with a validity period",
      ],
    },
    {
      id: "government",
      name: "Department of Home Affairs",
      short: "Home Affairs",
      icon: ICON.buildingLibrary,
      tone: "blue",
      role: "Names the authority for your occupation, and only accepts an assessment from that one.",
      does: [
        "Lists the occupations and their authorities in [[lin19051|LIN 19/051]]",
        "Checks the assessment is valid at the right time for your visa",
        "Can verify it with the authority and compare your references",
      ],
    },
  ],
  flows: [
    {
      from: "referees",
      to: "you",
      label: "References",
      detail: "Your employers write references showing your dates, hours, duties and position. You back them with payslips, contracts or tax records.",
    },
    {
      from: "you",
      to: "authority",
      label: "You apply",
      detail: "You lodge online with certified documents and pay the authority's charge. Some authorities add a skills interview or a practical test.",
    },
    {
      from: "authority",
      to: "you",
      label: "Outcome letter",
      detail: "A positive outcome states the occupation and, for some authorities, the date your work counts as skilled from and the validity period.",
    },
    {
      from: "you",
      to: "government",
      label: "You use it",
      detail: "You enter its date, authority and reference number in your [[eoi|EOI]], or lodge it with your visa application.",
    },
    {
      from: "government",
      to: "authority",
      label: "Home Affairs verifies",
      detail: "Home Affairs can verify the assessment with the authority, and checks your employment claims against the references you used.",
    },
  ],
  journeyTitle: "From your occupation to a valid skills assessment",
  journeyHighlight: "valid skills assessment",
  stages: [
    {
      id: "match",
      short: "Match",
      title: "Match your work to an occupation",
      who: ["you"],
      description: "Find the occupation that matches your real duties, then check which visas it's eligible for and which authority assesses it.",
      points: [
        "Search the occupations on the 189, 190 and 491 lists on this page",
        "The 186 and 482 use ANZSCO 2022; the points-tested visas and the 485 use ANZSCO 2013",
        "A mismatch with your real duties can lead to a negative outcome",
      ],
      youHold: "An occupation code, the visas it supports and its assessing authority",
      icon: ICON.magnifyingGlass,
    },
    {
      id: "criteria",
      short: "Criteria",
      title: "Check the authority's criteria",
      who: ["you", "authority"],
      description: "Read the authority's rules on qualifications, years of experience and English, and pick the type of assessment your visa needs.",
      points: [
        "For the 189, 190, 491, 494 and 186 Direct Entry, that's a full assessment, not a [[provisional|provisional 485 one]]",
        "Some authorities ask for English results or registration",
        "For trades, there may be a technical interview or practical assessment",
      ],
      youHold: "A checklist of the authority's evidence requirements",
      icon: ICON.listBullet,
    },
    {
      id: "evidence",
      short: "Evidence",
      title: "Gather qualification and employment evidence",
      who: ["you", "referees"],
      description: "Collect your qualifications and a reference from each employer you rely on, with records that back them up.",
      points: [
        "Certificates and full academic transcripts, with certified translations where needed",
        "References on letterhead showing dates, hours, duties and position",
        "Payslips, contracts or tax records as supporting evidence",
        "Use the same references you'll later give Home Affairs",
      ],
      youHold: "A complete, consistent evidence pack",
      icon: ICON.documentText,
    },
    {
      id: "apply",
      short: "Apply",
      title: "Apply to the authority",
      who: ["you", "authority"],
      description: "Lodge online with certified documents and pay the authority's charge. Timeframes differ between authorities.",
      points: [
        "Some include a skills interview or a practical test",
        "The receipt is enough to lodge a 485 Post-Vocational Education Work application",
      ],
      youHold: "An application receipt",
      cost: "Set by the assessing authority, paid by you",
      icon: ICON.paperAirplane,
    },
    {
      id: "outcome",
      short: "Outcome",
      title: "Receive the outcome",
      who: ["authority", "you"],
      description: "A positive outcome letter states the occupation assessed and, for some authorities, the validity period and the date your work counts as skilled from.",
      points: [
        "Valid for 3 years from issue, or the shorter period stated",
        "A negative outcome stops a skilled visa application in that occupation",
        "Review the reasons, or consider another occupation",
      ],
      youHold: "A positive skills assessment",
      icon: ICON.documentCheck,
    },
    {
      id: "use",
      short: "Use",
      title: "Use it at the right time",
      who: ["you", "government"],
      description: "Enter the details in your [[eoi|EOI]], or lodge the assessment with your visa application. Each visa sets its own timing.",
      points: [
        "189, 190 and 491: valid on the invitation date",
        "186 Direct Entry and 494: obtained before you apply",
        "482: started before you lodge, where it's mandatory under [[immi18039|IMMI 18/039]]",
        "Diarise the expiry date: renew it if an invitation could come later",
      ],
      youHold: "An EOI or visa application anchored to a valid assessment",
      icon: ICON.checkBadge,
    },
  ],
  check: {
    title: "Is your skills assessment ready for your visa?",
    highlight: "skills assessment",
    ok: {
      title: "Your assessment looks ready",
      body: "Nothing in your answers suggests a problem. Check the expiry date against when you could be invited or lodge.",
    },
    todo: {
      title: "Some things to sort first",
      body: "Your answers show steps to take before you rely on the assessment, such as the type, the timing or your references.",
    },
    stop: {
      title: "This assessment can't be used as it is",
      body: "At least one answer means the assessment wouldn't be accepted. The notes explain what would need to change.",
    },
    disclaimer: "A general self-check, not advice. Each authority's own rules, and the visa you apply for, decide what you need.",
  },
  quiz: [
    {
      id: "visa",
      topic: "Your visa",
      question: "Which visa do you need the assessment for?",
      options: [
        {
          value: "points",
          label: "A 189, 190 or 491",
          status: "ok",
          note: "You need a suitable assessment that is valid on the invitation date. Home Affairs accepts one obtained within the 60-day invitation period, but no later.",
        },
        {
          value: "employer",
          label: "A 186 Direct Entry or a 494",
          status: "ok",
          note: "The outcome must be issued before you apply. You also need at least 3 years of full-time experience in the occupation, unless you're exempt.",
        },
        {
          value: "482",
          label: "A 482",
          status: "todo",
          note: "Only certain occupation and passport combinations need one. If yours does, it must be started before you lodge, or the application is invalid.",
        },
        {
          value: "485",
          label: "A 485 Post-Vocational Education Work stream",
          status: "ok",
          note: "Proof that you've applied for an assessment in an [[mltssl|MLTSSL]] occupation is enough to lodge. It must be valid when the visa is decided.",
        },
        {
          value: "unsure",
          label: "I'm not sure yet",
          status: "todo",
          note: "Start with your occupation and the visas it supports. The search on this page shows the authority for occupations on the 189, 190 and 491 lists.",
          link: { label: "Search your occupation", href: "#authorities" },
        },
      ],
    },
    {
      id: "authority",
      topic: "Authority",
      question: "Do you know your occupation and its assessing authority?",
      options: [
        { value: "yes", label: "Yes, the one listed for my occupation", status: "ok", note: "Home Affairs only accepts an assessment from that authority." },
        {
          value: "occupation",
          label: "I know my occupation, but not its authority",
          status: "todo",
          note: "The search on this page shows the authority Home Affairs names for each occupation on the 189, 190 and 491 lists.",
          link: { label: "Find your assessing authority", href: "#authorities" },
        },
        {
          value: "unsure",
          label: "I'm not sure which occupation fits my duties",
          status: "todo",
          note: "Choose the occupation that matches your real duties. A mismatch can lead to a negative outcome or a later dispute.",
          link: { label: "Occupation search", href: "/occupations" },
        },
      ],
    },
    {
      id: "type",
      topic: "Type",
      question: "Which kind of assessment do you have, or plan to get?",
      options: [
        { value: "full", label: "A full migration assessment", status: "ok", note: "That's the kind the 189, 190, 491, 494 and 186 Direct Entry need." },
        {
          value: "provisional",
          label: "A provisional assessment issued for a 485",
          status: "todo",
          note: "It isn't suitable for the 189, 190, 491, 494, the 186 Direct Entry stream or partner points. You'll need a full assessment, usually after gaining work experience.",
        },
        { value: "none", label: "None yet", status: "todo", note: "Check the authority's criteria and apply for the type your visa needs." },
      ],
    },
    {
      id: "validity",
      topic: "Validity",
      question: "When was your assessment issued?",
      options: [
        {
          value: "valid",
          label: "In the last 3 years, with no shorter period stated",
          status: "ok",
          note: "It's valid until 3 years from issue. Check that covers your likely invitation or lodgement date.",
          link: { label: "See your expiry date", href: "#timeline" },
        },
        {
          value: "shorter",
          label: "It states a shorter period that ends soon",
          status: "todo",
          note: "The shorter stated period applies. Plan a new assessment if your invitation or lodgement could come after it ends.",
        },
        {
          value: "expired",
          label: "More than 3 years ago",
          status: "todo",
          note: "It has expired for migration purposes, even if it states a longer period. You'll need a new one.",
        },
        {
          value: "notyet",
          label: "I don't have one yet",
          status: "todo",
          note: "Plan the timing: for the 189, 190 and 491 it must be valid on your invitation date.",
        },
      ],
    },
    {
      id: "references",
      topic: "References",
      question: "Do your employment references show dates, hours, duties and position?",
      help: "On company letterhead, for each job you rely on.",
      options: [
        { value: "yes", label: "Yes, on letterhead, with payslips or tax records", status: "ok", note: "Complete references like these are what authorities usually look for." },
        {
          value: "partly",
          label: "Some details are missing",
          status: "todo",
          note: "Ask your employers for complete references before you apply, and use the same ones in your visa application.",
          link: { label: "Use the evidence checklist", href: "#evidence" },
        },
        {
          value: "cannot",
          label: "I can't get references from some employers",
          status: "todo",
          note: "Get advice before you apply. Each authority sets its own evidence rules.",
          link: { label: "Get advice", href: "/bookings" },
        },
      ],
    },
    {
      id: "consistency",
      topic: "Consistency",
      question: "Will the work history in your visa application match your assessment?",
      options: [
        { value: "yes", label: "Yes, the same references and dates", status: "ok", note: "Consistent evidence is what Home Affairs expects." },
        {
          value: "no",
          label: "Some details differ",
          status: "todo",
          note: "Differences between the assessment and the visa application can lead to refusal under [[pic4020|PIC 4020]] and a 3-year bar. Get advice first.",
          link: { label: "Get advice", href: "/bookings" },
        },
      ],
    },
    {
      id: "cricos",
      topic: "Australian study",
      question: "Does the assessment rely on an Australian qualification you studied for on a student visa?",
      options: [
        { value: "no", label: "No", status: "ok", note: "Nothing extra to check here." },
        { value: "cricos", label: "Yes, a CRICOS-registered course", status: "ok", note: "A [[cricos|CRICOS]]-registered course can be the basis of the assessment." },
        {
          value: "notcricos",
          label: "Yes, but the course wasn't CRICOS-registered",
          status: "stop",
          note: "Home Affairs doesn't accept that course as the basis of the assessment for the points-tested visas or the 485.",
          link: { label: "Get advice", href: "/bookings" },
        },
      ],
    },
  ],
  myths: [
    {
      myth: "Any assessing authority will do.",
      fact: "No. Home Affairs only accepts an assessment issued by the authority listed for your nominated occupation.",
    },
    {
      myth: "My assessment lasts as long as the authority says.",
      fact: "If no period is shown, it's valid for 3 years from issue. A shorter stated period applies, but a longer one is treated as 3 years.",
    },
    {
      myth: "My 485 assessment works for any later visa.",
      fact: "No. A provisional assessment issued for a Temporary Graduate visa isn't suitable for the 189, 190, 491, the 186 Direct Entry stream or partner points, and a 485 assessment doesn't count for the 494.",
    },
    {
      myth: "I can get assessed after I'm invited.",
      fact: "For the 189, 190 and 491 you need it at invitation. Following the Thapa decision, Home Affairs accepts one obtained within the 60-day invitation period, but no later.",
    },
    {
      myth: "Every employer-sponsored visa needs an assessment.",
      fact: "No. The 186 Direct Entry stream and the 494 do, unless you're exempt. The 186 TRT and Labour Agreement streams don't at lodgement, though Home Affairs can ask. For the 482, only certain applicants need one.",
    },
    {
      myth: "Doctors need a separate skills assessment.",
      fact: "For doctors, full AHPRA registration is the skills assessment, so there's no separate application. For solicitors and barristers, admission to practise is the assessment.",
    },
    {
      myth: "A negative outcome doesn't affect my visa plans.",
      fact: "It does: you can't lodge a skilled visa application in that occupation until a positive assessment is issued. Review the reasons, or consider another occupation.",
    },
    {
      myth: "Home Affairs takes the assessment at face value.",
      fact: "It can verify the assessment with the authority, and checks your employment claims against the references you used. Inconsistencies can lead to refusal under PIC 4020.",
    },
  ],
  glossary: [
    {
      id: "skills-assessment",
      term: "Skills assessment",
      definition: "A decision by the assessing authority listed for your occupation that your qualifications and experience meet its standard.",
    },
    {
      id: "assessing-authority",
      term: "Assessing authority",
      definition: "The organisation Home Affairs lists for your occupation to assess your skills, such as ACS, Engineers Australia, VETASSESS or TRA. Each one sets its own procedures, evidence, timeframes and charges.",
    },
    {
      id: "lin19051",
      term: "LIN 19/051",
      definition: "The legislative instrument that specifies the skilled occupations and the assessing authority for each one.",
    },
    {
      id: "anzsco",
      term: "ANZSCO",
      full: "Australian and New Zealand Standard Classification of Occupations",
      definition: "The national list of occupation codes. The 186 and 482 use ANZSCO 2022; the points-tested visas and the 485 use ANZSCO 2013.",
    },
    {
      id: "combined-list",
      term: "Combined occupation list",
      definition: "The Home Affairs combined list of eligible skilled occupations. It groups occupations into 5 lists (including the MLTSSL, STSOL, ROL and CSOL) and names the assessing authority for most of them.",
    },
    {
      id: "mltssl",
      term: "MLTSSL",
      full: "Medium and Long-term Strategic Skills List",
      definition: "One of the occupation lists. The 485 Post-Vocational Education Work stream needs an MLTSSL occupation.",
    },
    {
      id: "provisional",
      term: "Provisional 485 assessment",
      definition: "A type of assessment some authorities issue to recent Australian graduates for a Temporary Graduate visa. It isn't suitable for the points-tested visas, the 186 Direct Entry stream, the 494 or partner points.",
    },
    {
      id: "thapa",
      term: "Thapa decision",
      definition: "A 2021 court decision. Following it, Home Affairs accepts a skills assessment obtained within the 60-day invitation period for the 189, 190 and 491.",
    },
    {
      id: "immi18039",
      term: "IMMI 18/039",
      definition: "The legal instrument listing which occupation and passport combinations need a mandatory skills assessment, from TRA or VETASSESS, for a 482.",
    },
    {
      id: "cricos",
      term: "CRICOS",
      definition: "The register of courses for student visa holders. An assessment based on an Australian qualification gained on a student visa needs a CRICOS-registered course.",
    },
    {
      id: "eoi",
      term: "EOI",
      full: "Expression of interest",
      definition: "Your online profile in SkillSelect for the 189, 190 and 491, where you enter your assessment's date, authority and reference number.",
    },
    {
      id: "pic4020",
      term: "PIC 4020",
      definition: "The rule on false or misleading information. References that differ between your assessment and visa application can lead to refusal and a 3-year bar.",
    },
    {
      id: "vetassess",
      term: "VETASSESS",
      definition: "The authority for most general professional and non-trade occupations. It can also assess how an overseas degree compares with the Australian Qualifications Framework.",
    },
    {
      id: "tra",
      term: "TRA",
      full: "Trades Recognition Australia",
      definition: "The assessing authority for trade occupations. Some trades need a technical interview or practical assessment.",
    },
    {
      id: "ahpra",
      term: "AHPRA",
      full: "Australian Health Practitioner Regulation Agency",
      definition: "For doctors, full AHPRA registration (general, unconditional, or conditional specialist registration) counts as the skills assessment.",
    },
  ],
  cta: {
    subtitle:
      "We help you choose the right occupation and authority, check your evidence against its rules, and keep your assessment and visa application consistent.",
  },
  verifiedExtras: [
    {
      fact: "For the subclass 186 Direct Entry stream, the assessment's result must have been obtained before the date of the visa application, but the assessment can be submitted after the application is made. An assessment provided after its expiry date is no longer valid. One with no expiry date is valid for 3 years from the date of assessment, so it is no longer valid if more than 3 years have passed when the visa application is made.",
      source: HA_SKILLS_ASSESSMENT,
    },
    {
      fact: "For the subclass 485 Post-Vocational Education Work stream, an assessment with a set validity period must not have expired by the time of the decision; with no set period, it must have been obtained within the last 3 years. If it is based on a qualification gained in Australia on a student visa, the course must be CRICOS-registered.",
      source: HA_SKILLS_ASSESSMENT,
    },
  ],
  authorityFinder: true,
  evidence: guideEvidence && {
    ...guideEvidence,
    footnote:
      "Based on what assessing authorities typically ask for, as our skills assessment guide stated on 12 October 2026. The authority's own requirements decide what you need.",
  },
  timeline: skillsAssessmentExplainer.timeline,
};
