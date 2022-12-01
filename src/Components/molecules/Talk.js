import * as React from "react";
import styled from "styled-components";
import Waves from "../objects/Waves";
import useScroll from "../../hooks/useScroll";

const TalkWrapper = styled.div(props => {
  return {
    backgroundColor: "transparent",
    display: "flex",
    justifyContent: props.user === "me" ? "flex-end" : "flex-start",
    paddingTop: "1%",
    paddingBottom: "2%",
  };
});

const TextWrapper = styled.div(props => {
  return {
    color: props.user === "me" ? "white" : "black",
    backgroundColor: props.user === "me" ? "#12C11A" : "#ffffff",
    fontSize: "max(1rem, 1.5vw)",
    width: "fitContent",
    maxWidth: "80%",
    padding: "min(1rem, 3vw)",
    borderRadius: "1rem",
    fontWeight: "500",
  };
});

const EnlargeWrapper = styled.div(props => {
  return {
    color: props.user === "me" ? "white" : "black",
    backgroundColor: props.user === "me" ? "#12C11A" : "#ffffff",
    fontSize: "max(1rem, 1.5vw)",
    width: "fitContent",
    maxWidth: "80%",
    padding: "min(1rem, 3vw)",
    borderRadius: "1rem",
    fontWeight: "500",
  };
});

const LinkTextWrapper = styled.div(props => {
  return {
    color: props.user === "me" ? "white" : "black",
    backgroundColor: props.user === "me" ? "#12C11A" : "#ffffff",
    fontSize: "max(1rem, 1.5vw)",
    width: "fitContent",
    maxWidth: "80%",
    padding: "min(1rem, 3vw)",
    borderRadius: "1rem",
    fontWeight: "500",
  };
});

const Talk = ({ user, text }) => {
  const element = useScroll("up", 0.7, 0);

  return (
    <TalkWrapper {...element} user={user}>
      <TextWrapper user={user}>{text}</TextWrapper>
    </TalkWrapper>
  );
};

const TalkWithEnlarge = ({ user, text, width, height }) => {
  const element = useScroll("enlarge", 0.7, 0);

  return (
    <TalkWrapper {...element} user={user}>
      <EnlargeWrapper user={user}>{text}</EnlargeWrapper>
    </TalkWrapper>
  );
};

const TalkWithLink = ({ user, text, width, height }) => {
  const element = useScroll("up", 0.7, 0);

  return (
    <TalkWrapper {...element} user={user}>
      <LinkTextWrapper user={user}>{text}</LinkTextWrapper>
    </TalkWrapper>
  );
};

const TalkWithObject = ({ user, text, width, height }) => {
  const element = useScroll("up", 0.1, 0);

  return (
    <>
      <TalkWrapper {...element} user={user}>
        <TextWrapper user={user}>
          <Waves
            width={width}
            height={height}
            elevation='10'
            azimuth='45'
            // container="boxContainer"
          />
        </TextWrapper>
      </TalkWrapper>
      <Talk user={user} text={text} />
    </>
  );
};

export { Talk, TalkWithEnlarge, TalkWithLink, TalkWithObject };
