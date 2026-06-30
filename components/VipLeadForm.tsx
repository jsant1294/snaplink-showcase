"use client";

import { FormEvent, useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLanguage } from "@/components/LanguageProvider";
import { SNAPLINK_CONTACT } from "@/lib/snaplink-config";

gsap.registerPlugin(ScrollTrigger);

const interestOptions = [
  "Build my SnapLink",
  "Add QR/NFC tracking",
  "Custom NFC products",
  "Metal cards",
  "NFC coins and keychains",
  "QR/NFC displays",
  "Create a premium brand page",
  "Add lead capture",
  "Add analytics/reporting",
  "Full SnapLink launch system",
  "Full physical + digital launch system",
  "Physical NFC cards / coins / keychains",
  "Restaurant / menu QR system",
  "Photography / booking system",
  "Contractor / estimate system"
];

const productOptions = [
  "SnapLink profile only",
  "NFC business cards",
  "Metal NFC cards",
  "NFC coins / tap tokens",
  "NFC keychains",
  "Wearables",
  "QR/NFC table signs",
  "Acrylic counter displays",
  "Storefront digital displays",
  "Full SnapLink launch kit"
];

const interestOptionsEs = [
  "Crear mi SnapLink",
  "Agregar seguimiento QR/NFC",
  "Productos NFC personalizados",
  "Tarjetas metálicas",
  "Monedas y llaveros NFC",
  "Displays QR/NFC",
  "Crear página premium de marca",
  "Agregar captación de leads",
  "Agregar analíticas/reportes",
  "Sistema completo SnapLink",
  "Sistema físico + digital completo",
  "Tarjetas / monedas / llaveros NFC",
  "Sistema QR para restaurante / menú",
  "Sistema para fotografía / reservas",
  "Sistema para contratistas / estimados"
];

const productOptionsEs = [
  "Solo perfil SnapLink",
  "Tarjetas NFC",
  "Tarjetas metálicas NFC",
  "Monedas NFC / tap tokens",
  "Llaveros NFC",
  "Wearables",
  "Letreros QR/NFC para mesa",
  "Displays acrílicos de mostrador",
  "Pantallas digitales para negocio",
  "Kit completo SnapLink"
];

const trustItems = ["QR/NFC Ready", "Mobile First", "Lead Capture", "Analytics", "Monthly Reporting"];

function Field({
  children,
  label
}: {
  children: React.ReactNode;
  label: string;
}) {
  return (
    <label className="lead-field grid gap-2 text-sm text-cream/72">
      {label}
      {children}
    </label>
  );
}

const fieldClass =
  "min-h-12 border border-cream/14 bg-black/45 px-4 py-3 text-cream outline-none transition placeholder:text-cream/28 focus:border-gilt focus:bg-black/62 focus:shadow-[0_0_0_3px_rgba(199,164,91,0.12)]";

