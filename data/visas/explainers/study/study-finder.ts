import type { FinderConfig } from "../types";

// "Which study visa fits you?" Shared by the Student visa (500) and Student
// Guardian visa (590) explainers. Built from data/visas/study.ts (checked
// 12 October 2026), including the 2 October 2026 application rules. It uses
// no glossary tokens because each page has its own glossary.

export const studyFinder: FinderConfig = {
  id: "study-finder",
  navLabel: "Which visa?",
  eyebrow: "Visa finder",
  title: "Which study visa fits you?",
  highlight: "fits you",
  subtitle: "Tap one answer at a time to find your likely starting point. Nothing is saved or sent.",
  start: "goal",
  questions: [
    {
      id: "goal",
      question: "What do you want to do in Australia?",
      options: [
        { label: "Study a course", hint: "From school to a PhD", next: "where" },
        { label: "Bring my partner or children while I study", next: "family" },
        { label: "Live with a student under 18 and look after them", hint: "As their parent, custodian or a relative", next: "guardian" },
        { label: "Visit a student for a short time", next: "visitor" },
        { label: "Stay on after I finish my course", next: "after" },
      ],
    },
    {
      id: "where",
      question: "Where are you now?",
      help: "Since 2 October 2026 most people must apply from outside Australia, and be outside Australia when the visa is granted.",
      options: [
        { label: "Outside Australia", next: "apply-outside" },
        { label: "In Australia on a Student visa, as the main student", next: "exemption" },
        { label: "In Australia on another visa", hint: "Visitor, Temporary Graduate (485), Working Holiday, 482 or similar", next: "must-leave" },
        { label: "In Australia on a Student visa, as a partner or child", next: "must-leave" },
        { label: "In Australia without a visa", next: "no-visa" },
      ],
    },
    {
      id: "exemption",
      question: "Does one of these exemptions fit you?",
      help: "A student visa holder can apply in Australia only under one of six exemptions.",
      options: [
        { label: "I need up to 12 more months to finish my main course with the same provider", hint: "At the same or a higher course level", next: "apply-inside" },
        {
          label: "I've completed my main course and am moving to a higher-level course",
          hint: "After a higher education course, the next one must also be higher education",
          next: "apply-inside",
        },
        { label: "I'm starting a PhD, or studying at primary or secondary school", hint: "A master's by research doesn't count", next: "apply-inside" },
        { label: "I'm sponsored by DFAT or Defence, or my provider has defaulted", hint: "Defaulted: closed or stopped delivering your course", next: "apply-inside" },
        { label: "None of these", next: "must-leave" },
      ],
    },
    {
      id: "family",
      question: "Which of these describes you, the student?",
      help: "Since 2 October 2026 partners and children can be included only under an exemption, and only in the same application as you.",
      options: [
        { label: "I'm a PhD student", next: "family-yes" },
        { label: "I'm sponsored by DFAT or Defence, or hold a fully funded foreign government scholarship", next: "family-yes" },
        { label: "I'm an eligible Pacific Island or ASEAN national", next: "family-yes" },
        { label: "My family already holds my student visa, and I fit an onshore exemption", next: "family-yes" },
        { label: "None of these", next: "family-no" },
      ],
    },
    {
      id: "guardian",
      question: "Who are you to the student?",
      options: [
        { label: "Their parent or legal custodian", next: "guardian-yes" },
        { label: "A relative aged 21 or over", hint: "For example a grandparent, brother, sister, aunt or uncle", next: "guardian-yes" },
        { label: "Someone else, such as a family friend", next: "guardian-no" },
      ],
    },
  ],
  outcomes: [
    {
      id: "apply-outside",
      title: "Student visa (subclass 500), applied for outside Australia",
      body: "This is the standard route. You lodge online while outside Australia, and you must also be outside Australia when the visa is granted. First you need a Confirmation of Enrolment (CoE) for a full-time registered course.",
      watch: [
        "Your health cover must start on the day you arrive, not the day your course starts",
        "Under 18? You need consent from each parent and approved welfare arrangements",
        "Check the Document Checklist Tool to see whether you must attach English and funds evidence",
      ],
      href: "/visas/study/student-visa-500",
    },
    {
      id: "apply-inside",
      title: "Student visa (subclass 500), applied for in Australia",
      body: "You may be able to lodge in Australia under that exemption. You would then usually hold a Bridging visa A, which starts when your current visa ends and doesn't let you travel.",
      watch: [
        "Check you meet the exemption exactly: an invalid application can't be reviewed by the Tribunal",
        "Family members can be included only if they already hold your current student visa, or another exemption applies",
        "Keep a valid CoE on file until the decision",
      ],
      href: "/visas/study/student-visa-500",
    },
    {
      id: "must-leave",
      title: "Apply for a Student visa from outside Australia",
      body: "You can't lodge a Student visa in Australia on your current visa. You would need to leave, apply from outside Australia and stay outside until the visa is granted.",
      watch: [
        "Visitor, 485, Working Holiday and 482 holders have no exemptions",
        "A partner or child on a student visa can't apply in Australia as the main student",
        "Lodging in Australia anyway makes the application invalid",
      ],
      href: "/visas/study/student-visa-500",
    },
    {
      id: "no-visa",
      title: "Get advice before you apply",
      body: "Without a substantive visa you can apply in Australia only in narrow cases, such as within 28 days of holding a special purpose visa. The section 48 bar can also limit what you can apply for.",
      watch: ["Don't lodge anything until you've had advice", "An invalid application can leave you without a visa"],
      href: "/visas/appeals-and-review/section-48-bar",
      tone: "stop",
    },
    {
      id: "family-yes",
      title: "Include them in your Student visa application",
      body: "Your partner and unmarried children under 18 can apply with you under that exemption. They must lodge at the same time and from the same place as you, and each pays their own charge.",
      watch: [
        "They can't be added later as subsequent entrants",
        "Each needs Overseas Student Health Cover and must meet the health and character requirements",
        "A child who turns 18 before the decision must apply for their own visa",
      ],
      href: "/visas/study/student-visa-500",
    },
    {
      id: "family-no",
      title: "Your family can't be included",
      body: "Since 2 October 2026 partners and children can be included only under one of the exemptions. They can't join you later as subsequent entrants either.",
      watch: ["Applications lodged before 2 October 2026 are assessed under the rules in force when they were lodged"],
      tone: "stop",
    },
    {
      id: "guardian-yes",
      title: "Student Guardian visa (subclass 590)",
      body: "This visa lets you live in Australia with the student and care for them. You can't work, so you must show you can support yourself and the student.",
      watch: [
        "The student must be under 18, or older and in need of your care because of exceptional circumstances",
        "If anyone in your family unit is under 6, the visa is refused, apart from narrow exceptions such as compelling and compassionate reasons",
        "Form 157N, signed by the student's parent or custodian, must be attached",
      ],
      href: "/visas/study/student-guardian-visa-590",
    },
    {
      id: "guardian-no",
      title: "A Student Guardian visa isn't open to you",
      body: "The guardian must be the student's parent, a person with custody of them, or a relative aged 21 or over. A relative must be nominated in writing by a parent or custodian. The student's education provider may be able to approve other welfare arrangements instead.",
      tone: "stop",
    },
    {
      id: "visitor",
      title: "Visitor visa (subclass 600)",
      body: "A shorter alternative for a parent or relative who wants to visit a student rather than live with them full time.",
      watch: ["To live with a student under 18 and care for them, look at the Student Guardian visa instead"],
      href: "/visas/other-visas/visitor-visa-600",
    },
    {
      id: "after",
      title: "Plan your next visa after study",
      body: "Most graduates who want to stay apply for a Temporary Graduate visa (subclass 485) within six months of completing their course. Points-tested or employer-sponsored visas can follow.",
      watch: [
        "Most 485 applicants must be 35 or under",
        "Your Student visa can't be extended, and another one in Australia is possible only under an exemption",
      ],
      href: "/visas/study/study-to-permanent-residence",
    },
  ],
  footnote:
    "General information, not advice. Built from the rules in force on 12 October 2026, including the 2 October 2026 changes. Your full circumstances decide which visa fits.",
};
