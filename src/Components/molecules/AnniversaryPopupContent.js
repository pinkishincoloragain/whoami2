import styled from "styled-components";
import professorImg from "../../assets/images/professor2.png";
import anniversary from "../../assets/data/anniversary.json";

import { DarkLink } from "../atoms/MyButton";
import { H1, H3, H4 } from "../atoms/Text";

import Waves from "./objects/Waves";
import { Suspense } from "react";

const AnniversaryImg = styled.img({
  width: "60%",
  borderRadius: "20px",
});

export default function AnniversaryPopupContent() {
  return (
    <div>
      <H1>{anniversary.title}</H1>
      <H3>{anniversary.subtitle}</H3>
      <H4>{anniversary.description1}</H4>
      <H4>{anniversary.description2}</H4>
      <Suspense fallback={<div>Loading...</div>}>
        <Waves width={270} height={270} elevation='20' azimuth='45' />
      </Suspense>
      {/* <AnniversaryImg src={professorImg} alt='professor bctak is happy' /> */}
      <H4>{anniversary.description3}</H4>
      <br />
      <DarkLink to='/anniversary'>{anniversary.button}</DarkLink>
    </div>
  );
}
