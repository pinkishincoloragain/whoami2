import React from "react";
import styled from "styled-components";

import MultiSelectForm from "../molecules/MultiSelectForm";

const AnniversaryFormWrapper = styled.div({
  width: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
});

export default function AnniversaryForm() {
  return (
    <AnniversaryFormWrapper>
      <MultiSelectForm />
    </AnniversaryFormWrapper>
  );
}
