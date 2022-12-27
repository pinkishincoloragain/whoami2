import styled from "styled-components";
import { useLocation, useNavigate } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { userLettersState } from "../utils/recoil/letterRecoil";
import { Suspense } from "react";
import SkeletonLoader from "./SkeletonLoader";
import colors from "../colors.json";

const LetterContentWrapper = styled.div({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  marginTop: "4vh",
  maxHeight: "100vh",
  overflowY: "scroll",
});

const LetterFromWrapper = styled.div({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  width: "100%",
  height: "100%",
  fontSize: "1rem",
  margin: "1vh 0 6vh 0",
});

const LetterToWrapper = styled.div({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  width: "100%",
  height: "100%",
  fontSize: "1.4rem",
  marginTop: "1vh",
});

const DescriptionWrapper = styled.div({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  width: "100%",
  minHeight: "20vh",
  fontSize: "1rem",
  margin: "1vh 0 1vh 0",
  textDecoration: "underline",
});

const PSWrapper = styled.div({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  width: "100%",
  height: "100%",
  fontSize: "1rem",
});

const FeelWrapper = styled.div({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  minHeight: "36px",
  borderRadius: "8px",
  backgroundColor: colors.dark.gold,
  margin: "0.5rem 0 0.5rem 0",
  padding: "0.5rem",
});

const NextButton = styled.button({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  width: "40%",
  minHeight: "36px",
  borderRadius: "8px",
  alignItems: "center",
  height: "100%",
  fontSize: "1rem",
  margin: "1vh 0 1vh 0",
  backgroundColor: colors.dark.gold,
});

export default function LetterContent() {
  const location = useLocation();
  const letterIdx = location.pathname.split("/")[2];
  const letters = useRecoilValue(userLettersState);
  const currentLetter = letters[letterIdx];
  const navigate = useNavigate();

  const handleNextButton = () => {
    if (letterIdx < letters.length - 1) {
      navigate(`/letter/${Number(letterIdx) + 1}`);
    } else {
      navigate(`/letter/0`);
    }
  };

  return (
    <LetterContentWrapper>
      <Suspense fallback={<SkeletonLoader />}>
        <div>{currentLetter?.timeStamp}</div>
        <LetterToWrapper>당신에게,</LetterToWrapper>
        <DescriptionWrapper>
          <br />
          {currentLetter?.description}
        </DescriptionWrapper>
        <LetterFromWrapper>- {currentLetter?.from} 씀.</LetterFromWrapper>
        P.S. 올해는 참
        <PSWrapper>
          {currentLetter.feels.map(feel => (
            <FeelWrapper key={feel}>{feel}</FeelWrapper>
          ))}
        </PSWrapper>
      </Suspense>
      <NextButton onClick={handleNextButton}>다음 편지 보기</NextButton>
    </LetterContentWrapper>
  );
}
