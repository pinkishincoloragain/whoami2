import React from "react";
import styled from "styled-components";
import colors from "../colors.json";
import anniversary from "../../assets/data/anniversary.json";

import ShareImgBox from "../molecules/ShareImgBox";
import OptionBar from "../atoms/OptionBar";

import { useRecoilValue } from "recoil";
import { isLoggedInState } from "../utils/recoil/authRecoil";

import useSharableLink from "../../hooks/useSharableLink";
import { H4 } from "../atoms/Text";
import BackLink from "../atoms/BackLink";
import ShareForm from "../molecules/ShareForm";
import { useNavigate } from "react-router-dom";

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

const DescWrapper = styled.div({
  width: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start",
  marginBottom: "1rem",
});

const DescTextWrapper = styled.div({
  height: "14vh",
  width: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-around",
  padding: "0 0 1rem 0",
});

export default function ShareContent() {
  const width = window.innerWidth * 0.8 > 420 ? 420 : window.innerWidth * 0.8;
  const isLoggedIn = useRecoilValue(isLoggedInState);
  const [link, copyToClipboard] = useSharableLink();
  const options = ["day", "dawn", "night"];

  const [option, setOption] = React.useState("0");
  const navigate = useNavigate();

  React.useEffect(() => {
    if (!isLoggedIn) {
      navigate("/login");
    }
  });

  return (
    <ShareContentWrapper width={width}>
      {/* <BackLink /> */}
      <DescWrapper>
        <DescTextWrapper>
          <H4>{anniversary.share.desc1}</H4>
          <H4>{anniversary.share.desc2}</H4>
          <H4>{anniversary.share.desc3}</H4>
        </DescTextWrapper>
        <OptionBar
          width={"60%"}
          options={options}
          currentOptionIdx={option}
          setCurrentOptionIdx={setOption}
        />
      </DescWrapper>
      <ShareImgBox option={option} width={width} />
      <ShareForm />
    </ShareContentWrapper>
  );
}
