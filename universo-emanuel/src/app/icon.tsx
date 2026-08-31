import { ImageResponse } from "next/og";
import { EmanuelIcon } from "@/components/brand/EmanuelIcon";

export const runtime = "edge";

export const size = {
  width: 32,
  height: 32,
};

export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#07111f",
          borderRadius: 9,
        }}
      >
        <EmanuelIcon style={{ width: 19, height: 19, color: "#79aef4" }} />
      </div>
    ),
    {
      ...size,
    },
  );
}

