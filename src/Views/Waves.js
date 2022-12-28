import Waves from "../Components/molecules/objects/Waves";
import adminLetter from "../assets/data/adminLetter.json";
import styled from "styled-components";

import { H2 } from "../Components/atoms/Text";

const LetterWrapper = styled.div({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  width: "100%",
  minWidth: "20rem",
  height: "100%",
});

const LetterBackgroundWrapper = styled.div({
  display: "flex",
  position: "absolute",
  width: "60%",
  top: "30%",
  left: "20%",
  flexDirection: "column",
  alignItems: "center",
  fontSize: "1rem",
  backgroundColor: "transparent",
});
export default function WavesView() {
  return (
    <div>
      <LetterBackgroundWrapper>
        <LetterWrapper>
          <H2>{adminLetter.name}</H2>
          {adminLetter.description1}
          <br />
          <br />
          {adminLetter.description2}
          <br />
          <br />
          {adminLetter.description3}
          <br />
          <br />
          {adminLetter.description4}
          <br />
          <br />
          {adminLetter.description5}
          <br />
          <br />
          {adminLetter.description6}
          <br />
          <br />
          {adminLetter.description7}
        </LetterWrapper>
      </LetterBackgroundWrapper>
      <Waves width={1080} height={1000} elevation='20' azimuth='45' borderRadius='0' />
    </div>
  );
}
