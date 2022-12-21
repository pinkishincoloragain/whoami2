import React from "react";

import LettersContent from "../organisms/LettersContent";

import styled from "styled-components";
import StatsContent from "../organisms/StatsContent";

const LettersContentWrapper = styled.div({
  width: "100%",
  flexDirection: "column",
  minWidth: "20rem",
  maxWidth: "30rem",
  height: "100%",
});

export default function LetterAndStats() {
  return (
    <LettersContentWrapper>
      <StatsContent />
      <LettersContent />
    </LettersContentWrapper>
  );
}
