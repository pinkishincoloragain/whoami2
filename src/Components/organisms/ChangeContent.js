import { useState, useEffect, Suspense, startTransition } from "react";
import MultiSelectForm from "../molecules/form/MultiSelectForm";
import { useRecoilState, useRecoilValue, useResetRecoilState, useSetRecoilState } from "recoil";
import { userIdState } from "../utils/recoil/authRecoil";

import { SubmitButton } from "../atoms/MyButton";

import styled from "styled-components";
import updateDefaultFeels from "../utils/firebase/updateDefaultFeels";
import { useNavigate } from "react-router-dom";
import { userAskFeelsState, userAskFeelsSelector } from "../utils/recoil/feelsRecoil";

const LettersContentWrapper = styled.form({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
});

export default function ChangeContent() {
  const uid = useRecoilValue(userIdState);
  const userAskFeel = useRecoilValue(userAskFeelsSelector);
  const setUserAskFeelsState = useSetRecoilState(userAskFeelsState);

  const [feels, setFeels] = useState(userAskFeel);
  const navigate = useNavigate();

  const handleSubmit = async e => {
    e.preventDefault();
    alert("반영되었습니다.");
    updateDefaultFeels(uid, feels);
    setUserAskFeelsState(feels);

    navigate("/mypage");
  };

  return (
    <LettersContentWrapper>
      <Suspense fallback={<div>로딩중...</div>}>
        <MultiSelectForm
          options={feels}
          setOptions={setFeels}
          title={"현재 표시되는 응답 폼"}
          phrase={"다른 사람들이 응답을 남길 수 있어요."}
          addFormPlaceholder={"여기 입력해주세요!"}
          withDelete={true}
          onChange={e => {}}
        />
      </Suspense>
      <SubmitButton onClick={handleSubmit}>저장</SubmitButton>
    </LettersContentWrapper>
  );
}
