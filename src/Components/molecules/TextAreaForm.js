import React from "react";
import styled from "styled-components";
import colors from "../colors.json";

const TextAreaFormWrapper = styled.div({
  display: "flex",
  flexDirection: "row",
  width: "100%",
  margin: "2vh 0 2vh 0",
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

export default function TextAreaForm({ id, placeholder }) {
  return (
    <TextAreaFormWrapper>
      <TextArea id={id} placeholder={placeholder} />
    </TextAreaFormWrapper>
  );
}
