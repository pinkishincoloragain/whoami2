import React, { useEffect, useRef } from "react";
import { useStyles } from "./Styles";
import Tooltip, { tooltipClasses } from "@mui/material/Tooltip";
import { Typography } from "@mui/material";
import { styled } from "@mui/styles";
import { useSelector, useDispatch } from "react-redux";
import { changeMode } from "./controls/modeSlice";
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
    <div style={{ display: "flex", flexDirection: "row" }}>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          width: "100%",
          //   transitionDuration:"0.2s"
        }}
      >
        <div>
          <Tooltip
            arrow
            placement="right"
            title={
              <Typography fontSize={15}>
                {darkMode ? "Sleep now" : "Wake up"}
              </Typography>
            }
          >
            <Typography
              variant="h5"
              component="div"
              fontWeight={"bold"}
              gutterBottom
              color={darkMode ? "blue" : "white"}
              flex={3}
              className={classes.letter}
              onClick={() => dispatch(changeMode())}
              sx={{ ml: "3px", pr: "2vh", mb: "10vh", mt: "5vh" }}
            >
              PINKISHINCOLORAGAIN
            </Typography>
          </Tooltip>
        </div>

        {/* <Login /> */}
        {/* <div
          style={{
            paddingTop: "1vh",
            heigth: "6vh",
            display: "flex",
            height: "10vh",
            flex: 1,
            marginLeft: "1vh",
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
                color: "grey",
              }}
              onClick={handleClick}
            >
              <HtmlTooltip
                arrow
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
                arrow
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
          </div>
        </div> */}
      </div>
    </div>
  );
}
