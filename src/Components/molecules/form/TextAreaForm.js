import React from "react";
import styled from "styled-components";
import colors from "../../colors.json";

import { H3, SmallText } from "../../atoms/Text";

const TEXT_INPUT_CHECK = {
  okay: "마음에 드는군요.",
  empty: "한 마디라도 남겨주세요!",
};

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

const FormHeaderWrapper = styled.div({
  display: "flex",
  flexDirection: "row",
});

export default function TextAreaForm({ title, placeholder, name, onChange, isEmpty }) {
  return (
    <TextAreaFormWrapper>
      <FormHeaderWrapper>
        <H3>{title}</H3>
        <SmallText>{isEmpty ? TEXT_INPUT_CHECK.empty : TEXT_INPUT_CHECK.okay}</SmallText>
      </FormHeaderWrapper>
      <TextArea name={name} placeholder={placeholder} onChange={onChange} />
    </TextAreaFormWrapper>
  );
}
