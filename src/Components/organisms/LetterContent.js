import styled from "styled-components";
import { useLocation, useNavigate } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { userLettersState } from "../utils/recoil/letterRecoil";
import { Suspense } from "react";
import SkeletonLoader from "./SkeletonLoader";
import colors from "../colors.json";

const LetterNavigationWrapper = styled.div({
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  width: "100%",
  height: "48px",
  padding: "0 10px",
});

const LetterContentWrapper = styled.div({
  display: "flex",
  flexDirection: "column",
  marginTop: "4vh",
  maxHeight: "100vh",
  overflowY: "scroll",
});

const LetterToWrapper = styled.div({
  display: "flex",
  flexDirection: "column",
  width: "100%",
  height: "100%",
  fontSize: "1.4rem",
  marginTop: "1vh",
  maxHeight: "40px",
});

const DescriptionWrapper = styled.div({
  display: "flex",
  flexDirection: "column",
  width: "100%",
  fontSize: "1rem",
  margin: "1vh 0 1vh 0",
  textDecoration: "underline",
});

const LetterFromWrapper = styled.div({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  width: "100%",
  maxHeight: "40px",
  fontSize: "1rem",
  margin: "48px 0 6vh 0",
});

const PSWrapper = styled.div({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  width: "100%",
  fontSize: "1rem",
  minHeight: "20vh",
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

const NextButton = styled.button(props => {
  return {
    display: props.isSeen ? "flex" : "none",
    flexDirection: "column",
    justifyContent: "center",
    width: "40%",
    minHeight: "36px",
    borderRadius: "8px",
    alignItems: "center",
    fontSize: "1rem",
    margin: "1vh 0 1vh 0",
    backgroundColor: colors.dark.gold,
  };
});

const ContentSuspenseWrapper = styled.div({
  minHeight: "70vh",
  display: "flex",
  flexDirection: "column",
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

  const handlePrevButton = () => {
    if (letterIdx > 0) {
      navigate(`/letter/${Number(letterIdx) - 1}`);
    } else {
      navigate(`/letter/${letters.length - 1}`);
    }
  };

  return (
    <LetterContentWrapper>
      <ContentSuspenseWrapper>
        <Suspense fallback={<SkeletonLoader />}>
          <div>{currentLetter?.timeStamp}</div>
          <div>{Number(letterIdx) + 1}번째 편지</div>
          <LetterToWrapper>당신에게,</LetterToWrapper>
          <DescriptionWrapper>{currentLetter?.description}</DescriptionWrapper>
          <LetterFromWrapper>
            - {currentLetter?.from} 씀.
            <br />
            <br />
          </LetterFromWrapper>
          <PSWrapper>
            {currentLetter?.from}가 {currentLetter?.feels.length}개의 감정을 남겼어요.
            {currentLetter.feels.map(feel => (
              <FeelWrapper key={feel}>{feel}</FeelWrapper>
            ))}
          </PSWrapper>
        </Suspense>
      </ContentSuspenseWrapper>
      <LetterNavigationWrapper>
        <NextButton isSeen={letterIdx > 0} onClick={handlePrevButton}>
          이전
        </NextButton>
        <NextButton isSeen={letterIdx < letters.length - 1} onClick={handleNextButton}>
          다음
        </NextButton>
      </LetterNavigationWrapper>
    </LetterContentWrapper>
  );
}
