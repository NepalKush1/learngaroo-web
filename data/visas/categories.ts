import type { VisaCategory } from "./types";

// The six sections of the visa library, in display order. Situations link
// to the page that answers that situation first; FAQs are general and
// hold only figures verified on the dated visa pages.

export const visaCategories: VisaCategory[] = [
  {
    slug: "employer-sponsored",
    name: "Employer sponsored visas",
    shortName: "Employer sponsored",
    tagline: "Work for an Australian employer, temporarily or permanently",
    description:
      "Visas where an approved business nominates you for a position: the Skills in Demand visa (482), the permanent Employer Nomination Scheme (186), the regional 494 and the short-stay and training visas, plus labour agreements and the sponsorship rules employers must follow.",
    seoTitle: "Employer Sponsored Visas Australia: 482, 186, 494 Guide",
    seoDescription:
      "Every Australian employer sponsored visa explained from the legislation and Home Affairs: subclass 482, 186, 494, 400, 407, 408, 403, labour agreements and sponsor obligations.",
    icon: "M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0",
    situations: [
      { situation: "An employer wants to sponsor you for a skilled job", label: "Skills in Demand visa (482)", href: "/visas/employer-sponsored/skills-in-demand-visa-482" },
      { situation: "You have worked for your sponsor on a 482 and want permanent residence", label: "Employer Nomination Scheme (186)", href: "/visas/employer-sponsored/employer-nomination-scheme-visa-186" },
      { situation: "Your job is in regional Australia", label: "Skilled Employer Sponsored Regional (494)", href: "/visas/employer-sponsored/skilled-employer-sponsored-regional-visa-494" },
      { situation: "You need to do short, highly specialised work", label: "Temporary Work (Short Stay Specialist) (400)", href: "/visas/employer-sponsored/temporary-work-short-stay-specialist-visa-400" },
      { situation: "You are coming for workplace training", label: "Training visa (407)", href: "/visas/employer-sponsored/training-visa-407" },
      { situation: "You are an employer who wants to sponsor someone", label: "Sponsorship and nomination guide", href: "/visas/employer-sponsored/employer-sponsorship-and-nomination" },
    ],
    faqs: [
      {
        question: "Which employer sponsored visa leads to permanent residence?",
        answer: "The Employer Nomination Scheme (subclass 186) is permanent. The Skills in Demand visa (482) and the regional 494 are temporary, but each has a pathway: 482 holders can be nominated for 186 after working for a sponsor, and 494 holders can apply for the Permanent Residence (Skilled Regional) visa (191) after three years in a regional area.",
      },
      {
        question: "Who pays the costs of an employer sponsored visa?",
        answer: "The employer pays the sponsorship and nomination charges and the Skilling Australians Fund levy, and by law cannot recover them from the worker. The visa applicant pays the visa application charge, which from 1 July 2026 is A$4,015 for a subclass 482 and A$6,140 for a subclass 186 or 494, plus health examinations and English tests.",
      },
      {
        question: "Does my occupation need to be on a list?",
        answer: "Yes for most streams. The 482 Core Skills stream and the 186 use the Core Skills Occupation List, the 494 has its own regional occupation instrument, and the 482 Specialist Skills stream is open to most ANZSCO occupations above the Specialist Skills Income Threshold. Labour agreements can cover occupations outside the lists.",
      },
      {
        question: "Can I change employers on a sponsored visa?",
        answer: "A 482 or 494 holder can move to a new approved sponsor, but the new employer must lodge and have approved a nomination first. Since late 2024, a 482 holder who stops working for their sponsor has up to 180 days at a time, and 365 days in total across the visa, to find a new sponsor or leave, and may work for other employers in that period.",
      },
    ],
  },
  {
    slug: "skilled",
    name: "Skilled and points-tested visas",
    shortName: "Skilled visas",
    tagline: "Permanent residence on your own skills, with or without a state",
    description:
      "The general skilled migration visas selected through SkillSelect: the independent 189, the state-nominated 190, the regional 491 and its permanent 191, the Temporary Graduate visa for international students, and the National Innovation visa, with guides to the points test, expressions of interest and skills assessments.",
    seoTitle: "Skilled Visas Australia: 189, 190, 491, 485 Points Guide",
    seoDescription:
      "Australian skilled migration explained from the source: subclass 189, 190, 491, 191, 485 and 858, the points test, SkillSelect invitations and skills assessments, checked October 2026.",
    icon: "M15.59 14.37a6 6 0 0 1-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 0 0 6.16-12.12A14.98 14.98 0 0 0 9.631 8.41m5.96 5.96a14.926 14.926 0 0 1-5.841 2.58m-.119-8.54a6 6 0 0 0-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 0 0-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 0 1-2.448-2.448 14.9 14.9 0 0 1 .06-.312m-2.24 2.39a4.493 4.493 0 0 0-1.757 4.306 4.493 4.493 0 0 0 4.306-1.758M16.5 9a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z",
    situations: [
      { situation: "You want permanent residence without an employer or state", label: "Skilled Independent visa (189)", href: "/visas/skilled/skilled-independent-visa-189" },
      { situation: "A state or territory could nominate your occupation", label: "Skilled Nominated visa (190)", href: "/visas/skilled/skilled-nominated-visa-190" },
      { situation: "You can live in regional Australia for three years", label: "Skilled Work Regional visa (491)", href: "/visas/skilled/skilled-work-regional-visa-491" },
      { situation: "You have just finished studying in Australia", label: "Temporary Graduate visa (485)", href: "/visas/skilled/temporary-graduate-visa-485" },
      { situation: "You want to know how many points you have", label: "Points test guide", href: "/visas/skilled/skilled-migration-points-test" },
      { situation: "You have an internationally recognised record of achievement", label: "National Innovation visa (858)", href: "/visas/skilled/national-innovation-visa-858" },
    ],
    faqs: [
      {
        question: "How many points do I need for a skilled visa?",
        answer: "The pass mark for the 189, 190 and 491 is 65 points, but invitations go to the highest-ranked expressions of interest, so the score needed to be invited is usually higher and differs by occupation and state. State nomination adds 5 points for the 190 and 15 for the 491.",
      },
      {
        question: "What does a skilled visa cost?",
        answer: "From 1 July 2026 the base application charge is A$6,135 for the subclass 189 and A$6,140 for the 190 and 491, plus A$3,070 for each additional adult and A$1,535 to A$1,540 for each child. A skills assessment, an English test and health examinations are extra. The 191 costs A$630 because the earlier regional visa already carried the main charge.",
      },
      {
        question: "Do I need a skills assessment before I lodge an expression of interest?",
        answer: "Yes. You need a positive skills assessment in your nominated occupation from the assessing authority named for that occupation before you can be invited, and it must still be valid when you apply. Most assessments are valid for three years unless the authority sets a shorter period.",
      },
      {
        question: "Is the Temporary Graduate visa a skilled visa?",
        answer: "It is a temporary visa for recent graduates of Australian institutions. It gives time to work and gain points, and many holders move on to a 189, 190 or 491, or to employer sponsorship, before it expires.",
      },
    ],
  },
  {
    slug: "family",
    name: "Partner, parent and family visas",
    shortName: "Family visas",
    tagline: "Bring your partner, children or parents to Australia",
    description:
      "Partner and prospective marriage visas, child and adoption visas, the contributory and non-contributory parent visas, and the remaining relative, carer and aged dependent relative visas, with the sponsorship, relationship and balance-of-family rules that decide them.",
    seoTitle: "Family Visas Australia: Partner, Parent, Child Visa Guide",
    seoDescription:
      "Partner (820/801, 309/100, 300), child, adoption and parent visas (143, 173, 864, 884, 103, 804, 870) explained from Home Affairs and the Migration Regulations, with 2026 charges.",
    icon: "M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z",
    situations: [
      { situation: "Your partner is in Australia with you", label: "Partner visa, apply in Australia (820/801)", href: "/visas/family/partner-visa-onshore-820-801" },
      { situation: "Your partner is overseas", label: "Partner visa, apply overseas (309/100)", href: "/visas/family/partner-visa-offshore-309-100" },
      { situation: "You plan to marry an Australian but are not yet married", label: "Prospective Marriage visa (300)", href: "/visas/family/prospective-marriage-visa-300" },
      { situation: "You want your parents to live here permanently", label: "Contributory Parent visa (143/173)", href: "/visas/family/contributory-parent-visa-143-173" },
      { situation: "Your parents want long visits without permanent residence", label: "Sponsored Parent (Temporary) visa (870)", href: "/visas/family/sponsored-parent-temporary-visa-870" },
      { situation: "You are bringing a dependent child", label: "Child visa (101/802)", href: "/visas/family/child-visa-101-802" },
    ],
    faqs: [
      {
        question: "How much does a partner visa cost?",
        answer: "From 1 July 2026 the base application charge is A$11,710 whether you apply in Australia (820/801) or overseas (309/100), and the one charge covers both the temporary and permanent stages. Each additional adult is A$5,860 and each child A$2,935. Prospective Marriage visa holders pay a reduced A$1,955 for the partner visa after they marry.",
      },
      {
        question: "Do we need to be married?",
        answer: "No. A de facto relationship qualifies if it has existed for at least 12 months before you apply, unless the relationship is registered under a state or territory law or compelling circumstances apply. Married applicants must have a marriage that is valid under Australian law.",
      },
      {
        question: "What is the balance of family test?",
        answer: "A test for parent visas: at least half of the parent's children must live permanently in Australia, or more of them must live in Australia than in any other single country. Step-children and deceased children are counted under set rules, and the test is applied when the application is assessed.",
      },
      {
        question: "Can a parent visa applicant stay in Australia while waiting?",
        answer: "Applicants for the onshore aged parent visas (804, 864 and 884) usually receive a bridging visa if they lodge while holding a visa in Australia, and can stay while the application is processed. Offshore parent visas (103, 143 and 173) must be applied for and granted while the parent is outside Australia.",
      },
    ],
  },
  {
    slug: "study",
    name: "Student visas",
    shortName: "Study",
    tagline: "Study in Australia and understand the rules that come with it",
    description:
      "The Student visa (500) and Student Guardian visa (590), the Genuine Student requirement, financial capacity, the work and study conditions on a student visa, and the routes from graduation to permanent residence.",
    seoTitle: "Student Visa Australia 2026: Subclass 500 Requirements & Cost",
    seoDescription:
      "Student visa (500) and Student Guardian visa (590) explained from Home Affairs: Genuine Student requirement, financial capacity, A$2,500 charge, work limits and the 2 October 2026 rule changes.",
    icon: "M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5",
    situations: [
      { situation: "You have an offer from an Australian education provider", label: "Student visa (500)", href: "/visas/study/student-visa-500" },
      { situation: "You need to care for a student under 18", label: "Student Guardian visa (590)", href: "/visas/study/student-guardian-visa-590" },
      { situation: "You are unsure how much money you must show", label: "Financial capacity guide", href: "/visas/study/student-visa-financial-capacity" },
      { situation: "You want to know what you may do on a student visa", label: "Conditions and work rights", href: "/visas/study/student-visa-conditions-and-work-rights" },
      { situation: "You are planning for permanent residence after study", label: "Study to PR pathways", href: "/visas/study/study-to-permanent-residence" },
    ],
    faqs: [
      {
        question: "How much does a Student visa cost?",
        answer: "The base application charge from 1 July 2026 is A$2,500 for most courses and A$2,050 for ELICOS and non-award courses. A subsequent temporary application charge of A$700 applies when you apply in Australia after holding a temporary visa. Health examinations, Overseas Student Health Cover and English tests are extra.",
      },
      {
        question: "Can I work on a Student visa?",
        answer: "Yes, up to 48 hours a fortnight while your course is in session and without limit during scheduled course breaks, under condition 8105. Work cannot start before the course does, and masters by research and doctoral students have no cap once the course starts.",
      },
      {
        question: "What changed on 2 October 2026?",
        answer: "New rules limit who can apply for a Student visa while in Australia and whether partners and children can be included in a new application or added later. Applications lodged before that date are assessed under the earlier rules. The Student visa page explains who is affected.",
      },
      {
        question: "What is the Genuine Student requirement?",
        answer: "A test, introduced in March 2024, of whether you genuinely intend to study in Australia and understand what that involves. The Department looks at your circumstances, the value of the course to your future, your immigration history and anything else relevant, and asks you to explain these in your application.",
      },
    ],
  },
  {
    slug: "appeals-and-review",
    name: "Appeals, review and visa problems",
    shortName: "Appeals & review",
    tagline: "What to do after a refusal, cancellation or bar",
    description:
      "Merits review at the Administrative Review Tribunal, visa cancellation and notices of intention, the character test, PIC 4020, the section 48 bar, Schedule 3, no further stay waivers, ministerial intervention, judicial review and the health requirement, explained from the Migration Act and Regulations.",
    seoTitle: "Visa Refusal or Cancellation Australia: ART Review & Appeals",
    seoDescription:
      "Visa refused or cancelled? ART review time limits and the A$3,727 fee, section 501 character, PIC 4020, section 48 bar, Schedule 3, 8503 waivers, ministerial intervention and judicial review.",
    icon: "M12 3v17.25m0 0c-1.472 0-2.882.265-4.185.75M12 20.25c1.472 0 2.882.265 4.185.75M18.75 4.5l2.25 7.5-2.25-.75m0 0 2.25 7.5M5.25 4.5l-2.25 7.5 2.25-.75m0 0-2.25 7.5M18.75 4.5 12 2.25 5.25 4.5m13.5 0-2.25 7.5m-11.25-7.5 2.25 7.5",
    situations: [
      { situation: "Your visa application was refused", label: "ART review of a refusal", href: "/visas/appeals-and-review/art-review-of-visa-refusal" },
      { situation: "You received a notice that your visa may be cancelled", label: "Cancellation and notices of intention", href: "/visas/appeals-and-review/visa-cancellation-and-notice-of-intention" },
      { situation: "Your visa was cancelled on character grounds", label: "Character test, section 501", href: "/visas/appeals-and-review/character-test-section-501" },
      { situation: "You were refused in Australia and want to apply again", label: "Section 48 bar", href: "/visas/appeals-and-review/section-48-bar" },
      { situation: "Your visa has a no further stay condition", label: "Condition 8503 waiver", href: "/visas/appeals-and-review/condition-8503-no-further-stay-waiver" },
      { situation: "The Tribunal affirmed the refusal", label: "Ministerial intervention and judicial review", href: "/visas/appeals-and-review/ministerial-intervention" },
    ],
    faqs: [
      {
        question: "How long do I have to apply for review of a refusal?",
        answer: "The time limit is set by the Migration Regulations and stated in your decision letter. It is short, usually measured in days from when you are taken to have received the decision, and the Tribunal cannot extend it. Read the decision letter the day it arrives and get advice immediately.",
      },
      {
        question: "What does an ART review cost?",
        answer: "The fee for review of a migration decision made under Part 5 of the Migration Act is A$3,727 from 1 July 2026, and it must be paid before the application deadline. A 50% reduction is available for financial hardship. Character-related decisions attract the standard fee of A$1,195.",
      },
      {
        question: "Can I stay in Australia while the Tribunal reviews my case?",
        answer: "Usually yes, if you held a bridging visa associated with the refused application and you apply for review in time: the bridging visa continues until the review is finalised. After a cancellation the position is different, and some people must apply for a bridging visa E.",
      },
      {
        question: "What is the difference between merits review and judicial review?",
        answer: "The Tribunal looks at the whole case again and can substitute its own decision. A court can only decide whether the decision was made lawfully, for example whether the applicant was denied procedural fairness, and sends a lawful decision back to be remade rather than granting a visa.",
      },
    ],
  },
  {
    slug: "other-visas",
    name: "Visitor, working holiday and other visas",
    shortName: "Other visas",
    tagline: "Visit, travel, return, bridge or settle",
    description:
      "Visitor visas and electronic travel authorities, the working holiday visas, bridging visas, the Resident Return visa, the New Zealand Special Category visa, business and investment visas, the Pacific Engagement visa and Australian citizenship by conferral.",
    seoTitle: "Visitor, Working Holiday, Bridging & Other Australian Visas",
    seoDescription:
      "Visitor (600), ETA (601), eVisitor (651), working holiday (417/462), bridging visas, Resident Return (155/157), Special Category (444), business visas and citizenship explained from the source.",
    icon: "M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5a17.92 17.92 0 0 1-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418",
    situations: [
      { situation: "You want to visit family or travel", label: "Visitor visa (600)", href: "/visas/other-visas/visitor-visa-600" },
      { situation: "You are 18 to 30 and want to work while you travel", label: "Working Holiday visa (417)", href: "/visas/other-visas/working-holiday-visa-417" },
      { situation: "Your visa expired while you wait for a decision", label: "Bridging visas", href: "/visas/other-visas/bridging-visas-a-b-c-e" },
      { situation: "You are a permanent resident whose travel facility has ended", label: "Resident Return visa (155/157)", href: "/visas/other-visas/resident-return-visa-155-157" },
      { situation: "You are a New Zealand citizen living in Australia", label: "Special Category visa (444)", href: "/visas/other-visas/special-category-visa-444" },
      { situation: "You are ready to become an Australian citizen", label: "Citizenship by conferral", href: "/visas/other-visas/australian-citizenship-by-conferral" },
    ],
    faqs: [
      {
        question: "How much is a Visitor visa?",
        answer: "The Tourist stream costs A$250 if you apply outside Australia and A$630 if you apply in Australia, where a A$700 subsequent temporary application charge can also apply. The Electronic Travel Authority (601) has no visa charge but a A$20 service fee through the app, and the eVisitor (651) is free.",
      },
      {
        question: "Which bridging visa lets me travel?",
        answer: "Only a Bridging visa B (020) lets you leave and return to Australia while an application is being decided. It costs A$575 and is granted for a travel period you nominate. A Bridging visa A ends if you leave Australia.",
      },
      {
        question: "Do New Zealand citizens need a visa?",
        answer: "New Zealand citizens receive a Special Category visa (444) on arrival with an eligible passport. It is a temporary visa that allows living and working in Australia. Since 1 July 2023, New Zealand citizens who have lived in Australia for four years can apply directly for citizenship without first holding a permanent visa.",
      },
      {
        question: "When can a permanent resident apply for citizenship?",
        answer: "Generally after four years of lawful residence in Australia, including the last 12 months as a permanent resident, with limited absences (no more than 12 months in total in the four years and no more than 90 days in the last 12 months), plus good character and the citizenship test.",
      },
    ],
  },
];

export function getVisaCategory(slug: string): VisaCategory | undefined {
  return visaCategories.find((category) => category.slug === slug);
}
