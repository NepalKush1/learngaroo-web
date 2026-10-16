#!/bin/sh
# Compiles the validators and the visa data to plain JS in a temp dir and runs
# them: first the reference pages, then the interactive explainers.
# ONLY=slug,slug limits the explainer report to those pages.
OUT=$(mktemp -d)
npx tsc --module commonjs --target es2022 --moduleResolution node --esModuleInterop --skipLibCheck --jsx preserve --outDir "$OUT" --rootDir . scripts/validate-visas.ts scripts/validate-explainers.ts data/visas/index.ts data/visas/explainers/index.ts 2>&1 | grep -v "^$" || true
STATUS=0
node "$OUT/scripts/validate-visas.js" || STATUS=1
node "$OUT/scripts/validate-explainers.js" || STATUS=1
exit $STATUS
