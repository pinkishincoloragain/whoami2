import * as React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import AnniversaryForm from "../Components/templates/AnniversaryForm";
import colors from "../Components/colors.json";

const AnniversaryWrapper = styled.div(props => {
  return {
    padding: "10% 10% 5% 10%",
    backgroundColor: colors.dark.background,
    color: colors.white,
  };
});

function Anniversary() {
  const darkMode = useSelector(state => state.mode.value);

  return (
    <AnniversaryWrapper darkMode={darkMode}>
      <AnniversaryForm />
    </AnniversaryWrapper>
  );
}

export default Anniversary;
