"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLanguage } from "@/components/LanguageProvider";

gsap.registerPlugin(ScrollTrigger);

const metrics = [
  { label: { en: "Views", es: "Vistas" }, value: 47, width: "82%" },
  { label: { en: "Clicks", es: "Clics" }, value: 7, width: "58%" },
  { label: { en: "NFC Taps", es: "Taps NFC" }, value: 5, width: "48%" },
  { label: { en: "Booking Clicks", es: "Clics de Reserva" }, value: 2, width: "34%" },
  { label: { en: "Leads Captured", es: "Leads Capturados" }, value: 0, width: "12%" }
];

const categories = [
  "Profile Views",
  "QR Scans",
  "NFC Taps",
  "Link Clicks",
  "Booking Interest",
  "Review Clicks",
  "Lead Submissions",
  "Campaign Sources"
];

function DashboardVisual() {
  const [imageFailed, setImageFailed] = useState(false);
  const [videoFailed, setVideoFailed] = useState(false);

  return (
    <div className="analytics-dashboard relative overflow-hidden border border-gilt/18 bg-black shadow-velvet">
      {!videoFailed ? (
        <video
          className="absolute inset-0 h-full w-full object-cover opacity-20 blur-[1px]"
          src="/videos/analytics-loop.mp4"
          muted
          playsInline
          autoPlay
          loop
          preload="metadata"
          onError={() => setVideoFailed(true)}
        />
      ) : null}
      <div className="analytics-chart-glow absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gilt/20 blur-3xl" />
      <div className="relative p-4 sm:p-5">
        <div className="overflow-hidden border border-gilt/24 bg-black/70">
          {!imageFailed ? (
            <img
              alt="SnapLink analytics dashboard preview"
              className="h-full w-full object-cover"
              src="/images/snaplink-analytics-preview.jpg"
              onError={() => setImageFailed(true)}
            />
          ) : (
            <div className="grid min-h-[340px] gap-4 p-6">
              <div>
                <p className="editorial-label text-[10px] text-gilt/80">SnapLink Analytics</p>
                <h3 className="mt-3 font-serif text-4xl text-cream">Campaign Performance</h3>
              </div>
              <div className="grid gap-3">
                {metrics.slice(0, 4).map((metric) => (
                  <div className="border border-gilt/18 bg-cream/6 p-4" key={metric.label.en}>
                    <div className="mb-3 flex items-center justify-between">
                      <span className="text-sm text-cream/70">{metric.label.en}</span>
                      <span className="font-serif text-3xl text-gilt">{metric.value}</span>
                    </div>
                    <div className="h-1.5 bg-cream/10">
                      <div className="h-full bg-gilt" style={{ width: metric.width }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default function AnalyticsProof() {
  const sectionRef = useRef<HTMLElement>(null);
  const { t } = useLanguage();

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const ctx = gsap.context(() => {
      gsap.from(".analytics-dashboard", {
        opacity: 0,
        y: 44,
        scale: 0.97,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%"
        }
      });

      gsap.from(".analytics-card", {
        opacity: 0,
        y: 32,
        scale: 0.96,
        stagger: 0.1,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 66%"
        }
      });

      gsap.from(".analytics-category", {
        opacity: 0,
        y: 16,
        stagger: 0.06,
        duration: 0.55,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 56%"
        }
      });

      gsap.fromTo(
        ".metric-value",
        { textContent: 0 },
        {
          textContent: (_index: number, target: Element) => target.getAttribute("data-value") ?? "0",
          duration: 1.4,
          ease: "power2.out",
          snap: { textContent: 1 },
          stagger: 0.08,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 62%",
            once: true
          }
        }
      );

      gsap.from(".metric-progress", {
        scaleX: 0,
        transformOrigin: "left center",
        duration: 1.2,
        stagger: 0.08,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 62%"
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative overflow-hidden bg-black py-24 text-cream sm:py-32">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_82%_18%,rgba(199,164,91,0.14),transparent_28rem),radial-gradient(circle_at_18%_82%,rgba(245,239,226,0.07),transparent_24rem)]" />
      <div className="maison-shell relative z-10">
        <div className="grid items-end gap-10 lg:grid-cols-[0.98fr_1.02fr]">
          <div>
            <p className="editorial-label mb-5 text-xs text-gilt/85">
              {t({ en: "ANALYTICS & LEADS", es: "ANALÍTICAS Y LEADS" })}
            </p>
            <h2 className="max-w-4xl font-serif text-4xl leading-tight text-cream sm:text-6xl">
              {t({ en: "You no longer guess what works. You see it.", es: "Ya no adivinas qué funciona. Lo puedes ver." })}
            </h2>
            <p className="mt-7 max-w-2xl text-lg leading-9 text-cream/68">
              {t({
                en: "SnapLink tracks the full customer journey — from scan to tap to click to lead — so every QR card, NFC tag, flyer, review link, and campaign becomes measurable.",
                es: "SnapLink mide el recorrido completo del cliente — desde el escaneo hasta el tap, clic y lead — para que cada tarjeta QR, etiqueta NFC, volante, enlace de reseñas y campaña sea medible."
              })}
            </p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <a
                href="#vip"
                className="inline-flex min-h-12 items-center justify-center border border-gilt bg-gilt px-7 text-sm font-semibold text-black transition hover:bg-cream"
              >
                {t({ en: "Generate Monthly Report", es: "Generar reporte mensual" })}
              </a>
              <a
                href="#collection"
                className="inline-flex min-h-12 items-center justify-center border border-cream/35 px-7 text-sm font-semibold text-cream transition hover:border-gilt hover:text-gilt"
              >
                {t({ en: "View Analytics Demo", es: "Ver demo de analíticas" })}
              </a>
            </div>
          </div>
          <p className="border-l border-gilt/25 pl-5 text-sm leading-7 text-cream/62">
            Every QR code, NFC card, product tag, flyer, and social link can have its own source code, so you know what is actually driving action.
          </p>
        </div>

        <div className="mt-14 grid items-start gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <DashboardVisual />
          <div className="grid gap-4">
            {metrics.map((metric) => (
              <div className="analytics-card glass-panel p-5" key={metric.label.en}>
                <div className="flex items-end justify-between gap-5">
                  <div>
                    <div className="font-serif text-5xl leading-none text-gilt">
                      <span className="metric-value" data-value={metric.value}>
                        {metric.value}
                      </span>
                    </div>
                <div className="mt-2 text-xs uppercase tracking-[0.18em] text-cream/52">{t(metric.label)}</div>
                  </div>
                  <div className="h-10 w-24 border-b border-l border-gilt/18">
                    <div className="analytics-line h-full w-full" />
                  </div>
                </div>
                <div className="mt-5 h-1.5 overflow-hidden bg-cream/10">
                  <div className="metric-progress h-full bg-gilt" style={{ width: metric.width }} />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((category) => (
            <div className="analytics-category border border-gilt/16 bg-cream/5 px-4 py-3 text-sm text-cream/72" key={category}>
              {category}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
