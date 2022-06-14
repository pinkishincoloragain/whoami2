import { Box, Paper } from "@mui/material";
import { useState, useEffect, useRef } from "react";
import styled from "@emotion/styled";
import { useStyles } from "./Styles";
import { useSelector, useDispatch } from "react-redux";
import Skeleton from "@mui/material/Skeleton";
import DevMode from "../../Views/DevMode";
import { Introduction } from "../../Views/Introduction";

const data = [
  {
    title: "Projects",
    description: "A collection of my projects",
    image: "https://source.unsplash.com/random/400x400",
    link: "#",
  },
];

export default function ProjectExpl(props) {
  const classes = useStyles();
  const darkMode = useSelector((state) => state.mode.value);

  const [devModeOpen, setDevModeOpen] = useState(false);
  const [size, setSize] = useState(true);

  const Paragraph = styled(`div`)({
    width: "80vw",
    height: "100%",
    paddingTop: "10vh",
    paddingBottom: "10vh",
  });

  const headerDraggerRef = useRef(null);
  const exitRef = useRef(null);

  return (
    <Paragraph>
      <Introduction />
    </Paragraph>
  );
}
