import { Fade, Link } from "@mui/material";
import { List, ListItem, Typography } from "@mui/material";
import styled from "@emotion/styled";

const NoMarginListItem = styled(ListItem)({
  marginTop: "0",
});

export function education() {
  return (
    <Fade in timeout={200}>
      <List>
        <NoMarginListItem>
          <Typography variant="h6" fontStyle={"italic"}>
            - Kyungpook Nat'l University (Global Software, 2017 - )
          </Typography>
        </NoMarginListItem>
        <NoMarginListItem>
          <Typography variant="h6" fontStyle={"italic"}>
            - Technological University Dublin (Computer Science, 2021 -)
          </Typography>
        </NoMarginListItem>
      </List>
    </Fade>
  );
}

export const experience = () => {
  return (
    <Fade in timeout={200}>
      <List>
        <NoMarginListItem>
          <Typography variant="h6" fontStyle={"italic"}>
            - KNU PRIME Supporters (2017 - 2018)
          </Typography>
        </NoMarginListItem>
        <NoMarginListItem>
          <Typography variant="h6" fontStyle={"italic"}>
            - KNU DEAL LAB Student researcher (2020 - 2021)
          </Typography>
        </NoMarginListItem>
        <NoMarginListItem>
          <Typography variant="h6" fontStyle={"italic"}>
            - LG WebOS Internship programme (2021S)
          </Typography>
        </NoMarginListItem>
        <NoMarginListItem>
          <Typography variant="h6" fontStyle={"italic"}>
            - Double degree programme, TU Dublin (2022 - )
          </Typography>
        </NoMarginListItem>
      </List>
    </Fade>
  );
};

export const skills = () => {
  return (
    <Fade in timeout={200}>
      <List>
        <NoMarginListItem>
          <Typography variant="h6" fontStyle={"italic"}>
            - Languages: Korean(native), English(fluent), Python, JavaScript,
            Java, C
          </Typography>
        </NoMarginListItem>
        <NoMarginListItem>
          <Typography variant="h6" fontStyle={"italic"}>
            - Tools: Jetbrains environment, VSCode, Git, Figma, Final Cut Pro
          </Typography>
        </NoMarginListItem>
      </List>
    </Fade>
  );
};
export const projects = () => {
  return (
    <Fade in timeout={200}>
      <List>
        <ListItem sx={{ mt: "0px" }}>
          <Typography variant="h6" fontStyle={"italic"}>
            <Link
              style={{ textDecoration: "none" }}
              target="_blank"
              sx={{ color: "red" }}
              href="https://github.com/KNU-indiGo/Machine"
            >
              - KNU buildings fire consequence analysis
            </Link>
          </Typography>
        </ListItem>
        <ListItem sx={{ mt: "0px" }}>
          <Typography variant="h6" fontStyle={"italic"}>
            <Link
              style={{ textDecoration: "none" }}
              sx={{ color: "black" }}
              target="_blank"
              href="https://github.com/pinkishincoloragain/SuicideProject"
            >
              - Drug suicidal side effect analysis project
            </Link>
          </Typography>
        </ListItem>
      </List>
    </Fade>
  );
};
