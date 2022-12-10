import * as React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import BeatifulBar from "../Components/atoms/BeautifulBar";

const AnniversaryWrapper = styled.div(props => {
  return {
    paddingRight: "10%",
    paddingLeft: "10%",
    paddingTop: "3%",
    paddingBottom: "5%",
    overflow: "hidden",
  };
});

function Anniversary({}) {
  const darkMode = useSelector(state => state.mode.value);

  return (
    <AnniversaryWrapper darkMode={darkMode}>
      <div></div>
    </AnniversaryWrapper>
  );
}

export default Anniversary;
