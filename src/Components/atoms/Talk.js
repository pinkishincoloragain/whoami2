import * as React from "react";
import styled from "@emotion/styled";
import Boxes from "../objects/Boxes";

const Talk = ({ type, text }) => {
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
		padding: "1rem",
		borderRadius: "1rem",
		fontWeight: "500",
	});

	return (
		<TalkWrapper>
			<TextWrapper>{text}</TextWrapper>
		</TalkWrapper>
	);
};

const TalkWithFile = ({ type, text, width, height }) => {
	console.log(type);
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
					<Boxes width={width} height={height} container="boxContainer2" />
				</TextWrapper>
			</TalkWrapper>
			<Talk type={type} text={text} />
		</>
	);
};

export { Talk, TalkWithFile };
