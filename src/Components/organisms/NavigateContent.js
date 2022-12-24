import React from "react";
import styled from "styled-components";
import anniversary from "../../assets/data/anniversary.json";

import { LinkButton, SelectButton } from "../atoms/MyButton";
import { H4, H2 } from "../atoms/Text";

const NavigateContentWrapper = styled.div({
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
});

const ShareLetterBoxWrapper = styled.div({
  width: "80%",
  display: "flex",
  flexDirection: "column",
  margin: "20px 0 20px 0",
});

const LinkButtonWrapper = styled.div({
  width: "100%",
  marginTop: "20px",
  display: "flex",
  flexDirection: "column",
});

export default function NavigateContent() {
  return (
    <>
      <H2>{anniversary.title1}</H2>
      <H2>{anniversary.title2}</H2>
      <NavigateContentWrapper>
        {/* <ShareLetterBoxWrapper>
          <H4>{anniversary.mypage.sharableLinkExpl1}</H4>
        </ShareLetterBoxWrapper> */}
        <LinkButtonWrapper>
          <LinkButton to='/share'>{anniversary.mypage.sharableLinkButton}</LinkButton>
        </LinkButtonWrapper>
      </NavigateContentWrapper>
    </>
  );
}
