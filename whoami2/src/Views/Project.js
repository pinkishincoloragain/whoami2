import { useStyles } from "../Components/styles/Styles";
import { useSelector } from "react-redux";

export default function Project() {
  const classes = useStyles();
  const mode = useSelector((state) => state.mode.value);

  return (
    <div
      className={classes.project}
      style={{
        backgroundColor: !mode ? "#1b1b1b" : "white",
      }}
    >
      <div>fish</div>
    </div>
  );
}
