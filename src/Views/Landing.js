import { Suspense, useEffect, useState } from "react";
import { useStyles } from "../Components/containers/Styles";
import { useSelector, useDispatch } from "react-redux";
import { styled } from "@mui/styles";

import HeaderBar from "../Components/header/HeaderBar";
import Description from "../Components/containers/Description";
import DevMode from "./DevMode";
import LandingSkeleton from "../Components/Skeleton";
import Projects from "./Projects";
import Introduction from "./Introduction";
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
    backgroundImage: darkMode
      ? "linear-gradient(180deg, #131221, #2D4263 90.71%)"
      : "linear-gradient(180deg, #ffffff, #2D4263 90.71%)",
    color: !darkMode ? "#1f1f1f" : "white",
  });

  const MainWrapper = styled(`div`)({
    zIndex: 1,
    display: "grid | flex",
    backgroundColor: "transparent",
  });

  return (
    <Suspense fallback={<LandingSkeleton />}>
      <LandingWrapper className="px-[10%]">
        <HeaderBar width={windowWidth} scroll={scroll} />
        <MainWrapper className="z-1 flex align-middle flex-col justify-even w-full flex-wrap">
          <Introduction />
          <DevMode />
          <Projects />
        </MainWrapper>
      </LandingWrapper>
    </Suspense>
  );
}

export default Landing;
