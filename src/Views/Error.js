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
              Thank you for visiting Hidden page. I am working on making easter
              eggs.
            </Typography>
            <Typography variant="h5" component="div"></Typography>
            <Typography variant="body2">
              <br />
              {'"pinkishincoloragain"'}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small" onClick={() => nav("/")}>
              Go home
            </Button>
          </CardActions>
        </Card>
      </div>
    </>
  );
}
