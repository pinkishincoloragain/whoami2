import React from "react";

import styled from "styled-components";
import StatsButton from "../atoms/StatsButton";

const StatsContentWrapper = styled.div({});

export default function StatsContent() {
  const [options, setOptions] = React.useState([
    "Lorem ipsum dolor sit amet,",
    "consectetur adipiscing elit,",
    "sed do eiusmod tempor incididunt",
    "ut labore et dolore magna aliqua.",
  ]);

  return (
    <StatsContentWrapper>
      {options.map((option, idx) => (
        <StatsButton key={idx} option={option} count={options.length - idx}></StatsButton>
      ))}
    </StatsContentWrapper>
  );
}
