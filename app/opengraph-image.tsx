import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "からす森 | 秋田市の老舗大衆酒場";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #0A0A0A 0%, #1A0A0A 50%, #0A0A0A 100%)",
          position: "relative",
        }}
      >
        {/* Red glow */}
        <div
          style={{
            position: "absolute",
            width: "600px",
            height: "600px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(185,28,28,0.15) 0%, transparent 70%)",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        />

        {/* Top line */}
        <div
          style={{
            width: "80px",
            height: "2px",
            background: "linear-gradient(90deg, transparent, #C5962A, transparent)",
            marginBottom: "30px",
          }}
        />

        {/* Subtitle */}
        <p
          style={{
            fontSize: "20px",
            letterSpacing: "0.5em",
            color: "#C5962A",
            marginBottom: "20px",
          }}
        >
          秋田市中通の老舗大衆酒場
        </p>

        {/* Title */}
        <h1
          style={{
            fontSize: "80px",
            letterSpacing: "0.2em",
            color: "#f5f5f5",
            textShadow: "0 0 40px rgba(185,28,28,0.3)",
            marginBottom: "20px",
          }}
        >
          からす森
        </h1>

        {/* Bottom line */}
        <div
          style={{
            width: "80px",
            height: "2px",
            background: "linear-gradient(90deg, transparent, #B91C1C, transparent)",
            marginBottom: "30px",
          }}
        />

        {/* Tagline */}
        <p
          style={{
            fontSize: "18px",
            color: "rgba(245,245,245,0.6)",
            letterSpacing: "0.3em",
          }}
        >
          もつ焼き・串焼き・ホルモン煮込み
        </p>
      </div>
    ),
    { ...size }
  );
}
