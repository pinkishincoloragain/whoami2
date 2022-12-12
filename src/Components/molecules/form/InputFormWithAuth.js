import React from "react";
import styled from "styled-components";

import InputForm from "./InputForm";

const Checkbox = styled.input({});

const InputFormWithOptionWrapper = styled.div({
  display: "flex",
  flexDirection: "column",
});

export default function InputFormWithAuth({ optionPhrase, ...props }) {
  return (
    <InputFormWithOptionWrapper>
      <InputForm {...props} />
    </InputFormWithOptionWrapper>
  );
}
