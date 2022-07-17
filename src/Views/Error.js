import { Card } from "@mui/material";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";

export default function Error() {
  let nav = useNavigate();

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
