import * as React from "react";
import Divider from "@mui/material/Divider";
import { List } from "@mui/material";
import {
  Education,
  Experience,
  Projects,
  Skills,
} from "../Components/containers/IntroContents";
export default function Introduction(props) {
  return (
    <div className="ml-32">
      <List>
        Education
        <Education />
        Experience
        <Experience />
        Skills
        <Skills />
        Projects
        <Projects />
        {/* <Divider /> */}
      </List>
    </div>
  );
}

export { Introduction };
