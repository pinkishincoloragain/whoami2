import { useStyles } from "../styles/Styles";
import { Button, Link, Typography } from "@mui/material";
import reactIcon from "../../assets/icons/react.gif";
import { useState } from "react";
import { styled } from "@mui/material/styles";
import { useDispatch, useSelector } from "react-redux";
import { changeMode } from "../../Components/controls/modeSlice";

export default function Description(props) {
  const darkMode = useSelector((state) => state.mode.value);
  const dispatch = useDispatch();

  const DescTypo = styled(Typography)(({ theme, color }) => ({
    ...theme.typography.h1,
    fontSize: "min(3vh, 20rem)",
    letterSpacing: "-0.3",
    lineHeight: "1",
    fontWeight: "400",
    height: "3vh",
    maxHeight: "3vh",
    color: darkMode ? "#ffffff" : "#1f1f1f",
    ":hover": {
      color: "yellow",
    },
    // margin: "-2px",
  }));

  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          marginBottom: "10vh",
          marginTop: "3vh",
          color: !darkMode ? "#1b1b1b" : "#ffffff",
          fontSize: "min(3vh, 20rem)",
        }}
      >
        <div style={{ display: "flex", flexDirection: "row" }}>
          Versatile and creative software developer.
          
          <div style={{ display: "flex", flexDirection: "row" }}>
            &nbsp;Interested in&nbsp;
            <div style={{ display: "flex", flexDirection: "row" }}>
              <div style={{ zIndex: "2" }}>
                <b>FE</b>
              </div>
              <img
                src={reactIcon}
                style={{
                  //   paddingTop: "2px",
                  width: "min(4vh, 15rem)",
                  height: "min(4vh, 15rem)",
                  marginTop: "-8px",
                  marginLeft: "max(-28px,-3.4vh)",
                  zIndex: "0",
                }}
              />
              <div style={{ zIndex: "2" }}>
                <b>ML</b>
              </div>
              <img
                src={reactIcon}
                style={{
                  //   paddingTop: "2px",
                  width: "min(4vh, 15rem)",
                  height: "min(4vh, 15rem)",
                  marginTop: "-8px",
                  marginLeft: "max(-28px,-3.4vh)",
                  zIndex: "0",
                }}
              />
            </div>
            development. Currently in&nbsp;
            <a
              href="https://youtu.be/Gz-d3Y7pHe4"
              target="_blank"
              style={{
                textDecoration: "none",
                color: "#0057D9",
              }}
            >
              Dublin, Ireland.
            </a>
            <br />
          </div>
          <Button onClick={() => props.setGraphicOpen(!props.graphicOpen)}>
            fish
          </Button>
        </div>
      </div>
    </>
  );
}
