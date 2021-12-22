import react from "react";
import { useEffect, useState } from "react";
import * as THREE from "three";
import Waves from "../Components/Waves";
import Boxes from "../Components/Boxes";
import TemporaryDrawer from "../Components/TemporaryDrawer";
import TemporaryHistory from "../Components/TemporaryHistory";
import Typography from "@mui/material/Typography";
import {
  CardHeader,
  Card,
  CardActions,
  Paper,
  Box,
  Fade,
  Collapse,
} from "@mui/material";
import {
  FormControl,
  FormLabel,
  FormControlLabel,
  RadioGroup,
  Radio,
} from "@mui/material";

function Landing() {
  const [checked, setChecked] = useState(false);

  const handleChange = () => {
    setChecked((prev) => !prev);
  };

  const icon = (
    <Paper sx={{ m: 1 }} elevation={4} style={{ padding: "1vh" }}>
      <Typography variant="h5" component="div" gutterBottom>
        Education
      </Typography>
      <Typography variant="h6" component="div" gutterBottom>
        - Kyungpook Nat'l University
      </Typography>
      <Typography variant="h6" component="div" gutterBottom>
        - Technological University Dublin
      </Typography>
    </Paper>
  );

  return (
    <div>
      <div
        style={{
          zIndex: 1,
          position: "absolute",
          display: "flex",
          flexDirection: "column",
          marginLeft: "1vh",
        }}
      >
        <Typography variant="h1" component="div" gutterBottom>
          PINKISHINCOLORAGAIN
        </Typography>

        <TemporaryDrawer />
        <TemporaryHistory />
        {/* <Box sx={{ height: 180 }}>
          <FormControlLabel
            control={<Switch checked={checked} onChange={handleChange} />}
            label="Show"
          />
          <Box sx={{ display: "flex" }}>
            <Fade in={checked}>{icon}</Fade>
          </Box>
        </Box> */}
      </div>
      <Boxes />
      {/* <Waves /> */}
    </div>
  );
}

export default Landing;
