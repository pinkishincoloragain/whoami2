import reactIcon from "../../assets/icons/react.webp";
import pythonIcon from "../../assets/icons/python.webp";
import styled from "@emotion/styled";

const DescBtn = (props) => {
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
  return (
    <DescWrapper className="superBold">
      {/* Sustainable developer. I do */}
      {/* <DescBtn src={reactIcon} />
      <DescBtn src={pythonIcon} /> */}
      &nbsp;
    </DescWrapper>
  );
}
