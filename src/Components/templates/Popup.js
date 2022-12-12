import React from "react";
import styled from "styled-components";
import PopupContent from "../organisms/PopupContent";
import PopupButtonGroup from "../molecules/PopupButtonGroup";

import colors from "../colors.json";

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
  width: "50%",
  minWidth: "20rem",
  maxWidth: "28rem",
  minHeight: "30rem",
  backgroundColor: colors.dark.background,
  borderRadius: "1rem",
});

export default function Popup() {
  const [popupOpen, setPopupOpen] = React.useState(true);

  React.useEffect(() => {
    if (popupOpen) {
      document.querySelector("html").style.overflow = "hidden";
    }
    return () => {
      enableScroll();
    };
  }, []);

  const enableScroll = () => {
    document.querySelector("html").style.overflow = "auto";
  };

  const handlePopupClose = () => {
    setPopupOpen(false);
    enableScroll();
  };

  return (
    popupOpen && (
      <PopupBackground>
        <PopupWrapper>
          <PopupButtonGroup handlePopupClose={handlePopupClose} />
          <PopupContent />
        </PopupWrapper>
      </PopupBackground>
    )
  );
}
