import React from "react";

import LettersContent from "../organisms/LettersContent";
import NavigateContent from "../organisms/NavigateContent";
import StatsContent from "../organisms/StatsContent";

import styled from "styled-components";

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
      <NavigateContent />
    </LettersContentWrapper>
  );
}
