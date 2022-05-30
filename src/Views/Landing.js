import React, { useEffect, useState } from "react";
import { Button } from "@mui/material";
import { useStyles } from "../Components/styles/Styles";
import { useSelector, useDispatch } from "react-redux";
import HeaderBar from "../Components/containers/HeaderBar";
import Description from "../Components/containers/Description";
import DevMode from "./DevMode";
import { Box } from "@mui/system";
import BasicMasonry from "./BasicMasonry";
import LandingExpl from "../Components/containers/LandingExpl";
import { styled } from "@mui/styles";

function Landing(props) {
  const classes = useStyles();
  const darkMode = useSelector((state) => state.mode.value);

  const [scroll, setScroll] = useState(0);
  const [graphicOpen, setGraphicOpen] = useState(false);
  const [devMode, setDevMode] = useState(false);

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

  return (
    <>
      <ModeButton onClick={() => setDevMode(!devMode)}>Change!</ModeButton>
      {devMode ? (
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
      ) : (
        <DevMode />
      )}
    </>
  );
}

export default Landing;
