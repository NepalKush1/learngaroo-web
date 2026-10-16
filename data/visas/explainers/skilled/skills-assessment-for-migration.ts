import type { VisaExplainer } from "../types";
import { ICON } from "../icons";

// Interactive explainer for the skills assessment for migration guide.
// Every figure matches data/visas/skilled.ts (checked against Home Affairs
// on 12 October 2026). The validity timeline uses the 3-year rule the page
// states; the document checklist uses the page's "What authorities
// typically ask for" list.

export const skillsAssessmentExplainer: VisaExplainer = {
  slug: "skills-assessment-for-migration",
  factsAsAt: "12 October 2026",
  oneLiner:
    "A skills assessment is the listed authority's decision that your skills meet the Australian standard for your occupation. Points-tested visas need one, and it usually lasts 3 years.",
  bigIdeas: [
    { title: "One authority per occupation", body: "The occupation list names the authority for your occupation. Home Affairs only accepts that one.", icon: ICON.clipboardDocumentCheck },
    { title: "Valid for 3 years", body: "Unless the authority states a shorter period. For the 189, 190 and 491 it must be valid when you're invited.", icon: ICON.calendarDays },
    { title: "Full, not provisional", body: "A provisional 485 assessment can't be used for a permanent visa or for partner points.", icon: ICON.shieldExclamation },
  ],
  heroCard: [
    { label: "Who assesses", value: "39 authorities, named on the occupation list", icon: ICON.clipboardDocumentCheck },
    { label: "Needed for", value: "189, 190, 491, 186 Direct Entry and some 482s", icon: ICON.documentText },
    { label: "Validity", value: "3 years, or a shorter period stated on it", icon: ICON.calendarDays },
    { label: "Cost", value: "Set by each authority, not Home Affairs", icon: ICON.currencyDollar },
    { label: "Where to apply", value: "Directly to the authority, usually online", icon: ICON.computerDesktop },
    { label: "Then", value: "Use it in your EOI or visa application", icon: ICON.paperAirplane },
  ],
  checkedAgainst: "Home Affairs, the Migration Regulations and LIN 19/051",
  actors: [
    {
      id: "you",
      name: "You (the applicant)",
      short: "You",
      icon: ICON.user,
      tone: "green",
      role: "Choose the right occupation and authority, and give evidence that stays consistent.",
      does: [
        "Match your duties to an [[anzsco|ANZSCO]] occupation",
        "Apply to the [[assessing-authority|assessing authority]] listed for it",
        "Use the assessment in your EOI or visa application",
        "Keep track of when it expires",
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
        "May hold a skills interview or practical test",
        "Issues a positive or negative outcome, sometimes with a validity period",
        "May say whether your overseas qualification is comparable",
      ],
    },
    {
      id: "government",
      name: "Department of Home Affairs",
      short: "Home Affairs",
      icon: ICON.buildingLibrary,
      tone: "blue",
      role: "Accepts only an assessment from the listed authority, and can verify it.",
      does: [
        "Names the authority for each occupation in [[lin19051|LIN 19/051]]",
        "Checks the assessment is valid at the right time for your visa",
        "Can verify it with the authority and compare your references",
      ],
    },
  ],
  flows: [
    {
      from: "you",
      to: "authority",
      label: "You apply",
      detail: "You lodge online with certified documents and pay the authority's charge.",
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
      description: "Find the occupation that matches your real duties, and check which visas it's eligible for.",
      points: [
        "The [[combined-list|combined list]] names the assessing authority",
        "The 186 and 482 use ANZSCO 2022; the points-tested visas and the 485 use ANZSCO 2013",
        "Use the occupation search on this site",
      ],
      youHold: "An occupation code, the visas it supports and its assessing authority",
      icon: ICON.magnifyingGlass,
    },
    {
      id: "criteria",
      short: "Criteria",
      title: "Check the authority's criteria",
      who: ["you", "authority"],
      description: "Read the authority's rules on qualifications, years of experience and English.",
      points: [
        "Apply for the type of assessment your visa needs",
        "For a permanent visa, that's a full migration assessment, not a [[provisional|provisional 485 assessment]]",
        "Some authorities need a skills interview or a practical test",
      ],
      youHold: "A checklist of the authority's evidence requirements",
      icon: ICON.listBullet,
    },
    {
      id: "apply",
      short: "Apply",
      title: "Apply to the authority",
      who: ["you", "authority"],
      description: "Lodge online with certified documents and pay the authority's charge. Timeframes differ between authorities.",
      points: [
        "Keep your references consistent with what you'll later tell Home Affairs",
        "The application receipt is enough for a 485 Post-Vocational Education Work application",
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
      description: "A positive outcome letter states the occupation assessed and, for some authorities, the validity period.",
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
      title: "Use it in your EOI or visa application",
      who: ["you", "government"],
      description: "Enter the details in your EOI, or lodge the assessment with an employer-sponsored or 485 application.",
      points: [
        "For the 189, 190 and 491 it must be valid on the invitation date",
        "For the 186 Direct Entry stream it must be obtained before you apply, and not expired",
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
        { value: "points", label: "A 189, 190 or 491", status: "ok", note: "You need a suitable assessment that is valid on the invitation date." },
        {
          value: "186",
          label: "A 186 Direct Entry stream",
          status: "ok",
          note: "For the 186 Direct Entry stream, it must be obtained before you apply, and you also need 3 years of full-time employment in the occupation.",
        },
        { value: "485", label: "A 485 Post-Vocational Education Work stream", status: "ok", note: "Proof that you've applied for an assessment in an MLTSSL occupation is enough to lodge." },
        {
          value: "482",
          label: "A 482",
          status: "todo",
          note: "Only certain applicants need a mandatory assessment, begun or completed in the 3 years before lodging, unless exempt. Home Affairs can ask anyone for one.",
        },
        { value: "unsure", label: "I'm not sure yet", status: "todo", note: "Start with your occupation and the visas it supports.", link: { label: "Occupation search", href: "/occupations" } },
      ],
    },
    {
      id: "authority",
      topic: "Authority",
      question: "Do you know your occupation and its assessing authority?",
      options: [
        { value: "yes", label: "Yes, the one listed for my occupation", status: "ok", note: "Home Affairs only accepts an assessment from that authority." },
        {
          value: "unsure",
          label: "Not sure which occupation fits my duties",
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
        { value: "full", label: "A full migration assessment", status: "ok", note: "A full assessment is the kind permanent visas need." },
        {
          value: "provisional",
          label: "A provisional assessment issued for a 485",
          status: "todo",
          note: "A provisional 485 assessment isn't suitable for the 189, 190, 491, the 186 Direct Entry stream or partner points. You'll need a full assessment, usually after gaining work experience.",
        },
        { value: "none", label: "None yet", status: "todo", note: "Check the authority's criteria and apply for the type your visa needs." },
      ],
    },
    {
      id: "validity",
      topic: "Validity",
      question: "When was your assessment issued?",
      options: [
        { value: "valid", label: "In the last 3 years, and no shorter period is stated", status: "ok", note: "With no shorter period stated, it's valid until 3 years from issue. Check that covers your likely invitation or lodgement date." },
        {
          value: "shorter",
          label: "It states a shorter period that ends soon",
          status: "todo",
          note: "The shorter stated period applies. Plan a new assessment if an invitation could come after it ends.",
          link: { label: "Check the expiry date", href: "#timeline" },
        },
        {
          value: "expired",
          label: "More than 3 years ago",
          status: "todo",
          note: "An assessment issued more than 3 years ago has expired for migration purposes, even if it states a longer period. You'll need a new one.",
        },
      ],
    },
    {
      id: "cricos",
      topic: "Australian study",
      question: "Does the assessment rely on an Australian qualification you studied for on a student visa?",
      options: [
        { value: "no", label: "No", status: "ok", note: "Nothing extra to check here." },
        { value: "cricos", label: "Yes, a CRICOS-registered course", status: "ok", note: "A CRICOS-registered course can be the basis of the assessment." },
        {
          value: "notcricos",
          label: "Yes, but the course wasn't CRICOS-registered",
          status: "stop",
          note: "Home Affairs doesn't accept that course as the basis of the assessment for the points-tested visas.",
          link: { label: "Get advice", href: "/bookings" },
        },
      ],
    },
    {
      id: "references",
      topic: "References",
      question: "Do your employment references show dates, hours, duties and position?",
      options: [
        { value: "yes", label: "Yes, on letterhead, with payslips or tax records", status: "ok", note: "Complete references like these are what authorities usually look for." },
        {
          value: "partly",
          label: "Some details are missing",
          status: "todo",
          note: "Ask your employers for complete references before you apply. Use the same ones in your visa application.",
          link: { label: "See the document checklist", href: "#evidence" },
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
          note: "Inconsistencies between the assessment and the visa application can lead to refusal under PIC 4020 and a 3-year bar. Get advice first.",
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
      myth: "My 485 assessment works for permanent residence.",
      fact: "No. A provisional assessment issued for a Temporary Graduate visa isn't suitable for the 189, 190, 491, the 186 Direct Entry stream or partner points.",
    },
    {
      myth: "I can get assessed after I'm invited.",
      fact: "For the 189, 190 and 491 you need it at invitation. Following the Thapa decision, Home Affairs accepts one obtained within the 60-day invitation period, but no later.",
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
      myth: "Every employer-sponsored visa needs an assessment.",
      fact: "No. The 186 Direct Entry stream does. The TRT and Labour Agreement streams don't at lodgement, though Home Affairs can ask. For the 482, only certain applicants need one.",
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
      definition: "The organisation listed for your occupation that assesses your skills. Home Affairs lists 39 of them, and each sets its own procedures, evidence, timeframes and charges.",
    },
    {
      id: "anzsco",
      term: "ANZSCO",
      full: "Australian and New Zealand Standard Classification of Occupations",
      definition: "The national list of occupation codes. The 186 and 482 use ANZSCO 2022; the points-tested visas and the 485 use ANZSCO 2013.",
    },
    {
      id: "lin19051",
      term: "LIN 19/051",
      definition: "The legislative instrument that specifies the skilled occupations and the assessing authority for each one.",
    },
    {
      id: "combined-list",
      term: "Combined occupation list",
      definition: "The Home Affairs combined list of eligible skilled occupations. It groups occupations into 5 lists (including the MLTSSL, STSOL, ROL and CSOL) and names the assessing authority for most of them.",
    },
    {
      id: "provisional",
      term: "Provisional 485 assessment",
      definition: "A type of assessment some authorities issue to recent Australian graduates for a Temporary Graduate visa. It isn't suitable for permanent visas or partner points.",
    },
    {
      id: "mltssl",
      term: "MLTSSL",
      full: "Medium and Long-term Strategic Skills List",
      definition: "One of the occupation lists. The 485 Post-Vocational Education Work stream needs an MLTSSL occupation.",
    },
    {
      id: "ahpra",
      term: "AHPRA",
      full: "Australian Health Practitioner Regulation Agency",
      definition: "For doctors, full AHPRA registration (general, unconditional, or conditional specialist registration) counts as the skills assessment.",
    },
    {
      id: "vetassess",
      term: "VETASSESS",
      definition: "The authority for most general professional and non-trade occupations. It can also assess how an overseas degree compares with the Australian Qualifications Framework.",
    },
    {
      id: "thapa",
      term: "Thapa decision",
      definition: "A 2021 court decision. Following it, Home Affairs accepts a skills assessment obtained within the 60-day invitation period.",
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
  ],
  cta: {
    subtitle: "We help you choose the right occupation and authority, check your evidence against its rules, and keep your assessment and visa application consistent.",
  },
  evidence: {
    navLabel: "Documents",
    eyebrow: "Document checklist",
    title: "What assessing authorities usually ask for",
    highlight: "usually ask for",
    subtitle: "Tick what you already have. Each authority sets its own list, so check theirs before you apply.",
    groups: [
      {
        id: "identity",
        title: "Identity and CV",
        icon: ICON.identification,
        why: "The authority needs to know who you are and see your career at a glance.",
        items: ["Passport", "Other identity documents", "A current CV"],
      },
      {
        id: "qualifications",
        title: "Qualifications",
        icon: ICON.academicCap,
        why: "The authority checks your qualifications against the standard for the occupation, and may say whether an overseas one is comparable.",
        items: ["Qualification certificates", "Full academic transcripts", "Certified translations, where needed"],
      },
      {
        id: "employment",
        title: "Employment",
        icon: ICON.briefcase,
        why: "References show your experience at the required level. Home Affairs later checks them against your visa application.",
        items: [
          "References on letterhead showing dates, hours, duties and position",
          "Payslips",
          "Employment contracts",
          "Tax records",
        ],
      },
      {
        id: "extra",
        title: "English, registration and testing",
        icon: ICON.clipboardDocumentCheck,
        why: "Some authorities set extra requirements for their occupations, such as English or a practical test.",
        items: [
          "English test results, where the authority requires them",
          "Registration or licence evidence for regulated occupations",
          "A technical interview or practical assessment for trades, where required",
        ],
      },
    ],
    footnote: "Based on what authorities typically ask for, as stated on this page on 12 October 2026. The authority's own requirements decide what you need.",
  },
  timeline: {
    navLabel: "Expiry date",
    eyebrow: "Validity",
    title: "When does your assessment expire?",
    highlight: "expire",
    subtitle: "Pick the month your assessment was issued to see when the standard validity ends.",
    startLabel: "Assessment issued",
    startPrompt: "When was your skills assessment issued?",
    milestones: [
      {
        months: 36,
        label: "Standard validity ends",
        detail: "With no period stated, a [[skills-assessment|skills assessment]] is valid for 3 years from issue. A shorter stated period ends sooner, and a longer one is treated as 3 years. For the 189, 190 and 491 it must be valid on your invitation date.",
        kind: "end",
      },
    ],
    footnote: "If the authority states a shorter validity period, that earlier date applies instead.",
  },
};
