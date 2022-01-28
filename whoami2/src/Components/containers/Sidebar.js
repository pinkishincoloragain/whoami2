import React from "react";
import CustomIcon from "./Icon";

export default function Sidebar() {
  return (
    <div style={{ position: "absolute", display: "flex" }}>
      <div
        style={{
          width: "80px",
          height: "100vh",
          backgroundColor: "#C2C2DD",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <CustomIcon image="github" />
      </div>
    </div>
  );
}
