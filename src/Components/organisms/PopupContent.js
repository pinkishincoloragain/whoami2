import React from "react";

import AnniversaryPopupContent from "../molecules/AnniversaryPopupContent";
import styled from "styled-components";

const ContentWrapper = styled.div({
  display: "flex",
  flexDirection: "column",
  paddingInline: "1.5rem",
  paddingBottom: "2rem",
  // padding: "1rem 1.6rem 2rem 1.6rem",
  width: "100%",
  // height: "100%",
  color: "white",
});

export default function PopupContent({ children }) {
  return (
    <ContentWrapper>
      {children}
    </ContentWrapper>
  );
}
