import github from "../../assets/icons/github.png";
import linkedin from "../../assets/icons/linkedin.png";
import instagram from "../../assets/icons/instagram.png";
import youtube from "../../assets/icons/youtube.png";
import { Typography } from "@mui/material";
import LinkToolTip, { tooltipClasses } from "@mui/material/Tooltip";
import { useSelector } from "react-redux";

import { useStyles } from "../styles/Styles";
import styled from "@emotion/styled";

export default function CustomIcon(props) {
  const classes = useStyles();
  const darkMode = useSelector((state) => state.mode.value);

  const LinkToolTip = styled({ Tooltip: LinkToolTip })((theme) => {
    return {
      ...tooltipClasses(theme),
      arrow,
      placement: "right",
      backgroundColor: darkMode ? "#1b1b1b" : "#ffffff",
      color: darkMode ? "#ffffff" : "#1b1b1b",
    };
  });

  const IconImage = styled(`img`)({
    width: "32px",
    marginTop: "2vh",
    "&:hover": {
      cursor: "pointer",
      filter: "sephia(100%)",
    },
  });

  const handleGithub = () =>
    window.open("https://www.github.com/pinkishincoloragain", "_blank");

  const handleLinkedin = () =>
    window.open(
      "https://www.linkedin.com/in/myungbin-son-998881141/",
      "_blank"
    );
  const handleYoutube = () => {
    window.open(
      "https://www.youtube.com/channel/UCXj_KgsEq4wuVy8d9Z7TxNg",
      "_blank"
    );
  };
  const handleInstagram = () => {
    window.open("https://www.instagram.com/pinkishincoloragain/", "_blank");
  };

  return (
    <div className={classes.flexRow}>
      <LinkToolTip title={"Github"}>
        <IconImage src={github} alt="github" onClick={handleGithub} />
      </LinkToolTip>
      <LinkToolTip title={<Typography fontSize={16}>Linkedin</Typography>}>
        <IconImage src={linkedin} alt="linkedin" onClick={handleLinkedin} />
      </LinkToolTip>
      <LinkToolTip title={<Typography fontSize={16}>Instagram</Typography>}>
        <IconImage src={instagram} alt="instagram" onClick={handleInstagram} />
      </LinkToolTip>
      <LinkToolTip title={<Typography fontSize={16}>Youtube</Typography>}>
        <IconImage src={youtube} alt="youtube" onClick={handleYoutube} />
      </LinkToolTip>
    </div>
  );
}
