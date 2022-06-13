import { Suspense, useEffect, useState, useTransition } from "react";
import { useStyles } from "../Components/containers/Styles";
import { useSelector, useDispatch } from "react-redux";
import { Box } from "@mui/system";
import { styled } from "@mui/styles";

import HeaderBar from "../Components/containers/HeaderBar";
import Description from "../Components/containers/Description";
import DevMode from "./DevMode";
import ProjectExpl from "../Components/containers/ProjectExpl";
import LandingSkeleton from "../Components/Skeleton";
import Rain from "../Components/Rain";
import Introduction from "./Introduction";
import { Project } from "./Items/Project";
import Projects from "./Projects";
// import Waves from "../Components/objects/Waves";

function Landing(props) {
  const classes = useStyles();
  const darkMode = useSelector((state) => state.mode.value);

  const [scroll, setScroll] = useState(0);
  const [graphicOpen, setGraphicOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [windowHeight, setWindowHeight] = useState(window.innerHeight);

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

  const handleGraphicOpen = () => {
    setGraphicOpen(false);
  };

  const LandingWrapper = styled(`div`)({
    backgroundColor: darkMode ? "#1f1f1f" : "white",
    color: !darkMode ? "#1f1f1f" : "white",
  });

  const MainWrapper = styled(`div`)({
    zIndex: 1,
    display: "grid | flex",
    margin: "auto",
    alignItems: "center",
    justifyContent: "space-evenly",
    backgroundColor: "transparent",
    width: "80vw",
    marginLeft: "10vw",
  });

  return (
    <Suspense fallback={<LandingSkeleton />}>
      <LandingWrapper
        onWheel={(e) => {
          // console.log(e.deltaY);
          // setScroll(e.deltaY);
        }}
      >
        <HeaderBar width={windowWidth} scroll={scroll} />
        <MainWrapper>
          <Description
            graphicOpen={graphicOpen}
            handleGraphicOpen={handleGraphicOpen}
            width={windowWidth}
          />
          {/* <ProjectExpl /> */}
          <DevMode />
          {/* <Introduction /> */}
          {/* <Project /> */}
          <Projects />
        </MainWrapper>
      </LandingWrapper>
    </Suspense>
  );
}

export default Landing;
