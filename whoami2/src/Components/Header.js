import { useStyles } from "./Styles";
import { Typography } from "@mui/material";

export default function Header(props) {
  const classes = useStyles();

  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          //   transitionDuration:"0.2s"
        }}
      >
        <div>
          <Typography
            variant="h1"
            component="div"
            fontWeight={"bold"}
            gutterBottom
            color={props.darkMode ? "white" : "black"}
            flex={3}
            className={classes.letter}
            onClick={() => window.location.reload()}
          >
            PINKISHINCOLORAGAIN
          </Typography>
          {/* {props.darkMode ? "🌙" : "🌞"} */}
        </div>
        <div
          style={{
            paddingTop: "1vh",
            heigth: "6vh",
            display: "flex",
            height: "10vh",
            flex: 1,
            marginLeft: "20vh",
          }}
        >
          <div
            style={{
              fontSize: "4.5vw",
              display: "flex",
              flexDirection: "row",
            }}
          >
            <div style={{ color: "white" }} onClick={props.handleChange}>
              <b>溟</b>
            </div>
            <div style={{ marginLeft: "2vh" }} onClick={props.handleChange}>
              <b>彬</b>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
