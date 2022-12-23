import styled from "styled-components";
import colors from "../colors.json";

import anniversary from "../../assets/data/anniversary.json";

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
    width: "64px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderBottom: props.isSelected ? `1px solid ${colors.dark.gold}` : "none",
  };
});

export default function OptionBar({ currentViewIdx, setCurrentViewIdx }) {
  const viewOptions = anniversary.mypage.options;

  const handleOptionClick = e => {
    console.log(e.target.value);
    setCurrentViewIdx(e.target.value);
  };

  return (
    <OptionBarWrapper>
      {viewOptions.map((option, idx) => (
        <ViewOption
          isSelected={currentViewIdx === idx.toString()}
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
