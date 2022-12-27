import { useEffect, useState } from "react";

import OptionBar from "../atoms/OptionBar";

import LettersContent from "../molecules/LettersContent";
import StatsContent from "../molecules/StatsContent";
import anniversary from "../../assets/data/anniversary.json";

import { userIdState } from "../utils/recoil/authRecoil";
import { useRecoilValue } from "recoil";
import fetchUserLetters from "../utils/firebase/fetchUserLetters";
import parseFeels from "../utils/parseFeels";

export default function LetterStatContent() {
  const [letters, setLetters] = useState([]);
  const [currentViewIdx, setCurrentViewIdx] = useState("0");
  const [feels, setFeels] = useState([]);
  const uid = useRecoilValue(userIdState);

  useEffect(() => {
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
