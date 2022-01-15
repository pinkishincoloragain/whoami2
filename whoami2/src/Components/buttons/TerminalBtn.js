import { useStyles } from "../Styles";
import { Tooltip, Typography } from "@mui/material";

export default function Button(props) {
  const classes = useStyles();

  return (
    // <Tooltip
    //   placement="top"
    //   title={<Typography fontSize={10}>관상용입니다.</Typography>}
    // >
      <div
        className={classes.terminalBtn}
        style={{
          width: "12px",
          height: "12px",
          backgroundColor: props.color,
          border: `0.8px solid ${props.borderColor}`,
          borderRadius: "30px",
          marginLeft: "2px",
          filter: "saturate(1.4)",
          "&:hover": {
            cursor: "pointer",
          },
        }}
        onClick={props.handleClick}
      ></div>
    // </Tooltip>
  );
}
