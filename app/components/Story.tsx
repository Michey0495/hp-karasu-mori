"use client";

export default function Story() {
  return (
    <section id="story" className="relative py-24 md:py-32 px-4">
      <div className="max-w-3xl mx-auto text-center">
        <p
          className="reveal text-xs tracking-[0.5em] mb-4"
          style={{ color: "var(--color-kin)", fontFamily: "var(--font-gothic)" }}
        >
          ABOUT
        </p>

        <h2
          className="reveal reveal-delay-1 text-3xl md:text-4xl mb-12"
          style={{
            fontFamily: "var(--font-mincho)",
            letterSpacing: "0.1em",
          }}
        >
          半世紀、変わらぬ灯り
        </h2>

        <div className="space-y-8 text-white/70" style={{ fontFamily: "var(--font-gothic)", lineHeight: 2 }}>
          <p className="reveal reveal-delay-2 text-base md:text-lg">
            秋田市中通、秋田駅からほど近い路地裏。
            <br />
            「からす森」は、創業から五十年以上この地で暖簾を掲げ続ける大衆酒場です。
          </p>

          <p className="reveal reveal-delay-3 text-base md:text-lg">
            備長炭でじっくりと焼き上げる
            <span
              className="inline-block px-2 mx-1"
              style={{
                background: "rgba(185, 28, 28, 0.15)",
                color: "var(--color-akachochin-bright)",
              }}
            >
              もつ焼き
            </span>
            、秘伝のタレで煮込んだ
            <span
              className="inline-block px-2 mx-1"
              style={{
                background: "rgba(185, 28, 28, 0.15)",
                color: "var(--color-akachochin-bright)",
              }}
            >
              ホルモン煮込み
            </span>
            。
            <br />
            何十年と変わらぬ味が、今日も常連たちの舌を唸らせます。
          </p>

          <p className="reveal reveal-delay-4 text-base md:text-lg">
            気取らず、飾らず。
            <br />
            仕事帰りにふらりと暖簾をくぐれば、
            <br />
            炭火の香りと煮込みの湯気が迎えてくれる。
            <br />
            そんな、秋田の夜にはなくてはならない一軒です。
          </p>
        </div>

        {/* Decorative element */}
        <div className="reveal reveal-delay-5 mt-16 flex items-center justify-center gap-4">
          <div className="noren-divider flex-1 max-w-16" />
          <div
            className="w-2 h-2 rounded-full"
            style={{ background: "var(--color-akachochin)", opacity: 0.5 }}
          />
          <div className="noren-divider flex-1 max-w-16" />
        </div>
      </div>
    </section>
  );
}
