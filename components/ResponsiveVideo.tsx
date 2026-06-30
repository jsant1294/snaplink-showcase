"use client";

import { useEffect, useRef, useState } from "react";

type ResponsiveVideoProps = {
  autoPlayWhenVisible?: boolean;
  baseName?: string;
  className?: string;
  desktopSrc?: string;
  eager?: boolean;
  loadOnMobile?: boolean;
  mobileOnly?: boolean;
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
  mobileOnly = false,
  mobileSrc,
  poster,
  posterClassName = "",
  preload = "none",
  rootMargin = "320px",
  videoClassName = ""
}: ResponsiveVideoProps) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const retryRef = useRef<number | null>(null);
  const instanceId = useRef(`snaplink-video-${Math.random().toString(36).slice(2)}`);
  const [failed, setFailed] = useState(false);
  const [hasResolvedMedia, setHasResolvedMedia] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isNearViewport, setIsNearViewport] = useState(eager);
  const [isPlayableVisible, setIsPlayableVisible] = useState(eager);
  const [ready, setReady] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  const desktop = desktopSrc ?? `/videos/${baseName}.desktop.mp4`;
  const mobile = mobileSrc ?? `/videos/${baseName}.mobile.mp4`;
  const posterSrc = poster ?? `/videos/${baseName}.poster.webp`;
  const source = isMobile ? mobile : desktop;
  const canLoadVideo =
    hasResolvedMedia &&
    !failed &&
    !reducedMotion &&
    isNearViewport &&
    (!mobileOnly || isMobile) &&
    (!isMobile || loadOnMobile);

  useEffect(() => {
    const mobileQuery = window.matchMedia("(max-width: 767px)");
    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

    const sync = () => {
      setIsMobile(mobileQuery.matches);
      setReducedMotion(motionQuery.matches);
      setHasResolvedMedia(true);
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
    setReady(false);
    setFailed(false);
  }, [source]);

  useEffect(() => {
    const element = wrapperRef.current;
    if (!element || eager) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsNearViewport(entry.isIntersecting);
      },
      { rootMargin, threshold: 0.12 }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [eager, rootMargin]);

  useEffect(() => {
    const element = wrapperRef.current;
    if (!element || eager) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsPlayableVisible(entry.isIntersecting);
      },
      { rootMargin: "0px", threshold: 0.45 }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [eager]);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    if (retryRef.current) {
      window.clearTimeout(retryRef.current);
      retryRef.current = null;
    }

    if (!autoPlayWhenVisible || !isPlayableVisible || reducedMotion) {
      video.pause();
      return;
    }

    const play = video.play();
    if (play) {
      play.catch(() => {
        retryRef.current = window.setTimeout(() => {
          video.play().catch(() => {
            // Keep the poster visible if Safari delays autoplay.
          });
        }, 450);
      });
    }

    return () => {
      if (retryRef.current) {
        window.clearTimeout(retryRef.current);
        retryRef.current = null;
      }
    };
  }, [autoPlayWhenVisible, isPlayableVisible, ready, reducedMotion, source]);

  useEffect(() => {
    const video = videoRef.current;
    if (!video || !isMobile) return;

    const handleOtherVideoPlay = (event: Event) => {
      const activeId = (event as CustomEvent<string>).detail;
      if (activeId !== instanceId.current) {
        video.pause();
      }
    };

    window.addEventListener("snaplink-video-play", handleOtherVideoPlay);
    return () => window.removeEventListener("snaplink-video-play", handleOtherVideoPlay);
  }, [isMobile, source]);

  const announceActiveVideo = () => {
    if (!isMobile) return;
    window.dispatchEvent(new CustomEvent("snaplink-video-play", { detail: instanceId.current }));
  };

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
          autoPlay={autoPlayWhenVisible}
          loop
          muted
          playsInline
          poster={posterSrc}
          preload={preload}
          src={source}
          onCanPlay={() => setReady(true)}
          onError={() => setFailed(true)}
          onLoadedData={() => setReady(true)}
          onPlay={announceActiveVideo}
        />
      ) : null}
    </div>
  );
}
