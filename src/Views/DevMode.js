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

  // useEffect(() => {
  //   init();
  // }, [init]);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.scrollIntoView();
      inputRef.current.focus({ preventScroll: true });
    }
  }, [history]);

  return (
    <>
      <div
        className="text-light-foreground dark:text-dark-foreground min-w-max text-xs md:min-w-full md:text-base"
        onClick={onClickAnywhere}
      >
        <div className="bg-light-background dark:bg-dark-background w-full h-full p-2">
          <div className="p-8 overflow-hidden h-full border-2 rounded border-light-yellow dark:border-dark-yellow">
            <div ref={containerRef} className="overflow-y-auto h-full">
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
          </div>
        </div>
      </div>
    </>
  );
};

export default DevMode;
