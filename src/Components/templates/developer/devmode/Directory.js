import React from "react";
import config from "../../../config.json";
import styled from "styled-components";

const Font1 = styled.span(props => {
  return {
    // color: mode ? yellow.A100 : "white",
    color: "orange",
  };
});
const Font2 = styled.span(props => {
  return {
    // color: mode ? yellow.A100 : "white",
    color: "#FFFFFF",
  };
});

const Font3 = styled(`span`)({
  color: "green",
});

export const Directory = () => {
  return (
    <>
      <Font1>{config.ps1_username}</Font1>
      <Font2>@</Font2>
      <Font3>{config.ps1_hostname}</Font3>
      <Font2> &gt;&gt;&nbsp;</Font2>
    </>
  );
};

export default Directory;
