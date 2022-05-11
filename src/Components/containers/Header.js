import React, { useEffect, useState, useRef } from "react";
import { useStyles } from "../styles/Styles";
import Tooltip, { tooltipClasses } from "@mui/material/Tooltip";
import { Typography } from "@mui/material";
import { styled } from "@mui/styles";
import { useSelector, useDispatch } from "react-redux";
import { changeMode } from "../controls/modeSlice";
import { Link } from "react-router-dom";
import Login from "./Clock";

export default function Header(props) {
  const darkMode = useSelector((state) => state.mode.value);
  const [headerBar, setHeaderBar] = useState(false);
  const dispatch = useDispatch();

  const classes = useStyles();
  const pinkRef = useRef(null);

  useEffect(() => {
    if (pinkRef.current) {
      pinkRef.current.focus();
    }
  }, []);

  const changeHeader = (scroll) => {
    if (scroll >= 80) {
      setHeaderBar(true);
    } else {
      setHeaderBar(false);
    }
  };

  const handleMouseDown = (e) => {
    e.target.style.color = "red";
  };
  const handleMouseUp = (e) => {
    e.target.style.color = !darkMode ? "#1b1b1b" : "#ffffff";
  };
  const handleMouseEnter = (e) => {
    e.target.style.color = "#FFCC00";
  };
  const handleMouseOut = (e) => {
    e.target.style.color = !darkMode ? "#1b1b1b" : "#ffffff";
  };

  window.addEventListener("resize", changeHeader);

  return (
    <div
      className={
        headerBar ? classes.headerWrapperSticky : classes.headerWrapper
      }
      style={{
        borderTop: !darkMode ? "1vh solid #1b1b1b" : "1vh solid #ffffff",
        borderBottom: !darkMode ? "1vh solid #1b1b1b" : "1vh solid #ffffff",
      }}
    >
      <Tooltip
        arrow
        placement="left"
        title={
          <Typography fontSize={15}>
            {darkMode ? "Sleep now" : "Wake up"}
          </Typography>
        }
      >
        <Typography
          fontSize={"max(16px, 6.81vw)"}
          component="div"
          fontWeight={"bold"}
          marginLeft={"-2px"}
          letterSpacing={"-0.001px"}
          color={darkMode ? "red" : "#1b1b1b"}
          flex={3}
          className={classes.letter}
          onClick={() => dispatch(changeMode())}
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
          onMouseEnter={handleMouseEnter}
          onMouseOut={handleMouseOut}
          // data-aos="fade-up"
          // data-aos-anchor-placement="center-bottom"
          data-aos-duration="800"
        >
          PINKISHINCOLORAGAIN
        </Typography>
      </Tooltip>
    </div>
  );
}
