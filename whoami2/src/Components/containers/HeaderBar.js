import React from "react";
import StatusBar from "./StatusBar";
import CustomIcon from "./CustomIcon";
import { useSelector } from "react-redux";

export default function HeaderBar() {
  const mode = useSelector((state) => state.mode.value);

  return (
    <div
      style={{
        position: "sticky",
        top: "0",
        width: "80vw",
        backgroundColor: !mode ? "#1b1b1b" : "white",
        display: "grid | inline-grid",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <StatusBar />
    </div>
  );
}
