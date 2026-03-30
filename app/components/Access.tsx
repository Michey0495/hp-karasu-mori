"use client";

function InfoItem({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex border-b border-white/5 py-3">
      <span
        className="w-28 shrink-0 text-base"
        style={{ color: "var(--color-kin)", fontFamily: "var(--font-gothic)" }}
      >
        {label}
      </span>
      <span
        className="text-base text-white/70"
        style={{ fontFamily: "var(--font-gothic)", lineHeight: 1.6 }}
      >
        {value}
      </span>
    </div>
  );
}

export default function Access() {
  return (
    <section id="access" className="py-24 md:py-32 px-4">
      <div className="max-w-5xl mx-auto">
        <p
          className="reveal text-xs tracking-[0.5em] text-center mb-4"
          style={{ color: "var(--color-kin)", fontFamily: "var(--font-gothic)" }}
        >
          ACCESS
        </p>

        <h2
          className="reveal reveal-delay-1 text-3xl md:text-4xl text-center mb-16"
          style={{
            fontFamily: "var(--font-mincho)",
            letterSpacing: "0.1em",
          }}
        >
          店舗案内
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Info */}
          <div className="reveal reveal-delay-2">
            <InfoItem label="店名" value="からす森" />
            <InfoItem label="住所" value="秋田県秋田市中通4-11-3" />
            <InfoItem label="電話番号" value="018-835-5906" />
            <InfoItem label="営業時間" value="月〜土 17:00〜21:30" />
            <InfoItem label="定休日" value="日曜日・祝日" />
            <InfoItem label="ジャンル" value="居酒屋・もつ焼き・串焼き" />
            <InfoItem label="予算目安" value="¥3,000〜¥4,000" />
            <InfoItem label="アクセス" value="JR秋田駅より徒歩約5分" />

            <div className="mt-8">
              <a
                href="tel:018-835-5906"
                className="inline-block w-full text-center py-4 rounded text-base tracking-wider transition-all duration-200 cursor-pointer"
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

          {/* Map */}
          <div className="reveal reveal-delay-3">
            <div
              className="w-full aspect-square md:aspect-[4/3] rounded overflow-hidden"
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
            <p
              className="text-xs text-white/40 mt-3 text-center"
              style={{ fontFamily: "var(--font-gothic)" }}
            >
              秋田県秋田市中通4-11-3（秋田駅から徒歩約5分）
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
