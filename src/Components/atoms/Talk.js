import * as React from "react";
import styled from "@emotion/styled";
import Waves from "../objects/Waves";
import useScroll from "../../hooks/useScroll";
import StateBox from "./StateBox";

const Talk = ({ type, text }) => {
	const TalkWrapper = styled(`div`)({
		backgroundColor: "transparent",
		display: "flex",
		justifyContent: type === "me" ? "flex-end" : "flex-start",
		paddingTop: "1%",
		paddingBottom: "2%",
	});

	const element = useScroll("up", 0.3, 0);

	const TextWrapper = styled(`div`)({
		color: type === "me" ? "white" : "black",
		backgroundColor: type === "me" ? "#12C11A" : "#ffffff",
		fontSize: "max(1rem, 1.5vw)",
		width: "fitContent",
		maxWidth: "80%",
		padding: "min(1rem, 3vw)",
		borderRadius: "1rem",
		fontWeight: "500",
	});

	return (
		<TalkWrapper {...element}>
			<TextWrapper>{text}</TextWrapper>
		</TalkWrapper>
	);
};

const TalkWithEmoji = ({ type, text }) => {
	const TalkWrapper = styled(`div`)({
		backgroundColor: "transparent",
		display: "flex",
		justifyContent: type === "me" ? "flex-end" : "flex-start",
		paddingTop: "1%",
		paddingBottom: "2%",
	});

	const TextWrapper = styled(`div`)({
		color: type === "me" ? "white" : "black",
		backgroundColor: type === "me" ? "#12C11A" : "#ffffff",
		fontSize: "1.5rem",
		width: "fitContent",
		maxWidth: "80%",
		padding: "0.5rem",
		borderRadius: "1rem",
		fontWeight: "500",
	});

	return (
		<>
			<TalkWrapper>
				<TextWrapper>
					<StateBox />
				</TextWrapper>
			</TalkWrapper>
			<Talk type={type} text={text} />
		</>
	);
};

const TalkWithObject = ({ type, text, width, height }) => {
	const TalkWrapper = styled(`div`)({
		backgroundColor: "transparent",
		display: "flex",
		justifyContent: type === "me" ? "flex-end" : "flex-start",
		paddingTop: "1%",
		paddingBottom: "2%",
	});

	const TextWrapper = styled(`div`)({
		color: type === "me" ? "white" : "black",
		backgroundColor: type === "me" ? "#12C11A" : "#ffffff",
		fontSize: "1.5rem",
		width: "fitContent",
		maxWidth: "80%",
		padding: "0.5rem",
		borderRadius: "1rem",
		fontWeight: "500",
	});

	return (
		<>
			<TalkWrapper>
				<TextWrapper>
					{/* <Waves
						width={width}
						height={height}
						elevation="10"
						azimuth="45"
						// container="boxContainer"
					/> */}
				</TextWrapper>
			</TalkWrapper>
			<Talk type={type} text={text} />
		</>
	);
};

export { Talk, TalkWithEmoji, TalkWithObject };
