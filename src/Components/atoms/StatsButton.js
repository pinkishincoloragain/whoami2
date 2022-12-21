import { SelectButton } from "./MyButton";

import styled from "styled-components";

const StatsButtonWrapper = styled(SelectButton)({
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
});

export default function StatsButton({ option, count }) {
  return (
    <StatsButtonWrapper>
      <div>{option}</div>
      {count}
    </StatsButtonWrapper>
  );
}
