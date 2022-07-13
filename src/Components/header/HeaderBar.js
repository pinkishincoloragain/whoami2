import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Button, Box, Collapse } from "@mui/material";
import Banner from "./Banner";
import styled from "@emotion/styled";
import MenuIcon from "@mui/icons-material/Menu";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import { useStyles } from "../containers/Styles";
import HeaderBarLink from "./HeaderBarLink";

export default function HeaderBar(props) {
  const darkMode = useSelector((state) => state.mode.value);
  const [dropDownOpen, setDropDownOpen] = useState(false);
  const classes = useStyles();

  const HeaderWrapper = styled(`div`)({
    backgroundColor: darkMode ? "#1f1f1f" : "white",
  });

  return (
    <>
      <HeaderWrapper className="flex sticky top-0 z-1 w-10 h-16">
        <div className="flex flex-row justify-between align-middle w-full">
          <Banner />
        </div>
      </HeaderWrapper>
    </>
  );
}
