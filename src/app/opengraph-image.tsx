import { ImageResponse } from "next/og";

export const alt = "Hostsy corporate housing in Gauteng";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#07182f",
          color: "#f1ebde",
          padding: "72px",
          fontFamily: "Georgia, serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <div
            style={{
              width: 64,
              height: 64,
              borderRadius: 999,
              border: "1px solid #c59a55",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#c59a55",
              fontSize: 34,
            }}
          >
            H
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
            <div style={{ color: "#c59a55", fontSize: 28, letterSpacing: 2 }}>HOSTSY</div>
            <div style={{ fontSize: 18, opacity: 0.75, fontFamily: "Arial, sans-serif" }}>
              Pretoria · Johannesburg
            </div>
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
          <div style={{ color: "#c59a55", fontSize: 24, fontFamily: "Arial, sans-serif" }}>
            Corporate Housing
          </div>
          <div style={{ fontSize: 78, lineHeight: 0.95, maxWidth: 920 }}>
            Furnished apartments for relocations, project teams and extended stays.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            gap: 24,
            color: "rgba(241,235,222,0.78)",
            fontSize: 24,
            fontFamily: "Arial, sans-serif",
          }}
        >
          <span>Executive relocations</span>
          <span>·</span>
          <span>Project housing</span>
          <span>·</span>
          <span>Diplomatic placements</span>
        </div>
      </div>
    ),
    size
  );
}
