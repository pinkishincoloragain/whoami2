import { useStyles } from "../styles/Styles";
import { Link, Typography } from "@mui/material";
import reactIcon from "../../assets/icons/react.gif";
import { styled } from "@mui/material/styles";

export default function Description() {
  const classes = useStyles();

  const DescTypo = styled(Typography)(({ theme, color }) => ({
    ...theme.typography.body2,
    fontSize: "min(2vh, 15rem)",
    letterSpacing: "-0.3",
    lineHeight: "2",
  }));

  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          marginBottom: "5vh",
        }}
      >
        <DescTypo>
          Versatile and creative software developer.
          <br />
        </DescTypo>
        <div style={{ display: "flex", flexDirection: "row" }}>
          <DescTypo>Interested in&nbsp;</DescTypo>
          <DescTypo>FE</DescTypo>
          <img
            src={reactIcon}
            style={{
              //   paddingTop: "2px",
              width: "min(4vh, 15rem)",
              marginLeft: "max(-32px,-3.4vh)",
              zIndex: "-1",
            }}
          />
          <DescTypo>development.</DescTypo>
        </div>
        <DescTypo>
          <br />
          Currently in&nbsp;
          <a
            href="https://youtu.be/Gz-d3Y7pHe4"
            target="_blank"
            style={{ textDecoration: "none", color: "#0057D9" }}
          >
            Ireland.
          </a>
          <br />
          {/* </Typography> */}
        </DescTypo>
      </div>
    </>
  );
}
