import { useStyles } from "./Styles";
import { useNavigate } from "react-router-dom";

import { Button } from "@mui/material";
import Link from "@mui/material/Link";
import { Typography } from "@mui/material";

export default function HomeBtn(props) {
  const classes = useStyles();
  let nav = useNavigate();

  const handleBlogClick = () => {
    nav("/");
  };

  return (
    <div>
      {props.darkMode ? (
        <Button onClick={handleBlogClick}>
          <Typography variant="h4" color="white" className={classes.button4}>
            HOME
          </Typography>
        </Button>
      ) : (
        <Button onClick={handleBlogClick}>
          <Typography variant="h4" color="black" className={classes.button4}>
            HOME
          </Typography>
        </Button>
      )}
    </div>
  );
}
