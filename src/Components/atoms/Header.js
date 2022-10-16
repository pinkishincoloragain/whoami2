import * as React from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { changeMode } from "../controls/modeSlice";
import StateBox from "./StateBox";
import CircleText from "./CircleText";

const HeaderTypography = styled(`div`)({
	"&:hover": {
		color: "#FFCC00",
		transitionDuration: "0.1s",
		cursor: "pointer",
	},
	fontSize: "16vw",
	color: "red",
});

const HeaderWrapper = styled(`div`)({
	backgroundColor: "transparent",
	height: "80%",
	zIndex: 2,
});

export default function Header(props) {
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
		logoRef.current.style.color = "#FFCC00";
	};
	const handleMouseOut = () => {
		logoRef.current.style.color = !darkMode ? "#1b1b1b" : "#FFCC00";
	};

	return (
		<HeaderWrapper>
			<HeaderTypography
				className="superBold"
				onClick={e => {
					e.preventDefault();
					dispatch(changeMode());
				}}
				onMouseDown={handleMouseDown}
				onMouseUp={handleMouseUp}
				onMouseEnter={handleMouseEnter}
				onMouseOut={handleMouseOut}
				ref={logoRef}
			>
				TONE AND MANNER
			</HeaderTypography>
		</HeaderWrapper>
	);
}
