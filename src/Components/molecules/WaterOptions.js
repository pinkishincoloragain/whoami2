import Waves from "./objects/Waves";

export default function WaveOptions({ option, width, height }) {
  return (
    <>
      {option === "0" && (
        <Waves
          container='container1'
          width={width}
          height={height}
          elevation='1'
          azimuth='45'
          borderRadius={0}
        />
      )}
      {option === "1" && (
        <Waves
          container='container2'
          width={width}
          height={height}
          rayleigh='0.5'
          elevation='-2.1'
          turbidity='100'
          azimuth='45'
          borderRadius={0}
        />
      )}
      {option === "2" && (
        <Waves
          container='container3'
          width={width}
          height={height}
          elevation='-10'
          azimuth='45'
          turbidity='100'
          borderRadius={0}
          waterColor='#000000'
        />
      )}
    </>
  );
}
