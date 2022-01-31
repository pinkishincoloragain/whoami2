import zIndex from "@mui/material/styles/zIndex";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(() => ({
  landing: {
    // position: "absolute",
    // backgroundColor: "black",
  },
  flexColumn: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  flexRow: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  font1: {
    fontFamily: `"Roboto", "Helvetica", "Arial", sans-serif`,
    fontSize: "min(2vh, 15rem)",
  },
  font2: {
    fontFamily: `'Press Start 2P', cursive`,
  },
  font3: {
    fontFamily: `'Ropa Sans', sans-serif`,
  },
  mainWrapper: {
    zIndex: 1,
    display: "grid | flex",
    margin: "auto",
    alignItems: "center",
    justifyContent: "space-evenly",
    backgroundColor: "transparent",
    width: "80vw",
    marginLeft: "10vw",
  },
  headerWrapper: {
    display: "flex",
    flexDirection: "row",
    width: "80vw",
    height: "8vw",
    marginTop: "1vh",
    borderTop: "1vh solid #1b1b1b",
    borderBottom: "1vh solid #1b1b1b",
    alignItems: "center",
    justifyContent: "center",
  },
  headerWrapperSticky: {
    position: "sticky",
    top: 0,
    left: 0,
  },
  centerdiv: {
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    alignContent: "center",
  },
  button: {
    color: "black",
    "&:hover": {
      color: "#FFCC00",
      // transitionDuration: "0.1s",
      cursor: "pointer",
    },
    transitionDuration: "0.1s",
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
    transitionDuration: "1s",
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
    // filter: "blur(200px)",
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
    // filter: "blur(1000px)",
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

  waves: {
    transitionDuration: "0.2s",
  },

  catchPhraseHolder: {
    position: "absolute",
    top: "0",
    left: "0",
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#2D2D2F",
    zIndex: "100",
    // transitionDuration: "0.2s",
  },
  transition: {
    transition: "opacity 300ms, transform 300ms",
  },
  iconWrapper: {
    width: "",
  },
  icon: {
    width: "32px",
    marginTop: "2vh",
    "&:hover": {
      cursor: "pointer",
      filter: "sephia(100%)",
    },
  },
  project: {
    width: "100%",
    height: "100%",
    backgroundColor: "#1b1b1b",
  },
}));

export { useStyles };
