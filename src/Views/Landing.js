import { Suspense, useEffect, useState, useTransition } from "react";
import { useStyles } from "../Components/containers/Styles";
import { useSelector, useDispatch } from "react-redux";
import { Button } from "@mui/material";
import { Box } from "@mui/system";
import { styled } from "@mui/styles";

import HeaderBar from "../Components/containers/HeaderBar";
import Description from "../Components/containers/Description";
import DevMode from "./DevMode";
import LandingExpl from "../Components/containers/LandingExpl";
import LandingSkeleton from "./Skeleton";

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

  const LandingWrapper = styled(Box)({
    backgroundColor: darkMode ? "#1f1f1f" : "white",
    color: !darkMode ? "#1f1f1f" : "white",
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
        <div className={classes.mainWrapper}>
          <Description
            graphicOpen={graphicOpen}
            handleGraphicOpen={handleGraphicOpen}
            width={windowWidth}
          />
          <LandingExpl />
        </div>
        <Box>
          <DevMode />
        </Box>
      </LandingWrapper>
    </Suspense>
  );
}

export default Landing;
