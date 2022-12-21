import * as React from "react";
import styled from "styled-components";
import colors from "../Components/colors.json";
import LoginContent from "../Components/organisms/LoginContent";

const LoginWrapper = styled.div(props => {
  return {
    padding: "10vh 0 10vh 0",
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.dark.background,
    color: colors.white,
  };
});

export default function Login() {
  return (
    <LoginWrapper>
      <LoginContent />
    </LoginWrapper>
  );
}
