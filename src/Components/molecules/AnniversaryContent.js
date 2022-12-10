import styled from "styled-components";
import professorImg from "../../assets/images/professor2.png";
import anniversary from "../../assets/data/anniversary.json";
// import { Link } from "react-router-dom";

import { DarkLink } from "../atoms/MyButton";
import { H1, H2, H3 } from "../atoms/Text";

const AnniversaryImg = styled.img({
  width: "60%",
  borderRadius: "20px",
});

export default function AnniversaryContent({ handlePopupStep }) {
  return (
    <div>
      <H1>{anniversary.title}</H1>
      <br />
      <H3>{anniversary.subtitle}</H3>
      <br />
      <H3>{anniversary.subtitle2}</H3>
      <br />
      <AnniversaryImg src={professorImg} alt='professor bctak is happy' />
      <br />
      <H3>{anniversary.content}</H3>
      <br />
      <DarkLink to='/fish'>{anniversary.button}</DarkLink>
    </div>
  );
}
