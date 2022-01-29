import React from "react";
import StatusBar from "./StatusBar";
import CustomIcon from "./CustomIcon";

export default function HeaderBar() {
  return (
    <div
      style={{
        width: "80vw",
        marginLeft: "10vw",
        backgroundColor: "#1B1b1b",
        display: "grid | inline-grid",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <StatusBar />
      {/* <CustomIcon /> */}
    </div>
  );
}
