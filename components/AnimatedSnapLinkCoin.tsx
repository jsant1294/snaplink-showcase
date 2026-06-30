"use client";

export default function AnimatedSnapLinkCoin() {
  return (
    <div
      className="snaplink-coin-wrap relative mx-auto grid aspect-square w-full max-w-[390px] place-items-center [perspective:1200px]"
      aria-label="Animated physical SnapLink NFC tap token"
    >
      <div className="snaplink-coin-glow absolute left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gilt/18 blur-3xl" />
      <div className="snaplink-coin-scroll relative aspect-square w-[86%]">
        <div className="snaplink-coin-idle absolute inset-0">
          <div className="snaplink-coin relative h-full w-full">
            <div className="snaplink-coin-rim absolute inset-[7%] rounded-full" />
            <img
              alt="Front of a premium SnapLink NFC coin for JL Maison."
              className="snaplink-coin-face snaplink-coin-front"
              src="/images/coin-front.png"
            />
            <img
              alt="Back of a premium SnapLink NFC coin with QR code, NFC tap symbol, and SnapLink branding."
              className="snaplink-coin-face snaplink-coin-back"
              src="/images/coin-back.png"
            />
            <div className="snaplink-coin-shine absolute inset-[8%] rounded-full" />
          </div>
        </div>
      </div>
      <div className="snaplink-marble-reflection absolute bottom-[8%] h-16 w-72 rounded-full bg-black/70 blur-xl" />
    </div>
  );
}
