import React, { useEffect } from "react";
import CommentLine from "../Components/decorations/CommentLine";
import { Link } from "react-router-dom";
import UserCode from "../Components/decorations/UserCode";
import { useStyles } from "../Components/Styles";
import { useSelector } from "react-redux";

export default function Frames(props) {
  const clickRef = React.useRef(null);
  const mobileTouchRef = React.useRef(null);
  const darkMode = useSelector((state) => state.mode.value);

  let classes = useStyles();

  const smallFrame = (
    <div
      style={{
        display: "flex",
        margin: "auto",
        width: "100%",
        height: "100%",
        justifyContent: "center",
        alignItems: "center",
        position: "absolute",
      }}
    >
      <div
        style={{
          width: "80vw",
          height: "34vh",
          position: "absolute",
          backgroundColor: "transparent",
          border: "8px solid black",
          zIndex: "2",
          padding: "1vh",
        }}
      ></div>
    </div>
  );

  const desktopFrame = (
    <div
      style={{
        display: "flex",
        margin: "auto",
        width: "100%",
        height: "100%",
        justifyContent: "center",
        alignItems: "center",
        position: "absolute",
      }}
    >
      <div></div>
      <div
        className={classes.frame}
        // ref={frameRef}
        style={{
          borderRadius: "8px",
          display: "flex",
          flexDirection: "column",
          border: "0.1px solid black",
        }}
      >
        <div
          style={{
            height: "28px",
            backgroundColor: "#323232",
            width: "100%",
            borderTopLeftRadius: "10px",
            borderTopRightRadius: "10px",
            borderBottom: "0.1px solid black",
            marginBottom: "2px",
            display: "flex",
            flexDirection: "row",
          }}
        >
          <div className={classes.buttonHolder}>
            <div className={classes.terminalBtn1}></div>
            <div className={classes.terminalBtn2}></div>
            <div className={classes.terminalBtn3}></div>
          </div>
        </div>

        <UserCode />
      </div>
    </div>
  );

  return <>{props.desktop ? desktopFrame : smallFrame}</>;
}
