import { useState, useEffect } from "react";
import MultiSelectForm from "../molecules/form/MultiSelectForm";
import { useRecoilValue } from "recoil";
import { userIdState, userInfoState } from "../utils/recoil/authRecoil";
import fetchDefaultFeels from "../utils/firebase/fetchDefaultFeels";

import { SubmitButton } from "../atoms/MyButton";

import styled from "styled-components";
import updateDefaultFeels from "../utils/firebase/updateDefaultFeels";

const LettersContentWrapper = styled.form({
  marginTop: "4vh",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
});

export default function ChangeContent() {
  const uid = useRecoilValue(userIdState);
  const [feels, setFeels] = useState([]);
  const userInfo = useRecoilValue(userInfoState);

  useEffect(() => {
    const fetchData = async () => {
      const { feels, isSuccess } = await fetchDefaultFeels(uid);
      console.log(feels, isSuccess);
      setFeels(feels);
    };

    fetchData();
  }, []);

  const handleSubmit = e => {
    e.preventDefault();
    alert("반영되었습니다.");
    updateDefaultFeels(uid, feels);
  };

  return (
    <LettersContentWrapper>
      <MultiSelectForm
        title={"현재 표시되는 기분"}
        phrase={"다른 사람들이 응답할 때 보여져요."}
        defaultOptions={feels}
        addFormPlaceholder={"여기 입력해줘요!"}
        onChange={setFeels}
        withDelete={true}
      />

      <SubmitButton onClick={handleSubmit}>반영하기</SubmitButton>
    </LettersContentWrapper>
  );
}
