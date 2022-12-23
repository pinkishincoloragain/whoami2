import anniversary from "../../assets/data/anniversary.json";
import BeautifulBar from "../atoms/BeautifulBar";
import styled from "styled-components";

import { DarkLink } from "../atoms/MyButton";
import { Emphasize, H1, H2, H3, H4 } from "../atoms/Text";

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

  zIndex: "-1",
});

export default function AnniversaryPopupContent() {
  return (
    <div>
      <WavesWrapper>
        <Waves width={600} height={600} elevation='20' azimuth='45' />
      </WavesWrapper>
      <H2>
        <Emphasize>{anniversary.mainTitle1}</Emphasize>
        <br />
        {anniversary.mainTitle2}
        <br />
        <div >{anniversary.mainTitle3} <BeautifulBar reverse /> </div>
      </H2>
      <H3>{anniversary.subtitle}</H3>
      <H4>{anniversary.description1}</H4>
      <H4>{anniversary.description2}</H4>
      <H4>
        {anniversary.description3}
        <br />
        {anniversary.description4}
      </H4>
      <br />
      <DarkLink to='/anniversary'>{anniversary.button}</DarkLink>
    </div>
  );
}
