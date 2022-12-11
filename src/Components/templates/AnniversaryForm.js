import React from "react";
import styled from "styled-components";
import { H1, H2, H3 } from "../atoms/Text";
import { SubmitButton } from "../atoms/MyButton";
import anniversary from "../../assets/data/anniversary.json";

import MultiSelectForm from "../molecules/MultiSelectForm";
import InputForm from "../molecules/InputForm";
import TextAreaForm from "../molecules/TextAreaForm";

const AnniversaryFormWrapper = styled.form({
  flexDirection: "column",
  minWidth: "20rem",
  maxWidth: "30rem",
});

const MandatoryField = styled.span({
  color: "red",
});

export default function AnniversaryForm() {
  const handleSubmit = e => {
    e.preventDefault();
    console.log("form submitted");
  };
  
  return (
    <AnniversaryFormWrapper onSubmit={e => handleSubmit(e)}>
      <H2>{anniversary.title}</H2>
      <br />
      <H3>{anniversary.questions[0]}</H3>
      <MultiSelectForm options={anniversary.options} addFormPlaceholder={anniversary.createByOwn} />
      <H3>{anniversary.questions[1]}</H3>
      <InputForm placeholder={anniversary.placeholder.name} />
      <H3>
        {anniversary.questions[2]}
        <MandatoryField>*</MandatoryField>
      </H3>
      <InputForm placeholder={anniversary.placeholder.email} />
      <H3>{anniversary.questions[3]}</H3>
      <TextAreaForm placeholder={anniversary.placeholder.message} />
      <SubmitButton>{anniversary.submit}</SubmitButton>
    </AnniversaryFormWrapper>
  );
}
