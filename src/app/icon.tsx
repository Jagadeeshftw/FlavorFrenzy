import { ImageResponse } from "next/og";
import { MdFoodBank } from "react-icons/md";

// Route segment config
export const runtime = "edge";

export const contentType = "image/ico";

// Image generation
export default function Icon() {
  return new ImageResponse(
    (
      // ImageResponse JSX element
      <MdFoodBank
        style={{
          fontSize: 24,
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "green",
        }}
      />
    )
  );
}
