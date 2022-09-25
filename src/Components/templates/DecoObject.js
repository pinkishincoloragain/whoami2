import styled from "@emotion/styled";
// import Boxes from "../objects/Boxes";
import Waves from "../objects/Waves";
import Boxes from "../objects/Boxes";
import * as React from "react";
import useWindowSize from "../../hooks/useWindowSize";

const DecoObject = () => {
	const DecoWrapper = styled(`div`)({
		backgroundColor: "transparent",
		width: "100%",
		height: "100%",
		display: "flex",
		flexDirection: "row",
		flexWrap: "wrap",
		justifyContent: "space-between",
	});

	const MemoizedWave = React.memo(Waves);
	const windowSize = useWindowSize();
	console.log(windowSize);

	return (
		<DecoWrapper>
			fish
			<Boxes width={windowSize.width / 2} height={windowSize.height / 8} />
		</DecoWrapper>
	);
};

export default DecoObject;
