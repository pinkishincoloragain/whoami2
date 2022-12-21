import anniversary from "../../assets/data/anniversary.json";

import { LinkButton } from "../atoms/MyButton";
import { H1, H3, H4 } from "../atoms/Text";
import styled from "styled-components";

import Waves from "../molecules/objects/Waves";

const LinkWrapper = styled.div({
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  width: "100%",
  height: "100%",
});

export default function AnniversaryPopupContent() {
  return (
    <div>
      <H1>{anniversary.title}</H1>
      <H3>{anniversary.subtitle}</H3>
      <H4>{anniversary.description1}</H4>
      <H4>{anniversary.description2}</H4>
      <Waves width={270} height={270} elevation='20' azimuth='45' />
      <H4>
        {anniversary.description3}
        <br />
        {anniversary.description4}
      </H4>
      <br />
      <LinkWrapper>
        <LinkButton to='/anniversary'>{anniversary.popupContent.readButton}</LinkButton>
        <LinkButton to='/login'>{anniversary.popupContent.writeButton}</LinkButton>
      </LinkWrapper>
    </div>
  );
}
