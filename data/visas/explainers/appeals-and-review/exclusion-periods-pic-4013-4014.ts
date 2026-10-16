import { ICON } from "../icons";
import type { VisaExplainer } from "../types";

// Interactive explainer for exclusion periods (PIC 4013 and 4014), with the
// related PIC 4004 and Special Return Criteria 5001 and 5002. Every fact
// matches the page in data/visas/appeals-and-review.ts (checked against Home
// Affairs, the Migration Regulations and the Migration Act on 12 October
// 2026). The finder states each period exactly as the page does and never
// works out a date.

const PAGE = "/visas/appeals-and-review/exclusion-periods-pic-4013-4014";
const CHARACTER = "/visas/appeals-and-review/character-test-section-501";

const EXCEPTION =
  "The exception: compelling circumstances affecting Australia's interests, or compassionate or compelling circumstances affecting an Australian citizen, permanent resident or eligible New Zealand citizen";

export const exclusionPeriodsPic40134014Explainer: VisaExplainer = {
  slug: "exclusion-periods-pic-4013-4014",
  factsAsAt: "12 October 2026",
  oneLiner:
    "After a visa cancellation, or after leaving Australia more than 28 days after your visa ended, further visas may be refused for 3 years. Compelling circumstances can still justify a grant.",
  bigIdeas: [
    {
      title: "Two 3-year risk factors",
      body: "PIC 4013 follows a visa cancellation. PIC 4014 follows leaving Australia after more than 28 days without a valid visa.",
      icon: ICON.clock,
    },
    {
      title: "An exception exists",
      body: "Within the 3 years, a visa can still be granted if compelling or compassionate circumstances justify it.",
      icon: ICON.heart,
    },
    {
      title: "Explain it in writing",
      body: "Home Affairs says failing to explain in writing why the ban should be set aside results in refusal.",
      icon: ICON.pencilSquare,
    },
  ],
  heroCard: [
    { label: "After a cancellation", value: "PIC 4013: 3 years from the cancellation", icon: ICON.xCircle },
    { label: "After leaving unlawfully", value: "PIC 4014: 3 years from your departure", icon: ICON.paperAirplane },
    { label: "Overstay trigger", value: "More than 28 days without a valid visa before leaving", icon: ICON.calendarDays },
    { label: "Exception", value: "Compelling or compassionate circumstances", icon: ICON.heart },
    { label: "Section 501", value: "Permanent exclusion once you leave, unless revoked", icon: ICON.noSymbol },
    { label: "Debts", value: "Removal or detention debts must be paid or arranged", icon: ICON.banknotes },
  ],
  checkedAgainst: "Home Affairs, the Migration Regulations 1994 and the Migration Act 1958",
  actors: [
    {
      id: "you",
      name: "You (the applicant)",
      short: "You",
      icon: ICON.user,
      tone: "green",
      role: "You apply for a new visa and, if a ban applies, explain in writing why it should be set aside.",
      does: [
        "Work out which [[risk-factor|risk factor]] applies and when it started",
        "Pay or arrange any debt to the Commonwealth ([[pic4004|PIC 4004]])",
        "Explain the circumstances in writing, with evidence",
        "Meet every other criterion, including health and character",
      ],
    },
    {
      id: "government",
      name: "Department of Home Affairs",
      short: "Home Affairs",
      icon: ICON.buildingLibrary,
      tone: "blue",
      role: "Tells you which exclusion period applies after a cancellation, and decides whether to set a ban aside.",
      does: [
        "States in writing which [[exclusion-period|exclusion period]] applies when it cancels a visa",
        "Considers your immigration history",
        "Decides whether the circumstances justify the grant",
        "Refuses if the written explanation isn't provided",
      ],
    },
    {
      id: "family",
      name: "Your Australian family",
      short: "Family",
      icon: ICON.userGroup,
      tone: "pink",
      role: "Australian citizens, permanent residents or eligible New Zealand citizens whose interests can support [[exception|the exception]].",
      does: [
        "May be sponsoring the partner or child who is affected",
        "Give evidence of how a refusal would affect them",
        "Their interests can be the basis of the exception",
      ],
    },
  ],
  flows: [
    {
      from: "government",
      to: "you",
      label: "Cancellation notice",
      detail: "When Home Affairs cancels a visa, it tells you in writing what [[exclusion-period|exclusion period]] applies.",
    },
    {
      from: "you",
      to: "government",
      label: "Debt paid or arranged",
      detail: "Removal and detention costs are debts to the Commonwealth. You pay them, or make an arrangement, so [[pic4004|PIC 4004]] is met.",
    },
    {
      from: "family",
      to: "you",
      label: "Evidence of impact",
      detail: "Australian citizens, permanent residents or eligible New Zealand citizens affected by a refusal give evidence of the compassionate or compelling circumstances.",
    },
    {
      from: "you",
      to: "government",
      label: "Application + reasons",
      detail: "You lodge the visa application with a written explanation of why the ban should be set aside, and evidence.",
    },
    {
      from: "government",
      to: "you",
      label: "Decision",
      detail: "Home Affairs decides whether the circumstances justify the grant, and whether you meet the visa's other criteria, including health and character.",
    },
  ],
  journeyTitle: "From an exclusion period to a new application",
  journeyHighlight: "a new application",
  stages: [
    {
      id: "identify",
      short: "Identify",
      title: "Work out which risk factor applies",
      who: ["you"],
      description: "Check whether your visa was cancelled ([[pic4013|PIC 4013]]) or you left after more than 28 days without a valid visa ([[pic4014|PIC 4014]]).",
      points: [
        "Note the date the 3 years started",
        "Your cancellation notice states the exclusion period",
        "Unsure? Contact the nearest immigration office before applying",
        "After a [[s501|section 501]] decision, leaving means a permanent exclusion, not 3 years",
      ],
      youHold: "The criterion that applies, and the date its 3 years started",
      icon: ICON.magnifyingGlass,
    },
    {
      id: "timing",
      short: "Timing",
      title: "Decide whether to wait or apply now",
      who: ["you"],
      description: "After 3 years the risk factor no longer applies, though your history is still considered. Within the 3 years you need [[exception|the exception]].",
      points: [
        "PIC 4013 and 4014 are criteria for most temporary visas",
        "You can still apply for a temporary visa during a ban and ask for it to be set aside",
        "For permanent visas, your immigration history is considered when the application is decided",
      ],
      youHold: "A decision on timing",
      icon: ICON.clock,
    },
    {
      id: "debts",
      short: "Debts",
      title: "Pay or arrange any Commonwealth debt",
      who: ["you", "government"],
      description: "Removal and detention costs are debts to the Commonwealth. Most visas can't be granted while one is outstanding, unless payment arrangements are in place.",
      points: [
        "This is [[pic4004|PIC 4004]], separate from the exclusion periods",
        "It applies whatever the position under PIC 4013 or 4014",
        "Keep evidence of payment or of the arrangement",
      ],
      youHold: "Evidence that PIC 4004 is met",
      icon: ICON.banknotes,
    },
    {
      id: "explain",
      short: "Explain",
      title: "Prepare your written explanation",
      who: ["you", "family"],
      description: "Set out the compassionate or compelling circumstances, focusing on the Australian citizens, permanent residents or eligible New Zealand citizens affected, or on Australia's interests.",
      points: [
        "Evidence of the Australian family members affected and their circumstances",
        "Medical, financial or other evidence of hardship if the visa is refused",
        "How the overstay or cancellation came about, and what has changed",
      ],
      youHold: "A written explanation, with evidence for the exception",
      icon: ICON.pencilSquare,
    },
    {
      id: "lodge",
      short: "Lodge",
      title: "Lodge the visa with your explanation",
      who: ["you", "government"],
      description: "Give the explanation when you lodge, or before a decision is made. Home Affairs says failing to provide it results in refusal.",
      points: [
        "You must still meet every other criterion, including health and character",
        "There's no separate charge to ask for the ban to be set aside",
        "A grant under the exception doesn't remove the risk factor for other applications made within the 3 years",
      ],
      youHold: "A complete application that addresses the exclusion period",
      cost: "The visa charge only (Visitor Tourist stream, from overseas: A$250)",
      icon: ICON.paperAirplane,
    },
  ],
  check: {
    title: "Does an exclusion period affect your next visa?",
    highlight: "exclusion period",
    ok: {
      title: "Nothing here stops an application",
      body: "Your answers don't show a barrier you haven't planned for. Each visa still has its own criteria, and your immigration history can be considered.",
    },
    todo: {
      title: "Some things to deal with first",
      body: "None of these stops an application on its own, but each needs attention before you lodge.",
    },
    stop: {
      title: "An exclusion may stand in the way",
      body: "At least one answer is a barrier that a normal application can't get past. The notes below explain why, and what may still be possible.",
    },
    disclaimer:
      "A general self-check, not advice or a prediction. Your cancellation notice and your immigration record decide which exclusion period applies.",
  },
  quiz: [
    {
      id: "character",
      topic: "Section 501",
      question: "Has a visa of yours ever been refused or cancelled under section 501 (character)?",
      options: [
        { value: "no", label: "No", status: "ok", note: "Then the section 501 exclusion doesn't apply to you." },
        {
          value: "left",
          label: "Yes, and I've since left Australia",
          status: "stop",
          note: "You can't meet Special Return Criterion 5001, which most visas require, unless the decision is revoked or the Minister grants a permanent visa. Get advice.",
          link: { label: "Character test (section 501)", href: CHARACTER },
        },
        {
          value: "here",
          label: "Yes, and I'm still in Australia",
          status: "stop",
          note: "If you leave, Special Return Criterion 5001 can't be met unless the decision is revoked or the Minister grants a permanent visa. Get advice before you do anything.",
          link: { label: "Character test (section 501)", href: CHARACTER },
        },
      ],
    },
    {
      id: "cancelled",
      topic: "Visa cancellation",
      question: "Has a visa of yours been cancelled in the last 3 years?",
      help: "Leave out section 501 (character) decisions, which work differently.",
      options: [
        { value: "no", label: "No", status: "ok", note: "Then PIC 4013 doesn't affect you." },
        {
          value: "known",
          label: "Yes, under section 109, 116, 128 or 140",
          status: "todo",
          note: "PIC 4013 affects applications made within 3 years after the cancellation. For a temporary visa, explain in writing why the ban should be set aside.",
        },
        {
          value: "unknown",
          label: "Yes, under another power, or I'm not sure which",
          status: "todo",
          note: "Check your cancellation notice: Home Affairs states it tells you in writing what exclusion period applies. If you're unsure, contact the nearest immigration office.",
        },
      ],
    },
    {
      id: "overstay",
      topic: "Leaving unlawfully",
      question: "Have you left Australia after being without a valid visa?",
      options: [
        { value: "no", label: "No", status: "ok", note: "Then PIC 4014 doesn't affect you." },
        {
          value: "short",
          label: "Yes, within 28 days (or on a bridging visa obtained within that time)",
          status: "ok",
          note: "Home Affairs states that leaving within 28 days, or on a bridging visa obtained within that time, generally avoids the PIC 4014 risk factor.",
        },
        {
          value: "long-recent",
          label: "Yes, after more than 28 days, and less than 3 years ago",
          status: "todo",
          note: "PIC 4014 affects applications made within 3 years after that departure. For a temporary visa, explain in writing why the ban should be set aside.",
        },
        {
          value: "long-past",
          label: "Yes, after more than 28 days, but more than 3 years ago",
          status: "ok",
          note: "After 3 years the risk factor no longer applies, though your history can still be considered.",
        },
      ],
    },
    {
      id: "removed",
      topic: "Removal",
      question: "Were you removed from Australia?",
      options: [
        { value: "no", label: "No", status: "ok", note: "Then Special Return Criterion 5002, which is about removal, doesn't apply." },
        {
          value: "yes",
          label: "Yes",
          status: "todo",
          note: "Special Return Criterion 5002 generally requires 12 months to have passed since removal, unless there are compelling circumstances. Removal costs are also a debt under PIC 4004.",
        },
      ],
    },
    {
      id: "debt",
      topic: "Debts",
      question: "Do you owe the Commonwealth for detention or removal costs?",
      options: [
        { value: "no", label: "No", status: "ok", note: "Then PIC 4004 isn't a problem on this point." },
        { value: "arranged", label: "Yes, but I have a payment arrangement", status: "ok", note: "Keep evidence of the arrangement for every application." },
        {
          value: "unpaid",
          label: "Yes, and it's unpaid",
          status: "stop",
          note: "Under PIC 4004 most visas can't be granted while a debt is outstanding, unless payment arrangements have been made, whatever the exclusion period.",
        },
      ],
    },
    {
      id: "circumstances",
      topic: "The exception",
      question: "If a 3-year ban applies, what could justify a grant within that time?",
      options: [
        { value: "none-needed", label: "No ban applies to me", status: "ok", note: "Then you don't need the exception. Your history can still be considered." },
        {
          value: "family",
          label: "An Australian citizen, permanent resident or eligible New Zealand citizen is affected",
          status: "ok",
          note: "Compassionate or compelling circumstances affecting them can justify a grant. Show the effect on them with evidence.",
        },
        {
          value: "australia",
          label: "The grant would serve Australia's interests",
          status: "ok",
          note: "Compelling circumstances affecting Australia's interests can justify a grant, such as an employer's need where relevant. Give evidence.",
        },
        {
          value: "neither",
          label: "Neither of these",
          status: "stop",
          note: "Within the 3 years, the criterion can be met only through the exception. Once the 3 years have passed, the risk factor no longer applies.",
        },
      ],
    },
    {
      id: "explanation",
      topic: "Written explanation",
      question: "Will you explain the circumstances in writing with your application?",
      options: [
        {
          value: "yes",
          label: "Yes, when I lodge, with evidence",
          status: "ok",
          note: "That's what Home Affairs asks for: an explanation with the application, or before a decision is made. You must still meet the visa's other criteria.",
        },
        {
          value: "wait",
          label: "I'll wait to see if Home Affairs asks",
          status: "stop",
          note: "Don't wait. Home Affairs states that failing to provide the explanation results in refusal.",
        },
        { value: "na", label: "No ban applies to me", status: "ok", note: "Then no explanation about a ban is needed." },
      ],
    },
  ],
  myths: [
    {
      myth: "Any overstay at all means an automatic 3-year ban.",
      fact: "Not generally. Home Affairs states the ban can apply where you left after not holding a valid visa for more than 28 days. Leaving within 28 days, or on a bridging visa obtained within that time, generally avoids it.",
    },
    {
      myth: "During a ban I can't apply for any visa.",
      fact: "You can still apply for a temporary visa and ask, in writing, for the ban to be set aside. For permanent visas, your immigration history is considered when the application is decided.",
    },
    {
      myth: "After 3 years, my history is wiped clean.",
      fact: "After 3 years the risk factor no longer applies, but your history is still considered and can affect genuineness assessments for temporary visas.",
    },
    {
      myth: "Home Affairs will ask me about the ban before it decides.",
      fact: "Don't count on it. Home Affairs states that failing to explain in writing why the ban should be set aside results in refusal. Explain it when you lodge, or before a decision.",
    },
    {
      myth: "A section 501 cancellation is just another 3-year ban.",
      fact: "No. Once you've left Australia after a section 501 refusal or cancellation, you can't meet Special Return Criterion 5001. That changes only if the decision is revoked or the Minister grants a permanent visa.",
    },
    {
      myth: "A visa granted under the exception clears the ban.",
      fact: "No. The risk factor still exists for other applications made within the 3 years. Keep your evidence for later applications.",
    },
    {
      myth: "A removal debt doesn't matter once the ban has ended.",
      fact: "It does. Under PIC 4004 most visas can't be granted while a debt to the Commonwealth is outstanding, unless payment arrangements have been made.",
    },
    {
      myth: "My family member's cancellation won't affect them later.",
      fact: "A family member whose visa was cancelled under section 140 has their own 3-year PIC 4013 risk factor.",
    },
  ],
  glossary: [
    {
      id: "exclusion-period",
      term: "Exclusion period",
      full: "Re-entry ban",
      definition: "A set time during which a person may be refused further visas. Home Affairs calls it a re-entry ban. PIC 4013 and 4014 create 3-year periods.",
    },
    {
      id: "risk-factor",
      term: "Risk factor",
      definition: "The event that triggers PIC 4013 or 4014: a cancellation, or leaving Australia as an unlawful non-citizen. Applications made within 3 years after it are affected.",
    },
    {
      id: "pic4013",
      term: "PIC 4013",
      full: "Public Interest Criterion 4013",
      definition: "Affects applications made within 3 years after a visa you held was cancelled under section 109, 116, 128 or 140, and some other powers.",
    },
    {
      id: "pic4014",
      term: "PIC 4014",
      full: "Public Interest Criterion 4014",
      definition: "Affects applications made within 3 years after you last left Australia as an unlawful non-citizen. Leaving on a Bridging visa C, D or E granted after you became unlawful counts too.",
    },
    {
      id: "pic4004",
      term: "PIC 4004",
      full: "Public Interest Criterion 4004",
      definition: "Most visas require that you have no outstanding debt to the Commonwealth, such as detention or removal costs, unless arrangements for payment have been made.",
    },
    {
      id: "exception",
      term: "Compelling circumstances exception",
      definition: "Within the 3 years, a visa can still be granted if the circumstances justify it. They must be compelling circumstances affecting Australia's interests, or compassionate or compelling circumstances affecting an Australian citizen, permanent resident or eligible New Zealand citizen.",
    },
    {
      id: "unlawful",
      term: "Unlawful non-citizen",
      definition: "A non-citizen in Australia without a valid visa. People who stay unlawfully can be detained, removed and billed for the cost of removal.",
    },
    {
      id: "bridging-cde",
      term: "Bridging visa C, D or E",
      definition: "Bridging visas for people without a substantive visa. For example, a Bridging visa E is for people who are unlawful. Leaving on one granted after you became unlawful counts under PIC 4014.",
    },
    {
      id: "src5001",
      term: "Special Return Criterion 5001",
      definition: "A criterion most visas require. A person refused or cancelled under section 501 who has left Australia can't meet it. That changes only if the decision is revoked or the Minister grants a permanent visa.",
    },
    {
      id: "src5002",
      term: "Special Return Criterion 5002",
      definition: "Applies to people removed from Australia. It generally requires 12 months to have passed since removal, unless there are compelling circumstances.",
    },
    {
      id: "s116",
      term: "Section 116",
      definition: "The general cancellation power. Grounds include breach of a condition, risk to the community, false information or no longer being a genuine student.",
    },
    {
      id: "s140",
      term: "Section 140",
      definition: "Cancels the visas of family members granted because of your visa when yours is cancelled. Each of them then has their own PIC 4013 risk factor.",
    },
    {
      id: "s501",
      term: "Section 501",
      definition: "The character power. After a refusal or cancellation under it, leaving Australia means a permanent exclusion unless the decision is revoked or the Minister grants a permanent visa.",
    },
    {
      id: "vevo",
      term: "VEVO",
      full: "Visa Entitlement Verification Online",
      definition: "The Home Affairs online service that shows which visa is in effect and its conditions. Your departure and visa records help confirm which period applies.",
    },
  ],
  verifiedExtras: [
    {
      fact: "Home Affairs: it is unlawful to stay in Australia without a valid visa. If you can't get a new visa you must leave; if you don't, Home Affairs can detain you, remove you and bill you for the cost of removal. If you leave Australia as a person who did not hold a valid visa for more than 28 days, the Department could refuse to grant you another visa for up to 3 years, except in limited circumstances.",
      source: "https://immi.homeaffairs.gov.au/visas/visa-about-to-expire/if-you-dont-have-a-valid-visa",
    },
    {
      fact: "Bridging visa C: you did not hold a substantive visa when you applied. Bridging visa E: a short-term visa for people who are unlawful, or who hold a BVE or BVD. A substantive visa is any visa other than a bridging, criminal justice or enforcement visa.",
      source: "/visas/other-visas/bridging-visas-a-b-c-e",
    },
    {
      fact: "VEVO (Visa Entitlement Verification Online) shows which visa is in effect, its conditions and any date by which you must leave.",
      source: "/visas/other-visas/bridging-visas-a-b-c-e",
    },
    {
      fact: "Visas of family members granted because of your visa are cancelled with yours under section 140.",
      source: "/visas/appeals-and-review/visa-cancellation-and-notice-of-intention",
    },
  ],
  cta: {
    title: "Want to know where you stand?",
    subtitle: "We check your notice and immigration history, tell you honestly whether an exclusion period applies, and help you explain compelling circumstances properly.",
  },
  finder: {
    id: "exclusion-finder",
    navLabel: "Which period?",
    eyebrow: "Exclusion period finder",
    title: "Which exclusion period might apply?",
    highlight: "exclusion period",
    subtitle: "Pick what happened. The result gives the period exactly as the rules state it, and what can be done about it. It never works out a date for you.",
    start: "what",
    questions: [
      {
        id: "what",
        question: "What happened?",
        options: [
          { label: "My visa was cancelled", next: "power" },
          { label: "I stayed without a valid visa, then left Australia", next: "overstay" },
          { label: "I was removed from Australia", next: "removed" },
          { label: "A visa was refused or cancelled under section 501 (character)", next: "left-501" },
          { label: "I'm not sure", next: "check-notice" },
        ],
      },
      {
        id: "power",
        question: "Which power was your visa cancelled under?",
        help: "Your cancellation notice names the power and states the exclusion period that applies.",
        options: [
          {
            label: "Section 109, 116, 128 or 140",
            hint: "Incorrect information, general grounds such as a breached condition, cancellation while overseas, or as a family member",
            next: "pic4013",
          },
          { label: "Another power, or I don't know", next: "check-notice" },
        ],
      },
      {
        id: "overstay",
        question: "How long were you without a valid visa before you left?",
        options: [
          { label: "28 days or less, or I left on a bridging visa obtained within that time", next: "within-28" },
          { label: "More than 28 days", next: "pic4014" },
        ],
      },
      {
        id: "left-501",
        question: "Have you left Australia since the section 501 decision?",
        options: [
          { label: "Yes", next: "src5001" },
          { label: "No, I'm still in Australia", next: "character-onshore" },
        ],
      },
    ],
    outcomes: [
      {
        id: "pic4013",
        title: "PIC 4013: 3 years after the cancellation",
        body: "PIC 4013 is a criterion for most temporary visas. It affects applications made within 3 years after a cancellation under section 109, 116, 128 or 140. Your cancellation notice states the exclusion period that applies. Within the 3 years, a visa can still be granted under the exception.",
        watch: [
          EXCEPTION,
          "Explain it in writing with the application: Home Affairs says failing to do so results in refusal",
          "For permanent visas, Home Affairs considers your immigration history when it decides the application",
          "Any removal or detention debt must be paid or arranged ([[pic4004|PIC 4004]])",
        ],
        href: PAGE,
        tone: "match",
      },
      {
        id: "pic4014",
        title: "PIC 4014: 3 years after you left",
        body: "PIC 4014 affects applications made within 3 years after you last left Australia as an unlawful non-citizen. Leaving on a Bridging visa C, D or E granted after you became unlawful counts too. Home Affairs states this can apply where you left after not holding a valid visa for more than 28 days.",
        watch: [
          EXCEPTION,
          "Explain it in writing with the application: Home Affairs says failing to do so results in refusal",
          "For permanent visas, Home Affairs considers your immigration history when it decides the application",
          "Any removal or detention debt must be paid or arranged ([[pic4004|PIC 4004]])",
        ],
        href: PAGE,
        tone: "match",
      },
      {
        id: "within-28",
        title: "PIC 4014 generally doesn't apply",
        body: "Home Affairs states the ban can apply where you left after not holding a valid visa for more than 28 days. Leaving within 28 days, or on a bridging visa obtained within that time, generally avoids the PIC 4014 risk factor.",
        watch: ["Your immigration history can still be considered", "Any removal or detention debt must still be paid or arranged"],
        href: PAGE,
        tone: "match",
      },
      {
        id: "removed",
        title: "Removed: 12 months, plus any removal debt",
        body: "A person removed from Australia must also satisfy Special Return Criterion 5002. It generally requires 12 months to have passed since removal, unless there are compelling circumstances. Removal costs are a debt to the Commonwealth, and most visas can't be granted until it's paid or arranged (PIC 4004).",
        watch: [
          "If you were an unlawful non-citizen when you left, PIC 4014's 3 years after departure can apply too",
          "After a section 501 decision, Special Return Criterion 5001 can't be met unless the decision is revoked or the Minister grants a permanent visa",
        ],
        href: PAGE,
      },
      {
        id: "src5001",
        title: "Section 501: a permanent exclusion",
        body: "Most visas require Special Return Criterion 5001. A person whose visa was refused or cancelled under section 501, and who has left Australia, can't meet it. That stays the case unless the decision is revoked or the Minister grants a permanent visa.",
        watch: ["This is separate from the 3-year periods under PIC 4013 and 4014"],
        href: CHARACTER,
        tone: "stop",
      },
      {
        id: "character-onshore",
        title: "Section 501: a permanent exclusion if you leave",
        body: "If you leave Australia after a section 501 refusal or cancellation, you can't meet Special Return Criterion 5001. That changes only if the decision is revoked or the Minister grants a permanent visa. Review and revocation are explained in the character test guide.",
        href: CHARACTER,
        tone: "stop",
      },
      {
        id: "check-notice",
        title: "Check your cancellation notice",
        body: "Home Affairs states that if it cancels your visa, it tells you in writing what exclusion period applies. PIC 4013 covers cancellations under sections 109, 116, 128 and 140 and some others. If you're unsure, contact the nearest immigration office before applying for a new visa.",
        href: PAGE,
      },
    ],
    footnote:
      "Periods as stated in the Migration Regulations and by Home Affairs. This isn't a date calculator: your notice and your immigration record decide which period applies and when it started.",
  },
};
