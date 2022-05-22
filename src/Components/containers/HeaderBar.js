import { useState, useEffect } from "react";
import CustomIcon from "./CustomIcon";
import { useSelector } from "react-redux";
import HeaderBarLink from "./HeaderBarLink";
import { Button } from "@mui/material";

export default function HeaderBar(props) {
  const mode = useSelector((state) => state.mode.value);

  const [width, setWidth] = useState(0);

  useEffect(() => {
    setWidth(window.innerWidth);
  });

  return (
    <div
      style={{
        position: "sticky",
        top: "0",
        zIndex: "1",
        width: "40vw",
        backgroundColor: mode ? "transparent" : "white",
        opacity: "  1",
        display: "grid | inline-grid",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: "2px",
        paddingRight: "10vw",
        paddingLeft: "20vw",
      }}
    >
      <div
        data-aos="zoom-in"
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
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
