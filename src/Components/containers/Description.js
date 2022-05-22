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

  const [fe, setFe] = useState("FE");

  const DescTypo = styled(Button)(({ theme, color }) => ({
    ...theme.button,
    fontSize: "min(2vh, 15rem)",
    letterSpacing: "-0.3",
    lineHeight: "1",
    fontWeight: "400",
    height: "3vh",
    maxHeight: "3vh",
    color: darkMode ? "#ffffff" : "#1f1f1f",
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
        }}
      >
        <div style={{ display: "flex", flexDirection: "row" }}>
          <DescTypo onClick={() => dispatch(changeMode())}>Versatile</DescTypo>
          <DescTypo onClick={() => props.setGraphicOpen(!props.GraphicOpen)}>
            and creative software developer.
            <br />
          </DescTypo>
        </div>

        <div style={{ display: "flex", flexDirection: "row" }}>
          <DescTypo>Interested in&nbsp;</DescTypo>
          <div style={{ display: "flex", flexDirection: "row" }}>
            <DescTypo>
              {fe}
              <img
                src={reactIcon}
                style={{
                  //   paddingTop: "2px",
                  width: "min(4vh, 15rem)",
                  marginLeft: "max(-32px,-3.4vh)",
                  zIndex: "0",
                }}
              />
            </DescTypo>
          </div>
          <DescTypo>development.</DescTypo>
          <DescTypo>
            Currently in&nbsp;
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
          </DescTypo>
        </div>
      </div>
    </>
  );
}
