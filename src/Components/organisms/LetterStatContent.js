import React from "react";

import StatsButton from "../atoms/StatsButton";
import OptionBar from "../atoms/OptionBar";

import LettersContent from "../molecules/LettersContent";
import anniversary from "../../assets/data/anniversary.json";

const StatContent = options => {
  return (
    <>
      {options.map((option, idx) => (
        <StatsButton
          key={idx}
          option={option.length < 24 ? option : option.slice(0, 24) + "..."}
          count={options.length - idx}
        />
      ))}
    </>
  );
};

export default function LetterStatContent() {
  const [currentViewIdx, setCurrentViewIdx] = React.useState("0");

  const [options, setOptions] = React.useState([
    "Lorem ipsum dolor sit amet,",
    "consectetur adipiscing elit,",
    "sed do eiusmod tempor incididunt",
    "ut labore et dolore magna aliqua.",
  ]);

  const [letters, setLetters] = React.useState([
    "pinkishincoloragain",
    "cj.dropthebeat",
    "익명의 흑토끼",
  ]);

  return (
    <>
      <OptionBar
        options={anniversary.mypage.options}
        currentOptionIdx={currentViewIdx}
        setCurrentOptionIdx={setCurrentViewIdx}
      />
      {currentViewIdx === "0" ? StatContent(options) : <LettersContent letters={letters} />}
    </>
  );
}
