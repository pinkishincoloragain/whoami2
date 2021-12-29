import React, { useEffect } from "react";
import CommentLine from "../Components/CommentLine";
import { Link } from "react-router-dom";
import UserCode from "../Components/UserCode";

export default function DesktopFrame(props) {
  const clickRef = React.useRef(null);
  const mobileTouchRef = React.useRef(null);
  const [mouseIn, setMouseIn] = React.useState(false);
  const [mouseOnCode, setMouseOnCode] = React.useState(false);
  const [backGrdColor, setBackGrdColor] = React.useState("transparent");
  const [mouseDown, setMouseDown] = React.useState(0);

  const handleMouseMove = (e) => {
    if (mouseDown % 2 === 0) {
      clickRef.current.style.setProperty("background-color", "#f0f0f0");
      clickRef.current.style.setProperty("opacity", "70%");
      clickRef.current.style.setProperty("filter", "blur(0px)");
    }
  };

  const handleMouseDown = (e) => {
    setMouseDown((prev) => prev + 1);
    handleBorder();
  };
  const handleMouseOut = (e) => {
    setMouseIn(false);
    if (mouseDown % 2 === 0) {
      if (!mouseOnCode) {
        clickRef.current.style.setProperty("filter", "blur(12px)");
        // clickRef.current.style.setProperty("filter", "opacity(30%)");
        clickRef.current.style.setProperty("background-color", "transparent");
      }
    }
  };

  const handleMouseEnter = (e) => {
    if (mouseDown % 2 === 0) {
      clickRef.current.style.setProperty("background-color", "#f0f0f0");
      clickRef.current.style.setProperty("filter", "blur(0px)");
      setMouseIn(true);
    }
  };

  const handleCommentMouseEnter = (e) => {
    if (mouseDown % 2 === 0) {
      clickRef.current.style.setProperty("background-color", "#f0f0f0");
      clickRef.current.style.setProperty("filter", "blur(0px)");
      setMouseOnCode(true);
    }
  };

  const handleCommentMouseOut = (e) => {
    if (mouseDown % 2 === 0) {
      clickRef.current.style.setProperty("background-color", "#f0f0f0");
      clickRef.current.style.setProperty("filter", "blur(0px)");
      setMouseOnCode(false);
    }
  };

  // const frameRef = React.useRef(null);

  const handleBorder = (e) => {
    if (mouseDown % 2 === 0) {
      clickRef.current.style.setProperty("border", "2px solid #f0f0f0");
      clickRef.current.style.setProperty("background-color", "#f0f0f0");
    } else {
      clickRef.current.style.setProperty("border", "6px double black");
    }
  };

  const OuterMouseMove = (e) => {
    setMouseIn(false);
  };

  const mobileFrame = (
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
      ref={clickRef}
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
        ref={mobileTouchRef}
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

  return <>{props.desktop ? desktopFrame : mobileFrame}</>;
}
