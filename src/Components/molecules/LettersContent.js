import { useState } from "react";
import LettersButton from "../atoms/LettersButton";
import anniversary from "../../assets/data/anniversary.json";
import { useNavigate } from "react-router-dom";

export default function LettersContent({ letters }) {
  const [isLetterSeen, setIsLetterSeen] = useState(true);
  const navigate = useNavigate();
  const handleClick = (e, idx) => {
    const now = new Date();
    const anniversaryDate = new Date(anniversary.finalDate);
    navigate(`/letter/${idx}`);
    //   if (now < anniversaryDate) {
    //     alert(`${anniversary.finalDate} 에 편지가 공개됩니다!`);
    //   } else {
    //     navigate("/letter/idx");
    //   }
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
