import { useState } from "react";
import styled from "styled-components";
import { createUserWithEmailAndPassword } from "firebase/auth";
import anniversary from "../../../assets/data/anniversary.json";

import logo from "../../../assets/images/Logo.png";
import InputForm from "./InputForm";
import { signInWithEmail } from "../../utils/firebase/signInWithEmail";
import { LargeButton } from "../../atoms/MyButton";
import { useNavigate } from "react-router-dom";

const LogoImg = styled.img({
  width: "50%",
});

const ModeChangeWrapper = styled.div({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
});

const LoginForm = styled.form({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  width: "100%",
  minHeight: "60vh",
  color: "black",
});

const ChangeModeButton = styled.button({
  marginTop: "1vh",
  width: "100%",
});

export default function SignUp({ newAccount, toggleAccount }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordCheck, setPasswordCheck] = useState("");
  const [nickName, setNickName] = useState("익명의 흑토끼🐰");
  const navigate = useNavigate();

  const onChange = event => {
    const {
      target: { name, value, nickName },
    } = event;
    if (name === "email") {
      setEmail(value);
    } else if (name === "password") {
      setPassword(value);
    } else if (name === "passwordCheck") {
      setPasswordCheck(value);
    } else if (name === "nickName") {
      setNickName(value);
    }
  };

  const onSubmit = async event => {
    event.preventDefault();
    if (newAccount && password !== passwordCheck) {
      alert("비밀번호가 일치하지 않습니다.");
      return;
    }
    const { isSuccess, user } = await signInWithEmail(newAccount, email, password, nickName);
    if (isSuccess) {
      navigate("/mypage");
    }
  };

  return (
    <div>
      <LoginForm onSubmit={onSubmit}>
        {newAccount && (
          <InputForm
            onChange={onChange}
            value={nickName}
            required
            title={"닉네임"}
            placeholder={"익명의 흑토끼🐰"}
            name='nickName'
          />
        )}

        <InputForm
          onChange={onChange}
          value={email}
          required
          title={"이메일"}
          placeholder={"email@gmail.com"}
          name='email'
        />
        <InputForm
          onChange={onChange}
          value={password}
          required
          title={"비밀번호"}
          placeholder={"password"}
          name='password'
        />
        {newAccount && (
          <InputForm
            onChange={onChange}
            value={passwordCheck}
            required
            title={"비밀번호 확인"}
            placeholder={"password"}
            name='passwordCheck'
          />
        )}
        <LogoImg src={logo} alt='logo' />
      </LoginForm>

      <ModeChangeWrapper>
        <LargeButton onClick={onSubmit}>{newAccount ? "회원가입" : "로그인"}</LargeButton>
        <ChangeModeButton onClick={toggleAccount}>
          {newAccount ? anniversary.login.alreadyHave : anniversary.login.doLogin}
        </ChangeModeButton>
      </ModeChangeWrapper>
    </div>
  );
}
