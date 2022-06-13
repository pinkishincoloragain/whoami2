// Inspired by https://liveterm.vercel.app/,
// translated to js by pinkishincoloragain
import { useEffect, useRef, useCallback } from "react";
import "../developer.css";
import { Input } from "../Components/input";
import { useHistory } from "../Components/history/hook";
import { banner } from "../Components/utils/bin";
import { History } from "../Components/history/History";
import styled from "@emotion/styled";

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

  const DevModeWrapper = styled(`div`)({
    fontFamily: "monospace",
    fontSize: "1.2em",
    width: "80vw",
    height: "40vh",
    // marginTop: "10vh",
    marginBottom: "10vh",
    border: "1px solid white",
    overflowY: "scroll",
    padding: "20px",
  });

  const GraphicWrapper = styled(`div`)({
    // borderRadius: "20px",
    // boxShadow: "0px 2px 12px 1px #cfcfcf",
  });

  return (
    <DevModeWrapper ref={containerRef} onClick={onClickAnywhere}>
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
    </DevModeWrapper>
  );
};

export default DevMode;
