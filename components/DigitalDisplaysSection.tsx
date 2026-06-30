"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLanguage } from "@/components/LanguageProvider";

gsap.registerPlugin(ScrollTrigger);

const displayFeatures = [
  { en: "TV Menu Boards", es: "Menús en TV" },
  { en: "QR Ordering", es: "Pedidos por QR" },
  { en: "Promo Screens", es: "Pantallas Promocionales" },
  { en: "Review Displays", es: "Displays de Reseñas" },
  { en: "Real-Time Updates", es: "Actualizaciones en Tiempo Real" },
  { en: "Cloud Controlled", es: "Control en la Nube" },
  { en: "Track Performance", es: "Medición de Rendimiento" },
  { en: "Connected to SnapLink", es: "Conectado a SnapLink" }
];

function DigitalDisplayImage() {
  return (
    <div className="digital-display-frame relative overflow-hidden border border-gilt/24 bg-black shadow-velvet">
      <div className="digital-display-glow absolute left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gilt/18 blur-3xl" />
      <img
        alt="SnapLink storefront TV menu boards showing digital menus, promotions, QR ordering, and in-store signage."
        className="relative z-10 aspect-[16/10] h-full w-full object-cover transition duration-700 hover:scale-[1.025]"
        src="/images/snaplink-storefront-tv-panels-preview.jpg"
      />
      <div className="pointer-events-none absolute inset-0 z-20 bg-[linear-gradient(115deg,rgba(255,255,255,0.08),transparent_22%,transparent_72%,rgba(199,164,91,0.12))]" />
      <div className="pointer-events-none absolute inset-0 z-20 shadow-[inset_0_0_95px_rgba(0,0,0,0.24)]" />
    </div>
  );
}

export default function DigitalDisplaysSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const { t } = useLanguage();

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const ctx = gsap.context(() => {
      gsap.from(".digital-copy", {
        opacity: 0,
        y: 34,
        duration: 0.85,
        stagger: 0.12,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%"
        }
      });

      gsap.from(".digital-chip", {
        opacity: 0,
        y: 16,
        duration: 0.55,
        stagger: 0.06,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 58%"
        }
      });

      gsap.from(".digital-display-frame", {
        opacity: 0,
        x: 36,
        y: 26,
        scale: 0.98,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 68%"
        }
      });

      gsap.to(imageRef.current, {
        y: -38,
        rotate: -0.6,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="digital-displays" ref={sectionRef} className="relative overflow-hidden bg-ink py-24 sm:py-32">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_22%,rgba(199,164,91,0.12),transparent_28rem),radial-gradient(circle_at_82%_74%,rgba(245,239,226,0.06),transparent_24rem)]" />
      <div className="maison-shell relative z-10 grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <p className="digital-copy editorial-label mb-5 text-xs text-gilt/85">
            {t({ en: "DIGITAL DISPLAYS", es: "PANTALLAS DIGITALES" })}
          </p>
          <h2 className="digital-copy font-serif text-4xl leading-tight text-cream sm:text-6xl">
            {t({ en: "TV menu boards. Smart storefronts.", es: "Menús en TV. Negocios más inteligentes." })}
          </h2>
          <p className="digital-copy mt-7 max-w-xl text-lg leading-9 text-cream/68">
            {t({
              en: "SnapLink digital displays turn in-store TV panels into branded customer touchpoints. Show menus, specials, QR ordering, reviews, promotions, social links, and lead capture — all connected to one trackable SnapLink system.",
              es: "Las pantallas digitales de SnapLink convierten televisores dentro del negocio en puntos de contacto para clientes. Muestra menús, especiales, pedidos por QR, reseñas, promociones, redes sociales y captación de leads — todo conectado a un sistema SnapLink medible."
            })}
          </p>
          <p className="digital-copy mt-5 max-w-xl border-l border-gilt/25 pl-5 text-sm leading-7 text-cream/58">
            Built for restaurants, cafes, salons, gyms, studios, venues, and storefronts that want every screen to connect back to measurable customer action.
          </p>
          <div className="digital-copy mt-10 flex flex-col gap-3 sm:flex-row">
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
              {t({ en: "View Display Demo", es: "Ver demo de pantallas" })}
            </a>
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            {displayFeatures.map((feature) => (
              <span
                className="digital-chip border border-gilt/18 bg-cream/6 px-4 py-2 text-sm text-cream/76 shadow-[0_12px_34px_rgba(0,0,0,0.22)]"
                key={feature.en}
              >
                {t(feature)}
              </span>
            ))}
          </div>
        </div>
        <div ref={imageRef}>
          <DigitalDisplayImage />
        </div>
      </div>
    </section>
  );
}
