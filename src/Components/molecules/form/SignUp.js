import { useState } from "react";
import styled from "styled-components";
import { createUserWithEmailAndPassword } from "firebase/auth";
import anniversary from "../../../assets/data/anniversary.json";

import logo from "../../../assets/images/Logo.png";
import InputForm from "./InputForm";
import { signInWithEmail } from "../../utils/firebase/signInWithEmail";
import { SubmitButton, LargeButton } from "../../atoms/MyButton";
import { useNavigate } from "react-router-dom";

const LogoImg = styled.img({
  width: "50%",
});

const LoginForm = styled.form({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  width: "100%",
  color: "black",
});

const ChangeModeButton = styled.button({
  marginTop: "1vh",
  width: "100%",
});

export default function SignUp({ newAccount, toggleAccount }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
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
    } else if (name === "nickName") {
      setNickName(value);
    }
  };

  const onSubmit = async event => {
    event.preventDefault();
    const { isSuccess, user } = await signInWithEmail(newAccount, email, password, nickName);
    console.log(user);
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
          title={"로그인"}
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
        <LogoImg src={logo} alt='logo' />
        <LargeButton onClick={onSubmit}>{newAccount ? "회원가입" : "로그인"}</LargeButton>
      </LoginForm>

      <ChangeModeButton onClick={toggleAccount}>
        {newAccount ? anniversary.login.alreadyHave : anniversary.login.doLogin}
      </ChangeModeButton>
    </div>
  );
}
