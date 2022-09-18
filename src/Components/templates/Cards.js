import config from "../config.json";
import educationImage from "../../assets/icons/education.png";
import workImage from "../../assets/icons/work.png";
import skillImage from "../../assets/icons/skills.png";
import Card from "../atoms/Card";

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

	return (
		<div className="w-full flex flex-wrap grow justify-between">
			{introCardContents.map(item => {
				return <Card key={item.title} {...item} />;
			})}
		</div>
	);
};

export default Cards;
