"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLanguage } from "@/components/LanguageProvider";

gsap.registerPlugin(ScrollTrigger);

const featureChips = [
  "Custom NFC Cards",
  "Metal Business Cards",
  "NFC Coins",
  "Smart Keychains",
  "Wearables",
  "Tap Tags",
  "QR/NFC Table Signs",
  "Acrylic Displays",
  "Branded Tap Products",
  "Logo Branding",
  "Bulk Orders"
];

const products = [
  {
    title: { en: "NFC Business Cards", es: "Tarjetas NFC" },
    copy: "Affordable smart cards customized with your logo and connected to your SnapLink."
  },
  {
    title: { en: "Metal NFC Cards", es: "Tarjetas Metálicas NFC" },
    copy: "Premium metal cards for owners, sales teams, photographers, realtors, contractors, and luxury brands."
  },
  {
    title: { en: "NFC Coins", es: "Monedas NFC" },
    copy: "Tap tokens for counters, packaging, displays, events, restaurants, studios, and customer touchpoints."
  },
  {
    title: { en: "Smart Keychains", es: "Llaveros Inteligentes" },
    copy: "Portable branded keychains that open your SnapLink with one tap."
  },
  {
    title: { en: "Wearables", es: "Wearables" },
    copy: "Wristbands, tags, and wearable tap products for events, staff, gyms, venues, and activations."
  },
  {
    title: { en: "QR/NFC Displays", es: "Displays QR/NFC" },
    copy: "Table signs, acrylic stands, storefront displays, and QR/NFC pieces for real-world customer action."
  }
];

function ProductCard({ copy, title }: { copy: string; title: { en: string; es: string } }) {
  const { t } = useLanguage();

  return (
    <article className="custom-product-card product-shine group min-h-36 overflow-hidden rounded-2xl border border-gilt/18 bg-[linear-gradient(145deg,rgba(245,239,226,0.08),rgba(199,164,91,0.04)_42%,rgba(0,0,0,0.48))] p-5 shadow-[0_18px_55px_rgba(0,0,0,0.3)] transition duration-500 hover:-translate-y-1 hover:border-gilt/42 hover:shadow-gold">
      <p className="text-xs uppercase tracking-[0.18em] text-gilt/76">Custom product</p>
      <h3 className="mt-4 font-serif text-2xl text-cream">{t(title)}</h3>
      <p className="mt-3 text-sm leading-6 text-cream/62">{copy}</p>
    </article>
  );
}

