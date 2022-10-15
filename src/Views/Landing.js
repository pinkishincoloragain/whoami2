import * as React from "react";
import { useSelector } from "react-redux";
import Header from "../Components/atoms/Header";
import BeatifulBar from "../Components/atoms/BeautifulBar";
import styled from "styled-components";

import Banner from "../Components/templates/Banner";
import DrawSvg from "../Components/atoms/DrawSvg";
import TalkTemplate from "../Components/templates/TalkTemplate";
import Video from "../Components/atoms/Video";

const LandingWrapper = styled.div(props => {
	return {
		backgroundImage: props.darkMode
			? "linear-gradient(180deg, #131221, #2D4263 90.71%)"
			: "linear-gradient(180deg, #ffffff, #2D4263 90.71%)",
		color: !props.darkMode ? "#1f1f1f" : "white",
		paddingRight: "10%",
		paddingLeft: "10%",
		paddingTop: "3%",
		paddingBottom: "5%",
		overflow: "hidden",
	};
});

const MainWrapper = styled.div({
	zIndex: 0,
	display: "flex",
	flexWrap: "wrap",
	width: "100%",
	backgroundColor: "transparent",
	alignItems: "center",
	flexDirection: "column",
	justifyContent: "center",
	marginTop: "20%",
});

// const  = styled(`div`)({});

const HeaderWrapper = styled.div({
	width: "80%",
	display: "flex",
	flexDirection: "flex-row",
	backgroundColor: "transparent",
	// position: "fixed",
});

function Landing(props) {
	const darkMode = useSelector(state => state.mode.value);

	return (
		<LandingWrapper darkMode={darkMode}>
			<HeaderWrapper>
				<Video />
				<Header />
			</HeaderWrapper>
			<MainWrapper>
				{/* <BeatifulBar /> */}
				{/* <DrawSvg /> */}
				<Banner />
				<TalkTemplate />
			</MainWrapper>
		</LandingWrapper>
	);
}

export default Landing;
