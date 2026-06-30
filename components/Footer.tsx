"use client";

import { useLanguage } from "@/components/LanguageProvider";
import { SNAPLINK_CONTACT } from "@/lib/snaplink-config";

const links = ["Website", "SnapLink", "QR/NFC", "Leads", "Analytics"];

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="border-t border-gilt/16 bg-black py-12">
      <div className="maison-shell flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
        <div className="max-w-xl">
          <img
            alt="SnapLink gold logo"
            className="h-auto w-48 object-contain"
            src="/brand/snaplink-logo-gold.png"
          />
          <p className="mt-5 text-xs font-semibold uppercase tracking-[0.22em] text-gilt">SnapLink</p>
          <p className="mt-2 font-serif text-3xl text-cream">
            {t({ en: "Physical. Digital. Trackable.", es: "Físico. Digital. Medible." })}
          </p>
          <p className="mt-3 text-sm leading-7 text-cream/54">
            {t({
              en: "One system. Every touchpoint. Identity in every tap.",
              es: "Un sistema. Cada punto de contacto. Identidad en cada tap."
            })}
          </p>
        </div>
        <div className="grid gap-5">
          <div className="grid gap-2 text-sm text-cream/66">
            <div className="flex flex-wrap gap-x-3 gap-y-2">
              <span>{t({ en: "Call/Text", es: "Llamar/Texto" })}: {SNAPLINK_CONTACT.phoneDisplay}</span>
              <a className="text-gilt transition hover:text-cream" href={SNAPLINK_CONTACT.callHref}>
                {t({ en: "Call", es: "Llamar" })}
              </a>
              <a className="text-gilt transition hover:text-cream" href={SNAPLINK_CONTACT.smsHref}>
                {t({ en: "Text", es: "Texto" })}
              </a>
            </div>
            <a
              className="transition hover:text-gilt"
              href={SNAPLINK_CONTACT.whatsappHref}
              rel="noreferrer"
              target="_blank"
            >
              WhatsApp: {SNAPLINK_CONTACT.whatsappDisplay}
            </a>
          </div>
          <nav className="flex flex-wrap gap-x-5 gap-y-3 text-sm text-cream/62" aria-label="Footer links">
            {links.map((link) => (
              <a className="transition hover:text-gilt" href="#vip" key={link}>
                {link}
              </a>
            ))}
          </nav>
          <p className="text-xs uppercase tracking-[0.16em] text-gilt/68">
            {t({
              en: "JL Maison is a sample client brand. SnapLink is the platform.",
              es: "JL Maison es una marca cliente de ejemplo. SnapLink es la plataforma."
            })}
          </p>
        </div>
      </div>
    </footer>
  );
}
