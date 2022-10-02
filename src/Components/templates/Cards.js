import config from "../config.json";
import Card from "../atoms/Card";
import styled from "@emotion/styled";

const CardsWrapper = styled(`div`)({
	backgroundColor: "transparent",
	width: "100%",
	display: "flex",
	flexWrap: "wrap",
	flexGrow: 1,
	justifyContent: "space-between",
});

const Cards = () => {
	const education = {
		title: config.education.title,
		expls: config.education.expls,
	};
	const experience = {
		title: config.experience.title,
		expls: config.experience.expls,
	};
	const skills = {
		title: config.skills.title,
		expls: config.skills.expls,
	};

	const introCardContents = [education, experience, skills];

	return (
		<CardsWrapper>
			{introCardContents.map(item => {
				return <Card key={item.title} {...item} />;
			})}
		</CardsWrapper>
	);
};

export default Cards;
