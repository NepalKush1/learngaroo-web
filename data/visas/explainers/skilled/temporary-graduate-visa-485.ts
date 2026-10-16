import type { VisaExplainer } from "../types";
import { ICON } from "../icons";

// Interactive explainer for the Temporary Graduate visa (subclass 485).
// Every figure matches data/visas/skilled.ts (checked against Home Affairs
// on 12 October 2026). The stream finder's regional categories come from
// the 491 page and the Home Affairs Second Post-Higher Education Work
// stream page (re-read on 13 October 2026), recorded in verifiedExtras.

const HA_485_SECOND =
  "https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/temporary-graduate-485/second-post-higher-education-work";

export const temporaryGraduate485Explainer: VisaExplainer = {
  slug: "temporary-graduate-visa-485",
  factsAsAt: "12 October 2026",
  oneLiner:
    "A temporary visa for international students who have just finished at least 2 academic years of study in Australia. It gives full work rights for 18 months to 3 years, often as a bridge to a skilled visa.",
  bigIdeas: [
    { title: "For recent graduates", body: "You completed at least 2 academic years of CRICOS-registered study in Australia, in the last 6 months.", icon: ICON.academicCap },
    { title: "Work for anyone", body: "Full work rights with any employer, for 18 months to 3 years depending on your stream and qualification.", icon: ICON.briefcase },
    { title: "A bridge, not permanent residence", body: "It can't be extended. Use it to build experience and points for a skilled or employer-sponsored visa.", icon: ICON.arrowsRightLeft },
  ],
  heroCard: [
    { label: "Who it's for", value: "Recent graduates of Australian study", icon: ICON.academicCap },
    { label: "Age", value: "35 or under, with some exceptions", icon: ICON.calendarDays },
    { label: "How long", value: "18 months to 3 years (longer in some cases)", icon: ICON.clock },
    { label: "Your work", value: "Any job, any employer", icon: ICON.briefcase },
    { label: "Where you apply", value: "In Australia, within 6 months of completing", icon: ICON.mapPin },
    { label: "Visa charge", value: "A$5,750 (Second stream A$2,265)", icon: ICON.currencyDollar },
  ],
  actors: [
    {
      id: "you",
      name: "You (the graduate)",
      short: "You",
      icon: ICON.user,
      tone: "green",
      role: "Apply in Australia within 6 months of your [[completion-date|completion date]], with every time-of-application document ready.",
      does: [
        "Get an English result from the last 12 months",
        "Apply for an [[afp|AFP check]] at least the day before you lodge",
        "Arrange [[ahi|adequate health insurance]] for every applicant",
        "Choose the right stream: you can't change it later",
      ],
    },
    {
      id: "provider",
      name: "Your education provider",
      short: "Provider",
      icon: ICON.buildingLibrary,
      tone: "orange",
      role: "Confirms you've completed your course, which starts your 6-month window.",
      does: [
        "Tells you in writing that you've met the academic requirements",
        "Issues a completion letter with dates, campus and mode of study",
        "Issues your academic transcripts",
      ],
    },
    {
      id: "assessor",
      name: "The assessing authority",
      short: "Assessor",
      icon: ICON.clipboardDocumentCheck,
      tone: "amber",
      role: "Post-Vocational Education Work stream only: assesses your skills in an [[mltssl|MLTSSL]] occupation.",
      does: [
        "Is the authority listed for your nominated occupation",
        "Gives you a receipt when you apply, which is enough to lodge",
        "May issue a provisional 485 assessment, which isn't valid for permanent visas",
      ],
    },
    {
      id: "government",
      name: "Department of Home Affairs",
      short: "Home Affairs",
      icon: ICON.shieldCheck,
      tone: "blue",
      role: "Checks the time-of-application rules and decides the visa.",
      does: [
        "Checks your study, age, English, AFP check and insurance",
        "Usually grants a [[bva|Bridging visa A]] when you lodge",
        "Grants the visa with [[c8501|condition 8501]] (health insurance)",
      ],
    },
  ],
  flows: [
    {
      from: "provider",
      to: "you",
      label: "Completion letter",
      detail: "Your provider tells you in writing that you've met the academic requirements. That date, not graduation, starts your 6-month window.",
    },
    {
      from: "you",
      to: "assessor",
      label: "Skills assessment",
      detail: "Post-Vocational Education Work stream only: you apply for a [[skills-assessment|skills assessment]] in an MLTSSL occupation before you lodge.",
    },
    {
      from: "you",
      to: "government",
      label: "You apply",
      detail: "You lodge in ImmiAccount while in Australia, with your English result, AFP receipt and health insurance evidence, and pay the charge.",
    },
    {
      from: "government",
      to: "you",
      label: "Visa granted",
      detail: "You can live, work and study in Australia with no work limit until the visa ends.",
    },
  ],
  journeyTitle: "From course completion to your graduate visa",
  journeyHighlight: "graduate visa",
  stages: [
    {
      id: "complete",
      short: "Complete",
      title: "Finish your course and get the completion letter",
      who: ["provider", "you"],
      description: "Ask for your completion letter as soon as you're told you've met the academic requirements. Your 6-month window starts on that [[completion-date|completion date]].",
      points: [
        "The completion date is the written notification, not graduation",
        "Count 6 months from it: that's your deadline, and late applications can't be accepted",
        "Home Affairs doesn't give pre-lodgement assessments",
      ],
      youHold: "A completion letter and a lodgement deadline",
      icon: ICON.academicCap,
    },
    {
      id: "english",
      short: "English",
      title: "Get an English result from the last 12 months",
      who: ["you"],
      description: "Take an approved test at a secure test centre, and finish any retake before you lodge.",
      points: [
        "For tests from 7 August 2025, for example IELTS 6.5 overall with 5.5 in each component",
        "Online tests aren't accepted",
        "Citizens of the UK, US, Canada, New Zealand or Ireland can use their passport instead",
      ],
      youHold: "A test result that's valid when you lodge",
      cost: "Test fee, paid by you",
      icon: ICON.chatBubbleLeftRight,
    },
    {
      id: "checks",
      short: "Checks",
      title: "Apply for an AFP check and arrange health insurance",
      who: ["you"],
      description: "These are time-of-application rules: they must already be met on the day you lodge.",
      points: [
        "Apply for the [[afp|AFP check]] at least the day before you lodge",
        "Everyone 16 or over needs one",
        "Every applicant needs [[ahi|adequate health insurance]]; student cover must be replaced",
      ],
      youHold: "AFP receipts dated before lodgement and insurance evidence for everyone",
      cost: "AFP and insurance costs, paid by you",
      icon: ICON.fingerPrint,
    },
    {
      id: "assess",
      short: "Assess",
      title: "Post-Vocational stream: apply for a skills assessment",
      who: ["you", "assessor"],
      description: "Nominate an [[mltssl|MLTSSL]] occupation closely related to your qualification, and apply to the authority listed for it.",
      points: [
        "The assessment or the receipt for your application is enough to lodge",
        "You can't change the occupation after you lodge",
        "A provisional 485 assessment isn't valid for permanent visas",
      ],
      youHold: "A skills assessment, or a receipt from the assessing authority",
      cost: "Set by the assessing authority, paid by you",
      icon: ICON.clipboardDocumentCheck,
    },
    {
      id: "apply",
      short: "Apply",
      title: "Lodge in Australia within 6 months",
      who: ["you", "government"],
      description: "Lodge in ImmiAccount with your completion, English, AFP and insurance evidence for every applicant, and pay the charge.",
      points: [
        "Choose your stream carefully: it can't be changed after you lodge",
        "A$5,750 for you in the main streams; A$2,265 in the Second stream",
        "You're usually granted a [[bva|Bridging visa A]] that starts when your Student visa ends",
      ],
      youHold: "A valid application and a Bridging visa A",
      cost: "From A$2,265 or A$5,750, paid by you",
      icon: ICON.paperAirplane,
    },
    {
      id: "decision",
      short: "Decision",
      title: "Health examinations and the decision",
      who: ["government", "you"],
      description: "Do any health examinations Home Affairs asks for and reply to requests within the time given. You can be in or outside Australia at the decision.",
      points: [
        "Home Affairs recommends withdrawing any other undecided visa application in writing after a grant",
        "Check current processing times on the Home Affairs tool",
      ],
      youHold: "A Temporary Graduate visa from the grant date",
      icon: ICON.checkBadge,
    },
    {
      id: "work",
      short: "Work",
      title: "Work, and plan your next visa early",
      who: ["you"],
      description: "Work in any job for any employer, keep your health insurance, and use the time to build towards a longer-term visa.",
      points: [
        "Keep adequate health insurance for your whole stay ([[c8501|condition 8501]])",
        "The visa can't be extended",
        "Build experience, a full skills assessment and English points for a 189, 190 or 491, or find an employer sponsor",
      ],
      youHold: "Australian work experience towards your next visa",
      icon: ICON.briefcase,
    },
  ],
  check: {
    ok: {
      title: "You look on track",
      body: "Nothing in your answers rules you out. Next: confirm your stream, your 6-month deadline and every document you need on the day you lodge.",
    },
    disclaimer: "A general self-check, not advice or a prediction. Your course, your documents and your full circumstances decide the outcome.",
  },
  quiz: [
    {
      id: "completion",
      topic: "Course completion",
      question: "When did your provider tell you in writing that you'd completed your course?",
      options: [
        { value: "recent", label: "In the last 6 months", status: "ok", note: "You're inside the 6-month window. Lodge before it closes: late applications can't be accepted." },
        {
          value: "late",
          label: "More than 6 months ago",
          status: "stop",
          note: "The qualification must have been completed in the 6 months before you apply, so this course can't be used.",
          link: { label: "Talk through your options", href: "/bookings" },
        },
        {
          value: "notyet",
          label: "I haven't completed it yet",
          status: "todo",
          note: "You can apply only once the course is completed, from the day after your completion date.",
        },
      ],
    },
    {
      id: "age",
      topic: "Age",
      question: "How old are you?",
      options: [
        { value: "under36", label: "35 or under", status: "ok", note: "You meet the age rule for every stream." },
        {
          value: "under50",
          label: "Under 50, with a Hong Kong or BNO passport, or relying on a masters by research or PhD",
          status: "ok",
          note: "With a Hong Kong or BNO passport, or a masters by research or PhD, the age limit is under 50.",
        },
        {
          value: "over",
          label: "36 or older, and none of those exceptions apply",
          status: "stop",
          note: "The 485 isn't available. Other visas may fit, so get advice on your options.",
          link: { label: "Talk through your options", href: "/bookings" },
        },
      ],
    },
    {
      id: "study",
      topic: "Australian study",
      question: "Did you study at least 2 academic years (92 weeks) in Australia, over at least 16 calendar months?",
      help: "CRICOS-registered, taught in English, while you held a visa that allowed study. More than one course can be combined.",
      options: [
        { value: "yes", label: "Yes", status: "ok", note: "That meets the study requirement, as long as failed subjects and credit aren't counted in the total." },
        {
          value: "credit",
          label: "Some of it was credit from overseas or non-CRICOS study",
          status: "todo",
          note: "That credit doesn't count. Check your Australian study still reaches 92 weeks over 16 calendar months.",
        },
        {
          value: "no",
          label: "No",
          status: "stop",
          note: "The 485 needs the full study requirement. Further study, or another visa, may be the next step.",
          link: { label: "Study to permanent residence", href: "/visas/study/study-to-permanent-residence" },
        },
      ],
    },
    {
      id: "visa",
      topic: "Your current visa",
      question: "Which visa do you hold now?",
      options: [
        { value: "student", label: "A Student visa", status: "ok", note: "You can apply, as long as it isn't a Student visa sponsored by Defence or Foreign Affairs." },
        {
          value: "other",
          label: "A substantive visa, or a Bridging visa A or B, after a Student visa in the last 6 months",
          status: "ok",
          note: "You can apply, if the bridging visa was granted on a valid application.",
        },
        {
          value: "bvc",
          label: "A Bridging visa C, D or E, or no visa",
          status: "stop",
          note: "You can't apply for a 485 in this situation. Get advice before you do anything else.",
          link: { label: "Book urgent advice", href: "/bookings" },
        },
        {
          value: "outside",
          label: "I'm outside Australia",
          status: "stop",
          note: "The main applicant must be in Australia to apply. Only family joining later can apply from outside.",
        },
      ],
    },
    {
      id: "english",
      topic: "English",
      question: "Do you have an English result from the last 12 months?",
      options: [
        { value: "yes", label: "Yes, at the 485 scores, from a secure test centre", status: "ok", note: "Attach the test report. Any retake must be finished before you lodge." },
        { value: "passport", label: "I hold a UK, US, Canadian, NZ or Irish passport", status: "ok", note: "As a citizen holding that passport, you meet the requirement." },
        {
          value: "no",
          label: "No, or my result is older than 12 months",
          status: "todo",
          note: "Book an approved test at a secure test centre in time to have the result before you lodge.",
          link: { label: "Practise PTE on Learniiz", href: "https://www.learniiz.com", external: true },
        },
      ],
    },
    {
      id: "afp",
      topic: "AFP check",
      question: "Has everyone 16 or over applied for an AFP police check?",
      options: [
        { value: "yes", label: "Yes, at least a day before we'll lodge", status: "ok", note: "Keep each receipt to attach to the application." },
        {
          value: "no",
          label: "Not yet",
          status: "todo",
          note: "Apply at least the day before you lodge. Applying on the same day doesn't meet the requirement.",
        },
      ],
    },
    {
      id: "insurance",
      topic: "Health insurance",
      question: "Does every applicant have adequate health insurance?",
      options: [
        { value: "yes", label: "Yes, a policy that meets the standard", status: "ok", note: "Attach evidence for everyone, and keep it for the whole stay." },
        {
          value: "student",
          label: "We only have student cover",
          status: "todo",
          note: "Student cover must be replaced by a policy that meets the adequate health insurance standard before you lodge.",
        },
      ],
    },
    {
      id: "previous",
      topic: "Earlier 485",
      question: "Have you held a 485 or 476 visa before as the main applicant?",
      options: [
        { value: "no", label: "No", status: "ok", note: "This would be your first 485, so you'd apply in the Post-Higher or Post-Vocational Education Work stream." },
        {
          value: "regional",
          label: "Yes, a first Post-Higher Education Work visa, after a regional campus degree",
          status: "ok",
          note: "You may fit the Second Post-Higher Education Work stream. Try the stream finder.",
          link: { label: "Open the stream finder", href: "#finder" },
        },
        {
          value: "other",
          label: "Yes, another kind",
          status: "stop",
          note: "You can't be granted another 485 as the main applicant. A skilled or employer-sponsored visa may be the next step.",
          link: { label: "SkillSelect expression of interest", href: "/visas/skilled/skillselect-expression-of-interest" },
        },
      ],
    },
  ],
  myths: [
    {
      myth: "My graduation ceremony starts the 6-month clock.",
      fact: "No. It starts on the date your provider first told you in writing that you met the academic requirements, whatever the ceremony date.",
    },
    {
      myth: "I can apply for the AFP check on the day I lodge.",
      fact: "No. Everyone 16 or over must have applied for it at least the day before the visa application. Applying on the same day doesn't meet the requirement.",
    },
    {
      myth: "I can switch streams after I apply.",
      fact: "No. The qualification you rely on decides the stream, and you can't change stream after you lodge.",
    },
    {
      myth: "I can extend my 485, or get another one later.",
      fact: "It can't be extended, and you can't be granted another as the main applicant. The exception is the Second Post-Higher Education Work stream for regional graduates.",
    },
    {
      myth: "My 485 skills assessment will do for permanent residence.",
      fact: "A provisional assessment issued for the 485 isn't accepted for the 189, 190 or 491. You'll need a full assessment later.",
    },
    {
      myth: "An online English test is fine.",
      fact: "No. The test must be taken at a secure test centre, in the 12 months before you apply, with any retake finished before you lodge.",
    },
    {
      myth: "I'll pay the A$700 charge for applying in Australia.",
      fact: "No. Home Affairs states the Temporary Graduate visa is exempt from the A$700 subsequent temporary application charge.",
    },
  ],
  glossary: [
    {
      id: "completion-date",
      term: "Completion date",
      definition: "The date your provider first told you in writing that you met the academic requirements of your course. Your 6-month window to apply starts here, not at graduation.",
    },
    {
      id: "cricos",
      term: "CRICOS",
      full: "Commonwealth Register of Institutions and Courses for Overseas Students",
      definition: "The register of courses that international students can take on a student visa. Your 2 academic years (92 weeks) of study must be CRICOS-registered.",
    },
    {
      id: "study-requirement",
      term: "Study requirement",
      definition: "At least 2 academic years (92 weeks) of CRICOS-registered study, taught in English. It must be completed in Australia over at least 16 calendar months, while you held a visa that allowed study.",
    },
    {
      id: "mltssl",
      term: "MLTSSL",
      full: "Medium and Long-term Strategic Skills List",
      definition: "The occupation list used for the Post-Vocational Education Work stream. Your qualification must be closely related to an occupation on it.",
    },
    {
      id: "skills-assessment",
      term: "Skills assessment",
      definition: "A decision by the assessing authority for an occupation that your skills are suitable. For the Post-Vocational stream, proof that you've applied is enough to lodge.",
    },
    {
      id: "afp",
      term: "AFP check",
      definition: "An Australian Federal Police National Police Certificate (Immigration/Citizenship - Australia Name Check Only). Everyone 16 or over must apply for it at least the day before the visa application.",
    },
    {
      id: "ahi",
      term: "Adequate health insurance",
      definition: "Health cover that meets the Home Affairs standard, shown by a signed insurer letter, a Medicare card or enrolment evidence. Student cover must be replaced.",
    },
    { id: "c8501", term: "Condition 8501", definition: "You must have and keep adequate health insurance for your whole stay in Australia." },
    {
      id: "c8610",
      term: "Condition 8610",
      definition: "Second stream only: you must live, work and study only in an area that was a designated regional area on the date your visa was granted.",
    },
    {
      id: "bva",
      term: "Bridging visa A",
      definition: "The bridging visa you're usually granted when you lodge. It starts when your Student visa ends and gives full work rights while you wait.",
    },
    {
      id: "regional-categories",
      term: "Category 2 and 3 areas",
      definition: "The two kinds of designated regional area. Category 2 is cities and major regional centres, such as Perth, Adelaide, Canberra, Hobart and the Gold Coast. Category 3 is regional centres and other regional areas.",
    },
    {
      id: "ai-ecta",
      term: "AI-ECTA",
      full: "Australia-India Economic Cooperation and Trade Agreement",
      definition: "The trade agreement that gives Indian nationals longer Post-Higher Education Work stays, up to 4 years for a PhD.",
    },
    {
      id: "subsequent-entrant",
      term: "Subsequent entrant",
      definition: "A partner or child who applies to join you later, from in or outside Australia, while your visa is valid. They pay the full visa application charge.",
    },
    {
      id: "stac",
      term: "Subsequent temporary application charge",
      definition: "An extra A$700 charge on some applications made in Australia. The Temporary Graduate visa is exempt from it.",
    },
  ],
  verifiedExtras: [
    {
      fact: "Designated regional areas cover all of Australia except Sydney, Melbourne and Brisbane. Category 2 is cities and major regional centres (Perth, Adelaide, the Gold Coast, the Sunshine Coast, Canberra, Newcastle and Lake Macquarie, Wollongong and the Illawarra, Geelong and Hobart); Category 3 is regional centres and other regional areas.",
      source: "/visas/skilled/skilled-work-regional-visa-491",
    },
    {
      fact: "Second Post-Higher Education Work stream: if you moved between Category 2 and Category 3 areas you are considered for the shorter visa (1 extra year), unless you lived in Category 2 and 3 areas in Tasmania. Studying or living in Sydney, Melbourne or Brisbane is not eligible.",
      source: HA_485_SECOND,
    },
  ],
  cta: {
    subtitle: "We check your course, deadline and documents against these rules, tell you honestly where you stand, and plan your 485 and the visa after it with you.",
  },
  finder: {
    id: "485-streams",
    navLabel: "Your stream",
    eyebrow: "Stream finder",
    title: "Which 485 stream, and for how long?",
    highlight: "for how long",
    subtitle: "Answer two or three quick questions to see your likely stream and stay. Your grant letter sets the final period.",
    start: "first",
    questions: [
      {
        id: "first",
        question: "Have you held a Temporary Graduate visa before as the main applicant?",
        help: "Holding one as a family member doesn't count here.",
        options: [
          { label: "No, this would be my first", next: "qualification" },
          { label: "Yes", next: "earlier" },
        ],
      },
      {
        id: "earlier",
        question: "Which one did you hold as the main applicant?",
        help: "Pick the visa you held as the main applicant, not one you held as a family member.",
        options: [
          { label: "A Post-Higher Education Work, Post-Study Work or Replacement stream visa", next: "regional" },
          { label: "A Post-Vocational Education Work or Second stream visa, or a subclass 476", next: "nomore" },
        ],
      },
      {
        id: "qualification",
        question: "Which qualification did you just complete?",
        help: "It must meet the [[study-requirement|study requirement]]: at least 2 academic years (92 weeks) of [[cricos|CRICOS]]-registered study in Australia, completed in the last 6 months.",
        options: [
          { label: "Bachelor or honours, coursework or extended masters, or a related graduate diploma", next: "passportDegree" },
          { label: "Masters by research or PhD", next: "passportResearch" },
          { label: "Associate degree, diploma or trade qualification", next: "mltssl" },
        ],
      },
      {
        id: "passportDegree",
        question: "Which passport do you hold?",
        options: [
          { label: "Indian", next: "india" },
          { label: "Hong Kong or British National (Overseas)", next: "hongkong" },
          { label: "Any other passport", next: "phew2" },
        ],
      },
      {
        id: "passportResearch",
        question: "Which passport do you hold?",
        options: [
          { label: "Indian", next: "india" },
          { label: "Hong Kong or British National (Overseas)", next: "hongkong" },
          { label: "Any other passport", next: "phew3" },
        ],
      },
      {
        id: "mltssl",
        question: "Is your qualification closely related to an occupation on the MLTSSL?",
        help: "The [[mltssl|MLTSSL]] is the Medium and Long-term Strategic Skills List. You nominate that occupation when you apply.",
        options: [
          { label: "Yes", next: "pvew" },
          { label: "No", next: "novocational" },
        ],
      },
      {
        id: "regional",
        question: "Where did you study for that degree, and where have you lived for the last 2 years?",
        help: "Regional means a designated regional area: anywhere except Sydney, Melbourne and Brisbane. See [[regional-categories|Category 2 and 3 areas]].",
        options: [
          { label: "Only in Category 3 areas, for both study and living", next: "second2" },
          { label: "Only in regional Tasmania (Category 2 or 3), for both", next: "second2" },
          { label: "Any other regional mix that includes a Category 2 area", next: "second1" },
          { label: "Sydney, Melbourne or Brisbane, for either one", next: "nosecond" },
        ],
      },
    ],
    outcomes: [
      {
        id: "phew2",
        title: "Post-Higher Education Work stream: 2 years",
        body: "A bachelor (including honours), a coursework or extended masters, or a related graduate diploma usually gives a 2-year stay. You must be 35 or under when you apply, and lodge in Australia within 6 months of completing your course.",
        watch: ["You can't change stream after you apply", "The base charge is A$5,750 for you"],
        href: "/visas/skilled/temporary-graduate-visa-485",
        tone: "match",
      },
      {
        id: "phew3",
        title: "Post-Higher Education Work stream: 3 years",
        body: "A masters by research or a PhD gives a 3-year stay. If you rely on one of these, you can apply while under 50 instead of 35 or under.",
        watch: ["Lodge in Australia within 6 months of completing your course", "You can't change stream after you apply"],
        href: "/visas/skilled/temporary-graduate-visa-485",
        tone: "match",
      },
      {
        id: "india",
        title: "Post-Higher Education Work stream: Indian nationals",
        body: "Under [[ai-ecta|AI-ECTA]], Indian nationals get 2 years for a bachelor and 4 years for a PhD. A bachelor with first class honours in STEM (including ICT), or any masters, gives 3 years.",
        watch: [
          "The age limit is 35 or under, or under 50 if you rely on a masters by research or PhD",
          "Lodge in Australia within 6 months of completing your course",
        ],
        href: "/visas/skilled/temporary-graduate-visa-485",
        tone: "match",
      },
      {
        id: "hongkong",
        title: "Hong Kong or BNO passport: up to 5 years",
        body: "Hong Kong and BNO passport holders may stay up to 5 years in either the Post-Higher or Post-Vocational Education Work stream. They can apply while under 50, and lower English scores apply, such as IELTS 6 overall with 5 in each component, or PTE 47 overall.",
        watch: ["A 5-year 485 can lead to the subclass 189 Hong Kong stream after 4 years, or the 191 Hong Kong stream after 3 years in a regional area"],
        href: "/visas/skilled/temporary-graduate-visa-485",
        tone: "match",
      },
      {
        id: "pvew",
        title: "Post-Vocational Education Work stream: 18 months",
        body: "An associate degree, diploma or trade qualification closely related to an MLTSSL occupation gives 18 months. When you lodge, attach your [[skills-assessment|skills assessment]] or proof that you've applied for one in that occupation.",
        watch: [
          "You can't change the occupation after you lodge",
          "Hong Kong and BNO passport holders may stay up to 5 years",
          "A provisional 485 assessment isn't accepted for a 189, 190 or 491 later",
        ],
        href: "/visas/skilled/temporary-graduate-visa-485",
        tone: "match",
      },
      {
        id: "novocational",
        title: "This qualification doesn't fit a 485",
        body: "The Post-Vocational Education Work stream needs a qualification closely related to an occupation on the MLTSSL. Without that link, an associate degree, diploma or trade qualification can't support a 485.",
        watch: ["Further study, or another visa, may be the next step"],
        href: "/visas/study/study-to-permanent-residence",
        tone: "stop",
      },
      {
        id: "second2",
        title: "Second Post-Higher Education Work stream: 2 more years",
        body: "Studying and living only in Category 3 areas, or only in regional Tasmania, gives 2 extra years. You must still hold your first visa and have lived only in designated regional areas for the 2 years before you apply.",
        watch: [
          "Any work or study on your first visa must have been in a regional area",
          "[[c8610|Condition 8610]] then keeps you in a designated regional area",
          "The base charge is A$2,265 for you",
        ],
        href: "/visas/skilled/temporary-graduate-visa-485",
        tone: "match",
      },
      {
        id: "second1",
        title: "Second Post-Higher Education Work stream: 1 more year",
        body: "If a Category 2 area is part of your study or residence, you usually get 1 extra year; regional Tasmania is the exception. You must still hold your first visa and have lived only in designated regional areas for the 2 years before you apply.",
        watch: [
          "Any work or study on your first visa must have been in a regional area",
          "[[c8610|Condition 8610]] then keeps you in a designated regional area",
          "The base charge is A$2,265 for you",
        ],
        href: "/visas/skilled/temporary-graduate-visa-485",
        tone: "match",
      },
      {
        id: "nosecond",
        title: "No Second stream visa on these facts",
        body: "The Second stream needs a degree from a campus in a designated regional area, and 2 years living only in designated regional areas immediately before you apply. Sydney, Melbourne and Brisbane don't count.",
        watch: ["Skilled or employer-sponsored visas may be the next step"],
        href: "/visas/skilled/skillselect-expression-of-interest",
        tone: "stop",
      },
      {
        id: "nomore",
        title: "No second 485 as the main applicant",
        body: "A Post-Vocational Education Work visa, a Second stream visa or a subclass 476 held as the main applicant rules out another 485 as the main applicant.",
        watch: ["Skilled or employer-sponsored visas may be the next step"],
        href: "/visas/skilled/skillselect-expression-of-interest",
        tone: "stop",
      },
    ],
    footnote: "General information based on the rules checked on 12 October 2026. Your grant letter sets your exact stay, and you can't change stream after you apply.",
  },
  fees: {
    variantLabel: "Which stream?",
    variants: [
      {
        id: "main",
        label: "Post-Higher or Post-Vocational Education Work stream",
        primary: [{ label: "Base application charge", amount: 5750 }],
        adult: [{ label: "Each additional applicant 18 or over", amount: 2875 }],
        child: [{ label: "Each additional applicant under 18", amount: 1450 }],
      },
      {
        id: "second",
        label: "Second Post-Higher Education Work stream",
        primary: [{ label: "Base application charge", amount: 2265 }],
        adult: [{ label: "Each additional applicant 18 or over", amount: 1140 }],
        child: [{ label: "Each additional applicant under 18", amount: 575 }],
      },
    ],
    maxAdults: 3,
    maxChildren: 5,
    notIncluded:
      "Not included: the English test, AFP check, health insurance, health examinations and, for the Post-Vocational stream, the skills assessment.",
    notes: [
      "The 485 is exempt from the A$700 subsequent temporary application charge.",
      "Family members who join you later as subsequent entrants pay the full visa application charge.",
      "A paper application, only if Home Affairs allows one, adds an A$80 non-internet charge.",
      "A lower charge applies automatically in ImmiAccount when the main applicant holds a passport from a listed Pacific Island country or Timor-Leste.",
      "The charge isn't refunded if the visa is refused.",
    ],
    confirmUrl: "https://immi.homeaffairs.gov.au/visas/visa-pricing-estimator",
    confirmLabel: "Home Affairs Visa Pricing Estimator",
  },
};
