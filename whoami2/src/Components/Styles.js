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
      color: "#009473",
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
}));

export { useStyles };
