import styled from "styled-components";

const ContentWrapper = styled.div({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  width: "100%",
  height: "100%",
  color: "black",
});

export default function PopupContent() {
  return (
    <ContentWrapper>
      <h1>Popup</h1>
      <h1>Popup</h1>
      <h1>Popup</h1>
      <h1>Popup</h1>
      <h1>Popup</h1>
    </ContentWrapper>
  );
}
