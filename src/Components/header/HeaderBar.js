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
    flexDirection: "flex-end",
  });

  const HamburgerWrapper = styled(`div`)({
    marginRight: "2vw",
    "&:hover": {
      cursor: "pointer",
    },
  });

  const HeaderBorderBottom = styled(`div`)({
    height: "2px",
    width: "100%",
    position: "sticky",
    top: "10vh",
    backgroundColor: !darkMode ? "#1f1f1f" : "white",
  });

  return (
    <>
      <HeaderWrapper className="flex sticky top-0 z-1 w-10 h-16 ml-32 pr-32">
        <div className="flex flex-row justify-between align-middle w-full">
          <Banner />
          <HeaderBarLink name="Introduction" href="introduction" />
          <HeaderBarLink name="Projects" href="projects" />
          {/* <HeaderBarLink name="Developer" href="/" /> */}
          <HeaderBarLink name="Blog" href="blog" />
          {/* <Collapse in={dropDownOpen}>
            <DropDown className="w-9/12 mt-2 mx-32">
              <HeaderBarLink
                width={props.width}
                name="Introduction"
                href="introduction"
              />
              <HeaderBarLink
                width={props.width}
                name="Projects"
                href="projects"
              />
              <HeaderBarLink width={props.width} name="Developer" href="/" />
              <HeaderBarLink width={props.width} name="Blog" href="blog" />
            </DropDown>
          </Collapse> */}
        </div>
        {/* <HeaderBorderBottom /> */}
      </HeaderWrapper>
    </>
  );
}
