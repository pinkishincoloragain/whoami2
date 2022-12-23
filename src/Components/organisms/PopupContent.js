import React from "react";

import AnniversaryPopupContent from "./AnniversaryPopupContent";
import styled from "styled-components";

const ContentWrapper = styled.div({
  position: "relative",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  paddingInline: "1.5rem",
  paddingBlock: "1.5rem",
  // padding: "1rem 1.6rem 2rem 1.6rem",
  width: "100%",
  // height: "100%",
  color: "white",
  overflow: "hidden",
  height: "100%",
  gap: "1rem",
});

export default function PopupContent({ children }) {
  return (
    <ContentWrapper>
      {children}
    </ContentWrapper>
  );
}
