import { useStyles } from "../Styles";
import { useNavigate } from "react-router-dom";

import { Button } from "@mui/material";
import Link from "@mui/material/Link";
import { Typography } from "@mui/material";

export default function InfoBtn(props) {
  const classes = useStyles();

  return (
    <div>
      <Button onClick={props.handleFrame}>
        <Typography
          variant="h5"
          color={props.color}
          className={classes.button5}
        >
          WHOAMI
        </Typography>
      </Button>
    </div>
  );
}
