import type { VisaExplainer } from "../types";
import { ICON } from "../icons";
import { parentFinder } from "./parent-finder";

// Interactive explainer for the balance of family test guide. Every fact
// matches data/visas/family-parent.ts (checked against Home Affairs and the
// Migration Regulations on 12 October 2026). The PIC 4020 definition comes
// from the library's PIC 4020 page (see verifiedExtras).

export const balanceOfFamilyTestExplainer: VisaExplainer = {
  slug: "balance-of-family-test",
  factsAsAt: "12 October 2026",
  oneLiner:
    "The test most parent visas use to measure your family's links to Australia: you pass if at least half of your children live here permanently, or if more live here than in any other single country.",
  bigIdeas: [
    { title: "Count every child", body: "All children and step-children of you and your partner count, including adopted children. Only a few are left out.", icon: ICON.users },
    { title: "Two ways to pass", body: "At least half are eligible children, or there are more eligible children than in any other single country.", icon: ICON.scale },
    { title: "No waiver, ever", body: "Home Affairs won't waive it, even in compelling or exceptional circumstances. Get the count right first.", icon: ICON.noSymbol },
  ],
  heroCard: [
    { label: "Applies to", value: "Subclasses 103, 143, 173, 804, 864 and 884", icon: ICON.documentText },
    { label: "First way to pass", value: "At least half your children are eligible", icon: ICON.checkBadge },
    { label: "Second way to pass", value: "More eligible children than in any other country", icon: ICON.globeAsiaAustralia },
    { label: "Eligible child", value: "A citizen, or a permanent resident usually living here", icon: ICON.user },
    { label: "Waiver", value: "None", icon: ICON.noSymbol },
    { label: "Not needed for", value: "The 870, or a 143 or 864 after a 173 or 884", icon: ICON.informationCircle },
  ],
  checkedAgainst: "Home Affairs and the Migration Regulations 1994",
  actors: [
    {
      id: "you",
      name: "You (the parent)",
      short: "You",
      icon: ICON.user,
      tone: "green",
      role: "List every child and step-child, and show where each one lives.",
      does: [
        "Count your children and your partner's, including [[step-child|step-children]]",
        "Leave out only the children the rules exclude",
        "Show each child's citizenship or residence, and their country",
        "Keep the declaration accurate: leaving out a child can engage [[pic4020|PIC 4020]]",
      ],
    },
    {
      id: "children",
      name: "Your children and step-children",
      short: "Your children",
      icon: ICON.users,
      tone: "pink",
      role: "Where each child usually lives, and on what status, decides the count.",
      does: [
        "Australian citizens are [[eligible-child|eligible]] wherever they live",
        "Permanent residents and [[eligible-nz|eligible New Zealand citizens]] are eligible only if [[usually-resident|usually resident]] here",
        "Children in Australia on temporary visas count as living overseas",
      ],
    },
    {
      id: "government",
      name: "Department of Home Affairs",
      short: "Home Affairs",
      icon: ICON.buildingLibrary,
      tone: "blue",
      role: "Applies the test when you lodge, and won't waive it.",
      does: [
        "Checks the test at lodgement, as one of the core criteria",
        "Gives a queue date only once the core criteria are met",
        "Won't waive it in compelling or exceptional circumstances",
      ],
    },
  ],
  flows: [
    {
      from: "children",
      to: "you",
      label: "Status + country",
      detail: "Each child's citizenship or visa, and the country where they usually live, decides whether they count as an [[eligible-child|eligible child]].",
    },
    {
      from: "you",
      to: "government",
      label: "Declares every child",
      detail: "Your parent visa application lists every child and step-child of you and your partner, with evidence for each.",
    },
    {
      from: "government",
      to: "you",
      label: "Applies the test",
      detail: "Home Affairs assesses the test at lodgement, before it gives you a queue date. There's no waiver if you don't pass.",
    },
  ],
  journeyTitle: "From your family list to a pass or fail",
  journeyHighlight: "pass or fail",
  stages: [
    {
      id: "list",
      short: "List",
      title: "List every child and step-child",
      who: ["you"],
      description: "Include every child of you and your partner: adopted children, children from earlier relationships and your current partner's children.",
      points: [
        "A former partner's child under 18 counts if they're in your custody or guardianship under a parenting order",
        "Leave out step-children from polygamous or concurrent relationships",
      ],
      youHold: "A complete list of children, with dates of birth",
      icon: ICON.listBullet,
    },
    {
      id: "remove",
      short: "Remove",
      title: "Remove the children who aren't counted",
      who: ["you"],
      description: "Take out any child who has died, was adopted out, or was removed from your custody by court order or operation of law.",
      points: [
        "Also out: a [[unhcr|UNHCR]]-registered refugee living in a UNHCR camp",
        "Also out: a child living where they face persecution and can't be reunited with you elsewhere",
      ],
      youHold: "The list of children who count",
      icon: ICON.xCircle,
    },
    {
      id: "classify",
      short: "Classify",
      title: "Mark each child eligible, or give them a country",
      who: ["you", "children"],
      description: "An [[eligible-child|eligible child]] is a citizen, or a permanent resident or eligible New Zealand citizen usually living in Australia. Every other child gets a country.",
      points: [
        "A child in Australia on a temporary visa counts for the country where they usually live",
        "A permanent resident child living overseas isn't eligible",
        "If you don't know where a child is, use their last known country",
      ],
      youHold: "A table of eligible children, and other children by country",
      icon: ICON.globeAsiaAustralia,
    },
    {
      id: "test",
      short: "Test",
      title: "Check the two ways to pass",
      who: ["you"],
      description: "If eligible children are at least half the total, you pass ([[limb|limb one]]). If not, check whether they outnumber the children in every other single country (limb two).",
      points: [
        "Five children, two in Australia and one in each of three other countries: passes limb two",
        "Six children, two in Australia and two in each of two other countries: fails both",
      ],
      youHold: "A pass or fail result, with the reasoning",
      icon: ICON.scale,
    },
    {
      id: "evidence",
      short: "Evidence",
      title: "Gather the evidence",
      who: ["you"],
      description: "Home Affairs assesses the test at lodgement, so have the evidence for every child ready.",
      points: [
        "Birth or adoption certificates and parenting orders",
        "Citizenship or permanent residence evidence, and proof eligible children usually live in Australia",
        "Death certificates, adoption-out papers or court orders for children left out",
      ],
      youHold: "An evidence bundle ready to lodge",
      icon: ICON.documentCheck,
    },
    {
      id: "fail",
      short: "If not",
      title: "If you don't pass",
      who: ["you", "government"],
      description: "The test isn't waived. But the count can change, for example when another child becomes a permanent resident usually living in Australia.",
      points: [
        "The 870 has no balance of family test, but it's temporary and has no work rights",
        "Applying for an 870 bars a later parent visa application",
      ],
      youHold: "A decision: wait, choose the 870, or get advice",
      icon: ICON.arrowPath,
    },
  ],
  check: {
    title: "Do you pass the balance of family test?",
    highlight: "balance of family test",
    ok: {
      title: "Your count looks like a pass",
      body: "Nothing in your answers suggests a problem. Check every child's evidence before you lodge: Home Affairs applies the test at lodgement.",
    },
    todo: {
      title: "Re-check a few children first",
      body: "Some of your children may count differently than you expect. Run the numbers in the calculator on this page.",
    },
    stop: {
      title: "On these answers, you don't pass",
      body: "Home Affairs won't waive the test. The notes explain why, and what might work instead.",
    },
    disclaimer: "A general self-check, not advice. Home Affairs applies the test to your full family details at lodgement.",
  },
  quiz: [
    {
      id: "everyone",
      topic: "Who you counted",
      question: "Have you counted every child and step-child of you and your partner?",
      help: "Adopted children count, and so do your current partner's children, even with no connection to you.",
      options: [
        { value: "all", label: "Yes, all of them", status: "ok", note: "Good: the count starts from everyone, then removes only the children the rules exclude." },
        { value: "partner", label: "I left out my partner's children", status: "todo", note: "Your current partner's children are counted, even if they have no connection to you." },
        {
          value: "estranged",
          label: "I left out a child I'm not in touch with",
          status: "todo",
          note: "Every living child counts unless the rules exclude them; if you don't know where they are, they count for their last known country. Leaving one out is an inaccurate declaration.",
          link: { label: "Why accuracy matters", href: "/visas/appeals-and-review/pic-4020-fraud-and-false-information" },
        },
      ],
    },
    {
      id: "excluded",
      topic: "Children left out",
      question: "Has any child died, been adopted out, or been removed from your custody by court order?",
      options: [
        { value: "no", label: "No", status: "ok", note: "Then every child stays in the count." },
        { value: "yes", label: "Yes", status: "ok", note: "Leave that child out of the count entirely, and keep the evidence: a death certificate, adoption-out papers or the court order." },
      ],
    },
    {
      id: "temporary",
      topic: "Temporary visas",
      question: "Do any of your children live in Australia on a temporary or bridging visa?",
      options: [
        { value: "no", label: "No", status: "ok", note: "Nothing to adjust on this point." },
        { value: "yes", label: "Yes", status: "todo", note: "They aren't eligible children. They count for the country where they usually live, not Australia." },
      ],
    },
    {
      id: "pr-overseas",
      topic: "Residents living overseas",
      question: "Is any of your children a permanent resident who lives outside Australia?",
      options: [
        { value: "no", label: "No", status: "ok", note: "Nothing to adjust on this point." },
        {
          value: "yes",
          label: "Yes",
          status: "todo",
          note: "A permanent resident child must usually live in Australia to be eligible; otherwise they count for the country where they live. An Australian citizen child is eligible wherever they live.",
        },
      ],
    },
    {
      id: "result",
      topic: "Your count",
      question: "What does your count show?",
      options: [
        { value: "half", label: "At least half of my children are eligible", status: "ok", note: "You pass limb one." },
        {
          value: "most",
          label: "Fewer than half, but more eligible children than in any other single country",
          status: "ok",
          note: "You pass limb two.",
        },
        {
          value: "neither",
          label: "Neither",
          status: "stop",
          note: "You don't pass, and Home Affairs won't waive the test. The 870 has no balance of family test, but it's temporary and bars a later parent visa.",
          link: { label: "Compare the 870", href: "/visas/family/sponsored-parent-temporary-visa-870" },
        },
        { value: "unsure", label: "I haven't counted yet", status: "todo", note: "Use the calculator on this page: it applies both limbs for you.", link: { label: "Open the calculator", href: "#family-test" } },
      ],
    },
    {
      id: "visa",
      topic: "Your visa",
      question: "Which visa are you planning?",
      options: [
        { value: "parent", label: "A 103, 143, 173, 804, 864 or 884", status: "ok", note: "The test applies to all of these." },
        {
          value: "second-stage",
          label: "A 143 or 864, while holding a 173 or 884",
          status: "ok",
          note: "If you lodge while holding it, or within 28 days after it ends, you've already met the test.",
        },
        { value: "870", label: "The Sponsored Parent (Temporary) visa (870)", status: "ok", note: "The 870 has no balance of family test." },
      ],
    },
  ],
  myths: [
    {
      myth: "My child studying in Australia counts as living here.",
      fact: "Not on a temporary visa. A child in Australia on a temporary visa, including a bridging visa, isn't an eligible child. They count for the country where they usually live.",
    },
    {
      myth: "My partner's children from an earlier relationship don't count.",
      fact: "They do. Your current partner's children are counted, even if they have no connection to you.",
    },
    {
      myth: "A child who has died still counts against me.",
      fact: "No. A child who has died is left out of the count entirely, as are children adopted out or removed from your custody by court order.",
    },
    {
      myth: "My son is a permanent resident, so he's eligible even though he lives overseas.",
      fact: "Not while he lives overseas. A permanent resident or eligible New Zealand citizen child must usually live in Australia. Only Australian citizen children are eligible wherever they live.",
    },
    {
      myth: "If exactly half my children live here, I fail.",
      fact: "You pass. Limb one needs at least half, so two eligible children out of four passes, and so does one out of two.",
    },
    {
      myth: "Home Affairs can waive the test in a compelling case.",
      fact: "It won't. Home Affairs states it will not waive the balance of family test, even in compelling or exceptional circumstances.",
    },
    {
      myth: "I can leave out a child I'm estranged from.",
      fact: "No. Leaving out a living child who wasn't adopted out or removed by court order is an inaccurate declaration, and can engage PIC 4020.",
    },
    {
      myth: "I have to pass the test again for the 143 after my 173.",
      fact: "No. If you lodge the 143 while holding the 173, or within 28 days after it ends, you've already met it. The same applies to the 864 after an 884.",
    },
  ],
  glossary: [
    {
      id: "bof",
      term: "Balance of family test",
      definition: "A test of a parent's links to Australia, made by counting where their children live. It applies to the subclass 103, 143, 173, 804, 864 and 884 visas, and isn't waived.",
    },
    {
      id: "eligible-child",
      term: "Eligible child",
      definition: "A child who is an Australian citizen, an Australian permanent resident usually living in Australia, or an eligible New Zealand citizen usually living in Australia. Every other child is ineligible.",
    },
    {
      id: "usually-resident",
      term: "Usually resident",
      definition: "Normally living in a place. A permanent resident child must usually live in Australia to be eligible, and a child in Australia on a temporary visa isn't usually resident here.",
    },
    {
      id: "step-child",
      term: "Step-child",
      definition: "Your current partner's child, or a former partner's child under 18 who is in your guardianship or custody, or covered by a parenting order under the Family Law Act 1975.",
    },
    {
      id: "eligible-nz",
      term: "Eligible New Zealand citizen",
      definition: "A New Zealand citizen who meets tests tied to 26 February 2001, for example being in Australia on that date as a Special Category visa holder. For this test they must also usually live in Australia.",
    },
    {
      id: "limb",
      term: "Limb one and limb two",
      definition: "The two ways to pass. Limb one: at least half of your children are eligible children. Limb two: there are more eligible children than children in any other single country.",
    },
    {
      id: "unhcr",
      term: "UNHCR",
      full: "United Nations High Commissioner for Refugees",
      definition: "A child registered by the UNHCR as a refugee and living in a UNHCR camp is left out of the count.",
    },
    {
      id: "pic4020",
      term: "PIC 4020",
      full: "Public Interest Criterion 4020",
      definition: "The rule that lets Home Affairs refuse a visa where false or misleading information was given. Leaving out a child who should be counted is an inaccurate declaration that can engage it.",
    },
    {
      id: "second-stage",
      term: "Second-stage applicant",
      definition: "Someone lodging the 143 or 864 while holding a 173 or 884, or within 28 days after it ends. They have already met the test.",
    },
  ],
  cta: {
    title: "Not sure how your family counts?",
    subtitle: "We work through every child's status and country with you, tell you honestly whether you pass, and plan the parent visa that fits.",
  },
  verifiedExtras: [
    {
      fact: "Public Interest Criterion 4020 lets the Department refuse a visa where a bogus document or false or misleading information was given with the application.",
      source: "/visas/appeals-and-review/pic-4020-fraud-and-false-information",
    },
  ],
  finder: parentFinder,
  balanceOfFamily: true,
};
