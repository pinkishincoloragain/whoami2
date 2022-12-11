import React from "react";
import { SelectButton, AddButton } from "../atoms/MyButton";
import styled from "styled-components";

const MultiSelectFormWrapper = styled.div({
  width: "100%",
  margin: "2vh 0 2vh 0",
});

const AddWrapper = styled.form({
  display: "flex",
  width: "100%",
  margin: "2vh 0 2vh 0",
  flexDirection: "row",
});

const AddInputForm = styled.input({
  backgroundColor: "transparent",
  height: "36px",
  border: "none",
  outline: "none",
  padding: "0 0.5rem 0 0.5rem",
  color: "white",
  caretColor: "white",
  margin: "0 0.5rem 0 0",
  "&:focus": {
    borderBottom: "2px solid #2A3C5B",
  },
});

export default function MultiSelectForm({ options, addFormPlaceholder }) {
  const [selectOptions, setSelectOptions] = React.useState(options);
  const [selected, setSelected] = React.useState(Array(options.length).fill(false));
  const [inputValue, setInputValue] = React.useState("");
  const inputRef = React.useRef();

  React.useEffect(() => {
    inputRef.current.focus();
  });

  const handleButtonClick = index => {
    const newSelected = [...selected];
    newSelected[index] = !newSelected[index];
    setSelected(newSelected);
  };

  const handleAddButtonClick = e => {
    e.preventDefault();

    if (inputValue === "") return;
    setSelectOptions([...selectOptions, inputValue]);
    setInputValue("");
  };

  const handleInputChange = e => {
    setInputValue(e.target.value);
  };

  return (
    <MultiSelectFormWrapper>
      {selectOptions.map((selectOption, index) => {
        return (
          <SelectButton
            selected={selected[index]}
            key={index}
            onClick={() => {
              handleButtonClick(index);
            }}
          >
            {selectOption}
          </SelectButton>
        );
      })}
      <AddWrapper>
        <AddInputForm
          placeholder={addFormPlaceholder}
          onChange={handleInputChange}
          value={inputValue}
          ref={inputRef}
        />
        <AddButton onClick={e => handleAddButtonClick(e)}>추가하기</AddButton>
      </AddWrapper>
    </MultiSelectFormWrapper>
  );
}
