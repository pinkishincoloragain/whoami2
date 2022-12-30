import { useState, useEffect } from "react";
import Waves from "../Components/molecules/objects/Waves";
import adminLetter from "../assets/data/adminLetter.json";
import styled from "styled-components";

import { H3 } from "../Components/atoms/Text";

const LetterWrapper = styled.div({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  width: "100%",
  minWidth: "20rem",
  height: "100%",
  color: "white",
  padding: "12px",
  backdropFilter: "blur(10px)",
});

const LetterBackgroundWrapper = styled.div({
  display: "flex",
  position: "absolute",
  // width: "60%",
  top: "20%",
  left: "10%",
  marginRight: "10%",
  flexDirection: "column",
  alignItems: "center",
  fontSize: "1rem",
  backgroundColor: "transparent",

  "@media (min-width: 768px)": {
    top: "30%",
    // fontSize: "1.5rem",
  },
});
export default function WavesView() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div>
      <LetterBackgroundWrapper>
        <LetterWrapper>
          <H3>{adminLetter.name}</H3>
          <br />
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
      <Waves width={width} height={800} elevation='20' azimuth='45' borderRadius='0' />
    </div>
  );
}
