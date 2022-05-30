// Inspired by https://liveterm.vercel.app/,
// translated to js by pinkishincoloragain
import { useState, useEffect } from "react";
import React from "react";
import "../developer.css";
import config from "../../config.json";
import { Input } from "../Components_devmode/input";
import { useHistory } from "../Components_devmode/history/hook";
import { History } from "../Components_devmode/history/History";
import { banner } from "../Components_devmode/utils/bin";

const App = ({ Component, pageProps }) => {
  const inputRef = React.useRef < HTMLInputElement > null;

  const onClickAnywhere = () => {
    inputRef.current.focus();
  };
  const containerRef = React.useRef(null);
  const {
    history,
    command,
    lastCommandIndex,
    setCommand,
    setHistory,
    clearHistory,
    setLastCommandIndex,
  } = useHistory([]);

  return (
    <>
      <div
        className="text-light-foreground dark:text-dark-foreground min-w-max text-xs md:min-w-full md:text-base"
        onClick={onClickAnywhere}
      >
        <div className="bg-light-background dark:bg-dark-background w-full h-full p-2"></div>
      </div>
    </>
  );
};

export default App;
