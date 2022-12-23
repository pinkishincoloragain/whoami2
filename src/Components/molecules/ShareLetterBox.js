import styled from "styled-components";

const ShareContent = styled.div(props => {
  return {
    minWidth: "20rem",
    minHeight: "20rem",
    opacity: "1",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    // backgroundColor: "red",
    backdropFilter: "blur(40px)",
    opacity: props.opacity,
  };
});

export default function ShareLetterBox({ opacity }) {
  return <ShareContent opacity={opacity}>fish fish</ShareContent>;
}
