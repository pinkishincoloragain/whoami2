import React from "react";
import styled from "styled-components";
import { H2, Emphasize, SmallWarningText } from "../atoms/Text";
import { SubmitButton } from "../atoms/MyButton";
import anniversary from "../../assets/data/anniversary.json";

import MultiSelectForm from "../molecules/form/MultiSelectForm";
import InputForm from "../molecules/form/InputForm";
import InputFormWithAuth from "../molecules/form/InputFormWithAuth";
import TextAreaForm from "../molecules/form/TextAreaForm";

import addResponse from "../utils/addResponse";
import { useNavigate } from "react-router-dom";
import BeautifulBar from "../atoms/BeautifulBar";
import Triangle from "../atoms/Triangle";

const AnniversaryFormWrapper = styled.form({
  posiiton: "relative",
  flexDirection: "column",
  minWidth: "20rem",
  maxWidth: "30rem",
  width: "100%",
  zIndex: "100"
});

const SubmitButtonWrapper = styled.div({
  display: "flex",
  flexDirection: "column",
  gap: "0.5rem",
  alignItems: "center",
  zIndex: "100"
});

const TriangleWrapper = styled.div({
  position: "fixed",
  bottom: "0",
  right: "0",
  width: "clamp(100px, 40%, 40%)",
  height: "50%",
  zIndex: "-1",
  // backgroundColor: "red",
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
      <TriangleWrapper>
        <Triangle />
      </TriangleWrapper>
      <H2>
        <Emphasize>{anniversary.title1}</Emphasize>
        <br />
        {anniversary.title2}
        <br />
        {anniversary.title3}
      </H2>
      <BeautifulBar />
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
      <MultiSelectForm
        title={anniversary.questions[0]}
        phrase={anniversary.phrase[0]}
        options={anniversary.options}
        name='options'
        onChange={handleSelectionFormChange}
        addFormPlaceholder={anniversary.createByOwn}
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
