import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(() => ({
  button: {
    "&:hover": {
      color: "#FFCC00",
      transitionDuration: "0.1s",
      cursor: "pointer",
    },
    transitionDuration: "12s",
  },
  button1: {
    "&:hover": {
      color: "#FFCC00",
      transitionDuration: "0.1s",
      cursor: "pointer",
    },
    transitionDuration: "12s",
  },
  button2: {
    "&:hover": {
      color: "#0057D9",
      transitionDuration: "0.1s",
      cursor: "pointer",
    },
    transitionDuration: "12s",
  },
  button3: {
    "&:hover": {
      color: "#DD4124",
      transitionDuration: "0.1s",
      cursor: "pointer",
    },
    transitionDuration: "12s",
  },
  button4: {
    "&:hover": {
      color: "#009473",
      transitionDuration: "0.1s",
      cursor: "pointer",
    },
    transitionDuration: "12s",
  },
  button5: {
    "&:hover": {
      color: "#9400D3",
      transitionDuration: "0.1s",
      cursor: "pointer",
    },
    transitionDuration: "12s",
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

    transitionDuration: "12s",
  },
  letter: {
    "&:hover": {
      color: "#FFCC00",
      transitionDuration: "0.1s",
      cursor: "pointer",
    },
    transitionDuration: "12s",
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
    filter: "blur(200px)",
    transitionDuration: "0.4s",
    boxShadow: "5px 5px 10px black",
    display: "flex",
    margin: "auto",
    borderRadius: "12px",
    flexDirection: "column",
    border: "0.05px solid black",
    // alignItems: "center",
    "&:hover": {
      filter: "blur(0px)",
      boxShadow: "10px 10px 50px black",
      border: "4px wave black",
      backgroundColor: "#1E1E1E",
      transitionDuration: "0.12s",
    },
  },

  frameLight: {
    width: "45vw",
    height: "45vh",
    position: "absolute",
    backgroundColor: "transparent",
    zIndex: "2",
    // padding: "1vh",
    filter: "blur(1000px)",
    transitionDuration: "0.2s",
    boxShadow: "5px 5px 10px black",
    margin: "auto",
    borderRadius: "12px",
    display: "flex",
    flexDirection: "column",
    border: "0.05px solid #F4F4F4",
    // alignItems: "center",
    "&:hover": {
      filter: "blur(0px)",
      boxShadow: "10px 10px 50px black",
      border: "4px wave black",
      backgroundColor: "#FFFFFF",
      transitionDuration: "0.12s",
    },
  },

  frameBkg: {
    display: "flex",
    margin: "auto",
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
  },
  frameHeader: {
    height: "28px",
    backgroundColor: "#323232",
    width: "100%",
    borderTopLeftRadius: "10px",
    borderTopRightRadius: "10px",
    borderTop: "0.05px solid #6C6C6C",
    borderBottom: "0.05px solid black",
    marginBottom: "2px",
    display: "flex",
    flexDirection: "row",
  },
  frameHeaderLight: {
    height: "28px",
    backgroundColor: "#E1E1E1",
    width: "100%",
    borderTopLeftRadius: "10px",
    borderTopRightRadius: "10px",
    borderTop: "0.05px solid #F4F4F4",
    borderBottom: "0.05px solid #B9B9B9",
    marginBottom: "2px",
    display: "flex",
    flexDirection: "row",
  },
  buttonHolder: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    width: "68px",
  },

  terminalBtn: {
    "&:hover": {
      cursor: "pointer",
    },
  },

  terminalBtn1Light: {
    width: "13px",
    height: "13px",
    backgroundColor: "#FC605C",
    borderRadius: "30px",
    marginLeft: "2px",
    "&:hover": {
      cursor: "pointer",
    },
  },
  terminalBtn2Light: {
    width: "13px",
    height: "13px",
    backgroundColor: "#FDBC40",
    borderRadius: "30px",
    marginLeft: "2px",
    "&:hover": {
      cursor: "pointer",
    },
  },
  terminalBtn3Light: {
    width: "13px",
    height: "13px",
    backgroundColor: "#34C849",
    borderRadius: "30px",
    marginLeft: "2px",
    "&:hover": {
      cursor: "pointer",
    },
  },
  terminalBtn1: {
    width: "13px",
    height: "13px",
    backgroundColor: "#ED6A5E",
    borderRadius: "30px",
    marginLeft: "2px",
    "&:hover": {
      cursor: "pointer",
    },
  },
  terminalBtn2: {
    width: "13px",
    height: "13px",
    backgroundColor: "#F3BF4F",
    borderRadius: "30px",
    marginLeft: "2px",
    "&:hover": {
      cursor: "pointer",
    },
  },
  terminalBtn3: {
    width: "13px",
    height: "13px",
    backgroundColor: "#61C654",
    borderRadius: "30px",
    marginLeft: "2px",
    "&:hover": {
      cursor: "pointer",
    },
  },
  textHolder: {
    marginLeft: "20px",
  },

  hiddenLink: {
    textDecoration: "none",
    color: "white",
    "&:hover": {
      color: "skyblue",
    },
  },
}));

export { useStyles };
