import { useState } from "react";
import { SelectButton, AddButton, DeleteButton } from "../../atoms/MyButton";
import styled from "styled-components";
import anniversary from "../../../assets/data/anniversary.json";
import { H3, SmallText } from "../../atoms/Text";

import { Input } from "./InputForm";

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
  gap: "0.5rem",
  width: "100%",
  flexDirection: "row",
  justifyContent: "space-between",
  paddingBlock: "2vh",
});

const FormHeaderWrapper = styled.div({
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
});

const SelectButtonWrapper = styled.div({
  display: "flex",
  flexDirection: "row",
  gap: "0.5rem",
  width: "100%",
  justifyContent: "space-between",
  alignItems: "center",
});

export default function MultiSelectForm({
  title,
  phrase,
  withDelete,
  defaultOptions,
  addFormPlaceholder,
  onChange,
}) {
  const [options, setOptions] = useState(defaultOptions || anniversary.options);
  const [selected, setSelected] = useState(
    withDelete ? [] : [true, ...Array(options.length - 1).fill(false)]
  );
  const [inputValue, setInputValue] = useState("");

  const handleButtonClick = (e, index) => {
    e.preventDefault();

    if (withDelete) return;

    const newSelected = [...selected];
    newSelected[index] = !newSelected[index];
    setSelected(newSelected);
    onChange(newSelected.filter(v => v).map((v, i) => options[i]));
  };

  const handleDelete = (e, idx) => {
    console.log(idx);
    e.preventDefault();
    console.log(options);
    const newOptions = options.filter((_, i) => i !== idx);
    setOptions(newOptions);
  };

  const handleAddButtonClick = e => {
    e.preventDefault();

    if (inputValue === "") return;
    setOptions([...options, inputValue]);
    setSelected([...selected, true]);
    onChange([...selected.filter(v => v).map((v, i) => options[i]), inputValue]);
    setInputValue("");
  };

  const handleInputChange = e => {
    setInputValue(e.target.value);
  };

  return (
    <MultiSelectFormWrapper>
      <FormHeaderWrapper>
        <H3>{title}</H3>
        <SmallText>{phrase}</SmallText>
      </FormHeaderWrapper>

      {options.map((option, idx) => {
        return (
          <SelectButtonWrapper key={idx}>
            <SelectButton
              selected={withDelete ? false : selected[idx]}
              // onTouchStart={e => {
              //   handleButtonClick(e, index);
              // }}
              onClick={e => {
                handleButtonClick(e, idx);
              }}
              value={selected[idx] && option}
            >
              {option}
            </SelectButton>
            {withDelete && <DeleteButton onClick={e => handleDelete(e, idx)}>-</DeleteButton>}
          </SelectButtonWrapper>
        );
      })}

      <AddWrapper>
        <Input placeholder={addFormPlaceholder} onChange={handleInputChange} value={inputValue} />
        <AddButton value={false} onClick={handleAddButtonClick}>
          추가하기
        </AddButton>
      </AddWrapper>
    </MultiSelectFormWrapper>
  );
}
