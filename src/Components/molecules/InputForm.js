import React from "react";
import styled from "styled-components";
import colors from "../colors.json";

import { H3 } from "../atoms/Text";

const InputFormWrapper = styled.div({
  display: "flex",
  flexDirection: "column",
  width: "100%",
  margin: "2vh 0 2vh 0",
});

const Input = styled.input({
  width: "100%",
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

export default function InputForm({ title, placeholder, name, onChange, isEmpty }) {
  return (
    <InputFormWrapper>
      <H3>{title}</H3>
      <Input name={name} placeholder={placeholder} onChange={onChange} />
    </InputFormWrapper>
  );
}

export { Input };
