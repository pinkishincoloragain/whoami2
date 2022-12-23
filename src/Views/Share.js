import * as React from "react";
import styled from "styled-components";

import ShareContent from "../Components/organisms/ShareContent";

const ShareWrapper = styled.div({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});

export default function Share() {
  return (
    <ShareWrapper>
      <ShareContent />
    </ShareWrapper>
  );
}
