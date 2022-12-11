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
  const [response, setResponse] = React.useState({
    name: "",
    tel: "",
    description: "",
  });
  const [isEmpty, setIsEmpty] = React.useState({
    name: true,
    tel: true,
    description: true,
  });

  const handleChange = e => {
    const { value, name } = e.target;
    // if (value === "") {
    setIsEmpty({
      ...isEmpty,
      [name]: value === "",
    });
    // }

    setResponse({
      ...response,
      [name]: value,
    });
  };

  const canSubmit = !Object.values(isEmpty).includes(true);

  const handleSubmit = e => {
    e.preventDefault();
  };

  console.log(response);

  return (
    <AnniversaryFormWrapper onSubmit={e => handleSubmit(e)}>
      <H2>{anniversary.title}</H2>
      <MultiSelectForm
        title={anniversary.questions[0]}
        options={anniversary.options}
        addFormPlaceholder={anniversary.createByOwn}
      />
      <InputForm
        title={anniversary.questions[1]}
        name='name'
        onChange={handleChange}
        placeholder={anniversary.placeholder.name}
        isEmpty={isEmpty.name}
      />
      <InputForm
        title={anniversary.questions[2]}
        name='tel'
        onChange={handleChange}
        placeholder={anniversary.placeholder.email}
        isEmpty={isEmpty.tel}
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
