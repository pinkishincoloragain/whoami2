import * as React from "react";
import { commandExists } from "../utils/commandExists";
import { shell } from "../utils/shell";
import { handleTabCompletion } from "../utils/tabCompletion";
import { Directory } from "./Directory";
import styled from "styled-components";

const PromptLabel = styled(`label`)({
	htmlFor: "prompt",
	flexShrink: "initial",
});

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
	modeOn,
}) => {
	React.useEffect(() => {
		if (modeOn) {
			console.log(modeOn);
			inputRef.current.focus();
			inputRef.current.setAttribute("autofocus", "true");
		}
	});

	const onSubmit = async e => {
		const commands = [history]
			.map(({ command }) => command)
			.filter(command => command);

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
		<div className="flex-row">
			<PromptLabel>
				<Directory />
				<input
					ref={inputRef}
					id="prompt"
					type="text"
					className={`focus:outline-none flex-grow w-8/12 ${
						commandExists(command) || command === ""
							? "text-dark-green"
							: "text-dark-red"
					}`}
					value={command}
					onChange={onChange}
					autoFocus={command !== ""}
					onKeyDown={onSubmit}
					autoComplete="off"
					spellCheck="false"
					style={{ backgroundColor: "inherit" }}
				/>
			</PromptLabel>
		</div>
	);
};

export default Input;
