import StatsButton from "../atoms/StatsButton";
import LettersButton from "../atoms/LettersButton";

export default function LettersContent({ letters }) {
  return (
    <>
      {letters.map((letter, idx) => (
        <LettersButton key={idx} from={letter.from} />
      ))}
    </>
  );
}
