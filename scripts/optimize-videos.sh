#!/usr/bin/env bash
set -euo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
VIDEOS_DIR="$ROOT_DIR/public/videos"
ORIGINALS_DIR="$VIDEOS_DIR/originals"

mkdir -p "$ORIGINALS_DIR"

VIDEOS=(
  "update-hero-one"
  "hero-fashion-loop"
  "scarf-loop"
  "handbag-loop"
  "snaplink-phone-loop"
  "analytics-loop"
)

for base in "${VIDEOS[@]}"; do
  input="$VIDEOS_DIR/$base.mp4"
  original="$ORIGINALS_DIR/$base.mp4"
  desktop="$VIDEOS_DIR/$base.desktop.mp4"
  mobile="$VIDEOS_DIR/$base.mobile.mp4"
  poster="$VIDEOS_DIR/$base.poster.webp"
  poster_tmp="$VIDEOS_DIR/$base.poster.tmp.jpg"

  if [[ ! -f "$input" ]]; then
    echo "Skipping missing $input"
    continue
  fi

  if [[ ! -f "$original" ]]; then
    cp "$input" "$original"
  fi

  ffmpeg -y -i "$original" \
    -vf "scale='min(1920,iw)':-2,fps=24" \
    -c:v libx264 -preset slow -crf 24 -pix_fmt yuv420p -movflags +faststart -an \
    "$desktop"

  ffmpeg -y -i "$original" \
    -vf "scale='min(720,iw)':-2,fps=24" \
    -c:v libx264 -preset slow -crf 28 -pix_fmt yuv420p -movflags +faststart -an \
    "$mobile"

  ffmpeg -y -ss 00:00:01 -i "$original" \
    -update 1 -vframes 1 -vf "scale='min(1200,iw)':-2" -q:v 4 \
    "$poster_tmp"

  python3 - "$poster_tmp" "$poster" <<'PY'
from pathlib import Path
from PIL import Image
import sys

source = Path(sys.argv[1])
target = Path(sys.argv[2])

Image.open(source).convert("RGB").save(target, "WEBP", quality=78, method=6)
source.unlink(missing_ok=True)
PY
done

echo "Optimized video assets written to $VIDEOS_DIR"
