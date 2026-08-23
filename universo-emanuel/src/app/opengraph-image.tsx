import { ImageResponse } from "next/og";

export const runtime = "edge";

export const size = {
  width: 1200,
  height: 630,
};

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
          padding: "72px",
          background: "linear-gradient(135deg, #0b1220 0%, #0f172a 40%, #111827 100%)",
          color: "white",
        }}
      >
        <div style={{ fontSize: 24, opacity: 0.8, marginBottom: 16 }}>Universo Emanuel</div>
        <div style={{ fontSize: 64, fontWeight: 800, lineHeight: 1.05, marginBottom: 18 }}>
          Portfólio interativo
          <br />
          com Persona Engine
        </div>
        <div style={{ fontSize: 28, opacity: 0.85, maxWidth: 900 }}>
          Explore especialidades, visuais e ferramentas dentro do ecossistema.
        </div>
        <div
          style={{
            position: "absolute",
            right: 72,
            bottom: 72,
            fontSize: 20,
            opacity: 0.7,
          }}
        >
          emanuelsantoz
        </div>
      </div>
    ),
    {
      ...size,
    },
  );
}

