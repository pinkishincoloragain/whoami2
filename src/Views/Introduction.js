import * as React from "react";
import { List } from "@mui/material";
import reactGif from "../assets/icons/react.gif";
import { useSelector } from "react-redux";
import styled from "@emotion/styled";
import config from "../config.json";
import educationImage from "../assets/icons/education.png";
import workImage from "../assets/icons/work.png";
import skillImage from "../assets/icons/skills.png";
import profileImage from "../assets/icons/profile.jpeg";
import Graph from "./graphs/graph";

const Banner = () => {
  const mode = useSelector((state) => state.mode.value);
  const BannerWrapper = styled(`div`)({
    backgroundColor: mode
      ? config.colors.dark.background
      : config.colors.light.background,
  });
  return (
    <BannerWrapper className="max-w-full min-h-fit min-w-fit rounded overflow-hidden shadow-xl align-middle flex flex-wrap bg-dark-green pb-4 mt-4 mr-4">
      <div className="float-left min-w-fit w-32 h-32 ml-6 mt-4 p-4 bg-light-background rounded-md flex align-middle justify-center">
        <img
          className="w-24 h-24 min-w-fit rounded-md"
          src={profileImage}
          alt="react logo"
        />
      </div>
      <div className="float-left mt-4 min-w-fit w-6/12 mr-4 ml-6 rounded-md ">
        <Graph />
      </div>
      <div className="font-bold text-xl ml-6 pr-6 mt-4">
        <span className="text-gray-700 text-base leading-8">
          Hi! I'm a software developer who is passionate about building
          interactive and responsive websites. You can visit my github at&nbsp;
          <a
            href="https://github.com/pinkishincoloragain"
            className="underline"
            color="red"
          >
            Here.
          </a>
        </span>
      </div>
    </BannerWrapper>
  );
};

const Card = ({ props }) => {
  const mode = useSelector((state) => state.mode.value);
  const Expls = props.expls.map((item) => {
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
    <CardWrapper className="max-w-7xl min-w-fit grow rounded overflow-hidden shadow-xl align-middle justify-center bg-dark-background mt-4 mr-4">
      <div className="flex">
        <div className="w-20 h-20 ml-6 mt-4 bg-light-background rounded-md flex align-middle justify-center">
          <img
            className="w-8 h-8 mt-6"
            src={props.src}
            alt={props.title + " image"}
          />
        </div>
        <div className="font-bold text-2xl ml-6 pr-6 mt-9">{props.title}</div>
      </div>
      <div className="px-6 py-4">{Expls}</div>
      <div className="px-6 pt-4 pb-2"></div>
    </CardWrapper>
  );
};

export default function Introduction(props) {
  const education = {
    title: `Education`,
    expls: [
      `Kyungpook Nat'l University (2017 - )`,
      `Technological University Dublin(2021 - 2022)`,
    ],
    src: educationImage,
  };
  const experience = {
    title: `Experience`,
    expls: [
      `KNU DEAL LAB researcher (2020 - 2021)`,
      `LG WebOS Internship (2021S)`,
    ],
    src: workImage,
  };
  const skills = {
    title: `Skills`,
    expls: [
      `Korean(native), English(fluent)`,
      `Front-end development`,
      `Data analysis`,
    ],
    src: skillImage,
  };

  const BeatifulBar = styled(`div`)({
    backgroundImage: "linear-gradient(217deg, #231955, #1F4690 71.71%)",
  });
  return (
    <>
      <div className="flex flex-row">
        <BeatifulBar className="w-full h-2"></BeatifulBar>
        <div className="w-4 h-2"></div>
      </div>

      <Banner />
      <div className="w-full flex flex-wrap grow justify-between">
        <Card props={education} />
        <Card props={experience} />
        <Card props={skills} />
      </div>
    </>
  );
}

export { Introduction };
