import { Fade } from "@mui/material";
import { List, ListItem, Typography } from "@mui/material";

export function education() {
  return (
    <>
      <Fade in timeout={200}>
        <List>
          <ListItem sx={{ mt: "0px", ml: "2vh" }}>
            <Typography variant="h6" fontStyle={"italic"}>
              - Kyungpook Nat'l University (Global Software, - 2022)
            </Typography>
          </ListItem>
          <ListItem sx={{ mt: "0px", ml: "2vh" }}>
            <Typography variant="h6" fontStyle={"italic"}>
              - Technological University Dublin (Computer Science, - 2022)
            </Typography>
          </ListItem>
        </List>
      </Fade>
    </>
  );
}

export const experience = () => {
  return (
    <>
      <Fade in timeout={200}>
        <List>
          <ListItem sx={{ mt: "0px", ml: "2vh" }}>
            <Typography variant="h6" fontStyle={"italic"}>
              - KNU PRIME Supporters (2017 - 2018)
            </Typography>
          </ListItem>
          <ListItem sx={{ mt: "0px", ml: "2vh" }}>
            <Typography variant="h6" fontStyle={"italic"}>
              - KNU DEAL LAB Student researcher (2020 - 2021)
            </Typography>
          </ListItem>
          <ListItem sx={{ mt: "0px", ml: "2vh" }}>
            <Typography variant="h6" fontStyle={"italic"}>
              - LG WebOS Internship programme (2021S)
            </Typography>
          </ListItem>
          <ListItem sx={{ mt: "0px", ml: "2vh" }}>
            <Typography variant="h6" fontStyle={"italic"}>
              - Double degree programme, Computer Science (TU Dublin, - 2022)
            </Typography>
          </ListItem>
        </List>
      </Fade>
    </>
  );
};

export const skills = () => {
  return (
    <>
      <Fade in timeout={200}>
        <List>
          <ListItem sx={{ mt: "0px", ml: "2vh" }}>
            <Typography variant="h6" fontStyle={"italic"}>
              - Language: Korean(native), English(fluent)
            </Typography>
          </ListItem>
          <ListItem sx={{ mt: "0px", ml: "2vh" }}>
            <Typography variant="h6" fontStyle={"italic"}>
              - Technological University Dublin (Computer Science, - 2022)
            </Typography>
          </ListItem>
        </List>
      </Fade>
    </>
  );
};
export const projects = () => {
  return (
    <>
      <Fade in timeout={200}>
        <List>
          <ListItem sx={{ mt: "0px", ml: "2vh" }}>
            <Typography variant="h6" fontStyle={"italic"}>
              - KNU buildings fire consequence analysis
            </Typography>
          </ListItem>
          <ListItem sx={{ mt: "0px", ml: "2vh" }}>
            <Typography variant="h6" fontStyle={"italic"}>
              - Drug suicidal side effect analysis project
            </Typography>
          </ListItem>
        </List>
      </Fade>
    </>
  );
};
