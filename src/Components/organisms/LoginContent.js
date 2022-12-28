import { useState } from "react";
import anniversary from "../../assets/data/anniversary.json";
import styled from "styled-components";
import colors from "../colors.json";
import SignUp from "../molecules/form/SignUp";

import { H2 } from "../atoms/Text";

const GoldText = styled.span({
  color: colors.dark.gold,
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
  const [newAccount, setNewAccount] = useState(false); // 새로운 유저인지 확인(초기값: true)

  console.log(newAccount);
  const toggleAccount = () => setNewAccount(prev => !prev);

  return (
    <>
      <H2>
        <GoldText>{anniversary.login.title}</GoldText>
        <br />
        {newAccount ? anniversary.login.createAccount : anniversary.login.description}
        <br />
        {anniversary.login.createAccountDesc}
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
