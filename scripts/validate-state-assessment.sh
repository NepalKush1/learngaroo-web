#!/bin/sh
# Compiles the state assessment validator and its data to plain JS in a temp
# dir and runs it. ONLY=nsw,vic limits the report to those state codes.
OUT=$(mktemp -d)
npx tsc --module commonjs --target es2022 --moduleResolution node --esModuleInterop --skipLibCheck --jsx preserve --outDir "$OUT" --rootDir . scripts/validate-state-assessment.ts data/state-assessment/index.ts 2>&1 | grep -v "^$" || true
node "$OUT/scripts/validate-state-assessment.js"
