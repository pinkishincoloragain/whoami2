import React from "react";

import AnniversaryContent from "../molecules/AnniversaryContent";
import AnniversaryForm from "../molecules/AnniversaryForm";
import styled from "styled-components";

const ContentWrapper = styled.div({
  display: "flex",
  flexDirection: "column",
  width: "100%",
  height: "100%",
  color: "white",
  padding: "1rem 2rem 1rem 2rem",
  overflow: "scroll",
});

const PopupStepper = ({ popupStep, handlePopupStep }) => {
  switch (popupStep) {
    case 0:
      return <AnniversaryContent handlePopupStep={handlePopupStep} />;
    case 1:
      return <AnniversaryForm handlePopupStep={handlePopupStep} />;
    default:
      return <AnniversaryContent handlePopupStep={handlePopupStep} />;
  }
};

export default function PopupContent() {
  const [popupStep, setPopupStep] = React.useState(0);

  const handlePopupStep = () => {
    setPopupStep(popupStep + 1);
  };

  return (
    <ContentWrapper>
      <PopupStepper popupStep={popupStep} handlePopupStep={handlePopupStep} />
    </ContentWrapper>
  );
}
