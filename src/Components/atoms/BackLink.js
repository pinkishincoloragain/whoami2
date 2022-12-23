import back from "../../assets/images/backLink.svg";
import styled from "styled-components";

import { Link } from "react-router-dom";

const BackLinkButtonWrapper = styled.div({
  width: "100%",
  justifyContent: "flex-start",
});

const BackLinkButton = styled(Link)({
  width: "40px",
  display: "flex",
});

const BackLinkImg = styled.img({
  width: "20px",
  margin: "0 0 20px 0",
});

export default function BackLink() {
  return (
    <BackLinkButtonWrapper>
      <BackLinkButton to={"/"}>
        <BackLinkImg src={back} />
      </BackLinkButton>
    </BackLinkButtonWrapper>
  );
}
