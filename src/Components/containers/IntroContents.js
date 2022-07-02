import { Fade, Link } from "@mui/material";
import { List, ListItem, Typography } from "@mui/material";
import styled from "@emotion/styled";

const NoMarginListItem = styled(ListItem)({
  marginTop: "0",
});

const Education = () => {
  return (
    <Fade in timeout={200}>
      <List>
        <NoMarginListItem>
          - Kyungpook Nat'l University (Global Software, 2017 - )
        </NoMarginListItem>
        <NoMarginListItem>
          - Technological University Dublin (Computer Science, 2021 -)
        </NoMarginListItem>
      </List>
    </Fade>
  );
};

const Experience = () => {
  return (
    <Fade in timeout={200}>
      <List>
        <NoMarginListItem>
          - KNU PRIME Supporters (2017 - 2018)
        </NoMarginListItem>
        <NoMarginListItem>
          - KNU DEAL LAB Student researcher (2020 - 2021)
        </NoMarginListItem>
        <NoMarginListItem>
          - LG WebOS Internship programme (2021S)
        </NoMarginListItem>
        <NoMarginListItem>
          - Double degree programme, TU Dublin (2022 - )
        </NoMarginListItem>
      </List>
    </Fade>
  );
};

const Skills = () => {
  return (
    <Fade in timeout={200}>
      <List>
        <NoMarginListItem>
          - Languages: Korean(native), English(fluent), Python, JavaScript,
          Java, C
        </NoMarginListItem>
        <NoMarginListItem>
          - Tools: Jetbrains environment, VSCode, Git, Figma, Final Cut Pro
        </NoMarginListItem>
      </List>
    </Fade>
  );
};
const Projects = () => {
  return (
    <Fade in timeout={200}>
      <List>
        <NoMarginListItem
          style={{ textDecoration: "none" }}
          target="_blank"
          sx={{ color: "red" }}
          href="https://github.com/KNU-indiGo/Machine"
        >
          - KNU buildings fire consequence analysis
        </NoMarginListItem>
        <NoMarginListItem sx={{ mt: "0px" }}>
          <Link
            style={{ textDecoration: "none" }}
            sx={{ color: "black" }}
            target="_blank"
            href="https://github.com/pinkishincoloragain/SuicideProject"
          >
            - Drug suicidal side effect analysis project
          </Link>
        </NoMarginListItem>
      </List>
    </Fade>
  );
};

export { Skills, Projects, Education, Experience };
