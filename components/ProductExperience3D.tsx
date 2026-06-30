"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLanguage } from "@/components/LanguageProvider";

gsap.registerPlugin(ScrollTrigger);

const featureChips = [
  "NFC Coins",
  "Smart Keychains",
  "Tap Cards",
  "QR Displays",
  "Trackable Actions",
  "Powered by SnapLink"
];

function PhysicalTouchpointsImage() {
  return (
    <div className="physical-image-frame relative overflow-hidden border border-gilt/24 bg-black shadow-velvet">
      <div className="physical-image-glow absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gilt/20 blur-3xl" />
      <img
        alt="SnapLink physical touchpoints including NFC coin, smart keychain, tap card, and QR display."
        className="relative z-10 aspect-[4/3] h-full w-full object-cover transition duration-700 hover:scale-[1.025] sm:aspect-auto"
        src="/images/snaplink-physical-touchpoints-preview.jpg"
      />
      <div className="pointer-events-none absolute inset-0 z-20 bg-[linear-gradient(115deg,rgba(255,255,255,0.08),transparent_24%,transparent_70%,rgba(199,164,91,0.12))]" />
      <div className="pointer-events-none absolute inset-0 z-20 shadow-[inset_0_0_90px_rgba(0,0,0,0.22)]" />
    </div>
  );
}

export default function ProductExperience3D() {
  const sectionRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const { t } = useLanguage();

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const ctx = gsap.context(() => {
      gsap.from(".physical-copy", {
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

      gsap.from(".physical-chip", {
        opacity: 0,
        y: 16,
        duration: 0.55,
        stagger: 0.07,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 58%"
        }
      });

      gsap.from(".physical-image-frame", {
        opacity: 0,
        y: 46,
        scale: 0.98,
        duration: 0.95,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 68%"
        }
      });

      gsap.to(imageRef.current, {
        y: -42,
        rotate: 0.7,
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
    <section ref={sectionRef} className="relative overflow-hidden bg-black py-24 sm:py-32">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_15%,rgba(199,164,91,0.12),transparent_28rem),radial-gradient(circle_at_85%_70%,rgba(245,239,226,0.06),transparent_24rem)]" />
      <div className="maison-shell relative z-10 grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <p className="physical-copy editorial-label mb-5 text-xs text-gilt/85">
            {t({ en: "PHYSICAL TOUCHPOINTS", es: "PUNTOS FÍSICOS DE CONTACTO" })}
          </p>
          <h2 className="physical-copy font-serif text-4xl leading-tight text-cream sm:text-6xl">
            {t({
              en: "Turn every tap and scan into customer action.",
              es: "Convierte cada tap y escaneo en acción del cliente."
            })}
          </h2>
          <p className="physical-copy mt-7 max-w-xl text-lg leading-9 text-cream/68">
            {t({
              en: "SnapLink connects physical products to digital action. We create custom NFC coins, cards, keychains, table signs, and branded tap points that open your SnapLink profile, booking page, reviews, offers, lead forms, or digital menu — and every tap or scan can be tracked.",
              es: "SnapLink conecta productos físicos con acciones digitales. Creamos monedas NFC, tarjetas, llaveros, letreros de mesa y puntos de contacto con tu marca que abren tu perfil SnapLink, página de reserva, reseñas, ofertas, formularios o menú digital — y cada tap o escaneo se puede medir."
            })}
          </p>
          <p className="physical-copy mt-6 inline-flex border border-gilt/25 bg-black/36 px-4 py-2 text-xs uppercase tracking-[0.16em] text-gilt/85">
            {t({ en: "Custom branded products available", es: "Productos personalizados disponibles" })}
          </p>
          <p className="physical-copy mt-5 max-w-xl border-l border-gilt/25 pl-5 text-sm leading-7 text-cream/58">
            Your customer should never wonder what to do next. Tap. Scan. Book. Call. Review. Connect. We build the profile, the QR/NFC products, and the tracking system behind it.
          </p>
          <div className="physical-copy mt-10 flex flex-col gap-3 sm:flex-row">
            <a
              href="#vip"
              className="inline-flex min-h-12 items-center justify-center border border-gilt bg-gilt px-7 text-sm font-semibold text-black transition hover:bg-cream"
            >
              {t({ en: "Build My SnapLink Kit", es: "Crear mi kit SnapLink" })}
            </a>
            <a
              href="#collection"
              className="inline-flex min-h-12 items-center justify-center border border-cream/35 px-7 text-sm font-semibold text-cream transition hover:border-gilt hover:text-gilt"
            >
              {t({ en: "View Physical Demo", es: "Ver demo físico" })}
            </a>
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            {featureChips.map((chip) => (
              <span
                className="physical-chip border border-gilt/18 bg-cream/6 px-4 py-2 text-sm text-cream/76 shadow-[0_12px_34px_rgba(0,0,0,0.22)]"
                key={chip}
              >
                {chip}
              </span>
            ))}
          </div>
        </div>
        <div ref={imageRef}>
          <PhysicalTouchpointsImage />
        </div>
      </div>
    </section>
  );
}
