import styled from "styled-components";

const SubHeaderWrapper = styled(`div`)({
	backgroundColor: "transparent",
	display: "flex",
	flexDirection: "flex-row",
	flexWrap: "wrap",
	height: "100%",
	zIndex: 2,
});

const SubHeaderTypography = styled(`div`)({
	color: "#FFCC00",
	"&:hover": {
		color: "white",
		transitionDuration: "0.1s",
		cursor: "pointer",
	},
	fontSize: "2rem",
});

export default function SubHeader() {
	return (
		<SubHeaderWrapper>
			<SubHeaderTypography className="superBold">
				&nbsp;PINKISHINCOLORAGAIN
			</SubHeaderTypography>
			<SubHeaderTypography className="superBold">
				&nbsp;WORKS
			</SubHeaderTypography>
		</SubHeaderWrapper>
	);
}
