import React from "react";
import styled from "styled-components";
import { H1, H2, H3 } from "../atoms/Text";
import anniversary from "../../assets/data/anniversary.json";

import MultiSelectForm from "../molecules/MultiSelectForm";

const AnniversaryFormWrapper = styled.div({
  flexDirection: "column",
  minWidth: "20rem",
  maxWidth: "30rem",
});

export default function AnniversaryForm() {
  return (
    <AnniversaryFormWrapper>
      <H2>{anniversary.title}</H2>
      <br />
      <H3>{anniversary.questions[0]}</H3>
      <MultiSelectForm options={anniversary.options} addFormPlaceholder={anniversary.createByOwn} />
      <H3>{anniversary.questions[1]}</H3>
      <br />
    </AnniversaryFormWrapper>
  );
}
