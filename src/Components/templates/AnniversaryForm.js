import React from "react";
import styled from "styled-components";
import { H2 } from "../atoms/Text";
import { SubmitButton } from "../atoms/MyButton";
import anniversary from "../../assets/data/anniversary.json";

import MultiSelectForm from "../molecules/form/MultiSelectForm";
import InputForm from "../molecules/form/InputForm";
import InputFormWithAuth from "../molecules/form/InputFormWithAuth";
import TextAreaForm from "../molecules/form/TextAreaForm";

const AnniversaryFormWrapper = styled.form({
  flexDirection: "column",
  minWidth: "20rem",
  maxWidth: "30rem",
});

export default function AnniversaryForm() {
  const [response, setResponse] = React.useState({
    name: "",
    instagram: "",
    description: "",
  });
  const [isEmpty, setIsEmpty] = React.useState({
    name: true,
    instagram: true,
    description: true,
  });

  const handleChange = e => {
    const { value, name } = e.target;
    setIsEmpty({
      ...isEmpty,
      [name]: value === "",
    });

    setResponse({
      ...response,
      [name]: value,
    });
  };

  const canSubmit = !Object.values(isEmpty).includes(true);

  const handleSubmit = e => {
    e.preventDefault();
    console.log(response);
  };

  console.log(response);

  return (
    <AnniversaryFormWrapper onSubmit={e => handleSubmit(e)}>
      <H2>{anniversary.title}</H2>
      <MultiSelectForm
        title={anniversary.questions[0]}
        phrase={anniversary.phrase[0]}
        options={anniversary.options}
        addFormPlaceholder={anniversary.createByOwn}
      />
      <InputForm
        title={anniversary.questions[1]}
        phrase={anniversary.phrase[1]}
        name='name'
        onChange={handleChange}
        placeholder={anniversary.placeholder.name}
        isEmpty={isEmpty.name}
      />
      <InputFormWithAuth
        title={anniversary.questions[2]}
        phrase={anniversary.phrase[2]}
        name='instagram'
        onChange={handleChange}
        placeholder={anniversary.placeholder.instagram}
        isEmpty={isEmpty.instagram}
        optionPhrase={anniversary.requestAnonymous}
      />
      <TextAreaForm
        title={anniversary.questions[3]}
        name='description'
        onChange={handleChange}
        placeholder={anniversary.placeholder.message}
        isEmpty={isEmpty.description}
      />
      <SubmitButton disabled={!canSubmit} value={false}>
        {anniversary.submit}
      </SubmitButton>
    </AnniversaryFormWrapper>
  );
}
