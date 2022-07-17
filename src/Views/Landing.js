import { useSelector } from "react-redux";

import HeaderBar from "../Components/header/HeaderBar";
import DevMode from "./DevMode";
import Introduction from "./Introduction";
import styled from "@emotion/styled";
// import Waves from "../Components/objects/Waves";

function Landing(props) {
  const darkMode = useSelector((state) => state.mode.value);

  // const [scroll, setScroll] = useState(0);
  // const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  // useEffect(() => {
  //   window.addEventListener("resize", (e) => {
  //     setWindowWidth(window.innerWidth);
  //   });
  // }, [window.innerWidth]);

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
    <LandingWrapper className="px-[10%]">
      <HeaderBar />
      <MainWrapper className="z-1 flex align-middle flex-col justify-even w-full flex-wrap">
        <Introduction />
        <DevMode />
      </MainWrapper>
    </LandingWrapper>
  );
}

export default Landing;
