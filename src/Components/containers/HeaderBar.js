import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Button, Box, Collapse } from "@mui/material";
import Header from "./Header";
import styled from "@emotion/styled";
import MenuIcon from "@mui/icons-material/Menu";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import { useStyles } from "./Styles";

import { Link, Typography } from "@mui/material";
import blog from "../../assets/icons/blog.png";
import blog2 from "../../assets/icons/blog2.png";
import folder from "../../assets/icons/folder.png";
import folder2 from "../../assets/icons/folder2.png";
import home from "../../assets/icons/home.png";
import home2 from "../../assets/icons/home2.png";
import intro from "../../assets/icons/intro.png";
import intro2 from "../../assets/icons/intro2.png";

export default function HeaderBar(props) {
  const darkMode = useSelector((state) => state.mode.value);
  const [dropDownOpen, setDropDownOpen] = useState(false);
  const classes = useStyles();

  const FullHeader = styled(`div`)({
    position: "sticky",
    top: "0",
    zIndex: "1",
    width: "100%",
    height: "6vh",
    backgroundColor: darkMode ? "#1f1f1f" : "white",
    display: "flex",
    flexDirection: "flex-end",
    paddingLeft: "10vw",
    borderBottom: "2px solid rgba(255, 105, 135, .3)",
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
  });

  const HeaderWrapper = styled(`div`)({
    width: "180vw",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  });

  return (
    <FullHeader>
      <HeaderWrapper>
        <Header />
        {props.width > 800 ? (
          <div className={classes.flexRow}>
            <HeaderBarLink name="Introduction" href="introduction" />
            <HeaderBarLink name="Projects" href="projects" />
            <HeaderBarLink name="Developer" href="/" />
            <HeaderBarLink name="Blog" href="blog" />
          </div>
        ) : (
          <>
            <div className={classes.flexColumn}>
              <div
                className={classes.hambergBtn}
                onClick={() => setDropDownOpen(!dropDownOpen)}
              >
                {dropDownOpen ? <MenuOpenIcon /> : <MenuIcon />}
              </div>
            </div>
          </>
        )}
      </HeaderWrapper>
      <Collapse in={dropDownOpen}>
        <div className={classes.dropDown}>
          <HeaderBarLink
            width={props.width}
            name="Introduction"
            href="introduction"
          />
          <HeaderBarLink width={props.width} name="Projects" href="projects" />
          <HeaderBarLink width={props.width} name="Developer" href="/" />
          <HeaderBarLink width={props.width} name="Blog" href="blog" />
        </div>
      </Collapse>
    </FullHeader>
  );
}

const ImageWrapper = styled(`div`)({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  height: "3vh",
});

const HeaderBarLink = (props) => {
  const classes = useStyles();
  const mode = useSelector((state) => state.mode.value);

  const Icon = () => {
    let src = "";
    if (props.name === "Home") {
      if (!mode) {
        src = home;
      } else {
        src = home2;
      }
    } else if (props.name === "Introduction") {
      if (!mode) {
        src = intro;
      } else {
        src = intro2;
      }
    } else if (props.name === "Projects") {
      if (!mode) {
        src = folder;
      } else {
        src = folder2;
      }
    } else if (props.name === "Blog") {
      if (!mode) {
        src = blog;
      } else {
        src = blog2;
      }
    }

    return (
      <ImageWrapper>
        <img
          src={src}
          style={{
            width: "20px",
          }}
        />
      </ImageWrapper>
    );
  };

  return (
    <div className={classes.headerBarLinkWrapper}>
      <Link href={props.href} sx={{ textDecoration: "none" }}>
        {props.width > 800 ? (
          <Typography
            color={!mode ? "#1b1b1b" : "white"}
            className={classes.linkBtnText}
          >
            {props.name}
          </Typography>
        ) : (
          <Icon />
        )}
      </Link>
    </div>
  );
};
