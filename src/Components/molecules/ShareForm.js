import { useEffect, useState } from "react";

import anniversary from "../../assets/data/anniversary.json";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import useSharableLink from "../../hooks/useSharableLink";
import { H2, H3, H4 } from "../atoms/Text";

const ShareFormWrapper = styled.div({
  width: "100%",
  display: "flex",
  marginTop: "1rem",
  flexDirection: "row",
  justifyContent: "flex-end",
});

const SharableLinkWrapper = styled.div({
  width: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  marginTop: "1rem",
});

const ButtonsWrapper = styled.div({
  width: "100%",
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "center",
  gap: "1rem",
  marginBottom: "1rem",
});

const ShareButton = styled.button({
  fontWeight: "light",
  fontSize: "18px",
  width: "120px",
  minWidth: "100px",
  height: "36px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: "transparent",
  "&:active": {
    scale: "0.98",
  },

  "@media (max-width: 768px)": {
    height: "56px",
    "&:active": {
      scale: "0.96",
    },
  },
});

const AlertWrapper = styled.div({
  position: "fixed",
  width: "50vw",
  height: "50vw",
  top: "30vh",
  left: "25vw",
  display: "flex",
  alignItems: "center",
  backdropFilter: "blur(20px)",
  borderRadius: "50%",
  // backgroundColor: "rgba(255, 255, 255, 0.2)",
  // opacity: "0.8",
  borderRadius: "2rem",
  color: "white",
  padding: "1rem",
  alignItems: "center",
  justifyContent: "center",
  // fontWeight: "lighter",

  animation: "fade-in 0.5s ease-in-out",
  transition: "opacity 0.5s ease-in-out",

  "@media (min-width: 768px)": {
    width: "20vw",
    height: "20vw",
    top: "40vh",
    left: "40vw",
  },
});

const LinkWrapper = styled.div({
  width: "100%",
  maxWidth: "500px",
  display: "flex",
  flexDirection: "row",
  lineBreak: "anywhere",
});

export default function ShareForm() {
  const [link, copyToClipboard] = useSharableLink();
  const [isAlertOpen, setIsAlertOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (isAlertOpen) {
      setTimeout(() => {
        setIsAlertOpen(false);
      }, 6000);
    }
  });

  const handleShareButtonClick = () => {
    copyToClipboard();
    setIsAlertOpen(true);
  };

  return (
    <ShareFormWrapper>
      {isAlertOpen && <AlertWrapper>{anniversary.share.sharePhrase}</AlertWrapper>}
      <SharableLinkWrapper>
        <ButtonsWrapper>
          <ShareButton onClick={() => navigate("/")}>{anniversary.home}</ShareButton>
          <ShareButton onClick={handleShareButtonClick}>{anniversary.share.share}</ShareButton>
        </ButtonsWrapper>
        <LinkWrapper>
          <LinkWrapper>{link}</LinkWrapper>
        </LinkWrapper>
      </SharableLinkWrapper>
    </ShareFormWrapper>
  );
}
