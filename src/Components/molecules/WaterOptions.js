import React from "react";
import Waves from "./objects/Waves";

export default function WaveOptions({ option, width, height }) {
  const props1 = {
    container: "container1",
    width: width,
    height: height,
    elevation: "1",
    azimuth: "45",
    borderRadius: 0,
  };

  const props2 = {
    container: "container2",
    width: width,
    height: height,
    rayleigh: "0.5",
    elevation: "-2.1",
    turbidity: "100",
    azimuth: "45",
    borderRadius: 0,
  };

  const props3 = {
    container: "container3",
    width: width,
    height: height,
    elevation: "-10",
    azimuth: "45",
    turbidity: "100",
    borderRadius: 0,
    waterColor: "#000000",
  };
  return (
    <>
      <Waves {...props1} display={option === "0" ? "flex" : "none"} />
      <Waves {...props2} display={option === "1" ? "flex" : "none"} />
      <Waves {...props3} display={option === "2" ? "flex" : "none"} />
    </>
  );
}
