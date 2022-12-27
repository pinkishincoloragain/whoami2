import { SelectButton } from "./MyButton";

import styled from "styled-components";

const StatsButtonWrapper = styled(SelectButton)({
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  height: "64px",
  fontWeight: "200",
  fontSize: "1rem",
});

const CountWrapper = styled.div({
  display: "flex",
  width: "12px",
});

export default function StatsButton({ option, count }) {
  return (
    <StatsButtonWrapper>
      <div>{option}</div>
      <CountWrapper>{count}</CountWrapper>
    </StatsButtonWrapper>
  );
}
