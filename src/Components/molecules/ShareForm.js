import React from "react";

import anniversary from "../../assets/data/anniversary.json";
import styled from "styled-components";
import useSharableLink from "../../hooks/useSharableLink";

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
  const [isAlertOpen, setIsAlertOpen] = React.useState(false);

  const handleShareButtonClick = () => {
    copyToClipboard();
    setIsAlertOpen(true);
  };

  return (
    <ShareFormWrapper>
      <AlertWrapper>{isAlertOpen && anniversary.share.sharePhrase}</AlertWrapper>
      <ShareButton onClick={handleShareButtonClick}>{anniversary.share.share}</ShareButton>
    </ShareFormWrapper>
  );
}
