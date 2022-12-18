import React from "react";
import { SelectButton, AddButton } from "../../atoms/MyButton";
import styled from "styled-components";

import { Input } from "./InputForm";
import { H3, SmallText } from "../../atoms/Text";

const MultiSelectFormWrapper = styled.div({
  boxSizing: "border-box",
  display: "flex",
  flexDirection: "column",
  gap: "0.5rem",
  width: "100%",
  marginTop: "2vh",
});

const AddWrapper = styled.div({
  display: "flex",
  gap: "1rem",
  width: "100%",
  flexDirection: "row",
  justifyContent: "space-between",
  paddingBlock: "2vh",
});

const FormHeaderWrapper = styled.div({
  display: "flex",
  flexDirection: "row",
});

export default function MultiSelectForm({ title, phrase, options, addFormPlaceholder, onChange }) {
  const [selectOptions, setSelectOptions] = React.useState(options);
  const [selected, setSelected] = React.useState([true, ...Array(options.length - 1).fill(false)]);
  const [inputValue, setInputValue] = React.useState("");

  const handleButtonClick = (e, index) => {
    e.preventDefault();

    const newSelected = [...selected];
    newSelected[index] = !newSelected[index];
    setSelected(newSelected);
    onChange(newSelected.filter(v => v).map((v, i) => selectOptions[i]));
  };

  const handleAddButtonClick = e => {
    e.preventDefault();

    if (inputValue === "") return;
    setSelectOptions([...selectOptions, inputValue]);
    setSelected([...selected, true]);
    onChange([...selected.filter(v => v).map((v, i) => selectOptions[i]), inputValue]);
    setInputValue("");
  };

  const handleInputChange = e => {
    setInputValue(e.target.value);
  };

  return (
    <MultiSelectFormWrapper>
      {/* <FormHeaderWrapper>
        <H3>{title}</H3>
        <SmallText>{phrase}</SmallText>
      </FormHeaderWrapper> */}

      <AddWrapper>
        <Input placeholder={addFormPlaceholder} onChange={handleInputChange} value={inputValue} />
        <AddButton value={false} onClick={e => handleAddButtonClick(e)}>
          추가하기
        </AddButton>
      </AddWrapper>

      {selectOptions.map((selectOption, index) => {
        return (
          <SelectButton
            selected={selected[index]}
            key={index}
            // onTouchStart={e => {
            //   handleButtonClick(e, index);
            // }}
            onClick={e => {
              handleButtonClick(e, index);
            }}
            value={selected[index] && selectOption}
          >
            {selectOption}
          </SelectButton>
        );
      })}
    </MultiSelectFormWrapper>
  );
}