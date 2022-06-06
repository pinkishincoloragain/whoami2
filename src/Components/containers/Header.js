import React, { useEffect, useState, useRef } from "react";
import { useStyles } from "./Styles";
import Tooltip, { tooltipClasses } from "@mui/material/Tooltip";
import { Typography } from "@mui/material";
import { styled } from "@mui/styles";
import { useSelector, useDispatch } from "react-redux";
import { changeMode } from "../controls/modeSlice";
import { Link } from "react-router-dom";

export default function Header(props) {
  const darkMode = useSelector((state) => state.mode.value);
  const [headerBar, setHeaderBar] = useState(false);
  const dispatch = useDispatch();
  const logoRef = useRef();
  const classes = useStyles();


  const changeHeader = (scroll) => {
    if (scroll >= 80) {
      setHeaderBar(true);
    } else {
      setHeaderBar(false);
    }
  };

  const handleMouseDown = () => {
    logoRef.current.style.color = "red";
  };
  const handleMouseUp = () => {
    logoRef.current.style.color = darkMode ? "#1b1b1b" : "#ffffff";
  };
  const handleMouseEnter = () => {
    logoRef.current.style.color = "#FFCC00";
  };
  const handleMouseOut = () => {
    logoRef.current.style.color = !darkMode ? "#1b1b1b" : "#ffffff";
  };

  window.addEventListener("resize", changeHeader);

  return (
    <div className={classes.flexRow}>
      <Tooltip
        arrow
        placement="right"
        title={
          <Typography fontSize={15}>
            {darkMode ? "Now dark mode" : "Now light mode"}
          </Typography>
        }
      >
        <Typography
          variant="h2"
          fontSize="max(1.4rem, 10px)"
          // color={darkMode ? "#ffffff" : "#1b1b1b"}
          className={classes.letter}
          onClick={() => dispatch(changeMode())}
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
          onMouseEnter={handleMouseEnter}
          onMouseOut={handleMouseOut}
          ref={logoRef}
        >
          PINKISHINCOLORAGAIN
        </Typography>
      </Tooltip>
    </div>
  );
}
