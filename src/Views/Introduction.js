import * as React from "react";
import { useSelector } from "react-redux";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import { List, Box, Container, Typography } from "@mui/material";
import {
  education,
  experience,
  projects,
  skills,
} from "../Components/containers/IntroContents";
import Waves from "../Components/objects/Waves";
import { useStyles } from "../Components/styles/Styles";
export default function Introduction(props) {
  const btnName = "Introduction";
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });
  const darkMode = useSelector((state) => state.mode.value);

  const classes = useStyles();

  const [eduOpen, setEduOpen] = React.useState(true);
  const [expOpen, setExpOpen] = React.useState(true);
  const [skillsOpen, setSkillsOpen] = React.useState(true);
  const [projectsOpen, setProjectsOpen] = React.useState(true);

  return (
    <List
      style={{
        color: !darkMode ? "#1b1b1b" : "#ffffff",
      }}
    >
      <ListItem
        button
        key="Education"
        sx={{
          height: "1.5vh",
          width: "max(8vw,150px)",
          marginTop: "2vh",
          marginBottom: "2vh",
          marginRight: "0px",
        }}
        style={{ backgroundColor: "grey", overflow: "visible" }}
        onClick={() => setEduOpen(!eduOpen)}
      >
        <Typography variant="h4" sx={{ fontStyle: "italic" }}>
          Education
        </Typography>
      </ListItem>
      {eduOpen ? education() : null}
      <ListItem
        button
        key="Experience"
        sx={{
          height: "1.5vh",
          width: "max(8vw,150px)",
          marginTop: "4vh",
          marginBottom: "2vh",
        }}
        style={{ backgroundColor: "grey", overflow: "visible" }}
        onClick={() => setExpOpen(!expOpen)}
      >
        <Typography variant="h4" sx={{ fontStyle: "italic" }}>
          Experience
        </Typography>
      </ListItem>
      {expOpen ? experience() : null}
      <ListItem
        button
        key="Skills"
        sx={{
          height: "1.5vh",
          width: "max(8vw,150px)",
          marginTop: "4vh",
          marginBottom: "2vh",
        }}
        style={{ backgroundColor: "grey", overflow: "visible" }}
        onClick={() => setSkillsOpen(!skillsOpen)}
      >
        <Typography variant="h4" sx={{ fontStyle: "italic" }}>
          Skills
        </Typography>
      </ListItem>
      {skillsOpen ? skills() : null}
      <ListItem
        button
        key="Projects"
        sx={{
          height: "1.5vh",
          width: "max(8vw,150px)",
          marginTop: "4vh",
          marginBottom: "2vh",
          color: "white",
        }}
        style={{ backgroundColor: "grey", overflow: "visible" }}
        onClick={() => setProjectsOpen(!projectsOpen)}
      >
        <Typography variant="h4" sx={{ fontStyle: "italic" }}>
          Projects
        </Typography>
      </ListItem>
      {projectsOpen ? projects() : null}

      <Divider />
    </List>
  );
}

export { Introduction };
