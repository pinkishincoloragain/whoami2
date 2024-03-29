import * as bin from "./bin";

export const shell = async (command, setHistory, clearHistory, setCommand) => {
  const args = command.split(" ");
  args[0] = args[0].toLowerCase();

  if (args[0] === "clear") {
    clearHistory();
  } else if (command === "") {
    setHistory("");
  } else if (Object.keys(bin).indexOf(args[0]) === -1) {
    setHistory(`pinkish: command not found: ${args[0]}. Try 'help' to get started.`);
  } else {
    const output = await bin[args[0]](args.slice(1));
    setHistory(output);
  }

  setCommand("");
};
