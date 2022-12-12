import styled from "styled-components";
import professorImg from "../../assets/images/professor2.png";
import anniversary from "../../assets/data/anniversary.json";

import { DarkLink } from "../atoms/MyButton";
import { H1, H3, H4 } from "../atoms/Text";

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
      <AnniversaryImg src={professorImg} alt='professor bctak is happy' />
      <H4>{anniversary.description3}</H4>
      <br />
      <DarkLink to='/anniversary'>{anniversary.button}</DarkLink>
    </div>
  );
}
