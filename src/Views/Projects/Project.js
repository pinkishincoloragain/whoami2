import { useStyles } from "../../Components/styles/Styles";
import { useSelector } from "react-redux";
import styled from "@emotion/styled";

export default function Project(props) {
  const classes = useStyles();
  const mode = useSelector((state) => state.mode.value);

  const ProjectPage = styled(`div`)({
    minWidth: "200px",
    minHeight: "200px",
    width: "100%",
    height: "100%",
    backgroundColor: "#1b1b1b",
  });

  return (
    <div
      className={classes.project}
      style={{
        backgroundColor: "#EFEFEF",
        color: mode ? "black" : "white",
        display: "flex",
        flexDirection: "column",
        // alignItems: "center",
        // justifyContent: "center",
      }}
      id={props.name + "wrapper"}
    ></div>
  );
}
