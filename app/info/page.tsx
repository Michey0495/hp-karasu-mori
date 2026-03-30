"use client";

import { useEffect, useRef, useCallback } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

function InfoRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex flex-col sm:flex-row border-b border-white/5 py-4">
      <span
        className="w-36 shrink-0 text-sm mb-1 sm:mb-0"
        style={{ color: "var(--color-kin)", fontFamily: "var(--font-gothic)" }}
      >
        {label}
      </span>
      <span
        className="text-sm text-white/70"
        style={{ fontFamily: "var(--font-gothic)", lineHeight: 1.8 }}
      >
        {value}
      </span>
    </div>
  );
}

export default function InfoPage() {
  const mainRef = useRef<HTMLDivElement>(null);

  const observerCallback = useCallback(
    (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) entry.target.classList.add("visible");
      });
    },
    []
  );

  useEffect(() => {
    const observer = new IntersectionObserver(observerCallback, {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    });
    const reveals = mainRef.current?.querySelectorAll(".reveal");
    reveals?.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [observerCallback]);

  return (
    <div ref={mainRef}>
      <Header />

      {/* Hero banner */}
      <section className="relative pt-32 pb-20 px-4 text-center">
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse at 50% 0%, rgba(185,28,28,0.08) 0%, transparent 60%)",
          }}
        />
        <p
          className="text-xs tracking-[0.5em] mb-4 relative z-10"
          style={{ color: "var(--color-kin)", fontFamily: "var(--font-gothic)" }}
        >
          INFORMATION
        </p>
        <h1
          className="text-4xl md:text-5xl relative z-10"
          style={{
            fontFamily: "var(--font-mincho)",
            letterSpacing: "0.15em",
          }}
        >
          店舗情報
        </h1>
      </section>

      {/* Info content */}
      <section className="pb-24 px-4">
        <div className="max-w-4xl mx-auto">
          <div
            className="reveal p-6 md:p-10 rounded"
            style={{
              background: "rgba(255,255,255,0.02)",
              border: "1px solid rgba(255,255,255,0.05)",
            }}
          >
            <InfoRow label="店名" value="からす森" />
            <InfoRow label="ジャンル" value="居酒屋・もつ焼き・串焼き" />
            <InfoRow label="住所" value="秋田県秋田市中通4-11-3" />
            <InfoRow label="電話番号" value="018-835-5906" />
            <InfoRow label="営業時間" value="月曜〜土曜 17:00〜21:30" />
            <InfoRow label="定休日" value="日曜日・祝日" />
            <InfoRow label="予算目安" value="¥3,000〜¥4,000" />
            <InfoRow
              label="アクセス"
              value="JR秋田駅西口より徒歩約5分。秋田市民市場近く。"
            />
          </div>

          {/* Map */}
          <div className="reveal reveal-delay-2 mt-12">
            <h2
              className="text-xl mb-6 text-center"
              style={{
                fontFamily: "var(--font-mincho)",
                color: "var(--color-kin)",
                letterSpacing: "0.1em",
              }}
            >
              アクセスマップ
            </h2>
            <div
              className="w-full aspect-video rounded overflow-hidden"
              style={{ border: "1px solid rgba(185,28,28,0.2)" }}
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3107.5!2d140.1237!3d39.7186!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2z44GL44KJ44GZ5qOu!5e0!3m2!1sja!2sjp!4v1"
                width="100%"
                height="100%"
                style={{ border: 0, filter: "grayscale(0.3) contrast(1.1)" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="からす森の地図"
              />
            </div>
            <p
              className="text-xs text-white/40 mt-3 text-center"
              style={{ fontFamily: "var(--font-gothic)" }}
            >
              秋田県秋田市中通4-11-3
            </p>
          </div>

          {/* CTA */}
          <div className="reveal reveal-delay-3 mt-12 text-center">
            <a
              href="tel:018-835-5906"
              className="inline-block px-12 py-4 rounded text-base tracking-wider transition-all duration-200 cursor-pointer"
              style={{
                background: "var(--color-akachochin)",
                color: "white",
                fontFamily: "var(--font-gothic)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "var(--color-akachochin-bright)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "var(--color-akachochin)";
              }}
            >
              電話で予約する: 018-835-5906
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
