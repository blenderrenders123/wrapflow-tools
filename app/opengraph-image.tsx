import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "WrapFlow.tools — Free precision tools for the vehicle wrap industry";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "#06060a",
          display: "flex",
          flexDirection: "column",
          padding: "80px",
          position: "relative",
          fontFamily: "sans-serif",
        }}
      >
        {/* Ambient color orbs */}
        <div
          style={{
            position: "absolute",
            top: "-150px",
            left: "-100px",
            width: "500px",
            height: "500px",
            borderRadius: "50%",
            background: "rgba(251, 191, 36, 0.25)",
            filter: "blur(120px)",
            display: "flex",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: "100px",
            right: "-100px",
            width: "450px",
            height: "450px",
            borderRadius: "50%",
            background: "rgba(34, 211, 238, 0.2)",
            filter: "blur(120px)",
            display: "flex",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "-150px",
            left: "30%",
            width: "400px",
            height: "400px",
            borderRadius: "50%",
            background: "rgba(167, 139, 250, 0.2)",
            filter: "blur(120px)",
            display: "flex",
          }}
        />

        {/* Logo + Brand */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
            zIndex: 10,
          }}
        >
          <div
            style={{
              width: "60px",
              height: "60px",
              background: "white",
              borderRadius: "14px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <svg viewBox="-60 -50 120 100" width="40" height="40" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M -50 0 C -50 -45, -10 -45, 0 0 C 10 45, 50 45, 50 0"
                fill="none"
                stroke="#0a0a12"
                strokeWidth="10"
                strokeLinecap="round"
              />
              <circle cx="-50" cy="0" r="7" fill="#0a0a12" />
              <circle cx="50" cy="0" r="7" fill="#0a0a12" />
            </svg>
          </div>
          <div style={{ display: "flex", color: "white", fontSize: "32px", fontWeight: 500 }}>
            <span>WrapFlow</span>
            <span style={{ color: "#71717a" }}>.tools</span>
          </div>
        </div>

        {/* Spacer */}
        <div style={{ display: "flex", flex: 1 }} />

        {/* Main headline */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "20px",
            zIndex: 10,
          }}
        >
          <div
            style={{
              color: "white",
              fontSize: "78px",
              fontWeight: 500,
              letterSpacing: "-0.02em",
              lineHeight: 1.05,
              display: "flex",
              flexDirection: "column",
            }}
          >
            <span>Precision tools for</span>
            <span
              style={{
                background: "linear-gradient(90deg, #fcd34d, #67e8f9, #c4b5fd)",
                backgroundClip: "text",
                color: "transparent",
              }}
            >
              the vehicle wrap industry
            </span>
          </div>
          <div
            style={{
              color: "#a1a1aa",
              fontSize: "28px",
              fontWeight: 400,
              display: "flex",
            }}
          >
            Cost · Fitment · Timeline · Material — 4 free tools, no signup.
          </div>
        </div>

        {/* Spacer */}
        <div style={{ display: "flex", flex: 1 }} />

        {/* Bottom row */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            zIndex: 10,
            paddingTop: "32px",
            borderTop: "1px solid rgba(255, 255, 255, 0.1)",
          }}
        >
          <div style={{ display: "flex", gap: "24px", alignItems: "center" }}>
            {[
              { color: "#fbbf24", label: "Cost" },
              { color: "#22d3ee", label: "Fitment" },
              { color: "#a78bfa", label: "Timeline" },
              { color: "#34d399", label: "Material" },
            ].map((t) => (
              <div key={t.label} style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <div
                  style={{
                    width: "10px",
                    height: "10px",
                    borderRadius: "50%",
                    background: t.color,
                    display: "flex",
                  }}
                />
                <span style={{ color: "#a1a1aa", fontSize: "22px" }}>{t.label}</span>
              </div>
            ))}
          </div>
          <div style={{ color: "white", fontSize: "26px", fontWeight: 500, display: "flex" }}>
            wrapflow.site
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}