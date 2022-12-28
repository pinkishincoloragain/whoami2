import React from "react";
import styled from "styled-components";
import colors from "../../colors.json";

import { H3, SmallText } from "../../atoms/Text";

const InputFormWrapper = styled.div({
  display: "flex",
  flexDirection: "column",
  width: "100%",
  marginTop: "2vh",
});

const Input = styled.input(props => {
  return {
    width: "100%",
    backgroundColor: "transparent",
    height: "36px",
    border: "none",
    outline: "none",
    color: "white",
    caretColor: "white",
    // margin: "0 0.5rem 0 0",
    // borderBottom: `2px solid ${colors.dark.lightGray}`,
    "&:focus": {
      // borderBottom: props.noFocus ? "none" : `2px solid ${colors.dark.gold}`,
      backgroundColor: "transparent",
    },
  };
});

const FormHeaderWrapper = styled.div({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  gap: "0.5rem",
  color: colors.dark.lightGray,
});

export default function InputForm({ title, placeholder, name, onChange, phrase, disabled }) {
  return (
    <InputFormWrapper>
      <FormHeaderWrapper>
        <H3>{title}</H3>
        <SmallText>{phrase}</SmallText>
      </FormHeaderWrapper>
      <Input
        defaultValue={placeholder === "익명의 흑토끼🐰" ? placeholder : ""}
        type={name}
        disabled={disabled}
        name={name}
        placeholder={placeholder}
        onChange={onChange}
      />
    </InputFormWrapper>
  );
}

export { Input };
