import type { FinderConfig } from "../types";

// "Which child visa fits?" Shared by the 101/802, 102, 117/837 and 445
// pages. Every fact comes from those pages and the 820/801, 309/100 and 461
// pages (data/visas/family-partner.ts). No glossary tokens here: the finder
// is shared, and each page defines its own glossary.

export const childFinder: FinderConfig = {
  id: "child-finder",
  navLabel: "Which visa?",
  eyebrow: "Visa finder",
  title: "Which child visa fits?",
  highlight: "child visa",
  subtitle: "A few one-tap questions about the child, their parents and your family's visas.",
  start: "link",
  questions: [
    {
      id: "link",
      question: "Who is the child's family link to Australia?",
      help: "Pick the closest match. You'll get the likely starting point, not a final answer.",
      options: [
        { label: "A parent who is an Australian citizen or permanent resident", next: "adopted" },
        { label: "A parent who is a New Zealand citizen living in Australia", next: "nz" },
        { label: "A parent who holds, or has applied for, a Partner visa (309 or 820)", next: "partner-stage" },
        { label: "A relative here, because no parent can care for the child", hint: "A sibling, grandparent, aunt or uncle, including step-relatives", next: "orphan" },
      ],
    },
    {
      id: "nz",
      question: "Is the New Zealand parent an eligible New Zealand citizen?",
      help: "That means a protected Special Category visa holder: generally someone who was in Australia on 26 February 2001 or meets the related residence rules. Most New Zealand citizens who arrived later are not.",
      options: [
        { label: "Yes, an eligible New Zealand citizen", next: "adopted" },
        { label: "No, they hold a Special Category (444) visa only", next: "nz-461" },
        { label: "I'm not sure", next: "nz-461" },
      ],
    },
    {
      id: "partner-stage",
      question: "Where is the parent's Partner visa up to?",
      options: [
        { label: "The 820 application is still being decided", next: "add-820" },
        { label: "The 309 application is still being decided", next: "add-309" },
        { label: "The 309 or 820 is granted, but not yet the permanent 100 or 801", next: "dependent-445" },
        { label: "The permanent 100 or 801 has been granted", next: "adopted" },
      ],
    },
    {
      id: "adopted",
      question: "Is the child adopted, or being adopted?",
      options: [
        { label: "No: the parent's biological child or step-child", next: "age" },
        { label: "Adopted before the parent became Australian", hint: "Before they became a citizen, permanent resident or eligible New Zealand citizen", next: "age" },
        { label: "Adopted, or being adopted, after the parent became Australian", hint: "Through an Australian authority, the Hague Convention or an expatriate adoption", next: "adoption-102" },
      ],
    },
    {
      id: "age",
      question: "Which describes the child now?",
      options: [
        { label: "Under 18 and single", next: "child-101-802" },
        { label: "18 to 24, single, studying full time and dependent on the parent", hint: "And not working full time", next: "child-101-802" },
        { label: "18 or over, single and unable to work because of incapacity", next: "child-101-802" },
        { label: "None of these, for example 25 or over, or in a relationship", next: "none" },
      ],
    },
    {
      id: "orphan",
      question: "Why can't the child's parents care for them?",
      options: [
        { label: "Each parent has died, is permanently incapacitated or can't be found", next: "orphan-age" },
        { label: "At least one parent could care for the child", next: "none" },
      ],
    },
    {
      id: "orphan-age",
      question: "Is the child under 18 and single?",
      options: [
        { label: "Yes", next: "orphan-117-837" },
        { label: "No", next: "none" },
      ],
    },
  ],
  outcomes: [
    {
      id: "child-101-802",
      title: "Child visa (subclasses 101 and 802)",
      body: "A permanent visa for the dependent child of an Australian citizen, permanent resident or eligible New Zealand citizen. The 101 is for a child outside Australia and the 802 for a child in Australia. The parent, or the parent's partner, sponsors the child and supports them for their first two years.",
      watch: [
        "A step-child qualifies only if they're under 18, the child of the step-parent's former partner, and there's a parenting order or guardianship.",
        "For a child under 18, everyone with a legal right to decide where the child lives must consent, unless a court order or home-country law allows the move.",
        "The 802 can't be lodged while the child's visa has condition 8503 (no further stay), unless it's waived first.",
        "A child born overseas to an Australian citizen parent may be able to get citizenship by descent instead of a visa.",
      ],
      href: "/visas/family/child-visa-101-802",
    },
    {
      id: "adoption-102",
      title: "Adoption visa (subclass 102)",
      body: "A permanent visa for a child under 18 adopted, or being adopted, outside Australia by an Australian citizen, permanent resident or eligible New Zealand citizen. It covers state or territory authority adoptions, Hague Convention adoptions and expatriate adoptions.",
      watch: [
        "The child must be under 18, and outside Australia, when you apply and when the visa is granted.",
        "An expatriate adoption needs the parent to have lived overseas for more than 12 months, and not to get around Australia's adoption rules.",
        "A Hague or bilateral adoption finalised overseas may make the child eligible for Australian citizenship by adoption instead.",
        "An adopted child already in Australia may be able to use the 802 Child visa instead.",
      ],
      href: "/visas/family/adoption-visa-102",
    },
    {
      id: "orphan-117-837",
      title: "Orphan Relative visa (subclasses 117 and 837)",
      body: "A permanent visa for a single child under 18 whose parents are each dead, permanently incapacitated or of unknown whereabouts. A settled Australian relative, or that relative's partner, sponsors the child and supports them for their first two years.",
      watch: [
        "The sponsor must be a sibling, grandparent, aunt or uncle (including step-relatives), or their live-in partner, settled in Australia and 18 or over.",
        "There's no health waiver for this visa.",
        "For the 837 in Australia, the child needs a substantive visa, or must apply within 12 months of the last one ending.",
        "For a missing parent, you'll need evidence of how long they've been missing and the efforts made to find them.",
      ],
      href: "/visas/family/orphan-relative-visa-117-837",
    },
    {
      id: "dependent-445",
      title: "Dependent Child visa (subclass 445)",
      body: "A temporary visa for the dependent child of a parent holding a 309 or 820 Partner visa. It lets the child come to or stay in Australia while the parent's permanent 100 or 801 is decided. The child is then added to that application with Form 1002, at no extra charge.",
      watch: [
        "The sponsor is the person who sponsored the parent's Partner visa.",
        "Lodge Form 1002 before the parent's 100 or 801 is decided, or the child has no path to the permanent visa.",
        "To be added to an 801, the child must be in Australia.",
        "A child aged 18 or over must be financially dependent on the parent, or incapacitated for work.",
      ],
      href: "/visas/family/dependent-child-visa-445",
    },
    {
      id: "add-820",
      title: "Add the child to the 820 application",
      body: "While the parent's 820 is still being decided, a dependent child can be added to it with Form 1436, paying the additional applicant charge. No separate child visa is needed.",
      watch: [
        "The child must be in Australia to be added.",
        "Once the 820 is granted, a child can't be added to it: the Dependent Child visa (445) is the route then.",
      ],
      href: "/visas/family/partner-visa-onshore-820-801",
    },
    {
      id: "add-309",
      title: "Add the child to the 309 application",
      body: "While the parent's 309 is still being decided, a dependent child can be added to it with Form 1436. No separate child visa is needed.",
      watch: [
        "Once the 309 is granted, a child can't be added to it: the Dependent Child visa (445) is the route then.",
        "Nobody can be added after the permanent 100 is granted.",
      ],
      href: "/visas/family/partner-visa-offshore-309-100",
    },
    {
      id: "nz-461",
      title: "New Zealand Citizen Family Relationship visa (subclass 461)",
      body: "If the parent holds a Special Category (444) visa but isn't an eligible New Zealand citizen, the 461 is the usual option for the child. It's a five-year visa that can be renewed, with full work and study rights. It has no direct path to permanent residence.",
      watch: [
        "Not sure of the parent's status? Check it first: if they're an eligible New Zealand citizen, a Child visa (101 or 802) may fit instead.",
        "The child can't be granted the 461 if they're a New Zealand or Australian citizen.",
        "From 18, the child must be under 23 and financially dependent, or 23 or over and unable to work because of physical or cognitive limitations.",
        "Family members can only be included when the application is lodged.",
      ],
      href: "/visas/family/new-zealand-citizen-family-relationship-visa-461",
    },
    {
      id: "none",
      title: "No child visa fits these answers yet",
      body: "Each child visa has firm rules about the child's age, relationships and who can care for them. On these answers, none of them fits as things stand.",
      watch: [
        "Child visa (101 and 802): the child must be single, and either under 18, or 18 to 24 and studying full time, or incapacitated for work.",
        "Orphan Relative visa (117 and 837): a parent who could care for the child but chooses not to means the child isn't an orphan relative.",
        "A child born overseas to an Australian citizen parent may be able to apply for citizenship by descent instead of a visa.",
      ],
      tone: "stop",
    },
  ],
  footnote: "A general guide, not advice or a prediction. It points to the likely starting point; the child's full circumstances decide which visa fits.",
};
