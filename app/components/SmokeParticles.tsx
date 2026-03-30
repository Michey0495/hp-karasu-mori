"use client";

const particles = [
  { left: "10%", bottom: "20%", size: 4, delay: 0, duration: 5 },
  { left: "25%", bottom: "40%", size: 6, delay: 1.2, duration: 6 },
  { left: "40%", bottom: "15%", size: 5, delay: 0.5, duration: 4.5 },
  { left: "55%", bottom: "35%", size: 7, delay: 2, duration: 5.5 },
  { left: "70%", bottom: "25%", size: 4, delay: 0.8, duration: 6.5 },
  { left: "85%", bottom: "45%", size: 5, delay: 1.5, duration: 5 },
  { left: "15%", bottom: "55%", size: 3, delay: 3, duration: 7 },
  { left: "60%", bottom: "10%", size: 6, delay: 2.5, duration: 4.8 },
  { left: "45%", bottom: "50%", size: 4, delay: 1.8, duration: 5.8 },
  { left: "80%", bottom: "30%", size: 5, delay: 0.3, duration: 6.2 },
];

export default function SmokeParticles() {
  return (
    <div className="fixed inset-0 z-[5] pointer-events-none overflow-hidden">
      {particles.map((p, i) => (
        <div
          key={i}
          className="absolute rounded-full"
          style={{
            width: `${p.size}px`,
            height: `${p.size}px`,
            left: p.left,
            bottom: p.bottom,
            background: "rgba(185, 28, 28, 0.1)",
            boxShadow: "0 0 6px rgba(185, 28, 28, 0.08)",
            animation: `${i % 2 === 0 ? "smoke-rise" : "smoke-rise-reverse"} ${p.duration}s ease-in-out infinite`,
            animationDelay: `${p.delay}s`,
          }}
        />
      ))}
    </div>
  );
}
