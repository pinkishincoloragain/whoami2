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
  icon: {
  
  },
}));

export { useStyles };
