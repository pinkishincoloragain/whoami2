import { lazy, Suspense } from "react";
const Waves = lazy(() => import("./objects/Waves"));

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
      <Suspense fallback={<div>Loading...</div>}>
        <Waves {...props1} display={option === "0" ? "flex" : "none"} />
      </Suspense>

      <Suspense fallback={<div>Loading...</div>}>
        <Waves {...props2} display={option === "1" ? "flex" : "none"} />{" "}
      </Suspense>

      <Suspense fallback={<div>Loading...</div>}>
        <Waves {...props3} display={option === "2" ? "flex" : "none"} />
      </Suspense>
    </>
  );
}
