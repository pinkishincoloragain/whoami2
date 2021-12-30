import { Typography, Button } from "@mui/material";
import { useStyles } from "../Styles";
import { useNavigate } from "react-router-dom";

export default function ReloadBtn(props) {
  const classes = useStyles();
  let nav = useNavigate();
  const handleClick = () => {
    window.location.reload();
  };

  return (
    <div>
      <Button onClick={handleClick}>
        <Typography
          variant="h4"
          color={props.color}
          className={classes.button5}
        >
          NEW MODEL
        </Typography>
      </Button>
    </div>
  );
}
