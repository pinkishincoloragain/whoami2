import github from "../../assets/icons/github.png";
import linkedin from "../../assets/icons/linkedin.png";
import instagram from "../../assets/icons/instagram.png";
import youtube from "../../assets/icons/youtube.png";
import { Typography } from "@mui/material";
import Tooltip, { tooltipClasses } from "@mui/material/Tooltip";
import { useSelector } from "react-redux";

import { useStyles } from "../styles/Styles";

export default function CustomIcon(props) {
  const classes = useStyles();
  const darkMode = useSelector((state) => state.mode.value);

  const handleGithub = () => {
    window.open("https://www.github.com/pinkishincoloragain", "_blank");
  };
  const handleLinkedin = () => {
    window.open(
      "https://www.linkedin.com/in/myungbin-son-998881141/",
      "_blank"
    );
  };
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
      <Tooltip
        arrow
        placement="right"
        title={<Typography fontSize={16}>Github</Typography>}
      >
        <img
          src={github}
          alt="github"
          className={classes.icon}
          onClick={handleGithub}
        />
      </Tooltip>
      <Tooltip
        arrow
        placement="right"
        title={<Typography fontSize={16}>Linkedin</Typography>}
      >
        <img
          src={linkedin}
          alt="linkedin"
          className={classes.icon}
          onClick={handleLinkedin}
        />
      </Tooltip>
      <Tooltip
        arrow
        placement="right"
        title={<Typography fontSize={16}>Instagram</Typography>}
      >
        <img
          src={instagram}
          alt="instagram"
          className={classes.icon}
          onClick={handleInstagram}
        />
      </Tooltip>
      <Tooltip
        arrow
        placement="right"
        title={<Typography fontSize={16}>Youtube</Typography>}
      >
        <img
          src={youtube}
          alt="youtube"
          className={classes.icon}
          onClick={handleYoutube}
        />
      </Tooltip>
    </div>
  );
}
