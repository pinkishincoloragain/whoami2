import React, { useEffect } from "react";
import CommentLine from "./CommentLine";

export default function Frames(props) {
  const clickRef = React.useRef(null);
  const mobileTouchRef = React.useRef(null);
  const [mouseIn, setMouseIn] = React.useState(false);
  const [mouseOnCode, setMouseOnCode] = React.useState(false);
  const [backGrdColor, setBackGrdColor] = React.useState("transparent");

  const handleMouseMove = (e) => {
    clickRef.current.style.setProperty("background-color", "#f0f0f0");
    clickRef.current.style.setProperty("opacity", "93%");
    clickRef.current.style.setProperty("filter", "blur(0px)");
  };

  const handleMouseDown = (e) => {
    clickRef.current.style.setProperty("background-color", "#f0f0f0");
    clickRef.current.style.setProperty("filter", "blur(0px)");
  };
  const handleMouseOut = (e) => {
    setMouseIn(false);
    if (!mouseOnCode) {
      clickRef.current.style.setProperty("filter", "blur(5px)");
      // clickRef.current.style.setProperty("filter", "opacity(30%)");
      clickRef.current.style.setProperty("background-color", "transparent");
    }
  };

  const handleMouseEnter = (e) => {
    clickRef.current.style.setProperty("background-color", "#f0f0f0");
    clickRef.current.style.setProperty("filter", "blur(0px)");
    setMouseIn(true);
  };

  const handleCommentMouseEnter = (e) => {
    clickRef.current.style.setProperty("background-color", "#f0f0f0");
    clickRef.current.style.setProperty("filter", "blur(0px)");
    setMouseOnCode(true);
  };
  const handleCommentMouseOut = (e) => {
    setMouseOnCode(false);
    clickRef.current.style.setProperty("background-color", "#f0f0f0");
    clickRef.current.style.setProperty("filter", "blur(0px)");
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
          filter: "blur(5px)",
          transitionDuration: "0.1s",
          boxShadow: "10px 10px 20px black",
        }}
        onMouseMove={handleMouseMove}
        onMouseDown={handleMouseDown}
        onMouseEnter={handleMouseEnter}
        onMouseOut={handleMouseOut}
        ref={clickRef}
      >
        <code
          onMouseEnter={handleCommentMouseEnter}
          onMouseOut={handleCommentMouseOut}
          color={props.darkMode ? "white" : "black"}
        >
          class Whoami:
          <br />
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;def __init__(self): <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;self.name = "Myungbin
          Son"
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;self.do = "Software
          Development"
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;self.contact =
          "smb1103@gmail.com"
          <br />
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;def code(self, stackoverflow): <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;web_development()
          <CommentLine
            color="red"
            content="You're looking at right now!"
            link={null}
          />
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;software_development()
          <CommentLine
            color="red"
            content="Use: Python, Java, C, Android, JavaScript"
            link={null}
          />
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;database()
          <CommentLine
            color="red"
            content="Oracle, Mysql, Firebase, Mongodb"
            link={null}
          />
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;data_analysis()
          <CommentLine
            color="blue"
            content="Drug suicidal analysis project"
            link="https://github.com/pinkishincoloragain/SuicideProject"
          />
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;machine_learning()
          <code>
            <CommentLine
              color="blue"
              content="KNU Buildings Fire analysis"
              link="https://github.com/KNU-indiGo/Machine"
            />
          </code>
          <br />
          <br />
          <br />
          myungbin = Whoami()
          <br />
          print("hello stanger!")
          <br />
          myungbin.code()
        </code>
      </div>
    </div>
  );

  return <>{props.desktop ? desktopFrame : mobileFrame}</>;
}
