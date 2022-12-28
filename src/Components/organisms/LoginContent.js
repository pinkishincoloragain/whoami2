import { useState } from "react";
import anniversary from "../../assets/data/anniversary.json";
import styled from "styled-components";
import colors from "../colors.json";
import SignUp from "../molecules/form/SignUp";

import { LargeButton } from "../atoms/MyButton";
import BeautifulBar from "../atoms/BeautifulBar";
import { H2 } from "../atoms/Text";

import { signInWithGoogle } from "../utils/firebase/signInWithGoogle";
import { useRecoilState } from "recoil";
import { useSetRecoilState } from "recoil";
import { userInfoState, isLoggedInState } from "../utils/recoil/authRecoil";
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

const SignUpWrapper = styled.div({
  width: "100%",
  display: "flex",
  justifyContent: "center",
  // margin: "10vh 0 10vh 0",
});

const ButtonWrapper = styled.div({
  width: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
});

export default function LoginContent() {
  const [newAccount, setNewAccount] = useState(true); // 새로운 유저인지 확인(초기값: true)

  const toggleAccount = () => setNewAccount(prev => !prev);

  return (
    <>
      <H2>
        {anniversary.login.title}
        <br />
        {newAccount ? anniversary.login.createAccount : anniversary.login.description}
      </H2>
      <SignUpWrapper>
        <SignUp newAccount={newAccount} toggleAccount={toggleAccount} />
      </SignUpWrapper>
      <ButtonWrapper>
        {/* <LargeButton onClick={toggleAccount}>{anniversary.login.login}</LargeButton> */}
      </ButtonWrapper>
    </>
  );
}
