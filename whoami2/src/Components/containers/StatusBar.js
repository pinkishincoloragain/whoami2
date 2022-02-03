import Status from "./Status";
import { Grid } from "@mui/material";
import Introduction from "../../Views/Introduction";
import BlogBtn from "../buttons/BlogBtn";
import InfoBtn from "../buttons/InfoBtn";
import ProjectBtn from "../buttons/ProjectBtn";

export default function StatusBar() {
  return (
    <>
      <div
        data-aos="zoom-in"
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          opacity: "1",
        }}
      >
        <Status name="Home" />
        <Status name="Introduction" />
        <Status name="Projects" />
        <Status name="Blog" />
      </div>
    </>
  );
}
