import { ConsultationCTA } from "@/components/sections/ConsultationCTA";
import { GuideAlert, GuideFaqSection } from "@/components/sections/VisaGuideSections";
import { ServiceCard } from "@/components/sections/ServiceCard";
import { AssessmentCta } from "@/components/state-assessment/AssessmentCta";
import { Container } from "@/components/ui/Container";
import { GeneralInfoNotice } from "@/components/ui/GeneralInfoNotice";
import { Reveal } from "@/components/ui/Reveal";
import { VideoCard } from "@/components/video/VideoCard";
import { RelatedVisaGuides } from "@/components/visas/RelatedVisaGuides";
import { GlossaryProvider } from "@/components/visas/explainer/Glossary";
import { ExplainerNav, type NavSection } from "@/components/visas/explainer/ExplainerNav";
import { ThreeParties } from "@/components/visas/explainer/ThreeParties";
import { ExplainerJourney } from "@/components/visas/explainer/ExplainerJourney";
import { Finder } from "@/components/visas/explainer/Finder";
import { StreamFinder } from "@/components/visas/explainer/StreamFinder";
import { SelfCheck } from "@/components/visas/explainer/SelfCheck";
import { PointsWidget } from "@/components/visas/explainer/PointsWidget";
import { FamilyBalance } from "@/components/visas/explainer/FamilyBalance";
import { EvidenceBuilder } from "@/components/visas/explainer/EvidenceBuilder";
import { WorkHours } from "@/components/visas/explainer/WorkHours";
import { FundsCalculator } from "@/components/visas/explainer/FundsCalculator";
import { Meter } from "@/components/visas/explainer/Meter";
import { RuleChecks } from "@/components/visas/explainer/RuleChecks";
import { FeeEstimator } from "@/components/visas/explainer/FeeEstimator";
import { CostEstimator } from "@/components/visas/explainer/CostEstimator";
import { JobGapClock } from "@/components/visas/explainer/JobGapClock";
import { Timeline } from "@/components/visas/explainer/Timeline";
import { PrRoad } from "@/components/visas/explainer/PrRoad";
import { MythFacts } from "@/components/visas/explainer/MythFacts";
import { RoleSwitch } from "@/components/visas/explainer/RoleSwitch";
import { JargonBuster } from "@/components/visas/explainer/JargonBuster";
import { serviceTitleInSentence, type Service } from "@/data/services";
import type { VisaGuide } from "@/data/visa-guides";
import type { ConsultationService } from "@/data/consultations";
import type { ServiceExplainer } from "@/data/service-explainers/types";
import type { Video } from "@/data/videos";
import { visaHref, visaPages, type VisaPage } from "@/data/visas";
import { occupations } from "@/data/occupations";
import { ServiceHero } from "./ServiceHero";
import { VisaCompare } from "./VisaCompare";
import { ServiceHelp } from "./ServiceHelp";
import { ServiceDetail } from "./ServiceDetail";
import { AuthorityFinder } from "./AuthorityFinder";

// The interactive version of a service page, built like the visa library
// explainers. Ordered the way people think: what it is, how it works, which
// visa fits and how they compare, could it fit me, the tools (points, money,
// time), how we help; then myths, jargon, the detail and the FAQ.

