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
    window.moveTo(0, 0);
  });

  React.useEffect(() => {
    // document.body.scrollTop = document.documentElement.scrollTop = 0;
    if (popupOpen) {
      // document.querySelector("html").style.overflow = "hidden";
    }
    // return () => (document.querySelector("html").style.overflow = "auto");
  }, [popupOpen]);

  const handlePopupClose = () => {
    setPopupOpen(false);
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
