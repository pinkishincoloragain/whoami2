import React, { useEffect } from "react";
import CommentLine from "../Components/decorations/CommentLine";
import { Link } from "react-router-dom";
import UserCode from "../Components/decorations/UserCode";
import SmallFrame from "./SmallFrame";

export default function Frames(props) {
  const clickRef = React.useRef(null);
  const mobileTouchRef = React.useRef(null);
  const [mouseIn, setMouseIn] = React.useState(false);
  const [mouseOnCode, setMouseOnCode] = React.useState(false);
  const [mouseDown, setMouseDown] = React.useState(0);

  const handleBlur = () => {
    clickRef.current.style.setProperty("filter", "blur(12px)");
    clickRef.current.style.setProperty("background-color", "transparent");
  };

  const handleClear = () => {
    clickRef.current.style.setProperty("background-color", "#f0f0f0");
    clickRef.current.style.setProperty("filter", "blur(0px)");
    setMouseIn(true);
  };

  const handleMouseMove = (e) => {
    if (mouseDown % 2 === 0) {
      clickRef.current.style.setProperty("background-color", "#f0f0f0");
      clickRef.current.style.setProperty("opacity", "70%");
      clickRef.current.style.setProperty("filter", "blur(0px)");
    }
  };

  const handleMouseDown = () => {
    setMouseDown((prev) => prev + 1);
    handleBorder();
  };
  const handleMouseOut = () => {
    setMouseIn(false);
    if (mouseDown % 2 === 0 && !mouseOnCode) handleBlur();
  };

  const handleMouseEnter = () => {
    if (mouseDown % 2 === 0) handleClear();
  };

  const handleCommentMouseEnter = () => {
    if (mouseDown % 2 === 0) handleClear();
  };

  const handleCommentMouseOut = () => {
    if (mouseDown % 2 === 0) handleClear();
  };

  const OuterMouseMove = (e) => {
    setMouseIn(false);
  };

  const handleBorder = (e) => {
    if (mouseDown % 2 === 0) {
      clickRef.current.style.setProperty("border", "2px solid #f0f0f0");
      clickRef.current.style.setProperty("background-color", "#f0f0f0");
      clickRef.current.style.setProperty("opacity", "100");
    } else {
      clickRef.current.style.setProperty("border", "6px double black");
    }
  };

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
      onMouseMove={OuterMouseMove}
    >
      <div
        style={{
          width: "50vw",
          height: "40vh",
          position: "absolute",
          backgroundColor: "transparent",
          border: "6px double black",
          zIndex: "2",
          padding: "1vh",
          filter: "blur(12px)",
          transitionDuration: "0.1s",
          boxShadow: "5px 5px 10px black",
          display: "flex",
          margin: "auto",
          alignItems: "center",
        }}
        onMouseMove={handleMouseMove}
        onMouseDown={handleMouseDown}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseOut}
        onMouseOut={handleMouseOut}
        ref={clickRef}
        // ref={frameRef}
      >
        <UserCode
          darkMode={props.darkMode}
          handleCommentMouseEnter={handleCommentMouseEnter}
          handleCommentMouseOut={handleCommentMouseOut}
        />
      </div>
    </div>
  );

  return <>{props.desktop ? desktopFrame : <SmallFrame />}</>;
}
