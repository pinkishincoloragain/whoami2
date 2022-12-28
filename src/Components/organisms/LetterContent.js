import styled from "styled-components";
import { useLocation, useNavigate } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { userLettersState } from "../utils/recoil/letterRecoil";
import { isLoggedInState } from "../utils/recoil/authRecoil";
import { Suspense, useEffect } from "react";
import SkeletonLoader from "./SkeletonLoader";
import colors from "../colors.json";
import BeautifulBar from "../atoms/BeautifulBar";

const LetterNavigationWrapper = styled.div({
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  width: "100%",
  height: "48px",
  margin: "0 0 26px 0",
});

const LetterContentWrapper = styled.div({
  display: "flex",
  flexDirection: "column",
  marginTop: "4vh",
  overflowY: "scroll",
});

const LetterToWrapper = styled.div({
  display: "flex",
  flexDirection: "column",
  width: "100%",
  height: "100%",
  fontSize: "1.4rem",
  // marginTop: "1vh",
  maxHeight: "40px",
});

const DescriptionWrapper = styled.div({
  display: "flex",
  flexDirection: "column",
  width: "100%",
  fontSize: "1rem",
  margin: "2vh 0 2vh 0",
  textDecoration: "underline",
  minHeight: "20vh",
});

const LetterFromWrapper = styled.div({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  width: "100%",
  maxHeight: "40px",
  fontSize: "1rem",
  margin: "2vh 0 2vh 0",
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
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    width: "40%",
    minHeight: "36px",
    borderRadius: "8px",
    alignItems: "center",
    fontSize: "1rem",
    margin: "1vh 0 1vh 0",
    backgroundColor: colors.dark.green,
  };
});

const HomeButton = styled.button({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  width: "100%",
  minHeight: "36px",
  borderRadius: "8px",
  alignItems: "center",
  fontSize: "1rem",
  margin: "1vh 0 1vh 0",
});

const LetterWrapper = styled.div({
  display: "flex",
  flexDirection: "column",
  backgroundColor: colors.dark.blue2,
  width: "100%",
  padding: "1rem",
  margin: "2vh 0 2vh 0",
  borderRadius: "8px",
  boxShadow: "0 0 8px 0 rgba(0, 0, 0, 0.2)",
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
  const isLoggedIn = useRecoilValue(isLoggedInState);
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoggedIn) {
      navigate(`/login`);
    }
  }, [isLoggedIn]);

  const handleNextButton = () => {
    if (letterIdx < letters.length - 1) {
      navigate(`/letter/${Number(letterIdx) + 1}`);
    } else {
      navigate(`/letter/0`);
    }
  };

  const handleMyPageButtonClick = () => {
    navigate(`/mypage`);
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
          <BeautifulBar width={"100%"} />
          <LetterWrapper>
            <LetterToWrapper>당신에게,</LetterToWrapper>
            <DescriptionWrapper>{currentLetter?.description}</DescriptionWrapper>
            <LetterFromWrapper>
              - {currentLetter?.from} 씀.
              <br />
            </LetterFromWrapper>
          </LetterWrapper>
          <PSWrapper>
            <b>{currentLetter?.from}</b> 님이 {currentLetter?.feels.length}개의 감정을 남겼어요.
            {currentLetter?.feels.map(feel => (
              <FeelWrapper key={feel}>{feel}</FeelWrapper>
            ))}
          </PSWrapper>
        </Suspense>
        <BeautifulBar width={"100%"} />
        <LetterNavigationWrapper>
          <NextButton onClick={handlePrevButton}>이전 편지</NextButton>
          <NextButton onClick={handleNextButton}>다음 편지</NextButton>
        </LetterNavigationWrapper>
        <HomeButton onClick={handleMyPageButtonClick}>편지함 돌아가기</HomeButton>
      </ContentSuspenseWrapper>
    </LetterContentWrapper>
  );
}
