import React, { useEffect, useState } from "react";
import { useStyles } from "../Components/containers/Styles";
import { useSelector, useDispatch } from "react-redux";
import { Button } from "@mui/material";
import { Box } from "@mui/system";
import { styled } from "@mui/styles";

import HeaderBar from "../Components/containers/HeaderBar";
import Description from "../Components/containers/Description";
import DevMode from "./DevMode";
import LandingExpl from "../Components/containers/LandingExpl";

function Landing(props) {
  const classes = useStyles();
  const darkMode = useSelector((state) => state.mode.value);

  const [scroll, setScroll] = useState(0);
  const [graphicOpen, setGraphicOpen] = useState(false);
  const [devMode, setDevMode] = useState();

  useEffect(() => {
    if (localStorage.getItem("devMode") === "true") {
      setDevMode(true);
    } else {
      {
        setDevMode(false);
        localStorage.setItem("devMode", false);
      }
    }
  });

  const handleDevMode = () => {
    setDevMode(!devMode);
    localStorage.setItem("devMode", !devMode);
  };

  useEffect(() => {
    handleCatchClick();
  }, []);

  const handleCatchClick = () => {
    setGraphicOpen(false);
  };

  const LandingWrapper = styled(Box)({
    backgroundColor: darkMode ? "#1f1f1f" : "white",
    color: !darkMode ? "#1f1f1f" : "white",
  });

  const ModeButton = styled(Button)(({ theme }) => ({
    width: "20vw",
    fontSize: "1.5rem",
  }));

  const NormalMode = () => (
    <LandingWrapper
      onWheel={(e) => {
        console.log(e.deltaY);
        setScroll(e.deltaY);
      }}
    >
      <HeaderBar scroll={scroll} />
      <div className={classes.mainWrapper}>
        <Description
          graphicOpen={graphicOpen}
          setGraphicOpen={setGraphicOpen}
        />
        <LandingExpl />
      </div>
    </LandingWrapper>
  );

  return (
    <div style={{ width: "100%", height: "100%" }}>
      <ModeButton onClick={handleDevMode}>Change!</ModeButton>
      {devMode ? <DevMode /> : <NormalMode />}
    </div>
  );
}

export default Landing;
