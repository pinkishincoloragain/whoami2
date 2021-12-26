import react from "react";
import React, { useEffect, useState, useRef } from "react";
import { useCookies } from "react-cookie";
import Waves from "../Components/Waves";
import Boxes from "../Components/Boxes";
import TemporaryDrawer from "../Components/TemporaryDrawer";
import TemporaryHistory from "../Components/TemporaryHistory";
import Frames from "../Components/Frames";
import Typography from "@mui/material/Typography";

import { Paper } from "@mui/material";

function Landing(props) {
  const [checked, setChecked] = useState(false);
  const [windowWidth, setWindowWidth] = useState(props.width);
  const [windowHeight, setWindowHeight] = useState(props.height);
  const [darkMode, setDarkMode] = useState(props.darkMode);
  const [filtered, setFiltered] = useState(props.darkMode);
  const [cookies, setCookie, removeCookie] = useCookies(["mode"]);

  const boxRef = useRef(null);

  console.log(darkMode);

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

  const handleCookie = () => {
    console.log(darkMode);

    let expires = new Date();
    expires.setTime(expires.getTime() * 1000 + 1 * 60 * 60 * 1000);

    setCookie("mode", darkMode, {
      path: "/",
      expires,
    });
    console.log(cookies.mode);
  };

  const handleChange = () => {
    setChecked((prev) => !prev);
    setDarkMode((prev) => !prev);
    props.setDarkMode(darkMode);
    console.log(darkMode);
    console.log(cookies.mode);
    handleCookie();

    if (!filtered) {
      setFiltered(true);
      boxRef.current.style.setProperty("transition-duration", "0.5s ");
      // boxRef.current.style.setProperty("filter", "invert(100) ");
      boxRef.current.style.setProperty("filter", "invert(100) grayscale(100%)");
    } else {
      setFiltered(false);
      boxRef.current.style.setProperty("filter", "grayscale(0%)");
    }
  };

  const icon = (
    <Paper sx={{ m: 1 }} elevation={4} style={{ padding: "1vh" }}>
      <Typography variant="h5" component="div" gutterBottom>
        Education
      </Typography>
      <Typography variant="h6" component="div" gutterBottom>
        - Kyungpook Nat'l University
      </Typography>
      <Typography variant="h6" component="div" gutterBottom>
        - Technological University Dublin
      </Typography>
    </Paper>
  );

  const mobileFrame = (
    <div
      style={{
        display: "flex",
        margin: "auto",
        width: "100%",
        height: "100%",
        justifyContent: "center",
        alignItems: "center",
        position: "absolute",
      }}
    >
      <div
        style={{
          width: "50vw",
          height: "40vh",
          position: "absolute",
          backgroundColor: "transparent",
          border: "8px solid black",
          zIndex: "0",
        }}
      ></div>
    </div>
  );

  return (
    <div
      style={{
        position: "absolute",
        overflow: "hidden",
      }}
    >
      <Frames desktop={windowWidth > 1280} darkMode={darkMode} />
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
                    color={darkMode ? "white" : "black"}
                    flex={3}
                  >
                    PINKISHINCOLORAGAIN
                  </Typography>
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
              color={darkMode ? "white" : "black"}
            >
              MYUNGBINSON
            </Typography>
          </div>
        ) : (
          <div style={{ width: "90vw", fontSize: "8vw" }}>
            PINKISHINCOLORAGAIN
          </div>
        )}
        {darkMode ? (
          <div
            style={{
              width: "15vw",
              height: "6vh",
              marginLeft: "1vh",
              padding: "none",
            }}
            checked={checked}
            onClick={handleChange}
            label=" "
          >
            <Typography
              variant="h3"
              component="div"
              fontWeight={"bold"}
              gutterBottom
              color="#f0f0f0"
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
            checked={checked}
            onClick={handleChange}
            label=" "
          >
            <Typography
              variant="h3"
              component="div"
              fontWeight={"bold"}
              gutterBottom
              color="black"
            >
              Light
            </Typography>
          </div>
        )}
        <div style={{ height: "5vh" }}></div>

        <TemporaryDrawer />
        <TemporaryHistory />
      </div>
      {windowWidth > 1280 ? (
        <div
          ref={boxRef}
          style={{ filter: "saturate(1)", transitionDuration: "0.2s" }}
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
