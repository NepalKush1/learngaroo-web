import type { FinderConfig } from "../types";

// "Which parent or family visa fits?" Shared by every page in this folder.
// Every fact matches data/visas/family-parent.ts (checked 12 October 2026).
// Queues are described exactly as the pages describe them, never with a
// waiting time. No glossary tokens here: each page has its own glossary.

export const parentFinder: FinderConfig = {
  id: "parent-finder",
  navLabel: "Which visa?",
  eyebrow: "Visa finder",
  title: "Which parent or family visa fits?",
  highlight: "fits",
  subtitle: "A few one-tap questions point you to the likely starting point. Answer as the parent or relative who would hold the visa.",
  start: "goal",
  questions: [
    {
      id: "goal",
      question: "What are you looking for?",
      help: "Researching for a parent? Answer as your parent would.",
      options: [
        { label: "To live in Australia permanently, as the parent of someone settled here", next: "family-test" },
        { label: "Long visits to my children in Australia, not a permanent move", next: "later" },
        { label: "A visa as another relative, not as a parent", next: "relative" },
      ],
    },
    {
      id: "later",
      question: "Could you want to live in Australia permanently later?",
      help: "While you hold a Sponsored Parent (Temporary) visa (870), or have applied for one, you can't apply for a permanent or temporary parent visa.",
      options: [
        { label: "No, visits are enough", next: "o870" },
        { label: "Yes, or maybe", next: "decide-first" },
      ],
    },
    {
      id: "family-test",
      question: "Do you pass the balance of family test?",
      help: "You pass if at least half of your children and step-children are Australian citizens, or permanent residents or eligible New Zealand citizens usually living in Australia. You also pass if more of them live in Australia than in any other single country.",
      options: [
        { label: "Yes, I pass", next: "where" },
        { label: "No, I don't pass", next: "bof-fail" },
        { label: "I'm not sure", next: "bof-check" },
      ],
    },
    {
      id: "where",
      question: "Where are you, and have you reached Age Pension age (67)?",
      help: "The onshore parent visas (804 and 864) need you to be in Australia, and at Age Pension age, when you apply.",
      options: [
        { label: "In Australia, and 67 or older", next: "cost-onshore" },
        { label: "In Australia, and under 67", next: "cost-offshore" },
        { label: "Outside Australia", next: "cost-offshore" },
      ],
    },
    {
      id: "cost-onshore",
      question: "Which matters more to your family: the cost or the wait?",
      options: [
        { label: "Pay more, for a separate, shorter queue", hint: "From A$49,900 for one applicant", next: "o864" },
        { label: "Pay much less, and wait much longer", hint: "From A$8,665 for one applicant", next: "o804" },
      ],
    },
    {
      id: "cost-offshore",
      question: "Which matters more to your family: the cost or the wait?",
      options: [
        { label: "Pay more, for a separate, shorter queue", hint: "From A$49,900 for one applicant", next: "o143" },
        { label: "Pay much less, and wait much longer", hint: "From A$8,665 for one applicant", next: "o103" },
      ],
    },
    {
      id: "relative",
      question: "Which describes you best?",
      help: "The Remaining Relative, Carer and Aged Dependent Relative visas each have their own narrow test and a capped queue.",
      options: [
        { label: "My near relatives, and my partner's, all live in Australia permanently", hint: "Parents, siblings and non-dependent children", next: "o115" },
        { label: "I'll care for a relative in Australia who has a long-term medical condition", next: "o116" },
        { label: "I'm 67 or older, single, and have depended on a relative in Australia for 3 years", next: "o114" },
        { label: "None of these", next: "none" },
      ],
    },
  ],
  outcomes: [
    {
      id: "o143",
      title: "Contributory Parent visa (subclass 143 or 173)",
      body: "You can apply in or outside Australia, and the higher charges buy a place in a separate, shorter queue than the 103. You pay A$49,900 for one applicant over two instalments (143), or spread the cost by holding the two-year 173 first.",
      watch: [
        "A standard 143 or any 173 is decided while you're outside Australia, and no bridging visa comes with the application.",
        "Your sponsoring child must be settled in Australia and aged 18 or over.",
        "A 10-year Assurance of Support, with a bank guarantee of A$10,000 for one adult or A$14,000 for two.",
      ],
      href: "/visas/family/contributory-parent-visa-143-173",
    },
    {
      id: "o864",
      title: "Contributory Aged Parent visa (subclass 864 or 884)",
      body: "You apply in Australia and usually get a bridging visa for the wait, and the higher charges buy a place in a separate, shorter queue than the 804. You pay A$49,900 for one applicant over two instalments (864), or hold the two-year 884 first to spread the cost.",
      watch: [
        "You must be in Australia, not in immigration clearance, when you apply and when it's decided.",
        "If your visa has condition 8503 (no further stay), it must be waived before you apply.",
        "A 10-year Assurance of Support, with a bank guarantee of A$10,000 for one adult or A$14,000 for two.",
      ],
      href: "/visas/family/contributory-aged-parent-visa-864-884",
    },
    {
      id: "o103",
      title: "Parent visa (subclass 103)",
      body: "The lowest-cost permanent parent visa: A$8,665 for one applicant over two instalments. The trade-off is the longest queue of the parent visas, and you must be outside Australia when it's decided.",
      watch: [
        "No bridging visa comes with the application (retirees aside), so hold another visa or wait outside Australia.",
        "A four-year Assurance of Support, with a bank guarantee of A$5,000 for one adult or A$7,000 for two.",
        "You can switch to a 143 or 173 later, but the 103 charges aren't refunded.",
      ],
      href: "/visas/family/parent-visa-103",
    },
    {
      id: "o804",
      title: "Aged Parent visa (subclass 804)",
      body: "The lower-cost onshore option at Age Pension age: A$8,665 for one applicant over two instalments. You usually wait in Australia on a bridging visa, but the queue is much longer than for the contributory 864.",
      watch: [
        "If your visa has condition 8503 (no further stay), it must be waived before you apply.",
        "A Bridging visa A ends if you leave without a Bridging visa B, and you must be in Australia when it's decided.",
        "A four-year Assurance of Support, with a bank guarantee of A$5,000 for one adult or A$7,000 for two.",
      ],
      href: "/visas/family/aged-parent-visa-804",
    },
    {
      id: "o870",
      title: "Sponsored Parent (Temporary) visa (subclass 870)",
      body: "Visits of up to three or five years at a time, up to ten years in total, with no balance of family test and no Assurance of Support. Your child must first be approved as a Parent Sponsor. The visa gives no work rights and no path to permanent residence.",
      watch: [
        "While you hold it, or have applied for it, you can't apply for a permanent or temporary parent visa.",
        "Your child needs taxable income of at least A$83,454.80 in the last completed income year, or combined income if their own is at least half.",
        "Lodge from outside Australia within six months of the sponsorship approval, and keep Australian health insurance.",
      ],
      href: "/visas/family/sponsored-parent-temporary-visa-870",
    },
    {
      id: "decide-first",
      title: "Decide on permanent residence before an 870",
      body: "While you hold an 870, or have applied for one, you can't apply for a permanent or temporary parent visa. A permanent parent visa application lodged before the 870 doesn't stop you visiting on one. Every permanent parent visa needs the balance of family test, so start there.",
      watch: [
        "The 870 is the only parent visa without the balance of family test.",
        "Shorter family visits are possible on a Visitor visa (subclass 600), including its Sponsored Family stream.",
      ],
      href: "/visas/family/balance-of-family-test",
    },
    {
      id: "bof-check",
      title: "Check the balance of family test first",
      body: "Every permanent parent visa needs it, and Home Affairs won't waive it. Children in Australia on temporary or bridging visas count as living overseas, and your partner's children count too. The guide walks you through the count with a calculator.",
      watch: [
        "A permanent resident child living overseas isn't an eligible child.",
        "A child who has died, or was adopted out, is left out of the count.",
      ],
      href: "/visas/family/balance-of-family-test",
    },
    {
      id: "bof-fail",
      title: "Permanent parent visas aren't open on this count",
      body: "Every permanent parent visa needs the balance of family test, and Home Affairs won't waive it, even in compelling circumstances. Re-check the count: it can change, for example when another child becomes a permanent resident usually living in Australia.",
      watch: [
        "The 870 has no balance of family test, but it's temporary, gives no work rights and, once applied for, blocks parent visa applications.",
        "Step-children of your current partner are counted.",
      ],
      href: "/visas/family/balance-of-family-test",
      tone: "stop",
    },
    {
      id: "o115",
      title: "Remaining Relative visa (subclass 115 or 835)",
      body: "For someone whose near relatives, and their partner's, all live in Australia as citizens, permanent residents or eligible New Zealand citizens. Near relatives are parents, siblings and non-dependent children. You apply for the 115 from outside Australia, or the 835 in Australia.",
      watch: [
        "One near relative living overseas, or in Australia on a temporary or bridging visa, means it can't be granted.",
        "Your sponsor and their partner must never have held or sponsored a 115, 835, 104 or 806 visa.",
        "A capped queue: Home Affairs states demand exceeds the places available each year.",
      ],
      href: "/visas/family/remaining-relative-visa-115-835",
    },
    {
      id: "o116",
      title: "Carer visa (subclass 116 or 836)",
      body: "For a relative who will give ongoing, substantial care to an Australian relative with a long-term or permanent medical condition. Bupa Medical Visa Services assesses the person needing care, and the care must not be reasonably available from other relatives or Australian services.",
      watch: [
        "The Bupa assessment must at least have begun before you lodge.",
        "You apply for the 116 from outside Australia, or the 836 in Australia while holding (or having recently held) a substantive visa.",
        "A capped queue: Home Affairs states demand exceeds the places available each year.",
      ],
      href: "/visas/family/carer-visa-116-836",
    },
    {
      id: "o114",
      title: "Aged Dependent Relative visa (subclass 114 or 838)",
      body: "For a single person of Age Pension age (67) who has depended on a relative in Australia for food, shelter and clothing for at least three years. You apply for the 114 from outside Australia, or the 838 in Australia.",
      watch: [
        "You must have no spouse or de facto partner.",
        "If the relative is your child, compare the parent visas: they need neither single status nor three years of dependency.",
        "A four-year Assurance of Support, and a capped queue.",
      ],
      href: "/visas/family/aged-dependent-relative-visa-114-838",
    },
    {
      id: "none",
      title: "None of these three visas fits",
      body: "The Remaining Relative, Carer and Aged Dependent Relative visas each need one of these situations. A single child under 18 whose parents can't care for them may fit the Orphan Relative visa, and shorter family visits are possible on a Visitor visa. Talk it through with us before you pay for an application.",
      watch: ["The Orphan Relative visa (subclass 117 or 837) is for a child whose parents are dead, permanently incapacitated or can't be found."],
      href: "/bookings",
      tone: "stop",
    },
  ],
  footnote:
    "Facts checked 12 October 2026. A starting point, not advice: each visa's full criteria and your circumstances decide what fits. For parent visas Home Affairs publishes the queue dates it has released, not a processing time.",
};
