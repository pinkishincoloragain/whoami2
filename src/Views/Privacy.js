import * as React from "react";
import styled from "styled-components";
import colors from "../Components/colors.json";

import PrivacyContent from "../Components/organisms/PrivacyContent";

const PrivacyWrapper = styled.div(props => {
  return {
    padding: "10vh 0 10vh 0",
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.dark.background,
    color: colors.white,
  };
});

export default function Privacy() {
  return (
    <PrivacyWrapper>
      <PrivacyContent />
    </PrivacyWrapper>
  );
}
