import * as React from "react";
import styled from "styled-components";
import colors from "../Components/colors.json";

import LetterAndStats from "../Components/templates/LetterAndStats";

const MyPageWrapper = styled.div({
  position: "relative",
  padding: "10vh 20px 10vh 20px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: colors.dark.background,
  color: colors.white,
});

export default function MyPage() {
  return (
    <MyPageWrapper>
      <LetterAndStats />
    </MyPageWrapper>
  );
}
