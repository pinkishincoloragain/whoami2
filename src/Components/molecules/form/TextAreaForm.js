import React from "react";
import styled from "styled-components";
import colors from "../../colors.json";

import { H3, SmallText } from "../../atoms/Text";
import BeautifulBar from "../../atoms/BeautifulBar";

const TEXT_INPUT_CHECK = {
  okay: "마음에 드는군요.",
  empty: "한 마디라도 남겨주세요!",
};

const TextAreaFormWrapper = styled.div({
  display: "flex",
  flexDirection: "column",
  width: "100%",
  margin: "3vh 0 2vh 0",
  gap: "0.5rem"
});

const TextArea = styled.textarea({
  backgroundColor: "rgba(250 250 250 / 0.04)",
  backdropFilter: "blur(10px)",
  width: "100%",
  height: "180px",
  border: "rgba(250 250 250 / 0.2) 1px solid",
  outline: "none",
  color: "white",
  caretColor: "white",
  // margin: "0 0.5rem 0 0",
  "&:focus": {
    borderBottom: `2px solid ${colors.dark.gold}`,
  },
  borderRadius: "8px",
  padding: "0.5rem",
});

const FormHeaderWrapper = styled.div({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  gap: "0.5rem",
  justifyContent: "space-between",
});

export default function TextAreaForm({ title, placeholder, name, onChange, isEmpty }) {
  return (
    <TextAreaFormWrapper>
      <FormHeaderWrapper>
        <H3>{title}</H3>
        <SmallText>{isEmpty ? TEXT_INPUT_CHECK.empty : TEXT_INPUT_CHECK.okay}</SmallText>
        <BeautifulBar reverse={true} />
      </FormHeaderWrapper>
      <TextArea name={name} placeholder={placeholder} onChange={onChange} />
    </TextAreaFormWrapper>
  );
}
