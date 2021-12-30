import { useStyles } from "./Styles";
import { useSelector } from "react-redux";
import { Typography } from "@mui/material";
import Header from "./Header";

export default function FullHeader(props) {
  const classes = useStyles();
  const darkMode = useSelector((state) => state.mode.value);

  const deskTopHeader = (
    <div style={{ width: "20vw" }}>
      <Header color={darkMode ? "white" : "black"} />
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
    </div>
  );

  const mobileHeader = (
    <div style={{ width: "90vw", fontSize: "8vw" }}>PINKISHINCOLORAGAIN</div>
  );

  return <>{props.windowWidth > 1280 ? deskTopHeader : mobileHeader}</>;
}
