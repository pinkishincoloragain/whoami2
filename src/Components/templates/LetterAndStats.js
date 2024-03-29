import { Suspense, useEffect } from "react";

import NavigateContent from "../organisms/NavigateContent";
import LetterStatContent from "../organisms/LetterStatContent";

import styled from "styled-components";

import { useRecoilValue } from "recoil";
import { useNavigate } from "react-router-dom";
import { isLoggedInState } from "../utils/recoil/authRecoil";
import SkeletonLoader from "../organisms/SkeletonLoader";

const LettersContentWrapper = styled.div({
  width: "100%",
  flexDirection: "column",
  minWidth: "18rem",
  maxWidth: "30rem",
  height: "100%",
});

export default function LetterAndStats() {
  const isLoggedIn = useRecoilValue(isLoggedInState);
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoggedIn) {
      navigate("/login");
    }
  });

  return (
    <LettersContentWrapper>
      <NavigateContent />
      <Suspense fallback={<SkeletonLoader />}>
        <LetterStatContent />
      </Suspense>
    </LettersContentWrapper>
  );
}
