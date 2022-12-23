import React from "react";

import styled from "styled-components";
import { H2 } from "../atoms/Text";
import anniversary from "../../assets/data/anniversary.json";

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
      <H2>{anniversary.title1}</H2>
      <H2>{anniversary.title2}</H2>
      {options.map((option, idx) => (
        <StatsButton key={idx} option={option} count={options.length - idx}></StatsButton>
      ))}
    </StatsContentWrapper>
  );
}
