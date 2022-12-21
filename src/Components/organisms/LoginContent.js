import anniversary from "../../assets/data/anniversary.json";
import colors from "../colors.json";

import { LinkButton } from "../atoms/MyButton";
import { H1, H3, H4 } from "../atoms/Text";
import styled from "styled-components";

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

export default function LoginContent() {
  return (
    <LoginWrapper>
      <div>Login</div>
    </LoginWrapper>
  );
}
