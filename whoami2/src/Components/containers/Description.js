import { useStyles } from "../styles/Styles";
import { Typography } from "@mui/material";

export default function Description() {
  const classes = useStyles();
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography fontSize="min(2vh, 15rem)">
          software developer with a passion for creating beautiful applications.
          I have a background in mathematics and computer science and I am
          currently pursuing a degree in computer science at the University of
          Waterloo.
        </Typography>
      </div>
    </>
  );
}
