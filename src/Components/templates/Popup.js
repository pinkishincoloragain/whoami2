import React from "react";
import styled from "styled-components";
import PopupContent from "../organisms/PopupContent";
import PopupButtonGroup from "../molecules/PopupButtonGroup";

import colors from "../colors.json";
import { TriangleOverflowWrapper, TriangleWrapper } from "./AnniversaryForm";
import Triangle from "../atoms/Triangle";

const PopupBackground = styled.div({
  position: "absolute",
  top: "0",
  right: "0",
  width: "100%",
  height: "100%",
  zIndex: 10,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  overflow: "hidden",
  backdropFilter: "blur(10px)",
});

const PopupWrapper = styled.div({
  position: "relative",
  width: "100%",
  minWidth: "20rem",
  maxWidth: "30rem",
  minHeight: "30rem",
  // backgroundColor: "transparent",
  backgroundColor: colors.dark.background,
  borderRadius: "1rem",
  zIndex: "0",
  overflow: "hidden",
});

export default function Popup() {
  const [popupOpen, setPopupOpen] = React.useState(true);

  React.useEffect(() => {
    window.moveTo(0, 0);
  });

  const handlePopupClose = () => {
    setPopupOpen(false);
  };

  return (
    popupOpen && (
      <PopupBackground>
        <PopupWrapper>
          <TriangleOverflowWrapper>
            <TriangleWrapper>
              <Triangle />
            </TriangleWrapper>
          </TriangleOverflowWrapper>
          <PopupButtonGroup handlePopupClose={handlePopupClose} />
          <PopupContent />
        </PopupWrapper>
      </PopupBackground>
    )
  );
}
