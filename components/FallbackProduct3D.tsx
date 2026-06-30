"use client";

type FallbackProduct3DProps = {
  variant?: "bag" | "medallion" | "scarf";
  className?: string;
};

export default function FallbackProduct3D({ variant = "bag", className = "" }: FallbackProduct3DProps) {
  const isMedallion = variant === "medallion";
  const isScarf = variant === "scarf";

  return (
    <div
      className={`relative mx-auto flex aspect-square w-full max-w-[320px] items-center justify-center [perspective:900px] ${className}`}
      aria-label="Luxury product placeholder"
    >
      <div
        className={`product-shine relative grid place-items-center border border-gilt/35 bg-gradient-to-br from-cream/18 via-champagne/14 to-black shadow-gold ${
          isMedallion
            ? "h-[70%] w-[70%] rounded-full"
            : isScarf
              ? "h-[58%] w-[86%] rounded-[26px] [transform:rotateX(58deg)_rotateZ(-14deg)]"
              : "h-[78%] w-[74%] rounded-[34px] [transform:rotateY(-18deg)_rotateX(10deg)]"
        }`}
      >
        {!isMedallion && !isScarf ? (
          <>
            <div className="absolute -top-8 h-20 w-32 rounded-t-full border-x border-t border-gilt/40" />
            <div className="absolute top-7 h-2 w-24 rounded-full bg-gilt/35" />
          </>
        ) : null}
        <img
          alt="SnapLink gold mark"
          className="h-24 w-24 rounded-full border border-gilt/55 bg-black/45 object-contain p-3 shadow-gold"
          src="/brand/snaplink-mark-gold.png"
        />
      </div>
    </div>
  );
}
