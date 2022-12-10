import React from "react";
import styled from "styled-components";
import colors from "../colors.json";
import anniversary from "../../assets/data/anniversary.json";
import { H1, H2, H3 } from "../atoms/Text";
import { DarkButton } from "../atoms/MyButton";

export default function AnniversaryForm() {
  return (
    <div>
      <H2>{anniversary.title}</H2>
      <br />
      <H3>{anniversary.questions[0]}</H3>
      <br />
      <H3>{anniversary.questions[1]}</H3>
      <br />
      {anniversary.options.map((option, index) => {
        return (
          <div>
            <DarkButton>{option}</DarkButton>
            <br />
          </div>
        );
      })}
    </div>
  );
}
