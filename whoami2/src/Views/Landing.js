import react from "react";
import { useEffect, useState } from "react";
import * as THREE from "three";
import Boxes from "../Components/Boxes";
import Header from "../Components/Header";
import { CardHeader } from "@mui/material";
import TemporaryDrawer from "../Components/TemporaryDrawer";

function Landing() {
  return (
    <div>
      <Boxes />
      <div style={{ zIndex: 1, position: "absolute" }}>
        <CardHeader title="PINKISHINCOLORAGAIN"
        subheader="Daegu, Korea" />
        <TemporaryDrawer />
      </div>
    </div>
  );
}

export default Landing;
