import type { VisaExplainer } from "../types";
import { ICON } from "../icons";
import { studyFinder } from "./study-finder";

// Interactive explainer for the Student Guardian visa (subclass 590). Every
// figure matches data/visas/study.ts (checked against Home Affairs, LIN
// 19/198 and the Migration Regulations on 12 October 2026). The subsequent
// temporary application charge rule was read on the Home Affairs charges
// page on 13 October 2026 (see verifiedExtras).

const HA_STAC =
  "https://immi.homeaffairs.gov.au/visas/getting-a-visa/fees-and-charges/explanation-of-visa-application-charges/subsequent-temporary-application-charge";

export const studentGuardian590Explainer: VisaExplainer = {
  slug: "student-guardian-visa-590",
  factsAsAt: "12 October 2026",
  oneLiner:
    "The Student Guardian visa lets a parent, custodian or relative aged 21 or over live in Australia to care for a student under 18, without working, usually until the student's visa ends or they turn 18.",
  bigIdeas: [
    { title: "You care for a young student", body: "You live with a student under 18 in Australia and look after their accommodation, support and welfare.", icon: ICON.heart },
    { title: "No work, so money matters", body: "You can't work, so you show 12 months of living costs for both you and the student.", icon: ICON.banknotes },
    { title: "It follows the student", body: "Your visa usually ends with the student's visa or their 18th birthday, and it leads to no other visa.", icon: ICON.academicCap },
  ],
  heroCard: [
    { label: "Who can apply", value: "A parent, custodian or relative aged 21 or over", icon: ICON.user },
    { label: "Who nominates you", value: "The student's parent or custodian (Form 157N)", icon: ICON.documentText },
    { label: "How long", value: "Usually until the student's visa ends or they turn 18", icon: ICON.clock },
    { label: "Work", value: "None (condition 8101)", icon: ICON.noSymbol },
    { label: "Children", value: "Only under 6, and only in limited cases", icon: ICON.users },
    { label: "Visa charge", value: "A$2,500, plus A$500 for each child included", icon: ICON.currencyDollar },
  ],
  actors: [
    {
      id: "parent",
      name: "The student's parent or custodian",
      short: "Parent",
      icon: ICON.users,
      tone: "pink",
      role: "Chooses the guardian and nominates them in writing.",
      does: [
        "Decides who will care for the student",
        "Signs [[form157n|Form 157N]] nominating the guardian",
        "Can choose themselves, a custodian or a relative aged 21 or over",
        "Signs a new Form 157N if another guardian must step in",
      ],
    },
    {
      id: "student",
      name: "The student",
      short: "Student",
      icon: ICON.academicCap,
      tone: "teal",
      role: "Holds or applies for a Student visa, and lives with you in Australia.",
      does: [
        "Holds, or applies for, a Student visa (subclass 500)",
        "Is under 18, or older with exceptional circumstances",
        "Lodges at the same time as you, if applying now",
        "Arrives in Australia before you, or with you",
      ],
    },
    {
      id: "government",
      name: "Department of Home Affairs",
      short: "Home Affairs",
      icon: ICON.buildingLibrary,
      tone: "blue",
      role: "Checks the care arrangements and decides your visa.",
      does: [
        "Checks you're a [[gte|genuine temporary entrant]]",
        "Assesses your funds, health insurance, health and character",
        "Sets your visa end date in the grant letter",
        "Approves alternative welfare if you must travel without the student",
      ],
    },
    {
      id: "you",
      name: "You (the guardian)",
      short: "You",
      icon: ICON.user,
      tone: "green",
      role: "Apply for the visa, then live with the student and look after them.",
      does: [
        "Show funds for you and the student for 12 months",
        "Hold health insurance for your whole stay",
        "Live with the student and provide their welfare ([[c8537|condition 8537]])",
        "Don't work, and don't leave Australia without the student unless approved",
      ],
    },
  ],
  flows: [
    {
      from: "parent",
      to: "you",
      label: "Nominates you (157N)",
      detail: "The student's parent or custodian signs [[form157n|Form 157N]] naming you as the guardian. Without it, your application is invalid.",
    },
    {
      from: "student",
      to: "government",
      label: "Student applies (500)",
      detail: "The student holds, or applies for, a Student visa. If they're applying now, both applications should be lodged together.",
    },
    {
      from: "you",
      to: "government",
      label: "You apply (590)",
      detail: "You lodge with your funds, health insurance and [[gte|genuine temporary entrant]] evidence, and pay A$2,500.",
    },
    {
      from: "government",
      to: "you",
      label: "Visa granted",
      detail: "Home Affairs grants your visa and sets its end date and conditions in your grant letter.",
    },
    {
      from: "you",
      to: "student",
      label: "Live with + care for",
      detail: "You arrive after the student or with them, then live together and provide their accommodation, support and general welfare.",
    },
  ],
  journeyTitle: "From nomination to life with the student",
  journeyHighlight: "life with the student",
  stages: [
    {
      id: "nominate",
      short: "Nominate",
      title: "The parent nominates the guardian",
      who: ["parent", "you"],
      description: "The student's parent or custodian decides who will care for the student and signs [[form157n|Form 157N]].",
      points: [
        "The guardian can be a parent, a custodian or a relative aged 21 or over",
        "Relatives include grandparents, brothers and sisters, aunts and uncles, including step-relatives",
        "Without Form 157N the application is invalid",
      ],
      youHold: "A Form 157N signed by the student's parent or custodian",
      icon: ICON.documentText,
    },
    {
      id: "family",
      short: "Family",
      title: "Check your own family situation",
      who: ["you"],
      description: "The visa is refused if any member of your [[family-unit|family unit]] is under 6, even one staying at home. The exceptions: [[compelling|compelling and compassionate reasons]], or a grant that would benefit relations with another government.",
      points: [
        "Children aged 6 or over can't be included: they need their own Student visa",
        "Children under 18 left at home need a carer who accepts responsibility in writing",
        "You can't add a child under 6 after you lodge",
      ],
      youHold: "A clear plan for every child in your family",
      icon: ICON.users,
    },
    {
      id: "funds",
      short: "Funds",
      title: "Gather funds and ties evidence",
      who: ["you"],
      description: "You can't work, so you show money for both of you, and evidence that you'll stay only temporarily.",
      points: [
        "A$29,710 a year for you and A$29,710 for the student",
        "The student's course fees due while you're here, plus travel and any school costs",
        "Or a partner at home earning at least A$102,500 a year",
        "A statement about your ties at home, with evidence",
      ],
      youHold: "Funds evidence and a genuine temporary entrant statement",
      icon: ICON.banknotes,
    },
    {
      id: "cover",
      short: "Cover",
      title: "Arrange health insurance and checks",
      who: ["you"],
      description: "You pay your own health costs in Australia, so you need adequate health insurance for your whole stay.",
      points: [
        "Show cover for at least the first 12 months, such as [[ovhc|Overseas Visitors Health Cover]]",
        "Relatives who aren't parents need police certificates",
        "Do health examinations when Home Affairs asks",
      ],
      youHold: "A health insurance policy and any police certificates",
      icon: ICON.shieldCheck,
    },
    {
      id: "apply",
      short: "Apply",
      title: "Lodge with the student's application",
      who: ["you", "government"],
      description: "Apply online, at the same time as the student if they're applying too. Attach Form 157N and pay the charge.",
      points: [
        "A$2,500, plus A$500 for each child included",
        "In Australia only if you already hold a Student Guardian visa and the student keeps studying",
        "Don't book travel until the visa is granted",
      ],
      youHold: "A grant letter with your visa dates and conditions",
      cost: "A$2,500 plus A$500 per child, paid by you",
      icon: ICON.paperAirplane,
    },
    {
      id: "care",
      short: "Care",
      title: "Live with the student and keep your conditions",
      who: ["you", "student"],
      description: "Arrive after the student or with them ([[c8502|condition 8502]]), then live with them for the whole stay.",
      points: [
        "No work, paid or unpaid, that would normally be paid ([[c8101|condition 8101]])",
        "Study only [[elicos|ELICOS]] under 20 hours a week, or other study for up to three months",
        "Leave Australia without the student only with Home Affairs approval ([[c8538|condition 8538]])",
        "Keep health insurance for your whole stay",
      ],
      youHold: "A lawful stay caring for the student",
      icon: ICON.heart,
    },
    {
      id: "renew",
      short: "Renew",
      title: "When your visa ends",
      who: ["you"],
      description: "Your visa usually ends when the student's visa ends or they turn 18. If they keep studying, apply for a further Student Guardian visa before then.",
      points: [
        "Current holders can apply again in Australia",
        "For a student aged 18 or over, you need exceptional circumstances",
        "The visa doesn't lead to permanent residence",
      ],
      youHold: "A further Student Guardian visa, or a planned departure",
      icon: ICON.arrowPath,
    },
  ],
  quiz: [
    {
      id: "relationship",
      topic: "Your relationship",
      question: "Who are you to the student?",
      options: [
        { value: "parent", label: "Their parent or legal custodian", status: "ok", note: "You can be the guardian. [[form157n|Form 157N]], signed by a parent or custodian, must still be attached." },
        {
          value: "relative",
          label: "A relative aged 21 or over",
          hint: "For example a grandparent, brother, sister, aunt or uncle",
          status: "ok",
          note: "The student's parent or custodian can nominate you in writing. As a relative, you must also meet the character requirement, with police certificates where required.",
        },
        { value: "other", label: "Someone else, such as a family friend", status: "stop", note: "Only a parent, a custodian or a relative aged 21 or over can be the guardian." },
      ],
    },
    {
      id: "age",
      topic: "Student's age",
      question: "How old is the student?",
      options: [
        { value: "under", label: "Under 18", status: "ok", note: "The visa is designed for students under 18." },
        {
          value: "exceptional",
          label: "18 or over, with exceptional circumstances such as a serious medical condition",
          status: "todo",
          note: "Possible, but you need evidence of the exceptional circumstances that mean the student still needs your care.",
        },
        { value: "adult", label: "18 or over, with no special need for care", status: "stop", note: "The visa is for students under 18, or older students in exceptional circumstances." },
      ],
    },
    {
      id: "children",
      topic: "Children under 6",
      question: "Is anyone in your family unit under 6?",
      help: "This includes a child who would stay at home.",
      options: [
        { value: "no", label: "No", status: "ok", note: "Nothing to explain here." },
        {
          value: "yes",
          label: "Yes",
          status: "stop",
          note: "The visa is refused unless there are [[compelling|compelling and compassionate reasons]], or the grant would significantly benefit relations with another government.",
          link: { label: "Talk it through with us", href: "/bookings" },
        },
      ],
    },
    {
      id: "funds",
      topic: "Funds",
      question: "Can you show money for 12 months for you and the student?",
      options: [
        { value: "yes", label: "Yes: living costs, course fees, travel and any school costs", status: "ok", note: "Keep statements that show where the money came from." },
        { value: "partner", label: "My partner at home earns at least A$102,500 a year", status: "ok", note: "Use official income documents from the 12 months before you apply." },
        {
          value: "unsure",
          label: "I'm not sure",
          status: "todo",
          note: "Add A$29,710 for you, A$29,710 for the student, the student's course fees due while you're here, travel and any school costs.",
        },
        { value: "no", label: "No", status: "stop", note: "You can't work on this visa, so you must be able to support yourself and the student from the start." },
      ],
    },
    {
      id: "ties",
      topic: "Ties at home",
      question: "Can you show you'll stay only temporarily?",
      help: "Home Affairs looks at your ties at home, time you've already spent in Australia and your immigration history.",
      options: [
        { value: "strong", label: "Yes, I have family, property or work to return to", status: "ok", note: "Write a statement and back it with evidence." },
        {
          value: "long",
          label: "I've already spent long periods in Australia",
          status: "todo",
          note: "Long earlier stays or few ties at home are common refusal reasons. Explain your situation carefully, with evidence.",
        },
      ],
    },
    {
      id: "location",
      topic: "Where you apply",
      question: "Where will you apply from?",
      options: [
        { value: "outside", label: "Outside Australia", status: "ok", note: "You must also be outside Australia when the visa is granted." },
        {
          value: "holder",
          label: "In Australia, as a current Student Guardian visa holder",
          status: "ok",
          note: "You can apply again in Australia if the student continues to study.",
        },
        {
          value: "other",
          label: "In Australia on a visitor or other visa",
          status: "todo",
          note: "You'd need to apply from outside Australia. Lodging in Australia on a visitor or other listed visa makes the application invalid.",
        },
      ],
    },
    {
      id: "work",
      topic: "Work",
      question: "Will you need to work while you're here?",
      options: [
        { value: "no", label: "No, I can support us without working", status: "ok", note: "That's what the visa requires." },
        { value: "yes", label: "Yes, I'd need to work", status: "stop", note: "Condition 8101 bans work in Australia, including unpaid work that would normally be paid. Working can lead to the cancellation of your visa." },
      ],
    },
  ],
  myths: [
    {
      myth: "I can work part time while I look after the student.",
      fact: "No. Condition 8101 bans work in Australia, including unpaid work that would normally be paid. Working can lead to the cancellation of your visa.",
    },
    {
      myth: "My younger children can come with me.",
      fact: "Only children under 6 can be included, and only in limited cases, such as compelling and compassionate reasons. Children aged 6 or over need their own Student visa. A child under 6 who stays at home can even lead to a refusal.",
    },
    {
      myth: "I can go home for a few weeks while the student stays here.",
      fact: "Only if Home Affairs first approves other welfare arrangements, for a compassionate or compelling reason. Leaving without approval can lead to the cancellation of your visa and the student's.",
    },
    {
      myth: "Any family friend can be the guardian.",
      fact: "No. The guardian must be a parent, a custodian, or a relative aged 21 or over nominated in writing by a parent or custodian.",
    },
    {
      myth: "This visa can lead to permanent residence.",
      fact: "It can't. It's a temporary visa for caring for a student, and it usually ends with the student's visa or their 18th birthday.",
    },
    {
      myth: "I can apply in Australia on my visitor visa.",
      fact: "Not since 2 October 2026. Only current Student Guardian visa holders can apply in Australia, when the student keeps studying. Everyone else applies from outside Australia.",
    },
    {
      myth: "I can take a full-time course while I'm here.",
      fact: "You can take an English course (ELICOS) of under 20 hours a week. Any other study or training is limited to three months in total.",
    },
  ],
  roles: [
    {
      id: "guardian",
      label: "I'm the guardian",
      intro: "Your part is a complete application, then living with the student and keeping to your conditions.",
      groups: [
        {
          title: "Before you apply",
          items: [
            "Gather funds: A$29,710 for you and A$29,710 for the student, plus fees, travel and school costs",
            "Write a statement about your ties at home, with evidence",
            "Buy health insurance for at least the first 12 months",
            "Relatives: police certificates for each country where you've spent 12 months or more in the last 10 years since turning 16",
          ],
        },
        {
          title: "When you apply",
          items: [
            "Lodge with the student's application and attach [[form157n|Form 157N]]",
            "Pay A$2,500, plus A$500 for each child under 6 included",
            "Give health examinations and biometrics when asked",
          ],
        },
        {
          title: "Once you're here",
          items: [
            "Arrive after the student, or with them",
            "Live with the student, and don't work",
            "Keep health insurance and tell Home Affairs about changes",
            "Apply for a further Student Guardian visa before yours ends if the student keeps studying",
          ],
        },
      ],
    },
    {
      id: "parent",
      label: "I'm the parent",
      tone: "pink",
      intro: "Your part is choosing the guardian, nominating them in writing and supporting the arrangements.",
      groups: [
        {
          title: "Choose the guardian",
          items: [
            "Yourself, a custodian, or a relative aged 21 or over",
            "Relatives include grandparents, brothers and sisters, aunts, uncles and step-relatives",
            "If you're the guardian, plan care for any children who stay at home",
          ],
        },
        {
          title: "Nominate",
          items: [
            "Sign [[form157n|Form 157N]] for the guardian's application",
            "Provide birth certificates linking the student, the guardian and the parents",
            "If the student is applying now, lodge both applications together",
          ],
        },
        {
          title: "While they're in Australia",
          items: [
            "Keep the student's enrolment and visa in order: if the student's visa is cancelled, the guardian's can be too",
            "If the guardian must travel without the student, nominate another guardian on a new Form 157N",
            "The school must endorse those alternative welfare arrangements",
          ],
        },
      ],
      link: { label: "Read about the Student visa", href: "/visas/study/student-visa-500" },
    },
  ],
  glossary: [
    {
      id: "form157n",
      term: "Form 157N",
      full: "Nomination of a student guardian",
      definition: "The form a student's parent or custodian signs to nominate the guardian. It must be attached to the guardian's application, or the application is invalid.",
    },
    {
      id: "gte",
      term: "Genuine temporary entrant",
      definition: "The test that you intend to stay only temporarily and only to do what the visa allows. Home Affairs looks at your ties at home, time already spent in Australia and your immigration history.",
    },
    {
      id: "family-unit",
      term: "Family unit",
      definition: "The people counted as your family, such as your partner and dependent children. For this visa, any member under 6, even one staying at home, can lead to a refusal unless a narrow exception applies.",
    },
    {
      id: "compelling",
      term: "Compelling and compassionate reasons",
      definition: "Serious circumstances that can justify granting the visa even though a member of your family unit is under 6. You need evidence of them.",
    },
    {
      id: "ovhc",
      term: "Overseas Visitors Health Cover",
      definition: "Health insurance for visitors to Australia. Guardians pay their own health costs, so they need adequate cover like this for their whole stay.",
    },
    {
      id: "elicos",
      term: "ELICOS",
      definition: "An English language course for international students. As a guardian you can take one if it runs for under 20 hours a week.",
    },
    {
      id: "c8101",
      term: "Condition 8101",
      definition: "No work in Australia, paid or unpaid, if the work would normally be paid.",
    },
    {
      id: "c8502",
      term: "Condition 8502",
      definition: "You must not enter Australia before the student named in your visa has entered Australia.",
    },
    {
      id: "c8537",
      term: "Condition 8537",
      definition: "You must live in Australia while the student is here, stay with them, and provide their accommodation, support and general welfare.",
    },
    {
      id: "c8538",
      term: "Condition 8538",
      definition: "You must not leave Australia without the student unless Home Affairs has approved other welfare arrangements for compassionate or compelling reasons.",
    },
    {
      id: "c8201",
      term: "Condition 8201",
      definition: "You can't study or train for more than three months in total, except an ELICOS course of under 20 hours a week.",
    },
    {
      id: "stac",
      term: "Subsequent temporary application charge",
      definition: "An extra A$700 charge for each applicant who lodges in Australia and also applied for their current visa in Australia. It isn't charged on your first temporary visa application made in Australia.",
    },
    {
      id: "bva",
      term: "Bridging visa A",
      definition: "The visa you receive when you apply in Australia as a current Student Guardian visa holder. It doesn't allow travel.",
    },
  ],
  verifiedExtras: [
    {
      fact: "The subsequent temporary application charge is payable by each person in the application, based on their own visa history. It is not charged when the applicant is outside Australia, or is making their first substantive temporary visa application in Australia.",
      source: HA_STAC,
    },
  ],
  finder: studyFinder,
  fees: {
    variants: [
      {
        id: "guardian",
        label: "Student Guardian visa",
        primary: [{ label: "Base application charge", amount: 2500 }],
        child: [{ label: "Child under 6", amount: 500 }],
      },
    ],
    maxAdults: 0,
    maxChildren: 3,
    addOns: [
      {
        id: "stac",
        label: "Subsequent temporary application charge",
        hint: "For you, if you apply in Australia and also applied for your current visa in Australia",
        amount: 700,
        per: "application",
      },
    ],
    notIncluded: "Not included: health insurance, health examinations, police certificates and translations.",
    notes: [
      "Only children under 6 can be included, and only in limited cases, such as compelling and compassionate reasons. Your partner can't be included.",
      "A child included and applying in Australia may also pay the A$700 charge, depending on their own visa history.",
      "No charge where the student you care for is affected by an education provider default.",
      "A lower charge applies to eligible Pacific Island and Timor-Leste citizens.",
    ],
    confirmUrl: "https://immi.homeaffairs.gov.au/visas/visa-pricing-estimator",
    confirmLabel: "Home Affairs Visa Pricing Estimator",
  },
};
