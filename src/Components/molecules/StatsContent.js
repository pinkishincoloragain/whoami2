import StatsButton from "../atoms/StatsButton";

function StatsContent({ feels }) {
  return (
    <>
      {Object.entries(feels).map(([feel, feelCount]) => (
        <StatsButton
          key={feel}
          option={feel.length < 24 ? feel : feel.slice(0, 24) + "..."}
          count={feelCount}
        />
      ))}
    </>
  );
}

export default StatsContent;
