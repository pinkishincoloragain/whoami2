import React, { useEffect, useState, useCallback } from "react";
import Frames from "./Frames";
import Header from "../Components/containers/Header";
import { Button, Collapse } from "@mui/material";
import { useStyles } from "../Components/styles/Styles";
import { useSelector, useDispatch } from "react-redux";
import { changeMode } from "../Components/controls/modeSlice";
import Backgrounds from "../Components/containers/Backgrounds";
import HeaderBar from "../Components/containers/HeaderBar";
import Description from "../Components/containers/Description";
import Projects from "./Projects";
import Boxes from "../Components/objects/Boxes";
import { Box } from "@mui/system";
import Waves from "../Components/objects/Waves";

function Landing(props) {
  const darkMode = useSelector((state) => state.mode.value);
  const dispatch = useDispatch();

  const [windowWidth, setWindowWidth] = useState(props.width);
  const [windowHeight, setWindowHeight] = useState(props.height);
  const [filtered, setFiltered] = useState(darkMode);
  const [frameOpen, setFrameOpen] = useState(false);
  const [state, setState] = useState({
    open: false,
    vertical: "top",
    horizontal: "center",
  });
  const [graphicOpen, setGraphicOpen] = useState(false);
  const classes = useStyles();
  const [scroll, setScroll] = useState(0);

  const handleClick = (newState) => () => {
    setState({ open: true, ...newState });
  };

  useEffect(() => {
    if (localStorage.getItem("darkMode") === null)
      setState({ open: true, vertical: "top", horizontal: "left" });
  }, []);

  useEffect(() => {
    window.addEventListener("resize", (e) => {
      setWindowWidth(window.innerWidth);
    });
  }, [window.innerWidth]);

  useEffect(() => {
    window.addEventListener("resize", (e) => {
      setWindowHeight(window.innerHeight);
    });
  }, [window.innerHeight]);

  useEffect(() => {
    handleCatchClick();
  }, []);

  const handleChange = () => {
    dispatch(changeMode());

    if (windowWidth > 1280) {
      setFiltered(true);
    }
  };

  const handleCatchClick = () => {
    setGraphicOpen(false);
  };

  const handleFrame = () => {
    setFrameOpen((prev) => !prev);
  };

  return (
    <div
      className={classes.landing}
      onWheel={(e) => {
        console.log(e.deltaY);
        setScroll(e.deltaY);
      }}
      style={{
        backgroundColor: darkMode ? "#1f1f1f" : "white",
        color: !darkMode ? "#1f1f1f" : "white",
      }}
    >
      <div className={classes.mainWrapper}>
        <HeaderBar scroll={scroll} />
        <Header />

        <Description
          graphicOpen={graphicOpen}
          setGraphicOpen={setGraphicOpen}
        />
        <Collapse orientation="vertical" in={graphicOpen}>
          <Box
            style={{
              height: windowHeight / 2,
              display: "flex",
              justifyContent: "center",
              overflow: "hidden",
            }}
            onClick={() => setGraphicOpen(!graphicOpen)}
          >
            {!darkMode ? (
              <Boxes
                name={`Box${props.name}`}
                width={windowWidth}
                height={windowHeight / 2}
                container={`container${props.name}`}
                bkgColor={"#ffffff"}
                thetaSpeed={darkMode ? 0.1 : 0.5}
              />
            ) : (
              <Waves
                width={windowWidth}
                height={windowHeight / 2}
                azimuth="1"
                elevation="2"
              />
            )}
          </Box>
        </Collapse>

        <Projects />
      </div>
      {frameOpen ? (
        <Frames desktop={windowWidth > 1280} handleChange={handleFrame} />
      ) : null}
      <div style={{ transitionDuration: "0.2s" }}>
        <Backgrounds windowWidth={windowWidth} />
      </div>
    </div>
  );
}

export default Landing;
