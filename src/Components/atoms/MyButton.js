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

const DarkButton = styled.button(props => {
  return {
    width: "100%",
    display: "flex",
    backgroundColor: "#2A3C5B",
    padding: props.selected ? "6px 12px 6px 12px" : "10px 12px 10px 12px",
    borderRadius: "8px",
    fontWeight: "bold",
    fontSize: "0.8rem",
    margin: "8px 0 8px 0",
  };
});

const DarkLink = styled(Link)({
  backgroundColor: "#2A3C5B",
  padding: "10px 12px 10px 12px",
  borderRadius: "8px",
  fontWeight: "bold",
});

export { RedButton, BlueButton, TerminalButton, DarkLink, DarkButton };
