import type { VisaExplainer } from "../types";
import { ICON } from "../icons";

// Interactive explainer for the Student visa conditions and work rights
// guide. Every figure matches data/visas/study.ts (checked against Home
// Affairs, the Migration Regulations, the ESOS Act and the National Code
// 2018 on 12 October 2026), including the Home Affairs work-hours example.

const HA_500 = "https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/student-500";

export const studentVisaConditionsExplainer: VisaExplainer = {
  slug: "student-visa-conditions-and-work-rights",
  factsAsAt: "12 October 2026",
  oneLiner:
    "A Student visa comes with conditions on how much you work, what you study, your health cover and your next visa, and breaking one can lead to your visa being cancelled.",
  bigIdeas: [
    { title: "48 hours a fortnight in term", body: "Counted over 14 days from a Monday, across all your jobs. No limit during scheduled breaks.", icon: ICON.briefcase },
    { title: "Stay enrolled and on track", body: "Keep studying at the same or a higher level, with the attendance and progress your provider sets.", icon: ICON.academicCap },
    { title: "Breaches have consequences", body: "Your provider reports problems, and Home Affairs can cancel your visa after giving you a chance to respond.", icon: ICON.exclamationTriangle },
  ],
  heroCard: [
    { label: "Work in term", value: "48 hours a fortnight (condition 8105)", icon: ICON.briefcase },
    { label: "Work in breaks", value: "Unlimited", icon: ICON.sun },
    { label: "Study", value: "Same or a higher course level (condition 8202)", icon: ICON.academicCap },
    { label: "Health cover", value: "OSHC for your whole stay (condition 8501)", icon: ICON.shieldCheck },
    { label: "Next visa", value: "Condition 8534 may limit it", icon: ICON.arrowPath },
    { label: "If you breach one", value: "Possible cancellation, reviewable at the ART", icon: ICON.exclamationTriangle },
  ],
  checkedAgainst: "Home Affairs, the Migration Regulations, the ESOS Act and the National Code 2018",
  actors: [
    {
      id: "provider",
      name: "Your education provider",
      short: "Provider",
      icon: ICON.academicCap,
      tone: "orange",
      role: "Sets attendance and progress rules, and reports breaches.",
      does: [
        "Monitors your attendance and course progress",
        "Must run an intervention strategy and an internal appeal process",
        "Reports breaches to Home Affairs under the [[esos|ESOS Act]]",
        "Decides whether to release you for an early transfer",
      ],
    },
    {
      id: "government",
      name: "Department of Home Affairs",
      short: "Home Affairs",
      icon: ICON.buildingLibrary,
      tone: "blue",
      role: "Sets your conditions and can cancel the visa if you breach one.",
      does: [
        "Lists your conditions in the grant letter and [[vevo|VEVO]]",
        "Sends a [[noicc|notice of intention to consider cancellation]] first",
        "Weighs your response and your circumstances",
        "Decides whether to cancel",
      ],
    },
    {
      id: "tribunal",
      name: "Administrative Review Tribunal",
      short: "ART",
      icon: ICON.scale,
      tone: "violet",
      role: "Reviews cancellations made while you're in Australia.",
      does: [
        "Can review a cancellation made while you're in Australia",
        "Has a short time limit, stated in the decision",
        "Charges A$3,727, with a 50% reduction for financial hardship",
      ],
    },
    {
      id: "you",
      name: "You (the student)",
      short: "You",
      icon: ICON.user,
      tone: "green",
      role: "Keep to your conditions and keep records that prove it.",
      does: [
        "Work no more than 48 hours a fortnight in term",
        "Stay enrolled, attend and progress",
        "Keep [[oshc|OSHC]] and update your address within 7 days",
        "Respond to any notice before the deadline",
      ],
    },
  ],
  flows: [
    {
      from: "you",
      to: "provider",
      label: "Study + attend",
      detail: "You attend, sit assessments and progress as your provider requires ([[c8202|condition 8202]]).",
    },
    {
      from: "provider",
      to: "government",
      label: "Reports breaches",
      detail: "If your attendance or progress falls short, your provider reports you to Home Affairs, after any internal appeal has finished.",
    },
    {
      from: "government",
      to: "you",
      label: "Notice of intention",
      detail: "Before cancelling your visa in Australia, Home Affairs must send a [[noicc|notice]] and give you a chance to respond.",
    },
    {
      from: "you",
      to: "government",
      label: "You respond",
      detail: "You reply before the deadline with evidence about the alleged breach and why the visa shouldn't be cancelled.",
    },
    {
      from: "you",
      to: "tribunal",
      label: "Review if cancelled",
      detail: "If your visa is cancelled while you're in Australia, you can apply to the [[art|ART]] within the period stated in the decision.",
    },
  ],
  journeyTitle: "Keeping your visa safe, step by step",
  journeyHighlight: "safe",
  stages: [
    {
      id: "check",
      short: "Check",
      title: "Check your conditions",
      who: ["you"],
      description: "Your grant letter and [[vevo|VEVO]] list the conditions on your visa. Check them after every new grant.",
      points: [
        "Conditions vary with your sector and circumstances",
        "[[c8534|Condition 8534]] is discretionary: it may or may not be on your visa",
        "Family members have their own conditions, such as [[c8104|condition 8104]]",
      ],
      youHold: "A list of the exact conditions that apply to you",
      icon: ICON.clipboardDocumentCheck,
    },
    {
      id: "arrive",
      short: "Arrive",
      title: "Arrive and give your address",
      who: ["you", "provider"],
      description: "Within 7 days of arriving, give your provider your residential address ([[c8533|condition 8533]]).",
      points: [
        "Tell them within 7 days of any change of address",
        "Tell your current provider within 7 days of getting a CoE from a new one",
        "Home Affairs contacts you through your provider, so a missed update can mean a missed notice",
      ],
      youHold: "A provider record of where you live",
      icon: ICON.mapPin,
    },
    {
      id: "work",
      short: "Work",
      title: "Track your work hours by fortnight",
      who: ["you"],
      description: "No work until your course starts. Then up to 48 hours in any fortnight while your course is in session ([[c8105|condition 8105]]).",
      points: [
        "Count Monday to Sunday over two weeks, across all your jobs",
        "Home Affairs example: 15, 30, 30 and 10 hours breaches the limit, because weeks two and three total 60",
        "No limit during scheduled breaks, or once you've completed the course on your CoE",
      ],
      youHold: "Payslips and rosters that show every fortnight in term is within the limit",
      icon: ICON.clock,
    },
    {
      id: "study",
      short: "Study",
      title: "Stay enrolled and on track",
      who: ["you", "provider"],
      description: "Stay in a registered course at the same or a higher [[aqf|AQF]] level, with satisfactory attendance and progress ([[c8202|condition 8202]]).",
      points: [
        "Schools, ELICOS and Foundation courses need at least 80% attendance",
        "Course gaps should generally not exceed two months, apart from the end-of-year break",
        "Keep [[oshc|OSHC]] continuous, including when you change provider ([[c8501|condition 8501]])",
      ],
      youHold: "A current enrolment with good attendance and progress",
      icon: ICON.academicCap,
    },
    {
      id: "change",
      short: "Change",
      title: "Ask before you change anything",
      who: ["you", "provider"],
      description: "Changing course or provider, deferring or finishing early all affect your conditions. Talk to your provider first.",
      points: [
        "Before six months of your main course, you usually need a release from your provider",
        "A lower-level course needs a new Student visa, usually applied for outside Australia",
        "Some research changes need approval first ([[c8208|condition 8208]])",
      ],
      youHold: "A provider release or approval before the change",
      icon: ICON.arrowsRightLeft,
    },
    {
      id: "report",
      short: "Report",
      title: "If your provider reports you",
      who: ["provider", "you"],
      description: "Your provider must let you use its internal appeal first. The report can't take effect until the appeal ends, unless someone's welfare is at risk.",
      points: [
        "Appeal within the time your provider allows",
        "Gather evidence of the reasons, and any compassionate or compelling circumstances",
      ],
      youHold: "An internal appeal lodged in time, with evidence",
      icon: ICON.bellAlert,
    },
    {
      id: "notice",
      short: "Notice",
      title: "If Home Affairs considers cancellation",
      who: ["government", "you", "tribunal"],
      description: "Home Affairs must send a [[noicc|notice of intention to consider cancellation]] and weigh your response before deciding.",
      points: [
        "Reply before the deadline, with evidence",
        "A cancellation in Australia can be reviewed by the [[art|ART]], within a short time limit",
        "Cancellation can bring the [[s48|section 48 bar]], and a three-year exclusion can apply to later temporary visas",
      ],
      youHold: "A response on file and, if needed, a review application lodged in time",
      icon: ICON.scale,
    },
  ],
  check: {
    title: "Are you keeping to your conditions?",
    highlight: "your conditions",
    ok: {
      title: "You look on track",
      body: "Nothing in your answers suggests a breach. Keep your records, and check VEVO after every new grant.",
    },
    todo: {
      title: "A few things to sort now",
      body: "None of these is a breach on its own yet, but each needs attention before it becomes one.",
    },
    stop: {
      title: "Act now",
      body: "At least one answer suggests a breach or a cancellation risk. The notes below explain what to do next.",
    },
    disclaimer: "A general self-check, not advice or a prediction. Cancellation is discretionary and depends on your full circumstances.",
  },
  quiz: [
    {
      id: "notice",
      topic: "Notices",
      question: "Have you received a notice of intention to consider cancellation?",
      options: [
        { value: "no", label: "No", status: "ok", note: "Nothing to respond to." },
        {
          value: "yes",
          label: "Yes",
          status: "stop",
          note: "Respond before the deadline with evidence. If the visa is cancelled while you're in Australia, ART review has a short time limit.",
          link: { label: "Read about the notice", href: "/visas/appeals-and-review/visa-cancellation-and-notice-of-intention" },
        },
      ],
    },
    {
      id: "hours",
      topic: "Work hours",
      question: "How do you count your work hours in term?",
      options: [
        { value: "fortnight", label: "By each Monday-to-Sunday fortnight, across all my jobs", status: "ok", note: "That's how the 48-hour limit works." },
        {
          value: "weekly",
          label: "I keep every week under 24 hours",
          status: "ok",
          note: "That keeps you within the limit. The actual rule is 48 hours over any two weeks in a row, which gives you more flexibility.",
        },
        {
          value: "mainjob",
          label: "I only count my main job",
          status: "stop",
          note: "The limit covers all your jobs, and unpaid work experience unless it's a mandatory registered part of your course. Check every fortnight now.",
          link: { label: "Use the work-hours planner", href: "#work-hours" },
        },
        { value: "research", label: "I'm a research master's or PhD student", status: "ok", note: "No limit once your course has started." },
      ],
    },
    {
      id: "start",
      topic: "Starting work",
      question: "Did you start working before your course started?",
      options: [
        { value: "no", label: "No", status: "ok", note: "Nothing to worry about here." },
        { value: "rights", label: "Yes, but I held a visa with work rights when I applied", status: "ok", note: "That's allowed under condition 8105." },
        { value: "yes", label: "Yes", status: "stop", note: "That breaches condition 8105. Get advice before you do anything else.", link: { label: "Get advice", href: "/bookings" } },
      ],
    },
    {
      id: "course",
      topic: "Course changes",
      question: "Are you planning to change course or provider?",
      options: [
        { value: "no", label: "No", status: "ok", note: "Nothing to arrange." },
        {
          value: "same",
          label: "Yes, to the same or a higher level",
          status: "todo",
          note: "Allowed under condition 8202. Before six months of your main course, you usually need a release. Tell your provider within 7 days of a new CoE.",
        },
        { value: "lower", label: "Yes, to a lower-level course", status: "stop", note: "That needs a new Student visa, which most people must now apply for from outside Australia." },
      ],
    },
    {
      id: "progress",
      topic: "Attendance and progress",
      question: "Has your provider raised concerns about your attendance or progress?",
      options: [
        { value: "no", label: "No", status: "ok", note: "Keep it that way: providers must report breaches." },
        { value: "warned", label: "Yes, I've had a warning", status: "todo", note: "Act on the provider's intervention now. If it decides to report you, use the internal appeal." },
        {
          value: "reported",
          label: "Yes, they've decided to report me",
          status: "stop",
          note: "Use the internal appeal within the time allowed, with evidence. Home Affairs may then send a notice of intention to consider cancellation.",
        },
      ],
    },
    {
      id: "oshc",
      topic: "Health cover",
      question: "Is your OSHC continuous for your whole stay?",
      options: [
        { value: "yes", label: "Yes", status: "ok", note: "Keep the renewals as proof." },
        { value: "gap", label: "It has lapsed, or will soon", status: "todo", note: "Renew straight away. Letting OSHC lapse breaches condition 8501." },
      ],
    },
    {
      id: "address",
      topic: "Your address",
      question: "Does your provider have your current address?",
      options: [
        { value: "yes", label: "Yes", status: "ok", note: "Notices can reach you through your provider." },
        {
          value: "moved",
          label: "I moved and haven't told them",
          status: "todo",
          note: "Update it now. You must tell them within 7 days of a change, or a notice may never reach you.",
        },
      ],
    },
    {
      id: "next",
      topic: "Next visa",
      question: "Is condition 8534 on your visa, and what will you apply for next?",
      options: [
        { value: "none", label: "8534 isn't on my visa", status: "ok", note: "It doesn't limit your next application." },
        {
          value: "allowed",
          label: "It is, and I'll apply for a 485, a Student Guardian or a protection visa",
          status: "ok",
          note: "These can be granted in Australia despite condition 8534.",
        },
        {
          value: "skilled",
          label: "It is, I've finished my course, and I'll apply for a skilled, 186, 482 or business visa",
          status: "ok",
          note: "No waiver is needed once you've completed the course your visa was granted for.",
        },
        {
          value: "other",
          label: "It is, and I want another Student visa or a different visa",
          status: "todo",
          note: "You'd need a waiver, which is granted only in limited circumstances.",
          link: { label: "Read about waivers", href: "/visas/appeals-and-review/condition-8503-no-further-stay-waiver" },
        },
        { value: "unsure", label: "I'm not sure", status: "todo", note: "Check VEVO or your grant letter." },
      ],
    },
  ],
  myths: [
    {
      myth: "The limit is 24 hours a week.",
      fact: "It's 48 hours a fortnight: any 14 days starting on a Monday. You can work 30 hours one week and 18 the next. But any two weeks in a row in term must total 48 hours or less.",
    },
    {
      myth: "If each week looks reasonable, I'm within the limit.",
      fact: "Every pair of weeks counts. Home Affairs gives this example: 15, 30, 30 and 10 hours in four successive weeks. That breaches the limit, because weeks two and three total 60 hours.",
    },
    {
      myth: "Unpaid internships don't count.",
      fact: "Paid and unpaid work experience counts towards the limit, unless it's a mandatory, CRICOS-registered part of your course.",
    },
    {
      myth: "After my last exam I can work unlimited hours.",
      fact: "Only once you've completed the course on your CoE. If you're enrolled in a further course in your package, the limit applies again once that course is in session.",
    },
    {
      myth: "Condition 8534 stops me getting any other visa.",
      fact: "Not quite. A 485, a Student Guardian or a protection visa can still be granted. After finishing your course, you can also apply for skilled, 186, 482 and business visas without a waiver.",
    },
    {
      myth: "A provider report means automatic cancellation.",
      fact: "No. You can use the provider's internal appeal first. Home Affairs must then send a notice and weigh your response, and cancellation is discretionary.",
    },
    {
      myth: "I can switch to any cheaper or shorter course.",
      fact: "Only at the same or a higher AQF level. A lower-level course needs a new Student visa, which most people must now apply for from outside Australia.",
    },
    {
      myth: "My partner can work unlimited hours during my breaks.",
      fact: "Family members are limited to 48 hours a fortnight at all times, including your breaks, unless you're studying a master's or doctoral degree.",
    },
  ],
  glossary: [
    {
      id: "c8105",
      term: "Condition 8105",
      definition: "The student work condition. No work before your course starts, then no more than 48 hours in any fortnight while the course is in session. No limit out of session.",
    },
    {
      id: "c8104",
      term: "Condition 8104",
      definition: "The family member work condition. No work before the student's course starts, then 48 hours a fortnight at all times. There's no limit if the student is studying a master's or doctoral degree.",
    },
    {
      id: "c8202",
      term: "Condition 8202",
      definition: "Stay enrolled in a registered course at the same or a higher AQF level, with satisfactory attendance and course progress set by your provider.",
    },
    {
      id: "c8501",
      term: "Condition 8501",
      definition: "Hold adequate health insurance (for students, OSHC) for your whole stay, including for family members.",
    },
    {
      id: "c8533",
      term: "Condition 8533",
      definition: "Give your provider your address within 7 days of arriving, and tell them of any change within 7 days. Tell your current provider within 7 days of getting a CoE from a new one.",
    },
    {
      id: "c8534",
      term: "Condition 8534",
      definition: "A discretionary no further stay condition. In Australia, only a 485, a Student Guardian or a protection visa can be granted unless it's waived. Once your course is complete, skilled, 186, 482 and business visas need no waiver.",
    },
    {
      id: "c8208",
      term: "Condition 8208",
      definition: "Applies to visas applied for after 1 July 2022. You need the Minister's approval before starting postgraduate research, a thesis or a bridging course relating to critical technology.",
    },
    {
      id: "aqf",
      term: "AQF",
      full: "Australian Qualifications Framework",
      definition: "The national system that ranks Australian qualifications from level 1 to level 10. Condition 8202 keeps you at the same or a higher level, though a move from a doctorate to a master's is allowed.",
    },
    {
      id: "oshc",
      term: "OSHC",
      full: "Overseas Student Health Cover",
      definition: "The health insurance students must hold for their whole stay. Letting it lapse breaches condition 8501.",
    },
    {
      id: "esos",
      term: "ESOS Act",
      full: "Education Services for Overseas Students Act 2000",
      definition: "The law that regulates providers enrolling international students. With the National Code 2018 it sets attendance monitoring, transfers, reporting and student protections.",
    },
    {
      id: "vevo",
      term: "VEVO",
      full: "Visa Entitlement Verification Online",
      definition: "The Home Affairs online service that shows your current visa and its conditions.",
    },
    {
      id: "noicc",
      term: "Notice of intention",
      full: "Notice of intention to consider cancellation",
      definition: "The notice Home Affairs must send, under section 119 of the Migration Act, before cancelling a visa while you're in Australia. It gives you a chance to respond.",
    },
    {
      id: "art",
      term: "ART",
      full: "Administrative Review Tribunal",
      definition: "The tribunal that can review a cancellation made while you're in Australia. The application fee is A$3,727, and the time limit is short.",
    },
    {
      id: "s48",
      term: "Section 48 bar",
      definition: "After a cancellation, if you hold no other visa, section 48 of the Migration Act limits which visas you can apply for in Australia.",
    },
    {
      id: "in-session",
      term: "In session",
      definition: "When your course is running, including exam periods. It isn't in session during scheduled breaks or once you've completed the course on your CoE.",
    },
  ],
  verifiedExtras: [
    {
      fact: "VEVO stands for Visa Entitlement Verification Online. The Australian Qualifications Framework (AQF) ranks qualifications from level 1 to level 10.",
      source: HA_500,
    },
  ],
  workHours: {
    limit: 48,
    condition: "Condition 8105",
    breakNote: "Out of session, such as scheduled course breaks or after you've completed the course on your CoE, there's no limit on your hours.",
    footnote:
      "A fortnight is 14 days starting on a Monday. Any two weeks in a row in term must total 48 hours or less, across all your jobs. You count as working when you're rostered, clocked on or paid, except during unpaid breaks. Research master's and PhD students have no limit once their course starts. Family members are limited separately under condition 8104.",
  },
};
