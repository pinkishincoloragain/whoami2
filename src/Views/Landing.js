import React, { useEffect, useState } from "react";
import Header from "../Components/containers/Header";
import { Collapse } from "@mui/material";
import { useStyles } from "../Components/styles/Styles";
import { useSelector, useDispatch } from "react-redux";
import HeaderBar from "../Components/containers/HeaderBar";
import Description from "../Components/containers/Description";
import Projects from "./Projects";
import Boxes from "../Components/objects/Boxes";
import { Box } from "@mui/system";
import Waves from "../Components/objects/Waves";

function Landing(props) {
  const classes = useStyles();
  const darkMode = useSelector((state) => state.mode.value);

  // const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  // const [windowHeight, setWindowHeight] = useState(props.height);
  const [graphicOpen, setGraphicOpen] = useState(false);
  const [scroll, setScroll] = useState(0);

  // useEffect(() => {
  //   window.addEventListener("resize", (e) => {
  //     setWindowWidth(window.innerWidth);
  //   });
  // }, [window.innerWidth]);

  // useEffect(() => {
  //   window.addEventListener("resize", (e) => {
  //     setWindowHeight(window.innerHeight);
  //   });
  // }, [window.innerHeight]);

  useEffect(() => {
    handleCatchClick();
  }, []);

  const handleCatchClick = () => {
    setGraphicOpen(false);
  };

  return (
    <div
      onWheel={(e) => {
        console.log(e.deltaY);
        setScroll(e.deltaY);
      }}
      style={{
        backgroundColor: darkMode ? "#1f1f1f" : "white",
        color: !darkMode ? "#1f1f1f" : "white",
      }}
    >
      <HeaderBar scroll={scroll} />
      <div className={classes.mainWrapper}>
        <Description
          graphicOpen={graphicOpen}
          setGraphicOpen={setGraphicOpen}
        />
        {/* <Collapse orientation="vertical" in={graphicOpen}>
          <Box
            sx={{
              height: windowHeight / 2,
            }}
            className={classes.graphicWrapper}
            onClick={() => setGraphicOpen(!graphicOpen)}
          >
            {!darkMode ? (
              <Boxes
                name={`Box${props.name}`}
                width={windowWidth}
                height={windowHeight / 2}
                container={`container${props.name}`}
                bkgColor={"#ffffff"}
                thetaSpeed={darkMode ? 0.1 : 0.5}
              />
            ) : (
              <Waves
                width={windowWidth}
                height={windowHeight / 2}
                azimuth="1"
                elevation="2"
              />
            )}
          </Box>
        </Collapse> */}

        <Projects />
      </div>
    </div>
  );
}

export default Landing;
