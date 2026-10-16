import type { FinderConfig } from "../types";

// Shared "Which skilled visa fits?" finder, used on the subclass 189, 190,
// 491 and 858 pages and on the points test and SkillSelect guides. Every
// rule comes from the skilled, employer-sponsored and study pages of the
// visa library (checked against Home Affairs on 12 October 2026). Finder
// text is fact-checked against the whole library, so it uses no glossary
// tokens (each page using it would need the same glossary ids).

export const skilledFinder: FinderConfig = {
  id: "skilled-finder",
  navLabel: "Which visa?",
  eyebrow: "Visa finder",
  title: "Which skilled visa fits?",
  highlight: "skilled visa",
  subtitle: "Answer two to four quick questions to see the likely starting point. It points you to the right page to read next; it isn't advice.",
  start: "you",
  questions: [
    {
      id: "you",
      question: "Which best describes you right now?",
      help: "Pick the closest one. You can go back and try another answer.",
      options: [
        {
          label: "I have an internationally recognised record of exceptional achievement",
          hint: "Top-of-field awards, major research, patents, sport or the arts",
          next: "talent",
        },
        { label: "An Australian employer wants to sponsor me", next: "employer" },
        { label: "I recently finished study in Australia", next: "grad" },
        { label: "I'm a skilled worker without a sponsor", next: "score" },
      ],
    },
    {
      id: "talent",
      question: "Are you still active in that field, with recent exceptional achievements?",
      help: "A record that is only historical, without recent prominence, doesn't meet the National Innovation visa criteria.",
      options: [
        { label: "Yes, my achievements are recent and ongoing", next: "innovation858" },
        { label: "My main achievements are in the past", next: "notyet" },
      ],
    },
    {
      id: "employer",
      question: "Have you already worked full-time for this employer on a 482 (or 457) visa for at least 2 of the last 3 years?",
      options: [
        { label: "Yes", next: "ens186" },
        { label: "No, or I'm not on a 482 yet", next: "sid482" },
      ],
    },
    {
      id: "grad",
      question: "Did you finish at least 2 academic years of study in Australia in the last 6 months, and are you 35 or under?",
      help: "The study must be CRICOS-registered and completed over at least 16 calendar months. Hong Kong and BNO passport holders, and graduates relying on a masters by research or PhD, can be under 50 instead.",
      options: [
        { label: "Yes to both", next: "graduate485" },
        { label: "No", next: "score" },
      ],
    },
    {
      id: "score",
      question: "How many points do you score on your own, before any nomination?",
      help: "Count age, English, work, study and partner points. The points-tested visas also need an age under 45 when you're invited, competent English and a positive skills assessment.",
      options: [
        { label: "I can't meet those basics yet", hint: "Under 45, competent English and a skills assessment", next: "notyet" },
        { label: "65 or more", next: "independent189" },
        { label: "60 or more, but under 65", next: "nominated190" },
        { label: "50 or more, but under 60", next: "regional" },
        { label: "Under 50", next: "notyet" },
      ],
    },
    {
      id: "regional",
      question: "Would you live, work and study in regional Australia for at least 3 years?",
      help: "Regional means anywhere except Sydney, Melbourne and Brisbane. Perth, Adelaide, Hobart, Canberra and the Gold Coast all count.",
      options: [
        { label: "Yes", next: "regional491" },
        { label: "No, only Sydney, Melbourne or Brisbane", next: "notyet" },
      ],
    },
  ],
  outcomes: [
    {
      id: "innovation858",
      title: "National Innovation visa (subclass 858)",
      body: "An invitation-only permanent visa for an internationally recognised record of exceptional and outstanding achievement. You lodge a free expression of interest. If invited, you apply within 60 days, with a Form 1000 nomination from someone with a national reputation in your field.",
      watch: [
        "Invitations follow the Ministerial Direction 120 priority order, and Home Affairs gives no progress updates",
        "No points test and no age limit, but applicants under 18 or aged 55 or over must show exceptional benefit to Australia",
      ],
      href: "/visas/skilled/national-innovation-visa-858",
      tone: "match",
    },
    {
      id: "ens186",
      title: "Employer Nomination Scheme visa (subclass 186)",
      body: "After 2 years of full-time sponsored work, your employer can nominate you for permanent residence through the 186 Temporary Residence Transition stream. The nomination must be approved, and you apply as the nominated worker.",
      watch: [
        "You must be under 45 when you apply, unless an exemption applies",
        "You need at least competent English",
      ],
      href: "/visas/employer-sponsored/employer-nomination-scheme-visa-186",
      tone: "match",
    },
    {
      id: "sid482",
      title: "Skills in Demand visa (subclass 482)",
      body: "An approved employer sponsors you for one nominated job, for up to 4 years. After 2 years of sponsored work it is the usual route to permanent residence through the subclass 186.",
      watch: [
        "You usually need at least 1 year of relevant experience in the last 5 years",
        "With a skills assessment and 3 years of experience, the employer may be able to nominate you for the 186 Direct Entry stream instead",
      ],
      href: "/visas/employer-sponsored/skills-in-demand-visa-482",
      tone: "match",
    },
    {
      id: "graduate485",
      title: "Temporary Graduate visa (subclass 485)",
      body: "Recent graduates of Australian study can live and work here with full work rights for 18 months to 3 years, depending on the stream and qualification. Many use the time to build work experience and points for a 189, 190 or 491.",
      watch: [
        "Apply in Australia within 6 months of completing your course",
        "The visa can't be extended, and you generally get only one as the main applicant",
      ],
      href: "/visas/skilled/temporary-graduate-visa-485",
      tone: "match",
    },
    {
      id: "independent189",
      title: "Skilled Independent visa (subclass 189)",
      body: "With 65 points of your own, you can lodge an expression of interest for permanent residence with no sponsor and no regional condition. Invitations go to the highest-ranked expressions of interest, so the score that gets invited is often higher than 65.",
      watch: [
        "In the 4 June 2026 round most professional occupations were invited at 80 points or more",
        "Your occupation must be on the subclass 189 list; if it isn't, a state may nominate you for a 190 or 491",
      ],
      href: "/visas/skilled/skilled-independent-visa-189",
      tone: "match",
    },
    {
      id: "nominated190",
      title: "Skilled Nominated visa (subclass 190)",
      body: "A state or territory nomination adds 5 points, so 60 points of your own can reach the 65 pass mark. The visa is permanent from grant with no regional condition, but each state sets its own occupation list and criteria.",
      watch: [
        "States ask nominees to commit to living and working there for a period",
        "If your state only nominates for regional areas, the 491 adds 15 points instead",
      ],
      href: "/visas/skilled/skilled-nominated-visa-190",
      tone: "match",
    },
    {
      id: "regional491",
      title: "Skilled Work Regional visa (subclass 491)",
      body: "A state nomination, or sponsorship by an eligible relative living in a regional area, adds 15 points, so 50 points of your own can reach 65. It's a 5-year visa: you live and work regionally, and after 3 years you can apply for permanent residence through the subclass 191.",
      watch: [
        "Condition 8579 applies to you and every family member on the visa",
        "Lodge a tax return every year: the 191 needs ATO notices of assessment for 3 of the 5 income years",
      ],
      href: "/visas/skilled/skilled-work-regional-visa-491",
      tone: "match",
    },
    {
      id: "notyet",
      title: "Not yet: build your profile first",
      body: "On these answers, none of these visas fits yet. The points-tested visas need an age under 45 when invited, competent English, a positive skills assessment and at least 65 points including any nomination points.",
      watch: [
        "Proficient English adds 10 points and superior English 20",
        "A Professional Year, a NAATI credential or Australian study can each add 5 points",
        "An employer willing to sponsor you may open the 482 or 186 instead",
      ],
      href: "/visas/skilled/skilled-migration-points-test",
      tone: "stop",
    },
  ],
  footnote: "General information based on the rules checked on 12 October 2026, not advice. Occupation lists, state criteria and your full circumstances decide which visa fits.",
};
