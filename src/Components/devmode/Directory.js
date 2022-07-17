import React from "react";
import config from "../../config.json";
import styled from "@emotion/styled";
import { useSelector } from "react-redux";

export const Directory = () => {
  const mode = useSelector((state) => state.mode.value);

  const Font1 = styled(`span`)({
    // color: mode ? yellow.A100 : "white",
    color: mode ? "yellow" : "orange",
  });

  const Font2 = styled(`span`)({
    color: mode ? "yellow" : "#333333",
  });
  const Font3 = styled(`span`)({
    color: "green",
  });
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
