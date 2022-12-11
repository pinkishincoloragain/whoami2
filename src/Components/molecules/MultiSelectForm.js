import React from "react";
import { SelectButton } from "../atoms/MyButton";
import styled from "styled-components";

const MultiSelectFormWrapper = styled.div({
  width: "100%",
  margin: "2vh 0 2vh 0",
});

export default function MultiSelectForm({ options }) {
  const [selected, setSelected] = React.useState(Array(options.length).fill(false));

  const handleButtonClick = index => {
    const newSelected = [...selected];
    newSelected[index] = !newSelected[index];
    setSelected(newSelected);
  };

  return (
    <MultiSelectFormWrapper>
      {options.map((option, index) => {
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
    </MultiSelectFormWrapper>
  );
}
