import { Box, Paper } from "@mui/material";
import { useState, useEffect, useRef } from "react";
import styled from "@emotion/styled";
import { useStyles } from "./Styles";
import { useSelector, useDispatch } from "react-redux";
import Skeleton from "@mui/material/Skeleton";
import DevMode from "../../Views/DevMode";

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

  const Paragraph = styled(`div`)({
    width: "80vw",
    height: "100%",
    marginTop: "5vh",
    marginBottom: "5vh",
  });

  const GraphicWrapper = styled(`div`)({
    // borderRadius: "20px",
    width: "80vw",
    height: "30vh",
    // marginTop: "10vh",
    marginBottom: "10vh",
    border: "1px solid white",
    overflowY: "scroll",
    padding: "20px",
    // boxShadow: "0px 2px 12px 1px #cfcfcf",
  });

  const [size, setSize] = useState(true);

  function mouseDownHandler(e) {
    e.stopPropagation();
  }
  const headerDraggerRef = useRef(null);
  const exitRef = useRef(null);

  return (
    <Paragraph>
      <GraphicWrapper>
        <DevMode />
      </GraphicWrapper>
    </Paragraph>
  );
}
