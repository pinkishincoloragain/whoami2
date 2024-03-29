import { memo, useState, useEffect } from "react";
import styled from "styled-components";
import bkg from "../../assets/images/bkg.jpg";
import LoadingSvg from "../atoms/LoadingSvg";

const BackgroundWrapper = styled.div({
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  zIndex: 1,
  overflow: "hidden",
});

const BackgroundImageWrapper = styled.div({
  position: "absolute",
  top: -10,
  left: -10,
  padding: "-10px 0px 0px -10px",
  width: "120%",
  height: "100%",
  zIndex: 1,
  overflow: "hidden",
  filter: " brightness(0.5)",
  scale: 1.1,
});

const BackgroundVideo = styled.iframe({
  width: "100%",
  height: "100%",
});

function Video() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [videoPlay, setVideoPlay] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setVideoPlay(true);
    }, 2100);
  });

  useEffect(() => {
    window.addEventListener("resize", () => {
      setWindowWidth(window.innerWidth);
    });
    return () => {
      window.removeEventListener("resize", () => {
        setWindowWidth(window.innerWidth);
      });
    };
  }, []);

  return (
    <BackgroundWrapper>
      <LoadingSvg display={videoPlay ? "none" : "flex"} />
      {windowWidth > 768 ? (
        <BackgroundVideo
          // src='https://www.youtube.com/embed/NU6ynXp7uUE?autoplay=1&playlist=NU6ynXp7uUE&loop=1&controls=0&mute=1&modestbranding=1&showinfo=0&start=5&enablejsapi=1&&widgetid=3'
          frameBorder='0'
          // allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title='Hello world youtube video'
        />
      ) : (
        <BackgroundImageWrapper>
          <img src={bkg} />
        </BackgroundImageWrapper>
      )}
    </BackgroundWrapper>
  );
}

export default memo(Video);
