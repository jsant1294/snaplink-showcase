"use client";

import { createContext, ReactNode, useContext, useMemo, useState } from "react";

type Language = "en" | "es";

const LanguageContext = createContext<{
  language: Language;
  setLanguage: (language: Language) => void;
  t: <T,>(copy: { en: T; es: T }) => T;
} | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("en");

  const value = useMemo(
    () => ({
      language,
      setLanguage,
      t: <T,>(copy: { en: T; es: T }) => copy[language]
    }),
    [language]
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error("useLanguage must be used inside LanguageProvider");
  }

  return context;
}

export function LanguageToggle() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="fixed right-5 top-5 z-50 flex overflow-hidden rounded-full border border-gilt/30 bg-black/55 p-1 text-xs font-semibold shadow-gold backdrop-blur-md">
      {(["en", "es"] as const).map((item) => (
        <button
          aria-pressed={language === item}
          className={`min-h-8 px-3 uppercase tracking-[0.14em] transition ${
            language === item ? "bg-gilt text-black" : "text-cream/70 hover:text-gilt"
          }`}
          key={item}
          onClick={() => setLanguage(item)}
          type="button"
        >
          {item}
        </button>
      ))}
    </div>
  );
}
