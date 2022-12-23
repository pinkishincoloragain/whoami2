import React from "react";
import styled from "styled-components";

import privacy from "../../assets/data/privacyPolicy.json";

const PrivacyWrapper = styled.div({
});

export default function PrivacyContent() {
  return (
    <span>{privacy.privacyText}</span>
  );
}
