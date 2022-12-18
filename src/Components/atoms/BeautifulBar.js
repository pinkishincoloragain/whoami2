import styled from "styled-components";
import color from "../colors.json";

const BeautifulBar = styled(`div`)({
  backgroundImage: `linear-gradient(90deg, ${color.dark.gold}, transparent)`,
  width: "100%",
  height: "0.125rem",
  borderRadius: "0.125rem",
  marginTop: "1vh",
  marginBottom: "1vh",
});

export default BeautifulBar;
