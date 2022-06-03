import { useStyles } from "./Styles";
import { useState, useEffect } from "react";
import reactIcon from "../../assets/icons/react.gif";
import pythonIcon from "../../assets/icons/python.gif";
import { useDispatch, useSelector } from "react-redux";
import { RedButton } from "../MyButton";
import { RedContainer } from "./MyContainer";
import InsertEmoticonIcon from "@mui/icons-material/InsertEmoticon";

function debounce(func, wait, immediate) {
  var timeout;
  return function () {
    var context = this,
      args = arguments;
    var later = function () {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}

function useWindowSize() {
  function getSize() {
    return {
      width: window.innerWidth,
      height: window.innerHeight,
    };
  }

  const [windowSize, setWindowSize] = useState(getSize);

  useEffect(() => {
    // Debounce to avoid the function fire multiple times
    var handleResizeDebounced = debounce(function handleResize() {
      setWindowSize(getSize());
    }, 250);

    window.addEventListener("resize", handleResizeDebounced);
    return () => window.removeEventListener("resize", handleResizeDebounced);
  }, []);

  return windowSize;
}

export default function Description() {
  const darkMode = useSelector((state) => state.mode.value);
  let classes = useStyles();
  const width = useWindowSize();
  console.log(width);

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
        {width > 800
          ? "I'm a creative software developer interested in"
          : "I do "}
        &nbsp;
        <DescBtn name="FE development" src={reactIcon} />
        &nbsp;and&nbsp;
        <DescBtn name="Data analysis" src={pythonIcon} />
        &nbsp;
      </div>
    </RedContainer>
  );
}
