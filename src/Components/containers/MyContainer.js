import { Box } from "@mui/material";
import { styled } from "@mui/styles";

const RedContainer = styled(`div`)({
  background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
  border: 0,
  borderRadius: 4,
  boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
  backgroundColor: "inherit",
  color: "white",
  //   height: 36,
  alignItems: "center",
  justifyContent: "center",
  transitionDuration: "0.2s",
});

const BlackContainer = styled(`div`)({
  // background: "linear-gradient(45deg, #1f1f1f 30%, #ffffff 90%)",
  border: 0,
  borderRadius: 4,
  boxShadow: "0 3px 5px 2px #1f1f1f",
  backgroundColor: "inherit",
  color: "white",
  //   height: 36,
  alignItems: "center",
  justifyContent: "center",
  transitionDuration: "0.2s",
});

export { RedContainer, BlackContainer };
