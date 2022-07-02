import { Fade, Link } from "@mui/material";
import { List, ListItem, Typography } from "@mui/material";
import styled from "@emotion/styled";

const NoMarginListItem = styled(ListItem)({
  marginTop: "0",
});

const Education = () => {
  return (
    <List>
      <NoMarginListItem>
        - Kyungpook Nat'l University (Global Software, 2017 - )
      </NoMarginListItem>
      <NoMarginListItem>
        - Technological University Dublin (Computer Science, 2021 -)
      </NoMarginListItem>
    </List>
  );
};

const Experience = () => {
  return (
    <List>
      <NoMarginListItem>- KNU PRIME Supporters (2017 - 2018)</NoMarginListItem>
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
  );
};

const Skills = () => {
  return (
    <List>
      <NoMarginListItem>
        - Languages: Korean(native), English(fluent), Python, JavaScript, Java,
        C
      </NoMarginListItem>
      <NoMarginListItem>
        - Tools: Jetbrains environment, VSCode, Git, Figma, Final Cut Pro
      </NoMarginListItem>
    </List>
  );
};
const Projects = () => {
  return (
    <List>
      <NoMarginListItem sx={{ mt: "0px" }}>
        <Link
          style={{ textDecoration: "none" }}
          target="_blank"
          sx={{ color: "red" }}
          href="https://github.com/KNU-indiGo/Machine"
        >
          - KNU buildings fire consequence analysis
        </Link>
      </NoMarginListItem>
      <NoMarginListItem sx={{ mt: "0px" }}>
        <Link
          style={{ textDecoration: "none" }}
          target="_blank"
          href="https://github.com/pinkishincoloragain/SuicideProject"
        >
          - Drug suicidal side effect analysis project
        </Link>
      </NoMarginListItem>
    </List>
  );
};

export { Skills, Projects, Education, Experience };
