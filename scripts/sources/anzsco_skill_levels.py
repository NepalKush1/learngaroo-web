#!/usr/bin/env python3
"""Build data/anzsco-skill-levels.ts: the ANZSCO skill level of every occupation
on the Home Affairs lists for subclasses 190 and 491.

The Victorian Points Test scores occupation skill level (50 points for skill
level 1), but the Home Affairs list doesn't show it, so it comes from the ABS
classification. The ABS publishes ANZSCO 2022 as a spreadsheet; the Home
Affairs lists use ANZSCO 2013 codes. Codes that changed are matched through
the ABS correspondence table, then by title, then by the minor group's
predominant skill level.

Usage (download both files from the ABS ANZSCO 2022 page into their own
folder first):
  python3 -I scripts/sources/anzsco_skill_levels.py \
    "anzsco 2022 structure 062023.xlsx" "anzsco 2022 correspondence tables.xlsx" \
    data/state-assessment/home-affairs.ts data/anzsco-skill-levels.ts
"""
import sys, re, zipfile
import xml.etree.ElementTree as ET

NS = {"m": "http://schemas.openxmlformats.org/spreadsheetml/2006/main", "r": "http://schemas.openxmlformats.org/officeDocument/2006/relationships"}


def read_xlsx(path):
    z = zipfile.ZipFile(path)
    shared = []
    if "xl/sharedStrings.xml" in z.namelist():
        for si in ET.fromstring(z.read("xl/sharedStrings.xml")).findall("m:si", NS):
            shared.append("".join(t.text or "" for t in si.iter("{%s}t" % NS["m"])))
    wb = ET.fromstring(z.read("xl/workbook.xml"))
    rels = {r.get("Id"): r.get("Target") for r in ET.fromstring(z.read("xl/_rels/workbook.xml.rels"))}
    out = {}
    for sheet in wb.find("m:sheets", NS):
        target = rels[sheet.get("{%s}id" % NS["r"])]
        target = target if target.startswith("xl/") else "xl/" + target.lstrip("/")
        rows = []
        for row in ET.fromstring(z.read(target)).iter("{%s}row" % NS["m"]):
            cells = {}
            for c in row.findall("m:c", NS):
                col = re.match(r"[A-Z]+", c.get("r")).group()
                v = c.find("m:v", NS)
                if c.get("t") == "s" and v is not None:
                    cells[col] = shared[int(v.text)]
                elif c.get("t") == "inlineStr":
                    cells[col] = "".join(x.text or "" for x in c.iter("{%s}t" % NS["m"]))
                else:
                    cells[col] = v.text if v is not None else ""
            rows.append(cells)
        out[sheet.get("name")] = rows
    return out


def australian_level(value):
    # "1", or "1 Aus,2 NZ" for occupations with a different level in New Zealand.
    match = re.search(r"(\d)\s*Aus", value or "") or re.fullmatch(r"\s*(\d)\s*", value or "")
    return int(match.group(1)) if match else None


def words(title):
    return [w for w in re.findall(r"[a-z]+", title.lower()) if len(w) > 3 and w not in {"general", "other"}]


structure = read_xlsx(sys.argv[1])
correspondence = read_xlsx(sys.argv[2])
ha = re.findall(r'code: "(\d{6})", title: "([^"]+)"', open(sys.argv[3]).read())

levels = {}
for r in structure["Table 5"]:
    code, title = r.get("E", ""), r.get("F", "")
    if re.fullmatch(r"\d{6}", code or ""):
        levels[code] = (title, australian_level(r.get("G", "")))
minor = {}
for r in structure["Table 3"]:
    code = r.get("C", "")
    if re.fullmatch(r"\d{3}", code or ""):
        minor[code] = australian_level(r.get("E", ""))
to2022 = {}
current = None
for r in correspondence["Table 1"][6:]:
    if re.fullmatch(r"\d{6}", r.get("A", "") or ""):
        current = r["A"]
    if current and re.fullmatch(r"\d{6}", r.get("C", "") or ""):
        to2022.setdefault(current, []).append(r["C"])

result, notes, unresolved = {}, {}, []
for code, title in ha:
    if code in levels and levels[code][1]:
        result[code] = levels[code][1]
        continue
    targets = to2022.get(code, [])
    same = [t for t in targets if levels.get(t, ("", None))[0].lower().replace(" ", "") == title.lower().replace(" ", "")]
    pick = same[0] if same else (targets[0] if targets else None)
    if not pick:
        # Title matches only count within the same sub-major group (first two digits).
        exact = [c for c, (t, _) in levels.items() if t.lower() == title.lower() and c[:2] == code[:2]]
        loose = [c for c, (t, _) in levels.items() if c[:2] == code[:2] and words(title) and all(w in t.lower() for w in words(title))]
        pick = (exact or loose or [None])[0]
    if pick and levels[pick][1]:
        result[code] = levels[pick][1]
        notes[code] = f"ANZSCO 2022 {pick} {levels[pick][0]}"
    elif minor.get(code[:3]):
        result[code] = minor[code[:3]]
        notes[code] = f"predominant level of ANZSCO 2022 minor group {code[:3]}"
    else:
        unresolved.append((code, title))

lines = ",\n".join(f'  "{c}": {l}' for c, l in sorted(result.items()))
note_lines = ",\n".join(f'  "{c}": "{n}"' for c, n in sorted(notes.items()))
open(sys.argv[4], "w").write(f'''// ANZSCO skill level of every occupation on the Home Affairs lists for
// subclasses 190 and 491 (1 = commensurate with a bachelor degree or higher,
// 5 = the lowest). Generated by scripts/sources/anzsco_skill_levels.py from
// the ABS ANZSCO 2022 structure file (June 2023 release): Australian skill
// levels, matched by code. Codes the 2021 and 2022 updates renumbered are
// matched through the ABS correspondence table or by title, as noted in
// `anzscoSkillLevelNotes`. Don't edit by hand; re-run the script.

export const anzscoSkillLevelsSource = "https://www.abs.gov.au/statistics/classifications/anzsco-australian-and-new-zealand-standard-classification-occupations/2022";

export const anzscoSkillLevels: Record<string, number> = {{
{lines},
}};

// How each level was found when the Home Affairs (ANZSCO 2013) code isn't in
// ANZSCO 2022.
export const anzscoSkillLevelNotes: Record<string, string> = {{
{note_lines},
}};
''')
print(f"{len(result)} of {len(ha)} occupations have a skill level; {len(notes)} matched indirectly; unresolved: {unresolved}")
for c, n in sorted(notes.items()):
    print(" ", c, dict(ha)[c], "->", n, "level", result[c])
