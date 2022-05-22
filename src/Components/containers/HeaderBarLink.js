import { Link, Typography } from "@mui/material";
import { useStyles } from "../styles/Styles";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import blog from "../../assets/icons/blog.png";
import blog2 from "../../assets/icons/blog2.png";
import folder from "../../assets/icons/folder.png";
import folder2 from "../../assets/icons/folder2.png";
import home from "../../assets/icons/home.png";
import home2 from "../../assets/icons/home2.png";
import intro from "../../assets/icons/intro.png";
import intro2 from "../../assets/icons/intro2.png";

export default function HeaderBarLink(props) {
  const classes = useStyles();
  const mode = useSelector((state) => state.mode.value);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    setWidth(window.innerWidth);
  });

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
          width: "10vw",
        }}
      />
    );
  };

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        height: "6vh",
        flexDirection: "row",
        marginLeft: "2vw",
        marginRight: "2vw",
      }}
    >
      <Link href={props.href} sx={{ textDecoration: "none" }}>
        <Typography
          fontSize={"max(1.4vw, 15px)"}
          fontWeight={"300"}
          color={!mode ? "#1b1b1b" : "white"}
          className={classes.button}
          sx={{ ml: "0%" }}
          letterSpacing={"-0.1px"}
        >
          {width > 600 ? props.name : <Icon />}
        </Typography>
      </Link>
    </div>
  );
}
