import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import { Button, Collapse } from "@mui/material";
import { useSelector } from "react-redux";
import { Typography } from "@mui/material";
import { Project } from "./Items/Project";

const Year = (props) => {
  const [open, setOpen] = useState(true);
  const darkMode = useSelector((state) => state.mode.value);

  return (
    <React.Fragment key={props.year + "fragment"}>
      <Button
        onClick={() => setOpen(!open)}
        sx={{
          width: "10vw",
        }}
        key={props.year + "button"}
      >
        <Typography
          variant="h2"
          sx={{
            fontWeight: "200",
            margin: "0px",
            padding: "0px",
            fontSize: "5rem",
          }}
        >
          {props.year}
        </Typography>
      </Button>
      <Collapse in={open}>
        <Project
          title={"Lizard"}
          subtitle={`Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica`}
        />
      </Collapse>
    </React.Fragment>
  );
};

export default function Projects(props) {
  const [height, setHeight] = useState("10vh");
  let size = 0;

  const years = [2022, 2021, 2020, 2019, 2018, 2017];

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <Year year={2022} />
      <Year year={2022} />
      <Year year={2022} />
    </div>
  );
}
