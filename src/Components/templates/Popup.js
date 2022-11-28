import styled from "styled-components";

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
});

const PopupWrapper = styled.div({
  width: "50%",
  height: "50%",
  backgroundColor: "white",
  borderRadius: "0.5rem",
  display: "flex",
  flexDirection: "column",
});

export default function Popup() {
  const removeScrollListener = () => {
    // if running on client side
    document.removeEventListener("scroll", this.handleScroll, false);
  };

  const addScrollListener = () => {
    // if running on client side
    document.addEventListener("scroll", this.handleScroll, false);
  };

  return (
    <PopupBackground>
      <PopupWrapper>
        <h1>Popup</h1>
        <h1>Popup</h1>
        <h1>Popup</h1>
        <h1>Popup</h1>
        <h1>Popup</h1>
      </PopupWrapper>
    </PopupBackground>
  );
}
