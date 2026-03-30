"use client";

import { useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import Header from "../components/Header";
import Footer from "../components/Footer";

const menuSections = [
  {
    title: "もつ焼き",
    titleEn: "MOTSU-YAKI",
    description: "備長炭で一本一本丁寧に焼き上げます。塩またはタレをお選びください。",
    items: [
      { name: "カシラ", note: "豚の頭肉。脂と赤身のバランスが絶妙" },
      { name: "ハツ", note: "心臓。コリッとした食感が人気" },
      { name: "レバー", note: "鮮度が命。とろける旨み" },
      { name: "シロ", note: "大腸。噛むほどに味わい深い" },
      { name: "タン", note: "舌。あっさり塩で" },
      { name: "ナンコツ", note: "軟骨。コリコリ食感がクセになる" },
      { name: "テッポウ", note: "直腸。プリっとした歯ごたえ" },
      { name: "ガツ", note: "胃袋。さっぱりとした味わい" },
    ],
    image: "https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?w=800&h=500&fit=crop&q=80",
    imageAlt: "串焼きイメージ",
  },
  {
    title: "焼き鳥",
    titleEn: "YAKITORI",
    description: "国産鶏を使用。炭火の香ばしさをお楽しみください。",
    items: [
      { name: "もも", note: "ジューシーな定番" },
      { name: "ねぎま", note: "鶏ももとネギの王道コンビ" },
      { name: "つくね", note: "手ごねの肉団子。タレで" },
      { name: "皮", note: "パリッと焼き上げた鶏皮" },
      { name: "ぼんじり", note: "尾の付け根。希少部位" },
      { name: "手羽先", note: "こんがり焼いた手羽" },
      { name: "せせり", note: "首肉。適度な弾力" },
    ],
    image: "https://images.unsplash.com/photo-1504544750208-dc0358e63f7f?w=800&h=500&fit=crop&q=80",
    imageAlt: "炭火焼きイメージ",
  },
  {
    title: "煮込み・一品料理",
    titleEn: "NIKOMI & IPPIN",
    description: "からす森を語る上で欠かせない、秘伝の煮込みと一品の数々。",
    items: [
      { name: "ホルモン煮込み（豆腐あり）", note: "看板メニュー。豆腐入りで食べ応え抜群" },
      { name: "ホルモン煮込み（豆腐なし）", note: "ホルモンの旨みをダイレクトに" },
      { name: "もつ煮", note: "味噌仕立ての定番" },
      { name: "冷やしトマト", note: "さっぱり箸休め" },
      { name: "枝豆", note: "塩茹でシンプル" },
      { name: "漬物盛り合わせ", note: "季節の漬物" },
    ],
    image: "https://images.unsplash.com/photo-1547592166-23ac45744acd?w=800&h=500&fit=crop&q=80",
    imageAlt: "煮込み料理イメージ",
  },
  {
    title: "お得なセット・ドリンク",
    titleEn: "SET & DRINKS",
    description: "初めての方にもおすすめのセットメニュー。お酒も各種取り揃えております。",
    items: [
      { name: "得々セット", note: "もつ焼き盛り合わせ+ドリンク1杯のお得なセット" },
      { name: "生ビール", note: "" },
      { name: "瓶ビール", note: "" },
      { name: "日本酒（冷/燗）", note: "秋田の地酒も" },
      { name: "酎ハイ各種", note: "レモン、ウメ、グレープフルーツ 他" },
      { name: "ウーロンハイ", note: "" },
      { name: "ソフトドリンク", note: "ウーロン茶、オレンジジュース 他" },
    ],
    image: "https://images.unsplash.com/photo-1535958636474-b021ee887b13?w=800&h=500&fit=crop&q=80",
    imageAlt: "ドリンクイメージ",
  },
];

export default function MenuPage() {
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
          MENU
        </p>
        <h1
          className="text-4xl md:text-5xl relative z-10"
          style={{
            fontFamily: "var(--font-mincho)",
            letterSpacing: "0.15em",
          }}
        >
          品書き
        </h1>
        <p
          className="text-sm text-white/50 mt-4 relative z-10"
          style={{ fontFamily: "var(--font-gothic)" }}
        >
          価格帯: ¥3,000〜¥4,000 程度
        </p>
      </section>

      {/* Menu sections */}
      {menuSections.map((section, i) => (
        <section
          key={i}
          className={`py-16 md:py-24 px-4 ${i % 2 === 1 ? "noren-bg" : ""}`}
        >
          <div className="max-w-5xl mx-auto">
            <div
              className={`grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center ${
                i % 2 === 1 ? "md:[direction:rtl] md:[&>*]:[direction:ltr]" : ""
              }`}
            >
              {/* Image */}
              <div className="reveal relative z-10">
                <div
                  className="relative aspect-[3/2] overflow-hidden rounded"
                  style={{ border: "1px solid rgba(185,28,28,0.2)" }}
                >
                  <Image
                    src={section.image}
                    alt={section.imageAlt}
                    fill
                    className="object-cover transition-transform duration-500 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                </div>
              </div>

              {/* Content */}
              <div className="reveal reveal-delay-2 relative z-10">
                <div className="flex items-baseline gap-3 mb-2">
                  <h2
                    className="text-2xl md:text-3xl"
                    style={{
                      fontFamily: "var(--font-mincho)",
                      color: "var(--color-kin)",
                    }}
                  >
                    {section.title}
                  </h2>
                  <span className="text-xs text-white/30 tracking-wider">
                    {section.titleEn}
                  </span>
                </div>

                <p
                  className="text-sm text-white/60 mb-6"
                  style={{ fontFamily: "var(--font-gothic)", lineHeight: 1.8 }}
                >
                  {section.description}
                </p>

                <div className="noren-divider mb-6" />

                <ul className="space-y-3">
                  {section.items.map((item, j) => (
                    <li key={j} className="menu-item cursor-pointer">
                      <span
                        className="text-base text-white/80"
                        style={{ fontFamily: "var(--font-gothic)" }}
                      >
                        {item.name}
                      </span>
                      {item.note && (
                        <span
                          className="block text-xs text-white/40 mt-0.5 pl-1"
                          style={{ fontFamily: "var(--font-gothic)" }}
                        >
                          {item.note}
                        </span>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>
      ))}

      <Footer />
    </div>
  );
}
