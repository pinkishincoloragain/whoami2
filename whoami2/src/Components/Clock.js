import { useState, useEffect } from "react";

export default function Cloak() {
  const [time, setTime] = useState(null);
  setInterval(() => setTime(Date.toLocaleString()), 1000);

  return (
    <div>
      <div>{time}</div>
    </div>
  );
}
