import { useStyles } from "../Styles";
import { useNavigate } from "react-router-dom";

import { Button } from "@mui/material";
import Link from "@mui/material/Link";
import { Typography } from "@mui/material";

export default function BlogBtn(props) {
  const classes = useStyles();
  let nav = useNavigate();

  const handleBlogClick = () => {
    nav("/blog");
  };

  return (
    <div>
      <Button onClick={handleBlogClick}>
        <Typography
          variant="h4"
          color={props.color}
          className={classes.button3}
        >
          BLOG
        </Typography>
      </Button>
    </div>
  );
}