export default function VipLeadForm() {
  const [submitted, setSubmitted] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const { language, t } = useLanguage();
  const localizedInterestOptions = language === "es" ? interestOptionsEs : interestOptions;
  const localizedProductOptions = language === "es" ? productOptionsEs : productOptions;

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const ctx = gsap.context(() => {
      gsap.from(".lead-copy", {
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

      gsap.from(".lead-form-shell", {
        opacity: 0,
        y: 44,
        scale: 0.98,
        duration: 0.95,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 68%"
        }
      });

      gsap.from(".lead-field", {
        opacity: 0,
        y: 18,
        duration: 0.55,
        stagger: 0.06,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 58%"
        }
      });

      gsap.from(".trust-pill", {
        opacity: 0,
        y: 12,
        duration: 0.5,
        stagger: 0.06,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 52%"
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="vip" ref={sectionRef} className="relative overflow-hidden py-24 sm:py-32">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_22%_26%,rgba(199,164,91,0.14),transparent_28rem),radial-gradient(circle_at_78%_70%,rgba(245,239,226,0.08),transparent_24rem)]" />
      <div className="maison-shell relative z-10 grid gap-12 lg:grid-cols-[0.82fr_1.18fr] lg:items-center">
        <div>
          <p className="lead-copy editorial-label mb-5 text-xs text-gilt/85">
            {t({ en: "BUILD YOUR SNAPLINK", es: "CREA TU SNAPLINK" })}
          </p>
          <h2 className="lead-copy font-serif text-4xl leading-tight text-cream sm:text-6xl">
            {t({
              en: "Turn your next scan into a lead.",
              es: "Convierte tu próximo escaneo en un cliente potencial."
            })}
          </h2>
          <p className="lead-copy mt-7 text-lg leading-9 text-cream/68">
            {t({
              en: "Launch a smart business profile with QR/NFC tracking, booking links, reviews, WhatsApp, lead capture, analytics, physical products, and digital displays.",
              es: "Lanza un perfil inteligente con seguimiento QR/NFC, enlaces de reserva, reseñas, WhatsApp, captación de leads, analíticas, productos físicos y pantallas digitales."
            })}
          </p>
          <p className="lead-copy mt-6 border-l border-gilt/30 pl-5 text-base leading-8 text-cream/60">
            {t({
              en: "Tell us what you want to connect: website, booking, WhatsApp, reviews, QR/NFC, physical cards, smart displays, or all of it.",
              es: "Dinos qué quieres conectar: sitio web, reservas, WhatsApp, reseñas, QR/NFC, tarjetas físicas, pantallas inteligentes o todo el sistema."
            })}
          </p>
        </div>

        <div className="lead-form-shell relative">
          <div className="lead-form-glow absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gilt/18 blur-3xl" />
          <form className="glass-panel relative grid gap-4 border-gilt/30 bg-black/58 p-5 sm:p-8" onSubmit={handleSubmit}>
            <div className="grid gap-4 sm:grid-cols-2">
              <Field label={t({ en: "Name", es: "Nombre" })}>
                <input required className={fieldClass} name="name" />
              </Field>
              <Field label={t({ en: "Email", es: "Correo" })}>
                <input required type="email" className={fieldClass} name="email" />
              </Field>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <Field label={t({ en: "Phone", es: "Teléfono" })}>
                <input className={fieldClass} name="phone" />
              </Field>
              <Field label={t({ en: "Business Name", es: "Nombre del Negocio" })}>
                <input className={fieldClass} name="businessName" />
              </Field>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <Field label={t({ en: "Business Type", es: "Tipo de Negocio" })}>
                <input className={fieldClass} name="businessType" placeholder={t({ en: "Restaurant, salon, contractor...", es: "Restaurante, salón, contratista..." })} />
              </Field>
              <Field label={t({ en: "Interest", es: "Interés" })}>
                <select className={fieldClass} name="interest">
                  {localizedInterestOptions.map((option) => (
                    <option key={option}>{option}</option>
                  ))}
                </select>
              </Field>
            </div>
            <Field label={t({ en: "Message", es: "Mensaje" })}>
              <textarea
                className={`${fieldClass} min-h-32 resize-y`}
                name="message"
                placeholder={t({ en: "Tell us what you want your SnapLink to connect.", es: "Cuéntanos qué quieres conectar con tu SnapLink." })}
              />
            </Field>
            <fieldset className="lead-field border border-cream/14 bg-black/32 p-4">
              <legend className="px-2 text-sm text-cream/72">
                {t({ en: "What products are you interested in?", es: "¿Qué productos te interesan?" })}
              </legend>
              <div className="mt-3 grid gap-3 sm:grid-cols-2">
                {localizedProductOptions.map((option) => (
                  <label className="flex items-start gap-3 text-sm leading-6 text-cream/68" key={option}>
                    <input
                      className="mt-1 h-4 w-4 accent-[#c7a45b]"
                      name="products"
                      type="checkbox"
                      value={option}
                    />
                    <span>{option}</span>
                  </label>
                ))}
              </div>
            </fieldset>
            <button
              className="lead-submit min-h-12 border border-gilt bg-gilt px-7 text-sm font-semibold text-black shadow-gold transition hover:bg-cream hover:shadow-[0_0_34px_rgba(242,210,138,0.36)]"
              type="submit"
            >
              {t({ en: "Build My SnapLink", es: "Crear mi SnapLink" })}
            </button>
            {submitted ? (
              <p className="border border-gilt/35 bg-gilt/10 px-4 py-3 text-sm text-gilt">
                {t({
                  en: "Your SnapLink request was captured. We'll follow up with your launch plan.",
                  es: "Tu solicitud de SnapLink fue recibida. Te contactaremos con tu plan de lanzamiento."
                })}
              </p>
            ) : null}
            <div className="mt-2 flex flex-wrap gap-2 border-t border-gilt/18 pt-5">
              {trustItems.map((item) => (
                <span className="trust-pill border border-cream/12 bg-cream/6 px-3 py-2 text-xs uppercase tracking-[0.14em] text-cream/62" key={item}>
                  {item}
                </span>
              ))}
            </div>
            <div className="lead-field border-t border-gilt/18 pt-5">
              <p className="text-sm leading-7 text-cream/64">
                {t({
                  en: "Prefer to talk first?",
                  es: "¿Prefieres hablar primero?"
                })}{" "}
                {t({ en: "Call or text", es: "Llama o envía texto al" })}{" "}
                <a className="text-gilt transition hover:text-cream" href={SNAPLINK_CONTACT.callHref}>
                  {SNAPLINK_CONTACT.phoneDisplay}
                </a>
                ,{" "}
                {t({ en: "or message us on WhatsApp at", es: "o mándanos WhatsApp al" })}{" "}
                <a
                  className="text-gilt transition hover:text-cream"
                  href={SNAPLINK_CONTACT.whatsappHref}
                  rel="noreferrer"
                  target="_blank"
                >
                  {SNAPLINK_CONTACT.whatsappDisplay}
                </a>
                .
              </p>
              <p className="mt-2 text-xs uppercase tracking-[0.14em] text-gilt/70">
                {t({
                  en: "Multiple ways to reach us. One system to track the action.",
                  es: "Varias formas de contactarnos. Un sistema para medir la acción."
                })}
              </p>
              <div className="mt-4 grid gap-3 sm:grid-cols-3">
                <a
                  className="inline-flex min-h-11 items-center justify-center border border-gilt bg-gilt px-4 text-sm font-semibold text-black transition hover:bg-cream"
                  href={SNAPLINK_CONTACT.callHref}
                >
                  {t({ en: "Call", es: "Llamar" })}
                </a>
                <a
                  className="inline-flex min-h-11 items-center justify-center border border-cream/24 px-4 text-sm font-semibold text-cream transition hover:border-gilt hover:text-gilt"
                  href={SNAPLINK_CONTACT.smsHref}
                >
                  {t({ en: "Text", es: "Texto" })}
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
          </form>
        </div>
      </div>
    </section>
  );
}
