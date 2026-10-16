#!/usr/bin/env python3
"""Read a Department of Home Affairs visa page (immi.homeaffairs.gov.au) as plain text.
The content lives in a hidden JSON field, so a normal HTML-to-text pass shows only navigation.
Usage: python3 ha_page.py URL [--part applicant|sponsor|all] [--sections overview,aboutVisa,eligibility,stepGuide,haveThisVisa] [--json]
Defaults: --part applicant --sections overview,aboutVisa,eligibility,haveThisVisa (add stepGuide for the document checklist
and lodgement steps; use --part sponsor for employer/sponsor requirements)."""
import sys, re, html, json, urllib.request
from html.parser import HTMLParser

UA = {"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/129.0 Safari/537.36", "Accept": "text/html"}

class T(HTMLParser):
    def __init__(self):
        super().__init__(); self.out = []; self.href = None
    def handle_starttag(self, t, a):
        if t in ("p", "div", "li", "tr", "br", "h1", "h2", "h3", "h4", "h5", "ul", "ol", "table"): self.out.append("\n")
        if t == "li": self.out.append("- ")
        if t in ("td", "th"): self.out.append(" | ")
        if t == "a":
            d = dict(a); self.href = d.get("href")
    def handle_endtag(self, t):
        if t == "a" and self.href:
            if self.href.startswith("/"): self.href = "https://immi.homeaffairs.gov.au" + self.href
            if not self.href.startswith("#"): self.out.append(f" [{self.href}]")
            self.href = None
        if t in ("p", "div", "li", "tr", "h1", "h2", "h3", "h4", "h5", "ul", "ol", "table"): self.out.append("\n")
    def handle_data(self, d): self.out.append(d)

def h2t(s):
    if not isinstance(s, str): return str(s)
    p = T(); p.feed(s); t = html.unescape("".join(p.out))
    t = re.sub(r"[ \t\xa0]+", " ", t); t = re.sub(r" *\n *", "\n", t); t = re.sub(r"\n{2,}", "\n", t)
    return t.strip()

def walk(node, depth=0, key=""):
    pad = "  " * depth
    if isinstance(node, dict):
        title = node.get("title") or node.get("heading") or node.get("name")
        if title: print(f"{pad}## {h2t(title)}")
        for k, v in node.items():
            if k in ("title", "heading", "name", "collapsed", "id", "itemName", "icon", "order", "isActive"): continue
            if isinstance(v, (dict, list)):
                if v: print(f"{pad}[{k}]"); walk(v, depth + 1, k)
            elif isinstance(v, str) and v.strip():
                txt = h2t(v)
                if txt: print(f"{pad}{k}: {txt}" if len(txt) < 120 and "\n" not in txt else f"{pad}{k}:\n{pad}{txt.replace(chr(10), chr(10)+pad)}")
            elif isinstance(v, (int, float, bool)):
                print(f"{pad}{k}: {v}")
    elif isinstance(node, list):
        for i, item in enumerate(node):
            if isinstance(item, (dict, list)): walk(item, depth, key)
            else: print(f"{pad}- {h2t(str(item))}")

args = sys.argv[1:]
def opt(name, default):
    if name in args:
        i = args.index(name); return args[i + 1]
    return default
url = args[0]
part = opt("--part", "applicant")
sections = opt("--sections", "overview,aboutVisa,eligibility,haveThisVisa").split(",")
raw = urllib.request.urlopen(urllib.request.Request(url, headers=UA), timeout=90).read().decode("utf-8", "replace")
m = re.search(r'id="ctl00_PlaceHolderMain_PageSchemaHiddenField_Input"[^>]*value="([^"]*)"', raw) or re.search(r'value="([^"]*)"[^>]*id="ctl00_PlaceHolderMain_PageSchemaHiddenField_Input"', raw)
if not m:
    sys.exit("No page schema field found; this page may not be a visa content page.")
data = json.loads(html.unescape(m.group(1)))
t = re.search(r"<title>([^<]*)</title>", raw)
print("# " + (html.unescape(t.group(1)).strip() if t else url))
print("Source: " + url)
if "--json" in args: print(json.dumps(data, indent=1)[:200000])
else:
    for k, v in data.items():
        if k in ("applicant", "sponsor"):
            if part != "all" and k != part: continue
            print(f"\n==== {k.upper()} ====")
            if isinstance(v, dict):
                for sk, sv in v.items():
                    if sk == "tabs": continue
                    if sections != ["all"] and sk not in sections: continue
                    print(f"\n=== {sk} ===")
                    walk(sv, 1, sk)
        elif k in ("recommended", "toggleData"):
            continue
        else:
            walk({k: v})
