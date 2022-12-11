import React from "react";
import styled from "styled-components";
import colors from "../colors.json";

const InputFormWrapper = styled.div({
  display: "flex",
  flexDirection: "row",
  width: "100%",
  margin: "2vh 0 2vh 0",
});

const InputFormInput = styled.input({
  backgroundColor: "transparent",
  height: "36px",
  border: "none",
  outline: "none",
  color: "white",
  caretColor: "white",
  margin: "0 0.5rem 0 0",
  borderBottom: `2px solid transparent`,
  "&:focus": {
    borderBottom: `2px solid ${colors.dark.blue2}`,
  },
});

export default function InputForm({ placeholder }) {
  return (
    <InputFormWrapper>
      <InputFormInput placeholder={placeholder} />
    </InputFormWrapper>
  );
}
