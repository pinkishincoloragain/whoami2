// Inspired by https://liveterm.vercel.app/,
// translated to js by pinkishincoloragain
import { useState, useEffect, useRef, useCallback } from "react";
import "../developer.css";
import config from "../config.json";
import { Input } from "../Components_devmode/input";
import { useHistory } from "../Components_devmode/history/hook";
import { banner } from "../Components_devmode/utils/bin";
import { History } from "../Components_devmode/history/History";

const DevMode = ({}) => {
  const inputRef = useRef(null);

  const onClickAnywhere = () => {
    inputRef.current.focus();
  };
  const containerRef = useRef(null);
  const {
    history,
    command,
    lastCommandIndex,
    setCommand,
    setHistory,
    clearHistory,
    setLastCommandIndex,
  } = useHistory([]);

  const init = useCallback(() => setHistory(banner()), []);

  useEffect(() => {
    init();
  }, [init]);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.scrollIntoView();
      inputRef.current.focus({ preventScroll: true });
    }
  }, [history]);

  return (
    <div ref={containerRef}>
      <History history={history} />
      <Input
        inputRef={inputRef}
        containerRef={containerRef}
        command={command}
        history={history}
        lastCommandIndex={lastCommandIndex}
        setCommand={setCommand}
        setHistory={setHistory}
        setLastCommandIndex={setLastCommandIndex}
        clearHistory={clearHistory}
      />
    </div>
  );
};

export default DevMode;
