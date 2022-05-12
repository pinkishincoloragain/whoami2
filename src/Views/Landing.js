import React, { useEffect, useState, useCallback } from "react";
import Frames from "./Frames";
import Header from "../Components/containers/Header";
import { useStyles } from "../Components/styles/Styles";
import { useSelector, useDispatch } from "react-redux";
import { changeMode } from "../Components/controls/modeSlice";
import Backgrounds from "../Components/containers/Backgrounds";
import HeaderBar from "../Components/containers/HeaderBar";
import Description from "../Components/containers/Description";
import Projects from "./Projects";
import Boxes from "../Components/objects/Boxes";
import { Box } from "@mui/system";

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
  const [catchOpen, setCatchOpen] = useState(true);
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
    setCatchOpen(false);
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
        // display: "flex",
        // flexDirection: "row",
      }}
    >
      <div className={classes.mainWrapper}>
        <HeaderBar scroll={scroll} />
        <Header />
        <Description />
        <Box
          style={{
            height: "30vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            overflow: "hidden",
          }}
        >
          <Boxes
            name={`Box${props.name}`}
            width={windowWidth}
            height={windowHeight / 2}
            container={`container${props.name}`}
          />
        </Box>
        <Projects />
        {/* <InfoBtn handleFrame={handleFrame} /> */}
      </div>
      {frameOpen ? (
        <Frames desktop={windowWidth > 1280} handleChange={handleFrame} />
      ) : null}
      <div style={{ transitionDuration: "0.2s" }}>
        <Backgrounds windowWidth={windowWidth} />
        {/* <UnderWaves /> */}
      </div>
    </div>
  );
}

export default Landing;
