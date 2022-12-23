import React from "react";
import styled from "styled-components";
import colors from "../colors.json";

import ShareLetterBox from "../molecules/ShareLetterBox";

import { useRecoilValue } from "recoil";
import { userInfoState, isLoggedInState } from "../utils/authRecoil";

const ShareContentWrapper = styled.div({
  width: "100vw",
  height: "100vh",
  display: "flex",
  justifyContent: "space-between",
  backgroundColor: colors.dark.blue2,
});

export default function ShareContent() {
  const userInfo = useRecoilValue(userInfoState);
  const isLoggedIn = useRecoilValue(isLoggedInState);

  React.useEffect(() => {
    if (!isLoggedIn) {
      window.location.href = "/login";
    }
  });

  return (
    <ShareContentWrapper>
      {/*  */}
      <ShareLetterBox />
    </ShareContentWrapper>
  );
}
