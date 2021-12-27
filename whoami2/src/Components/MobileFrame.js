import { useRef } from "react";

export default function MobileFrame(props) {
  //   const boxRef = useRef(null);

  const mobileFrame = (
    <div
      style={{
        display: "flex",
        margin: "auto",
        width: "100%",
        height: "100%",
        justifyContent: "center",
        alignItems: "center",
        position: "absolute",
      }}
      //   ref={boxRef}
    >
      <div
        style={{
          width: "40vw",
          height: "30vh",
          position: "absolute",
          backgroundColor: "transparent",
          border: "4px double black",
          zIndex: "0",
        }}
      ></div>
    </div>
  );

  return mobileFrame;
}
