import React from "react";

import AnniversaryPopupContent from "./AnniversaryPopupContent";
import styled from "styled-components";

const ContentWrapper = styled.div({
  display: "flex",
  flexDirection: "column",
  padding: "1rem 1.6rem 2rem 1.6rem",
  width: "100%",
  height: "100%",
  color: "white",
  overflow: "scroll",
});

export default function PopupContent() {
  return (
    <ContentWrapper>
      <AnniversaryPopupContent />
    </ContentWrapper>
  );
}
