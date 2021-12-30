import { useStyles } from "./Styles";
import { useSelector } from "react-redux";
import { Typography } from "@mui/material";
import { Tooltip } from "@mui/material";

export default function Subheader(props) {
  const classes = useStyles();
  const darkMode = useSelector((state) => state.mode.value);

  const deskTopHeader = (
    <div style={{ width: "13vw" }}>
      <Tooltip
        arrow
        placement="right"
        title={
          <Typography fontSize={15}>
            {darkMode ? "Hi!" : "Nice to meet you!"}
          </Typography>
        }
      >
        <Typography
          variant="h5"
          component="div"
          fontWeight={"bold"}
          gutterBottom
          marginLeft="1vh"
          color={darkMode ? "white" : "black"}
          className={classes.letter}
        >
          MYUNGBIN SON
        </Typography>
      </Tooltip>
    </div>
  );

  const mobileHeader = (
    <div style={{ width: "90vw", fontSize: "8vw" }}>PINKISHINCOLORAGAIN</div>
  );

  return <>{props.windowWidth > 1280 ? deskTopHeader : mobileHeader}</>;
}
