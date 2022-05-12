import * as React from "react";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import { useSelector } from "react-redux";
import { Typography } from "@mui/material";
import { Project as Project } from "./Items/VisualHelper";

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
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-evenly",
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
      <Heading color={!darkMode ? "#1f1f1f" : "#ffffff"}>2022</Heading>
      <Item>
        <Project />
        <Project />
      </Item>
      <Heading color={!darkMode ? "#1f1f1f" : "#ffffff"}>2021</Heading>
      <Item>
        <Project />
      </Item>
      <Heading color={!darkMode ? "#1f1f1f" : "#ffffff"}>2020</Heading>
      <Item>
        <Project />
      </Item>
      <Heading color={!darkMode ? "#1f1f1f" : "#ffffff"}>2019</Heading>
      <Item>
        <Project />
      </Item>
    </div>
  );
}
