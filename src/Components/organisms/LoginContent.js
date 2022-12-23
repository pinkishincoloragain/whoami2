import React from "react";
import anniversary from "../../assets/data/anniversary.json";
import styled from "styled-components";
import colors from "../colors.json";
import LogoTriangle from "../molecules/form/LogoTriangle";

import { LargeButton } from "../atoms/MyButton";
import BeautifulBar from "../atoms/BeautifulBar";
import { H2 } from "../atoms/Text";

import { signInWithGoogle } from "../utils/signInWithGoogle";
import { useRecoilState } from "recoil";
import { useSetRecoilState } from "recoil";
import { userInfoState, isLoggedInState } from "../utils/authRecoil";
import { useNavigate } from "react-router-dom";

const LoginWrapper = styled.div({
  backgroundColor: colors.dark.background,
  width: "100%",
  minWidth: "20rem",
  maxWidth: "30rem",
  padding: "10vh 1vw 10vh 1vw",
  height: "100vh",
  display: "flex",
  flexDirection: "column",
  color: colors.white,
});

const TriangleWrapper = styled.div({
  width: "100%",
  display: "flex",
  justifyContent: "center",
  margin: "10vh 0 10vh 0",
});

const RightBar = styled(BeautifulBar)({
  marginLeft: "30%",
  width: "70%",
});

const ButtonWrapper = styled.div({
  width: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
});

export default function LoginContent() {
  const setUserInfo = useSetRecoilState(userInfoState);
  const [isLoggedIn, setIsLoggedIn] = useRecoilState(isLoggedInState);
  const navigate = useNavigate();

  React.useEffect(() => {
    if (isLoggedIn) {
      navigate("/mypage");
    }
  });

  const handleAuthClick = async () => {
    const { isSuccess, user } = await signInWithGoogle();
    if (isSuccess) {
      console.log(isSuccess);
      setUserInfo(user);
      setIsLoggedIn(true);
      navigate("/mypage");
    }
  };

  return (
    <LoginWrapper>
      <H2>{anniversary.login.title}</H2>
      <H2>{anniversary.login.description}</H2>
      <RightBar reverse={true} />
      <TriangleWrapper>
        <LogoTriangle />
      </TriangleWrapper>
      <ButtonWrapper>
        <LargeButton onClick={handleAuthClick}>{anniversary.login.googleAuth}</LargeButton>
      </ButtonWrapper>
    </LoginWrapper>
  );
}
