import { useState, useEffect } from "react";
import { Button } from "@mui/material";

export default function Login() {
  const [time, setTime] = useState(null);
  setInterval(() => setTime(Date.toLocaleString()), 1000);

  return (
    <div style={{ display: "flex", margin: "auto", alignItems: "center" }}>
      <Button>Login</Button>
    </div>
  );
}
