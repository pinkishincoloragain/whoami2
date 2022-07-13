import react from "react";
import React, { useEffect, useState, useRef } from "react";
import { useStyles } from "../Components/containers/Styles";
// import Banner from "../Components/containers/Banner";
import { useSelector, useDispatch } from "react-redux";
import { changeMode } from "../Components/controls/modeSlice";
import { Button } from "@mui/material";

function Blog(props) {
  const darkMode = useSelector((state) => state.mode.value);
  const dispatch = useDispatch();

  const [filtered, setFiltered] = useState(darkMode);
  const [boxStyle, setBoxStyle] = React.useState(false);

  const classes = useStyles();
  const boxRef = useRef(null);

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

    if (props.windowWidth > 1280) {
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
    ></div>
  );
}

export default Blog;
