import { useStyles } from "./Styles";
import { Typography } from "@mui/material";

export default function LightBtn(props) {
  const classes = useStyles();
  return (
    <>
      {props.darkMode ? (
        <div
          style={{
            width: "15vw",
            height: "8vh",
            marginLeft: "1vh",
            padding: "none",
          }}
          onClick={props.handleChange}
          label=" "
        >
          <Typography
            variant="h3"
            component="div"
            fontWeight="bold"
            gutterBottom
            color="#f0f0f0"
            className={classes.button}
          >
            Dark
          </Typography>
        </div>
      ) : (
        <div
          style={{
            width: "15vw",
            marginLeft: "1vh",
            height: "8vh",
          }}
          onClick={props.handleChange}
          label=" "
        >
          <Typography
            variant="h3"
            component="div"
            fontWeight={"bold"}
            gutterBottom
            color="black"
            className={classes.button}
          >
            Light
          </Typography>
        </div>
      )}
    </>
  );
}
