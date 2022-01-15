import { useSelector } from "react-redux";
import Boxes from "./objects/Boxes";
import Waves from "./objects/Waves";
import { useState } from "react";
import { useStyles } from "./Styles";
import {
  Transition,
  TransitionGroup,
  CSSTransition,
} from "react-transition-group";

export default function Backgrounds(props) {
  const darkMode = useSelector((state) => state.mode.value);
  const classes = useStyles();

  return (
    <div style={{ transitionDuration: "0.2s" }}>
      {darkMode ? (
        <CSSTransition classNames="fade" timeout={1000}>
          <Waves azimuth="180" elevation="-0.5" className={classes.waves} />
        </CSSTransition>
      ) : (
        <Waves azimuth="10" elevation="20" className={classes.waves} />
      )}
    </div>
  );
}
