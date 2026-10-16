import type { VisaExplainer } from "../types";
import { ICON } from "../icons";

// Interactive explainer for the study to permanent residence guide. Every
// figure matches data/visas/study.ts (checked against Home Affairs and the
// Migration Regulations on 12 October 2026). The finder uses only the
// pathways that page states. No dated timeline: the page's month-based
// milestones belong to different routes (485 streams of 18 months to 3
// years, the 186 after 2 years, the 191 after 3 years), so one timeline from
// a single start date would mislead. The page's IELTS figure for proficient
// English ("6.5 each band") is wrong (Home Affairs: 7 in each component), so
// no IELTS figure for proficient or superior English is used here.

export const studyToPermanentResidenceExplainer: VisaExplainer = {
  slug: "study-to-permanent-residence",
  factsAsAt: "12 October 2026",
  oneLiner:
    "A Student visa doesn't lead straight to permanent residence, but Australian study opens routes that can: a Temporary Graduate visa, points-tested visas, state nomination and employer sponsorship.",
  bigIdeas: [
    { title: "A 485 buys you time", body: "The Temporary Graduate visa gives you 18 months to 3 years of full work rights after you graduate.", icon: ICON.clock },
    { title: "Then points or a sponsor", body: "Permanent residence usually comes through enough points and an invitation, or an employer who sponsors you.", icon: ICON.scale },
    { title: "Choices while studying matter", body: "Your occupation, campus, English and a Professional Year can all change which routes are open.", icon: ICON.lightBulb },
  ],
  heroCard: [
    { label: "First step", value: "Temporary Graduate visa (485)", icon: ICON.academicCap },
    { label: "485 deadline", value: "Within 6 months of completing; most must be 35 or under", icon: ICON.calendarDays },
    { label: "Points route", value: "189, 190 or 491: 65 points and an invitation", icon: ICON.chartBar },
    { label: "Employer route", value: "482, then 186 after 2 years", icon: ICON.buildingOffice2 },
    { label: "Regional route", value: "491 for 5 years, then 191 after 3", icon: ICON.mapPin },
    { label: "Permanent visa charge", value: "A$6,135 to A$6,140", icon: ICON.currencyDollar },
  ],
  actors: [
    {
      id: "state",
      name: "A state or territory government",
      short: "State",
      icon: ICON.mapPin,
      tone: "amber",
      role: "Can nominate you for a 190 or 491 under its own criteria.",
      does: [
        "Runs its own nomination program, with criteria that change each financial year",
        "Often gives priority to people who studied or lived there",
        "Nominates at its discretion, within its allocation",
        "Nomination adds 5 points (190) or 15 points (491)",
      ],
    },
    {
      id: "employer",
      name: "An Australian employer",
      short: "Employer",
      icon: ICON.buildingOffice2,
      tone: "pink",
      role: "Can sponsor you for a 482, then nominate you for permanent residence.",
      does: [
        "Becomes an approved sponsor",
        "Nominates you for an occupation on the [[csol|CSOL]]",
        "Pays at least the [[csit|Core Skills Income Threshold]] and the market rate",
        "Can nominate you for the 186 after two years of full-time sponsored work",
      ],
    },
    {
      id: "government",
      name: "Department of Home Affairs",
      short: "Home Affairs",
      icon: ICON.buildingLibrary,
      tone: "blue",
      role: "Grants each visa, and invites people to apply for points-tested visas.",
      does: [
        "Grants the [[t485|485]] to eligible graduates",
        "Invites the highest-ranked [[eoi|EOIs]] in each occupation",
        "Decides 189, 190, 491, 482 and 186 applications",
        "Applies health, character and [[pic4020|PIC 4020]] to every application",
      ],
    },
    {
      id: "you",
      name: "You (the graduate)",
      short: "You",
      icon: ICON.user,
      tone: "green",
      role: "Build the qualification, experience, English and points each route needs.",
      does: [
        "Complete a qualification that meets the [[asr|Australian study requirement]]",
        "Get a [[skills-assessment|skills assessment]] in your occupation",
        "Improve your English for more points",
        "Lodge an [[eoi|EOI]], or find an employer to sponsor you",
      ],
    },
  ],
  flows: [
    {
      from: "you",
      to: "government",
      label: "You apply for a 485",
      detail: "Within six months of completing your course, you apply in Australia for a [[t485|Temporary Graduate visa]] to gain work experience.",
    },
    {
      from: "you",
      to: "government",
      label: "You lodge an EOI",
      detail: "With a [[skills-assessment|skills assessment]] and at least 65 points, you lodge an [[eoi|Expression of Interest]] in [[skillselect|SkillSelect]].",
    },
    {
      from: "state",
      to: "you",
      label: "Nominates you",
      detail: "A state or territory may nominate you for a 190 or 491, often giving priority to people who studied or lived there.",
    },
    {
      from: "employer",
      to: "government",
      label: "Sponsors + nominates",
      detail: "An approved employer nominates you for a 482, and later can nominate you for permanent residence through the 186.",
    },
    {
      from: "government",
      to: "you",
      label: "Invites + grants",
      detail: "Home Affairs invites the highest-ranked EOIs in each occupation, then decides your visa application.",
    },
  ],
  journeyTitle: "From graduation to permanent residence",
  journeyHighlight: "permanent residence",
  stages: [
    {
      id: "plan",
      short: "Plan",
      title: "Pick an occupation early",
      who: ["you"],
      description: "Find your target occupation, its [[assessing|assessing authority]] and the lists it appears on.",
      points: [
        "Check the [[csol|CSOL]], the [[mltssl|MLTSSL]] and state lists",
        "Choose a course that leads to a qualification the assessing authority accepts",
      ],
      youHold: "A target occupation, its assessing authority and the lists it's on",
      icon: ICON.map,
    },
    {
      id: "study",
      short: "Study",
      title: "Complete an eligible qualification",
      who: ["you"],
      description: "Meet the [[asr|Australian study requirement]]: at least 92 weeks of registered study in Australia, completed over at least 16 months.",
      points: [
        "Meeting it also earns 5 points",
        "Studying and living in a [[designated-regional|regional area]] can add 5 more points, and may open a second 485",
        "A research master's or doctorate in a STEM or specified ICT field can add 10 more",
      ],
      youHold: "A completed qualification that meets the study requirement",
      icon: ICON.academicCap,
    },
    {
      id: "graduate",
      short: "Graduate",
      title: "Apply for the Temporary Graduate visa",
      who: ["you", "government"],
      description: "Apply in Australia within six months of completing your course, before your Student visa ends.",
      points: [
        "35 or under for most applicants",
        "IELTS 6.5 overall with 5.5 in each part, or an equivalent score",
        "18 months, 2 years or 3 years, depending on the stream and qualification",
      ],
      youHold: "A Temporary Graduate visa with full work rights",
      cost: "A$5,750, paid by you",
      icon: ICON.paperAirplane,
    },
    {
      id: "build",
      short: "Build",
      title: "Build points, or find a sponsor",
      who: ["you", "employer"],
      description: "Use your 485 to gain skilled work, improve your English and get your [[skills-assessment|skills assessment]].",
      points: [
        "English points: 10 for proficient English, 20 for superior",
        "A [[py|Professional Year]] in accounting, ICT or engineering can add 5",
        "At the same time, look for an employer willing to sponsor you",
      ],
      youHold: "A competitive EOI, or an employer ready to nominate you",
      icon: ICON.presentationChartLine,
    },
    {
      id: "invite",
      short: "Invite",
      title: "Points route: get invited",
      who: ["government", "you", "state"],
      description: "Lodge an [[eoi|EOI]]. If you're invited, apply within 60 days for a 189, 190 or 491.",
      points: [
        "At least 65 points, and under 45 when invited",
        "State nomination adds 5 points for a 190, or 15 for a 491",
        "In many occupations, invitations need well above 65 points",
      ],
      youHold: "A permanent 189 or 190, or a provisional 491",
      cost: "A$6,135 for the 189, or A$6,140 for the 190 or 491",
      icon: ICON.envelopeOpen,
    },
    {
      id: "sponsor",
      short: "Sponsor",
      title: "Employer route: 482, then 186",
      who: ["employer", "you"],
      description: "An employer sponsors you for a 482 in a [[csol|CSOL]] occupation, then can nominate you for permanent residence through the 186.",
      points: [
        "You need at least one year of relevant work experience",
        "The 186 follows two years of full-time sponsored work in the last three",
        "The 186 is usually limited to applicants under 45",
      ],
      youHold: "A 482, then permanent residence through the 186",
      cost: "A$4,015 for the 482, then A$6,140 for the 186",
      icon: ICON.buildingOffice2,
    },
    {
      id: "regional",
      short: "Regional",
      title: "Regional route: 491, then 191",
      who: ["state", "you"],
      description: "A 491 lets you live, work and study in a [[designated-regional|designated regional area]] for up to five years.",
      points: [
        "After three years, and meeting the income and residence requirements, you can apply for the 191",
        "Until then, you can't apply for most other permanent visas",
      ],
      youHold: "Permanent residence through the 191",
      icon: ICON.mapPin,
    },
  ],
  check: {
    title: "Which routes could be open to you?",
    highlight: "open to you",
    ok: {
      title: "You look well placed",
      body: "Nothing in your answers closes the main routes. Next, check the details: your occupation lists, your points and your timing.",
    },
    todo: {
      title: "Some gaps to close",
      body: "None of these closes every route, but each needs work before you can rely on it.",
    },
    stop: {
      title: "Some routes are closed on these answers",
      body: "At least one answer rules out a main route. The notes below explain why and what may still fit.",
    },
    disclaimer: "A general self-check, not advice or a prediction. Invitations, nominations and grants depend on your full circumstances.",
  },
  quiz: [
    {
      id: "age",
      topic: "Age",
      question: "How old are you?",
      options: [
        { value: "young", label: "35 or under", status: "ok", note: "Within the usual 485 age limit. Age points are highest, 30 points, from 25 to 32." },
        {
          value: "mid",
          label: "Over 35, but under 45",
          status: "todo",
          note: "Over the usual 485 limit, unless you completed a research master's or PhD, or hold a Hong Kong or BNO passport (then under 50). Points, nominated and employer routes stay open while you're under 45.",
        },
        {
          value: "older",
          label: "45 or older",
          status: "stop",
          note: "Points-tested visas need you to be under 45 when invited, and the 186 is usually limited to applicants under 45.",
          link: { label: "Talk through your options", href: "/bookings" },
        },
      ],
    },
    {
      id: "occupation",
      topic: "Occupation",
      question: "Is your target occupation on the relevant lists?",
      options: [
        { value: "yes", label: "Yes, I've checked", status: "ok", note: "Every route depends on an occupation on the right list." },
        {
          value: "unchecked",
          label: "I haven't checked yet",
          status: "todo",
          note: "Check early: the [[csol|CSOL]] for employer sponsorship, the [[mltssl|MLTSSL]] for the vocational 485, and state lists for nomination.",
          link: { label: "Browse occupations", href: "/occupations" },
        },
        {
          value: "no",
          label: "No, it isn't on any list",
          status: "stop",
          note: "Points-tested and employer routes need an occupation on the relevant list.",
          link: { label: "Talk through your options", href: "/bookings" },
        },
      ],
    },
    {
      id: "study",
      topic: "Study requirement",
      question: "Will your study meet the Australian study requirement?",
      help: "At least 92 weeks of CRICOS-registered study, completed in Australia over at least 16 months.",
      options: [
        { value: "yes", label: "Yes", status: "ok", note: "It opens the 485 and earns 5 points." },
        {
          value: "credit",
          label: "Credit for earlier study cut my time in Australia below that",
          status: "stop",
          note: "Then you may not meet the 485 study requirement or get the 5 study points. Check the exact weeks and months.",
        },
        { value: "unsure", label: "I'm not sure", status: "todo", note: "Check your transcripts and completion letter for the CRICOS course, the dates and the duration." },
      ],
    },
    {
      id: "english",
      topic: "English",
      question: "What English level can you show?",
      options: [
        { value: "superior", label: "Superior English", status: "ok", note: "Superior English is worth 20 in the points test." },
        { value: "proficient", label: "Proficient English", status: "ok", note: "Proficient English is worth 10 in the points test." },
        {
          value: "competent",
          label: "Competent English",
          status: "todo",
          note: "Enough to be invited, but it adds no points. A higher result can add 10 or 20.",
          link: { label: "Count your points", href: "#points" },
        },
        {
          value: "below",
          label: "Below competent, or not tested yet",
          status: "todo",
          note: "You need at least competent English for points-tested visas, and IELTS 6.5 overall with 5.5 in each part (or equivalent) for the 485.",
          link: { label: "Practise PTE on Learniiz", href: "https://www.learniiz.com", external: true },
        },
      ],
    },
    {
      id: "assessment",
      topic: "Skills assessment",
      question: "Do you have a skills assessment for your occupation?",
      options: [
        { value: "yes", label: "Yes, from the last three years", status: "ok", note: "It's checked when you're invited or nominated." },
        {
          value: "no",
          label: "Not yet",
          status: "todo",
          note: "Apply to the [[assessing|assessing authority]] for your occupation. It's a separate application, valid for three years at most.",
        },
      ],
    },
    {
      id: "sponsor",
      topic: "Employer",
      question: "Has an employer offered to sponsor you?",
      options: [
        {
          value: "yes",
          label: "Yes, and I have at least a year of relevant work experience",
          status: "ok",
          note: "A 482 could be your route, then the 186 after two years of full-time sponsored work.",
          link: { label: "Read about the 482", href: "/visas/employer-sponsored/skills-in-demand-visa-482" },
        },
        {
          value: "short",
          label: "Yes, but I have less than a year of experience",
          status: "todo",
          note: "A 482 needs at least one year of relevant work experience. Part-time work while studying counts only if it was at the required skill level.",
        },
        { value: "no", label: "No", status: "ok", note: "The points route needs no employer." },
      ],
    },
    {
      id: "visa",
      topic: "Your visa now",
      question: "What visa do you hold now?",
      options: [
        {
          value: "student",
          label: "A Student visa, and I've finished or will soon finish my course",
          status: "ok",
          note: "[[c8534|Condition 8534]] doesn't stop a 485, or a skilled, 186 or 482 application once your course is complete.",
        },
        { value: "graduate", label: "A Temporary Graduate visa (485)", status: "ok", note: "Use the time to build points or find a sponsor. You can't apply for a Student visa in Australia." },
        {
          value: "another",
          label: "A Student visa, and I want another one to stay longer",
          status: "todo",
          note: "Since 2 October 2026 that's possible in Australia only under an exemption. The Genuine Student test also looks closely at courses used to stay on.",
        },
      ],
    },
  ],
  myths: [
    {
      myth: "An Australian degree leads straight to permanent residence.",
      fact: "It doesn't. Study gives you access to the 485 and some points. Permanent residence then depends on your occupation, a skills assessment, English and age. You also need enough points, a nomination or an employer sponsor.",
    },
    {
      myth: "With 65 points, I'll be invited.",
      fact: "65 is the minimum to be invited. Invitation rounds select the highest-ranked EOIs in each occupation, and many occupations need well above 65.",
    },
    {
      myth: "Condition 8534 stops me applying for permanent visas.",
      fact: "Once your course is complete, it doesn't stop a skilled, 186 or 482 application, and a 485 can be applied for at any time.",
    },
    {
      myth: "I can always get another Student visa to buy time.",
      fact: "Since 2 October 2026, only under an exemption, and 485 holders can't apply for a Student visa in Australia at all.",
    },
    {
      myth: "Every degree earns the same points.",
      fact: "A bachelor or master's degree earns 15 points, a doctorate 20, and an Australian diploma or trade qualification 10. Only your highest qualification counts.",
    },
    {
      myth: "I can hold one 485 after another.",
      fact: "You can't hold a 485 as the main applicant twice. The exception is a second 485 for graduates of regional campuses who have lived in a regional area for two years.",
    },
    {
      myth: "Any part-time job while studying counts as experience for a 482.",
      fact: "Only work at the required skill level counts towards the one year of relevant experience a 482 needs.",
    },
    {
      myth: "I'm too old for the 485, so permanent residence is out of reach.",
      fact: "Older graduates often look at employer sponsorship, such as a 482 or the 186 Direct Entry stream. A state-nominated 190 or 491 is another option, if you're under 45 when invited.",
    },
  ],
  glossary: [
    {
      id: "t485",
      term: "Temporary Graduate visa",
      full: "Subclass 485",
      definition: "A visa for recent graduates to stay and work in Australia, with full work rights. It lasts 18 months to 3 years, depending on the stream and qualification.",
    },
    {
      id: "asr",
      term: "Australian study requirement",
      definition: "At least two academic years (92 weeks) of CRICOS-registered study completed in Australia over at least 16 months. It's needed for the 485 and earns 5 points.",
    },
    {
      id: "eoi",
      term: "EOI",
      full: "Expression of Interest",
      definition: "Your profile in SkillSelect for points-tested visas. You can apply for a 189, 190 or 491 only when invited.",
    },
    {
      id: "skillselect",
      term: "SkillSelect",
      definition: "The online system where you lodge an Expression of Interest and receive invitations to apply for points-tested visas.",
    },
    {
      id: "skills-assessment",
      term: "Skills assessment",
      definition: "An assessing authority's check that your skills suit your occupation. It's a separate application, and it's valid for three years at most.",
    },
    {
      id: "assessing",
      term: "Assessing authority",
      definition: "The organisation that assesses skills for a particular occupation. Your course should lead to a qualification it accepts.",
    },
    {
      id: "csol",
      term: "CSOL",
      full: "Core Skills Occupation List",
      definition: "The list of occupations an employer can nominate for a Core Skills stream 482.",
    },
    {
      id: "mltssl",
      term: "MLTSSL",
      full: "Medium and Long-term Strategic Skills List",
      definition: "An occupation list. The 485 Post-Vocational Education Work stream needs an occupation on it.",
    },
    {
      id: "csit",
      term: "Core Skills Income Threshold",
      definition: "The minimum salary for a Core Skills stream 482. The employer must also pay at least the Annual Market Salary Rate.",
    },
    {
      id: "py",
      term: "Professional Year",
      definition: "A program in accounting, ICT or engineering. Completing one in the last four years can add 5 points.",
    },
    {
      id: "designated-regional",
      term: "Designated regional area",
      definition: "The parts of Australia where 491 holders must live, work and study. Studying at a regional campus while living in a regional area can also earn 5 points.",
    },
    {
      id: "c8534",
      term: "Condition 8534",
      definition: "A no further stay condition on some Student visas. It doesn't stop a 485, or a skilled, 186 or 482 application once your course is complete.",
    },
    {
      id: "pic4020",
      term: "PIC 4020",
      definition: "The rule on false or misleading information and bogus documents. It applies to every visa application.",
    },
    {
      id: "trt",
      term: "TRT stream",
      full: "Temporary Residence Transition stream",
      definition: "The subclass 186 stream for 482 holders whose employer nominates them after two years of full-time sponsored work. It needs competent English.",
    },
  ],
  cta: {
    subtitle: "We look at your occupation, points and timing, tell you honestly which routes are realistic, and plan your next visa with you.",
  },
  finder: {
    id: "after-study-finder",
    navLabel: "Your pathway",
    eyebrow: "Pathway finder",
    title: "Which pathway after study?",
    highlight: "pathway",
    subtitle: "Answer a few one-tap questions to see your likely starting point. Nothing is saved or sent.",
    start: "stage",
    questions: [
      {
        id: "stage",
        question: "Where are you now?",
        options: [
          { label: "Finishing my course, or finished it in the last six months", next: "age" },
          { label: "I already hold a Temporary Graduate visa (485)", next: "sponsor" },
          { label: "I finished more than six months ago, and have no 485", next: "sponsor" },
        ],
      },
      {
        id: "age",
        question: "How old will you be when you apply for the 485?",
        help: "Most applicants must be 35 or under. The limit is under 50 if you completed a research master's or PhD, or hold a Hong Kong or British National Overseas passport.",
        options: [
          { label: "35 or under", next: "t485" },
          { label: "Under 50, with a research master's or PhD, or a Hong Kong or BNO passport", next: "t485" },
          { label: "Older than these limits", next: "sponsor" },
        ],
      },
      {
        id: "sponsor",
        question: "Has an employer offered to sponsor you?",
        options: [
          { label: "Yes, and I have at least a year of relevant work experience", next: "employer" },
          { label: "Yes, but I have less than a year of experience", next: "points" },
          { label: "No", next: "points" },
        ],
      },
      {
        id: "points",
        question: "How do your points look?",
        help: "You need at least 65 points, a suitable [[skills-assessment|skills assessment]] and to be under 45 when invited. State nomination adds 5 or 15 points.",
        options: [
          { label: "65 or more without any nomination", next: "points-route" },
          { label: "Close, if a state or territory nominated me", next: "nominated" },
          { label: "Well short, or no skills assessment yet", next: "build" },
          { label: "I'm 45 or older", next: "over45" },
        ],
      },
    ],
    outcomes: [
      {
        id: "t485",
        title: "Temporary Graduate visa (subclass 485)",
        body: "Apply in Australia within six months of completing your course. It gives you 18 months to 3 years of full work rights to build points or find a sponsor.",
        watch: [
          "At least 92 weeks of registered study in Australia, over at least 16 months",
          "IELTS 6.5 overall with 5.5 in each part, or an equivalent score, from the last 12 months",
          "Apply before your Student visa ends",
          "The vocational stream needs an [[mltssl|MLTSSL]] occupation and a skills assessment applied for",
        ],
        href: "/visas/skilled/temporary-graduate-visa-485",
      },
      {
        id: "employer",
        title: "Employer sponsorship: 482, then 186",
        body: "Your employer nominates you for a Skills in Demand visa (subclass 482). After two years of full-time sponsored work, it can nominate you for permanent residence through the 186.",
        watch: [
          "The occupation must be on the [[csol|CSOL]]",
          "Your salary must be at least the [[csit|Core Skills Income Threshold]] and the market rate",
          "The 186 usually needs you to be under 45, with competent English",
        ],
        href: "/visas/employer-sponsored/skills-in-demand-visa-482",
      },
      {
        id: "points-route",
        title: "Points-tested visas: 189, 190 or 491",
        body: "Lodge an [[eoi|Expression of Interest]] in SkillSelect. With 65 or more points you can be invited for a 189 without nomination, though many occupations need well above 65.",
        watch: ["You must be under 45 when invited", "Your skills assessment must be from the last three years", "Apply within 60 days of an invitation"],
        href: "/visas/skilled/skilled-migration-points-test",
      },
      {
        id: "nominated",
        title: "State-nominated visas: 190 or 491",
        body: "State or territory nomination adds 5 points for a 190 or 15 for a 491. Many states give priority to people who studied or lived there.",
        watch: [
          "Each state sets its own criteria, which change every financial year",
          "A 491 means living and working in a [[designated-regional|designated regional area]], with the 191 possible after three years",
        ],
        href: "/visas/skilled/skilled-nominated-visa-190",
      },
      {
        id: "build",
        title: "No route is open on these answers yet",
        body: "You need a 485, a sponsor or enough points first. Skilled work, better English, a Professional Year or a skills assessment can each change the picture.",
        watch: ["Check that your occupation is on the relevant lists", "Use the points calculator on this page to see where you stand"],
        href: "/visas/skilled/skilled-migration-points-test",
        tone: "stop",
      },
      {
        id: "over45",
        title: "Most permanent routes close at 45",
        body: "Points-tested visas need you to be under 45 when invited, and the 186 Temporary Residence Transition stream is usually limited to applicants under 45.",
        watch: ["Get advice on whether an exemption applies to you"],
        tone: "stop",
      },
    ],
    footnote:
      "General information, not advice. Built from the rules in force on 12 October 2026. Occupation lists, state criteria and invitation rounds change, so check them before you rely on a route.",
  },
  points: { visa: "189" },
};
