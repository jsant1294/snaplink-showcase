"use client";

import ResponsiveVideo from "@/components/ResponsiveVideo";

type VideoBackgroundProps = {
  src: string;
  className?: string;
};

export default function VideoBackground({ src, className = "" }: VideoBackgroundProps) {
  const baseName = src.split("/").pop()?.replace(/\.mp4$/, "") ?? src;

  return (
    <div className={`absolute inset-0 media-fallback ${className}`} aria-hidden="true">
      <ResponsiveVideo baseName={baseName} className="h-full w-full opacity-70" preload="none" />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(5,5,5,0.85),rgba(5,5,5,0.34),rgba(5,5,5,0.9))]" />
      <div className="absolute inset-x-0 bottom-0 h-52 bg-gradient-to-t from-obsidian to-transparent" />
    </div>
  );
}
