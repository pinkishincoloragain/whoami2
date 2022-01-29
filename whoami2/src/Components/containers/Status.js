import { Typography } from "@mui/material";
import { useStyles } from "../styles/Styles";

export default function Status(props) {
  const classes = useStyles();

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "row",
        "&:hover": {
          pointer: "cursor",
        },
      }}
    >
      <Typography fontSize={"min(2vh, 15px)"} color={"white"}>
        {props.name}
      </Typography>
    </div>
  );
}
