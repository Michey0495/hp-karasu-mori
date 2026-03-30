"use client";

import Image from "next/image";

const menuCategories = [
  {
    title: "もつ焼き",
    titleEn: "MOTSU-YAKI",
    items: ["カシラ", "ハツ", "レバー", "シロ", "タン", "ナンコツ"],
    description: "備長炭でじっくり焼き上げる、からす森の看板。塩またはタレでどうぞ。",
  },
  {
    title: "焼き鳥",
    titleEn: "YAKITORI",
    items: ["もも", "ねぎま", "つくね", "皮", "ぼんじり", "手羽先"],
    description: "一本一本丁寧に串打ち。炭火の香ばしさが食欲をそそります。",
  },
  {
    title: "煮込み・一品",
    titleEn: "NIKOMI & IPPIN",
    items: [
      "ホルモン煮込み（豆腐あり/なし）",
      "もつ煮",
      "冷やしトマト",
      "枝豆",
      "漬物盛り合わせ",
    ],
    description: "秘伝のタレで仕込む煮込みは、常連に最も愛される逸品。",
  },
  {
    title: "お得なセット",
    titleEn: "VALUE SET",
    items: ["得々セット（もつ焼き盛り合わせ+ドリンク）"],
    description: "初めての方にもおすすめ。からす森の味を一度に堪能できます。",
  },
];

const images = [
  {
    src: "https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?w=600&h=400&fit=crop&q=80",
    alt: "串焼きイメージ",
  },
  {
    src: "https://images.unsplash.com/photo-1504544750208-dc0358e63f7f?w=600&h=400&fit=crop&q=80",
    alt: "炭火焼きイメージ",
  },
];

export default function MenuHighlight() {
  return (
    <section id="menu" className="noren-bg py-24 md:py-32 px-4">
      <div className="max-w-5xl mx-auto relative z-10">
        <p
          className="reveal text-xs tracking-[0.5em] text-center mb-4"
          style={{ color: "var(--color-kin)", fontFamily: "var(--font-gothic)" }}
        >
          MENU
        </p>

        <h2
          className="reveal reveal-delay-1 text-3xl md:text-4xl text-center mb-4"
          style={{
            fontFamily: "var(--font-mincho)",
            letterSpacing: "0.1em",
          }}
        >
          品書き
        </h2>

        <p
          className="reveal reveal-delay-1 text-center text-white/50 text-sm mb-16"
          style={{ fontFamily: "var(--font-gothic)" }}
        >
          価格帯: ¥3,000〜¥4,000 程度
        </p>

        {/* Photo gallery */}
        <div className="reveal reveal-delay-2 grid grid-cols-1 md:grid-cols-2 gap-4 mb-16">
          {images.map((img, i) => (
            <div
              key={i}
              className="relative aspect-[3/2] overflow-hidden rounded"
              style={{ border: "1px solid rgba(185,28,28,0.2)" }}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover transition-transform duration-500 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            </div>
          ))}
        </div>

        {/* Menu categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {menuCategories.map((cat, i) => (
            <div
              key={i}
              className={`reveal reveal-delay-${(i % 4) + 1} p-6 rounded`}
              style={{
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.06)",
              }}
            >
              <div className="flex items-baseline gap-3 mb-2">
                <h3
                  className="text-xl"
                  style={{
                    fontFamily: "var(--font-mincho)",
                    color: "var(--color-kin)",
                  }}
                >
                  {cat.title}
                </h3>
                <span className="text-xs text-white/30 tracking-wider">
                  {cat.titleEn}
                </span>
              </div>

              <p
                className="text-sm text-white/50 mb-4"
                style={{ fontFamily: "var(--font-gothic)", lineHeight: 1.6 }}
              >
                {cat.description}
              </p>

              {/* Divider */}
              <div className="noren-divider mb-4" />

              <ul className="space-y-1.5">
                {cat.items.map((item, j) => (
                  <li
                    key={j}
                    className="menu-item text-sm text-white/70 cursor-pointer"
                    style={{ fontFamily: "var(--font-gothic)" }}
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Link to full menu */}
        <div className="reveal text-center mt-12">
          <a
            href="/menu"
            className="inline-block px-8 py-3 rounded text-sm tracking-wider transition-all duration-200 cursor-pointer"
            style={{
              border: "1px solid var(--color-akachochin)",
              color: "var(--color-akachochin-bright)",
              fontFamily: "var(--font-gothic)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "var(--color-akachochin)";
              e.currentTarget.style.color = "white";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "transparent";
              e.currentTarget.style.color = "var(--color-akachochin-bright)";
            }}
          >
            品書きをもっと見る
          </a>
        </div>
      </div>
    </section>
  );
}
