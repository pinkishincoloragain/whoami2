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

export default function AnniversaryForm() {
  const [response, setResponse] = React.useState({});
  const [canSubmit, setCanSubmit] = React.useState(false);

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
  console.log(response);

  return (
    <AnniversaryFormWrapper onSubmit={e => handleSubmit(e)}>
      <H2>{anniversary.title}</H2>
      <MultiSelectForm
        title={anniversary.questions[0]}
        id='tryAdd'
        options={anniversary.options}
        addFormPlaceholder={anniversary.createByOwn}
      />
      <InputForm
        title={anniversary.questions[1]}
        id='name'
        placeholder={anniversary.placeholder.name}
      />
      <InputForm
        title={anniversary.questions[2]}
        setCanSubmit={setCanSubmit}
        id='tel'
        placeholder={anniversary.placeholder.email}
      />
      <TextAreaForm
        title={anniversary.questions[3]}
        id='description'
        placeholder={anniversary.placeholder.message}
      />
      <SubmitButton disabled={!canSubmit} value={false}>
        {anniversary.submit}
      </SubmitButton>
    </AnniversaryFormWrapper>
  );
}
