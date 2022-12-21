import styled from "styled-components";
import color from "../colors.json";

const H1 = styled.h1({
  fontSize: "1.4rem",
  fontWeight: "bold",
});

const H2 = styled.h2({
  color: color.dark.white,
  fontSize: "3rem",
  fontWeight: "lighter",
  marginBottom: "0.5rem",
  lineHeight: "1.2",
});

const H3 = styled.h3({
  // marginBlock: "0.5rem 0.2rem",
  width: "fit-content",
  height: "fit-content",
  flexShrink: "0",

  fontSize: "1rem",
  fontWeight: "bold",
  color: color.light.white,
});

const H4 = styled.h4({
  // margin: "1.5rem 0 1.3rem 0",
  fontSize: "0.9rem",
  color: color.dark.white,
});

const Emphasize = styled.span({
  color: color.dark.gold,
  // fontWeight: "normal",
})

const SmallText = styled.span({
  // margin: "0.3rem 0 0 0.5rem",
  display: "inline-block",
  flexShrink: "0",
  fontSize: "0.8rem",
  color: color.dark.white,
});

const SmallWarningText = styled.span({
  // margin: "1rem 0 0 0.5rem",
  fontSize: "0.8rem",
  color: color.dark.red,
});

export { H1, H2, H3, H4, Emphasize, SmallText, SmallWarningText };
