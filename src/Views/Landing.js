import { useSelector } from "react-redux";
import Logo from "../Components/atoms/Logo";
import BeatifulBar from "../Components/atoms/BeautifulBar";
import styled from "@emotion/styled";

import Banner from "../Components/templates/Banner";
import DecoObject from "../Components/templates/DecoObject";

function Landing(props) {
	const darkMode = useSelector(state => state.mode.value);

	const LandingWrapper = styled(`div`)({
		backgroundImage: darkMode
			? "linear-gradient(180deg, #131221, #2D4263 90.71%)"
			: "linear-gradient(180deg, #ffffff, #2D4263 90.71%)",
		color: !darkMode ? "#1f1f1f" : "white",
		paddingRight: "10%",
		paddingLeft: "10%",
		paddingTop: "3%",
		paddingBottom: "5%",
		overflow: "hidden",
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
		display: "flex",
		flexDirection: "flex-row",
		zIndex: 1,
		backgroundColor: "transparent",
	});

	return (
		<LandingWrapper>
			<HeaderWrapper>
				<Logo />
			</HeaderWrapper>
			<MainWrapper>
				<BeatifulBar />
				<Banner />
				<DecoObject />
			</MainWrapper>
		</LandingWrapper>
	);
}

export default Landing;
