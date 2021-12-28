import react from "react";
import React, { useEffect, useState, useRef } from "react";
import Waves from "../Components/objects/Waves";
import Boxes from "../Components/objects/Boxes";
import Links from "../Components/Links";
import Introduction from "../Components/Introduction";
import DesktopFrame from "../Components/DesktopFrame";
import Typography from "@mui/material/Typography";
import { makeStyles } from "@mui/styles";
import Link from "@mui/material/Link";
import { Button, Paper } from "@mui/material";
import { useNavigate } from "react-router-dom";
import MobileFrame from "../Components/MobileFrame";
import BlogBtn from "../Components/BlogBtn";
import HomeBtn from "../Components/HomeBtn";
import Header from "../Components/Header";
import LightBtn from "../Components/LightBtn";
import { useStyles } from "../Components/Styles";

function Landing(props) {
  const [windowWidth, setWindowWidth] = useState(props.width);
  const [windowHeight, setWindowHeight] = useState(props.height);
  const [filtered, setFiltered] = useState(props.darkMode);
  const [alignment, setAlignment] = React.useState("left");
  let nav = useNavigate();

  const classes = useStyles();

  const boxRef = useRef(null);
  console.log(props.darkMode);

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
  //   console.log(props.darkMode);
  //   props.setCookie(props.darkMode, {
  //     path: "/",
  //   });
  //   console.log(props.darkMode);
  // };

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

  const handleChange = () => {
    props.setDarkMode(!props.darkMode);
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

  const handleBlogClick = () => {
    nav("/blog");
  };

  const handleHomeClick = () => {
    nav("/");
  };

  return (
    <div
      style={{
        position: "absolute",
        // overflow: "hidden",
      }}
    >
      {windowWidth > 1280 ? (
        <DesktopFrame desktop={windowWidth > 1280} darkMode={props.darkMode} />
      ) : (
        <MobileFrame darkMode={props.darkMode} />
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
