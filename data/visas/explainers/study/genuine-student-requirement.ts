import type { VisaExplainer } from "../types";
import { ICON } from "../icons";

// Interactive explainer for the Genuine Student requirement guide. Every
// figure matches data/visas/study.ts (checked against Home Affairs,
// Direction No. 106 and the Migration Regulations on 12 October 2026).

export const genuineStudentRequirementExplainer: VisaExplainer = {
  slug: "genuine-student-requirement",
  factsAsAt: "12 October 2026",
  oneLiner:
    "Every Student visa applicant must show they're a genuine student: you answer four short questions, and Home Affairs weighs your circumstances, history and course choice under Direction No. 106.",
  bigIdeas: [
    { title: "Four questions, 150 words each", body: "In the online form you explain your situation, your course choice and how it helps you, in English.", icon: ICON.pencilSquare },
    { title: "Evidence beats words", body: "Statements backed by documents carry more weight than general claims about studying in Australia.", icon: ICON.documentCheck },
    { title: "Your whole story counts", body: "Home Affairs weighs your circumstances, immigration history and study record together, not as a checklist.", icon: ICON.magnifyingGlass },
  ],
  heroCard: [
    { label: "Applies to", value: "Student visa applications from 23 March 2024", icon: ICON.academicCap },
    { label: "Format", value: "Four questions, 150 words each, in English", icon: ICON.pencilSquare },
    { label: "Extra question", value: "A fifth for some, such as past student visa holders", icon: ICON.listBullet },
    { label: "Legal basis", value: "Clause 500.212 and Direction No. 106", icon: ICON.scale },
    { label: "Future PR plans", value: "Not held against you", icon: ICON.home },
    { label: "Cost", value: "No fee beyond the A$2,500 visa charge", icon: ICON.currencyDollar },
  ],
  checkedAgainst: "Home Affairs, the Migration Regulations and Ministerial Direction No. 106",
  actors: [
    {
      id: "government",
      name: "Department of Home Affairs",
      short: "Home Affairs",
      icon: ICON.buildingLibrary,
      tone: "blue",
      role: "Weighs your whole situation under [[d106|Direction No. 106]] and decides the visa.",
      does: [
        "Assesses your circumstances, immigration history and course choice",
        "Looks more closely at listed [[triggers|triggers]], such as an unrelated course",
        "Puts adverse information to you before relying on it",
        "Grants or refuses the visa under [[cl500212|clause 500.212]]",
      ],
    },
    {
      id: "tribunal",
      name: "Administrative Review Tribunal",
      short: "ART",
      icon: ICON.scale,
      tone: "violet",
      role: "Reviews refusals of Student visa applications made in Australia.",
      does: [
        "Applies the same [[d106|Direction No. 106]]",
        "Looks at your circumstances when it makes its own decision",
        "Can take new evidence",
        "Charges A$3,727 to apply, with a 50% reduction for financial hardship",
      ],
    },
    {
      id: "you",
      name: "You (the applicant)",
      short: "You",
      icon: ICON.user,
      tone: "green",
      role: "Answer the questions honestly and back every answer with evidence.",
      does: [
        "Answer four questions (five if needed), within 150 words each",
        "Attach study, work, financial and home-ties evidence",
        "Disclose every earlier refusal or cancellation",
        "Reply to any request for comment before the deadline",
      ],
    },
  ],
  flows: [
    {
      from: "you",
      to: "government",
      label: "You answer + attach",
      detail: "You answer the [[gs|Genuine Student]] questions in the online form and upload documents that back each statement.",
    },
    {
      from: "government",
      to: "you",
      label: "May ask for more",
      detail: "If Home Affairs has doubts or adverse information, it may ask for more evidence or invite you to comment before deciding.",
    },
    {
      from: "you",
      to: "government",
      label: "You respond",
      detail: "You reply before the deadline with evidence, not just assurances.",
    },
    {
      from: "government",
      to: "you",
      label: "Decision",
      detail: "Home Affairs grants or refuses the visa. A refusal letter explains why and whether you can seek review.",
    },
    {
      from: "you",
      to: "tribunal",
      label: "You seek review",
      detail: "If you applied in Australia, you can usually ask the [[art|ART]] to review a refusal within the time stated in the letter.",
    },
  ],
  journeyTitle: "From first draft to a decision",
  journeyHighlight: "decision",
  stages: [
    {
      id: "map",
      short: "Map",
      title: "Map your story",
      who: ["you"],
      description: "List your education, work and visa history in date order, and spot anything that needs explaining.",
      points: [
        "A study gap, a change of field, or a course below a qualification you hold",
        "An earlier refusal, or a previous student visa",
        "Your answers must match every document you attach",
      ],
      youHold: "A timeline and a list of points each answer must cover",
      icon: ICON.map,
    },
    {
      id: "draft",
      short: "Draft",
      title: "Write your four answers",
      who: ["you"],
      description: "Answer each question in English, in your own words, within 150 words. State facts a document can prove.",
      points: [
        "Your current circumstances",
        "Why this course with this provider",
        "How the course will benefit you",
        "Anything else you want considered",
      ],
      youHold: "Four answers under 150 words each, or five if needed",
      icon: ICON.pencilSquare,
    },
    {
      id: "evidence",
      short: "Evidence",
      title: "Attach the evidence",
      who: ["you"],
      description: "Upload documents in ImmiAccount that prove what you say. Home Affairs gives more weight to statements backed by evidence.",
      points: [
        "Transcripts and certificates from previous study",
        "Employment, business or tax records",
        "Proof of family, community and work ties at home",
      ],
      youHold: "An application in which every claim is matched to a document",
      icon: ICON.documentCheck,
    },
    {
      id: "assess",
      short: "Assess",
      title: "Home Affairs assesses your case",
      who: ["government"],
      description: "A decision maker weighs your circumstances, immigration history and compliance record under [[d106|Direction No. 106]].",
      points: [
        "Your situation is assessed as a whole, not as a checklist",
        "Some situations are [[triggers|triggers]] for closer scrutiny",
        "Wanting permanent residence later doesn't count against you",
      ],
      youHold: "An application under assessment",
      icon: ICON.magnifyingGlass,
    },
    {
      id: "respond",
      short: "Respond",
      title: "Answer any concerns",
      who: ["government", "you"],
      description: "If Home Affairs has adverse information or doubts, it may invite you to comment. This is [[natural-justice|natural justice]].",
      points: [
        "Reply before the deadline",
        "Send evidence, not just assurances",
        "Adverse information that isn't put to you can be a ground for review",
      ],
      youHold: "A written response and new evidence on your file",
      icon: ICON.chatBubbleLeftRight,
    },
    {
      id: "decision",
      short: "Decision",
      title: "The decision and your options",
      who: ["government", "you", "tribunal"],
      description: "If you're refused, the letter explains why and whether you can seek review.",
      points: [
        "Refusals of applications made in Australia can usually go to the [[art|ART]]",
        "The ART fee is A$3,727, with a 50% reduction for financial hardship",
        "Refusals of applications made outside Australia generally can't be reviewed, so a better-evidenced new application is the usual path",
      ],
      youHold: "A grant, a review application lodged in time, or a plan to reapply",
      icon: ICON.scale,
    },
  ],
  check: {
    title: "How ready is your Genuine Student case?",
    highlight: "Genuine Student",
    ok: {
      title: "Your case looks well prepared",
      body: "Nothing in your answers raises an obvious concern. Make sure every claim is backed by a document before you lodge.",
    },
    todo: {
      title: "Some answers need more work",
      body: "None of these is a deal-breaker on its own, but each needs a clear explanation and evidence before you lodge.",
    },
    stop: {
      title: "Some answers need serious attention",
      body: "At least one answer matches a common refusal reason. The notes below explain why and what may help.",
    },
    disclaimer: "A general self-check, not advice or a prediction. Home Affairs weighs your whole situation under Direction No. 106.",
  },
  quiz: [
    {
      id: "answers",
      topic: "Your answers",
      question: "How have you written your answers?",
      options: [
        { value: "own", label: "In my own words, each backed by documents", status: "ok", note: "That's what Home Affairs looks for. Evidence carries more weight than narrative." },
        {
          value: "general",
          label: "In my own words, but mostly general statements",
          status: "todo",
          note: "Replace general claims, such as the quality of Australian education, with facts a document can prove.",
        },
        {
          value: "template",
          label: "Copied from a template or someone else's script",
          status: "stop",
          note: "Answers copied from a template, with no evidence of research into the course or provider, are a common refusal reason. Rewrite them about your own situation.",
        },
      ],
    },
    {
      id: "fit",
      topic: "Course fit",
      question: "How does the course fit your past study and work?",
      options: [
        { value: "fits", label: "It builds on what I've studied or done", status: "ok", note: "A course that fits your past study and work supports your answers." },
        {
          value: "change",
          label: "It's a change of field, and I can explain why",
          status: "todo",
          note: "An unrelated course draws closer scrutiny, but reasonable changes are allowed if explained. Show your research into the field and its job prospects at home.",
        },
        {
          value: "lower",
          label: "It's at a lower level than a qualification I already hold",
          status: "todo",
          note: "A lower-level course with no credible explanation is a common refusal reason. Explain clearly why it makes sense for you.",
        },
        {
          value: "unexplained",
          label: "It's unrelated, and I can't really explain why",
          status: "stop",
          note: "An unrelated course with no credible explanation is a common refusal reason. Reconsider the course, or get advice before you apply.",
          link: { label: "Get advice", href: "/bookings" },
        },
      ],
    },
    {
      id: "previous",
      topic: "Previous study",
      question: "Have you held a student visa before?",
      options: [
        { value: "no", label: "No", status: "ok", note: "No earlier study record to explain." },
        { value: "clean", label: "Yes, and I finished my courses on time", status: "ok", note: "A logical progression supports your case. Expect the extra question in the form." },
        {
          value: "changes",
          label: "Yes, with course changes, gaps or unfinished courses",
          status: "todo",
          note: "Home Affairs checks whether you were reasonably engaged in your studies. Explain each change, and any gap of more than two months, with evidence.",
        },
      ],
    },
    {
      id: "history",
      topic: "Visa history",
      question: "Have you ever been refused a visa, had one cancelled, or overstayed?",
      options: [
        { value: "no", label: "No", status: "ok", note: "Nothing to explain here." },
        {
          value: "disclose",
          label: "Yes, and I'll disclose and explain it",
          status: "todo",
          note: "It doesn't make a Student visa impossible. Explain what happened and how your situation has changed.",
        },
        {
          value: "hide",
          label: "Yes, but I'd rather not mention it",
          status: "stop",
          note: "Non-disclosure is treated far more seriously than the refusal itself, and false information can raise [[pic4020|PIC 4020]]. Disclose everything.",
        },
      ],
    },
    {
      id: "location",
      topic: "Where you apply",
      question: "Where are you applying from?",
      options: [
        { value: "outside", label: "Outside Australia", status: "ok", note: "Most Student visa applications must now be lodged outside Australia." },
        {
          value: "student",
          label: "In Australia, on a Student visa, under an exemption",
          status: "todo",
          note: "Holding or having held a student visa is a [[triggers|trigger]] for closer scrutiny, and you'll answer the extra question. Explain your study record with evidence.",
        },
        {
          value: "other",
          label: "In Australia, on a visitor, 485 or other temporary visa",
          status: "stop",
          note: "Since 2 October 2026 most holders of these visas can't apply in Australia at all. Holding them is also a trigger for closer scrutiny.",
          link: { label: "Read the Student visa page", href: "/visas/study/student-visa-500" },
        },
      ],
    },
    {
      id: "ties",
      topic: "Ties at home",
      question: "What do you have at home that you can document?",
      options: [
        { value: "strong", label: "Family, community or work ties, or a job offer after I graduate", status: "ok", note: "Evidence of ties and a post-study job offer with salary support your answers." },
        {
          value: "weak",
          label: "Not much I can document yet",
          status: "todo",
          note: "Gather what you can. Economic circumstances that suggest you want to work rather than study, with weak funds evidence, can raise concern.",
        },
      ],
    },
    {
      id: "consistency",
      topic: "Consistency",
      question: "Do your answers match your documents and the rest of the form?",
      options: [
        { value: "checked", label: "Yes, I've checked every date, name and figure", status: "ok", note: "Consistency matters as much as content." },
        {
          value: "unchecked",
          label: "I haven't checked yet",
          status: "todo",
          note: "Inconsistencies are a refusal risk and can raise [[pic4020|PIC 4020]] if false information is found. Check before you lodge.",
        },
      ],
    },
  ],
  myths: [
    {
      myth: "Saying I might want PR later will get me refused.",
      fact: "It won't. Direction No. 106 recognises that genuine students may later apply for permanent residence. What matters is that study is your main reason for applying now.",
    },
    {
      myth: "The old GTE statement still applies.",
      fact: "Not for Student visa applications lodged on or after 23 March 2024: those are assessed against the Genuine Student criterion. The genuine temporary entrant test still applies to Student Guardian visas.",
    },
    {
      myth: "A long, detailed statement is best.",
      fact: "Home Affairs prefers answers in the form, each within 150 words and in English, with documents attached in ImmiAccount. Evidence carries more weight than narrative.",
    },
    {
      myth: "Changing fields means an automatic refusal.",
      fact: "An unrelated course draws closer scrutiny, but reasonable changes of career or study pathway are allowed if you explain them with evidence.",
    },
    {
      myth: "A past refusal means I can't get a Student visa.",
      fact: "It doesn't, but your immigration history is part of the test. Disclose every refusal or cancellation and explain what has changed. Non-disclosure is treated far more seriously.",
    },
    {
      myth: "Home Affairs just ticks off a checklist.",
      fact: "It weighs your personal circumstances as a whole. That includes your situation at home, your course choice, your immigration history and your record of complying with visas.",
    },
    {
      myth: "If I'm refused, the Tribunal uses different rules.",
      fact: "The ART applies the same Direction No. 106, but looks at your circumstances when it decides and can take new evidence. Generally only refusals of applications made in Australia can be reviewed.",
    },
  ],
  glossary: [
    {
      id: "gs",
      term: "Genuine Student requirement",
      definition: "The test, since 23 March 2024, that you are a genuine applicant for entry and stay as a student. It replaced the Genuine Temporary Entrant test for Student visas.",
    },
    {
      id: "gte",
      term: "Genuine Temporary Entrant",
      definition: "The earlier test for Student visas, replaced on 23 March 2024. It still applies to Student Guardian (subclass 590) applicants.",
    },
    {
      id: "d106",
      term: "Direction No. 106",
      full: "Ministerial Direction No. 106",
      definition: "The Minister's direction on how to assess the genuine entry and stay requirements for Student and Student Guardian visas. It binds Home Affairs decision makers and the ART.",
    },
    {
      id: "cl500212",
      term: "Clause 500.212",
      definition: "The part of the Migration Regulations that sets the Genuine Student criterion for the Student visa.",
    },
    {
      id: "triggers",
      term: "Triggers for closer scrutiny",
      definition: "Situations listed in Direction No. 106 where Home Affairs may look more closely. Examples: a course unrelated to your study or work, inconsistencies, or holding a visitor, 485 or student visa.",
    },
    {
      id: "natural-justice",
      term: "Natural justice",
      definition: "Fair process: before relying on adverse information, Home Affairs must generally put it to you and give you a chance to respond.",
    },
    {
      id: "art",
      term: "ART",
      full: "Administrative Review Tribunal",
      definition: "The tribunal that reviews many visa refusals made in Australia. It takes a fresh look at the case and can take new evidence. The fee is A$3,727.",
    },
    {
      id: "pic4020",
      term: "PIC 4020",
      definition: "The rule on false or misleading information and bogus documents. Breaching it leads to refusal and a three-year bar on most visas.",
    },
    {
      id: "immiaccount",
      term: "ImmiAccount",
      definition: "The Home Affairs online account where you lodge your application and upload documents.",
    },
  ],
  verifiedExtras: [
    {
      fact: "False or misleading information or a bogus document leads to refusal and a three-year bar on most visas (PIC 4020).",
      source: "/visas/study/student-visa-500",
    },
  ],
  evidence: {
    navLabel: "Your evidence",
    eyebrow: "Evidence builder",
    title: "What can you show for each question?",
    highlight: "each question",
    subtitle: "Tick what you already have. It counts what you have; it doesn't judge your case. Nothing is saved or sent.",
    groups: [
      {
        id: "circumstances",
        title: "Your circumstances",
        icon: ICON.home,
        why: "Question 1: Home Affairs looks at your ties to family, community and work, and your economic situation at home.",
        items: [
          "Evidence of family ties at home",
          "Evidence of community ties",
          "An employer letter: dates, position and a contact",
          "12 months of employment or business records",
          "Income tax returns or bank statements",
          "Why you aren't studying a similar course at home, if one exists",
        ],
      },
      {
        id: "course",
        title: "Your course and provider",
        icon: ICON.academicCap,
        why: "Question 2: decision makers assess your research into the course, the provider and living in Australia.",
        items: [
          "Research into the course and its requirements",
          "Your reasons for choosing this provider",
          "Your plans for living in Australia",
          "Transcripts and certificates from previous study",
        ],
      },
      {
        id: "benefit",
        title: "How the course helps you",
        icon: ICON.briefcase,
        why: "Question 3: show the course fits your past work and study, and improves your job prospects at home or elsewhere.",
        items: [
          "A clear link to your past work or study",
          "A job offer with salary for after you graduate",
          "The salary or other benefits the qualification can bring",
          "An explanation of any change of career or study pathway",
        ],
      },
      {
        id: "history",
        title: "Your history",
        icon: ICON.documentMagnifyingGlass,
        why: "Home Affairs checks your visa and travel history, and your record on any earlier student visa.",
        items: [
          "Every earlier visa application and its outcome",
          "An explanation of any refusal or cancellation",
          "Proof you kept to your visa conditions and left on time",
          "A complete history of any study in Australia",
          "Reasons for any change of course or provider",
          "An explanation of any study gap of more than two months",
        ],
      },
    ],
    footnote: "Home Affairs assesses your personal circumstances as a whole, not as a checklist. This tool only helps you see what you have.",
  },
};
