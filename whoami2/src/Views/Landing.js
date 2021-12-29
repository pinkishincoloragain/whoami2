import React, { useEffect, useState, useRef, useCallback } from "react";
import Waves from "../Components/objects/Waves";
import Boxes from "../Components/objects/Boxes";
import Links from "../Components/Links";
import Introduction from "../Components/Introduction";
import DesktopFrame from "./DesktopFrame";
import Typography from "@mui/material/Typography";
import { makeStyles } from "@mui/styles";
import Link from "@mui/material/Link";
import { Button, Paper } from "@mui/material";
import { useNavigate } from "react-router-dom";
import MobileFrame from "./MobileFrame";
import BlogBtn from "../Components/buttons/BlogBtn";
import HomeBtn from "../Components/buttons/HomeBtn";
import Header from "../Components/Header";
import LightBtn from "../Components/buttons/LightBtn";
import { useStyles } from "../Components/Styles";
import { useSelector, useDispatch } from "react-redux";
import { changeMode } from "../Components/controls/modeSlice";
function Landing(props) {
  const darkMode = useSelector((state) => state.mode.value);
  const dispatch = useDispatch();

  const [windowWidth, setWindowWidth] = useState(props.width);
  const [windowHeight, setWindowHeight] = useState(props.height);
  const [filtered, setFiltered] = useState(darkMode);

  const handleDarkMode = () => {
    dispatch(changeMode());
  };

  const classes = useStyles();

  const boxRef = useCallback((node) => {
    if (node !== null) {
      if (darkMode === true) {
        setFiltered(true);
        node.current.style.setProperty("filter", "invert(100) grayscale(100%)");
      } else {
        console.log(node);
        setFiltered(false);
        
        node.current.style.setProperty("filter", "grayscale(0%)");
      }
    }
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

  // const handleCookie = () => {
  //   console.log(darkMode);
  //   props.setCookie(props.darkMode, {
  //     path: "/",
  //   });
  //   console.log(props.darkMode);
  // };

  // useEffect(() => {
  //   if (darkMode === true) {
  //     setFiltered(true);
  //     boxRef.current.style.setProperty("filter", "invert(100) grayscale(100%)");
  //   } else {
  //     setFiltered(false);
  //     boxRef.current.style.setProperty("filter", "grayscale(0%)");
  //   }
  //   // console.log(filtered);
  // }, [darkMode]);

  const handleChange = () => {
    handleDarkMode();
    // localStorage.setItem("darkMode", !props.darkMode);

    if (windowWidth > 1280) {
      if (!filtered) {
        setFiltered(true);
        boxRef.current.style.setProperty("transition-duration", "0.5s ");
        // boxRef.current.style.setProperty("filter", "invert(100) ");
        boxRef.current.style.setProperty(
          "filter",
          "invert(100) grayscale(100%)"
        );
      } else {
        setFiltered(false);
        boxRef.current.style.setProperty("filter", "grayscale(0%)");
      }
    }
  };

  return (
    <div
      style={{
        position: "absolute",
        // overflow: "hidden",
      }}
    >
      {windowWidth > 1280 ? (
        <DesktopFrame desktop={windowWidth > 1280} darkMode={darkMode} />
      ) : (
        <MobileFrame darkMode={darkMode} />
      )}
      <div
        style={{
          zIndex: 1,
          position: "absolute",
          display: "flex",
          flexDirection: "column",
          marginLeft: "1vh",
        }}
      >
        {windowWidth > 1280 ? (
          <div style={{ width: "20vw" }}>
            <Header
              color={darkMode ? "black" : "white"}
              handleChange={handleChange}
            />
            <Typography
              variant="h5"
              component="div"
              fontWeight={"bold"}
              gutterBottom
              marginLeft="1vh"
              color={darkMode === true ? "white" : "black"}
              className={classes.letter}
            >
              MYUNGBIN SON
            </Typography>
          </div>
        ) : (
          <div style={{ width: "90vw", fontSize: "8vw" }}>
            PINKISHINCOLORAGAIN
          </div>
        )}
        <LightBtn
          darkMode={darkMode}
          color={darkMode === true ? "white" : "black"}
          handleChange={handleChange}
          title={darkMode === true ? "DARK" : "LIGHT"}
        />

        <Introduction
          darkMode={darkMode}
          color={darkMode === true ? "white" : "black"}
        />
        <Links
          color={darkMode === true ? "white" : "black"}
          darkMode={darkMode}
        />
        <div>
          <BlogBtn
            darkMode={darkMode}
            color={darkMode === true ? "white" : "black"}
          />
        </div>
        <div>
          <HomeBtn
            color={darkMode === true ? "white" : "black"}
            darkMode={darkMode}
          />
        </div>
      </div>
      <div style={{ transitionDuration: "0.5s" }}>
        {windowWidth > 1280 ? (
          <div
            ref={boxRef}
            style={{
              filter: "saturate(1)",
              transition: "0.5s linear",
            }}
          >
            <Boxes />
          </div>
        ) : (
          <Waves />
        )}
        {/* {windowWidth > 1280 ? <div /> : <div />} */}
      </div>
    </div>
  );
}

export default Landing;
