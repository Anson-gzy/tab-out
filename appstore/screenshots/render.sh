#!/usr/bin/env bash
set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
OUT_DIR="$SCRIPT_DIR/out"
CHROME="/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"

mkdir -p "$OUT_DIR"

SHOTS=(
  "01-hero"
  "02-grouped"
  "03-duplicates"
  "04-saved"
  "05-private"
)

for shot in "${SHOTS[@]}"; do
  echo "Rendering ${shot}..."
  out_file="$OUT_DIR/${shot}.png"
  
  "$CHROME" \
    --headless=new \
    --disable-gpu \
    --allow-file-access-from-files \
    --window-size=1440,900 \
    --force-device-scale-factor=2 \
    --hide-scrollbars \
    --virtual-time-budget=2500 \
    --screenshot="$out_file" \
    "file://$SCRIPT_DIR/compose.html?shot=${shot}"
done

echo "All 5 screenshots rendered successfully."
