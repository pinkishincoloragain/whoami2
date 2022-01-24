import { useStyles } from "../styles/Styles";
import { Typography, Tooltip } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { changeMode } from "../controls/modeSlice";

export default function LightBtn(props) {
  const classes = useStyles();

  const darkMode = useSelector((state) => state.mode.value);
  const dispatch = useDispatch();

  return (
    <Tooltip
      arrow
      placement="right"
      title={<Typography fontSize={20}>{darkMode ? "🌙" : "🌞"}</Typography>}
    >
      <div
        style={{
          width: "13vw",
          marginLeft: "1vh",
          height: "8vh",
          paddingTop: "2.6vh",
        }}
        onClick={() => {
          dispatch(changeMode());
        }}
        label=" "
      >
        <Typography
          variant="h3"
          component="div"
          fontWeight={"bold"}
          gutterBottom
          color={props.color}
          className={classes.button}
        >
          {props.title}
        </Typography>
      </div>
    </Tooltip>
  );
}
