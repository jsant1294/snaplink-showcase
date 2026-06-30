# SnapLink Showcase

A production-quality sample landing page for Southline Digital Media: a SnapLink showcase using JL Maison as a fictional luxury demo brand example.

## Run locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Replaceable assets

- Hero video: add `public/videos/hero-fashion-loop.mp4`
- Campaign imagery: add files under `public/images/` and wire them into `CollectionReveal.tsx`

The site is designed to load cleanly without those assets. Missing videos fall back to cinematic gradient panels, and missing image previews fall back to polished SnapLink cards.

## Notes

- Smooth scrolling is powered by Lenis.
- Scroll-triggered reveals use GSAP ScrollTrigger.
- 3D rendering uses React Three Fiber and Drei.
- The VIP form currently shows an MVP success message only. It is ready to connect to SnapLink Leads later.
- Media is muted, inline, autoplay-ready, and lazy-friendly through `preload="metadata"`.
