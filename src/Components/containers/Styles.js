import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(() => ({
  headerBarLinkWrapper: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    height: "max(2vh,30px)",
    flexDirection: "row",
    borderRadius: "6px",
    paddingLeft: "2vw",
    paddingRight: "2vw",

    "&:hover": {
      backgroundColor: "#f5f5f5",
      cursor: "pointer",
      // boxShadow: "0px 3px 3px  rgba(255, 105, 135, .3)",
    },
  },

  link: {
    color: "black",
    transitionduration: "0.1s",
    "&:hover ": {
      color: "#FFCC00",
      cursor: "pointer",
    },
  },

  linkBtnText: {
    transitionDuration: "0.05s",
    fontSize: "max(1.4vw, 20px)",
    fontWeight: "500",

    "&:hover": {
      // color: "#FFCC00",
      transitionDuration: "0.05s",
    },
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
  center: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    margin: "auto",
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

  descTypo: {
    fontSize: "max(20px, 1.5rem)",
    flexDirection: "row",
    flexWrap: "true",
    // marginTop: "2vh",
    lineHeight: "1.8",
    textAlign: "center",
    padding: "max(3vw,20px)",
    alignItems: "center",
    justifyContent: "center",
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
  graphWrapper: {
    display: "flex",
    justifyContent: "center",
    overflow: "hidden",
  },
  letter: {
    "&:hover": {
      color: "#FFCC00",
      transitionDuration: "0.1s",
      cursor: "pointer",
    },
    transitionDuration: "0.2s",
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
  hambergBtn: {
    marginRight: "2vw",
    "&:hover": {
      cursor: "pointer",
    },
  },
  dropDown: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "right",
    marginRight: "10vw",
    backgroundColor: "transparent",
    // width: "100vw",
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
  icon: {
    width: "32px",
    marginTop: "2vh",
    "&:hover": {
      cursor: "pointer",
      filter: "sephia(100%)",
    },
  },

  imageWrapper: {
    width: "min(3vh, 15rem)",
    height: "min(3vh, 15rem)",
    zIndex: "0",
    marginLeft: "4px",
  },
  project: {
    minWidth: "200px",
    minHeight: "200px",
    width: "100%",
    height: "100%",
    backgroundColor: "#1b1b1b",
  },
}));

export { useStyles };
