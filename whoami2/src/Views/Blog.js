import react from "react";
import React, { useEffect, useState, useRef } from "react";
import Waves from "../Components/objects/Waves";
import Boxes from "../Components/objects/Boxes";
import Links from "../Components/Links";
import Introduction from "../Components/Introduction";
import DesktopFrame from "../Components/DesktopFrame";
import Typography from "@mui/material/Typography";
import { makeStyles } from "@mui/styles";
import { Button, Paper } from "@mui/material";
import MobileFrame from "../Components/MobileFrame";
import { useStyles } from "../Components/Styles";
import BlogBtn from "../Components/BlogBtn";
import { useNavigate } from "react-router-dom";
import HomeBtn from "../Components/HomeBtn";
import Header from "../Components/Header";
import LightBtn from "../Components/LightBtn";

function Landing(props) {
  const [windowWidth, setWindowWidth] = useState(props.width);
  const [windowHeight, setWindowHeight] = useState(props.height);
  const [filtered, setFiltered] = useState(props.darkMode);
  const [boxStyle, setBoxStyle] = React.useState(false);
  let nav = useNavigate();

  const classes = useStyles();

  const boxRef = useRef(null);

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

  const handleBoxStyle = () => {
    setBoxStyle((prev) => !prev);
    if (boxStyle) {
      boxRef.current.style.setProperty("filter", "invert(0) grayscale(0%)");
    } else {
      boxRef.current.style.setProperty("filter", "invert(100) grayscale(100%)");
    }
  };

  //   useEffect(() => {
  //     setTimeout(() => {
  //       handleChange();
  //     }, 10);
  //   }, []);

  // const handleCookie = () => {
  //   console.log(props.darkMode);
  //   props.setCookie(props.darkMode, {
  //     path: "/",
  //   });
  //   console.log(props.darkMode);
  // };

  const handleChange = () => {
    props.setDarkMode(!props.darkMode);
    localStorage.setItem("darkMode", !props.darkMode);

    if (windowWidth > 1280) {
      if (!filtered) {
        setFiltered(true);
        handleBoxStyle();
        // boxRef.current.style.setProperty("filter", "invert(100) ");
      } else {
        setFiltered(false);
        handleBoxStyle();
      }
    }
  };

  useEffect(() => {
    if (props.darkMode === true) {
      setFiltered(true);
      boxRef.current.style.setProperty("filter", "invert(100) grayscale(100%)");
    } else {
      setFiltered(false);
      boxRef.current.style.setProperty("filter", "grayscale(0%)");
    }
    // console.log(filtered);
  }, [props.darkMode]);

  return (
    <div
      style={{
        position: "absolute",
        // overflow: "hidden",
      }}
    >
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
          <div>
            <Header darkMode={props.darkMode} handleChange={handleChange} />
            <Typography
              variant="h5"
              component="div"
              fontWeight={"bold"}
              gutterBottom
              marginLeft="1vh"
              color={props.darkMode ? "white" : "black"}
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
        <LightBtn handleChange={handleChange} />

        <Introduction darkMode={props.darkMode} />
        <Links darkMode={props.darkMode} />
        <div>
          <BlogBtn darkMode={props.darkMode} />
        </div>
        <div>
          <HomeBtn darkMode={props.darkMode} />
        </div>
      </div>
      {windowWidth > 1280 ? (
        <div
          ref={boxRef}
          style={{
            filter: "saturate(1)",
            transition: "0.5s linear",
            // transitionDuration:
          }}
        >
          <Waves />
        </div>
      ) : (
        <Waves />
      )}
      {/* {windowWidth > 1280 ? <div /> : <div />} */}
    </div>
  );
}

export default Landing;
