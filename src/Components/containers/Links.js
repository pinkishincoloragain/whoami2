import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import { Typography } from "@mui/material";
import { useStyles } from "../styles/Styles";
import { styled } from "@mui/styles";

export default function Links(props) {
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });
  const classes = useStyles();
  const btnName = "LINKS";

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const ListItem = styled(ListItem)({
    height: "2.5vh",
    width: "max(8%,150px)",
    marginTop: "2vh",
    marginBottom: "2vh",
  });

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
      style={{ backgroundColor: "transparent" }}
    >
      <List>
        <ListItem
          button
          key="Github"
          sx={{}}
          style={{ backgroundColor: "grey", overflow: "visible" }}
          onClick={() => window.open("https://github.com/pinkishincoloragain")}
        >
          {/* <ListItemText primary="Github" /> */}
          <Typography variant="h4">Github</Typography>
        </ListItem>
        <ListItem
          button
          key="Linkedin"
          style={{ backgroundColor: "#2867B2", overflow: "visible" }}
          onClick={() => {
            window.open("https://www.linkedin.com/in/myungbin-son-998881141/");
          }}
        >
          <Typography variant="h4">Linkedin</Typography>
        </ListItem>
        <ListItem
          button
          key="Youtube"
          style={{ backgroundColor: "#FF0000", overflow: "visible" }}
          onClick={() => {
            window.open(
              "https://www.youtube.com/channel/UCXj_KgsEq4wuVy8d9Z7TxNg"
            );
          }}
        >
          <Typography variant="h4">Youtube</Typography>
        </ListItem>
        <ListItem
          button
          key="Instagram"
          style={{ backgroundColor: "#FFDC80", overflow: "visible" }}
          onClick={() => {
            window.open("https://www.instagram.com/pinkishincoloragain/");
          }}
        >
          <Typography variant="h4">Instagram</Typography>
        </ListItem>
        <Divider />
        <ListItem
          button
          key="Yeonha"
          sx={{
            height: "1.5vh",
            width: "max(8%,150px)",
            marginTop: "4vh",
            marginBottom: "2vh",
          }}
          style={{ backgroundColor: "black", overflow: "visible" }}
          className={classes.linkBtn}
          onClick={() => {
            window.open("https://www.instagram.com/pinkishincoloragain/");
          }}
        >
          <Typography variant="h4">연하장</Typography>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <div>
      {["right"].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)}>
            <Typography
              variant="h5"
              component="div"
              gutterBottom
              margin="auto"
              color={props.color}
              className={classes.button2}
              paddingRight="12%"
            >
              {btnName}
            </Typography>
          </Button>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            PaperProps={{
              sx: {
                backgroundColor: "transparent",
                backdropFilter: "blur(10px)",
              },
            }}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}
