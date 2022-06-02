import styled from "@emotion/styled";
import { Button } from "@mui/material";

const RedButton = styled(Button)({
  background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
  border: 0,
  borderRadius: 3,
  boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
  color: "white",
  height: 36,
  padding: "0 20px",
  margin: "4px",
});

const BlueButton = styled(Button)({
  background: "linear-gradient(45deg, #412345 30%, #FF8E53 90%)",
  border: 0,
  borderRadius: 3,
  boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
  color: "white",
  height: 36,
  padding: "0 30px",
});

const TerminalBtn = styled(Button)({
  width: "12px",
  height: "12px",
  border: `0.8px solid black`,
  borderRadius: "30px",
  marginLeft: "2px",
  filter: "saturate(1.4)",
  "&:hover": {
    cursor: "pointer",
  },
});

export { RedButton, BlueButton };
