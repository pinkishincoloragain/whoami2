import React from "react";
import { SelectButton } from "../atoms/MyButton";
import styled from "styled-components";

const MultiSelectFormWrapper = styled.div({
  width: "80%",
});

export default function MultiSelectForm({ selection }) {
  const [selected, setSelected] = React.useState(Array(selection.length).fill(false));

  const handleButtonClick = index => {
    const newSelected = [...selected];
    newSelected[index] = !newSelected[index];
    setSelected(newSelected);
  };

  return (
    <MultiSelectFormWrapper>
      {selection.map((option, index) => {
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
