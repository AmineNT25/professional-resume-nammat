import { ImageResponse } from "next/og";

export const dynamic = "force-static";

export const alt = "Ahmed Amine Nammat — Full Stack Developer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#0a0a0a",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          padding: "80px",
          position: "relative",
        }}
      >
        {/* accent glow */}
        <div
          style={{
            position: "absolute",
            top: 0,
            right: 0,
            width: "40%",
            height: "100%",
            background:
              "radial-gradient(ellipse at top right, rgba(74,222,128,0.07) 0%, transparent 70%)",
            display: "flex",
          }}
        />

        {/* prompt line */}
        <div
          style={{
            display: "flex",
            color: "#4ade80",
            fontSize: 20,
            fontFamily: "monospace",
            marginBottom: 36,
            letterSpacing: "0.04em",
          }}
        >
          &gt;_ whoami
        </div>

        {/* name */}
        <div
          style={{
            display: "flex",
            color: "#ededeb",
            fontSize: 72,
            fontWeight: 700,
            lineHeight: 1.05,
            letterSpacing: "-0.03em",
            marginBottom: 24,
            fontFamily: "sans-serif",
          }}
        >
          Ahmed Amine Nammat
        </div>

        {/* role */}
        <div
          style={{
            display: "flex",
            color: "#9b9b97",
            fontSize: 28,
            fontFamily: "monospace",
            marginBottom: 16,
          }}
        >
          Full Stack Developer
        </div>

        {/* location */}
        <div
          style={{
            display: "flex",
            color: "#4ade80",
            fontSize: 22,
            fontFamily: "monospace",
          }}
        >
          Agadir, Morocco
        </div>

        {/* domain */}
        <div
          style={{
            position: "absolute",
            bottom: 64,
            right: 80,
            display: "flex",
            color: "#4ade80",
            fontSize: 18,
            fontFamily: "monospace",
            opacity: 0.45,
          }}
        >
          nammat.dev
        </div>
      </div>
    ),
    { ...size }
  );
}
