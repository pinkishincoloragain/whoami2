import * as React from "react";
import { useSelector, useDispatch } from "react-redux";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";

export default function Admin(props) {
  const darkMode = useSelector((state) => state.mode.value);
  const bull = (
    <Box
      component="span"
      sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
    >
      •
    </Box>
  );

  return (
    <div
      style={{
        display: "flex",
        margin: "auto",
        width: "100%",
        height: "100%",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <Card sx={{ width: "50vw" }}>
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            Go to admin page
          </Typography>
          <Typography variant="h5" component="div">
            {bull}{bull}
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            fish
          </Typography>
          <Typography variant="body2">
            well meaning and kindly.
            <br />
          </Typography>
        </CardContent>
        <CardActions>
          <Link to="/">
            <Button size="small">Learn More</Button>
          </Link>
        </CardActions>
      </Card>
    </div>
  );
}
