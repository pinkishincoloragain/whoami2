import React from "react";
import { commandExists } from "./utils/commandExists";
import { shell } from "./utils/shell";
import { handleTabCompletion } from "./utils/tabCompletion";
import { Ps1 } from "./Ps1";

export const Input = ({
  inputRef,
  containerRef,
  command,
  history,
  lastCommandIndex,
  setCommand,
  setHistory,
  setLastCommandIndex,
  clearHistory,
}) => {
  const onSubmit = async (e) => {
    const commands = [history]
      .map(({ command }) => command)
      .filter((command) => command);

    if (e.key === "c" && e.ctrlKey) {
      e.preventDefault();
      setCommand("");
      setHistory("");
      setLastCommandIndex(0);
    }

    if (e.key === "l" && e.ctrlKey) {
      e.preventDefault();
      clearHistory();
    }

    if (e.key === "Tab") {
      e.preventDefault();
      handleTabCompletion(command, setCommand);
    }

    if (e.key === "Enter" || e.code === "13") {
      e.preventDefault();
      setLastCommandIndex(0);
      await shell(command, setHistory, clearHistory, setCommand);
      containerRef.current.scrollTo(0, containerRef.current.scrollHeight);
    }

    if (e.key === "ArrowUp") {
      e.preventDefault();
      if (!commands.length) {
        return;
      }
      const index = lastCommandIndex + 1;
      if (index <= commands.length) {
        setLastCommandIndex(index);
        setCommand(commands[commands.length - index]);
      }
    }

    if (e.key === "ArrowDown") {
      e.preventDefault();
      if (!commands.length) {
        return;
      }
      const index = lastCommandIndex - 1;
      if (index > 0) {
        setLastCommandIndex(index);
        setCommand(commands[commands.length - index]);
      } else {
        setLastCommandIndex(0);
        setCommand("");
      }
    }
  };

  const onChange = ({ target: { value } }) => {
    setCommand(value);
  };

  return (
    <div className="flex flex-row space-x-2">
      <label htmlFor="prompt" className="flex-shrink">
        <Ps1 />
      </label>

      <input
        ref={inputRef}
        id="prompt"
        type="text"
        className={`bg-light-background dark:bg-dark-background focus:outline-none flex-grow ${
          commandExists(command) || command === ""
            ? "text-dark-green"
            : "text-dark-red"
        }`}
        value={command}
        onChange={onChange}
        autoFocus
        onKeyDown={onSubmit}
        autoComplete="off"
        spellCheck="false"
      />
    </div>
  );
};

export default Input;
