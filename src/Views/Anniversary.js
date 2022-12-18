import * as React from "react";
import styled from "styled-components";
import AnniversaryForm from "../Components/templates/AnniversaryForm";
import colors from "../Components/colors.json";

const AnniversaryWrapper = styled.div(props => {
  return {
    position: "relative",
    padding: "10vh 0 10vh 0",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.dark.background,
    color: colors.white,
  };
});

function Anniversary() {
  return (
    <AnniversaryWrapper>
      <AnniversaryForm />
    </AnniversaryWrapper>
  );
}

export default Anniversary;
