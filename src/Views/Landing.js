import * as React from "react";
import styled from "styled-components";
import AnniversaryPopupContent from "../Components/molecules/AnniversaryPopupContent";
// import BeatifulBar from "../Components/atoms/BeautifulBar";

// import Video from "../Components/templates/Video";
// import Header from "../Components/templates/Header";
// import Banner from "../Components/templates/Banner";
// import TalkTemplate from "../Components/templates/TalkTemplate";
// import SubHeader from "../Components/templates/SubHeader";
import Popup from "../Components/templates/Popup";

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
    // <Popup />
    <div>
      <Popup>
        <AnniversaryPopupContent />
      </Popup>
      여긴 아무 것도 없어요!
    </div>
  );
}

export default Landing;
