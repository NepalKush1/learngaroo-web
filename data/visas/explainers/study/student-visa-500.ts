import type { VisaExplainer } from "../types";
import { ICON } from "../icons";
import { studyFinder } from "./study-finder";

// Interactive explainer for the Student visa (subclass 500). Every figure
// matches data/visas/study.ts (checked against Home Affairs, LIN 19/198 and
// the Migration Regulations on 12 October 2026). The travel guide amounts
// come from the library's financial capacity guide; the subsequent temporary
// application charge rule, the cost concession and two glossary expansions
// were read on the Home Affairs pages on 13 October 2026 (verifiedExtras).

const HA_500 = "https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/student-500";
const HA_STAC =
  "https://immi.homeaffairs.gov.au/visas/getting-a-visa/fees-and-charges/explanation-of-visa-application-charges/subsequent-temporary-application-charge";

export const studentVisa500Explainer: VisaExplainer = {
  slug: "student-visa-500",
  factsAsAt: "12 October 2026",
  oneLiner:
    "The Student visa lets you study a full-time registered course in Australia for the length of your enrolment, up to six years, and work up to 48 hours a fortnight while your course is in session.",
  bigIdeas: [
    { title: "Enrolment comes first", body: "You need a Confirmation of Enrolment for a full-time registered course before you can apply.", icon: ICON.academicCap },
    { title: "Most people apply from outside", body: "Since 2 October 2026 most applicants must lodge, and be granted the visa, outside Australia.", icon: ICON.globeAsiaAustralia },
    { title: "Study is the real purpose", body: "You must be a genuine student with enough money. Work is capped at 48 hours a fortnight in term.", icon: ICON.checkBadge },
  ],
  heroCard: [
    { label: "Who it's for", value: "Students with a Confirmation of Enrolment", icon: ICON.academicCap },
    { label: "How long", value: "Your course plus a short grace period, up to 6 years", icon: ICON.clock },
    { label: "Work", value: "48 hours a fortnight in term, unlimited in breaks", icon: ICON.briefcase },
    { label: "Where you apply", value: "Outside Australia, unless an exemption applies", icon: ICON.globeAsiaAustralia },
    { label: "Family", value: "Only under an exemption, applying with you", icon: ICON.users },
    { label: "Visa charge", value: "A$2,500, or A$2,050 for English or non-award courses", icon: ICON.currencyDollar },
  ],
  actors: [
    {
      id: "provider",
      name: "Your education provider",
      short: "Provider",
      icon: ICON.academicCap,
      tone: "orange",
      role: "Enrols you in a [[cricos|CRICOS-registered]] course and keeps track of your study.",
      does: [
        "Issues a [[coe|Confirmation of Enrolment]] for each course",
        "Can arrange your [[oshc|OSHC]], with the details shown on your CoE",
        "Issues a [[caaw|CAAW]] if it approves welfare arrangements for a student under 18",
        "Sets attendance and progress rules, and reports breaches to Home Affairs",
      ],
    },
    {
      id: "you",
      name: "You (the student)",
      short: "You",
      icon: ICON.user,
      tone: "green",
      role: "Apply for the visa, then study, keep your enrolment and follow your conditions.",
      does: [
        "Show you're a [[gs|genuine student]] with enough money",
        "Meet the English, health and character requirements",
        "Hold [[oshc|OSHC]] from the day you arrive",
        "Work no more than 48 hours a fortnight while your course is in session",
      ],
    },
    {
      id: "government",
      name: "Department of Home Affairs",
      short: "Home Affairs",
      icon: ICON.buildingLibrary,
      tone: "blue",
      role: "Checks you meet every requirement and decides the visa.",
      does: [
        "Assesses your [[gs|Genuine Student]] answers and your evidence",
        "May ask for biometrics, health checks or more documents",
        "Grants the visa with its conditions, or refuses it",
        "Can cancel the visa if a condition is breached",
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
      detail: "Your provider issues a [[coe|Confirmation of Enrolment]] for every course in your package. Without one, your application is invalid.",
    },
    {
      from: "you",
      to: "government",
      label: "You apply",
      detail: "You lodge online from outside Australia, unless an exemption applies. You include your CoE, [[gs|Genuine Student]] answers, [[oshc|OSHC]] details and any evidence the checklist asks for.",
    },
    {
      from: "government",
      to: "you",
      label: "Visa granted",
      detail: "Home Affairs grants the visa with conditions, such as the 48-hour fortnightly work limit and keeping your enrolment.",
    },
    {
      from: "provider",
      to: "government",
      label: "Reports on your study",
      detail: "Your provider monitors your attendance and course progress, and reports breaches to Home Affairs, which can lead to cancellation.",
    },
  ],
  journeyTitle: "From enrolment to graduation",
  journeyHighlight: "graduation",
  stages: [
    {
      id: "enrol",
      short: "Enrol",
      title: "Choose a course and get your CoE",
      who: ["provider", "you"],
      description: "Enrol in a full-time course registered on [[cricos|CRICOS]] and pay the deposit. Your provider then issues a [[coe|Confirmation of Enrolment]] for each course.",
      points: [
        "Every course in a package needs its own CoE",
        "Gaps between packaged courses must be under two months, apart from the end-of-year break",
        "If your provider arranges [[oshc|OSHC]], the policy details appear on the CoE",
      ],
      youHold: "A CoE for every course in your package",
      icon: ICON.academicCap,
    },
    {
      id: "where",
      short: "Check",
      title: "Check where you can apply",
      who: ["you"],
      description: "Since 2 October 2026 most people must be outside Australia when they lodge, and when the visa is granted.",
      points: [
        "In Australia, a student visa holder can apply only under one of six exemptions",
        "Visitor, 485, Working Holiday and 482 holders must apply from outside Australia",
        "An invalid application can't be reviewed and can leave you without a visa",
      ],
      youHold: "A clear answer on where you must lodge",
      icon: ICON.globeAsiaAustralia,
    },
    {
      id: "cover",
      short: "Cover",
      title: "Arrange health cover and welfare",
      who: ["you", "provider"],
      description: "If you apply from outside Australia, buy [[oshc|OSHC]] that starts on the day you arrive (not the day your course starts) and covers your whole stay.",
      points: [
        "Your visa end date is capped by your cover",
        "Under 18? You need approved welfare, such as a [[caaw|CAAW]] or a nominated guardian, and consent from each parent",
        "You can do your health examinations before you apply",
      ],
      youHold: "An OSHC policy and, for under-18s, welfare documents",
      icon: ICON.shieldCheck,
    },
    {
      id: "evidence",
      short: "Evidence",
      title: "Get your English and money evidence ready",
      who: ["you"],
      description: "The [[dct|Document Checklist Tool]] tells you whether to attach English and funds evidence when you lodge. Home Affairs can ask for it either way.",
      points: [
        "Usually IELTS 6.0 overall or PTE Academic 47, lower with a packaged [[elicos|ELICOS]] course, unless you're exempt",
        "Funds for travel, 12 months of course fees and A$29,710 of living costs for you",
        "Bank statements that show how the money built up",
      ],
      youHold: "An English result (or exemption) and funds evidence with a clear history",
      icon: ICON.banknotes,
    },
    {
      id: "answers",
      short: "Answers",
      title: "Answer the Genuine Student questions",
      who: ["you"],
      description: "The online form asks four questions (a fifth in some cases). Answer each in English, in your own words, within 150 words.",
      points: [
        "Your circumstances, why this course and provider, how it benefits you, and anything else",
        "Back each statement with a document: evidence carries more weight",
        "Wanting permanent residence later doesn't count against you",
      ],
      youHold: "Four (or five) answers with supporting documents",
      icon: ICON.pencilSquare,
    },
    {
      id: "apply",
      short: "Apply",
      title: "Lodge online and pay",
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
      description: "Your visa runs for your course plus a short grace period. Keep to your conditions for the whole time.",
      points: [
        "Up to 48 hours of work a fortnight in term, unlimited in breaks ([[c8105|condition 8105]])",
        "Stay enrolled at the same or a higher [[aqf|AQF]] level, attending and progressing ([[c8202|condition 8202]])",
        "Keep [[oshc|OSHC]], and give your provider your address within 7 days of arriving",
      ],
      youHold: "A study and work record that keeps your visa safe",
      icon: ICON.bookOpen,
    },
    {
      id: "next",
      short: "Next",
      title: "After your course",
      who: ["you"],
      description: "The visa can't be extended. If you want to stay, a [[t485|Temporary Graduate visa]] is the usual next step.",
      points: [
        "You may be eligible for a 485 within six months of completing your course",
        "Points-tested or employer-sponsored visas can follow",
        "Another Student visa usually means applying from outside Australia",
      ],
      youHold: "A qualification and a plan for your next visa",
      icon: ICON.rocketLaunch,
    },
  ],
  check: {
    ok: {
      title: "You look on track",
      body: "Nothing in your answers rules you out. Next, check the details: your CoE, your evidence and where you can apply.",
    },
    disclaimer: "A general self-check, not advice or a prediction. Home Affairs decides on your full circumstances.",
  },
  quiz: [
    {
      id: "coe",
      topic: "Enrolment",
      question: "Do you have a Confirmation of Enrolment (CoE) for a full-time registered course?",
      options: [
        { value: "yes", label: "Yes, for every course in my package", status: "ok", note: "That's the foundation of your application. The CoE must still be valid when the visa is decided." },
        {
          value: "offer",
          label: "I have an offer letter, but no CoE yet",
          status: "todo",
          note: "Accept the offer and pay the deposit so your provider can issue the CoE. Without one, the application is invalid.",
        },
        { value: "none", label: "I haven't chosen a course yet", status: "todo", note: "Start with a full-time course registered on [[cricos|CRICOS]]. Everything else follows from your enrolment." },
      ],
    },
    {
      id: "location",
      topic: "Where you apply",
      question: "Where are you now?",
      help: "Since 2 October 2026 most applications must be lodged, and granted, outside Australia.",
      options: [
        { value: "outside", label: "Outside Australia", status: "ok", note: "That's where most people now apply from. You must also be outside Australia when the visa is granted." },
        {
          value: "exempt",
          label: "In Australia on a Student visa, and I fit one of the six exemptions",
          status: "ok",
          note: "You may be able to apply in Australia. Check the exemption carefully: an invalid application can't be reviewed.",
          link: { label: "Check with the visa finder", href: "#finder" },
        },
        {
          value: "student",
          label: "In Australia on a Student visa, but no exemption fits",
          status: "todo",
          note: "You'd need to leave and apply from outside Australia, and be outside Australia when the visa is granted.",
        },
        {
          value: "other",
          label: "In Australia on a visitor, 485, Working Holiday, 482 or other visa",
          status: "todo",
          note: "These visas can't be used to apply in Australia, and there are no exemptions. You'd apply after leaving Australia.",
        },
        {
          value: "novisa",
          label: "In Australia without a visa",
          status: "stop",
          note: "Applying without a substantive visa is possible only in narrow cases, and the [[s48|section 48 bar]] may apply. Get advice first.",
          link: { label: "Book urgent advice", href: "/bookings" },
        },
      ],
    },
    {
      id: "gs",
      topic: "Genuine student",
      question: "How does the course fit your study and work history?",
      options: [
        { value: "fits", label: "It builds on what I've studied or done", status: "ok", note: "That supports your [[gs|Genuine Student]] answers. Back each claim with documents." },
        {
          value: "change",
          label: "It's a change of direction, and I can explain why",
          status: "todo",
          note: "A course that doesn't fit your history is a common refusal reason unless you explain it credibly, with evidence.",
          link: { label: "Read the Genuine Student guide", href: "/visas/study/genuine-student-requirement" },
        },
        {
          value: "history",
          label: "I've changed courses or providers, or had long gaps, on a student visa before",
          status: "todo",
          note: "A history of changes, or long gaps with no credible explanation, is a common refusal reason. Explain each one with evidence.",
          link: { label: "Read the Genuine Student guide", href: "/visas/study/genuine-student-requirement" },
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
          note: "Make sure your statements show how the money built up. A one-day balance certificate isn't enough.",
        },
        {
          value: "income",
          label: "My parents or partner earned at least A$87,856 in the last 12 months",
          status: "ok",
          note: "Use official tax documents, not bank statements or employer letters. The figure is A$102,500 if family members apply with you.",
        },
        { value: "unsure", label: "I'm not sure how much I need", status: "todo", note: "Use the funds calculator on this page.", link: { label: "Open the funds calculator", href: "#funds" } },
        {
          value: "no",
          label: "Not yet",
          status: "stop",
          note: "You need funds for travel, 12 months of course fees and living costs, or a qualifying income, whenever the checklist or Home Affairs asks.",
        },
      ],
    },
    {
      id: "english",
      topic: "English",
      question: "What about English?",
      options: [
        { value: "met", label: "IELTS 6.0 overall (or equivalent) in the last two years", status: "ok", note: "Meets the usual minimum for tests taken from 7 August 2025." },
        {
          value: "package",
          label: "Lower, but my course is packaged with ELICOS",
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
          note: "Book an approved test. Tests delivered entirely online aren't accepted.",
          link: { label: "Practise PTE on Learniiz", href: "https://www.learniiz.com", external: true },
        },
      ],
    },
    {
      id: "oshc",
      topic: "Health cover",
      question: "Have you arranged Overseas Student Health Cover (OSHC)?",
      options: [
        {
          value: "arrival",
          label: "Yes, starting on the day I arrive",
          status: "ok",
          note: "Make sure the insurer, the dates and (if you arranged it yourself) the policy number are in your application.",
        },
        { value: "course", label: "Yes, but it starts when my course starts", status: "todo", note: "Cover must start on the day you arrive. A later start can lead to refusal or a shorter visa." },
        { value: "no", label: "Not yet", status: "todo", note: "Buy cover from an approved insurer for your whole stay, or ask your provider to arrange it." },
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
          note: "They must apply at the same time and from the same place as you, and each pays their own charge.",
        },
        {
          value: "later",
          label: "Yes, but they'd join me later",
          status: "stop",
          note: "Since 2 October 2026 family members can't be added later as [[subsequent|subsequent entrants]]. They must apply with you.",
        },
        { value: "noexempt", label: "Yes, but no exemption fits", status: "stop", note: "Family members can be included only under one of the exemptions." },
      ],
    },
    {
      id: "minor",
      topic: "Under 18",
      question: "Will you be under 18 while you study?",
      options: [
        { value: "adult", label: "No, I'm 18 or over", status: "ok", note: "No welfare arrangements needed." },
        {
          value: "minor",
          label: "Yes",
          status: "todo",
          note: "You need consent from each parent and approved welfare until you turn 18, such as a [[caaw|CAAW]] or a nominated guardian.",
          link: { label: "See the parent checklist", href: "#roles" },
        },
      ],
    },
  ],
  myths: [
    {
      myth: "The work limit is counted week by week.",
      fact: "It's counted by fortnight: 48 hours in any 14 days starting on a Monday, across all your jobs, while your course is in session. There's no limit during scheduled course breaks.",
    },
    {
      myth: "I can apply for a new Student visa in Australia whenever I like.",
      fact: "Not since 2 October 2026. Most people must apply, and be granted the visa, outside Australia. A student visa holder can apply in Australia only under one of six exemptions. Visitor, 485, Working Holiday and 482 holders can't apply in Australia at all.",
    },
    {
      myth: "My family can join me later.",
      fact: "Not any more. Since 2 October 2026 partners and children can be included only under an exemption. They must apply at the same time and from the same place as you, and can't be added later.",
    },
    {
      myth: "Saying I'd like permanent residence one day will get me refused.",
      fact: "Wanting to apply for permanent residence later doesn't count against you. What matters is that you are a genuine student now.",
    },
    {
      myth: "A bank balance certificate proves my funds.",
      fact: "Home Affairs wants genuine access: statements that show how the money built up, loan terms and disbursement, or scholarship letters. A one-day certificate or large unexplained deposits can lead to refusal.",
    },
    {
      myth: "My health cover can start when my course starts.",
      fact: "If you apply from outside Australia, OSHC must start on the day you arrive. If the insurer, the dates or (for a policy you arranged) the policy number are missing from the application, the visa is refused.",
    },
    {
      myth: "I can extend my Student visa.",
      fact: "A Student visa can't be extended. To keep studying you need a new one, which most people must now lodge from outside Australia.",
    },
    {
      myth: "Unpaid internships don't count towards my work hours.",
      fact: "Unpaid work experience counts towards the limit, unless it's a mandatory, registered part of your course.",
    },
  ],
  roles: [
    {
      id: "student",
      label: "I'm the student",
      intro: "Your part is a complete application, then keeping to your conditions once you're here.",
      groups: [
        {
          title: "Before you apply",
          items: [
            "Accept your offer and get a [[coe|CoE]] for every course",
            "Sit an approved English test, unless you're exempt",
            "Gather funds evidence that shows how the money built up",
            "Buy [[oshc|OSHC]] that starts on the day you arrive",
          ],
        },
        {
          title: "When you apply",
          items: [
            "Lodge from outside Australia, unless an exemption applies",
            "Answer the [[gs|Genuine Student]] questions within 150 words each",
            "Pay A$2,500 (A$2,050 for ELICOS and non-award courses)",
            "Give biometrics within 14 days if asked",
          ],
        },
        {
          title: "Once you're here",
          items: [
            "Don't work until your course starts, then keep to 48 hours a fortnight in term",
            "Stay enrolled at the same or a higher [[aqf|AQF]] level ([[c8202|condition 8202]])",
            "Give your provider your address within 7 days of arriving",
            "Keep [[oshc|OSHC]] for your whole stay",
          ],
        },
      ],
    },
    {
      id: "parent",
      label: "I'm a parent",
      tone: "pink",
      intro: "If your child is under 18, your part is consent and safe welfare arrangements until they turn 18.",
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
          title: "Welfare",
          items: [
            "Arrange a [[caaw|CAAW]] through the provider, or nominate a guardian on Form 157N",
            "A nominated guardian must be a parent, a custodian or a relative aged 21 or over",
            "Your child must not arrive before the welfare arrangements start",
          ],
        },
        {
          title: "School students",
          items: [
            "Your child must be at least 6, and under 17 when starting Year 9",
            "Under 18 for Year 10, under 19 for Year 11 and under 20 for Year 12",
            "Children starting in Years 1 to 4 are usually granted no more than three years",
          ],
        },
      ],
      link: { label: "Moving with your child? Read about the 590", href: "/visas/study/student-guardian-visa-590" },
    },
    {
      id: "partner",
      label: "I'm the partner",
      tone: "teal",
      intro: "You can come only if the student fits an exemption. Your part is applying with them and keeping to your own limits.",
      groups: [
        {
          title: "To apply",
          items: [
            "Apply at the same time, and from the same place, as the student",
            "Show your relationship: a marriage certificate, at least 12 months of de facto evidence, or a registered relationship",
            "Hold [[oshc|OSHC]] and meet the health and character requirements",
          ],
        },
        {
          title: "Children",
          items: [
            "Include unmarried children under 18 in the same application",
            "School-age children need a school enrolment letter and evidence of school fees",
            "A child born in Australia automatically holds the same visa",
          ],
        },
        {
          title: "Once you're here",
          items: [
            "No work until the student's course starts, then up to 48 hours a fortnight ([[c8104|condition 8104]])",
            "No limit if the student is studying a master's or doctoral degree",
            "No more than three months of study without your own Student visa ([[c8201|condition 8201]])",
          ],
        },
      ],
    },
  ],
  glossary: [
    {
      id: "cricos",
      term: "CRICOS",
      full: "Commonwealth Register of Institutions and Courses for Overseas Students",
      definition: "The register of education providers and courses that can enrol international students. Your course must be on it, and you must study it full time.",
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
      definition: "The test that you are a genuine applicant for entry and stay as a student. You answer questions in the online form, and Home Affairs weighs your circumstances, immigration history and record of complying with visas.",
    },
    {
      id: "caaw",
      term: "CAAW",
      full: "Confirmation of Appropriate Accommodation and Welfare",
      definition: "A provider's confirmation that it has approved accommodation and welfare for a student under 18. It covers the CoE period plus seven days.",
    },
    {
      id: "dct",
      term: "Document Checklist Tool",
      definition: "The Home Affairs tool that shows, for your passport country and provider, whether you must attach English and funds evidence when you lodge.",
    },
    {
      id: "elicos",
      term: "ELICOS",
      full: "English Language Intensive Courses for Overseas Students",
      definition: "English courses for international students. A main course packaged with ELICOS can lower the English score you need.",
    },
    {
      id: "aqf",
      term: "AQF",
      full: "Australian Qualifications Framework",
      definition: "The national system that ranks Australian qualifications from level 1 to level 10. Under condition 8202 you must stay at the same or a higher level.",
    },
    {
      id: "c8105",
      term: "Condition 8105",
      definition: "Your work condition: no work before your course starts, then no more than 48 hours in any fortnight while the course is in session. No limit in scheduled breaks.",
    },
    {
      id: "c8202",
      term: "Condition 8202",
      definition: "Stay enrolled in a registered course at the same or a higher AQF level, with satisfactory attendance and course progress.",
    },
    {
      id: "c8104",
      term: "Condition 8104",
      definition: "The work limit for family members. No work before the student's course starts, then 48 hours a fortnight at any time. There's no limit if the student is studying a master's or doctoral degree.",
    },
    {
      id: "c8201",
      term: "Condition 8201",
      definition: "Family members can't study or train for more than three months unless they get their own Student visa. Children from age 6 need their own visa to attend school.",
    },
    {
      id: "t485",
      term: "Temporary Graduate visa",
      full: "Subclass 485",
      definition: "A visa that lets recent graduates stay and work in Australia after their studies. You may be eligible within six months of completing your course.",
    },
    {
      id: "bva",
      term: "Bridging visa A",
      definition: "The visa you receive when you apply in Australia on an eligible visa. It starts when your current visa ends and doesn't allow travel.",
    },
    {
      id: "subsequent",
      term: "Subsequent entrant",
      definition: "A family member who applies to join a visa holder later. Since 2 October 2026 this isn't possible for Student visas in any circumstance.",
    },
    {
      id: "stac",
      term: "Subsequent temporary application charge",
      definition: "An extra A$700 charge for each applicant who lodges in Australia and also applied for their current visa in Australia. It isn't charged on your first temporary visa application made in Australia.",
    },
    {
      id: "s48",
      term: "Section 48 bar",
      definition: "A rule that limits which visas you can apply for in Australia after a refusal or cancellation, while you hold no substantive visa.",
    },
  ],
  verifiedExtras: [
    {
      fact: "Home Affairs travel guide for financial capacity: A$2,000 for each person applying from most countries outside Australia, A$2,500 from East or Southern Africa, A$3,000 from West Africa, A$1,000 if applying in Australia, or A$1,500 if applying in Australia and returning to Africa.",
      source: "/visas/study/student-visa-financial-capacity",
    },
    {
      fact: "The subsequent temporary application charge is payable by each person in the application, based on their own visa history. It is not charged when the applicant is outside Australia, or is making their first substantive temporary visa application in Australia.",
      source: HA_STAC,
    },
    {
      fact: "A lower Student visa charge applies to eligible Pacific Island, Timor-Leste and ASEAN citizens, and to their family members.",
      source: HA_500,
    },
    {
      fact: "ELICOS stands for English Language Intensive Courses for Overseas Students. The Australian Qualifications Framework (AQF) ranks qualifications from level 1 to level 10.",
      source: HA_500,
    },
    {
      fact: "A parent, custodian or relative aged 21 or over who will live in Australia with a student under 18 can apply for a Student Guardian visa (subclass 590), nominated on Form 157N.",
      source: "/visas/study/student-guardian-visa-590",
    },
  ],
  finder: studyFinder,
  workHours: {
    limit: 48,
    condition: "Condition 8105",
    breakNote: "During scheduled course breaks, and once you've completed the course on your CoE, there's no limit on your hours.",
    footnote:
      "A fortnight is 14 days starting on a Monday, counted across all your jobs. You can't work before your course starts unless you held a visa with work rights when you applied. Research master's and PhD students have no limit once their course has started. Unpaid work experience counts unless it's a mandatory registered part of your course.",
  },
  funds: {
    living: { you: 29710, partner: 10394, child: 4449 },
    schooling: 13502,
    travel: [
      { label: "Most countries outside Australia", amount: 2000 },
      { label: "East or Southern Africa", amount: 2500 },
      { label: "West Africa", amount: 3000 },
      { label: "Applying in Australia", amount: 1000 },
      { label: "Applying in Australia, returning to Africa", amount: 1500 },
    ],
    footnote:
      "Living and school costs are the 12-month minimums Home Affairs sets, pro rata for stays under 12 months. Travel amounts are a Home Affairs guide for each person. Enter your own course fees: the first 12 months, less anything you've paid. Partners and children can be included only under an exemption. Real living costs are often higher than these minimums.",
    alternative:
      "official tax documents showing your parents or partner earned at least A$87,856 in the 12 months before you applied (A$102,500 if family members apply with you).",
  },
  fees: {
    variantLabel: "What's your main course?",
    variants: [
      {
        id: "standard",
        label: "Most courses",
        hint: "Degrees, vocational courses and school",
        primary: [{ label: "Base application charge", amount: 2500 }],
        adult: [{ label: "Partner (18 or over)", amount: 1530 }],
        child: [{ label: "Child under 18", amount: 500 }],
      },
      {
        id: "elicos",
        label: "ELICOS or non-award course",
        hint: "A standalone English course, or a course that doesn't lead to an award",
        primary: [{ label: "Base application charge", amount: 2050 }],
        adult: [{ label: "Partner (18 or over)", amount: 1255 }],
        child: [{ label: "Child under 18", amount: 410 }],
      },
      {
        id: "research",
        label: "Postgraduate research",
        hint: "A research master's or PhD: family members pay no charge",
        primary: [{ label: "Base application charge", amount: 2500 }],
        adult: [{ label: "Partner (18 or over)", amount: 0 }],
        child: [{ label: "Child under 18", amount: 0 }],
      },
    ],
    maxAdults: 1,
    maxChildren: 4,
    addOns: [
      {
        id: "stac",
        label: "Subsequent temporary application charge",
        hint: "For you, if you apply in Australia and also applied for your current visa in Australia",
        amount: 700,
        per: "application",
      },
    ],
    notIncluded: "Not included: OSHC, health examinations, police certificates, English tests and translations.",
    notes: [
      "Family members can be included only under an exemption, and each pays their own charge.",
      "A family member applying in Australia may also pay the A$700 charge, depending on their own visa history.",
      "No charge applies to Commonwealth scholarship holders, DFAT and Defence students and their families, and secondary exchange students. Students who reapply within 12 months of an education provider default also pay nothing.",
      "A lower charge applies to eligible Pacific Island, Timor-Leste and ASEAN citizens, and to their family members.",
    ],
    confirmUrl: "https://immi.homeaffairs.gov.au/visas/visa-pricing-estimator",
    confirmLabel: "Home Affairs Visa Pricing Estimator",
  },
};
