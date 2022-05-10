import { useStyles } from "../styles/Styles";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
import { Typography } from "@mui/material";

export default function HomeBtn(props) {
  const classes = useStyles();
  let nav = useNavigate();

  const handleBlogClick = () => {
    nav("/");
  };

  return (
    <div>
      <Button onClick={handleBlogClick}>
        <Typography
          variant="h4"
          color={props.color}
          className={classes.button4}
        >
          HOME
        </Typography>
      </Button>
    </div>
  );
}
