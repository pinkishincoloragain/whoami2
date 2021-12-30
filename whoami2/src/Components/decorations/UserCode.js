import React from "react";
import CommentLine from "./CommentLine";
import { useSelector } from "react-redux";

export default function UserCode() {
  const darkMode = useSelector((state) => state.mode.value);

  return (
    <code
      style={{
        padding: "8px",
        paddingTop: "3px",
        color: "white",
        fontSize: "0.9vw",
      }}
    >
      class Whoami:
      <br />
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;def __init__(self): <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <code>self.name = "Myungbin Son"</code>
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
        content="Drug suicidal side effect analysis project"
        link="https://github.com/pinkishincoloragain/SuicideProject"
      />
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;machine_learning()
      <code>
        <CommentLine
          color="blue"
          content="KNU buildings fire consequence analysis"
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
  );
}
