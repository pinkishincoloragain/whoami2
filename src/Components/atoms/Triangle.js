import styled from "styled-components";
import colors from "../colors.json";

const Triangle = styled(`div`)(props => ({
  position: "absolute",
  clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)",
  backgroundColor: colors.dark.gray,
  height: "20vw",
  minHeight: "200px",
  aspectRatio: "1.2/1",
  transform: "rotate(-10deg)",
  bottom: "10vh",
}));

export const TriangleWrapper = styled.div({
  position: "absolute",
  bottom: "0",
  right: "0",
  width: "clamp(100px, 40%, 40%)",
  height: "50%",
  zIndex: "-1",
  // backgroundColor: "red",
});

export const TriangleOverflowWrapper = styled.div({
  position: "absolute",
  width: "100%",
  height: "100%",
  // backgroundColor: "red",
  overflow: "hidden",
  pointerEvents: "none",
});

export default Triangle;
