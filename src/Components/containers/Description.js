import { useStyles } from "./Styles";
import { useState, useEffect } from "react";
import reactIcon from "../../assets/icons/react.gif";
import pythonIcon from "../../assets/icons/python.gif";
import { useDispatch, useSelector } from "react-redux";
import { RedButton } from "../MyButton";
import { RedContainer } from "./MyContainer";
import InsertEmoticonIcon from "@mui/icons-material/InsertEmoticon";
import { styled } from "@mui/styles";

const DescBtn = (props) => {
  const Image = styled(`img`)({
    width: "min(3vh, 15rem)",
    height: "min(3vh, 15rem)",
    zIndex: "0",
    marginLeft: "4px",
  });
  const BtnName = styled(`div`)({
    zIndex: "2",
    fontWeight: 500,
    fontSize: "large",
  });
  return (
    <RedButton>
      <BtnName>{props.name}</BtnName>
      <Image src={props.src} />
    </RedButton>
  );
};

const DescWrapper = styled(`div`)({
  padding: "20px",
  alignItems: "center",
  justifyContent: "center",
  lineHeight: "1.5",
  backgroundColor: "inherit",
  color: "inherit",
});

export default function Description(props) {
  const darkMode = useSelector((state) => state.mode.value);
  const width = props.width;

  return (
    <RedContainer style={{ marginTop: "3vh" }}>
      <DescWrapper>
        I'm a creative software developer interested in &nbsp;
        <DescBtn name="FE development" src={reactIcon} />
        &nbsp;and&nbsp;
        <DescBtn name="Data analysis" src={pythonIcon} />
        &nbsp;
      </DescWrapper>
    </RedContainer>
  );
}
