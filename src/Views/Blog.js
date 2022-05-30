import react from "react";
import React, { useEffect, useState, useRef } from "react";
import Waves from "../Components/objects/Waves";
import Links from "../Components/containers/Links";
import { useStyles } from "../Components/styles/Styles";
import Header from "../Components/containers/Header";
import { useSelector, useDispatch } from "react-redux";
import { changeMode } from "../Components/controls/modeSlice";
import { Button } from "@mui/material";

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
    if (darkMode) {
      setFiltered(true);
      boxRef.current.style.setProperty("filter", "invert(100) grayscale(100%)");
    } else {
      setFiltered(false);
      // boxRef.current.style.setProperty("filter", "grayscale(0%)");
    }
    // console.log(filtered);
  }, [darkMode]);

  return (
    <div
      style={{
        position: "absolute",
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
        <Header />
        <Links color={darkMode ? "white" : "#1b1b1b"} darkMode={darkMode} />
        <div>
          <Button color={darkMode ? "white" : "#1b1b1b"} darkMode={darkMode} />
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
