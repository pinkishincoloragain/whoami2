import styled from "styled-components";

import logo from "../../../assets/images/Logo.png";

const LogoImg = styled.img({
  width: "50%",
});

export default function LogoTriangle() {
  return <LogoImg src={logo} />;
}
