import React from "react";
import styled from "styled-components";

import { LinkButton, SelectButton } from "../atoms/MyButton";

const NavigateContentWrapper = styled.div({
  marginTop: "20vh",
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  gap: "1rem",
});

export default function NavigateContent() {
  return (
    <NavigateContentWrapper>
      <LinkButton to='/'>홈으로 가기</LinkButton>
      <LinkButton to='/share'>내 편지함 공유하기</LinkButton>
    </NavigateContentWrapper>
  );
}
