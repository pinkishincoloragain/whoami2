import styled from "styled-components";

import { TerminalButton } from "../atoms/MyButton";

const ButtonGroupWrapper = styled.div({
  width: "3.5rem",
  padding: "0.7rem 1rem",
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
});

export default function PopupButtonGroup({ handlePopupClose }) {
  return (
    <ButtonGroupWrapper>
      <TerminalButton aria-label='close' name='close' onClick={handlePopupClose} color='red' />
    </ButtonGroupWrapper>
  );
}
