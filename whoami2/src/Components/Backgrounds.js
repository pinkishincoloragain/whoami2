import { useSelector } from "react-redux";
import Boxes from "./objects/Boxes";
import Waves from "./objects/Waves";

export default function Backgrounds(props) {
  const darkMode = useSelector((state) => state.mode.value);
  return (
    <>
      {props.windowWidth > 1280 ? (
        <>
          {darkMode == false ? (
            <div
              // ref={setRef}
              style={{
                filter: "saturate(100%)",
                transition: "0.2s linear",
              }}
            >
              <Boxes />
            </div>
          ) : (
            <div
              // ref={setRef}
              style={{
                filter: "saturate(0%) invert(100%)",
                transition: "0.2s linear",
              }}
            >
              <Boxes />
            </div>
          )}
        </>
      ) : (
        <Waves />
      )}
    </>
  );
}
