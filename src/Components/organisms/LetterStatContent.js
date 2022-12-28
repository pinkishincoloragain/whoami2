import { Suspense, useState } from "react";

import OptionBar from "../atoms/OptionBar";
import SkeletonLoader from "./SkeletonLoader";

import LettersContent from "../molecules/LettersContent";
import StatsContent from "../molecules/StatsContent";
import anniversary from "../../assets/data/anniversary.json";
import ChangeContent from "../organisms/ChangeContent";

import { userLettersState, userLettersStatisticsState } from "../utils/recoil/letterRecoil";
import { useRecoilValue, useRecoilState } from "recoil";
import { optionState } from "../utils/recoil/optionRecoil";

export default function LetterStatContent() {
  const [currentViewIdx, setCurrentViewIdx] = useRecoilState(optionState);
  const letterStatistics = useRecoilValue(userLettersStatisticsState);
  const lettersState = useRecoilValue(userLettersState);

  const [statistics, setStatistics] = useState(
    Object.entries(letterStatistics).sort((a, b) => b[1] - a[1])
  );

  return (
    <>
      <OptionBar
        options={anniversary.mypage.options}
        currentOptionIdx={currentViewIdx}
        setCurrentOptionIdx={setCurrentViewIdx}
        lettersLength={lettersState.length}
      />
      <Suspense fallback={<SkeletonLoader />}>
        {currentViewIdx === "0" && <StatsContent feels={statistics} />}
        {currentViewIdx === "1" && <LettersContent letters={lettersState} />}
        {currentViewIdx === "2" && <ChangeContent />}
      </Suspense>
    </>
  );
}
