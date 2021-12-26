import React from "react";

export default function CommentLine(props) {
  let handleCommentClick;
  const [commentMouseIn, setCommentMouseIn] = React.useState(false);

  const handleCommentMouseEnter = (e) => {
    e.target.style.setProperty("color", props.color);
  };

  const handleCommentMouseLeave = (e) => {
    e.target.style.setProperty("color", "#008000");
  };

  if (props.link !== null) {
    handleCommentClick = (e) => {
      window.open(props.link, "_blank");
    };
  }

  return (
    <code
      style={{ color: "#008000", zIndex: "-1" }}
      onClick={handleCommentClick}
      onMouseEnter={handleCommentMouseEnter}
      onMouseLeave={handleCommentMouseLeave}
    >
      &nbsp;&nbsp;#&nbsp;{props.content}
    </code>
  );
}
