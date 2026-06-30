"use client";

import { useState } from "react";
import { useLanguage } from "@/components/LanguageProvider";
import { SNAPLINK_CONTACT } from "@/lib/snaplink-config";

const faqItems = [
  {
    q: { en: "What is SnapLink?", es: "¿Qué es SnapLink?" },
    a: {
      en: "SnapLink is a smart business profile that connects your website, booking links, reviews, WhatsApp, QR codes, NFC products, lead capture, and analytics in one place.",
      es: "SnapLink es un perfil inteligente para negocios que conecta tu sitio web, reservas, reseñas, WhatsApp, códigos QR, productos NFC, captación de leads y analíticas en un solo lugar."
    }
  },
  {
    q: { en: "Do you only make the digital profile?", es: "¿Solo hacen el perfil digital?" },
    a: {
      en: "No. We also produce physical NFC and QR products including cards, metal cards, NFC coins, keychains, wearables, table signs, acrylic displays, and storefront display solutions.",
      es: "No. También producimos productos físicos con NFC y QR, incluyendo tarjetas, tarjetas metálicas, monedas NFC, llaveros, wearables, letreros de mesa, displays acrílicos y soluciones de pantallas para negocios."
    }
  },
  {
    q: { en: "Can you customize products with my logo?", es: "¿Pueden personalizar productos con mi logo?" },
    a: {
      en: "Yes. We can create branded NFC cards, metal cards, coins, keychains, signs, wearables, and displays using your business logo and brand colors.",
      es: "Sí. Podemos crear tarjetas NFC, tarjetas metálicas, monedas, llaveros, letreros, wearables y displays con el logo y colores de tu negocio."
    }
  },
  {
    q: { en: "What happens when someone taps or scans?", es: "¿Qué pasa cuando alguien toca o escanea?" },
    a: {
      en: "They open your SnapLink profile, where they can book, call, message, leave a review, visit your website, save your contact, join an offer, or submit a lead form.",
      es: "Se abre tu perfil SnapLink, donde el cliente puede reservar, llamar, enviar mensaje, dejar reseña, visitar tu sitio web, guardar tu contacto, ver una oferta o llenar un formulario."
    }
  },
  {
    q: { en: "Can I track QR scans and NFC taps?", es: "¿Puedo medir escaneos QR y taps NFC?" },
    a: {
      en: "Yes. SnapLink can track views, clicks, QR scans, NFC taps, booking interest, review clicks, and lead submissions.",
      es: "Sí. SnapLink puede medir vistas, clics, escaneos QR, taps NFC, interés en reservas, clics de reseñas y leads recibidos."
    }
  },
  {
    q: { en: "Can SnapLink work for restaurants?", es: "¿SnapLink funciona para restaurantes?" },
    a: {
      en: "Yes. Restaurants can use SnapLink for QR menus, online ordering links, Google reviews, specials, table signs, NFC cards, and digital TV menu boards.",
      es: "Sí. Los restaurantes pueden usar SnapLink para menús QR, enlaces de pedidos, reseñas de Google, especiales, letreros de mesa, tarjetas NFC y pantallas digitales de menú."
    }
  },
  {
    q: {
      en: "Can SnapLink work for photographers, contractors, salons, gyms, or realtors?",
      es: "¿Funciona para fotógrafos, contratistas, salones, gimnasios o realtors?"
    },
    a: {
      en: "Yes. SnapLink is built for any local business that needs a simple way to connect customers to actions and measure results.",
      es: "Sí. SnapLink funciona para cualquier negocio local que necesita conectar clientes con acciones y medir resultados."
    }
  },
  {
    q: { en: "Do you offer Spanish support?", es: "¿Ofrecen soporte en español?" },
    a: {
      en: "Yes. SnapLink pages can be bilingual in English and Spanish.",
      es: "Sí. Las páginas SnapLink pueden ser bilingües en inglés y español."
    }
  },
  {
    q: {
      en: "Can customers call, text, or WhatsApp from SnapLink?",
      es: "¿Los clientes pueden llamar, enviar texto o WhatsApp desde SnapLink?"
    },
    a: {
      en: "Yes. SnapLink can include direct call, SMS, WhatsApp, booking, review, and lead form buttons so customers can reach the business immediately.",
      es: "Sí. SnapLink puede incluir botones directos para llamada, SMS, WhatsApp, reservas, reseñas y formularios para que los clientes se comuniquen de inmediato."
    }
  }
];

export default function FaqSection() {
  const { t } = useLanguage();
  const [open, setOpen] = useState(0);

  return (
    <section id="faq" className="relative overflow-hidden bg-black py-20 text-cream sm:py-24">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_12%_20%,rgba(199,164,91,0.12),transparent_26rem),radial-gradient(circle_at_84%_80%,rgba(245,239,226,0.06),transparent_24rem)]" />
      <div className="maison-shell relative z-10">
        <div className="mb-10 max-w-3xl">
          <p className="editorial-label mb-4 text-xs text-gilt/85">FAQ</p>
          <h2 className="font-serif text-4xl leading-tight sm:text-6xl">
            {t({ en: "Frequently Asked Questions", es: "Preguntas Frecuentes" })}
          </h2>
          <p className="mt-5 text-lg leading-8 text-cream/64">
            {t({
              en: "Quick answers about SnapLink, custom NFC products, QR displays, digital profiles, and analytics.",
              es: "Respuestas rápidas sobre SnapLink, productos NFC personalizados, displays QR, perfiles digitales y analíticas."
            })}
          </p>
        </div>
        <div className="grid gap-4 lg:grid-cols-2">
          {faqItems.map((item, index) => {
            const active = open === index;

            return (
              <article
                className={`overflow-hidden border bg-cream/5 transition ${
                  active ? "border-gilt/55 shadow-gold" : "border-cream/12 hover:border-gilt/30"
                }`}
                key={item.q.en}
              >
                <button
                  className="flex w-full items-center justify-between gap-5 px-5 py-5 text-left"
                  onClick={() => setOpen(active ? -1 : index)}
                  type="button"
                >
                  <span className="font-serif text-xl text-cream">{t(item.q)}</span>
                  <span className="text-2xl text-gilt">{active ? "−" : "+"}</span>
                </button>
                <div
                  className={`grid transition-all duration-300 ${active ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}
                >
                  <div className="overflow-hidden">
                    <p className="px-5 pb-5 text-sm leading-7 text-cream/64">
                      {t(item.a)}
                      {item.q.en.includes("call, text") ? (
                        <>
                          {" "}
                          <a className="text-gilt transition hover:text-cream" href={SNAPLINK_CONTACT.callHref}>
                            {SNAPLINK_CONTACT.phoneDisplay}
                          </a>
                          {" / "}
                          <a
                            className="text-gilt transition hover:text-cream"
                            href={SNAPLINK_CONTACT.whatsappHref}
                            rel="noreferrer"
                            target="_blank"
                          >
                            WhatsApp {SNAPLINK_CONTACT.whatsappDisplay}
                          </a>
                          .
                        </>
                      ) : null}
                    </p>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
