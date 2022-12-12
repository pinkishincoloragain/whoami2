import styled from "styled-components";
import color from "../colors.json";

const H1 = styled.h1({
  fontSize: "1.4rem",
  fontWeight: "bold",
});

const H2 = styled.h2({
  color: color.dark.blue2,
  fontSize: "1.2rem",
  fontWeight: "bold",
  marginBottom: "0.5rem",
});

const H3 = styled.h3({
  margin: "0.2rem 0 0.5rem 0",
  fontSize: "1rem",
  fontWeight: "bold",
  color: color.light.blue,
});

const H4 = styled.h4({
  margin: "1.5rem 0 1.3rem 0",
  fontSize: "0.9rem",
  color: color.dark.white,
});

const SmallText = styled.span({
  margin: "0.3rem 0 0 0.5rem",
  fontSize: "0.8rem",
  color: color.dark.blue,
});

const SmallWarningText = styled.span({
  margin: "0.3rem 0 0 0.5rem",
  fontSize: "0.8rem",
  color: color.dark.yellow,
});

export { H1, H2, H3, H4, SmallText, SmallWarningText };
