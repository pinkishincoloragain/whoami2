import { useSelector } from "react-redux";
import Boxes from "./objects/Boxes";
import Waves from "./objects/Waves";
import { useState } from "react";

export default function Backgrounds(props) {
  const darkMode = useSelector((state) => state.mode.value);

  return (
    <>
      {props.windowWidth > 1280 ? (
        <>
          <Waves />
        </>
      ) : (
        <Waves />
      )}
    </>
  );
}
