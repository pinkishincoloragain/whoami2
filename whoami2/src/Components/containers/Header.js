import React, { useEffect, useRef } from "react";
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
  const dispatch = useDispatch();

  const classes = useStyles();
  const pinkRef = useRef(null);

  useEffect(() => {
    if (pinkRef.current) {
      pinkRef.current.focus();
    }
  }, []);

  const HtmlTooltip = styled(({ className, ...props }) => (
    <Tooltip {...props} classes={{ popper: className }} />
  ))(({ theme }) => ({
    [`& .${tooltipClasses.tooltip}`]: {
      backgroundColor: "#f0f0f0",
      color: "rgba(0, 0, 0, 0.87)",
      maxWidth: 220,
      border: "1px solid #f0f0f0",
      fontSize: "1rem",
      placement: "top-start",
    },
  }));

  const title = (
    <Typography fontSize={18}>
      Pinkish in color again -&nbsp;
      <Link className={classes.hiddenLink} to="/gerardway">
        Gerard way
      </Link>
    </Typography>
  );

  const NoMaxWidthTooltip = styled(({ className, ...props }) => (
    <Tooltip {...props} classes={{ popper: className }} title={title}></Tooltip>
  ))({
    [`& .${tooltipClasses.tooltip}`]: {
      maxWidth: "none",
    },
  });

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "row",
            width: "80vw",
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
            fontSize={"max(16px, 5vw)"}
            component="div"
            fontWeight={"bold"}
            gutterBottom
            color={darkMode ? "blue" : "white"}
            flex={3}
            className={classes.letter}
            onClick={() => dispatch(changeMode())}
            sx={{ pr: "2vh" }}
            overflow="hidden"
          >
            PINKISHINCOLORAGAIN
          </Typography>
        </Tooltip>
      </div>
    </div>
  );
}
