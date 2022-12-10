import AnniversaryContent from "../atoms/popup/AnniversaryContent";
import styled from "styled-components";

const ContentWrapper = styled.div({
  display: "flex",
  flexDirection: "column",
  width: "100%",
  height: "100%",
  color: "black",
  padding: "1rem 2rem 1rem 2rem",
  overflow: "scroll",
});

export default function PopupContent() {
  return (
    <ContentWrapper>
      <AnniversaryContent />
    </ContentWrapper>
  );
}
