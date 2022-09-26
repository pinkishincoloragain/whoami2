import * as React from "react";

export const useHistory = () => {
	const [history, setHistory] = React.useState([]);
	const [command, setCommand] = React.useState("");
	const [lastCommandIndex, setLastCommandIndex] = React.useState(0);

	return {
		history,
		command,
		lastCommandIndex,
		setHistory: value =>
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
