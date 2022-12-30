import { useState, useEffect, Suspense } from "react";
import styled from "styled-components";
import { H2, Emphasize, SmallWarningText } from "../atoms/Text";
import { SubmitButton } from "../atoms/MyButton";
import anniversary from "../../assets/data/anniversary.json";

import colors from "../colors.json";
import MultiSelectForm from "../molecules/form/MultiSelectForm";
import InputForm from "../molecules/form/InputForm";
import TextAreaForm from "../molecules/form/TextAreaForm";
import SkeletonLoader from "../organisms/SkeletonLoader";

import addResponse from "../utils/firebase/addResponse";
import { useLocation, useNavigate } from "react-router-dom";
import BeautifulBar from "../atoms/BeautifulBar";
import { useRecoilState, useRecoilValue } from "recoil";
import {
  receiverUidState,
  receiverNameState,
  receiverDefaultAskOptionsState,
} from "../utils/recoil/receiverRecoil";
import fetchRandomUser from "../utils/firebase/fetchRandomUser";

const AnniversaryFormWrapper = styled.form({
  posiiton: "relative",
  flexDirection: "column",
  minWidth: "18rem",
  maxWidth: "30rem",
  width: "100%",
  zIndex: "100",
});

const InputWrapper = styled.div({
  width: "100%",
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "flex-start",
  gap: "1rem",
  paddingBottom: "0.5rem",
  borderBottom: `2px solid ${colors.dark.gold}`,
});

const SubmitButtonWrapper = styled.div({
  display: "flex",
  flexDirection: "column",
  gap: "0.5rem",
  alignItems: "center",
  zIndex: "100",
});

export default function AnniversaryForm() {
  const location = useLocation();
  const [tryToSubmit, setTryToSubmit] = useState(false);
  const [receiverUid, setReceiverUid] = useRecoilState(receiverUidState);
  const receiverName = useRecoilValue(receiverNameState);
  const receiverDefaultAskOptions = useRecoilValue(receiverDefaultAskOptionsState);
  const [multiSelectOptions, setMultiSelectOptions] = useState(receiverDefaultAskOptions);
  const [isRandom, setIsRandom] = useState(false);

  useEffect(() => {
    const uid = location.pathname.split("/")[2];
    setReceiverUid(uid || receiverUid);

    if (uid === undefined) {
      fetchRandomUser().then(user => {
        if (!user) setReceiverUid("random");
        else setReceiverUid(user.uid);
        setIsRandom(true);
      });
    }
  }, [location.pathname]);

  useEffect(() => {});

  useEffect(() => {
    setMultiSelectOptions(receiverDefaultAskOptions);
  }, [receiverDefaultAskOptions]);

  useEffect(() => {
    if (receiverDefaultAskOptions === undefined) {
      setMultiSelectOptions(anniversary.options);
      setReceiverUid;
    }
  });

  const navigate = useNavigate();

  const [response, setResponse] = useState({
    name: anniversary.placeholder.name,
    receiver: receiverUid,
    description: "",
    selections: [anniversary.options[0]],
    uid: receiverUid,
  });

  const [isEmpty, setIsEmpty] = useState({
    name: false,
    receiver: false,
    description: true,
    uid: receiverUid,
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

  const handleSubmit = async e => {
    e.preventDefault();
    console.log(receiverUid);
    const res = {
      ...response,
      uid: receiverUid,
      selections: response.selections.filter(v => v !== null),
    };
    setTryToSubmit(true);
    await addResponse(res);
    navigate("/Thankyou");
  };

  return (
    <AnniversaryFormWrapper onSubmit={e => handleSubmit(e)}>
      <Suspense fallback={<SkeletonLoader />}>
        <H2>
          <Emphasize>{response.name + "님,"}</Emphasize>
          <br />
          {receiverName}
          {anniversary.title2}
          <br />
          {anniversary.title3}
        </H2>
        <BeautifulBar />
        <InputWrapper>
          <InputForm
            title={anniversary.questions[1]}
            phrase={anniversary.phrase[1]}
            name='name'
            onChange={handleInputFormChange}
            placeholder={anniversary.placeholder.name}
          />
        </InputWrapper>
        {/* <InputFormWithAuth
          title={anniversary.questions[2]}
          phrase={anniversary.phrase[2]}
          name='receiver'
          onChange={handleInputFormChange}
          placeholder={receiverName || anniversary.placeholder.receiver}
          optionPhrase={anniversary.requestAnonymous}
        /> */}

        {multiSelectOptions?.length > 0 && (
          <Suspense fallback={SkeletonLoader}>
            <MultiSelectForm
              options={multiSelectOptions}
              setOptions={setMultiSelectOptions}
              title={anniversary.questions[0]}
              phrase={anniversary.phrase[0]}
              defaultOptions={receiverDefaultAskOptions}
              name='options'
              onChange={handleSelectionFormChange}
              addFormPlaceholder={anniversary.createByOwn}
            />
          </Suspense>
        )}
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
          {tryToSubmit && !canSubmit && (
            <SmallWarningText>{anniversary.submitFail}</SmallWarningText>
          )}
        </SubmitButtonWrapper>
      </Suspense>
    </AnniversaryFormWrapper>
  );
}
