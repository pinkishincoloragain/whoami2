import React, { useState, useRef } from "react";
import { useStyles } from "../containers/Styles";
import Tooltip from "@mui/material/Tooltip";
import { Typography } from "@mui/material";
import styled from "@emotion/styled";
import { useSelector, useDispatch } from "react-redux";
import { changeMode } from "../controls/modeSlice";

export default function Logo(props) {
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

  const HeaderTypography = styled(`div`)({
    "&:hover": {
      color: "#FFCC00",
      transitionDuration: "0.1s",
      cursor: "pointer",
    },
    fontSize: "max(2rem, 10px)",
    transitionDuration: "0.2s",
  });

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
        <HeaderTypography
          className="superBold"
          variant="h2"
          onClick={() => dispatch(changeMode())}
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
          onMouseEnter={handleMouseEnter}
          onMouseOut={handleMouseOut}
          ref={logoRef}
        >
          PINKISHINCOLORAGAIN
        </HeaderTypography>
      </Tooltip>
    </div>
  );
}
