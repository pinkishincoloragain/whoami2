import { useSelector } from "react-redux";
import Introduction from "../Components/templates/Introduction";
import Logo from "../Components/atoms/Logo";
import styled from "@emotion/styled";

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
		backgroundColor: darkMode ? "#1f1f1f" : "white",
		display: "flex",
		flexDirection: "flex-row",
		top: 0,
		zIndex: 1,
		position: "sticky",
		height: "fit-content",
		backgroundColor: "transparent",
	});

	return (
		<LandingWrapper>
			<HeaderWrapper>
				<Logo />
			</HeaderWrapper>
			<MainWrapper className="w-full ">
				<Introduction />
			</MainWrapper>
		</LandingWrapper>
	);
}

export default Landing;
