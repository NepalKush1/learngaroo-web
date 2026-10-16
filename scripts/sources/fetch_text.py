#!/usr/bin/env python3
"""Print the visible text of a web page (Home Affairs, legislation.gov.au, AustLII, ART).
Usage: python3 fetch_text.py URL [--grep REGEX] [--context N]
Headings are prefixed with '#'. Table cells are separated by ' | '."""
import sys, re, html, urllib.request, argparse
from html.parser import HTMLParser

SKIP = {"script", "style", "noscript", "svg", "nav", "footer", "iframe"}
BLOCK = {"p", "div", "li", "h1", "h2", "h3", "h4", "h5", "h6", "tr", "br", "section", "article", "ul", "ol", "table", "dt", "dd", "blockquote"}

class P(HTMLParser):
    def __init__(self):
        super().__init__(); self.skip = 0; self.out = []
    def handle_starttag(self, t, a):
        if t in SKIP: self.skip += 1
        if self.skip: return
        if t in ("h1", "h2", "h3", "h4", "h5"): self.out.append("\n" + "#" * int(t[1]) + " ")
        elif t in BLOCK: self.out.append("\n")
        elif t in ("td", "th"): self.out.append(" | ")
    def handle_endtag(self, t):
        if t in SKIP: self.skip = max(0, self.skip - 1)
        if self.skip: return
        if t in BLOCK or t in ("h1", "h2", "h3", "h4", "h5"): self.out.append("\n")
    def handle_data(self, d):
        if not self.skip: self.out.append(d)

ap = argparse.ArgumentParser(); ap.add_argument("url"); ap.add_argument("--grep"); ap.add_argument("--context", type=int, default=2)
args = ap.parse_args()
req = urllib.request.Request(args.url, headers={"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/129.0 Safari/537.36", "Accept": "text/html,application/xhtml+xml", "Accept-Language": "en-AU,en;q=0.9"})
raw = urllib.request.urlopen(req, timeout=90).read().decode("utf-8", "replace")
p = P(); p.feed(raw)
text = html.unescape("".join(p.out))
text = re.sub(r"[ \t​\xa0‎]+", " ", text)
text = re.sub(r" *\n *", "\n", text)
text = re.sub(r"\n{2,}", "\n", text).strip()
if args.grep:
    lines = text.split("\n"); rx = re.compile(args.grep, re.I); c = args.context
    hits = [i for i, l in enumerate(lines) if rx.search(l)]
    shown = set()
    for i in hits:
        for j in range(max(0, i - c), min(len(lines), i + c + 1)):
            if j not in shown: shown.add(j); print(f"{j}: {lines[j]}")
        print("--")
else:
    print(text)
