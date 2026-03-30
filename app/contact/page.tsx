"use client";

import { useEffect, useRef, useCallback } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function ContactPage() {
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
          CONTACT
        </p>
        <h1
          className="text-4xl md:text-5xl relative z-10"
          style={{
            fontFamily: "var(--font-mincho)",
            letterSpacing: "0.15em",
          }}
        >
          お問い合わせ
        </h1>
      </section>

      {/* Contact content */}
      <section className="pb-24 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <p
            className="reveal text-base text-white/70 mb-12"
            style={{ fontFamily: "var(--font-gothic)", lineHeight: 2 }}
          >
            ご予約・お問い合わせはお電話にて承っております。
            <br />
            お気軽にお電話ください。
          </p>

          {/* Phone CTA */}
          <div
            className="reveal reveal-delay-1 p-8 md:p-12 rounded mb-12"
            style={{
              background: "rgba(255,255,255,0.02)",
              border: "1px solid rgba(185,28,28,0.15)",
            }}
          >
            <p
              className="text-sm tracking-wider mb-4"
              style={{
                color: "var(--color-kin)",
                fontFamily: "var(--font-gothic)",
              }}
            >
              お電話でのお問い合わせ
            </p>

            <a
              href="tel:018-835-5906"
              className="inline-block text-4xl md:text-5xl mb-4 transition-colors duration-200 cursor-pointer"
              style={{
                fontFamily: "var(--font-mincho)",
                color: "var(--color-akachochin-bright)",
                letterSpacing: "0.05em",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = "var(--color-akachochin-glow)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = "var(--color-akachochin-bright)";
              }}
            >
              018-835-5906
            </a>

            <p
              className="text-sm text-white/50"
              style={{ fontFamily: "var(--font-gothic)" }}
            >
              受付時間: 月〜土 17:00〜21:30
            </p>

            <div className="mt-6">
              <a
                href="tel:018-835-5906"
                className="inline-block px-12 py-4 rounded text-base tracking-wider transition-all duration-200 cursor-pointer md:hidden"
                style={{
                  background: "var(--color-akachochin)",
                  color: "white",
                  fontFamily: "var(--font-gothic)",
                }}
              >
                タップして電話する
              </a>
            </div>
          </div>

          {/* Access info */}
          <div className="reveal reveal-delay-2">
            <h2
              className="text-xl mb-6"
              style={{
                fontFamily: "var(--font-mincho)",
                color: "var(--color-kin)",
                letterSpacing: "0.1em",
              }}
            >
              アクセス
            </h2>

            <div
              className="p-6 rounded mb-6"
              style={{
                background: "rgba(255,255,255,0.02)",
                border: "1px solid rgba(255,255,255,0.05)",
              }}
            >
              <p
                className="text-base text-white/70 mb-2"
                style={{ fontFamily: "var(--font-gothic)", lineHeight: 1.8 }}
              >
                秋田県秋田市中通4-11-3
              </p>
              <p
                className="text-sm text-white/50"
                style={{ fontFamily: "var(--font-gothic)" }}
              >
                JR秋田駅西口より徒歩約5分 / 秋田市民市場近く
              </p>
            </div>

            {/* Map */}
            <div
              className="w-full aspect-video rounded overflow-hidden"
              style={{ border: "1px solid rgba(185,28,28,0.2)" }}
            >
              <iframe
                src="https://www.google.com/maps?q=秋田県秋田市中通4-11-3+からす森&output=embed&hl=ja"
                width="100%"
                height="100%"
                style={{ border: 0, filter: "grayscale(0.3) contrast(1.1)" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="からす森の地図"
              />
            </div>
          </div>

          {/* Business hours */}
          <div className="reveal reveal-delay-3 mt-12">
            <div
              className="p-6 rounded"
              style={{
                background: "rgba(255,255,255,0.02)",
                border: "1px solid rgba(255,255,255,0.05)",
              }}
            >
              <p
                className="text-sm mb-2"
                style={{
                  color: "var(--color-kin)",
                  fontFamily: "var(--font-gothic)",
                }}
              >
                営業時間
              </p>
              <p
                className="text-base text-white/70"
                style={{ fontFamily: "var(--font-gothic)" }}
              >
                月曜〜土曜 17:00〜21:30
              </p>
              <p
                className="text-sm text-white/50 mt-2"
                style={{ fontFamily: "var(--font-gothic)" }}
              >
                定休日: 日曜日・祝日
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
