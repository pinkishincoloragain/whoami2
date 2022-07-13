import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Button, Box, Collapse } from "@mui/material";
import Banner from "./Banner";
import styled from "@emotion/styled";
import MenuIcon from "@mui/icons-material/Menu";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import { useStyles } from "./Styles";
import HeaderBarLink from "./HeaderBarLink";

export default function HeaderBar(props) {
  const darkMode = useSelector((state) => state.mode.value);
  const [dropDownOpen, setDropDownOpen] = useState(false);
  const classes = useStyles();

  const HeaderWrapper = styled(`div`)({
    backgroundColor: darkMode ? "#1f1f1f" : "white",
    flexDirection: "flex-end",
  });

  const Header = styled(`div`)({
    width: "180vw",
  });

  const HamburgerWrapper = styled(`div`)({
    marginRight: "2vw",
    "&:hover": {
      cursor: "pointer",
    },
  });

  const DropDown = styled(`div`)({
    width: "80vw",
    marginTop: "2vh",
    marginLeft: "10vw",
    paddingRight: "4px",
    paddingLeft: "10vw",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
    backgroundColor: "transparent",
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
        <Header className="flex flex-row justify-between align-middle w-full">
          <Banner />
          {props.width > 800 ? (
            <div className={classes.flexRow}>
              <HeaderBarLink name="Introduction" href="introduction" />
              <HeaderBarLink name="Projects" href="projects" />
              {/* <HeaderBarLink name="Developer" href="/" /> */}
              <HeaderBarLink name="Blog" href="blog" />
            </div>
          ) : (
            <div className={classes.flexColumn}>
              <HamburgerWrapper onClick={() => setDropDownOpen(!dropDownOpen)}>
                {dropDownOpen ? <MenuOpenIcon /> : <MenuIcon />}
              </HamburgerWrapper>
            </div>
          )}
          <Collapse in={dropDownOpen}>
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
          </Collapse>
        </Header>
        {/* <HeaderBorderBottom /> */}
      </HeaderWrapper>
    </>
  );
}
