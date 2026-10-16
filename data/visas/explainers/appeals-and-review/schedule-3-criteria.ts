import type { FinderConfig, VisaExplainer } from "../types";
import { ICON } from "../icons";

// Interactive explainer for "Schedule 3 criteria". Every fact comes from
// data/visas/appeals-and-review.ts (checked against Home Affairs, the ART
// and the Migration Act and Regulations on 12 October 2026). The 28-day rule
// is shown only as the page states it; no dates are calculated.

// Page-specific finder: does Schedule 3 apply, and which part matters?
const schedule3Finder: FinderConfig = {
  id: "schedule-3-finder",
  navLabel: "Does it apply?",
  eyebrow: "Schedule 3 finder",
  title: "Does Schedule 3 apply to your application?",
  highlight: "Schedule 3",
  subtitle: "Up to three one-tap questions. It shows the likely position; it doesn't decide your case.",
  start: "position",
  questions: [
    {
      id: "position",
      question: "Which describes you when you apply?",
      options: [
        { label: "I'm applying from outside Australia", next: "offshore" },
        { label: "I'm in Australia and hold a visa that isn't a bridging visa", next: "not-apply" },
        { label: "I'm in Australia with only a bridging visa, or no visa", next: "which" },
      ],
    },
    {
      id: "which",
      question: "Which visa are you applying for?",
      options: [
        { label: "A partner visa (subclass 820/801)", next: "timing" },
        { label: "Another visa", next: "check-clause" },
      ],
    },
    {
      id: "timing",
      question: "When did your last substantive visa end, or get cancelled?",
      help: "That's usually the relevant day. If you entered Australia without a visa, it's the day you entered.",
      options: [
        { label: "Recently: I can still lodge within 28 days after that day", next: "within28" },
        { label: "More than 28 days ago", next: "waiver" },
        { label: "I'm not sure", next: "fix-day" },
      ],
    },
  ],
  outcomes: [
    {
      id: "offshore",
      title: "Schedule 3 doesn't apply offshore",
      body: "Schedule 3 adds criteria for people who apply in Australia without a substantive visa. An application made outside Australia, such as a partner visa (subclass 309), isn't assessed against it.",
      watch: ["Any exclusion period after a cancellation or overstay can still apply"],
      href: "/visas/family/partner-visa-offshore-309-100",
    },
    {
      id: "not-apply",
      title: "Not while you hold a substantive visa",
      body: "The criteria only apply to applicants who don't hold a substantive visa when they apply. If you lodge while your current visa is still in effect, Schedule 3 isn't part of the assessment.",
      watch: [
        "If your visa ends before you lodge, the position changes: check again",
        "Criterion 3001 counts 28 days from the last day your last substantive visa was in effect",
      ],
      href: "/visas/appeals-and-review/schedule-3-criteria",
    },
    {
      id: "check-clause",
      title: "Check the Schedule 2 clause for your visa",
      body: "Schedule 3 applies only where the visa's Schedule 2 criteria say so. Some visas use criterion 3001 (28 days), some use 3002 (12 months), and some use 3005.",
      watch: [
        "If a visa was refused or cancelled since you last entered, the section 48 bar can make the application invalid regardless of Schedule 3",
      ],
      href: "/visas/appeals-and-review/schedule-3-criteria",
    },
    {
      id: "within28",
      title: "Lodge within 28 days to meet criterion 3001",
      body: "An application validly made within 28 days after the relevant day meets criterion 3001 and avoids the hardest part of the waiver argument. You still need criterion 3004 (or 3003), unless the Department decides not to apply them for compelling reasons.",
      watch: [
        "Confirm the date your last substantive visa ended from VEVO records or grant letters",
        "Criterion 3004 needs factors beyond your control, compelling reasons and substantial compliance with your conditions",
        "If a visa was refused or cancelled since you last entered, check the section 48 bar too",
      ],
      href: "/visas/appeals-and-review/schedule-3-criteria",
    },
    {
      id: "waiver",
      title: "You'd need the compelling-reasons waiver",
      body: "Lodged more than 28 days after the relevant day, a partner application can't meet criterion 3001. Include a written request that the Department not apply criteria 3001, 3003 and 3004 for compelling reasons, with the evidence attached.",
      watch: [
        "Typical factors: Australian citizen children, a long genuine relationship, serious hardship if you had to apply from overseas, and why you lost your visa",
        "A genuine relationship alone isn't enough: the reasons must be compelling",
        "If the application is refused, the ART considers the waiver afresh",
      ],
      href: "/visas/appeals-and-review/schedule-3-criteria",
    },
    {
      id: "fix-day",
      title: "Fix the relevant day first",
      body: "The relevant day is generally the last day your last substantive visa was in effect, or the day it was cancelled. If you entered Australia without a visa, it's the day you entered. Criterion 3001 counts 28 days from that day.",
      watch: [
        "VEVO records or grant letters show when your last substantive visa ended",
        "Note any refusal or cancellation and its date",
      ],
      href: "/visas/appeals-and-review/schedule-3-criteria",
    },
  ],
  footnote:
    "General information only, not legal advice. Schedule 3 depends on your visa history and the visa you apply for, so confirm your dates from VEVO records or grant letters.",
};

