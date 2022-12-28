import anniversary from "../../assets/data/anniversary.json";
import { lazy, useState, Suspense, useEffect } from "react";

import { LinkButton, NavigateButton } from "../atoms/MyButton";
import { Emphasize, H2, H3, H4 } from "../atoms/Text";
import styled from "styled-components";

import BeautifulBar from "../atoms/BeautifulBar";

import { useNavigate } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { isLoggedInState } from "../utils/recoil/authRecoil";
import { props1, props2, props3 } from "./WaveProps";
import WaveOptions from "./WaterOptions";

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
  isolation: "isolate",

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
  // const onClick = useInstallPwa();

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [windowHeight, setWindowHeight] = useState(window.innerHeight * 0.6);
  const [propsOption, setPropsOption] = useState("0");

  useEffect(() => {
    if (Date.now() > 1624678400000 && Date.now() < 1624764800000) setPropsOption("0");
    if (Date.now() > 1624764800000 && Date.now() < 1624851200000) setPropsOption("1");
    if (Date.now() > 1624851200000 && Date.now() < 1624937600000) setPropsOption("2");
  });

  const handleLoginClick = () => {
    isLoggedIn ? navigate("/mypage") : navigate("/login");
  };

  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <WavesWrapper>
          <WaveOptions
            borderRadius={windowWidth * 0.5}
            option={propsOption}
            width={windowWidth}
            height={windowWidth}
          />
        </WavesWrapper>
      </Suspense>
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
