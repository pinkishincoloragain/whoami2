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
  const [response, setResponse] = React.useState({});

  const extractFormData = e => {
    const formData = {
      reaction: [],
    };

    return [...e.target]
      .filter(el => el.id !== "" || el.value !== "false")
      .reduce((acc, el) => {
        if (el.id === "") return { ...acc, reaction: [...acc.reaction, el.value] };
        else return { ...acc, [el.id]: el.value };
      }, formData);
  };

  const handleSubmit = e => {
    e.preventDefault();
    setResponse(extractFormData(e));
  };

  return (
    <AnniversaryFormWrapper onSubmit={e => handleSubmit(e)}>
      <H2>{anniversary.title}</H2>
      <br />
      <H3>{anniversary.questions[0]}</H3>
      <MultiSelectForm
        id={"tryAdd"}
        options={anniversary.options}
        addFormPlaceholder={anniversary.createByOwn}
      />
      <H3>{anniversary.questions[1]}</H3>
      <InputForm id={"name"} placeholder={anniversary.placeholder.name} />
      <H3>
        {anniversary.questions[2]}
        <MandatoryField>*</MandatoryField>
      </H3>
      <InputForm id={"tel"} placeholder={anniversary.placeholder.email} />
      <H3>{anniversary.questions[3]}</H3>
      <TextAreaForm id={"description"} placeholder={anniversary.placeholder.message} />
      <SubmitButton value={false}>{anniversary.submit}</SubmitButton>
    </AnniversaryFormWrapper>
  );
}
