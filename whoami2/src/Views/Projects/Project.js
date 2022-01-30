import { useStyles } from "../../Components/styles/Styles";
import { useSelector } from "react-redux";

export default function Project() {
  const classes = useStyles();
  const mode = useSelector((state) => state.mode.value);

  return (
    <div
      className={classes.project}
      style={{
        backgroundColor: "#D3DEDC",
      }}
    >
      <div>fish</div>
    </div>
  );
}
