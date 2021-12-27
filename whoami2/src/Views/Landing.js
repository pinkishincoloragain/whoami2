import react from "react";
import React, { useEffect, useState, useRef } from "react";
import Waves from "../Components/objects/Waves";
import Boxes from "../Components/objects/Boxes";
import TemporaryDrawer from "../Components/Links";
import Introduction from "../Components/Introduction";
import DesktopFrame from "../Components/DesktopFrame";
import Typography from "@mui/material/Typography";
import { makeStyles } from "@mui/styles";
import Link from "@mui/material/Link";
import { Button, Paper } from "@mui/material";
import { useNavigate } from "react-router-dom";
import MobileFrame from "../Components/MobileFrame";

function Landing(props) {
  const [windowWidth, setWindowWidth] = useState(props.width);
  const [windowHeight, setWindowHeight] = useState(props.height);
  const [filtered, setFiltered] = useState(false);
  const [alignment, setAlignment] = React.useState("left");
  let nav = useNavigate();

  const useStyles = makeStyles({
    letter: {
      "&:hover": {
        color: "grey",
        transitionDuration: "0.2s",
      },
      transitionDuration: "0.2s",
    },
    button: {
      "&:hover": {
        color: "#FFCC00",
        transitionDuration: "0.2s",
        cursor: "pointer",
      },
      transitionDuration: "0.2s",
    },
  });
  const classes = useStyles();

  const handleAlignment = (event, newAlignment) => {
    setAlignment(newAlignment);
  };

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

  useEffect(() => {
    setTimeout(() => {
      handleChange();
    }, 10);
  }, []);

  // const handleCookie = () => {
  //   console.log(props.darkMode);
  //   props.setCookie(props.darkMode, {
  //     path: "/",
  //   });
  //   console.log(props.darkMode);
  // };

  const handleChange = () => {
    props.setDarkMode(!props.darkMode);
    localStorage.setItem("darkMode", !props.darkMode);

    if (windowWidth > 1280) {
      if (!filtered) {
        setFiltered(true);
        boxRef.current.style.setProperty("transition-duration", "0.5s ");
        // boxRef.current.style.setProperty("filter", "invert(100) ");
        boxRef.current.style.setProperty(
          "filter",
          "invert(100) grayscale(100%)"
        );
      } else {
        setFiltered(false);
        boxRef.current.style.setProperty("filter", "grayscale(0%)");
      }
    }
  };

  const handleBlogClick = () => {
    nav("/blog");
  };

  // console.log(localStorage.darkMode);

  return (
    <div
      style={{
        position: "absolute",
        // overflow: "hidden",
      }}
    >
      {windowWidth > 1280 ? (
        <DesktopFrame desktop={windowWidth > 1280} darkMode={props.darkMode} />
      ) : (
        <MobileFrame darkMode={props.darkMode} />
      )}
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
            <div style={{ display: "flex", flexDirection: "row" }}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
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
                    <div style={{ color: "white" }} onClick={handleChange}>
                      <b>溟</b>
                    </div>
                    <div style={{ marginLeft: "2vh" }} onClick={handleChange}>
                      <b>彬</b>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <Typography
              variant="h5"
              component="div"
              fontWeight={"bold"}
              gutterBottom
              marginLeft="1vh"
              color={props.darkMode ? "white" : "black"}
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
        {props.darkMode ? (
          <div
            style={{
              width: "15vw",
              height: "8vh",
              marginLeft: "1vh",
              padding: "none",
            }}
            onClick={handleChange}
            label=" "
          >
            <Typography
              variant="h3"
              component="div"
              fontWeight="bold"
              gutterBottom
              color="#f0f0f0"
              className={classes.button}
            >
              Dark
            </Typography>
          </div>
        ) : (
          <div
            style={{
              width: "15vw",
              marginLeft: "1vh",
              height: "8vh",
            }}
            onClick={handleChange}
            label=" "
          >
            <Typography
              variant="h3"
              component="div"
              fontWeight={"bold"}
              gutterBottom
              color="black"
              className={classes.button}
            >
              Light
            </Typography>
          </div>
        )}

        <Introduction darkMode={props.darkMode} />
        <TemporaryDrawer darkMode={props.darkMode} />
        <div>
          {props.darkMode ? (
            <Button>
              <Link to="/blog" style={{ textDecoration: "none" }}>
                <Typography variant="h4" color="white">
                  BLOG
                </Typography>
              </Link>
            </Button>
          ) : (
            <Button onClick={handleBlogClick}>
              <Typography variant="h4" color="black">
                BLOG
              </Typography>
            </Button>
          )}
        </div>
      </div>
      {windowWidth > 1280 ? (
        <div
          ref={boxRef}
          style={{
            filter: "saturate(1)",
            transition: "0.8s linear",
          }}
        >
          <Boxes />
        </div>
      ) : (
        <Waves />
      )}
      {/* {windowWidth > 1280 ? <div /> : <div />} */}
    </div>
  );
}

export default Landing;
