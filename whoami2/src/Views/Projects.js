import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Project from "./Projects/Project";
import { useSelector } from "react-redux";

const Item = styled(Paper)(({ theme, backgroundColor, height }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  backgroundColor: backgroundColor,
  height: height,
  minWidth: "100px",
}));

export default function Projects() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs>
          <Item height="40vh">
            <Project />
          </Item>
        </Grid>
        <Grid item xs>
          <Item height="60vh">
            <Project />
          </Item>
        </Grid>
        <Grid item xs={4}>
          <Item>
            <Project />
          </Item>
        </Grid>
        <Grid item xs={8}>
          <Item>
            <Project />
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
}
