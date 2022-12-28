import styled from "styled-components";
import colors from "../colors.json";
import { SmallText } from "./Text";

const OptionBarWrapper = styled.div(props => {
  return {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    width: props.width || "40%",
    width: "50%",
    minWidth: "240px",
    height: "48px",
    // padding: "0 10px",
  };
});

const LetterAmountText = styled(SmallText)({
  color: colors.dark.gold,
  fontWeight: "light",
  marginTop: "0",
  margin: "0 0 6px 3px",
});

const ViewOption = styled.button(props => {
  return {
    width: "fit-content",
    display: "flex",
    alignItems: "center",
    // justifyContent: "center",
    color: props.isSelected ? "white" : colors.dark.lightGray,
    fontWeight: props.isSelected ? "bold" : "light",
    borderBottom: props.isSelected ? `1px solid ${colors.dark.gold}` : "1px solid transparent",
  };
});

export default function OptionBar({
  lettersLength,
  width,
  options,
  currentOptionIdx,
  setCurrentOptionIdx,
}) {
  const handleOptionClick = e => {
    setCurrentOptionIdx(e.target.value);
  };

  return (
    <OptionBarWrapper width={width}>
      {options.map((option, idx) => (
        <ViewOption
          isSelected={currentOptionIdx === idx.toString()}
          value={idx}
          onClick={handleOptionClick}
          key={option}
        >
          {option}
          {option === "편지함" && <LetterAmountText>{lettersLength}</LetterAmountText>}
        </ViewOption>
      ))}
    </OptionBarWrapper>
  );
}
