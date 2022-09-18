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
	});

	const MainWrapper = styled(`div`)({
		zIndex: 1,
		display: "grid | flex",
		backgroundColor: "transparent",
	});

	const HeaderWrapper = styled(`div`)({
		backgroundColor: darkMode ? "#1f1f1f" : "white",
	});

	return (
		<LandingWrapper className="px-[10%] overflow-hidden">
			<HeaderWrapper className="flex flex-row sticky top-0 z-1 w-0 h-16">
				<Logo />
			</HeaderWrapper>
			<MainWrapper className="z-1 flex align-middle flex-col justify-even w-full flex-wrap">
				<Introduction />
			</MainWrapper>
		</LandingWrapper>
	);
}

export default Landing;
