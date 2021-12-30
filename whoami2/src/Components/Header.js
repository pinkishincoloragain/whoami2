import React, { useEffect } from "react";
import { useStyles } from "./Styles";
import Tooltip, { tooltipClasses } from "@mui/material/Tooltip";
import { Typography } from "@mui/material";
import { styled } from "@mui/styles";
import { useSelector, useDispatch } from "react-redux";
import { changeMode } from "./controls/modeSlice";

export default function Header(props) {
  const darkMode = useSelector((state) => state.mode.value);
  const dispatch = useDispatch();

  const classes = useStyles();

  const handleClick = () => {
    dispatch(changeMode());
  };

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

  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          width: "80%",
          //   transitionDuration:"0.2s"
        }}
      >
        <div>
          <Tooltip title="change item" placement="top">
            <Typography
              variant="h1"
              component="div"
              fontWeight={"bold"}
              gutterBottom
              color={darkMode ? "white" : "black"}
              flex={3}
              className={classes.letter}
              onClick={() => window.location.reload()}
              sx={{ ml: "3px" }}
            >
              PINKISHINCOLORAGAIN
            </Typography>
          </Tooltip>
          {/* {props.darkMode===true ? "🌙" : "🌞"} */}
        </div>
        <div
          style={{
            paddingTop: "1vh",
            heigth: "6vh",
            display: "flex",
            height: "10vh",
            flex: 1,
            // marginLeft: "20vh",
          }}
        >
          {/* <div
            style={{
              fontSize: "4.5vw",
              display: "flex",
              flexDirection: "row",
            }}
          >
            <div
              style={{
                color: "grey",
              }}
              onClick={handleClick}
            >
              <HtmlTooltip
                title={
                  <React.Fragment>
                    <Typography color="inherit">means</Typography>
                    <b>{"Ocean"}</b>
                  </React.Fragment>
                }
              >
                <div className={classes.hiddenText}>
                  <b>溟</b>
                </div>
              </HtmlTooltip>
            </div>
            <div
              style={{
                color: "grey",
                marginLeft: "2vh",
              }}
              onClick={handleClick}
            >
              <HtmlTooltip
                title={
                  <React.Fragment>
                    <Typography color="inherit">means</Typography>
                    <b>{"Light"}</b>
                  </React.Fragment>
                }
              >
                <b className={classes.hiddenText}>彬</b>
              </HtmlTooltip>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
}
