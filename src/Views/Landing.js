import * as React from "react";
import { useSelector } from "react-redux";
import Logo from "../Components/atoms/Logo";
import BeatifulBar from "../Components/atoms/BeautifulBar";
import styled from "@emotion/styled";

import Banner from "../Components/templates/Banner";
import TalkTemplate from "../Components/templates/TalkTemplate";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";

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

const MainWrapper = styled(`div`)({
	zIndex: 1,
	display: "flex",
	flexWrap: "wrap",
	width: "100%",
	backgroundColor: "transparent",
	alignItems: "center",
	flexDirection: "column",
	justifyContent: "center",
});

const HeaderWrapper = styled(`div`)({
	width: "80%",
	display: "flex",
	flexDirection: "flex-row",
	zIndex: 0,
	backgroundColor: "transparent",
	position: "fixed",
});

function Landing(props) {
	const darkMode = useSelector(state => state.mode.value);

	const parallax = React.useRef(null);

	const ParallaxPage = (
		<Parallax ref={parallax} pages={3}>
			<ParallaxLayer
				offset={1}
				speed={1}
				style={{ backgroundColor: "#805E73" }}
			/>
			<ParallaxLayer
				offset={2}
				speed={1}
				style={{ backgroundColor: "#87BCDE" }}
			>
				<p>Layers can contain anything</p>
			</ParallaxLayer>

			<ParallaxLayer
				offset={0}
				speed={0}
				factor={3}
				style={{
					// backgroundImage: url("stars", true),
					backgroundSize: "cover",
				}}
			/>
		</Parallax>
	);

	return (
		<LandingWrapper darkMode={darkMode}>
			<HeaderWrapper>
				<Logo />
			</HeaderWrapper>
			<MainWrapper>
				<BeatifulBar />
				<Banner />
				<TalkTemplate />
			</MainWrapper>
		</LandingWrapper>
	);
}

export default Landing;
