import styled, { css, keyframes } from "styled-components";

const dash = keyframes`
from{
	stroke-dashoffset: 1000;
}
to{ 
	stroke-dashoffset: 0;
}
`;

const DrawCircle = styled.path({
	fill: "none",
	stroke: "#3498db",
	strokeWidth: "7",
	strokeLinecap: "round",
	strokeLinejoin: "miter",
	strokeMiterlimit: "4",
	strokeDasharray: "1000",
	strokeDashoffset: "1000",
	animation: css`
		${dash} 1s linear forwards
	`,
});

const SvgWrapper = styled.div({
	width: "100%",
	height: "40vh",
});

const CircleSvg = () => {
	return (
		<SvgWrapper>
			<svg
				version="1.1"
				xmlns="http://www.w3.org/2000/svg"
				xmlnsXlink="http://www.w3.org/1999/xlink"
				xmlSpace="preserve"
				x="0px"
				y="0px"
				width="100%"
				height="100%"
				viewBox="0 0 500 500"
				enableBackground={`new 0 0 500 500`}
			>
				<DrawCircle d="M247 103 A130 130 0 1 1 247 363 A130 130 0 1 1 247 103" />
			</svg>
		</SvgWrapper>
	);
};

export default CircleSvg;
