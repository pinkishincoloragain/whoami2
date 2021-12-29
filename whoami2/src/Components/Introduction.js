import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import { Container, Typography } from "@mui/material";
import { keyframes } from "@mui/system";
import { Fade } from "@mui/material";
import { education, experience, projects, skills } from "./IntroContents";
import Waves from "./objects/Waves";
import { useStyles } from "./Styles";
export default function Introduction(props) {
  const btnName = "Introduction";
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const classes = useStyles();

  const [eduOpen, setEduOpen] = React.useState(true);
  const [expOpen, setExpOpen] = React.useState(true);
  const [skillsOpen, setSkillsOpen] = React.useState(true);
  const [projectsOpen, setProjectsOpen] = React.useState(true);

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const effect = keyframes`
  from {
    positionY: -100px;
  }
  to {
    positionY: 0px;
  }
`;

  const list = (anchor) => (
    <Box
      sx={{
        width: anchor === "top" || anchor === "bottom" ? "auto" : "50vw",
      }}
      role="presentation"
      // onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
      style={{ backgroundColor: "transparent" }}
    >
      <List style={{ color: "#f0f0f0" }}>
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
    </Box>
  );

  return (
    <div>
      {["right"].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)}>
            {props.darkMode === true ? (
              <Typography
                variant="h4"
                component="div"
                gutterBottom
                margin="auto"
                color="white"
                className={classes.button}
              >
                {btnName}
              </Typography>
            ) : (
              <Typography
                variant="h4"
                component="div"
                gutterBottom
                margin="auto"
                color="black"
                className={classes.button2}
              >
                {btnName}
              </Typography>
            )}
          </Button>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            PaperProps={{
              sx: {
                backgroundColor: "transparent",
                backdropFilter: "blur(10px)",
              },
            }}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}
