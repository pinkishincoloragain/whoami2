import styled from "styled-components";
import colors from "../colors.json";
import { Link } from "react-router-dom";

const RedButton = styled(`button`)({
  background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
  border: 0,
  borderRadius: 3,
  boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
  color: "white",
  height: 36,
  padding: "0 20px",
  margin: "4px",
});

const BlueButton = styled(`button`)({
  background: "linear-gradient(45deg, #412345 30%, #6495ED 90%)",
  border: 0,
  borderRadius: 3,
  boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
  color: "white",
  height: 36,
  padding: "0 30px",
});

const TerminalButton = styled.button({
  width: "14px",
  height: "14px",
  borderRadius: "30px",
  backgroundColor: colors.light.red,
  filter: "saturate(1.2)",
});

const SelectButton = styled.button(props => {
  return {
    width: "100%",
    display: "flex",
    alignItems: "center",
    backgroundColor: props.selected ? colors.dark.foreground : "transparent",
    padding: "10px 8px 10px 12px",
    borderRadius: "8px",
    fontWeight: "bold",
    fontSize: "14px",

    // TODO: I think using animation would be even better
    transition: "scale 200ms ease-in-out, background-color 200ms ease",

    "&:active": {
      scale: "0.98",
    },

    "@media (max-width: 768px)": {
      height: "56px",
      "&:active": {
        scale: "0.96",
      }
    }
  };
});

const AddButton = styled.button({
  height: "36px",
  width: "80px",
  minWidth: "80px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontWeight: "bold",
  borderRadius: "8px",
  padding: "10px 12px 10px 12px",
  // marginRight: "-12px",
  fontSize: "14px",
  backgroundColor: colors.dark.gold,

  // TODO: I think using animation would be even better
  transition: "scale 200ms ease-in-out",

  "&:active": {
    scale: "0.95",
  },
});

const SubmitButton = styled.button(props => {
  return {
    height: "36px",
    width: "80px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontWeight: "bold",
    borderRadius: "8px",
    padding: "10px 12px 10px 12px",
    fontSize: "14px",
    backgroundColor: props.disabled ? colors.dark.red : colors.dark.gold,
    "&:active": {
      fontSize: "13.5px",
    },
  };
});

const DarkLink = styled(Link)({
  backgroundColor: "#2A3C5B",
  height: "36px",
  fontSize: "14px",
  borderRadius: "8px",
  padding: "10px 12px 10px 12px",
  fontWeight: "bold",
});

export { RedButton, BlueButton, TerminalButton, SelectButton, AddButton, SubmitButton, DarkLink };
