import * as React from "react";
import { useSelector } from "react-redux";
import Divider from "@mui/material/Divider";
import { List, ListItem, Typography } from "@mui/material";
import {
  education,
  experience,
  projects,
  skills,
} from "../Components/containers/IntroContents";
import { styled } from "@mui/styles";
export default function Introduction(props) {
  const darkMode = useSelector((state) => state.mode.value);
  const [eduOpen, setEduOpen] = React.useState(true);
  const [expOpen, setExpOpen] = React.useState(true);
  const [skillsOpen, setSkillsOpen] = React.useState(true);
  const [projectsOpen, setProjectsOpen] = React.useState(true);

  const CustomListItem = styled(ListItem)({
    height: "1.5vh",
    width: "max(8vw,150px)",
    marginTop: "2vh",
    marginBottom: "2vh",
    marginRight: "0px",
    backgroundColor: "grey",
    overflow: "visible",
  });

  return (
    <List
      style={{
        color: !darkMode ? "#1b1b1b" : "#ffffff",
      }}
    >
      <CustomListItem
        button
        key="Education"
        onClick={() => setEduOpen(!eduOpen)}
      >
        <Typography variant="h4" sx={{ fontStyle: "italic" }}>
          Education
        </Typography>
      </CustomListItem>
      {eduOpen ? education() : null}
      <CustomListItem
        button
        key="Experience"
        onClick={() => setExpOpen(!expOpen)}
      >
        <Typography variant="h4" sx={{ fontStyle: "italic" }}>
          Experience
        </Typography>
      </CustomListItem>
      {expOpen ? experience() : null}
      <CustomListItem
        button
        key="Skills"
        onClick={() => setSkillsOpen(!skillsOpen)}
      >
        <Typography variant="h4" sx={{ fontStyle: "italic" }}>
          Skills
        </Typography>
      </CustomListItem>
      {skillsOpen ? skills() : null}
      <CustomListItem
        key="Projects"
        onClick={() => setProjectsOpen(!projectsOpen)}
      >
        <Typography variant="h4" sx={{ fontStyle: "italic" }}>
          Projects
        </Typography>
      </CustomListItem>
      {projectsOpen ? projects() : null}

      <Divider />
    </List>
  );
}

export { Introduction };
