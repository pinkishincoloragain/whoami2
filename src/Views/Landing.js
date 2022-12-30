import { useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { LinkButton } from "../Components/atoms/MyButton";
import { H2, H4 } from "../Components/atoms/Text";
import AnniversaryPopupContent from "../Components/molecules/AnniversaryPopupContent";
// import BeatifulBar from "../Components/atoms/BeautifulBar";

// import Video from "../Components/templates/Video";
// import Header from "../Components/templates/Header";
// import Banner from "../Components/templates/Banner";
// import TalkTemplate from "../Components/templates/TalkTemplate";
// import SubHeader from "../Components/templates/SubHeader";
import Popup from "../Components/templates/Popup";

const LinkWrapper = styled.a({
  textDecoration: "underline",
});

const NavLinkWrapper = styled(Link)({
  textDecoration: "underline",
});

function Landing() {
  useEffect(() => {
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
      Special Thanks to:
      <br />
      <br />
      <LinkWrapper target={"_blank"} href='https://github.com/chaejunlee'>
        이채준 (Front-end)
      </LinkWrapper>
      <br />
      <br />
      <LinkWrapper target={"_blank"} href='https://www.behance.net/jungdesign/'>
        하 정 (Design)
      </LinkWrapper>
      <br />
      <br />
      그리고.. 배포를 기다려 준 여러분들
      <br />
      <br />
      다들 고마워..
    </div>
  );
}

export default Landing;
