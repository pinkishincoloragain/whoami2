import youtubeIcn from "../assets/youtube_icn.png";
import githubIcn from "../assets/github_icn.png";
import linkedinIcn from "../assets/linkedin_icn.png";
import instagramIcn from "../assets/instagram_icn.png";
import { ImageList } from "@mui/material";

export default function IcnBar() {
  return (
    <div>
      <ImageList cols={4} rowHeight={10}>
        <img src={youtubeIcn} width={30} alt="youtube" />
        <img src={githubIcn} width={30} alt="github" />
        <img src={linkedinIcn} width={30} alt="linkedin" />
        <img src={instagramIcn} width={30} alt="instagram" />
      </ImageList>
    </div>
  );
}
