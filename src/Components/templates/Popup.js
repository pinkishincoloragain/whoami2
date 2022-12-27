import { useState, useEffect } from "react";
import styled from "styled-components";
import PopupContent from "../organisms/PopupContent";
import PopupButtonGroup from "../molecules/PopupButtonGroup";
import {useNavigate} from "react-router-dom";

import colors from "../colors.json";
import { TriangleOverflowWrapper, TriangleWrapper } from "../atoms/Triangle";
import Triangle from "../atoms/Triangle";
import { logout } from "../utils/firebase/signInWithEmail";

const PopupBackground = styled.div({
  position: "absolute",
  top: "0",
  right: "0",
  width: "100%",
  minHeight: "100%",
  zIndex: 10,
  display: "flex",
  // alignItems: "center",
  justifyContent: "center",
  backdropFilter: "blur(10px)",
  paddingBlock: "1rem",
  paddingInline: "1rem",
});

const PopupWrapper = styled.div({
  display: "flex",
  flexDirection: "column",
  position: "relative",
  width: "100%",
  minWidth: "20rem",
  maxWidth: "30rem",
  minHeight: "30rem",
  backgroundColor: colors.dark.background,
  borderRadius: "1rem",
  zIndex: "0",
});

export default function Popup({ children }) {
  const [popupOpen, setPopupOpen] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    window.moveTo(0, 0);
  });

  const handlePopupClose = () => {
    setPopupOpen(false);
    alert("창을 끄면 로그아웃이 되죠..");
    logout();
    navigate("/");
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
          <PopupContent>{children}</PopupContent>
        </PopupWrapper>
      </PopupBackground>
    )
  );
}
