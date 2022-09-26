import styled from "@emotion/styled";
// import { useSelector } from "react-redux";

const Card = ({ expls, src, title }) => {
	// const mode = useSelector(state => state.mode.value);
	const Expls = expls.map(item => {
		return (
			<p key={item} className="text-gray-700 text-base leading-8">
				{item}
			</p>
		);
	});

	const CardWrapper = styled(`div`)({
		minWidth: "320px",
		marginTop: "2%",
		backgroundColor: "transparent",
		width: "32%",
	});

	return (
		<CardWrapper>
			<div className="flex">
				<div className="font-bold text-2xl ml-6 pr-6 mt-9">{title}</div>
			</div>
			<div className="px-6 py-4">{Expls}</div>
		</CardWrapper>
	);
};

export default Card;
