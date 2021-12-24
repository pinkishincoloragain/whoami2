import react from "react";
import React, { useEffect, useState, useRef } from "react";
import * as THREE from "three";
import Waves from "../Components/Waves";
import Boxes from "../Components/Boxes";
import TemporaryDrawer from "../Components/TemporaryDrawer";
import TemporaryHistory from "../Components/TemporaryHistory";
import Frames from "../Components/Frames";
import Typography from "@mui/material/Typography";
import Switch from "@mui/material/Switch";
import Button from "@mui/material/Button";
import IcnBar from "../Components/IcnBar";

import {
  CardHeader,
  Card,
  CardActions,
  Paper,
  Box,
  Fade,
  Collapse,
} from "@mui/material";
import {
  FormControl,
  FormLabel,
  FormControlLabel,
  RadioGroup,
  Radio,
} from "@mui/material";

function Landing(props) {
  const [checked, setChecked] = useState(false);
  const [windowWidth, setWindowWidth] = useState(props.width);
  const [windowHeight, setWindowHeight] = useState(props.height);
  const [darkMode, setDarkMode] = useState(false);
  const [filtered, setFiltered] = useState(false);

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

  const handleChange = () => {
    setChecked((prev) => !prev);
    setDarkMode((prev) => !prev);
    if (!filtered) {
      setFiltered(true);
      boxRef.current.style.setProperty("filter", "grayscale(100%)");
    } else {
      setFiltered(false);
      boxRef.current.style.setProperty("filter", "grayscale(0%)");
    }

    console.log(darkMode);
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
    <div style={{ position: "absolute", overflow: "hidden" }}>
      <Frames desktop={windowWidth > 1280} />
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
              <Typography
                variant="h1"
                component="div"
                fontWeight={"bold"}
                gutterBottom
              >
                PINKISHINCOLORAGAIN
              </Typography>
              {darkMode ? (
                <div
                  style={{
                    width: "10vw",
                    height: "10vh",
                    marginLeft: "1vh",
                    marginTop: "1vh",
                    backgroundColor: "white",
                  }}
                  checked={checked}
                  onClick={handleChange}
                  label=" "
                ></div>
              ) : (
                <div
                  style={{
                    width: "10vw",
                    height: "10vh",
                    marginLeft: "1vh",
                    marginTop: "1vh",
                    backgroundColor: "black",
                  }}
                  checked={checked}
                  onClick={handleChange}
                  label=" "
                ></div>
              )}
            </div>
            <Typography
              variant="h5"
              component="div"
              fontWeight={"bold"}
              gutterBottom
            >
              PINKISHINCOLORAGAIN
            </Typography>
          </div>
        ) : (
          <div style={{ width: "90vw", fontSize: "8vw" }}>
            PINKISHINCOLORAGAIN
          </div>
        )}
        <div style={{ height: "5vh" }}></div>

        <TemporaryDrawer />
        <TemporaryHistory />
      </div>
      {windowWidth > 1280 ? (
        <div ref={boxRef} style={{ filter: "saturate(1)" }}>
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
