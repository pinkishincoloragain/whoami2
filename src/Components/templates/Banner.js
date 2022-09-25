import styled from "@emotion/styled";
import profileImage from "../../assets/icons/memoji.jpg";
import Cards from "./Cards";

const Banner = () => {
	const BannerWrapper = styled(`div`)({
		backgroundColor: "transparent",
		width: "100%",
		overflow: "hidden",
		display: "flex",
		flexDirection: "row",
		flexWrap: "wrap",
	});
	const BannerImg = styled(`img`)({
		width: "16%",
		minWidth: "12rem",
		borderRadius: "5px",
	});

	return (
		<BannerWrapper>
			<BannerImg src={profileImage} alt="react logo" />
			<Cards />
		</BannerWrapper>
	);
};

export default Banner;
