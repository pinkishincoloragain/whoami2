import { useEffect } from "react";

import NavigateContent from "../organisms/NavigateContent";
import LetterStatContent from "../organisms/LetterStatContent";

import styled from "styled-components";

import { useRecoilValue } from "recoil";
import { useNavigate } from "react-router-dom";
import { isLoggedInState } from "../utils/recoil/authRecoil";

const LettersContentWrapper = styled.div({
  width: "100%",
  flexDirection: "columnœ",
  minWidth: "18rem",
  maxWidth: "30rem",
  height: "100%",
});

export default function LetterAndStats() {
  const isLoggedIn = useRecoilValue(isLoggedInState);
  const navigate = useNavigate();

  console.log(isLoggedIn);

  useEffect(() => {
    if (!isLoggedIn) {
      navigate("/login");
    }
  });

  return (
    <LettersContentWrapper>
      {/* <BackLink /> */}
      <NavigateContent />
      <LetterStatContent />
    </LettersContentWrapper>
  );
}
