import { ConsultationCTA } from "@/components/sections/ConsultationCTA";
import { VisaAlertBanner, VisaFaqs, VisaRelated } from "@/components/visas/VisaSections";
import type { VisaCategory, VisaPage } from "@/data/visas";
import type { VisaExplainer } from "@/data/visas/explainers/types";
import { GlossaryProvider } from "./Glossary";
import { ExplainerHero } from "./ExplainerHero";
import { ExplainerNav, type NavSection } from "./ExplainerNav";
import { ThreeParties } from "./ThreeParties";
import { ExplainerJourney } from "./ExplainerJourney";
import { Finder } from "./Finder";
import { StreamFinder } from "./StreamFinder";
import { SelfCheck } from "./SelfCheck";
import { PointsWidget } from "./PointsWidget";
import { FamilyBalance } from "./FamilyBalance";
import { EvidenceBuilder } from "./EvidenceBuilder";
import { WorkHours } from "./WorkHours";
import { FundsCalculator } from "./FundsCalculator";
import { Meter } from "./Meter";
import { RuleChecks } from "./RuleChecks";
import { FeeEstimator } from "./FeeEstimator";
import { CostEstimator } from "./CostEstimator";
import { JobGapClock } from "./JobGapClock";
import { Timeline } from "./Timeline";
import { PrRoad } from "./PrRoad";
import { MythFacts } from "./MythFacts";
import { RoleSwitch } from "./RoleSwitch";
import { JargonBuster } from "./JargonBuster";
import { LegalDetailTabs } from "./LegalDetailTabs";

// The interactive version of a visa page. Ordered the way people think:
// what is it, how does it work, which one fits, could it fit me, the tools
// for this visa (points, money, time), what it costs, where it leads; then
// myths, the full legal detail and the FAQ. Every tool is optional.

export function ExplainerPage({ page, category, explainer }: { page: VisaPage; category: VisaCategory; explainer: VisaExplainer }) {
  const shortName = page.subclass ? (page.subclass.includes("/") ? page.name : page.subclass) : page.name;
  const hasRoles = (explainer.roles?.length ?? 0) > 1;
  const sections: NavSection[] = [
    { id: "picture", label: "How it works" },
    { id: "journey", label: "Step by step" },
    ...(explainer.finder ? [{ id: "finder", label: explainer.finder.navLabel }] : []),
    ...(explainer.streamFinder ? [{ id: "stream", label: "Your stream" }] : []),
    { id: "self-check", label: "2-minute check" },
    ...(explainer.points ? [{ id: "points", label: "Points" }] : []),
    ...(explainer.balanceOfFamily ? [{ id: "family-test", label: "Family test" }] : []),
    ...(explainer.evidence ? [{ id: "evidence", label: explainer.evidence.navLabel }] : []),
    ...(explainer.workHours ? [{ id: "work-hours", label: "Work hours" }] : []),
    ...(explainer.funds ? [{ id: "funds", label: "Funds" }] : []),
    ...(explainer.meter ? [{ id: "meter", label: explainer.meter.navLabel }] : []),
    ...(explainer.ruleChecks ? [{ id: "rules", label: explainer.ruleChecks.navLabel }] : []),
    ...(explainer.fees ? [{ id: "fees", label: "Costs" }] : []),
    ...(explainer.costs ? [{ id: "cost-estimator", label: "Costs" }] : []),
    ...(explainer.jobGap ? [{ id: "job-gap", label: "Lost your job?" }] : []),
    ...(explainer.timeline ? [{ id: "timeline", label: explainer.timeline.navLabel }] : []),
    ...(explainer.prRoad ? [{ id: "pr-road", label: "Road to PR" }] : []),
    { id: "myths", label: "Myth or fact" },
    ...(hasRoles ? [{ id: "roles", label: "Who does what" }] : []),
    { id: "jargon", label: "Jargon buster" },
    { id: "detail", label: "Legal detail" },
    { id: "faq", label: "FAQ" },
  ];
  const official = page.sources.find((source) => source.url.includes("homeaffairs.gov.au")) ?? page.sources[0];
  const href = `/visas/${page.category}/${page.slug}`;

  return (
    <GlossaryProvider terms={explainer.glossary}>
      <ExplainerHero page={page} category={category} explainer={explainer} />
      <ExplainerNav sections={sections} officialUrl={official?.url} officialLabel={official?.url.includes("homeaffairs.gov.au") ? "Home Affairs page" : "Official page"} />
      {page.alert && <VisaAlertBanner alert={page.alert} />}
      <ThreeParties actors={explainer.actors} flows={explainer.flows} visaName={shortName} />
      <ExplainerJourney stages={explainer.stages} actors={explainer.actors} visaName={shortName} title={explainer.journeyTitle} highlight={explainer.journeyHighlight} />
      {explainer.finder && <Finder config={explainer.finder} currentHref={href} />}
      {explainer.streamFinder && <StreamFinder config={explainer.streamFinder} />}
      <SelfCheck quiz={explainer.quiz} visaName={shortName} copy={explainer.check} />
      {explainer.points && <PointsWidget config={explainer.points} />}
      {explainer.balanceOfFamily && <FamilyBalance />}
      {explainer.evidence && <EvidenceBuilder config={explainer.evidence} />}
      {explainer.workHours && <WorkHours config={explainer.workHours} />}
      {explainer.funds && <FundsCalculator config={explainer.funds} />}
      {explainer.meter && <Meter config={explainer.meter} />}
      {explainer.ruleChecks && <RuleChecks config={explainer.ruleChecks} />}
      {explainer.fees && <FeeEstimator config={explainer.fees} factsAsAt={explainer.factsAsAt} />}
      {explainer.costs && <CostEstimator config={explainer.costs} factsAsAt={explainer.factsAsAt} />}
      {explainer.jobGap && <JobGapClock config={explainer.jobGap} />}
      {explainer.timeline && <Timeline config={explainer.timeline} />}
      {explainer.prRoad && <PrRoad config={explainer.prRoad} />}
      <MythFacts myths={explainer.myths} />
      {hasRoles && explainer.roles && <RoleSwitch roles={explainer.roles} />}
      <JargonBuster terms={explainer.glossary} />
      <LegalDetailTabs page={page} />
      <div className="bg-brand-surface">
        <VisaFaqs page={page} />
      </div>
      <VisaRelated page={page} />
      <ConsultationCTA
        title={explainer.cta?.title ?? (page.kind === "guide" ? "Want an expert to look at your situation?" : `Ready to talk about your ${shortName}?`)}
        subtitle={explainer.cta?.subtitle ?? "We check your facts against these rules, tell you honestly where you stand, and prepare the application with you."}
      />
    </GlossaryProvider>
  );
}
