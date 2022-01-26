import React, { useEffect, useState, useRef, useCallback } from "react";
import Links from "../Components/Links";
import Introduction from "./Introduction";
import Frames from "./Frames";
import BlogBtn from "../Components/buttons/BlogBtn";
import HomeBtn from "../Components/buttons/HomeBtn";
import ProjectBtn from "../Components/buttons/ProjectBtn";
import Header from "../Components/Header";
import LightBtn from "../Components/buttons/LightBtn";
import { useStyles } from "../Components/styles/Styles";
import { useSelector, useDispatch } from "react-redux";
import { changeMode } from "../Components/controls/modeSlice";
import Subheader from "../Components/Subheader";
import Backgrounds from "../Components/Backgrounds";
import { Snackbar, Typography } from "@mui/material";
import InfoBtn from "../Components/buttons/InfoBtn";
import Waves from "../Components/objects/Waves";
import UnderWaves from "../Components/objects/UnderWaves";
import CatchPhrase from "./CatchPhrase";
import { CSSTransition } from "react-transition-group";
import Sidebar from "../Components/Sidebar";

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
      <Sidebar />
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
          <ProjectBtn
            color={darkMode ? "white" : "black"}
            handleFrame={handleFrame}
          />
        </div>
      </div>
      {frameOpen ? (
        <Frames desktop={windowWidth > 1280} handleChange={handleFrame} />
      ) : null}
      <div style={{ transitionDuration: "0.2s" }}>
        <Backgrounds windowWidth={windowWidth} />
        {/* <UnderWaves /> */}
      </div>
      <div style={{ transitionDuration: "0.2s" }}></div>
    </div>
  );
}

export default Landing;
