"use client";

export default function LoadingScreen({ visible }: { visible: boolean }) {
  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center"
      style={{
        background:
          "radial-gradient(ellipse at center, #1A0808 0%, #0A0A0A 70%)",
        animation: visible ? "none" : "loading-fade-out 0.6s ease forwards",
        pointerEvents: visible ? "auto" : "none",
      }}
    >
      {/* Lantern glow */}
      <div
        className="absolute w-32 h-48 rounded-full"
        style={{
          background:
            "radial-gradient(ellipse, rgba(185,28,28,0.3) 0%, transparent 70%)",
          animation: "lantern-pulse 3s ease-in-out infinite",
          top: "30%",
        }}
      />

      <div className="text-center relative z-10">
        {/* Shop name */}
        <h1
          className="text-4xl md:text-6xl mb-6"
          style={{
            fontFamily: "var(--font-mincho)",
            color: "#f5f5f5",
            animation: "text-reveal 2s ease forwards",
            letterSpacing: "0.3em",
          }}
        >
          からす森
        </h1>

        {/* Subtitle */}
        <p
          className="text-sm tracking-[0.3em] opacity-0"
          style={{
            color: "var(--color-kin)",
            animation: "text-reveal 2s ease 0.5s forwards",
            fontFamily: "var(--font-gothic)",
          }}
        >
          秋田の老舗大衆酒場
        </p>
      </div>

      {/* Smoke particles */}
      {[...Array(6)].map((_, i) => (
        <div
          key={i}
          className="absolute rounded-full"
          style={{
            width: `${4 + i * 2}px`,
            height: `${4 + i * 2}px`,
            background: "rgba(185, 28, 28, 0.15)",
            boxShadow: "0 0 8px rgba(185, 28, 28, 0.1)",
            left: `${20 + i * 12}%`,
            bottom: `${30 + (i % 3) * 10}%`,
            animation: `${i % 2 === 0 ? "smoke-rise" : "smoke-rise-reverse"} ${
              4 + i * 0.7
            }s ease-in-out infinite`,
            animationDelay: `${i * 0.8}s`,
          }}
        />
      ))}
    </div>
  );
}
