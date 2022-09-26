import * as React from "react";
import styled from "@emotion/styled";
import { useSelector, useDispatch } from "react-redux";
import { changeMode } from "../controls/modeSlice";
import StateBox from "./StateBox";

export default function Logo(props) {
	const [scrollPosition, setScrollPosition] = React.useState(0);
	const handleScroll = () => {
		const position = window.pageYOffset;
		setScrollPosition(position);
	};

	React.useEffect(() => {
		window.addEventListener("scroll", handleScroll);
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	const darkMode = useSelector(state => state.mode.value);
	const dispatch = useDispatch();
	const logoRef = React.useRef();

	const handleMouseDown = () => {
		logoRef.current.style.color = "red";
	};
	const handleMouseUp = () => {
		logoRef.current.style.color = darkMode ? "#1b1b1b" : "#FFCC00";
	};
	const handleMouseEnter = () => {
		logoRef.current.style.color = "#ffffff";
	};
	const handleMouseOut = () => {
		logoRef.current.style.color = !darkMode ? "#1b1b1b" : "#FFCC00";
	};

	const HeaderTypography = styled(`div`)({
		"&:hover": {
			color: "#FFCC00",
			transitionDuration: "0.1s",
			cursor: "pointer",
		},
		fontSize: "8vw",
		height: "10px",
		color: "red",
		transitionDuration: "0.2s",
		transform: "skew(-10deg) rotate(-10deg)",
		transformOrigin: "100% 50%",
	});

	const SubHeaderTypography = styled(`div`)({
		"&:hover": {
			color: "#FFCC00",
			transitionDuration: "0.1s",
			cursor: "pointer",
		},
		fontSize: "2vw",
		height: "10px",
		color: "red",
		transitionDuration: "0.2s",
		transform: `skew(-10deg) rotate(-10deg)`,
		transformOrigin: "82% 50%",
		lineHeight: "0.9",
	});

	const BoxWrapper = styled(`div`)({
		backgroundColor: "transparent",
		width: "30%",
		minWidth: "320px",
		marginTop: "2%",
		paddingLeft: "20%",
		justifyContent: "flex-start",
	});

	const LogoWrapper = styled(`div`)({
		backgroundColor: "transparent",
		marginLeft: "1%",
		display: "flex",
		flexDirection: "flex-row",
		flexWrap: "wrap",
		justifyContent: "flex-end",
	});

	return (
		<LogoWrapper>
			<>
				<HeaderTypography
					className="superBold"
					onClick={() => dispatch(changeMode())}
					onMouseDown={handleMouseDown}
					onMouseUp={handleMouseUp}
					onMouseEnter={handleMouseEnter}
					onMouseOut={handleMouseOut}
					ref={logoRef}
				>
					PINKISHINCOLORAGAIN
				</HeaderTypography>
				<SubHeaderTypography className="superBold">
					&nbsp;Web developer,
					<br />
					&nbsp;But not just a web developer.
				</SubHeaderTypography>
			</>
		</LogoWrapper>
	);
}
