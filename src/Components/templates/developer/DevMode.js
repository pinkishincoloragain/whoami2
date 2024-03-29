// Inspired by https://liveterm.vercel.app/,

import { useState, useRef, useEffect } from "react";
import "./developer.css";
import Input from "./devmode/input";

import { banner } from "./utils/bin";
import History from "./devmode/history/History";
import { useHistory } from "./devmode/history/useHistory";
import styled from "styled-components";

const DevModeWrapper = styled(`div`)({
  // width: "80vw",
  // height: "50vh",
  overflowY: "scroll",
});

const DevMode = () => {
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

  // const init = useCallback(() => setHistory(banner()));

  useEffect(() => {
    setHistory(banner());
  }, []);

  const [devModeOn, setDevModeOn] = useState(false);

  useEffect(() => {
    if (inputRef.current) {
      // inputRef.current.scrollIntoView();
      inputRef.current.focus({ preventScroll: true });
    }
  }, [history]);

  return (
    <DevModeWrapper ref={containerRef} onClick={onClickAnywhere} className='w-9/12 font-mono ml-2'>
      <History history={history} />
      <Input
        modeOn={devModeOn}
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
    </DevModeWrapper>
  );
};

export default DevMode;
