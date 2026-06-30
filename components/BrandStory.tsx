"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import AnimatedSnapLinkCoin from "@/components/AnimatedSnapLinkCoin";

gsap.registerPlugin(ScrollTrigger);

export default function BrandStory() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (
      window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
      window.matchMedia("(max-width: 767px)").matches
    ) {
      return;
    }

    const ctx = gsap.context(() => {
      gsap.from(".story-copy", {
        opacity: 0,
        y: 48,
        duration: 1,
        stagger: 0.16,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%"
        }
      });

      gsap.to(".snaplink-coin-scroll", {
        rotateY: 180,
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
    <section ref={sectionRef} className="relative overflow-hidden py-24 sm:py-32">
      <div className="maison-shell grid items-center gap-12 lg:grid-cols-[0.88fr_1.12fr]">
        <div className="will-change-transform">
          <AnimatedSnapLinkCoin />
        </div>
        <div>
          <p className="story-copy editorial-label mb-5 text-xs text-gilt/85">Heritage in motion</p>
          <h2 className="story-copy font-serif text-4xl leading-tight text-cream sm:text-6xl">
            Crafted with heritage. Designed for today.
          </h2>
          <p className="story-copy mt-7 max-w-2xl text-lg leading-9 text-cream/68">
            JL Maison is the demo brand. SnapLink is the product: a physical-to-digital system that turns NFC coins, QR cards, and tap tags into measurable customer action.
          </p>
        </div>
      </div>
    </section>
  );
}
