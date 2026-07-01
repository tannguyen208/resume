#!/usr/bin/env bash
#
# export-pdf.sh — Convert resume Markdown files to styled PDFs.
#
# Pipeline: Markdown --(pandoc)--> HTML (with resume.css) --(Chrome headless)--> PDF
#
# Usage:
#   ./scripts/export-pdf.sh                  # converts RESUME.md and RESUME_short.md
#   ./scripts/export-pdf.sh path/to/file.md  # converts the given file(s)
#
# Each PDF is written to src/assets/ (where the web app imports it from), so there
# is a single copy — no duplicate next to the source .md.
#
# Requirements (macOS):
#   - pandoc        (brew install pandoc)
#   - Google Chrome (/Applications/Google Chrome.app)

set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PROJECT_DIR="$(cd "$SCRIPT_DIR/.." && pwd)"
CSS="$SCRIPT_DIR/resume.css"
OUT_DIR="$PROJECT_DIR/src/assets"   # single home for the PDFs (the app imports them)
mkdir -p "$OUT_DIR"

# --- locate tools ---------------------------------------------------------
command -v pandoc >/dev/null 2>&1 || {
  echo "Error: pandoc not found. Install with: brew install pandoc" >&2; exit 1; }

CHROME="/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"
if [ ! -x "$CHROME" ]; then
  CHROME="$(command -v google-chrome-stable || command -v chromium || true)"
fi
[ -n "$CHROME" ] && [ -x "$CHROME" ] || {
  echo "Error: Google Chrome not found." >&2; exit 1; }

# --- files to convert -----------------------------------------------------
if [ "$#" -gt 0 ]; then
  FILES=("$@")
else
  FILES=("$PROJECT_DIR/RESUME.md" "$PROJECT_DIR/RESUME_short.md")
fi

# --- temp workspace (auto-cleaned) ----------------------------------------
WORK="$(mktemp -d)"
trap 'rm -rf "$WORK"' EXIT

# --- convert --------------------------------------------------------------
i=0
for md in "${FILES[@]}"; do
  if [ ! -f "$md" ]; then
    echo "Skip (not found): $md" >&2; continue
  fi
  i=$((i + 1))
  base="$(basename "${md%.md}")"
  html="$WORK/$base.html"
  pdf="$OUT_DIR/$base.pdf"

  pandoc "$md" -s --embed-resources --css "$CSS" \
    --metadata pagetitle="$base" \
    -o "$html"

  # Chrome --headless=new can write the PDF and then linger without exiting,
  # so launch it in the background, wait for the PDF, then terminate it.
  # A separate user-data-dir per file avoids Chrome's SingletonLock conflict.
  rm -f "$pdf"
  "$CHROME" --headless=new --disable-gpu --no-sandbox \
    --user-data-dir="$WORK/chrome-$i" \
    --no-first-run --no-default-browser-check \
    --no-pdf-header-footer \
    --virtual-time-budget=10000 \
    --print-to-pdf="$pdf" \
    "file://$html" >/dev/null 2>&1 &
  cpid=$!

  for _ in $(seq 1 60); do        # wait up to ~30s for the PDF to appear
    [ -s "$pdf" ] && break
    sleep 0.5
  done
  sleep 0.5                       # let Chrome finish flushing the file
  kill "$cpid" 2>/dev/null || true
  wait "$cpid" 2>/dev/null || true

  if [ -s "$pdf" ]; then echo "✓ $pdf"; else echo "✗ failed: $pdf" >&2; fi
done
