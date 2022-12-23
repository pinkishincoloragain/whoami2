import React from "react";
import styled from "styled-components";
import colors from "../colors.json";

import ShareLetterBox from "../molecules/ShareLetterBox";

const ShareContentWrapper = styled.div({
  width: "100vw",
  height: "100vh",
  display: "flex",
  justifyContent: "space-between",
  backgroundColor: colors.dark.blue2,
});

export default function ShareContent() {
  const [isSharingMode, setIsSharingMode] = React.useState(false);

  React.useEffect(() => {
    // paste link to clipboard
    const link = window.location.href;
    navigator.clipboard.writeText(link);
  });

  return (
    <ShareContentWrapper>
      <ShareLetterBox />
    </ShareContentWrapper>
  );
}
