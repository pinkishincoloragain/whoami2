import * as React from "react";
import styled from "styled-components";

const HeaderTypography = styled(`div`)({
  "&:hover": {
    color: "#FFCC00",
    transitionDuration: "0.1s",
    cursor: "pointer",
  },
  fontSize: "16vw",
  color: "red",
});

const HeaderWrapper = styled(`div`)({
  backgroundColor: "transparent",
  height: "80%",
  zIndex: 2,
});

export default function Header(props) {
  const logoRef = React.useRef();

  const handleMouseDown = () => {
    logoRef.current.style.color = "red";
  };
  const handleMouseUp = () => {
    logoRef.current.style.color = "#1b1b1b";
  };
  const handleMouseEnter = () => {
    logoRef.current.style.color = "#FFCC00";
  };
  const handleMouseOut = () => {
    logoRef.current.style.color = "#1b1b1b";
  };

  return (
    <HeaderWrapper>
      <HeaderTypography
        className='superBold'
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseEnter={handleMouseEnter}
        onMouseOut={handleMouseOut}
        ref={logoRef}
      >
        pinkish
      </HeaderTypography>
    </HeaderWrapper>
  );
}
