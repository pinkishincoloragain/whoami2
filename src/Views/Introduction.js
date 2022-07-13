import * as React from "react";
import { List } from "@mui/material";
import reactGif from "../assets/icons/react.gif";
import { useSelector } from "react-redux";
import styled from "@emotion/styled";
import config from "../config.json";
import educationImage from "../assets/icons/education.png";
import workImage from "../assets/icons/work.png";
import skillImage from "../assets/icons/skills.png";

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
    <CardWrapper className="min-w-[30%] max-w-full rounded overflow-hidden shadow-xl align-middle justify-center bg-dark-background my-8 ">
      <div className="flex">
        <div className="w-20 h-20 ml-6 mt-4 bg-light-background rounded-md flex align-middle justify-center">
          <img
            className="w-8 h-8 mt-6"
            src={props.src}
            alt={props.title + " image"}
          />
        </div>
        <div className="font-bold text-2xl ml-12 mt-9">{props.title}</div>
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
    <div className="w-full flex flex-wrap justify-between">
      <BeatifulBar className="w-full h-2 "></BeatifulBar>
      <Card props={education} />
      <Card props={experience} />
      <Card props={skills} />
    </div>
  );
}

export { Introduction };
