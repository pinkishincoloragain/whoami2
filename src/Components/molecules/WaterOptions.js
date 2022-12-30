import { lazy, Suspense } from "react";
import { props1, props2, props3 } from "./WaveProps";
import styled from "styled-components";
// import Waves from "./objects/Waves";
const Waves = lazy(() => import("./objects/Waves"));

const WaveSuspense = styled.div({
  width: "80vw",
  height: "80vh",
});

export default function WaveOptions({ option, width, height, borderRadius }) {
  return (
    <>
      <Suspense fallback={<WaveSuspense />}>
        <Waves
          {...props1}
          width={width}
          height={height}
          borderRadius={borderRadius || "0"}
          display={option === "0" ? "flex" : "none"}
        />
      </Suspense>

      <Suspense fallback={<WaveSuspense />}>
        <Waves
          {...props2}
          width={width}
          height={height}
          borderRadius={borderRadius || "0"}
          display={option === "1" ? "flex" : "none"}
        />
      </Suspense>

      <Suspense fallback={<WaveSuspense />}>
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
