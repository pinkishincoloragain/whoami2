import styled from "styled-components";
import professorImg from "../../../assets/images/professor2.png";
import anniversary from "../../../assets/data/anniversary.json";
import { DarkButton } from "../MyButton";

import { H1, H2, H3 } from "../text/Text";

const AnniversaryImg = styled.img({
  width: "60%",
  borderRadius: "20px",
});

export default function AnniversaryContent() {
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
      <DarkButton>{anniversary.button}</DarkButton>
    </div>
  );
}
