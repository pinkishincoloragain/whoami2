import { SelectButton } from "./MyButton";
import anniversary from "../../assets/data/anniversary.json";

import styled from "styled-components";
import colors from "../colors.json";

const LettersButtonWrapper = styled(SelectButton)({
  flexDirection: "row",
  height: "64px",
  fontWeight: "200",
  fontSize: "1.3rem",
  backgroundColor: colors.dark.gold,
  borderRadius: "0",
  margin: "16px 0px 16px 0px",
});

const FromWrapper = styled.div({
  display: "flex",
  marginRight: "4px",
});

export default function LettersButton({ from }) {
  return (
    <LettersButtonWrapper>
      <FromWrapper>{anniversary.letters.from}</FromWrapper>
      {from}
    </LettersButtonWrapper>
  );
}
