import type { ServiceExplainer } from "./types";
import { ICON } from "../visas/explainers/icons";
import { studyFinder } from "../visas/explainers/study/study-finder";
import { studentVisa500Explainer } from "../visas/explainers/study/student-visa-500";
import { studentVisaFinancialCapacityExplainer } from "../visas/explainers/study/student-visa-financial-capacity";
import { genuineStudentRequirementExplainer } from "../visas/explainers/study/genuine-student-requirement";

// Interactive explainer for /services/student-visas. Every figure comes from
// the library pages in `pages` (data/visas/study.ts and the subclass 485 page
// in data/visas/skilled.ts, checked against Home Affairs, LIN 19/198,
// Direction No. 106 and the Migration Regulations on 12 October 2026),
// including the Student visa application rules in force from 2 October 2026.
// The subclass 494 summary used by the service guide comes from the 494
// library page (verifiedExtras). The finder, work-hours planner, funds
// calculator and Genuine Student evidence builder are reused from the study
// explainers.

// The Genuine Student evidence builder, with a heading that makes sense
// outside the Genuine Student guide.
const gsEvidence = genuineStudentRequirementExplainer.evidence;

export const studentVisasServiceExplainer: ServiceExplainer = {
  slug: "student-visas",
  factsAsAt: "12 October 2026",
  pages: [
    "student-visa-500",
    "temporary-graduate-visa-485",
    "genuine-student-requirement",
    "student-visa-financial-capacity",
    "student-visa-conditions-and-work-rights",
    "study-to-permanent-residence",
    "student-guardian-visa-590",
  ],
  name: "student visa route",
  accent: "Subclasses 500, 485 and 590",
  oneLiner:
    "Study a full-time registered course in Australia on a Student visa (subclass 500). After graduating, most people who want to stay move to a Temporary Graduate visa (subclass 485) to work.",
  bigIdeas: [
    {
      title: "Enrol first, then apply",
      body: "A Student visa starts with a Confirmation of Enrolment for a full-time registered course, and study must be your real purpose.",
      icon: ICON.academicCap,
    },
    {
      title: "Most people apply from outside",
      body: "Since 2 October 2026 most applications must be lodged, and granted, outside Australia. Family can come only under an exemption.",
      icon: ICON.globeAsiaAustralia,
    },
    {
      title: "Graduate, then work",
      body: "Finish at least 2 academic years of study here, and a 485 can give you 18 months to 3 years of full work rights.",
      icon: ICON.rocketLaunch,
    },
  ],
  heroCard: [
    { label: "Who it's for", value: "Students, graduates and parents of young students", icon: ICON.users },
    { label: "Student visa (500)", value: "Your course plus a short grace period, up to 6 years", icon: ICON.academicCap },
    { label: "Work while you study", value: "48 hours a fortnight in term, unlimited in breaks", icon: ICON.briefcase },
    { label: "Where you apply for a 500", value: "Outside Australia, unless an exemption applies", icon: ICON.globeAsiaAustralia },
    { label: "After you graduate", value: "A 485: 18 months to 3 years of full work rights", icon: ICON.rocketLaunch },
    { label: "Student visa charge", value: "A$2,500 (A$2,050 for English or non-award courses)", icon: ICON.currencyDollar },
  ],
  checkedAgainst: "Home Affairs, the Migration Regulations, LIN 19/198 and Ministerial Direction No. 106",
  compare: {
    navLabel: "Compare",
    eyebrow: "Side by side",
    title: "Three study visas, side by side",
    highlight: "side by side",
    subtitle: "The Student visa, the Temporary Graduate visa and the Student Guardian visa, compared on the questions people ask first.",
    rows: [
      { label: "Who it's for", icon: ICON.user },
      { label: "How long it lasts", icon: ICON.clock },
      { label: "Where you apply", icon: ICON.mapPin },
      { label: "Work rights", icon: ICON.briefcase },
      { label: "Family", icon: ICON.users },
      { label: "Government fee", icon: ICON.currencyDollar },
      { label: "What comes next", icon: ICON.arrowsRightLeft },
    ],
    columns: [
      {
        page: "student-visa-500",
        name: "Student visa (500)",
        tagline: "Study a full-time registered course",
        values: [
          "Students enrolled in a full-time registered course",
          "Your course plus a short grace period, up to 6 years",
          "Outside Australia, unless you hold a Student visa and fit an exemption",
          "48 hours a fortnight in term; unlimited in scheduled breaks",
          "Only under an exemption, applying with you; they can't be added later",
          "A$2,500 (A$2,050 for English or non-award courses)",
          "Usually a 485, within 6 months of completing an eligible course",
        ],
        bestFor: "Anyone coming to Australia mainly to study a full-time course",
      },
      {
        page: "temporary-graduate-visa-485",
        name: "Temporary Graduate (485)",
        tagline: "Stay and work after you graduate",
        values: [
          "Recent graduates of Australian study, aged 35 or under with some exceptions",
          "18 months to 3 years, depending on your stream and qualification",
          "In Australia, within 6 months of completing your course",
          "Any job, any employer, with no hour limit",
          "Can apply with you, or join you later as subsequent entrants",
          "A$5,750 (A$2,265 for the Second stream)",
          "A skilled or employer-sponsored visa; the 485 can't be extended",
        ],
        bestFor: "Graduates building experience towards a skilled or employer-sponsored visa",
      },
      {
        page: "student-guardian-visa-590",
        name: "Student Guardian (590)",
        tagline: "Live with and care for a young student",
        values: [
          "A parent, custodian or relative aged 21 or over of a student under 18",
          "Usually until the student's visa ends or they turn 18",
          "Outside Australia, unless you already hold a 590",
          "No work; English study under 20 hours a week, or other study up to 3 months",
          "Only children under 6, in limited cases; not your partner",
          "A$2,500, plus A$500 for each child included",
          "A further 590 while the student keeps studying; no pathway to permanent residence",
        ],
        bestFor: "A parent or relative moving to Australia to care for a student under 18",
      },
    ],
    footnote:
      "Main applicant charges from 1 July 2026. Each visa also has its own health, character and other requirements: read its page for the full rules.",
  },
  actors: [
    {
      id: "provider",
      name: "Your education provider",
      short: "Provider",
      icon: ICON.academicCap,
      tone: "orange",
      role: "Enrols you in a [[cricos|CRICOS]]-registered course, keeps track of your study and confirms when you've finished.",
      does: [
        "Issues a [[coe|Confirmation of Enrolment]] for each course",
        "Approves welfare for students under 18, for example with a [[caaw|CAAW]]",
        "Monitors your attendance and course progress, and reports breaches to Home Affairs",
        "Tells you in writing when you've completed your course, which starts your 6-month window for a [[t485|485]]",
      ],
    },
    {
      id: "you",
      name: "You (the student)",
      short: "You",
      icon: ICON.user,
      tone: "green",
      role: "Choose the course, apply for each visa and keep to its conditions.",
      does: [
        "Show you're a [[gs|genuine student]] with enough money for your stay",
        "Hold [[oshc|OSHC]] from the day you arrive",
        "Work no more than 48 hours a fortnight while your course is in session",
        "Apply for a [[t485|Temporary Graduate visa]] within 6 months of completing your course, if you want to stay",
      ],
    },
    {
      id: "government",
      name: "Department of Home Affairs",
      short: "Home Affairs",
      icon: ICON.buildingLibrary,
      tone: "blue",
      role: "Decides each visa application and checks that visa holders keep to their conditions.",
      does: [
        "Assesses your [[gs|Genuine Student]] answers, your funds and your English",
        "Checks you're applying from the right place under the 2 October 2026 rules",
        "Grants the visa with conditions, such as the work limit, or refuses it",
        "Can cancel a visa if a condition is breached",
      ],
    },
  ],
  flows: [
    {
      from: "you",
      to: "provider",
      label: "You enrol",
      detail: "You accept an offer for a full-time course registered on [[cricos|CRICOS]] and pay the deposit your provider asks for.",
    },
    {
      from: "provider",
      to: "you",
      label: "Issues your CoE",
      detail: "Your provider issues a [[coe|Confirmation of Enrolment]] for every course in your package. Without one, a Student visa application is invalid.",
    },
    {
      from: "you",
      to: "government",
      label: "You apply",
      detail: "You lodge from outside Australia unless an exemption applies, with your [[gs|Genuine Student]] answers, [[oshc|OSHC]] details and any evidence the checklist asks for.",
    },
    {
      from: "government",
      to: "you",
      label: "Visa granted",
      detail: "Home Affairs grants the Student visa with conditions, such as the 48-hour fortnightly work limit and staying enrolled.",
    },
    {
      from: "provider",
      to: "government",
      label: "Reports on your study",
      detail: "Your provider monitors attendance and course progress, and reports breaches to Home Affairs, which can lead to cancellation.",
    },
    {
      from: "you",
      to: "government",
      label: "You apply for a 485",
      detail: "Once your provider confirms in writing that you've completed your course, you have 6 months to apply in Australia for a [[t485|Temporary Graduate visa]].",
    },
  ],
  journeyTitle: "From your first course to a graduate visa",
  journeyHighlight: "graduate visa",
  stages: [
    {
      id: "enrol",
      short: "Enrol",
      title: "Choose a course and get your CoE",
      who: ["provider", "you"],
      description:
        "Enrol in a full-time course registered on [[cricos|CRICOS]] and pay the deposit. Your provider then issues a [[coe|Confirmation of Enrolment]] for each course.",
      points: [
        "Every course in a package needs its own CoE",
        "Gaps between packaged courses must be under two months, apart from the end-of-year break",
        "Pick a course that fits your study and work history: it matters for the [[gs|Genuine Student]] test",
      ],
      youHold: "A CoE for every course in your package",
      icon: ICON.academicCap,
    },
    {
      id: "where",
      short: "Check",
      title: "Check where you can apply",
      who: ["you"],
      description: "Since 2 October 2026 most people must be outside Australia when they lodge a Student visa application, and when the visa is granted.",
      points: [
        "As the main Student visa holder, you can apply in Australia only under one of six exemptions",
        "Visitor, 485, Working Holiday and 482 holders can't apply in Australia at all",
        "An invalid application can't be reviewed and can leave you without a visa",
      ],
      youHold: "A clear answer on where you must lodge",
      icon: ICON.globeAsiaAustralia,
    },
    {
      id: "prepare",
      short: "Prepare",
      title: "Prepare your answers and evidence",
      who: ["you"],
      description:
        "Answer the [[gs|Genuine Student]] questions in your own words. The [[dct|Document Checklist Tool]] tells you whether to attach English and funds evidence, and Home Affairs can ask for it either way.",
      points: [
        "Four questions in the online form, each within 150 words, in English",
        "Funds for travel, 12 months of course fees and A$29,710 of living costs, or a qualifying family income",
        "English: usually IELTS 6.0 overall or PTE Academic 47, unless you're exempt",
        "[[oshc|OSHC]] that starts on the day you arrive",
      ],
      youHold: "Your answers, English and funds evidence, and an OSHC policy",
      icon: ICON.documentText,
    },
    {
      id: "apply",
      short: "Apply",
      title: "Lodge online and pay the charge",
      who: ["you", "government"],
      description: "Apply in ImmiAccount, upload your documents and pay the charge for everyone included. Home Affairs then assesses your application.",
      points: [
        "A$2,500 for most courses, or A$2,050 for [[elicos|ELICOS]] and non-award courses",
        "Give biometrics within 14 days if asked",
        "Keep a valid CoE on file until the decision",
        "Check current processing times on the Home Affairs tool",
      ],
      youHold: "A decision letter with your grant number, expiry date and conditions",
      cost: "A$2,500 (A$2,050 for ELICOS or non-award), paid by you",
      icon: ICON.paperAirplane,
    },
    {
      id: "study",
      short: "Study",
      title: "Study, work and keep your conditions",
      who: ["you", "provider"],
      description: "Your visa runs for your course plus a short grace period. Keep to your conditions the whole time, because a breach can lead to cancellation.",
      points: [
        "Up to 48 hours of work a fortnight in term, unlimited in breaks ([[c8105|condition 8105]])",
        "Stay enrolled at the same or a higher [[aqf|AQF level]], with satisfactory attendance and progress ([[c8202|condition 8202]])",
        "Keep [[oshc|OSHC]], and give your provider your address within 7 days of arriving",
      ],
      youHold: "A clean study and work record",
      icon: ICON.bookOpen,
    },
    {
      id: "complete",
      short: "Complete",
      title: "Complete your course",
      who: ["provider", "you"],
      description:
        "Your provider tells you in writing that you've met the academic requirements. That date, not your graduation ceremony, starts a 6-month window for a [[t485|Temporary Graduate visa]].",
      points: [
        "The 485 needs at least 2 academic years (92 weeks) of study in Australia, over at least 16 months",
        "Get an English result from the last 12 months, such as IELTS 6.5 overall with 5.5 in each component",
        "Apply for an [[afp|AFP check]] at least the day before you lodge",
      ],
      youHold: "A completion letter and a 6-month deadline",
      icon: ICON.checkBadge,
    },
    {
      id: "graduate",
      short: "485",
      title: "Apply for a Temporary Graduate visa",
      who: ["you", "government"],
      description: "Lodge in Australia within 6 months of completing your course, while you hold a Student visa, or another eligible visa if your Student visa ended in the last 6 months.",
      points: [
        "Usually 35 or under when you apply, with some exceptions",
        "Post-Higher Education Work: 2 years for a bachelor or coursework master's, 3 years for a research master's or PhD",
        "Post-Vocational Education Work: 18 months, with an [[mltssl|MLTSSL]] occupation and a skills assessment applied for",
        "Full work rights with any employer",
      ],
      youHold: "A Temporary Graduate visa of 18 months to 3 years",
      cost: "A$5,750, paid by you",
      icon: ICON.briefcase,
    },
    {
      id: "next",
      short: "PR",
      title: "Plan your road to permanent residence",
      who: ["you"],
      description: "The 485 can't be extended. Use it to build the experience, English and points that a permanent visa needs.",
      points: [
        "Points-tested visas (189, 190 and 491) need at least 65 points and an invitation",
        "An employer can sponsor you for a 482 once you have at least 1 year of relevant experience",
        "After 2 years of full-time sponsored work, your employer can nominate you for a 186",
      ],
      youHold: "A plan for a skilled or employer-sponsored visa",
      icon: ICON.home,
    },
  ],
  check: {
    ok: {
      title: "You look on track",
      body: "Nothing in your answers rules you out. Next, check the details: your enrolment, your evidence and where you can apply.",
    },
    disclaimer: "A general self-check, not advice or a prediction. Home Affairs decides each application on your full circumstances.",
  },
  quiz: [
    {
      id: "coe",
      topic: "Enrolment",
      question: "Do you have a Confirmation of Enrolment (CoE) for a full-time registered course?",
      options: [
        { value: "yes", label: "Yes, for every course in my package", status: "ok", note: "That's the foundation of a Student visa. The CoE must still be valid when the visa is decided." },
        {
          value: "offer",
          label: "I have an offer, but no CoE yet",
          status: "todo",
          note: "Accept the offer and pay the deposit so your provider can issue the CoE. Without one, the application is invalid.",
        },
        {
          value: "none",
          label: "I haven't chosen a course yet",
          status: "todo",
          note: "Start with a full-time course registered on [[cricos|CRICOS]] that fits your study and work history. That fit matters for the Genuine Student test.",
        },
      ],
    },
    {
      id: "location",
      topic: "Where you apply",
      question: "Where are you now?",
      help: "Since 2 October 2026 most Student visa applications must be lodged, and granted, outside Australia.",
      options: [
        { value: "outside", label: "Outside Australia", status: "ok", note: "That's where most people now apply from. You must also be outside Australia when the visa is granted." },
        {
          value: "exempt",
          label: "In Australia on a Student visa, and I fit one of the six exemptions",
          status: "ok",
          note: "You may be able to apply in Australia. Check the exemption exactly: an invalid application can't be reviewed.",
          link: { label: "Check in the visa finder", href: "#finder" },
        },
        {
          value: "student",
          label: "In Australia on a Student visa, but no exemption fits",
          status: "todo",
          note: "You'd need to leave, apply from outside Australia and stay outside until the visa is granted.",
        },
        {
          value: "other",
          label: "In Australia on another temporary visa, such as a visitor, 485, Working Holiday or 482 visa",
          status: "todo",
          note: "Visitor, 485, Working Holiday, 482 and most other temporary visa holders can't apply for a Student visa in Australia, with no exemptions. You'd apply after leaving.",
        },
        {
          value: "novisa",
          label: "In Australia without a visa",
          status: "stop",
          note: "Without a substantive visa you can apply in Australia only in narrow cases, and the [[s48|section 48 bar]] may apply. Get advice before you do anything.",
          link: { label: "Book urgent advice", href: "/bookings" },
        },
      ],
    },
    {
      id: "gs",
      topic: "Genuine student",
      question: "How does the course fit your study and work so far?",
      options: [
        { value: "fits", label: "It builds on what I've studied or done", status: "ok", note: "That supports your [[gs|Genuine Student]] answers. Back each claim with a document." },
        {
          value: "change",
          label: "It's a change of direction, and I can explain why",
          status: "todo",
          note: "Reasonable changes are allowed if you explain them. Show your research into the course and how it helps your career, with evidence.",
        },
        {
          value: "history",
          label: "I've changed courses or providers, or had long study gaps, on a student visa before",
          status: "todo",
          note: "Home Affairs looks closely at a pattern of changes or gaps. Explain each one honestly, with evidence.",
          link: { label: "Read the Genuine Student guide", href: "/visas/study/genuine-student-requirement" },
        },
        {
          value: "refused",
          label: "I've had a visa refused or cancelled before",
          status: "todo",
          note: "It doesn't rule you out, but you must declare it and show what has changed. Not disclosing it is treated far more seriously than the refusal itself.",
        },
      ],
    },
    {
      id: "funds",
      topic: "Money",
      question: "Can you show enough money, or a qualifying family income?",
      options: [
        {
          value: "savings",
          label: "Yes: savings, a loan or a scholarship, with a clear history",
          status: "ok",
          note: "Your statements should show how the money built up. A one-day balance certificate isn't enough.",
        },
        {
          value: "income",
          label: "My parents or partner earned at least A$87,856 in the last 12 months",
          status: "ok",
          note: "Use official government documents, such as tax assessments, not bank statements. The figure is A$102,500 if family members apply with you.",
        },
        {
          value: "unsure",
          label: "I'm not sure how much I need",
          status: "todo",
          note: "Add up travel, the first 12 months of course fees and A$29,710 of living costs in the funds calculator.",
          link: { label: "Open the funds calculator", href: "#funds" },
        },
        {
          value: "no",
          label: "Not yet",
          status: "stop",
          note: "You must be able to show the funds, or the income, whenever the checklist or Home Affairs asks for them.",
        },
      ],
    },
    {
      id: "english",
      topic: "English",
      question: "What about English?",
      options: [
        {
          value: "met",
          label: "IELTS 6.0 overall (or equivalent) in the last two years",
          status: "ok",
          note: "That meets the usual Student visa minimum for tests taken from 7 August 2025. Tests delivered entirely online aren't accepted.",
        },
        {
          value: "package",
          label: "Lower, but my main course is packaged with ELICOS",
          status: "ok",
          note: "The minimum drops to IELTS 5.5 with at least 10 weeks of [[elicos|ELICOS]], or 5.0 with at least 20 weeks.",
        },
        {
          value: "exempt",
          label: "I'm exempt",
          hint: "For example a UK, US, Canadian, NZ or Irish passport, or a school course",
          status: "ok",
          note: "Keep evidence of your exemption ready.",
        },
        {
          value: "notyet",
          label: "Not tested yet",
          status: "todo",
          note: "Book an approved test at a test centre. A 485 later needs a higher score, such as IELTS 6.5 overall, so it pays to aim higher.",
          link: { label: "Practise PTE on Learniiz", href: "https://www.learniiz.com", external: true },
        },
      ],
    },
    {
      id: "family",
      topic: "Family",
      question: "Do you want your partner or children to come with you?",
      options: [
        { value: "alone", label: "No, I'm coming alone", status: "ok", note: "Nothing extra to arrange." },
        {
          value: "exempt",
          label: "Yes, and I fit a family exemption",
          hint: "PhD, DFAT or Defence sponsored, fully funded foreign government scholarship, eligible Pacific Island or ASEAN national, or they already hold your student visa and you fit an onshore exemption",
          status: "ok",
          note: "They must apply at the same time and from the same place as you. Each pays their own charge and needs [[oshc|OSHC]].",
        },
        {
          value: "later",
          label: "Yes, but they'd join me later",
          status: "stop",
          note: "Since 2 October 2026 family members can't be added later as [[subsequent|subsequent entrants]], in any circumstance.",
        },
        {
          value: "noexempt",
          label: "Yes, but no exemption fits me",
          status: "stop",
          note: "Partners and children can be included only under an exemption. Talk to us if family is part of your plan.",
          link: { label: "Talk through your options", href: "/bookings" },
        },
      ],
    },
    {
      id: "minor",
      topic: "Under 18",
      question: "Will the student be under 18 while studying?",
      options: [
        { value: "adult", label: "No, 18 or over", status: "ok", note: "No welfare arrangements are needed." },
        {
          value: "guardian",
          label: "Yes, and a parent or relative will live with them in Australia",
          status: "todo",
          note: "Each parent must consent, and the guardian can apply for a [[s590|Student Guardian visa]]. A guardian can't work, so they need funds for themselves and the student.",
          link: { label: "Compare the guardian visa", href: "#compare" },
        },
        {
          value: "provider",
          label: "Yes, and the education provider will arrange welfare",
          status: "todo",
          note: "Each parent must consent, and the provider issues a [[caaw|CAAW]]. The student must not arrive before the welfare arrangements start.",
        },
      ],
    },
    {
      id: "after",
      topic: "After your course",
      question: "Do you want to stay and work in Australia after your course?",
      options: [
        {
          value: "fits",
          label: "Yes, and I'll be 35 or under, with at least 2 academic years of study here",
          status: "ok",
          note: "That fits the usual [[t485|Temporary Graduate visa]] rules. Apply in Australia within 6 months of completing your course.",
        },
        {
          value: "over",
          label: "Yes, but I'll be over 35",
          status: "todo",
          note: "Most 485 applicants must be 35 or under. The limit is under 50 for a research master's or PhD, or a Hong Kong or British National (Overseas) passport. Otherwise look at employer or state-nominated visas.",
        },
        {
          value: "short",
          label: "Yes, but my study here will be shorter than 2 academic years",
          status: "todo",
          note: "The 485 needs at least 92 weeks of registered study completed in Australia, over at least 16 months. Plan your course with that in mind.",
        },
        {
          value: "unsure",
          label: "Not sure yet",
          status: "ok",
          note: "That's fine. If staying is a possibility, check early which occupation your course leads to and which skilled lists it's on.",
          link: { label: "From study to permanent residence", href: "/visas/study/study-to-permanent-residence" },
        },
      ],
    },
  ],
  myths: [
    {
      myth: "I can switch to a Student visa once I'm in Australia on another visa.",
      fact: "Not since 2 October 2026. Visitor, 485, Working Holiday and 482 holders can't apply for a Student visa in Australia, with no exemptions. Most people must apply, and be granted the visa, outside Australia.",
    },
    {
      myth: "My partner and children can join me later.",
      fact: "Not on a Student visa. Since 2 October 2026 they can be included only under an exemption, must apply at the same time and from the same place as you, and can't be added later in any circumstance.",
    },
    {
      myth: "The work limit is 24 hours a week.",
      fact: "It's 48 hours a fortnight: any 14 days starting on a Monday, across all your jobs, while your course is in session. You could work 30 hours one week and 18 the next. There's no limit in scheduled breaks.",
    },
    {
      myth: "Saying I'd like permanent residence one day will get me refused.",
      fact: "No. Home Affairs recognises that genuine students may later apply for permanent residence, and that plan doesn't count against you. What matters is that study is your main reason for applying now.",
    },
    {
      myth: "An Australian degree leads straight to permanent residence.",
      fact: "No. Study opens the door to a 485 and some points, but permanent residence depends on your occupation, a skills assessment, English, age, and an invitation, a nomination or an employer.",
    },
    {
      myth: "A bank balance certificate proves my funds.",
      fact: "Home Affairs wants genuine access: statements that show how the money built up, loan terms and disbursement, or scholarship letters. A one-day certificate or a large unexplained deposit can lead to refusal.",
    },
    {
      myth: "My 485 window starts at my graduation ceremony.",
      fact: "No. It starts on the date your provider first tells you in writing that you've met the academic requirements. You must apply within 6 months of that date, and late applications can't be accepted.",
    },
    {
      myth: "A parent on a Student Guardian visa can work part time.",
      fact: "No. The Student Guardian visa has no work rights. The guardian lives with the student and must show funds for 12 months of living costs for both of them, plus fees and travel.",
    },
  ],
  roles: [
    {
      id: "student",
      label: "I'm the student",
      intro: "Your part is a complete application, then keeping to your conditions so the next visa stays open.",
      groups: [
        {
          title: "Before you apply",
          items: [
            "Get a [[coe|CoE]] for every course in your package",
            "Sit an approved English test, unless you're exempt",
            "Gather funds evidence that shows how the money built up",
            "Buy [[oshc|OSHC]] that starts on the day you arrive",
          ],
        },
        {
          title: "While you study",
          items: [
            "Don't work until your course starts, then keep to 48 hours a fortnight in term",
            "Stay enrolled at the same or a higher [[aqf|AQF level]], attending and progressing",
            "Give your provider your address within 7 days of arriving",
            "Keep [[oshc|OSHC]] for your whole stay",
          ],
        },
        {
          title: "When you finish",
          items: [
            "Note your completion date: you have 6 months from it to apply for a [[t485|485]]",
            "Get an English result from the last 12 months, taken at a test centre",
            "Apply for an [[afp|AFP check]] at least the day before you lodge",
            "Arrange adequate health insurance for everyone applying",
          ],
        },
      ],
    },
    {
      id: "parent",
      label: "I'm a parent",
      tone: "pink",
      intro: "If your child is under 18, your part is consent, safe welfare arrangements and, if you move with them, a [[s590|Student Guardian visa]].",
      groups: [
        {
          title: "Consent",
          items: [
            "Each parent or legal guardian signs consent (Form 1229 or a statutory declaration)",
            "If only one parent signs, give evidence of sole custody",
            "Provide your child's birth certificate naming both parents",
          ],
        },
        {
          title: "Welfare until 18",
          items: [
            "Ask the provider for a [[caaw|CAAW]], or nominate a guardian on Form 157N",
            "A guardian must be a parent, a custodian or a relative aged 21 or over",
            "Your child must not arrive before the welfare arrangements start",
          ],
        },
        {
          title: "Moving with your child",
          items: [
            "Apply for a [[s590|Student Guardian visa]] with Form 157N attached, at the same time as the student if they're applying too",
            "Show A$29,710 a year of living costs for yourself and A$29,710 for the student, plus fees and travel",
            "Expect no work rights, and live with the student for the whole stay",
          ],
        },
      ],
      link: { label: "Read about the Student Guardian visa", href: "/visas/study/student-guardian-visa-590" },
    },
  ],
  glossary: [
    {
      id: "cricos",
      term: "CRICOS",
      full: "Commonwealth Register of Institutions and Courses for Overseas Students",
      definition: "The register of education providers and courses that can enrol international students. A Student visa needs a full-time course on it.",
    },
    {
      id: "coe",
      term: "CoE",
      full: "Confirmation of Enrolment",
      definition: "The document your provider issues when you enrol. You attach one for every course when you apply, and it must still be valid when the visa is decided.",
    },
    {
      id: "oshc",
      term: "OSHC",
      full: "Overseas Student Health Cover",
      definition: "Health insurance from an approved Australian insurer. You and every family member included must hold it for your whole stay, starting on the day you arrive.",
    },
    {
      id: "gs",
      term: "Genuine Student requirement",
      definition: "The test that you're a genuine applicant for entry and stay as a student. You answer questions in the online form, and Home Affairs weighs your circumstances, immigration history and record of keeping to visa conditions.",
    },
    {
      id: "dct",
      term: "Document Checklist Tool",
      definition: "The Home Affairs tool that shows, for your passport country and education provider, whether you must attach English and funds evidence when you lodge.",
    },
    {
      id: "caaw",
      term: "CAAW",
      full: "Confirmation of Appropriate Accommodation and Welfare",
      definition: "A provider's confirmation that it has approved accommodation and welfare for a student under 18. It covers the CoE period plus seven days.",
    },
    {
      id: "elicos",
      term: "ELICOS",
      definition: "English language courses for international students. A standalone ELICOS course has a lower visa charge, and a main course packaged with at least 10 weeks of ELICOS lowers the English score you need.",
    },
    {
      id: "aqf",
      term: "AQF level",
      definition: "A qualification's level on the national scale: for example, a doctorate is level 10 and a master's degree level 9. Under condition 8202 you must stay at the same or a higher level.",
    },
    {
      id: "c8105",
      term: "Condition 8105",
      definition: "The student work condition: no work before your course starts, then no more than 48 hours in any fortnight while the course is in session. No limit in scheduled breaks.",
    },
    {
      id: "c8202",
      term: "Condition 8202",
      definition: "Stay enrolled in a registered course at the same or a higher AQF level, with satisfactory attendance and course progress.",
    },
    {
      id: "t485",
      term: "Temporary Graduate visa",
      full: "Subclass 485",
      definition: "A visa for recent graduates of at least 2 academic years of Australian study, with full work rights for 18 months to 3 years. You apply in Australia within 6 months of completing your course.",
    },
    {
      id: "s590",
      term: "Student Guardian visa",
      full: "Subclass 590",
      definition: "A visa for a parent, custodian or relative aged 21 or over to live in Australia with a student under 18 and care for them. It has no work rights.",
    },
    {
      id: "subsequent",
      term: "Subsequent entrant",
      definition: "A family member who applies to join a visa holder later. Since 2 October 2026 this isn't possible for Student visas in any circumstance. It is still possible for a 485.",
    },
    {
      id: "afp",
      term: "AFP check",
      full: "Australian Federal Police check",
      definition: "A national police certificate. For a 485, every applicant aged 16 or over must have applied for one at least the day before lodging.",
    },
    {
      id: "mltssl",
      term: "MLTSSL",
      full: "Medium and Long-term Strategic Skills List",
      definition: "A skilled occupation list. The 485 Post-Vocational Education Work stream needs an occupation on it that is closely related to your qualification.",
    },
    {
      id: "s48",
      term: "Section 48 bar",
      definition: "A rule that limits which visas you can apply for in Australia after a refusal or cancellation, while you hold no substantive visa.",
    },
  ],
  cta: {
    subtitle: "We check your course, evidence and timing against these rules, tell you honestly where you stand, and prepare each application with you.",
  },
  verifiedExtras: [
    {
      fact: "The Skilled Employer Sponsored Regional (Provisional) visa (subclass 494) is a five-year visa for skilled workers nominated by an employer in a designated regional area. It needs three years of experience, a skills assessment and Competent English, and after three years it can lead to permanent residence through the subclass 191.",
      source: "/visas/employer-sponsored/skilled-employer-sponsored-regional-visa-494",
    },
  ],
  finder: studyFinder,
  evidence: gsEvidence && {
    ...gsEvidence,
    title: "What can you show for each Genuine Student question?",
    highlight: "each Genuine Student question",
  },
  workHours: studentVisa500Explainer.workHours,
  funds: studentVisaFinancialCapacityExplainer.funds,
  fees: {
    variantLabel: "Which visa?",
    variants: [
      {
        id: "student",
        label: "Student visa (500), most courses",
        hint: "Degrees, vocational courses and school",
        primary: [{ label: "Base application charge", amount: 2500 }],
        adult: [{ label: "Partner (18 or over)", amount: 1530 }],
        child: [{ label: "Child under 18", amount: 500 }],
      },
      {
        id: "student-elicos",
        label: "Student visa (500), ELICOS or non-award course",
        hint: "A standalone English course, or a course that doesn't lead to an award",
        primary: [{ label: "Base application charge", amount: 2050 }],
        adult: [{ label: "Partner (18 or over)", amount: 1255 }],
        child: [{ label: "Child under 18", amount: 410 }],
      },
      {
        id: "student-research",
        label: "Student visa (500), postgraduate research",
        hint: "A research master's or PhD: family members included pay no charge",
        primary: [{ label: "Base application charge", amount: 2500 }],
        adult: [{ label: "Partner (18 or over)", amount: 0 }],
        child: [{ label: "Child under 18", amount: 0 }],
      },
      {
        id: "guardian",
        label: "Student Guardian visa (590)",
        hint: "Only children under 6 can be included, in limited cases",
        primary: [{ label: "Base application charge", amount: 2500 }],
        child: [{ label: "Child under 6", amount: 500 }],
      },
      {
        id: "graduate",
        label: "Temporary Graduate visa (485)",
        hint: "Post-Higher or Post-Vocational Education Work stream",
        primary: [{ label: "Base application charge", amount: 5750 }],
        adult: [{ label: "Additional applicant (18 or over)", amount: 2875 }],
        child: [{ label: "Additional applicant under 18", amount: 1450 }],
      },
      {
        id: "graduate-second",
        label: "Second Temporary Graduate visa (485)",
        hint: "Second Post-Higher Education Work stream, for regional graduates",
        primary: [{ label: "Base application charge", amount: 2265 }],
        adult: [{ label: "Additional applicant (18 or over)", amount: 1140 }],
        child: [{ label: "Additional applicant under 18", amount: 575 }],
      },
    ],
    maxAdults: 1,
    maxChildren: 4,
    notIncluded:
      "Not included: OSHC or other health insurance, health examinations, police certificates, the AFP check, English tests, translations and any skills assessment.",
    notes: [
      "Charges from 1 July 2026. Since 2 October 2026 a Student visa can include family members only under an exemption, and each pays their own charge.",
      "An A$700 subsequent temporary application charge may be added for each person who applies in Australia for a 500 or 590, depending on their own visa history. The 485 is exempt.",
      "No Student visa charge for Commonwealth scholarship holders, DFAT and Defence students and their families, secondary exchange students, or students who reapply within 12 months of an education provider default.",
      "Lower charges for eligible Pacific Island and Timor-Leste citizens (and ASEAN citizens for the Student visa) aren't shown here.",
      "The counters allow one other adult. Each further adult in a 485 adds A$2,875 (A$1,140 in the Second stream).",
    ],
    confirmUrl: "https://immi.homeaffairs.gov.au/visas/visa-pricing-estimator",
    confirmLabel: "Home Affairs Visa Pricing Estimator",
  },
};
