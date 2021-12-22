import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import github_icn from "../assets/github_icn.png";
import youtube_icn from "../assets/youtube_icn.png";

export default function TemporaryDrawer() {
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const btnName = "SiteMap";

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <ListItem
          button
          key="Github"
          sx={{ height: "6vh", width: "1vw" }}
          style={{ backgroundColor: "grey" }}
        >
          <ListItemText primary="Github" />
        </ListItem>
        <ListItem
          button
          key="Youtube"
          sx={{ height: "6vh", width: "1vw" }}
          style={{ backgroundColor: "#FF0000" }}
        >
          <ListItemText primary="Youtube" />
        </ListItem>
        <ListItem button key="Github" sx={{ height: "6vh", width: "1vw" }}>
          <ListItemText primary="Github" />
        </ListItem>
        <ListItem button key="Github" sx={{ height: "6vh", width: "1vw" }}>
          <ListItemText primary="Github" />
        </ListItem>
        <Divider />
      </List>
    </Box>
  );

  return (
    <div>
      {["right"].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)}>{btnName}</Button>
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
