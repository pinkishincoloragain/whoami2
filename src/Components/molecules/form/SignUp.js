import { useState } from "react";
import styled from "styled-components";
import anniversary from "../../../assets/data/anniversary.json";
import colors from "../../colors.json";
import auth1 from "../../../assets/icons/auth1.svg";
import auth2 from "../../../assets/icons/auth2.svg";
import auth3 from "../../../assets/icons/auth3.svg";
import auth4 from "../../../assets/icons/auth4.svg";

import InputForm from "./InputForm";
import { signInWithEmail } from "../../utils/firebase/signInWithEmail";
import { LargeButton } from "../../atoms/MyButton";
import { useNavigate } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import { userInfoState } from "../../utils/recoil/authRecoil";

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
  minWidth: "18rem",
  minHeight: "40vh",
  color: "black",
});

const ChangeModeButton = styled.button({
  marginTop: "2vh",
  width: "100%",
});

const InputWrapper = styled.div({
  width: "100%",
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "flex-start",
  gap: "1rem",
  paddingBottom: "0.5rem",
  borderBottom: `2px solid ${colors.dark.gold}`,
});

const IconWrapper = styled.img({
  width: "1.6rem",
  marginTop: "1.2rem",
});

export default function SignUp({ newAccount, toggleAccount }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordCheck, setPasswordCheck] = useState("");
  const [nickName, setNickName] = useState("익명의 흑토끼🐰");
  const navigate = useNavigate();
  const setUserState = useSetRecoilState(userInfoState);

  const onChange = event => {
    const {
      target: { name, value },
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

    if (!email || !password) {
      alert("이메일과 비밀번호를 입력해주세요.");
      return;
    }
    if (!newAccount && passwordCheck) {
      alert("비밀번호 확인은 회원가입 시에만 필요합니다.");
    }
    if (newAccount && password !== passwordCheck) {
      alert("비밀번호가 일치하지 않습니다.");
      return;
    }
    if (nickName.length > 10) {
      alert("닉네임은 10자 이내로 입력해주세요.");
      return;
    }

    const { isSuccess, user } = await signInWithEmail(newAccount, email, password, nickName);
    if (isSuccess) {
      navigate("/mypage");
      setUserState(user);
    }
  };

  return (
    <div>
      <LoginForm onSubmit={onSubmit}>
        {newAccount && (
          <InputWrapper>
            <IconWrapper src={auth1} alt='auth1' />
            <InputForm
              onChange={onChange}
              value={nickName}
              required
              placeholder={"익명의 흑토끼🐰"}
              name='nickName'
            />
          </InputWrapper>
        )}
        <InputWrapper>
          <IconWrapper src={auth2} alt='auth2' />
          <InputForm
            onChange={onChange}
            value={email}
            required
            placeholder={"이메일"}
            name='email'
          />
        </InputWrapper>
        <InputWrapper>
          <IconWrapper src={auth3} alt='auth3' />
          <InputForm
            onChange={onChange}
            value={password}
            required
            placeholder={"비밀번호"}
            name='password'
          />
        </InputWrapper>
        {newAccount && (
          <InputWrapper>
            <IconWrapper src={auth4} alt='auth4' />
            <InputForm
              onChange={onChange}
              value={passwordCheck}
              required
              placeholder={"비밀번호 확인"}
              name='passwordCheck'
            />
          </InputWrapper>
        )}
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
