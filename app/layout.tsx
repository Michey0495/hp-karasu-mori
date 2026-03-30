import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://hp-karasu-mori.vercel.app"),
  title: "からす森 | 秋田市の老舗大衆酒場 もつ焼き・串焼き",
  description:
    "秋田市中通で50年以上愛され続ける大衆酒場「からす森」。自慢のもつ焼き、ホルモン煮込み、焼き鳥を肴に、気取らない一杯をどうぞ。秋田駅から徒歩圏内。",
  keywords: [
    "からす森",
    "秋田市",
    "大衆酒場",
    "もつ焼き",
    "串焼き",
    "居酒屋",
    "中通",
    "秋田駅",
    "ホルモン煮込み",
    "焼き鳥",
  ],
  openGraph: {
    title: "からす森 | 秋田市の老舗大衆酒場",
    description:
      "秋田市中通で50年以上愛され続ける大衆酒場。もつ焼き・ホルモン煮込み・焼き鳥。",
    type: "website",
    locale: "ja_JP",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    name: "からす森",
    description:
      "秋田市中通で50年以上愛され続ける大衆酒場。もつ焼き・ホルモン煮込み・焼き鳥。",
    url: "https://hp-karasu-mori.vercel.app",
    telephone: "018-835-5906",
    address: {
      "@type": "PostalAddress",
      streetAddress: "中通4-11-3",
      addressLocality: "秋田市",
      addressRegion: "秋田県",
      postalCode: "",
      addressCountry: "JP",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 39.7186,
      longitude: 140.1237,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ],
        opens: "17:00",
        closes: "21:30",
      },
    ],
    priceRange: "¥3,000〜¥4,000",
    servesCuisine: ["もつ焼き", "串焼き", "居酒屋"],
    acceptsReservations: "True",
  };

  return (
    <html lang="ja">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Zen+Antique&family=Zen+Maru+Gothic:wght@300;400;500;700&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