export const schedule3CriteriaExplainer: VisaExplainer = {
  slug: "schedule-3-criteria",
  factsAsAt: "12 October 2026",
  oneLiner:
    "Schedule 3 adds extra criteria, such as a 28-day rule, when you apply for some visas in Australia without a substantive visa, and for a partner visa they can be waived for compelling reasons.",
  bigIdeas: [
    {
      title: "Only without a substantive visa",
      body: "It applies if you're unlawful or hold only a bridging visa when you apply, and only for visas that include it.",
      icon: ICON.shieldExclamation,
    },
    {
      title: "The 28-day rule",
      body: "Criterion 3001: apply within 28 days after your last substantive visa ended or was cancelled.",
      icon: ICON.clock,
    },
    {
      title: "A waiver for partners",
      body: "For subclass 820, the Department can decide not to apply 3001, 3003 and 3004 if there are compelling reasons.",
      icon: ICON.heart,
    },
  ],
  heroCard: [
    { label: "Who it affects", value: "Onshore applicants without a substantive visa", icon: ICON.user },
    { label: "Criterion 3001", value: "Apply within 28 days", icon: ICON.clock },
    { label: "Criterion 3002", value: "A 12-month window for some visas", icon: ICON.calendarDays },
    { label: "Criteria 3003 and 3004", value: "Beyond your control, compelling reasons, compliance", icon: ICON.clipboardDocumentCheck },
    { label: "Partner waiver", value: "Possible for compelling reasons", icon: ICON.heart },
    { label: "Fee", value: "No separate charge", icon: ICON.currencyDollar },
  ],
  checkedAgainst: "Home Affairs, the Administrative Review Tribunal and the Migration Act and Regulations",
  actors: [
    {
      id: "you",
      name: "You (the applicant)",
      short: "You",
      icon: ICON.user,
      tone: "green",
      role: "Apply on time if you can, and explain why you don't hold a substantive visa.",
      does: [
        "Fix your [[relevant-day|relevant day]] and lodge within 28 days if you can",
        "Show [[beyond-control|factors beyond your control]] with documents",
        "Show [[substantial-compliance|substantial compliance]] with your visa conditions",
        "Ask for the [[waiver|waiver]] in writing if you're outside 28 days",
      ],
    },
    {
      id: "sponsor",
      name: "Your partner (the sponsor)",
      short: "Your partner",
      icon: ICON.heart,
      tone: "pink",
      role: "Sponsors the partner visa; their circumstances are central to any waiver request.",
      does: [
        "Sponsors the partner visa application",
        "Helps show the length and genuineness of the relationship",
        "Explains the hardship if you had to apply from overseas",
        "Provides evidence about Australian citizen children",
      ],
    },
    {
      id: "homeaffairs",
      name: "Department of Home Affairs",
      short: "Home Affairs",
      icon: ICON.buildingLibrary,
      tone: "blue",
      role: "Decides whether Schedule 3 is met, or whether to waive it for a partner visa.",
      does: [
        "Checks when your visas ended and any refusal or cancellation",
        "Assesses criterion 3003 or 3004 on your evidence",
        "Decides whether compelling reasons justify not applying 3001, 3003 and 3004",
        "May send a [[s57|section 57 letter]] before deciding",
      ],
    },
    {
      id: "tribunal",
      name: "Administrative Review Tribunal (ART)",
      short: "The Tribunal",
      icon: ICON.scale,
      tone: "violet",
      role: "Reviews a Schedule 3 refusal, including the waiver, afresh.",
      does: [
        "Reviews refusals: apply within the time limit in your decision letter",
        "Considers the waiver afresh",
        "Can take into account events after the refusal, such as a child's birth",
      ],
    },
  ],
  flows: [
    {
      from: "you",
      to: "homeaffairs",
      label: "You apply onshore",
      detail: "You lodge in Australia while unlawful or on a bridging visa, so any Schedule 3 criteria in the visa's Schedule 2 clause apply.",
    },
    {
      from: "sponsor",
      to: "homeaffairs",
      label: "Supports the waiver",
      detail: "Your partner's circumstances, including any Australian citizen children, are central to a request not to apply the criteria.",
    },
    {
      from: "homeaffairs",
      to: "you",
      label: "Decides",
      detail: "Home Affairs decides whether you meet [[c3001|3001]], 3003 and [[c3004|3004]], or whether compelling reasons justify not applying them.",
    },
    {
      from: "you",
      to: "tribunal",
      label: "Review if refused",
      detail: "A refusal on Schedule 3 grounds is reviewable by the ART within 28 days. Check the time limit in your decision letter.",
    },
    {
      from: "tribunal",
      to: "you",
      label: "A fresh look",
      detail: "The Tribunal considers the waiver afresh, including things that happened after the refusal, such as the birth of a child.",
    },
  ],
  journeyTitle: "From your last visa to a decision",
  journeyHighlight: "a decision",
  stages: [
    {
      id: "day",
      short: "Relevant day",
      title: "Fix the relevant day",
      who: ["you"],
      description: "Identify the last day your last substantive visa was in effect, or the date it was cancelled.",
      points: [
        "Use [[vevo|VEVO]] records or grant letters",
        "Entered Australia without a visa? The relevant day is the day you entered",
        "[[c3001|Criterion 3001]] counts 28 days from the relevant day",
      ],
      youHold: "The relevant day and the 28-day deadline",
      icon: ICON.calendarDays,
    },
    {
      id: "criteria",
      short: "Criteria",
      title: "Check which criteria your visa requires",
      who: ["you"],
      description: "Read the Schedule 2 clause for the visa you're applying for.",
      points: [
        "Subclass 820: criteria 3001, 3003 and 3004, with a compelling-reasons waiver",
        "Other subclasses may use [[c3002|3002]] (12 months) or [[c3005|3005]]",
        "A refusal or cancellation since you last entered also brings in the [[s48|section 48 bar]]",
      ],
      youHold: "A list of the Schedule 3 criteria that apply to you",
      icon: ICON.listBullet,
    },
    {
      id: "lodge",
      short: "Lodge",
      title: "Lodge within 28 days if you can",
      who: ["you", "homeaffairs"],
      description: "An application lodged within 28 days meets criterion 3001 and avoids the hardest part of the waiver argument.",
      points: [
        "You still need [[c3004|criterion 3004]] (or 3003), unless it's waived",
        "Partner visa (820/801): A$11,710 for the main applicant; additional applicants pay their own charge",
      ],
      youHold: "A valid application and a bridging visa",
      cost: "A$11,710 for a partner visa (main applicant)",
      icon: ICON.paperAirplane,
    },
    {
      id: "evidence",
      short: "Evidence",
      title: "Show beyond-control factors and compelling reasons",
      who: ["you", "sponsor"],
      description:
        "Explain, with documents, why you became unlawful or lost your substantive visa. Then set out the compelling reasons for grant.",
      points: [
        "Medical reports, or evidence of events that stopped you leaving or applying in time",
        "Evidence that an agent, employer or education provider failed to act or misled you",
        "Australian citizen children, relationship length, hardship and ties",
        "[[substantial-compliance|Substantial compliance]] with your last visa's conditions and any bridging visa",
      ],
      youHold: "A submission on each part of 3003 or 3004",
      icon: ICON.documentText,
    },
    {
      id: "waiver",
      short: "Waiver",
      title: "Ask for the waiver in the application",
      who: ["you"],
      description:
        "Lodging a partner application outside the 28 days? Include a written request not to apply criteria 3001, 3003 and 3004, for compelling reasons.",
      points: [
        "Attach the evidence to the request",
        "The reasons must be compelling, not just genuine",
        "Respond to any [[s57|section 57 letter]] within the period given",
      ],
      youHold: "A waiver request on file with the application",
      icon: ICON.pencilSquare,
    },
    {
      id: "decision",
      short: "Decision",
      title: "Home Affairs decides",
      who: ["homeaffairs"],
      description: "The reasons are assessed on the evidence as a whole.",
      points: [
        "Keep complying with your bridging visa conditions while you wait",
        "A visa granted after Schedule 3 was met or waived counts for [[c3005|criterion 3005]] later",
      ],
      youHold: "A decision on your application",
      icon: ICON.scale,
    },
    {
      id: "review",
      short: "Review",
      title: "Seek review if refused",
      who: ["you", "tribunal"],
      description: "A refusal on Schedule 3 grounds is reviewable by the ART within 28 days.",
      points: [
        "Check the time limit in your decision letter",
        "The Tribunal considers the waiver afresh, including later events such as a child's birth",
        "ART fee A$3,727, with a 50% reduction for financial hardship",
        "If it's affirmed, an offshore partner application (subclass 309) remains possible after you leave, subject to any exclusion period",
      ],
      youHold: "An ART application lodged in time",
      cost: "A$3,727 ART fee",
      icon: ICON.arrowPath,
    },
  ],
  check: {
    title: "Does Schedule 3 apply to you?",
    highlight: "Schedule 3",
    ok: {
      title: "Schedule 3 doesn't seem to be a problem",
      body: "On your answers, Schedule 3 either doesn't apply or looks manageable. The visa's other criteria still apply.",
    },
    todo: {
      title: "Schedule 3 applies: prepare carefully",
      body: "Some answers mean extra criteria apply. None of them rules you out on its own, but each needs evidence.",
    },
    stop: {
      title: "Serious hurdles to plan around",
      body: "At least one answer is a significant hurdle. The notes below explain why and what may still be open, such as the waiver or an offshore application.",
    },
    disclaimer:
      "A general self-check, not legal advice. Schedule 3 depends on your visa history, the visa you apply for and all the evidence.",
  },
  quiz: [
    {
      id: "status",
      topic: "Your visa now",
      question: "What visa will you hold when you apply?",
      options: [
        {
          value: "substantive",
          label: "A visa that isn't a bridging visa",
          status: "ok",
          note: "Schedule 3 only applies to applicants without a substantive visa, so it isn't part of this application.",
        },
        {
          value: "bridging",
          label: "Only a bridging visa",
          status: "todo",
          note: "A bridging visa isn't a substantive visa, so Schedule 3 applies if the visa you're applying for includes it.",
        },
        {
          value: "none",
          label: "No visa",
          status: "todo",
          note: "Schedule 3 applies if the visa you're applying for includes it, as subclass 820 does.",
        },
      ],
    },
    {
      id: "visa",
      topic: "The visa",
      question: "Which visa are you applying for in Australia?",
      options: [
        {
          value: "partner",
          label: "A partner visa (820/801)",
          status: "todo",
          note: "Without a substantive visa, subclass 820 requires criteria 3001, 3003 and 3004, unless they're waived for compelling reasons.",
        },
        {
          value: "other",
          label: "Another visa",
          status: "todo",
          note: "Check its Schedule 2 clause: some visas use 3001, some 3002 (12 months), and some 3005.",
        },
      ],
    },
    {
      id: "timing",
      topic: "The 28-day rule",
      question: "When did your last substantive visa end, or get cancelled?",
      help: "That's usually the relevant day. Check VEVO records or your grant letters.",
      options: [
        {
          value: "recent",
          label: "Recently: I can still lodge within 28 days after that day",
          status: "ok",
          note: "Lodging within 28 days after the relevant day meets criterion 3001. Criteria 3003 or 3004 still apply.",
        },
        {
          value: "over",
          label: "More than 28 days ago",
          status: "stop",
          note: "Criterion 3001 can't be met. For a partner visa you'd need the compelling-reasons waiver, supported by strong evidence.",
        },
        {
          value: "unsure",
          label: "I'm not sure",
          status: "todo",
          note: "The relevant day is usually the last day your last substantive visa was in effect, or the day it was cancelled. Confirm it from VEVO records or grant letters.",
        },
      ],
    },
    {
      id: "control",
      topic: "Why you lost your visa",
      question: "Why don't you hold a substantive visa?",
      options: [
        {
          value: "beyond",
          label: "Something beyond my control, such as illness or an agent's failure",
          status: "ok",
          note: "That can support criterion 3004. Prove it with documents, such as medical reports or evidence that an agent failed to act or misled you.",
        },
        {
          value: "choice",
          label: "I chose to stay on, or I let it lapse",
          status: "stop",
          note: "A choice to overstay, or a lapse by you, isn't a factor beyond your control. For a partner visa, the compelling-reasons waiver may be the only route.",
        },
        {
          value: "cancelled",
          label: "My visa was cancelled",
          status: "todo",
          note: "Explain the circumstances with evidence. The day it was cancelled is usually the relevant day for criterion 3001.",
        },
      ],
    },
    {
      id: "compliance",
      topic: "Visa conditions",
      question: "Did you keep to the conditions of your last visa and any bridging visa?",
      options: [
        { value: "yes", label: "Yes", status: "ok", note: "Substantial compliance with conditions is part of criterion 3004. Keep evidence of it." },
        {
          value: "breach",
          label: "There was a breach, such as working without permission",
          status: "todo",
          note: "Address it directly: substantial compliance with your conditions is one of the things criterion 3004 requires.",
        },
      ],
    },
    {
      id: "reasons",
      topic: "Compelling reasons",
      question: "Which best describes your circumstances?",
      options: [
        {
          value: "children",
          label: "We have Australian citizen children",
          status: "ok",
          note: "Australian citizen children are a common factor. Give birth certificates, evidence of your role in their care and the effect of separation.",
        },
        {
          value: "hardship",
          label: "A long relationship, and serious hardship if I applied from overseas",
          status: "ok",
          note: "These are typical factors. Show the relationship's length and genuineness, and the hardship, with evidence.",
        },
        {
          value: "genuine",
          label: "A genuine relationship, but nothing else unusual",
          status: "todo",
          note: "A genuine relationship alone may not be enough: the Department needs reasons that are compelling, not just genuine.",
        },
      ],
    },
    {
      id: "used",
      topic: "Used before?",
      question: "Since you last entered Australia, were you granted a visa after Schedule 3 was met or waived?",
      options: [
        { value: "no", label: "No", status: "ok", note: "Criterion 3005 isn't a concern." },
        {
          value: "yes",
          label: "Yes",
          status: "todo",
          note: "Criterion 3005 may stop you relying on Schedule 3 again until you leave and re-enter. Get advice before you lodge.",
        },
        { value: "unsure", label: "I'm not sure", status: "todo", note: "Check your grant letters and visa history since you last entered." },
      ],
    },
  ],
  myths: [
    {
      myth: "With a genuine relationship, the waiver is automatic.",
      fact: "No. The Department needs reasons that are compelling, not just genuine. Typical factors include Australian citizen children, a long relationship, serious hardship and the circumstances that led to the loss of your visa.",
    },
    {
      myth: "Lodging within 28 days means Schedule 3 is fully met.",
      fact: "It meets criterion 3001 only. You still need 3003 or 3004 (factors beyond your control, compelling reasons and substantial compliance), unless they're waived.",
    },
    {
      myth: "Overstaying counts as a factor beyond my control.",
      fact: "A choice to overstay, or a lapse by you, isn't a factor beyond your control. Illness, events that stopped you leaving, or an agent who failed to act or misled you may be.",
    },
    {
      myth: "Schedule 3 applies to every application made in Australia.",
      fact: "Only where the visa's Schedule 2 clause says so, and only if you don't hold a substantive visa when you apply.",
    },
    {
      myth: "If Home Affairs refuses the waiver, nothing can change.",
      fact: "The ART decides afresh whether there are compelling reasons. It can take into account things that happened after the refusal, such as the birth of a child.",
    },
    {
      myth: "Schedule 3 replaces the section 48 bar.",
      fact: "They're separate. After a refusal or cancellation since you last entered, section 48 decides what you can apply for at all. Schedule 3 then applies on top, where the visa requires it.",
    },
  ],
  glossary: [
    {
      id: "sch3",
      term: "Schedule 3",
      definition: "A schedule to the Migration Regulations with criteria 3001 to 3005, for some visas applied for in Australia without a substantive visa.",
    },
    {
      id: "substantive",
      term: "Substantive visa",
      definition: "Any visa that isn't a bridging visa. Schedule 3 is about applicants who are unlawful or hold only a bridging visa when they apply.",
    },
    {
      id: "relevant-day",
      term: "Relevant day",
      definition: "Generally the last day your last substantive visa was in effect, the day it was cancelled, or the day you entered Australia if you entered without a visa.",
    },
    { id: "c3001", term: "Criterion 3001", definition: "The application must be validly made within 28 days after the relevant day." },
    {
      id: "c3002",
      term: "Criterion 3002",
      definition: "A 12-month version of the timing rule, used by some visas instead of 3001. The visa's Schedule 2 clause says which applies.",
    },
    {
      id: "c3003",
      term: "Criterion 3003",
      definition: "For people who became unlawful before 1 September 1994: factors beyond their control, compelling reasons, substantial compliance, entitlement to the visa at the time, and intention to comply.",
    },
    {
      id: "c3004",
      term: "Criterion 3004",
      definition: "For people who became unlawful on or after 1 September 1994: factors beyond your control, compelling reasons, substantial compliance, entitlement to the visa when your last visa ended, and intention to comply.",
    },
    {
      id: "c3005",
      term: "Criterion 3005",
      definition: "You must not have been granted a visa on the basis of Schedule 3 since you last entered Australia.",
    },
    {
      id: "beyond-control",
      term: "Factors beyond your control",
      definition: "Reasons outside your control for not holding a substantive visa, such as illness or an agent who failed to act. A choice to overstay doesn't count.",
    },
    {
      id: "substantial-compliance",
      term: "Substantial compliance",
      definition: "Having complied substantially with the conditions of your last substantive visa and any later bridging visa. Working without permission on a bridging visa can count against it.",
    },
    {
      id: "waiver",
      term: "Compelling-reasons waiver",
      definition: "For subclass 820, the Department can decide not to apply criteria 3001, 3003 and 3004 if it's satisfied there are compelling reasons.",
    },
    {
      id: "s48",
      term: "Section 48 bar",
      definition: "After a refusal or cancellation since you last entered Australia, it limits you to prescribed visas. Schedule 3 then applies on top where the visa requires it.",
    },
    {
      id: "s57",
      term: "Section 57 letter",
      definition: "A letter giving you particulars of adverse information and inviting your comment before a decision. Respond within the period given.",
    },
    {
      id: "vevo",
      term: "VEVO",
      definition: "The Home Affairs online record of your visas. It shows the date your last substantive visa ended and any bridging visas since.",
    },
  ],
  cta: {
    title: "Applying without a substantive visa?",
    subtitle: "We fix your relevant day, check which Schedule 3 criteria apply and prepare the evidence for any waiver request.",
  },
  finder: schedule3Finder,
};