export default function CustomNfcProductsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const { t } = useLanguage();

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const ctx = gsap.context(() => {
      gsap.from(".custom-nfc-copy", {
        opacity: 0,
        y: 34,
        duration: 0.85,
        stagger: 0.12,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 72%"
        }
      });

      gsap.from(".custom-nfc-chip", {
        opacity: 0,
        y: 16,
        duration: 0.55,
        stagger: 0.045,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 60%"
        }
      });

      gsap.from(".custom-product-card", {
        opacity: 0,
        y: 34,
        duration: 0.75,
        stagger: 0.08,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".custom-product-grid",
          start: "top 78%"
        }
      });

      gsap.from(".custom-nfc-image-frame", {
        opacity: 0,
        y: 46,
        scale: 0.98,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 68%"
        }
      });

      gsap.to(imageRef.current, {
        y: -24,
        rotate: 0.5,
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
    <section id="custom-nfc-products" ref={sectionRef} className="relative overflow-hidden bg-black py-16 sm:py-20 xl:min-h-[92vh]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(199,164,91,0.12),transparent_30rem),radial-gradient(circle_at_88%_48%,rgba(245,239,226,0.07),transparent_24rem)]" />
      <div className="relative z-10 mx-auto w-[min(1600px,calc(100%-32px))]">
        <div className="grid items-center gap-10 xl:grid-cols-[0.58fr_1.42fr] xl:gap-14">
          <div>
            <p className="custom-nfc-copy editorial-label mb-5 text-xs text-gilt/85">
              {t({ en: "CUSTOM NFC PRODUCTS", es: "PRODUCTOS NFC PERSONALIZADOS" })}
            </p>
            <h2 className="custom-nfc-copy max-w-[12ch] font-serif text-4xl leading-[0.96] text-cream sm:text-6xl">
              {t({ en: "We make the tap points, not just the link.", es: "Creamos los puntos de contacto, no solo el enlace." })}
            </h2>
            <p className="custom-nfc-copy mt-7 max-w-2xl text-base leading-8 text-cream/68 sm:text-lg">
              {t({
                en: "SnapLink gives your business the digital profile, but we also produce the physical products that bring customers to it. Choose from custom NFC cards, premium metal cards, NFC coins, keychains, wearables, table signs, stickers, acrylic displays, and branded QR/NFC pieces — all customized with your logo and connected to your SnapLink.",
                es: "SnapLink le da a tu negocio el perfil digital, pero también producimos los productos físicos que llevan a tus clientes a ese perfil. Elige tarjetas NFC, tarjetas metálicas premium, monedas NFC, llaveros, wearables, letreros de mesa, stickers, displays acrílicos y piezas QR/NFC personalizadas con tu logo y conectadas a tu SnapLink."
              })}
            </p>
            <p className="custom-nfc-copy mt-6 inline-flex border border-gilt/25 bg-black/36 px-4 py-2 text-xs uppercase tracking-[0.16em] text-gilt/85">
              Manufactured, branded, connected, and trackable
            </p>
            <div className="custom-nfc-copy mt-10 flex flex-col gap-3 sm:flex-row">
              <a
                href="#vip"
                className="inline-flex min-h-12 items-center justify-center border border-gilt bg-gilt px-7 text-sm font-semibold text-black transition hover:bg-cream"
              >
                {t({ en: "Build My SnapLink Kit", es: "Crear mi kit SnapLink" })}
              </a>
              <a
                href="#custom-nfc-product-options"
                className="inline-flex min-h-12 items-center justify-center border border-cream/35 px-7 text-sm font-semibold text-cream transition hover:border-gilt hover:text-gilt"
              >
                {t({ en: "View Product Options", es: "Ver opciones de productos" })}
              </a>
            </div>
            <div className="mt-8 flex max-w-2xl flex-wrap gap-2.5">
              {featureChips.map((chip) => (
                <span
                  className="custom-nfc-chip border border-gilt/18 bg-cream/6 px-3.5 py-2 text-xs uppercase tracking-[0.08em] text-cream/76 shadow-[0_12px_34px_rgba(0,0,0,0.22)]"
                  key={chip}
                >
                  {chip}
                </span>
              ))}
            </div>
          </div>
          <div ref={imageRef} className="xl:-mr-6">
            <div className="custom-nfc-image-frame relative overflow-hidden rounded-[1.75rem] border border-gilt/26 bg-black shadow-[0_34px_120px_rgba(0,0,0,0.5),0_0_80px_rgba(199,164,91,0.13)]">
              <div className="custom-nfc-glow absolute left-1/2 top-1/2 h-[26rem] w-[26rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gilt/18 blur-3xl" />
              <img
                alt="Custom SnapLink NFC products including cards, metal cards, NFC coins, keychains, wearables, and QR/NFC displays."
                className="relative z-10 aspect-[976/630] h-full min-h-[340px] w-full object-cover object-center transition duration-700 hover:scale-[1.02] md:min-h-[500px] xl:min-h-[560px]"
                src="/images/snaplink-custom-nfc-products-showcase.jpg"
              />
              <div className="pointer-events-none absolute inset-0 z-20 bg-[linear-gradient(115deg,rgba(255,255,255,0.08),transparent_24%,transparent_72%,rgba(199,164,91,0.12))]" />
              <div className="pointer-events-none absolute inset-0 z-20 shadow-[inset_0_0_95px_rgba(0,0,0,0.24)]" />
            </div>
          </div>
        </div>

        <div id="custom-nfc-product-options" className="custom-product-grid mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-6">
          {products.map((product) => (
            <ProductCard {...product} key={product.title.en} />
          ))}
        </div>
      </div>
    </section>
  );
}
