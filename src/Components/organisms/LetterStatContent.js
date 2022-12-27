import React, { useState } from "react";

import OptionBar from "../atoms/OptionBar";

import LettersContent from "../molecules/LettersContent";
import StatsContent from "../molecules/StatsContent";
import anniversary from "../../assets/data/anniversary.json";
import { useRecoilState } from "recoil";

import { lettersState } from "../utils/recoil/letterRecoil";
import { userIdState } from "../utils/recoil/authRecoil";
import { useRecoilValue } from "recoil";
import fetchUserLetters from "../utils/firebase/fetchUserLetters";
import parseFeels from "../utils/parseFeels";

export default function LetterStatContent() {
  const [letters, setLetters] = React.useState([]);
  const [currentViewIdx, setCurrentViewIdx] = React.useState("0");
  const [feels, setFeels] = React.useState([]);
  const uid = useRecoilValue(userIdState);

  React.useEffect(() => {
    const fetchData = async () => {
      const res = await fetchUserLetters(uid);
      const totalFeels = parseFeels(res.letters);
      setLetters(res.letters);
      setFeels(totalFeels);
    };

    fetchData();
  }, []);

  console.log(feels);

  return (
    <>
      <OptionBar
        options={anniversary.mypage.options}
        currentOptionIdx={currentViewIdx}
        setCurrentOptionIdx={setCurrentViewIdx}
      />
      {currentViewIdx === "0" ? (
        <StatsContent feels={feels} />
      ) : (
        <LettersContent letters={letters} />
      )}
    </>
  );
}
