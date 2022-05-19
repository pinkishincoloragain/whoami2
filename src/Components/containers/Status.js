import { Link, Typography } from "@mui/material";
import { useStyles } from "../styles/Styles";
import { useSelector } from "react-redux";

export default function HeaderBarLink(props) {
  const classes = useStyles();
  const mode = useSelector((state) => state.mode.value);

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
          color={mode ? "#1b1b1b" : "white"}
          className={classes.button}
          sx={{ ml: "0%" }}
          letterSpacing={"-0.1px"}
        >
          {props.name}
        </Typography>
      </Link>
    </div>
  );
}
