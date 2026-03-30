"use client";

import Image from "next/image";

export default function Hero() {
  return (
    <section id="hero" className="relative w-full h-screen overflow-hidden">
      {/* Background image */}
      <Image
        src="https://images.unsplash.com/photo-1554502078-ef0fc409efce?w=1600&h=1000&fit=crop&q=80"
        alt="居酒屋の雰囲気"
        fill
        className="object-cover"
        priority
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Red glow overlay */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at 50% 80%, rgba(185,28,28,0.15) 0%, transparent 60%)",
          animation: "hero-breathe 6s ease-in-out infinite",
        }}
      />

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
        {/* Vertical accent */}
        <div
          className="vertical-text absolute right-4 md:right-12 top-1/3 text-xs tracking-[0.5em] text-white/20"
          style={{ fontFamily: "var(--font-mincho)" }}
        >
          創業五十余年
        </div>

        <p
          className="text-sm md:text-base tracking-[0.4em] mb-6 opacity-0"
          style={{
            color: "var(--color-kin)",
            fontFamily: "var(--font-gothic)",
            animation: "hero-text-emerge 1s ease 0.3s forwards",
          }}
        >
          秋田市中通の老舗大衆酒場
        </p>

        <h1
          className="text-5xl md:text-8xl mb-6 opacity-0"
          style={{
            fontFamily: "var(--font-mincho)",
            letterSpacing: "0.15em",
            textShadow: "0 0 40px rgba(185,28,28,0.3)",
            animation: "hero-text-emerge 1.2s ease 0.6s forwards",
          }}
        >
          からす森
        </h1>

        <div className="noren-divider w-24 md:w-32 mb-6 opacity-0" style={{ animation: "hero-text-emerge 1s ease 1s forwards" }} />

        <p
          className="text-base md:text-lg tracking-wider opacity-0 max-w-md"
          style={{
            fontFamily: "var(--font-gothic)",
            fontWeight: 300,
            lineHeight: 1.8,
            animation: "hero-text-emerge 1s ease 1.2s forwards",
          }}
        >
          炭火の香り、煮込みの湯気。
          <br />
          変わらぬ味で、今宵も一杯。
        </p>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-0"
        style={{ animation: "hero-text-emerge 1s ease 1.8s forwards" }}
      >
        <span
          className="text-xs tracking-[0.3em] text-white/40"
          style={{ fontFamily: "var(--font-gothic)" }}
        >
          SCROLL
        </span>
        <div className="w-px h-8 bg-gradient-to-b from-white/40 to-transparent" />
      </div>
    </section>
  );
}
