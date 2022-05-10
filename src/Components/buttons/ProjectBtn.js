import { useStyles } from "../styles/Styles";
import { useNavigate } from "react-router-dom";

import { Button } from "@mui/material";
import Link from "@mui/material/Link";
import { Typography } from "@mui/material";

export default function ProjectBtn(props) {
  const classes = useStyles();
  let nav = useNavigate();

  const handleBlogClick = () => {
    nav("/projects");
  };

  return (
    <div>
      <Button onClick={handleBlogClick}>
        <Typography
          variant="h5"
          color={props.color}
          className={classes.button4}
        >
          PROJECTS
        </Typography>
      </Button>
    </div>
  );
}