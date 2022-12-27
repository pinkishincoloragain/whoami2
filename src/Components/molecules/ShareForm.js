import { useState } from "react";

import anniversary from "../../assets/data/anniversary.json";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import useSharableLink from "../../hooks/useSharableLink";
import { H4 } from "../atoms/Text";

const ShareFormWrapper = styled.div({
  width: "100%",
  display: "flex",
  marginTop: "1rem",
  flexDirection: "row",
  justifyContent: "flex-end",
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
  width: "300px",
  display: "flex",
  alignItems: "center",
});

export default function ShareForm() {
  const [link, copyToClipboard] = useSharableLink();
  const [isAlertOpen, setIsAlertOpen] = useState(false);
  const navigate = useNavigate();

  const handleShareButtonClick = () => {
    copyToClipboard();
    setIsAlertOpen(true);
  };

  return (
    <ShareFormWrapper>
      <AlertWrapper>
        <H4>{isAlertOpen && anniversary.share.sharePhrase}</H4>
      </AlertWrapper>
      <ShareButton onClick={() => navigate("/")}>{anniversary.home}</ShareButton>
      <ShareButton onClick={handleShareButtonClick}>{anniversary.share.share}</ShareButton>
    </ShareFormWrapper>
  );
}
