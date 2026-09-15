import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/site-config";

export const dynamic = "force-static";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "88px",
          backgroundImage:
            "linear-gradient(155deg, #0D6B73 0%, #0E1A22 58%, #0A1218 100%)",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
          <svg width="56" height="56" viewBox="0 0 48 48">
            <path d="M4 6 L20 21 L14 27 L2 15 Z" fill="#1F2933" />
            <path d="M44 6 L28 21 L34 27 L46 15 Z" fill="#4bc3c8" />
            <path d="M4 42 L20 27 L14 21 L2 33 Z" fill="#1F2933" />
            <path d="M44 42 L28 27 L34 21 L46 33 Z" fill="#4bc3c8" />
            <circle cx="24" cy="24" r="7.5" fill="none" stroke="#4bc3c8" strokeWidth="3" />
          </svg>
          <div style={{ display: "flex", fontSize: 34, fontWeight: 700, color: "#E9EEF0" }}>
            Axis<span style={{ color: "#4bc3c8" }}>Shift</span>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 56,
            maxWidth: 880,
            fontSize: 54,
            fontWeight: 700,
            lineHeight: 1.15,
            color: "#FFFFFF",
          }}
        >
          Scattered business data. One clear operating view.
        </div>
        <div style={{ display: "flex", marginTop: 32, fontSize: 26, color: "#B9C4C9" }}>
          {siteConfig.tagline}
        </div>
      </div>
    ),
    { ...size }
  );
}
