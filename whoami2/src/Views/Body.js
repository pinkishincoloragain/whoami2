import { useStyles } from "../Components/styles/Styles";
import Project from "./Projects";

export default function Body() {
  const classes = useStyles();
  return (
    <>
      <div className={classes.bodyWrapper}>
        <Project />
      </div>
    </>
  );
}
