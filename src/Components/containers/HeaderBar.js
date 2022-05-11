import React from "react";
import CustomIcon from "./CustomIcon";
import { useSelector } from "react-redux";
import Status from "./Status";

export default function HeaderBar(props) {
  const mode = useSelector((state) => state.mode.value);

  return (
    <div
      style={{
        position: "sticky",
        top: "0",
        zIndex: "1",
        width: "80vw",
        backgroundColor: !mode ? "#1b1b1b" : "white",
        opacity: "  1",
        display: "grid | inline-grid",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        data-aos="zoom-in"
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          opacity: "1",
        }}
      >
        <Status name="Home" to="/home" />
        <Status name="Introduction" />
        <Status name="Projects" />
        <Status name="Blog" />
      </div>
    </div>
  );
}
