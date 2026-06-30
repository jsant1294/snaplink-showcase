"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLanguage } from "@/components/LanguageProvider";
import ResponsiveVideo from "@/components/ResponsiveVideo";
import { useLenisSmoothScroll } from "@/lib/motion";

gsap.registerPlugin(ScrollTrigger);

const videoScenes = [
  "hero-fashion-loop",
  "scarf-loop",
  "handbag-loop",
  "snaplink-phone-loop",
  "analytics-loop"
];

const storyScenes = [
  {
    eyebrow: { en: "SNAPLINK SHOWCASE", es: "DEMO SNAPLINK" },
    headline: { en: "One link. Every connection.", es: "Un enlace. Todas las conexiones." },
    body: {
      en: "A smart business profile that connects websites, QR codes, NFC cards, bookings, reviews, leads, analytics, and physical customer touchpoints.",
      es: "Un perfil inteligente para negocios que conecta sitios web, códigos QR, tarjetas NFC, reservaciones, reseñas, clientes potenciales, analíticas y puntos físicos de contacto."
    },
    badge: { en: "Demo brand example: JL Maison", es: "Marca de ejemplo: JL Maison" }
  },
  {
    eyebrow: { en: "BEAUTIFUL BRAND PAGES", es: "PÁGINAS DE MARCA" },
    headline: { en: "Make every first impression feel premium.", es: "Haz que cada primera impresión se sienta premium." },
    body: {
      en: "SnapLink connects your mobile profile to cinematic brand pages, product showcases, booking flows, and lead capture.",
      es: "SnapLink conecta tu perfil móvil con páginas de marca cinematográficas, productos, reservas y captación de leads."
    }
  },
  {
    eyebrow: { en: "PRODUCT SHOWCASE", es: "SHOWCASE DE PRODUCTOS" },
    headline: { en: "Turn attention into action.", es: "Convierte la atención en acción." },
    body: {
      en: "Showcase your product, service, or offer — then send visitors straight to booking, WhatsApp, reviews, or a VIP list.",
      es: "Muestra tu producto, servicio u oferta y lleva a tus visitantes directo a reservas, WhatsApp, reseñas o una lista VIP."
    }
  },
  {
    eyebrow: { en: "MOBILE ACTION HUB", es: "PERFIL MÓVIL INTELIGENTE" },
    headline: { en: "Everything your customer needs, all in one profile.", es: "Todo lo que tu cliente necesita en un solo perfil." },
    body: {
      en: "Booking, Instagram, WhatsApp, reviews, website, directions, save contact, and special offers — built for QR and NFC traffic.",
      es: "Reservas, Instagram, WhatsApp, reseñas, sitio web, direcciones, guardar contacto y ofertas — creado para tráfico QR y NFC."
    }
  },
  {
    eyebrow: { en: "ANALYTICS & LEADS", es: "ANALÍTICAS Y LEADS" },
    headline: { en: "You no longer guess what works.", es: "Ya no adivinas qué funciona." },
    body: {
      en: "Track views, clicks, QR scans, NFC taps, booking interest, review clicks, and lead submissions from every campaign.",
      es: "Mide vistas, clics, escaneos QR, taps NFC, interés en reservas, clics de reseñas y leads de cada campaña."
    }
  }
];

const previewCards = [
  {
    image: "/images/snaplink-preview-hero.jpg",
    title: "SnapLink",
    subtitle: "Smart Business Profile",
    footer: "QR • NFC • Leads • Analytics"
  },
  {
    image: "/images/snaplink-brand-page-preview.jpg",
    title: "Brand Pages",
    subtitle: "Premium showcase experiences",
    footer: "Powered by SnapLink"
  },
  {
    image: "/images/snaplink-action-links-preview.jpg",
    title: "Action Links",
    subtitle: "Book • Call • Shop • Message",
    footer: "Turn attention into action"
  },
  {
    image: "/images/snaplink-mobile-profile-preview.jpg",
    title: "Mobile Profile",
    subtitle: "Booking • WhatsApp • Reviews",
    footer: "One link. Every connection."
  },
  {
    image: "/images/snaplink-analytics-preview.jpg",
    title: "Analytics",
    subtitle: "Views • Clicks • Taps • Leads",
    footer: "Track what matters"
  }
];

