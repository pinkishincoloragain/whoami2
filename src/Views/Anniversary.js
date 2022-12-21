import * as React from "react";
import styled from "styled-components";
import AnniversaryForm from "../Components/templates/AnniversaryForm";
import colors from "../Components/colors.json";
import Popup from "../Components/templates/Popup";

const AnniversaryWrapper = styled.div(props => {
  return {
    position: "relative",
    padding: "10vh 20px 10vh 20px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.dark.background,
    color: colors.white,
  };
});

function Anniversary() {
  return (
    <Popup>
      <AnniversaryForm />
    </Popup>
  );
}

export default Anniversary;
