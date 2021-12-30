import { useRef } from "react";

export default function SmallFrame(props) {
  const smallFrame = (
    <div
      style={{
        display: "flex",
        margin: "auto",
        width: "100%",
        height: "100%",
        justifyContent: "center",
        alignItems: "center",
        position: "absolute",
      }}
    >
      <div
        style={{
          width: "80vw",
          height: "34vh",
          position: "absolute",
          backgroundColor: "transparent",
          border: "8px solid black",
          zIndex: "2",
          padding: "1vh",
        }}
      ></div>
    </div>
  );

  return smallFrame;
}
