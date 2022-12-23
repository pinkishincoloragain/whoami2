import React from "react";

import styled from "styled-components";
import { H2 } from "../atoms/Text";
import anniversary from "../../assets/data/anniversary.json";
import WaveOptions from "./WaterOptions";

const ShareBox = styled.div(props => {
  return {
    maxWidth: "26rem",
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
  position: "absolute",
  top: "6%",
  left: "10%",
});

export default function ShareImgBox({ option, width }) {
  const height = (width / 9) * 16;
  console.log(option);

  return (
    <ShareBox>
      <ShareImgBoxText contentEditable suppressContentEditableWarning={true}>
        <H2
          style={{
            whiteSpace: "pre-wrap",
          }}
        >
          {[...anniversary.share.title.split(" ")].join("\n")}
        </H2>
      </ShareImgBoxText>
      <WaveOptions option={option} width={width} height={height} />
    </ShareBox>
  );
}
