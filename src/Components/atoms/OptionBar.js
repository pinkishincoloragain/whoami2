import styled from "styled-components";
import colors from "../colors.json";

const OptionBarWrapper = styled.div(props => {
  return {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    width: "40%",
    height: "48px",
    padding: "0 10px",
  };
});

const ViewOption = styled.button(props => {
  return {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderBottom: props.isSelected ? `1px solid ${colors.dark.gold}` : "none",
  };
});

export default function OptionBar({ options, currentOptionIdx, setCurrentOptionIdx }) {
  const viewOptions = options;

  const handleOptionClick = e => {
    setCurrentOptionIdx(e.target.value);
  };

  return (
    <OptionBarWrapper>
      {viewOptions.map((option, idx) => (
        <ViewOption
          isSelected={currentOptionIdx === idx.toString()}
          value={idx}
          onClick={handleOptionClick}
          key={option}
        >
          {option}
        </ViewOption>
      ))}
    </OptionBarWrapper>
  );
}
