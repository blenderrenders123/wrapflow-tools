import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "white",
          borderRadius: 7,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <svg viewBox="-60 -50 120 100" width="22" height="22" xmlns="http://www.w3.org/2000/svg">
          <path d="M -50 0 C -50 -45, -10 -45, 0 0 C 10 45, 50 45, 50 0" fill="none" stroke="#0a0a12" strokeWidth="10" strokeLinecap="round" />
          <circle cx="-50" cy="0" r="7" fill="#0a0a12" />
          <circle cx="50" cy="0" r="7" fill="#0a0a12" />
        </svg>
      </div>
    ),
    { ...size }
  );
}