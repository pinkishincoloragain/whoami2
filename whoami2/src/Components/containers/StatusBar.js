import Status from "./Status";
import { Grid } from "@mui/material";
import Introduction from "../../Views/Introduction";
import BlogBtn from "../buttons/BlogBtn";
import InfoBtn from "../buttons/InfoBtn";
import ProjectBtn from "../buttons/ProjectBtn";

export default function StatusBar() {
  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs />
        <Grid item xs>
          <Status name="Home" />
        </Grid>
        <Grid item xs>
          <Status name="Introduction" />
        </Grid>
        <Grid item xs>
          <Status name="Projects" />
        </Grid>
        <Grid item xs>
          <Status name="Blog" />
        </Grid>
        <Grid item xs />
      </Grid>
    </>
  );
}
