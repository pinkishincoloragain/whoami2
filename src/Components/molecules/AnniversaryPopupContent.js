import anniversary from "../../assets/data/anniversary.json";

import { LinkButton, NavigateButton } from "../atoms/MyButton";
import { Emphasize, H2, H3, H4 } from "../atoms/Text";
import styled from "styled-components";

import BeautifulBar from "../atoms/BeautifulBar";

import { useNavigate } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { isLoggedInState } from "../utils/recoil/authRecoil";

import Waves from "./objects/Waves";

const WavesWrapper = styled.div({
  position: "absolute",
  display: "flex",
  alignItems: "center",

  inset: "0",
  height: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  borderRadius: "50%",
  transform: "translate(0, -5%)",

  zIndex: "-10",

  "@media (max-width: 400px)": {
    scale: "0.7",
  },
});

const TextWrapper = styled.div({
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-end",
  // alignItems: "center",
  gap: "0.5rem",
  width: "100%",
  flexGrow: "1",
  paddingBlock: "1rem",
});

const LinkWrapper = styled.div({
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  gap: "1rem",
  width: "100%",
});

export default function AnniversaryPopupContent() {
  const navigate = useNavigate();
  const isLoggedIn = useRecoilValue(isLoggedInState);

  const handleLoginClick = () => {
    isLoggedIn ? navigate("/mypage") : navigate("/login");
  };

  return (
    <>
      <WavesWrapper>
        <Waves width={550} height={550} elevation='20' azimuth='45' />
      </WavesWrapper>
      <H2>
        <Emphasize>{anniversary.mainTitle1}</Emphasize>
        <br />
        {anniversary.mainTitle2}
        <br />
        <div>
          {anniversary.mainTitle3} <BeautifulBar reverse />
        </div>
      </H2>
      <TextWrapper>
        <H3>{anniversary.subtitle}</H3>
        <H4>{anniversary.description1}</H4>
        <H4>{anniversary.description2}</H4>
        <H4>
          {anniversary.description3}
          <br />
          {anniversary.description4}
        </H4>
      </TextWrapper>
      <LinkWrapper>
        <LinkButton to='/anniversary'>{anniversary.popupContent.writeButton}</LinkButton>
        <NavigateButton onClick={handleLoginClick}>
          {anniversary.popupContent.readButton}
        </NavigateButton>
      </LinkWrapper>
    </>
  );
}
