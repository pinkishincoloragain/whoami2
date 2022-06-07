import React from "react";
import config from "../config.json";
import styled from "@emotion/styled";
import { useSelector } from "react-redux";

export const Directory = () => {
  const mode = useSelector((state) => state.mode.value);

  const Font1 = styled(`span`)({
    color: mode ? "black" : "white",
  });

  const Font2 = styled(`span`)({
    color: mode ? "#D3D3D3" : "#333333",
  });
  const Font3 = styled(`span`)({
    color: mode ? "gray" : "white",
  });
  return (
    <>
      <Font1>{config.ps1_username}</Font1>
      <Font2 className="text-light-gray dark:text-dark-gray">@</Font2>
      <Font3 className="text-light-green dark:text-dark-green">
        {config.ps1_hostname}
      </Font3>
      <Font2 className="text-light-gray dark:text-dark-gray">:$ ~&nbsp;</Font2>
    </>
  );
};

export default Directory;
