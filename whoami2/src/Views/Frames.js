import React, { useEffect } from "react";
import CommentLine from "../Components/decorations/CommentLine";
import { Link } from "react-router-dom";
import UserCode from "../Components/decorations/UserCode";
import { useStyles } from "../Components/Styles";
import { useSelector } from "react-redux";
import TerminalBtn from "../Components/buttons/TerminalBtn";

export default function Frames(props) {
  const clickRef = React.useRef(null);
  const mobileTouchRef = React.useRef(null);
  const darkMode = useSelector((state) => state.mode.value);
  console.log(darkMode);

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

  const btnsLight = (
    <div className={classes.buttonHolder}>
      <TerminalBtn color="#FC605C" borderColor="#F2524D" />
      <TerminalBtn color="#FDBC40" borderColor="#E9B14D" />
      <TerminalBtn color="#34C849" borderColor="#1EBC32" />
    </div>
  );

  const btns = (
    <div className={classes.buttonHolder}>
      <TerminalBtn color="#ED6A5E" borderColor="#D06158" />
      <TerminalBtn color="#F4BF4F" borderColor="#D6A94A" />
      <TerminalBtn color="#61C654" borderColor="#529549" />
    </div>
  );

  // const text = (
  //   <div style={{ width: "100%", marginLeft: "2vw" }}>
  //     <div className={classes.textHolder}>fish</div>
  //   </div>
  // );

  const desktopFrame = (
    <div className={classes.frameBkg}>
      {darkMode ? (
        <div className={classes.frame}>
          <div className={classes.frameHeader}>
            {btns}
            {/* {text} */}
          </div>
          <UserCode />
        </div>
      ) : (
        <div className={classes.frameLight}>
          <div className={classes.frameHeaderLight}>{btnsLight}</div>
          <UserCode />
        </div>
      )}
    </div>
  );

  return <>{props.desktop ? desktopFrame : smallFrame}</>;
}
