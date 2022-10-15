import React from "react";
import config from "../../../config.json";
import styled from "styled-components"
import { useSelector } from "react-redux";

const Font1 = styled.span(props => {
	return {
		// color: mode ? yellow.A100 : "white",
		color: props.mode ? "yellow" : "orange",
	};
});
const Font2 = styled.span(props => {
	return {
		// color: mode ? yellow.A100 : "white",
		color: props.mode ? "yellow" : "333333",
	};
});

const Font3 = styled(`span`)({
	color: "green",
});

export const Directory = () => {
	const mode = useSelector(state => state.mode.value);

	return (
		<>
			<Font1 mode={mode}>{config.ps1_username}</Font1>
			<Font2>@</Font2>
			<Font3>{config.ps1_hostname}</Font3>
			<Font2> &gt;&gt;&nbsp;</Font2>
		</>
	);
};

export default Directory;
