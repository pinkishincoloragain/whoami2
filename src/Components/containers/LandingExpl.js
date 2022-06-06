import { Box, Paper } from "@mui/material";
import { useState, useEffect } from "react";
import { styled } from "@mui/styles";
import { useStyles } from "./Styles";
import { useSelector, useDispatch } from "react-redux";
import Skeleton from "@mui/material/Skeleton";

const data = [
  {
    title: "Projects",
    description: "A collection of my projects",
    image: "https://source.unsplash.com/random/400x400",
    link: "#",
  },
];

export default function LandingExpl(props) {
  const classes = useStyles();
  const darkMode = useSelector((state) => state.mode.value);

  const Paragraph = styled(`div`)({
    width: "80vw",
    height: "80vh",
    marginTop: "5vh",
    marginBottom: "5vh",
    elevation: "1",
  });

  const GraphicWrapper = styled(Paper)({
    borderRadius: "20px",
    width: "40vw",
    height: "30vh",
    boxShadow: "0px 2px 12px 1px #cfcfcf",
  });

  return (
    <Paragraph>
      <GraphicWrapper>fish</GraphicWrapper>
    </Paragraph>
  );
}
