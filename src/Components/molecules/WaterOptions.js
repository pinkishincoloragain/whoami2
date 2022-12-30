import { lazy, Suspense } from "react";
import { props1, props2, props3 } from "./WaveProps";
// import Waves from "./objects/Waves";
const Waves = lazy(() => import("./objects/Waves"));

export default function WaveOptions({ option, width, height, borderRadius }) {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <Waves
          {...props1}
          width={width}
          height={height}
          borderRadius={borderRadius || "0"}
          display={option === "0" ? "flex" : "none"}
        />
      </Suspense>

      <Suspense fallback={<div>Loading...</div>}>
        <Waves
          {...props2}
          width={width}
          height={height}
          borderRadius={borderRadius || "0"}
          display={option === "1" ? "flex" : "none"}
        />
      </Suspense>

      <Suspense fallback={<div>Loading...</div>}>
        <Waves
          {...props3}
          width={width}
          height={height}
          borderRadius={borderRadius || "0"}
          display={option === "2" ? "flex" : "none"}
        />
      </Suspense>
    </>
  );
}
