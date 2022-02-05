import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Project from "./Projects/Project";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useStyles } from "../Components/styles/Styles";
import { Typography } from "@mui/material";
import { keyframes } from "@emotion/react";
import AOS from "aos";

const Item = styled(Paper)(({ theme, mr, w, f, bc, h }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  backgroundColor: bc,
  height: h,
  width: w,
  flex: f,
  minWidth: "300px",
  minHieght: "300px",
  animation: "pulse 0.5s ease-in-out ",
}));

const Heading = styled(Typography)(({ theme }) => ({
  ...theme.typography.h6,
  color: "#1b1b1b",
  fontWeight: "200",
  margin: "0px",
  padding: "0px",
  fontSize: "3rem",
  // textAlign: "center",

  animation: "fadeIn 0.5s",
  animationDuration: "0.5s",
}));

export default function Projects() {
  const [height, setHeight] = React.useState("10vh");
  let size = 0;

  // useEffect(() => {
  //   const timer = setInterval(() => {
  //     setHeight(`${(size += 1)}`);
  //     if (size > 20) {
  //       clearInterval(timer);
  //     }
  //   }, 2);
  //   return () => clearTimeout(timer);
  // }, []);

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <Heading>2021 F/W</Heading>
      <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
        <Item data-aos="fade-up" f="8" h={`${height * 2}vh`}>
          <Project />
        </Item>
        <div style={{ display: "flex", flexDirection: "column", flex: "4" }}>
          <Item f="1">
            <Project />
          </Item>
          <Item f="1">
            <Project />
          </Item>
        </div>
      </div>
      <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
        <Item f="2" h="74vh">
          <Project />
        </Item>
        <div style={{ display: "flex", flexDirection: "column", flex: "4" }}>
          <Item f="2" h="30vh">
            <Project />
          </Item>
          <Item f="1" h="40vh">
            <Project />
          </Item>
        </div>
        <Item f="1" h="74vh">
          <Project />
        </Item>
      </div>
    </div>
  );
}
