import { useState } from "react";

export const useHistory = () => {
  const [history, setHistory] = useState([]);
  const [command, setCommand] = useState("");
  const [lastCommandIndex, setLastCommandIndex] = useState(0);

  return {
    history,
    command,
    lastCommandIndex,
    setHistory: (value) =>
      setHistory([
        ...history,
        {
          id: history.length,
          date: new Date(),
          command,
          output: value,
        },
      ]),
    setCommand,
    setLastCommandIndex,
    clearHistory: () => setHistory([]),
  };
};
