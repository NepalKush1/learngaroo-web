import type { VisaExplainer } from "../types";
import { ICON } from "../icons";

// Interactive explainer for the Student visa financial capacity guide. Every
// figure matches data/visas/study.ts (checked against Home Affairs and LIN
// 19/198 on 12 October 2026), including the Home Affairs travel guide
// amounts and course-fee examples.

export const studentVisaFinancialCapacityExplainer: VisaExplainer = {
  slug: "student-visa-financial-capacity",
  factsAsAt: "12 October 2026",
  oneLiner:
    "For a Student visa you may need to show money for travel, 12 months of course fees and 12 months of living costs, or a qualifying parent or partner income, and prove the money is genuinely available to you.",
  bigIdeas: [
    { title: "The amounts are set", body: "Living costs are A$29,710 a year for you, A$10,394 for a partner and A$4,449 for each child.", icon: ICON.banknotes },
    { title: "Or show family income", body: "Parents or a partner earning at least A$87,856 (A$102,500 with family members) can replace savings.", icon: ICON.currencyDollar },
    { title: "Access matters, not just amount", body: "Statements must show how the money built up. A single-day balance certificate isn't enough.", icon: ICON.documentMagnifyingGlass },
  ],
  heroCard: [
    { label: "Your living costs", value: "A$29,710 for 12 months", icon: ICON.banknotes },
    { label: "Partner and children", value: "A$10,394 a year, and A$4,449 per child", icon: ICON.users },
    { label: "School costs", value: "A$13,502 a year per school-age child", icon: ICON.academicCap },
    { label: "Course fees", value: "First 12 months, less what you've paid", icon: ICON.receiptRefund },
    { label: "Income option", value: "A$87,856, or A$102,500 with family", icon: ICON.currencyDollar },
    { label: "Legal basis", value: "Clause 500.214 and LIN 19/198", icon: ICON.scale },
  ],
  checkedAgainst: "Home Affairs, the Migration Regulations and LIN 19/198",
  actors: [
    {
      id: "funder",
      name: "Whoever provides the money",
      short: "Funder",
      icon: ICON.users,
      tone: "teal",
      role: "Your parents, partner, sponsor, bank or scholarship body: the source of the funds.",
      does: [
        "Provides savings, a loan, a scholarship or qualifying income",
        "Gives identity documents and proof of your relationship",
        "Shows where the money came from",
        "For a business, shows the business is operating",
      ],
    },
    {
      id: "provider",
      name: "Your education provider",
      short: "Provider",
      icon: ICON.academicCap,
      tone: "orange",
      role: "Sets your course fees and records what you've paid.",
      does: [
        "Issues your [[coe|CoE]], which can show fees paid",
        "Gives receipts for fees you've already paid",
        "Should be told about any conditions on an education loan",
      ],
    },
    {
      id: "government",
      name: "Department of Home Affairs",
      short: "Home Affairs",
      icon: ICON.buildingLibrary,
      tone: "blue",
      role: "Checks that you have enough money and genuine access to it.",
      does: [
        "Uses the minimum amounts in [[lin19198|LIN 19/198]]",
        "Says through the [[dct|Document Checklist Tool]] whether you must attach evidence",
        "Can ask for evidence while it processes your application",
        "Must be satisfied when it decides",
      ],
    },
    {
      id: "you",
      name: "You (the applicant)",
      short: "You",
      icon: ICON.user,
      tone: "green",
      role: "Work out the total, gather the evidence and declare it truthfully.",
      does: [
        "Calculate fees, living, school and travel costs",
        "Choose savings, a loan, a scholarship or the income option",
        "Prove [[genuine-access|genuine access]] to the money",
        "Keep the funds in place until the decision",
      ],
    },
  ],
  flows: [
    {
      from: "funder",
      to: "you",
      label: "Provides the funds",
      detail: "Your parents, partner, sponsor, bank or a scholarship body provides the money, with proof of who they are and how the money built up.",
    },
    {
      from: "provider",
      to: "you",
      label: "Receipts + CoE",
      detail: "Receipts or your [[coe|CoE]] show course fees you've already paid, which you can deduct from the first 12 months.",
    },
    {
      from: "you",
      to: "government",
      label: "You declare + attach",
      detail: "You enter the amounts in the form and attach evidence if the [[dct|Document Checklist Tool]] requires it.",
    },
    {
      from: "government",
      to: "you",
      label: "Checks + decides",
      detail: "Home Affairs checks the amount and your genuine access to it. It can ask for evidence even if the checklist didn't require it.",
    },
  ],
  journeyTitle: "Work out your number, then prove it",
  journeyHighlight: "prove it",
  stages: [
    {
      id: "fees",
      short: "Fees",
      title: "Work out your course fees",
      who: ["you", "provider"],
      description: "Use the first 12 months of fees, or the total if your course is 12 months or less. Then deduct what you've already paid.",
      points: [
        "Example: A$50,000 over 3 years gives A$16,666 for 12 months",
        "Example: A$20,000 over 18 months gives A$13,333",
        "Keep receipts or your [[coe|CoE]] as proof of payments",
      ],
      youHold: "A course-fee figure for the first 12 months, net of payments",
      icon: ICON.calculator,
    },
    {
      id: "living",
      short: "Living",
      title: "Add living costs for everyone",
      who: ["you"],
      description: "Add A$29,710 for you, A$10,394 for a partner and A$4,449 for each child.",
      points: [
        "Staying under 12 months? It's [[pro-rata|pro rata]]: divide by 365, then multiply by the days of your stay",
        "These figures have applied since 10 May 2024",
        "They're minimums: real living costs are often higher",
      ],
      youHold: "A living-cost total for your family",
      icon: ICON.home,
    },
    {
      id: "extras",
      short: "Extras",
      title: "Add school costs and travel",
      who: ["you"],
      description: "Add at least A$13,502 a year for each school-age child, and travel for each person.",
      points: [
        "Travel guide: A$2,000 from most countries",
        "A$2,500 from East or Southern Africa, A$3,000 from West Africa",
        "A$1,000 if you apply in Australia (A$1,500 if returning to Africa)",
      ],
      youHold: "The total minimum amount to show",
      icon: ICON.paperAirplane,
    },
    {
      id: "form",
      short: "Form",
      title: "Choose how to show it",
      who: ["you", "funder"],
      description: "Match your total to an accepted form of funds, or use the income option instead.",
      points: [
        "A bank deposit, a bank loan, a government loan, or a scholarship or financial support",
        "Property, business assets or cash at home don't count unless converted",
        "Income option: official government documents only, not bank statements or employer letters",
      ],
      youHold: "Evidence in an accepted form, or qualifying income documents",
      icon: ICON.banknotes,
    },
    {
      id: "access",
      short: "Access",
      title: "Prove genuine access",
      who: ["you", "funder"],
      description: "Show the money is really available to you, not just that it exists.",
      points: [
        "Transaction statements showing how the balance built up",
        "The funder's identity and your relationship to them",
        "Loan terms and, ideally, proof the loan has been paid out",
      ],
      youHold: "A file that shows both the amount and your access to it",
      icon: ICON.documentMagnifyingGlass,
    },
    {
      id: "lodge",
      short: "Lodge",
      title: "Declare, attach and keep the funds",
      who: ["you", "government"],
      description: "Enter the figures in the form, and attach evidence if the checklist requires it or Home Affairs asks.",
      points: [
        "The amounts you declare must be true, even if no evidence is attached",
        "Keep the funds in place until the decision",
        "Home Affairs may check again before it decides",
      ],
      youHold: "A lodged application with consistent amounts and evidence",
      icon: ICON.documentCheck,
    },
  ],
  check: {
    title: "Is your money evidence ready?",
    highlight: "money evidence",
    ok: {
      title: "Your funds evidence looks ready",
      body: "Nothing in your answers raises an obvious concern. Check the exact figures and keep the funds in place until the decision.",
    },
    todo: {
      title: "A few things to sort first",
      body: "None of these is a deal-breaker on its own, but each needs fixing before you lodge.",
    },
    stop: {
      title: "Some answers need serious attention",
      body: "At least one answer means your funds evidence may not be accepted yet. The notes below explain why.",
    },
    disclaimer: "A general self-check, not advice or a prediction. Home Affairs decides on the evidence and your full circumstances.",
  },
  quiz: [
    {
      id: "total",
      topic: "Total",
      question: "Do you have at least the total you need?",
      help: "Use the funds calculator on this page if you haven't worked it out.",
      options: [
        { value: "yes", label: "Yes, I have at least the total", status: "ok", note: "Now make sure the evidence shows genuine access." },
        { value: "unsure", label: "I haven't worked it out yet", status: "todo", note: "Use the funds calculator on this page.", link: { label: "Open the funds calculator", href: "#funds" } },
        {
          value: "short",
          label: "No, I'm short",
          status: "stop",
          note: "You need the full amount, or a qualifying income. Money from working in Australia can't be counted.",
        },
      ],
    },
    {
      id: "source",
      topic: "Form of funds",
      question: "Where is the money coming from?",
      options: [
        { value: "savings", label: "Savings in a bank account", status: "ok", note: "Use transaction statements that show how the balance built up." },
        { value: "loan", label: "A loan from a bank or the government", status: "ok", note: "Show the loan terms and, ideally, evidence the loan has been paid out." },
        { value: "scholarship", label: "A scholarship or sponsor", status: "ok", note: "The letter should state what it covers and for how long." },
        {
          value: "income",
          label: "My parents' or partner's income",
          status: "ok",
          note: "Official tax documents from the last 12 months showing at least A$87,856 (A$102,500 if family members apply with you). Both parents' incomes can be combined.",
        },
        {
          value: "assets",
          label: "Property, business assets or cash at home",
          status: "stop",
          note: "These don't count unless converted into an accepted form, such as a deposit with a bank.",
        },
      ],
    },
    {
      id: "history",
      topic: "Funds history",
      question: "Can you show how the money built up?",
      options: [
        { value: "yes", label: "Yes: statements showing salary, savings or documented transfers", status: "ok", note: "That's what genuine access looks like." },
        {
          value: "deposit",
          label: "A large deposit arrived recently",
          status: "todo",
          note: "Document where it came from. A large deposit shortly before lodging, with no explanation, is a common refusal reason.",
        },
        {
          value: "certificate",
          label: "I only have a balance certificate",
          status: "todo",
          note: "A single-day balance certificate doesn't show how the money built up. Get transaction statements.",
        },
      ],
    },
    {
      id: "income-docs",
      topic: "Income evidence",
      question: "If you rely on income, what documents do you have?",
      options: [
        { value: "na", label: "I'm not using the income option", status: "ok", note: "Nothing to check here." },
        { value: "tax", label: "Official tax assessments from the last 12 months", status: "ok", note: "That's the kind of evidence required." },
        {
          value: "other",
          label: "Bank statements or an employer letter",
          status: "todo",
          note: "These aren't accepted for the income option. You need official government documents, such as tax assessments.",
        },
      ],
    },
    {
      id: "family",
      topic: "Family costs",
      question: "Is anyone coming with you?",
      options: [
        { value: "alone", label: "No, just me", status: "ok", note: "Only your own costs to count." },
        { value: "counted", label: "Yes, and I've added their living, school and travel costs", status: "ok", note: "Good: every family member needs their own costs counted." },
        {
          value: "missed",
          label: "Yes, but I've only counted myself",
          status: "todo",
          note: "Add A$10,394 for a partner, A$4,449 for each child, A$13,502 a year for each school-age child, and travel for each person.",
        },
      ],
    },
    {
      id: "checklist",
      topic: "Checklist",
      question: "What does the Document Checklist Tool say for your passport and provider?",
      options: [
        { value: "required", label: "I must attach funds evidence", status: "ok", note: "Attach it when you lodge. If it's required and missing, Home Affairs may refuse without asking for it." },
        { value: "optional", label: "I don't need to attach it", status: "ok", note: "Have it ready anyway: Home Affairs can still ask for it while processing." },
        { value: "unchecked", label: "I haven't checked yet", status: "todo", note: "Check the tool for your passport country and education provider before you lodge." },
      ],
    },
    {
      id: "keep",
      topic: "After you lodge",
      question: "Will the money stay in place until the decision?",
      options: [
        { value: "yes", label: "Yes", status: "ok", note: "Home Affairs must be satisfied at the time it decides." },
        {
          value: "no",
          label: "I may need to use some of it",
          status: "todo",
          note: "Funds that disappear after lodging are a refusal risk. Home Affairs may check again before it decides.",
        },
      ],
    },
  ],
  myths: [
    {
      myth: "A bank balance certificate proves my funds.",
      fact: "A single-day certificate doesn't show how the money built up. Use transaction statements that show salary credits, regular savings or documented transfers.",
    },
    {
      myth: "My parents' bank statements prove their income.",
      fact: "For the income option, only official government documents such as tax assessments count. Bank statements and employer letters aren't accepted.",
    },
    {
      myth: "I can count on part-time work to cover my living costs.",
      fact: "No. Home Affairs says you shouldn't rely on work to support yourself or your family. The 48 hours a fortnight work limit isn't an income source for the calculation.",
    },
    {
      myth: "Property or a family business counts as funds.",
      fact: "Only four forms count: a bank deposit, a bank loan, a government loan, or a scholarship or financial support. Other assets count only once converted into one of these.",
    },
    {
      myth: "If the checklist doesn't ask for evidence, I'll never need it.",
      fact: "Home Affairs can still ask for funds evidence while it processes your application, and the amounts you declare in the form must be true.",
    },
    {
      myth: "Once I've lodged, I can spend the money.",
      fact: "The requirement must be met at the time of decision. Keep the funds in place: Home Affairs may check again.",
    },
    {
      myth: "The figures go up automatically every year.",
      fact: "They change only when the instrument is amended. The current figures have applied to applications made on or after 10 May 2024.",
    },
    {
      myth: "The amounts cover what living in Australia really costs.",
      fact: "They're minimums. Home Affairs describes them as lower than many students' real living costs.",
    },
  ],
  glossary: [
    {
      id: "lin19198",
      term: "LIN 19/198",
      definition: "The legislative instrument that sets the financial capacity figures and the accepted forms of evidence for Student and Student Guardian visas.",
    },
    {
      id: "dct",
      term: "Document Checklist Tool",
      definition: "The Home Affairs tool that tells you, based on your passport country and education provider, whether you must attach funds evidence when you lodge.",
    },
    {
      id: "genuine-access",
      term: "Genuine access",
      definition: "Proof that the money is really available to you: where it came from, how it built up, who provides it and on what terms.",
    },
    {
      id: "pro-rata",
      term: "Pro rata",
      definition: "In proportion. For a stay under 12 months, divide the annual amount by 365 and multiply by the number of days you intend to stay.",
    },
    {
      id: "coe",
      term: "CoE",
      full: "Confirmation of Enrolment",
      definition: "The document your provider issues when you enrol. It can show fees you've already paid, which you deduct from the course-fee figure.",
    },
    {
      id: "income-option",
      term: "Income option",
      definition: "Using family income instead of savings. Official documents must show a parent, spouse or de facto partner earned at least A$87,856 in the 12 months before you applied. It's A$102,500 if family members apply with you.",
    },
    {
      id: "aases",
      term: "AASES",
      full: "Acceptance Advice of Secondary Exchange Student",
      definition: "The form secondary exchange students use. A completed AASES meets the financial capacity requirement.",
    },
    {
      id: "education-loan",
      term: "Education loan",
      definition: "A loan for study costs. Show the loan terms and, ideally, evidence it has been paid out. A loan that is approved but not paid out is a refusal risk.",
    },
  ],
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
      "Figures from LIN 19/198. For stays under 12 months, Home Affairs divides the annual amount by 365 and multiplies by the days of your stay. This calculator works in months, so check the exact figure. Travel amounts are a guide for each person. Enter your own course fees. Real living costs are often higher than these minimums.",
    alternative:
      "official government documents, such as tax assessments, showing your parents or partner earned at least A$87,856 in the 12 months before you applied (A$102,500 if family members apply with you).",
  },
};
