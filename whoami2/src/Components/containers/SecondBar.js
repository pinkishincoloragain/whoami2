import { Box } from "@mui/system";
import React from "react";
import CustomIcon from "./CustomIcon";

export default function SecondBar() {
  return (
    <div style={{ position: "absolute", display: "flex", zIndex: "10" }}>
      <div
        style={{
          width: "100vw",
          height: "80px",
          backgroundColor: "#C2C2DD",
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <CustomIcon />
        <CustomIcon />
      </div>
    </div>
  );
}