export function ServiceExplainerPage({
  service,
  explainer,
  guide,
  consultation,
  videos,
  related,
}: {
  service: Service;
  explainer: ServiceExplainer;
  guide: VisaGuide;
  consultation?: ConsultationService;
  videos: Video[];
  related: Service[];
}) {
  const hasRoles = (explainer.roles?.length ?? 0) > 1;
  const pages = explainer.pages.map((slug) => visaPages.find((page) => page.slug === slug)).filter((page): page is VisaPage => Boolean(page));
  const hrefs = Object.fromEntries(pages.map((page) => [page.slug, visaHref(page)]));
  const occupationPages = explainer.authorityFinder ? Object.fromEntries(occupations.map((occupation) => [occupation.anzsco, occupation.slug])) : {};

  const sections: NavSection[] = [
    { id: "picture", label: "How it works" },
    { id: "journey", label: "Step by step" },
    ...(explainer.finder ? [{ id: "finder", label: explainer.finder.navLabel }] : []),
    { id: "compare", label: "Side by side" },
    { id: "self-check", label: "2-minute check" },
    ...(explainer.streamFinder ? [{ id: "stream", label: "Your stream" }] : []),
    ...(explainer.authorityFinder ? [{ id: "authorities", label: "Your authority" }] : []),
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
    { id: "help", label: "How we help" },
    { id: "myths", label: "Myth or fact" },
    ...(hasRoles ? [{ id: "roles", label: "Who does what" }] : []),
    { id: "jargon", label: "Jargon buster" },
    { id: "detail", label: "Documents" },
    ...(videos.length > 0 ? [{ id: "videos", label: "Videos" }] : []),
    { id: "faq", label: "FAQ" },
  ];
  const officialLabel = guide.sourceUrl.includes("homeaffairs.gov.au") ? "Home Affairs page" : guide.sourceUrl.includes("art.gov.au") ? "ART page" : "Official page";

  return (
    <GlossaryProvider terms={explainer.glossary}>
      <ServiceHero service={service} explainer={explainer} consultation={consultation} />
      <ExplainerNav sections={sections} officialUrl={guide.sourceUrl} officialLabel={officialLabel} />
      {guide.alert && <GuideAlert alert={guide.alert} />}
      <ThreeParties actors={explainer.actors} flows={explainer.flows} visaName={explainer.name} />
      <ExplainerJourney stages={explainer.stages} actors={explainer.actors} visaName={explainer.name} title={explainer.journeyTitle} highlight={explainer.journeyHighlight} />
      {explainer.finder && <Finder config={explainer.finder} currentHref="" />}
      <VisaCompare config={explainer.compare} hrefs={hrefs} hasFinder={Boolean(explainer.finder)} />
      <SelfCheck quiz={explainer.quiz} visaName={explainer.name} copy={explainer.check} />
      {explainer.streamFinder && <StreamFinder config={explainer.streamFinder} />}
      {explainer.authorityFinder && <AuthorityFinder occupationPages={occupationPages} />}
      {explainer.points && <PointsWidget config={explainer.points} />}
      {explainer.stateAssessment && (
        <section id="state-assessment" className="scroll-mt-32 py-10 sm:py-14">
          <Container>
            <Reveal>
              <AssessmentCta />
            </Reveal>
          </Container>
        </section>
      )}
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
      <ServiceHelp service={service} guide={guide} consultation={consultation} />
      <MythFacts myths={explainer.myths} />
      {hasRoles && explainer.roles && <RoleSwitch roles={explainer.roles} />}
      <JargonBuster terms={explainer.glossary} />
      <ServiceDetail guide={guide} pages={pages.map((page) => ({ title: page.title, href: visaHref(page), factsAsAt: page.factsAsAt }))} />

      {videos.length > 0 && (
        <section id="videos" className="scroll-mt-32 bg-brand-surface py-16 sm:py-20">
          <Container>
            <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <h2 className="font-heading text-2xl font-semibold text-brand-navy">Watch: {serviceTitleInSentence(service.title)} explained</h2>
              <GeneralInfoNotice />
            </div>
            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {videos.slice(0, 3).map((video) => (
                <VideoCard key={video.slug} video={video} />
              ))}
            </div>
          </Container>
        </section>
      )}

      <div id="faq" className="scroll-mt-32">
        <GuideFaqSection guide={guide} serviceTitle={service.title} />
      </div>

      <RelatedVisaGuides serviceSlug={service.slug} slugs={explainer.pages} />

      {related.length > 0 && (
        <section className="py-16 sm:py-20">
          <Container>
            <h2 className="font-heading text-2xl font-semibold text-brand-navy">Related services</h2>
            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((item) => (
                <ServiceCard key={item.slug} service={item} />
              ))}
            </div>
          </Container>
        </section>
      )}

      <ConsultationCTA
        title={explainer.cta?.title ?? `Questions about ${serviceTitleInSentence(service.title)}?`}
        subtitle={explainer.cta?.subtitle ?? "We check your facts against these rules, tell you honestly where you stand, and prepare the application with you."}
      />
    </GlossaryProvider>
  );
}
