import * as React from "react";
import styled from "styled-components";
import bkg from "../../assets/images/bkg.jpg";
import CircleSvg from "./CircleSvg";

const BackgroundVideoWrapper = styled.div({
	position: "absolute",
	top: 0,
	left: 0,
	width: "100%",
	height: "100%",
	zIndex: 1,
	overflow: "hidden",
});

const BackgroundImageWrapper = styled.div({
	position: "absolute",
	top: -10,
	left: -10,
	padding: "-10px 0px 0px -10px",
	width: "120%",
	height: "100%",
	zIndex: 1,
	overflow: "hidden",
	filter: " brightness(0.5)",
	scale: 1.1,
});

function Video() {
	const [windowWidth, setWindowWidth] = React.useState(window.innerWidth);
	const [videoPlay, setVideoPlay] = React.useState(false);

	React.useEffect(() => {
		setTimeout(() => {
			setVideoPlay(true);
		}, 1000);
	});

	React.useEffect(() => {
		window.addEventListener("resize", () => {
			setWindowWidth(window.innerWidth);
		});
		return () => {
			window.removeEventListener("resize", () => {
				setWindowWidth(window.innerWidth);
			});
		};
	}, []);

	return (
		<BackgroundVideoWrapper>
			{/* <CircleSvg visibility={videoPlay ? "hidden" : "visible"} /> */}
			{windowWidth > 768 ? (
				<iframe
					src="https://www.youtube.com/embed/NU6ynXp7uUE?autoplay=1&playlist=NU6ynXp7uUE&loop=1&controls=0&mute=1&modestbranding=1&showinfo=0&start=5&enablejsapi=1&&widgetid=3"
					frameBorder="0"
					// allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
					allowFullScreen
					style={{
						width: "100%",
						height: "100%",
					}}
					title="Hello world 1.mp4"
				></iframe>
			) : (
				<BackgroundImageWrapper>
					<img src={bkg} />
				</BackgroundImageWrapper>
			)}
		</BackgroundVideoWrapper>
	);
}

export default React.memo(Video);
