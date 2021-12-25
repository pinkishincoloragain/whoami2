import React from "react";

export default function Frames(props) {
  const clickRef = React.useRef(null);
  const mobileTouchRef = React.useRef(null);
  const [mouseIn, setMouseIn] = React.useState(false);

  const handleMouseMove = (e) => {
    // clickRef.current.style.setProperty("background-color", "#f0f0f0");
    // setTimeout(() => {
    //   if (mouseIn) {
    //     clickRef.current.style.setProperty("background-color", "#f0f0f0");
    //   } else {
    //     clickRef.current.style.setProperty("background-color", "transparent");
    //   }
    // }, 3000);
  };
  const handleMouseDown = (e) => {
    clickRef.current.style.setProperty("background-color", "#f0f0f0");
  };
  const handleMouseOut = (e) => {
    e.target.style.setProperty("background-color", "transparent");
  };

  const handleMouseEnter = (e) => {
    e.target.style.setProperty("cursor", "pointer");
    setMouseIn(true);
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
          height: "30vh",
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

  const DesktopFrame = (
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
          border: "8px double black",
          zIndex: "2",
          padding: "1vh",
          transitionDuration: "0.2s",
        }}
        onMouseMove={handleMouseMove}
        onMouseDown={handleMouseDown}
        onMouseEnter={handleMouseEnter}
        onMouseOut={handleMouseOut}
        ref={clickRef}
      >
        <code>
          class Whoami: <br />
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;def __init__(self): <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;self.name = "Myungbin
          Son" <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;self. = "Software
          Developer"
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;self.hobby = "Design"
          <br />
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;def code(self, stackoverflow): <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;web_development(){" "}
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;mobile_application(){" "}
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;data_analysis() <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;sql() <br />
          <br />
          <br />
          myungbin = Whoami()
          <br />
          myungbin.code()
        </code>
      </div>
    </div>
  );

  return <>{props.desktop ? DesktopFrame : mobileFrame}</>;
}
