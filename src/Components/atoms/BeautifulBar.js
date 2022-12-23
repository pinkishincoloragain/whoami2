import styled from "styled-components";
import color from "../colors.json";

const BeautifulBar = styled(`div`)(props => ({
  position: "relative",
  left: "0",
  right: "0",
  backgroundImage: `linear-gradient(${props.reverse ? 270 : 90}deg, ${color.dark.gold}, transparent)`,
  width: "50%",
  height: "0.125rem",
  borderRadius: "0.125rem",
  marginTop: "1vh",
  marginBottom: "1vh",
  justifySelf: props.reverse ? "flex-end" : "",
}));

export default BeautifulBar;