function CinematicVideoLayer({ baseName, index }: { baseName: string; index: number }) {
  return (
    <div
      className="cinematic-video-layer absolute inset-0 media-fallback opacity-0"
      data-scene={index}
      aria-hidden="true"
    >
      <ResponsiveVideo
        baseName={baseName}
        className="h-full w-full"
        eager={index === 0}
        loadOnMobile={index === 0}
        preload={index === 0 ? "metadata" : "none"}
        rootMargin="0px"
      />
    </div>
  );
}

function PreviewCard({
  footer,
  image,
  index,
  subtitle,
  title
}: {
  footer: string;
  image: string;
  index: number;
  subtitle: string;
  title: string;
}) {
  const [imageFailed, setImageFailed] = useState(false);
  const actionRows = [
    ["Website", "Bookings", "Reviews"],
    ["Brand Page", "Products", "Leads"],
    ["Book", "Call", "Shop"],
    ["WhatsApp", "Directions", "Offers"],
    ["Views", "Clicks", "Taps"]
  ];

  return (
    <div className="glass-panel mx-auto w-full max-w-[390px] p-3 shadow-gold [transform:rotateY(-10deg)_rotateX(4deg)] sm:p-4">
      <div className="media-fallback relative aspect-[4/5] overflow-hidden border border-gilt/20 bg-black/50">
        {!imageFailed ? (
          <img
            alt={`${title} preview`}
            className="h-full w-full object-cover"
            loading={index === 0 ? "eager" : "lazy"}
            src={image}
            onError={() => setImageFailed(true)}
          />
        ) : (
          <div className="flex h-full flex-col justify-between p-6">
            <div className="flex items-center justify-between">
              <img
                alt="SnapLink gold mark"
                className="h-14 w-14 rounded-full border border-gilt/55 bg-black/70 object-contain p-1.5 shadow-gold"
                src="/brand/snaplink-mark-gold.png"
              />
              <div className="text-right text-xs uppercase tracking-[0.18em] text-cream/45">Scene 0{index + 1}</div>
            </div>
            <div>
              <h3 className="font-serif text-4xl leading-none text-cream sm:text-5xl">{title}</h3>
              <p className="mt-3 text-sm leading-6 text-cream/64">{subtitle}</p>
              <div className="mt-6 grid gap-2">
                {actionRows[index].map((item) => (
                  <div className="border border-cream/12 bg-cream/7 px-4 py-3 text-sm text-cream/78" key={item}>
                    {item}
                  </div>
                ))}
              </div>
            </div>
            <div className="border-t border-gilt/20 pt-4 text-xs uppercase tracking-[0.16em] text-gilt/80">
              {footer}
            </div>
          </div>
        )}
        {!imageFailed ? (
          <div className="pointer-events-none absolute inset-0 border border-gilt/20 shadow-[inset_0_0_80px_rgba(0,0,0,0.22)]" />
        ) : null}
      </div>
    </div>
  );
}

const objectScenes = previewCards.map((card, index) => <PreviewCard {...card} index={index} key={card.title} />);

