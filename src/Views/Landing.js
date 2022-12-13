import * as React from "react";
import styled from "styled-components";
// import BeatifulBar from "../Components/atoms/BeautifulBar";

// import Video from "../Components/templates/Video";
// import Header from "../Components/templates/Header";
// import Banner from "../Components/templates/Banner";
// import TalkTemplate from "../Components/templates/TalkTemplate";
// import SubHeader from "../Components/templates/SubHeader";
import Popup from "../Components/templates/Popup";

const LandingWrapper = styled.div({
  backgroundImage: "linear-gradient(180deg, #000000, #223148)",
  height: "100vh",
  color: "white",
  paddingRight: "10%",
  paddingLeft: "10%",
  paddingTop: "3%",
  paddingBottom: "5%",
  overflow: "hidden",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

const MainWrapper = styled.div({
  zIndex: 0,
  display: "flex",
  flexWrap: "wrap",
  width: "100%",
  backgroundColor: "transparent",
  alignItems: "center",
  flexDirection: "column",
  justifyContent: "center",
  marginTop: "20%",
});

const HeaderWrapper = styled.div({
  width: "80%",
  display: "flex",
  flexDirection: "flex-row",
  backgroundColor: "transparent",
  // position: "fixed",
});

function Landing() {
  React.useEffect(() => {
    window.moveTo(0, 0);
  }, []);
  // return (
  //   <LandingWrapper>
  //     <HeaderWrapper>
  //       <Video />
  //       <Header />
  //       <Popup />
  //     </HeaderWrapper>
  //     <SubHeader />

  //     <MainWrapper>
  //       <BeatifulBar />
  //       {/* <DrawSvg /> */}
  //       <Banner />
  //       <TalkTemplate />
  //     </MainWrapper>
  //   </LandingWrapper>
  // );
  return (
    <LandingWrapper>
      <Popup />
      여긴 아무 것도 없어요!
    </LandingWrapper>
  );
}

export default Landing;
