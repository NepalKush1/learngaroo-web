import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import path from "node:path";
import { siteConfig } from "@/lib/site-config";

// Branded 1200×630 preview for links shared on WhatsApp, LinkedIn, Facebook
// and X. Generated at build time from the logo and site config.
export const alt = siteConfig.fullName;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpenGraphImage() {
  const logo = await readFile(path.join(process.cwd(), "public/brand/learniiz-logo-light.png"));
  const logoSrc = `data:image/png;base64,${logo.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 72,
          background: "linear-gradient(135deg, #0b1a2e 0%, #15304f 100%)",
          color: "white",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            position: "absolute",
            right: -120,
            top: -120,
            width: 480,
            height: 480,
            borderRadius: 480,
            background: "radial-gradient(circle, rgba(60,159,108,0.45) 0%, rgba(60,159,108,0) 70%)",
          }}
        />
        <img src={logoSrc} alt="" width={408} height={109} />
        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <div style={{ fontSize: 68, fontWeight: 800, lineHeight: 1.05, letterSpacing: -2 }}>
            {siteConfig.tagline}
          </div>
          <div style={{ fontSize: 28, color: "rgba(255,255,255,0.75)", maxWidth: 900, lineHeight: 1.35 }}>
            {`Registered Migration Agent · Melbourne · MARN ${siteConfig.marn}`}
          </div>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 14, fontSize: 24, color: "#6fcf97", fontWeight: 700 }}>
          <div style={{ width: 12, height: 12, borderRadius: 12, background: "#3c9f6c" }} />
          {siteConfig.values}
        </div>
      </div>
    ),
    size,
  );
}
