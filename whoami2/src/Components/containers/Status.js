import { Typography } from "@mui/material";
import { useStyles } from "../styles/Styles";
import { useSelector } from "react-redux";

export default function Status(props) {
  const classes = useStyles();
  const mode = useSelector((state) => state.mode.value);

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "6vh",
        flexDirection: "row",
        marginLeft: "2vw",
        marginRight: "2vw",
      }}
    >
      <Typography
        fontSize={"min(2vh, 15rem)"}
        fontWeight={"300"}
        color={mode ? "#1b1b1b" : "white"}
        className={classes.button}
        sx={{ ml: "0%" }}
      >
        {props.name}
      </Typography>
    </div>
  );
}
