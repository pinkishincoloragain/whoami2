import React from "react";
import styled from "styled-components";
import { H2, Emphasize, SmallWarningText } from "../atoms/Text";
import { SubmitButton } from "../atoms/MyButton";
import anniversary from "../../assets/data/anniversary.json";

import MultiSelectForm from "../molecules/form/MultiSelectForm";
import InputForm from "../molecules/form/InputForm";
import InputFormWithAuth from "../molecules/form/InputFormWithAuth";
import TextAreaForm from "../molecules/form/TextAreaForm";

import addResponse from "../utils/firebase/addResponse";
import { useLocation, useNavigate } from "react-router-dom";
import BeautifulBar from "../atoms/BeautifulBar";
import checkUserWithUid from "../utils/firebase/checkUserWithUid";

const AnniversaryFormWrapper = styled.form({
  posiiton: "relative",
  flexDirection: "column",
  minWidth: "18rem",
  maxWidth: "30rem",
  width: "100%",
  zIndex: "100",
});

const SubmitButtonWrapper = styled.div({
  display: "flex",
  flexDirection: "column",
  gap: "0.5rem",
  alignItems: "center",
  zIndex: "100",
});

export default function AnniversaryForm() {
  const [tryToSubmit, setTryToSubmit] = React.useState(false);
  const [receiver, setReceiver] = React.useState("");
  const location = useLocation();
  const [uid, setUid] = React.useState(location.pathname.split("/")[2] || "");

  const navigate = useNavigate();

  React.useEffect(() => {
    const setUserInfo = async () => {
      const { isSuccess, user } = await checkUserWithUid(uid);
      if (isSuccess) {
        setReceiver(user?.name);
      }
    };
    setUserInfo();
  }, [location.pathname]);

  const [response, setResponse] = React.useState({
    name: "",
    receiver: uid,
    description: "",
    selections: [anniversary.options[0]],
    uid: uid,
  });

  const [isEmpty, setIsEmpty] = React.useState({
    name: true,
    receiver: true,
    description: true,
    uid: uid,
  });

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
    console.log(response);
    console.log(response.uid);
    addResponse(response);
    navigate("/Thankyou");
  };

  return (
    <AnniversaryFormWrapper onSubmit={e => handleSubmit(e)}>
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
        name='receiver'
        onChange={handleInputFormChange}
        placeholder={receiver || anniversary.placeholder.receiver}
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
        isEmpty={isEmpty.description}
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
