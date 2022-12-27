
import styled from "styled-components";
import colors from "../colors.json";

const OptionBarWrapper = styled.div(props => {
  return {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    width: props.width || "40%",
    height: "48px",
    padding: "0 10px",
  };
});

const ViewOption = styled.button(props => {
  return {
    minWidth: "80px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderBottom: props.isSelected ? `1px solid ${colors.dark.gold}` : "1px solid transparent",
  };
});

export default function OptionBar({ width, options, currentOptionIdx, setCurrentOptionIdx }) {
  const viewOptions = options;

  const handleOptionClick = e => {
    setCurrentOptionIdx(e.target.value);
  };

  return (
    <OptionBarWrapper width={width}>
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
