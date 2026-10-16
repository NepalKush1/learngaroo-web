import type { VisaExplainer } from "../types";
import { ICON } from "../icons";
import { skilledFinder } from "./skilled-finder";

// Interactive explainer for the Skilled Independent visa (subclass 189).
// Every figure matches data/visas/skilled.ts (checked against Home Affairs
// on 12 October 2026). The second instalment for adults without functional
// English is "Set by the Regulations" on the page (the Home Affairs 189 page
// leaves the amount blank), so it is left out of the fee estimator.

export const skilledIndependent189Explainer: VisaExplainer = {
  slug: "skilled-independent-visa-189",
  factsAsAt: "12 October 2026",
  oneLiner:
    "A permanent visa for skilled workers with no employer, state or family sponsor. You score at least 65 points, wait to be invited from SkillSelect, then apply within 60 days.",
  bigIdeas: [
    { title: "No sponsor needed", body: "No employer, state or family sponsor. You compete on your own points score.", icon: ICON.user },
    { title: "Points, then an invitation", body: "You lodge a free expression of interest. Home Affairs invites the highest-ranked ones to apply.", icon: ICON.chartBar },
    { title: "Permanent from day one", body: "Permanent residence from grant, with no regional condition, leading to citizenship later.", icon: ICON.home },
  ],
  heroCard: [
    { label: "Who sponsors you", value: "No one: you're invited on your points", icon: ICON.user },
    { label: "Points needed", value: "65 at least; invited scores are often higher", icon: ICON.chartBar },
    { label: "Age", value: "Under 45 when you're invited", icon: ICON.calendarDays },
    { label: "How long", value: "Permanent, with a 5-year travel facility", icon: ICON.clock },
    { label: "Family", value: "Partner and children can be included", icon: ICON.users },
    { label: "Visa charge", value: "From A$6,135", icon: ICON.currencyDollar },
  ],
  actors: [
    {
      id: "you",
      name: "You (the skilled worker)",
      short: "You",
      icon: ICON.user,
      tone: "green",
      role: "Build your points, lodge an [[eoi|EOI]] and prove every claim when you're invited.",
      does: [
        "Get a [[skills-assessment|skills assessment]] and an English test result",
        "Lodge an EOI in [[skillselect|SkillSelect]] with at least 65 points",
        "Apply within 60 days of an invitation and pay from A$6,135",
        "Prove every points claim with documents",
      ],
    },
    {
      id: "authority",
      name: "The assessing authority",
      short: "Assessor",
      icon: ICON.clipboardDocumentCheck,
      tone: "amber",
      role: "Checks your qualifications and experience against the standard for your occupation.",
      does: [
        "Is the body listed for your nominated occupation",
        "Sets its own procedures, evidence rules and fees",
        "Issues an assessment valid for 3 years, or a shorter period stated on it",
      ],
    },
    {
      id: "government",
      name: "Department of Home Affairs",
      short: "Home Affairs",
      icon: ICON.buildingLibrary,
      tone: "blue",
      role: "Runs SkillSelect, invites the highest-ranked EOIs and decides the visa.",
      does: [
        "Runs invitation rounds through SkillSelect",
        "Ranks EOIs by points, then by [[date-of-effect|date of effect]]",
        "Checks your points claims, health and character",
        "Grants or refuses the visa in writing",
      ],
    },
  ],
  flows: [
    {
      from: "you",
      to: "authority",
      label: "You get assessed",
      detail: "You apply to the [[assessing-authority|assessing authority]] for your occupation. A positive assessment must still be valid when you're invited.",
    },
    {
      from: "you",
      to: "government",
      label: "You lodge an EOI",
      detail: "Your [[eoi|EOI]] in SkillSelect lists your claims and shows an indicative score. It's free and stays active for 2 years.",
    },
    {
      from: "government",
      to: "you",
      label: "Invitation",
      detail: "If your EOI ranks high enough in a round, Home Affairs invites you. You have 60 days to apply, and that period can't be extended.",
    },
    {
      from: "you",
      to: "government",
      label: "You apply",
      detail: "You lodge in ImmiAccount with documents for every claim and pay the charge. In Australia you're usually granted a [[bva|Bridging visa A]].",
    },
    {
      from: "government",
      to: "you",
      label: "Visa granted",
      detail: "Permanent residence starts on the grant date if you're in Australia, or when you first enter if you're outside.",
    },
  ],
  journeyTitle: "From skills assessment to permanent residence",
  journeyHighlight: "permanent residence",
  stages: [
    {
      id: "assess",
      short: "Assess",
      title: "Get your skills assessed",
      who: ["you", "authority"],
      description: "Check your occupation is on the subclass 189 list, then apply to the [[assessing-authority|assessing authority]] listed for it.",
      points: [
        "Each authority has its own procedure, evidence rules and fees",
        "Valid for 3 years, or the shorter period stated on it",
        "An assessment issued for a subclass 485 visa doesn't count",
      ],
      youHold: "A positive skills assessment",
      cost: "Set by the assessing authority, paid by you",
      icon: ICON.academicCap,
    },
    {
      id: "evidence",
      short: "Evidence",
      title: "Sit an English test and gather your evidence",
      who: ["you"],
      description: "Take an approved English test at a secure test centre, then collect proof for every points claim.",
      points: [
        "At least [[competent-english|competent English]]; proficient and superior earn 10 and 20 points",
        "Online (remote-proctored) tests aren't accepted",
        "Only work of at least 20 hours a week at the skilled level, in the 10 years before invitation, counts",
      ],
      youHold: "An English result and evidence for every points claim",
      cost: "Test and document costs, paid by you",
      icon: ICON.documentText,
    },
    {
      id: "eoi",
      short: "EOI",
      title: "Lodge an expression of interest",
      who: ["you", "government"],
      description: "Your [[eoi|EOI]] in [[skillselect|SkillSelect]] costs nothing and has no uploads. SkillSelect works out an indicative score.",
      points: [
        "You won't be invited below the 65-point [[pass-mark|pass mark]]",
        "It stays active for 2 years and you can update it before an invitation",
        "It isn't a visa application and gives you no bridging visa",
      ],
      youHold: "An EOI with an indicative score of at least 65 points",
      icon: ICON.pencilSquare,
    },
    {
      id: "invite",
      short: "Invite",
      title: "Wait for an invitation round",
      who: ["government"],
      description: "Home Affairs invites the highest-ranked EOIs first. Equal scores are ranked by the [[date-of-effect|date of effect]].",
      points: [
        "[[occupation-ceiling|Occupation ceilings]] can limit invitations in large occupation groups",
        "In the 4 June 2026 round most professional occupations needed a score of 80 or more",
        "You must not have turned 45 when the invitation is issued",
      ],
      youHold: "An invitation stating the points score you must prove",
      icon: ICON.envelope,
    },
    {
      id: "apply",
      short: "Apply",
      title: "Apply within 60 days",
      who: ["you", "government"],
      description: "Open the invitation, select Apply for visa and lodge in ImmiAccount. The application isn't processed until the charge is paid.",
      points: [
        "A$6,135 for you, plus a charge for each family member",
        "Lodge complete evidence: Home Affairs may decide without asking for more",
        "In Australia you need a [[substantive-visa|substantive visa]] or a Bridging visa A, B or C",
      ],
      youHold: "A lodged application and, in Australia, usually a Bridging visa A",
      cost: "From A$6,135, paid by you",
      icon: ICON.paperAirplane,
    },
    {
      id: "checks",
      short: "Checks",
      title: "Health, character and requests",
      who: ["government", "you"],
      description: "Home Affairs checks your claims, health and character. Do any health examinations or biometrics it asks for, within the time given.",
      points: [
        "Everyone in the application must meet health and character requirements",
        "Police certificates for each country where you spent 12 months or more in the last 10 years since turning 16",
        "Check current processing times on the Home Affairs tool",
      ],
      youHold: "A complete file",
      icon: ICON.shieldCheck,
    },
    {
      id: "pr",
      short: "PR",
      title: "Permanent residence",
      who: ["government", "you"],
      description: "If the visa is granted, you're a permanent resident from the grant date (in Australia) or your first entry (outside Australia).",
      points: [
        "Live, work and study anywhere in Australia",
        "Travel freely for 5 years, then use a [[rrv|Resident Return visa]]",
        "Apply for citizenship once you meet the residence requirement",
      ],
      youHold: "Permanent residence",
      icon: ICON.home,
    },
  ],
  check: {
    ok: {
      title: "You look on track",
      body: "Nothing in your answers rules you out. Next: confirm your exact points, your evidence and that your occupation is on the 189 list.",
    },
    disclaimer: "A general self-check, not advice or a prediction. Invitations depend on each round, and your full circumstances decide the outcome.",
  },
  quiz: [
    {
      id: "age",
      topic: "Age",
      question: "How old will you be when you're invited?",
      help: "Age is tested on the date the invitation is issued, not when you lodge your EOI.",
      options: [
        { value: "under", label: "Under 45", status: "ok", note: "You meet the age rule. Turning 45 after the invitation doesn't stop you applying." },
        {
          value: "close",
          label: "Under 45 now, but my 45th birthday is coming up",
          status: "todo",
          note: "If you turn 45 while your EOI is waiting, you won't be invited. Lodge a complete EOI early.",
        },
        {
          value: "over",
          label: "45 or older",
          status: "stop",
          note: "You can't be invited for a 189 at 45 or over. Another kind of visa may fit better.",
          link: { label: "Talk through your options", href: "/bookings" },
        },
      ],
    },
    {
      id: "occupation",
      topic: "Occupation and assessment",
      question: "Is your occupation on the subclass 189 list, with a positive skills assessment?",
      options: [
        { value: "yes", label: "Yes, and the assessment will still be valid when I'm invited", status: "ok", note: "Your assessment must be valid on the invitation date: 3 years from issue, or the shorter period stated on it." },
        {
          value: "notyet",
          label: "It's on the list, but I haven't been assessed yet",
          status: "todo",
          note: "Apply to the assessing authority listed for your occupation before you rely on an invitation.",
          link: { label: "How skills assessments work", href: "/visas/skilled/skills-assessment-for-migration" },
        },
        {
          value: "485",
          label: "I only have an assessment issued for a 485 visa",
          status: "todo",
          note: "An assessment issued for a subclass 485 visa isn't suitable for the 189. You'll need a full assessment.",
        },
        {
          value: "notlisted",
          label: "My occupation isn't on the 189 list",
          status: "stop",
          note: "The 189 isn't open to that occupation. A state may still nominate it for a 190 or 491.",
          link: { label: "Which skilled visa fits?", href: "#finder" },
        },
      ],
    },
    {
      id: "english",
      topic: "English",
      question: "What's your English level?",
      options: [
        { value: "high", label: "Proficient or superior, from a secure test centre", status: "ok", note: "Proficient or superior English is above the minimum, and worth 10 or 20 points." },
        { value: "competent", label: "Competent", status: "ok", note: "Competent English meets the minimum. Proficient or superior English would add 10 or 20 points." },
        {
          value: "passport",
          label: "I hold a UK, Irish, US, Canadian or New Zealand passport",
          status: "ok",
          note: "A valid passport from one of these countries meets the competent English requirement.",
        },
        {
          value: "notyet",
          label: "Not tested yet, or below competent",
          status: "todo",
          note: "Book an approved test at a secure test centre. Online tests aren't accepted.",
          link: { label: "Practise PTE on Learniiz", href: "https://www.learniiz.com", external: true },
        },
      ],
    },
    {
      id: "points",
      topic: "Points",
      question: "How many points do you score, with no nomination?",
      options: [
        { value: "strong", label: "80 or more", status: "ok", note: "80 or more is a strong score. In the 4 June 2026 round most professional occupations needed 80 or more." },
        {
          value: "pass",
          label: "65 or more, but under 80",
          status: "todo",
          note: "You meet the pass mark, but invitations go to the highest-ranked EOIs. In that round 65 was enough only in some construction trades.",
        },
        {
          value: "below",
          label: "Under 65",
          status: "stop",
          note: "You can't be invited for a 189 below 65. A state nomination adds 5 points for a 190, or 15 for a 491.",
          link: { label: "Which skilled visa fits?", href: "#finder" },
        },
        { value: "unsure", label: "I'm not sure", status: "todo", note: "Work it out with the points calculator on this page.", link: { label: "Open the points calculator", href: "#points" } },
      ],
    },
    {
      id: "proof",
      topic: "Evidence",
      question: "Can you prove every points claim with documents?",
      help: "For example references with hours and duties, payslips, tax records, transcripts and completion letters.",
      options: [
        { value: "yes", label: "Yes, I have the documents", status: "ok", note: "Good. Your invitation states the score you must prove when the visa is decided." },
        {
          value: "some",
          label: "Some claims would be hard to prove",
          status: "todo",
          note: "If proven points fall below the invited score, the visa is refused. Correct your EOI before you're invited.",
        },
      ],
    },
    {
      id: "location",
      topic: "Where you apply",
      question: "Where will you be when you apply?",
      options: [
        { value: "outside", label: "Outside Australia", status: "ok", note: "You can apply from outside Australia, and be in or outside Australia when it's decided." },
        { value: "onshore", label: "In Australia, holding a visa or a Bridging visa A, B or C", status: "ok", note: "You can apply in Australia. You're usually granted a Bridging visa A." },
        {
          value: "491",
          label: "In Australia on a 491 or 494 I've held for under 3 years",
          status: "stop",
          note: "If you hold, or last held, a 491 or 494, you must have held it for at least 3 years before applying.",
        },
        {
          value: "novisa",
          label: "In Australia with no visa, or a bridging visa other than A, B or C",
          status: "stop",
          note: "An application lodged in Australia in this situation isn't processed. Get advice before you do anything else.",
          link: { label: "Book urgent advice", href: "/bookings" },
        },
      ],
    },
    {
      id: "health",
      topic: "Health and character",
      question: "Any health or character concerns for you or your family?",
      options: [
        { value: "clear", label: "No concerns", status: "ok", note: "Everyone included will still need health examinations and police certificates if asked." },
        {
          value: "concern",
          label: "A significant health condition, or a criminal record",
          status: "todo",
          note: "It doesn't automatically rule you out, but it needs careful preparation and advice before you apply.",
          link: { label: "Get advice", href: "/bookings" },
        },
      ],
    },
  ],
  myths: [
    {
      myth: "65 points is enough to get a 189 invitation.",
      fact: "65 is the pass mark, not the cut-off. Invitations go to the highest-ranked EOIs. In the 4 June 2026 round, 65 was enough only in some construction trades; most professional occupations needed 80 or more.",
    },
    {
      myth: "An EOI is a visa application.",
      fact: "No. An EOI is free, has no documents and gives you no bridging visa. You can only apply for the visa after an invitation, within 60 days.",
    },
    {
      myth: "If I turn 45 after I'm invited, I can't apply.",
      fact: "You can. Age is tested on the invitation date, so you can still lodge within the 60 days. But you won't be invited if you turn 45 while your EOI is waiting.",
    },
    {
      myth: "All my work experience earns points.",
      fact: "Only employment at the skilled level, of at least 20 hours a week, in the 10 years before invitation counts. You must prove it with references, payslips and tax records.",
    },
    {
      myth: "Home Affairs will ask me for anything that's missing.",
      fact: "It may decide without asking. Lodge complete evidence at the start: the charge isn't refunded if the visa is refused.",
    },
    {
      myth: "My 485 skills assessment will do.",
      fact: "An assessment issued for a subclass 485 visa isn't suitable for the 189. You need a full assessment that is valid on the invitation date.",
    },
    {
      myth: "A 189 ties me to a state or region.",
      fact: "No. The 189 has no employer, state or regional condition. You can live, work and study anywhere in Australia.",
    },
    {
      myth: "New Zealand citizens should use the New Zealand stream.",
      fact: "Home Affairs states the New Zealand stream is closed to new applications. New Zealand citizens can apply in the Points-tested stream like anyone else, or look at citizenship by conferral.",
    },
  ],
  glossary: [
    {
      id: "eoi",
      term: "EOI",
      full: "Expression of interest",
      definition: "Your free online profile in SkillSelect: occupation, skills assessment, English, study and work history. It isn't a visa application, has no uploads and stays active for 2 years.",
    },
    { id: "skillselect", term: "SkillSelect", definition: "The Home Affairs online system where you lodge an EOI, and where invitations to apply are issued." },
    {
      id: "skills-assessment",
      term: "Skills assessment",
      definition: "A decision by the assessing authority for your occupation that your skills are suitable. For the 189 it must be valid when you're invited: 3 years from issue, or a shorter period stated on it.",
    },
    {
      id: "assessing-authority",
      term: "Assessing authority",
      definition: "The organisation listed for your occupation in LIN 19/051 that assesses your skills. Each one sets its own procedures, evidence rules and fees.",
    },
    { id: "pass-mark", term: "Pass mark", definition: "The minimum points score, 65, set by LIN 19/210. SkillSelect won't invite you below it." },
    {
      id: "date-of-effect",
      term: "Date of effect",
      definition: "The date your EOI reached its current points score. When EOIs have equal scores, the earlier date of effect is invited first.",
    },
    { id: "occupation-ceiling", term: "Occupation ceiling", definition: "A limit that can cap how many EOIs are invited in large occupation groups." },
    {
      id: "competent-english",
      term: "Competent English",
      definition: "The minimum English level for the 189. You show it with an approved test taken at a secure test centre, or a valid passport from the UK, Ireland, the US, Canada or New Zealand.",
    },
    {
      id: "functional-english",
      term: "Functional English",
      definition: "A lower English level. Each applicant 18 or over without it attracts a second instalment of the visa charge before grant.",
    },
    {
      id: "second-instalment",
      term: "Second instalment",
      definition: "An extra charge for each applicant 18 or over without functional English, charged only if Home Affairs is going to grant the visa.",
    },
    { id: "substantive-visa", term: "Substantive visa", definition: "Any visa other than a bridging visa or a few special-purpose visas, such as a student, graduate or work visa." },
    {
      id: "bva",
      term: "Bridging visa A",
      definition: "A bridging visa usually granted when you apply in Australia. It keeps you lawful while you wait, but doesn't let you return if you leave: you'd need a Bridging visa B before travelling.",
    },
    {
      id: "rrv",
      term: "Resident Return visa",
      full: "Subclass 155 or 157",
      definition: "The visa a permanent resident needs to re-enter Australia once the 5-year travel facility from grant has ended.",
    },
    {
      id: "hong-kong-stream",
      term: "Hong Kong stream",
      definition: "A 189 stream for Hong Kong or BNO passport holders. You need at least 4 years on a 457, 482 or 485 visa, and a continuous 4 years living in Australia.",
    },
    {
      id: "pic4020",
      term: "PIC 4020",
      definition: "The rule on false or misleading information and bogus documents. A breach leads to refusal and a bar on most visas for 3 years.",
    },
  ],
  cta: {
    subtitle: "We check your points and evidence against these rules, tell you honestly where you stand, and prepare your EOI and visa application with you.",
  },
  finder: skilledFinder,
  points: { visa: "189" },
  fees: {
    variantLabel: "Which stream?",
    variants: [
      {
        id: "points",
        label: "Points-tested stream",
        primary: [{ label: "Base application charge", amount: 6135 }],
        adult: [{ label: "Each additional applicant 18 or over", amount: 3070 }],
        child: [{ label: "Each additional applicant under 18", amount: 1540 }],
      },
      {
        id: "hongkong",
        label: "Hong Kong stream",
        hint: "Hong Kong or BNO passport holders",
        primary: [{ label: "Base application charge", amount: 6135 }],
        adult: [{ label: "Each additional applicant 18 or over", amount: 3070 }],
        child: [{ label: "Each additional applicant under 18", amount: 1535 }],
      },
    ],
    maxAdults: 4,
    maxChildren: 6,
    notIncluded:
      "Not included: the second instalment for adults without functional English, the skills assessment, English test, health examinations, police certificates, biometrics and translations.",
    notes: [
      "The second instalment for each applicant 18 or over without functional English is set by the Regulations. The 189 page didn't display the amount on 12 October 2026, so it isn't in this total.",
      "A lower charge applies automatically in ImmiAccount when the main applicant holds a passport from a listed Pacific Island country or Timor-Leste.",
      "The charge isn't refunded if the visa is refused.",
    ],
    confirmUrl: "https://immi.homeaffairs.gov.au/visas/visa-pricing-estimator",
    confirmLabel: "Home Affairs Visa Pricing Estimator",
  },
};
