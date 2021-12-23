import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import { Container, Typography } from "@mui/material";
import { keyframes } from "@mui/system";

export default function TemporaryHistory() {
  const btnName = "History";
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const [eduOpen, setEduOpen] = React.useState(false);

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const education = () => {
    return (
      <>
        <ListItem
          sx={{ animation: `${effect} 0.2s ease`, transition: "0.2s ease" }}
        >
          <List>
            <ListItem>
              <Typography variant="h6">Kyungpook Nat'l University</Typography>
            </ListItem>
            <ListItem>
              <Typography variant="h6">
                Technological University Dublin
              </Typography>
            </ListItem>
          </List>
        </ListItem>
        {/* 
        <ListItem>
          <Typography variant="h6">Technological University Dublin</Typography>
        </ListItem> */}
      </>
    );
  };

  const effect = keyframes`
  from {
    transform: scaleY(0.3);
  }
  to {
    transform: scaleY(1);
  }
`;

  const list = (anchor) => (
    <Box
      sx={{
        width: anchor === "top" || anchor === "bottom" ? "auto" : "60vw",
      }}
      role="presentation"
      // onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
      style={{ backgroundColor: "transparent" }}
    >
      <List>
        <ListItem
          button
          key="Education"
          sx={{
            height: "1.5vh",
            width: "max(8vw,150px)",
            marginTop: "2vh",
            marginBottom: "2vh",
          }}
          style={{ backgroundColor: "grey", overflow: "visible" }}
          onClick={() => setEduOpen(!eduOpen)}
        >
          <Typography variant="h4">Education</Typography>
        </ListItem>
        {eduOpen ? education() : null}
        <ListItem
          button
          key="Experience"
          sx={{
            height: "1.5vh",
            width: "max(8vw,150px)",
            marginTop: "4vh",
            marginBottom: "2vh",
          }}
          style={{ backgroundColor: "#2867B2", overflow: "visible" }}
        >
          <Typography variant="h4">Experience</Typography>
        </ListItem>
        <ListItem
          button
          key="Skills"
          sx={{
            height: "1.5vh",
            width: "max(8vw,150px)",
            marginTop: "4vh",
            marginBottom: "2vh",
          }}
          style={{ backgroundColor: "#FF0000", overflow: "visible" }}
        >
          <Typography variant="h4">Skills</Typography>
        </ListItem>
        <ListItem
          button
          key="Projects"
          sx={{
            height: "1.5vh",
            width: "max(8vw,150px)",
            marginTop: "4vh",
            marginBottom: "2vh",
          }}
          style={{ backgroundColor: "#FFDC80", overflow: "visible" }}
        >
          <Typography variant="h4">Projects</Typography>
        </ListItem>
        <Divider />
      </List>
    </Box>
  );

  return (
    <div>
      {["right"].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)}>
            <Typography variant="h4" component="div" gutterBottom margin="auto">
              {btnName}
            </Typography>
          </Button>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}
