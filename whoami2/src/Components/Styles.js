import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(() => ({
  button: {
    "&:hover": {
      color: "#FFCC00",
      transitionDuration: "0.1s",
      cursor: "pointer",
    },
    transitionDuration: "0.8s",
  },
  button2: {
    "&:hover": {
      color: "#0057D9",
      transitionDuration: "0.1s",
      cursor: "pointer",
    },
    transitionDuration: "0.8s",
  },
  button3: {
    "&:hover": {
      color: "#DD4124",
      transitionDuration: "0.1s",
      cursor: "pointer",
    },
    transitionDuration: "0.8s",
  },
  button4: {
    "&:hover": {
      color: "#009473",
      transitionDuration: "0.1s",
      cursor: "pointer",
    },
    transitionDuration: "0.8s",
  },
  hiddenText: {
    filter: "blur(4px) opacity(0.5)",
    display: "flex",
    margin: "auto",
    alignItems: "center",

    "&:hover": {
      color: "skyblue",
      transitionDuration: "0.1s",
      cursor: "pointer",
      filter: "none",
    },

    transitionDuration: "0.8s",
  },
  letter: {
    "&:hover": {
      color: "#FFCC00",
      transitionDuration: "0.1s",
      cursor: "pointer",
    },
    transitionDuration: "0.8s",
  },

  linkBtn: {
    transitionDuration: "0.1s",
    "&:hover": {
      color: "white",
      transitionDuration: "1s",
    },
  },
  frame: {
    width: "45vw",
    height: "45vh",
    position: "absolute",
    backgroundColor: "transparent",
    zIndex: "2",
    // padding: "1vh",
    filter: "blur(100px)",
    transitionDuration: "0.2s",
    boxShadow: "5px 5px 10px black",
    display: "flex",
    margin: "auto",
    // alignItems: "center",
    "&:hover": {
      filter: "blur(0px)",
      boxShadow: "10px 10px 50px black",
      border: "4px wave black",
      backgroundColor: "#1E1E1E",
    },
  },
  buttonHolder: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    width: "68px",
  },

  terminalBtn1: {
    width: "12px",
    height: "12px",
    backgroundColor: "#ED6A5E",
    borderRadius: "30px",
    marginLeft: "2px",
  },
  terminalBtn2: {
    width: "12px",
    height: "12px",
    backgroundColor: "#F3BF4F",
    borderRadius: "30px",
    marginLeft: "2px",
  },
  terminalBtn3: {
    width: "12px",
    height: "12px",
    backgroundColor: "#61C654",
    borderRadius: "30px",
    marginLeft: "2px",
  },
}));

export { useStyles };
