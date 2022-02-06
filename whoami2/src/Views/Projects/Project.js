import { useStyles } from "../../Components/styles/Styles";
import { useSelector } from "react-redux";
import Waves from "../../Components/objects/Waves";
import Boxes from "../../Components/objects/Boxes";

export default function Project(props) {
  const classes = useStyles();
  const mode = useSelector((state) => state.mode.value);

  return (
    <div
      className={classes.project}
      style={{
        backgroundColor: "#EFEFEF",
        color: mode ? "black" : "white",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Boxes
        name={`Box${props.name}`}
        width="300"
        height="300"
        container={`container${props.name}`}
      />
    </div>
  );
}
