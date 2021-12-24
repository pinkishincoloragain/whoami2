import React from "react";

export default function Frames(props) {
  const mobileFrame = (
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
          width: "50vw",
          height: "40vh",
          position: "absolute",
          backgroundColor: "transparent",
          border: "8px solid black",
          zIndex: "0",
        }}
      ></div>
    </div>
  );

  const DesktopFrame = (
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
          width: "50vw",
          height: "40vh",
          position: "absolute",
          backgroundColor: "transparent",
          border: "8px solid black",
          zIndex: "0",
        }}
      ></div>
    </div>
  );

  return <>{props.desktop ? DesktopFrame : mobileFrame}</>;
}
