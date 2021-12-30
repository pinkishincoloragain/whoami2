import Waves from "./Components/objects/Waves";
import { Card, Paper } from "@mui/material";
import { useSelector } from "react-redux";
import { display } from "@mui/system";
import Box from "@mui/material/Box";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Error() {
  const darkMode = useSelector((state) => state.mode.value);
  let nav = useNavigate();

  const [clicked, setClicked] = useState(false);

  return (
    <>
      <div
        style={{
          width: "100vw",
          height: "40vh",
          position: "absolute",
          display: "flex",
          margin: "auto",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Card sx={{ minWidth: 275 }}>
          <CardContent>
            <Typography
              sx={{ fontSize: 14 }}
              color="text.secondary"
              gutterBottom
            >
              Thank you for visiting Hidden page
            </Typography>
            <Typography variant="h5" component="div"></Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              and fuck you if you are a hacker.
            </Typography>
            <Typography variant="body2">
              well meaning and kindly.
              <br />
              {'"a benevolent smile"'}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small" onClick={() => nav("/")}>
              Learn More
            </Button>
          </CardActions>
        </Card>
      </div>
      <Waves />
    </>
  );
}
