import { useState } from "react";
import LettersButton from "../atoms/LettersButton";
import anniversary from "../../assets/data/anniversary.json";
import { useNavigate } from "react-router-dom";

export default function LettersContent({ letters }) {
  const [isLetterSeen, setIsLetterSeen] = useState(true);
  const navigate = useNavigate();
  const handleClick = (e, idx) => {
    console.log(idx);
    navigate(`/letter/${idx}`);
  };

  return (
    <>
      {letters.map((letter, idx) => (
        <LettersButton
          handleClick={e => handleClick(e, idx)}
          idx={idx}
          key={idx}
          from={letter.from}
        />
      ))}
    </>
  );
}
