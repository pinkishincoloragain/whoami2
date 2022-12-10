import styled from "styled-components";
import professorImg from "../../../assets/images/professor2.png";
import anniversary from "../../../assets/data/anniversary.json";
import { BlueButton } from "../MyButton";

import { H1, H2, H3 } from "../text/Text";

const AnniversaryImg = styled.img({
  width: "60%",
});

export default function AnniversaryContent() {
  return (
    <div>
      <H1>{anniversary.title}</H1>
      <H2>{anniversary.subtitle}</H2>
      <br />
      <AnniversaryImg src={professorImg} alt='professor is happy' />
      <H3>{anniversary.content}</H3>
      <br />
      <BlueButton>{anniversary.button}</BlueButton>
    </div>
  );
}
