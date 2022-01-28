import github from "../../assets/github.png";
// import instagram from "./assets/instagram.png";
import SvgIcon from "@mui/material/SvgIcon";

export default function CustomIcon(props) {
  const icn = () => {
    switch (props.image) {
      case "github":
        return github;
    }
  };

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        alignContent: "center",
      }}
    >
      <SvgIcon/>
    </div>
  );
}
