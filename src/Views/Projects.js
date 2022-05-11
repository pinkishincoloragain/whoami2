import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import { useSelector } from "react-redux";
import { Typography } from "@mui/material";
import { keyframes } from "@emotion/react";
import { VisualHelper } from "./Items/VisualHelper";
import Waves from "../Components/objects/Waves";
import Boxes from "../Components/objects/Boxes";
import ThemeTypo from "../Components/styles/ThemeTypo";

const Item = styled(Paper)(({ theme, mr, w, f, bc, h }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  backgroundColor: bc,
  height: h,
  width: w,
  flex: f,
  padding: "10px",
  minWidth: "300px",
  minHieght: "300px",
  animation: "pulse 0.5s ease-in-out ",
}));

const Heading = styled(Typography)(({ theme, color }) => ({
  ...theme.typography.h6,
  color: color,
  fontWeight: "200",
  margin: "0px",
  padding: "0px",
  fontSize: "3rem",
  // textAlign: "center",

  animation: "fadeIn 0.5s",
  animationDuration: "0.5s",
}));

export default function Projects(props) {
  const [height, setHeight] = React.useState("10vh");
  let size = 0;
  const darkMode = useSelector((state) => state.mode.value);

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <Heading color={!darkMode ? "#1f1f1f" : "#ffffff"}>2021 F/W</Heading>
      <Item>
        <VisualHelper />
      </Item>
    </div>
  );
}
