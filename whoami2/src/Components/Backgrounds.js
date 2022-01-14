import { useSelector } from "react-redux";
import Boxes from "./objects/Boxes";
import Waves from "./objects/Waves";
import { useState } from "react";

export default function Backgrounds(props) {
  const darkMode = useSelector((state) => state.mode.value);

  const [wave, setWave] = useState({
    azimuth: darkMode === true ? 180 : 0,
    elevation: darkMode === true ? -1 : 10,
  });

  console.log(wave.azimuth);
  return (
    <>
      {props.windowWidth > 1280 ? (
        <>
          <Waves {...wave} />
        </>
      ) : (
        <Waves />
      )}
    </>
  );
}
