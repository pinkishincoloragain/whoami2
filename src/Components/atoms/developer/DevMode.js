// Inspired by https://liveterm.vercel.app/,

import * as React from "react";
import "./developer.css";
import Input from "./devmode/input";
import { useHistory } from "../../../hooks/hook";
import { banner } from "./utils/bin";
import History from "../../history/History";
import styled from "@emotion/styled";

const DevMode = () => {
	const inputRef = React.useRef(null);
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

	// const init = useCallback(() => setHistory(banner()));

	React.useEffect(() => {
		setHistory(banner());
	}, []);

	const [devModeOn, setDevModeOn] = React.useState(false);

	React.useEffect(() => {
		if (inputRef.current) {
			// inputRef.current.scrollIntoView();
			inputRef.current.focus({ preventScroll: true });
		}
	}, [history]);

	const DevModeWrapper = styled(`div`)({
		// width: "80vw",
		// height: "50vh",
		overflowY: "scroll",
	});

	return (
		<DevModeWrapper
			ref={containerRef}
			onClick={onClickAnywhere}
			className="w-9/12 font-mono ml-2"
		>
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