export default function Hero() {
  useLenisSmoothScroll();
  const { t } = useLanguage();
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const mobileHero = window.matchMedia("(max-width: 639px)").matches;
    const ctx = gsap.context(() => {
      const layers = gsap.utils.toArray<HTMLElement>(".cinematic-video-layer");
      const panels = gsap.utils.toArray<HTMLElement>(".cinematic-story-panel");
      const objects = gsap.utils.toArray<HTMLElement>(".cinematic-object");

      gsap.set(layers[0], { opacity: 1 });
      gsap.set(panels[0], { opacity: 1, y: 0 });
      gsap.set(objects[0], { opacity: 1, y: 0, scale: 1, rotate: 0 });
      gsap.set(panels.slice(1), { opacity: 0, y: 26 });
      gsap.set(objects.slice(1), { opacity: 0, y: 34, scale: 0.94, rotate: -4 });

      if (reducedMotion || mobileHero) return;

      const tl = gsap.timeline({
        defaults: { ease: "none" },
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: "+=500%",
          scrub: 1,
          pin: true,
          anticipatePin: 1
        }
      });

      [20, 40, 60, 80].forEach((mark, index) => {
        const current = index;
        const next = index + 1;

        tl.to(layers[current], { opacity: 0, duration: 4 }, mark - 2)
          .to(layers[next], { opacity: 1, duration: 4 }, mark - 2)
          .to(panels[current], { opacity: 0, y: -24, duration: 3 }, mark - 1.5)
          .to(panels[next], { opacity: 1, y: 0, duration: 3 }, mark - 0.5)
          .to(objects[current], { opacity: 0, y: -30, scale: 1.04, rotate: 4, duration: 3 }, mark - 1.5)
          .to(objects[next], { opacity: 1, y: 0, scale: 1, rotate: 0, duration: 3 }, mark - 0.5);
      });

      tl.to(".cinematic-object-stage", { y: -18, rotate: 1.5, duration: 100 }, 0);
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative min-h-[100svh] overflow-hidden sm:h-screen sm:min-h-screen">
      <div className="absolute inset-0">
        {videoScenes.map((baseName, index) => (
          <CinematicVideoLayer baseName={baseName} index={index} key={baseName} />
        ))}
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(5,5,5,0.92),rgba(5,5,5,0.44),rgba(5,5,5,0.9))]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_48%,rgba(199,164,91,0.18),transparent_28rem)]" />
        <div className="absolute inset-x-0 bottom-0 h-52 bg-gradient-to-t from-obsidian to-transparent" />
      </div>

      <div className="pointer-events-none absolute left-5 top-5 z-20 flex items-center gap-3 sm:left-8 sm:top-8">
        <img
          alt="SnapLink gold mark"
          className="h-11 w-11 rounded-full border border-gilt/25 bg-black/55 object-contain p-1.5 shadow-gold"
          src="/brand/snaplink-mark-gold.png"
        />
        <div className="hidden sm:block">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-gilt">SnapLink</p>
          <p className="mt-1 text-[11px] uppercase tracking-[0.16em] text-cream/56">Tap. Connect. Grow.</p>
        </div>
      </div>

      <div className="maison-shell relative z-10 grid min-h-[100svh] items-center gap-10 pb-24 pt-36 sm:h-full sm:pb-12 sm:pt-24 lg:grid-cols-[1.08fr_0.92fr] lg:gap-16">
        <div className="relative min-h-[610px] sm:min-h-[460px] lg:min-h-[520px]">
          {storyScenes.map((scene, index) => (
            <div
              className="cinematic-story-panel absolute inset-x-0 top-0 max-w-4xl opacity-0"
              data-scene={index}
              key={scene.eyebrow.en}
            >
              <p className="editorial-label mb-5 text-xs text-gilt/85">{t(scene.eyebrow)}</p>
              <h1 className="font-serif text-5xl font-medium leading-[0.95] text-cream sm:text-6xl lg:text-8xl">
                {t(scene.headline)}
              </h1>
              <p className="mt-7 max-w-xl text-base leading-8 text-cream/72 sm:text-lg">{t(scene.body)}</p>
              {scene.badge ? (
                <p className="mt-6 inline-flex border border-gilt/25 bg-black/30 px-4 py-2 text-xs uppercase tracking-[0.16em] text-gilt/85">
                  {t(scene.badge)}
                </p>
              ) : null}
              <div className="mt-10 flex flex-col gap-3 sm:flex-row">
                <a
                  href="#vip"
                  className="inline-flex min-h-12 items-center justify-center border border-gilt bg-gilt px-7 text-sm font-semibold text-black transition hover:bg-cream"
                >
                  {t({ en: "Build My SnapLink", es: "Crear mi SnapLink" })}
                </a>
                <a
                  href="#collection"
                  className="inline-flex min-h-12 items-center justify-center border border-cream/35 px-7 text-sm font-semibold text-cream transition hover:border-gilt hover:text-gilt"
                >
                  {t({ en: "See Demo", es: "Ver demo" })}
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="cinematic-object-stage pointer-events-none hidden [perspective:1000px] sm:relative sm:bottom-auto sm:right-auto sm:mx-auto sm:flex sm:h-[420px] sm:w-full sm:max-w-[360px] lg:h-[520px] lg:max-w-[440px]">
          <div className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gilt/15 blur-3xl" />
          {objectScenes.map((object, index) => (
            <div
              className="cinematic-object absolute inset-0 flex items-center justify-center opacity-0 will-change-transform"
              data-scene={index}
              key={index}
            >
              {object}
            </div>
          ))}
        </div>
      </div>

      <div className="pointer-events-none absolute bottom-5 left-1/2 z-20 hidden h-12 w-px -translate-x-1/2 overflow-hidden bg-cream/15 sm:block">
        <div className="h-1/2 w-full animate-[shine_2.2s_ease-in-out_infinite] bg-gilt" />
      </div>
    </section>
  );
}
