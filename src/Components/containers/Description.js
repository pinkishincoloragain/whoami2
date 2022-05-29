import { useStyles } from "../styles/Styles";
import { useState, useEffect } from "react";
import reactIcon from "../../assets/icons/react.gif";
import pythonIcon from "../../assets/icons/python.gif";
import { useDispatch, useSelector } from "react-redux";
import { RedButton } from "../buttons/MyButton";
import { RedContainer } from "./MyContainer";
import InsertEmoticonIcon from "@mui/icons-material/InsertEmoticon";

export default function Description(props) {
  const darkMode = useSelector((state) => state.mode.value);
  let classes = useStyles();
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    window.addEventListener("resize", (e) => {
      setWidth(window.innerWidth);
    });
  }, [window.innerWidth]);

  const DescBtn = (props) => {
    return (
      <RedButton>
        <div style={{ zIndex: "2", fontWeight: 500, fontSize: "large" }}>
          {props.name}
        </div>
        <img src={props.src} className={classes.imageWrapper} />
      </RedButton>
    );
  };
  return (
    <RedContainer style={{ marginTop: "3vh" }}>
      <div
        style={{
          backgroundColor: darkMode ? "#1b1b1b" : "#ffffff",
          color: !darkMode ? "#1b1b1b" : "#ffffff",
        }}
        className={classes.descTypo}
      >
        {width > 800 ? (
          "Creative software developer interested in"
        ) : (
          <>
            <InsertEmoticonIcon fontSize="large" />
          </>
        )}
        &nbsp;
        <DescBtn name="FE development" src={reactIcon} />
        &nbsp; and &nbsp;
        <DescBtn name="Data analysis" src={pythonIcon} />
        &nbsp;
        {/* <Button onClick={() => props.setGraphicOpen(!props.graphicOpen)}>
          fish
        </Button> */}
      </div>
    </RedContainer>
  );
}
