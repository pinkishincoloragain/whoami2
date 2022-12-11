import React from "react";
import anniversary from "../../assets/data/anniversary.json";
import { H1, H2, H3 } from "../atoms/Text";
import { SelectButton } from "../atoms/MyButton";
import styled from "styled-components";

const MultiSelectFormWrapper = styled.div({
  width: "80%",
  minWidth: "20rem",
  maxWidth: "30rem",
});

export default function MultiSelectForm() {
  const [selected, setSelected] = React.useState(Array(anniversary.options.length).fill(false));

  const handleButtonClick = index => {
    const newSelected = [...selected];
    newSelected[index] = !newSelected[index];
    setSelected(newSelected);
  };

  return (
    <MultiSelectFormWrapper>
      <H2>{anniversary.title}</H2>
      <br />
      <H3>{anniversary.questions[0]}</H3>
      {anniversary.options.map((option, index) => {
        return (
          <SelectButton
            selected={selected[index]}
            key={index}
            onClick={() => {
              handleButtonClick(index);
            }}
          >
            {option}
          </SelectButton>
        );
      })}
      <br />
      <H3>{anniversary.questions[1]}</H3>
      <br />
    </MultiSelectFormWrapper>
  );
}
