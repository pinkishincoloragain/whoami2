// List of commands that do not require API calls

import * as bin from "./index";
import config from "../../../config.json";

// Help
export const help = async (args) => {
  const commands = Object.keys(bin).sort().join(", ");
  var c = "";
  for (let i = 1; i <= Object.keys(bin).sort().length; i++) {
    if (i % 7 === 0) {
      c += Object.keys(bin).sort()[i - 1] + "\n";
    } else {
      c += Object.keys(bin).sort()[i - 1] + " ";
    }
  }
  return `Welcome! Here are all the available commands:
\n${c}\n
[tab]: trigger completion.
[ctrl+l]/clear: clear terminal.\n
Type 'sumfetch' to display summary.
`;
};

// Redirection
export const repo = async (args) => {
  window.open(`${config.repo}`);
  return "Opening Github repository...";
};

// About
export const about = async (args) => {
  return `Hi, I am ${config.name}. 
Welcome to my website!
More about me:
'sumfetch' - short summary.
'resume' - my latest resume.
'readme' - my github readme.`;
};

export const resume = async (args) => {
  window.open(`${config.resume_url}`);
  return "Opening resume...";
};

// Contact
export const email = async (args) => {
  window.open(`mailto:${config.email}`);
  return `Opening mailto:${config.email}...`;
};

export const github = async (args) => {
  window.open(`https://github.com/${config.social.github}/`);

  return "Opening github...";
};

export const linkedin = async (args) => {
  window.open(`https://www.linkedin.com/in/${config.social.linkedin}/`);

  return "Opening linkedin...";
};

// Search
export const google = async (args) => {
  window.open(`https://google.com/search?q=${args.join(" ")}`);
  return `Searching google for ${args.join(" ")}...`;
};

export const reddit = async (args) => {
  window.open(`https://www.reddit.com/search/?q=${args.join(" ")}`);
  return `Searching reddit for ${args.join(" ")}...`;
};

export const naver = async (args) => {
  window.open(
    `https://search.naver.com/search.naver?where=nexearch&sm=top_hty&fbm=1&ie=utf8&query=${args.join(
      " "
    )}`
  );
  return `Searching reddit for ${args.join(" ")}...`;
};

// Typical linux commands
export const echo = async (args) => {
  return args.join(" ");
};

export const whoami = async (args) => {
  return `${config.ps1_username}`;
};

export const ls = async (args) => {
  return `a
bunch
of
fake
directories`;
};

export const cd = async (args) => {
  return `unfortunately, I am working on this.`;
};

export const date = async (args) => {
  return new Date().toString();
};

export const vi = async (args) => {
  return `You must be a developer`;
};

export const sudo = async (args) => {
  window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ", "_blank"); // ...I'm sorry
  return `Permission denied: with little power comes... no responsibility? `;
};

// Banner
export const banner = (args) => {
  return `Type 'help' to see the list of available commands.
Type 'sumfetch' to display summary.
Type 'repo' or click <u><a class="text-light-blue dark:text-dark-blue underline" href="${config.repo}" target="_blank">here</a></u> for the Github repository.
`;
};
