import styled from "styled-components";
import DevMode from "./developer/DevMode";
const BannerWrapper = styled(`div`)({
  backgroundColor: "transparent",
  width: "100%",
  overflow: "hidden",
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",
});
const BannerImg = styled(`img`)({
  width: "12rem",
  minWidth: "12rem",
  borderRadius: "5px",
});

const Banner = () => {
  return (
    <BannerWrapper>
      {/* <BannerImg src={profileImage} alt="react logo" /> */}
      {/* <Cards /> */}
      <DevMode />
    </BannerWrapper>
  );
};

export default Banner;
