import React from "react";
import styled from "styled-components";
import colors from "../colors.json";

import { H3 } from "../atoms/Text";

const TextAreaFormWrapper = styled.div({
  display: "flex",
  flexDirection: "column",
  width: "100%",
  margin: "3vh 0 2vh 0",
});

const TextArea = styled.textarea({
  backgroundColor: "transparent",
  width: "100%",
  height: "180px",
  border: "none",
  outline: "none",
  color: "white",
  caretColor: "white",
  margin: "0 0.5rem 0 0",
  "&:focus": {
    borderBottom: `2px solid ${colors.dark.blue2}`,
  },
});

export default function TextAreaForm({ title, id, placeholder }) {
  return (
    <TextAreaFormWrapper>
      <H3>{title}</H3>
      <TextArea id={id} placeholder={placeholder} />
    </TextAreaFormWrapper>
  );
}
