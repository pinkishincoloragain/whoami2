import { useSelector } from "react-redux";
import styled from "@emotion/styled";
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
      <img
        src={src}
        style={{
          width: "20px",
        }}
      />
    );
  };

  const IconWrapper = styled(`div`)({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "3vh",
  });

  const LinkBtnText = styled(`div`)({
    transitionDuration: "0.05s",
    fontSize: "max(1.4vw, 20px)",
    fontWeight: "500",
    color: !mode ? "#1b1b1b" : "white",
    "&:hover": {
      // color: "#FFCC00",
      transitionDuration: "0.05s",
    },
  });

  const LinkWrapper = styled(`div`)({
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    height: "max(2vh,30px)",
    flexDirection: "row",
    borderRadius: "6px",
    paddingLeft: "2vw",
    paddingRight: "2vw",

    "&:hover": {
      backgroundColor: "#f5f5f5",
      cursor: "pointer",
      // boxShadow: "0px 3px 3px  rgba(255, 105, 135, .3)",
    },
  });

  return (
    <LinkWrapper>
      <Link href={props.href} sx={{ textDecoration: "none" }}>
        {props.width > 800 ? (
          <LinkBtnText>{props.name}</LinkBtnText>
        ) : (
          <IconWrapper>
            <Icon />
          </IconWrapper>
        )}
      </Link>
    </LinkWrapper>
  );
};

export default HeaderBarLink;
