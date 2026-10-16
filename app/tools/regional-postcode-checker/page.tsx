import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/sections/PageHero";
import { RegionalChecker } from "@/components/tools/RegionalChecker";

export const metadata: Metadata = {
  title: "Regional Postcode Checker: Is My Area a Designated Regional Area?",
  description:
    "Check whether an Australian postcode is a designated regional area (Category 2 or 3) for subclass 491, 494 and 191 visas, regional study points and the regional Temporary Graduate visa. Based on the Home Affairs postcode table.",
};

export default function RegionalPostcodeCheckerPage() {
  return (
    <>
      <PageHero
        eyebrow="Free tool"
        title="Regional postcode checker"
        subtitle="Find out whether a postcode counts as a designated regional area, which category it is in, and what that means for regional visas and points."
      />
      <section className="bg-brand-surface py-16">
        <Container>
          <RegionalChecker />
        </Container>
      </section>
    </>
  );
}
