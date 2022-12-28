import React from "react";
import { H2 } from "../atoms/Text";
import { LargeButton } from "../atoms/MyButton";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const ThankyouWrapper = styled.div({
  width: "80%",
  height: "40%",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  flexDirection: "column",
});

export default function ThankyouContent() {
  const navigate = useNavigate();

  return (
    <ThankyouWrapper>
      <H2>Thank you for your response!</H2>
      <LargeButton onClick={() => navigate("/mypage")}>내 편지함 공유하기</LargeButton>
    </ThankyouWrapper>
  );
}
