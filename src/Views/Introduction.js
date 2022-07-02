import * as React from "react";
import { useSelector } from "react-redux";
import Divider from "@mui/material/Divider";
import { List, ListItem } from "@mui/material";
import {
  Education,
  Experience,
  Projects,
  Skills,
} from "../Components/containers/IntroContents";
import { styled } from "@mui/styles";
export default function Introduction(props) {
  const darkMode = useSelector((state) => state.mode.value);

  const CustomListItem = styled(ListItem)({
    height: "1.5vh",
    width: "max(8vw,150px)",
    marginTop: "2vh",
    marginBottom: "2vh",
    marginRight: "0px",
    overflow: "visible",
    marginLeft: "0px",
  });

  return (
    <List
      sx={{
        ml: "10vw",
      }}
    >
      Education
      <Education />
      Experience
      <Experience />
      Skills
      <Skills />
      Projects
      <Projects />
      <Divider />
    </List>
  );
}

export { Introduction };
