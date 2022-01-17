import React, { useEffect, useState, useRef, useCallback } from "react";
import Links from "../Components/Links";
import Introduction from "../Components/Introduction";
import Frames from "./Frames";
import BlogBtn from "../Components/buttons/BlogBtn";
import HomeBtn from "../Components/buttons/HomeBtn";
import Header from "../Components/Header";
import LightBtn from "../Components/buttons/LightBtn";
import { useStyles } from "../Components/Styles";
import { useSelector, useDispatch } from "react-redux";
import { changeMode } from "../Components/controls/modeSlice";
import Subheader from "../Components/Subheader";
import Backgrounds from "../Components/Backgrounds";
import { Snackbar, Typography } from "@mui/material";
import InfoBtn from "../Components/buttons/InfoBtn";
import Waves from "../Components/objects/Waves";
import CatchPhrase from "../Components/CatchPhrase";
import { CSSTransition } from "react-transition-group";

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

  const { vertical, horizontal, open } = state;
  const classes = useStyles();

  const handleClick = (newState) => () => {
    setState({ open: true, ...newState });
  };

  useEffect(() => {
    if (localStorage.getItem("darkMode") === null)
      setState({ open: true, vertical: "top", horizontal: "left" });
  }, []);

  const handleClose = () => {
    setState({ ...state, open: false });
  };

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
      style={{
        position: "absolute",
        // overflow: "hidden",
      }}
    >
      {/* <CSSTransition
        in={catchOpen}
        appear={true}
        timeout={1000}
        unmountOnExit
        classNames={classes.transition}
      >
        <CatchPhrase handleCatchClick={handleCatchClick} />
      </CSSTransition> */}
      <Snackbar
        anchorOrigin={{ vertical, horizontal }}
        open={open}
        onClose={handleClose}
        message="Touch here!"
        key={vertical + horizontal}
      />
      <div
        style={{
          zIndex: 1,
          position: "absolute",
          display: "flex",
          margin: "auto",
          alignItems: "center",
          flexDirection: "row",
          justifyContent: "space-evenly",
          backgroundColor: "transparent",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: "80vw",
            paddingLeft: "10vw",
            height: "100vh",
            overflow: "hidden",
            flexWrap: "wrap",
          }}
        >
          <Header />
          <Subheader windowWidth={windowWidth} />
          {/*           
          <LightBtn
            darkMode={darkMode}
            color={darkMode ? "white" : "black"}
            handleChange={handleChange}
            title={darkMode ? "DARKEN" : "LIGHTEN"}
          /> */}
          <br />
          <Introduction
            darkMode={darkMode}
            color={darkMode ? "white" : "black"}
          />
          {/* <br /> */}
          {/* <Links color={darkMode ? "white" : "black"} /> */}
          <br />
          <BlogBtn color={darkMode ? "white" : "black"} />
          <br />
          <InfoBtn
            color={darkMode ? "white" : "black"}
            handleFrame={handleFrame}
          />

          {/* <ReloadBtn color={darkMode ? "white" : "black"} /> */}
        </div>
      </div>
      {frameOpen ? (
        <Frames desktop={windowWidth > 1280} handleChange={handleFrame} />
      ) : null}
      <div style={{ transitionDuration: "0.2s" }}>
        <Backgrounds windowWidth={windowWidth} />
      </div>
      <div style={{ transitionDuration: "0.2s" }}></div>
    </div>
  );
}

export default Landing;
