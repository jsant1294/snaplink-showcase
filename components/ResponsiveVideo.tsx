"use client";

import { useEffect, useRef, useState } from "react";

type ResponsiveVideoProps = {
  autoPlayWhenVisible?: boolean;
  baseName?: string;
  className?: string;
  desktopSrc?: string;
  eager?: boolean;
  loadOnMobile?: boolean;
  mobileSrc?: string;
  poster?: string;
  posterClassName?: string;
  preload?: "none" | "metadata" | "auto";
  rootMargin?: string;
  videoClassName?: string;
};

export default function ResponsiveVideo({
  autoPlayWhenVisible = true,
  baseName,
  className = "",
  desktopSrc,
  eager = false,
  loadOnMobile = true,
  mobileSrc,
  poster,
  posterClassName = "",
  preload = "none",
  rootMargin = "320px",
  videoClassName = ""
}: ResponsiveVideoProps) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [failed, setFailed] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isVisible, setIsVisible] = useState(eager);
  const [ready, setReady] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  const desktop = desktopSrc ?? `/videos/${baseName}.desktop.mp4`;
  const mobile = mobileSrc ?? `/videos/${baseName}.mobile.mp4`;
  const posterSrc = poster ?? `/videos/${baseName}.poster.webp`;
  const source = isMobile ? mobile : desktop;
  const canLoadVideo = !failed && !reducedMotion && isVisible && (!isMobile || loadOnMobile);

  useEffect(() => {
    const mobileQuery = window.matchMedia("(max-width: 767px)");
    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

    const sync = () => {
      setIsMobile(mobileQuery.matches);
      setReducedMotion(motionQuery.matches);
    };

    sync();
    mobileQuery.addEventListener("change", sync);
    motionQuery.addEventListener("change", sync);

    return () => {
      mobileQuery.removeEventListener("change", sync);
      motionQuery.removeEventListener("change", sync);
    };
  }, []);

  useEffect(() => {
    const element = wrapperRef.current;
    if (!element || eager) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { rootMargin, threshold: 0.12 }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [eager, rootMargin]);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    if (!autoPlayWhenVisible || !isVisible || reducedMotion) {
      video.pause();
      return;
    }

    const play = video.play();
    if (play) {
      play.catch(() => {
        setFailed(true);
      });
    }
  }, [autoPlayWhenVisible, isVisible, ready, reducedMotion, source]);

  return (
    <div ref={wrapperRef} className={`relative overflow-hidden ${className}`}>
      <img
        alt=""
        aria-hidden="true"
        className={`absolute inset-0 h-full w-full object-cover ${posterClassName}`}
        decoding={eager ? "sync" : "async"}
        fetchPriority={eager ? "high" : "auto"}
        loading={eager ? "eager" : "lazy"}
        src={posterSrc}
      />
      {canLoadVideo ? (
        <video
          ref={videoRef}
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${
            ready ? "opacity-100" : "opacity-0"
          } ${videoClassName}`}
          key={source}
          loop
          muted
          playsInline
          poster={posterSrc}
          preload={preload}
          src={source}
          onCanPlay={() => setReady(true)}
          onError={() => setFailed(true)}
          onLoadedData={() => setReady(true)}
        />
      ) : null}
    </div>
  );
}
