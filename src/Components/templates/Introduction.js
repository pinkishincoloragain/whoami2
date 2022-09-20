import { useSelector } from "react-redux";
import styled from "@emotion/styled";
import config from "../config.json";

import Banner from "./Banner";

export default function Introduction(props) {
	const BeatifulBar = styled(`div`)({
		backgroundImage: "linear-gradient(217deg, #231955, #1F4690 71.71%)",
	});

	return (
		<div className="w-full">
			<div className="flex flex-row w-full">
				<BeatifulBar className="w-full h-6 px-6 rounded-md" />
			</div>
			<Banner />
		</div>
	);
}

export { Introduction };
