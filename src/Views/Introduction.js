import * as React from "react";
import { useSelector } from "react-redux";
import styled from "@emotion/styled";
import config from "../config.json";
import educationImage from "../assets/icons/education.png";
import workImage from "../assets/icons/work.png";
import skillImage from "../assets/icons/skills.png";
import profileImage from "../assets/icons/profile.jpeg";
import Graph from "../Components/graphs/graph";

const Banner = () => {
  const mode = useSelector((state) => state.mode.value);
  const BannerWrapper = styled(`div`)({
    backgroundColor: mode
      ? config.colors.dark.background
      : config.colors.light.background,
  });

  const BannerText = () => {
    return (
      <div className="flex flex-col w-5/12">
        <div className="min-w-fit w-48 h-48 ml-6 mt-4 p-8 bg-light-background rounded-md flex align-middle justify-center">
          <img
            className="w-32 h-32 min-w-fit rounded-md"
            src={profileImage}
            alt="react logo"
          />
        </div>
        <div className="font-bold text-xl ml-6 pr-6 mt-4">
          <span className="text-base leading-7">
            Hi! I'm Myungbin son. I'm a software developer who is passionate
            about building interactive and responsive websites. You can visit my
            github at&nbsp;
            <a
              href="https://github.com/pinkishincoloragain"
              className="text-[color:orange] underline"
            >
              Here
            </a>
            .
            <br />
            <br />
            안녕하세요! 손명빈입니다. 인터랙티브하고 반응형인 웹사이트를 만드는
            데 관심이 많은 개발자입니다.
            <br />제 깃허브 링크는&nbsp;
            <a
              href="https://github.com/pinkishincoloragain"
              className="text-[color:orange] underline"
              color="red"
            >
              여기
            </a>
            &nbsp;있습니다.
          </span>
        </div>
      </div>
    );
  };
  return (
    <BannerWrapper className="max-w-full min-h-fit min-w-fit rounded overflow-hidden shadow-xl flex flex-row flex-wrap align-middle justify-between bg-dark-green pb-4 mt-4 mr-4">
      <BannerText />
      <Graph />
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
      <div className="flex flex-row w-full">
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
