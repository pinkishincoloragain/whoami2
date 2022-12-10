import React from "react";

import AnniversaryContent from "../molecules/AnniversaryContent";
import styled from "styled-components";

const ContentWrapper = styled.div({
  display: "flex",
  flexDirection: "column",
  padding: "1rem 2rem 2rem 2rem",
  width: "100%",
  height: "100%",
  color: "white",
  overflow: "scroll",
});

export default function PopupContent() {
  return (
    <ContentWrapper>
      <AnniversaryContent />
    </ContentWrapper>
  );
}
