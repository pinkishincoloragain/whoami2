import { SelectButton } from "./MyButton";
import anniversary from "../../assets/data/anniversary.json";

import styled from "styled-components";
import colors from "../colors.json";

const LettersButtonWrapper = styled(SelectButton)({
  flexDirection: "row",
  height: "56px",
  fontWeight: "200",
  fontSize: "1rem",
  backgroundColor: colors.dark.gold,
  borderRadius: "8px",
  margin: "16px 0px 16px 0px",
});

const FromWrapper = styled.div({
  display: "flex",
  marginLeft: "4px",
  marginRight: "4px",
});

export default function LettersButton({ idx, from, handleClick }) {
  return (
    <LettersButtonWrapper onClick={handleClick}>
      <b>#{idx}</b>
      <FromWrapper>{anniversary.letters.from}</FromWrapper>
      {from}
    </LettersButtonWrapper>
  );
}
