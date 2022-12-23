import * as React from "react";
import styled from "styled-components";

import ShareContent from "../Components/organisms/ShareContent";

import colors from "../Components/colors.json";

const ShareWrapper = styled.div({
  width: "100%",
  height: "100%",
  display: "flex",
  justifyContent: "center",
  backgroundColor: colors.dark.background,
  color: colors.white,
});

export default function Share() {
  return (
    <ShareWrapper>
      <ShareContent />
    </ShareWrapper>
  );
}
