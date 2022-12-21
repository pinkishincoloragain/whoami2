import anniversary from "../../assets/data/anniversary.json";
import BeautifulBar from "../atoms/BeautifulBar";
import styled from "styled-components";

import { DarkLink } from "../atoms/MyButton";
import { Emphasize, H1, H2, H3, H4 } from "../atoms/Text";

import Waves from "./objects/Waves";

const WavesWrapper = styled.div({
  marginBlock: "1rem",
  marginInline: "auto",
  paddingInline: "0.5rem",
  width: "fit-content",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  aspectRatio: "1 / 1",
  zIndex: "-1",
  backgroundColor: "white",
  borderRadius: "50%",
});

export default function AnniversaryPopupContent() {
  return (
    <div>
      <H2>
        <Emphasize>{anniversary.mainTitle1}</Emphasize>
        <br />
        {anniversary.mainTitle2}
        <br />
        <div >{anniversary.mainTitle3} <BeautifulBar reverse /> </div>
      </H2>
      <WavesWrapper>
        <Waves width={270} height={270} elevation='20' azimuth='45' />
      </WavesWrapper>
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
