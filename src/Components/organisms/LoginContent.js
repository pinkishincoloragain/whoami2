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
  const setUser = useSetRecoilState(userInfoState);
  const setIsLoggedIn = useSetRecoilState(isLoggedInState);
  const navigate = useNavigate();

  const handleAuthClick = async () => {
    const { result, user } = await signInWithGoogle();
    if (result) {
      setUser(user);
      setIsLoggedIn(true);
      // navigate("/letters");
    }
  };

  const userInfo = useRecoilState(userInfoState);
  const isLoggedIn = useRecoilState(isLoggedInState);

  console.log("userInfo", userInfo);
  console.log("isLoggedIn", isLoggedIn);

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
