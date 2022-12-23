import React from "react";
import styled from "styled-components";
import colors from "../colors.json";
import anniversary from "../../assets/data/anniversary.json";

import ShareImgBox from "../molecules/ShareImgBox";
import { ShareButton } from "../atoms/MyButton";

import { useRecoilValue } from "recoil";
import { userInfoState, isLoggedInState } from "../utils/recoil/authRecoil";
import OptionBar from "../atoms/OptionBar";

import useSharableLink from "../../hooks/useSharableLink";
import { H4 } from "../atoms/Text";

const ShareContentWrapper = styled.div(props => {
  return {
    backgroundColor: colors.dark.background,
    width: props.width,
    minWidth: "20rem",
    maxWidth: "30rem",
    padding: "5vh 1vw 5vh 1vw",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  };
});

const ShareButtonsWrapper = styled.div({
  width: "100%",
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
});

const DescWrapper = styled.div({
  width: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start",
  marginBottom: "1rem",
});

const DescTextWrapper = styled.div({
  width: "100%",
  display: "flex",
  justifyContent: "center",
  padding: "0 0 1rem 0",
});

export default function ShareContent() {
  const width = window.innerWidth * 0.8 > 360 ? 360 : window.innerWidth * 0.8;
  const isLoggedIn = useRecoilValue(isLoggedInState);
  const [link, copyToClipboard] = useSharableLink();
  const options = ["day", "dawn", "night"];

  const [option, setOption] = React.useState("0");

  React.useEffect(() => {
    if (!isLoggedIn) {
      window.location.href = "/login";
    }
  });

  return (
    <ShareContentWrapper width={width}>
      <DescWrapper>
        <DescTextWrapper>
          <H4>{anniversary.share.desc}</H4>
        </DescTextWrapper>
        <OptionBar
          width={"60%"}
          options={options}
          currentOptionIdx={option}
          setCurrentOptionIdx={setOption}
        />
      </DescWrapper>
      <ShareImgBox option={option} width={width} />
      <ShareButtonsWrapper>
        <ShareButton onClick={copyToClipboard}>Share</ShareButton>
        <ShareButton onClick={copyToClipboard}>Share</ShareButton>
        <ShareButton onClick={copyToClipboard}>Share</ShareButton>
      </ShareButtonsWrapper>
    </ShareContentWrapper>
  );
}
