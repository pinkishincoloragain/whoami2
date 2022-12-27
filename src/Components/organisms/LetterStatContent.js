import { Suspense, useState } from "react";

import OptionBar from "../atoms/OptionBar";
import SkeletonLoader from "./SkeletonLoader";

import LettersContent from "../molecules/LettersContent";
import StatsContent from "../molecules/StatsContent";
import anniversary from "../../assets/data/anniversary.json";

import { userLettersState, userLettersStatisticsState } from "../utils/recoil/letterRecoil";
import { useRecoilValue, useRecoilState } from "recoil";
import { optionState } from "../utils/recoil/optionRecoil";

export default function LetterStatContent() {
  // const [letters, setLetters] = useState([]);
  const [currentViewIdx, setCurrentViewIdx] = useRecoilState(optionState);

  const lettersState = useRecoilValue(userLettersState);
  const lsttersStatisticsState = useRecoilValue(userLettersStatisticsState);

  const sortedStatistics = Object.entries(lsttersStatisticsState).sort((a, b) => b[1] - a[1]);

  return (
    <Suspense fallback={<SkeletonLoader />}>
      <OptionBar
        options={anniversary.mypage.options}
        currentOptionIdx={currentViewIdx}
        setCurrentOptionIdx={setCurrentViewIdx}
      />
      {currentViewIdx === "0" ? (
        <StatsContent feels={sortedStatistics} />
      ) : (
        <LettersContent letters={lettersState} />
      )}
    </Suspense>
  );
}
