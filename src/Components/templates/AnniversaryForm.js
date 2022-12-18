import React from "react";
import styled from "styled-components";
import { H2, H4, SmallWarningText } from "../atoms/Text";
import { SubmitButton } from "../atoms/MyButton";
import anniversary from "../../assets/data/anniversary.json";

import MultiSelectForm from "../molecules/form/MultiSelectForm";
import InputForm from "../molecules/form/InputForm";
import InputFormWithAuth from "../molecules/form/InputFormWithAuth";
import TextAreaForm from "../molecules/form/TextAreaForm";

import addResponse from "../utils/addResponse";
import { useNavigate } from "react-router-dom";
import BeautifulBar from "../atoms/BeautifulBar";

const AnniversaryFormWrapper = styled.form({
  flexDirection: "column",
  minWidth: "20rem",
  maxWidth: "30rem",
});

const SubmitButtonWrapper = styled.div({
  display: "flex",
  flexDirection: "row",
});

export default function AnniversaryForm() {
  const [tryToSubmit, setTryToSubmit] = React.useState(false);

  const [response, setResponse] = React.useState({
    name: "",
    instagram: "",
    description: "",
    selections: [anniversary.options[0]],
  });

  const [isEmpty, setIsEmpty] = React.useState({
    name: true,
    instagram: true,
    description: true,
  });

  const navigate = useNavigate();

  const handleSelectionFormChange = value => {
    setResponse({
      ...response,
      selections: value,
    });
  };

  const handleInputFormChange = e => {
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
    setTryToSubmit(true);
    addResponse(response);
    navigate("/Thankyou");
  };

  return (
    <AnniversaryFormWrapper onSubmit={e => handleSubmit(e)}>
      <H2>{anniversary.title}</H2>
      <BeautifulBar />
      <H4>
        {anniversary.formDescription1}
        <br />
        {anniversary.formDescription2}
      </H4>
      <MultiSelectForm
        title={anniversary.questions[0]}
        phrase={anniversary.phrase[0]}
        options={anniversary.options}
        name='options'
        onChange={handleSelectionFormChange}
        addFormPlaceholder={anniversary.createByOwn}
      />
      <InputForm
        title={anniversary.questions[1]}
        phrase={anniversary.phrase[1]}
        name='name'
        onChange={handleInputFormChange}
        placeholder={anniversary.placeholder.name}
      />
      <InputFormWithAuth
        title={anniversary.questions[2]}
        phrase={anniversary.phrase[2]}
        name='instagram'
        onChange={handleInputFormChange}
        placeholder={anniversary.placeholder.instagram}
        optionPhrase={anniversary.requestAnonymous}
      />
      <TextAreaForm
        title={anniversary.questions[3]}
        name='description'
        onChange={handleInputFormChange}
        placeholder={anniversary.placeholder.message}
      />
      <SubmitButtonWrapper>
        <SubmitButton
          onClick={() => setTryToSubmit(true)}
          disabled={tryToSubmit && !canSubmit}
          value={false}
        >
          {anniversary.submit}
        </SubmitButton>
        {tryToSubmit && !canSubmit && <SmallWarningText>{anniversary.submitFail}</SmallWarningText>}
      </SubmitButtonWrapper>
    </AnniversaryFormWrapper>
  );
}
