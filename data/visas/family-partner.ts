import type { VisaPage } from "./types";

// Family and partner visas: Partner (820/801 and 309/100), Prospective
// Marriage (300), Child (101/802), Adoption (102), Orphan Relative (117/837),
// Dependent Child (445) and New Zealand Citizen Family Relationship (461).
// Figures checked against Home Affairs and the Migration Regulations 1994
// (compilation No. 288, in force 1 July 2026) on 12 October 2026.

const REGS = "https://www.legislation.gov.au/F1996B03551/latest/text";
const ACT = "https://www.legislation.gov.au/C1958A00062/latest/text";
const HA = "https://immi.homeaffairs.gov.au";
const PROCESSING_TIMES = `${HA}/visas/getting-a-visa/visa-processing-times/global-visa-processing-times`;

export const familyPartnerPages: VisaPage[] = [
  // ───────────────────────────────────────────────────────────────────────
  // 1. Partner visa (onshore) subclasses 820 and 801
  // ───────────────────────────────────────────────────────────────────────
  {
    slug: "partner-visa-onshore-820-801",
    category: "family",
    kind: "visa",
    subclass: "820/801",
    name: "Partner visa (onshore)",
    title: "Partner visa (subclasses 820 and 801)",
    seoTitle: "Partner visa 820/801 (onshore): eligibility, cost and PR",
    seoDescription:
      "Partner visa (subclass 820/801) for spouses and de facto partners in Australia: 12-month de facto rule, sponsor limits, Schedule 3, A$11,710 charge, 2026 guide.",
    intro:
      "The Partner visa (subclasses 820 and 801) lets the spouse or de facto partner of an Australian citizen, Australian permanent resident or eligible New Zealand citizen stay in Australia with their partner. You lodge one application in Australia and pay one charge: the temporary subclass 820 is decided first, and the permanent subclass 801 is normally assessed two years after lodgement if the relationship is still genuine and continuing. It is the main onshore route from a relationship to permanent residence and, later, citizenship.",
    factsAsAt: "12 October 2026",
    permanent: true,
    tags: ["Pathway to PR", "Family sponsor required", "Apply in Australia"],
    keyFacts: [
      { label: "Government fee", value: "A$11,710", note: "Primary applicant, 1 July 2026 charge; one charge covers both the 820 and the 801. A$1,955 for Prospective Marriage (subclass 300) visa holders" },
      { label: "Length of stay", value: "820: until the 801 is decided; 801: permanent", note: "The 801 carries a five-year travel facility from grant" },
      { label: "Work rights", value: "Full work and study rights on the 820", note: "A Bridging visa A keeps the work condition of the visa you held when you applied" },
      { label: "Pathway to permanent residence", value: "Subclass 801, assessed from two years after lodgement", note: "Sooner if you were in a long-term partner relationship when you applied" },
      { label: "Where you must be", value: "In Australia when you apply; in or outside Australia when the 820 or 801 is granted", note: "Not in immigration clearance at lodgement" },
      { label: "Sponsor", value: "Your partner, aged 18 or over", note: "Sponsorship must be approved; limits of two partner sponsorships and a five-year gap apply" },
    ],
    alert: {
      title: "Processing order changed on 25 July 2026",
      body: "Ministerial Direction 117 replaced Direction 102 on 25 July 2026. Onshore partner applications remain in the highest priority group, behind only ministerial intervention cases. Priority processing requests are only considered where the application is complete and involves special compassionate circumstances.",
      href: `${HA}/visas/getting-a-visa/visa-processing-times/visa-processing-priorities/family-visa`,
      linkLabel: "Family visa processing priorities",
    },
    whoFor: [
      "You are married to, or have lived in a de facto relationship for at least 12 months with, an Australian citizen, permanent resident or eligible New Zealand citizen and you are in Australia on a substantive visa.",
      "You hold a Prospective Marriage visa (subclass 300), have married your fiance or fiancee in Australia and want to stay permanently at the reduced charge.",
      "You have registered your relationship with a state or territory registry of births, deaths and marriages but have lived together for less than 12 months.",
      "Your visa has ceased or been cancelled and you want to know whether the Schedule 3 criteria can be set aside for compelling reasons.",
      "Your relationship ended because of family violence after you applied, or your sponsor died, and you need to know whether the visa can still be granted.",
    ],
    eligibility: [
      {
        title: "Spouse or de facto partner of an eligible sponsor",
        detail:
          "At the time of application and decision you must be the spouse (a marriage recognised as valid under Australian law) or the de facto partner of an Australian citizen, an Australian permanent resident or an eligible New Zealand citizen (a New Zealand citizen who is a protected Special Category visa holder). De facto partners and their sponsors must both be 18 or older; married applicants must normally be 18 because that is the marriageable age in Australia. Same-sex and opposite-sex relationships are treated the same way.",
        legal: "Migration Act 1958, ss 5CB, 5F and 12; Migration Regulations 1994, reg 2.03A(2), Sch 2 cl 820.211(2) and 820.221",
      },
      {
        title: "A genuine and continuing relationship, shown through four aspects",
        detail:
          "The Department must consider all the circumstances of the relationship, including (1) the financial aspects: joint ownership of property or major assets, joint liabilities, pooling of money and how day-to-day expenses are shared; (2) the nature of the household: joint responsibility for children, living arrangements and sharing of housework; (3) the social aspects: whether you present as a couple, what friends and family understand your relationship to be, and joint social activities; and (4) the nature of your commitment: how long the relationship has lasted, how long you have lived together, companionship and emotional support, and whether you see it as long term. You must have a mutual commitment to a shared life to the exclusion of all others and live together, or not live separately and apart on a permanent basis.",
        legal: "Migration Regulations 1994, regs 1.09A(3) and 1.15A(3)",
      },
      {
        title: "12-month de facto relationship, unless an exception applies",
        detail:
          "A de facto applicant must have been in the de facto relationship for at least the 12 months ending immediately before the date of application. The Department says time spent dating or in an online relationship may not count. The 12-month rule does not apply if you can show compelling and compassionate circumstances, if the relationship is registered under a prescribed state or territory law, or if your partner holds or has applied for a permanent humanitarian visa and the relationship was declared to the Department before that visa was granted. Married couples do not face the 12-month rule but must still prove a genuine relationship.",
        legal: "Migration Regulations 1994, reg 2.03A(3) to (5); Acts Interpretation Act 1901, s 2E",
      },
      {
        title: "An approved sponsor",
        detail:
          "Your partner must sponsor you (if your spouse is under 18, a parent or guardian of the spouse who is 18 or older and an Australian citizen, permanent resident or eligible New Zealand citizen sponsors instead). The sponsor lodges a separate 'Sponsorship for a Partner to Migrate to Australia' form in ImmiAccount after your application, using your transaction reference number. The sponsorship must be approved and still in force when the visa is decided, and the sponsor must consent to the Department disclosing any conviction for a relevant offence to you. You cannot change sponsors: the same person sponsors you for two years after the 820 is granted (or after your next arrival if you are outside Australia at grant).",
        legal: "Migration Regulations 1994, Sch 2 cl 820.211(2)(c), 820.221(4) and 820.221A; reg 1.20(2)(c)",
      },
      {
        title: "Sponsorship limitations: two sponsorships and a five-year gap",
        detail:
          "The Department must not approve the sponsorship if the sponsor has already had two other people granted a partner or prospective marriage visa on their sponsorship (that is, more than one other person), if another person was sponsored by them within the last five years (counted from the date of that application), or if the sponsor was themselves granted a visa as someone's partner or prospective spouse within the last five years. The limitation can be waived in compelling circumstances affecting the sponsor; Home Affairs gives the examples of a dependent child of both partners, the death of the previous partner, a previous partner who left with children dependent on the sponsor, or a long-standing relationship. A sponsor granted a Contributory Parent (subclass 143 or 864) visa cannot sponsor a partner they had before that grant for five years. A woman granted a Woman at Risk (subclass 204) visa in the last five years cannot sponsor a former or undeclared partner from before that grant.",
        legal: "Migration Regulations 1994, regs 1.20J and 1.20KA; Sch 2 cl 820.211(2B)",
      },
      {
        title: "Sponsor's character: police checks, relevant offences and child protection",
        detail:
          "The sponsor must provide an Australian Federal Police complete disclosure National Police Certificate and an overseas police certificate from every country where they spent a total of 12 months or more in the last 10 years since turning 16 (certificates are valid for 12 months). The sponsorship must be refused if the sponsor has a significant criminal record for a relevant offence (violence, harassment or stalking, breach of a protection order, firearms or weapons, people smuggling, human trafficking, slavery or forced marriage, or attempting, aiding or abetting those offences), meaning a sentence of death, life imprisonment, 12 months or more, or terms totalling 12 months or more. The Department may still approve the sponsorship if it is reasonable, having regard to the time since the sentence, the best interests of any children and the length of the relationship. Refusal also follows if a requested police check is not provided within a reasonable time or the sponsor will not consent to disclosure of convictions. If an applicant is under 18, a charge for a registrable child sex offence means refusal unless the charge was dismissed, and a conviction means refusal unless quashed or very limited exceptions apply.",
        legal: "Migration Regulations 1994, regs 1.20KB, 1.20KC and 1.20KD; Sch 2 cl 820.221(4)(b) and (5)",
      },
      {
        title: "In Australia on a substantive visa, or satisfy Schedule 3",
        detail:
          "You and any family members applying with you must be in Australia, but not in immigration clearance, when you apply, and you must not hold a Transit (subclass 771) visa. If you do not hold a substantive visa (for example you are on a bridging visa or are unlawful), you must satisfy Schedule 3 criteria 3001 (the application is made within 28 days after your last substantive visa ceased), 3003 and 3004 (you are without a substantive visa because of factors beyond your control, there are compelling reasons for grant, you substantially complied with your previous visa conditions and you intend to comply with conditions), unless the Department is satisfied there are compelling reasons for not applying those criteria. Home Affairs also requires applicants without a substantive visa to lodge, with the application, the sponsor's sponsorship form, evidence of the sponsor's status (passport or birth certificate, not a driver licence or Medicare card) and at least two Commonwealth statutory declarations made within the previous six weeks by Australian citizens, permanent residents or eligible New Zealand citizens confirming the relationship; Form 888 is not accepted for this purpose and an application missing these items may be invalid. A person barred by section 48 of the Act after an onshore refusal or cancellation can still apply for a Partner (Temporary) (Class UK) and Partner (Residence) (Class BS) visa.",
        legal: "Migration Regulations 1994, Sch 1 item 1214C(3)(c); Sch 2 cl 820.211(1) and (2)(d); Sch 3 criteria 3001, 3003 and 3004; reg 2.12; Migration Act 1958, s 48",
      },
      {
        title: "No condition 8503 and no unfinished regional visa period",
        detail:
          "You cannot make a valid application if your current or last visa carries condition 8503 (no further stay) unless the Department has waived it first. If you hold, or last held, a Skilled Work Regional (subclass 491) or Skilled Employer Sponsored Regional (subclass 494) visa you must have held it for at least three years; holders of the older subclass 475, 487, Class UX or Class SP regional visas must have held them for two years, and in each case you must have substantially complied with the conditions of that visa.",
        legal: "Migration Act 1958, s 41(2A); Migration Regulations 1994, Sch 1 item 1214C(3)(g) and (h); Sch 2 cl 820.212",
      },
      {
        title: "Health, character, debts, values and documents",
        detail:
          "You must satisfy public interest criteria 4001 (character test), 4002 and 4003 (security and foreign policy), 4004 (no outstanding debt to the Commonwealth or arrangements to repay it), 4007 (health, with a waiver available), 4009 (you intend to live permanently in Australia), 4019 (Australian values statement if you were 18 at application), 4020 (no bogus documents or false or misleading information) and 4021 (a valid passport). Family members who apply with you are assessed the same way, and family members who are not migrating may also have to meet health and character requirements. Children under 18 included in the application need the consent of everyone with a legal right to decide where they live (or a court order, or home-country law allowing departure), and the grant must be in their best interests.",
        legal: "Migration Regulations 1994, Sch 2 cl 820.223 to 820.226; Sch 4 PICs 4001, 4004, 4007, 4015, 4016, 4019, 4020 and 4021",
      },
      {
        title: "Permanent stage (subclass 801): the relationship continues two years after lodgement",
        detail:
          "To be granted the 801 you must hold the 820 (or a subclass 445 Dependent Child visa), still be sponsored by the same sponsor, still be their spouse or de facto partner, and at least two years must have passed since the application was made. The two-year wait does not apply if, when you applied, you were in a long-term partner relationship, meaning a relationship of at least three years, or at least two years if there is a dependent child of you both. Home Affairs will not assess the permanent stage before the two-year date and asks you to lodge the Stage 2 evidence only after that date. You can still be granted the 801 if your sponsor has died and you would otherwise have continued the relationship, or if the relationship ended and you or a dependent child experienced family violence committed by the sponsor, or you have custody of, access to or orders about a child in respect of whom the sponsor has court-ordered access, residence or maintenance obligations.",
        legal: "Migration Regulations 1994, reg 1.03 (long-term partner relationship); Sch 2 cl 801.221(2), (5), (6) and (6A)",
      },
      {
        title: "Family violence provisions",
        detail:
          "If the relationship ends because you, or a dependent child of you or your sponsor, experienced family violence committed by the sponsor, you may still be granted the 820 and the 801. Family violence (actual or threatened conduct that makes you reasonably fear for your wellbeing or safety) is taken to have occurred where a court granted an injunction under section 114 of the Family Law Act 1975, a court made a protection order after the perpetrator had the chance to be heard, a court convicted the perpetrator or recorded a finding of guilt for an offence of violence against you, or, for a non-judicially determined claim, you lodge a statutory declaration under reg 1.25 together with the type and number of evidence items specified by legislative instrument. At least part of the violence must have occurred during the relationship. If the Department is not satisfied, it must refer the claim to an independent expert, whose opinion it must accept. The Department must first be satisfied that the relationship was genuine before it ended.",
        legal: "Migration Regulations 1994, Division 1.5 (regs 1.21 to 1.27); Sch 2 cl 820.221(3) and 801.221(6)",
      },
      {
        title: "Prospective Marriage visa holders and former holders",
        detail:
          "If you entered Australia on a Prospective Marriage (subclass 300) visa and married the person named in that application, you apply for the 820 and 801 while the 300 is in effect at the reduced charge. If you married but let the 300 cease without applying, you can still apply as a former holder (at a higher reduced charge) provided you have not since held another substantive visa. A 300 holder whose sponsor died, or whose relationship ended because of family violence or where there are children with court orders or maintenance obligations, may also qualify. Being granted any other visa replaces the 300 and removes the reduced charge.",
        legal: "Migration Regulations 1994, Sch 1 item 1124B(2)(a); Sch 2 cl 820.211(5) to (9)",
      },
    ],
    familyNote:
      "Dependent children can be included when you lodge, or added later with Form 1436 at any time before the 820 is decided (they must be in Australia and pay the additional applicant charge). Members of the family unit who hold or held a Prospective Marriage visa can be included only at lodgement. Once the 820 is granted, a child can no longer be added to it: the child must first be granted a Dependent Child visa (subclass 445) and then be added to your 801 application with Form 1002 before the 801 is decided. Nobody can be added after the 801 is granted. A new baby born after lodgement must be notified and is usually added without charge.",
    documents: [
      {
        group: "Identity",
        items: [
          "Birth certificate showing both parents' names (or a family book, government identity document, court document or family census register if you cannot get one)",
          "Pages of your current passport showing your photo, personal details and issue and expiry dates, and any national identity card",
          "Evidence of any change of name and documents showing other names you have been known by",
          "Divorce, death or separation documents or statutory declarations for every previous marriage or de facto relationship",
        ],
      },
      {
        group: "Relationship",
        items: [
          "Written relationship history: how, when and where you met, how the relationship developed, when you moved in together, got engaged or married, time spent apart, significant events and your plans for the future",
          "Marriage certificate (or other evidence that the marriage is valid in Australia), or for de facto partners evidence of 12 months together, a state or territory relationship registration, or a statement of compelling and compassionate circumstances",
          "Financial evidence: joint mortgage, lease or loan documents, joint bank account statements and household bills in both names",
          "Household evidence: a statement about how you share housework, mail or emails addressed to you both, documents showing joint responsibility for children and proof of your living arrangements",
          "Social evidence: two Form 888 witness statements from people aged 18 or over who know you both (with proof of citizenship or permanent residence where applicable), joint invitations, proof you have told government or commercial bodies about the relationship, joint activities and travel",
          "Commitment evidence: knowledge of each other's background and family, combined personal affairs, contact while apart, and the terms of your wills if you have them",
        ],
      },
      {
        group: "Health and character",
        items: [
          "Health examinations arranged through ImmiAccount after you apply (results are valid for 12 months; a health undertaking for 6 months)",
          "Australian Federal Police complete disclosure National Police Certificate if you have spent 12 months or more in Australia in the last 10 years since turning 16 (state police certificates are not accepted)",
          "Police certificate from every other country where you spent a total of 12 months or more in the last 10 years since turning 16, and military service or discharge records if you served",
          "Form 80 Personal particulars for assessment including character assessment",
        ],
      },
      {
        group: "Sponsor",
        items: [
          "Sponsor's passport, birth certificate and a photo; permanent residents and eligible New Zealand citizens also show they usually live in Australia (home, work, property or family ties)",
          "Sponsor's AFP complete disclosure National Police Certificate and overseas police certificates for every country where the sponsor spent 12 months or more in the last 10 years since turning 16",
          "Sponsor's written consent to the Department disclosing any relevant convictions to you",
          "If a parent or guardian sponsors on behalf of a spouse under 18: the document permitting the marriage and evidence of parentage or guardianship",
        ],
      },
      {
        group: "Dependants and applicants without a substantive visa",
        items: [
          "For each child under 18: identity documents, birth certificate, health examinations, character documents if 16 or 17, school enrolment, and Form 1229 consent from anyone with a legal right to decide where the child lives who is not migrating (with their signed photo identification), or a court order",
          "For a child aged 18 or over: Form 47a, evidence of financial dependence (bank statements, transfers, rent receipts) and evidence they have no partner, or medical evidence of incapacity for work",
          "If you hold no substantive visa: the sponsor's lodged sponsorship form, evidence of the sponsor's status, and at least two Commonwealth statutory declarations made within the last six weeks by Australian citizens, permanent residents or eligible New Zealand citizens confirming the relationship, with evidence of each declarant's status",
        ],
      },
    ],
    steps: [
      {
        title: "Confirm the relationship basis",
        description:
          "Work out whether you apply as a spouse or de facto partner. De facto couples need 12 months together immediately before lodging unless the relationship is registered, there are compelling and compassionate circumstances or the humanitarian exception applies. Check your current visa for condition 8503 and the regional visa waiting periods, and check whether your sponsor is caught by the two-sponsorship or five-year limits.",
        output: "You know which relationship test applies, that your sponsor is eligible, and that a valid application can be made",
      },
      {
        title: "Build the evidence across the four aspects",
        description:
          "Collect documents for the financial, household, social and commitment aspects of the relationship, write your relationship histories, obtain two Form 888 statements and gather identity and former-relationship documents for both of you. Home Affairs allows up to 100 attachments per applicant, so label documents clearly and attach each only once.",
        output: "A relationship statement, marriage certificate or de facto evidence, witness statements and documents under each of the four aspects",
      },
      {
        title: "Lodge Stage 1 online and pay the charge",
        description:
          "Create or log in to ImmiAccount, select 'New application', 'Family' and 'Stage 1 - Partner or Prospective Marriage Visa', attach your documents, pay A$11,710 (plus any additional applicant charges) and note the transaction reference number (TRN). You must be in Australia when you lodge. If you held a substantive visa, a Bridging visa A is granted with the application and takes effect only when your current visa ends.",
        output: "A transaction reference number, an acknowledgement letter and, for substantive visa holders, a Bridging visa A",
      },
      {
        title: "Sponsor lodges the sponsorship",
        description:
          "Your partner selects 'Sponsorship for a Partner to Migrate to Australia' in their own or your ImmiAccount, enters your TRN, and attaches identity and status documents, their AFP complete disclosure certificate, overseas police certificates and their consent to disclosure of convictions. There is no sponsorship charge. The sponsor can lodge from inside or outside Australia.",
        output: "A lodged sponsorship application with the sponsor's police certificates",
      },
      {
        title: "Complete health examinations and character documents",
        description:
          "Arrange health examinations when ImmiAccount prompts you and provide police certificates and Form 80. Because partner processing can be lengthy, Home Affairs suggests checking processing times before obtaining certificates: health results and police certificates are valid for 12 months and may need to be repeated. Keep uploading fresh relationship evidence while you wait and tell the Department of any change in your circumstances.",
        output: "Health clearance and police certificates on file, with relationship evidence kept current",
      },
      {
        title: "Decision on the subclass 820",
        description:
          "You can be in or outside Australia when the 820 is decided. On grant you have full work and study rights, can travel freely, and can enrol in Medicare. Do not accept or apply for any other substantive visa (New Zealand passport holders must tell border officers they do not want a Special Category visa), because holding another visa ends your eligibility for the 801.",
        output: "Subclass 820 visa in effect until the 801 is decided or withdrawn",
      },
      {
        title: "Lodge Stage 2 evidence two years after you applied",
        description:
          "From the second anniversary of lodgement (check the date in ImmiAccount), select 'Stage 2 - Permanent Partner Visa Assessment' and attach a Commonwealth statutory declaration completed by your sponsor about the relationship, your marriage certificate or de facto evidence, updated evidence under the four aspects, two further Form 888 statements, a current AFP certificate and overseas police certificates for any country you spent 12 months or more in since the 820 was granted. Do not send these before the two-year date.",
        output: "Stage 2 documents lodged; the Department can now assess the subclass 801",
      },
      {
        title: "Grant of the subclass 801",
        description:
          "You can be in or outside Australia at grant. The 801 is permanent from the day it is granted, with a five-year travel facility; after that you need a Resident Return visa to re-enter. You may be eligible to apply for citizenship once you meet the residence requirement, counting permanent residence from the 801 grant date.",
        output: "Permanent residence, access to Medicare and the right to sponsor eligible family members",
      },
    ],
    conditions: [],
    costs: [
      { item: "Base application charge (covers the 820 and the 801)", amount: "A$11,710", note: "Primary applicant, 1 July 2026 charge; not refunded if refused" },
      { item: "Additional applicant aged 18 or over", amount: "A$5,860", note: "Each dependant pays their own charge" },
      { item: "Additional applicant under 18", amount: "A$2,935" },
      { item: "Prospective Marriage (subclass 300) visa holder married to the sponsor", amount: "A$1,955", note: "Additional applicants A$980 (18 or over) and A$485 (under 18)" },
      { item: "Former subclass 300 holder who married but no longer holds a substantive visa", amount: "A$2,475", note: "Additional applicants A$1,235 (18 or over) and A$625 (under 18)" },
      { item: "Pacific Island and Timor-Leste passport holders", amount: "Lower charge from 1 July 2026", note: "Applied automatically in ImmiAccount for primary applicants with a passport from one of 13 listed countries; family members share the concession" },
      { item: "Subclass 801 permanent stage", amount: "No further charge", note: "Paid with the combined application" },
      { item: "Health examinations", amount: "Typical third-party cost", note: "Set by the panel clinic; results valid 12 months" },
      { item: "Police certificates", amount: "Typical third-party cost", note: "AFP National Police Certificate and overseas certificates for applicant and sponsor" },
      { item: "Translations by a NAATI-accredited translator", amount: "Typical third-party cost" },
      { item: "Bridging visa B if you need to travel while on a Bridging visa A", amount: "A$575", note: "1 July 2026 charge" },
      { item: "Administrative Review Tribunal fee if the visa is refused", amount: "A$3,727", note: "Migration decisions, 1 July 2026; 50 per cent reduction for financial hardship" },
    ],
    afterGrant: [
      "Tell the Department through ImmiAccount (or the Partner Processing Enquiry Form) about changes to your address, passport or contact details, the birth of a child and any change in your relationship status; relationship breakdown is notified through the Notification of Relationship Cessation form.",
      "Do not obtain another substantive visa while you hold the 820: grant of any other visa, including a Special Category (subclass 444) visa at the border for New Zealand passport holders, means you can no longer be granted the 801.",
      "You can travel in and out of Australia as often as you like on the 820; on a Bridging visa A you must obtain a Bridging visa B before leaving or the bridging visa will cease.",
      "Keep relationship evidence current and lodge the Stage 2 documents after the two-year anniversary of lodgement; the sponsor can withdraw sponsorship at any time before the 801 is decided, although you may still be eligible under the death, family violence or child provisions.",
      "After the 801 is granted you are a permanent resident from the grant date with a five-year travel facility, can sponsor eligible relatives, and may apply for citizenship once you meet the residence requirement; after five years you need a Resident Return visa to travel.",
    ],
    pathways: [
      { title: "Australian citizenship by conferral", description: "Permanent residence from the 801 grant date counts towards the four-year residence requirement, with at least 12 months as a permanent resident.", href: "/visas/other-visas/australian-citizenship-by-conferral" },
      { title: "Dependent Child visa (subclass 445)", description: "A child who was not included before the 820 was granted applies for a 445 and is then added to your 801 application.", href: "/visas/family/dependent-child-visa-445" },
      { title: "Resident Return visa (subclasses 155 and 157)", description: "Needed to re-enter Australia as a permanent resident once the five-year travel facility on the 801 ends.", href: "/visas/other-visas/resident-return-visa-155-157" },
      { title: "Sponsoring your parents", description: "Once you are a permanent resident or citizen who is settled in Australia, you may sponsor parents under the contributory or non-contributory parent visas.", href: "/visas/family/contributory-parent-visa-143-173" },
      { title: "Review at the Administrative Review Tribunal", description: "A refusal letter states whether you can apply for merits review; the application fee is A$3,727 and strict time limits apply.", href: "/visas/appeals-and-review/art-review-of-visa-refusal" },
    ],
    risks: [
      "Schedule 3 refusal: applicants without a substantive visa must apply within 28 days of their last substantive visa ceasing and show factors beyond their control and compelling reasons, unless the Department accepts compelling reasons for not applying the criteria at all.",
      "A de facto relationship of less than 12 months at lodgement with no registration and no compelling and compassionate circumstances fails reg 2.03A even if the relationship is genuine.",
      "Thin or lopsided evidence, for example joint finances but nothing on social recognition or commitment, or inconsistent answers at interview, leads to a finding that the relationship is not genuine and continuing.",
      "The sponsor is caught by reg 1.20J (a third partner sponsorship, or a sponsorship or their own sponsored visa within five years), has a significant criminal record for a relevant offence, or does not provide police certificates or consent to disclosure.",
      "PIC 4020: a bogus document or false or misleading information (including an undeclared earlier marriage or de facto relationship) results in refusal and a three-year bar on most visas, or ten years where identity cannot be established.",
      "Losing 801 eligibility by being granted another visa (such as a 444 at the border), by failing to lodge Stage 2 evidence, or by the relationship ending without the family violence, child or death provisions applying.",
      "Lodging while condition 8503 is on your current visa without a waiver, or before the regional visa holding period has passed, makes the application invalid and the charge is not refunded.",
    ],
    faqs: [
      {
        question: "Do we need to have lived together for 12 months before applying?",
        answer:
          "De facto couples must have been in the de facto relationship for the 12 months ending immediately before lodgement. The rule does not apply if the relationship is registered with a state or territory registry, if there are compelling and compassionate circumstances, or if the humanitarian partner exception applies. Married couples do not face the 12-month rule but must still prove a genuine and continuing relationship.",
      },
      {
        question: "Can I apply if my visa has expired or I am on a bridging visa?",
        answer:
          "Yes, but as an applicant without a substantive visa you must satisfy Schedule 3 criteria 3001, 3003 and 3004 or persuade the Department that there are compelling reasons not to apply them. Criterion 3001 requires lodgement within 28 days of your last substantive visa ceasing. You must also lodge the sponsor's form, proof of the sponsor's status and two recent statutory declarations from Australian citizens, permanent residents or eligible New Zealand citizens with the application.",
      },
      {
        question: "Can I work while my application is processed?",
        answer:
          "Once the 820 is granted you have full work and study rights. Before that, if you lodged while holding a substantive visa you were granted a Bridging visa A, which takes effect when your current visa ends and carries whichever work condition applied to that visa (for example a student's 8105 limit). If you have a compelling need to work you can apply for a further Bridging visa A without the work condition.",
      },
      {
        question: "When will I become a permanent resident?",
        answer:
          "The 801 can be granted once two years have passed since you lodged the combined application, provided the relationship is still genuine and continuing and you lodge the Stage 2 evidence. If you were in a long-term partner relationship when you applied (three years, or two years with a dependent child), the two-year wait does not apply and the 801 may be granted soon after the 820.",
      },
      {
        question: "What happens if my relationship ends before the permanent visa is granted?",
        answer:
          "Generally you no longer meet the criteria and should tell the Department. You can still be granted the visa if your sponsor died and the relationship would have continued, if you or a dependent child experienced family violence committed by the sponsor during the relationship, or if you have custody of, access to or court orders about a child in respect of whom the sponsor has court-ordered access, residence or maintenance obligations.",
      },
      {
        question: "Does my partner need a police check to sponsor me?",
        answer:
          "Yes. The sponsor must provide an AFP complete disclosure National Police Certificate and overseas certificates for every country where they lived 12 months or more in the last 10 years since turning 16, and consent to the Department disclosing relevant convictions to you. A significant criminal record for a relevant offence leads to refusal of the sponsorship unless the Department considers approval reasonable.",
      },
      {
        question: "How much does the partner visa cost in total and is there a second payment?",
        answer:
          "The 1 July 2026 charge is A$11,710 for the main applicant, covering both the 820 and the 801; there is no further charge at the permanent stage. Each additional applicant pays A$5,860 (18 or over) or A$2,935 (under 18). Prospective Marriage visa holders pay A$1,955. Health examinations, police certificates and translations are extra.",
      },
      {
        question: "Can I travel overseas while waiting?",
        answer:
          "On the 820 you can travel as often as you like, and you can be outside Australia when the 820 or 801 is granted. On a Bridging visa A you must apply for a Bridging visa B (A$575) before you leave, otherwise you cannot return on it. New Zealand passport holders should tell border staff they hold a partner visa and do not want a Special Category visa.",
      },
    ],
    legislation: [
      { label: "Migration Regulations 1994, Sch 2 Part 820 (Partner, temporary)", url: REGS },
      { label: "Migration Regulations 1994, Sch 2 Part 801 (Partner, permanent)", url: REGS },
      { label: "Migration Regulations 1994, Sch 1 items 1214C (Partner (Temporary) (Class UK)) and 1124B (Partner (Residence) (Class BS))", url: REGS },
      { label: "Migration Regulations 1994, regs 1.09A (de facto partner) and 1.15A (spouse); reg 1.03 (long-term partner relationship)", url: REGS },
      { label: "Migration Regulations 1994, reg 2.03A (criteria for de facto partners, 12-month requirement)", url: REGS },
      { label: "Migration Regulations 1994, Division 1.4B: regs 1.20J, 1.20KA, 1.20KB, 1.20KC and 1.20KD (sponsorship limitations)", url: REGS },
      { label: "Migration Regulations 1994, Division 1.5 (regs 1.21 to 1.27, family violence)", url: REGS },
      { label: "Migration Regulations 1994, Sch 3 criteria 3001, 3003 and 3004; reg 2.12 (section 48 prescribed classes); reg 2.08B (adding a dependent child)", url: REGS },
      { label: "Migration Regulations 1994, Sch 4 PICs 4001, 4004, 4007, 4015, 4016, 4019, 4020 and 4021; Sch 2 Part 010 (Bridging A) cl 010.611", url: REGS },
      { label: "Migration Act 1958, ss 5CB, 5F, 12, 41, 48, 65 and 338", url: ACT },
    ],
    sources: [
      { label: "Home Affairs: Partner visas (apply in Australia) (subclasses 820 and 801)", url: `${HA}/visas/getting-a-visa/visa-listing/partner-onshore` },
      { label: "Home Affairs: Partner visa (temporary) (subclass 820)", url: `${HA}/visas/getting-a-visa/visa-listing/partner-onshore/temporary-820` },
      { label: "Home Affairs: Partner visa (permanent) (subclass 801)", url: `${HA}/visas/getting-a-visa/visa-listing/partner-onshore/permanent-801` },
      { label: "Home Affairs: Measures for the protection of children", url: `${HA}/visas/getting-a-visa/visa-listing/partner-onshore/measures-for-the-protection-of-children` },
      { label: "Home Affairs: Domestic and family violence and your visa", url: `${HA}/visas/getting-a-visa/visa-listing/partner-onshore/family-violence-and-your-visa` },
      { label: "Home Affairs: Family violence provisions", url: `${HA}/visas/domestic-family-violence-and-your-visa/family-violence-provisions` },
      { label: "Home Affairs: Family violence provisions, Partner visa applicants", url: `${HA}/visas/domestic-family-violence-and-your-visa/family-violence-provisions/family-violence-provisions-partner-visa-applicants` },
      { label: "Home Affairs: Partner visa frequently asked questions", url: `${HA}/visas/getting-a-visa/partner-visa-frequently-asked-questions` },
      { label: "Home Affairs: Family visa processing priorities (Ministerial Direction 117)", url: `${HA}/visas/getting-a-visa/visa-processing-times/visa-processing-priorities/family-visa` },
      { label: "Home Affairs: Current visa pricing (1 July 2026)", url: `${HA}/visas/getting-a-visa/fees-and-charges/current-visa-pricing` },
      { label: "Home Affairs: See your visa conditions (subclass 820)", url: `${HA}/visas/already-have-a-visa/check-visa-details-and-conditions/see-your-visa-conditions?product=820` },
      { label: "Home Affairs: Global visa processing times", url: PROCESSING_TIMES },
      { label: "Home Affairs: Health requirement", url: `${HA}/help-support/meeting-our-requirements/health` },
      { label: "Home Affairs: Character requirements for visas", url: `${HA}/help-support/meeting-our-requirements/character` },
    ],
    related: [
      { label: "Partner visa (offshore) subclasses 309 and 100", href: "/visas/family/partner-visa-offshore-309-100" },
      { label: "Prospective Marriage visa (subclass 300)", href: "/visas/family/prospective-marriage-visa-300" },
      { label: "Dependent Child visa (subclass 445)", href: "/visas/family/dependent-child-visa-445" },
      { label: "Schedule 3 criteria explained", href: "/visas/appeals-and-review/schedule-3-criteria" },
      { label: "Bridging visas A, B, C and E", href: "/visas/other-visas/bridging-visas-a-b-c-e" },
      { label: "Family and partner visa services", href: "/services/family-partner-visas" },
      { label: "Book a consultation", href: "/bookings" },
    ],
    keywords: [
      "820 visa",
      "subclass 820",
      "801 visa",
      "partner visa australia",
      "onshore partner visa",
      "de facto visa australia",
      "partner visa requirements",
      "partner visa cost 2026",
      "spouse visa australia",
      "schedule 3 partner visa",
    ],
  },
  // ───────────────────────────────────────────────────────────────────────
  // 2. Partner visa (offshore) subclasses 309 and 100
  // ───────────────────────────────────────────────────────────────────────
  {
    slug: "partner-visa-offshore-309-100",
    category: "family",
    kind: "visa",
    subclass: "309/100",
    name: "Partner visa (offshore)",
    title: "Partner visa (subclasses 309 and 100)",
    seoTitle: "Partner visa 309/100 (offshore): eligibility, cost and PR",
    seoDescription:
      "Partner visa (subclass 309/100): apply from outside Australia, 12-month de facto rule, sponsor limits, A$11,710 charge and the two-year path to PR (2026 guide).",
    intro:
      "The Partner visa (subclasses 309 and 100) lets the spouse or de facto partner of an Australian citizen, Australian permanent resident or eligible New Zealand citizen migrate to Australia. You apply from outside Australia, pay one charge and receive the provisional subclass 309 first; the permanent subclass 100 is normally assessed two years after lodgement if the relationship is still genuine and continuing. It is the offshore equivalent of the subclass 820 and 801 visas and leads to permanent residence and citizenship.",
    factsAsAt: "12 October 2026",
    permanent: true,
    tags: ["Provisional", "Pathway to PR", "Family sponsor required", "Apply outside Australia"],
    keyFacts: [
      { label: "Government fee", value: "A$11,710", note: "Primary applicant, 1 July 2026 charge; one charge covers both the 309 and the 100. A$9,600 for Pacific Island and Timor-Leste passport holders" },
      { label: "Length of stay", value: "309: until the 100 is decided; 100: permanent", note: "The 100 carries a five-year travel facility from grant" },
      { label: "Work rights", value: "Full work and study rights on the 309", note: "You can enrol in Medicare once the 309 is granted" },
      { label: "Pathway to permanent residence", value: "Subclass 100, assessed from two years after lodgement", note: "Sooner for long-term relationships or where the sponsor holds a permanent humanitarian visa" },
      { label: "Where you must be", value: "Outside Australia when you apply; in or outside Australia when the 309 or 100 is granted", note: "Family members applying with you must also be outside Australia at lodgement" },
      { label: "Sponsor", value: "Your partner, aged 18 or over", note: "Sponsorship must be approved; two-sponsorship and five-year limits apply" },
    ],
    alert: {
      title: "Lower processing priority for offshore partner applications",
      body: "Under Ministerial Direction 117, which replaced Direction 102 on 25 July 2026, applications lodged outside Australia are given lower priority than onshore partner applications and are likely to take longer. Check the Home Affairs processing time tool rather than relying on published averages.",
      href: PROCESSING_TIMES,
      linkLabel: "Global visa processing times",
    },
    whoFor: [
      "You live overseas and are married to, or have been in a de facto relationship for at least 12 months with, an Australian citizen, permanent resident or eligible New Zealand citizen.",
      "You and your Australian partner are living outside Australia together and want to move to Australia as a couple.",
      "You are engaged to an Australian and intend to marry before the visa is decided, and you prefer a single application over a Prospective Marriage visa followed by an onshore partner visa.",
      "You are in Australia on a visa with condition 8503 or cannot apply onshore, and are able to lodge from overseas instead.",
      "Your partner holds a permanent humanitarian visa and declared your relationship before that visa was granted.",
    ],
    eligibility: [
      {
        title: "Spouse, de facto partner or intended spouse of an eligible sponsor",
        detail:
          "At lodgement you must be the spouse or de facto partner of an Australian citizen, Australian permanent resident or eligible New Zealand citizen, or intend to marry such a person in a marriage that will be valid under Australian law. If you apply as an intended spouse, the marriage must have taken place before the 309 can be granted (unless the sponsor has died or the relationship ended in the circumstances covered by the family violence or child provisions). De facto partners and their sponsors must both be 18 or older.",
        legal: "Migration Act 1958, ss 5CB, 5F and 12; Migration Regulations 1994, reg 2.03A(2); Sch 2 cl 309.211, 309.223 and 309.224",
      },
      {
        title: "Genuine and continuing relationship assessed on four aspects",
        detail:
          "The Department must consider the financial aspects of the relationship (joint assets, liabilities, pooling of resources and shared expenses), the nature of the household (children, living arrangements, housework), the social aspects (how you present as a couple, what friends and family understand, joint activities) and the nature of your commitment (duration, time living together, companionship and emotional support, long-term intentions). Couples who live in different countries for work or family reasons must show they are not living separately and apart on a permanent basis.",
        legal: "Migration Regulations 1994, regs 1.09A(3) and 1.15A(3)",
      },
      {
        title: "12-month de facto relationship, unless an exception applies",
        detail:
          "A de facto applicant must have been in the relationship for the 12 months ending immediately before lodgement. The rule does not apply where there are compelling and compassionate circumstances, where the relationship is registered under a prescribed Australian state or territory law, or where the partner holds or has applied for a permanent humanitarian visa and declared the relationship before grant. Home Affairs notes that time dating or in an online relationship may not count.",
        legal: "Migration Regulations 1994, reg 2.03A(3) to (5)",
      },
      {
        title: "Outside Australia when you apply",
        detail:
          "You, and any family members applying with you, must be outside Australia when the application is lodged. The 309 and 100 applications are lodged together online. You can travel to Australia on another visa while waiting, but you are responsible for staying lawful, and Home Affairs says not to arrange to migrate until the grant is notified in writing. You can be in or outside Australia when the 309 is decided; if you are outside Australia at grant you must make your first entry before the date in the grant letter.",
        legal: "Migration Regulations 1994, Sch 1 items 1220A(3)(b) and 1129(3)(c); Sch 2 cl 309.412 and 309.611",
      },
      {
        title: "An approved sponsor who is not limited from sponsoring",
        detail:
          "Your partner (or, if your spouse or intended spouse is under 18, their parent or guardian who is 18 or older and an Australian citizen, permanent resident or eligible New Zealand citizen) lodges the sponsorship after your application using your transaction reference number, and it must be approved and in force at decision. The sponsor must consent to disclosure of relevant convictions. Sponsorship must be refused if the sponsor has already sponsored two other partners, sponsored another partner within five years, or was themselves sponsored as a partner within five years, unless there are compelling circumstances. Contributory Parent visa holders face a five-year restriction and certain Woman at Risk visa holders are barred. The sponsor cannot be changed and remains responsible for two years after the 309 grant or your first arrival.",
        legal: "Migration Regulations 1994, regs 1.20J and 1.20KA; Sch 2 cl 309.212, 309.213 and 309.222; reg 1.20(2)(c)",
      },
      {
        title: "Sponsor's police checks, relevant offences and child protection",
        detail:
          "The sponsor must provide an AFP complete disclosure National Police Certificate and overseas certificates for every country where they lived 12 months or more in the last 10 years since turning 16. Sponsorship must be refused where the sponsor has a significant criminal record (a sentence of death, life, 12 months or more, or terms totalling 12 months or more) for a relevant offence involving violence, harassment or stalking, breach of a protection order, weapons, people smuggling, trafficking, slavery or forced marriage, unless the Department considers approval reasonable. If an applicant is under 18, a charge or conviction for a registrable child sex offence leads to refusal unless the charge was dismissed or the conviction quashed, with only very limited exceptions.",
        legal: "Migration Regulations 1994, regs 1.20KB, 1.20KC and 1.20KD; Sch 2 cl 309.222(2)",
      },
      {
        title: "Health, character, debts, values and passport",
        detail:
          "You must satisfy public interest criteria 4001 (character), 4002, 4003, 4004 (no outstanding debt to the Commonwealth), 4007 (health, waiver available), 4009 (you intend to live permanently in Australia), 4019 (values statement if 18 at application), 4020 (no bogus documents or false information) and 4021 (valid passport), and special return criteria 5001 and 5002 if you have been in Australia before. Family members aged 16 and over who apply with you must meet the character requirement; family members not migrating may be asked to meet health and character requirements. Children under 18 need the consent of everyone with a legal right to decide where they live, or a court order.",
        legal: "Migration Regulations 1994, Sch 2 cl 309.225 to 309.229; Sch 4 PICs 4001, 4004, 4007, 4009, 4015, 4016, 4019, 4020 and 4021; Sch 5 criteria 5001 and 5002",
      },
      {
        title: "Previous refusals, cancellations and exclusion periods",
        detail:
          "Home Affairs considers your immigration history. A previous visa cancellation or refusal does not automatically bar an offshore partner application, but special return criteria 5001 (no deportation or criminal cancellation) and 5002 (not removed from Australia in the last 12 months) apply, and a PIC 4020 refusal in the last three years will usually prevent grant.",
        legal: "Migration Regulations 1994, Sch 2 cl 309.226; Sch 5 criteria 5001 and 5002; Sch 4 PIC 4020",
      },
      {
        title: "Permanent stage (subclass 100): two years after lodgement",
        detail:
          "To be granted the 100 you must hold the 309 (or a subclass 445 visa) and still be the spouse or de facto partner of your sponsoring partner, and at least two years must have passed since the application was made; the sponsor then nominates you for the 100. The two-year wait does not apply if you were in a long-term partner relationship when you applied (three years, or two years with a dependent child of the relationship), or if your sponsor holds or held a permanent humanitarian visa and the relationship was declared before that visa was granted. You remain eligible if the sponsor died, or if the relationship ended and you have entered Australia since applying and you or a member of the family unit experienced family violence committed by the sponsor, or you have custody of, access to or orders about a child in respect of whom the sponsor has court-ordered obligations.",
        legal: "Migration Regulations 1994, reg 1.03 (long-term partner relationship); Sch 2 cl 100.221(2) to (6) and 100.226",
      },
      {
        title: "Family violence provisions after entry to Australia",
        detail:
          "The family violence provisions apply to 309 applicants and holders only once you have entered Australia after lodging. Family violence is established by a Family Law Act injunction, a court protection order made after the perpetrator could be heard, a conviction or finding of guilt, or a non-judicially determined claim supported by a statutory declaration and the evidence specified by legislative instrument; if the Department is not satisfied it must refer the claim to an independent expert whose opinion is binding. The Department must first accept that the relationship was genuine before it ended.",
        legal: "Migration Regulations 1994, Division 1.5 (regs 1.21 to 1.27); Sch 2 cl 309.221(3) and 100.221(4)",
      },
    ],
    familyNote:
      "Members of the family unit (dependent children, and children aged 18 to 22 who are dependent, or 23 and over who cannot work because of incapacity) can be included when you lodge and must be outside Australia. A dependent child can be added with Form 1436 before the 309 is decided. After the 309 is granted a child cannot be added to it: the child applies for a Dependent Child visa (subclass 445) and is then added to your 100 application with Form 1002 (the child can be in or outside Australia for the 100). Nobody can be added after the 100 is granted. Tell the Department if a baby is born after you apply.",
    documents: [
      {
        group: "Identity",
        items: [
          "Birth certificate showing both parents' names (or family book, government identity document, court document or family census register)",
          "Current passport pages with your photo, personal details and issue and expiry dates, and any national identity card",
          "Change of name documents and documents showing other names you have been known by",
          "Divorce, death or separation documents or statutory declarations for every previous relationship",
        ],
      },
      {
        group: "Relationship",
        items: [
          "Relationship history in writing: how, when and where you met, how the relationship developed, when you moved in together, got engaged or married, time apart, significant events and future plans",
          "Marriage certificate or other evidence the marriage is valid in Australia, or de facto evidence covering at least 12 months, a relationship registration, or a statement of compelling and compassionate circumstances",
          "Financial evidence (joint mortgage, lease or loans, joint bank statements, bills in both names), household evidence (housework arrangements, shared mail, documents for children, living arrangements) and commitment evidence (knowledge of each other's background, contact while apart, wills)",
          "Two Form 888 statements from witnesses aged 18 or over who know you both, with evidence of their citizenship or permanent residence where applicable, plus evidence others know of the relationship such as joint invitations and travel",
        ],
      },
      {
        group: "Health and character",
        items: [
          "Health examinations when prompted in ImmiAccount (results valid 12 months; health undertaking 6 months)",
          "AFP complete disclosure National Police Certificate if you spent 12 months or more in Australia in the last 10 years since turning 16",
          "Police certificates from every other country where you spent 12 months or more in the last 10 years since turning 16, military service records if you served, and Form 80",
        ],
      },
      {
        group: "Sponsor",
        items: [
          "Sponsor's passport, birth certificate and photo, and for permanent residents and eligible New Zealand citizens evidence they usually live in Australia",
          "Sponsor's AFP complete disclosure certificate and overseas police certificates for countries where they lived 12 months or more in the last 10 years since turning 16",
          "Sponsor's written consent to disclosure of relevant convictions, and marriage permission and parentage documents if a parent sponsors for a spouse under 18",
        ],
      },
      {
        group: "Dependants",
        items: [
          "For each child under 18: identity documents, birth certificate, health examinations, character documents if 16 or 17, school enrolment and Form 1229 consent from anyone with a legal right to decide where the child lives who is not migrating, or a court order or evidence home-country law allows departure",
          "For dependants aged 18 to 22: Form 47a and evidence of financial dependence; for dependants 23 or over, a medical report confirming dependence due to loss of bodily or mental function",
        ],
      },
    ],
    steps: [
      {
        title: "Check the relationship and sponsor rules",
        description:
          "Confirm you qualify as a spouse, de facto partner (12 months, registered, or compelling circumstances) or intended spouse, and that your sponsor is not limited by the two-sponsorship, five-year, Contributory Parent or Woman at Risk rules. Decide whether an intended-spouse 309 application or a Prospective Marriage visa suits you better.",
        output: "A clear relationship basis and an eligible sponsor",
      },
      {
        title: "Gather evidence under the four aspects",
        description:
          "Prepare identity, relationship, financial, household, social and commitment documents for both partners, two Form 888 statements, and documents for any dependants, with NAATI or detailed overseas translations for non-English documents.",
        output: "A complete evidence set organised under finances, household, social matters and commitment",
      },
      {
        title: "Lodge online from outside Australia and pay",
        description:
          "In ImmiAccount select 'New application', 'Family' and 'Stage 1 - Partner or Prospective Marriage Visa', attach documents, pay A$11,710 and any additional applicant charges, and note the transaction reference number for your sponsor. You must be outside Australia at lodgement.",
        output: "A lodged combined 309 and 100 application with a transaction reference number",
      },
      {
        title: "Sponsor lodges the sponsorship",
        description:
          "Your partner selects 'Sponsorship for a Partner to Migrate to Australia' in ImmiAccount, enters your TRN and attaches identity and status evidence, police certificates and the consent to disclosure. The sponsor can be inside or outside Australia and pays no charge.",
        output: "A lodged sponsorship with the sponsor's police certificates",
      },
      {
        title: "Health, character and updates",
        description:
          "Complete health examinations and provide police certificates and Form 80 when requested, bearing in mind the 12-month validity of each. Keep lodging new relationship evidence, report any change in circumstances, and if you travel to Australia on another visa keep that visa valid.",
        output: "Health and character clearances on file and up-to-date relationship evidence",
      },
      {
        title: "Grant of the subclass 309",
        description:
          "You can be in or outside Australia at grant. If you are outside Australia you must enter before the first entry date in the grant letter. The 309 gives full work and study rights, Medicare access and unlimited travel until the 100 is decided. Do not accept any other substantive visa, including a Special Category visa at the border for New Zealand passport holders.",
        output: "Subclass 309 visa in effect until the 100 is decided or withdrawn",
      },
      {
        title: "Stage 2 assessment two years after lodgement",
        description:
          "After the second anniversary of lodgement, select 'Stage 2 - Permanent Partner Visa Assessment' in ImmiAccount and attach your sponsor's Commonwealth statutory declaration, updated relationship evidence under the four aspects, two new Form 888 statements, a current AFP certificate and police certificates for any country where you spent 12 months or more since the 309 was granted.",
        output: "Stage 2 documents lodged; the Department can assess the subclass 100",
      },
      {
        title: "Grant of the subclass 100",
        description:
          "You can be in or outside Australia at grant. The 100 is permanent from the grant date with a five-year travel facility; for citizenship purposes permanent residence starts on the grant date if you were in Australia, or on your first entry on the visa if you were outside Australia.",
        output: "Permanent residence with a five-year travel facility and eligibility to sponsor family",
      },
    ],
    conditions: [
      { code: "8502", meaning: "You must not enter Australia before the person named in the visa (usually your sponsor) has entered; may be imposed on 309 applicants, and on 100 applicants who are outside Australia at grant" },
      { code: "8515", meaning: "You must not marry or enter a de facto relationship before entering Australia; may be imposed on family members who satisfy the secondary criteria" },
    ],
    costs: [
      { item: "Base application charge (covers the 309 and the 100)", amount: "A$11,710", note: "Primary applicant, 1 July 2026 charge; not refunded if refused" },
      { item: "Additional applicant aged 18 or over", amount: "A$5,860", note: "Each dependant pays their own charge" },
      { item: "Additional applicant under 18", amount: "A$2,935" },
      { item: "Primary applicant with a Pacific Island or Timor-Leste passport", amount: "A$9,600", note: "From 1 July 2026; additional applicants A$4,805 (18 or over) and A$2,405 (under 18)" },
      { item: "Subclass 100 permanent stage", amount: "No further charge", note: "Paid with the combined application" },
      { item: "Health examinations", amount: "Typical third-party cost", note: "Panel physician fees vary by country; results valid 12 months" },
      { item: "Police certificates", amount: "Typical third-party cost", note: "For the applicant, dependants aged 16 or over and the sponsor" },
      { item: "Translations", amount: "Typical third-party cost", note: "NAATI accreditation required for translators in Australia" },
      { item: "Administrative Review Tribunal fee if refused", amount: "A$3,727", note: "Migration decisions, 1 July 2026; the sponsor usually applies for review of an offshore refusal" },
    ],
    afterGrant: [
      "If you were outside Australia at grant, enter before the first entry date in the grant letter; you can still travel on the visa after that date if it remains valid, but it may be examined at the border.",
      "Tell the Department about changes to your contact details, passport, relationship status or the birth of a child through ImmiAccount or the Partner Processing Enquiry Form.",
      "Do not obtain another visa while you hold the 309; New Zealand passport holders must tell border officers they do not want a Special Category visa, or the 444 will replace the 309 and end eligibility for the 100.",
      "Lodge Stage 2 evidence after the second anniversary of lodgement; the sponsor can withdraw the sponsorship at any time before the 100 is decided, although you may still be eligible under the death, family violence or child provisions.",
      "After the 100 is granted you are a permanent resident with a five-year travel facility; after five years you need a Resident Return visa to re-enter, and you can apply for citizenship once the residence requirement is met.",
    ],
    pathways: [
      { title: "Australian citizenship by conferral", description: "Permanent residence from the 100 grant (or first entry) counts towards the residence requirement for citizenship.", href: "/visas/other-visas/australian-citizenship-by-conferral" },
      { title: "Dependent Child visa (subclass 445)", description: "A child not included before the 309 grant applies for a 445 and is then added to the 100 application.", href: "/visas/family/dependent-child-visa-445" },
      { title: "Partner visa (onshore) subclasses 820 and 801", description: "If you are lawfully in Australia on a substantive visa without condition 8503, the onshore partner visa may be the better route.", href: "/visas/family/partner-visa-onshore-820-801" },
      { title: "Resident Return visa", description: "Required to re-enter Australia as a permanent resident after the five-year travel facility ends.", href: "/visas/other-visas/resident-return-visa-155-157" },
      { title: "Review at the Administrative Review Tribunal", description: "A refusal letter states whether review is available; for offshore refusals the Australian sponsor is usually the person entitled to apply.", href: "/visas/appeals-and-review/art-review-of-visa-refusal" },
    ],
    risks: [
      "Lodging while in Australia makes the application invalid: the applicant and every family member applying must be outside Australia at the moment of lodgement.",
      "Couples who have mostly lived apart in different countries fail to show that they are not living separately and apart on a permanent basis, or cannot evidence the household and financial aspects.",
      "A de facto relationship under 12 months with no registration and no compelling and compassionate circumstances does not meet reg 2.03A.",
      "The sponsor is caught by reg 1.20J (third partner sponsorship, or a sponsorship or their own sponsored visa within five years), by the Contributory Parent restriction, or by a significant criminal record for a relevant offence.",
      "PIC 4020: a bogus document or false information, including an undisclosed earlier relationship, results in refusal and a three-year bar; the family violence provisions do not apply to a 309 applicant who has not entered Australia after lodging.",
      "Loss of eligibility for the 100 through grant of another visa (for example a 444 at the border), or because the relationship ended without the death, family violence or child provisions applying.",
    ],
    faqs: [
      {
        question: "Can I come to Australia to visit while the 309 is processed?",
        answer:
          "Yes, if you are granted another visa such as a Visitor visa, but you must keep that visa valid and you can be inside or outside Australia when the 309 is decided. Entering Australia after lodgement also matters for the family violence provisions, which only apply to 309 applicants who have entered Australia since applying.",
      },
      {
        question: "Can we lodge a 309 before we are married?",
        answer:
          "Yes. An applicant who intends to marry an Australian citizen, permanent resident or eligible New Zealand citizen can lodge a 309, but the marriage must normally have taken place before the 309 is granted and must be valid under Australian law. If you want to marry in Australia after arriving, the Prospective Marriage visa (subclass 300) followed by the 820 and 801 is the usual route.",
      },
      {
        question: "What is the difference between the 309 and the 820?",
        answer:
          "Both are the temporary first stage of a partner visa leading to permanent residence. The 309 and 100 are lodged outside Australia and carry a first entry date and possible conditions 8502 and 8515; the 820 and 801 are lodged in Australia, come with a Bridging visa A and must address Schedule 3 if you have no substantive visa. The charge and relationship tests are the same.",
      },
      {
        question: "When is the permanent subclass 100 granted?",
        answer:
          "Two years after you lodged, once you provide the Stage 2 evidence and the relationship is still genuine and continuing. The wait does not apply if you were in a long-term partner relationship at lodgement (three years, or two years with a dependent child) or if your sponsor holds a permanent humanitarian visa and declared the relationship before that visa was granted.",
      },
      {
        question: "Can my children come with me?",
        answer:
          "Yes. Members of your family unit can be included when you lodge, provided they are outside Australia, meet health and character requirements and pay their additional applicant charge (A$5,860 for 18 or over, A$2,935 under 18). A dependent child can be added before the 309 is decided; after that the child needs a Dependent Child visa (subclass 445).",
      },
      {
        question: "Does the 1 July 2026 Pacific concession apply to partner visas?",
        answer:
          "Yes. A primary applicant who holds a valid passport from one of 13 listed Pacific Island countries or Timor-Leste pays A$9,600 instead of A$11,710, and additional applicants pay A$4,805 (18 or over) or A$2,405 (under 18). ImmiAccount applies the lower charge automatically when the passport is recorded.",
      },
      {
        question: "What happens if my sponsor dies or the relationship breaks down?",
        answer:
          "You may still be granted the 309 or 100 if the sponsor died and the relationship would have continued, if you have entered Australia since applying and you or a family member experienced family violence by the sponsor, or if you have custody of, access to or orders about a child in respect of whom the sponsor has court-ordered obligations. Tell the Department as soon as the relationship ends.",
      },
    ],
    legislation: [
      { label: "Migration Regulations 1994, Sch 2 Part 309 (Partner (Provisional))", url: REGS },
      { label: "Migration Regulations 1994, Sch 2 Part 100 (Partner (Migrant))", url: REGS },
      { label: "Migration Regulations 1994, Sch 1 items 1220A (Partner (Provisional) (Class UF)) and 1129 (Partner (Migrant) (Class BC))", url: REGS },
      { label: "Migration Regulations 1994, regs 1.09A and 1.15A (relationship matters); reg 1.03 (long-term partner relationship); reg 1.12 (member of the family unit)", url: REGS },
      { label: "Migration Regulations 1994, reg 2.03A (de facto partners, 12-month requirement)", url: REGS },
      { label: "Migration Regulations 1994, Division 1.4B: regs 1.20J, 1.20KA, 1.20KB, 1.20KC and 1.20KD", url: REGS },
      { label: "Migration Regulations 1994, Division 1.5 (family violence); reg 2.08B (adding a dependent child)", url: REGS },
      { label: "Migration Regulations 1994, Sch 4 PICs 4001, 4004, 4007, 4009, 4019, 4020 and 4021; Sch 5 criteria 5001 and 5002; Sch 8 conditions 8502 and 8515", url: REGS },
      { label: "Migration Act 1958, ss 5CB, 5F, 12, 65 and 338", url: ACT },
    ],
    sources: [
      { label: "Home Affairs: Partner visas (apply overseas) (subclasses 309 and 100)", url: `${HA}/visas/getting-a-visa/visa-listing/partner-offshore` },
      { label: "Home Affairs: Partner (Provisional) visa (subclass 309)", url: `${HA}/visas/getting-a-visa/visa-listing/partner-offshore/provisional-309` },
      { label: "Home Affairs: Partner (Migrant) visa (subclass 100)", url: `${HA}/visas/getting-a-visa/visa-listing/partner-offshore/migrant-100` },
      { label: "Home Affairs: Measures for the protection of children", url: `${HA}/visas/getting-a-visa/visa-listing/partner-onshore/measures-for-the-protection-of-children` },
      { label: "Home Affairs: Family violence provisions", url: `${HA}/visas/domestic-family-violence-and-your-visa/family-violence-provisions` },
      { label: "Home Affairs: Partner visa frequently asked questions", url: `${HA}/visas/getting-a-visa/partner-visa-frequently-asked-questions` },
      { label: "Home Affairs: Family visa processing priorities (Ministerial Direction 117)", url: `${HA}/visas/getting-a-visa/visa-processing-times/visa-processing-priorities/family-visa` },
      { label: "Home Affairs: Current visa pricing (1 July 2026)", url: `${HA}/visas/getting-a-visa/fees-and-charges/current-visa-pricing` },
      { label: "Home Affairs: See your visa conditions (subclass 309)", url: `${HA}/visas/already-have-a-visa/check-visa-details-and-conditions/see-your-visa-conditions?product=309` },
      { label: "Home Affairs: Global visa processing times", url: PROCESSING_TIMES },
      { label: "Home Affairs: Health requirement", url: `${HA}/help-support/meeting-our-requirements/health` },
      { label: "Home Affairs: Character requirements for visas", url: `${HA}/help-support/meeting-our-requirements/character` },
    ],
    related: [
      { label: "Partner visa (onshore) subclasses 820 and 801", href: "/visas/family/partner-visa-onshore-820-801" },
      { label: "Prospective Marriage visa (subclass 300)", href: "/visas/family/prospective-marriage-visa-300" },
      { label: "Dependent Child visa (subclass 445)", href: "/visas/family/dependent-child-visa-445" },
      { label: "Visitor visa (subclass 600)", href: "/visas/other-visas/visitor-visa-600" },
      { label: "Family and partner visa services", href: "/services/family-partner-visas" },
      { label: "Book a consultation", href: "/bookings" },
    ],
    keywords: [
      "309 visa",
      "subclass 309",
      "100 visa",
      "offshore partner visa",
      "partner provisional visa",
      "partner migrant visa",
      "309 visa requirements",
      "partner visa outside australia",
      "309 visa cost 2026",
      "spouse visa australia offshore",
    ],
  },

  // ───────────────────────────────────────────────────────────────────────
  // 3. Prospective Marriage visa subclass 300
  // ───────────────────────────────────────────────────────────────────────
  {
    slug: "prospective-marriage-visa-300",
    category: "family",
    kind: "visa",
    subclass: "300",
    name: "Prospective Marriage visa",
    title: "Prospective Marriage visa (subclass 300)",
    seoTitle: "Prospective Marriage visa (subclass 300): fiance visa guide",
    seoDescription:
      "Subclass 300 Prospective Marriage visa: 9 to 15 months to enter and marry your fiance, met-in-person rule, A$11,710 charge, then the 820/801 at A$1,955 (2026).",
    intro:
      "The Prospective Marriage visa (subclass 300) lets you come to Australia to marry your fiance or fiancee, who must be an Australian citizen, permanent resident or eligible New Zealand citizen. It is a temporary visa valid for 9 to 15 months with full work and study rights; you must enter Australia and marry within the visa period, then apply onshore for the Partner visa (subclasses 820 and 801) at a reduced charge to stay permanently.",
    factsAsAt: "12 October 2026",
    permanent: false,
    tags: ["Temporary", "Pathway to PR", "Family sponsor required", "Apply outside Australia"],
    keyFacts: [
      { label: "Government fee", value: "A$11,710", note: "Primary applicant, 1 July 2026 charge; A$9,600 for Pacific Island and Timor-Leste passport holders" },
      { label: "Length of stay", value: "9 to 15 months from grant", note: "The exact end date is set in the grant letter; you must enter and marry within it" },
      { label: "Work rights", value: "Full work and study rights", note: "No Medicare unless a reciprocal health care agreement applies; health insurance recommended" },
      { label: "Pathway to permanent residence", value: "Partner visa (820 and 801) after the marriage", note: "Reduced charge of A$1,955 if lodged while the 300 is still in effect" },
      { label: "Where you must be", value: "Outside Australia when you apply; in or outside Australia when it is granted", note: "You must enter Australia before the first entry date in the grant letter" },
      { label: "Sponsor", value: "Your prospective spouse, aged 18 or over", note: "Sponsorship must be approved; two-sponsorship and five-year limits apply" },
    ],
    whoFor: [
      "You are engaged to an Australian citizen, permanent resident or eligible New Zealand citizen, you have met in person as adults, and you want to marry in Australia.",
      "You and your fiance or fiancee have not lived together for 12 months, so you cannot yet apply as de facto partners, and you prefer to marry in Australia rather than overseas.",
      "You want to work and settle in Australia while you organise the wedding, and then move onto the onshore partner visa without leaving.",
      "You are outside Australia and your relationship is genuine but not yet a marriage or a 12-month de facto relationship.",
    ],
    eligibility: [
      {
        title: "You intend to marry an eligible sponsor and both of you are 18 or over",
        detail:
          "At lodgement you must intend to marry an Australian citizen, an Australian permanent resident or an eligible New Zealand citizen (a protected Special Category visa holder), and both you and your prospective spouse must be 18 or older. The relationship can be with a person of the same or a different sex, and there must be no impediment to the marriage under Australian law (for example an undissolved earlier marriage) at the time of decision.",
        legal: "Migration Regulations 1994, Sch 2 cl 300.211, 300.212A, 300.213(2) and 300.221A; Migration Act 1958, s 12",
      },
      {
        title: "You have met in person as adults and know each other personally",
        detail:
          "You and your prospective spouse must have met in person since each of you turned 18 and must know each other personally; an online-only relationship does not qualify. Home Affairs asks for evidence of the face-to-face meeting such as travel records and photographs.",
        legal: "Migration Regulations 1994, Sch 2 cl 300.214",
      },
      {
        title: "A genuine intention to marry within the visa period and to live together as spouses",
        detail:
          "You must establish that you both genuinely intend to marry, that the marriage is intended to take place within the visa period, and that you genuinely intend to live together as spouses. Home Affairs suggests a letter from the person who will officiate at the wedding confirming a date within nine months of grant, written statements covering the history of the relationship and your future plans, and two Form 888 witness statements. These criteria must still be met when the visa is decided.",
        legal: "Migration Regulations 1994, Sch 2 cl 300.215, 300.216 and 300.221",
      },
      {
        title: "Outside Australia when you apply",
        detail:
          "You and any family members applying with you must be outside Australia at lodgement. You can be in or outside Australia when the visa is granted. If you marry before the visa is decided you are no longer eligible for the 300: Home Affairs asks you to notify the marriage, request consideration for a Partner (Provisional) subclass 309 and Partner (Migrant) subclass 100 visa instead, and withdraw the 300 application, otherwise it will be refused.",
        legal: "Migration Regulations 1994, Sch 1 item 1215(3)(b); Sch 2 cl 300.412",
      },
      {
        title: "An approved sponsor who is not limited from sponsoring",
        detail:
          "Your prospective spouse sponsors you, lodging the sponsorship after your application with your transaction reference number. The sponsorship must be approved and in force at decision and the sponsor must consent to disclosure of relevant convictions. The two-sponsorship limit and the five-year gap apply (unless compelling circumstances exist), Contributory Parent visa holders are restricted for five years, and a sponsor who was granted a Woman at Risk visa in the last five years cannot sponsor a former or undeclared partner. The sponsor also undertakes to accept responsibility for your debts to the Commonwealth, compliance with employment laws and compliance with your visa conditions while the 300 is in effect.",
        legal: "Migration Regulations 1994, regs 1.20J, 1.20KA and 1.20(2)(b); Sch 2 cl 300.212, 300.213 and 300.222",
      },
      {
        title: "Sponsor's police checks, relevant offences and child protection",
        detail:
          "The sponsor provides an AFP complete disclosure National Police Certificate and overseas certificates for every country where they lived 12 months or more in the last 10 years since turning 16. Sponsorship must be refused if the sponsor has a significant criminal record (death, life, 12 months' imprisonment or terms totalling 12 months) for a relevant offence involving violence, harassment or stalking, breach of a protection order, weapons, people smuggling, trafficking, slavery or forced marriage, unless the Department considers approval reasonable. If an applicant is under 18, a registrable child sex offence charge or conviction leads to refusal with very limited exceptions. Forced marriage is a crime, and the visa may be refused if the parties are found to be at risk of a forced marriage.",
        legal: "Migration Regulations 1994, regs 1.20KB, 1.20KC and 1.20KD; Sch 2 cl 300.222(2)",
      },
      {
        title: "Health, character, settlement, values and passport",
        detail:
          "You must satisfy public interest criteria 4001 (character), 4002, 4003, 4004 (no outstanding Commonwealth debt), 4007 (health, waiver available), 4009 (intention to live permanently in Australia), 4010 (likely to become established without undue difficulty or cost to the community), 4019 (values statement), 4020 (no bogus documents or false information) and 4021 (valid passport), and special return criteria 5001 and 5002 if you have been in Australia before. Family members aged 16 and over must meet character requirements and children under 18 need consent from everyone who can decide where they live.",
        legal: "Migration Regulations 1994, Sch 2 cl 300.223, 300.224, 300.226 and 300.227; Sch 4 PICs 4001, 4007, 4010, 4019, 4020 and 4021",
      },
      {
        title: "Enter, marry and apply for the partner visa before the 300 ends",
        detail:
          "Once granted, you must enter Australia before the first entry date in the grant letter and marry within the visa period (conditions 8515 and 8519 are imposed). You can marry in any country as long as the marriage is valid under Australian law. To stay, lodge the Partner visa (subclasses 820 and 801) in Australia after the wedding and before the 300 ceases; if you hold a 300 at that time the partner visa charge is A$1,955. If the 300 has ceased and you hold no substantive visa, you can still apply as a former holder at A$2,475. If your relationship ends or your sponsor dies, the 820 and 801 may still be available under the family violence, child or death provisions.",
        legal: "Migration Regulations 1994, Sch 2 cl 300.511, 300.611 and 300.612; Sch 1 item 1124B(2)(a); Sch 2 cl 820.211(5) to (9)",
      },
    ],
    familyNote:
      "Members of the family unit (dependent children, and children aged 18 to 22 who are dependent or 23 and over who cannot work because of incapacity) can be included when you lodge and must be outside Australia; each pays an additional applicant charge. A dependent child can be added with Form 1436 before the visa is decided but nobody can be added after grant. Family members who held a 300 with you can be included in your later 820 application only when it is lodged, not afterwards.",
    documents: [
      {
        group: "Identity",
        items: [
          "Birth certificate showing both parents' names (or family book, government identity document, court document or family census register)",
          "Current passport pages with your photo, personal details and issue and expiry dates, and any national identity card",
          "Change of name documents and evidence of other names used",
          "Divorce, death or separation documents or statutory declarations for every previous marriage or de facto relationship of either party",
        ],
      },
      {
        group: "Relationship and intention to marry",
        items: [
          "Two Form 888 statements from witnesses aged 18 or over who know you both, with evidence of their citizenship or permanent residence where applicable",
          "Evidence you have met face to face as adults and know each other personally, such as travel records and photographs",
          "Evidence of the planned marriage, for example a letter from the celebrant or officiant confirming you will marry within nine months of grant",
          "Written relationship history covering how you met, how the relationship developed, the engagement, time together, significant events and your plans as spouses, and evidence you genuinely intend to live together",
        ],
      },
      {
        group: "Health and character",
        items: [
          "Health examinations when requested (results valid 12 months)",
          "AFP complete disclosure National Police Certificate if you spent 12 months or more in Australia in the last 10 years since turning 16",
          "Police certificates from every other country where you spent 12 months or more in the last 10 years since turning 16, military records if you served, and Form 80",
        ],
      },
      {
        group: "Sponsor",
        items: [
          "Sponsor's passport, birth certificate and photo, and evidence that a permanent resident or eligible New Zealand citizen sponsor usually lives in Australia",
          "Sponsor's AFP complete disclosure certificate and overseas police certificates, plus written consent to disclosure of any relevant convictions",
        ],
      },
      {
        group: "Dependants",
        items: [
          "For each child under 18: identity documents, birth certificate, health and character documents as applicable, school enrolment and Form 1229 consent from any non-migrating person with a legal right to decide where the child lives, or a court order",
          "For dependants aged 18 to 22: Form 47a and evidence of financial dependence; for dependants 23 or over, a medical report confirming dependence due to loss of bodily or mental function",
        ],
      },
    ],
    steps: [
      {
        title: "Confirm you qualify and choose the right visa",
        description:
          "Check that you have met in person as adults, that both of you are 18 or over, that there is no legal impediment to marriage and that your sponsor is not caught by the sponsorship limits. If you have already lived together for 12 months, or are already married, a Partner visa may be more suitable.",
        output: "A decision that the 300 is the right visa and a sponsor who can be approved",
      },
      {
        title: "Gather evidence of the relationship and wedding plans",
        description:
          "Collect identity documents, relationship statements, evidence of your face-to-face meeting, two Form 888 statements and evidence of the planned marriage, such as a celebrant's letter, plus documents for any dependants.",
        output: "A complete application file with evidence of the intention to marry within the visa period",
      },
      {
        title: "Lodge online from outside Australia and pay",
        description:
          "In ImmiAccount select 'New application', 'Family' and 'Stage 1 - Partner or Prospective Marriage Visa', attach documents, pay A$11,710 (or A$9,600 with an eligible Pacific or Timor-Leste passport) and note the transaction reference number for your sponsor.",
        output: "A lodged subclass 300 application and a transaction reference number",
      },
      {
        title: "Sponsor lodges the sponsorship",
        description:
          "Your fiance or fiancee selects 'Sponsorship for a Partner to Migrate to Australia' in ImmiAccount, enters your TRN and attaches identity and status documents, police certificates and consent to disclosure. There is no sponsorship charge.",
        output: "A lodged sponsorship with the sponsor's police certificates",
      },
      {
        title: "Health, character and waiting",
        description:
          "Complete health examinations and provide police certificates and Form 80 when asked, keeping the 12-month validity in mind. Do not arrange travel to Australia until the grant is notified in writing. Tell the Department if you marry before the decision so the application can be converted to a 309 and 100 request.",
        output: "Health and character clearances on file and the application ready for decision",
      },
      {
        title: "Grant, entry and marriage",
        description:
          "Enter Australia before the first entry date, then marry within the visa period. You can work and study and travel in and out of Australia as often as you wish while the visa is valid. Do not apply for any other visa, because another visa would replace the 300 and remove the reduced partner visa charge.",
        output: "A marriage valid under Australian law while the 300 is in effect",
      },
      {
        title: "Lodge the Partner visa (820 and 801) before the 300 ends",
        description:
          "Apply in Australia for the combined 820 and 801 at A$1,955, attaching the marriage certificate and relationship evidence; your sponsor usually does not need new police certificates. A Bridging visa A keeps you lawful once the 300 ceases, and the 820 continues the pathway to permanent residence.",
        output: "A lodged Partner visa application and a bridging visa if the 300 expires before the decision",
      },
    ],
    conditions: [
      { code: "8515", meaning: "You must not marry or enter a de facto relationship before entering Australia (always imposed on the main applicant)" },
      { code: "8519", meaning: "You must marry the person named in the application within the visa period (always imposed on the main applicant)" },
      { code: "8502", meaning: "You must not enter Australia before the person named in the visa; may be imposed" },
      { code: "8520", meaning: "For family members: the main applicant must marry within the visa period; family members may also receive 8502 and 8515" },
    ],
    costs: [
      { item: "Base application charge", amount: "A$11,710", note: "Primary applicant, 1 July 2026 charge; not refunded if refused" },
      { item: "Additional applicant aged 18 or over", amount: "A$5,860", note: "Each dependant pays their own charge" },
      { item: "Additional applicant under 18", amount: "A$2,935" },
      { item: "Primary applicant with a Pacific Island or Timor-Leste passport", amount: "A$9,600", note: "From 1 July 2026; additional applicants A$4,805 and A$2,405" },
      { item: "Partner visa (820 and 801) lodged while the 300 is in effect", amount: "A$1,955", note: "Additional applicants A$980 (18 or over) and A$485 (under 18); A$1,600 with an eligible Pacific or Timor-Leste passport" },
      { item: "Partner visa (820 and 801) for a former 300 holder who married and holds no substantive visa", amount: "A$2,475", note: "Additional applicants A$1,235 (18 or over) and A$625 (under 18)" },
      { item: "Health examinations", amount: "Typical third-party cost", note: "Results valid 12 months" },
      { item: "Police certificates", amount: "Typical third-party cost", note: "For the applicant, dependants aged 16 or over and the sponsor" },
      { item: "Health insurance while on the 300", amount: "Typical third-party cost", note: "Recommended by Home Affairs; no Medicare access unless a reciprocal agreement applies" },
      { item: "Administrative Review Tribunal fee if refused", amount: "A$3,727", note: "Migration decisions, 1 July 2026; the sponsor usually applies for review" },
    ],
    afterGrant: [
      "Enter Australia before the first entry date in your grant letter; you must not marry or enter a de facto relationship before that first entry (condition 8515).",
      "Marry within the visa period (condition 8519); the marriage can take place in any country but must be valid under Australian law.",
      "Lodge the Partner visa (820 and 801) in Australia after the wedding and before the 300 ceases to keep the reduced charge of A$1,955; being granted any other visa replaces the 300.",
      "You have full work rights and are protected by Australian workplace law, can study at your own cost, and can travel in and out as often as you like while the visa is valid; time outside Australia does not extend it.",
      "Tell the Department of a change of address or passport, the birth of a child, or the end of the relationship; if the relationship ends because of family violence or the sponsor dies, you may still be eligible for the 820 and 801.",
    ],
    pathways: [
      { title: "Partner visa (onshore) subclasses 820 and 801", description: "The standard next step after the marriage, lodged in Australia at A$1,955 while the 300 is in effect.", href: "/visas/family/partner-visa-onshore-820-801" },
      { title: "Partner visa (offshore) subclasses 309 and 100", description: "If you marry before the 300 is decided, you can ask the Department to consider you for the 309 and 100 instead.", href: "/visas/family/partner-visa-offshore-309-100" },
      { title: "Bridging visas", description: "A Bridging visa A keeps you lawful if the 300 ceases while the onshore partner application is being decided.", href: "/visas/other-visas/bridging-visas-a-b-c-e" },
      { title: "Review at the Administrative Review Tribunal", description: "A refusal letter states whether merits review is available; the sponsor usually applies for an offshore refusal.", href: "/visas/appeals-and-review/art-review-of-visa-refusal" },
    ],
    risks: [
      "Never having met in person as adults, or evidence that the relationship is online only, fails cl 300.214 outright.",
      "Weak evidence that you genuinely intend to marry within the visa period and to live as spouses, for example no wedding plans, no celebrant letter and little contact between you.",
      "Marrying before the decision without telling the Department: the 300 criteria are no longer met and the application is refused unless converted to a 309 and 100 request.",
      "Entering Australia on another visa after the 300 is granted, or applying for another visa, replaces the 300 and removes the A$1,955 partner visa charge.",
      "Letting the 300 cease without marrying, or marrying but not lodging the 820 and 801 in time, leaves you unlawful or dependent on the Schedule 3 criteria.",
      "The sponsor is limited by reg 1.20J (a third sponsorship or a sponsorship within five years), has a significant criminal record for a relevant offence, or is a Contributory Parent visa holder within five years of grant.",
      "Forced marriage concerns, or a legal impediment such as an undissolved earlier marriage, lead to refusal.",
    ],
    faqs: [
      {
        question: "How long is the Prospective Marriage visa valid?",
        answer:
          "The visa period is between 9 and 15 months from the grant date; the exact date is in your grant letter. You must enter Australia before the first entry date and marry within the visa period. The period cannot be extended, so plan the wedding and the partner visa lodgement well inside it.",
      },
      {
        question: "Do we have to marry in Australia?",
        answer:
          "No. You can marry in any country, including before you travel if the visa has already been granted and you have not yet entered, but condition 8515 means you must not marry before your first entry to Australia. Wherever you marry, the marriage must be valid under Australian law, and you must be in Australia to lodge the 820 and 801.",
      },
      {
        question: "Can I work on a subclass 300 visa?",
        answer:
          "Yes. The visa gives full work and study rights and you are protected by Australian workplace law. You cannot enrol in Medicare on the 300 alone (unless your country has a reciprocal health care agreement), so Home Affairs recommends health insurance; Medicare eligibility usually follows lodgement of the onshore partner visa.",
      },
      {
        question: "How much does the partner visa cost after we marry?",
        answer:
          "If you lodge the 820 and 801 while you still hold the 300 and are married to the person named in your application, the 1 July 2026 charge is A$1,955 for the main applicant (A$980 and A$485 for additional applicants). If the 300 has ceased and you hold no substantive visa, the charge is A$2,475. Any other situation attracts the full A$11,710.",
      },
      {
        question: "What if I decide not to marry, or the relationship ends?",
        answer:
          "If you do not marry within the visa period you are not eligible for the partner visa on the basis of the engagement and should leave before the visa ceases or seek other options. If the relationship ended because of family violence committed by the sponsor, if there are children with court orders, or if your sponsor died, you may still be able to apply for the 820 and 801 in Australia.",
      },
      {
        question: "Can my fiance sponsor me if they have sponsored a partner before?",
        answer:
          "Only in limited cases. The Department must not approve a sponsorship if the sponsor has already had two other partners or prospective spouses granted visas, sponsored someone within the last five years, or was themselves sponsored within five years, unless there are compelling circumstances such as a dependent child of you both or the death of the previous partner.",
      },
      {
        question: "Do we need to have lived together?",
        answer:
          "No. Unlike the de facto partner visa, the 300 does not require 12 months of cohabitation, which is why many couples who have not yet lived together use it. You must still show a genuine relationship, that you have met in person as adults, and that you genuinely intend to marry and live together as spouses.",
      },
    ],
    legislation: [
      { label: "Migration Regulations 1994, Sch 2 Part 300 (Prospective Marriage)", url: REGS },
      { label: "Migration Regulations 1994, Sch 1 item 1215 (Prospective Marriage (Temporary) (Class TO)) and item 1124B(2)(a) (reduced partner visa charges)", url: REGS },
      { label: "Migration Regulations 1994, Division 1.4B: regs 1.20J, 1.20KA, 1.20KB, 1.20KC and 1.20KD (sponsorship limitations); reg 1.20(2)(b) (sponsor undertakings)", url: REGS },
      { label: "Migration Regulations 1994, Division 1.5 (family violence); Sch 2 cl 820.211(5) to (9) (partner visa pathways for 300 holders); reg 2.08B", url: REGS },
      { label: "Migration Regulations 1994, Sch 4 PICs 4001, 4004, 4007, 4009, 4010, 4019, 4020 and 4021; Sch 5 criteria 5001 and 5002; Sch 8 conditions 8502, 8515, 8519 and 8520", url: REGS },
      { label: "Migration Act 1958, ss 12, 65 and 338", url: ACT },
    ],
    sources: [
      { label: "Home Affairs: Prospective Marriage visa (subclass 300)", url: `${HA}/visas/getting-a-visa/visa-listing/prospective-marriage-300` },
      { label: "Home Affairs: Measures for the protection of children (subclass 300)", url: `${HA}/visas/getting-a-visa/visa-listing/prospective-marriage-300/measures-for-the-protection-of-children` },
      { label: "Home Affairs: Partner visa (temporary) (subclass 820), charges for Prospective Marriage visa holders", url: `${HA}/visas/getting-a-visa/visa-listing/partner-onshore/temporary-820` },
      { label: "Home Affairs: Family violence provisions", url: `${HA}/visas/domestic-family-violence-and-your-visa/family-violence-provisions` },
      { label: "Home Affairs: Partner visa frequently asked questions", url: `${HA}/visas/getting-a-visa/partner-visa-frequently-asked-questions` },
      { label: "Home Affairs: Family visa processing priorities (Ministerial Direction 117)", url: `${HA}/visas/getting-a-visa/visa-processing-times/visa-processing-priorities/family-visa` },
      { label: "Home Affairs: Current visa pricing (1 July 2026)", url: `${HA}/visas/getting-a-visa/fees-and-charges/current-visa-pricing` },
      { label: "Home Affairs: See your visa conditions (subclass 300)", url: `${HA}/visas/already-have-a-visa/check-visa-details-and-conditions/see-your-visa-conditions?product=300` },
      { label: "Home Affairs: Global visa processing times", url: PROCESSING_TIMES },
      { label: "Home Affairs: Health requirement", url: `${HA}/help-support/meeting-our-requirements/health` },
      { label: "Home Affairs: Character requirements for visas", url: `${HA}/help-support/meeting-our-requirements/character` },
    ],
    related: [
      { label: "Partner visa (onshore) subclasses 820 and 801", href: "/visas/family/partner-visa-onshore-820-801" },
      { label: "Partner visa (offshore) subclasses 309 and 100", href: "/visas/family/partner-visa-offshore-309-100" },
      { label: "Bridging visas A, B, C and E", href: "/visas/other-visas/bridging-visas-a-b-c-e" },
      { label: "Visitor visa (subclass 600)", href: "/visas/other-visas/visitor-visa-600" },
      { label: "Family and partner visa services", href: "/services/family-partner-visas" },
      { label: "Book a consultation", href: "/bookings" },
    ],
    keywords: [
      "300 visa",
      "subclass 300",
      "prospective marriage visa",
      "fiance visa australia",
      "fiancee visa australia",
      "prospective marriage visa requirements",
      "300 visa cost 2026",
      "prospective marriage visa to partner visa",
      "engaged to australian visa",
    ],
  },
  // ───────────────────────────────────────────────────────────────────────
  // 4. Child visa subclasses 101 and 802
  // ───────────────────────────────────────────────────────────────────────
  {
    slug: "child-visa-101-802",
    category: "family",
    kind: "visa",
    subclass: "101/802",
    name: "Child visa",
    title: "Child visa (subclasses 101 and 802)",
    seoTitle: "Child visa (subclass 101/802): eligibility, cost and sponsor",
    seoDescription:
      "Child visa (subclass 101 offshore, 802 onshore): permanent visa for a dependent child of an Australian parent. Age limits, consent, sponsor checks, A$4,040.",
    intro:
      "The Child visa (subclasses 101 and 802) is a permanent visa for a dependent child of an Australian citizen, Australian permanent resident or eligible New Zealand citizen. The subclass 101 is for a child outside Australia and the subclass 802 for a child already in Australia; the parent (or the parent's partner) sponsors the child and supports them for their first two years. The child becomes a permanent resident and can later apply for citizenship.",
    factsAsAt: "12 October 2026",
    permanent: true,
    tags: ["Permanent", "Family sponsor required", "Apply in or outside Australia"],
    keyFacts: [
      { label: "Government fee", value: "A$4,040", note: "Primary applicant, 1 July 2026 charge, same for the 101 and the 802; A$3,315 with a Pacific Island or Timor-Leste passport; nil for an 802 supported by a state welfare authority" },
      { label: "Length of stay", value: "Permanent", note: "Five-year travel facility from grant, then a Resident Return visa to re-enter" },
      { label: "Work rights", value: "Full work and study rights and Medicare", note: "Children aged 18 to 24 must not work full time while the application is decided" },
      { label: "Pathway to permanent residence", value: "This is a permanent visa", note: "Citizenship after the residence requirement; permanent residence counts from entry (101) or grant (802)" },
      { label: "Where you must be", value: "101: outside Australia at lodgement and grant; 802: in Australia at lodgement and decision", note: "Not in immigration clearance" },
      { label: "Sponsor", value: "The child's parent, or the parent's current spouse or de facto partner, aged 18 or over", note: "Police checks for the sponsor and their partner if the child is under 18" },
    ],
    whoFor: [
      "You are an Australian citizen, permanent resident or eligible New Zealand citizen and your child under 18 lives overseas and will move to Australia to live with you.",
      "Your child is 18 to 24, single, studying full time and financially dependent on you, or is 18 or older and cannot work because of a disability.",
      "Your child is in Australia on a temporary visa and you want them to stay permanently.",
      "You are the step-parent of a child from a former partner, the child is under 18, and you have an Australian parenting order or legal guardianship.",
      "You adopted the child overseas before you became an Australian citizen or permanent resident.",
    ],
    eligibility: [
      {
        title: "A dependent child of an Australian citizen, permanent visa holder or eligible New Zealand citizen",
        detail:
          "The child must be the biological child, adopted child or step-child of a parent who is an Australian citizen, the holder of a permanent visa or an eligible New Zealand citizen. A dependent child is a child or step-child who is not engaged, married or in a de facto relationship and who is under 18, or is 18 or over and dependent on the parent, or is incapacitated for work through loss of bodily or mental function. A step-child qualifies only if they are the child of the step-parent's former partner, are under 18, and the step-parent has an Australian parenting order or guardianship or custody under Australian or foreign law. A child adopted overseas qualifies for the 101 only if the adopting parent was not yet an Australian citizen, permanent visa holder or eligible New Zealand citizen at the time of adoption; otherwise the Adoption visa (subclass 102) applies. For the 802, the adoption must have been completed before the child turned 18 under the Hague Convention, before the parent became Australian, with approval of an Australian competent authority, or as an expatriate adoption after more than 12 months overseas.",
        legal: "Migration Regulations 1994, reg 1.03 (dependent child and step-child); reg 1.05A (dependent); Sch 2 cl 101.211 and 802.212 to 802.213",
      },
      {
        title: "Age: under 18, or 18 to 24 studying full time, or incapacitated",
        detail:
          "The child must be under 25 at lodgement unless they are incapacitated for work. An applicant aged 18 or over must never have been married or in a de facto relationship and must not be engaged, must not be in full-time work, and must have been undertaking a full-time course leading to a professional, trade or vocational qualification since turning 18 or within six months (or a reasonable time) of finishing the equivalent of year 12; gaps over six months must be explained. The child must still be a full-time student when the visa is decided. Turning 18 or 25 after lodgement does not defeat the application.",
        legal: "Migration Regulations 1994, Sch 2 cl 101.211(1)(b), 101.213, 101.221, 802.212(1)(b), 802.214 and 802.221",
      },
      {
        title: "Sponsored by the parent or the parent's current partner",
        detail:
          "The sponsor must be 18 or over, an Australian citizen, permanent visa holder or eligible New Zealand citizen, and either the parent described above or that parent's cohabiting spouse or de facto partner. A former step-parent who still has legal responsibility for a child under 18 can sponsor. The sponsorship (Form 40CH) must be approved and in force at decision. A child in Australia whose application is supported by a letter of support from a state or territory welfare authority does not need a sponsor and is exempt from most other criteria.",
        legal: "Migration Regulations 1994, Sch 2 cl 101.212, 101.222, 802.215, 802.216 and 802.226",
      },
      {
        title: "Child protection: registrable offences and police checks",
        detail:
          "If the child is under 18 when the sponsorship is decided, the Department must refuse the sponsorship if the sponsor, or the sponsor's spouse or de facto partner, has been charged with a registrable offence (an offence against a child of a sexual or violent nature that would require registration on a child offender register) unless the charge was dismissed without conviction, and must refuse it if either has been convicted of such an offence unless the conviction was quashed, with only narrow exceptions where the sentence ended more than five years ago and there are compelling circumstances. The sponsor and their partner must provide an AFP National Police Certificate applied for under code 33 (Immigration/Citizenship) and overseas certificates for countries where they lived 12 months or more in the last 10 years since turning 16; failure to provide a requested check is itself a ground for refusal.",
        legal: "Migration Regulations 1994, reg 1.20KB",
      },
      {
        title: "Consent from everyone who can decide where the child lives",
        detail:
          "A visa will not be granted to a child under 18 unless the law of the child's home country permits their removal, every person who can lawfully decide where the child lives consents to the grant (Form 1229 or a statutory declaration with the person's signed photo identification), or the grant is consistent with an Australian child order. The Department must also be satisfied there is no compelling reason to believe the grant would not be in the child's best interests.",
        legal: "Migration Regulations 1994, Sch 2 cl 101.226 and 802.225; Sch 4 PICs 4017 and 4018",
      },
      {
        title: "Health, character, debts and values",
        detail:
          "The child must satisfy public interest criteria 4001 to 4004, 4007 (health, with a waiver available), 4020 (no bogus documents or false information) and 4021 (valid passport), and for the 101 also 4009 (intention to live permanently in Australia). A child aged 16 or over must meet the character requirement and provide police certificates and Form 80; a child aged 18 or over signs the Australian values statement. The child's own dependent children can be included and must meet the health requirement, and family members not migrating may also be asked to meet it. If requested, an assurance of support must be accepted by Services Australia before grant.",
        legal: "Migration Regulations 1994, Sch 2 cl 101.223, 101.225, 101.227, 802.222 to 802.224; Sch 4 PICs 4001, 4004, 4007, 4009, 4019, 4020 and 4021",
      },
      {
        title: "Where the child must be, and no further stay conditions (802)",
        detail:
          "For the 101 the child must be outside Australia when the application is lodged and when it is granted. For the 802 the child must be in Australia, but not in immigration clearance, at lodgement and at decision; the child cannot apply onshore if their current visa carries a no further stay condition (8503) unless it is waived first, and a child barred under section 48 after an onshore refusal or cancellation can still apply for a Child (Residence) (Class BT) visa if they are under 25 or incapacitated and have not been refused on character grounds. A bridging visa is granted with an onshore application.",
        legal: "Migration Regulations 1994, Sch 1 items 1108(3)(aa) and 1108A(3)(b) and (e); Sch 2 cl 101.411, 802.211 and 802.411; reg 2.12; Migration Act 1958, ss 41(2A) and 48",
      },
      {
        title: "Sponsor's two-year support undertaking",
        detail:
          "The sponsor undertakes to assist the child, and any dependent child granted the visa with them, financially and with accommodation to the extent necessary for the first two years after grant (802) or after the child's first entry to Australia (101), including any period in the Adult Migrant English Program. The sponsorship cannot be withdrawn after grant. The Department may also ask for income and tax records and may request a formal assurance of support.",
        legal: "Migration Regulations 1994, reg 1.20(2)(a); Sch 2 cl 101.225 and 802.222",
      },
    ],
    familyNote:
      "Each child applies separately; siblings cannot be combined on one application. The child's own dependent children can be included when the application is lodged or added at any time before decision and must meet the health requirement. A spouse or partner cannot be included because the child must be single. Nobody can be added after the visa is decided. Children born outside Australia to an Australian citizen parent may be able to apply for citizenship by descent instead of a visa.",
    documents: [
      {
        group: "Identity and travel",
        items: [
          "Pages of the child's current passport showing their photo, personal details and issue and expiry dates, and any national identity card",
          "Change of name documents, and certified copies of adoption papers or an adoption compliance certificate if the child was adopted",
          "Four passport-size photographs (45 mm by 35 mm, less than six months old, plain light background) of the child and of any dependent child included, certified on the back",
          "For the 802, a certified copy of the passport the child used to enter Australia and any passports held since",
        ],
      },
      {
        group: "Relationship, dependency and custody",
        items: [
          "Birth certificate, marriage certificate, adoption certificate or an officially issued family book showing the child's relationship to the parent",
          "For a child aged 18 or over: evidence of full-time enrolment and attendance in a post-secondary course, an explanation of any study gap over six months, and evidence of financial dependence such as bank statements, money transfers and rent receipts; or a medical practitioner's report of total or partial loss of bodily or mental function that prevents work",
          "Form 1229 consent (or a statutory declaration) from every person with a legal right to decide where the child lives, with their signed photo identification, or an Australian court order or evidence that home-country law permits the child to leave",
          "Parenting orders or guardianship documents for a step-child, and evidence of the former relationship with the child's parent",
        ],
      },
      {
        group: "Health and character",
        items: [
          "Health examinations when the Department asks (results valid 12 months)",
          "For a child aged 16 or over: police certificates from every country where they spent 12 months or more in the last 10 years since turning 16 (for Australia an AFP certificate under code 33), military records if applicable, and Form 80",
        ],
      },
      {
        group: "Sponsor",
        items: [
          "Form 40CH Sponsorship for a child to migrate to Australia, lodged with the child's Form 47CH",
          "Sponsor's passport pages, change of name documents, and evidence of citizenship or permanent residence (birth certificate, Australian passport, citizenship certificate, or for a New Zealand citizen evidence of length of residence and ties to Australia)",
          "Documents proving the sponsor's relationship to the child, and for a step-parent evidence of the marriage or de facto relationship with the parent or of legal responsibility for the child",
          "AFP National Police Certificate (code 33) and overseas police certificates for the sponsor and the sponsor's spouse or de facto partner if the child is under 18",
          "Income and tax records or other evidence the sponsor can support the child, and a statement about any child support or earlier assurances of support",
        ],
      },
    ],
    steps: [
      {
        title: "Check the child's eligibility and the sponsor",
        description:
          "Confirm the child's age category, that they are single and dependent, that the parent holds citizenship, a permanent visa or eligible New Zealand status, and who will sponsor. Check whether citizenship by descent or the Adoption visa is the better route for an adopted or overseas-born child.",
        output: "The right subclass (101 or 802) and an eligible sponsor identified",
      },
      {
        title: "Obtain consent and custody documents",
        description:
          "Arrange Form 1229 or statutory declarations from every person with a legal right to decide where the child lives who is not migrating, or obtain court orders. This step often takes the longest when a parent lives in another country.",
        output: "Consent or court documents that satisfy PIC 4017",
      },
      {
        title: "Gather the child's and sponsor's documents",
        description:
          "Prepare certified copies of identity, relationship, dependency and school documents, photographs, and the sponsor's identity, status, financial and police check documents. Non-English documents need NAATI translations in Australia, or translations with the translator's details overseas. Do not certify original police certificates for an 802.",
        output: "A complete paper application set with certified copies",
      },
      {
        title: "Pay the charge and lodge on paper",
        description:
          "Pay A$4,040 (plus charges for any dependent children of the child) before posting, then send Form 47CH and Form 40CH with all documents and the payment receipt to the Child and Other Family Processing Centre, Locked Bag 7, Northbridge WA 6865 (or by courier to Wellington Central, 836 Wellington Street, West Perth WA 6005). Applications cannot be lodged in person or online, and an application sent elsewhere is invalid.",
        output: "A valid paper application and, for the 802, a bridging visa associated with the application",
      },
      {
        title: "Import the application into ImmiAccount",
        description:
          "After the acknowledgement letter arrives, import the application into ImmiAccount using the application ID, date of birth and passport number so you can attach documents, update details and check status. Otherwise use the Child and Orphan Relative Visa Processing Centre online form.",
        output: "The application linked to ImmiAccount for document uploads and messages",
      },
      {
        title: "Health examinations, biometrics and further information",
        description:
          "Arrange the child's health examinations when asked, provide biometrics if requested, and respond to requests for more information. Tell the Department if the child's circumstances change, including stopping full-time study, starting full-time work, a change of relationship status, or travel outside Australia (an 802 applicant must be in Australia at decision).",
        output: "Health and character clearances on file and the application ready for decision",
      },
      {
        title: "Decision and entry",
        description:
          "A 101 child must be outside Australia at grant and must enter before the first entry date in the grant letter (generally 12 months from grant); an 802 child must be in Australia. The visa is permanent from grant with a five-year travel facility.",
        output: "Permanent residence; for citizenship purposes it starts on entry (101) or grant (802)",
      },
    ],
    conditions: [
      { code: "8502", meaning: "For the 101 only: the child must not enter Australia before the person named in the visa; may be imposed" },
      { code: "8515", meaning: "For the 101 only: the child must not marry or enter a de facto relationship before entering Australia; may be imposed" },
    ],
    costs: [
      { item: "Base application charge (101 or 802)", amount: "A$4,040", note: "Primary applicant, 1 July 2026 charge; pay before posting; not refunded if refused" },
      { item: "Additional applicant aged 18 or over (a dependent child of the child)", amount: "A$2,020" },
      { item: "Additional applicant under 18", amount: "A$1,015" },
      { item: "Primary applicant with a Pacific Island or Timor-Leste passport", amount: "A$3,315", note: "From 1 July 2026; additional applicants A$1,655 and A$830" },
      { item: "Subclass 802 application supported by a state or territory welfare authority letter", amount: "A$0" },
      { item: "Sponsorship (Form 40CH)", amount: "No charge", note: "The sponsor takes on two years of support obligations" },
      { item: "Health examinations", amount: "Typical third-party cost", note: "Results valid 12 months" },
      { item: "Police certificates", amount: "Typical third-party cost", note: "Child aged 16 or over, sponsor and sponsor's partner" },
      { item: "Certified copies and translations", amount: "Typical third-party cost", note: "Paper applications require certified copies of every document" },
      { item: "Administrative Review Tribunal fee if refused", amount: "A$3,727", note: "Migration decisions, 1 July 2026" },
    ],
    afterGrant: [
      "A 101 child must enter Australia before the first entry date in the grant letter (generally 12 months from grant); travel after that date is possible while the visa is valid but may be examined at the border.",
      "The child can live, work and study in Australia indefinitely, enrol in Medicare and attend Adult Migrant English Program classes if eligible; newly arrived residents may face waiting periods for some government payments.",
      "The visa carries a five-year travel facility; after that the child needs a Resident Return visa to re-enter, or an Australian passport once they become a citizen.",
      "Tell the Department about changes to the child's passport, a change of name or the birth of a child; the sponsor must support the child for two years and cannot withdraw after grant.",
      "Dependants cannot be added after the decision; a family member would need their own visa.",
    ],
    pathways: [
      { title: "Australian citizenship by conferral", description: "The child may apply once they meet the residence requirement; permanent residence counts from entry (101) or grant (802).", href: "/visas/other-visas/australian-citizenship-by-conferral" },
      { title: "Adoption visa (subclass 102)", description: "For a child adopted, or being adopted, after the parent became an Australian citizen, permanent resident or eligible New Zealand citizen.", href: "/visas/family/adoption-visa-102" },
      { title: "Orphan Relative visa (subclasses 117 and 837)", description: "For a child under 18 whose parents have died, are incapacitated or cannot be found, sponsored by a relative in Australia.", href: "/visas/family/orphan-relative-visa-117-837" },
      { title: "Resident Return visa", description: "Needed to re-enter Australia as a permanent resident after the five-year travel facility ends.", href: "/visas/other-visas/resident-return-visa-155-157" },
    ],
    risks: [
      "A child aged 18 to 24 who has worked full time, taken a study gap over six months without explanation, or stopped full-time study before the decision no longer meets the dependency criteria.",
      "Missing consent from a non-migrating parent or guardian, or a custody dispute, means PIC 4017 cannot be satisfied and the visa cannot be granted.",
      "A step-child whose biological parent is still the step-parent's current partner is not eligible as a step-child; the child applies as the biological parent's child, sponsored by that parent or the parent's cohabiting spouse or de facto partner.",
      "The sponsor or the sponsor's partner has a charge or conviction for a registrable child sex offence, or does not provide the requested police checks.",
      "Lodging the 802 while the child's visa carries condition 8503, or lodging the 101 while the child is in Australia, produces an invalid application and the charge is not refunded.",
      "Posting the application without paying first, without the Form 40CH, or to the wrong address: Home Affairs treats it as invalid and will not process it.",
    ],
    faqs: [
      {
        question: "What is the age limit for a Child visa?",
        answer:
          "The child must be under 25 when the application is lodged, unless they are incapacitated for work. A child under 18 only needs to be single and dependent. A child aged 18 to 24 must be a full-time student who has never married or had a de facto partner, is not working full time and depends financially on the parent more than on anyone else.",
      },
      {
        question: "Does the other parent have to agree?",
        answer:
          "If the child is under 18, every person with a legal right to decide where the child lives who is not migrating must consent in writing (Form 1229 or a statutory declaration with their signed photo identification), unless an Australian court order allows the child to migrate or the law of the child's home country permits them to leave. Without this the visa cannot be granted.",
      },
      {
        question: "Can my child apply while in Australia?",
        answer:
          "Yes, through the subclass 802, provided the child is in Australia (not in immigration clearance) at lodgement and at decision and their current visa does not carry a no further stay condition. A bridging visa is granted with the application so the child stays lawful if their visa expires. A child outside Australia applies for the subclass 101 and must stay outside Australia until it is granted.",
      },
      {
        question: "Do I need a police check to sponsor my own child?",
        answer:
          "Yes, if the child will be under 18 when the sponsorship is decided. You and your spouse or de facto partner must provide an AFP National Police Certificate (code 33) if you have lived in Australia since turning 16, and overseas certificates for any country where you lived 12 months or more in the last 10 years. A registrable child sex offence charge or conviction leads to refusal of the sponsorship.",
      },
      {
        question: "What are my obligations as the sponsor?",
        answer:
          "You undertake to help the child, and any dependent child granted the visa with them, with accommodation and financial support to the extent necessary for the first two years the child is in Australia on the visa. The Department may also ask you for an assurance of support. You cannot withdraw the sponsorship once the visa is granted.",
      },
      {
        question: "Can my adopted child use the Child visa?",
        answer:
          "For the 101, only if you adopted the child before you became an Australian citizen, permanent resident or eligible New Zealand citizen; otherwise the child needs an Adoption visa (subclass 102). For the 802 the adoption must have been completed before the child turned 18 under the Hague Convention with a compliance certificate, before you became Australian, with approval of an Australian state or territory authority, or as an expatriate adoption after you had lived overseas more than 12 months.",
      },
      {
        question: "How much does a Child visa cost in 2026?",
        answer:
          "The 1 July 2026 charge is A$4,040 for the child, plus A$2,020 or A$1,015 for each dependent child of the child included. A child with a passport from one of the listed Pacific Island countries or Timor-Leste pays A$3,315. An 802 application supported by a state or territory welfare authority has no charge. Health examinations, police certificates and certified translations are extra.",
      },
    ],
    legislation: [
      { label: "Migration Regulations 1994, Sch 2 Part 101 (Child) and Part 802 (Child)", url: REGS },
      { label: "Migration Regulations 1994, Sch 1 items 1108 (Child (Migrant) (Class AH)) and 1108A (Child (Residence) (Class BT))", url: REGS },
      { label: "Migration Regulations 1994, reg 1.03 (dependent child, step-child); reg 1.04 (adoption); reg 1.05A (dependent)", url: REGS },
      { label: "Migration Regulations 1994, reg 1.20 (sponsorship undertakings) and reg 1.20KB (registrable offences)", url: REGS },
      { label: "Migration Regulations 1994, reg 2.12 (section 48 prescribed classes); Sch 4 PICs 4001, 4004, 4007, 4009, 4017, 4018, 4019, 4020 and 4021; Sch 8 conditions 8502 and 8515", url: REGS },
      { label: "Migration Act 1958, ss 5CA, 41, 48 and 65", url: ACT },
    ],
    sources: [
      { label: "Home Affairs: Child visa (subclass 101)", url: `${HA}/visas/getting-a-visa/visa-listing/child-101` },
      { label: "Home Affairs: Child visa (subclass 802)", url: `${HA}/visas/getting-a-visa/visa-listing/child-802` },
      { label: "Home Affairs: Measures for the protection of children", url: `${HA}/visas/getting-a-visa/visa-listing/child-101/measures-for-the-protection-of-children` },
      { label: "Home Affairs: Family visa processing priorities (Ministerial Direction 117)", url: `${HA}/visas/getting-a-visa/visa-processing-times/visa-processing-priorities/family-visa` },
      { label: "Home Affairs: Current visa pricing (1 July 2026)", url: `${HA}/visas/getting-a-visa/fees-and-charges/current-visa-pricing` },
      { label: "Home Affairs: See your visa conditions (subclass 101)", url: `${HA}/visas/already-have-a-visa/check-visa-details-and-conditions/see-your-visa-conditions?product=101` },
      { label: "Home Affairs: Global visa processing times", url: PROCESSING_TIMES },
      { label: "Home Affairs: Health requirement", url: `${HA}/help-support/meeting-our-requirements/health` },
      { label: "Home Affairs: Character requirements for visas", url: `${HA}/help-support/meeting-our-requirements/character` },
    ],
    related: [
      { label: "Adoption visa (subclass 102)", href: "/visas/family/adoption-visa-102" },
      { label: "Orphan Relative visa (subclasses 117 and 837)", href: "/visas/family/orphan-relative-visa-117-837" },
      { label: "Dependent Child visa (subclass 445)", href: "/visas/family/dependent-child-visa-445" },
      { label: "Condition 8503 no further stay waiver", href: "/visas/appeals-and-review/condition-8503-no-further-stay-waiver" },
      { label: "Family and partner visa services", href: "/services/family-partner-visas" },
      { label: "Book a consultation", href: "/bookings" },
    ],
    keywords: [
      "101 visa",
      "subclass 101",
      "802 visa",
      "subclass 802",
      "child visa australia",
      "child visa requirements",
      "child visa cost 2026",
      "sponsor my child to australia",
      "dependent child visa permanent",
      "step child visa australia",
    ],
  },

  // ───────────────────────────────────────────────────────────────────────
  // 5. Adoption visa subclass 102
  // ───────────────────────────────────────────────────────────────────────
  {
    slug: "adoption-visa-102",
    category: "family",
    kind: "visa",
    subclass: "102",
    name: "Adoption visa",
    title: "Adoption visa (subclass 102)",
    seoTitle: "Adoption visa (subclass 102): Hague and expatriate adoption",
    seoDescription:
      "Subclass 102 Adoption visa for a child under 18 adopted overseas by an Australian parent: Hague, state authority and expatriate adoption paths, A$4,040.",
    intro:
      "The Adoption visa (subclass 102) is a permanent visa for a child under 18 who has been adopted, or is being adopted, outside Australia by an Australian citizen, Australian permanent resident or eligible New Zealand citizen. It covers intercountry adoptions arranged through an Australian state or territory central authority, adoptions under the Hague Convention or a bilateral arrangement, and expatriate adoptions by parents who have lived overseas for more than 12 months. The child must be outside Australia when the visa is lodged and granted.",
    factsAsAt: "12 October 2026",
    permanent: true,
    tags: ["Permanent", "Family sponsor required", "Apply outside Australia"],
    keyFacts: [
      { label: "Government fee", value: "A$4,040", note: "Primary applicant, 1 July 2026 charge; A$3,315 with a Pacific Island or Timor-Leste passport" },
      { label: "Length of stay", value: "Permanent", note: "Five-year travel facility from grant" },
      { label: "Work rights", value: "Full rights to live, work and study, and Medicare", note: "Permanent residence for citizenship purposes starts on entry" },
      { label: "Pathway to permanent residence", value: "This is a permanent visa", note: "A child adopted under the Hague Convention may instead be eligible for citizenship by adoption" },
      { label: "Where you must be", value: "The child must be outside Australia when the application is lodged and when it is granted", note: "Not in immigration clearance" },
      { label: "Sponsor", value: "The adoptive or prospective adoptive parent, aged 18 or over", note: "Police checks for the sponsor and their partner; registrable offences bar sponsorship" },
    ],
    whoFor: [
      "You have been approved by an Australian state or territory central authority as a suitable adoptive parent and a child overseas has been allocated to you.",
      "You adopted a child under the Hague Convention in a Convention country while you were already an Australian citizen, permanent resident or eligible New Zealand citizen.",
      "You have lived outside Australia for more than 12 months and adopted a child there under that country's law, with full and permanent parental rights (an expatriate adoption).",
      "You and your partner, at least one of you Australian, have undertaken in writing to adopt a child in Australia and need the child to travel here for the adoption to be finalised.",
    ],
    eligibility: [
      {
        title: "Under 18 at adoption, at lodgement and at decision",
        detail:
          "The child must have been under 18 when adopted (or allocated for adoption), when the application is lodged and when the Department decides it. The child must be outside Australia at both lodgement and grant.",
        legal: "Migration Regulations 1994, Sch 1 item 1108(3)(aa); Sch 2 cl 102.211 and 102.411",
      },
      {
        title: "Intercountry adoption through an Australian state or territory central authority",
        detail:
          "A child resident overseas qualifies if a person who is not in a married or de facto relationship, or a couple at least one of whom is Australian, has undertaken in writing to adopt the child and an Australian competent authority has approved them as suitable adoptive parents, or if the overseas competent authority has allocated the child for prospective adoption under the Hague Convention or an arrangement recognised under the Family Law (Bilateral Arrangements, Intercountry Adoption) Regulations 2023 and an Australian authority has approved the parents. Before grant, the overseas authority must approve the child's departure for adoption in Australia or in the custody of the prospective parents, and an adoption compliance certificate must be in force for an adoption completed overseas.",
        legal: "Migration Regulations 1994, Sch 2 cl 102.211(3) and (4), 102.227A and 102.228",
      },
      {
        title: "Adoption completed under the Hague Convention",
        detail:
          "A child adopted in a Hague Convention country, in accordance with the Convention, by an Australian citizen, permanent visa holder or eligible New Zealand citizen (alone or with their partner) qualifies, and an adoption compliance certificate must be in force. Home Affairs notes that a child whose Hague or bilateral adoption was finalised outside Australia may be eligible for Australian citizenship by adoption and could then enter on an Australian passport without a visa.",
        legal: "Migration Regulations 1994, Sch 2 cl 102.211(5) and 102.228(1); Australian Citizenship Act 2007, s 19C",
      },
      {
        title: "Expatriate adoption without an Australian authority",
        detail:
          "A child adopted overseas by a parent who was already an Australian citizen, permanent visa holder or eligible New Zealand citizen qualifies only if the adoptive parent had been residing overseas for more than 12 months at the time of the application, the Department is satisfied the overseas residence was not contrived to get around Australia's intercountry adoption rules, and the adoption lawfully gave the parent full and permanent parental rights with no remaining legal ties to the birth parents. The Australian Government plays no role in expatriate adoptions and does not issue letters of support or no objection; Home Affairs recommends independent legal advice in Australia and in the child's country before proceeding.",
        legal: "Migration Regulations 1994, Sch 2 cl 102.211(2); reg 1.04 (adoption)",
      },
      {
        title: "Adoption laws of the child's country complied with, and no excluded country",
        detail:
          "The laws relating to adoption of the country in which the child normally lives must have been complied with, at lodgement and at decision. An application is invalid if it relies on an adoption in a country, and during a period, specified by legislative instrument; Home Affairs currently states it cannot accept Adoption visa applications for children adopted in Pakistan.",
        legal: "Migration Regulations 1994, Sch 1 item 1108(3)(c); Sch 2 cl 102.213 and 102.221",
      },
      {
        title: "Sponsored by the adoptive or prospective adoptive parent",
        detail:
          "The sponsor must be 18 or over, an Australian citizen, permanent visa holder or eligible New Zealand citizen, and the child's adoptive parent or prospective adoptive parent. The sponsorship (Form 40CH) must be approved and in force at decision, and the sponsor undertakes to support the child financially and with accommodation for the first two years after the child's entry. If the sponsor or the sponsor's spouse or de facto partner has a pending charge for a registrable child sex offence the sponsorship must be refused, and a conviction leads to refusal unless quashed or in very limited circumstances; the Department may request AFP (code 33) and overseas police checks from both.",
        legal: "Migration Regulations 1994, Sch 2 cl 102.212 and 102.222; regs 1.20(2)(a) and 1.20KB",
      },
      {
        title: "Health, character, settlement and documents",
        detail:
          "The child must satisfy public interest criteria 4001 to 4004, 4007 (health; Home Affairs says a health waiver can be considered carefully for adoption applicants), 4009 (intention to live permanently in Australia), 4010 (likely to settle without undue difficulty or cost), 4020 (no bogus documents or false information) and 4021 (valid passport). A child aged 16 or over must meet the character requirement. If requested, an assurance of support must be accepted before grant, and the Department may refuse the visa if the grant would not be in the child's best interests.",
        legal: "Migration Regulations 1994, Sch 2 cl 102.223 and 102.225; Sch 4 PICs 4001, 4004, 4007, 4009, 4010, 4020 and 4021",
      },
    ],
    familyNote:
      "Each adopted child needs a separate application; siblings cannot be combined. The child's own dependent children (rare for an applicant under 18) can be included at lodgement or added before decision and must meet the health requirement. Nobody can be added after the decision.",
    documents: [
      {
        group: "Identity and travel",
        items: [
          "Pages of the child's current passport showing their photo, personal details and issue and expiry dates, and any national identity card",
          "Change of name documents and documents showing other names the child has been known by",
          "Four certified photographs (45 mm by 35 mm, less than six months old, plain light background) of the child and any dependent child included",
          "Certified copy of the passport or travel document the child will use to enter Australia",
        ],
      },
      {
        group: "Adoption",
        items: [
          "Adoption papers or an adoption compliance certificate, and a letter of support from the Australian state or territory central authority where one was involved",
          "For a prospective adoption: evidence from the central authority of the child's country that the child can leave for adoption in Australia or in your custody, and the written undertaking to adopt with the Australian authority's approval of you as suitable adoptive parents",
          "For an expatriate adoption: evidence that at least one adoptive parent lived outside Australia for more than 12 months immediately before lodgement, that the overseas residence was not arranged to avoid Australia's intercountry adoption laws, that you hold full and permanent parental rights with no remaining legal ties to the birth parents, and that the adoption complied with the law of the child's country",
        ],
      },
      {
        group: "Health and character",
        items: [
          "Health examinations when the Department asks (results valid 12 months)",
          "For a child aged 16 or over: police certificates from every country where they spent 12 months or more in the last 10 years since turning 16 (AFP certificate under code 33 for Australia), military records if applicable, and Form 80",
        ],
      },
      {
        group: "Sponsor",
        items: [
          "Form 40CH Sponsorship for a child to migrate to Australia, lodged with the child's Form 47CH",
          "Sponsor's passport pages and change of name documents, and evidence of citizenship, permanent residence or eligible New Zealand citizen status",
          "Income and tax records or other evidence of capacity to support the child, and a statement about any child support or earlier assurances of support",
          "AFP National Police Certificate (code 33) and overseas police certificates for the sponsor and the sponsor's spouse or de facto partner if requested",
        ],
      },
    ],
    steps: [
      {
        title: "Confirm the adoption pathway",
        description:
          "Identify whether the adoption is through an Australian state or territory central authority, under the Hague Convention or a bilateral arrangement, or an expatriate adoption. Contact Intercountry Adoption Australia for the adoption process itself; Home Affairs only decides the visa. Check whether a Hague adoption finalised overseas makes the child eligible for citizenship by adoption instead.",
        output: "A confirmed pathway under cl 102.211 and the documents it requires",
      },
      {
        title: "Gather adoption, identity and sponsor documents",
        description:
          "Collect the adoption papers or compliance certificate, central authority letters, departure approvals, the child's identity documents and photographs, and the sponsor's identity, status, financial and police check documents, with certified copies and NAATI translations where required.",
        output: "A complete certified paper application set",
      },
      {
        title: "Pay the charge and lodge on paper",
        description:
          "Pay A$4,040 (or A$3,315 with an eligible Pacific or Timor-Leste passport) before posting, then send Form 47CH and Form 40CH with the payment receipt and all documents to the Child and Other Family Processing Centre, Locked Bag 7, Northbridge WA 6865, or by courier to Wellington Central, 836 Wellington Street, West Perth WA 6005. The child must be outside Australia at lodgement.",
        output: "A valid paper application acknowledged by the Department",
      },
      {
        title: "Import into ImmiAccount and respond to requests",
        description:
          "After the acknowledgement, import the application into ImmiAccount to upload documents and check status, or use the Child and Orphan Relative Visa Processing Centre online form. Arrange health examinations and biometrics when asked and report any change in circumstances.",
        output: "Health and character clearances on file and the application ready for decision",
      },
      {
        title: "Grant and travel",
        description:
          "The child must be outside Australia at grant and must enter before the first entry date in the grant letter, generally 12 months from grant. Do not arrange travel until the grant is notified in writing.",
        output: "A permanent visa with a five-year travel facility; permanent residence for citizenship starts on entry",
      },
    ],
    conditions: [
      { code: "8502", meaning: "The child must not enter Australia before the person named in the visa; may be imposed" },
      { code: "8515", meaning: "The child must not marry or enter a de facto relationship before entering Australia; may be imposed" },
    ],
    costs: [
      { item: "Base application charge", amount: "A$4,040", note: "Primary applicant, 1 July 2026 charge; pay before posting; not refunded if refused" },
      { item: "Additional applicant aged 18 or over", amount: "A$2,020" },
      { item: "Additional applicant under 18", amount: "A$1,015" },
      { item: "Primary applicant with a Pacific Island or Timor-Leste passport", amount: "A$3,315", note: "From 1 July 2026; additional applicants A$1,655 and A$830" },
      { item: "Sponsorship (Form 40CH)", amount: "No charge", note: "Two-year support undertaking applies" },
      { item: "Health examinations", amount: "Typical third-party cost" },
      { item: "Police certificates for the sponsor and partner", amount: "Typical third-party cost" },
      { item: "Certified copies and translations", amount: "Typical third-party cost" },
      { item: "Adoption agency, court and legal costs", amount: "Typical third-party cost", note: "Set by the state or territory central authority and the overseas jurisdiction; not a visa charge" },
      { item: "Administrative Review Tribunal fee if refused", amount: "A$3,727", note: "Migration decisions, 1 July 2026" },
    ],
    afterGrant: [
      "Enter Australia before the first entry date in the grant letter; the visa is permanent from grant and permanent residence for citizenship purposes starts on the day the child enters.",
      "The child can live, work and study indefinitely, enrol in Medicare and later apply for citizenship; the sponsor must provide accommodation and financial support for the first two years and cannot withdraw after grant.",
      "The five-year travel facility means a Resident Return visa (or an Australian passport after citizenship) is needed to re-enter after five years.",
      "Tell the Department about changes to the child's or your contact details, passport or relationship status and the birth of a child; dependants cannot be added after the decision.",
    ],
    pathways: [
      { title: "Australian citizenship by conferral", description: "The child may apply once the residence requirement is met; permanent residence counts from first entry on the 102.", href: "/visas/other-visas/australian-citizenship-by-conferral" },
      { title: "Child visa (subclasses 101 and 802)", description: "For a child adopted before the parent became an Australian citizen, permanent resident or eligible New Zealand citizen, or an adopted child already in Australia.", href: "/visas/family/child-visa-101-802" },
      { title: "Resident Return visa", description: "Required to re-enter Australia as a permanent resident after the five-year travel facility ends.", href: "/visas/other-visas/resident-return-visa-155-157" },
    ],
    risks: [
      "An expatriate adoption where the parent lived overseas for less than 12 months before lodgement, or where the Department finds the overseas residence was arranged to avoid Australia's intercountry adoption laws.",
      "An overseas adoption that does not sever legal ties with the birth parents, or that did not comply with the adoption law of the child's country, does not meet cl 102.211 or 102.213.",
      "Relying on an adoption in a country and period specified by legislative instrument (currently including Pakistan) makes the application invalid.",
      "The child turns 18 before the decision, or the child is in Australia at lodgement or grant.",
      "The sponsor or the sponsor's partner has a registrable child sex offence charge or conviction, or does not provide requested police checks.",
      "Missing adoption compliance certificates, central authority approvals or departure permissions for Hague and state-authority adoptions.",
    ],
    faqs: [
      {
        question: "Does my adopted child need a visa if the adoption was done under the Hague Convention?",
        answer:
          "Not always. Home Affairs says a child whose intercountry adoption was finalised outside Australia under the Hague Convention or a recognised bilateral arrangement may be eligible for Australian citizenship by adoption, in which case the child enters on an Australian passport without a visa. If the adoption is still in progress, or the citizenship route is not available, the subclass 102 is the visa to use.",
      },
      {
        question: "What is an expatriate adoption?",
        answer:
          "An adoption arranged overseas without an Australian state or territory central authority, by an Australian citizen, permanent resident or eligible New Zealand citizen who had been living outside Australia for more than 12 months when the visa application was lodged. The Department must be satisfied the overseas residence was not contrived to avoid Australia's intercountry adoption laws and that the adoption gave full and permanent parental rights under the law of the child's country.",
      },
      {
        question: "Can the Department help arrange the adoption or give a letter of support?",
        answer:
          "No. The Australian Government, including Home Affairs, has no role in overseas adoption processes and does not issue letters of support or certificates of no objection. Its role is limited to assessing the visa. Overseas authorities asking for a support document can be referred to Intercountry Adoption Australia.",
      },
      {
        question: "Can the child be in Australia when we apply?",
        answer:
          "No. The child must be outside Australia when the application is lodged and when it is granted, and must enter before the first entry date in the grant letter, generally within 12 months of grant. An adopted child already in Australia may be able to apply for the subclass 802 Child visa instead if the adoption meets that visa's rules.",
      },
      {
        question: "How much does the Adoption visa cost in 2026?",
        answer:
          "The 1 July 2026 charge is A$4,040 for the child, or A$3,315 if the child holds a passport from one of the listed Pacific Island countries or Timor-Leste. There is no sponsorship charge, but health examinations, police checks, certified translations and the adoption process itself are extra costs.",
      },
      {
        question: "Who can sponsor the child?",
        answer:
          "The adoptive parent, or the prospective adoptive parent for an adoption that will be finalised in Australia, provided they are 18 or over and an Australian citizen, permanent visa holder or eligible New Zealand citizen. The sponsor undertakes two years of accommodation and financial support and, together with their spouse or de facto partner, is subject to the child protection police check rules.",
      },
    ],
    legislation: [
      { label: "Migration Regulations 1994, Sch 2 Part 102 (Adoption)", url: REGS },
      { label: "Migration Regulations 1994, Sch 1 item 1108 (Child (Migrant) (Class AH)), including subitem (3)(c) on excluded countries", url: REGS },
      { label: "Migration Regulations 1994, reg 1.04 (adoption) and reg 1.20 (sponsorship undertakings)", url: REGS },
      { label: "Migration Regulations 1994, reg 1.20KB (registrable offences); Sch 4 PICs 4001, 4004, 4007, 4009, 4010, 4020 and 4021; Sch 8 conditions 8502 and 8515", url: REGS },
      { label: "Australian Citizenship Act 2007, s 19C (citizenship by adoption under the Hague Convention or a bilateral arrangement)", url: "https://www.legislation.gov.au/C2007A00020/latest/text" },
      { label: "Migration Act 1958, ss 5CA and 65", url: ACT },
    ],
    sources: [
      { label: "Home Affairs: Adoption visa (subclass 102)", url: `${HA}/visas/getting-a-visa/visa-listing/adoption-102` },
      { label: "Home Affairs: Measures for the protection of children", url: `${HA}/visas/getting-a-visa/visa-listing/child-101/measures-for-the-protection-of-children` },
      { label: "Home Affairs: Child visa (subclass 101), adopted children", url: `${HA}/visas/getting-a-visa/visa-listing/child-101` },
      { label: "Home Affairs: Current visa pricing (1 July 2026)", url: `${HA}/visas/getting-a-visa/fees-and-charges/current-visa-pricing` },
      { label: "Home Affairs: See your visa conditions (subclass 102)", url: `${HA}/visas/already-have-a-visa/check-visa-details-and-conditions/see-your-visa-conditions?product=102` },
      { label: "Home Affairs: Global visa processing times", url: PROCESSING_TIMES },
      { label: "Home Affairs: Health requirement", url: `${HA}/help-support/meeting-our-requirements/health` },
      { label: "Home Affairs: Character requirements for visas", url: `${HA}/help-support/meeting-our-requirements/character` },
    ],
    related: [
      { label: "Child visa (subclasses 101 and 802)", href: "/visas/family/child-visa-101-802" },
      { label: "Orphan Relative visa (subclasses 117 and 837)", href: "/visas/family/orphan-relative-visa-117-837" },
      { label: "Australian citizenship by conferral", href: "/visas/other-visas/australian-citizenship-by-conferral" },
      { label: "Family and partner visa services", href: "/services/family-partner-visas" },
      { label: "Book a consultation", href: "/bookings" },
    ],
    keywords: [
      "102 visa",
      "subclass 102",
      "adoption visa australia",
      "intercountry adoption visa",
      "expatriate adoption visa",
      "hague adoption visa australia",
      "adoption visa requirements",
      "adoption visa cost 2026",
    ],
  },

  // ───────────────────────────────────────────────────────────────────────
  // 6. Orphan Relative visa subclasses 117 and 837
  // ───────────────────────────────────────────────────────────────────────
  {
    slug: "orphan-relative-visa-117-837",
    category: "family",
    kind: "visa",
    subclass: "117/837",
    name: "Orphan Relative visa",
    title: "Orphan Relative visa (subclasses 117 and 837)",
    seoTitle: "Orphan Relative visa (117/837): eligibility, sponsor, cost",
    seoDescription:
      "Orphan Relative visa (subclass 117/837): permanent visa for a child under 18 with no parent able to care for them, sponsored by a relative. A$2,475 (2026).",
    intro:
      "The Orphan Relative visa (subclasses 117 and 837) is a permanent visa for a single child under 18 who cannot be cared for by either parent because both are dead, permanently incapacitated or cannot be found. A settled Australian relative such as a sibling, grandparent, aunt or uncle (or that relative's partner) sponsors the child and supports them for two years. The subclass 117 is for a child outside Australia and the subclass 837 for a child already here.",
    factsAsAt: "12 October 2026",
    permanent: true,
    tags: ["Permanent", "Family sponsor required", "Apply in or outside Australia"],
    keyFacts: [
      { label: "Government fee", value: "A$2,475", note: "Primary applicant, 1 July 2026 charge, same for the 117 and the 837; A$2,030 with a Pacific Island or Timor-Leste passport" },
      { label: "Length of stay", value: "Permanent", note: "Five-year travel facility from grant" },
      { label: "Work rights", value: "Full rights to live, work and study, and Medicare", note: "The child is protected by Australian workplace law" },
      { label: "Pathway to permanent residence", value: "This is a permanent visa", note: "Citizenship after the residence requirement; permanent residence counts from entry (117) or grant (837)" },
      { label: "Where you must be", value: "117: outside Australia at lodgement and grant; 837: in Australia at lodgement and decision", note: "Not in immigration clearance" },
      { label: "Sponsor", value: "A settled Australian relative aged 18 or over, or that relative's cohabiting partner", note: "Health criterion 4005 applies, with no health waiver" },
    ],
    whoFor: [
      "You are an Australian citizen, permanent resident or eligible New Zealand citizen settled in Australia and your niece, nephew, grandchild or younger sibling overseas has lost both parents.",
      "The child's parents are alive but permanently unable to care for the child because of illness or disability, confirmed by medical evidence.",
      "The child's parents have disappeared and cannot be found despite documented efforts to locate them.",
      "An orphaned relative under 18 is already in Australia with you on a temporary visa and needs to stay permanently.",
    ],
    eligibility: [
      {
        title: "An orphan relative: under 18, single and without a parent who can care for them",
        detail:
          "The child must be under 18 when they apply, must not have a spouse or de facto partner, and must be a relative of an Australian citizen, Australian permanent resident or eligible New Zealand citizen. The child must be unable to be cared for by either parent because each parent is dead, permanently incapacitated or of unknown whereabouts; a child whose parents are capable of caring for them but choose not to is not an orphan relative. There must be no compelling reason to believe the grant would not be in the child's best interests. A child who has been adopted by the Australian relative still qualifies. Turning 18 after lodgement does not defeat the application.",
        legal: "Migration Regulations 1994, reg 1.14 (orphan relative); Sch 2 cl 117.211, 117.221, 837.213 and 837.221",
      },
      {
        title: "Sponsored by a settled Australian relative or their partner",
        detail:
          "The sponsor must be 18 or over and a settled Australian citizen, settled Australian permanent resident or settled eligible New Zealand citizen (settled means lawfully resident in Australia for a reasonable period). Home Affairs lists the eligible relatives as the child's sibling or step-sibling, grandparent or step-grandparent, and aunt, uncle, step-aunt or step-uncle. The relative's spouse or de facto partner can sponsor instead if they are settled, 18 or over and living with the relative. The sponsorship (Form 40CH) must be approved and in force at decision.",
        legal: "Migration Regulations 1994, reg 1.03 (settled, relative); Sch 2 cl 117.212, 117.222, 837.214 and 837.226",
      },
      {
        title: "Child protection: registrable offences and police checks",
        detail:
          "If the child will be under 18 when the sponsorship is decided, the sponsor and the sponsor's spouse or de facto partner must provide an AFP National Police Certificate (code 33) if they have lived in Australia since turning 16 and overseas certificates for every country where they lived 12 months or more in the last 10 years since turning 16. A pending charge for a registrable child sex offence means the sponsorship must be refused, and a conviction means refusal unless quashed, with narrow exceptions where the sentence ended more than five years ago and compelling circumstances exist.",
        legal: "Migration Regulations 1994, reg 1.20KB",
      },
      {
        title: "Consent to migrate and best interests",
        detail:
          "The visa can only be granted to a child under 18 if the law of the child's home country permits their removal, everyone who can lawfully decide where the child lives consents (Form 1229 or a statutory declaration), or the grant is consistent with an Australian child order, and the Department is satisfied there is no compelling reason to believe the grant would not be in the child's best interests. Where parents are deceased or missing, evidence of who holds legal responsibility for the child is central.",
        legal: "Migration Regulations 1994, Sch 2 cl 117.227 and 837.225; Sch 4 PICs 4017 and 4018",
      },
      {
        title: "Health (no waiver), character, settlement and documents",
        detail:
          "The child must satisfy public interest criteria 4001 to 4004, 4005 (the health criterion without a waiver), 4009 (intention to live permanently in Australia), 4010 (likely to settle without undue difficulty or cost), 4020 (no bogus documents or false information) and 4021 (valid passport). A child aged 16 or over must meet the character requirement and provide police certificates and Form 80. Family members not migrating may also have to meet the health requirement, and an assurance of support must be accepted if the Department requests one.",
        legal: "Migration Regulations 1994, Sch 2 cl 117.223, 117.224, 837.222 and 837.223; Sch 4 PICs 4001, 4004, 4005, 4009, 4010, 4020 and 4021",
      },
      {
        title: "Where the child must be, and the onshore visa rules for the 837",
        detail:
          "For the 117 the child must be outside Australia when the application is lodged and when the visa is granted. For the 837 the child must be in Australia, but not in immigration clearance, at lodgement and at decision, and must hold a substantive visa other than a Transit (subclass 771) visa, or, if they no longer hold one, their last visa must not have been a Transit visa and they must apply within 12 months of that visa ceasing (Schedule 3 criterion 3002). The 837 cannot be lodged while the child's visa carries a no further stay condition unless it is waived. A child barred under section 48 can still apply for a Child (Residence) (Class BT) visa if they have not been refused on character grounds and became an orphan relative since their last application; a bridging visa is granted with an onshore application.",
        legal: "Migration Regulations 1994, Sch 1 items 1108(3)(aa) and 1108A(3)(b); Sch 2 cl 117.411, 837.211, 837.212 and 837.411; Sch 3 criterion 3002; reg 2.12",
      },
      {
        title: "Sponsor's two-year support undertaking",
        detail:
          "The sponsor undertakes to assist the child, and any dependent child granted the visa with them, with accommodation and financial support to the extent necessary for the first two years after grant (837) or after the child's entry (117), including any time in the Adult Migrant English Program, and to help the child settle in Australia. The sponsorship cannot be withdrawn after grant, and the Department may ask for income and tax records or a formal assurance of support.",
        legal: "Migration Regulations 1994, reg 1.20(2)(a); Sch 2 cl 117.224 and 837.222",
      },
    ],
    familyNote:
      "Each orphan relative applies separately; siblings cannot be combined on one application but can each be sponsored by the same relative. The child's own dependent children can be included at lodgement or added before decision. A spouse or partner cannot be included because the child must be single. Nobody can be added after the decision.",
    documents: [
      {
        group: "Identity and travel",
        items: [
          "Pages of the child's current passport showing their photo, personal details and issue and expiry dates, and any national identity card",
          "Change of name documents and documents showing other names the child has been known by",
          "Four certified photographs (45 mm by 35 mm, less than six months old, plain light background) of the child and any dependant included",
          "Certified copy of the passport the child will use to enter Australia (117) or used to enter Australia and any passports since (837)",
        ],
      },
      {
        group: "Evidence that no parent can care for the child",
        items: [
          "Death certificates or other official documents for deceased parents",
          "Medical reports or similar evidence showing why a living parent is permanently incapable of caring for the child",
          "For missing parents: evidence of how long they have been missing and the efforts made to contact or find them",
          "Birth certificate, marriage certificate, adoption certificate or officially issued family book showing the child's relationship to the Australian relative",
          "Form 1229 or a statutory declaration from every person with a legal right to decide where the child lives, with their signed photo identification, or an Australian court order or evidence that home-country law permits the child to leave",
        ],
      },
      {
        group: "Health and character",
        items: [
          "Health examinations when the Department asks (results valid 12 months); the health criterion for this visa has no waiver",
          "For a child aged 16 or over: police certificates from every country where they spent 12 months or more in the last 10 years since turning 16 (AFP certificate under code 33 for Australia, sent as an original for the 837), military records if applicable, and Form 80",
        ],
      },
      {
        group: "Sponsor",
        items: [
          "Form 40CH Sponsorship for a child to migrate to Australia, lodged with the child's Form 47CH",
          "Sponsor's passport pages (or government photo identification if they have never held a passport) and change of name documents",
          "Evidence the sponsor is a settled Australian citizen, permanent resident or eligible New Zealand citizen: birth certificate, Australian passport or foreign passport showing permanent residence, citizenship certificate, or for a New Zealand citizen evidence of length of residence and ties to Australia",
          "Documents proving the sponsor is the child's relative (birth, marriage, death or adoption certificates, family book) and, for a partner sponsor, evidence of the relationship with the relative",
          "AFP National Police Certificate (code 33) and overseas police certificates for the sponsor and the sponsor's spouse or de facto partner, income and tax records, and a statement about any child support or earlier assurances of support",
        ],
      },
    ],
    steps: [
      {
        title: "Confirm the child is an orphan relative and identify the sponsor",
        description:
          "Check that the child is under 18, single and related to a settled Australian relative in one of the listed categories, and that neither parent can care for the child because of death, permanent incapacity or unknown whereabouts. Decide whether the relative or the relative's partner will sponsor and check the child protection rules.",
        output: "Eligibility confirmed under reg 1.14 and an eligible sponsor identified",
      },
      {
        title: "Collect evidence about the parents and legal responsibility",
        description:
          "Obtain death certificates, medical reports or evidence of searches for missing parents, together with documents showing who now has legal responsibility for the child and their consent, or court orders.",
        output: "Evidence that satisfies reg 1.14(b) and PIC 4017",
      },
      {
        title: "Gather identity, relationship, health and sponsor documents",
        description:
          "Prepare certified copies of the child's identity and relationship documents, photographs, police certificates for a child aged 16 or over, and the sponsor's identity, status, relationship, financial and police check documents, with NAATI translations in Australia where needed.",
        output: "A complete certified paper application set",
      },
      {
        title: "Pay the charge and lodge on paper",
        description:
          "Pay A$2,475 (or A$2,030 with an eligible Pacific or Timor-Leste passport) before posting, then send Form 47CH and Form 40CH with the payment receipt and all documents to the Child and Other Family Processing Centre, Locked Bag 7, Northbridge WA 6865, or by courier to Wellington Central, 836 Wellington Street, West Perth WA 6005. The 117 child must be outside Australia and the 837 child in Australia at lodgement; applications cannot be lodged in person.",
        output: "A valid paper application and, for the 837, a bridging visa associated with it",
      },
      {
        title: "Import into ImmiAccount and complete checks",
        description:
          "After the acknowledgement letter, import the application into ImmiAccount or use the Child and Orphan Relative Visa Processing Centre online form to provide further documents. Arrange health examinations and biometrics when asked, and tell the Department if the child needs to travel (an 837 child must be in Australia at decision).",
        output: "Health and character clearances on file and the application ready for decision",
      },
      {
        title: "Decision and entry",
        description:
          "A 117 child must be outside Australia at grant and enter before the first entry date in the grant letter, generally 12 months from grant; an 837 child must be in Australia. The visa is permanent from grant with a five-year travel facility.",
        output: "Permanent residence; for citizenship purposes it starts on entry (117) or grant (837)",
      },
    ],
    conditions: [
      { code: "8502", meaning: "For the 117 only: the child must not enter Australia before the person named in the visa; may be imposed" },
      { code: "8515", meaning: "For the 117 only: the child must not marry or enter a de facto relationship before entering Australia; may be imposed" },
    ],
    costs: [
      { item: "Base application charge (117 or 837)", amount: "A$2,475", note: "Primary applicant, 1 July 2026 charge; pay before posting; not refunded if refused" },
      { item: "Additional applicant aged 18 or over", amount: "A$1,235" },
      { item: "Additional applicant under 18", amount: "A$625" },
      { item: "Primary applicant with a Pacific Island or Timor-Leste passport", amount: "A$2,030", note: "From 1 July 2026; additional applicants A$1,015 and A$510" },
      { item: "Sponsorship (Form 40CH)", amount: "No charge", note: "Two-year support undertaking applies" },
      { item: "Health examinations", amount: "Typical third-party cost" },
      { item: "Police certificates for the child (if 16 or over), the sponsor and the sponsor's partner", amount: "Typical third-party cost" },
      { item: "Certified copies and translations", amount: "Typical third-party cost" },
      { item: "Administrative Review Tribunal fee if refused", amount: "A$3,727", note: "Migration decisions, 1 July 2026" },
    ],
    afterGrant: [
      "A 117 child must enter Australia before the first entry date in the grant letter; the visa is permanent from grant with a five-year travel facility, after which a Resident Return visa is needed to re-enter.",
      "The child can live, work and study in Australia indefinitely, enrol in Medicare and, after meeting the residence requirement, apply for citizenship.",
      "The sponsor cannot cancel the visa, withdraw the sponsorship or otherwise affect the child's residence after grant; Home Affairs lists support services (Kids Helpline, 1800RESPECT, the Salvation Army Additional Referral Pathway and the Australian Federal Police) if the child experiences abuse or exploitation.",
      "Tell the Department about changes to the child's passport, a change of name or the birth of a child; dependants cannot be added after the decision.",
    ],
    pathways: [
      { title: "Australian citizenship by conferral", description: "The child may apply once the residence requirement is met; permanent residence counts from entry (117) or grant (837).", href: "/visas/other-visas/australian-citizenship-by-conferral" },
      { title: "Child visa (subclasses 101 and 802)", description: "For a child who still has a parent in Australia able to sponsor them.", href: "/visas/family/child-visa-101-802" },
      { title: "Remaining Relative visa (subclasses 115 and 835)", description: "For an adult relative whose only near relatives live in Australia.", href: "/visas/family/remaining-relative-visa-115-835" },
      { title: "Resident Return visa", description: "Required to re-enter Australia as a permanent resident after the five-year travel facility ends.", href: "/visas/other-visas/resident-return-visa-155-157" },
    ],
    risks: [
      "A living parent who could care for the child but chooses not to, or whose incapacity is temporary or undocumented, means the child is not an orphan relative.",
      "Claims that parents are missing without evidence of the time elapsed and the search efforts made.",
      "The sponsor is not settled in Australia, is not one of the eligible relatives, or is a relative's partner who does not live with the relative.",
      "The child has a significant health condition: PIC 4005 applies to this visa and there is no health waiver.",
      "The sponsor or the sponsor's partner has a registrable child sex offence charge or conviction, or does not provide the requested police checks.",
      "Lodging the 837 when the child has not held a substantive visa within the last 12 months, holds a Transit visa, or has a no further stay condition, or lodging the 117 while the child is in Australia.",
    ],
    faqs: [
      {
        question: "Who counts as an orphan relative?",
        answer:
          "A child under 18 who has no spouse or de facto partner, is related to an Australian citizen, permanent resident or eligible New Zealand citizen, and cannot be cared for by either parent because each parent is dead, permanently incapacitated or of unknown whereabouts. The child does not have to have lost both parents to death, but parents who are able to care for the child yet unwilling do not qualify the child.",
      },
      {
        question: "Which relatives can sponsor?",
        answer:
          "Home Affairs lists the child's sibling or step-sibling, grandparent or step-grandparent, and aunt, uncle, step-aunt or step-uncle, or the current spouse or de facto partner of that relative who lives with them. The sponsor must be 18 or over and a settled Australian citizen, permanent resident or eligible New Zealand citizen.",
      },
      {
        question: "Is there a health waiver for this visa?",
        answer:
          "No. The Orphan Relative visa uses public interest criterion 4005, which has no waiver, unlike the Child visa (PIC 4007). A child with a condition likely to result in significant health care or community service costs may be refused on health grounds.",
      },
      {
        question: "Can the child apply from inside Australia?",
        answer:
          "Yes, through the subclass 837, if the child holds a substantive visa (other than a Transit visa) or applies within 12 months of their last substantive visa ceasing, and their visa does not carry a no further stay condition. The child must be in Australia at lodgement and at decision. A bridging visa is granted with the application. A child overseas applies for the subclass 117 and must remain outside Australia until grant.",
      },
      {
        question: "What does the sponsor have to do after the visa is granted?",
        answer:
          "The sponsor must help the child with accommodation and financial support to the extent necessary for the first two years the child is in Australia on the visa, and help them settle. The sponsorship cannot be withdrawn after grant, and the sponsor cannot cancel or affect the child's visa.",
      },
      {
        question: "How much does the Orphan Relative visa cost in 2026?",
        answer:
          "The 1 July 2026 charge is A$2,475 for the child, or A$2,030 with a passport from one of the listed Pacific Island countries or Timor-Leste, plus A$1,235 or A$625 for any dependent child of the child. There is no sponsorship charge; health examinations, police certificates and certified translations are extra.",
      },
    ],
    legislation: [
      { label: "Migration Regulations 1994, Sch 2 Part 117 (Orphan Relative) and Part 837 (Orphan Relative)", url: REGS },
      { label: "Migration Regulations 1994, reg 1.14 (orphan relative); reg 1.03 (settled, relative, eligible New Zealand citizen)", url: REGS },
      { label: "Migration Regulations 1994, Sch 1 items 1108 (Child (Migrant) (Class AH)) and 1108A (Child (Residence) (Class BT))", url: REGS },
      { label: "Migration Regulations 1994, reg 1.20 (sponsorship undertakings) and reg 1.20KB (registrable offences); reg 2.12", url: REGS },
      { label: "Migration Regulations 1994, Sch 3 criterion 3002; Sch 4 PICs 4001, 4004, 4005, 4009, 4010, 4017, 4018, 4020 and 4021; Sch 8 conditions 8502 and 8515", url: REGS },
      { label: "Migration Act 1958, ss 41, 48 and 65", url: ACT },
    ],
    sources: [
      { label: "Home Affairs: Orphan Relative visa (subclass 117)", url: `${HA}/visas/getting-a-visa/visa-listing/orphan-relative-117` },
      { label: "Home Affairs: Orphan Relative visa (subclass 837)", url: `${HA}/visas/getting-a-visa/visa-listing/orphan-relative-837` },
      { label: "Home Affairs: Measures for the protection of children", url: `${HA}/visas/getting-a-visa/visa-listing/orphan-relative-117/measures-for-the-protection-of-children` },
      { label: "Home Affairs: Family visa processing priorities (Ministerial Direction 117)", url: `${HA}/visas/getting-a-visa/visa-processing-times/visa-processing-priorities/family-visa` },
      { label: "Home Affairs: Current visa pricing (1 July 2026)", url: `${HA}/visas/getting-a-visa/fees-and-charges/current-visa-pricing` },
      { label: "Home Affairs: See your visa conditions (subclass 117)", url: `${HA}/visas/already-have-a-visa/check-visa-details-and-conditions/see-your-visa-conditions?product=117` },
      { label: "Home Affairs: Global visa processing times", url: PROCESSING_TIMES },
      { label: "Home Affairs: Health requirement", url: `${HA}/help-support/meeting-our-requirements/health` },
      { label: "Home Affairs: Character requirements for visas", url: `${HA}/help-support/meeting-our-requirements/character` },
    ],
    related: [
      { label: "Child visa (subclasses 101 and 802)", href: "/visas/family/child-visa-101-802" },
      { label: "Adoption visa (subclass 102)", href: "/visas/family/adoption-visa-102" },
      { label: "Remaining Relative visa (subclasses 115 and 835)", href: "/visas/family/remaining-relative-visa-115-835" },
      { label: "Health requirement and health waiver", href: "/visas/appeals-and-review/health-requirement-and-health-waiver" },
      { label: "Family and partner visa services", href: "/services/family-partner-visas" },
      { label: "Book a consultation", href: "/bookings" },
    ],
    keywords: [
      "117 visa",
      "subclass 117",
      "837 visa",
      "subclass 837",
      "orphan relative visa",
      "orphan relative visa requirements",
      "orphan relative visa cost 2026",
      "sponsor orphaned niece nephew australia",
      "orphan visa australia",
    ],
  },
  // ───────────────────────────────────────────────────────────────────────
  // 7. Dependent Child visa subclass 445
  // ───────────────────────────────────────────────────────────────────────
  {
    slug: "dependent-child-visa-445",
    category: "family",
    kind: "visa",
    subclass: "445",
    name: "Dependent Child visa",
    title: "Dependent Child visa (subclass 445)",
    seoTitle: "Dependent Child visa (subclass 445): eligibility and cost",
    seoDescription:
      "Subclass 445 Dependent Child visa: temporary visa for a child of a 309 or 820 partner visa holder, later added to the parent's permanent partner visa. A$4,040.",
    intro:
      "The Dependent Child visa (subclass 445) is a temporary visa for a dependent child of a parent who holds a provisional or temporary Partner visa (subclass 309 or 820) or another 445. It lets the child come to or stay in Australia while the parent's permanent Partner visa (subclass 100 or 801) is decided, and the child must then be added to that permanent application. The sponsor is the same person who sponsored the parent.",
    factsAsAt: "12 October 2026",
    permanent: false,
    tags: ["Temporary", "Pathway to PR", "Family sponsor required", "Apply in or outside Australia"],
    keyFacts: [
      { label: "Government fee", value: "A$4,040", note: "Primary applicant, 1 July 2026 charge; A$3,315 with a Pacific Island or Timor-Leste passport; no charge to be added to the parent's 100 or 801 afterwards" },
      { label: "Length of stay", value: "Until the parent's permanent Partner visa is decided or withdrawn", note: "Tied to the period of the parent's 309, 820 or 445 visa" },
      { label: "Work rights", value: "Full work and study rights", note: "Medicare once the child's Form 1002 to join the permanent application is lodged" },
      { label: "Pathway to permanent residence", value: "Added to the parent's subclass 100 or 801 application with Form 1002", note: "The child is then granted the permanent visa with the parent" },
      { label: "Where you must be", value: "In or outside Australia when you apply and when it is granted", note: "In Australia to be added to an 801; in or outside Australia to be added to a 100" },
      { label: "Sponsor", value: "The person who sponsored the parent's Partner visa", note: "Child protection police checks if the child is under 18" },
    ],
    whoFor: [
      "You hold a subclass 820 or 309 Partner visa and your child was not included in your application before it was granted.",
      "You were granted a Partner visa and your child has only now been able to join you, for example after custody arrangements changed overseas.",
      "Your child is in Australia on a temporary visa and you want them covered by your pending permanent Partner visa.",
      "You hold a 445 yourself and have a dependent child of your own who needs to be included.",
    ],
    eligibility: [
      {
        title: "A dependent child of a parent who holds a 309, 820 or 445 visa",
        detail:
          "The child must be a dependent child of a parent who holds a Partner (Provisional) subclass 309, a Partner (Temporary) subclass 820 or a Dependent Child subclass 445 visa (the visa-holding parent), and the parent must still hold that visa when the 445 is decided. A dependent child is a child or step-child who is not engaged, married or in a de facto relationship and who is under 18, or 18 or over and wholly or substantially reliant on the parent for food, clothing and shelter for a substantial period, or incapacitated for work through loss of bodily or mental function. Home Affairs asks for evidence of financial dependence for a child aged 18 or over, and a medical report for an incapacitated child.",
        legal: "Migration Regulations 1994, reg 1.03 (dependent child); reg 1.05A (dependent); Sch 2 cl 445.111, 445.211(a), 445.221 and 445.222",
      },
      {
        title: "Sponsored by the parent's sponsor",
        detail:
          "The child must be sponsored by the person who sponsored or nominated the visa-holding parent for the Partner visa, and that sponsorship must continue to decision. If the sponsor has died, or the relationship between the parent and the sponsor has ended and the parent has asked to be considered under the family violence or child-of-the-relationship provisions of the subclass 100 or 801, the visa-holding parent sponsors the child instead. The sponsorship must be approved and in force at decision.",
        legal: "Migration Regulations 1994, Sch 2 cl 445.211(b), 445.223 and 445.224",
      },
      {
        title: "Child protection: registrable offences and police checks",
        detail:
          "If the child will be under 18 when the sponsorship is decided, the sponsor and the sponsor's spouse or de facto partner must provide an AFP National Police Certificate (code 33) if they have lived in Australia since turning 16 and overseas certificates for every country where they lived 12 months or more in the last 10 years since turning 16. A pending charge for a registrable child sex offence means the sponsorship must be refused, and a conviction means refusal unless quashed, with narrow exceptions.",
        legal: "Migration Regulations 1994, reg 1.20KB",
      },
      {
        title: "Where the child can be, and no further stay conditions",
        detail:
          "The child can be in or outside Australia when the application is lodged and when the visa is granted, but not in immigration clearance. A child in Australia cannot apply if their current visa carries a no further stay condition (8503) unless it is waived first. A child who applies in Australia is granted a bridging visa that takes effect if their current visa expires before the decision.",
        legal: "Migration Regulations 1994, Sch 1 item 1211(3)(aa); Sch 2 cl 445.411; Migration Act 1958, s 41(2A)",
      },
      {
        title: "Consent to travel and best interests",
        detail:
          "The visa can only be granted to a child under 18 if the law of the child's home country permits their removal, everyone who can lawfully decide where the child lives consents to the grant (Form 1229 or a statutory declaration with the person's signed photo identification), or the grant is consistent with an Australian child order, and there is no compelling reason to believe the grant would not be in the child's best interests.",
        legal: "Migration Regulations 1994, Sch 2 cl 445.226; Sch 4 PICs 4017 and 4018",
      },
      {
        title: "Health, character, values and passport",
        detail:
          "The child must satisfy public interest criteria 4001 to 4004, 4007 (health, waiver available), 4009 (intention to live permanently in Australia), 4020 (no bogus documents or false information) and 4021 (valid passport), and 4019 (values statement) if 18 or over at lodgement. A child aged 16 or over must meet the character requirement and provide police certificates and Form 80. Family members not migrating may also have to meet the health requirement.",
        legal: "Migration Regulations 1994, Sch 2 cl 445.225 and 445.227; Sch 4 PICs 4001, 4004, 4007, 4009, 4019, 4020 and 4021",
      },
      {
        title: "After grant: be added to the parent's permanent Partner visa application",
        detail:
          "Once the 445 is granted, the child must apply to be added to the parent's subclass 100 or 801 application by lodging Form 1002 before that application is decided; no further charge is payable. To be added to an 801 the child must be in Australia; to be added to a 100 the child can be in or outside Australia and must be a member of the parent's family unit. The child is then granted the permanent visa if the parent is, provided the child meets health and (if 16 or over) character requirements.",
        legal: "Migration Regulations 1994, Sch 1 items 1124B(2)(a)(i) and 1129(2)(a)(i); Sch 2 cl 801.321 and 100.321",
      },
    ],
    familyNote:
      "Each sibling lodges a separate 445 application. The child's own dependent children can be included at lodgement or added before decision and must meet the health requirement. Nobody can be added after the decision; a child born after lodgement must be notified to the Department.",
    documents: [
      {
        group: "Identity",
        items: [
          "Pages of the child's current passport showing their photo, personal details and issue and expiry dates, and any national identity card",
          "Change of name documents and documents showing other names the child has been known by",
          "Four certified passport-size photographs (45 mm by 35 mm, less than six months old, plain light background) of the child and any dependent child included",
        ],
      },
      {
        group: "Relationship and dependency",
        items: [
          "Birth certificate, marriage certificate, adoption certificate or officially issued family book showing the child's relationship to the visa-holding parent",
          "Evidence of the parent's 309, 820 or 445 visa and of the parent's pending permanent Partner visa application",
          "For a child aged 18 or over: evidence of financial dependence on the visa-holding parent (bank statements, money transfers, rent receipts) and how long it has lasted, or a medical practitioner's report of total or partial loss of bodily or mental function that prevents work",
          "Form 1229 consent (or a statutory declaration) from every person with a legal right to decide where the child lives, with their signed photo identification, or an Australian court order or evidence that home-country law permits the child to leave",
        ],
      },
      {
        group: "Health and character",
        items: [
          "Health examinations when the Department asks (results valid 12 months)",
          "For a child aged 16 or over: police certificates from every country where they spent 12 months or more in the last 10 years since turning 16 (AFP certificate under code 33 for Australia), military records if applicable, and Form 80",
        ],
      },
      {
        group: "Sponsor",
        items: [
          "Form 918 Application for a subclass 445 (temporary) visa by a dependent child, which the applicant and sponsor complete together",
          "Sponsor's passport pages, birth certificate showing both parents' names, change of name documents, and evidence of citizenship, permanent residence or eligible New Zealand citizen status",
          "AFP National Police Certificate (code 33) and overseas police certificates for the sponsor and the sponsor's spouse or de facto partner if the child is under 18",
        ],
      },
    ],
    steps: [
      {
        title: "Confirm the child's dependency and the sponsor",
        description:
          "Check that the parent still holds the 309, 820 or 445 and that the permanent Partner visa has not yet been decided, that the child is single and under 18 or financially dependent or incapacitated, and that the parent's sponsor will sponsor the child (or the parent, where the death, family violence or child provisions apply).",
        output: "Eligibility confirmed and the sponsor identified",
      },
      {
        title: "Gather consent, dependency and identity documents",
        description:
          "Obtain Form 1229 or statutory declarations from any person with a legal right to decide where the child lives, evidence of dependence for a child aged 18 or over, the child's identity documents and photographs, and the sponsor's identity, status and police check documents, with certified copies and translations.",
        output: "A complete certified paper application set",
      },
      {
        title: "Pay the charge and lodge Form 918 on paper",
        description:
          "Pay A$4,040 (or A$3,315 with an eligible Pacific or Timor-Leste passport) before posting, then send Form 918 with the payment receipt and all documents to the Child and Other Family Processing Centre, Locked Bag 7, Northbridge WA 6865, or by courier to Wellington Central, 836 Wellington Street, West Perth WA 6005. The child can be in or outside Australia; applications cannot be lodged online or in person.",
        output: "A valid 445 application and, for a child in Australia, an associated bridging visa",
      },
      {
        title: "Import into ImmiAccount and complete health and character checks",
        description:
          "After the acknowledgement letter, import the application into ImmiAccount (or use the Child and Orphan Relative Visa Processing Centre online form), arrange health examinations and biometrics when asked, and tell the Department about any change in the child's or sponsor's circumstances.",
        output: "Health and character clearances on file and the application ready for decision",
      },
      {
        title: "Grant of the 445",
        description:
          "The child can be in or outside Australia at grant. A child outside Australia must enter before the first entry date in the grant letter, generally 12 months from grant. The child can then live, work and study in Australia and travel in and out while the visa is valid.",
        output: "Subclass 445 visa in effect until the parent's permanent Partner visa is decided",
      },
      {
        title: "Lodge Form 1002 to join the parent's permanent application",
        description:
          "Before the parent's subclass 100 or 801 is decided, upload Form 1002 to the parent's Partner visa application in ImmiAccount and notify the Department through the Partner Processing Enquiry Form (or upload the form through that enquiry form). The child must be in Australia to be added to an 801. There is no charge. Once lodged, the child can enrol in Medicare.",
        output: "The child is an applicant for the parent's permanent Partner visa and stays lawful until it is decided",
      },
    ],
    conditions: [],
    costs: [
      { item: "Base application charge", amount: "A$4,040", note: "Primary applicant, 1 July 2026 charge; pay before posting; not refunded if refused" },
      { item: "Additional applicant aged 18 or over (a dependent child of the child)", amount: "A$2,020" },
      { item: "Additional applicant under 18", amount: "A$1,015" },
      { item: "Primary applicant with a Pacific Island or Timor-Leste passport", amount: "A$3,315", note: "From 1 July 2026; additional applicants A$1,655 and A$830" },
      { item: "Adding the 445 holder to the parent's subclass 100 or 801 application (Form 1002)", amount: "No charge" },
      { item: "Sponsorship", amount: "No charge", note: "The sponsor undertakes to support the child for two years" },
      { item: "Health examinations", amount: "Typical third-party cost" },
      { item: "Police certificates", amount: "Typical third-party cost", note: "Child aged 16 or over, sponsor and sponsor's partner" },
      { item: "Certified copies and translations", amount: "Typical third-party cost" },
      { item: "Administrative Review Tribunal fee if refused", amount: "A$3,727", note: "Migration decisions, 1 July 2026" },
    ],
    afterGrant: [
      "Lodge Form 1002 to be added to the parent's permanent Partner visa application before that application is decided; this keeps the child lawful and gives access to Medicare.",
      "A child outside Australia at grant must enter before the first entry date in the grant letter; time spent outside Australia does not extend the visa and it cannot be extended on its own.",
      "The child can work and study and is protected by Australian workplace law, and can travel in and out of Australia while the visa is valid.",
      "The sponsor must help the child with accommodation and financial support to the extent necessary for the first two years after grant (if the child is in Australia) or after first entry, and cannot withdraw after grant.",
      "Tell the Department about changes to the child's passport, name or relationship status and the birth of a child.",
    ],
    pathways: [
      { title: "Partner visa (onshore) subclasses 820 and 801", description: "The parent's permanent 801 application to which the child is added with Form 1002; the child must be in Australia.", href: "/visas/family/partner-visa-onshore-820-801" },
      { title: "Partner visa (offshore) subclasses 309 and 100", description: "The parent's permanent 100 application to which the child is added; the child can be in or outside Australia.", href: "/visas/family/partner-visa-offshore-309-100" },
      { title: "Child visa (subclasses 101 and 802)", description: "Once the parent is a permanent resident, a child who missed the 445 route can be sponsored for a permanent Child visa.", href: "/visas/family/child-visa-101-802" },
      { title: "Australian citizenship by conferral", description: "After the permanent Partner visa is granted and the residence requirement is met.", href: "/visas/other-visas/australian-citizenship-by-conferral" },
    ],
    risks: [
      "Lodging after the parent's permanent Partner visa has already been decided: the parent no longer holds a 309, 820 or 445 and the child cannot meet cl 445.211.",
      "A child aged 18 or over who cannot show substantial and ongoing financial dependence on the visa-holding parent, or who has a partner.",
      "Missing consent from a parent or guardian overseas who has a legal right to decide where the child lives.",
      "The sponsor or the sponsor's partner has a registrable child sex offence charge or conviction, or does not provide the requested police checks.",
      "Failing to lodge Form 1002 before the parent's 100 or 801 is decided, which leaves the child without a pathway to the permanent visa.",
      "Lodging while the child's current visa in Australia carries condition 8503 without a waiver, or posting the application without paying first.",
    ],
    faqs: [
      {
        question: "Who can apply for a Dependent Child visa?",
        answer:
          "A dependent child of a parent who holds a subclass 309 or 820 Partner visa (or another 445) and whose permanent Partner visa has not yet been decided. The child must be single and either under 18, or 18 or over and financially dependent on that parent, or incapacitated for work. The child's sponsor is the person who sponsored the parent.",
      },
      {
        question: "Why not just add my child to my partner visa application?",
        answer:
          "You can add a dependent child directly to your partner visa application only before the temporary 820 or 309 is decided. Once the temporary visa is granted, a child cannot be added to it; the 445 is the route that brings the child in, after which Form 1002 adds the child to your permanent 100 or 801 application without a further charge.",
      },
      {
        question: "Can my child be in Australia when we apply?",
        answer:
          "Yes. The child can be in or outside Australia at lodgement and at grant, but a child in Australia cannot apply if their current visa carries a no further stay condition unless it is waived. A child who applies in Australia is granted a bridging visa that starts if their current visa expires before the decision.",
      },
      {
        question: "Does my child get Medicare?",
        answer:
          "Not on the 445 alone. Home Affairs says the child can enrol in Medicare once the application to add them to the parent's permanent Partner visa (Form 1002) has been lodged.",
      },
      {
        question: "What happens if my relationship with the sponsor ends?",
        answer:
          "If the sponsor has died, or the relationship has ended and you have asked to be considered under the family violence or child-of-the-relationship provisions of the 100 or 801, you can sponsor the child for the 445 yourself. Otherwise the child's 445 depends on the sponsor continuing to sponsor the child and on your own permanent visa application.",
      },
      {
        question: "How much does the 445 cost in 2026?",
        answer:
          "The 1 July 2026 charge is A$4,040 for the child (A$3,315 with a passport from one of the listed Pacific Island countries or Timor-Leste), plus A$2,020 or A$1,015 for any dependent child of the child. Adding the child to the parent's permanent Partner visa application afterwards is free.",
      },
    ],
    legislation: [
      { label: "Migration Regulations 1994, Sch 2 Part 445 (Dependent Child)", url: REGS },
      { label: "Migration Regulations 1994, Sch 1 item 1211 (Extended Eligibility (Temporary) (Class TK))", url: REGS },
      { label: "Migration Regulations 1994, Sch 1 items 1124B(2)(a)(i) and 1129(2)(a)(i) (nil charge for 445 holders); Sch 2 cl 801.321 and 100.321", url: REGS },
      { label: "Migration Regulations 1994, reg 1.03 (dependent child); reg 1.05A (dependent); reg 1.20(2)(e) (sponsorship undertaking); reg 1.20KB (registrable offences)", url: REGS },
      { label: "Migration Regulations 1994, Sch 4 PICs 4001, 4004, 4007, 4009, 4017, 4018, 4019, 4020 and 4021", url: REGS },
      { label: "Migration Act 1958, ss 41 and 65", url: ACT },
    ],
    sources: [
      { label: "Home Affairs: Dependent Child visa (subclass 445)", url: `${HA}/visas/getting-a-visa/visa-listing/dependent-child-445` },
      { label: "Home Affairs: Measures for the protection of children", url: `${HA}/visas/getting-a-visa/visa-listing/dependent-child-445/measures-for-the-protection-of-children` },
      { label: "Home Affairs: Partner visa (permanent) (subclass 801), adding a 445 holder", url: `${HA}/visas/getting-a-visa/visa-listing/partner-onshore/permanent-801` },
      { label: "Home Affairs: Partner (Migrant) visa (subclass 100), adding a 445 holder", url: `${HA}/visas/getting-a-visa/visa-listing/partner-offshore/migrant-100` },
      { label: "Home Affairs: Current visa pricing (1 July 2026)", url: `${HA}/visas/getting-a-visa/fees-and-charges/current-visa-pricing` },
      { label: "Home Affairs: See your visa conditions (subclass 445)", url: `${HA}/visas/already-have-a-visa/check-visa-details-and-conditions/see-your-visa-conditions?product=445` },
      { label: "Home Affairs: Global visa processing times", url: PROCESSING_TIMES },
      { label: "Home Affairs: Health requirement", url: `${HA}/help-support/meeting-our-requirements/health` },
      { label: "Home Affairs: Character requirements for visas", url: `${HA}/help-support/meeting-our-requirements/character` },
    ],
    related: [
      { label: "Partner visa (onshore) subclasses 820 and 801", href: "/visas/family/partner-visa-onshore-820-801" },
      { label: "Partner visa (offshore) subclasses 309 and 100", href: "/visas/family/partner-visa-offshore-309-100" },
      { label: "Child visa (subclasses 101 and 802)", href: "/visas/family/child-visa-101-802" },
      { label: "Condition 8503 no further stay waiver", href: "/visas/appeals-and-review/condition-8503-no-further-stay-waiver" },
      { label: "Family and partner visa services", href: "/services/family-partner-visas" },
      { label: "Book a consultation", href: "/bookings" },
    ],
    keywords: [
      "445 visa",
      "subclass 445",
      "dependent child visa",
      "dependent child visa 445 requirements",
      "add child to partner visa",
      "form 1002 partner visa",
      "445 visa cost 2026",
      "child of 820 visa holder",
    ],
  },

  // ───────────────────────────────────────────────────────────────────────
  // 8. New Zealand Citizen Family Relationship visa subclass 461
  // ───────────────────────────────────────────────────────────────────────
  {
    slug: "new-zealand-citizen-family-relationship-visa-461",
    category: "family",
    kind: "visa",
    subclass: "461",
    name: "New Zealand Citizen Family Relationship visa",
    title: "New Zealand Citizen Family Relationship visa (subclass 461)",
    seoTitle: "Subclass 461 NZ Citizen Family Relationship visa: guide",
    seoDescription:
      "Subclass 461 visa for the partner or dependent child of a New Zealand citizen on a 444 visa: five-year stay, full work rights, A$1,330 charge, renewal rules.",
    intro:
      "The New Zealand Citizen Family Relationship visa (subclass 461) is a five-year temporary visa for a person who is not a New Zealand citizen but is a member of the family unit of a New Zealand citizen living in Australia on a Special Category (subclass 444) visa. It gives full work and study rights and multiple entry, can be renewed, and is the usual option when the New Zealand citizen is not an eligible New Zealand citizen able to sponsor a partner visa. It does not itself lead to permanent residence.",
    factsAsAt: "12 October 2026",
    permanent: false,
    tags: ["Temporary", "No pathway to PR", "Apply in or outside Australia"],
    keyFacts: [
      { label: "Government fee", value: "A$1,330", note: "Primary applicant, 1 July 2026 charge; A$675 per additional applicant aged 18 or over and A$325 under 18" },
      { label: "Length of stay", value: "Five years from grant", note: "Multiple entry; time outside Australia does not extend it; a further 461 can be applied for" },
      { label: "Work rights", value: "Full work and study rights", note: "No Medicare under the visa itself; health insurance recommended and condition 8501 may apply" },
      { label: "Pathway to permanent residence", value: "None on its own", note: "Options include skilled visas, or a partner visa once the New Zealand citizen becomes an Australian citizen or permanent resident" },
      { label: "Where you must be", value: "In or outside Australia when you apply and when it is granted", note: "Not in immigration clearance; onshore applicants need a substantive temporary visa or must meet Schedule 3" },
      { label: "Sponsor", value: "No sponsor", note: "The New Zealand citizen must hold, or be eligible for, a subclass 444 visa" },
    ],
    whoFor: [
      "You are the spouse or de facto partner of a New Zealand citizen who lives in Australia on a Special Category visa and is not an eligible New Zealand citizen.",
      "You are the dependent child or step-child of a New Zealand citizen (or of their partner) who is moving to or living in Australia on a subclass 444 visa.",
      "You hold a 461 and your relationship with the New Zealand citizen has ended, you have not joined another person's family unit and you want to stay in Australia.",
      "You held a 461 when you last left Australia, spent at least two of the last five years here on it (or have substantial ties to Australia), and want to return.",
      "Your current 461 is about to expire and you still meet the criteria for a further one.",
    ],
    eligibility: [
      {
        title: "Not a New Zealand citizen and not an Australian citizen",
        detail:
          "You cannot be granted this visa if you are a New Zealand citizen or an Australian citizen. If you become a New Zealand citizen while the application is processed, you can continue or withdraw it and seek a Special Category (subclass 444) visa instead. Home Affairs notes that some children born in Australia to a New Zealand citizen parent are not eligible for New Zealand citizenship by descent.",
        legal: "Migration Regulations 1994, Sch 2 cl 461.211 and 461.221",
      },
      {
        title: "A member of the family unit of a New Zealand citizen on a 444 visa",
        detail:
          "You must be a member of the family unit of a New Zealand citizen who is not an eligible New Zealand citizen and who is in Australia as the holder of a subclass 444 visa, or who is outside Australia, will travel with you and will be granted a 444 on entry. A member of the family unit is the spouse or de facto partner, or a child or step-child of the New Zealand citizen or their partner who is not engaged, married or in a de facto relationship and is under 18, or is 18 to 22 and dependent, or is 23 or over and dependent because of incapacity for work. New Zealand citizens are not automatically granted a 444 and must themselves meet health and character requirements at the border.",
        legal: "Migration Regulations 1994, reg 1.12 (member of the family unit); reg 1.05A (dependent); reg 1.03 (eligible New Zealand citizen); Sch 2 cl 461.212(2)",
      },
      {
        title: "Former family members: staying or returning on your own",
        detail:
          "If you are in Australia holding a 461 (or your last substantive visa was a 461) and you are no longer a member of the family unit of the New Zealand citizen in relation to whom it was granted, you can apply for a further 461 as long as you have not become a member of another person's family unit. If you are outside Australia you can apply if you held a 461 when you last left, you are no longer in that family unit and have not joined another, and either you were in Australia on a 461 for at least two of the five years immediately before applying, or you have substantial business, cultural, employment or personal ties of benefit to Australia and have not been away for a continuous period of five years or more unless there are compelling reasons.",
        legal: "Migration Regulations 1994, Sch 2 cl 461.212(3) and (4)",
      },
      {
        title: "Your visa status if you apply in Australia",
        detail:
          "An onshore applicant must hold a substantive temporary visa (other than a subclass 403 visa in the Domestic Worker (Diplomatic or Consular) stream) or, if they hold no substantive visa, their last substantive temporary visa must not have been such a 403 visa and they must satisfy Schedule 3 criteria 3002 (apply within 12 months of the last substantive visa ceasing), 3003, 3004 and 3005. Onshore applicants must also have substantially complied with the conditions of their last substantive visa and any bridging visa, and cannot apply if their visa carries a no further stay condition unless it is waived. Applicants outside Australia do not need to hold another visa, and Home Affairs advises them to stay outside Australia until the application is acknowledged.",
        legal: "Migration Regulations 1994, Sch 1 item 1214BA(3)(aa); Sch 2 cl 461.213 and 461.225; Sch 3 criteria 3002 to 3005; Migration Act 1958, s 41(2A)",
      },
      {
        title: "Health, character, exclusion periods and compliance",
        detail:
          "You must satisfy public interest criteria 4001 to 4004, 4007 (health, waiver available), 4010 (likely to settle without undue difficulty or cost), 4013 and 4014 (no unexpired three-year exclusion period after a cancellation or departure as an unlawful non-citizen, unless compelling or compassionate circumstances apply), 4020 (no bogus documents or false information) and 4021 (valid passport), plus 4019 (values statement) if 18 or over, unless the Department excuses it for compelling reasons. Family members aged 16 or over must meet the character requirement, and you must satisfy the Department that you intend to comply with your visa conditions. Applicants outside Australia who have been here before must meet special return criteria 5001 and 5002.",
        legal: "Migration Regulations 1994, Sch 2 cl 461.222 to 461.226; Sch 4 PICs 4001, 4004, 4007, 4010, 4013, 4014, 4019, 4020 and 4021; Sch 5 criteria 5001 and 5002",
      },
      {
        title: "Police certificates, including a New Zealand check arranged by the Department",
        detail:
          "You must provide an AFP complete disclosure National Police Certificate if you spent 12 months or more in Australia in the last 10 years since turning 16, overseas certificates for every other country where you spent 12 months or more in that period, military records if you served in the last 10 years, and Forms 80 and 1221. If you spent 12 months or more in New Zealand, the Department initiates a New Zealand criminal record check once you sign the consent to exchange criminal record check information form. Where the applicant is under 18, the New Zealand citizen 444 holder must also provide police certificates from Australia, New Zealand and any other country they lived in for more than 12 months in the last 10 years.",
        legal: "Migration Regulations 1994, reg 2.03AA; Sch 4 PIC 4001",
      },
      {
        title: "Dependent children aged 18 or over",
        detail:
          "A child or step-child aged 18 or over can be included only if they are under 23 at lodgement and at grant and have been financially dependent on the applicant for at least 12 months (shown with Form 47a, proof of living together, tax records or proof of study), or are 23 or over and unable to earn a living because of physical or cognitive limitations. Children must have no spouse, de facto partner or fiance.",
        legal: "Migration Regulations 1994, reg 1.12(2)(b); reg 1.05A",
      },
    ],
    familyNote:
      "Members of your family unit (your partner, and dependent children or step-children) can be included only when you lodge; the Department assesses each applicant individually and family members cannot be added after lodgement. Each family member pays an additional applicant charge of A$675 (18 or over) or A$325 (under 18). If a child is born after you apply, tell the Department.",
    documents: [
      {
        group: "Identity",
        items: [
          "Pages of your current passport showing your photo, personal details and issue and expiry dates, and any national identity card; if your passport has expired, details of it and evidence you have applied for a new one",
          "Change of name documents, and death, divorce or separation documents or statutory declarations for anyone in the application who has been widowed, divorced or permanently separated",
          "Two passport-size photographs (45 mm by 35 mm, plain background, full face, name on the back) for each applicant",
        ],
      },
      {
        group: "Relationship to the New Zealand citizen",
        items: [
          "The New Zealand citizen's passport and birth certificate, and evidence they hold or are eligible for a subclass 444 visa (check VEVO)",
          "For a partner: marriage certificate or evidence of a de facto relationship, and evidence the relationship is genuine and ongoing such as statements from friends or relatives, statements from you both about your commitment, photographs of joint activities and travel, joint bank statements or pooled finances, bills in joint names, joint leases or mortgages and proof you live at the same address",
          "For a child or step-child: birth certificate, adoption certificate or family book, Form 1229 consent (or a statutory declaration) from any person with a legal right to decide where the child lives who is not travelling, and Form 1257 undertaking if the child will not stay with a relative or legal guardian",
          "For a dependant aged 18 or over: Form 47a, proof of relationship and evidence of 12 months of financial dependence (living together, tax records, proof of study), or information about physical or cognitive limitations for a dependant aged 23 or over",
        ],
      },
      {
        group: "Health and character",
        items: [
          "Health examinations through My Health Declarations in ImmiAccount before lodging, which Home Affairs strongly encourages (results valid 12 months)",
          "AFP complete disclosure National Police Certificate if you spent 12 months or more in Australia in the last 10 years since turning 16, and police certificates from every other country where you spent 12 months or more in that period",
          "Military service or discharge records if you served in the armed forces of any country in the last 10 years",
          "Form 80 Personal particulars for assessment including character assessment and Form 1221 Additional personal particulars information; the Consent to exchange criminal record check information form if you spent 12 months or more in New Zealand",
        ],
      },
    ],
    steps: [
      {
        title: "Confirm the New Zealand citizen's status and your family unit membership",
        description:
          "Check in VEVO that the New Zealand citizen holds a subclass 444 visa (or will be granted one on entry) and is not an eligible New Zealand citizen who could sponsor you for a partner visa instead. Confirm you qualify as their partner or dependent child, or as a former family unit member under the stay-or-return rules.",
        output: "The right visa identified and the family unit relationship confirmed",
      },
      {
        title: "Complete health examinations and gather documents",
        description:
          "Arrange health examinations through My Health Declarations before lodging, obtain police certificates and complete Forms 80 and 1221, and collect identity, relationship and dependency documents for every applicant and the New Zealand citizen, with certified copies and translations.",
        output: "A complete paper application set with health and character documents",
      },
      {
        title: "Pay the charge and post Form 147",
        description:
          "Pay A$1,330 plus any additional applicant charges and keep the receipt, complete Form 147 Application for a New Zealand Citizen Family Relationship visa, attach the receipt, identity and travel documents for all applicants and the New Zealand citizen, and all supporting documents, and post it with correct postage to the New Zealand Family Relationship visa office, GPO Box 9984, Sydney NSW 2001. The visa cannot be lodged online or in person. If your current visa is about to end you can lodge with the form and identity documents and provide the rest later.",
        output: "A valid application; onshore applicants who held a substantive visa may receive a Bridging visa A",
      },
      {
        title: "Import into ImmiAccount and respond to requests",
        description:
          "After the acknowledgement letter, import the application into ImmiAccount to attach documents and track status, or use the New Zealand Citizen Family Relationship visa processing centre form. Provide biometrics or further health checks if asked, sign the New Zealand criminal record check consent if required, and report changes to your details, relationship or family.",
        output: "The application complete and ready for decision",
      },
      {
        title: "Grant and travel",
        description:
          "You can be in or outside Australia at grant. The visa is in effect from the grant date for five years with multiple entry. Check your conditions in VEVO; conditions 8303 and 8501 may be attached.",
        output: "A five-year subclass 461 visa with full work and study rights",
      },
      {
        title: "Plan the next step before year five",
        description:
          "Apply for a further 461 before the current one ends if you still meet the criteria, or explore permanent options such as a skilled visa or a partner visa if the New Zealand citizen becomes an Australian citizen or permanent resident. You cannot stay after the visa ceases without another visa.",
        output: "A further 461 or a permanent visa application lodged before the visa ceases",
      },
    ],
    conditions: [
      { code: "8303", meaning: "You must not become involved in activities disruptive to, or violence threatening harm to, the Australian community; may be imposed" },
      { code: "8501", meaning: "You must maintain adequate arrangements for health insurance while in Australia; may be imposed" },
    ],
    costs: [
      { item: "Base application charge", amount: "A$1,330", note: "Primary applicant, 1 July 2026 charge; pay before posting; not refunded if refused" },
      { item: "Additional applicant aged 18 or over", amount: "A$675", note: "Each family member included pays their own charge" },
      { item: "Additional applicant under 18", amount: "A$325" },
      { item: "Health examinations", amount: "Typical third-party cost", note: "Arranged through My Health Declarations before lodging" },
      { item: "Police certificates", amount: "Typical third-party cost", note: "AFP and overseas certificates; the New Zealand check is initiated by the Department" },
      { item: "Health insurance", amount: "Typical third-party cost", note: "Recommended by Home Affairs; condition 8501 may require it" },
      { item: "Certified copies and translations", amount: "Typical third-party cost" },
      { item: "Administrative Review Tribunal fee if refused", amount: "A$3,727", note: "Migration decisions, 1 July 2026" },
    ],
    afterGrant: [
      "The visa lasts five years from grant; you can leave and re-enter as often as you like, but time outside Australia does not extend it and you cannot stay after it ceases without another visa.",
      "You can work and study and are protected by Australian workplace law; check your conditions in your grant letter or VEVO and keep health insurance if condition 8501 applies.",
      "Tell the Department about changes to your phone number, email, address or passport, your relationship status, or the birth of a child or step-child.",
      "If your relationship with the New Zealand citizen ends you may still apply for a further 461 as long as you have not become a member of another person's family unit.",
      "Apply for a further 461 before the visa ends if you still qualify, or use the Visa Finder to explore permanent residence options; access your superannuation after you leave Australia permanently.",
    ],
    pathways: [
      { title: "A further subclass 461 visa", description: "Lodge before the current visa ceases if you still meet the family unit or former family member criteria.", href: "/visas/family/new-zealand-citizen-family-relationship-visa-461" },
      { title: "Partner visa (onshore) subclasses 820 and 801", description: "Available if your New Zealand partner becomes an Australian citizen, permanent resident or eligible New Zealand citizen who can sponsor you.", href: "/visas/family/partner-visa-onshore-820-801" },
      { title: "Skilled visas", description: "A points-tested or employer-sponsored visa may offer permanent residence based on your own occupation and skills.", href: "/visas/skilled/skilled-independent-visa-189" },
      { title: "Special Category visa (subclass 444)", description: "If you become a New Zealand citizen you may be granted a 444 on arrival instead.", href: "/visas/other-visas/special-category-visa-444" },
    ],
    risks: [
      "The New Zealand citizen does not hold a subclass 444 visa, or is an eligible New Zealand citizen (a protected Special Category visa holder), so the family unit basis for the 461 is not met.",
      "Lodging in Australia without a substantive temporary visa and outside the 12-month window for Schedule 3 criterion 3002, or while condition 8503 applies.",
      "Weak evidence of a genuine and ongoing de facto relationship, or a dependent child aged 18 or over who cannot show 12 months of financial dependence.",
      "An unexpired exclusion period under PIC 4013 or 4014 after a previous cancellation or departure as an unlawful non-citizen.",
      "Trying to add family members after lodgement: a 461 application cannot be amended to include them.",
      "Entering Australia on another visa while an offshore application is pending without keeping that visa valid, or failing to provide the New Zealand criminal record consent and police certificates.",
    ],
    faqs: [
      {
        question: "Does the subclass 461 lead to permanent residence?",
        answer:
          "No. It is a five-year temporary visa that can be renewed, but it has no direct pathway to permanent residence. Permanent options include a skilled visa in your own right, or a Partner visa if your New Zealand partner becomes an Australian citizen, permanent resident or eligible New Zealand citizen able to sponsor you.",
      },
      {
        question: "Why can't my New Zealand partner sponsor me for a partner visa instead?",
        answer:
          "Only an eligible New Zealand citizen, meaning a protected Special Category visa holder (generally someone who was in Australia on 26 February 2001 or meets the related residence rules), can sponsor a partner visa. Most New Zealand citizens who arrived later are not eligible New Zealand citizens, so their partners and children use the 461. Home Affairs directs partners of ineligible New Zealand citizens to this visa.",
      },
      {
        question: "Can I apply from inside Australia?",
        answer:
          "Yes, if you hold a substantive temporary visa (other than a 403 Domestic Worker visa) or, if you do not, your last substantive temporary visa was not such a visa and you meet Schedule 3 criteria 3002 to 3005, which include applying within 12 months of that visa ceasing. You must have substantially complied with your previous visa conditions and your visa must not carry a no further stay condition. Applications are lodged on paper by post.",
      },
      {
        question: "Can I include my partner and children?",
        answer:
          "Yes, if they are members of your family unit, but only when you lodge; nobody can be added afterwards. Children aged 18 or over must be under 23 at lodgement and grant and financially dependent on you for at least 12 months, or 23 or over and unable to work because of physical or cognitive limitations. Each family member pays A$675 or A$325 and is assessed individually.",
      },
      {
        question: "What if my relationship with the New Zealand citizen ends?",
        answer:
          "You can apply for a further 461 in Australia if you hold a 461 (or it was your last substantive visa), you are no longer a member of the New Zealand citizen's family unit and you have not become a member of anyone else's family unit. If you are overseas, you also need two years in Australia on a 461 in the last five years, or substantial ties to Australia and no continuous absence of five years or more.",
      },
      {
        question: "Do I get Medicare on a 461?",
        answer:
          "The visa itself does not give Medicare access; eligibility depends on Services Australia rules and reciprocal health care agreements. Home Affairs recommends health insurance, and condition 8501 (maintain adequate health insurance) may be attached to the visa.",
      },
      {
        question: "How much does the 461 cost in 2026?",
        answer:
          "The 1 July 2026 charge is A$1,330 for the main applicant, A$675 for each additional applicant aged 18 or over and A$325 for each applicant under 18. Health examinations, police certificates and health insurance are extra, and the charge is not refunded if the visa is refused.",
      },
    ],
    legislation: [
      { label: "Migration Regulations 1994, Sch 2 Part 461 (New Zealand Citizen Family Relationship (Temporary))", url: REGS },
      { label: "Migration Regulations 1994, Sch 1 item 1214BA (New Zealand Citizen Family Relationship (Temporary) (Class UP))", url: REGS },
      { label: "Migration Regulations 1994, reg 1.12 (member of the family unit); reg 1.05A (dependent); reg 1.03 (eligible New Zealand citizen); reg 2.03AA (police certificates and Form 80)", url: REGS },
      { label: "Migration Regulations 1994, Sch 3 criteria 3002 to 3005; Sch 4 PICs 4001, 4004, 4007, 4010, 4013, 4014, 4019, 4020 and 4021; Sch 5 criteria 5001 and 5002; Sch 8 conditions 8303 and 8501", url: REGS },
      { label: "Migration Regulations 1994, Sch 2 Part 444 (Special Category visa)", url: REGS },
      { label: "Migration Act 1958, ss 32 (special category visas), 41 and 65", url: ACT },
      { label: "Social Security Act 1991, s 7 (protected SCV holder)", url: "https://www.legislation.gov.au/C2004A04121/latest/text" },
    ],
    sources: [
      { label: "Home Affairs: New Zealand Citizen Family Relationship visa (subclass 461)", url: `${HA}/visas/getting-a-visa/visa-listing/new-zealand-citizen-family-relationship-temporary-461` },
      { label: "Home Affairs: Special Category visa (subclass 444)", url: `${HA}/visas/getting-a-visa/visa-listing/special-category-visa-subclass-444` },
      { label: "Home Affairs: Partner visa (temporary) (subclass 820), sponsor eligibility note for New Zealand citizens", url: `${HA}/visas/getting-a-visa/visa-listing/partner-onshore/temporary-820` },
      { label: "Home Affairs: Current visa pricing (1 July 2026)", url: `${HA}/visas/getting-a-visa/fees-and-charges/current-visa-pricing` },
      { label: "Home Affairs: See your visa conditions (subclass 461)", url: `${HA}/visas/already-have-a-visa/check-visa-details-and-conditions/see-your-visa-conditions?product=461` },
      { label: "Home Affairs: Global visa processing times", url: PROCESSING_TIMES },
      { label: "Home Affairs: Health requirement", url: `${HA}/help-support/meeting-our-requirements/health` },
      { label: "Home Affairs: Character requirements for visas", url: `${HA}/help-support/meeting-our-requirements/character` },
    ],
    related: [
      { label: "Special Category visa (subclass 444)", href: "/visas/other-visas/special-category-visa-444" },
      { label: "Partner visa (onshore) subclasses 820 and 801", href: "/visas/family/partner-visa-onshore-820-801" },
      { label: "Skilled Independent visa (subclass 189)", href: "/visas/skilled/skilled-independent-visa-189" },
      { label: "Schedule 3 criteria explained", href: "/visas/appeals-and-review/schedule-3-criteria" },
      { label: "Family and partner visa services", href: "/services/family-partner-visas" },
      { label: "Book a consultation", href: "/bookings" },
    ],
    keywords: [
      "461 visa",
      "subclass 461",
      "new zealand citizen family relationship visa",
      "461 visa requirements",
      "461 visa renewal",
      "partner of new zealand citizen visa australia",
      "461 visa cost 2026",
      "nz family relationship visa",
      "461 visa to permanent residency",
    ],
  },
];
