import { useState, useEffect } from "react";
import CustomIcon from "./CustomIcon";
import { useSelector } from "react-redux";
import HeaderBarLink from "./HeaderBarLink";
import { Button, Box, Collapse } from "@mui/material";
import Header from "./Header";
import styled from "@emotion/styled";
import MenuIcon from "@mui/icons-material/Menu";
import { useStyles } from "../styles/Styles";

export default function HeaderBar(props) {
  const darkMode = useSelector((state) => state.mode.value);
  const [width, setWidth] = useState(window.innerWidth);
  const [dropDownOpen, setDropDownOpen] = useState(false);
  const classes = useStyles();

  useEffect(() => {
    setWidth(window.innerWidth);
    if (window.innerWidth > 800) {
      setDropDownOpen(false);
    }
  }, [window.innerWidth]);

  useEffect(() => {
    window.addEventListener("resize", (e) => {
      setWidth(window.innerWidth);
    });
  }, [window.innerWidth]);

  const GoodHeader = styled(Box)({
    position: "sticky",
    top: "0",
    zIndex: "1",
    width: "80vw",
    height: "6vh",
    backgroundColor: darkMode ? "#1f1f1f" : "white",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderRadius: "2px",
    paddingLeft: "10vw",
    paddingRight: "10vw",
    borderBottom: "1px solid black",
    boxShadow: "0px 3px 3px  rgba(255, 105, 135, .3)",
  });

  const Menu = () => {
    return (
      <div
        className={classes.hambergBtn}
        onClick={() => setDropDownOpen(!dropDownOpen)}
      >
        <MenuIcon />
      </div>
    );
  };

  return (
    <>
      <GoodHeader>
        <Header />
        {width > 800 ? (
          <div className={classes.flexRow}>
            <HeaderBarLink name="Home" href="/" />
            <HeaderBarLink name="Introduction" href="introduction" />
            <HeaderBarLink name="Projects" href="projects" />
            <HeaderBarLink name="Blog" href="blog" />
          </div>
        ) : (
          <div
            style={{
              flexDirection: "column",
            }}
          >
            <Menu />
          </div>
        )}
      </GoodHeader>
      <Collapse in={dropDownOpen}>
        <div className={classes.dropDown}>
          <HeaderBarLink name="Home" href="/" />
          <HeaderBarLink name="Introduction" href="introduction" />
          <HeaderBarLink name="Projects" href="projects" />
          <HeaderBarLink name="Blog" href="blog" />
        </div>
      </Collapse>
    </>
  );
}
