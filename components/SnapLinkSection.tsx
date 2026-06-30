"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLanguage } from "@/components/LanguageProvider";
import ResponsiveVideo from "@/components/ResponsiveVideo";
import { SNAPLINK_CONTACT } from "@/lib/snaplink-config";

gsap.registerPlugin(ScrollTrigger);

const features = [
  "Booking",
  "WhatsApp",
  "Call",
  "Reviews",
  "Website",
  "Directions",
  "Save Contact",
  "Offers",
  "Lead Capture",
  "QR/NFC Tracking"
];

function PhoneScreen() {
  return (
    <div className="relative mx-auto w-full max-w-[390px] [perspective:1000px]">
      <div className="snap-phone-glow absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gilt/24 blur-3xl" />
      <div className="snap-phone relative rounded-[46px] border border-gilt/28 bg-[linear-gradient(145deg,rgba(255,255,255,0.16),rgba(5,5,5,0.98)_35%,rgba(199,164,91,0.16))] p-3 shadow-gold [transform:rotateY(10deg)_rotateX(3deg)]">
        <div className="rounded-[38px] border border-cream/10 bg-black p-3 shadow-[inset_0_0_40px_rgba(255,255,255,0.05)]">
          <div className="mx-auto mb-3 h-1.5 w-20 rounded-full bg-cream/18" />
          <div className="media-fallback relative aspect-[9/16] overflow-hidden rounded-[30px] border border-gilt/18 bg-black">
            <ResponsiveVideo
              baseName="snaplink-phone-loop"
              className="h-full w-full"
              preload="none"
              rootMargin="420px"
            />
            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(115deg,rgba(255,255,255,0.18),transparent_26%,transparent_62%,rgba(242,210,138,0.1))]" />
          </div>
        </div>
      </div>
      <div className="snap-microcopy absolute -left-2 top-[12%] hidden border border-gilt/25 bg-black/55 px-4 py-3 text-xs uppercase tracking-[0.18em] text-gilt/85 shadow-gold backdrop-blur-md sm:block">
        Tap. Scan. Connect.
      </div>
      <div className="snap-microcopy absolute -right-5 bottom-[10%] hidden max-w-[220px] border border-cream/12 bg-black/55 px-4 py-3 text-xs leading-5 text-cream/70 shadow-gold backdrop-blur-md sm:block">
        Built for QR, NFC, social bios, and client campaigns.
      </div>
    </div>
  );
}

export default function SnapLinkSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const phoneRef = useRef<HTMLDivElement>(null);
  const { t } = useLanguage();

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const ctx = gsap.context(() => {
      gsap.from(".snap-copy", {
        opacity: 0,
        y: 30,
        duration: 0.8,
        stagger: 0.12,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%"
        }
      });

      gsap.from(".snap-pill", {
        opacity: 0,
        y: 18,
        duration: 0.6,
        stagger: 0.06,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 62%"
        }
      });

      gsap.to(phoneRef.current, {
        y: -44,
        rotateY: -7,
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
    <section id="mobile-action-hub" ref={sectionRef} className="relative overflow-hidden bg-ink py-24 sm:py-32">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_22%_28%,rgba(199,164,91,0.14),transparent_26rem),radial-gradient(circle_at_80%_72%,rgba(245,239,226,0.08),transparent_22rem)]" />
      <div className="maison-shell relative z-10 grid items-center gap-14 lg:grid-cols-[0.94fr_1.06fr]">
        <div ref={phoneRef} className="order-2 lg:order-1">
          <PhoneScreen />
        </div>
        <div className="order-1 lg:order-2">
          <p className="snap-copy editorial-label mb-5 text-xs text-gilt/85">
            {t({ en: "MOBILE ACTION HUB", es: "PERFIL MÓVIL INTELIGENTE" })}
          </p>
          <h2 className="snap-copy font-serif text-4xl leading-tight text-cream sm:text-6xl">
            {t({
              en: "Everything your customer needs, all in one profile.",
              es: "Todo lo que tu cliente necesita en un solo perfil."
            })}
          </h2>
          <p className="snap-copy mt-7 max-w-2xl text-lg leading-9 text-cream/68">
            {t({
              en: "Booking, WhatsApp, Instagram, reviews, website, directions, save contact, and special offers — all built for QR, NFC, social bios, and customer campaigns.",
              es: "Reservas, WhatsApp, Instagram, reseñas, sitio web, direcciones, guardar contacto y ofertas especiales — todo creado para QR, NFC, redes sociales y campañas de clientes."
            })}
          </p>
          <div className="snap-copy mt-9 flex flex-col gap-3 sm:flex-row">
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
              {t({ en: "View Live Profile", es: "Ver perfil demo" })}
            </a>
          </div>
          <div className="mt-9 flex flex-wrap gap-3">
            {features.map((feature) => (
              <span
                className="snap-pill border border-gilt/18 bg-cream/6 px-4 py-2 text-sm text-cream/76 shadow-[0_12px_34px_rgba(0,0,0,0.2)]"
                key={feature}
              >
                {feature}
              </span>
            ))}
          </div>
          <div className="snap-copy mt-9 border border-gilt/24 bg-black/42 p-5 shadow-gold backdrop-blur-md">
            <p className="editorial-label text-[10px] text-gilt/80">
              {t({ en: "Multiple ways to reach us", es: "Varias formas de contactarnos" })}
            </p>
            <h3 className="mt-3 font-serif text-3xl text-cream">
              {t({ en: "Instant Communication", es: "Comunicación Instantánea" })}
            </h3>
            <p className="mt-3 text-sm leading-7 text-cream/64">
              {t({
                en: "Customers can call, text, WhatsApp, book, review, save contact, or submit a lead from one mobile profile.",
                es: "Tus clientes pueden llamar, enviar texto, usar WhatsApp, reservar, dejar reseña, guardar contacto o enviar un lead desde un solo perfil móvil."
              })}
            </p>
            <p className="mt-4 text-xs uppercase tracking-[0.16em] text-gilt/75">
              {t({
                en: "Multiple ways to reach us. One system to track the action.",
                es: "Varias formas de contactarnos. Un sistema para medir la acción."
              })}
            </p>
            <div className="mt-5 grid gap-3 sm:grid-cols-3">
              <a
                className="inline-flex min-h-11 items-center justify-center border border-gilt bg-gilt px-4 text-sm font-semibold text-black transition hover:bg-cream"
                href={SNAPLINK_CONTACT.callHref}
              >
                {t({ en: "Call Now", es: "Llamar Ahora" })}
              </a>
              <a
                className="inline-flex min-h-11 items-center justify-center border border-cream/24 px-4 text-sm font-semibold text-cream transition hover:border-gilt hover:text-gilt"
                href={SNAPLINK_CONTACT.smsHref}
              >
                {t({ en: "Text Us", es: "Enviar Texto" })}
              </a>
              <a
                className="inline-flex min-h-11 items-center justify-center border border-cream/24 px-4 text-sm font-semibold text-cream transition hover:border-gilt hover:text-gilt"
                href={SNAPLINK_CONTACT.whatsappHref}
                rel="noreferrer"
                target="_blank"
              >
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
