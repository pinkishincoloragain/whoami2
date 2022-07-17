// Inspired by https://liveterm.vercel.app/,
// translated to js by pinkishincoloragain
import { useState, useEffect, useRef } from "react";
import "../developer.css";
import { Input } from "../Components/devmode/input";
import { useHistory } from "../Components/history/hook";
import { banner } from "../Components/utils/bin";
import { History } from "../Components/history/History";
import styled from "@emotion/styled";

const DevMode = () => {
  const inputRef = useRef(null);
  const onClickAnywhere = () => {
    // inputRef.current.focus();
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

  const [devMode, setDevMode] = useState(false);

  // const init = useCallback(() => setHistory(banner()));

  useEffect(() => {
    setHistory(banner());
  }, []);

  useEffect(() => {
    if (inputRef.current) {
      // inputRef.current.scrollIntoView();
      inputRef.current.focus({ preventScroll: true });
    }
  }, [history]);

  const DevModeWrapper = styled(`div`)({
    // width: "80vw",
    height: "50vh",
    overflowY: "scroll",
  });

  return (
    <DevModeWrapper
      ref={containerRef}
      onClick={onClickAnywhere}
      className="w-full font-mono mt-4 ml-2"
    >
      <History history={history} />
      {devMode ? (
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
      ) : (
        <button onClick={setDevMode(!devMode)}>
          Click here to start devmode
        </button>
      )}
    </DevModeWrapper>
  );
};

export default DevMode;
