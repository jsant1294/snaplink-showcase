# SnapLink Showcase

A production-quality sample landing page for Southline Digital Media: a SnapLink showcase using JL Maison as a fictional luxury demo brand example.

## Run locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Replaceable assets

- Master videos live in `public/videos/originals/`.
- Optimized videos live beside them as `*.desktop.mp4`, `*.mobile.mp4`, and `*.poster.webp`.
- To regenerate optimized video assets, install `ffmpeg` and run:

```bash
./scripts/optimize-videos.sh
```

- Campaign imagery: add files under `public/images/` and wire them into the matching section component.

The site is designed to load cleanly without those assets. Missing videos fall back to cinematic gradient panels, and missing image previews fall back to polished SnapLink cards.

## Notes

- Smooth scrolling is powered by Lenis.
- Scroll-triggered reveals use GSAP ScrollTrigger.
- 3D rendering uses React Three Fiber and Drei.
- The lead form shows a polished success state and is ready to connect to SnapLink Leads.
- Media is muted, inline, poster-first, mobile-aware, and lazy loaded with `ResponsiveVideo`.
