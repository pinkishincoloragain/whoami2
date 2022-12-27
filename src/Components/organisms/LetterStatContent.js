import { Suspense, useState } from "react";

import OptionBar from "../atoms/OptionBar";
import SkeletonLoader from "./SkeletonLoader";

import LettersContent from "../molecules/LettersContent";
import StatsContent from "../molecules/StatsContent";
import anniversary from "../../assets/data/anniversary.json";

import { userLettersState, userLettersStatisticsState } from "../utils/recoil/letterRecoil";
import { useRecoilValue } from "recoil";

export default function LetterStatContent() {
  // const [letters, setLetters] = useState([]);
  const [currentViewIdx, setCurrentViewIdx] = useState("0");

  const lettersState = useRecoilValue(userLettersState);
  const lsttersStatisticsState = useRecoilValue(userLettersStatisticsState);

  return (
    <Suspense fallback={<SkeletonLoader />}>
      <OptionBar
        options={anniversary.mypage.options}
        currentOptionIdx={currentViewIdx}
        setCurrentOptionIdx={setCurrentViewIdx}
      />
      {currentViewIdx === "0" ? (
        <StatsContent feels={lsttersStatisticsState} />
      ) : (
        <LettersContent letters={lettersState} />
      )}
    </Suspense>
  );
}
