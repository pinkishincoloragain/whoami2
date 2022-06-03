import { Box, Paper } from "@mui/material";
import { useState, useEffect } from "react";
import { styled } from "@mui/styles";
import { useStyles } from "./Styles";
import { useSelector, useDispatch } from "react-redux";
import Skeleton from "@mui/material/Skeleton";
import { Collapse } from "@mui/material";
import Boxes from "../objects/Boxes";

const data = [
  {
    title: "Projects",
    description: "A collection of my projects",
    image: "https://source.unsplash.com/random/400x400",
    link: "#",
  },
];

export default function LandingExpl() {
  const classes = useStyles();
  const darkMode = useSelector((state) => state.mode.value);

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [windowHeight, setWindowHeight] = useState(window.innerHeight);

  useEffect(() => {
    window.addEventListener("resize", (e) => {
      setWindowWidth(window.innerWidth);
    });
  }, [window.innerWidth]);

  useEffect(() => {
    window.addEventListener("resize", (e) => {
      setWindowHeight(window.innerHeight);
    });
  }, [window.innerHeight]);

  const Paragraph = styled(`div`)({
    width: "80vw",
    height: "80vh",
    marginTop: "5vh",
    marginBottom: "5vh",
    elevation: "1",
  });

  const GraphicWrapper = styled(Paper)({
    borderRadius: "20px",
    width: "40vw",
    height: "30vh",
    boxShadow: "0px 2px 12px 1px #cfcfcf",
  });

  return (
    <Paragraph>
      <GraphicWrapper>
        {/* <Boxes
          name={`Box`}
          width={windowWidth}
          height={windowHeight / 2}
          container={`container`}
          bkgColor={"#ffffff"}
          thetaSpeed={darkMode ? 0.1 : 0.5}
        /> */}
        {/* <Collapse orientation="vertical" in={graphicOpen}>
          <Box
            sx={{
              height: windowHeight / 2,
            }}
            className={classes.graphicWrapper}
            onClick={() => setGraphicOpen(!graphicOpen)}
          >
            {!darkMode ? (
              <Boxes
                name={`Box${props.name}`}
                width={windowWidth}
                height={windowHeight / 2}
                container={`container${props.name}`}
                bkgColor={"#ffffff"}
                thetaSpeed={darkMode ? 0.1 : 0.5}
              />
            ) : (
              <Waves
                width={windowWidth}
                height={windowHeight / 2}
                azimuth="1"
                elevation="2"
              />
            )}
          </Box>
        </Collapse> */}
      </GraphicWrapper>
    </Paragraph>
  );
}
