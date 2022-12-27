import React from "react";
import styled from "styled-components";
import colors from "../../colors.json";

import { H3, SmallText } from "../../atoms/Text";

const TEXT_INPUT_CHECK = {
  okay: "지금 딱 좋아요!",
  empty: "이건 비어 있으면 안 돼요!",
};

const InputFormWrapper = styled.div({
  display: "flex",
  flexDirection: "column",
  width: "100%",
  marginTop: "2vh",
});

const Input = styled.input({
  width: "100%",
  backgroundColor: "transparent",
  height: "36px",
  border: "none",
  outline: "none",
  color: "white",
  caretColor: "white",
  // margin: "0 0.5rem 0 0",
  borderBottom: `2px solid transparent`,
  "&:focus": {
    borderBottom: `2px solid ${colors.dark.gold}`,
  },
});

const FormHeaderWrapper = styled.div({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  gap: "0.5rem",
});

export default function InputForm({ title, placeholder, name, onChange, phrase, disabled }) {
  return (
    <InputFormWrapper>
      <FormHeaderWrapper>
        <H3>{title}</H3>
        <SmallText>{phrase}</SmallText>
      </FormHeaderWrapper>

      <Input disabled={disabled} name={name} placeholder={placeholder} onChange={onChange} />
    </InputFormWrapper>
  );
}

export { Input };
