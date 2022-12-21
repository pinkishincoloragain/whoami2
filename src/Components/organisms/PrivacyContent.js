import React from "react";
import styled from "styled-components";

import privacy from "../../assets/data/privacyPolicy.json";

const PrivacyWrapper = styled.div({
  padding: "10vh 0 10vh 0",
  height: "100vh",
  width: "40vw",
  minWidth: "500px",
});

export default function PrivacyContent() {
  return (
    <PrivacyWrapper id='container'>
      <span>{privacy.privacyText}</span>
    </PrivacyWrapper>
  );
}
