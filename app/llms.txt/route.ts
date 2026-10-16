import { services } from "@/data/services";
import { statePrograms } from "@/data/state-nomination";
import { tools } from "@/components/sections/ToolsSection";
import { visaCategories, visaHref, visaLibraryCheckedOn, pagesForCategory } from "@/data/visas";
import { siteConfig } from "@/lib/site-config";

// /llms.txt: a plain-text map of the site for AI assistants and crawlers
// (the llmstxt.org convention). Lists every library page with its
// one-line answer so an assistant can cite the right page.

export const dynamic = "force-static";

export function GET() {
  const base = siteConfig.url;
  const lines: string[] = [];
  lines.push(`# ${siteConfig.fullName}`);
  lines.push("");
  lines.push(`> ${siteConfig.description} Registered Migration Agent MARN ${siteConfig.marn}, Melbourne, Australia. Content is general information checked against the Department of Home Affairs, the Migration Act 1958 and the Migration Regulations 1994 on the date shown on each page; it is not advice for any one person.`);
  lines.push("");
  lines.push(`Visa library last checked: ${visaLibraryCheckedOn}. Government charges are the 1 July 2026 figures. We do not publish processing times or approval rates.`);
  lines.push("");
  lines.push("## Visa library");
  lines.push("");
  lines.push(`- [All visas](${base}/visas): search and browse every Australian visa by category.`);
  for (const category of visaCategories) {
    lines.push("");
    lines.push(`### ${category.name}`);
    lines.push("");
    lines.push(`- [${category.shortName} overview](${base}/visas/${category.slug}): ${category.tagline}.`);
    for (const page of pagesForCategory(category.slug)) {
      lines.push(`- [${page.title}](${base}${visaHref(page)}): ${page.intro}`);
    }
  }
  lines.push("");
  lines.push("## Services");
  lines.push("");
  for (const service of services) {
    lines.push(`- [${service.title}](${base}/services/${service.slug}): ${service.summary}`);
  }
  lines.push("");
  lines.push("## Free tools");
  lines.push("");
  for (const tool of tools) {
    const href = tool.external ? tool.href : `${base}${tool.href}`;
    lines.push(`- [${tool.title}](${href}): ${tool.description}`);
  }
  lines.push("");
  lines.push("## State and territory nomination");
  lines.push("");
  lines.push(`- [State nomination map](${base}/state-nomination): status, allocations and streams for all eight jurisdictions.`);
  for (const program of statePrograms) {
    lines.push(`- [${program.name}](${base}/state-nomination/${program.slug}): ${program.statusNote}`);
  }
  lines.push("");
  lines.push("## Other");
  lines.push("");
  lines.push(`- [Policy updates](${base}/updates): dated migration rule changes.`);
  lines.push(`- [Occupation guides](${base}/occupations): assessing authority, lists and visa options by occupation.`);
  lines.push(`- [About](${base}/about), [Contact](${base}/contact), [Book a consultation](${base}/bookings).`);
  lines.push("");
  return new Response(lines.join("\n"), { headers: { "Content-Type": "text/plain; charset=utf-8", "Cache-Control": "public, max-age=3600" } });
}
