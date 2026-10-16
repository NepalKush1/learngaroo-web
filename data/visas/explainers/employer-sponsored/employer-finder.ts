import type { FinderConfig } from "../types";

// "Which employer-sponsored visa fits?" Shared by the employer-sponsored
// explainers. Every fact here is on a library page (finder text is checked
// against the whole library). No glossary tokens: the finder is shared, and
// a token needs a matching glossary entry on every page that uses it.

export const employerFinder: FinderConfig = {
  id: "employer-finder",
  navLabel: "Which visa?",
  eyebrow: "Visa finder",
  title: "Which employer-sponsored visa fits?",
  highlight: "fits",
  subtitle: "Two to four one-tap questions point you to the likely starting point, and what to check before you rely on it.",
  start: "kind",
  questions: [
    {
      id: "kind",
      question: "What kind of work do you want to do in Australia?",
      options: [
        { label: "Skilled work for an employer, for years or permanently", next: "offer" },
        { label: "Something temporary: specialist work, training, an activity or the PALM scheme", next: "temp" },
      ],
    },
    {
      id: "offer",
      question: "Has an Australian employer offered to sponsor you?",
      options: [
        { label: "Yes, and I've worked 2 of the last 3 years for my sponsor on a 482 or 457", next: "trt" },
        { label: "Yes, a new job offer", next: "where" },
        { label: "No employer will sponsor me", next: "points" },
      ],
    },
    {
      id: "where",
      question: "Where is the job?",
      help: "Regional Australia means everywhere except Sydney, Melbourne and Brisbane. The work address decides, not the head office.",
      options: [
        { label: "Regional Australia, such as Perth, Adelaide, Hobart or a country town", next: "regional" },
        { label: "Sydney, Melbourne or Brisbane", next: "city" },
      ],
    },
    {
      id: "regional",
      question: "Which describes you and the job?",
      options: [
        { label: "3 years' full-time experience, a skills assessment, and I'm under 45", next: "visa494" },
        { label: "At least 1 year of experience, in a Core Skills or Specialist Skills role", next: "visa482" },
        { label: "The occupation isn't on a list, or the business needs concessions", next: "agreement" },
      ],
    },
    {
      id: "city",
      question: "Which describes you and the job?",
      options: [
        { label: "3 years' experience, a skills assessment, under 45, and a Core Skills occupation", next: "direct" },
        { label: "At least 1 year of experience, in a Core Skills or Specialist Skills role", next: "visa482" },
        { label: "The occupation isn't on a list, or the business needs concessions", next: "agreement" },
      ],
    },
    {
      id: "temp",
      question: "Which is closest to the work?",
      options: [
        { label: "Highly specialised, non-ongoing work of up to 6 months", next: "visa400" },
        { label: "Structured workplace training or professional development", next: "visa407" },
        { label: "Entertainment, sport, religious work, research, an exchange or an invited event", next: "visa408" },
        { label: "Seasonal or longer work under the PALM scheme", next: "visa403" },
        { label: "Work for a foreign government, a diplomat or an international organisation", next: "visa403" },
      ],
    },
  ],
  outcomes: [
    {
      id: "visa482",
      title: "Skills in Demand visa (subclass 482)",
      body: "The usual starting point when an employer sponsors you for a skilled job. It needs at least 1 year of relevant experience and lasts up to 4 years. After 2 years of sponsored work, your employer can nominate you for permanent residence through the subclass 186.",
      watch: [
        "The job must fit a stream: a Core Skills Occupation List occupation paid at least A$79,423, or a Specialist Skills role paid at least A$146,576",
        "IELTS 5.0 in each band, or equivalent, unless you're exempt",
        "There's no age limit, but the 186 usually needs you to be under 45 when you apply",
      ],
      href: "/visas/employer-sponsored/skills-in-demand-visa-482",
    },
    {
      id: "trt",
      title: "Employer Nomination Scheme visa (subclass 186), Temporary Residence Transition stream",
      body: "You've done the 2 years of sponsored work this stream asks for. Your most recent sponsor nominates you, and you become a permanent resident when the visa is granted.",
      watch: [
        "You must be under 45 when you apply, unless an exemption applies",
        "Competent English: IELTS 6 in each band, or equivalent, or an exempt passport",
        "Lodge within 6 months of the nomination being approved",
      ],
      href: "/visas/employer-sponsored/employer-nomination-scheme-visa-186",
    },
    {
      id: "direct",
      title: "Employer Nomination Scheme visa (subclass 186), Direct Entry stream",
      body: "With a positive skills assessment and 3 years of relevant experience, an employer can nominate you for permanent residence straight away, without a 482 first.",
      watch: [
        "The occupation must be on the Core Skills Occupation List",
        "You must be under 45 when you apply and have Competent English, unless exempt",
        "If you don't meet these yet, a 482 now and the 186 after 2 years of sponsored work is the usual route",
      ],
      href: "/visas/employer-sponsored/employer-nomination-scheme-visa-186",
    },
    {
      id: "visa494",
      title: "Skilled Employer Sponsored Regional (Provisional) visa (subclass 494)",
      body: "A 5-year visa for a job with an employer in regional Australia. You live, work and study in a regional area, and after 3 years you can apply for permanent residence through the subclass 191.",
      watch: [
        "The occupation must be on the list for the 494, and you need Competent English",
        "Casual work doesn't count towards the 3 years of experience",
        "If the occupation is on the Core Skills Occupation List, the permanent 186 Direct Entry stream may also be open to you",
      ],
      href: "/visas/employer-sponsored/skilled-employer-sponsored-regional-visa-494",
    },
    {
      id: "agreement",
      title: "A labour agreement, such as a DAMA",
      body: "When the job doesn't fit the standard rules, the employer may be able to use a labour agreement. It could be a Designated Area Migration Agreement (DAMA) for its region, an industry agreement or its own. You'd then apply for a 482, 186 or 494 in the Labour agreement stream.",
      watch: [
        "Only the employer can request an agreement, and it must show Australian workers can't fill the role",
        "A DAMA request needs the Designated Area Representative's endorsement first",
        "Salary concessions are only possible in Category 3 regional areas",
      ],
      href: "/visas/employer-sponsored/labour-agreements-and-dama",
    },
    {
      id: "visa400",
      title: "Temporary Work (Short Stay Specialist) visa (subclass 400)",
      body: "For highly specialised work that can't reasonably be done by someone in Australia and will be finished within 6 months. You apply from outside Australia, and no sponsor or nomination is needed.",
      watch: [
        "Stays over 3 months need a strong business case",
        "Performing, or a production shown in Australia, needs the 408 Entertainment stream instead",
        "It can't be extended and doesn't lead to permanent residence",
      ],
      href: "/visas/employer-sponsored/temporary-work-short-stay-specialist-visa-400",
    },
    {
      id: "visa407",
      title: "Training visa (subclass 407)",
      body: "For structured workplace training or professional development for up to 2 years. An approved temporary activities sponsor runs the program and, unless it's a Commonwealth agency, nominates you first.",
      watch: [
        "It can't be used to fill a vacancy, and any work must be paid",
        "You usually need to be 18 or over, with Functional English",
        "It doesn't lead directly to permanent residence",
      ],
      href: "/visas/employer-sponsored/training-visa-407",
    },
    {
      id: "visa408",
      title: "Temporary Activity visa (subclass 408)",
      body: "For a specific activity such as entertainment, sport, religious work, research, a staff exchange or an invited event. The stream sets how long you can stay, from 3 months to 2 years.",
      watch: [
        "Applying in Australia, or staying over 3 months, needs an approved temporary activities sponsor",
        "You can do only the approved activity",
        "It doesn't lead to permanent residence",
      ],
      href: "/visas/employer-sponsored/temporary-activity-visa-408",
    },
    {
      id: "visa403",
      title: "Temporary Work (International Relations) visa (subclass 403)",
      body: "For work linked to Australia's international relations. Its main stream is the PALM scheme, where approved employers recruit workers from Pacific island countries and Timor-Leste. Other streams cover government agreements, foreign government agencies, diplomats' domestic workers and people with privileges and immunities.",
      watch: [
        "PALM workers need a recruitment approval letter from a PALM approved employer",
        "You usually apply from outside Australia",
        "It doesn't lead to permanent residence, though PALM workers may enter the Pacific Engagement visa ballot",
      ],
      href: "/visas/employer-sponsored/temporary-work-international-relations-visa-403",
    },
    {
      id: "points",
      title: "Points-tested skilled visas",
      body: "Every visa in this group needs an employer or organisation behind it. Without a sponsor, the points-tested visas (subclasses 189, 190 and 491) may suit, because they don't depend on a single employer.",
      watch: [
        "You need an occupation on the relevant list, a skills assessment and enough points",
        "The 190 needs a state or territory nomination; the 491 needs one, or sponsorship by an eligible relative",
      ],
      href: "/visas/skilled/skilled-migration-points-test",
      tone: "stop",
    },
  ],
  footnote: "A general guide, not advice. Your occupation, experience, age, English and the employer's circumstances decide what's possible.",
};
