import { ICON } from "../icons";
import type { VisaExplainer } from "../types";

// Interactive explainer for the health requirement (PIC 4005 and 4007) and
// health waivers. Every fact matches the page in
// data/visas/appeals-and-review.ts (checked against Home Affairs, the
// Migration Regulations and the ART on 12 October 2026). The panel physician
// and HAP ID definitions were read on the Home Affairs "Arrange your health
// examinations" page on 13 October 2026 (verifiedExtras).

const PAGE = "/visas/appeals-and-review/health-requirement-and-health-waiver";

export const healthRequirementAndHealthWaiverExplainer: VisaExplainer = {
  slug: "health-requirement-and-health-waiver",
  factsAsAt: "12 October 2026",
  oneLiner:
    "Most visa applicants, and often their family, must meet Australia's health requirement. Some visas let Home Affairs waive the cost and services tests; others have no waiver at all.",
  bigIdeas: [
    {
      title: "Three health tests",
      body: "No tuberculosis or public health risk, no significant cost to the community, and no strain on services in short supply.",
      icon: ICON.shieldCheck,
    },
    {
      title: "One fails, all fail",
      body: "If one family member doesn't meet the requirement and no waiver is exercised, the whole application is refused.",
      icon: ICON.userGroup,
    },
    {
      title: "A waiver only on PIC 4007 visas",
      body: "Visas such as partner, child, 186, 482 and 494 allow a waiver of the cost and services tests. PIC 4005 visas don't.",
      icon: ICON.documentCheck,
    },
  ],
  heroCard: [
    { label: "Two versions", value: "PIC 4005 (no waiver) or PIC 4007 (waiver possible)", icon: ICON.scale },
    { label: "Cost threshold", value: "A$86,000 over the assessment period", icon: ICON.currencyDollar },
    { label: "Services in short supply", value: "Organ transplants and dialysis", icon: ICON.exclamationTriangle },
    { label: "Medical opinion", value: "A Medical Officer of the Commonwealth (MOC)", icon: ICON.heart },
    { label: "Who is assessed", value: "You and your family, sometimes even if not migrating", icon: ICON.userGroup },
    { label: "Results valid", value: "12 months from the examinations", icon: ICON.calendarDays },
  ],
  checkedAgainst: "Home Affairs, the Migration Regulations 1994 and the Administrative Review Tribunal",
  actors: [
    {
      id: "you",
      name: "You and your family",
      short: "You",
      icon: ICON.user,
      tone: "green",
      role: "Every applicant, and sometimes family who aren't migrating, goes through the health process.",
      does: [
        "Complete your medical history and get a [[hap-id|HAP ID]]",
        "Attend the examinations with a [[panel|panel physician]]",
        "Declare every known condition",
        "Make a [[waiver|waiver]] submission, if invited",
      ],
    },
    {
      id: "government",
      name: "Department of Home Affairs",
      short: "Home Affairs",
      icon: ICON.buildingLibrary,
      tone: "blue",
      role: "Decides the visa, and whether to exercise a waiver where the visa allows one.",
      does: [
        "Clears cases with no significant condition",
        "Refers others to a [[moc|MOC]]",
        "Invites a waiver submission on [[pic4007|PIC 4007]] visas",
        "Grants or refuses the visa",
      ],
    },
    {
      id: "moc",
      name: "Medical Officer of the Commonwealth",
      short: "MOC",
      icon: ICON.heart,
      tone: "teal",
      role: "Gives the medical opinion, which Home Affairs and the Tribunal must take to be correct on the medical questions.",
      does: [
        "Assesses your results, and may ask for more information or tests",
        "Estimates the costs for a person with the same condition and severity",
        "Compares them with the [[sct|significant cost threshold]]",
        "Advises: meets, meets with an undertaking, or doesn't meet",
      ],
    },
    {
      id: "tribunal",
      name: "Administrative Review Tribunal (ART)",
      short: "The Tribunal",
      icon: ICON.scale,
      tone: "violet",
      role: "Usually reviews refusals of onshore and sponsored applications, but must accept the MOC's medical opinion.",
      does: [
        "Treats the MOC's opinion on medical questions as correct",
        "Reconsiders the waiver afresh on [[pic4007|PIC 4007]] visas",
        "Can decide that the waiver should be exercised",
      ],
    },
  ],
  flows: [
    {
      from: "you",
      to: "government",
      label: "Health examinations",
      detail: "You complete your medical history in ImmiAccount, get a [[hap-id|HAP ID]] and attend the examinations. The clinic sends the results to Home Affairs.",
    },
    {
      from: "government",
      to: "moc",
      label: "Refers to the MOC",
      detail: "Cases with a significant condition go to a [[moc|Medical Officer of the Commonwealth]], who may ask for more information or further examinations.",
    },
    {
      from: "moc",
      to: "government",
      label: "Medical opinion",
      detail: "The MOC advises whether you meet the requirement, meet it with a [[undertaking|health undertaking]], or don't meet it. That opinion is taken to be correct.",
    },
    {
      from: "government",
      to: "you",
      label: "Invites a waiver case",
      detail: "If you don't meet it and your visa uses [[pic4007|PIC 4007]], the processing officer invites a formal health waiver submission.",
    },
    {
      from: "you",
      to: "government",
      label: "Waiver submission",
      detail: "You show the likely costs, how you or your family can reduce them, and the compassionate and compelling circumstances, with evidence.",
    },
    {
      from: "you",
      to: "tribunal",
      label: "ART review if refused",
      detail: "A refusal of an onshore or sponsored application is usually reviewable by the [[art|ART]], which reconsiders the waiver afresh. Check the time limit in your decision letter.",
    },
  ],
  journeyTitle: "From your medical history to a visa decision",
  journeyHighlight: "a visa decision",
  stages: [
    {
      id: "history",
      short: "History",
      title: "Complete your medical history",
      who: ["you"],
      description: "In ImmiAccount, open 'View health assessment', complete the medical history and print the referral letter with your [[hap-id|HAP ID]].",
      points: [
        "Paper applicants get the letter from the processing officer",
        "Declare every known condition",
        "Examinations in the last 12 months may mean you don't repeat them all",
      ],
      youHold: "A HAP ID referral letter for each applicant",
      icon: ICON.clipboardDocumentCheck,
    },
    {
      id: "exams",
      short: "Exams",
      title: "Attend your health examinations",
      who: ["you"],
      description: "Book with a [[panel|panel physician]], or with Bupa Medical Visa Services in Australia. The tests depend on the visa, your age, your country and what you'll do here.",
      points: [
        "A chest x-ray if you're aged 11 or over",
        "Permanent applicants: a tuberculosis test, and possibly HIV and hepatitis B tests",
        "The clinic sends the results to Home Affairs",
      ],
      youHold: "Examination results sent to Home Affairs",
      cost: "Paid to the clinic: varies by country and tests",
      icon: ICON.beaker,
    },
    {
      id: "moc",
      short: "MOC",
      title: "Clearance, or a MOC assessment",
      who: ["government", "moc"],
      description: "Cases with no significant condition are cleared. Others go to a [[moc|Medical Officer of the Commonwealth]], who may ask for more information or tests.",
      points: [
        "Costs are estimated over the [[assessment-period|assessment period]]",
        "Above A$86,000 means the cost test isn't met",
        "A condition likely to need dialysis or a transplant fails the [[short-supply|services]] test",
        "Insurance and savings don't change the MOC's opinion",
      ],
      youHold: "A MOC opinion on the health criteria",
      icon: ICON.documentMagnifyingGlass,
    },
    {
      id: "undertaking",
      short: "Undertaking",
      title: "Sign a health undertaking, if asked",
      who: ["you"],
      description: "For follow-up of conditions such as inactive tuberculosis, you may be asked to sign a [[undertaking|health undertaking]] (Form 815).",
      points: [
        "It's valid for 6 months",
        "Contact Bupa Medical Visa Services within 28 days of arriving",
        "Refusing to sign means the visa isn't granted",
      ],
      youHold: "A signed health undertaking",
      icon: ICON.pencilSquare,
    },
    {
      id: "waiver",
      short: "Waiver",
      title: "Make a waiver submission, if invited",
      who: ["government", "you"],
      description: "If you don't meet the requirement and your visa uses [[pic4007|PIC 4007]], the processing officer asks for a formal submission. You don't apply for a waiver yourself.",
      points: [
        "Show the likely costs and how you or your family can reduce them",
        "Explain the compassionate and compelling circumstances",
        "Include the effect on Australian citizen or permanent resident family",
        "No waiver for active tuberculosis or a danger to public health",
      ],
      youHold: "A health waiver submission with evidence",
      cost: "A$0 to Home Affairs; specialist reports are third-party costs",
      icon: ICON.documentText,
    },
    {
      id: "decision",
      short: "Decision",
      title: "The visa decision",
      who: ["government", "tribunal"],
      description: "If the waiver is exercised, processing continues. If it isn't, or no waiver is available, the visa is refused.",
      points: [
        "An onshore or sponsored refusal is usually reviewable by the [[art|ART]]",
        "The Tribunal must accept the MOC's medical opinion",
        "On PIC 4007 visas it reconsiders the waiver afresh",
        "Check the time limit in your decision letter",
      ],
      youHold: "A visa decision, or an ART application",
      cost: "ART review: A$3,727 (50% reduction for financial hardship)",
      icon: ICON.checkBadge,
    },
  ],
  check: {
    title: "Could the health requirement be a hurdle for you?",
    highlight: "health requirement",
    ok: {
      title: "No health hurdle in your answers",
      body: "Nothing you've told us points to a problem. You still need the examinations your visa requires, and a MOC may review the results.",
    },
    todo: {
      title: "Some health points to plan for",
      body: "None of these rules you out on its own, but each needs planning before or during the application.",
    },
    stop: {
      title: "A health hurdle to plan around",
      body: "At least one answer could stop a grant unless it's resolved or a waiver is exercised. The notes below explain what's possible.",
    },
    disclaimer:
      "A general self-check, not medical or migration advice. A Medical Officer of the Commonwealth gives the medical opinion, and Home Affairs decides the visa.",
  },
  quiz: [
    {
      id: "tb",
      topic: "Tuberculosis",
      question: "Does anyone applying have tuberculosis, now or in the past?",
      options: [
        { value: "no", label: "No", status: "ok", note: "Applicants aged 11 or over still have a chest x-ray." },
        {
          value: "inactive",
          label: "Inactive, or treated in the past",
          status: "todo",
          note: "Inactive tuberculosis may be accepted with a health undertaking (Form 815). You'd contact Bupa Medical Visa Services within 28 days of arriving.",
        },
        {
          value: "active",
          label: "Active tuberculosis now",
          status: "stop",
          note: "No visa until it's treated and a MOC finds you free of it. This part of the requirement can't be waived on any visa.",
        },
      ],
    },
    {
      id: "condition",
      topic: "Health conditions",
      question: "Does anyone in your family have a significant or long-term condition?",
      help: "For example a disability, HIV, hepatitis B, cancer or kidney disease.",
      options: [
        { value: "no", label: "No known conditions", status: "ok", note: "You still need the examinations your visa requires." },
        {
          value: "care",
          label: "Yes, a condition that may need ongoing care",
          status: "todo",
          note: "A MOC estimates the likely cost over the assessment period. Above A$86,000, the cost test isn't met unless a waiver is exercised.",
        },
        {
          value: "short-supply",
          label: "Yes, one likely to need dialysis or an organ transplant",
          status: "stop",
          note: "These are services in short supply, so the condition fails that test. Only a PIC 4007 visa allows a waiver.",
          link: { label: "Is a waiver available?", href: "#finder" },
        },
      ],
    },
    {
      id: "visa",
      topic: "Your visa",
      question: "Does your visa use PIC 4007, which allows a waiver?",
      options: [
        {
          value: "4007",
          label: "Yes: for example a partner, child, 186, 482 or 494 visa",
          status: "ok",
          note: "If someone doesn't meet the cost or services test, Home Affairs may invite a waiver submission.",
        },
        {
          value: "4005",
          label: "No, it uses PIC 4005: for example a 189, 190, 491, 485, 500 or 600 visa",
          status: "todo",
          note: "Fine if everyone meets the requirement. If a family member's condition may cost more than A$86,000, check whether a PIC 4007 visa is open to you before you apply.",
        },
        {
          value: "unsure",
          label: "I'm not sure",
          status: "todo",
          note: "Check the Schedule 2 criteria for your subclass, or use the waiver finder on this page.",
          link: { label: "Open the waiver finder", href: "#finder" },
        },
      ],
    },
    {
      id: "family",
      topic: "Family members",
      question: "Has everyone in your family unit been through the health process?",
      options: [
        { value: "yes", label: "Yes, everyone who was asked", status: "ok", note: "For permanent visas, family members who aren't migrating may also be asked." },
        {
          value: "not-migrating",
          label: "Someone who isn't migrating hasn't been examined",
          status: "todo",
          note: "For permanent and provisional visas they may still need to meet the requirement, unless Home Affairs accepts that requiring it is unreasonable.",
        },
      ],
    },
    {
      id: "disclosure",
      topic: "Medical history",
      question: "Have you declared every known condition in your medical history?",
      options: [
        {
          value: "yes",
          label: "Yes, everything",
          status: "ok",
          note: "That's the safe approach: leaving out a known condition can cause PIC 4020 and section 109 problems.",
        },
        {
          value: "no",
          label: "I left something out",
          status: "stop",
          note: "Not disclosing a known condition can lead to PIC 4020 and section 109 problems. Get advice before you go further.",
          link: { label: "PIC 4020 explained", href: "/visas/appeals-and-review/pic-4020-fraud-and-false-information" },
        },
      ],
    },
    {
      id: "results",
      topic: "Result dates",
      question: "When were your health examinations done?",
      options: [
        {
          value: "recent",
          label: "Within the last 12 months",
          status: "ok",
          note: "Results are valid for 12 months. If your visa isn't decided in that time, you may need new examinations.",
        },
        {
          value: "old",
          label: "More than 12 months ago",
          status: "todo",
          note: "Results are valid for 12 months, so you may need to repeat examinations. Your referral letter lists what's required.",
        },
        {
          value: "none",
          label: "Not done yet",
          status: "todo",
          note: "Complete your medical history in ImmiAccount to get your HAP ID referral letter, then book.",
        },
      ],
    },
    {
      id: "stage",
      topic: "Where you're up to",
      question: "Where are you up to with Home Affairs?",
      options: [
        {
          value: "early",
          label: "Not applied yet, or waiting on results",
          status: "ok",
          note: "Respond quickly to any MOC request for more information or tests, within the time you're given.",
        },
        {
          value: "invited",
          label: "Invited to make a health waiver submission",
          status: "todo",
          note: "Address the likely costs, how you or your family can reduce them, and the compassionate and compelling circumstances, with evidence.",
        },
        {
          value: "refused",
          label: "Refused on health grounds",
          status: "todo",
          note: "An onshore or sponsored refusal is usually reviewable by the ART. Check the time limit in your decision letter.",
          link: { label: "ART review of a visa refusal", href: "/visas/appeals-and-review/art-review-of-visa-refusal" },
        },
      ],
    },
  ],
  myths: [
    {
      myth: "Private health insurance means I pass the health test.",
      fact: "No. The MOC looks only at the medical situation, not insurance or your ability to pay. Those can matter only to a waiver, where one is available.",
    },
    {
      myth: "I can apply for a health waiver with my visa application.",
      fact: "You don't apply for one. If you don't meet the requirement and your visa uses PIC 4007, the processing officer invites a submission. There's no fee.",
    },
    {
      myth: "Only the person migrating has to meet the health requirement.",
      fact: "For permanent and provisional visas, family members who aren't coming may also need to. If one family member fails and no waiver is exercised, the whole application is refused.",
    },
    {
      myth: "The ART can overrule the doctor's opinion.",
      fact: "The Tribunal must treat the MOC's opinion on the medical questions as correct. On a PIC 4007 visa, it reconsiders the waiver afresh and can decide it should be exercised.",
    },
    {
      myth: "Every visa has a health waiver.",
      fact: "Only visas that use PIC 4007, such as partner, child, 186, 482 and 494 visas. Visas that use PIC 4005, such as the 189, 190, 491, 485, 500 and 600, have none.",
    },
    {
      myth: "A waiver can cover active tuberculosis.",
      fact: "No. There's no waiver for active tuberculosis or a danger to public health. It must be treated, and a MOC must find you free of it, before a visa can be granted.",
    },
    {
      myth: "The A$86,000 threshold is a yearly limit.",
      fact: "The MOC compares the estimated cost over the whole assessment period with A$86,000: your period of stay for temporary visas, and usually 5 years for permanent ones.",
    },
    {
      myth: "My health results last until my visa is decided.",
      fact: "Results are valid for 12 months. If your visa isn't decided in that time, you may need new examinations.",
    },
  ],
  glossary: [
    {
      id: "pic4005",
      term: "PIC 4005",
      full: "Public Interest Criterion 4005",
      definition: "The health requirement with no waiver. Visas that use it include the 189, 190, 491, 485, 500 and 600.",
    },
    {
      id: "pic4007",
      term: "PIC 4007",
      full: "Public Interest Criterion 4007",
      definition: "The same health standard as PIC 4005, plus a waiver of the cost and services tests. Visas that use it include partner, child, 186, 482 and 494 visas.",
    },
    {
      id: "sct",
      term: "Significant cost threshold",
      definition: "A$86,000: costs above this mean a condition is a significant cost to the community. Home Affairs set it on 1 July 2024 and reviews it every two years.",
    },
    {
      id: "moc",
      term: "MOC",
      full: "Medical Officer of the Commonwealth",
      definition: "The doctor who assesses your results and advises whether you meet the health requirement. Home Affairs and the Tribunal must take that opinion on the medical questions to be correct.",
    },
    {
      id: "short-supply",
      term: "Services in short supply",
      definition: "Services that a condition could limit Australian citizens' and permanent residents' access to. Home Affairs currently lists organ transplants and dialysis, on advice from the Department of Health, Disability and Ageing.",
    },
    {
      id: "assessment-period",
      term: "Assessment period",
      definition: "The period costs are estimated over. Temporary visas: your period of stay. Permanent and provisional visas: 5 years, or 3 years if you're aged 75 or over. A permanent condition with a predictable course: up to 10 years.",
    },
    {
      id: "undertaking",
      term: "Health undertaking",
      definition: "A signed form (Form 815) agreeing to contact Bupa Medical Visa Services within 28 days of arrival for follow-up, for conditions such as inactive tuberculosis. It's valid for 6 months.",
    },
    {
      id: "hap-id",
      term: "HAP ID",
      definition: "The identifier on your health examination referral letter. You need it to book your health examinations.",
    },
    {
      id: "panel",
      term: "Panel physician",
      definition: "A doctor or radiologist appointed by Home Affairs to do visa health examinations outside Australia, at an approved clinic. In Australia, examinations are arranged with Bupa Medical Visa Services.",
    },
    {
      id: "waiver",
      term: "Health waiver",
      definition: "Home Affairs granting a PIC 4007 visa despite a failed cost or services test. It can do this if satisfied the grant is unlikely to cause undue cost to the community or undue prejudice to access to services.",
    },
    {
      id: "one-fails-all",
      term: "One fails, all fail",
      definition: "If one family member doesn't meet the health requirement and no waiver is exercised, the whole application is refused.",
    },
    {
      id: "tb",
      term: "Tuberculosis (TB)",
      definition: "Checked by chest x-ray for applicants aged 11 or over. Active TB must be treated before a visa can be granted; inactive TB may be accepted with a health undertaking.",
    },
    {
      id: "schedule-2",
      term: "Schedule 2 criteria",
      definition: "The criteria for each visa subclass in the Migration Regulations. They say whether the visa uses PIC 4005 or PIC 4007.",
    },
    {
      id: "art",
      term: "ART",
      full: "Administrative Review Tribunal",
      definition: "Usually reviews refusals of onshore and sponsored applications. It must accept the MOC's medical opinion, but reconsiders any waiver afresh.",
    },
  ],
  verifiedExtras: [
    {
      fact: "A panel physician is a doctor or radiologist appointed by the Department to do health examinations outside Australia at an approved clinic. In Australia, health examinations are arranged with the Department's migration medical services provider, Bupa Medical Visa Services.",
      source: "https://immi.homeaffairs.gov.au/help-support/meeting-our-requirements/health/arrange-your-health-examinations",
    },
    {
      fact: "The HAP ID is an identifier on the health examination referral letter; you need it to make an appointment for your health examinations.",
      source: "https://immi.homeaffairs.gov.au/help-support/meeting-our-requirements/health/arrange-your-health-examinations",
    },
  ],
  cta: {
    title: "Worried about a health condition and your visa?",
    subtitle: "We check which health criterion your visa uses, explain honestly where you stand, and help you prepare a waiver submission if Home Affairs invites one.",
  },
  finder: {
    id: "health-waiver-finder",
    navLabel: "Waiver finder",
    eyebrow: "Health waiver finder",
    title: "Is a health waiver available for your visa?",
    highlight: "health waiver",
    subtitle: "Up to three one-tap questions. See which health criterion your visa uses and whether a waiver can be considered.",
    start: "concern",
    questions: [
      {
        id: "concern",
        question: "Which part of the health requirement is the concern?",
        options: [
          { label: "Tuberculosis, or another risk to public health", next: "public-health" },
          { label: "A condition that could be costly, or need dialysis or a transplant", next: "child" },
          { label: "Nothing specific yet: I'm planning ahead", next: "child" },
        ],
      },
      {
        id: "child",
        question: "Is the person with the condition a child under 18, born in Australia and ordinarily resident here?",
        help: "The age that counts is the child's age at the time of the decision.",
        options: [
          { label: "Yes", next: "child-born-here" },
          { label: "No, or there's no specific person yet", next: "visa" },
        ],
      },
      {
        id: "visa",
        question: "Which visa is the application for?",
        options: [
          { label: "Partner visa (820/801 or 309/100)", next: "waiver-4007" },
          { label: "Child visa (101/802)", next: "waiver-4007" },
          { label: "Employer sponsored: 186, 482 or 494", next: "waiver-4007" },
          { label: "Skilled points-tested: 189, 190 or 491", next: "no-waiver-4005" },
          { label: "Temporary Graduate (485), Student (500) or Visitor (600)", next: "no-waiver-4005" },
          { label: "Another visa", next: "check-criteria" },
        ],
      },
    ],
    outcomes: [
      {
        id: "public-health",
        title: "No waiver for public health risks",
        body: "Neither PIC 4005 nor PIC 4007 lets Home Affairs waive the tuberculosis and public health tests. Active tuberculosis means no visa until it's treated and a Medical Officer of the Commonwealth finds you free of it. Inactive tuberculosis may be accepted with a health undertaking.",
        watch: [
          "A [[undertaking|health undertaking]] (Form 815) is valid for 6 months",
          "You contact Bupa Medical Visa Services within 28 days of arriving",
          "Refusing to sign an undertaking means the visa isn't granted",
        ],
        href: PAGE,
        tone: "stop",
      },
      {
        id: "child-born-here",
        title: "The rule for children born in Australia",
        body: "This covers a child who is under 18 at the time of decision, was born in Australia and is ordinarily resident here. The child may be granted the visa despite not meeting the health requirement. You don't need to apply for special consideration, but a full Australian birth certificate is required.",
        watch: ["The child must still be under 18 when the visa is decided", "Keep the child's full Australian birth certificate ready"],
        href: PAGE,
        tone: "match",
      },
      {
        id: "waiver-4007",
        title: "A health waiver may be available (PIC 4007)",
        body: "Your visa uses PIC 4007. If someone doesn't meet the cost or services test, Home Affairs may waive it. It must be satisfied the grant is unlikely to cause undue cost to the community or undue prejudice to access to services. You don't apply: the processing officer invites a submission.",
        watch: [
          "The [[moc|MOC]]'s medical opinion is taken to be correct: the argument is about the waiver",
          "Show how you or your family can reduce the cost and reliance on services",
          "Include compassionate and compelling circumstances, such as the effect on Australian family",
          "No waiver for active tuberculosis or a danger to public health",
        ],
        href: PAGE,
        tone: "match",
      },
      {
        id: "no-waiver-4005",
        title: "No waiver on this visa (PIC 4005)",
        body: "Your visa uses PIC 4005, which has no health waiver. If anyone fails the requirement, the application is refused unless the rule for children born in Australia applies. If a family member's condition may cost more than A$86,000, check whether a PIC 4007 visa is open to you before you apply.",
        watch: [
          "For permanent visas, family members who aren't migrating may be assessed too",
          "Insurance or savings don't change the [[moc|MOC]]'s opinion",
        ],
        href: PAGE,
        tone: "stop",
      },
      {
        id: "check-criteria",
        title: "Check your visa's criteria",
        body: "Each visa's Schedule 2 criteria say whether it uses PIC 4005, with no waiver, or PIC 4007, where a waiver can be considered. For a visa not listed here, check the criteria for your subclass, or ask us before you apply.",
        href: PAGE,
      },
    ],
    footnote:
      "Examples from Home Affairs and the Migration Regulations, not a full list: check the Schedule 2 criteria for your subclass. A MOC gives the medical opinion; Home Affairs decides any waiver.",
  },
};
