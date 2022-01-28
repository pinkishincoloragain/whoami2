import { useSelector } from "react-redux";
import Boxes from "../objects/Boxes";
import Waves from "../objects/Waves";
import DarkWave from "../objects/DarkWave";
import { useState } from "react";
import { useStyles } from "../styles/Styles";
import { useRef } from "react";
import {
  Transition,
  TransitionGroup,
  CSSTransition,
} from "react-transition-group";

export default function Backgrounds(props) {
  const darkMode = useSelector((state) => state.mode.value);
  const classes = useStyles();
  const [display, setDisplay] = useState(false);

  const getDisplay = (mode) => {
    if (mode === false) return "none";
    else return "block";
  };

  return (
    <div style={{ transitionDuration: "0.2s" }}>
      {/* <Waves
        azimuth="180"
        // ref={nodeRef}
        elevation="-1"
        className={classes.waves}
      /> */}
      {/* <DarkWave
        // ref={nodeRef2}
        azimuth="10"
        elevation="20"
        className={classes.waves}
      /> */}
    </div>
  );
}
