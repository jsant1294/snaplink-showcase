"use client";

import { useState } from "react";
import { useLanguage } from "@/components/LanguageProvider";
import { SNAPLINK_CONTACT } from "@/lib/snaplink-config";

const menuItems = [
  { href: SNAPLINK_CONTACT.callHref, label: { en: "Call Now", es: "Llamar Ahora" } },
  { href: SNAPLINK_CONTACT.smsHref, label: { en: "Text Us", es: "Enviar Texto" } },
  { href: SNAPLINK_CONTACT.whatsappHref, label: { en: "WhatsApp", es: "WhatsApp" }, external: true },
  { href: "#vip", label: { en: "Build My SnapLink", es: "Crear mi SnapLink" } },
  { href: "#faq", label: { en: "Ask a Question", es: "Hacer una pregunta" } }
];

export default function FloatingSnapLinkOrb() {
  const { t } = useLanguage();
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end gap-3">
      <div
        className={`grid overflow-hidden rounded-2xl border border-gilt/30 bg-black/72 shadow-gold backdrop-blur-md transition-all duration-300 ${
          open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <nav className="grid min-w-56 gap-1 p-2">
            {menuItems.map((item) => (
              <a
                className="rounded-xl px-4 py-3 text-sm text-cream/72 transition hover:bg-gilt hover:text-black"
                href={item.href}
                key={item.href}
                onClick={() => setOpen(false)}
                rel={item.external ? "noreferrer" : undefined}
                target={item.external ? "_blank" : undefined}
              >
                {t(item.label)}
              </a>
            ))}
          </nav>
        </div>
      </div>
      <button
        aria-expanded={open}
        className="group flex items-center gap-3 rounded-full border border-gilt/38 bg-black/76 p-2 pr-4 shadow-gold backdrop-blur-md transition hover:border-gilt hover:bg-black"
        onClick={() => setOpen((value) => !value)}
        type="button"
      >
        <span className="snaplink-orb-pulse grid h-14 w-14 place-items-center rounded-full border border-gilt/32 bg-black">
          <img alt="SnapLink gold mark" className="h-10 w-10 object-contain" src="/brand/snaplink-mark-gold.png" />
        </span>
        <span className="hidden text-xs font-semibold uppercase tracking-[0.16em] text-gilt sm:block">
          {t({ en: "Need a SnapLink?", es: "¿Necesitas un SnapLink?" })}
        </span>
      </button>
    </div>
  );
}
