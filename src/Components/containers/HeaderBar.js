import React from "react";
import CustomIcon from "./CustomIcon";
import { useSelector } from "react-redux";
import HeaderBarLink from "./HeaderBarLink";

export default function HeaderBar(props) {
  const mode = useSelector((state) => state.mode.value);

  return (
    <div
      style={{
        position: "sticky",
        top: "0",
        zIndex: "1",
        width: "80vw",
        backgroundColor: mode ? "transparent" : "white",
        opacity: "  1",
        display: "grid | inline-grid",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: "2px",
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
        <HeaderBarLink name="Home" href="/" />
        <HeaderBarLink name="Introduction" href="introduction" />
        <HeaderBarLink name="Projects" href="projects" />
        <HeaderBarLink name="Blog" href="blog" />
      </div>
    </div>
  );
}
