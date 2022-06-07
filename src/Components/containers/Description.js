import { useStyles } from "./Styles";
import { useState, useEffect } from "react";
import reactIcon from "../../assets/icons/react.webp";
import pythonIcon from "../../assets/icons/python.webp";
import { useDispatch, useSelector } from "react-redux";
import { RedButton } from "../MyButton";
import { BlackContainer, RedContainer } from "./MyContainer";
import InsertEmoticonIcon from "@mui/icons-material/InsertEmoticon";
import styled from "@emotion/styled";

const DescBtn = (props) => {
  let classes = useStyles();
  const Image = styled(`img`)({
    width: "1.5rem",
    height: "1.5rem",
    marginLeft: "4px",
    marginTop: "4px",
  });

  const BtnWrapper = styled(`div`)({
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  });

  return (
    <BtnWrapper>
      <Image src={props.src} />
    </BtnWrapper>
  );
};

const DescWrapper = styled(`div`)({
  paddingTop: "2rem",
  fontSize: "2rem",
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",
  fontWeight: 300,
  alignItems: "center",
  // justifyContent: "center",
  lineHeight: "1.5",
  backgroundColor: "inherit",
  color: "inherit",
});

export default function Description(props) {
  const darkMode = useSelector((state) => state.mode.value);
  const width = props.width;

  return (
    <DescWrapper className="superBold">
      Myungbin Son
      Sustainable developer. I do
      <DescBtn src={reactIcon} />
      <DescBtn src={pythonIcon} />
      &nbsp;
    </DescWrapper>
  );
}
