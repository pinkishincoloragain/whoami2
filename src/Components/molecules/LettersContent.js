import StatsButton from "../atoms/StatsButton";

export default function LettersContent({ letters }) {
  console.log(letters);

  return (
    <>
      {letters.map((letter, idx) => (
        <StatsButton key={idx} option={letter} />
      ))}
    </>
  );
}
