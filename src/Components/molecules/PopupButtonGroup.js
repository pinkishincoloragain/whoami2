import styled from "styled-components";

import { TerminalButton } from "../atoms/MyButton";
import { useNavigate } from "react-router-dom";

const ButtonGroupWrapper = styled.div({
  width: "72px",
  padding: "0.7rem 1rem",
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
});

export default function PopupButtonGroup({ handlePopupClose }) {
  const navigate = useNavigate();
  return (
    <ButtonGroupWrapper>
      <TerminalButton aria-label='close' name='close' onClick={handlePopupClose} color='red' />
      <TerminalButton aria-label='close' name='close' onClick={() => navigate("/")} color='green' />
    </ButtonGroupWrapper>
  );
}
