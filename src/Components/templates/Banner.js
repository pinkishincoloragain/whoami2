import styled from "@emotion/styled";
import profileImage from "../../assets/icons/memoji.jpg";
import Graph from "../atoms/Graph";
import DevMode from "../atoms/developer/DevMode";
import Cards from "./Cards";

const Banner = () => {
	const BannerWrapper = styled(`div`)({
		backgroundColor: "transparent",
	});

	return (
		<BannerWrapper className="max-w-full min-h-fit min-w-fit rounded overflow-hidden flex flex-row flex-wrap align-middle justify-between bg-dark-green pb-4 mt-4">
			{/* <Profile /> */}
			<img
				className="w-2/12 min-w-[12rem] rounded-md mr-8"
				src={profileImage}
				alt="react logo"
			/>
			<DevMode />

			<Cards />
			<Graph />
		</BannerWrapper>
	);
};

export default Banner;
