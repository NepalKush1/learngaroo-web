// Tabs of the points hub at /tools/points. Shared by the hub, the home-page
// picker and the backlink on each standalone calculator page.

export type HubTab = "federal" | "victoria" | "tasmania" | "act" | "states";

export const hubTabs: { id: HubTab; label: string; short: string; picker: string; required: string }[] = [
  { id: "federal", label: "Federal points test", short: "Federal", picker: "Federal points test (189, 190, 491) — everyone", required: "Mandatory for every 189, 190 and 491 applicant. The pass mark is 65." },
  { id: "victoria", label: "Victoria", short: "Victoria", picker: "Victorian Points Test — Victoria nomination", required: "Required for Victorian 190 or 491 nomination. Every ROI is ranked with the Victorian Points Test." },
  { id: "tasmania", label: "Tasmania", short: "Tasmania", picker: "Tasmania ranking — Tasmania nomination", required: "Required for Tasmanian 190 or 491 nomination. Tasmania ranks by priority attributes, not the federal test." },
  { id: "act", label: "ACT (Canberra Matrix)", short: "ACT", picker: "Canberra Matrix — ACT nomination", required: "Required for ACT 190 or 491 nomination. Canberra residents and overseas applicants are scored separately." },
  { id: "states", label: "Other states", short: "Other states", picker: "NSW, QLD, SA, WA, NT — criteria check", required: "NSW, Queensland, South Australia, Western Australia and the NT don't publish a score. Check their criteria instead." },
];

export function hubHref(tab: HubTab) {
  return tab === "federal" ? "/tools/points" : `/tools/points?tab=${tab}`;
}
