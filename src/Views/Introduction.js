import { useSelector } from "react-redux";
import styled from "@emotion/styled";
import config from "../config.json";
import educationImage from "../assets/icons/education.png";
import workImage from "../assets/icons/work.png";
import skillImage from "../assets/icons/skills.png";
import profileImage from "../assets/icons/memoji.jpg";
import Graph from "./graph";
import DevMode from "../Views/DevMode";

const Banner = () => {
  const mode = useSelector(state => state.mode.value);
  const BannerWrapper = styled(`div`)({
    backgroundColor: "transparent",
  });

  const Profile = () => {
    return (
      <div className="flex pr-6 mt-4 flex-row flex-wrap text-base overflow-hidden">
        <img
          className="w-2/12 min-w-[12rem] rounded-md mr-8"
          src={profileImage}
          alt="react logo"
        />
        <DevMode />
      </div>
    );
  };

  return (
    <BannerWrapper className="max-w-full min-h-fit min-w-fit rounded overflow-hidden flex flex-row flex-wrap align-middle justify-between bg-dark-green pb-4 mt-4">
      <Profile />
      <Cards />
      <Graph />
    </BannerWrapper>
  );
};

const Card = ({ expls, src, title }) => {
  const mode = useSelector(state => state.mode.value);
  const Expls = expls.map(item => {
    return (
      <p key={item} className="text-gray-700 text-base leading-8">
        {item}
      </p>
    );
  });

  const CardWrapper = styled(`div`)({
    backgroundColor: mode
      ? config.colors.dark.background
      : config.colors.light.background,
  });

  return (
    <CardWrapper className="max-w-lg w-3/12 min-w-[20rem] mt-4 grow rounded overflow-hidden shadow-xl align-middle justify-center mr-2 bg-dark-background">
      <div className="flex">
        <div className="w-20 h-20 ml-6 mt-4 bg-light-background rounded-md flex align-middle justify-center">
          <img className="w-8 h-8 mt-6" src={src} alt={title + " image"} />
        </div>
        <div className="font-bold text-2xl ml-6 pr-6 mt-9">{title}</div>
      </div>
      <div className="px-6 py-4">{Expls}</div>
    </CardWrapper>
  );
};

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

export default function Introduction(props) {
  const BeatifulBar = styled(`div`)({
    backgroundImage: "linear-gradient(217deg, #231955, #1F4690 71.71%)",
  });

  return (
    <div className="w-full">
      <div className="flex flex-row w-full">
        <BeatifulBar className="w-full h-6 px-6 rounded-md"></BeatifulBar>
      </div>
      <Banner />
    </div>
  );
}

export { Introduction };
