import React from "react";
import { SelectButton, AddButton } from "../../atoms/MyButton";
import styled from "styled-components";

import { Input } from "./InputForm";
import { H3, SmallText } from "../../atoms/Text";

const MultiSelectFormWrapper = styled.div({
  width: "100%",
  margin: "2vh 0 2vh 0",
});

const AddWrapper = styled.div({
  display: "flex",
  width: "100%",
  margin: "2vh 0 2vh 0",
  flexDirection: "row",
  justifyContent: "space-between",
});

export default function MultiSelectForm({ title, phrase, id, options, addFormPlaceholder }) {
  const [selectOptions, setSelectOptions] = React.useState(options);
  const [selected, setSelected] = React.useState([true, ...Array(options.length - 1).fill(false)]);
  const [inputValue, setInputValue] = React.useState("");

  const handleButtonClick = (e, index) => {
    e.preventDefault();

    const newSelected = [...selected];
    newSelected[index] = !newSelected[index];
    setSelected(newSelected);
  };

  const handleAddButtonClick = e => {
    e.preventDefault();

    if (inputValue === "") return;
    setSelectOptions([...selectOptions, inputValue]);
    setSelected([...selected, true]);
    setInputValue("");
  };

  const handleInputChange = e => {
    setInputValue(e.target.value);
  };

  const FormHeaderWrapper = styled.div({
    display: "flex",
    flexDirection: "row",
  });

  return (
    <MultiSelectFormWrapper>
      <FormHeaderWrapper>
        <H3>{title}</H3>
        <SmallText>{phrase}</SmallText>
      </FormHeaderWrapper>

      {selectOptions.map((selectOption, index) => {
        return (
          <SelectButton
            selected={selected[index]}
            key={index}
            onClick={e => {
              handleButtonClick(e, index);
            }}
            value={selected[index] && selectOption}
          >
            {selectOption}
          </SelectButton>
        );
      })}
      <AddWrapper>
        <Input
          id={id}
          placeholder={addFormPlaceholder}
          onChange={handleInputChange}
          value={inputValue}
        />
        <AddButton value={false} onClick={e => handleAddButtonClick(e)}>
          추가하기
        </AddButton>
      </AddWrapper>
    </MultiSelectFormWrapper>
  );
}
