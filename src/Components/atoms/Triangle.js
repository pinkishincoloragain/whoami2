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
  left: "-10vw",
  bottom: "10vh",
}));

export default Triangle;
