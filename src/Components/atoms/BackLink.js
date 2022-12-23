import back from "../../assets/images/backLink.svg";
import styled from "styled-components";

import { Link } from "react-router-dom";

const BackLinkButton = styled(Link)({
  width: "100%",
  display: "flex",
  justifyContent: "flex-start",
});

const BackLinkImg = styled.img({
  width: "20px",
  margin: "0 0 20px 0",
});

export default function BackLink() {
  return (
    <BackLinkButton to={"/"}>
      <BackLinkImg src={back} />
    </BackLinkButton>
  );
}
