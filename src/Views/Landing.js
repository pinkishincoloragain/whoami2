import { Suspense, useEffect, useState } from "react";
import { useStyles } from "../Components/containers/Styles";
import { useSelector, useDispatch } from "react-redux";
import { styled } from "@mui/styles";

import HeaderBar from "../Components/containers/HeaderBar";
import Description from "../Components/containers/Description";
import DevMode from "./DevMode";
import LandingSkeleton from "../Components/Skeleton";
import Projects from "./Projects";
// import Waves from "../Components/objects/Waves";

function Landing(props) {
  const classes = useStyles();
  const darkMode = useSelector((state) => state.mode.value);

  const [scroll, setScroll] = useState(0);
  const [graphicOpen, setGraphicOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    window.addEventListener("resize", (e) => {
      setWindowWidth(window.innerWidth);
    });
  }, [window.innerWidth]);

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
