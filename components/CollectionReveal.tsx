"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLanguage } from "@/components/LanguageProvider";

gsap.registerPlugin(ScrollTrigger);

const toolkitCards = [
  {
    number: "01",
    title: { en: "Brand Pages", es: "Páginas de Marca" },
    image: "/images/snaplink-brand-page-preview.jpg",
    copy: {
      en: "Launch a cinematic web experience that makes your business feel premium from the first click.",
      es: "Lanza una experiencia web cinematográfica que hace que tu negocio se vea premium desde el primer clic."
    }
  },
  {
    number: "02",
    title: { en: "Action Links", es: "Enlaces de Acción" },
    image: "/images/snaplink-action-links-preview.jpg",
    copy: {
      en: "Give customers instant ways to book, call, shop, message, review, follow, and save your contact.",
      es: "Dale a tus clientes formas rápidas de reservar, llamar, comprar, enviar mensaje, dejar reseña, seguirte y guardar tu contacto."
    }
  },
  {
    number: "03",
    title: { en: "Custom NFC Products", es: "Productos NFC Personalizados" },
    image: "/images/snaplink-custom-nfc-products-preview.jpg",
    copy: {
      en: "We create NFC cards, metal cards, coins, keychains, wearables, and QR/NFC displays customized with your logo.",
      es: "Creamos tarjetas NFC, tarjetas metálicas, monedas, llaveros, wearables y displays QR/NFC personalizados con tu logo."
    }
  },
  {
    number: "04",
    title: { en: "Digital Displays", es: "Pantallas Digitales" },
    image: "/images/snaplink-storefront-tv-panels-preview.jpg",
    copy: {
      en: "Turn storefront TV panels into menus, promo screens, QR ordering, social prompts, and trackable displays.",
      es: "Convierte televisores en tu negocio en menús, promociones, pedidos por QR, redes sociales y displays medibles."
    }
  },
  {
    number: "05",
    title: { en: "Analytics & Leads", es: "Analíticas y Leads" },
    image: "/images/snaplink-analytics-preview.jpg",
    copy: {
      en: "Track views, clicks, QR scans, NFC taps, bookings, review clicks, and lead submissions in real time.",
      es: "Mide vistas, clics, escaneos QR, taps NFC, reservaciones, reseñas y clientes potenciales en tiempo real."
    }
  }
];

const valueRows = [
  { en: "One profile. All actions.", es: "Un perfil. Todas las acciones." },
  { en: "Physical + digital connected.", es: "Físico + digital conectado." },
  { en: "More visibility. More trust.", es: "Más visibilidad. Más confianza." },
  { en: "More leads. More growth.", es: "Más leads. Más crecimiento." }
];

export default function CollectionReveal() {
  const sectionRef = useRef<HTMLElement>(null);
  const { t } = useLanguage();

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray<HTMLElement>(".collection-card");

      gsap.fromTo(cards, {
        autoAlpha: 0,
        y: 34,
        rotateX: 5
      }, {
        autoAlpha: 1,
        y: 0,
        rotateX: 0,
        duration: 0.8,
        stagger: 0.08,
        ease: "power3.out",
        clearProps: "opacity,visibility,transform",
        immediateRender: false,
        scrollTrigger: {
          trigger: ".collection-grid",
          start: "top 86%",
          once: true
        }
      });

      requestAnimationFrame(() => ScrollTrigger.refresh());
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="collection" ref={sectionRef} className="relative overflow-hidden bg-black py-20 text-cream sm:py-28">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_16%_20%,rgba(199,164,91,0.14),transparent_28rem),radial-gradient(circle_at_84%_72%,rgba(245,239,226,0.06),transparent_24rem)]" />
      <div className="maison-shell">
        <div className="relative z-10 mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="editorial-label mb-4 text-xs text-gilt/85">
              {t({ en: "SnapLink toolkit", es: "Herramientas SnapLink" })}
            </p>
            <h2 className="max-w-4xl font-serif text-4xl leading-tight text-cream sm:text-6xl">
              {t({
                en: "Every customer path in one premium profile.",
                es: "Todo el recorrido del cliente en un perfil premium."
              })}
            </h2>
          </div>
          <p className="max-w-md leading-7 text-cream/62">
            {t({
              en: "Replace the demo visuals with any business category, then connect each section to the action that matters: booking, calls, reviews, QR/NFC, displays, leads, and analytics.",
              es: "Cambia los ejemplos por cualquier tipo de negocio y conecta cada sección con la acción que más importa: reservas, llamadas, reseñas, QR/NFC, pantallas, leads y analíticas."
            })}
          </p>
        </div>
        <div className="collection-grid relative z-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {toolkitCards.map((card) => (
            <article
              className="collection-card group overflow-hidden rounded-[1.15rem] border border-cream/10 bg-[linear-gradient(180deg,rgba(245,239,226,0.08),rgba(0,0,0,0.72))] shadow-[0_24px_80px_rgba(0,0,0,0.38)] transition duration-500 hover:-translate-y-2 hover:border-gilt/55 hover:shadow-[0_34px_90px_rgba(0,0,0,0.48),0_0_42px_rgba(199,164,91,0.18)]"
              key={card.number}
            >
              <div className="relative aspect-[4/5] overflow-hidden rounded-t-[1.15rem] bg-black">
                <img
                  alt={`${card.title.en} SnapLink preview`}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.045]"
                  src={card.image}
                />
                <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,transparent_45%,rgba(0,0,0,0.72)),linear-gradient(115deg,rgba(255,255,255,0.08),transparent_32%,rgba(199,164,91,0.12))]" />
              </div>
              <div className="min-h-64 p-5">
                <p className="mb-3 text-sm uppercase tracking-[0.18em] text-gilt">{card.number}</p>
                <h3 className="font-serif text-2xl leading-tight text-cream">{t(card.title)}</h3>
                <p className="mt-4 text-sm leading-6 text-cream/64">{t(card.copy)}</p>
              </div>
            </article>
          ))}
        </div>
        <div className="relative z-10 mt-10 grid gap-3 border-y border-gilt/18 py-5 sm:grid-cols-2 lg:grid-cols-4">
          {valueRows.map((item) => (
            <p
              className="text-xs font-semibold uppercase tracking-[0.18em] text-cream/72 sm:border-r sm:border-gilt/18 sm:last:border-r-0"
              key={item.en}
            >
              {t(item)}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
