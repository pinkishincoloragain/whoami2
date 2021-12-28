import React, { useEffect } from "react";
import { useStyles } from "./Styles";
import Tooltip, { tooltipClasses } from "@mui/material/Tooltip";
import { Typography } from "@mui/material";
import { styled } from "@mui/styles";

export default function Header(props) {
  const classes = useStyles();

  const myungRef = React.useRef(null);
  const binRef = React.useRef(null);

  const HtmlTooltip = styled(({ className, ...props }) => (
    <Tooltip {...props} classes={{ popper: className }} />
  ))(({ theme }) => ({
    [`& .${tooltipClasses.tooltip}`]: {
      backgroundColor: "#f0f0f0",
      color: "rgba(0, 0, 0, 0.87)",
      maxWidth: 220,
      border: "1px solid #f0f0f0",
      fontSize: "1rem",
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
          <Typography
            variant="h1"
            component="div"
            fontWeight={"bold"}
            gutterBottom
            color={props.darkMode ? "white" : "black"}
            flex={3}
            className={classes.letter}
            onClick={() => window.location.reload()}
          >
            PINKISHINCOLORAGAIN
          </Typography>
          {/* {props.darkMode ? "🌙" : "🌞"} */}
        </div>
        <div
          style={{
            paddingTop: "1vh",
            heigth: "6vh",
            display: "flex",
            height: "10vh",
            flex: 1,
            marginLeft: "20vh",
          }}
        >
          <div
            style={{
              fontSize: "4.5vw",
              display: "flex",
              flexDirection: "row",
            }}
          >
            <div
              style={{
                color: "white",
              }}
              onClick={props.handleChange}
            >
              <HtmlTooltip
                title={
                  <React.Fragment>
                    <Typography color="inherit"></Typography>
                    <em>{"바다 명"}</em> <b>{"(Ocean)"}</b> {"溟"}
                  </React.Fragment>
                }
              >
                <b className={classes.hiddenText}>溟</b>
              </HtmlTooltip>
            </div>
            <div
              style={{
                color: "white",
                marginLeft: "2vh",
              }}
              onClick={props.handleChange}
            >
              <Tooltip title="빛날 빈(Light)">
                <b className={classes.hiddenText}>彬</b>
              </Tooltip>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
