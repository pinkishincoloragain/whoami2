import React from "react";

import styled from "styled-components";
import { H2 } from "../atoms/Text";
import anniversary from "../../assets/data/anniversary.json";
import WaveOptions from "./WaterOptions";

const ShareBox = styled.div(props => {
  return {
    // maxWidth: "26rem",
    overflow: "hidden",
    minHeight: "20rem",
    opacity: "1",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    border: "1px solid white",
    backdropFilter: "blur(40px)",
    opacity: props.opacity,
  };
});

const ShareImgBoxText = styled.div({
  position: "relative",
  marginTop: "2rem",
  marginLeft: "15%",
  width: "100%",
  height: "1px",
  whiteSpace: "pre-wrap",
});

const WaveOptionsWrapper = styled.div({
  marginTop: "calc(-1px - 2rem)",
});

export default function ShareImgBox({ option, width }) {
  const height = (width / 9) * 16;

  return (
    <ShareBox>
      <ShareImgBoxText contentEditable suppressContentEditableWarning={true}>
        <H2>{[...anniversary.share.title.split(" ")].join("\n")}</H2>
      </ShareImgBoxText>
      <WaveOptionsWrapper>
        <WaveOptions option={option} width={width} height={height} />
      </WaveOptionsWrapper>
    </ShareBox>
  );
}
