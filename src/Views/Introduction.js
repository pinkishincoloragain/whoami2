import * as React from "react";
import { List } from "@mui/material";
import reactGif from "../assets/icons/react.gif";
import { useSelector } from "react-redux";
import styled from "@emotion/styled";
import config from "../config.json";

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
    <CardWrapper className="max-w-md rounded overflow-hidden shadow-xl align-middle justify-center bg-dark-background my-8 ">
      <div className="flex align-middle justify-center">
        <img className="w-4/12" src={props.src} alt={props.title + " image"} />
      </div>
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{props.title}</div>
        {Expls}
      </div>
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
  };
  const experience = {
    title: `Experience`,
    expls: [
      `KNU DEAL LAB researcher (2020 - 2021)`,
      `LG WebOS Internship (2021S)`,
    ],
  };
  const skills = {
    title: `Skills`,
    expls: [
      `Korean(native), English(fluent)`,
      `Front-end development`,
      `Data analysis`,
    ],
  };

  const BeatifulBar = styled(`div`)({
    backgroundImage:
      "linear-gradient(217deg, #231955, #1F4690 70.71%),linear-gradient(127deg, rgba(0,255,0,.8), rgba(0,255,0,0) 70.71%),linear-gradient(336deg, rgba(0,0,255,.8), rgba(0,0,255,0) 70.71%)",
  });
  return (
    <div className="w-full flex flex-wrap justify-between">
      <BeatifulBar className="w-full h-2 "></BeatifulBar>
      <div className="w-full h-4 bg-gradient-to-r from-indigo-500"></div>
      <Card props={education} />
      <Card props={experience} />
      <Card props={skills} />
    </div>
  );
}

export { Introduction };
