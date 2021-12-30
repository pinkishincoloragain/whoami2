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
import ReloadBtn from "../Components/buttons/ReloadBtn";
import stars from "../Components/textures/stars.png";
import Button from "@mui/material/Button";
import { Snackbar } from "@mui/material";

function Landing(props) {
  const darkMode = useSelector((state) => state.mode.value);
  const dispatch = useDispatch();

  const [windowWidth, setWindowWidth] = useState(props.width);
  const [windowHeight, setWindowHeight] = useState(props.height);
  const [filtered, setFiltered] = useState(darkMode);
  const [state, setState] = React.useState({
    open: false,
    vertical: "top",
    horizontal: "center",
  });

  const { vertical, horizontal, open } = state;

  const handleClick = (newState) => () => {
    setState({ open: true, ...newState });
  };

  useEffect(() => {
    // setState({ open: true });
    alert("fish");
  }, [setTimeout(() => {}, 10000)]);

  const handleClose = () => {
    setState({ ...state, open: false });
  };

  const classes = useStyles();

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

  const handleChange = () => {
    dispatch(changeMode());

    if (windowWidth > 1280) {
      setFiltered(true);
    }
  };

  return (
    <div
      style={{
        position: "absolute",
        // overflow: "hidden",
      }}
    >
      <Snackbar
        anchorOrigin={{ vertical, horizontal }}
        open={open}
        onClose={handleClose}
        message="I love snacks"
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
            // marginLeft: "10vw",
            // backgroundColor: "white",
            paddingLeft: "10vw",
            height: "100vh",
            // minWidth: "90vw",
            overflow: "hidden",
            flexWrap: "wrap",
          }}
        >
          <Header />
          <Subheader windowWidth={windowWidth} />

          <LightBtn
            darkMode={darkMode}
            color={darkMode ? "white" : "black"}
            handleChange={handleChange}
            title={darkMode ? "DARKEN" : "LIGHTEN"}
          />

          <Introduction
            darkMode={darkMode}
            color={darkMode ? "white" : "black"}
          />
          <Links color={darkMode ? "white" : "black"} />
          <BlogBtn color={darkMode ? "white" : "black"} />
          <ReloadBtn color={darkMode ? "white" : "black"} />
          <Button
            onClick={handleClick({
              vertical: "top",
              horizontal: "left",
            })}
            sx={{ mr: "1000px" }}
          >
            Top-Left
          </Button>
        </div>
      </div>
      <Frames desktop={windowWidth > 1280} />
      <div style={{ transitionDuration: "0.2s" }}>
        <Backgrounds windowWidth={windowWidth} />
      </div>
    </div>
  );
}

export default Landing;
