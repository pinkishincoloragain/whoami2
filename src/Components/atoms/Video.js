import * as React from "react";
import styled from "styled-components";

const BackgroundVideoWrapper = styled.div({
	position: "absolute",
	top: 0,
	left: 0,
	width: "100%",
	height: "100%",
	zIndex: 1,
	overflow: "hidden",
});

function Video() {
	return (
		<BackgroundVideoWrapper>
			<iframe
				src="https://www.youtube.com/embed/NU6ynXp7uUE?autoplay=1&controls=0&mute=1&loop=1&modestbranding=1&showinfo=0&start=5&enablejsapi=1&&widgetid=3"
				frameBorder="0"
				allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
				allowFullScreen
				style={{
					width: "100%",
					height: "100%",
				}}
				title="Hello world 1.mp4"
			></iframe>
		</BackgroundVideoWrapper>
	);
}

export default React.memo(Video);
