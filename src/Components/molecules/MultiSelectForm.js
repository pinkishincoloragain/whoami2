import React from "react";
import { SelectButton, AddButton } from "../atoms/MyButton";
import styled from "styled-components";
import colors from "../colors.json";

const MultiSelectFormWrapper = styled.div({
  width: "100%",
  margin: "2vh 0 2vh 0",
});

const AddWrapper = styled.div({
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
  color: "white",
  caretColor: "white",
  margin: "0 0.5rem 0 0",
  "&:focus": {
    borderBottom: `2px solid ${colors.dark.blue2}`,
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
            onClick={e => {
              handleButtonClick(e, index);
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
