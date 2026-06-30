"use client";

import { useState } from "react";

type VideoBackgroundProps = {
  src: string;
  className?: string;
};

export default function VideoBackground({ src, className = "" }: VideoBackgroundProps) {
  const [failed, setFailed] = useState(false);

  return (
    <div className={`absolute inset-0 media-fallback ${className}`} aria-hidden="true">
      {!failed ? (
        <video
          className="h-full w-full object-cover opacity-70"
          src={src}
          muted
          playsInline
          autoPlay
          loop
          preload="metadata"
          onError={() => setFailed(true)}
        />
      ) : null}
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(5,5,5,0.85),rgba(5,5,5,0.34),rgba(5,5,5,0.9))]" />
      <div className="absolute inset-x-0 bottom-0 h-52 bg-gradient-to-t from-obsidian to-transparent" />
    </div>
  );
}
