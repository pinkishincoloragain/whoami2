import * as React from "react";

const useWindowSize = () => {
	const [windowSize, setWindowSize] = React.useState({
		width: window.innerWidth,
		height: window.innerWidth,
	});
	React.useEffect(() => {
		let resizeTimer;
		let windowSizer = () => {
			clearTimeout(resizeTimer);
			resizeTimer = setTimeout(() => {
				setWindowSize({
					width: document.body.clientWidth,
					height: document.body.clientHeight,
				});
			}, 100);
		};
		window.addEventListener("resize", windowSizer);

		return () => {
			window.removeEventListener("resize", windowSizer);
		};
	}, [windowSize]);

	return windowSize;
};

export default useWindowSize;
