import { keyframes, css } from "styled-components";

const CircleText = () => {
	return (
		<svg viewBox="0 0 400 400">
			<defs>
				<path
					id="MyPath"
					d="M 200, 200
 m -100, 0
 a 100,100 0 1,1 200,0
 a 100,100 0 1,1 -200,0
"
				/>
			</defs>
			<text fontSize="30">
				<textPath xlinkHref="#MyPath">
					PINKISHINCOLORAGAINPINKISHINCOLORAGAIN
				</textPath>
			</text>
		</svg>
	);
};

export default CircleText;
