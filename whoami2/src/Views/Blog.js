import react from "react";
import React, { useEffect, useState, useRef } from "react";
import Waves from "../Components/objects/Waves";
import Boxes from "../Components/objects/Boxes";
import Links from "../Components/Links";
import Introduction from "../Components/Introduction";
import Typography from "@mui/material/Typography";
import { useStyles } from "../Components/Styles";
import BlogBtn from "../Components/buttons/BlogBtn";
import HomeBtn from "../Components/buttons/HomeBtn";
import { useNavigate } from "react-router-dom";
import Header from "../Components/Header";
import LightBtn from "../Components/buttons/LightBtn";
import { useSelector, useDispatch } from "react-redux";
import { changeMode } from "../Components/controls/modeSlice";

function Blog(props) {
  const darkMode = useSelector((state) => state.mode.value);
  const dispatch = useDispatch();

  const [windowWidth, setWindowWidth] = useState(props.width);
  const [windowHeight, setWindowHeight] = useState(props.height);
  const [filtered, setFiltered] = useState(darkMode);
  const [boxStyle, setBoxStyle] = React.useState(false);

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

  const handleBoxStyle = () => {
    setBoxStyle((prev) => !prev);
    if (boxStyle) {
      boxRef.current.style.setProperty("filter", "invert(0) grayscale(0%)");
    } else {
      boxRef.current.style.setProperty("filter", "invert(100) grayscale(100%)");
    }
  };

  const handleChange = () => {
    dispatch(changeMode());

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
    if (darkMode === true) {
      setFiltered(true);
      boxRef.current.style.setProperty("filter", "invert(100) grayscale(100%)");
    } else {
      setFiltered(false);
      boxRef.current.style.setProperty("filter", "grayscale(0%)");
    }
    // console.log(filtered);
  }, [darkMode]);

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
            <Header handleChange={handleChange} />
            <Typography
              variant="h5"
              component="div"
              fontWeight={"bold"}
              gutterBottom
              marginLeft="1vh"
              color={props.darkMode === true ? "black" : "white"}
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
          color={darkMode === true ? "white" : "black"}
          handleChange={handleChange}
          title={darkMode === true ? "LIGHT" : "DARK"}
        />

        <Introduction darkMode={darkMode} />
        <Links darkMode={darkMode} />
        <div>
          <BlogBtn darkMode={darkMode} />
        </div>
        <div>
          <HomeBtn darkMode={darkMode} />
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

export default Blog;