"use client";

export default function Footer() {
  return (
    <footer
      className="py-12 px-4 text-center"
      style={{
        background: "linear-gradient(to bottom, var(--color-yami), #050505)",
        borderTop: "1px solid rgba(185,28,28,0.1)",
      }}
    >
      <div className="max-w-4xl mx-auto">
        <h3
          className="text-2xl mb-3"
          style={{
            fontFamily: "var(--font-mincho)",
            color: "var(--color-kin)",
            letterSpacing: "0.15em",
          }}
        >
          からす森
        </h3>
        <p
          className="text-sm text-white/50 mb-1"
          style={{ fontFamily: "var(--font-gothic)" }}
        >
          秋田県秋田市中通4-11-3
        </p>
        <p
          className="text-sm text-white/50 mb-1"
          style={{ fontFamily: "var(--font-gothic)" }}
        >
          TEL: 018-835-5906
        </p>
        <p
          className="text-sm text-white/50 mb-6"
          style={{ fontFamily: "var(--font-gothic)" }}
        >
          営業時間: 月〜土 17:00〜21:30 / 定休日: 日曜・祝日
        </p>

        <div className="noren-divider max-w-48 mx-auto mb-6" />

        <p
          className="text-xs text-white/30 mb-2"
          style={{ fontFamily: "var(--font-gothic)" }}
        >
          ※掲載写真はイメージです。実際の料理・店内とは異なります。
        </p>
        <p
          className="text-xs text-white/30 mb-4"
          style={{ fontFamily: "var(--font-gothic)" }}
        >
          本サイトは
          <a
            href="https://ezoai.jp"
            className="underline hover:text-white/50 transition-colors cursor-pointer"
            target="_blank"
            rel="noopener noreferrer"
          >
            EZOAI
          </a>
          によるデモ制作です
        </p>

        <p
          className="text-xs text-white/20"
          style={{ fontFamily: "var(--font-gothic)" }}
        >
          &copy; {new Date().getFullYear()} からす森
        </p>
      </div>
    </footer>
  );
}
