import config from "../config.json";
import educationImage from "../../assets/icons/education.png";
import workImage from "../../assets/icons/work.png";
import skillImage from "../../assets/icons/skills.png";
import Card from "../atoms/Card";
import styled from "@emotion/styled";

const Cards = () => {
	const education = {
		title: config.education.title,
		expls: config.education.expls,
		src: educationImage,
	};
	const experience = {
		title: config.experience.title,
		expls: config.experience.expls,
		src: workImage,
	};
	const skills = {
		title: config.skills.title,
		expls: config.skills.expls,
		src: skillImage,
	};

	const introCardContents = [education, experience, skills];

	const CardsWrapper = styled(`div`)({
		backgroundColor: "transparent",
		width: "100%",
		display: "flex",
		flexWrap: "wrap",
		flexGrow: 1,
		justifyContent: "space-between",
	});

	return (
		<CardsWrapper>
			{introCardContents.map(item => {
				return <Card key={item.title} {...item} />;
			})}
		</CardsWrapper>
	);
};

export default Cards;
